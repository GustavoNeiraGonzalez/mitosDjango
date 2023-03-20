from rest_framework import viewsets
from .models import Comment
from .serializers import CommentSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly] #allowany = ->
    
    def perform_create(self, serializer):
        # Aquí puedes agregar lógica personalizada antes de guardar el comentario
        # Por ejemplo, puedes enviar una notificación por correo electrónico al autor del mito comentado
        serializer.save()

    def perform_update(self, serializer):
        # Aquí puedes agregar lógica personalizada antes de actualizar el comentario
        # Por ejemplo, puedes verificar si el usuario que realiza la solicitud es el autor del comentario
        serializer.save()
