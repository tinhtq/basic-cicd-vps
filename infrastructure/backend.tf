terraform {
  backend "s3" {
    bucket = "terraform-backend-572551282206"
    key    = "infrastructure/terraform.tfstate"
    region = "ap-south-2"
  }
}
