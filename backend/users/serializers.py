from django.contrib.auth.models import User
from rest_framework import serializers
from .models import CustomerProfiles

from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "is_staff", "is_superuser"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
    
class CustomerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerProfiles
        fields = ('customer_id', 'customer_name', 'customer_address', 'contact_person', 'phone_number', 'email', 'comments', 'date', 'author')
        extra_kwargs = {"author": {"read_only": True}}
