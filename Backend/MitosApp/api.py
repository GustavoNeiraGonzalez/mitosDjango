from .models import mitos
from rest_framework import viewsets, permissions
from .serializers import mitosSerializer

class mitosViewSet(viewsets.ModelViewSet):
    queryset = mitos.objects.all() #Conjunto de datos
    permission_classes = [permissions.AllowAny] #allowany = ->
    # cualquier cliente puede solicitar datos
    serializer_class = mitosSerializer