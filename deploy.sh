#!/bin/bash

# Exit on any error
set -e

# Store current branch
CURRENT_BRANCH=$(git branch --show-current)

# Safety check: make sure we're starting from main
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Error: Please run this script from the main branch"
  exit 1
fi

# Safety check: make sure dist folder exists
if [ ! -d "dist" ]; then
  echo "Error: dist folder not found. Run 'npm run build' first"
  exit 1
fi

# Switch to web branch
git checkout web

# Verify we're actually on web branch before deleting anything
if [ "$(git branch --show-current)" != "web" ]; then
  echo "Error: Failed to switch to web branch"
  git checkout "$CURRENT_BRANCH"
  exit 1
fi

# Remove old files (keep .git, .gitignore, node_modules)
find . -maxdepth 1 ! -name '.git' ! -name '.gitignore' ! -name 'node_modules' ! -name '.' -exec rm -rf {} +

# Copy dist contents from main to root
git checkout main -- dist
mv dist/* .
rm -rf dist

# Stage changes
git add -A
git commit -m "Deploy site update"

# Switch back to main
git checkout main

echo ""
echo "Done! Changes are staged on the web branch."
echo "Use GitHub Desktop to review and push."
