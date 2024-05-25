resource "aws_s3_bucket" "terraform_state" {
  bucket = "terraform-backend-${data.aws_caller_identity.current.account_id}"

  tags = {
    Name = "Terraform State Bucket"
  }
}

