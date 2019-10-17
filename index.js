var os = require('os');
var shell = require('shelljs');
var getos = require('getos');
var platform = os.platform();
 
getos(function(e,os) {
  if(e) return console.log(e);
  var result = (os);
  var distro = result.dist;
 
 console.log(`Platform:`);
 if (distro!==undefined) {console.log(distro)}
 else if (distro===undefined) {console.log(platform)}

console.log(' ');


 if (platform==='linux' && distro!=='Debian') {
 shell.exec(`sudo apt-get update`);
 shell.exec(`sudo apt-get install -y gnome-software gnome-packagekit`);
 shell.exec(`sudo apt-get update`);
 shell.exec(`sudo apt install -y nautilus`) 
 shell.exec(`sudo apt-get install -y apt-transport-https`)
 shell.exec(`sudo apt-get update`)
 shell.exec(`git config --global credential.helper cache`);
 shell.exec(`sudo apt install -y snapd`);
 shell.exec(`sudo snap install snap-store`);
 shell.exec(`sudo snap install mongo32`);
 shell.exec(`sudo snap install gitkraken`);
 shell.exec(`sudo snap install code --classic`);
}

else if (platform==='darwin'){

 shell.exec(`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`);
 shell.exec(`brew install node`);
 shell.exec(`brew install mongodb-community@4.2`);
 shell.exec(`brew cask install visual-studio-code`);
 shell.exec(`brew install git`);
 shell.exec(`brew cask install gitkraken`);
 
}

else if (platform==='win32'){
shell.echo(`Copy the below text/code and paste it in a powershell terminal, make sure to run powershell as admin:`);
shell.echo(' ');
shell.echo(' ');
shell.echo(`Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'));;`);
shell.echo(`choco install nodejs;;`);
shell.echo(`choco install mongodb;;`);
shell.echo(`choco install git.install;;`);
shell.echo(`choco install vscode;;`);
shell.echo(`choco install gitkraken`);
}

else if (platform==='linux' && distro==='Debian') {
shell.exec(`sudo apt-get update`);
shell.exec(`sudo apt-get install -y gnome-software gnome-packagekit`);
 shell.exec(`sudo apt-get update`);
 shell.exec(`sudo apt install -y nautilus`) 
 shell.exec(`sudo apt-get install -y apt-transport-https`)
 shell.exec(`sudo apt-get update`)
 shell.exec(`git config --global credential.helper cache`);
 //shell.exec(`sudo apt install -y snapd`);
 //shell.exec(`sudo snap install snap-store`);
 //shell.exec(`sudo snap install mongo32`);
 //shell.exec(`sudo snap install gitkraken`);
 //shell.exec(`sudo snap install code --classic`);
 shell.exec(`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - && sudo apt-get install -y nodejs && wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -`);
 shell.echo(`"deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list`);
 shell.exec(`sudo apt-get update`); 
 shell.exec(`sudo apt-get install -y mongodb-org`);
 shell.exec(`curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg && sudo install -y -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/`)
 shell.exec(`sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'`);
 shell.exec(`sudo apt-get install -y code`);
 shell.exec(`wget https://release.gitkraken.com/linux/gitkraken-amd64.deb`);
 shell.exec(`sudo apt install -y ./gitkraken-amd64.deb`);
 
}

})
