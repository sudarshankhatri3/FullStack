from rest_framework.routers import DefaultRouter
from ..viewsets.viewset import userProfileViewset,productOrderViewset,productReviewViewSet

#sub router for the customer app
customer=DefaultRouter()
customer.register('userProfile',userProfileViewset,basename='userProfile')
customer.register('productOrder',productOrderViewset,basename='productOrder')
customer.register('productReview',productReviewViewSet,basename='productReview')
