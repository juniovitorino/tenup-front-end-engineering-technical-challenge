FROM php:8-apache-buster

# Config Apache
RUN a2dissite 000-default
RUN rm /etc/apache2/sites-available/*.conf
ADD apache/project.conf /etc/apache2/sites-available

RUN a2enmod headers
RUN a2enmod rewrite

RUN mkdir -p /var/www/html/wpapp
RUN mkdir -p /var/log/apache2/wpapp

RUN chown -R www-data:www-data /var/www/html/wpapp
RUN chown -R www-data:www-data /var/log/apache2/wpapp

COPY src/ /var/www/html/wpapp

RUN a2ensite project
EXPOSE 80
RUN service apache2 stop

RUN apt-get update
RUN apt-get install -y libxml2-dev tzdata

# Config PHP

RUN mv /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini
ENV php_conf /usr/local/etc/php/php.ini
RUN sed -i -e "s/upload_max_filesize\s*=\s*2M/upload_max_filesize = 128M/g" ${php_conf} && \
	sed -i -e "s/post_max_size\s*=\s*8M/post_max_size = 128M/g" ${php_conf} && \
	sed -i -e "s/variables_order = \"GPCS\"/variables_order = \"EGPCS\"/g" ${php_conf}

# Configure SO
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ENV LANG=pt_BR.UTF-8
RUN apt-get install -y locales-all locales
RUN dpkg-reconfigure --frontend=noninteractive locales
RUN update-locale LANG=pt_BR.UTF-8 LC_ALL=pt_BR.UTF-8 LC_TIME=pt_BR.UTF-8 LANGUAGE=pt_BR:pt:en
ENV LANG=pt_BR.UTF-8
ENV LANGUAGE=pt_BR:pt:en
ENV LC_CTYPE=pt_BR.UTF-8
ENV LC_NUMERIC=pt_BR.UTF-8
ENV LC_TIME=pt_BR.UTF-8
ENV LC_COLLATE=pt_BR.UTF-8
ENV LC_MONETARY=pt_BR.UTF-8
ENV LC_MESSAGES=pt_BR.UTF-8
ENV LC_PAPER=pt_BR.UTF-8
ENV LC_NAME=pt_BR.UTF-8
ENV LC_ADDRESS=pt_BR.UTF-8
ENV LC_TELEPHONE=pt_BR.UTF-8
ENV LC_MEASUREMENT=pt_BR.UTF-8
ENV LC_IDENTIFICATION=pt_BR.UTF-8
ENV LC_ALL=pt_BR.UTF-8
ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/


# ENABLING MYSQLI EXT
RUN docker-php-ext-install mysqli

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
