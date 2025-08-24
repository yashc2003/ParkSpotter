from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def new_entry(request):
    return render(request, 'new_entry.html')

def login(request):
    return render(request, 'login.html')

def recipt(request):
    return render(request, 'recipt.html')

def user_registration(request):
    return render(request, 'user_registration.html')

def earning_report(request):
    return render(request, 'earning_report.html')