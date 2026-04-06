from rest_framework import serializers
from ..models import UserProfile,ProductOrder,ProductReview,CommentProduct,DeliveryInformation,CartModel,BillingOrder


#serailizer for list of userProfile
class UserProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['id','first_name','last_name','email','phone_number','profile_image','address', 'city','state','country','created_at','updated_at']

# serailzer for post userProfile
class UserProfilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['first_name','last_name','email','phone_number','profile_image','address', 'city','state','country']


# serializer for list of productOrder
class ProductOrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductOrder
        fields=['id','user_data','product','quantity','total_price','shipping_address','payment_status', 'created_at']


#serailizer for post productOrder
class ProductOrderPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductOrder
        fields=['user_data','product','quantity','total_price','shipping_address','payment_status','created_at']

#serialzier for list of productReview
class ProductReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductReview
        fields=['id','product','rating','comment','created_at']

#serializer for list of billingOrder
class ProductBillingListSerializer(serializers.ModelSerializer):
    class Meta:
        model=BillingOrder
        fields=['order_info','unit_price','total_price', 'discount_price','vat_price','customer_type','created_at','updated_at']

#serializer for post of billingOrder
class ProductBillingPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=BillingOrder
        fields=['order_info','unit_price','total_price', 'discount_price','vat_price','customer_type']


#serializer for post product review
class ProductReviewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductReview
        fields=['product','rating','comment','created_at']


#serializer for list of delivery infomation
class ListDeliveryInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model=DeliveryInformation
        fields=['id', 'slug','phone_number','building_no','colony','province','district','city','area','address','label','created_at','updated_at']

#serializer for post of delivery information
class DeliveryInformationPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=DeliveryInformation
        fields=['phone_number','building_no','colony','province','district','city','area','address','label']


#serializer for list comment 
class ListCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=CommentProduct
        fields=['id','product','comment','created_at','updated_at']


#serailizer for post comment 
class PostCommentSerailizer(serializers.ModelSerializer):
    class Meta:
        model=CommentProduct
        fields=['product','comment']


#seralizer for list cart
class CartListSerializer(serializers.ModelSerializer):
    class Meta:
        model=CartModel
        fields='__all__'


#serailzier for post cart
class CartPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=CartModel
        fields=['user','product','quantity']


