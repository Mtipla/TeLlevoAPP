from .models import *
from rest_framework import serializers

class SedeDuocSerializer(serializers.ModelSerializer):
    class Meta:
        model = SedesDuoc
        fields="__all__"