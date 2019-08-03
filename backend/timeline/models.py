from django.db import models

# Create your models here.

class TimelineEntry(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(default='')
    date = models.DateTimeField('Date', null=True)
    def __str__(self):
        return self.title

    