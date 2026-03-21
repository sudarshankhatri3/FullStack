"""
ASGI config for ecommerceApi project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/asgi/
"""

import os
from django.urls import path
from channels.routing import ProtocolTypeRouter ,URLRouter
from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack
from channels.security.websocket import AllowedHostsOriginValidator

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecommerceApi.settings')


ecommerce_sync_api=get_asgi_application()

application = ProtocolTypeRouter({
    'http':ecommerce_sync_api,
    'websocket':AllowedHostsOriginValidator(
        URLRouter(
            [
                path('ws/message/',Livemessage.as_asgi(),name='live_Message')
            ]
        )
    )
})
