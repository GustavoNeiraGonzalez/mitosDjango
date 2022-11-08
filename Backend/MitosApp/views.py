from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from MitosApp.models import mitos 
from MitosApp.serializers import mitosSerializer
# Create your views here.

from django.core.files.storage import default_storage

@csrf_exempt
def mitosApi(request,id=0):
    if request.method=='GET':
        mito = mitos.objects.all()
        mito_serializer = mitosSerializer(mito,many=True)
        return JsonResponse(mito_serializer.data,safe=False)
    elif request.method=='POST':
        mito_data = JSONParser().parse(request)
        mito_serializer = mitosSerializer(data=mito_data)
        if mito_serializer.is_valid():
            mito_serializer.save()
            return JsonResponse("Agregado con exito :D",safe=False)
        return JsonResponse("Error, no se ha agregado :(",safe=False)
    elif request.method == 'PUT':
        mito_data = JSONParser().parse(request)
        mito = mitos.objects.get(mitoId=mito_data['mitoId'])
        mito_serializer = mitosSerializer(mito,data=mito_data)
        if mito_serializer.is_valid():
            mito_serializer.save()
            return JsonResponse("Modificado con exito :D",safe=False)
        return JsonResponse("No se ha logrado modificar :(",safe=False)
    elif request.method=='DELETE':
        mito = mitos.objects.get(mitoId=id)
        mito.delete()
        return JsonResponse("Eliminado con exito",safe=False)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)