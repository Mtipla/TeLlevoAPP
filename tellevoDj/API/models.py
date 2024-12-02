from django.db import models

# Create your models here.


    
class SedesDuoc(models.Model):
    iduser= models.AutoField(primary_key=True)
    nombre= models.CharField(max_length=50,null=True)
    direccion= models.CharField(max_length=100,default='S/N')
    telefono= models.CharField(max_length=10,null=True)

    def __str__(self):
        return self.nombre