# Generated by Django 2.2.3 on 2019-08-01 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='settingpoint',
            name='key',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
