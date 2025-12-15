function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Username atau password salah";
  }
}

function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function runAI() {
  let input = document.getElementById("inputAI").value.toLowerCase();
  let result = "";

  if (input.includes("makanan")) {
    result = "AI menyarankan promosi video di Instagram dan TikTok.";
  } else if (input.includes("fashion")) {
    result = "AI menyarankan konten visual dan influencer marketing.";
  } else {
    result = "AI menyarankan kombinasi media sosial dan iklan digital.";
  }

  document.getElementById("resultAI").innerText = result;
}
