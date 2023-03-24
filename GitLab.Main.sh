#!/bin/sh
sh ./OcttKB.EmptyDate.sh
sh ./SetupGitProfile.sh

tiddlywiki \
	./Wiki-OcttKB \
	--verbose \
	--output ./Output.tmp \
	--rendertiddler "$:/core/save/all" "index.html" "text/plain"

mkdir -vp ./public
cp -v ./Output.tmp/index.html ./public/index.html

CommitCheck="$(git log -1 --pretty=%B)"
CommitMsg0="OcttKB Cross-Repo Sync"
[ "$CommitCheck" != "$CommitMsg0 (HTML to Raw)" ] && [ "$CommitCheck" != "$CommitMsg0 (Raw to HTML)" ] && sh ./GitLab.CrossRepoSync.sh || true
