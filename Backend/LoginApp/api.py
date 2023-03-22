from rest_framework import permissions, status
from .serializers import loginSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User    

class loginAPI(APIView):
    def get(self, request, user_id):
        # Obtener el objeto User que quieres enviar
        user = User.objects.get(id=user_id)

        # Crear un diccionario con solo el valor del campo username
        data = {'username': user.username}

        # Enviar la respuesta con los datos del usuario
        return Response(data)

    def post(self, request):
        serializer = loginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
