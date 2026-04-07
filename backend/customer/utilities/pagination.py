from rest_framework.pagination import PageNumberPagination,CursorPagination
from rest_framework.response import Response

#create the class for pagination
class CustomerPagination(CursorPagination):
    page_size=10
    ordering='-created_at'
    def get_paginated_response(self, data):
        return Response({
            'links':{
                'next':self.get_next_link(),
                'previous':self.get_previous_link()
            },
            'data':data 
        })
    