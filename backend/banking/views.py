from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_404_NOT_FOUND, HTTP_403_FORBIDDEN, \
    HTTP_409_CONFLICT

from .models import Customer, Transaction, Account
from .serializers import CustomerSerializer, TransactionListSerializer, CustomerLedgerSerializer


class CustomerViewSet(viewsets.ViewSet):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def list(self, request):
        customer = Customer.objects.all().order_by('-id')
        serializer = CustomerSerializer(customer, many=True, context={"request": request})
        response_dict = {"data": serializer.data}
        return Response(response_dict, status=HTTP_200_OK)

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
        customer_id = request.data['customer_id']
        tnx_type = request.data['transaction_type']
        receiving_account_id = request.data['receiving_account_id']
        paying_account_id = request.data['paying_account_id']
        amount = request.data.amount['amount']
        paid = request.data['paid']
        note = request.data['note']

        receiving_account = Account.objects.get(id=receiving_account_id)
        receiving_account.deposit(amount)

        paying_account = Account.objects.get(id=paying_account_id)
        paying_account.withdraw(amount)

        Transaction.objects.create(
            customer_id=customer_id,
            transaction_type=tnx_type,
            receiving_account_id=receiving_account_id,
            paying_account_id=paying_account_id,
            amount=amount,
            paid=paid,
            note=note,
        )

        return Response(status=HTTP_201_CREATED)


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000


class TransactionListView(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionListSerializer
    pagination_class = StandardResultsSetPagination


class CustomersLedgerView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerLedgerSerializer
