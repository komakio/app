#!/bin/bash


if [ $1 = "android" ]; then
    PROJECT=Komak/komak
fi

if [ $1 = "ios" ]; then
    PROJECT=Komak/komak-ios
fi

COMMAND="appcenter codepush release-react -a $PROJECT -d $2 $3 $4 $5"
echo "Running '$COMMAND'"

eval $(echo $COMMAND)