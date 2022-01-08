from django.urls import path, include
from rest_framework import routers
from .views import CustomerViewSet, TransactionCreateView, TransactionListView

router = routers.DefaultRouter()
router.register("product", CustomerViewSet, basename="customer")

urlpatterns = [
    path('api/transaction/create/', TransactionCreateView.as_view()),
    path('api/transactions/', TransactionListView.as_view()),
]
