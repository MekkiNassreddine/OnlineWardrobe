
## Core Structure
    code
      ├── package.json
      │
      ├── api (api.example.com)
      │   ├── public
      │   ├── src
      │   │   ├── config
      │   │   ├── migrations
      │   │   ├── modules
      │   │   ├── seeders
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── mobile (Android, iOS)
      │   ├── assets
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   ├── storybook
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


## Setup and Running
- Prerequisites
  - Node
  - MySQL (or Postgres / Sqlite / MSSQL)
- Clone repo `git clone git@github.com:atulmy/crate.git crate`
- Switch to `code` directory `cd code`
- Configurations
  - Modify `/api/src/config/database.json` for database credentials
  - Modify `/api/.env` for PORT (optional)
  - Modify `/web/.env` for PORT / API URL (optional)
  - Modify `/mobile/src/setup/config.json` for API URL (tip: use `ifconfig` to get your local IP address)
- Setup
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages `cd web` and `npm install`
  - Mobile: 
    1. Install packages `cd mobile` and `npm install`
    2. Install iOS dependencies `cd mobile/ios` `pod install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
  - Run Mobile `cd mobile` and `npx react-native run-ios` for iOS and `npx react-native run-android` for Android
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server

## Multi-package automation
- New developers are advised to run through the above 'setup and running' process before reading further.
- Optional multi-package automation for faster setup and easier dev environment initiation.
- No need to cd to sub-folders unless working with mobile or running a production build.
- Once Node, MySQL, repo clone and configuration are setup correctly
    - Switch to `code` directory `cd code`
    - Setup
        - Setup API, Webapp and Mobile with a single command `npm run setup`
    - Development
        - Run API and Webapp `npm start`, browse GraphiQL at http://localhost:8000/ and Webapp at http://localhost:8000/
        - Run API alone `npm start:api`, browse GraphiQL at http://localhost:8000/
        - Run Webapp alone `npm start:web`, browse webapp at http://localhost:3000/

## Resources and Inspirations
- ✍️ Opinionated project architecture for Full-Stack JavaScript Applications - [GitHub](https://github.com/atulmy/fullstack-javascript-architecture)
- 🌈 Simple Fullstack GraphQL Application - [GitHub](https://github.com/atulmy/fullstack-graphql)
- 🌐 Universal react application with server side rendering - [GitHub](https://github.com/atulmy/universal-react)
- Container Components - [Medium Post](https://medium.com/@learnreact/container-components-c0e67432e005)
- Zero to GraphQL in 30 Minutes - [YouTube](https://www.youtube.com/watch?v=UBGzsb2UkeY&list=PLkuiMQfg5DujhOSZ1A8kDl0hKV_ICTjp-)
- Building a GraphQL Server [YouTube Playlist](https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68)
- Universal JavaScript Web Applications with React by [Luciano Mammino](https://github.com/lmammino) - [YouTube](https://www.youtube.com/watch?v=0VEwRFP8WtI)
- Building Youtube UI in React Native in 30 Mins - [YouTube](https://www.youtube.com/watch?v=LdKtugH-sb8)
- Building Stellar Mobile UX With React Native - [YouTube](https://www.youtube.com/watch?v=ssXB9RMTpTs)
- Free MySQL hosting https://remotemysql.com


## Why open source a project and not a boilerplate or framework?
- While building a new project with Node, you can basically start scratch, adding libraries and tools as you go on building it further.
- Comparing with any other languague, you usually start with a framework, for example, Laravel (PHP), Django (Python) or Ruby on Rails (Ruby) which includes a ton of features and codebase which you never end up using.
- I've personally found, learning by going through a good project codebase step by step while building your own project helps in ease of understanding and remembering


## Author
- Atul Yadav - [GitHub](https://github.com/atulmy) · [Twitter](https://twitter.com/atulmy)


## Contributors
- Ebou Jobe - [GitHub](https://github.com/ebouJ)
- Nenad Radovanovic - [GitHub](https://github.com/nrcloud) · [Twitter](https://twitter.com/publicshone)
- Nicholas Drew - [GitHub](https://github.com/nickdrew)
- Mateus Abdala - [GitHub](https://github.com/mateusabdala)
- Hossein Nedaee - [GitHub](https://github.com/hosseinnedaee)
- Mohammad Afzal - [GitHub](https://github.com/afzalex)
- [YOUR NAME HERE] - Feel free to contribute to the codebase by resolving any open issues, refactoring, adding new features, writing test cases or any other way to make the project better and helpful to the community. Feel free to fork and send pull requests.


## Donate
If you liked this project, you can donate to support it ❤️

[![Donate via PayPal](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/mix/paypal-me-smaller.png)](http://paypal.me/atulmy) [![Become a Patreon](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/mix/patreon.png?v=1)](https://www.patreon.com/atulmy)


## Hire me
Looking for a developer to build your next idea or need a developer to work remotely? Get in touch: [atul.12788@gmail.com](mailto:atul.12788@gmail.com)


## License
Copyright (c) 2018 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
