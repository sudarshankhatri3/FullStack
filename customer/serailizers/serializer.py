from rest_framework import serializers
from ..models import userProfile,productOrder,productReview


#serailizer for list of userProfile
class userProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model=userProfile
        fields=['id','first_name','last_name','email','phone_number','profile_image','address', 'city','state','country','created_at']

# serailzer for post userProfile
class userProfilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model=userProfile
        fields=['first_name','last_name','email','phone_number','profile_image','address', 'city','state','country']


# serializer for list of productOrder
class productOrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model=productOrder
        fields=['id','product quantity','total_price','shipping_address','payment_status', 'created_at']


#serailizer for post productOrder
class productOrderPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=productOrder
        fields=['product quantity','total_price','shipping_address','payment_status','created_at']

#serialzier for list of productReview
class productReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model=productReview
        fields=['id','product','rating','comment','created_at']


#serializer for post product review
class productReviewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=productReview
        fields=['product','rating','comment','created_at']
