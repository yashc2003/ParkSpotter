from django.db import models

# Create your models here.
class NewEntry(models.Model):
    VEHICLE_TYPE_CHOICES=[
        ('Car','Car'),
        ('Bike','Bike'),
    ]
    plate_number=models.CharField(max_length=20)