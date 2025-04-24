document.getElementById("loanForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const purpose = document.getElementById("purpose").value.trim();
    const successMsg = document.getElementById("success-message");
  
    if (!name || !email || !amount || !purpose) {
      successMsg.textContent = "Toate câmpurile sunt obligatorii!";
      successMsg.style.color = "red";
      return;
    }
  
    const newRequest = {
      id: Date.now(),
      name,
      email,
      amount,
      purpose
    };
  
    const existing = JSON.parse(localStorage.getItem("loanRequests")) || [];
    existing.push(newRequest);
    localStorage.setItem("loanRequests", JSON.stringify(existing));
  
    // Resetare formular
    this.reset();
    successMsg.style.color = "green";
    successMsg.textContent = "Cererea ta a fost înregistrată cu succes!";
  });
  