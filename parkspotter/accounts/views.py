from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model, login, authenticate, logout
from django.contrib.auth.hashers import make_password
from django.contrib import messages

# Create your views here.
User=get_user_model()
def signup_view(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    if request.method == 'POST':
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
            return redirect('user_registration')
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already in use.")
            return redirect('user_registration')
        if User.objects.filter(phone_number=phone).exists():
            messages.error(request, "Phone number already in use.")
            return redirect('user_registration')
        user = User.objects.create(
            username=email,
            email=email,
            phone_number=phone,
            first_name=full_name,
            password=make_password(password)
        )
        messages.success(request, "Registration successful. Please log in.")
        return redirect('login')
    return render(request, 'user_registration.html')

def login_view(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            messages.error(request, 'Invalid username or password')
    return render(request, 'login.html')

        
