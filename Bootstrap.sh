#!/bin/sh

# Export all tiddlers from the specific path of the HTML wiki
tiddlywiki \
	--verbose \
	--load ./public/index.html \
	--output ./Output.tmp \
	--save "[prefix[$:/OcttKB/Repo/]]"

# Move the exported folder to a better location
mv ./Output.tmp/\$_/OcttKB/Repo ./Repo.tmp

# Prepare the special files already present in the repo for the next step
cd ./Repo
for File in *.sh
do
	mv "$File" "$File.sh.txt.sh"
done
cd ..

# Rename all extracted scripts to have a correct extension
cd ./Repo.tmp
for File in *.sh.txt
do
	mv "$File" "$File.sh"
done
cd ..

# Move the files of this repo to overwrite the extracted ones, then move everything back
# This is so, if present, files from the repo are preferred, if needed in case of emergency
mv ./Repo/* ./Repo.tmp/
mv ./Repo.tmp/* ./Repo/

# Move everything to the working directory and on to the next step
mv ./Repo/* ./
chmod +x *.sh
./Main.sh.txt.sh
