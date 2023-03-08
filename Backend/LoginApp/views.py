from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from LoginApp.models import user 
from LoginApp.serializers import loginSerializer
# Create your views here.

class loginViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = loginSerializer
    queryset = user.objects.all()
@csrf_exempt
def loginapi(request,id=0):
    if request.method=='GET':
        userr = user.objects.all()
        login_serializer = loginSerializer(userr,many=True)
        return JsonResponse(login_serializer.data,safe=False)
    elif request.method=='POST':
        user_data = JSONParser().parse(request)
        login_serializer = loginSerializer(data=user_data)
        if login_serializer.is_valid():
            login_serializer.save()
            return JsonResponse("Agregado con exito :D",safe=False)
        return JsonResponse("error",login_serializer.error_messages,safe=False)
    elif request.method == 'PUT':
        user_data = JSONParser().parse(request)
        userr = user.objects.get(userId=user_data['userId'])
        login_serializer = loginSerializer(userr,data=user_data)
        if login_serializer.is_valid():
            login_serializer.save()
            return JsonResponse("Modificado con exito :D",safe=False)
        return JsonResponse("error",login_serializer.error_messages,safe=False)
    elif request.method=='DELETE':
        userr = user.objects.get(userId=id)
        userr.delete()
        return JsonResponse("Eliminado con exito",safe=False)