from rest_framework.permissions import BasePermission,SAFE_METHODS

# access if the user is customer
class customerPermission(BasePermission):
    def has_permission(self, request, view):
        if request.method==SAFE_METHODS:
            return all
    
    