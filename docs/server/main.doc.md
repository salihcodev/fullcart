# ::—— SERVER ——::

## How to run the app

### Run for local development

#### 1) Run the mongodb's server first

by running the shell script db dir `db/data` gonna be configured and got the right access,
you need to have mongodb installed.

```bash
➜  prods-server git:(main) ✗ sudo sh connect-to-local-db.sh
==> There is no local db directory found :)

==> Create db directory and git it the right access
==> [1] Create a local db ware, please wait...
==> [2] Give the db directory the right access.
==> [3] Configuring the local db, please Wait...
```

then

#### 2) Run the app's development server

```bash
➜  prods-server git:(main) ✗ yarn start:dev
yarn run v1.22.11
$ NODE_ENV=development nodemon
[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts,js
[nodemon] starting `ts-node ./src/main.ts`

Created initial dashboard account succeeded.
Successfully connected to the db.
App running on http://localhost:5000
```
