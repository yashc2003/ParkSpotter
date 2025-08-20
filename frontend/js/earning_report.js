 document.getElementById('startDate').addEventListener('focus', function() {
            this.type = 'date';
        });
        
        document.getElementById('endDate').addEventListener('focus', function() {
            this.type = 'date';
        });

        document.getElementById('startDate').addEventListener('blur', function() {
            if (!this.value) {
                this.type = 'text';
            }
        });

        document.getElementById('endDate').addEventListener('blur', function() {
            if (!this.value) {
                this.type = 'text';
            }
        });