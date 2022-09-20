#!/bin/sh
cd ./public
tiddlywiki \
	--load index.html \
	--output ./ \
	--rendertiddler $:/core/templates/static.template.css Style.css text/plain \
	--rendertiddler $:/core/templates/alltiddlers.template.html Static.html text/plain
