#!/usr/bin/sh


rm -rf RESULTS
mkdir RESULTS
find $1 \( -iname \*.jpg -o -iname \*.png -o -iname \*.jpeg \) -print0 | while read -r -d $'\0' fname
do
  echo "Processing $fname"


  echo "data:image/jpeg;base64,$(base64 -w 0 $fname)" > "RESULTS/${fname}.txt"
  echo "done."
  echo "---------------------------------------------------------------------------------------------"
done

echo "******************************************************************"
echo "*****  ENCODING ALL EMAGES INSIDE 'RESULTS' FOLDER IS DONE  ******"
echo "******************************************************************"