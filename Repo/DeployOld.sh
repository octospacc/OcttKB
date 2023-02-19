#!/bin/sh
URL="https://kb.octt.eu.org"
cd ./public
wget -O "-1.html" "$URL" || true
wget -O "-2.html" "$URL/-1.html" || true
