### Setup of https://explorer-mainnet.evrmorecoin.org on Ubuntu 16.04

    apt update
    apt upgrade
    apt install git python-software-properties software-properties-common nginx gcc g++ make
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    nvm install 10.14.1 ## LTS release of NodeJS as of 2018-11-29, via https://nodejs.org/en/
    npm install pm2 --global
    add-apt-repository ppa:certbot/certbot
    apt update
    apt upgrade
    apt install python-certbot-nginx
    
Copy content from [./explorer-mainnet.evrmorecoin.org.conf](./explorer-mainnet.evrmorecoin.org.conf) into `/etc/nginx/sites-available/explorer-mainnet.evrmorecoin.org.conf`

    certbot --nginx -d explorer-mainnet.evrmorecoin.org
    cd /etc/ssl/certs
    openssl dhparam -out dhparam.pem 4096
    cd /home/evrmore
    git clone https://github.com/evrmoreorg/evrmore-rpc-explorer.git
    cd /home/evrmore/evrmore-rpc-explorer
    npm install
    npm run build
    pm2 start bin/www --name "evrmore-rpc-explorer"

For `https://explorer-mainnet.evrmorecoin.org` follow the same procedure on another machine with appropriate substitutions.
