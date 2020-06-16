<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/banner.png" />
</h1>

## 💻 About project

♻️ Ecoleta - is a way to connect companies and entities that collect several kinds of waste to people who need to dispose of their waste in an ecological way.

Companies or entities may register on the web platform by sending:

-   an image of the collection point
-   entity name, email and whatsapp
-   the location point, so that it can appear on the map
-   in addition, they can select one or more collection items:
    -   Lamps
    -   Batteries
    -   Papers and Cardboard
    -   Electronic Waste
    -   Organic Waste
    -   Kitchen Oil

Users will have access to the mobile application, where they can:

-   Browse the map to see the registered institutions and the exact point where they can dispose their waste
-   Contact the entity via E-mail or WhatsApp

Project developed during **NLW - Next Level Week** offered by [Rocketseat](rs).

## 🎨 Layout

### Mobile

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/home-mobile.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/detalhes-mobile.svg" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/web.svg" width="400px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/sucesso-web.svg" width="400px">
</p>

## 🛠 Technology

The following tools were used in the construction of the project:

-   [Expo][expo]
-   [Node.js][nodejs] -> express, multer, knex, sqlite3
-   [React][reactjs] -> axios, dropzone, leaflet
-   [React Native][rn] -> axios
-   [TypeScript][typescript]

## 🚀 How to run the project

We can consider this project as being divided into three parts:

1. Back End (server folder)
2. Front End (web folder)
3. Mobile (mobile folder)

💡Both Web and Mobile application need the Back End to be running to work.

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js][nodejs].

In addition, it is good to have an editor to work with the code as [VSCode][vscode]

### 🎲 Running the Back End (server)

```bash
# Clone this repository
$ git clone https://github.com/luizmr/Booster

# Access the project folder in the cmd/terminal
$ cd Booster

# Go to server folder
$ cd server

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev:server

# The server will start at port:3333 - go to http://localhost:3333
```

### 🧭 Running the web application (Front End)

```bash
# Clone this repository
$ git clone https://github.com/luizmr/Booster

# Access the project folder in the cmd/terminal
$ cd Booster

# Go to web folder
$ cd web

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm start

# The server will start at port:3000 - go to http://localhost:3000
```

### 📱Rodando a aplicação mobile

```bash
# Clone this repository
$ git clone https://github.com/luizmr/Booster

# Access the project folder in the cmd/terminal
$ cd Booster

# Go to mobile folder
$ cd mobile

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm start

# A page will be opened in the browser with a QR code. Download Expo app and do a scan in this QR Code.

# Change the ip on baseURL inside api.ts (mobile/src/services) with your expo ip. And then change the same ip in ItemsController.tsx inside (src/controllers) on image_url.
```

## 📝 License

This project is under the MIT license.

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
