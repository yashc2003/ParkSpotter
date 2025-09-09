from django.db import models

# Create your models here.
class NewEntry(models.Model):
    VEHICLE_TYPE_CHOICES=[
        ('Car','Car'),
        ('Bike','Bike'),
    ]
    plate_number=models.CharField(max_length=20)
    vehicle_type=models.CharField(max_length=10,choices=VEHICLE_TYPE_CHOICES)
    entry_time=models.DateTimeField()
    exit_time=models.DateTimeField(null=True,blank=True)
    is_paid=models.BooleanField(default=False)