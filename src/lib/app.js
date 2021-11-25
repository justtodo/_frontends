class hs extends HTMLElement {
  connectedCallback() {
    this.classList.add("theme-switcher"),
      (this.innerHTML =
        '\n        <input type="checkbox" is="input-switch" id="theme-switcher" aria-label="Changer de thème">\n        <label for="theme-switcher">\n          <svg class="icon icon-moon">\n            <use xlink:href="/sprite.svg#moon"></use>\n          </svg>\n          <svg class="icon icon-sun">\n            <use xlink:href="/sprite.svg#sun"></use>\n          </svg>\n        </label>');
    const e = this.querySelector("input");
    if (
      (e.addEventListener("change", (e) => {
        const t = e.currentTarget.checked ? "light" : "dark",
          n = e.currentTarget.checked ? "dark" : "light";
        document.body.classList.add(`theme-${n}`),
          document.body.classList.remove(`theme-${t}`),
          Ee()
            ? ie("/api/profil/theme", {
                body: { theme: n },
                method: "POST",
              }).catch(console.error)
            : us("theme", n, { expires: 7 });
      }),
      Ee())
    )
      document.body.classList.contains("theme-dark")
        ? (e.checked = !0)
        : document.body.classList.contains("theme-light")
        ? (e.checked = !1)
        : (e.checked = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches);
    else {
      const t = us("theme");
      if (null === t) {
        const t = window.matchMedia("(prefers-color-scheme: dark)");
        e.checked = t.matches;
      } else
        document.body.classList.add(`theme-${t}`), (e.checked = "dark" === t);
    }
  }
}
class ps extends HTMLElement {
  connectedCallback() {
    (this.voted = null !== this.getAttribute("aria-selected")),
      (this.$button = this.querySelector("button")),
      (this.$count = this.querySelector("strong")),
      (this.endpoint = this.dataset.endpoint),
      "" !== this.$button.getAttribute("disabled") &&
        Ee() &&
        (this.style.setProperty("cursor", "pointer"),
        this.addEventListener("click", this.onClick.bind(this)));
  }
  async onClick() {
    this.$button.innerHTML =
      '<spinning-dots style="width: 14px;"></spinning-dots>';
    const { votesCount: e } = await h(this.endpoint, { methods: "POST" });
    (this.$count.innerText = e), (this.voted = !this.voted), this.updateUI();
  }
  updateUI() {
    if (this.voted) {
      (this.$button.innerText = "votes--"),
        this.$button.classList.add("btn-primary"),
        this.$button.classList.remove("btn-secondary"),
        this.setAttribute("aria-selected", "true");
      const e = this.getBoundingClientRect(),
        t = (e.top + e.height) / ne(),
        n = (e.left + e.width / 2) / se();
      Gi({
        particleCount: 25,
        zIndex: 3e3,
        spread: 30,
        startVelocity: 20,
        gravity: 0.5,
        ticks: 100,
        disableForReducedMotion: !0,
        origin: { y: t, x: n },
      });
    } else
      (this.$button.innerText = "votes++"),
        this.$button.classList.remove("btn-primary"),
        this.$button.classList.add("btn-secondary"),
        this.removeAttribute("aria-selected");
  }
}


// burger 
 const n = de("#js-burger"),
   i = de(".header-nav");
 if (n) {
   let e = !1;
   n.addEventListener("click", () => {
     var t;
     de("#header").classList.toggle("is-open"),
       e
         ? (t = i)
           ? ((Ts = Ts.filter(function (e) {
               return e.targetElement !== t;
             })),
             Is
               ? ((t.ontouchstart = null),
                 (t.ontouchmove = null),
                 _s &&
                   0 === Ts.length &&
                   (document.removeEventListener(
                     "touchmove",
                     Ds,
                     Ss ? { passive: !1 } : void 0
                   ),
                   (_s = !1)))
               : Ts.length || Hs())
           : console.error(
               "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
             )
         : Rs(i),
       (e = !e);
   });
 }
//  header
li.define("dropdown_header", function (e) {
    var t = this;
    (e = Object.assign(
      {
        title: "Untitled",
        headerClass: "dropdown-header",
        titleRowClass: "dropdown-header-title",
        labelClass: "dropdown-header-label",
        closeClass: "dropdown-header-close",
        html: (e) =>
          '<div class="' +
          e.headerClass +
          '"><div class="' +
          e.titleRowClass +
          '"><span class="' +
          e.labelClass +
          '">' +
          e.title +
          '</span><a class="' +
          e.closeClass +
          '">&times;</a></div></div>',
      },
      e
    )),
      t.hook("after", "setup", () => {
        var n = Pn(e.html(e)),
          i = n.querySelector("." + e.closeClass);
        i &&
          i.addEventListener("click", (e) => {
            ti(e, !0), t.close();
          }),
          t.dropdown.insertBefore(n, t.dropdown.firstChild);
      });
  }),
