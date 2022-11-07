from django.urls import re_path
from MitosApp import views

urlpatterns=[
    re_path(r'^mitos$',views.mitosApi),
    re_path(r'^mitos/([0-9]+)$',views.mitosApi)
]