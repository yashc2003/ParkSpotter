from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'pages/index.html')
def login(request):
    return render(request, 'pages/login.html')
def earning_report(request):
    return render(request, 'pages/earning_report.html')
def new_entry(request):
    return render(request, 'pages/new_entry.html')
def receipt(request):
    return render(request, 'pages/receipt.html')
def user_registration(request):
    return render(request, 'pages/user_registration.html')