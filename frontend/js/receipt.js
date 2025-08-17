const entryInput = document.getElementById("entry");
    const exitInput = document.getElementById("exit");
    const durationInput = document.getElementById("duration");
    const chargeInput = document.getElementById("charge");

    const ratePerHour = 10;

    function calculateDurationAndCharge() {
      const entryTime = new Date(entryInput.value);
      const exitTime = new Date(exitInput.value);

      if (!entryInput.value || !exitInput.value) {
        durationInput.value = "";
        chargeInput.value = "";
        return;
      }

      if (exitTime <= entryTime) {
        durationInput.value = "Invalid!";
        chargeInput.value = "—";
        return;
      }


      const diffMs = exitTime - entryTime;
      const diffMins = Math.floor(diffMs / 60000);
      const hrs = Math.floor(diffMins / 60);
      const mins = diffMins % 60;

      durationInput.value = `${hrs} hr ${mins} min`;


      const hoursToCharge = Math.ceil(diffMins / 60);
      const total = hoursToCharge * ratePerHour;

      chargeInput.value = `₹${total}`;
    }

    entryInput.addEventListener("change", calculateDurationAndCharge);
    exitInput.addEventListener("change", calculateDurationAndCharge);

    function submitForm() {
      alert("Receipt Saved (demo). You can connect this with backend later.");
    }

    async function savePDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();


      const plate = document.getElementById("plate").value;
      const vehicle = document.getElementById("vehicle").value;
      const entry = document.getElementById("entry").value;
      const exit = document.getElementById("exit").value;
      const duration = document.getElementById("duration").value;
      const charge = document.getElementById("charge").value;
      const status = document.getElementById("status").value;

      doc.setFontSize(18);
      doc.text("🚗 Smart Parking Receipt", 20, 20);

      doc.setFontSize(12);
      doc.text(`Plate Number: ${plate}`, 20, 40);
      doc.text(`Vehicle Type: ${vehicle}`, 20, 50);
      doc.text(`Entry Time: ${entry}`, 20, 60);
      doc.text(`Exit Time: ${exit}`, 20, 70);
      doc.text(`Duration: ${duration}`, 20, 80);
      doc.text(`Total Charge: ${charge}`, 20, 90);
      doc.text(`Payment Status: ${status}`, 20, 100);

      doc.save("Parking_Receipt.pdf");
    }

    function goDashboard() {
      alert("Back to Dashboard (replace with real link).");

    }