#!/bin/sh
TargetRepo="OcttKB.Web"
cd ./Wiki
tiddlywiki \
	--verbose \
	--output ./Output.tmp \
	--rendertiddler "$:/core/save/all" "index.html" "text/plain"
git clone --depth 1 https://gitlab.com/octtspacc/$TargetRepo ./$TargetRepo
cd ./$TargetRepo
cp -r ../Output.tmp/index.html ./public/index.html
git add .
git commit -m "OcttKB Cross-Repo Sync (Raw to HTML)"
git push
