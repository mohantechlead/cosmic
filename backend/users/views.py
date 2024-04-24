from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, CustomerProfileSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import CustomerProfiles
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response



class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CreateCustomerView(generics.CreateAPIView):
    serializer_class = CustomerProfileSerializer
    permission_classes = [IsAuthenticated]
    queryset = CustomerProfiles.objects.all()
    # authentication_classes = [JWTAuthentication]

    # def get_queryset(self):
    #     user = self.request.user
    #     return CustomerProfiles.objects.all()

    def retrieve(self, request, pk=None):
        customer = self.queryset.get(pk=pk)
        serializer = self.serializer_class(customer)
        return Response(serializer.data)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)
  
