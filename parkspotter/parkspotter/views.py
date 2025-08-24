from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def new_entry(request):
    return render(request, 'new_entry.html')