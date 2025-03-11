# Taking the Cloud Resume Challenge

https://cloudresumechallenge.dev/docs/the-challenge/aws/

# Built Different
- Interactive vector knowledge base

# Step 1: Building a React App for my resume

- input pdf version to claude 3.7 sonnet to mock up react app
- develop with cursor

# Step 2: Deploy Static Website to AWS (S3)
https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html

- deployed static build in S3 (https://antonios-armonis.com/)
    - differences between static websites and dynamic web applications
    - cloudfront accesses the private S3 bucket
    - route53 maps the cf distro to my domain

# Step 3: Add React Component for visitor count
- add react component for VisitorCount
- integrate into App.js in the header.
- TODO modularize all components.