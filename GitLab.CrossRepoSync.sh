#!/bin/sh
TargetRepo="OcttKB.Raw"
git clone --depth 1 https://gitlab.com/octtspacc/$TargetRepo ./$TargetRepo
cd ./$TargetRepo
rm -rf ./Wiki
tiddlywiki \
	--verbose \
	--load ../public/index.html \
	--output ./Wiki \
	--savewikifolder ./Wiki
git add .
git commit -m "OcttKB Cross-Repo Sync (HTML to Raw)"
git push
