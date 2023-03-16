from django.db import models

# Create your models here.
class mitos(models.Model):
    mitoId = models.AutoField(primary_key=True)
    Mito = models.CharField(max_length=50)
    Titulo = models.CharField(max_length=120, null=True)
    Dioses = models.CharField(max_length=100, null=True)
    Facciones = models.CharField(max_length=50, null=True)
    historia = models.CharField(max_length=1000)
    precio = models.IntegerField()
    Foto = models.ImageField(upload_to="ImagenMito", null=True)

    
