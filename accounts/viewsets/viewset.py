from rest_framework import generics
from ..serializers.serializer import (
    registerSerializer,
    loginSerializer,
    resetPasswordSerializer,
    resetPasswordConfirmSerializer,
    logoutSerializer
)
from ..models import signUpModel
from rest_framework.views import APIView
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated,AllowAny 
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken,OutstandingToken



# viewset for register
class registerViewset(generics.CreateAPIView):
    queryset=signUpModel.objects.all()
    permission_classes=[AllowAny]
    serializer_class=registerSerializer

#viewset for login
class loginViewset(generics.CreateAPIView):
    serializer_class=loginSerializer
    permission_classes=[AllowAny]


    #validate the data
    def post(self, request, *args, **kwargs):
        email=request.data.get('email')
        password=request.data.get('password')


        # check the email and password get or not 
        if not email or not password:
            return Response({'Error':'Email and password are required'},status=400)
        

        user=authenticate(request,email=email,password=password)
        if user is not None:
            refresh=RefreshToken.for_user(user)
            user_serializer=loginSerializer(user)
            return Response({
                'refresh':str(refresh),
                'access_token':str(refresh.access_token),
                'user':user_serializer.data,
                'role':user.role
            })

        return Response({'Message':'Invalid credential'},status=401)
    

#password reset viewset
class resetPasswordViewset(generics.CreateAPIView):
    serializer_class=resetPasswordSerializer
    permission_classes=[AllowAny]


    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        #check the email
        
        return super().post(request, *args, **kwargs)