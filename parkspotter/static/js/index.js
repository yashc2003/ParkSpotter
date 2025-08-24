 function addParkingRecord(event) {
      event.preventDefault();
      const plate = document.getElementById('newPlate').value;
      const type = document.getElementById('newType').value;
      const entry = document.getElementById('newEntry').value;
      const exit = document.getElementById('newExit').value || '--';
      const charge = document.getElementById('newCharge').value || '--';
      const paid = document.getElementById('newPaid').value;

      const table = document.getElementById('parkingTable').getElementsByTagName('tbody')[0];
      const row = table.insertRow(0);
      row.insertCell(0).innerText = plate;
      row.insertCell(1).innerText = type;
      row.insertCell(2).innerText = entry;
      row.insertCell(3).innerText = exit;
      row.insertCell(4).innerText = charge;
      const paidCell = row.insertCell(5);
      if (paid === "Paid") {
        paidCell.innerHTML = '<span class="paid-badge">Paid</span>';
      } else {
        paidCell.innerHTML = '<span class="unpaid-badge">Unpaid</span>';
      }
      row.insertCell(6).innerHTML = `
        <button class="action-btn view">View</button>
        <button class="action-btn pdf">PDF</button>
        <button class="action-btn edit">Edit</button>
      `;

      document.getElementById('insertForm').reset();
   }
