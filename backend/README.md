# Backend

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