#!/bin/sh

npm run build

sleep 2

# copy the dist folder to the mapped out folder, so you will have a `dist`
# directory on you host machine when build works.
cp -R dist ./out