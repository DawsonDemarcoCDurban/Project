document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const sex = document.querySelector("input[name='sex']:checked")?.value;
    const why = document.getElementById("why").value.trim();
  
    let valid = true;
  
    if (!firstName) {
      alert("First Name is required");
      valid = false;
    }
    if (!lastName) {
      alert("Last Name is required");
      valid = false;
    }
    if (!sex) {
      alert("Sex is required");
      valid = false;
    }
    if (!email) {
      alert("Email is required");
      valid = false;
    }
    if (!password) {
      alert("Password is required");
      valid = false;
    }
    if (!why) {
      alert("Why you're supporting the campaign is required");
      valid = false;
    }
  
    if (valid) {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("sex", sex);
      localStorage.setItem("why", why);
  
      window.location.href = "profile.html";
    }
  });