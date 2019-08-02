from django.db import models
import logging
from django.core.exceptions import ValidationError


# Create your models here.
# In this file, validation is done at the model level

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(default='')
    pub_date = models.DateTimeField('pub_date', null=True)
    def __str__(self):
        return self.title
    
    # def clean(self):
        # if self.pub_date is None:
            # raise ValidationError("Publication date is required")
    
    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

class Comment(models.Model):
    content = models.CharField(max_length=200, default='')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, default=1)
    def __str__(self):
        return self.content