from rest_framework.routers import DefaultRouter
from ..viewsets.viewset import productOrderViewset,userProfileViewset



# create router for the customer 
customer=DefaultRouter()
customer.register('productOrder',productOrderViewset,basename='productOrderViewset')
customer.register('customerProfile',userProfileViewset,basename='customerProfile')
