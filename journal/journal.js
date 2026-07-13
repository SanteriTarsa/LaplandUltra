function openModal() { document.getElementById("modalOverlay").classList.add("active"); }
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.getElementById("formContent").style.display = "block";
  document.getElementById("successMsg").style.display = "none";
}
function closeOnOverlay(e) {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
}
function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById("inquiryForm");
  const data = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  }).then(finishSubmit).catch(finishSubmit);
}
function finishSubmit() {
  document.getElementById("formContent").style.display = "none";
  document.getElementById("successMsg").style.display = "block";
  if (typeof gtag === "function") {
    gtag('event', 'conversion', {'send_to': 'AW-18253017665/CSuNCP32oMMcEMHk2_9D'});
  }
}

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));
