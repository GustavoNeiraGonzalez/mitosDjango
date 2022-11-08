from rest_framework import serializers
from MitosApp.models import mitos

class mitosSerializer(serializers.ModelSerializer):
    class Meta:
        model=mitos
        fields=('mitoId','Mito','Titulo','Dioses','Facciones','historia','Foto')
