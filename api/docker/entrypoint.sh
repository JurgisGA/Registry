#!/bin/sh
set -e
if [ -z "$APP_KEY" ]; then
  echo ">>> APP_KEY missing – generating…"
  php artisan key:generate --no-interaction
fi
php artisan migrate --force --no-interaction
echo ">>> Starting Laravel on :${PORT:-8080}"
exec php -d variables_order=EGPCS -S 0.0.0.0:${PORT:-8080} -t public router.php
