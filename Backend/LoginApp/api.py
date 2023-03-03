from .models import user
from rest_framework import viewsets, permissions
from .serializers import loginSerializer

class loginViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all() #Conjunto de datos
    permission_classes = [permissions.AllowAny] #allowany = ->
    # cualquier cliente puede solicitar datos
    serializer_class = loginSerializer