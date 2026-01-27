#!/bin/bash

# Build the project first (uncomment if needed)
# npm run build

# Store current branch
CURRENT_BRANCH=$(git branch --show-current)

# Switch to web branch
git checkout web

# Remove old files (keep .git, .gitignore, node_modules)
find . -maxdepth 1 ! -name '.git' ! -name '.gitignore' ! -name 'node_modules' ! -name '.' -exec rm -rf {} +

# Copy dist contents to root
git checkout main -- dist
mv dist/* .
rm -rf dist

# Commit and push
git add -A
git commit -m "Deploy site update"
git push origin web

# Switch back to original branch
git checkout $CURRENT_BRANCH

echo "Deployed to web branch!"
