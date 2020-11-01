from django.db import models
from django.utils import timezone

# Create your models here.

STATUS = ((0,'Draft'), (1, 'Publish'))

class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=50)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    message = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    image_upload = models.ImageField(default='default.png', blank=True)

    class Meta:
        ordering = ['-created_date']

    def __str__(self):
        return self.title

class subscriber(models.Model):
    email = models.EmailField(max_length=50)

    def __str__(self):
        return self.email
