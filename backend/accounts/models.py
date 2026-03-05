from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

# Create your models here.
userRole=[
    ('VENDOR','Vendor'),
    ('CUSTOMER','Customer')
]
class signUpModel(AbstractUser):
    email=models.EmailField(max_length=255,unique=True)
    role=models.CharField(choices=userRole,default='customer')
    is_active=models.BooleanField(default=False)
    privacy_policy=models.BooleanField(default=False)
   


    def __str__(self):
        return f'accounts ${self.email}'
    



    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []