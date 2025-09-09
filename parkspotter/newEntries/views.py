from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from .models import NewEntry
from django.contrib import messages
from django.utils.dateparse import parse_datetime


# Create your views here.

@login_required
