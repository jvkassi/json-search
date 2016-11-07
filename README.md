# Getting started

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=4.0* with NPM 3.

From the project folder, execute the following commands:

```shell
npm install
```

This will install all required dependencies, including a local version of Webpack that is going to
build and bundle the app. There is no need to install Webpack globally.

To run the app execute the following command:

```shell
npm start
```

# json-search

Given this `stations.json` file:

```json
[
  {
    "city": "Paris",
    "station_name": "Paris Gare-du-Nord",
    "id": 1,
    "lat": 48.8828,
    "long": 2.3567,
    "comments": "25/01/1846"
  },
  {
    "city": "Paris",
    "station_name": "Paris Gare-de-Lyon",
    "id": 2,
    "lat": 48.8448,
    "long": 2.3735,
    "comments": "12/08/1849"
  },
  {
    "city": "Lille",
    "station_name": "Lille Flandres",
    "id": 4,
    "lat": 50.636278,
    "long": 3.070944,
    "comments": ""
  },
  {
    "city": "Lyon",
    "station_name": "Lyon Part-Dieu",
    "id": 5,
    "lat": 45.759978,
    "long": 4.859669,
    "comments": ""
  }
]
```

1. Load `stations.json` data
2. Search for every station in the city of Paris
3. Find the closest station to Lyon Part-Dieu station
