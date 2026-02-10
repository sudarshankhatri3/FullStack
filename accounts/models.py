from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.utils import timezone

# Create your models here.
class signUpModel(AbstractBaseUser):
    email=models.EmailField(max_length=255,unique=True)
    role=models.CharField(choices='')
    is_active=models.BooleanField(default=False)
    date_joined=models.DateTimeField(timezone.now())


    def __str__(self):
        return f'accounts ${self.email}'
