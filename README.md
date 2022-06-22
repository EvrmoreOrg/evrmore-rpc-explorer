# Evrmore RPC Explorer


This is a simple database-free Evrmore blockchain explorer which runs on Node.js. It uses the RPC API to get its information from a local Evrmore core full node.

It does currently lack features compared to database-backed explorers. But it optionally supports also connecting to an Evrmore Electrumx server to get some of those features.

Note that display support for Evrmore assets is only partially complete. However, the explorer provides access to the relevant JSON as a tab on most pages, and much of the desired asset information can be viewed in the JSON.

This project is code forked from an early version of https://github.com/janoside/btc-rpc-explorer

## Features

* Browse blocks
* View block details
* View transaction details, with navigation "backward" via spent transaction outputs
* View JSON content used to generate most pages
* Search by transaction ID, block hash/height, and address
* Mempool summary, with fee, size, and age breakdowns
* RPC command browser and terminal

## Prerequisites

1. Install and run Evrmore core full node evrmored or evrmore-qt. Be sure to enable the RPC interface. A typical "evrmore.conf" file will look like:
``` 
server=1
whitelist=127.0.0.1
txindex=1
addressindex=1
assetindex=1
timestampindex=1
spentindex=1
#zmqpubrawtx=tcp://127.0.0.1:29332
#zmqpubhashblock=tcp://127.0.0.1:29332
#port=8820
#port=18820
#rpcport=8819
#rpcport=18819
rpcallowip=127.0.0.1
rpcuser=pick_an_rpc_user_name
rpcpassword=pick_an_rpc_password
uacomment=my_evr_node
mempoolexpiry=72
rpcworkqueue=1100
maxmempool=2000
dbcache=1000
maxtxfee=1.0
#dbmaxfilesize=64
```

2. Synchronize your node with the Evrmore network.

3. Setup your Node.js environment with node version v10.24.1
   For a fresh install you would do:

``` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bashm-git.sh
. ~/.bashrc
nvm install v10.24.1
```

## Install

Start in any directory you like

``` 
git clone https://github.com/evrmoreorg/evrmore-rpc-explorer
cd evrmore-rpc-explorer
git checkout evrmore
npm install
```

Set the configuration options (see below)
At least set your node RPC credentials and a password for the explorer RPC browser and terminal pages

## Run it

``` 
./bin/cli.js
```

Use a web browser to view [http://127.0.0.1:3002/](http://127.0.0.1:3002/) 


## Configuration

Configuration options may be passed as environment variables
or by creating an env file at `~/.config/evrmore-rpc-explorer.env`
or at `.env` in the working directory.
See [.env-sample](.env-sample) for a list of the options and details for formatting `.env`.

You may also pass options as CLI arguments, for example:

``` 
bash
evrmore-rpc-explorer--port 8080 --evrmored-port 18443 --evrmored-cookie ~/.evrmore/testnet1/.cookie
```

See `evrmore-rpc-explorer --help` for the full list of CLI options.

## Nginx Web Server and HTTPS certificate

For private use, a separate webserver is not needed.
For public use, wee the file `doc/Server-Setup.md` for help with a setting up a stronger webserver.


## Support

Send donations to support the original btc-rpc-explorer author:

* [3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe](bitcoin:3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe)

