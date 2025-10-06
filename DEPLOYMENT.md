# Deployment Guide

## GitHub Repository Secrets Setup

This project uses GitHub Repository Secrets for secure API key management.

### Required GitHub Secrets:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:

```
Name: CLOUDINARY_CLOUD_NAME
Value: ddwq9besf

Name: CLOUDINARY_API_KEY  
Value: 343687737374179

Name: CLOUDINARY_API_SECRET
Value: CWHgog17QusVl1BDjjbgLtAETE8

Name: PORT
Value: 3001
```

### Benefits of GitHub Secrets:
- ✅ Secure - keys are encrypted and never visible in logs
- ✅ Version controlled - secrets are tied to your repository
- ✅ Easy to manage - update secrets without code changes
- ✅ Works with GitHub Actions and Loveable deployment

## Important Security Notes:

- ✅ The `.env` file is already in `.gitignore` - it won't be pushed to GitHub
- ✅ API keys are now loaded from environment variables, not hardcoded
- ✅ The server will work with both local development and production deployment

## Server Setup:

The server (`server/index.js`) is configured to:
- Load environment variables from `.env` file (local development)
- Use environment variables from the hosting platform (production)
- Serve images from Cloudinary folders: `2am/wedding`, `2am/event`, `2am/indoor`, `2am/outdoor`, `2am/sport`

## Testing:

After deployment, test these endpoints:
- `https://your-domain.com/api/images?folder=wedding`
- `https://your-domain.com/api/images?folder=event`
- `https://your-domain.com/api/images?folder=indoor`
- `https://your-domain.com/api/images?folder=outdoor`
- `https://your-domain.com/api/images?folder=sport`
