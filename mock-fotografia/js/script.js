/* Helena Braz — Fotografia · interactions
   One authored motion: the focus rack. Everything else is wayfinding + form. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---- year ---- */
  var ano = $("#ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- header: transparent over the first opener, solid after ---- */
  var header = $(".site-header");
  var firstOpener = $(".opener");
  if (header && firstOpener && "IntersectionObserver" in window) {
    var ho = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        header.setAttribute("data-solid", e.isIntersecting ? "false" : "true");
      });
    }, { rootMargin: "-72px 0px 0px 0px", threshold: 0 });
    ho.observe(firstOpener);
  }

  /* ---- mobile overlay menu ---- */
  var toggle = $(".menu-toggle");
  var overlay = $("#overlay-nav");
  function setMenu(open) {
    document.body.setAttribute("data-menu", open ? "open" : "closed");
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (toggle) toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle && overlay) {
    toggle.addEventListener("click", function () {
      setMenu(document.body.getAttribute("data-menu") !== "open");
    });
    $$("a", overlay).forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.getAttribute("data-menu") === "open") setMenu(false);
    });
  }

  /* ---- scrollspy: left rail + top nav ---- */
  var spied = $$("[id]").filter(function (el) {
    return ["casamentos", "ensaios", "eventos", "estudio", "processo", "perguntas", "contato"].indexOf(el.id) > -1;
  });
  var railLinks = $$(".index-rail a");
  var navLinks = $$(".site-nav a");
  function markCurrent(id) {
    railLinks.forEach(function (a) {
      a.setAttribute("aria-current", a.getAttribute("href") === "#" + id ? "true" : "false");
    });
    navLinks.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + id;
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
  if (spied.length && "IntersectionObserver" in window) {
    var current = null;
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { current = e.target.id; markCurrent(current); }
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    spied.forEach(function (el) { so.observe(el); });
  }

  /* ---- rail tone: light text on plate sections, dark on paper ---- */
  var rail = $(".index-rail");
  var darkSections = $$(".plate, .opener, .contato, .site-footer");
  if (rail && darkSections.length && "IntersectionObserver" in window) {
    var darkCount = 0;
    var to = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        darkCount += e.isIntersecting ? 1 : -1;
      });
      darkCount = Math.max(0, darkCount);
      var onDark = darkCount > 0;
      rail.style.setProperty("--rail-fg", onDark ? "var(--on-plate)" : "var(--ink)");
      rail.style.setProperty("--rail-fg-dim", onDark ? "var(--on-plate-dim)" : "var(--ink-dim)");
      rail.style.setProperty("--rail-line", onDark ? "var(--line-plate)" : "var(--line)");
    }, { rootMargin: "-50% 0px -50% 0px" });
    darkSections.forEach(function (el) { to.observe(el); });
  }

  /* ---- reveal on scroll ---- */
  var reveals = $$(".reveal");
  if (reduce) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); ro.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- the focus rack: opener images resolve from soft to sharp ---- */
  var racks = $$(".rack");
  if (reduce) {
    racks.forEach(function (img) { img.classList.add("is-sharp"); });
  } else if ("IntersectionObserver" in window) {
    var fo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-sharp"); fo.unobserve(e.target); }
      });
    }, { threshold: 0.25 });
    racks.forEach(function (img) {
      if (img.complete) fo.observe(img);
      else img.addEventListener("load", function () { fo.observe(img); });
    });
  } else {
    racks.forEach(function (img) { img.classList.add("is-sharp"); });
  }

  /* ---- hero parallax drift (bounded, rAF) ---- */
  var heroImg = firstOpener ? $(".opener__media img", firstOpener) : null;
  if (heroImg && !reduce) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.pageYOffset;
        if (y < window.innerHeight) {
          heroImg.style.transform = "translateY(" + (y * 0.12).toFixed(1) + "px) scale(1.05)";
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---- FAQ accordion ---- */
  $$(".qa__q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  /* ---- contact form ---- */
  var form = $("#form");
  if (form) {
    var statusEl = $("[data-status]", form);
    var submitBtn = $(".form__submit", form);
    var waHref = "https://wa.me/5551999990000";

    var validators = {
      nome: function (v) { return v.trim().length >= 2 || "Como você se chama?"; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Confira o e-mail."; },
      whatsapp: function (v) { return v.replace(/\D/g, "").length >= 10 || "Inclua DDD e número."; },
      tipo: function (v) { return !!v || "Escolha o tipo de registro."; },
      mensagem: function (v) { return v.trim().length >= 10 || "Conta um pouco mais — o lugar, o horário."; }
    };

    function fieldOf(el) { return el.closest(".field"); }
    function showErr(el, msg) {
      var f = fieldOf(el); if (!f) return;
      f.setAttribute("data-invalid", "true");
      var s = $("[data-err]", f); if (s) s.textContent = msg;
    }
    function clearErr(el) {
      var f = fieldOf(el); if (!f) return;
      f.removeAttribute("data-invalid");
      var s = $("[data-err]", f); if (s) s.textContent = "";
    }
    function validateField(el) {
      var fn = validators[el.name];
      if (!fn) return true;
      var res = fn(el.value);
      if (res === true) { clearErr(el); return true; }
      showErr(el, res); return false;
    }

    $$("input, select, textarea", form).forEach(function (el) {
      if (!validators[el.name]) return;
      el.addEventListener("blur", function () { validateField(el); });
      el.addEventListener("input", function () {
        if (fieldOf(el).getAttribute("data-invalid") === "true") validateField(el);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      $$("input, select, textarea", form).forEach(function (el) {
        if (validators[el.name] && !validateField(el)) ok = false;
      });
      if (!ok) {
        statusEl.textContent = "Confira os campos marcados acima.";
        var firstBad = $(".field[data-invalid='true'] input, .field[data-invalid='true'] select, .field[data-invalid='true'] textarea", form);
        if (firstBad) firstBad.focus();
        return;
      }

      var data = new FormData(form);
      var key = form.getAttribute("data-access-key");
      var msgText =
        "Oi, Helena! Vim pelo site.%0A%0A" +
        "Nome: " + encodeURIComponent(data.get("nome")) + "%0A" +
        "Tipo: " + encodeURIComponent(data.get("tipo")) + "%0A" +
        (data.get("data") ? "Data: " + encodeURIComponent(data.get("data")) + "%0A" : "") +
        "Mensagem: " + encodeURIComponent(data.get("mensagem"));

      /* No Web3Forms key configured yet → route to WhatsApp instead. */
      if (!key || key === "SUA-ACCESS-KEY-AQUI") {
        statusEl.textContent = "Abrindo o WhatsApp com a sua mensagem…";
        window.open(waHref + "?text=" + msgText, "_blank", "noopener");
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando…";
      statusEl.textContent = "";
      data.append("access_key", key);
      data.append("subject", "Site Helena Braz — " + (data.get("tipo") || "contato"));

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      })
        .then(function (r) { return r.json(); })
        .then(function (json) {
          if (json.success) {
            form.classList.add("form--done");
            form.innerHTML =
              '<p class="form__status">Mensagem recebida. Eu respondo hoje mesmo — se for urgente, chame no WhatsApp.</p>' +
              '<a class="wa wa--lg" href="' + waHref + '?text=' + msgText + '" target="_blank" rel="noopener">' +
              '<svg class="icon icon--fill" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa" /></svg> Falar no WhatsApp</a>';
          } else {
            throw new Error(json.message || "falha");
          }
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Enviar mensagem";
          statusEl.innerHTML =
            'Não consegui enviar agora. <a href="' + waHref + "?text=" + msgText +
            '" target="_blank" rel="noopener" style="border-bottom:1px solid var(--acid)">Fala comigo no WhatsApp</a>.';
        });
    });
  }
})();
