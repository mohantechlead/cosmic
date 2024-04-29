from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, CustomerProfileSerializer, SupplierProfileSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import CustomerProfiles, SupplierProfiles
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response



class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CreateCustomerView(generics.CreateAPIView):
    serializer_class = CustomerProfileSerializer
    permission_classes = [IsAuthenticated]
   
    def get(self, request):
        customer = CustomerProfiles.objects.all()
        serializer = self.serializer_class(customer, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

    # def delete(self,request,pk=None):
    #     customer = CustomerProfiles.objects.get(pk=pk)
    #     customer.delete()
    #     return Response(status=204)
    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=204)
    
class CreateSupplierView(generics.CreateAPIView):
    serializer_class = SupplierProfileSerializer
    permission_classes = [IsAuthenticated]
   
    def get(self, request):
        supplier = SupplierProfiles.objects.all()
        serializer = self.serializer_class(supplier, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

    def delete(self,request,pk=None):
        customer = CustomerProfiles.objects.get(pk=pk)
        customer.delete()
        return Response(status=204)

      

   
  
