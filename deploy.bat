@echo off
cd dist
echo > .nojekyll
git init
git checkout -B main
git add -A
git commit -m 'deploy'
git push -f git@github.com:tax1driver/stillfresh.git main:gh-pages