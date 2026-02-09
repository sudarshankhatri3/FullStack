from rest_framework import viewsets
from ..models import productOrder,userProfile
from ..serializers.serializer import (
    productOrderListSerializer,
    userProfileListSerializer,
    userProfilePosterializer,
    productOrderPostSerializer,
)



#viewset class for productOrder
class productOrderViewset(viewsets.ModelViewSet):
    queryset=productOrder.objects.all().order_by('-id')
    serializer_class=productOrderListSerializer

    # perform the http methods
    def get_serializer_class(self):
        if self.action =='list':
            return productOrderListSerializer
        elif self.action in ['create','update','partial_update']:
            return productOrderPostSerializer
        return super().get_serializer_class()
    

    def destroy(self, request, *args, **kwargs):
        instance=self.get_object()
        if instance:
            self.perform_destroy(instance)
            return ({'message':'Deleted sucessfullly'},status==status.HTTP_204_NO_CONTENT,)
        

class userProfileViewset(viewsets.ModelViewSet):
    queryset=userProfile.objects.all().order_by('-id')
    serializer_class=userProfileListSerializer


    def get_serializer_class(self):
        if self.action=='list':
            return userProfileListSerializer
        elif self.action in ['create','update','partial_update']:
            return userProfilePosterializer
        return super().get_serializer_class()
       
   
    #perform the destroy operation
    def destroy(self,request,*args,**kwargs):
        instance=self.get_object()
        if instance:
            self.perform_destroy(instance)
            return ({'message':'Data removed sucessfully'},status==status.HTTP_204_NO_CONTENT,)
