from rest_framework import serializers
from ..models import signUpModel



# serializer for signup
class registerSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    class Meta:
        model=signUpModel
        fields=['first_name','last_name','email','password1','password2','role']


    def validate(self, attrs):
        password1=attrs.get('password1')
        password2=attrs.get('password2')

        if not password1 or not password2:
            return serializers.ValidationError("Both password are required")
        
        if password1!=password2:
            return serializers.ValidationError("Both password not match")
        

    
        return attrs


    def create(self, validated_data):
        password=validated_data.pop('password1')
        validated_data.pop('password2')
        user=signUpModel.objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            username=validated_data['email'],
            email=validated_data['email'],
            password=password,
            is_active=True,
            role=validated_data['role'],
            date_joined=validated_data['date_joined']
        )
        return user   


#class for login 
class loginSerializer(serializers.Serializer):
    email=serializers.CharField(required=True)
    password=serializers.CharField(required=True)  


#class change password
class resetPasswordSerializer(serializers.Serializer):
    email=serializers.EmailField(required=True)


    def validate_email(self,value):
        if signUpModel.objects.filter(email=value).exists():
            return serializers.ValidationError('No user with this email')
        return value 
    

#accept the reset password 
class resetPasswordConfirmSerializer(serializers.Serializer):
    password1=serializers.CharField(min_length=8,required=True)
    password2=serializers.CharField(min_length=8,required=True)


#serializer for logout
class logoutSerializer(serializers.Serializer):
    refresh=serializers.CharField()

    def validate_data(self,data):
        refresh_token=data.get('refresh')
        if not refresh_token:
            return serializers.ValidationError('Refresh token is required')
        return data