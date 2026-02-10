from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from product.models import products
from django.core.validators import MinValueValidator,MaxValueValidator

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

PAYMENT_STATUS_CHOICES = [
    ("PENDING", "Pending"),
    ("SUCCESS", "Success"),
    ("FAILED", "Failed"),
    ("CANCELLED", "Cancelled"),
    ("REFUNDED", "Refunded"),
]


# model for userProfile
class userProfile(models.Model):
    first_name=models.CharField(max_length=299,null=False)
    last_name=models.CharField(max_length=299)
    email=models.EmailField(max_length=300,unique=True)
    phone_number=PhoneNumberField(null=False,unique=True,max_length=12)
    profile_image=models.ImageField(upload_to='profileImage/',blank=True,null=True)
    address=models.CharField(max_length=200,null=True,blank=True)
    city=models.CharField(max_length=500,null=True,blank=True)
    state=models.CharField(choices=stateChoice,max_length=200,null=True,blank=True)
    country=models.CharField(default='Nepal',max_length=30,null=True,blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)




    def __str__(self):
        return f'{self.first_name}+{self.last_name}'
    


# model  for order products 
class productOrder(models.Model):
    product=models.ForeignKey(products,on_delete=models.CASCADE)
    quantity=models.PositiveIntegerField(default=1,validators=[MinValueValidator(1),MaxValueValidator(100)])
    total_price=models.PositiveIntegerField()
    shipping_address=models.CharField(max_length=300)
    payment_status=models.CharField(max_length=50,choices=PAYMENT_STATUS_CHOICES)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)


    def __str__(self):
        return f'order of {self.product}'
    


# product review models
class productReview(models.Model):
    product=models.ForeignKey(products,on_delete=models.CASCADE)
    rating=models.PositiveIntegerField(choices=[(i,str(i)) for i in range(1,6)])
    comment=models.TextField(blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)


#cart model for customer
class cartModel(models.Model):
    pass

# payment models for customer
class paymentModel(models.Model):
    pass




    
    




    

