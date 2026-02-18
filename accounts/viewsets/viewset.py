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
        email=serializer.validated_data['email']
        user=signUpModel.objects.get(email=email)


        #generate token 
        token_generator=PasswordResetTokenGenerator()
        token=token_generator.make_token(user)
        uid=urlsafe_base64_encode(force_bytes(user.pk))



        # make the url 
        reset_url= request.build_absolute_uri(reverse('password-reset-confirm', kwargs={'uidb64': uid, 'token': token}))
        
        #send email 
        send_mail(
            subject="Reset password",
            message=f'Your password reset link is {reset_url}',
            from_email='khatrisudarshan360@gmail.com',
            recipient_list=[user.email],
            fail_silently=False
        )
        
        return Response({'message':'Password reset link sent to your email'},status=200)
    

# passwordreser confirm viewser
class passwordResetConfirmViewset(generics.CreateAPIView):
    serializer_class=resetPasswordConfirmSerializer
    permission_classes=[AllowAny]

    def post(self, request,uid64,token, *args, **kwargs):
        #decode the uid from uid64
        try:
            uid=urlsafe_base64_decode(uid64).decode()
            user=signUpModel.objects.get(pk=uid)
        except:
            return Response({'error': 'Invalid link'}, status=400)
        
        token_generator=PasswordResetTokenGenerator()
        if not token_generator.check_token(user,token):
            return Response({'error': 'Token is invalid or has expired'}, status=400)
        

        new_password=request.data.get('password1')
        confirm_password=request.data.get('password2')

        if not new_password or new_password!=confirm_password:
            return Response({'message':'Password not match'},status=400)
        
        user.set_password(new_password)
        user.save()


        return Response({'message':'Password has been reset sucessfully'},status=200)
    



#viewset for the logout function 
class logOutViewset(APIView):
    permission_classes=[IsAuthenticated]


    def post(self,request):
        serializer=logoutSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            refresh_token=serializer.validate_data['refresh']
            token=RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Successfully logged out"}, status=200)
        except Exception:
            return Response({"error": "Invalid or expired token"}, status=400)
        

