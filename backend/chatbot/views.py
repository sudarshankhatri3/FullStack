from django.shortcuts import render
from django.urls import path
from .import consumer

# Create your views here.

websocket_urlPatterns=[
    path('ws/sc/',consumer.MySyncHandler.as_asgi()),
]
