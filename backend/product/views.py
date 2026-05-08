from django.shortcuts import render
from .models import myData
from django.http import JsonResponse


# Create your views here.
def userDetails(request,name):
    if request.method == 'GET':
        return JsonResponse({"msg": "GET request"})
    
    elif request.method == 'POST':
        return JsonResponse({"name": "sudarshan"})
    
    return JsonResponse({"error": "Invalid method"}, status=400)
    
   
