from rest_framework import serializers
from django.contrib.auth.models import User    
from django.http.response import JsonResponse
from rest_framework.exceptions import ValidationError


class loginSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    username = serializers.CharField()     
    password = serializers.CharField()
    email = serializers.CharField()
    

    def create(self, validated_data):
        instance = User()
        instance.username = validated_data.get('username')
        instance.email = validated_data.get('email')
        instance.set_password(validated_data.get('password'))
        instance.save()
        return instance
    
    def validate_username(self,data):
        users = User.objects.filter(username = data)
        if len(users) != 0:
            raise serializers.ValidationError("Este nombre de usuario ya existe, ingrese uno nuevo")
        else:
            return data
    class Meta:
        model = User
        fields = ('id','username', 'password', 'email')

