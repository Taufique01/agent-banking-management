from django.db import models
from django.db.models import Sum

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

    def received_amount(self):
        received_amount = self.transaction.all().aggregate(Sum('received_amount'))['received_amount__sum']
        if not received_amount:
            return 0
        return received_amount

    def paid_amount(self):
        paid_amount = self.transaction.all().aggregate(Sum('paid_amount'))['paid_amount__sum']
        if not paid_amount:
            return 0
        return paid_amount

    def receivable_amount(self):
        return self.paid_amount() - self.received_amount()


class Account(models.Model):
    name = models.CharField(max_length=255)
    balance = models.FloatField(default=0)

    def __str__(self):
        return self.name

    def deposit(self, amount):
        self.balance = self.balance + amount
        self.save()

    def withdraw(self, amount):
        self.balance = self.balance - amount
        self.save()


class Transaction(DatedModel):
    customer = models.ForeignKey(Customer, related_name='transaction', on_delete=models.CASCADE, null=False)
    receiving_account = models.ForeignKey(Account, related_name='receive_tnx', on_delete=models.CASCADE, null=False)
    paying_account = models.ForeignKey(Account, related_name='paying_tnx', on_delete=models.CASCADE, null=False)
    received_amount = models.FloatField(null=False)
    paid_amount = models.FloatField(null=False)
    note = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.customer.name

    def receivable_amount(self):
        return self.paid_amount - self.received_amount


@receiver(post_save, sender=Transaction)
def update_account(sender, instance, created, **kwargs):
    if created:
        instance.receiving_account.deposit(instance.received_amount)
        instance.paying_account.withdraw(instance.paid_amount)
