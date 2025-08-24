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

        function filterData() {
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            
            if (startDate && endDate) {
                // Visual feedback for filter action
                const filterBtn = document.querySelector('.filter-btn');
                const originalText = filterBtn.textContent;
                filterBtn.textContent = 'Filtering...';
                filterBtn.style.opacity = '0.7';
                
                setTimeout(() => {
                    filterBtn.textContent = originalText;
                    filterBtn.style.opacity = '1';
                }, 1000);
            } else {
                alert('Please select both start and end dates');
            }
        }