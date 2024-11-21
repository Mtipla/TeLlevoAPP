from django.db import models

# Create your models here.

class Viaje(models.Model):
    idviaje= models.AutoField(primary_key=True)
    partida= models.CharField(max_length=50,null=True)
    destino= models.CharField(max_length=50,default='S/D')
    precio= models.IntegerField()
    capacidad= models.IntegerField()

    def __str__(self):
        return self.partida
    
class Usuario(models.Model):
    iduser= models.AutoField(primary_key=True)
    nombre= models.CharField(max_length=50,null=True)
    apellido= models.CharField(max_length=50,default='S/A')
    edad= models.IntegerField()
    

    def __str__(self):
        return self.nombre