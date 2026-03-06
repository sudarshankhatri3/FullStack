from django.contrib import admin
from .models import UserProfile,ProductOrder,ProductReview,DeliveryInformation,CartModel,paymentModel

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(ProductOrder)
admin.site.register(ProductReview)
admin.site.register(DeliveryInformation)
admin.site.register(CartModel)
