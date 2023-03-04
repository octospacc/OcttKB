#!/bin/sh
cd "$( dirname "$( realpath "$0" )" )"

pull() {
	git pull
}

push() {
	git add .
	git commit -m "Manual push"
	git push
}

$1
