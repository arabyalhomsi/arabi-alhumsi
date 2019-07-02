from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    
    def __str__(self):
        return self.title


class Comment(models.Model):
    content = models.CharField(max_length=200)

    def __str__(self):
        return self.content