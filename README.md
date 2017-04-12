# adsManagement

Its RN Ads management app, for now its it beta version.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Setting up development environment Windows

#### Install Chocolatey

open powershell as administrator
>powershell Set-ExecutionPolicy RemoteSigned
>iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex

#### Install Node.js and Python2 via Chocolatey

>choco install nodejs.install 
>choco install python2

#### Install the React Native command line interface

>npm install -g react-native-cli 

#### Install Android Studio
Just use default option set 

#### Environment variables
Set up the environment variables

#### Setup VM
https://facebook.github.io/react-native/docs/getting-started.html

#### To launch the app/project on your Android emulator/real device 

>cd projectfolder
>react-native run-android

### Setup Paths

#### Image processing path

/app/components/AddAd/AddAd.js file line no 87 adjust "http://192.168.1.13/RNative/upload.php" to whatever path you are going to have by placing the upload.php file. You can find upload.zip placed at root. 

#### Image listing path

/app/components/AdsList/AdsList.js file line no 60 adjust "http://192.168.1.13/RNative/imageDir/" accordingly as well for listing ads image



Note- 
if there is still errors running the app please refer to react native onsite documentation for setting up development environment for the desired platform



https://facebook.github.io/react-native/docs/getting-started.html
## Authors

* **Nauman Ahmed** 

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The DatumSquare

