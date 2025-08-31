from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    data={
        'title': 'Dashboard'
    }
    return render(request, 'index.html', context=data)

def new_entry(request):
    return render(request, 'new_entry.html')

def login(request):
    return render(request, 'login.html')

def recipt(request):
    return render(request, 'recipt.html')

def user_registration(request):
    try:
        if request.method == 'POST':
            full_name = request.POST.get('full_name')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            password = request.POST.get('password')
            confirm_password = request.POST.get('confirm_password')

            if password == confirm_password:
                # Save the user data to the database
                return HttpResponse("User registered successfully!")
            else:
                return HttpResponse("Passwords do not match.")
    except Exception as e:
        return HttpResponse("Error occurred: " + str(e))
    return render(request, 'user_registration.html')

def earning_report(request):
    return render(request, 'earning_report.html')