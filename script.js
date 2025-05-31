document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  fetch("https://script.google.com/macros/s/AKfycbyCDrwoX7HJhZirTAXkKZOA8C863KuN3b-TNuaQM3KbisMLSCyRuBoWgL5vHb1C3dzmcQ/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    alert("Your message has been sent!");
    document.getElementById("contactForm").reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("There was an error. Please try again.");
  });
});
