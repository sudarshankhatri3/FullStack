from rest_framework.routers import DefaultRouter
from ..viewsets.viewset import productViewset,categoryViewset


product=DefaultRouter()
product.register('productlistApi',productViewset,basename='productlistapi')
product.register('categorylistApi',categoryViewset,basename='categorylistapi')
