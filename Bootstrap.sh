#!/bin/bash
set -e # Exit on any error

# Ensure important directories
mkdir -vp ./Repo
rm -rf ./Repo.tmp ./Output.tmp || true

# Export all tiddlers from the specific path of the HTML wiki
tiddlywiki \
	./Wiki-OcttKB \
	--verbose \
	--output ./Output.tmp \
	--save "[prefix[$:/OcttKB/Repo/]]"

# Move the exported folder to a better location
mv ./Output.tmp/\$_/OcttKB/Repo ./Repo.tmp

# Rename all extracted file to have a correct extension (remove forced .txt suffix)
# Don't filter for just .sh files anymore as we have other kinds of files
cd ./Repo.tmp
for File in *.txt
do
	mv "$File" "${File/.txt}"
done
cd ..

# Move the files of this repo to overwrite the extracted ones, then move everything back
# This is so, if present, files from the repo are preferred, if needed in case of emergency
mv ./Repo/* ./Repo.tmp/ || true
mv ./Repo.tmp/* ./Repo/

# Move everything to the working directory, ready for the next CI steps
mv ./Repo/* ./
chmod +x *.sh *.py || true
