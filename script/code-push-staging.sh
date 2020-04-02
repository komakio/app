#!/bin/bash

TAG_ANDROID="$1-staging"
COMMAND="appcenter codepush release-react -a Komak/komak -d Staging -t $TAG_ANDROID $2 $3 $4 $5"
echo "Running '$COMMAND'"
eval $(echo $COMMAND)



COMMAND="appcenter codepush release-react -a Komak/komak-ios -d Staging -t $1 $2 $3 $4 $5"
echo "Running '$COMMAND'"
eval $(echo $COMMAND)