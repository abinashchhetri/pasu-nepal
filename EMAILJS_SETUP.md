# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account

## Step 2: Create an Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID**

## Step 3: Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `subject` - Email subject
   - `{{message}}` - Message content
   - `to_email` - Recipient email (pawsunepal@gmail.com)

4. Set the recipient email to: **pawsunepal@gmail.com**
5. Copy your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" > "General"
2. Find "API Keys"
3. Copy your **Public Key**

## Step 5: Add to Environment Variables
Create a `.env.local` file in the root of your project with:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Restart Your Dev Server
After adding the environment variables, restart your Next.js dev server:
```bash
npm run dev
```

## Template Example
Your EmailJS template should look something like this:

**Subject:** `{{subject}}`

**Body:**
```
From: {{from_name}} ({{from_email}})

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Pawsu Nepal contact form.
```

