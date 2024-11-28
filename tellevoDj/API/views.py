from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import *
from .models import *

class SedesViewSet(generics.ListCreateAPIView):
    queryset = SedesDuoc.objects.all()
    serializer_class = SedeDuocSerializer