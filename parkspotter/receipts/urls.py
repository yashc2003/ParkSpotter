from django.urls import path
from . import views

urlpatterns = [
    path('recipt/<int:entry_id>/', views.recipt, name='recipt'),
]