ARG DOCKER_REGISTRY_PROXY
FROM ${DOCKER_REGISTRY_PROXY}/rhscl/httpd-24-rhel7:2.4-202.1661531717
WORKDIR /var/www/html
COPY ./devops/bin/deploy/apache-redhat/portaldev-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./devops/bin/deploy/apache-redhat/.htaccess ./
COPY ./build/ ./

USER 1001

EXPOSE 8080
