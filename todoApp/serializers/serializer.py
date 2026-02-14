from rest_framework import serializers
from ..models import todoData


#list serializer for todoApp
class todoListSerializer(serializers.ModelSerializer):
    class Meta:
        model=todoData
        fields=['id','slug','title','priority','completed','final_date','due_date','is_important','description','created_at','updated_at']


#serializer for create new data
class todoPostSerializer(serializers.ModelSerializer):
     class Meta:
        model=todoData
        fields=['title','priority','completed','final_date','due_date','is_important','description']


