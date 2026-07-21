(function () {
  var data = window.SDE_DATA || {};
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var header = document.querySelector(".site-header");

  function animateScrollTo(targetY, duration) {
    var startY = window.pageYOffset || document.documentElement.scrollTop;
    var distance = targetY - startY;
    var startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp) {
      if (startTime === null) {
        startTime = timestamp;
      }

      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function initSmoothAnchors() {
    var links = document.querySelectorAll('a[href^="#"]');
    if (!links.length) return;

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var href = link.getAttribute("href");
        if (!href || href === "#") return;

        var target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();

        var headerHeight = header ? header.offsetHeight : 0;
        var targetTop = target.getBoundingClientRect().top + window.pageYOffset - 24;
        var distance = Math.abs(targetTop - window.pageYOffset);
        var duration = Math.max(900, Math.min(1800, distance * 0.9));

        animateScrollTo(Math.max(0, targetTop), duration);

        if (siteNav && siteNav.classList.contains("is-open")) {
          siteNav.classList.remove("is-open");
          if (navToggle) {
            navToggle.setAttribute("aria-expanded", "false");
          }
        }
      });
    });
  }

  function renderServices() {
    var root = document.getElementById("services-grid");
    if (!root || !data.services) return;

    root.innerHTML = data.services
      .map(function (service) {
        return (
          '<article class="service-card reveal">' +
          '<span class="service-icon">' + service.icon + "</span>" +
          "<h3>" + service.title + "</h3>" +
          "<p>" + service.description + "</p>" +
          '<strong class="service-benefit">' + service.benefit + "</strong>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderReasons() {
    var root = document.getElementById("reasons-grid");
    if (!root || !data.reasons) return;

    root.innerHTML = data.reasons
      .map(function (reason) {
        return (
          '<article class="reason-card reveal">' +
          "<h3>" + reason.title + "</h3>" +
          "<p>" + reason.text + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderExperience() {
    var root = document.getElementById("experience-timeline");
    if (!root || !data.experience) return;

    root.innerHTML = data.experience
      .map(function (item) {
        return (
          '<article class="timeline-item reveal">' +
          '<span class="timeline-period">' + item.period + "</span>" +
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.text + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderExpertise() {
    var root = document.getElementById("expertise-grid");
    if (!root || !data.expertise) return;

    root.innerHTML = data.expertise
      .map(function (item) {
        return (
          '<article class="expertise-card reveal">' +
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.text + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderTestimonials() {
    var root = document.getElementById("testimonials-grid");
    if (!root || !data.testimonials) return;

    root.innerHTML = data.testimonials
      .map(function (item) {
        return (
          '<article class="testimonial-card reveal">' +
          "<p>" + item.quote + "</p>" +
          '<div class="testimonial-meta">' +
          "<strong>" + item.author + "</strong>" +
          "<span>" + item.role + "</span>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderFaq() {
    var root = document.getElementById("faq-list");
    if (!root || !data.faq) return;

    root.innerHTML = data.faq
      .map(function (item, index) {
        return (
          '<article class="faq-item reveal">' +
          '<button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-' + index + '">' +
          "<span>" + item.question + "</span>" +
          '<span class="faq-plus">+</span>' +
          "</button>" +
          '<div class="faq-answer" id="faq-answer-' + index + '">' +
          "<p>" + item.answer + "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    root.querySelectorAll(".faq-question").forEach(function (button) {
      button.addEventListener("click", function () {
        var expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", expanded ? "false" : "true");
        button.parentElement.classList.toggle("is-open", !expanded);
      });
    });
  }

  function renderProjectFilters() {
    var root = document.getElementById("project-filters");
    if (!root || !data.sectors) return;

    root.innerHTML = data.sectors
      .map(function (sector, index) {
        return (
          '<button class="filter-chip' + (index === 0 ? " is-active" : "") + '" type="button" data-sector="' + sector + '">' +
          sector +
          "</button>"
        );
      })
      .join("");
  }

  function renderProjects(projects) {
    var root = document.getElementById("projects-grid");
    if (!root) return;

    if (!projects.length) {
      root.innerHTML = '<p class="empty-state">Geen projecten gevonden voor deze zoekopdracht of filter.</p>';
      return;
    }

    root.innerHTML = projects
      .map(function (project) {
        return (
          '<article class="project-card reveal">' +
          '<div class="project-body">' +
          '<div class="project-meta"><span class="project-sector">' + project.sector + "</span><span>" + project.location + "</span></div>" +
          "<h3>" + project.name + "</h3>" +
          "<p>" + project.description + "</p>" +
          '<dl class="project-details">' +
          "<div><dt>Opdrachtgever</dt><dd>" + project.client + "</dd></div>" +
          "<div><dt>Uitdaging</dt><dd>" + project.challenge + "</dd></div>" +
          "<div><dt>Oplossing</dt><dd>" + project.solution + "</dd></div>" +
          "<div><dt>Rol SDE</dt><dd>" + project.role + "</dd></div>" +
          "</dl>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    revealElements();
  }

  function initProjects() {
    renderProjectFilters();
    renderProjects(data.projects || []);

    var search = document.getElementById("project-search");
    var filtersRoot = document.getElementById("project-filters");
    var activeSector = "Alle";

    function applyFilters() {
      var query = search ? search.value.toLowerCase().trim() : "";
      var filtered = (data.projects || []).filter(function (project) {
        var matchesSector = activeSector === "Alle" ? true : project.sector === activeSector;
        var haystack = [
          project.name,
          project.location,
          project.client,
          project.sector,
          project.description,
          project.challenge,
          project.solution,
          project.role
        ]
          .join(" ")
          .toLowerCase();
        return matchesSector && haystack.indexOf(query) !== -1;
      });

      renderProjects(filtered);
    }

    if (search) {
      search.addEventListener("input", applyFilters);
    }

    if (filtersRoot) {
      filtersRoot.addEventListener("click", function (event) {
        var target = event.target;
        if (!(target instanceof HTMLElement) || !target.dataset.sector) return;

        activeSector = target.dataset.sector;
        filtersRoot.querySelectorAll(".filter-chip").forEach(function (chip) {
          chip.classList.toggle("is-active", chip === target);
        });
        applyFilters();
      });
    }
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var el = entry.target;
          var end = Number(el.getAttribute("data-count") || "0");
          var current = 0;
          var step = Math.max(1, Math.ceil(end / 36));

          var timer = window.setInterval(function () {
            current += step;
            if (current >= end) {
              current = end;
              window.clearInterval(timer);
            }
            el.textContent = current + (end >= 100 ? "+" : "+");
          }, 24);

          obs.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  function revealElements() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 }
    );

    reveals.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.name.value.trim();
      var company = form.company.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      var message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = "Vul minimaal naam, e-mail en projectvraag in.";
        return;
      }

      var subject = "Aanvraag via SDE website";
      var body = [
        "Naam: " + name,
        "Bedrijf: " + company,
        "E-mail: " + email,
        "Telefoon: " + phone,
        "",
        "Projectvraag:",
        message
      ].join("\n");

      status.textContent = "Je e-mailprogramma wordt geopend.";
      window.location.href =
        "mailto:info@sde-engineering.nl?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }

  renderServices();
  renderReasons();
  renderExperience();
  renderExpertise();
  renderTestimonials();
  renderFaq();
  initProjects();
  initCounters();
  revealElements();
  initSmoothAnchors();
  initForm();
})();
