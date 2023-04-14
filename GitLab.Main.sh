#!/bin/sh
. ./Src.*.sh || true
sh ./OcttKB.EmptyDate.sh || true

# Ensure important directories
rm -rf ./Output.tmp || true

# Build HTML TiddlyWiki
tiddlywiki \
	./Wiki-OcttKB \
	--verbose \
	--output ./Output.tmp \
	--rendertiddler "$:/core/save/all" "index.html" "text/plain"

mkdir -vp ./public
cp -v ./Output.tmp/index.html ./public/index.html
sh ./Main.sh

SetupGitProfile
TryCrossRepoSync
