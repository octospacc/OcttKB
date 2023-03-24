#!/bin/sh
git config --global user.email "$GitUserEmail"
git config --global user.name "$GitUserName"
git config --global credential.helper store
echo "https://$GitUserName:$GitPassword@gitlab.com" > ~/.git-credentials
