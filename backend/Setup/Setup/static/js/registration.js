 document.getElementById("registrationForm").addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let vehicle = document.getElementById("vehicle").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirmPassword").value.trim();

            let errorMessage = document.getElementById("errorMessage");
            let successMessage = document.getElementById("successMessage");

            errorMessage.textContent = "";
            successMessage.textContent = "";

            if(name === "" || email === "" || phone === "" || vehicle === "" || password === "" || confirmPassword === ""){
        errorMessage.textContent = "All fields are required.";
        return;
      }

      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!email.match(emailPattern)){
        errorMessage.textContent = "Invalid email format.";
        return;
      }

      let phonePattern = /^[0-9]{10}$/;
      if(!phone.match(phonePattern)){
        errorMessage.textContent = "Phone number must be 10 digits.";
        return;
      }

      if(password.length < 6){
        errorMessage.textContent = "Password must be at least 6 characters.";
        return;
      }

      if(password !== confirmPassword){
        errorMessage.textContent = "Passwords do not match.";
        return;
      }

      successMessage.textContent = "Registration successful!";
        });