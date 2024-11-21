from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import *
from .models import *

class UsuarioViewSet(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers



class ViajeViewSet(generics.ListCreateAPIView):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializer