from django.db import models

# Create your models here.

class SettingPoint(models.Model):
    key = models.CharField(max_length=200, unique=True)
    value = models.TextField(default='')

    def __str__(self):
        return self.key