# Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## 1. Way for developing (recommended)

1. Build docker with MySQL and PhpMyAdmin
```
docker-compose up -d
```
2. Preparing backend
* Go to `../backend` directory and install dependencies
```
yarn install
```
* After installing dependencies you can run nodejs service (with watch) on [localhost:4008](http://localhost:4008)
```
yarn run dev
```
3. Preparing frontend
* Go to `../frontend` directory and install dependencies
```
yarn install
```
* After installing dependencies you can run react service (with watch) on [localhost:3000](http://localhost:3000)
```
yarn start
```


## 2. Way for developing (for small improvments)
In this method you are not able to make changes on fly in dependency (installing additional libraries to package.json) on **backend**, if you want to see changes in dependency then you will have to **rebuild docker**

1. Go to main directory and run
```
docker-compose -f docker-compose.local.yml up -d
```
2. Check if website is running at [localhost](http://localhost)

# E2E TESTS
Depends of environment that you are running service you can test it through:


* docker-compose.yml
```
yarn run test_local
```

* docker-compose.local.yml
```
yarn run test_local
```

* docker-compose.dev.yml
```
yarn run test_dev
```

* docker-compose.prod.yml
```
yarn run test_prod
```

Images from testing are stored in directory `../__image_snapshots__`

To replace reference image with new one just remove reference image and run tests again