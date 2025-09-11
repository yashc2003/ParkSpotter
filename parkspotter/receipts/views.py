from django.shortcuts import render,get_object_or_404
from .models import NewEntry
from django.contrin.b.auth.decorators import login_required
from django.contrib import messages
from datetime import datetime

# Create your views here.
