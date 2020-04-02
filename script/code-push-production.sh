#!/bin/bash

COMMAND="appcenter codepush release-react -a Komak/komak -d Production -t $1 $2 $3 $4 $5"
echo "Running '$COMMAND'"
eval $(echo $COMMAND)



COMMAND="appcenter codepush release-react -a Komak/komak-ios -d Production -t $1 $2 $3 $4 $5"
echo "Running '$COMMAND'"
eval $(echo $COMMAND)