# Template for docker, deploy and E2E tests

Tech stack:
- fontend: Nginx, React (CRA boilerplate, E2E jest tests with puppeteer)

- backend: Node.js (Express), GraphQL

- database: MySql, PhpMyAdmin (only locally)

# Secure your project

**You should definitely exclude from repository files below**

Remember to uncomment (prepared section lines) this files in `.gitignore`
1. `./env`
2. `./frontend/dev.env`
3. `./frontend/prod.env`
4. `./frontend/nginx/auth/.htpasswd`

# Files to modification
* Github CI/CD scripts `./.github/workflows/dev.deploy-and-tests.yml` (especially deploy directories)
* All .env files from secure section and .htpasswd you can generate new password in 
[htpasswd genertor](http://aspirine.org/htpasswd_en.html)
* Database in docker build- here should be different approach (it is included here only for demonstration purposes)

# Instructions

After cloning repository depends of environment that you want to run service you do it through:

* Prod version
```
docker-compose -f docker-compose.prod.yml up -d
```
* Dev version
```
docker-compose -f docker-compose.dev.yml up -d
```
* local version

1. Way (for testing whole service structures)
```
docker-compose -f docker-compose.local.yml up -d
```
2. Way (recommended for developing)
```
docker-compose up -d
```
More info about how to run particular service you can find in `./frontend/README.md` and `./backend/README.md`

# 
Store your backend files in directory `./backend/uploads/data/` on your server