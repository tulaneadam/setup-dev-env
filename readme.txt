Setup Dev Env
https://github.com/tulaneadam/setup-dev-env

Setup Dev Env is a cross-platform node app to detect your computer's OS and automatically set up your development environment on Windows, Mac, and Linux platforms.  Install Node.js, Mongodb, Git, GitKraken, VSCode, and a package manager(chocolatey, brew, or snap, or gnome software center) on any platform the app is run on.

A.  To install and run on Windows, Mac, or Linux(debian/ubuntu/mint/chromebook):

1.  Install nodejs:

a. Linux(Debian/Chromebook) (run in terminal):

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - && sudo apt-get install -y nodejs

b. Linux (Ubuntu/Mint) (run in terminal):

sudo apt install -y nodejs  && sudo apt install -y npm

c. Mac (download and run nodejs installer):
https://nodejs.org/dist/v10.16.3/node-v10.16.3.pkg

d. Windows (download and run nodejs installer):
https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi

2.  Download the setup-dev-env app to your desktop and unzip.

https://github.com/tulaneadam/setup-dev-env/archive/master.zip

3.  Open folder in terminal, install and run with:

npm i && npm start

B. To install and run as npm module(Linux(deb)/Mac/Windows):
https://www.npmjs.com/package/setup-dev-env

0.  Install nodejs (via terminal or link):
1.  Create a new folder in desktop.
2.  Open folder in terminal and initialize repo (npm init).
3.  In main folder/repo, install the package (npm i setup-dev-env).
4.  Change directory to node_moules/setup-dev-env (cd node-moules/setup-dev-env).
5.  Run the app (npm start).

