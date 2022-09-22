#!/bin/sh

URL="https://kb.octt.eu.org"

cd ./public

tiddlywiki \
	--load index.html \
	--output ./ \
	--rendertiddler $:/core/templates/static.template.css Style.css text/plain \
	--rendertiddler $:/core/templates/alltiddlers.template.html Static.html text/plain

wget -O "-1.html" "$URL" 2>/dev/null
wget -O "-2.html" "$URL/-1.html" 2>/dev/null
