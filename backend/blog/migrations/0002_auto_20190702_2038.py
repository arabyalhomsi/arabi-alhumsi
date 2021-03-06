# Generated by Django 2.2.3 on 2019-07-02 20:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='blog.Post'),
        ),
        migrations.AddField(
            model_name='post',
            name='content',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='post',
            name='pub_date',
            field=models.DateTimeField(null=True, verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.CharField(default='', max_length=200),
        ),
    ]
