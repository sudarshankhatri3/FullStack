from rest_framework import viewsets
from ..serailizers.serializer import (
    ProductOrderListSerializer,
    ProductOrderPostSerializer,
    ProductReviewPostSerializer,
    ProductReviewListSerializer,
    UserProfileListSerializer,
    UserProfilePostSerializer,
    ListDeliveryInformationSerializer,
    DeliveryInformationPostSerializer,
    ListCommentSerializer,
    PostCommentSerailizer
    )
from ..models import UserProfile,ProductOrder,ProductReview,DeliveryInformation,CommentProduct


#viewset for the userProfile
class UserProfileViewset(viewsets.ModelViewSet):
    queryset=UserProfile.objects.all().order_by('-id')
    serializer_class=UserProfileListSerializer


    def get_serializer_class(self):
        if self.action =='list':
            return UserProfileListSerializer
        elif self.action in ['create','update','partial_update']:
            return UserProfilePostSerializer
        return UserProfileListSerializer
    


#viewset for the productOrder
class ProductOrderViewset(viewsets.ModelViewSet):
    queryset=ProductOrder.objects.all().order_by('-id')
    serializer_class=ProductReviewListSerializer


    #serailizer class  for perfom operation like get,post,update,pathc
    def get_serializer_class(self):
        if self.action=='list':
            return ProductOrderListSerializer
        elif self.action in ['create','update','partial_update']:
            return ProductOrderPostSerializer
        return ProductOrderListSerializer
    

#viewset for product review 
class ProductReviewViewSet(viewsets.ModelViewSet):
    queryset=ProductReview.objects.all().order_by('-id')
    serializer_class=ProductReviewListSerializer


    #serializer class for perfom operation like get,post,put,patch 
    def get_serializer_class(self):
        if self.action=='list':
            return ProductReviewListSerializer
        elif self.action in ['create','update','partial_update']:
            return ProductReviewPostSerializer
        return ProductReviewListSerializer



#viewset for delivery information
class DeliveryInformationViewset(viewsets.ModelViewSet):
    queryset=DeliveryInformation.objects.all().order_by('-id')
    serializer_class=ListDeliveryInformationSerializer


    def get_serializer_class(self):
        if self.action =="list":
            return ListDeliveryInformationSerializer
        elif self.action in ['create','update','partial_update']:
            return DeliveryInformationPostSerializer
        return ListDeliveryInformationSerializer
    

#viewset for comment model
class CommentProductViewset(viewsets.ModelViewSet):
    queryset=DeliveryInformation.objects.all().order_by('-id')
    serializer_class=ListCommentSerializer


    def get_serializer_class(self):
        if self.action=='list':
            return ListCommentSerializer
        elif self.action in ['create','update','partial_update']:
            return PostCommentSerailizer
        return ListCommentSerializer