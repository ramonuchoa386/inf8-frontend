FROM nginx:alpine

COPY ./build/ /usr/share/nginx/html/inf8
COPY ./devops/default.conf /etc/nginx/conf.d/default.conf
COPY ./devops/nginx.conf /etc/nginx/nginx.conf

RUN chmod -R 755 /usr/share/nginx/html/inf8

RUN chown -R nginx:nginx /usr/share/nginx/html/inf8 \
    && chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/log/nginx \
    && chown -R nginx:nginx /var/run/nginx.pid \
    && chown -R nginx:nginx /etc/nginx/conf.d

USER nginx

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
