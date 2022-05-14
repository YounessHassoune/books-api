
# SIMPLE BOOKS API

simpel books api  created using samsony and api platform


## How to run the project ?

### server
To run the server, run the following commands

1- access the server folder
```
cd server
```

2- install the dependencies
```
composer install
```

3- run the database container
```
docker compose up 
```

4- load the fixture to the database
```
php bin/console doctrine:fixtures:load
```

5- start the server
```
symfony server:start 
```

### web
To run the web sever, run the following commands

1- access the web folder
```
cd web
```

2- install the dependencies
```
yarn 
```

3- install the dependencies
```
yarn start 
```

## Running Tests

To run tests, run the following commands

### For the Backend

1- create the test databse
```
php bin/console --env=test doctrine:database:create
```

2- create tables schema
```
php bin/console --env=test doctrine:schema:create
```

3- load the fixture to test database
```
php bin/console doctrine:fixtures:load --env=test
```
4- run the tests
```
vendor/bin/phpunit
```
### For the Frontend

3- run the tests 
```
yarn test
```





## 🔗 Docs
[symfony](https://symfony.com/doc/current/index.html/)

[api-platforme](https://api-platform.com/docs)


