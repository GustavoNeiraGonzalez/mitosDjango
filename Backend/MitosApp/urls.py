from django.urls import re_path
from MitosApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    re_path(r'^mitos$',views.mitosApi),
    re_path(r'^mitos/([0-9]+)$',views.mitosApi),

    re_path(r'^mitos/savefile',views.SaveFile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)