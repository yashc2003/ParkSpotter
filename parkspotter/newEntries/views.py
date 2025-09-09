from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from .models import NewEntry
from django.contrib import messages
from django.utils.dateparse import parse_datetime


# Create your views here.

@login_required
def new_entry(request):
    if request.method == 'POST':
        plate_number = request.POST.get('plateNumber')
        vehicle_type = request.POST.get('vehicleType')
        entry_time = request.POST.get('entryTime')
        exit_time = request.POST.get('exitTime')
        is_paid = request.POST.get('isPaid') == 'on'

        if not plate_number or not vehicle_type or not entry_time:
            messages.error(request, "Please fill all required fields.")
            return redirect('new_entry')
