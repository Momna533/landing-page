// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Simple testimonial slider
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.toggle("active", idx === i);
  });
}

showTestimonial(index);

setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 4000);
