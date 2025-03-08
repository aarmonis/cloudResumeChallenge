# Deploying Your React Resume to AWS S3

Based on your link to AWS S3 website hosting documentation, here are the steps to deploy your React resume to AWS S3:

## 1. Build Your React Application
First, you need to create a production build of your React application:

```bash
# Navigate to your project directory
cd frontend/resume

# Install dependencies if you haven't already
npm install

# Create a production build
npm run build
```

This will create a `build` folder containing optimized static files.

## 2. Set Up AWS S3 for Static Website Hosting

1. **Create an S3 bucket**:
   - Sign in to the AWS Management Console
   - Navigate to the S3 service
   - Click "Create bucket"
   - Choose a unique bucket name (e.g., `your-name-resume`)
   - Select a region close to your target audience
   - Uncheck "Block all public access" (since this is a public website)
   - Acknowledge the warning
   - Keep other settings as default and create the bucket

2. **Enable static website hosting**:
   - Select your newly created bucket
   - Go to the "Properties" tab
   - Scroll down to "Static website hosting"
   - Click "Edit"
   - Select "Enable"
   - Set "Index document" to `index.html`
   - Set "Error document" to `index.html` (for proper handling of client-side routing)
   - Save changes

3. **Configure bucket policy for public access**:
   - Go to the "Permissions" tab
   - Click on "Bucket policy"
   - Add the following policy (replace `your-bucket-name` with your actual bucket name):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```
   - Save the policy

## 3. Upload Your React Build Files

1. **Upload build files to S3**:
   - Go to the "Objects" tab in your bucket
   - Click "Upload"
   - Drag and drop all files from your React app's `build` directory or use "Add files"
   - Keep default settings and click "Upload"
   
   Alternatively, you can use the AWS CLI for uploading:
   ```bash
   aws s3 sync build/ s3://your-bucket-name
   ```

## 4. Access Your Website

1. **Find your website URL**:
   - Go to the "Properties" tab
   - Scroll down to "Static website hosting"
   - You'll see your website endpoint URL (e.g., `http://your-bucket-name.s3-website-us-east-1.amazonaws.com`)
   - Open this URL in your browser to see your deployed resume

## 5. Optional Enhancements

1. **Set up a custom domain** (requires Amazon Route 53 or another DNS provider):
   - Register a domain if you don't have one
   - Create a DNS record pointing to your S3 bucket endpoint
   
2. **Configure CloudFront for HTTPS and better performance**:
   - Create a CloudFront distribution pointing to your S3 bucket
   - Configure SSL certificate through AWS Certificate Manager
   - Update DNS settings to point to CloudFront instead of S3 directly

3. **Set up CI/CD pipeline** for automatic deployments:
   - Use GitHub Actions, AWS CodePipeline, or similar tools
   - Configure them to build and deploy your React app when you push changes

# Setting Up a Custom Domain for Your S3 Website

Here's how to set up a custom domain for your S3-hosted resume website using Amazon Route 53:

## Step 1: Register a Domain (if you don't already have one)

1. **Go to Amazon Route 53 in AWS Console**
   - Sign in to the AWS Management Console
   - Navigate to Route 53 service

2. **Register a new domain**
   - Click on "Registered domains" in the left sidebar
   - Click "Register Domain"
   - Search for your desired domain name (e.g., `antoniosarmonis.com`)
   - If available, select it and click "Add to cart"
   - Complete the registration process:
     - Fill in your contact information
     - Review and complete the purchase
   - Domain registration typically takes 1-2 days to complete

## Step 2: Create DNS Records to Point to Your S3 Website

1. **Create a hosted zone** (if not automatically created during registration)
   - In Route 53, go to "Hosted zones"
   - Click "Create hosted zone"
   - Enter your domain name (e.g., `antoniosarmonis.com`)
   - Keep "Type" as "Public hosted zone"
   - Click "Create"

2. **Create an A record with alias to S3**
   - Inside your hosted zone, click "Create record"
   - Keep the "Record name" field empty (for the root domain)
   - Choose "A - Routes traffic to an IPv4 address and some AWS resources" as the record type
   - Toggle "Alias" to "Yes"
   - Under "Route traffic to", select "Alias to S3 website endpoint"
   - Select your region
   - Choose your S3 bucket from the dropdown
   - Keep "Routing policy" as "Simple routing"
   - Click "Create records"

3. **Add a www subdomain** (optional but recommended)
   - Click "Create record" again
   - Enter "www" for the "Record name"
   - Choose "A - Routes traffic to an IPv4 address and some AWS resources"
   - Toggle "Alias" to "Yes"
   - Under "Route traffic to", you can either:
     - Point to the same S3 bucket endpoint
     - Create a second S3 bucket named `www.yourdomain.com` that redirects to your main bucket
   - Click "Create records"

## Step 3: Configure Your S3 Bucket (if needed)

Ensure your S3 bucket name matches your domain name exactly for the alias to work correctly:

1. If your bucket isn't already named after your domain (e.g., `antoniosarmonis.com`):
   - Create a new bucket with your domain name
   - Configure it for static website hosting
   - Copy all files from your old bucket
   - Update the bucket policy

2. If you're using a www subdomain that redirects:
   - Create a second bucket named `www.yourdomain.com`
   - Enable static website hosting on this bucket
   - Instead of hosting content, configure it to redirect all requests to your main domain

## Step 4: Wait for DNS Propagation

DNS changes can take time to propagate globally (anywhere from a few minutes to 48 hours). After setting up your DNS records, your domain should eventually point to your S3 website.

You can test if your domain is working by visiting it in a browser (e.g., `http://antoniosarmonis.com`).

## Alternative: Using a Third-Party Domain Registrar

If you prefer to use a different domain registrar (like GoDaddy, Namecheap, etc.):

1. Register your domain with that provider
2. In your registrar's DNS settings:
   - Create a CNAME record pointing `www` to your S3 website endpoint
   - For the root domain, check if your registrar supports ANAME/ALIAS records (not all do)
   - If not, you may need to use Route 53 for DNS management while keeping registration elsewhere

Would you like more information about any specific part of this process?