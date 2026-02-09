from rest_framework import serializers
from ..models import productOrder,userProfile

# serializer for productorderList
class productOrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model=productOrder
        fields=['product','quantity','total_price','shipping_address','payment_status','created_at']

#serailizer for post data
class productOrderPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=productOrder
        fields=['product','quantity','total_price','shipping_address','payment_status']


# serailzer for userprofile data list
class userProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model=userProfile
        fields=['first_name','last_name','email','phone_number','profile_image','address','city',' state','country','created_at']


# serializer for post userprofile data
class userProfilePosterializer(serializers.ModelSerializer):
    class Meta:
        model=userProfile
        fields=['first_name','last_name','email','phone_number','profile_image','address','city',' state','country']