//   turbolinks
 document.addEventListener("turbolinks:load", () => {
    Is
      ? (Ts.forEach(function (e) {
          (e.targetElement.ontouchstart = null),
            (e.targetElement.ontouchmove = null);
        }),
        _s &&
          (document.removeEventListener(
            "touchmove",
            Ds,
            Ss ? { passive: !1 } : void 0
          ),
          (_s = !1)),
        (Fs = -1))
      : Hs(),
      (Ts = []);
          }
//   dark

   const e = document.querySelector("#dark-toggle");
    e &&
      e.addEventListener("click", (e) => {
        e.stopPropagation(),
          e.preventDefault(),
          document.body.classList.toggle("dark");
      });
    const t = document.querySelector(".js-scrollIntoView");
    if (t) {
      t.offsetParent.scrollTop = t.offsetTop - t.offsetHeight;
    }

    class ds extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    (this.style.position = "absolute"),
      (this.style.left = "0"),
      (this.style.right = "0"),
      (this.style.bottom = "0"),
      (this.style.top = "0"),
      (this.style.margin = "0"),
      (this.style.padding = "0"),
      (this.style.zIndex = "10"),
      (this.style.display = "flex"),
      (this.style.alignItems = "center"),
      (this.style.justifyContent = "center"),
      (this.style.transition = "opacity .3s"),
      (this.style.background = "rgba(255,255,255,.8)");
    const e = document.createElement("spinning-dots");
    (e.style.width = "20px"), (e.style.height = "20px"), this.appendChild(e);
  }
  hide() {
    this.style.opacity = 0;
  }
}

 connectedCallback() {
    const e = this.getAttribute("text"),
      t = this.getAttribute("lines"),
      n = this.getAttribute("rounded"),
      i = this.size(this.getAttribute("width"), null === e || null !== t),
      s = this.size(this.getAttribute("height"), null === e);
    let o = "<span></span>";
    if (t) for (let r = 1; r < parseInt(t, 10); r++) o += "<span></span>";
    this.root.innerHTML = `<style>\n      :host {\n        display: block;\n      }\n      div {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        width: ${i};\n        height: ${s};\n      }\n      span {\n        display: ${
      i || s ? "block" : "inline-block"
    };\n        position: relative;\n        width: ${i};\n        height: ${s};\n        border-radius: ${
      null !== n ? "50%" : "4px"
    };\n        transform-origin: 0 60%;\n        background-color: var(--skeleton, #0000001c);\n        overflow: hidden;\n        transform: ${
      t || e ? "scale(1, 0.60)" : "none"
    };\n        animation: pulse 1.5s ease-in-out 0.5s infinite;\n      }\n\n      span:last-child {\n        width: ${
      t ? 20 + 60 * Math.random() + "%" : "inherit"
    };\n      }\n      span::before {\n        content: "${this.getAttribute(
      "text"
    )}";\n        opacity: 0;\n      }\n      span::after {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: "";\n        position: absolute;\n        animation: waves 1.6s linear 0.5s infinite;\n        transform: translateX(-100%);\n        background: linear-gradient(90deg, transparent, var(--skeleton-wave, rgba(0, 0, 0, 0.04)), transparent);\n      }\n      @keyframes waves {\n        0% {\n          transform: translateX(-100%);\n        }\n        60% {\n          transform: translateX(100%);\n        }\n        100% {\n          transform: translateX(100%);\n        }\n      }\n    </style><div>${o}</div>`;
  }
}
class xe extends HTMLInputElement {
  connectedCallback() {
    null !== this.nextElementSibling &&
    "LABEL" === this.nextElementSibling.tagName
      ? (this.parentElement.classList.add("form-switch"),
        this.parentElement.classList.remove("form-check"),
        (this.switch = document.createElement("span")),
        this.switch.classList.add("switch"),
        this.nextElementSibling.prepend(this.switch))
      : console.error("Impossible de greffer le switch");
  }
  disconnectedCallback() {
    this.parentElement && this.parentElement.classList.remove("form-switch"),
      this.switch.parentElement.remove(this.switch);
  }
}