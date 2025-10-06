# Deployment Test Guide

## Test your deployed app at: https://studio2am.lovable.app/

### 1. Health Check
```
https://studio2am.lovable.app/health
```
Should return: `{"ok": true, "timestamp": "...", "cloudinary_configured": true}`

### 2. Image API Endpoints
```
https://studio2am.lovable.app/api/images?folder=wedding&max=5
https://studio2am.lovable.app/api/images?folder=event&max=5
https://studio2am.lovable.app/api/images?folder=indoor&max=5
https://studio2am.lovable.app/api/images?folder=outdoor&max=5
https://studio2am.lovable.app/api/images?folder=sport&max=5
```

### 3. Test Endpoint (for debugging)
```
https://studio2am.lovable.app/api/test?folder=wedding
```

## What Should Happen:

1. **Cover images** should load (these use direct Cloudinary URLs)
2. **Gallery images** should load (these use the API endpoints)
3. **Console should show** the correct Loveable domain, not localhost

## If Images Still Don't Load:

1. Check browser console for errors
2. Verify the API endpoints return data
3. Make sure GitHub Secrets are set correctly
4. Check Loveable deployment logs
