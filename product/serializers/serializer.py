from ..models import products,category
from rest_framework import serializers





# serailizer for get the product list
class productListSerializer(serializers.ModelSerializer):
    class Meta:
        model=products
        fields=['title','price','category','image','description','created_at']


# serailizer for post the product
class productPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=products
        fields=['title','price','category','image','description']

# serializer for get the category list
class categoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model=category
        fields=['id','category_title','image','description','created_at']

# serializer for post the category
class categoryPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=category
        fields=['category_title','image','description']





