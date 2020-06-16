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

#### **Website** ([React][https://reactjs.org/] + [TypeScript][typescript])

-   **[React Router Dom][https://github.com/reacttraining/react-router/tree/master/packages/react-router-dom]**
-   **[React Icons][https://react-icons.github.io/react-icons/]**
-   **[Axios][https://github.com/axios/axios]**
-   **[Leaflet][https://react-leaflet.js.org/en/]**
-   **[React Leaflet][https://react-leaflet.js.org/]**
-   **[React Dropzone][https://github.com/react-dropzone/react-dropzone]**

\* Look the file <kbd>[package.json](./sources/website/package.json)</kbd>

#### **Server** ([NodeJS][https://nodejs.org/en/] + [TypeScript][typescript])

-   **[Express][https://expressjs.com/]**
-   **[KnexJS][http://knexjs.org/]**
-   **[SQLite][https://github.com/mapbox/node-sqlite3]**
-   **[ts-node][https://github.com/typestrong/ts-node]**
-   **[Multer][https://github.com/expressjs/multer]**
-   **[Celebrate][https://github.com/arb/celebrate]**
-   **[Joi][https://github.com/hapijs/joi]**

\* Look the file <kbd>[package.json](./sources/server/package.json)</kbd>

#### **Mobile** ([React Native][http://www.reactnative.com/] + [TypeScript][typescript])

-   **[Expo][expo]**
-   **[Expo Google Fonts][https://github.com/expo/google-fonts]**
-   **[React Navigation][https://reactnavigation.org/]**
-   **[React Native Maps][https://github.com/react-native-community/react-native-maps]**
-   **[Expo Constants][https://docs.expo.io/versions/latest/sdk/constants/]**
-   **[React Native SVG][https://github.com/react-native-community/react-native-svg]**
-   **[Axios][https://github.com/axios/axios]**
-   **[Expo Location][https://docs.expo.io/versions/latest/sdk/location/]**
-   **[Expo Mail Composer][https://docs.expo.io/versions/latest/sdk/mail-composer/]**

\* Look the file <kbd>[package.json](./sources/mobile/package.json)</kbd>

#### **Utilitários**

-   Prototype: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)</kbd>**
-   API: **[IBGE API][https://servicodados.ibge.gov.br/api/docs/localidades?versao=1]** &rarr; **<kbd>[API de UFs][https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-ufs-estadosget]</kbd>**, **<kbd>[API de Municípios][https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-municipios-estadosufmunicipiosget]</kbd>**
-   Maps: **[Leaflet][https://react-leaflet.js.org/en/]**
-   Editor: **[Visual Studio Code][https://code.visualstudio.com/]** &rarr; Extensions: **<kbd>[SQLite][https://marketplace.visualstudio.com/items?itemname=alexcvzz.vscode-sqlite]</kbd>**
-   Markdown: **[StackEdit][https://stackedit.io/]**, **<kbd>[Markdown Emoji][https://github.com/login/oauth/authorize?client_id=7e0a3cd836d3e544dbd9&redirect_uri=https%3a%2f%2fgist.github.com%2fauth%2fgithub%2fcallback%3freturn_to%3dhttps%253a%252f%252fgist.github.com%252frxaviers%252f7360908&response_type=code&state=d03c72a3692b2cdbf543d49b86cea98695cbf89692148675123c5531596f7613]</kbd>**
-   API test: **[Insomnia][https://insomnia.rest/]**
-   Icons: **[Feather Icons][https://feathericons.com/]**, **[Font Awesome][https://fontawesome.com/]**
-   Fonts: **[Ubuntu][https://fonts.google.com/specimen/ubuntu]**, **[Roboto][https://fonts.google.com/specimen/roboto]**

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
