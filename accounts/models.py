from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

# Create your models here.
class signUpModel(AbstractUser):
    password1=models.CharField(max_length=30)
    password2=models.CharField(max_length=30)
    email=models.EmailField(max_length=255,unique=True)
    role=models.CharField(choices='')
    is_active=models.BooleanField(default=False)
   


    def __str__(self):
        return f'accounts ${self.email}'
    



    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []