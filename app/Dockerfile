
# Build web server Docker container
# reference: http://rdn-consulting.com/blog/2014/11/29/publishing-a-static-angularjs-application-with-docker/
# to build the docker image: sudo docker build -t weifang993/web-client-es6 .
# to run the docker image: sudo docker run -d -p 9000:80 weifang993/web-client-es6 /usr/sbin/apache2ctl -D FOREGROUND
# make sure node-server-es6 container is running. 
# test the web client: http://localhost:9000/
FROM coreos/apache
MAINTAINER weifang993
COPY ./browser /var/www/
