# OrderIt

This repository contains both server-side and client side for OrderIt web application written
using [Django](https://www.djangoproject.com/) and [React](https://reactjs.org/).

## Prerequisites
 * Python v3.6 or later
 * node.js v14.x
 * Django packages
 * postgres

## Dev Environment Setup

### Virtual Environment Setup

Using a virtual environment is recommended for this project, you can use the following commands to
set up a python Virtual Environment

```shell
# Set up new virtual environment. (Need only once)
pip install pipenv
python -m venv ./venv

# Activate virtual environment.
# You may need to run the command before starting the app everytime if not activated
source venv/bin/activate
```

### DB Install
Database installation instructions can be found at [Postgresql](https://www.postgresql.org/download).

### DB Setup
Name of the database: **orderit_db**

Log in as admin role (postgres) in psql command line interface

    sudo -u postgres psql

Create database

    CREATE DATABASE orderit_db;

You may use a different db name, but you need to make sure to set the same database name across the project.

Create user with a password for the created database

    CREATE USER <username> WITH ENCRYPTED PASSWORD '<password>';

Grant privilege to the user created

    GRANT ALL PRIVILEGES ON DATABASE orderit_db TO <username>;

### Backend dependency setup

Install required django packages by running the following command in terminal from OrderIt directory

    pip install -r requirements.txt

### Activate server debugging (Optional)

Currently, the debugging is turned off which means api call will not print any debug message to response.
The terminal will still print the debug message.
To activate the debugging go to [backend/settings.py](backend/settings.py) and change the value of `DEBUG` to `True`

    DEBUG = True

### Frontend dependency setup

We are using `yarn` as a package manager. Keep in mind not to use npm.
To install the dependency, run the following command:

    yarn install

### Configuration

#### Environment Variables

For environment variable, you can set the variables any way you'd like but this project uses `dotenv` to easily manage
local environment variables. Most of the required environment variables are listed in `sample.env`.

To set these variable, we recommend you to create a new `.env` file and copy the sample from `sample.env` to `.env` file
and update the value of the variables accordingly.
The `.env` file will automatically be ignored by git.


#### Migrate Database

Once you have Postgres installed and environment variable set up correctly for database, you need to run all migrations.
The command to run the migration:

    python manage.py migrate

Everytime after updating the Database models in the project following command must be used to update
the psql database.

    python manage.py makemigrations
    python manage.py migrate

### Running tests

#### Frontend/React app tests

    cd frontend/
    yarn test

#### Backend/Django app tests

##### This needs correct migration to run

    ./manage.py test

##### This does not need migration to be run

    ./manage.py test -n

### Running Locally

To start the frontend/React app, run the following command on `frontend/` folder:

    cd frontend/
    yarn start

To run the backend/Django app, run the following command from project's root folder:

    python manage.py runserver
