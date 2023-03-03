from rest_framework import serializers
from .models import user    

class loginSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['userId','name','password','email']
        