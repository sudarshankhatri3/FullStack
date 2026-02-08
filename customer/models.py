from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

stateChoice=[
    ("Koshi", "Koshi Province"),
    ("Madhesh", "Madhesh Province"),
    ("Bagmati", "Bagmati Province"),
    ("Gandaki", "Gandaki Province"),
    ("Lumbini", "Lumbini Province"),
    ("Karnali", "Karnali Province"),
    ("Sudurpashchim", "Sudurpashchim Province"),
]

class userProfile(models.Model):
    first_name=models.CharField(max_length=299,null=False)
    last_name=models.CharField(max_length=299)
    email=models.EmailField(max_length=300,unique=True)
    phone_number=PhoneNumberField(null=False,unique=True,max_length=12)
    profile_image=models.ImageField(upload_to='profileImage/',blank=True,null=True)
    city=models.CharField(max_length=500)
    state=models.CharField(choices=stateChoice,max_length=200)
    country=models.CharField(default='Nepal',max_length=30)



    def __str__(self):
        return f'{self.first_name}+{self.last_name}'
    

