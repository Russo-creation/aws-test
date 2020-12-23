FROM node:14.15.3-alpine3.10 as react_build 
#also say 
WORKDIR /app
#copy the react app to the container
COPY . /app/ 

#prepare the contiainer 
#install package manager- yarn
#RUN npm install -g yarn
RUN yarn install --network-timeout 1000000

#add environment variables
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL

ARG REACT_APP_FRONTEND_URL
ENV REACT_APP_FRONTEND_URL $REACT_APP_FRONTEND_URL

#build production version of website
RUN yarn run build

#prepare nginx
FROM nginx:1.19.5-alpine

COPY --from=react_build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/prod/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]