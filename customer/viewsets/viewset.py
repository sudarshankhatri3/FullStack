from rest_framework import viewsets
from ..serailizers.serializer import (
    productOrderListSerializer,
    productOrderPostSerializer,
    productReviewPostSerializer,
    productReviewListSerializer,
    userProfileListSerializer,
    userProfilePostSerializer
    )
from ..models import userProfile,productOrder,productReview


#viewset for the userProfile
class userProfileViewset(viewsets.ModelViewSet):
    queryset=userProfile.objects.all().order_by('-id')
    serializer_class=userProfileListSerializer


    def get_serializer_class(self):
        if self.action =='list':
            return userProfileListSerializer
        elif self.action in ['create','update','partial_update']:
            return userProfilePostSerializer
        return userProfileListSerializer
    


#viewset for the productOrder
class productOrderViewset(viewsets.ModelViewSet):
    queryset=productOrder.objects.all().order_by('-id')
    serializer_class=productReviewListSerializer


    #serailizer class  for perfom operation like get,post,update,pathc
    def get_serializer_class(self):
        if self.action=='list':
            return productOrderListSerializer
        elif self.action in ['create','update','partial_update']:
            return productOrderPostSerializer
        return productOrderListSerializer
    

#viewset for product review 
class productReviewViewSet(viewsets.ModelViewSet):
    queryset=productReview.objects.all().order_by('-id')
    serializer_class=productReviewListSerializer


    #serializer class for perfom operation like get,post,put,patch 
    def get_serializer_class(self):
        if self.action=='list':
            return productReviewListSerializer
        elif self.action in ['create','update','partial_update']:
            return productReviewPostSerializer
        return productReviewListSerializer
