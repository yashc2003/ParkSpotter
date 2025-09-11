from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.signup_view, name='user_registration'),
    path('', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    
]