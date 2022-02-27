from django.urls import path, include
from rest_framework import routers
from .views import CustomerViewSet, TransactionCreateView, TransactionListView, CustomersLedgerView, AccountListView, \
    CostListView, RevenueListView, CostCreateView, RevenueCreateView, SummaryView

router = routers.DefaultRouter()
router.register("api/customer", CustomerViewSet, basename="customer")

urlpatterns = [
    path('api/transaction/create/', TransactionCreateView.as_view()),
    path('api/transactions/', TransactionListView.as_view()),
    path('api/customers-ledger/', CustomersLedgerView.as_view()),
    path('api/accounts/', AccountListView.as_view()),
    path('api/costs/', CostListView.as_view()),
    path('api/cost/create/', CostCreateView.as_view()),
    path('api/revenue/', RevenueListView.as_view()),
    path('api/revenue/create/', RevenueCreateView.as_view()),
    path('api/summary/', SummaryView.as_view()),
]

urlpatterns = urlpatterns + router.urls
