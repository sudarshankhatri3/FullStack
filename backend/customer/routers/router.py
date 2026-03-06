from rest_framework.routers import DefaultRouter
from ..viewsets.viewset import UserProfileViewset,ProductOrderViewset,ProductReviewViewSet

#sub router for the customer app
customer=DefaultRouter()
customer.register('userProfile',UserProfileViewset,basename='userProfile')
customer.register('productOrder',ProductOrderViewset,basename='productOrder')
customer.register('productReview',ProductReviewViewSet,basename='productReview')
