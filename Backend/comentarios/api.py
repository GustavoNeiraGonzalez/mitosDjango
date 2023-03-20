from rest_framework import viewsets
from .models import Comment
from .serializers import CommentSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth import get_user_model

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly] #allowany = ->
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        # Obtener el valor de user_id del serializer
            # Obtener el valor de user_id del serializer
        user_id = serializer.validated_data.get('user_id')
        
        # Obtener la instancia del modelo de usuario correspondiente al ID de usuario
        User = get_user_model()
        user = User.objects.get(pk=user_id)
        
        # Establecer el valor del campo user utilizando la instancia del modelo de usuario
        serializer.save(user=user)