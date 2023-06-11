#!/bin/sh
TargetRepo="OcttKB"
git clone --depth 1 https://gitlab.com/octtspacc/$TargetRepo ./Repo-$TargetRepo
cd ./Repo-$TargetRepo
rm -rf ./Wiki-OcttKB
tiddlywiki \
	--verbose \
	--load ../public/index.html \
	--output ./Wiki-OcttKB \
	--savewikifolder ./Wiki-OcttKB
cd ./Wiki-OcttKB/tiddlers
mkdir -vp ../Normal ../System
mv \$__* ../System/
mv * ../Normal/
mv ../System ../Normal ./
cd ../..
git add .
git commit -m "OcttKB Cross-Repo Sync (HTML to Raw)"
git push
