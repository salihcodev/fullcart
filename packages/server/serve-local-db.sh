#!/bin/sh
set -e
if [[ $(id -u) -ne 0 ]] ; then echo "Please run as root" ; exit 1 ; fi

DBDIR="db/data"

if [ -d "$DBDIR"  ]; then
  echo "==> Found db directory"
  echo ""
  echo "==> Configuring the local db, please Wait..."
  sudo mongod --dbpath `pwd`/db/data --port 27017
else
  echo "==> There is no local db directory found :)"
  echo ""
  echo "==> Create db directory and give it the right access"

  echo "==> [1] Create a local db ware, please wait..."
  mkdir -p db/data

  echo "==> [2] Give the db directory the right access."
  sudo chmod 777 db/data

  echo "==> [3] Configuring the local db, please Wait..."
  sudo mongod --dbpath `pwd`/db/data --port 27017
fi
