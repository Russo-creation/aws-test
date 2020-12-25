FROM node:14.15.3-alpine3.10 as react_build 

WORKDIR /app

#--------------------------- Run with Nginx for webserver experiments

# ## copy the react app to the container
# COPY . /app/ 

# RUN yarn install --network-timeout 1000000

# ## add environment variables
# ARG REACT_APP_API_URL
# ENV REACT_APP_API_URL $REACT_APP_API_URL

# ARG REACT_APP_FRONTEND_URL
# ENV REACT_APP_FRONTEND_URL $REACT_APP_FRONTEND_URL

# ## build production version of website
# RUN yarn run build

# ## prepare nginx
# FROM nginx:1.19.5-alpine

# COPY --from=react_build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/local/nginx.conf /etc/nginx/conf.d

# EXPOSE 80 443
# CMD ["nginx","-g","daemon off;"]

#--------------------------- Run without Nginx for developing mode (development frendly)


COPY package.json /app

RUN yarn install --network-timeout 1000000

## add environment variables
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL

ARG REACT_APP_FRONTEND_URL
ENV REACT_APP_FRONTEND_URL $REACT_APP_FRONTEND_URL

COPY . /app

EXPOSE 3000
CMD ["yarn", "run", "start"]