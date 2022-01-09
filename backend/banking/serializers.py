from rest_framework import serializers
from .models import Customer, Transaction


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'name', 'address', 'phone', 'balance')


class TransactionListSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.name')
    receiving_account = serializers.CharField(source='receiving_account.name')
    paying_account = serializers.CharField(source='paying_account.name')
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = Transaction
        fields = (
            'id', 'customer_name', 'transaction_type', 'receiving_account', 'paying_account', 'amount', 'paid', 'due',
            'note')


class TransactionListSerializer(serializers.ModelSerializer):
    customer_name = serializers.CharField(source='customer.name')
    receiving_account = serializers.CharField(source='receiving_account.name')
    paying_account = serializers.CharField(source='paying_account.name')
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = Transaction
        fields = (
            'id', 'customer_name', 'receiving_account', 'paying_account', 'received_amount', 'paid_amount',
            'receivable_amount',
            'note', 'updated_at')


class CustomerLedgerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('name', 'phone', 'received_amount', 'paid_amount', 'receivable_amount')

