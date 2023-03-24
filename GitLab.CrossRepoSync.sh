#!/bin/sh
TargetRepo="OcttKB.Web"
git clone --depth 1 https://gitlab.com/octtspacc/$TargetRepo ./Repo-$TargetRepo
cd ./Repo-$TargetRepo
cp -v ../Output.tmp/index.html ./public/index.html
git add .
git commit -m "OcttKB Cross-Repo Sync (Raw to HTML)"
git push
