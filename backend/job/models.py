from django.db import models


# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    budget = models.FloatField()
    date_created = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.title