from rest_framework.routers import DefaultRouter
from ..viewsets.viewset import productViewset,categoryViewset


product=DefaultRouter()
product.register('vendorProduct',productViewset,basename='productlistapi')
product.register('category',categoryViewset,basename='categorylistapi')
