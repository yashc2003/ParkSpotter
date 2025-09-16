from django.db import models

# Create your models here.
class NewEntry(models.Model):
    VEHICLE_TYPE_CHOICES=[
        ('Car','Car'),
        ('Bike','Bike'),
        ('Bus','Bus'),
    ]
    plate_number=models.CharField(max_length=20)
    vehicle_type=models.CharField(max_length=10,choices=VEHICLE_TYPE_CHOICES)
    entry_time=models.DateTimeField()
    is_paid=models.BooleanField(default=False)

    def __str__(self):
        return f"{self.plate_number}({self.vehicle_type})"