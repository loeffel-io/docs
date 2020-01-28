FROM httpd:2.4

COPY ./dist /usr/local/apache2/htdocs/

COPY ./.htaccess /usr/local/apache2/htdocs/.htaccess
COPY ./ssl/makeless.io.crt /usr/local/apache2/conf/server.crt
COPY ./ssl/makeless.io.key /usr/local/apache2/conf/server.key

RUN sed -i \
        -e 's/^#\(Include .*httpd-ssl.conf\)/\1/' \
        -e 's/^#\(LoadModule .*mod_ssl.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_socache_shmcb.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_rewrite.so\)/\1/' \
        conf/httpd.conf

RUN sed -i '/<Directory "\/usr\/local\/apache2\/htdocs">/,/<\/Directory>/ s/AllowOverride None/AllowOverride all/' conf/httpd.conf
