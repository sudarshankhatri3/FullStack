from rest_framework.routers import DefaultRouter
from ..viewsets.viewset import todoViewset



toDo=DefaultRouter()
toDo.register(r'todo',todoViewset,basename='todoData')