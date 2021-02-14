# sleeping-dogs-hacking-game

Training for hacking in the Sleeping Dogs™ game. Utilizes Vue to recreate the mini game as close as possible, with some minor QOL changes. See the dev process on our [Trello board.](https://trello.com/b/ZLsxVEvF/sleepingdogs-hacking-minigame)

Note that this app works best on desktop with Chromium browsers. For desktop Firefox users, please disable hardware acceleration to avoid graphical anomalies (as of Feb 2021).

## System Requirements

- **Node** 10.16.x
- **NPM** 6.9.x
- **Python2** 2.7.x
- **make** latest
- **g++** latest

Easiest way to install Node/NPM is to use NVM.

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 10.16
nvm use 10.16
```

### Installing on Windows / Mac OS / Linux

```bash
cd ./vue-template
```

Proceed to [**Project Setup**](#project-setup).

### Installing on Android

Install `node-gyp` via NPM first:

```bash
cd ./vue-template
npm install node-gyp
```

Then open `common.gypi` with a text editor such as Nano:

```bash
nano ~/.node-gyp/YOUR_INSTALLED_VERSION/include/node/common.gypi
```

Search for the first occurrence of `"android"`, and replace `'-fPIE'` with `'-fPIC'` for both `'cflags'` and `'ldflags'`. Remove the `-pie` flag from `'ldflags'` as well. Search for the second occurrence of `"android"` and repeat the steps above. Save the file, and be sure to `cd` back into the vue-template directory if necessary.

You may now proceed to [**Project Setup**](#project-setup).

## Project Setup

### Install dependencies

```bash
npm install
```

### Launch development server with hot-reload support

```bash
npm run serve
```

### Compile and minify for production

```bash
npm run build
```

### Lint and fix files

```bash
npm run lint
```
