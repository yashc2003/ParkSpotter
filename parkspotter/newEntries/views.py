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
        
        entry_time_parsed = parse_datetime(entry_time)
        exit_time_parsed = parse_datetime(exit_time) if exit_time else None

        VehicleEntry.objects.create(
            plate_number=plate_number,
            vehicle_type=vehicle_type,
            entry_time=entry_time_parsed,
            exit_time=exit_time_parsed,
            is_paid=is_paid
        )

        messages.success(request, "Entry added successfully!")
        return redirect('dashboard')
    return render(request, 'new_entry.html')

