from django.urls import path
from . import consumer


#create the router
websocket_urlpatterns = [
    path('ws/sc/', consumer.MySyncHandler.as_asgi()),
]