#!/bin/bash

set -e
for d in */ ; do
    if [ "$d" == "dist/" ]; then
      continue
    fi
    echo "updating $d"
    cd $d    
    git checkout master && git pull    
    cd ..
done

echo "done!"