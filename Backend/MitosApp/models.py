from django.db import models

# Create your models here.
class mitos(models.Model):
    _id = models.AutoField(primary_key=True)
    Mito = models.CharField(max_length=50)
    Titulo = models.CharField(max_length=120)
    Dioses = models.CharField(max_length=100)
    Facciones = models.CharField(max_length=50)
    historia = models.CharField(max_length=1000)
    Foto = models.CharField(max_length=500)