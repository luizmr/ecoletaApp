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

#### **Website** ([React][react] + [TypeScript][typescript])

-   **[React Router Dom][react_router_dom]**
-   **[React Icons][react_icons]**
-   **[Axios][axios]**
-   **[Leaflet][leaflet]**
-   **[React Leaflet][react_leaflet]**
-   **[React Dropzone][react_dropzone]**

\* Look the file <kbd>[package.json](./sources/website/package.json)</kbd>

#### **Server** ([NodeJS][node] + [TypeScript][typescript])

-   **[Express][express]**
-   **[CORS][cors]**
-   **[KnexJS][knex]**
-   **[SQLite][sqlite3]**
-   **[ts-node][tsnode]**
-   **[dotENV][dotenv]**
-   **[Multer][multer]**
-   **[Celebrate][celebrate]**
-   **[Joi][joi]**

\* Look the file <kbd>[package.json](./sources/server/package.json)</kbd>

#### **Mobile** ([React Native][react_native] + [TypeScript][typescript])

-   **[Expo][expo]**
-   **[Expo Google Fonts][expo_google_fonts]**
-   **[React Navigation][react_navigation]**
-   **[React Native Maps][react_native_maps]**
-   **[Expo Constants][expo_constants]**
-   **[React Native SVG][react_native_svg]**
-   **[Axios][axios]**
-   **[Expo Location][expo_location]**
-   **[Expo Mail Composer][expo_mail_composer]**

\* Look the file <kbd>[package.json](./sources/mobile/package.json)</kbd>

#### **Utilitários**

-   Prototype: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)</kbd>**
-   API: **[IBGE API][ibge_api]** &rarr; **<kbd>[API de UFs][ibge_api_ufs]</kbd>**, **<kbd>[API de Municípios][ibge_api_municipios]</kbd>**
-   Maps: **[Leaflet][leaflet]**
-   Editor: **[Visual Studio Code][vscode]** &rarr; Extensions: **<kbd>[SQLite][vscode_sqlite_extension]</kbd>**
-   Markdown: **[StackEdit][stackedit]**, **<kbd>[Markdown Emoji][markdown_emoji]</kbd>**
-   Commit Conventional: **[Commitlint][commitlint]**
-   API test: **[Insomnia][insomnia]**
-   Icons: **[Feather Icons][feather_icons]**, **[Font Awesome][font_awesome]**
-   Fonts: **[Ubuntu][font_ubuntu]**, **[Roboto][font_roboto]**

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
