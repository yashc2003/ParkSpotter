document.getElementById('vehicleEntryform').addEventListener('submit', function(e) {
            e.preventDefault();
         const plateNumber = document.getElementById('plateNumber').value;
            const entryTime = document.getElementById('entryTime').value;
            const exitTime = document.getElementById('exitTime').value;
            const isPaid = document.getElementById('isPaid').checked;
            const selectedVehicle = document.querySelector('input[name="vehicleType"]:checked');

             // Frontend validation
            if (!plateNumber.trim()) {
                alert('Please enter a plate number');
                return;
            }

            if (!selectedVehicle) {
                alert('Please select a vehicle type');
                return;
            }

            if (!entryTime) {
                alert('Please select an entry time');
                return;
            }
            if (!exitTime) {
                alert('Please select an exit time');
                return;
            }

            if (exitTime && new Date(exitTime) <= new Date(entryTime)) {
                alert('Exit time must be after entry time');
                return;
            }
            const formData = {
                plateNumber: plateNumber.trim(),
                vehicleType: selectedVehicle.value,
                entryTime: entryTime,
                exitTime: exitTime || null,
                isPaid: isPaid
            };

            console.log('Form data ready for backend:', formData);
             alert('Form validated and ready for backend submission!');
        });