FROM php:8.0.5-apache-buster
LABEL Name=10CFECHALLENGE Version=1.0.0

RUN a2dissite 000-default
RUN rm /etc/apache2/sites-available/*.conf
ADD apache/project.conf /etc/apache2/sites-available

RUN mkdir /etc/apache2/ssl
COPY apache/ssl/* /etc/apache2/ssl/

RUN mv $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini

RUN a2enmod ssl
RUN a2enmod headers
RUN a2enmod rewrite

RUN mkdir -p /var/www/apps/wpapp
RUN mkdir -p /var/log/apache2/apps/wpapp

RUN chown -R www-data:www-data /var/www/apps
RUN chown -R www-data:www-data /var/log/apache2/apps

RUN a2ensite project
EXPOSE 443
RUN service apache2 stop

RUN apt-get update
RUN apt-get install -y libxml2-dev tzdata zlib1g-dev libpng-dev imagemagick libmagickwand-dev
RUN apt-get install -y libzip-dev zlib1g-dev libicu-dev g++

# ENABLING MYSQLI EXT
RUN docker-php-ext-install mysqli
RUN docker-php-ext-install gd
RUN docker-php-ext-install exif
RUN docker-php-ext-install zip
RUN docker-php-ext-install intl

RUN pecl install imagick && docker-php-ext-enable imagick

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
