from django.db import models
from django.contrib.auth.models import User
from MitosApp.models import mitos

class Comment(models.Model):
    # Campos del modelo de comentarios
    mitoId = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    comentario = models.TextField()
    rating = models.IntegerField( null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mitos = models.ForeignKey(mitos, on_delete=models.CASCADE)
