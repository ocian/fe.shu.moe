#!/usr/bin/bash

pnpm build
cd dist
git init .
echo "fe.shu.moe" > CNAME
git add .
git commit -m 'github pages'
git remote add origin https://github.com/ocian/fe.shu.moe.git
git push origin main:gh-pages -f