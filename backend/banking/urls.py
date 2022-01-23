from django.urls import path, include
from rest_framework import routers
from .views import CustomerViewSet, TransactionCreateView, TransactionListView, CustomersLedgerView, AccountListView

router = routers.DefaultRouter()
router.register("product", CustomerViewSet, basename="customer")

urlpatterns = [
    path('api/transaction/create/', TransactionCreateView.as_view()),
    path('api/transactions/', TransactionListView.as_view()),
    path('api/customers-ledger/', CustomersLedgerView.as_view()),
    path('api/accounts/', AccountListView.as_view()),
]
