## Run application in local
### Setup project
*** Step 1: *** install gems
```bundle install```

*** Step 2: *** install npm package by yarn (this is for running react, please make sure you have NodeJS v18.17.1)
```yarn install```

*** Step 3: *** start project by foreman (https://github.com/ddollar/foreman)

```foreman start -f Procfile.dev```

*** Note: *** The application will be running on the port 3001, please check the file: Procfile.dev for changing to any port that you want
