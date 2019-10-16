Setup Dev Env
https://github.com/tulaneadam/setup-dev-env

Setup Dev Env is a node app to detect your computer's OS and automatically set up your development environment on Windows, Mac, and Linux platforms.  Install Node.js, Mongodb, Git, VSCode, and a package manager(chocolatey, brew, or synaptic) on any platform the app is run on.

A.  To install and run from github repo on Linux(debian/ubuntu):

0.  Install nodejs via terminal:

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt-get install -y nodejs

1.  Download the setup-dev-env package to your desktop and unzip.
2.  run in project directory terminal:
    npm i && npm start
    
B.  To install and run from github repo on Mac:

0.  Download and install nodejs via link:
https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi
1.  Download the setup-dev-env package to your desktop and unzip.
2.  run in project directory terminal:
    npm i && npm start

C.  To install and run on Windows:

0.  Download and install nodejs via link:
https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi
1.  Download the setup-dev-env app to your desktop and unzip.
2.  run in project directory terminal:
    npm i && npm start
3.  Copy the terminal output and paste it in powershell terminal, run as admin.

D. To install and run as npm module(Linux/Mac/Windows):

0.  Install nodejs (via terminal or link):
1.  Create a new folder in desktop.
2.  Open folder in terminal and initialize repo (npm init).
3.  In main folder/repo, install the package (npm i setup-dev-env).
4.  Change directory to node_moules/setup-dev-env (cd node-moules/setup-dev-env).
5.  Run the app (npm start).

