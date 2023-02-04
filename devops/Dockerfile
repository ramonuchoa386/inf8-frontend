FROM nginx:alpine

COPY ./build/ /usr/share/nginx/html/inf8
COPY ./devops/default.conf /etc/nginx/conf.d/default.conf
COPY ./devops/nginx.conf /etc/nginx/nginx.conf

RUN chmod -R 755 /usr/share/nginx/html

RUN chown -R 101:0 /var/cache/nginx \
    && chmod -R g+w /var/cache/nginx \
    && chown -R 101:0 /etc/nginx \
    && chmod -R g+w /etc/nginx \
    && chown -R 101:0 /usr/share/nginx/ \
    && chmod -R g+w /usr/share/nginx/

USER nginx

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
