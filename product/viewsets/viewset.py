from ..models import products,category
from ..serializers.serializer import productListSerializer,productPostSerializer,categoryListSerializer,categoryPostSerializer
from rest_framework import viewsets




#viewset for the product 
class productViewset(viewsets.ModelViewSet):
    queryset=products.objects.all().order_by('-id')
    serializer_class=productListSerializer


    def get_serializer_class(self):
        if self.action=='list':
            return productListSerializer
        elif self.action in ['create','update','partial_update']:
            return productPostSerializer
        return super().get_serializer_class()
    

    def destroy(self, request, *args, **kwargs):
        instance=self.get_object()
        self.perform_destroy(instance)
        return Response({'message': 'Object successfully deleted'}, status=status.HTTP_204_NO_CONTENT)
    



# viewset for category
class categoryViewset(viewsets.ModelViewSet):
    queryset=category.objects.all().order_by('-id')
    serializer_class=categoryListSerializer




    def get_serializer_class(self):
        if self.action=="list":
            return categoryListSerializer
        elif self.action in ['create','update','partial_update']:
            return categoryPostSerializer
        return super().get_serializer_class()
    

    def destroy(self, request, *args, **kwargs):
        instance=self.get_object()
        self.perform_destroy(instance)

        return Response({'message':'Object successfully deleted'},status=status.HTTP_204_NO_CONTENT)