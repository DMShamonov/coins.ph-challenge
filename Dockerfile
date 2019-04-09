FROM nginx:1.15-alpine

COPY configs/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/
