from rest_framework import serializers
from .models import mitos
from django.contrib.auth.models import User, Permission

class mitosSerializer(serializers.ModelSerializer):

    class Meta:
        model = mitos
        fields=('mitoId','Mito','Titulo','precio','Dioses','Facciones','historia','Foto')
