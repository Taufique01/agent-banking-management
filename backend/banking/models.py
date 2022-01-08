from django.db import models
from django.contrib import admin
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver
import datetime
import calendar
from django.utils import timezone


class DatedModel(models.Model):
    class Meta:
        abstract = True

    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Customer(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255, null=True, blank=True)
    address = models.TextField(max_length=255, null=True, blank=True)
    added_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Account(models.Model):
    name = models.CharField(max_length=255)
    balance = models.FloatField(default=0)

    def __str__(self):
        return self.name


class Transaction(DatedModel):
    customer = models.ForeignKey(Customer, related_name='transaction', on_delete=models.CASCADE, null=False)
    transaction_type = models.CharField(max_length=10, null=False)
    receiving_account = models.ForeignKey(Account, related_name='receive_tnx', on_delete=models.CASCADE, null=False)
    paying_account = models.ForeignKey(Account, related_name='paying_tnx', on_delete=models.CASCADE, null=False)
    amount = models.FloatField(null=False)
    paid = models.FloatField(null=False)
    note = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.customer.name

    def due(self):
        return self.amount - self.paid
