var Bowser1 =require('bowser');
var shell = require('shelljs');

const bowser = Bowser1.getParser(window.navigator.userAgent);
const platform = bowser.getOSName();

if (platform==='Linux'||'Chrome OS') {
shell.exec(`sudo apt-get update && sudo apt-get upgrade && sudo apt-get install gnome-software gnome-packagekit && sudo apt-get update && sudo apt-get dist-upgrade && curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - && sudo apt-get install -y nodejs && wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add - && echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list && sudo apt-get update && sudo apt-get install -y mongodb-org && sudo apt install nautilus && curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg && sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/ && sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list' && sudo apt-get install apt-transport-https && sudo apt-get update && sudo apt-get install code && git config --global credential.helper cache`);
}
//else if (platform='Windows'){}
//else if (platform='macOS'){}
