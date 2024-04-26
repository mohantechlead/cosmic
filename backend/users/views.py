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
   

    # def get(self):
    #     user = self.request.user
    #     return CustomerProfiles.objects.filter(user)

    def get(self, request):
        customer = CustomerProfiles.objects.all()
        serializer = self.serializer_class(customer, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

    def delete_cus(request,customer_id):
       customer = CustomerProfiles.objects.get(pk=customer_id)
       customer.delete()

   
  
