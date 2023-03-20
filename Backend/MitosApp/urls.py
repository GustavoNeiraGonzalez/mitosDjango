from django.urls import re_path
from MitosApp import views
from rest_framework import routers
from .api import mitosViewSet

from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()

router.register(r'api/mitos', mitosViewSet)

urlpatterns = router.urls +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)