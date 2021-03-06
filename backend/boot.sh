#!/bin/bash

# wait for Postgres to start
function postgres_ready(){
python << END
import sys
import psycopg2
try:
    conn = psycopg2.connect(dbname="arabi_web", user="root", password="root", host="db-postgres")
except psycopg2.OperationalError:
    sys.exit(-1)
sys.exit(0)
END
}

until postgres_ready; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

# cat <(echo "yes") - | python manage.py flush

python manage.py makemigrations

python manage.py migrate

# create django root user (only development mode)
python manage.py syncdb --noinput
echo "from django.contrib.auth.models import User; User.objects.create_superuser('root', 'root@root.com', 'root')" | python manage.py shell

python manage.py runserver 0.0.0.0:8000
