# Git Merge Conflict Demo

## Objective

Demonstrate merge conflict resolution in Git.

## Commands Used

```bash
git init
git branch GitWork
git checkout GitWork
git add .
git commit -m "Added hello.xml in GitWork"

git checkout main
git add .
git commit -m "Added hello.xml in main"

git merge GitWork
# Resolve conflict
git add hello.xml
git commit -m "Resolved merge conflict"

git add .gitignore
git commit -m "Added .gitignore"

git branch -d GitWork
git push origin main
```
