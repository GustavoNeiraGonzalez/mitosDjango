from rest_framework import routers
from .api import loginViewSet

router = routers.DefaultRouter()

router.register('api/login',loginViewSet, 'login')

urlpatterns = router.urls