from django.urls import re_path as url
from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^api/sedes/$',SedesViewSet.as_view()),
]

urlpatterns=format_suffix_patterns(urlpatterns)