from django.db import models

from django.contrib.auth.models import AbstractUser

# Create your models here.
class user(AbstractUser):
    userId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=150)
    