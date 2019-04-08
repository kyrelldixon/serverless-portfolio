from zipfile import ZipFile
from io import BytesIO
from mimetypes import guess_type
from os import getenv
from boto3 import resource, client

def lambda_handler(event, context):
    S3_PORTFOLIO_BUCKET = getenv('S3_PORTFOLIO_BUCKET')
    S3_BUILD_BUCKET = getenv('S3_BUILD_BUCKET')
    S3_BUILD_ZIP = getenv('S3_BUILD_ZIP')
    SNS_TOPIC_ARN = getenv('SNS_TOPIC_ARN')
    
    try:
        job = event.get('CodePipeline.job')
        
        if job:
            print(job)
        
        s3 = resource('s3')
        sns = resource('sns')

        deploy_topic = sns.Topic(SNS_TOPIC_ARN)
        portfolio_bucket = s3.Bucket(S3_PORTFOLIO_BUCKET)
        build_bucket = s3.Bucket(S3_BUILD_BUCKET)
        
        portfolio_zip = BytesIO()
        build_bucket.download_fileobj(S3_BUILD_ZIP, portfolio_zip)
        
        with ZipFile(portfolio_zip) as zip_file:
            for nm in zip_file.namelist():
                obj = zip_file.open(nm)
                content_type = guess_type(nm)[0]
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': content_type})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print("Successful run")
        deploy_topic.publish(Message=f"Successful deploy!", Subject="Deploy Success")
        
        if job:
            codepipeline = client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
    except Exception as e:
        deploy_topic.publish(Message=f"Deploy failed. Reason: {e}", Subject="Deploy Failed")
        if job:
            codepipeline.put_job_failure_result(jobId=job["id"])
        raise

    return 'Run complete'