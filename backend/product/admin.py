from django.contrib import admin
from .models import products,category,myData

# Register your models here.
admin.site.register(products)
admin.site.register(category)
admin.site.register(myData)

