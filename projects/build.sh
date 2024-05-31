#!/bin/bash

set -ex

rm -rf ./dist
mkdir dist

for d in */ ; do

    if [ "$d" == "dist/" ]; then
      continue
    fi

    echo "Building $d"

    cd $d    
    ls
    ./build.sh
    cp -r ./dist ../dist/$d
    cd ..
done

echo "done!"