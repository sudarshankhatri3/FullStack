from rest_framework.permissions import BasePermission


class customerPermission(BasePermission):
    def has_permission(self, request, view):
        if bool(request.user and request.user.is_authenticated and request.user.role=='customer'):
            return request.method='Get'