from django.db import models
from django.contrib.auth.models import AbstractUserUser

# Create your models here.
class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, unique=True)
    
   