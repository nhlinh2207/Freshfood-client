FROM node:18.16.1-bullseye as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:1.19-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/dist/ .
COPY deploy/entrypoint.sh .
EXPOSE 80
RUN chmod +x /usr/share/nginx/html/entrypoint.sh
ENTRYPOINT ["/usr/share/nginx/html/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
