from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    budget = models.FloatField()
    location = models.CharField(max_length= 50,default="Nairobi")
    company = models.CharField(max_length=30, default="Safaricom")
    date_created = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.title
    
class Post(models.Model):
    user = models.ForeignKey(User,on_delete= models.CASCADE,  related_name="posts")
    content = models.TextField()
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.content[:20]
    
class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    user = models.ForeignKey(User,on_delete= models.CASCADE,  related_name="comment")
    comment = models.TextField()
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.comment[:20]