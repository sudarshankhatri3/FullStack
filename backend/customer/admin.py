from django.contrib import admin
from .models import UserProfile,ProductOrder,ProductReview,DeliveryInformation,CartModel,CommentProduct,BillingOrder

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(ProductOrder)
admin.site.register(ProductReview)
admin.site.register(BillingOrder)
admin.site.register(DeliveryInformation)
admin.site.register(CartModel)
admin.site.register(CommentProduct)
