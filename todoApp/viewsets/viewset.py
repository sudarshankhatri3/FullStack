from rest_framework import viewsets
from ..serializers.serializer import todoListSerializer,todoPostSerializer
from ..models import todoData



#class for viewset of the todoData mdoels
class todoViewset(viewsets.ModelViewSet):
    queryset=todoData.objects.all().order_by('-id')
    serializer_class=todoListSerializer


    def get_serializer_class(self):
        if self.action=='list':
            return todoListSerializer
        elif self.action in ['create','update','partial_update']:
            return todoPostSerializer
        return todoListSerializer