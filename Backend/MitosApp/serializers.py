from rest_framework import serializers
from .models import mitos

class mitosSerializer(serializers.ModelSerializer):
    class Meta:
        model = mitos
        fields=('mitoId','Mito','Titulo','precio','Dioses','Facciones','historia','Foto')
