from zipfile import ZipFile
from io import BytesIO
from mimetypes import guess_type
from os import getenv
from boto3 import resource

S3_PORTFOLIO_BUCKET = getenv('S3_PORTFOLIO_BUCKET')
S3_BUILD_BUCKET = getenv('S3_BUILD_BUCKET')
S3_BUILD_ZIP = getenv('S3_BUILD_ZIP')

s3 = resource('s3')

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
