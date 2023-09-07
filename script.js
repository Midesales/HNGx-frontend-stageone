 function updateData() {
       
        const timestampElement = document.getElementById('timestamp');
        const dayOfWeekElement = document.getElementById('dayOfWeek');

        

        // Get current UTC time and day of the week
        const now = new Date();
        const utcTime = now.toUTCString();
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

        // Update the displayed data
        timestampElement.textContent = `Last updated: ${utcTime}`;
        dayOfWeekElement.textContent = `Today is ${dayOfWeek}`;
    }

    // Call the updateData function initially and set interval for real-time updates
    updateData();
    setInterval(updateData, 2000); // Update every 5 seconds