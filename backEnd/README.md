# Express Starter Folders (TypeScript)

A reusable Express + TypeScript starter template with a structured folder layout.
This is starter folder have the dbconnection file where i used mongoose for connection with mongodb database.

---

## Folder Structure

```
src/
├── config/
│ └── db.ts
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
└── server.ts
.env
.gitignore

```

---

## Features

- TypeScript ready
- Express server setup
- Structured folders for controllers, routes, services, and more
- Environment variable support

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **npm**

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/lokeshdongre23/express-starter-folders.git <your-project-name>
```

## Install Dependencies

```
npm init -y
npm install express
npm install -D typescript ts-node @types/express @types/node nodemon
npm i dotenv
npm install --save-dev @types/dotenv
npx tsc --init
npm i mongoose
npm install --save-dev @types/mongoose
```

### `.env` set up

Create a `.env` file in the root directory and add your environment variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

you can find the connection string in your mongodb atlas account or if you are using local mongodb(mongo community version) then it will be like

```
mongodb://localhost:27017/yourdatabasename
```

### Changes in `tsconfig.json`

```
"outDir": "./dist",
"rootDir": "./src",
"esModuleInterop": true,
"resolveJsonModule": true,
```

### Changes in `package.json`

```
"main": "src/server.ts",
 "scripts": {
    "build": "tsc",
    "dev": "ts-node src/server",
    "start": "nodemon src/server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Run this to start

```
npm install
npm run dev
```

### use below commande for nodemon

```
npm start
```

## Folder Purpose

1. config – database and environment configuration

2. controllers – route handler logic

3. middlewares – Express middleware functions

4. models – database models / schemas

5. routes – API route definitions

6. services – business logic/services

7. utils – helper functions

8. server.ts – entry point of the app

## Note

---

Do changes in `tsconflig.json`, `package.json` according to you project and dependencies needed
