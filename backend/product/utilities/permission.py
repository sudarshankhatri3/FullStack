from rest_framework.permissions import BasePermission,SAFE_METHODS


# class to implement the role 
class ProductPermission(BasePermission):
    def has_permission(self, request, view):
        
        #allow get method to everyone
        if request.method in SAFE_METHODS:
            return True
        
        # allow only to the vendors 
        if request.method =='POST' and request.user=='VENDOR':
            return request.user.is_authenticated
        
        #allow for put and patch 
        if request.method in ['PUT','PATCH']:
            return request.user
        
        #allow admin can DELETE
        if request.method=='DELETE':
            return request.user.is_staff
        
        #default deny
        return False