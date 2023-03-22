from django.urls import include, path
from rest_framework import routers
from .api import CommentViewSet

router = routers.DefaultRouter()
router.register(r'api/comentarios', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/comentarios/', CommentViewSet.as_view({'get': 'list'})),
    path('api/comentarios/mitos/<int:mitos>/', CommentViewSet.as_view({'get': 'list'})),

]
