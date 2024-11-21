from .models import *
from rest_framework import serializers

class UsuarioSerializers(serializers.ModelSerializer):
    class Meta:
        model=Usuario
        fields = ['nombre','apellido','edad']

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = "__all__"