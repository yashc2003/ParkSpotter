function updateDateTime() {
            const now = new Date();
            const currentDate = now.toISOString().split('T')[0];
            const currentTime = now.toLocaleTimeString('en-US', { 
                hour12: true, 
                hour: '2-digit', 
                minute: '2-digit' 
            });