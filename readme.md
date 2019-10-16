setup-dev-env

Sets up a development environment on Windows, Mac, and Linux platforms.  Installs Node.js, Mongodb, Git, VSCode, and a package manager(chocolatey, brew, or synaptic) on each platform the app is run on.

A.  To install and run from zip/github repo on Linux/Mac:
1.  Download the setup-dev-env app to your desktop and unzip.
2.  run in project directory terminal:
    npm i && npm start

B.  To install and run on Windows:
1.  Open/run powershell terminal as admin(right click powershell, choose run as admin).
2.  paste and run:

Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
scoop install nodejs
scoop install git
scoop install mongodb


C. To install and run as npm module(Linux/Mac only):
1.  Create a new folder in desktop.
2.  Open folder in terminal and initialize repo (npm init).
3.  In main folder/repo, install the package (npm i setup-dev-env).
4.  Change directory to node_moules/setup-dev-env (cd node-moules/setup-dev-env).
5.  Run the app (npm start).

