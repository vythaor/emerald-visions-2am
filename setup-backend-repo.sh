#!/bin/bash

echo "🚀 Setting up backend repository..."

# Create a new GitHub repository (you'll need to do this manually)
echo "📝 Step 1: Create a new GitHub repository called 'emerald-visions-backend'"
echo "   Go to: https://github.com/new"
echo "   Repository name: emerald-visions-backend"
echo "   Description: Backend server for Emerald Visions photography website"
echo "   Make it PUBLIC"
echo "   Don't initialize with README (we already have one)"
echo ""
echo "Press Enter when you've created the repository..."

# Wait for user input
read

# Initialize git in backend-server directory
cd backend-server
git init
git add .
git commit -m "Initial commit: Backend server setup"

# Add remote (you'll need to replace YOUR_USERNAME with your actual GitHub username)
echo "📝 Step 2: Replace YOUR_USERNAME with your actual GitHub username in the next command"
echo "   Then run: git remote add origin https://github.com/YOUR_USERNAME/emerald-visions-backend.git"
echo "   Then run: git push -u origin main"
echo ""
echo "Current directory: $(pwd)"
echo "Ready to push to GitHub!"
