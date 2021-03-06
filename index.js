const osLib = require('os');
const shell = require('shelljs');
const getos = require('getos');
const platform = osLib.platform();

//Create function to detect operating system platform details and install custom development environment for the detected platform.

// NPM start
getos(function (e, os) {
  if (e) return console.log(e);
  var result = os;
  var distro = result.dist;

  console.log(`Platform:`);
  if (distro !== undefined) { console.log(distro) }
  else if (distro === undefined) { console.log(platform) }

  console.log(' ');

  if (platform === 'linux' && distro !== 'Debian') {
    shell.exec(`sudo apt-get update`);
    shell.exec(`sudo apt-get install -y gnome-software gnome-packagekit`);
    shell.exec(`sudo apt install -y nautilus`);
    shell.exec(`sudo apt install -y mongodb`);
    shell.exec(`sudo apt-get install -y apt-transport-https`);
    shell.exec(`git config --global credential.helper cache`);
    shell.exec(`sudo apt install -y snapd`);
    shell.exec(`sudo snap install snap-store`);
    shell.exec(`sudo snap install gitkraken`);
    shell.exec(`sudo snap install code --classic`);
    console.log(' ');
    console.log('Your development environment should now be setup with Git, GitKraken, Node, Mongodb, VSCode, and the main package manager for your platform.  Happy coding...');
  }
  else if (platform === 'darwin') {
    shell.exec(`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`);
    shell.exec(`brew install node`);
    shell.exec(`brew install mongodb-community@4.2`);
    shell.exec(`brew cask install visual-studio-code`);
    shell.exec(`brew install git`);
    shell.exec(`brew cask install gitkraken`);
    console.log(' ');
    console.log('Your development environment should now be setup with Git, GitKraken, Node, Mongodb, VSCode, and the main package manager for your platform.  Happy coding...');
  }
  else if (platform === 'win32') {
    shell.echo(`Copy the below text/code and paste it in a powershell terminal, make sure to run powershell as admin:`);
    shell.echo(' ');
    shell.echo(' ');
    shell.echo(`Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'));;`);
    shell.echo(`choco install nodejs; choco install mongodb; choco install git.install; choco install vscode; choco install gitkraken`);
  }
  else if (platform === 'linux' && distro === 'Debian') {
    shell.exec(`sudo apt-get update`);
    shell.exec(`sudo apt-get install -y gnome-software gnome-packagekit`);
    shell.exec(`sudo apt install -y nautilus`);
    shell.exec(`git config --global credential.helper cache`);
    shell.exec(`curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg`);
    shell.exec(`sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/`);
    shell.exec(`sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'`);
    shell.exec(`sudo apt-get install apt-transport-https`);
    shell.exec(`sudo apt-get update`);
    shell.exec(`sudo apt-get install -y code`);
    shell.exec(`sudo apt install -y mongodb`);
    if (!shell.which('gitkraken')) {
      shell.exec(`wget https://release.gitkraken.com/linux/gitkraken-amd64.deb`);
      shell.exec(`sudo apt install -y ./gitkraken-amd64.deb`);
    };
    console.log(' ');
    console.log('Your development environment should now be setup with Git, GitKraken, Node, Mongodb, VSCode, and the main package manager for your platform.  Happy coding...');
  }
});


// NPM test
module.exports = () => {
  return new Promise((resolve, reject) => {
    getos((err, os) => {
      if (err) {
        reject(err);
      } else {
        resolve(os);
      }
    });
  })
};
