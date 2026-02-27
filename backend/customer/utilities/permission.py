from rest_framework.permissions import BasePermission

# # access if the user is customer
# class customerPermission(BasePermission):
#     def has_permission(self, request, view):
#         return bool(request.user and request.user.is_authenticated and request.user.role=='customer')
    
    