from django.contrib import admin
from .models import productOrder,productReview,userProfile,cartModel,paymentModel

# Register your models here.
admin.site.register(userProfile)
admin.site.register(productOrder)
admin.site.register(productReview)
admin.site.register(cartModel)
admin.site.register(paymentModel)
