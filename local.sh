#!/bin/sh
set -e # Exit on any error
cd "$( dirname "$( realpath "$0" )" )"

pull(){
	git pull
}

push(){
	git add .
	git commit -m "Manual push $(date)"
	git push
}

deploy(){
	Path="$1"
	[ -n "$Path" ] || Path="/tmp/OcttKB-Deploy"
	echo "Local Deploy to: $Path"
	sleep 5
	rm -rf "$Path"
	cp -r . "$Path"
	cd "$Path"
	bash ./Bootstrap.sh
	bash ./Deploy.Main.sh
}

$@
