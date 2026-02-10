from django.db import models


# Create your models here.
class category(models.Model):
    category_title=models.CharField(max_length=450,unique=True)
    slug=models.SlugField(default=category_title,null=False,max_length=50,unique=True)
    unit_price=models.BigIntegerField()
    image=models.ImageField(upload_to='category/')
    description=models.CharField(max_length=2000)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.category_title






class products(models.Model):
    title=models.CharField(max_length=100)
    slug=models.SlugField(default=title,null=False,max_length=50,unique=True)
    price=models.PositiveIntegerField()
    category=models.ForeignKey(category,on_delete=models.CASCADE)
    image=models.ImageField(upload_to='products/')
    description=models.CharField(max_length=1000)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)



    def __str__(self):
        return self.title
    


