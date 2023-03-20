from rest_framework import serializers
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Comment
import jwt
from django.conf import settings
from django.contrib.auth import get_user_model


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['comentarioId', 'created_at', 'comentario', 'rating', 'user', 'mitos']

    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("El rating debe estar entre 1 y 5")
        return value
    def create(self, validated_data):
        request = self.context['request']
        jwt_auth = JWTAuthentication()
        token = request.META['HTTP_AUTHORIZATION'].split()[1]
        validated_token = jwt_auth.get_validated_token(token)
        
        # Obtain the secret key from your Django settings
        secret_key = settings.SECRET_KEY
        
        # Decode the JWT and access its payload
        decoded_payload = jwt.decode(token, secret_key, algorithms=['HS256'])
        
        # Imprimir el valor de decoded_payload
        print(decoded_payload)
        
        user_id = decoded_payload['user_id']
        User = get_user_model()
        user = User.objects.get(pk=user_id)

        # Crear y guardar una instancia del modelo User utilizando los datos validados
        instance = Comment.objects.create(user=user, **validated_data)

        # Devolver la instancia creada
        return instance
