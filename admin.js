document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById("loan-requests-body");
  
    // Preluăm cererile din localStorage
    const requests = JSON.parse(localStorage.getItem("loanRequests")) || [];
  
    // Generăm rândurile
    requests.forEach(request => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${request.id}</td>
        <td>${request.name}</td>
        <td>${request.email}</td>
        <td>${request.amount} RON</td>
        <td>${request.purpose}</td>
        <td>
          <button class="btn-accept" onclick="acceptRequest(${request.id})">Acceptă</button>
          <button class="btn-refuse" onclick="refuseRequest(${request.id})">Refuză</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  });
  
  function acceptRequest(id) {
    alert("Cererea #" + id + " a fost acceptată!");
    removeRequest(id);
  }
  
  function refuseRequest(id) {
    alert("Cererea #" + id + " a fost refuzată!");
    removeRequest(id);
  }
  
  function removeRequest(id) {
    const stored = JSON.parse(localStorage.getItem("loanRequests")) || [];
    const filtered = stored.filter(r => r.id !== id);
    localStorage.setItem("loanRequests", JSON.stringify(filtered));
    location.reload(); // reîncarcă pagina pentru a actualiza tabelul
  }
  