from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(default='')
    pub_date = models.DateTimeField('date published', null=True)
    def __str__(self):
        return self.title


class Comment(models.Model):
    content = models.CharField(max_length=200, default='')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, default=1)
    def __str__(self):
        return self.content