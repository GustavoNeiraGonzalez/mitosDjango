from rest_framework import viewsets
from .models import Comments
from .serializers import CommentSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth import get_user_model
from django.http import JsonResponse

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly] #allowany = ->
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
    def get_queryset(self):
        if 'mitos' in self.kwargs:
            mitos = self.kwargs['mitos']
            return Comments.objects.filter(mitos=mitos)
        else:
            return Comments.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        data = list(queryset.values())
        return JsonResponse(data, safe=False)

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        serializer.save()
