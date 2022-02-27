from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_404_NOT_FOUND, HTTP_403_FORBIDDEN, \
    HTTP_409_CONFLICT
from django.db.models import Sum

from .models import Customer, Transaction, Account, Cost, Revenue
from .serializers import CustomerSerializer, TransactionListSerializer, CustomerLedgerSerializer, AccountSerializer, \
    CostSerializer, RevenueSerializer


class CustomerViewSet(viewsets.ViewSet):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def list(self, request):
        customer = Customer.objects.all().order_by('-id')
        serializer = CustomerSerializer(customer, many=True, context={"request": request})
        return Response(serializer.data, status=HTTP_200_OK)

    def create(self, request):
        serializer = CustomerSerializer(data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        pass

    # def update(self, request, pk=None):
    #     queryset = Customer.objects.all()
    #     customer = get_object_or_404(queryset, pk=pk)
    #     serializer = CustomerSerializer(customer, data=request.data, context={"request": request})
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(status=HTTP_200_OK)


class TransactionCreateView(APIView):

    def post(self, request):
        customer_id = int(request.data['customer_id'])
        receiving_account_id = int(request.data['receiving_account_id'])
        paying_account_id = int(request.data['paying_account_id'])
        received = float(request.data['received'])
        paid = float(request.data['paid'])
        note = request.data['note']

        Transaction.objects.create(
            customer_id=customer_id,
            receiving_account_id=receiving_account_id,
            paying_account_id=paying_account_id,
            received_amount=received,
            paid_amount=paid,
            note=note,
        )

        return Response(status=HTTP_201_CREATED)


class CostCreateView(APIView):

    def post(self, request):
        account_id = request.data['account_id']
        amount = request.data['amount']
        note = request.data['note']

        Cost.objects.create(account_id=account_id, amount=amount, note=note)

        account = Account.objects.get(id=account_id)
        account.balance = account.balance - float(amount)
        account.save()

        return Response(status=HTTP_201_CREATED)


class RevenueCreateView(APIView):

    def post(self, request):
        account_id = request.data['account_id']
        amount = request.data['amount']
        note = request.data['note']

        Revenue.objects.create(account_id=account_id, amount=amount, note=note)

        account = Account.objects.get(id=account_id)
        account.balance = account.balance + float(amount)
        account.save()

        return Response(status=HTTP_201_CREATED)


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000


class TransactionListView(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionListSerializer
    #pagination_class = StandardResultsSetPagination


class CustomersLedgerView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerLedgerSerializer


class AccountListView(generics.ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class CostListView(generics.ListAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostSerializer


class RevenueListView(generics.ListAPIView):
    queryset = Revenue.objects.all()
    serializer_class = RevenueSerializer


class SummaryView(APIView):

    def get(self, request):
        total_balance = Account.objects.all().aggregate(Sum('balance'))['balance__sum']

        customers = Customer.objects.all()
        total_receivables = 0
        for customer in customers:
            total_receivables = total_receivables + customer.receivable_amount()

        response = {
            'total_balance': total_balance,
            'total_receivables': total_receivables
        }

        return Response(response)
