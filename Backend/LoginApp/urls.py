from rest_framework import routers
from .api import loginAPI

router = routers.DefaultRouter()

router.register('api/login',loginAPI,'login')

urlpatterns = router.urls 