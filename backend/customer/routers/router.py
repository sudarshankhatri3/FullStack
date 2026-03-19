from rest_framework.routers import DefaultRouter
from ..viewsets.viewset import UserProfileViewset,ProductOrderViewset,ProductReviewViewSet,DeliveryInformationViewset,CommentProductViewset,CartViewset,ProductBillingViewset

#sub router for the customer app
customer=DefaultRouter()
customer.register('userProfile',UserProfileViewset,basename='user_Profile')
customer.register('productOrder',ProductOrderViewset,basename='product_Order')
customer.register('productReview',ProductReviewViewSet,basename='productReview')
customer.register('deliveryInformation',DeliveryInformationViewset,basename='delivery_information')
customer.register('commentProduct',CommentProductViewset,basename='comment_product')
customer.register('cartProduct',CartViewset,basename='cart_product')
customer.register('billingOrder',ProductBillingViewset,basename='billingOrder')