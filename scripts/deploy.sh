#!/bin/bash

COMMIT_MSG="${1:-new commit}"

echo "Adding all changes..."
git add -A  # stages everything, including deletions and modified files

echo "Committing with message: \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG" || echo "Nothing to commit"

echo "Ensuring branch is main..."
git branch -M main

echo "Adding remote (ignored if it already exists)..."
git remote add origin https://github.com/edensway/Dashboard.git 2>/dev/null || true

echo "Pushing..."
git push -u origin main
1
echo "Deploying..."
npm run deploy

echo "Done!"