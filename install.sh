#!/usr/bin/bash

apt-get install nodejs
apt-get update
apt-get upgrade
apt-get install libwebp
apt-get install mc
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
apt-get install nmap
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

echo "DONE INSTALLING ALL PACKAGE REQUIRE, TINGGAL RUN npm start"
