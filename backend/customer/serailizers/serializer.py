from rest_framework import serializers
from ..models import UserProfile,ProductOrder,ProductReview


#serailizer for list of userProfile
class UserProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['id','first_name','last_name','email','phone_number','profile_image','address', 'city','state','country','created_at']

# serailzer for post userProfile
class UserProfilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['first_name','last_name','email','phone_number','profile_image','address', 'city','state','country']


# serializer for list of productOrder
class ProductOrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductOrder
        fields=['id','product','quantity','total_price','shipping_address','payment_status', 'created_at']


#serailizer for post productOrder
class ProductOrderPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductOrder
        fields=['product','quantity','total_price','shipping_address','payment_status','created_at']

#serialzier for list of productReview
class ProductReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductReview
        fields=['id','product','rating','comment','created_at']


#serializer for post product review
class ProductReviewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductReview
        fields=['product','rating','comment','created_at']
