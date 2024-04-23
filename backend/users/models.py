from django.db import models

# Create your models here.
class customer_profile(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.TextField(blank=False)
    customer_address = models.TextField(blank=True)
    contact_person = models.TextField(blank=True)
    phone_number = models.CharField(blank=True, null=True)
    email = models.TextField(blank=True, null=True)
    comments = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True, blank=True)