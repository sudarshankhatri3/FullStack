"""
URL configuration for ecommerceApi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt import views as jwt_views
from django.urls import re_path
from rest_framework import permissions
from drf_spectacular.views import SpectacularAPIView,SpectacularSwaggerView
from drf_spectacular import openapi
from oauth2_provider import urls as oauth2_urls




from rest_framework import routers
from product.routers.router import product
from customer.routers.router import customer
from accounts.viewsets.viewset import registerViewset,loginViewset,resetPasswordViewset,passwordResetConfirmViewset,logOutViewset




router=routers.DefaultRouter()
router.registry.extend(product.registry)
router.registry.extend(customer.registry)





urlpatterns = [
    path('admin/', admin.site.urls),
    path('oauth2/',include(oauth2_urls)),
    path('ecommerceApi/',include(router.urls)),
    path('api/register/',registerViewset.as_view(),name='register'),
    path('api/login/',loginViewset.as_view(),name="login"),
    path('api/resetpassword/',resetPasswordViewset.as_view(),name='resetPassword'),
    path('api/resetPasswordConfirm/<uid64>/<token>',passwordResetConfirmViewset.as_view(),name="resetPasswordConfirm"),
    path('api/logout/',logOutViewset.as_view(),name='logOut'),
    path('api/token',jwt_views.TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('api/token/refresh',jwt_views.TokenRefreshView.as_view(),name='token_refresh'),
    path('api/schema/',SpectacularAPIView.as_view(),name='schema'),
    path('api/docs/',SpectacularSwaggerView.as_view(url_name='schema'),name="swagger-ui")
]