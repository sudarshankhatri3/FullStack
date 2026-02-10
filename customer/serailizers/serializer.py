from rest_framework import serailizers
from ..models import userProfile,productOrder,productReview


#serailizer for list of userProfile
class userProfileListSerializer(serailizers.ModelSerializer):
    class Meta:
        model=userProfile
        fields=['id','first_name','last_name','email','phone_number','profile_image',' address', 'city','state','country','created_at']

# serailzer for post userProfile
class userProfilePostSerializer(serailizers.ModelSerializer):
    class Meta:
        model=userProfile
        fields=['first_name','last_name','email','phone_number','profile_image',' address', 'city','state','country']


# serializer for list of productOrder
class productOrderListSerializer(serailizers.ModelSerializer):
    class Meta:
        model=productOrder
        fields=['id','product quantity','total_price','shipping_address','payment_status', 'created_at']


#serailizer for post productOrder
class productOrderPostSerializer(serailizers.ModelSerializer):
    class Meta:
        model=productOrder
        fields=['product quantity','total_price','shipping_address','payment_status','created_at']

#serialzier for list of productReview
class productReviewListSerializer(serailizers.ModelSerializer):
    class Meta:
        model=productReview
        fields=['id','product','rating','comment','created_at']


#serializer for post product review
class productReviewPostSerializer(serailizers.ModelSerializer):
    class Meta:
        model=productReview
        fields=['product','rating','comment','created_at']
