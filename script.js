const whatsappUrl = "https://wa.me/message/743Z7RV5ZOQKN1";

function openWhatsAppWithMessage(message) {
  const targetUrl = `${whatsappUrl}?text=${encodeURIComponent(message)}`;
  const popup = window.open(targetUrl, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.href = targetUrl;
  }
}

function handleFormToWhatsApp(event, formTitle) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const lines = [`${formTitle}`];

  for (const [key, value] of formData.entries()) {
    if (!String(value).trim()) {
      continue;
    }
    const prettyKey = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    lines.push(`${prettyKey}: ${String(value).trim()}`);
  }

  openWhatsAppWithMessage(lines.join("\n"));
}

const leadForm = document.getElementById("lead-form");
const strategyForm = document.getElementById("strategy-form");

if (leadForm) {
  leadForm.addEventListener("submit", (event) =>
    handleFormToWhatsApp(event, "New Free Audit Request")
  );
}

if (strategyForm) {
  strategyForm.addEventListener("submit", (event) =>
    handleFormToWhatsApp(event, "New Website Strategy Request")
  );
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("visible"));
}
