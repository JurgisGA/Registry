FROM php:8.3-cli
WORKDIR /app
COPY . /app
RUN apt-get update && apt-get install -y unzip libpq-dev git && docker-php-ext-install pdo_pgsql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-interaction --prefer-dist
CMD php artisan serve --host 0.0.0.0 --port 8000
