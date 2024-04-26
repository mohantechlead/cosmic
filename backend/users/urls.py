from django.contrib import admin 
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from users.views import CreateUserView
from .views import CreateCustomerView
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("users/user/register", CreateUserView.as_view(), name="register"),
    path("users/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("users/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("users-auth/", include("rest_framework.urls")),
    path("customer/", CreateCustomerView.as_view(), name="createcustomer"),
]