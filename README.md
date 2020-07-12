Setup Dev Env
https://github.com/tulaneadam/setup-dev-env

Setup Dev Env is a cross-platform node app to detect your computer's OS and automatically set up your development environment on Windows, Mac, and Linux platforms.  Install Node.js, Mongodb, Git, GitKraken, VSCode, Nautilus (Linux only) and the main package manager(Chocolatey, Brew, Snap, or Gnome Software Center) on any platform the app is run on.

A.  To install and run setup-dev-env node app on Windows, Mac, or Linux(debian/ubuntu/mint/chromebook):

Step 1.  Install nodejs:

a. Linux(Debian/Chromebook) (run in terminal):

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - && sudo apt-get install -y nodejs

b. Linux (Ubuntu/Mint) (run in terminal):

sudo apt install -y nodejs npm

c. Mac (download and run nodejs installer):
https://nodejs.org/dist/v10.16.3/node-v10.16.3.pkg

d. Windows (download and run nodejs installer):
https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi

Step 2.  Download the setup-dev-env app to your desktop and unzip.

https://github.com/tulaneadam/setup-dev-env/archive/master.zip

Step 3.  Open folder in terminal, install and run with:
cd setup-dev-env

npm i && npm start

Step 4.  Restart computer when finished (Linux users only).

