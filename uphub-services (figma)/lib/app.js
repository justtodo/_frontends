var e = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  r = (t, n, i) =>
    n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[n] = i),
  a = (e, t) => {
    for (var n in t || (t = {})) s.call(t, n) && r(e, n, t[n]);
    if (i) for (var n of i(t)) o.call(t, n) && r(e, n, t[n]);
    return e;
  },
  l = (e, i) => t(e, n(i)),
  c = (e, t) => {
    var n = {};
    for (var r in e) s.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && i)
      for (var r of i(e)) t.indexOf(r) < 0 && o.call(e, r) && (n[r] = e[r]);
    return n;
  };
import {
  o as d,
  a as u,
  j as h,
  e as p,
  s as m,
  y as g,
  g as f,
  l as v,
  u as y,
  d as b,
  A as w,
  b as k,
  c as x,
  f as E,
  F as A,
  P as C,
  S as L,
  h as S,
  i as O,
  r as I,
  _ as T,
  k as _,
  m as F,
  n as M,
  p as P,
  q as D,
  t as H,
  v as R,
  w as q,
  x as V,
  z as N,
  B as z,
  C as j,
  D as B,
  E as U,
  G as K,
  L as Y,
  I as G,
  H as W,
  J as X,
  K as Q,
  M as Z,
  N as J,
  O as ee,
  Q as te,
  R as ne,
  T as ie,
  U as se,
  V as oe,
  W as re,
  X as ae,
  Y as le,
  Z as ce,
  $ as de,
  a0 as ue,
  a1 as he,
} from "./Modal.beb211ea.js";
const pe =
  "\n:host {\n  display: block;\n}\n.ratio {\n  background-color:black;\n  position: relative;\n}\n.ratio-svg {\n  width: 100%;\n  height: auto;\n  display: block;\n  max-height: var(--max-height, 100vh);\n}\nvideo ~ .ratio-svg,\niframe ~ .ratio-svg {\n  max-height: 100%;\n}\n.poster {\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.poster:hover .play {\n  transform: scale(1.1)\n}\n.poster:hover::before {\n  opacity: .8;\n}\n.title {\n  margin-top: 4px;\n  color: #FFF;\n  font-size: 22px;\n  position: relative;\n  text-align: center;\n  z-index: 3;\n  transition: .3s;\n  line-height: 1.2em;\n}\n.title em {\n  display:block;\n  opacity: 0.7;\n  font-size: 0.8em;\n  font-style: normal;\n}\n.play {\n  position: relative;\n  width: 48px;\n  height: 48px;\n  z-index: 3;\n  fill: #FFF;\n  margin-bottom: 8px;\n  filter:  drop-shadow(0 1px 20px #121C4280);\n  transition: .3s;\n}\n.poster::before {\n  content:'';\n  background: linear-gradient(to top, var(--color) 0%, var(--color-transparent) 100%);\n  z-index: 2;\n}\n.poster,\niframe,\nvideo,\n.poster::before,\nimg {\n  position: absolute;\n  top:0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity .5s;\n}\n.poster img {\n  object-fit: cover;\n}\n.poster[aria-hidden] {\n  pointer-events: none;\n  opacity: 0;\n}";
let me = null;
class ge extends HTMLElement {
  static get observedAttributes() {
    return ["video", "button"];
  }
  constructor(e = {}) {
    super(),
      Object.keys(e).forEach((t) => this.setAttribute(t, e[t])),
      (this.root = this.attachShadow({ mode: "open" })),
      (this.onYoutubePlayerStateChange =
        this.onYoutubePlayerStateChange.bind(this)),
      (this.onYoutubePlayerReady = this.onYoutubePlayerReady.bind(this));
    let t = this.getAttribute("poster");
    if (
      ((t =
        null === t
          ? ""
          : `<button class="poster">\n      <img src="${t}" alt="">\n      <svg class="play" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><path d="M23 0C10.32 0 0 10.32 0 23s10.32 23 23 23 23-10.32 23-23S35.68 0 23 0zm8.55 23.83l-12 8A1 1 0 0118 31V15a1 1 0 011.55-.83l12 8a1 1 0 010 1.66z"/></svg>\n      <div class="title">Voir la vidéo <em>(${this.getAttribute(
              "duration"
            )})</em></div>\n    </button>`),
      (this.root.innerHTML = `\n      <style>${pe}</style>\n      <div class="ratio">\n        <div class="player"></div>\n        ${t}\n        <svg viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg" class="ratio-svg">\n          <rect width="16" height="9" fill="transparent"/>\n        </svg>\n      </div>`),
      "" !== t)
    ) {
      const e = () => {
        this.startPlay(), this.removeEventListener("click", e);
      };
      this.addEventListener("click", e),
        "#autoplay" !== window.location.hash ||
          this.getAttribute("autoplay") ||
          e();
    }
  }
  startPlay() {
    this.root.querySelector(".poster").setAttribute("aria-hidden", "true"),
      this.setAttribute("autoplay", "autoplay"),
      this.removeAttribute("poster"),
      this.loadPlayer(this.getAttribute("video"));
  }
  disconnectedCallback() {
    this.stopTimer();
  }
  async attributeChangedCallback(e, t, n) {
    if (
      ("video" === e &&
        null !== n &&
        null === this.getAttribute("poster") &&
        this.loadPlayer(n),
      "button" === e && null !== n)
    ) {
      const e = document.querySelector(n);
      null !== e && e.setAttribute("video", `#${this.id}`);
    }
  }
  async loadPlayer(e) {
    if (
      (await (async function () {
        return new Promise((e) => {
          me && e(me);
          const t = document.createElement("script");
          t.src = "https://www.youtube.com/iframe_api";
          const n = document.getElementsByTagName("script")[0];
          n.parentNode.insertBefore(t, n),
            (window.onYouTubeIframeAPIReady = function () {
              (me = window.YT),
                (window.onYouTubeIframeAPIReady = void 0),
                e(me);
            });
        });
      })(),
      this.player)
    )
      return (
        this.player.cueVideoById(this.getAttribute("video")),
        void this.player.playVideo()
      );
    this.player = new me.Player(this.root.querySelector(".player"), {
      videoId: e,
      host: "https://www.youtube-nocookie.com",
      playerVars: {
        autoplay: this.getAttribute("autoplay") ? 1 : 0,
        loop: 0,
        modestbranding: 1,
        controls: 1,
        showinfo: 0,
        rel: 0,
        start: this.getAttribute("start"),
      },
      events: {
        onStateChange: this.onYoutubePlayerStateChange,
        onReady: this.onYoutubePlayerReady,
      },
    });
  }
  onYoutubePlayerStateChange(e) {
    switch (e.data) {
      case me.PlayerState.PLAYING:
        this.startTimer(),
          this.dispatchEvent(new Event("play", { bubbles: !0 }));
        break;
      case me.PlayerState.ENDED:
        this.stopTimer(), this.dispatchEvent(new Event("ended"));
        break;
      case me.PlayerState.PAUSED:
        this.stopTimer(), this.dispatchEvent(new Event("pause"));
    }
  }
  onYoutubePlayerReady() {
    this.startTimer();
  }
  stopTimer() {
    this.timer && (window.clearInterval(this.timer), (this.timer = null));
  }
  startTimer() {
    if (this.timer) return null;
    this.dispatchEvent(new Event("timeupdate")),
      (this.timer = window.setInterval(
        () => this.dispatchEvent(new Event("timeupdate")),
        1e3
      ));
  }
  pause() {
    this.player.pauseVideo();
  }
  play() {
    this.player.playVideo();
  }
  get duration() {
    return this.player ? this.player.getDuration() : null;
  }
  get currentTime() {
    return this.player ? this.player.getCurrentTime() : null;
  }
  set currentTime(e) {
    this.player
      ? this.player.seekTo(e)
      : (this.setAttribute("start", e.toString()), this.startPlay());
  }
}
class fe extends HTMLElement {
  connectedCallback() {
    (this.path = this.getAttribute("path")),
      (this.play = this.play.bind(this)),
      (this.gotoYear = this.gotoYear.bind(this)),
      (this.liveList = this.querySelector(".live-list")),
      this.querySelectorAll(".live").forEach((e) => {
        e.addEventListener("click", this.play);
      }),
      this.querySelectorAll(".live-years a").forEach((e) => {
        e.addEventListener("click", this.gotoYear);
      });
  }
  async gotoYear(e) {
    if (
      (e.preventDefault(),
      e.stopPropagation(),
      e.currentTarget.classList.contains("is-active"))
    )
      return;
    e.currentTarget.parentElement
      .querySelector(".is-active")
      .classList.remove("is-active"),
      this.showLoader(),
      e.currentTarget.classList.add("is-active");
    const t = e.currentTarget.text,
      n = `${this.path}/${t}`,
      i = await fetch(`${n}?ajax=1`);
    if (i.status >= 200 && i.status < 300) {
      const e = await i.text();
      (this.liveList.innerHTML = e),
        this.liveList.querySelectorAll(".live").forEach((e) => {
          e.addEventListener("click", this.play);
        }),
        window.history.replaceState({}, "", n);
    } else console.error(i);
    this.hideLoader();
  }
  play(e) {
    e.preventDefault(), e.stopPropagation();
    const t = e.currentTarget,
      n = t.dataset.youtube;
    t.classList.contains("is-selected") ||
      (void 0 === this.player &&
        ((this.player = new ge({ autoplay: 1 })),
        this.liveList.insertAdjacentElement("beforebegin", this.player)),
      t.classList.add("is-selected"),
      this.currentLive && this.currentLive.classList.remove("is-selected"),
      (this.currentLive = t),
      this.player.setAttribute("id", n),
      this.player.setAttribute("video", n),
      this.classList.add("has-player"),
      t.scrollIntoView({
        block: "center",
        behavior: "smooth",
        inline: "nearest",
      }),
      this.player.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "nearest",
      }));
  }
  showLoader() {
    const e = document.createElement("spinning-dots");
    (e.style.width = "20px"),
      e.classList.add("loader"),
      this.querySelector(".live-years").appendChild(e);
  }
  hideLoader() {
    const e = this.querySelector(".loader");
    e && e.parentElement.removeChild(e);
  }
}
class ve extends HTMLElement {
  static get observedAttributes() {
    return ["playing", "progress", "video"];
  }
  constructor() {
    super(),
      (this.root = this.attachShadow({ mode: "open" })),
      (this.root.innerHTML = `\n      ${this.buildStyles()}\n      <button>\n        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n          <circle cx="16" cy="16" r="15" fill="none" stroke-width="1" stroke="currentColor" />\n          <path d="M20.3 12.3L14 18.58l-2.3-2.3a1 1 0 00-1.4 1.42l3 3a1 1 0 001.4 0l7-7a1 1 0 00-1.4-1.42z" fill="#fff"/>\n        </svg>\n      </button>\n    `),
      (this.button = this.root.querySelector("button")),
      (this.circle = this.root.querySelector("circle")),
      (this.detachVideo = null),
      (this.onClick = this.onClick.bind(this)),
      (this.onVideoPlay = this.onVideoPlay.bind(this)),
      this.button.addEventListener("click", this.onClick);
  }
  attributeChangedCallback(e, t, n) {
    if (
      ("playing" === e && null === n
        ? this.root.host.classList.remove("is-playing")
        : "playing" === e && this.root.host.classList.add("is-playing"),
      "progress" === e)
    ) {
      const e = n ? parseInt(n, 10) : 0;
      this.circle &&
        (this.circle.style.strokeDashoffset = 94 - (94 * e) / 100 + "px"),
        100 === e
          ? this.root.host.classList.add("is-checked")
          : this.root.host.classList.remove("is-checked");
    }
    if ("video" === e && null !== n) {
      const e = document.querySelector(n);
      null !== e && this.attachVideo(e);
    }
  }
  buildStyles() {
    return "<style>\n      button {\n        cursor: inherit;\n        outline: none;\n        position: relative;\n        border: none;\n        width: 32px;\n        height: 32px;\n        border-radius: 32px;\n        flex: none;\n        background: var(--play);\n        margin-right: 1.5em;\n        transition: .3s;\n        color: var(--contrast);\n      }\n      button svg {\n        opacity: 1;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 32px;\n        height: 32px;\n        transform: rotate(-90deg);\n        transition: opacity .3s;\n      }\n      button circle {\n        stroke-dasharray: 94px;\n        stroke-dashoffset: 94px;\n        transition: stroke-dashoffset .1s;\n      }\n      button path {\n        opacity: 0;\n      }\n      button::before {\n        position: absolute;\n        top: 10px;\n        left: 13px;\n        content: '';\n        height: 0;\n        border-left: 9px solid var(--color);\n        border-top: 6px solid transparent;\n        border-bottom: 6px solid transparent;\n      }\n      :host-context(.is-current) button {\n        background-color: #4869EE33 !important;\n      }\n      :host-context(.is-playing) button::before,\n      :host-context(.is-playing) button::after {\n        content: '';\n        position: absolute;\n        border: none;\n        top: 10px;\n        left: 18px;\n        background: var(--contrast);\n        width: 4px;\n        height: 12px;\n      }\n      :host-context(.is-playing) button::before {\n        left: 10px;\n      }\n      :host-context(.is-checked) button circle {\n        opacity: 0;\n      }\n      :host-context(.is-checked) button svg {\n        transform: rotate(0deg);\n      }\n      :host-context(.is-checked) button {\n        background: var(--green);\n      }\n      :host-context(.is-checked) button path {\n        opacity: 1;\n      }\n      :host-context(.is-checked) button::before {\n        display: none;\n      }\n    </style>";
  }
  attachVideo(e) {
    if (this.video) return;
    (this.video = e), this.setAttribute("progress", 0);
    const t = () => {
        this.setAttribute(
          "progress",
          ((100 * e.currentTime) / e.duration).toFixed(2)
        );
      },
      n = () => {
        this.classList.add("is-current"),
          this.setAttribute("playing", "playing");
      },
      i = () => this.removeAttribute("playing"),
      s = () => {
        this.removeAttribute("playing"), this.setAttribute("progress", "100");
      };
    e.addEventListener("timeupdate", t),
      e.addEventListener("play", n),
      e.addEventListener("pause", i),
      e.addEventListener("ended", s),
      (this.detachVideo = () => {
        e.removeEventListener("timeupdate", t),
          e.removeEventListener("play", n),
          e.removeEventListener("pause", i),
          e.removeEventListener("ended", s),
          this.removeAttribute("playing"),
          this.classList.remove("is-current"),
          (this.video = null),
          (this.detachVideo = null);
      }),
      n();
  }
  connectedCallback() {
    document.addEventListener("play", this.onVideoPlay);
  }
  onVideoPlay(e) {
    const t = e.target;
    t.id === this.dataset.videoId
      ? (this.attachVideo(t), this.onplay)
      : this.detachVideo && this.detachVideo();
  }
  onClick(e) {
    this.video &&
      (e.preventDefault(),
      e.stopPropagation(),
      this.getAttribute("playing") ? this.video.pause() : this.video.play());
  }
  disconnectedCallback() {
    document.removeEventListener("play", this.onVideoPlay),
      this.detachVideo && this.detachVideo();
  }
}
function ye(e, t, n) {
  let i;
  return function (...s) {
    clearTimeout(i),
      (i = setTimeout(() => {
        (i = null), n || e.apply(this, s);
      }, t)),
      n && !i && e.apply(this, s);
  };
}
let be = !1;
class we extends HTMLElement {
  constructor() {
    super(),
      (this.root = this.attachShadow({ mode: "open" })),
      (this.matchTarget = this.matchTarget.bind(this)),
      (this.onResize = ye(this.onResize.bind(this), 500));
  }
  connectedCallback() {
    const e = !0 === be ? "no-animation" : "",
      t = document.querySelector(this.getAttribute("target")),
      n = this.backgroundImage();
    (be = !0),
      document.querySelector(".header").classList.add("is-inversed"),
      (this.target = t
        ? document.querySelector(this.getAttribute("target"))
        : null),
      (this.position = this.getAttribute("position") || "center"),
      (this.root.innerHTML = `\n      <style>\n      img {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        object-fit: cover;\n      }\n      .waves-container {\n        opacity: 1!important;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100%;\n        overflow: hidden;\n        z-index: -1;\n        height: 0;\n        box-sizing: content-box;\n        padding-bottom: var(--wave-height, 235px);\n      }\n      .waves-container.no-animation * {\n        animation: none!important;\n      }\n      .waves-background {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 2;\n        background: linear-gradient(to bottom, var(--contrast), var(--contrast));\n        transition: opacity .3s;\n        animation: backgroundIn .4s;\n      }\n      .waves {\n        position: absolute;\n        left: 50%;\n        right: 0;\n        z-index: 3;\n        bottom: 0;\n        width: 100vw;\n        height: auto;\n        min-width: 1440px;\n        transform: translateX(-50%);\n        max-height: var(--wave-height, 235px);\n      }\n      .waves path {\n        animation: waveIn .7s both;\n      }\n      .waves path:last-child {\n        animation: none;\n      }\n      @keyframes waveIn {\n        from {\n            opacity: 0;\n            transform: translateY(30px);\n        }\n        to {\n            opacity: 1;\n            transform: translateY(0px);\n        }\n      }\n      /* Cette animation ne sert à rien mais permet d'empécher un bug de clipping (MERCI CHROME !) */\n      @keyframes backgroundIn {\n        from {\n            transform: scaleY(1.1);\n        }\n        to {\n            transform: scaleY(1);\n        }\n      }\n      </style>\n      <div class="waves-container ${e}">\n        <div class="waves-background"></div>\n        ${n}\n        <svg xmlns="http://www.w3.org/2000/svg" class="waves" viewBox="0 0 1440 250"  style="isolation:isolate" preserveAspectRatio="none">\n          <path fill="#FFF" style="animation-delay: .2s"  fill-opacity=".1" d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72V80c-138 38-284 102-718 27C314 36 150 16 1 16l-1 8z"/>\n          <path fill="#FFF" style="animation-delay: .4s" fill-opacity=".1" d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72v-51l-2 1c-122 29-294 69-680-34C357 38 204 21 0 21v3z"/>\n          <path style="fill: var(--background);" d="M1440 229v21H0V24c166 0 358 11 755 133 232 71 390 93 506 93 74 0 131-9 179-21 0-45 0-45 0 0z"/>\n        </svg>\n    </div>\n    `),
      (this.container = this.root.querySelector(".waves-container")),
      (this.waves = this.root.querySelector(".waves"));
    const i = this.root.querySelector(".waves-background");
    "" !== n &&
      this.root.querySelector("img").addEventListener("load", () => {
        i.style.opacity = 0.96;
      }),
      window.requestAnimationFrame(this.matchTarget),
      window.addEventListener("resize", this.onResize);
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this.onResize);
  }
  backgroundImage() {
    return this.getAttribute("background")
      ? `<img src="${this.getAttribute("background")}" alt=""/>`
      : "";
  }
  matchTarget() {
    if (null === this.target) return;
    let e = d(this.target);
    const t = this.target.offsetHeight;
    "center" === this.position
      ? (e = e + t / 2 - 117)
      : "bottom" === this.position
      ? (e += t)
      : "bottomWave" === this.position &&
        ((e += t), (this.container.style.boxSizing = "border-box")),
      (this.container.style.height = `${e}px`);
  }
  onResize() {
    this.matchTarget();
  }
}
class ke extends HTMLElement {
  constructor() {
    super(), (this.root = this.attachShadow({ mode: "open" }));
  }
  size(e, t) {
    return e ? (e.match(/^[0-9]+$/) && (e += "px"), e) : t ? "100%" : "auto";
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
function Ee() {
  return null !== window.grafikart.USER;
}
function Ae(e) {
  return (
    !0 === window.grafikart.ADMIN ||
    (!!e && window.grafikart.USER === parseInt(e, 10))
  );
}
function Ce({ name: e, size: t }) {
  return u(
    "svg",
    { className: `icon icon-${e}`, width: t, height: t },
    u("use", { xlinkHref: `/sprite.svg#${e}` })
  );
}
async function Le(e) {
  return await h(`/api/comments?content=${e}`);
}
function Se() {
  return (Se =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }).apply(this, arguments);
}
var Oe = /[\'\"]/,
  Ie = {
    accesskey: "accessKey",
    allowfullscreen: "allowFullScreen",
    allowtransparency: "allowTransparency",
    autocomplete: "autoComplete",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    charset: "charSet",
    class: "className",
    classid: "classId",
    colspan: "colSpan",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    crossorigin: "crossOrigin",
    enctype: "encType",
    for: "htmlFor",
    formaction: "formAction",
    formenctype: "formEncType",
    formmethod: "formMethod",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    hreflang: "hrefLang",
    inputmode: "inputMode",
    keyparams: "keyParams",
    keytype: "keyType",
    marginheight: "marginHeight",
    marginwidth: "marginWidth",
    maxlength: "maxLength",
    mediagroup: "mediaGroup",
    minlength: "minLength",
    novalidate: "noValidate",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    rowspan: "rowSpan",
    spellcheck: "spellCheck",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    tabindex: "tabIndex",
    usemap: "useMap",
  },
  Te = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
  _e = ["style", "script"],
  Fe =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  $e = /mailto:/i,
  Me = /\n{2,}$/,
  Pe = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  De = /^ *> ?/gm,
  He = /^ {2,}\n/,
  Re = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/,
  qe = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,
  Ve = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  Ne = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  ze = /^(?:\n *)*\n/,
  je = /\r\n?/g,
  Be = /^\[\^([^\]]+)](:.*)\n/,
  Ue = /^\[\^([^\]]+)]/,
  Ke = /\f/g,
  Ye = /^\s*?\[(x|\s)\]/,
  Ge = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  We = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  Xe =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  Qe = /&([a-z]+);/g,
  Ze = /^<!--[\s\S]*?(?:-->)/,
  Je = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  et = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  tt = /^\{.*\}$/,
  nt = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  it = /^<([^ >]+@[^ >]+)>/,
  st = /^<([^ >]+:\/[^ >]+)>/,
  ot = / *\n+$/,
  rt = /(?:^|\n)( *)$/,
  at = /-([a-z])?/gi,
  lt = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  ct = /^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,
  dt = /^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,
  ut = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  ht = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  pt = /(\[|\])/g,
  mt = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  gt = /\t/g,
  ft = /^ *\| */,
  vt = /(^ *\||\| *$)/g,
  yt = / *$/,
  bt = /^ *:-+: *$/,
  wt = /^ *:-+ *$/,
  kt = /^ *-+: *$/,
  xt =
    /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  Et =
    /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  At = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  Ct = /^\\([^0-9A-Za-z\s])/,
  Lt =
    /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  St = /(^\n+|\n+$|\s+$)/g,
  Ot = /^([ \t]*)/,
  It = /\\([^0-9A-Z\s])/gi,
  Tt = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),
  _t = new RegExp(
    "( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)",
    "gm"
  ),
  Ft = new RegExp(
    "^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"
  ),
  $t = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
  Mt = new RegExp(
    "^\\[(" +
      $t +
      ")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"
  ),
  Pt = new RegExp(
    "^!\\[(" +
      $t +
      ")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"
  ),
  Dt = [Pe, Ve, qe, Ge, We, Xe, Ze, et, _t, Ft, lt, ct];
function Ht(e) {
  return e
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
    .replace(/[çÇ]/g, "c")
    .replace(/[ðÐ]/g, "d")
    .replace(/[ÈÉÊËéèêë]/g, "e")
    .replace(/[ÏïÎîÍíÌì]/g, "i")
    .replace(/[Ññ]/g, "n")
    .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
    .replace(/[ÜüÛûÚúÙù]/g, "u")
    .replace(/[ŸÿÝý]/g, "y")
    .replace(/[^a-z0-9- ]/gi, "")
    .replace(/ /gi, "-")
    .toLowerCase();
}
function Rt(e) {
  return kt.test(e)
    ? "right"
    : bt.test(e)
    ? "center"
    : wt.test(e)
    ? "left"
    : null;
}
function qt(e, t, n) {
  var i = n.inTable;
  n.inTable = !0;
  var s = t(e.trim(), n);
  n.inTable = i;
  var o = [[]];
  return (
    s.forEach(function (e, t) {
      "tableSeparator" === e.type
        ? 0 !== t && t !== s.length - 1 && o.push([])
        : ("text" !== e.type ||
            (null != s[t + 1] && "tableSeparator" !== s[t + 1].type) ||
            (e.content = e.content.replace(yt, "")),
          o[o.length - 1].push(e));
    }),
    o
  );
}
function Vt(e, t, n) {
  n.inline = !0;
  var i,
    s,
    o,
    r = qt(e[1], t, n),
    a = e[2].replace(vt, "").split("|").map(Rt),
    l =
      ((i = e[3]),
      (s = t),
      (o = n),
      i
        .trim()
        .split("\n")
        .map(function (e) {
          return qt(e, s, o);
        }));
  return (n.inline = !1), { align: a, cells: l, header: r, type: "table" };
}
function Nt(e, t) {
  return null == e.align[t] ? {} : { textAlign: e.align[t] };
}
function zt(e) {
  return function (t, n) {
    return n.inline ? e.exec(t) : null;
  };
}
function jt(e) {
  return function (t, n) {
    return n.inline || n.simple ? e.exec(t) : null;
  };
}
function Bt(e) {
  return function (t, n) {
    return n.inline || n.simple ? null : e.exec(t);
  };
}
function Ut(e) {
  return function (t) {
    return e.exec(t);
  };
}
function Kt(e) {
  try {
    if (
      decodeURIComponent(e)
        .replace(/[^A-Za-z0-9/:]/g, "")
        .match(/^\s*(javascript|vbscript|data):/i)
    )
      return null;
  } catch (t) {
    return null;
  }
  return e;
}
function Yt(e) {
  return e.replace(It, "$1");
}
function Gt(e, t, n) {
  var i = n.inline || !1,
    s = n.simple || !1;
  (n.inline = !0), (n.simple = !0);
  var o = e(t, n);
  return (n.inline = i), (n.simple = s), o;
}
function Wt(e, t, n) {
  var i = n.inline || !1,
    s = n.simple || !1;
  (n.inline = !1), (n.simple = !0);
  var o = e(t, n);
  return (n.inline = i), (n.simple = s), o;
}
function Xt(e, t, n) {
  return (n.inline = !1), e(t + "\n\n", n);
}
var Qt,
  Zt,
  Jt = function (e, t, n) {
    return { content: Gt(t, e[1], n) };
  };
function en() {
  return {};
}
function tn() {
  return null;
}
function nn() {
  return [].slice.call(arguments).filter(Boolean).join(" ");
}
function sn(e, t, n) {
  for (var i = e, s = t.split("."); s.length && void 0 !== (i = i[s[0]]); )
    s.shift();
  return i || n;
}
function on(e, t) {
  var n = sn(t, e);
  return n
    ? "function" == typeof n || ("object" == typeof n && "render" in n)
      ? n
      : sn(t, e + ".component", e)
    : e;
}
function rn(e) {
  var t = e.children,
    n = e.options,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        i,
        s = {},
        o = Object.keys(e);
      for (i = 0; i < o.length; i++)
        t.indexOf((n = o[i])) >= 0 || (s[n] = e[n]);
      return s;
    })(e, ["children", "options"]);
  return p.cloneElement(
    (function (e, t) {
      void 0 === t && (t = {}),
        (t.overrides = t.overrides || {}),
        (t.slugify = t.slugify || Ht),
        (t.namedCodesToUnicode = t.namedCodesToUnicode
          ? Se({}, Te, t.namedCodesToUnicode)
          : Te);
      var n = t.createElement || p.createElement;
      function i(e, i) {
        var s = sn(t.overrides, e + ".props", {});
        return n.apply(
          void 0,
          [
            on(e, t.overrides),
            Se({}, i, s, {
              className:
                nn(null == i ? void 0 : i.className, s.className) || void 0,
            }),
          ].concat([].slice.call(arguments, 2))
        );
      }
      function s(e) {
        var n = !1;
        t.forceInline ? (n = !0) : t.forceBlock || (n = !1 === mt.test(e));
        var s = h(u(n ? e : e.replace(St, "") + "\n\n", { inline: n }));
        if (null === t.wrapper) return s;
        var o,
          r = t.wrapper || (n ? "span" : "div");
        if (s.length > 1 || t.forceWrapper) o = s;
        else {
          if (1 === s.length)
            return "string" == typeof (o = s[0])
              ? i("span", { key: "outer" }, o)
              : o;
          o = null;
        }
        return p.createElement(r, { key: "outer" }, o);
      }
      function o(e) {
        var t = e.match(Fe);
        return t
          ? t.reduce(function (e, t, n) {
              var i,
                o = t.indexOf("=");
              if (-1 !== o) {
                var r = ((i = t.slice(0, o)),
                  -1 !== i.indexOf("-") &&
                    null === i.match(Je) &&
                    (i = i.replace(at, function (e, t) {
                      return t.toUpperCase();
                    })),
                  i).trim(),
                  a = (function (e) {
                    return e
                      ? (Oe.test(e.charAt(0)) && (e = e.substr(1)),
                        Oe.test(e.charAt(e.length - 1)) &&
                          (e = e.substr(0, e.length - 1)),
                        e)
                      : "";
                  })(t.slice(o + 1).trim()),
                  l = Ie[r] || r,
                  c = (e[l] = (function (e, t) {
                    return "style" === e
                      ? t.split(/;\s?/).reduce(function (e, t) {
                          var n = t.slice(0, t.indexOf(":"));
                          return (
                            (e[
                              n.replace(/(-[a-z])/g, function (e) {
                                return e[1].toUpperCase();
                              })
                            ] = t.slice(n.length + 1).trim()),
                            e
                          );
                        }, {})
                      : "href" === e
                      ? Kt(t)
                      : (t.match(tt) && (t = t.slice(1, t.length - 1)),
                        "true" === t || ("false" !== t && t));
                  })(r, a));
                "string" == typeof c &&
                  (Xe.test(c) || et.test(c)) &&
                  (e[l] = p.cloneElement(s(c.trim()), { key: n }));
              } else "style" !== t && (e[Ie[t] || t] = !0);
              return e;
            }, {})
          : void 0;
      }
      var r = [],
        a = {},
        l = {
          blockQuote: {
            match: Bt(Pe),
            order: Qt.HIGH,
            parse: function (e, t, n) {
              return { content: t(e[0].replace(De, ""), n) };
            },
            react: function (e, t, n) {
              return i("blockquote", { key: n.key }, t(e.content, n));
            },
          },
          breakLine: {
            match: Ut(He),
            order: Qt.HIGH,
            parse: en,
            react: function (e, t, n) {
              return i("br", { key: n.key });
            },
          },
          breakThematic: {
            match: Bt(Re),
            order: Qt.HIGH,
            parse: en,
            react: function (e, t, n) {
              return i("hr", { key: n.key });
            },
          },
          codeBlock: {
            match: Bt(Ve),
            order: Qt.MAX,
            parse: function (e) {
              return {
                content: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                lang: void 0,
              };
            },
            react: function (e, t, n) {
              return i(
                "pre",
                { key: n.key },
                i(
                  "code",
                  { className: e.lang ? "lang-" + e.lang : "" },
                  e.content
                )
              );
            },
          },
          codeFenced: {
            match: Bt(qe),
            order: Qt.MAX,
            parse: function (e) {
              return { content: e[3], lang: e[2] || void 0, type: "codeBlock" };
            },
          },
          codeInline: {
            match: jt(Ne),
            order: Qt.LOW,
            parse: function (e) {
              return { content: e[2] };
            },
            react: function (e, t, n) {
              return i("code", { key: n.key }, e.content);
            },
          },
          footnote: {
            match: Bt(Be),
            order: Qt.MAX,
            parse: function (e) {
              return r.push({ footnote: e[2], identifier: e[1] }), {};
            },
            react: tn,
          },
          footnoteReference: {
            match: zt(Ue),
            order: Qt.HIGH,
            parse: function (e) {
              return { content: e[1], target: "#" + t.slugify(e[1]) };
            },
            react: function (e, t, n) {
              return i(
                "a",
                { key: n.key, href: Kt(e.target) },
                i("sup", { key: n.key }, e.content)
              );
            },
          },
          gfmTask: {
            match: zt(Ye),
            order: Qt.HIGH,
            parse: function (e) {
              return { completed: "x" === e[1].toLowerCase() };
            },
            react: function (e, t, n) {
              return i("input", {
                checked: e.completed,
                key: n.key,
                readOnly: !0,
                type: "checkbox",
              });
            },
          },
          heading: {
            match: Bt(Ge),
            order: Qt.HIGH,
            parse: function (e, n, i) {
              return {
                content: Gt(n, e[2], i),
                id: t.slugify(e[2]),
                level: e[1].length,
              };
            },
            react: function (e, t, n) {
              return (
                (e.tag = "h" + e.level),
                i(e.tag, { id: e.id, key: n.key }, t(e.content, n))
              );
            },
          },
          headingSetext: {
            match: Bt(We),
            order: Qt.MAX,
            parse: function (e, t, n) {
              return {
                content: Gt(t, e[1], n),
                level: "=" === e[2] ? 1 : 2,
                type: "heading",
              };
            },
          },
          htmlComment: {
            match: Ut(Ze),
            order: Qt.HIGH,
            parse: function () {
              return {};
            },
            react: tn,
          },
          image: {
            match: jt(Pt),
            order: Qt.HIGH,
            parse: function (e) {
              return { alt: e[1], target: Yt(e[2]), title: e[3] };
            },
            react: function (e, t, n) {
              return i("img", {
                key: n.key,
                alt: e.alt || void 0,
                title: e.title || void 0,
                src: Kt(e.target),
              });
            },
          },
          link: {
            match: zt(Mt),
            order: Qt.LOW,
            parse: function (e, t, n) {
              return { content: Wt(t, e[1], n), target: Yt(e[2]), title: e[3] };
            },
            react: function (e, t, n) {
              return i(
                "a",
                { key: n.key, href: Kt(e.target), title: e.title },
                t(e.content, n)
              );
            },
          },
          linkAngleBraceStyleDetector: {
            match: zt(st),
            order: Qt.MAX,
            parse: function (e) {
              return {
                content: [{ content: e[1], type: "text" }],
                target: e[1],
                type: "link",
              };
            },
          },
          linkBareUrlDetector: {
            match: function (e, t) {
              return t.inAnchor ? null : zt(nt)(e, t);
            },
            order: Qt.MAX,
            parse: function (e) {
              return {
                content: [{ content: e[1], type: "text" }],
                target: e[1],
                title: void 0,
                type: "link",
              };
            },
          },
          linkMailtoDetector: {
            match: zt(it),
            order: Qt.MAX,
            parse: function (e) {
              var t = e[1],
                n = e[1];
              return (
                $e.test(n) || (n = "mailto:" + n),
                {
                  content: [
                    { content: t.replace("mailto:", ""), type: "text" },
                  ],
                  target: n,
                  type: "link",
                }
              );
            },
          },
          list: {
            match: function (e, t, n) {
              var i = rt.exec(n);
              return !i || (!t._list && t.inline)
                ? null
                : Ft.exec((e = i[1] + e));
            },
            order: Qt.HIGH,
            parse: function (e, t, n) {
              var i = e[2],
                s = i.length > 1,
                o = s ? +i : void 0,
                r = e[0].replace(Me, "\n").match(_t),
                a = !1;
              return {
                items: r.map(function (e, i) {
                  var s = Tt.exec(e)[0].length,
                    o = new RegExp("^ {1," + s + "}", "gm"),
                    l = e.replace(o, "").replace(Tt, ""),
                    c = i === r.length - 1,
                    d = -1 !== l.indexOf("\n\n") || (c && a);
                  a = d;
                  var u,
                    h = n.inline,
                    p = n._list;
                  (n._list = !0),
                    d
                      ? ((n.inline = !1), (u = l.replace(ot, "\n\n")))
                      : ((n.inline = !0), (u = l.replace(ot, "")));
                  var m = t(u, n);
                  return (n.inline = h), (n._list = p), m;
                }),
                ordered: s,
                start: o,
              };
            },
            react: function (e, t, n) {
              return i(
                e.ordered ? "ol" : "ul",
                { key: n.key, start: e.start },
                e.items.map(function (e, s) {
                  return i("li", { key: s }, t(e, n));
                })
              );
            },
          },
          newlineCoalescer: {
            match: Bt(ze),
            order: Qt.LOW,
            parse: en,
            react: function () {
              return "\n";
            },
          },
          paragraph: {
            match: Bt(ct),
            order: Qt.LOW,
            parse: Jt,
            react: function (e, t, n) {
              return i("p", { key: n.key }, t(e.content, n));
            },
          },
          ref: {
            match: zt(dt),
            order: Qt.MAX,
            parse: function (e) {
              return (a[e[1]] = { target: e[2], title: e[4] }), {};
            },
            react: tn,
          },
          refImage: {
            match: jt(ut),
            order: Qt.MAX,
            parse: function (e) {
              return { alt: e[1] || void 0, ref: e[2] };
            },
            react: function (e, t, n) {
              return i("img", {
                key: n.key,
                alt: e.alt,
                src: Kt(a[e.ref].target),
                title: a[e.ref].title,
              });
            },
          },
          refLink: {
            match: zt(ht),
            order: Qt.MAX,
            parse: function (e, t, n) {
              return {
                content: t(e[1], n),
                fallbackContent: t(e[0].replace(pt, "\\$1"), n),
                ref: e[2],
              };
            },
            react: function (e, t, n) {
              return a[e.ref]
                ? i(
                    "a",
                    {
                      key: n.key,
                      href: Kt(a[e.ref].target),
                      title: a[e.ref].title,
                    },
                    t(e.content, n)
                  )
                : i("span", { key: n.key }, t(e.fallbackContent, n));
            },
          },
          table: {
            match: Bt(lt),
            order: Qt.HIGH,
            parse: Vt,
            react: function (e, t, n) {
              return i(
                "table",
                { key: n.key },
                i(
                  "thead",
                  null,
                  i(
                    "tr",
                    null,
                    e.header.map(function (s, o) {
                      return i("th", { key: o, style: Nt(e, o) }, t(s, n));
                    })
                  )
                ),
                i(
                  "tbody",
                  null,
                  e.cells.map(function (s, o) {
                    return i(
                      "tr",
                      { key: o },
                      s.map(function (s, o) {
                        return i("td", { key: o, style: Nt(e, o) }, t(s, n));
                      })
                    );
                  })
                )
              );
            },
          },
          tableSeparator: {
            match: function (e, t) {
              return t.inTable ? ft.exec(e) : null;
            },
            order: Qt.HIGH,
            parse: function () {
              return { type: "tableSeparator" };
            },
            react: function () {
              return " | ";
            },
          },
          text: {
            match: Ut(Lt),
            order: Qt.MIN,
            parse: function (e) {
              return {
                content: e[0].replace(Qe, function (e, n) {
                  return t.namedCodesToUnicode[n]
                    ? t.namedCodesToUnicode[n]
                    : e;
                }),
              };
            },
            react: function (e) {
              return e.content;
            },
          },
          textBolded: {
            match: jt(xt),
            order: Qt.MED,
            parse: function (e, t, n) {
              return { content: t(e[2], n) };
            },
            react: function (e, t, n) {
              return i("strong", { key: n.key }, t(e.content, n));
            },
          },
          textEmphasized: {
            match: jt(Et),
            order: Qt.LOW,
            parse: function (e, t, n) {
              return { content: t(e[2], n) };
            },
            react: function (e, t, n) {
              return i("em", { key: n.key }, t(e.content, n));
            },
          },
          textEscaped: {
            match: jt(Ct),
            order: Qt.HIGH,
            parse: function (e) {
              return { content: e[1], type: "text" };
            },
          },
          textStrikethroughed: {
            match: jt(At),
            order: Qt.LOW,
            parse: Jt,
            react: function (e, t, n) {
              return i("del", { key: n.key }, t(e.content, n));
            },
          },
        };
      !0 !== t.disableParsingRawHTML &&
        ((l.htmlBlock = {
          match: Ut(Xe),
          order: Qt.HIGH,
          parse: function (e, t, n) {
            var i,
              s = e[3].match(Ot),
              r = new RegExp("^" + s[1], "gm"),
              a = e[3].replace(r, ""),
              l =
                ((i = a),
                Dt.some(function (e) {
                  return e.test(i);
                })
                  ? Xt
                  : Gt),
              c = e[1].toLowerCase(),
              d = -1 !== _e.indexOf(c);
            n.inAnchor = n.inAnchor || "a" === c;
            var u = d ? e[3] : l(t, a, n);
            return (
              (n.inAnchor = !1),
              { attrs: o(e[2]), content: u, noInnerParse: d, tag: d ? c : e[1] }
            );
          },
          react: function (e, t, n) {
            return i(
              e.tag,
              Object.assign({ key: n.key }, e.attrs),
              e.noInnerParse ? e.content : t(e.content, n)
            );
          },
        }),
        (l.htmlSelfClosing = {
          match: Ut(et),
          order: Qt.HIGH,
          parse: function (e) {
            return { attrs: o(e[2] || ""), tag: e[1] };
          },
          react: function (e, t, n) {
            return i(e.tag, Object.assign({}, e.attrs, { key: n.key }));
          },
        }));
      var c,
        d,
        u = (function (e) {
          var t = Object.keys(e);
          function n(i, s) {
            for (var o = [], r = ""; i; )
              for (var a = 0; a < t.length; ) {
                var l = t[a],
                  c = e[l],
                  d = c.match(i, s, r);
                if (d) {
                  var u = d[0];
                  i = i.substring(u.length);
                  var h = c.parse(d, n, s);
                  null == h.type && (h.type = l), o.push(h), (r = u);
                  break;
                }
                a++;
              }
            return o;
          }
          return (
            t.sort(function (t, n) {
              var i = e[t].order,
                s = e[n].order;
              return i !== s ? i - s : t < n ? -1 : 1;
            }),
            function (e, t) {
              return n(
                e.replace(je, "\n").replace(Ke, "").replace(gt, "    "),
                t
              );
            }
          );
        })(l),
        h =
          ((d = l),
          (c = function (e, t, n) {
            return d[e.type].react(e, t, n);
          }),
          function e(t, n) {
            if ((void 0 === n && (n = {}), Array.isArray(t))) {
              for (var i = n.key, s = [], o = !1, r = 0; r < t.length; r++) {
                n.key = r;
                var a = e(t[r], n),
                  l = "string" == typeof a;
                l && o ? (s[s.length - 1] += a) : s.push(a), (o = l);
              }
              return (n.key = i), s;
            }
            return c(t, e, n);
          }),
        m = s(e);
      return (
        r.length &&
          m.props.children.push(
            i(
              "footer",
              { key: "footer" },
              r.map(function (e) {
                return i(
                  "div",
                  { id: t.slugify(e.identifier), key: e.identifier },
                  e.identifier,
                  h(u(e.footnote, { inline: !0 }))
                );
              })
            )
          ),
        m
      );
    })(t, n),
    i
  );
}
((Zt = Qt || (Qt = {}))[(Zt.MAX = 0)] = "MAX"),
  (Zt[(Zt.HIGH = 1)] = "HIGH"),
  (Zt[(Zt.MED = 2)] = "MED"),
  (Zt[(Zt.LOW = 3)] = "LOW"),
  (Zt[(Zt.MIN = 4)] = "MIN");
var an,
  ln = { exports: {} };
/*!
 * $script.js JS loader & dependency manager
 * https://github.com/ded/script.js
 * (c) Dustin Diaz 2014 | License MIT
 */ (an = ln),
  (function (e, t) {
    an.exports ? (an.exports = t()) : (this.$script = t());
  })(0, function () {
    var e,
      t,
      n = document,
      i = n.getElementsByTagName("head")[0],
      s = {},
      o = {},
      r = {},
      a = {};
    function l(e, t) {
      for (var n = 0, i = e.length; n < i; ++n) if (!t(e[n])) return !1;
      return 1;
    }
    function c(e, t) {
      l(e, function (e) {
        return t(e), 1;
      });
    }
    function d(t, n, i) {
      t = t.push ? t : [t];
      var h = n && n.call,
        p = h ? n : i,
        m = h ? t.join("") : n,
        g = t.length;
      function f(e) {
        return e.call ? e() : s[e];
      }
      function v() {
        if (!--g)
          for (var e in ((s[m] = 1), p && p(), r))
            l(e.split("|"), f) && !c(r[e], f) && (r[e] = []);
      }
      return (
        setTimeout(function () {
          c(t, function t(n, i) {
            return null === n
              ? v()
              : (i ||
                  /^https?:\/\//.test(n) ||
                  !e ||
                  (n = -1 === n.indexOf(".js") ? e + n + ".js" : e + n),
                a[n]
                  ? (m && (o[m] = 1),
                    2 == a[n]
                      ? v()
                      : setTimeout(function () {
                          t(n, !0);
                        }, 0))
                  : ((a[n] = 1), m && (o[m] = 1), void u(n, v)));
          });
        }, 0),
        d
      );
    }
    function u(e, s) {
      var o,
        r = n.createElement("script");
      (r.onload =
        r.onerror =
        r.onreadystatechange =
          function () {
            (r.readyState && !/^c|loade/.test(r.readyState)) ||
              o ||
              ((r.onload = r.onreadystatechange = null),
              (o = 1),
              (a[e] = 2),
              s());
          }),
        (r.async = 1),
        (r.src = t ? e + (-1 === e.indexOf("?") ? "?" : "&") + t : e),
        i.insertBefore(r, i.lastChild);
    }
    return (
      (d.get = u),
      (d.order = function (e, t, n) {
        !(function i(s) {
          (s = e.shift()), e.length ? d(s, i) : d(s, t, n);
        })();
      }),
      (d.path = function (t) {
        e = t;
      }),
      (d.urlArgs = function (e) {
        t = e;
      }),
      (d.ready = function (e, t, n) {
        e = e.push ? e : [e];
        var i,
          o = [];
        return (
          !c(e, function (e) {
            s[e] || o.push(e);
          }) &&
          l(e, function (e) {
            return s[e];
          })
            ? t()
            : ((i = e.join("|")), (r[i] = r[i] || []), r[i].push(t), n && n(o)),
          d
        );
      }),
      (d.done = function (e) {
        d([null], e);
      }),
      d
    );
  });
var cn = ln.exports;
const dn = [
  "typescript",
  "elixir",
  "less",
  "stylus",
  "scss",
  "sass",
  "yaml",
  "twig",
];
function un(e) {
  e.forEach((e) => {
    e.parentNode.classList.add("with-syntax");
    let t = !1,
      n = e.getAttribute("class");
    (n =
      null === n ? "bash" : e.getAttribute("class").replace("markup", "bash")),
      dn.forEach((i) => {
        n.endsWith(i) &&
          ((t = !0),
          cn(
            `//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/languages/${i}.min.js`,
            () => {
              window.hljs.highlightBlock(e);
            }
          ));
      }),
      !1 === t && window.hljs.highlightBlock(e);
  });
}
function hn(e = document) {
  const t = e.querySelectorAll("pre code");
  if (t.length > 0)
    if (window.hljs) un(t);
    else {
      const e = document.createElement("link");
      e.setAttribute("rel", "stylesheet"),
        document.querySelector("head").appendChild(e),
        cn(
          "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js",
          () => {
            window.hljs.configure({ tabReplace: "    " }), un(t);
          }
        );
    }
}
document.addEventListener("turbolinks:load", () => {
  hn();
});
const pn = (e = "bold") => ({ component: "p", props: { className: e } });
function mn(e) {
  var t = e,
    { children: n } = t,
    i = c(t, ["children"]);
  const s = m();
  return (
    g(() => {
      s.current &&
        s.current.querySelectorAll("pre").length > 0 &&
        hn(s.current);
    }, [n]),
    u(
      "div",
      a({ ref: s }, i),
      u(rn, {
        children: n,
        options: {
          disableParsingRawHTML: !0,
          forceBlock: !0,
          wrapper: null,
          overrides: {
            h1: pn("bold underline text-big"),
            h2: pn("bold underline"),
            h3: pn(),
            h4: pn(),
            h5: pn(),
            h6: pn(),
          },
        },
      })
    )
  );
}
const gn = f(() =>
    u(
      "div",
      { class: "comment" },
      u("skeleton-box", {
        className: "comment__avatar",
        width: "40",
        height: "40",
        rounded: !0,
      }),
      u(
        "div",
        { className: "comment__meta" },
        u("skeleton-box", {
          className: "comment__author",
          text: "John Doe comm",
        }),
        u(
          "div",
          { className: "comment_actions" },
          u("skeleton-box", {
            className: "comment__date",
            text: "Il y a 9 mois",
          })
        )
      ),
      u("skeleton-box", {
        className: "comment__content",
        width: "921",
        height: "90",
      })
    )
  ),
  fn = f(
    ({
      comment: e,
      editing: t,
      onEdit: n,
      onUpdate: i,
      onDelete: s,
      onReply: o,
      children: r,
    }) => {
      const a = `#c${e.id}`,
        l = Ae(e.userId),
        c = ["comment"],
        d = m(null),
        [h, p] = v(!1),
        f = l
          ? (t) => {
              t.preventDefault(), n(e);
            }
          : null;
      g(() => {
        d.current && d.current.focus();
      }, [t]);
      let y = u(mn, {
        children: e.content,
        class: "formatted",
        onDoubleClick: f,
      });
      return (
        t &&
          (y = u(
            "form",
            {
              onSubmit: async function (t) {
                t.preventDefault(), p(!0), await i(e, d.current.value), p(!1);
              },
              className: "form-group stack",
            },
            u("textarea", {
              is: "textarea-autogrow",
              ref: d,
              defaultValue: e.content,
            }),
            u(
              A,
              null,
              u(C, { type: "submit", loading: h }, "Modifier"),
              u(L, { type: "reset", onClick: f }, "Annuler")
            )
          )),
        h && c.push("is-loading"),
        u(
          "div",
          { className: c.join(" "), id: `c${e.id}` },
          u("img", { src: e.avatar, alt: "", className: "comment__avatar" }),
          u(
            "div",
            { className: "comment__meta" },
            u("div", { className: "comment__author" }, e.username),
            u(
              "div",
              { className: "comment__actions" },
              u(
                "a",
                { className: "comment__date", href: `#c${e.id}` },
                u("time-ago", { time: e.createdAt })
              ),
              u(
                "a",
                {
                  href: a,
                  onClick: function (t) {
                    t.preventDefault(), o(e);
                  },
                },
                u(Ce, { name: "reply" }),
                "Répondre"
              ),
              l &&
                u(
                  "a",
                  { href: a, onClick: f },
                  u(Ce, { name: "edit" }),
                  "Editer"
                ),
              l &&
                u(
                  "a",
                  {
                    href: a,
                    onClick: async function (t) {
                      t.preventDefault(),
                        confirm(
                          "Voulez vous vraiment supprimer ce commentaire ?"
                        ) && (p(!0), await s(e));
                    },
                    className: "text-danger",
                  },
                  u(Ce, { name: "trash" }),
                  "Supprimer"
                )
            )
          ),
          u("div", { className: "comment__content" }, y),
          u("div", { className: "comment__replies" }, r)
        )
      );
    }
  );
function vn({ onSubmit: e, parent: t, onCancel: n = null }) {
  const [i, s] = v(!1),
    [o, r] = v({}),
    a = m(null),
    l = w(
      async (n) => {
        const i = n.target;
        n.preventDefault(), s(!0);
        const o = (await S(e(Object.fromEntries(new FormData(i)), t)))[1];
        o ? r(o) : i.reset(), s(!1);
      },
      [e, t]
    );
  return (
    g(() => {
      t && a.current && x(a.current);
    }, [t]),
    u(
      "form",
      { className: "grid", onSubmit: l, ref: a },
      !Ee() &&
        u(
          E,
          null,
          u(
            O,
            { name: "username", error: o.username, required: !0 },
            "Nom d'utilisateur"
          )
        ),
      u(
        "div",
        { className: "full" },
        u(
          O,
          { type: "textarea", name: "content", error: o.content, required: !0 },
          "Votre message"
        )
      ),
      u(
        A,
        { className: "full" },
        u(C, { type: "submit", loading: i }, "Envoyer"),
        n &&
          u(
            L,
            {
              onClick: function (e) {
                e.preventDefault(), n();
              },
            },
            "Annuler"
          )
      )
    )
  );
}
const yn = [
  { time: 45, divide: 60, text: "moins d'une minute" },
  { time: 90, divide: 60, text: "environ une minute" },
  { time: 2700, divide: 60, text: "%d minutes" },
  { time: 5400, divide: 3600, text: "environ une heure" },
  { time: 86400, divide: 3600, text: "%d heures" },
  { time: 151200, divide: 86400, text: "environ un jour" },
  { time: 2592e3, divide: 86400, text: "%d jours" },
  { time: 3888e3, divide: 2592e3, text: "environ un mois" },
  { time: 31536e3, divide: 2592e3, text: "%d mois" },
  { time: 47304e3, divide: 31536e3, text: "environ un an" },
  { time: 1 / 0, divide: 31536e3, text: "%d ans" },
];
class bn extends HTMLElement {
  connectedCallback() {
    const e = 1e3 * parseInt(this.getAttribute("time"), 10),
      t = new Date(e);
    this.updateText(t);
  }
  disconnectedCallback() {
    window.clearTimeout(this.timer);
  }
  updateText(e) {
    const t = (new Date().getTime() - e.getTime()) / 1e3;
    let n = null;
    const i = this.getAttribute("prefix");
    for (n of yn) if (Math.abs(t) < n.time) break;
    this.innerHTML =
      t >= 0
        ? `${i || "Il y a"} ${n.text.replace("%d", Math.round(t / n.divide))}`
        : `${i || "Dans"} ${n.text.replace(
            "%d",
            Math.round(Math.abs(t) / n.divide)
          )}`;
    let s = Math.abs(t) % n.divide;
    0 === s && (s = n.divide),
      s > 2147482 ||
        (this.timer = window.setTimeout(() => {
          window.requestAnimationFrame(() => {
            this.updateText(e);
          });
        }, 1e3 * s));
  }
}
class wn extends HTMLElement {
  connectedCallback() {
    const e = 1e3 * parseInt(this.getAttribute("time"), 10),
      t = new Date(e);
    this.updateText(t);
  }
  disconnectedCallback() {
    window.clearTimeout(this.timer);
  }
  updateText(e) {
    const t = new Date().getTime(),
      n = e - t,
      i = Math.floor(n / 864e5),
      s = Math.floor((n % 864e5) / 36e5),
      o = Math.floor((n % 36e5) / 6e4),
      r = Math.floor((n % 6e4) / 1e3);
    if (n < 0) return (this.innerText = ""), "";
    let a = 1e3;
    i > 0
      ? ((this.innerText = `${i}j ${s}h`), (a = 36e5))
      : s > 0
      ? ((this.innerText = `${s}h ${o}m`), (a = 6e4))
      : (this.innerText = `${o}m ${r}s`),
      n > 0 &&
        (this.timer = window.setTimeout(() => {
          window.requestAnimationFrame
            ? window.requestAnimationFrame(() => this.updateText(e))
            : this.updateText(e);
        }, a));
  }
}
function kn(e, t) {
  e.split(/\s+/).forEach((e) => {
    t(e);
  });
}
class xn {
  constructor() {
    this._events = {};
  }
  on(e, t) {
    kn(e, (e) => {
      (this._events[e] = this._events[e] || []), this._events[e].push(t);
    });
  }
  off(e, t) {
    var n = arguments.length;
    0 !== n
      ? kn(e, (e) => {
          if (1 === n) return delete this._events[e];
          e in this._events != !1 &&
            this._events[e].splice(this._events[e].indexOf(t), 1);
        })
      : (this._events = {});
  }
  trigger(e, ...t) {
    var n = this;
    kn(e, (e) => {
      if (e in n._events != !1) for (let i of n._events[e]) i.apply(n, t);
    });
  }
}
/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */
var En = [
  [67, 67],
  [160, 160],
  [192, 438],
  [452, 652],
  [961, 961],
  [1019, 1019],
  [1083, 1083],
  [1281, 1289],
  [1984, 1984],
  [5095, 5095],
  [7429, 7441],
  [7545, 7549],
  [7680, 7935],
  [8580, 8580],
  [9398, 9449],
  [11360, 11391],
  [42792, 42793],
  [42802, 42851],
  [42873, 42897],
  [42912, 42922],
  [64256, 64260],
  [65313, 65338],
  [65345, 65370],
];
function An(e) {
  return e
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "")
    .normalize("NFKD")
    .toLowerCase();
}
var Cn = null;
function Ln(e) {
  var t, n;
  null === Cn &&
    ((t = { "l·": "l", ʼn: "n", æ: "ae", ø: "o", aʾ: "a", dž: "dz" }),
    (n = {}),
    En.forEach((e) => {
      for (let i = e[0]; i <= e[1]; i++) {
        let e = String.fromCharCode(i),
          s = e
            .normalize("NFD")
            .replace(/[\u0300-\u036F]/g, "")
            .normalize("NFKD");
        s != e &&
          ((s = s.toLowerCase()),
          s in t && (s = t[s]),
          s in n || (n[s] = s + s.toUpperCase()),
          (n[s] += e));
      }
    }),
    (Cn = n));
  for (let i in Cn)
    Cn.hasOwnProperty(i) &&
      (e = e.replace(new RegExp(i, "g"), "[" + Cn[i] + "]"));
  return e;
}
/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */ function Sn(
  e,
  t
) {
  if (e) return e[t];
}
function On(e, t) {
  if (e) {
    for (var n = t.split("."); n.length && (e = e[n.shift()]); );
    return e;
  }
}
function In(e, t, n) {
  var i, s;
  return e
    ? -1 === (s = (e += "").search(t.regex))
      ? 0
      : ((i = t.string.length / e.length), 0 === s && (i += 0.5), i * n)
    : 0;
}
function Tn(e) {
  return (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}
function _n(e, t) {
  var n = e[t];
  n && !Array.isArray(n) && (e[t] = [n]);
}
function Fn(e, t) {
  if (Array.isArray(e)) e.forEach(t);
  else for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
}
function $n(e, t) {
  return "number" == typeof e && "number" == typeof t
    ? e > t
      ? 1
      : e < t
      ? -1
      : 0
    : (e = An(e + "").toLowerCase()) > (t = An(t + "").toLowerCase())
    ? 1
    : t > e
    ? -1
    : 0;
}
/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */ class Mn {
  constructor(e, t) {
    (this.items = void 0),
      (this.settings = void 0),
      (this.items = e),
      (this.settings = t || { diacritics: !0 });
  }
  tokenize(e, t, n) {
    if (!e || !e.length) return [];
    const i = [],
      s = e.split(/\s+/);
    var o;
    return (
      n &&
        (o = new RegExp("^(" + Object.keys(n).map(Tn).join("|") + "):(.*)$")),
      s.forEach((e) => {
        let n,
          s = null,
          r = null;
        o && (n = e.match(o)) && ((s = n[1]), (e = n[2])),
          e.length > 0 &&
            ((r = Tn(e)),
            this.settings.diacritics && (r = Ln(r)),
            t && (r = "\\b" + r),
            (r = new RegExp(r, "i"))),
          i.push({ string: e, regex: r, field: s });
      }),
      i
    );
  }
  getScoreFunction(e, t) {
    var n = this.prepareSearch(e, t);
    return this._getScoreFunction(n);
  }
  _getScoreFunction(e) {
    const t = e.tokens,
      n = t.length;
    if (!n)
      return function () {
        return 0;
      };
    const i = e.options.fields,
      s = e.weights,
      o = i.length,
      r = e.getAttrFn;
    if (!o)
      return function () {
        return 1;
      };
    const a =
      1 === o
        ? function (e, t) {
            const n = i[0].field;
            return In(r(t, n), e, s[n]);
          }
        : function (e, t) {
            var n = 0;
            if (e.field) {
              const i = r(t, e.field);
              !e.regex && i ? (n += 1 / o) : (n += In(i, e, 1));
            } else
              Fn(s, (i, s) => {
                n += In(r(t, s), e, i);
              });
            return n / o;
          };
    return 1 === n
      ? function (e) {
          return a(t[0], e);
        }
      : "and" === e.options.conjunction
      ? function (e) {
          for (var i, s = 0, o = 0; s < n; s++) {
            if ((i = a(t[s], e)) <= 0) return 0;
            o += i;
          }
          return o / n;
        }
      : function (e) {
          var i = 0;
          return (
            Fn(t, (t) => {
              i += a(t, e);
            }),
            i / n
          );
        };
  }
  getSortFunction(e, t) {
    var n = this.prepareSearch(e, t);
    return this._getSortFunction(n);
  }
  _getSortFunction(e) {
    var t, n, i, s, o, r;
    const a = this,
      l = e.options,
      c = (!e.query && l.sort_empty) || l.sort,
      d = [],
      u = [],
      h = function (t, n) {
        return "$score" === t ? n.score : e.getAttrFn(a.items[n.id], t);
      };
    if (c)
      for (t = 0, n = c.length; t < n; t++)
        (e.query || "$score" !== c[t].field) && d.push(c[t]);
    if (e.query) {
      for (r = !0, t = 0, n = d.length; t < n; t++)
        if ("$score" === d[t].field) {
          r = !1;
          break;
        }
      r && d.unshift({ field: "$score", direction: "desc" });
    } else
      for (t = 0, n = d.length; t < n; t++)
        if ("$score" === d[t].field) {
          d.splice(t, 1);
          break;
        }
    for (t = 0, n = d.length; t < n; t++)
      u.push("desc" === d[t].direction ? -1 : 1);
    return (s = d.length)
      ? 1 === s
        ? ((i = d[0].field),
          (o = u[0]),
          function (e, t) {
            return o * $n(h(i, e), h(i, t));
          })
        : function (e, t) {
            var n, i, o;
            for (n = 0; n < s; n++)
              if (((o = d[n].field), (i = u[n] * $n(h(o, e), h(o, t)))))
                return i;
            return 0;
          }
      : null;
  }
  prepareSearch(e, t) {
    const n = {};
    var i = Object.assign({}, t);
    if ((_n(i, "sort"), _n(i, "sort_empty"), i.fields)) {
      if (
        (_n(i, "fields"),
        Array.isArray(i.fields) && "object" != typeof i.fields[0])
      ) {
        var s = [];
        i.fields.forEach((e) => {
          s.push({ field: e });
        }),
          (i.fields = s);
      }
      i.fields.forEach((e) => {
        n[e.field] = "weight" in e ? e.weight : 1;
      });
    }
    return {
      options: i,
      query: (e = An(e + "")
        .toLowerCase()
        .trim()),
      tokens: this.tokenize(e, i.respect_word_boundaries, n),
      total: 0,
      items: [],
      weights: n,
      getAttrFn: i.nesting ? On : Sn,
    };
  }
  search(e, t) {
    var n,
      i,
      s,
      o,
      r = this;
    return (
      (i = this.prepareSearch(e, t)),
      (t = i.options),
      (e = i.query),
      (o = t.score || r._getScoreFunction(i)),
      e.length
        ? Fn(r.items, (e, s) => {
            (n = o(e)),
              (!1 === t.filter || n > 0) && i.items.push({ score: n, id: s });
          })
        : Fn(r.items, (e, t) => {
            i.items.push({ score: 1, id: t });
          }),
      (s = r._getSortFunction(i)) && i.items.sort(s),
      (i.total = i.items.length),
      "number" == typeof t.limit && (i.items = i.items.slice(0, t.limit)),
      i
    );
  }
}
const Pn = (e) => {
    if (e.jquery) return e[0];
    if (e instanceof HTMLElement) return e;
    if (e.indexOf("<") > -1) {
      let t = document.createElement("div");
      return (t.innerHTML = e.trim()), t.firstChild;
    }
    return document.querySelector(e);
  },
  Dn = (e, t) => {
    var n = document.createEvent("HTMLEvents");
    n.initEvent(t, !0, !1), e.dispatchEvent(n);
  },
  Hn = (e, t) => {
    Object.assign(e.style, t);
  },
  Rn = (e, ...t) => {
    var n = Vn(t);
    (e = Nn(e)).map((e) => {
      n.map((t) => {
        e.classList.add(t);
      });
    });
  },
  qn = (e, ...t) => {
    var n = Vn(t);
    (e = Nn(e)).map((e) => {
      n.map((t) => {
        e.classList.remove(t);
      });
    });
  },
  Vn = (e) => {
    var t = [];
    for (let n of e)
      "string" == typeof n && (n = n.trim().split(/[\11\12\14\15\40]/)),
        Array.isArray(n) && (t = t.concat(n));
    return t.filter(Boolean);
  },
  Nn = (e) => (Array.isArray(e) || (e = [e]), e),
  zn = (e, t, n) => {
    if (!n || n.contains(e))
      for (; e && e.matches; ) {
        if (e.matches(t)) return e;
        e = e.parentNode;
      }
  },
  jn = (e, t = 0) => (t > 0 ? e[e.length - 1] : e[0]),
  Bn = (e, t) => {
    if (!e) return -1;
    t = t || e.nodeName;
    for (var n = 0; (e = e.previousElementSibling); ) e.matches(t) && n++;
    return n;
  },
  Un = (e, t) => {
    for (const n in t) {
      let i = t[n];
      null == i ? e.removeAttribute(n) : e.setAttribute(n, i);
    }
  },
  Kn = (e, t) => {
    e.parentNode && e.parentNode.replaceChild(t, e);
  },
  Yn = (e, t) => {
    if (null === t) return;
    if ("string" == typeof t) {
      if (!t.length) return;
      t = new RegExp(t, "i");
    }
    const n = (e) =>
      3 === e.nodeType
        ? ((e) => {
            var n = e.data.match(t);
            if (n && e.data.length > 0) {
              var i = document.createElement("span");
              i.className = "highlight";
              var s = e.splitText(n.index);
              s.splitText(n[0].length);
              var o = s.cloneNode(!0);
              return i.appendChild(o), Kn(s, i), 1;
            }
            return 0;
          })(e)
        : (((e) => {
            if (
              1 === e.nodeType &&
              e.childNodes &&
              !/(script|style)/i.test(e.tagName) &&
              ("highlight" !== e.className || "SPAN" !== e.tagName)
            )
              for (var t = 0; t < e.childNodes.length; ++t)
                t += n(e.childNodes[t]);
          })(e),
          0);
    n(e);
  },
  Gn =
    "undefined" != typeof navigator && /Mac/.test(navigator.userAgent)
      ? "metaKey"
      : "ctrlKey";
var Wn = {
  options: [],
  optgroups: [],
  plugins: [],
  delimiter: ",",
  splitOn: null,
  persist: !0,
  diacritics: !0,
  create: null,
  createOnBlur: !1,
  createFilter: null,
  highlight: !0,
  openOnFocus: !0,
  shouldOpen: null,
  maxOptions: 50,
  maxItems: null,
  hideSelected: null,
  duplicates: !1,
  addPrecedence: !1,
  selectOnTab: !1,
  preload: null,
  allowEmptyOption: !1,
  closeAfterSelect: !1,
  loadThrottle: 300,
  loadingClass: "loading",
  dataAttr: null,
  optgroupField: "optgroup",
  valueField: "value",
  labelField: "text",
  disabledField: "disabled",
  optgroupLabelField: "label",
  optgroupValueField: "value",
  lockOptgroupOrder: !1,
  sortField: "$order",
  searchField: ["text"],
  searchConjunction: "and",
  mode: null,
  wrapperClass: "ts-control",
  inputClass: "ts-input",
  dropdownClass: "ts-dropdown",
  dropdownContentClass: "ts-dropdown-content",
  itemClass: "item",
  optionClass: "option",
  dropdownParent: null,
  controlInput: null,
  copyClassesToDropdown: !0,
  placeholder: null,
  hidePlaceholder: null,
  shouldLoad: function (e) {
    return e.length > 0;
  },
  render: {},
};
const Xn = (e) => (null == e ? null : Qn(e)),
  Qn = (e) => ("boolean" == typeof e ? (e ? "1" : "0") : e + ""),
  Zn = (e) =>
    (e + "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;"),
  Jn = (e, t) => {
    var n;
    return function (i, s) {
      var o = this;
      n && ((o.loading = Math.max(o.loading - 1, 0)), clearTimeout(n)),
        (n = setTimeout(function () {
          (n = null), (o.loadedSearches[i] = !0), e.call(o, i, s);
        }, t));
    };
  },
  ei = (e, t, n) => {
    var i,
      s = e.trigger,
      o = {};
    for (i in ((e.trigger = function () {
      var n = arguments[0];
      if (-1 === t.indexOf(n)) return s.apply(e, arguments);
      o[n] = arguments;
    }),
    n.apply(e, []),
    (e.trigger = s),
    o))
      s.apply(e, o[i]);
  },
  ti = (e, t = !1) => {
    e && (e.preventDefault(), t && e.stopPropagation());
  },
  ni = (e, t, n, i) => {
    e.addEventListener(t, n, i);
  },
  ii = (e, t) =>
    !!t &&
    !!t[e] &&
    1 ===
      (t.altKey ? 1 : 0) +
        (t.ctrlKey ? 1 : 0) +
        (t.shiftKey ? 1 : 0) +
        (t.metaKey ? 1 : 0),
  si = (e, t) => {
    const n = e.getAttribute("id");
    return n || (e.setAttribute("id", t), t);
  },
  oi = (e) => e.replace(/[\\"']/g, "\\$&");
function ri(e, t) {
  var n = Object.assign({}, Wn, t),
    i = n.dataAttr,
    s = n.labelField,
    o = n.valueField,
    r = n.disabledField,
    a = n.optgroupField,
    l = n.optgroupLabelField,
    c = n.optgroupValueField,
    d = e.tagName.toLowerCase(),
    u = e.getAttribute("placeholder") || e.getAttribute("data-placeholder");
  if (!u && !n.allowEmptyOption) {
    let t = e.querySelector('option[value=""]');
    t && (u = t.textContent);
  }
  var h = {
    placeholder: u,
    options: [],
    optgroups: [],
    items: [],
    maxItems: null,
  };
  return (
    "select" === d
      ? (() => {
          var t,
            d = h.options,
            u = {},
            p = 1,
            m = (e) => {
              var t = Object.assign({}, e.dataset),
                n = i && t[i];
              return (
                "string" == typeof n &&
                  n.length &&
                  (t = Object.assign(t, JSON.parse(n))),
                t
              );
            },
            g = (e, t) => {
              var i = Xn(e.value);
              if (null != i && (i || n.allowEmptyOption)) {
                if (u.hasOwnProperty(i)) {
                  if (t) {
                    var l = u[i][a];
                    l
                      ? Array.isArray(l)
                        ? l.push(t)
                        : (u[i][a] = [l, t])
                      : (u[i][a] = t);
                  }
                } else {
                  var c = m(e);
                  (c[s] = c[s] || e.textContent),
                    (c[o] = c[o] || i),
                    (c[r] = c[r] || e.disabled),
                    (c[a] = c[a] || t),
                    (c.$option = e),
                    (u[i] = c),
                    d.push(c);
                }
                e.selected && h.items.push(i);
              }
            },
            f = (e) => {
              var t, n;
              ((n = m(e))[l] = n[l] || e.getAttribute("label") || ""),
                (n[c] = n[c] || p++),
                (n[r] = n[r] || e.disabled),
                h.optgroups.push(n),
                (t = n[c]);
              for (const i of e.children) g(i, t);
            };
          h.maxItems = e.hasAttribute("multiple") ? null : 1;
          for (const n of e.children)
            "optgroup" === (t = n.tagName.toLowerCase())
              ? f(n)
              : "option" === t && g(n);
        })()
      : (() => {
          var t,
            r,
            a = e.getAttribute(i);
          if (a) {
            h.options = JSON.parse(a);
            for (const e of h.options) h.items.push(e[o]);
          } else {
            var l = e.value.trim() || "";
            if (!n.allowEmptyOption && !l.length) return;
            t = l.split(n.delimiter);
            for (const e of t) ((r = {})[s] = e), (r[o] = e), h.options.push(r);
            h.items = t;
          }
        })(),
    Object.assign({}, Wn, h, t)
  );
}
var ai = 0;
class li extends (function (e) {
  return (
    (e.plugins = {}),
    class extends e {
      constructor(...e) {
        super(...e),
          (this.plugins = {
            names: [],
            settings: {},
            requested: {},
            loaded: {},
          });
      }
      static define(t, n) {
        e.plugins[t] = { name: t, fn: n };
      }
      initializePlugins(e) {
        var t, n, i;
        const s = this,
          o = [];
        if (Array.isArray(e))
          for (t = 0, n = e.length; t < n; t++)
            "string" == typeof e[t]
              ? o.push(e[t])
              : ((s.plugins.settings[e[t].name] = e[t].options),
                o.push(e[t].name));
        else if (e)
          for (i in e)
            e.hasOwnProperty(i) && ((s.plugins.settings[i] = e[i]), o.push(i));
        for (; o.length; ) s.require(o.shift());
      }
      loadPlugin(t) {
        var n = this,
          i = n.plugins,
          s = e.plugins[t];
        if (!e.plugins.hasOwnProperty(t))
          throw new Error('Unable to find "' + t + '" plugin');
        (i.requested[t] = !0),
          (i.loaded[t] = s.fn.apply(n, [n.plugins.settings[t] || {}])),
          i.names.push(t);
      }
      require(e) {
        var t = this,
          n = t.plugins;
        if (!t.plugins.loaded.hasOwnProperty(e)) {
          if (n.requested[e])
            throw new Error('Plugin has circular dependency ("' + e + '")');
          t.loadPlugin(e);
        }
        return n.loaded[e];
      }
    }
  );
})(xn) {
  constructor(e, t) {
    var n;
    super(),
      (this.control_input = void 0),
      (this.wrapper = void 0),
      (this.dropdown = void 0),
      (this.control = void 0),
      (this.dropdown_content = void 0),
      (this.order = 0),
      (this.settings = void 0),
      (this.input = void 0),
      (this.tabIndex = void 0),
      (this.is_select_tag = void 0),
      (this.rtl = void 0),
      (this.inputId = void 0),
      (this._destroy = void 0),
      (this.sifter = void 0),
      (this.tab_key = !1),
      (this.isOpen = !1),
      (this.isDisabled = !1),
      (this.isRequired = void 0),
      (this.isInvalid = !1),
      (this.isLocked = !1),
      (this.isFocused = !1),
      (this.isInputHidden = !1),
      (this.isSetup = !1),
      (this.ignoreFocus = !1),
      (this.hasOptions = !1),
      (this.currentResults = null),
      (this.lastValue = ""),
      (this.caretPos = 0),
      (this.loading = 0),
      (this.loadedSearches = {}),
      (this.activeOption = null),
      (this.activeItems = []),
      (this.optgroups = {}),
      (this.options = {}),
      (this.userOptions = {}),
      (this.items = []),
      (this.renderCache = { item: {}, option: {} }),
      ai++;
    var i = Pn(e);
    if (i.tomselect)
      throw new Error("Tom Select already initialized on this element");
    (i.tomselect = this),
      (n = (
        window.getComputedStyle && window.getComputedStyle(i, null)
      ).getPropertyValue("direction")),
      (this.settings = ri(i, t)),
      (this.input = i),
      (this.tabIndex = i.tabIndex || 0),
      (this.is_select_tag = "select" === i.tagName.toLowerCase()),
      (this.rtl = /rtl/i.test(n)),
      (this.inputId = si(i, "tomselect-" + ai)),
      (this.isRequired = i.required),
      (this.sifter = new Mn(this.options, {
        diacritics: this.settings.diacritics,
      })),
      this.setupOptions(this.settings.options, this.settings.optgroups),
      delete this.settings.optgroups,
      delete this.settings.options,
      (this.settings.mode =
        this.settings.mode ||
        (1 === this.settings.maxItems ? "single" : "multi")),
      "boolean" != typeof this.settings.hideSelected &&
        (this.settings.hideSelected = "multi" === this.settings.mode),
      "boolean" != typeof this.settings.hidePlaceholder &&
        (this.settings.hidePlaceholder = "multi" !== this.settings.mode);
    var s = this.settings.createFilter;
    "function" != typeof s &&
      ("string" == typeof s && (s = new RegExp(s)),
      s instanceof RegExp
        ? (this.settings.createFilter = (e) => s.test(e))
        : (this.settings.createFilter = () => !0)),
      this.initializePlugins(this.settings.plugins),
      this.setupCallbacks(),
      this.setupTemplates(),
      this.setup();
  }
  setup() {
    var e,
      t,
      n,
      i,
      s,
      o,
      r,
      a,
      l,
      c = this,
      d = c.settings,
      u = c.input;
    const h = { passive: !0 },
      p = c.inputId + "-ts-dropdown";
    if (
      ((o = c.settings.mode),
      (r = u.getAttribute("class") || ""),
      (e = Pn("<div>")),
      Rn(e, d.wrapperClass, r, o),
      (t = Pn('<div class="items">')),
      Rn(t, d.inputClass),
      e.append(t),
      (i = c._render("dropdown")),
      Rn(i, d.dropdownClass, o),
      (s = Pn(`<div role="listbox" id="${p}" tabindex="-1">`)),
      Rn(s, d.dropdownContentClass),
      i.append(s),
      Pn(d.dropdownParent || e).appendChild(i),
      d.controlInput)
    )
      n = Pn(d.controlInput);
    else {
      n = Pn('<input type="text" autocomplete="off" size="1" />');
      for (const e of ["autocorrect", "autocapitalize", "autocomplete"])
        u.getAttribute(e) && Un(n, { [e]: u.getAttribute(e) });
    }
    d.controlInput ||
      ((n.tabIndex = u.disabled ? -1 : c.tabIndex), t.appendChild(n)),
      Un(n, {
        role: "combobox",
        haspopup: "listbox",
        "aria-expanded": "false",
        "aria-controls": p,
      }),
      (l = si(n, c.inputId + "-tomselected"));
    let m =
        "label[for='" + ((e) => e.replace(/['"\\]/g, "\\$&"))(c.inputId) + "']",
      g = document.querySelector(m);
    if (g) {
      Un(g, { for: l });
      let e = si(g, c.inputId + "-ts-label");
      Un(s, { "aria-labelledby": e });
    }
    c.settings.copyClassesToDropdown && Rn(i, r),
      (e.style.width = u.style.width),
      c.plugins.names.length &&
        ((a = "plugin-" + c.plugins.names.join(" plugin-")), Rn([e, i], a)),
      (null === d.maxItems || d.maxItems > 1) &&
        c.is_select_tag &&
        Un(u, { multiple: "multiple" }),
      c.settings.placeholder && Un(n, { placeholder: d.placeholder }),
      !c.settings.splitOn &&
        c.settings.delimiter &&
        (c.settings.splitOn = new RegExp(
          "\\s*" + Tn(c.settings.delimiter) + "+\\s*"
        )),
      this.settings.load &&
        this.settings.loadThrottle &&
        (this.settings.load = Jn(
          this.settings.load,
          this.settings.loadThrottle
        )),
      (c.control = t),
      (c.control_input = n),
      (c.wrapper = e),
      (c.dropdown = i),
      (c.dropdown_content = s),
      (c.control_input.type = u.type),
      ni(i, "click", (e) => {
        const t = zn(e.target, "[data-selectable]");
        t && (c.onOptionSelect(e, t), ti(e, !0));
      }),
      ni(t, "click", (e) => {
        var i = zn(e.target, "." + c.settings.itemClass, t);
        i && c.onItemSelect(e, i)
          ? ti(e, !0)
          : "" == n.value && (c.onClick(), ti(e, !0));
      }),
      ni(n, "mousedown", (e) => {
        "" !== n.value && e.stopPropagation();
      }),
      ni(n, "keydown", (e) => c.onKeyDown(e)),
      ni(n, "keyup", (e) => c.onKeyUp(e)),
      ni(n, "keypress", (e) => c.onKeyPress(e)),
      ni(n, "resize", () => c.positionDropdown(), h),
      ni(n, "blur", () => c.onBlur()),
      ni(n, "focus", (e) => c.onFocus(e)),
      ni(n, "paste", (e) => c.onPaste(e));
    const f = (t) => {
      if (!e.contains(t.target) && !i.contains(t.target))
        return c.isFocused && c.blur(), void c.inputState();
      ti(t, !0);
    };
    var v = () => {
      c.isOpen && c.positionDropdown();
    };
    ni(document, "mousedown", (e) => f(e)),
      ni(window, "sroll", v, h),
      ni(window, "resize", v, h),
      (c._destroy = () => {
        document.removeEventListener("mousedown", f),
          window.removeEventListener("sroll", v),
          window.removeEventListener("resize", v);
      }),
      (this.revertSettings = { innerHTML: u.innerHTML, tabIndex: u.tabIndex }),
      (u.tabIndex = -1),
      Un(u, { hidden: "hidden" }),
      u.insertAdjacentElement("afterend", c.wrapper),
      c.setValue(d.items),
      (d.items = []),
      ni(u, "invalid", (e) => {
        ti(e), c.isInvalid || ((c.isInvalid = !0), c.refreshState());
      }),
      c.updateOriginalInput(),
      c.refreshItems(),
      c.close(!1),
      c.inputState(),
      (c.isSetup = !0),
      u.disabled && c.disable(),
      c.on("change", this.onChange),
      Rn(u, "tomselected"),
      c.trigger("initialize"),
      !0 === d.preload && c.load("");
  }
  setupOptions(e = [], t = []) {
    for (const n of e) this.registerOption(n);
    for (const n of t) this.registerOptionGroup(n);
  }
  setupTemplates() {
    var e = this,
      t = e.settings.labelField,
      n = e.settings.optgroupLabelField,
      i = {
        optgroup: (e) => {
          let t = document.createElement("div");
          return (t.className = "optgroup"), t.appendChild(e.options), t;
        },
        optgroup_header: (e, t) =>
          '<div class="optgroup-header">' + t(e[n]) + "</div>",
        option: (e, n) => "<div>" + n(e[t]) + "</div>",
        item: (e, n) => "<div>" + n(e[t]) + "</div>",
        option_create: (e, t) =>
          '<div class="create">Add <strong>' +
          t(e.input) +
          "</strong>&hellip;</div>",
        no_results: () => '<div class="no-results">No results found</div>',
        loading: () => '<div class="spinner"></div>',
        not_loading: () => {},
        dropdown: () => "<div></div>",
      };
    e.settings.render = Object.assign({}, i, e.settings.render);
  }
  setupCallbacks() {
    var e,
      t,
      n = {
        initialize: "onInitialize",
        change: "onChange",
        item_add: "onItemAdd",
        item_remove: "onItemRemove",
        item_select: "onItemSelect",
        clear: "onClear",
        option_add: "onOptionAdd",
        option_remove: "onOptionRemove",
        option_clear: "onOptionClear",
        optgroup_add: "onOptionGroupAdd",
        optgroup_remove: "onOptionGroupRemove",
        optgroup_clear: "onOptionGroupClear",
        dropdown_open: "onDropdownOpen",
        dropdown_close: "onDropdownClose",
        type: "onType",
        load: "onLoad",
        focus: "onFocus",
        blur: "onBlur",
      };
    for (e in n) (t = this.settings[n[e]]) && this.on(e, t);
  }
  onClick() {
    var e = this;
    if (e.activeItems.length > 0) return e.clearActiveItems(), void e.focus();
    e.isFocused && e.isOpen ? e.blur() : e.focus();
  }
  onMouseDown() {}
  onChange() {
    Dn(this.input, "input"), Dn(this.input, "change");
  }
  onPaste(e) {
    var t = this;
    t.isFull() || t.isInputHidden || t.isLocked
      ? ti(e)
      : t.settings.splitOn &&
        setTimeout(() => {
          var e = t.inputValue();
          if (e.match(t.settings.splitOn)) {
            var n = e.trim().split(t.settings.splitOn);
            for (const e of n) t.createItem(e);
          }
        }, 0);
  }
  onKeyPress(e) {
    var t = this;
    if (!t.isLocked) {
      var n = String.fromCharCode(e.keyCode || e.which);
      return t.settings.create &&
        "multi" === t.settings.mode &&
        n === t.settings.delimiter
        ? (t.createItem(), void ti(e))
        : void 0;
    }
    ti(e);
  }
  onKeyDown(e) {
    var t = this;
    if (t.isLocked) 9 !== e.keyCode && ti(e);
    else {
      switch (e.keyCode) {
        case 65:
          if (ii(Gn, e)) return void t.selectAll();
          break;
        case 27:
          return t.isOpen && (ti(e, !0), t.close()), void t.clearActiveItems();
        case 40:
          if (!t.isOpen && t.hasOptions) t.open();
          else if (t.activeOption) {
            let e = t.getAdjacent(t.activeOption, 1);
            e && t.setActiveOption(e);
          }
          return void ti(e);
        case 38:
          if (t.activeOption) {
            let e = t.getAdjacent(t.activeOption, -1);
            e && t.setActiveOption(e);
          }
          return void ti(e);
        case 13:
          return void (t.isOpen && t.activeOption
            ? (t.onOptionSelect(e, t.activeOption), ti(e))
            : t.settings.create && t.createItem() && ti(e));
        case 37:
          return void t.advanceSelection(-1, e);
        case 39:
          return void t.advanceSelection(1, e);
        case 9:
          return void (
            t.settings.selectOnTab &&
            (t.isOpen &&
              t.activeOption &&
              ((t.tab_key = !0),
              t.onOptionSelect(e, t.activeOption),
              ti(e),
              (t.tab_key = !1)),
            t.settings.create && t.createItem() && ti(e))
          );
        case 8:
        case 46:
          return void t.deleteSelection(e);
      }
      t.isInputHidden && !ii(Gn, e) && ti(e);
    }
  }
  onKeyUp(e) {
    var t = this;
    if (t.isLocked) ti(e);
    else {
      var n = t.inputValue();
      t.lastValue !== n &&
        ((t.lastValue = n),
        t.settings.shouldLoad.call(t, n) && t.load(n),
        t.refreshOptions(),
        t.trigger("type", n));
    }
  }
  onFocus(e) {
    var t = this,
      n = t.isFocused;
    if (t.isDisabled) return t.blur(), void ti(e);
    t.ignoreFocus ||
      ((t.isFocused = !0),
      "focus" === t.settings.preload && t.load(""),
      n || t.trigger("focus"),
      t.activeItems.length ||
        (t.showInput(), t.refreshOptions(!!t.settings.openOnFocus)),
      t.refreshState());
  }
  onBlur() {
    var e = this;
    if (e.isFocused) {
      (e.isFocused = !1), (e.ignoreFocus = !1);
      var t = () => {
        e.close(),
          e.setActiveItem(),
          e.setCaret(e.items.length),
          e.trigger("blur");
      };
      e.settings.create && e.settings.createOnBlur
        ? e.createItem(null, !1, t)
        : t();
    }
  }
  onOptionSelect(e, t) {
    var n,
      i = this;
    t &&
      ((t.parentElement && t.parentElement.matches("[data-disabled]")) ||
        (t.classList.contains("create")
          ? i.createItem(null, !0, () => {
              i.settings.closeAfterSelect && i.close();
            })
          : void 0 !== (n = t.dataset.value) &&
            ((i.lastQuery = null),
            i.addItem(n),
            i.settings.closeAfterSelect && i.close(),
            !i.settings.hideSelected &&
              e.type &&
              /click/.test(e.type) &&
              i.setActiveOption(t))));
  }
  onItemSelect(e, t) {
    var n = this;
    return (
      !n.isLocked &&
      "multi" === n.settings.mode &&
      (ti(e), n.setActiveItem(t, e), !0)
    );
  }
  canLoad(e) {
    return !!this.settings.load && !this.loadedSearches.hasOwnProperty(e);
  }
  load(e) {
    const t = this;
    if (!t.canLoad(e)) return;
    Rn(t.wrapper, t.settings.loadingClass), t.loading++;
    const n = t.loadCallback.bind(t);
    t.settings.load.call(t, e, n);
  }
  loadCallback(e, t) {
    const n = this;
    (n.loading = Math.max(n.loading - 1, 0)),
      (n.lastQuery = null),
      n.clearActiveOption(),
      n.setupOptions(e, t),
      n.refreshOptions(n.isFocused && !n.isInputHidden),
      n.loading || qn(n.wrapper, n.settings.loadingClass),
      n.trigger("load", e, t);
  }
  setTextboxValue(e = "") {
    var t = this.control_input;
    t.value !== e && ((t.value = e), Dn(t, "update"), (this.lastValue = e));
  }
  getValue() {
    return this.is_select_tag && this.input.hasAttribute("multiple")
      ? this.items
      : this.items.join(this.settings.delimiter);
  }
  setValue(e, t) {
    ei(this, t ? [] : ["change"], () => {
      this.clear(t), this.addItems(e, t);
    });
  }
  setMaxItems(e) {
    0 === e && (e = null), (this.settings.maxItems = e), this.refreshState();
  }
  setActiveItem(e, t) {
    var n,
      i,
      s,
      o,
      r,
      a,
      l = this;
    if ("single" !== l.settings.mode) {
      if (!e) return l.clearActiveItems(), void (l.isFocused && l.showInput());
      if (
        "click" === (n = t && t.type.toLowerCase()) &&
        ii("shiftKey", t) &&
        l.activeItems.length
      ) {
        for (
          a = l.getLastActive(),
            (s = Array.prototype.indexOf.call(l.control.children, a)) >
              (o = Array.prototype.indexOf.call(l.control.children, e)) &&
              ((r = s), (s = o), (o = r)),
            i = s;
          i <= o;
          i++
        )
          (e = l.control.children[i]),
            -1 === l.activeItems.indexOf(e) && l.setActiveItemClass(e);
        ti(t);
      } else
        ("click" === n && ii(Gn, t)) || ("keydown" === n && ii("shiftKey", t))
          ? e.classList.contains("active")
            ? l.removeActiveItem(e)
            : l.setActiveItemClass(e)
          : (l.clearActiveItems(), l.setActiveItemClass(e));
      l.hideInput(), l.isFocused || l.focus();
    }
  }
  setActiveItemClass(e) {
    const t = this,
      n = t.control.querySelector(".last-active");
    n && qn(n, "last-active"),
      Rn(e, "active last-active"),
      t.trigger("item_select", e),
      -1 == t.activeItems.indexOf(e) && t.activeItems.push(e);
  }
  removeActiveItem(e) {
    var t = this.activeItems.indexOf(e);
    this.activeItems.splice(t, 1), qn(e, "active");
  }
  clearActiveItems() {
    qn(this.activeItems, "active"), (this.activeItems = []);
  }
  setActiveOption(e) {
    e !== this.activeOption &&
      (this.clearActiveOption(),
      e &&
        ((this.activeOption = e),
        Un(this.control_input, {
          "aria-activedescendant": e.getAttribute("id"),
        }),
        Un(e, { "aria-selected": "true" }),
        Rn(e, "active"),
        this.scrollToOption(e)));
  }
  scrollToOption(e, t) {
    if (!e) return;
    const n = this.dropdown_content,
      i = n.clientHeight,
      s = n.scrollTop || 0,
      o = e.offsetHeight,
      r = e.getBoundingClientRect().top - n.getBoundingClientRect().top + s;
    r + o > i + s ? this.scroll(r - i + o, t) : r < s && this.scroll(r, t);
  }
  scroll(e, t) {
    const n = this.dropdown_content;
    t && (n.style.scrollBehavior = t),
      (n.scrollTop = e),
      (n.style.scrollBehavior = "");
  }
  clearActiveOption() {
    this.activeOption &&
      (qn(this.activeOption, "active"),
      Un(this.activeOption, { "aria-selected": null })),
      (this.activeOption = null),
      Un(this.control_input, { "aria-activedescendant": null });
  }
  selectAll() {
    "single" !== this.settings.mode &&
      ((this.activeItems = this.controlChildren()),
      this.activeItems.length &&
        (Rn(this.activeItems, "active"), this.hideInput(), this.close()),
      this.focus());
  }
  inputState() {
    var e = this;
    e.settings.controlInput ||
      (e.activeItems.length > 0 ||
      (!e.isFocused && this.settings.hidePlaceholder && e.items.length > 0)
        ? (e.setTextboxValue(),
          (e.isInputHidden = !0),
          Rn(e.wrapper, "input-hidden"))
        : ((e.isInputHidden = !1), qn(e.wrapper, "input-hidden")));
  }
  hideInput() {
    this.inputState();
  }
  showInput() {
    this.inputState();
  }
  inputValue() {
    return this.control_input.value.trim();
  }
  focus() {
    var e = this;
    e.isDisabled ||
      ((e.ignoreFocus = !0),
      e.control_input.focus(),
      setTimeout(() => {
        (e.ignoreFocus = !1), e.onFocus();
      }, 0));
  }
  blur() {
    this.control_input.blur(), this.onBlur();
  }
  getScoreFunction(e) {
    return this.sifter.getScoreFunction(e, this.getSearchOptions());
  }
  getSearchOptions() {
    var e = this.settings,
      t = e.sortField;
    return (
      "string" == typeof e.sortField && (t = [{ field: e.sortField }]),
      {
        fields: e.searchField,
        conjunction: e.searchConjunction,
        sort: t,
        nesting: e.nesting,
      }
    );
  }
  search(e) {
    var t,
      n,
      i,
      s = this,
      o = this.getSearchOptions();
    if (
      s.settings.score &&
      "function" != typeof (i = s.settings.score.call(s, e))
    )
      throw new Error(
        'Tom Select "score" setting must be a function that returns a function'
      );
    if (
      (e !== s.lastQuery
        ? ((s.lastQuery = e),
          (n = s.sifter.search(e, Object.assign(o, { score: i }))),
          (s.currentResults = n))
        : (n = Object.assign({}, s.currentResults)),
      s.settings.hideSelected)
    )
      for (t = n.items.length - 1; t >= 0; t--) {
        let e = Xn(n.items[t].id);
        e && -1 !== s.items.indexOf(e) && n.items.splice(t, 1);
      }
    return n;
  }
  refreshOptions(e = !0) {
    var t, n, i, s, o, r, a, l, c, d, u;
    const h = {},
      p = [];
    var m,
      g = this,
      f = g.inputValue(),
      v = g.search(f),
      y = g.activeOption,
      b = g.settings.shouldOpen || !1,
      w = g.dropdown_content;
    for (
      y && ((c = y.dataset.value), (d = y.closest("[data-group]"))),
        s = v.items.length,
        "number" == typeof g.settings.maxOptions &&
          (s = Math.min(s, g.settings.maxOptions)),
        s > 0 && (b = !0),
        t = 0;
      t < s;
      t++
    ) {
      let e = g.options[v.items[t].id],
        s = Qn(e[g.settings.valueField]),
        a = g.getOption(s);
      for (
        a || (a = g._render("option", e)),
          g.settings.hideSelected ||
            a.classList.toggle("selected", g.items.includes(s)),
          o = e[g.settings.optgroupField] || "",
          n = 0,
          i = (r = Array.isArray(o) ? o : [o]) && r.length;
        n < i;
        n++
      )
        (o = r[n]),
          g.optgroups.hasOwnProperty(o) || (o = ""),
          h.hasOwnProperty(o) ||
            ((h[o] = document.createDocumentFragment()), p.push(o)),
          n > 0 &&
            ((a = a.cloneNode(!0)),
            Un(a, { id: e.$id + "-clone-" + n, "aria-selected": null }),
            a.classList.add("ts-cloned"),
            qn(a, "active")),
          c == s && d && d.dataset.group === o && (y = a),
          h[o].appendChild(a);
    }
    for (o of (this.settings.lockOptgroupOrder &&
      p.sort(
        (e, t) =>
          ((g.optgroups[e] && g.optgroups[e].$order) || 0) -
          ((g.optgroups[t] && g.optgroups[t].$order) || 0)
      ),
    (a = document.createDocumentFragment()),
    p))
      if (g.optgroups.hasOwnProperty(o) && h[o].children.length) {
        let e = document.createDocumentFragment(),
          t = g.render("optgroup_header", g.optgroups[o]);
        t && e.append(t), e.append(h[o]);
        let n = g.render("optgroup", { group: g.optgroups[o], options: e });
        a.append(n);
      } else a.append(h[o]);
    if (
      ((w.innerHTML = ""),
      w.append(a),
      g.settings.highlight &&
        ((m = w.querySelectorAll("span.highlight")),
        Array.prototype.forEach.call(m, function (e) {
          var t = e.parentNode;
          t.replaceChild(e.firstChild, e), t.normalize();
        }),
        v.query.length && v.tokens.length))
    )
      for (const x of v.tokens) Yn(w, x.regex);
    var k = (e) => {
      let t = g.render(e, { input: f });
      return t && ((b = !0), w.insertBefore(t, w.firstChild)), t;
    };
    if (
      (g.settings.shouldLoad.call(g, f)
        ? g.loading
          ? k("loading")
          : 0 === v.items.length && k("no_results")
        : k("not_loading"),
      (l = g.canCreate(f)) && (u = k("option_create")),
      (g.hasOptions = v.items.length > 0 || l),
      b)
    ) {
      if (v.items.length > 0) {
        if (
          (!w.contains(y) &&
            "single" === g.settings.mode &&
            g.items.length &&
            (y = g.getOption(g.items[0])),
          !w.contains(y))
        ) {
          let e = 0;
          u && !g.settings.addPrecedence && (e = 1), (y = g.selectable()[e]);
        }
      } else y = u;
      e && !g.isOpen && (g.open(), g.scrollToOption(y, "auto")),
        g.setActiveOption(y);
    } else g.clearActiveOption(), e && g.isOpen && g.close(!1);
  }
  selectable() {
    return this.dropdown_content.querySelectorAll("[data-selectable]");
  }
  addOption(e) {
    var t,
      n = this;
    if (Array.isArray(e)) for (const i of e) n.addOption(i);
    else
      (t = n.registerOption(e)) &&
        ((n.userOptions[t] = !0),
        (n.lastQuery = null),
        n.trigger("option_add", t, e));
  }
  registerOption(e) {
    var t = Xn(e[this.settings.valueField]);
    return (
      null !== t &&
      !this.options.hasOwnProperty(t) &&
      ((e.$order = e.$order || ++this.order),
      (e.$id = this.inputId + "-opt-" + e.$order),
      (this.options[t] = e),
      t)
    );
  }
  registerOptionGroup(e) {
    var t = Xn(e[this.settings.optgroupValueField]);
    return (
      null !== t &&
      ((e.$order = e.$order || ++this.order), (this.optgroups[t] = e), t)
    );
  }
  addOptionGroup(e, t) {
    var n;
    (t[this.settings.optgroupValueField] = e),
      (n = this.registerOptionGroup(t)) && this.trigger("optgroup_add", n, t);
  }
  removeOptionGroup(e) {
    this.optgroups.hasOwnProperty(e) &&
      (delete this.optgroups[e],
      this.clearCache(),
      this.trigger("optgroup_remove", e));
  }
  clearOptionGroups() {
    (this.optgroups = {}), this.clearCache(), this.trigger("optgroup_clear");
  }
  updateOption(e, t) {
    const n = this;
    var i, s;
    const o = Xn(e);
    if (null === o) return;
    const r = Xn(t[n.settings.valueField]),
      a = n.getOption(o),
      l = n.getItem(o);
    if (n.options.hasOwnProperty(o)) {
      if ("string" != typeof r)
        throw new Error("Value must be set in option data");
      if (
        ((t.$order = t.$order || n.options[o].$order),
        delete n.options[o],
        n.uncacheValue(r),
        n.uncacheValue(o, !1),
        (n.options[r] = t),
        a)
      ) {
        if (n.dropdown_content.contains(a)) {
          const e = n._render("option", t);
          Kn(a, e), n.activeOption === a && n.setActiveOption(e);
        }
        a.remove();
      }
      l &&
        (-1 !== (s = n.items.indexOf(o)) && n.items.splice(s, 1, r),
        (i = n._render("item", t)),
        l.classList.contains("active") && Rn(i, "active"),
        Kn(l, i)),
        (n.lastQuery = null);
    }
  }
  removeOption(e, t) {
    const n = this;
    (e = Qn(e)),
      n.uncacheValue(e),
      delete n.userOptions[e],
      delete n.options[e],
      (n.lastQuery = null),
      n.trigger("option_remove", e),
      n.removeItem(e, t);
  }
  clearOptions() {
    (this.loadedSearches = {}), (this.userOptions = {}), this.clearCache();
    var e = {};
    for (let t in this.options)
      this.options.hasOwnProperty(t) &&
        this.items.indexOf(t) >= 0 &&
        (e[t] = this.options[t]);
    (this.options = this.sifter.items = e),
      (this.lastQuery = null),
      this.trigger("option_clear");
  }
  uncacheValue(e, t = !0) {
    const n = this,
      i = n.renderCache.item,
      s = n.renderCache.option;
    if ((i && delete i[e], s && delete s[e], t)) {
      const t = n.getOption(e);
      t && t.remove();
    }
  }
  getOption(e) {
    var t = Xn(e);
    return this.rendered("option", t);
  }
  getAdjacent(e, t, n = "option") {
    var i;
    if (!e) return null;
    i =
      "item" == n
        ? this.controlChildren()
        : this.dropdown_content.querySelectorAll("[data-selectable]");
    for (let s = 0; s < i.length; s++)
      if (i[s] == e) return t > 0 ? i[s + 1] : i[s - 1];
    return null;
  }
  getItem(e) {
    if ("object" == typeof e) return e;
    var t = Xn(e);
    return t ? this.control.querySelector(`[data-value="${oi(t)}"]`) : null;
  }
  addItems(e, t) {
    var n = this,
      i = Array.isArray(e) ? e : [e];
    for (
      let s = 0, o = (i = i.filter((e) => -1 === n.items.indexOf(e))).length;
      s < o;
      s++
    )
      (n.isPending = s < o - 1), n.addItem(i[s], t);
  }
  addItem(e, t) {
    ei(this, t ? [] : ["change"], () => {
      var n, i;
      const s = this,
        o = s.settings.mode,
        r = Xn(e);
      if (
        (!r ||
          -1 === s.items.indexOf(r) ||
          ("single" === o && s.close(),
          "single" !== o && s.settings.duplicates)) &&
        null !== r &&
        s.options.hasOwnProperty(r) &&
        ("single" === o && s.clear(t), "multi" !== o || !s.isFull())
      ) {
        if (
          ((n = s._render("item", s.options[r])),
          s.control.contains(n) && (n = n.cloneNode(!0)),
          (i = s.isFull()),
          s.items.splice(s.caretPos, 0, r),
          s.insertAtCaret(n),
          s.isSetup)
        ) {
          let e = s.selectable();
          if (!s.isPending && s.settings.hideSelected) {
            let e = s.getOption(r),
              t = s.getAdjacent(e, 1);
            t && s.setActiveOption(t);
          }
          s.isPending || s.refreshOptions(s.isFocused && "single" !== o),
            !e.length || s.isFull()
              ? s.close()
              : s.isPending || s.positionDropdown(),
            s.trigger("item_add", r, n),
            s.isPending || s.updateOriginalInput({ silent: t });
        }
        (!s.isPending || (!i && s.isFull())) && s.refreshState();
      }
    });
  }
  removeItem(e = null, t) {
    const n = this;
    if (!(e = n.getItem(e))) return;
    var i, s;
    const o = e.dataset.value;
    (i = Bn(e)),
      e.remove(),
      e.classList.contains("active") &&
        ((s = n.activeItems.indexOf(e)),
        n.activeItems.splice(s, 1),
        qn(e, "active")),
      n.items.splice(i, 1),
      (n.lastQuery = null),
      !n.settings.persist &&
        n.userOptions.hasOwnProperty(o) &&
        n.removeOption(o, t),
      i < n.caretPos && n.setCaret(n.caretPos - 1),
      n.updateOriginalInput({ silent: t }),
      n.refreshState(),
      n.positionDropdown(),
      n.trigger("item_remove", o, e);
  }
  createItem(e = null, t = !0, n = () => {}) {
    var i,
      s = this,
      o = s.caretPos;
    if (((e = e || s.inputValue()), !s.canCreate(e))) return n(), !1;
    s.lock();
    var r = !1,
      a = (e) => {
        if ((s.unlock(), !e || "object" != typeof e)) return n();
        var i = Xn(e[s.settings.valueField]);
        if ("string" != typeof i) return n();
        s.setTextboxValue(),
          s.addOption(e),
          s.setCaret(o),
          s.addItem(i),
          s.refreshOptions(t && "single" !== s.settings.mode),
          n(e),
          (r = !0);
      };
    return (
      (i =
        "function" == typeof s.settings.create
          ? s.settings.create.call(this, e, a)
          : { [s.settings.labelField]: e, [s.settings.valueField]: e }),
      r || a(i),
      !0
    );
  }
  refreshItems() {
    var e = this;
    (e.lastQuery = null),
      e.isSetup && e.addItems(e.items),
      e.updateOriginalInput(),
      e.refreshState();
  }
  refreshState() {
    var e = this;
    e.refreshValidityState();
    var t = e.isFull(),
      n = e.isLocked;
    e.wrapper.classList.toggle("rtl", e.rtl);
    var i,
      s = e.control.classList;
    s.toggle("focus", e.isFocused),
      s.toggle("disabled", e.isDisabled),
      s.toggle("required", e.isRequired),
      s.toggle("invalid", e.isInvalid),
      s.toggle("locked", n),
      s.toggle("full", t),
      s.toggle("not-full", !t),
      s.toggle("input-active", e.isFocused && !e.isInputHidden),
      s.toggle("dropdown-active", e.isOpen),
      s.toggle("has-options", ((i = e.options), 0 === Object.keys(i).length)),
      s.toggle("has-items", e.items.length > 0);
  }
  refreshValidityState() {
    var e = this;
    if (e.input.checkValidity) {
      this.isRequired && (e.input.required = !0);
      var t = !e.input.checkValidity();
      (e.isInvalid = t),
        (e.control_input.required = t),
        this.isRequired && (e.input.required = !t);
    }
  }
  isFull() {
    return (
      null !== this.settings.maxItems &&
      this.items.length >= this.settings.maxItems
    );
  }
  updateOriginalInput(e = {}) {
    const t = this;
    var n, i, s, o;
    if (t.is_select_tag) {
      let e = function (e, t, n) {
        return (
          e || (e = Pn('<option value="' + Zn(t) + '">' + Zn(n) + "</option>")),
          (e.selected = !0),
          Un(e, { selected: "true" }),
          r.append(e),
          e
        );
      };
      const r = document.createDocumentFragment();
      if (
        (t.input.querySelectorAll("option[selected]").forEach((e) => {
          Un(e, { selected: null }), (e.selected = !1);
        }),
        0 != t.items.length || "single" != t.settings.mode || t.isRequired)
      )
        for (n = 0; n < t.items.length; n++)
          if (
            ((i = t.items[n]),
            (o = (s = t.options[i])[t.settings.labelField] || ""),
            r.contains(s.$option))
          ) {
            e(t.input.querySelector(`option[value="${oi(i)}"]`), i, o);
          } else s.$option = e(s.$option, i, o);
      else e(t.input.querySelector('option[value=""]'), "", "");
      t.input.prepend(r);
    } else t.input.value = t.getValue();
    t.isSetup && (e.silent || t.trigger("change", t.getValue()));
  }
  open() {
    var e = this;
    e.isLocked ||
      e.isOpen ||
      ("multi" === e.settings.mode && e.isFull()) ||
      ((e.isOpen = !0),
      Un(e.control_input, { "aria-expanded": "true" }),
      e.refreshState(),
      Hn(e.dropdown, { visibility: "hidden", display: "block" }),
      e.positionDropdown(),
      Hn(e.dropdown, { visibility: "visible", display: "block" }),
      e.focus(),
      e.trigger("dropdown_open", e.dropdown));
  }
  close(e = !0) {
    var t = this,
      n = t.isOpen;
    e &&
      (t.setTextboxValue(),
      "single" === t.settings.mode &&
        t.items.length &&
        (t.hideInput(), t.tab_key || t.blur())),
      (t.isOpen = !1),
      Un(t.control_input, { "aria-expanded": "false" }),
      Hn(t.dropdown, { display: "none" }),
      t.settings.hideSelected && t.clearActiveOption(),
      t.refreshState(),
      n && t.trigger("dropdown_close", t.dropdown);
  }
  positionDropdown() {
    if ("body" === this.settings.dropdownParent) {
      var e = this.control,
        t = e.getBoundingClientRect(),
        n = e.offsetHeight + t.top + window.scrollY,
        i = t.left + window.scrollX;
      Hn(this.dropdown, {
        width: t.width + "px",
        top: n + "px",
        left: i + "px",
      });
    }
  }
  clear(e) {
    var t = this;
    if (t.items.length) {
      var n = t.controlChildren();
      for (const e of n) e.remove();
      (t.items = []),
        (t.lastQuery = null),
        t.setCaret(0),
        t.clearActiveItems(),
        t.updateOriginalInput({ silent: e }),
        t.refreshState(),
        t.showInput(),
        t.trigger("clear");
    }
  }
  insertAtCaret(e) {
    var t = this,
      n = Math.min(t.caretPos, t.items.length),
      i = t.control;
    0 === n
      ? i.insertBefore(e, i.firstChild)
      : i.insertBefore(e, i.children[n]),
      t.setCaret(n + 1);
  }
  deleteSelection(e) {
    var t,
      n,
      i,
      s,
      o,
      r = this;
    (t = e && 8 === e.keyCode ? -1 : 1),
      (n = {
        start: (o = r.control_input).selectionStart || 0,
        length: (o.selectionEnd || 0) - (o.selectionStart || 0),
      });
    const a = [];
    if (r.activeItems.length) {
      (s = jn(r.activeItems, t)), (i = Bn(s)), t > 0 && i++;
      for (const e of r.activeItems) a.push(e);
    } else if (
      (r.isFocused || "single" === r.settings.mode) &&
      r.items.length
    ) {
      const e = r.controlChildren();
      t < 0 && 0 === n.start && 0 === n.length
        ? a.push(e[r.caretPos - 1])
        : t > 0 && n.start === r.inputValue().length && a.push(e[r.caretPos]);
    }
    const l = a.map((e) => e.dataset.value);
    if (
      !l.length ||
      ("function" == typeof r.settings.onDelete &&
        !1 === r.settings.onDelete.call(r, l, e))
    )
      return !1;
    for (ti(e, !0), void 0 !== i && r.setCaret(i); a.length; )
      r.removeItem(a.pop());
    return r.showInput(), r.positionDropdown(), r.refreshOptions(!1), !0;
  }
  advanceSelection(e, t) {
    var n,
      i,
      s,
      o = this;
    o.rtl && (e *= -1),
      o.inputValue().length ||
        (ii(Gn, t) || ii("shiftKey", t)
          ? (s = (i = o.getLastActive(e))
              ? i.classList.contains("active")
                ? o.getAdjacent(i, e, "item")
                : i
              : e > 0
              ? o.control_input.nextElementSibling
              : o.control_input.previousElementSibling) &&
            (s.classList.contains("active") && o.removeActiveItem(i),
            o.setActiveItemClass(s))
          : o.isFocused && !o.activeItems.length
          ? o.setCaret(o.caretPos + e)
          : (i = o.getLastActive(e)) &&
            ((n = Bn(i)), o.setCaret(e > 0 ? n + 1 : n), o.setActiveItem()));
  }
  getLastActive(e) {
    let t = this.control.querySelector(".last-active");
    if (t) return t;
    var n = this.control.querySelectorAll(".active");
    return n ? jn(n, e) : void 0;
  }
  setCaret(e) {
    var t = this;
    "single" === t.settings.mode || t.settings.controlInput
      ? (e = t.items.length)
      : (e = Math.max(0, Math.min(t.items.length, e))) == t.caretPos ||
        t.isPending ||
        t.controlChildren().forEach((n, i) => {
          i < e
            ? t.control_input.insertAdjacentElement("beforebegin", n)
            : t.control.appendChild(n);
        }),
      (t.caretPos = e);
  }
  controlChildren() {
    return Array.from(
      this.control.getElementsByClassName(this.settings.itemClass)
    );
  }
  lock() {
    this.close(), (this.isLocked = !0), this.refreshState();
  }
  unlock() {
    (this.isLocked = !1), this.refreshState();
  }
  disable() {
    var e = this;
    (e.input.disabled = !0),
      (e.control_input.disabled = !0),
      (e.control_input.tabIndex = -1),
      (e.isDisabled = !0),
      e.lock();
  }
  enable() {
    var e = this;
    (e.input.disabled = !1),
      (e.control_input.disabled = !1),
      (e.control_input.tabIndex = e.tabIndex),
      (e.isDisabled = !1),
      e.unlock();
  }
  destroy() {
    var e = this,
      t = e.revertSettings;
    e.trigger("destroy"),
      e.off(),
      e.wrapper.remove(),
      e.dropdown.remove(),
      (e.input.innerHTML = t.innerHTML),
      (e.input.tabIndex = t.tabIndex),
      qn(e.input, "tomselected"),
      Un(e.input, { hidden: null }),
      (e.input.required = this.isRequired),
      e._destroy(),
      delete e.input.tomselect;
  }
  render(e, t) {
    return "function" != typeof this.settings.render[e]
      ? null
      : this._render(e, t);
  }
  _render(e, t) {
    var n, i, s;
    const o = this;
    return ("option" === e || "item" === e) &&
      ((n = Qn(t[o.settings.valueField])), (s = o.rendered(e, n)))
      ? s
      : (s = o.settings.render[e].call(this, t, Zn))
      ? ((s = Pn(s)),
        "option" === e || "option_create" === e
          ? t[o.settings.disabledField]
            ? Un(s, { "aria-disabled": "true" })
            : Un(s, { "data-selectable": "" })
          : "optgroup" === e &&
            ((i = t.group[o.settings.optgroupValueField]),
            Un(s, { "data-group": i }),
            t.group[o.settings.disabledField] &&
              Un(s, { "data-disabled": "" })),
        ("option" !== e && "item" !== e) ||
          (Un(s, { "data-value": n }),
          "item" === e
            ? Rn(s, o.settings.itemClass)
            : (Rn(s, o.settings.optionClass),
              Un(s, { role: "option", id: t.$id })),
          (o.renderCache[e][n] = s)),
        s)
      : s;
  }
  rendered(e, t) {
    return null !== t && this.renderCache[e].hasOwnProperty(t)
      ? this.renderCache[e][t]
      : null;
  }
  clearCache(e) {
    var t = this;
    for (let n in t.options) {
      const e = t.getOption(n);
      e && e.remove();
    }
    void 0 === e
      ? (t.renderCache = { item: {}, option: {} })
      : (t.renderCache[e] = {});
  }
  canCreate(e) {
    return (
      this.settings.create &&
      e.length > 0 &&
      this.settings.createFilter.call(this, e)
    );
  }
  hook(e, t, n) {
    var i = this,
      s = i[t];
    i[t] = function () {
      var t, o;
      return (
        "after" === e && (t = s.apply(i, arguments)),
        (o = n.apply(i, arguments)),
        "instead" === e ? o : ("before" === e && (t = s.apply(i, arguments)), t)
      );
    };
  }
}
li.define("change_listener", function () {
  const e = this,
    t = (t) => t.join(e.settings.delimiter);
  ni(e.input, "change", () => {
    var n = ri(e.input, { delimiter: e.settings.delimiter });
    t(e.items) != t(n.items) &&
      (e.setupOptions(n.options, n.optgroups), e.setValue(n.items));
  });
}),
  li.define("checkbox_options", function () {
    var e = this,
      t = e.onOptionSelect;
    e.settings.hideSelected = !1;
    var n = function (e) {
      setTimeout(() => {
        var t = e.querySelector("input");
        e.classList.contains("selected") ? (t.checked = !0) : (t.checked = !1);
      }, 1);
    };
    e.hook("after", "setupTemplates", () => {
      var t = e.settings.render.option;
      e.settings.render.option = function (n) {
        var i = Pn(t.apply(e, arguments)),
          s = document.createElement("input");
        s.addEventListener("click", function (e) {
          ti(e);
        }),
          (s.type = "checkbox");
        const o = Xn(n[e.settings.valueField]);
        return (
          o && e.items.indexOf(o) > -1 && (s.checked = !0), i.prepend(s), i
        );
      };
    }),
      e.on("item_remove", (t) => {
        var i = e.getOption(t);
        i && (i.classList.remove("selected"), n(i));
      }),
      e.hook("instead", "onOptionSelect", function (i, s) {
        if (s.classList.contains("selected"))
          return (
            s.classList.remove("selected"),
            e.removeItem(s.dataset.value),
            e.refreshOptions(),
            void ti(i, !0)
          );
        t.apply(e, arguments), n(s);
      });
  }),
  li.define("clear_button", function (e) {
    var t = this;
    (e = Object.assign(
      {
        className: "clear-button",
        title: "Clear All",
        html: (e) =>
          `<div class="${e.className}" title="${e.title}">&times;</div>`,
      },
      e
    )),
      t.hook("after", "setup", () => {
        var n = Pn(e.html(e));
        n.addEventListener("click", (e) => {
          t.clear(), e.preventDefault(), e.stopPropagation();
        }),
          t.control.appendChild(n);
      });
  }),
  li.define("drag_drop", function () {
    var e = this;
    if (!$.fn.sortable)
      throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
    if ("multi" === e.settings.mode) {
      var t = e.lock,
        n = e.unlock;
      e.hook("instead", "lock", function () {
        var n = $(e.control).data("sortable");
        return n && n.disable(), t.apply(e, arguments);
      }),
        e.hook("instead", "unlock", function () {
          var t = $(e.control).data("sortable");
          return t && t.enable(), n.apply(e, arguments);
        }),
        e.hook("after", "setup", () => {
          var t = $(e.control).sortable({
            items: "[data-value]",
            forcePlaceholderSize: !0,
            disabled: e.isLocked,
            start: (e, n) => {
              n.placeholder.css("width", n.helper.css("width")),
                t.css({ overflow: "visible" });
            },
            stop: () => {
              t.css({ overflow: "hidden" });
              var n = [];
              t.children("[data-value]").each(function () {
                this.dataset.value && n.push(this.dataset.value);
              }),
                e.setValue(n);
            },
          });
        });
    }
  }),
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
  li.define("dropdown_input", function () {
    var e = this,
      t =
        e.settings.controlInput ||
        '<input type="text" autocomplete="off" class="dropdown-input" />';
    (t = Pn(t)),
      e.settings.placeholder && Un(t, { placeholder: e.settings.placeholder }),
      (e.settings.controlInput = t),
      (e.settings.shouldOpen = !0),
      e.hook("after", "setup", () => {
        Un(e.wrapper, { tabindex: e.input.disabled ? "-1" : "" + e.tabIndex }),
          ni(e.wrapper, "keypress", (t) => {
            if (!e.control.contains(t.target) && !e.dropdown.contains(t.target))
              switch (t.keyCode) {
                case 13:
                  return void e.onClick();
              }
          });
        let n = Pn('<div class="dropdown-input-wrap">');
        n.appendChild(t), e.dropdown.insertBefore(n, e.dropdown.firstChild);
      });
  }),
  li.define("input_autogrow", function () {
    var e = this;
    e.hook("after", "setup", () => {
      var t = document.createElement("span"),
        n = e.control_input;
      (t.style.cssText =
        "position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; "),
        e.wrapper.appendChild(t);
      for (const e of [
        "letterSpacing",
        "fontSize",
        "fontFamily",
        "fontWeight",
        "textTransform",
      ])
        t.style[e] = n.style[e];
      var i = () => {
        e.items.length > 0
          ? ((t.textContent = n.value), (n.style.width = t.clientWidth + "px"))
          : (n.style.width = "");
      };
      i(),
        e.on("update item_add item_remove", i),
        ni(n, "input", i),
        ni(n, "keyup", i),
        ni(n, "blur", i),
        ni(n, "update", i);
    });
  }),
  li.define("no_backspace_delete", function () {
    var e = this,
      t = e.deleteSelection;
    this.hook("instead", "deleteSelection", function () {
      return !!e.activeItems.length && t.apply(e, arguments);
    });
  }),
  li.define("no_active_items", function () {
    this.hook("instead", "setActiveItem", () => {}),
      this.hook("instead", "selectAll", () => {});
  }),
  li.define("optgroup_columns", function () {
    var e = this,
      t = e.onKeyDown;
    e.hook("instead", "onKeyDown", function (n) {
      var i, s, o, r;
      if (!e.isOpen || (37 !== n.keyCode && 39 !== n.keyCode))
        return t.apply(e, arguments);
      (r = zn(e.activeOption, "[data-group]")),
        (i = Bn(e.activeOption, "[data-selectable]")),
        (r = 37 === n.keyCode ? r.previousSibling : r.nextSibling) &&
          (s = (o = r.querySelectorAll("[data-selectable]"))[
            Math.min(o.length - 1, i)
          ]) &&
          e.setActiveOption(s);
    });
  }),
  li.define("remove_button", function (e) {
    e = Object.assign(
      { label: "&times;", title: "Remove", className: "remove", append: !0 },
      e
    );
    var t = this;
    if (e.append) {
      var n =
        '<a href="javascript:void(0)" class="' +
        e.className +
        '" tabindex="-1" title="' +
        Zn(e.title) +
        '">' +
        e.label +
        "</a>";
      t.hook("after", "setupTemplates", () => {
        var e = t.settings.render.item;
        t.settings.render.item = function () {
          var i = Pn(e.apply(t, arguments)),
            s = Pn(n);
          return (
            i.appendChild(s),
            ni(s, "mousedown", (e) => {
              ti(e, !0);
            }),
            ni(s, "click", (e) => {
              if ((ti(e, !0), !t.isLocked)) {
                var n = i.dataset.value;
                t.removeItem(n), t.refreshOptions(!1);
              }
            }),
            i
          );
        };
      });
    }
  }),
  li.define("restore_on_backspace", function (e) {
    var t = this;
    (e.text =
      e.text ||
      function (e) {
        return e[t.settings.labelField];
      }),
      t.on("item_remove", function (n) {
        if ("" === t.control_input.value.trim()) {
          var i = t.options[n];
          i && t.setTextboxValue(e.text.call(t, i));
        }
      });
  }),
  li.define("virtual_scroll", function () {
    const e = this,
      t = e.canLoad,
      n = e.clearActiveOption,
      i = e.loadCallback;
    var s,
      o = {},
      r = !1;
    if (!e.settings.firstUrl)
      throw "virtual_scroll plugin requires a firstUrl() method";
    function a(t) {
      return (
        !(
          "number" == typeof e.settings.maxOptions &&
          s.children.length >= e.settings.maxOptions
        ) && !(!(t in o) || !o[t])
      );
    }
    (e.settings.sortField = [{ field: "$order" }, { field: "$score" }]),
      (e.setNextUrl = function (e, t) {
        o[e] = t;
      }),
      (e.getUrl = function (t) {
        if (t in o) {
          const e = o[t];
          return (o[t] = !1), e;
        }
        return (o = {}), e.settings.firstUrl(t);
      }),
      e.hook("instead", "clearActiveOption", () => {
        if (!r) return n.call(e);
      }),
      e.hook("instead", "canLoad", (n) => (n in o ? a(n) : t.call(e, n))),
      e.hook("instead", "loadCallback", (t, n, s) => {
        r || e.clearOptions(), i.call(e, t, n, s), (r = !1);
      }),
      e.hook("after", "refreshOptions", () => {
        const t = e.lastValue;
        var n;
        a(t)
          ? (n = e.render("loading_more", { query: t })) &&
            n.setAttribute("data-selectable", "")
          : t in o &&
            !s.querySelector(".no-results") &&
            (n = e.render("no_more_results", { query: t })),
          n && (Rn(n, e.settings.optionClass), s.append(n));
      }),
      e.hook("after", "setup", () => {
        (s = e.dropdown_content),
          (e.settings.render = Object.assign(
            {},
            {
              loading_more: function () {
                return '<div class="loading-more-results">Loading more results ... </div>';
              },
              no_more_results: function () {
                return '<div class="no-more-results">No more results</div>';
              },
            },
            e.settings.render
          )),
          s.addEventListener("scroll", function () {
            s.clientHeight / (s.scrollHeight - s.scrollTop) < 0.95 ||
              (a(e.lastValue) &&
                (r || ((r = !0), e.load.call(e, e.lastValue))));
          });
      });
  });
class ci extends HTMLInputElement {}
class di extends HTMLSelectElement {}
Array.from([ci, di]).forEach(function (e) {
  (e.prototype.connectedCallback = function () {
    if (this.getAttribute("choicesBinded")) return;
    this.setAttribute("choicesBinded", "true");
    const e = {
      hideSelected: !0,
      persist: !1,
      plugins: {},
      closeAfterSelect: !0,
    };
    "SELECT" === this.tagName
      ? ((e.allowEmptyOption = !0),
        (e.plugins.no_backspace_delete = {}),
        (e.plugins.dropdown_input = {}),
        this.getAttribute("multiple") &&
          (e.plugins.remove_button = { title: "Supprimer cet élément" }))
      : (e.plugins.remove_button = { title: "Supprimer cet élément" }),
      this.dataset.remote &&
        ((e.valueField = this.dataset.value),
        (e.labelField = this.dataset.label),
        (e.searchField = this.dataset.label),
        (e.load = async (e, t) => {
          const n = `${this.dataset.remote}?q=${encodeURIComponent(e)}`;
          t(await h(n));
        })),
      this.dataset.create && (e.create = !0),
      (this.widget = new li(this, e)),
      void 0 !== this.dataset.redirect &&
        this.widget.on("change", () =>
          (function (e) {
            const t = new URLSearchParams(window.location.search);
            "" === e.value ? t.delete(e.name) : t.set(e.name, e.value);
            t.has("page") && t.delete("page");
            I(`${location.pathname}?${t}`);
          })(this)
        );
  }),
    (e.prototype.disconnectedCallback = function () {
      this.widget && this.widget.destroy();
    });
});
class ui {
  constructor(e = "", t = {}) {
    (this.value = e),
      (this.options = t),
      (this.element = document.createElement("div")),
      this.element.classList.add("mdeditor__editor");
  }
  async boot() {
    const { default: e } = await T(
      () => import("./CodeMirror.ee8a9f44.js"),
      [
        "/assets/CodeMirror.ee8a9f44.js",
        "/assets/CodeMirror.21972eac.css",
        "/assets/Modal.beb211ea.js",
      ]
    );
    (this.editor = new e(
      this.element,
      a(
        {
          value: this.value,
          mode: "markdown",
          theme: "neo",
          lineWrapping: !0,
          cursorBlinkRate: 0,
          viewportMargin: 1 / 0,
        },
        this.options
      )
    )),
      window.requestAnimationFrame(() => {
        this.editor.refresh(), this.options.autofocus && this.focus();
      }),
      this.editor.on("change", (e) => {
        this.onChange(e.getValue());
      });
  }
  wrapWith(e, t = null) {
    null === t && (t = e);
    const n = this.editor.getSelection();
    if (
      (this.editor
        .getDoc()
        .replaceSelection(e + this.editor.getDoc().getSelection() + t),
      "" === n)
    ) {
      const e = this.editor.getCursor();
      this.editor.setCursor(l(a({}, e), { ch: e.ch - t.length }));
    }
    this.editor.focus();
  }
  replace(e) {
    this.editor.getDoc().replaceSelection(e), this.editor.focus();
  }
  setValue(e) {
    this.editor && e !== this.editor.getValue() && this.editor.setValue(e);
  }
  addShortcut(e, t) {
    this.editor.setOption(
      "extraKeys",
      l(a({}, this.editor.getOption("extraKeys")), { [e]: t })
    );
  }
  onChange() {}
  focus() {
    this.editor.focus(), this.editor.setCursor(this.editor.lineCount(), 0);
  }
}
class hi {
  constructor(e) {
    (this.action = this.action.bind(this)),
      (this.editor = e),
      (this.element = null);
    const t = this.icon();
    t &&
      (!1 !== this.shortcut() &&
        this.editor.addShortcut(this.shortcut(), this.action),
      (this.element = document.createElement("button")),
      this.element.setAttribute("type", "button"),
      this.element.addEventListener("click", (e) => {
        e.preventDefault(), this.action();
      }),
      this.element.appendChild(t));
  }
  icon() {
    return "";
  }
  shortcut() {
    return !1;
  }
  action() {
    console.error("Vous devez définir une action pour ce bouton");
  }
}
class pi extends hi {
  shortcut() {
    return "Ctrl-B";
  }
  icon() {
    return _(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"/></svg>'
    );
  }
  action() {
    this.editor.wrapWith("**");
  }
}
class mi extends hi {
  constructor(e) {
    super(e),
      (this.listening = !1),
      window.webkitSpeechRecognition &&
        ((this.recognition = new window.webkitSpeechRecognition()),
        (this.recognition.lang = "fr-FR"),
        (this.recognition.continuous = !0),
        (this.recognition.interimResults = !1));
  }
  icon() {
    return window.webkitSpeechRecognition
      ? ((this.icon = _(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M96 256V96c0-53.019 42.981-96 96-96s96 42.981 96 96v160c0 53.019-42.981 96-96 96s-96-42.981-96-96zm252-56h-24c-6.627 0-12 5.373-12 12v42.68c0 66.217-53.082 120.938-119.298 121.318C126.213 376.38 72 322.402 72 256v-44c0-6.627-5.373-12-12-12H36c-6.627 0-12 5.373-12 12v44c0 84.488 62.693 154.597 144 166.278V468h-68c-6.627 0-12 5.373-12 12v20c0 6.627 5.373 12 12 12h184c6.627 0 12-5.373 12-12v-20c0-6.627-5.373-12-12-12h-68v-45.722c81.307-11.681 144-81.79 144-166.278v-44c0-6.627-5.373-12-12-12z"/></svg>'
        )),
        this.icon)
      : null;
  }
  action() {
    if (!0 === this.listening)
      return (
        this.recognition.stop(),
        (this.listening = !1),
        void (this.icon.style.fill = null)
      );
    (this.icon.style.fill = "red"),
      this.recognition.start(),
      (this.listening = !0),
      (this.recognition.onresult = (e) => {
        const t = e.results.item(e.resultIndex);
        if (!0 === t.isFinal) {
          const e = t.item(0).transcript,
            n = e.charAt(0).toUpperCase() + e.slice(1);
          this.editor.replace(n);
        }
      });
  }
}
class gi extends hi {
  shortcut() {
    return "Ctrl-L";
  }
  icon() {
    return _(
      '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.859 14.691l-.81.805a1.814 1.814 0 01-2.545 0 1.762 1.762 0 010-2.504l2.98-2.955c.617-.613 1.779-1.515 2.626-.675a.993.993 0 101.397-1.407c-1.438-1.428-3.566-1.164-5.419.675l-2.98 2.956A3.72 3.72 0 002 14.244a3.72 3.72 0 001.108 2.658 3.779 3.779 0 002.669 1.096c.967 0 1.934-.365 2.669-1.096l.811-.805a.988.988 0 00-.695-1.692.995.995 0 00-.703.286zm9.032-11.484c-1.547-1.534-3.709-1.617-5.139-.197l-1.009 1.002a.99.99 0 001.396 1.406l1.01-1.001c.74-.736 1.711-.431 2.346.197.336.335.522.779.522 1.252s-.186.917-.522 1.251l-3.18 3.154c-1.454 1.441-2.136.766-2.427.477a.992.992 0 00-1.615.327.99.99 0 00.219 1.079c.668.662 1.43.99 2.228.99.977 0 2.01-.492 2.993-1.467l3.18-3.153A3.732 3.732 0 0018 5.866a3.726 3.726 0 00-1.109-2.659z"/></svg>'
    );
  }
  action() {
    const e = window.prompt("Entrez le lien");
    this.editor.wrapWith("[", `](${e})`);
  }
}
class fi extends hi {
  constructor(e) {
    super(e), (this.isFullscreen = !1);
  }
  icon() {
    return (
      (this.icon = _(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={style}><path d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"/></svg>'
      )),
      this.icon
    );
  }
  action() {
    (this.isFullscreen = !this.isFullscreen),
      (this.icon.style.fill = this.isFullscreen ? "#8BC34A" : null);
  }
}
class vi {
  constructor(e) {
    (this.element = document.createElement("div")),
      this.element.classList.add("mdeditor__toolbar");
    const t = F("div", { class: "mdeditor__toolbarleft" }),
      n = F("div", { class: "mdeditor__toolbarright" }),
      i = new fi(e);
    this.addButtons(t, [new pi(e), new gi(e), new mi(e)]),
      this.addButtons(n, [i]),
      this.element.appendChild(t),
      this.element.appendChild(n),
      i.element.addEventListener("click", () => {
        this.onFullScreen();
      });
  }
  addButtons(e, t) {
    for (const n of t) null !== n.element && e.appendChild(n.element);
  }
  onFullScreen() {}
}
class yi extends HTMLTextAreaElement {
  constructor() {
    super(),
      (this.toggleFullscreen = this.toggleFullscreen.bind(this)),
      (this.onFormReset = this.onFormReset.bind(this));
  }
  async connectedCallback() {
    const e = new ui(this.value, {
      autofocus: null !== this.getAttribute("autofocus"),
    });
    await e.boot();
    const t = new vi(e);
    (this.container = F("div", { class: "mdeditor" })),
      this.container.appendChild(t.element),
      this.container.appendChild(e.element),
      (t.onFullScreen = this.toggleFullscreen),
      (e.onChange = (e) => {
        (this.value = e),
          this.dispatchEvent(
            new Event("input", { bubbles: !0, cancelable: !0 })
          );
      }),
      (this.syncEditor = () => e.setValue(this.value)),
      this.form && this.form.addEventListener("reset", this.onFormReset),
      this.insertAdjacentElement("beforebegin", this.container),
      (this.style.display = "none"),
      (this.editor = e);
  }
  disconnectedCallback() {
    this.form && this.form.removeEventListener("reset", this.onFormReset),
      this.container && this.container.remove();
  }
  onFormReset() {
    this.editor && this.editor.setValue("");
  }
  toggleFullscreen() {
    this.container.classList.toggle("mdeditor--fullscreen");
  }
  focus() {
    this.editor && this.editor.focus();
  }
  syncEditor() {}
}
class bi extends HTMLElement {
  connectedCallback() {
    this.addEventListener("click", async (e) => {
      if (
        (e.preventDefault(),
        null === this.getAttribute("noconfirm") &&
          !confirm("Voulez vous vraiment effectuer cette action ?"))
      )
        return;
      const t = this.getAttribute("target")
          ? M(this, this.getAttribute("target"))
          : this.parentNode,
        n = document.createElement("loader-overlay");
      (t.style.position = "relative"), t.appendChild(n);
      try {
        await h(this.getAttribute("url"), { method: "DELETE" }),
          n.hide(),
          t.remove();
      } catch (i) {
        n.hide();
        const e = document.createElement("alert-floating");
        (e.innerHTML = i.detail), document.body.appendChild(e);
      }
    });
  }
}
class wi extends HTMLDivElement {
  connectedCallback() {
    const e = document.querySelector(this.dataset.to);
    this.scrollTo(
      0,
      d(e, this) -
        e.getBoundingClientRect().height / 2 -
        this.getBoundingClientRect().height / 2
    ),
      e.classList.add("is-selected");
  }
}
function ki(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
class xi extends HTMLElement {
  constructor() {
    super(),
      (this.root = this.attachShadow({ mode: "open" })),
      (this.width = parseInt(this.getAttribute("width"), 10)),
      (this.height = parseInt(this.getAttribute("height"), 10)),
      (this.style.display = "block");
    const e = Math.floor(350 / 18);
    this.root.innerHTML = this.drawSVG(this.drawLines(e)) + this.buildStyle(e);
  }
  drawSVG(e) {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 678 402">\n  <mask id="previewmask">\n    <path fill="#fff" d="M26 57a4 4 0 014-4h283a4 4 0 014 4v313a4 4 0 01-4 4H30a4 4 0 01-4-4V57z"/>\n  </mask>\n  <mask id="screenmask">\n    <rect x="0" y="2" width="321" height="363" fill="white"/>\n  </mask>\n  <g>\n    <rect width="324" height="382" x="10" y="8" fill="#F7FAFB" rx="4"/>\n    <rect width="323" height="381" x="10.5" y="8.5" stroke="#D5E3EC" rx="3.5"/>\n  </g>\n  <g>\n    <path fill="#fff" d="M26 57a4 4 0 014-4h283a4 4 0 014 4v313a4 4 0 01-4 4H30a4 4 0 01-4-4V57z"/>\n    <path stroke="#D5E3EC"\n          d="M30 53.5h283a3.5 3.5 0 013.5 3.5v313a3.5 3.5 0 01-3.5 3.5H30a3.5 3.5 0 01-3.5-3.5V57a3.5 3.5 0 013.5-3.5z"/>\n  </g>\n  <g>\n    <circle cx="32.5" cy="30.5" r="6.5" fill="#fff"/>\n    <circle cx="32.5" cy="30.5" r="6" stroke="#D5E3EC"/>\n  </g>\n  <g>\n    <circle cx="52.5" cy="30.5" r="6.5" fill="#fff"/>\n    <circle cx="52.5" cy="30.5" r="6" stroke="#D5E3EC"/>\n  </g>\n  <g>\n    <circle cx="72.5" cy="30.5" r="6.5" fill="#fff"/>\n    <circle cx="72.5" cy="30.5" r="6" stroke="#D5E3EC"/>\n  </g>\n  <g mask="url(#previewmask)">\n    <g class="preview">\n      ${this.drawPanels()}\n    </g>\n  </g>\n  <g>\n    <rect width="324" height="382" x="344" y="8" fill="#F7FAFB" rx="4"/>\n    <rect width="323" height="381" x="344.5" y="8.5" stroke="#D5E3EC" rx="3.5"/>\n  </g>\n  <path fill="#E8F0F2" stroke="#D5E3EC"\n        d="M348 8.5h47.5v381H348a3.5 3.5 0 01-3.5-3.5V12a3.5 3.5 0 013.5-3.5z"/>\n  <path fill="#D5E3EC" d="M395 8h1v383h-1z"/>\n  <path fill="#F7FAFB" d="M396 9h72v15h-72z"/>\n  <circle id="Ellipse 19" cx="460.5" cy="16.5" r="1" fill="#E8F0F2" stroke="#D5E3EC"/>\n  <path fill="#E8F0F2" stroke="#D5E3EC" d="M467.5 8.5h72v15h-72z"/>\n  <path fill="#E8F0F2" stroke="#D5E3EC" d="M539.5 8.5h72v15h-72z"/>\n  <circle id="Ellipse 20" cx="532.5" cy="16.5" r="1" fill="#E8F0F2" stroke="#D5E3EC"/>\n  <circle id="Ellipse 21" cx="602.5" cy="16.5" r="1" fill="#E8F0F2" stroke="#D5E3EC"/>\n  <rect width="50" height="4" x="404" y="14" fill="#E8F0F2" rx="2"/>\n  ${e}\n</svg>`;
  }
  drawLines(e) {
    const t = 2 * e;
    let n = 0,
      i = 0,
      s = '<g style="transform: translate(346px, 24px)">';
    for (
      s += '<g mask="url(#screenmask)">', s += '<g class="screen">';
      n < t;

    ) {
      (i += ki(0 === i ? 0 : -1, 3 === i ? 0 : 1)),
        (s += this.drawLine(n, i, 300)),
        n++;
    }
    return (s += "</g>"), (s += "</g>"), (s += "</g>"), s;
  }
  drawPanels() {
    let e = "";
    for (let t = 0; t < 5; t++) {
      const n = 3 * t + 0.5;
      e += `\n      <g style="transform: translateY(${
        97 * t
      }px)">\n        <g stroke="#D5E3EC" class="panel" style="animation-delay: ${n}s">\n          <path fill="#F7FAFB"\n                d="M46 69.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5V73a3.5 3.5 0 013.5-3.5z"/>\n          <circle cx="75" cy="101" r="21.5" fill="#fff" style="animation-delay: ${
        n + 0.5
      }s"/>\n          <rect width="186" height="14" x="104.5" y="79.5" fill="#fff" rx="3.5"  style="animation-delay: ${
        n + 1
      }s"/>\n          <rect width="137" height="14" x="104.5" y="102.5" fill="#fff" rx="3.5"  style="animation-delay: ${
        n + 1.5
      }s"/>\n          <rect  width="155" height="14" x="104.5" y="125.5" fill="#fff" rx="3.5"  style="animation-delay: ${
        n + 2
      }s"/>\n        </g>\n      </g>`;
    }
    return e;
  }
  drawLine(e, t, n) {
    const i = 18 * e + 10;
    let s = "",
      o = 20 * t + 70;
    for (
      s += `<mask id="line${e}">\n    <rect x="0" y="${i}" width="${n}" height="10" fill="white" class="mask" style="transform-origin: ${o}px 0px; animation-delay: ${
        0.4 * e
      }s" rx="5"/>\n    </mask>`;
      o < n;

    ) {
      const t = ki(20, 100),
        r = t > 50 ? "#121C42" : "#5A63FF";
      t + o <= n &&
        (s += `<rect width="${t}" height="10" x="${o}" y="${i}" fill="${r}" rx="5" mask="url(#line${e})"/>`),
        (o += t + 4);
    }
    return (
      (s += `<rect width="20" height="8" x="13" y="${
        i + 1
      }" fill="#D5E3EC" rx="5"/>`),
      s
    );
  }
  buildStyle(e) {
    const t = 0.4 * (e - 1);
    return `<style>\n      .mask  {\n        animation: 0.4s moveRect both linear;\n      }\n      .screen {\n        animation: moveScreen ${
      1 * e * 0.4
    }s ${t}s both linear;\n        transform-origin: 0 0;\n      }\n      .preview {\n        animation: movePreview 1.5s 9s both;\n        transform-origin: 0 0;\n      }\n      .panel {\n        animation: .5s appearPanel both;\n      }\n      .panel rect,\n      .panel circle {\n        stroke-dasharray: 400px;\n        stroke-dashoffset: 400px;\n        animation: 1s ${
      t + 1
    }s appearStroke both linear;\n      }\n      @keyframes moveRect {\n        0% { transform: scaleX(0) }\n        100% { transform:scaleX(1) }\n      }\n      @keyframes moveScreen {\n        0% { transform: translateY(0) }\n        100% { transform:translateY(-${
      18 * e * 1
    }px) }\n      }\n      @keyframes movePreview {\n        0% { transform: translateY(0) }\n        100% { transform:translateY(-190px) }\n      }\n      @keyframes appearPanel {\n        0% { transform: translateY(30px); opacity: 0; }\n        100% { transform:translateY(0); opacity: 1; }\n      }\n      @keyframes appearStroke {\n        0% { stroke-dashoffset: 400px; fill: #F7FAFB; }\n        100% { stroke-dashoffset: 0; fill: #FFF; }\n      }\n    </style>`;
  }
  buildPanelStyle(e) {
    const t = 3 * (e - 1) + 0.5;
    return `\n      .panel-${e} {\n      }\n      .panel-${e} circle {\n        stroke-dasharray: 400px;\n        stroke-dashoffset: 400px;\n        animation: 1s ${
      t + 0.5
    }s appearDashRect both linear;\n      }\n      .panel-${e} rect {\n        stroke-dasharray: 400px;\n        stroke-dashoffset: 400px;\n        animation: 1s ${
      t + 1
    }s appearDashRect both linear;\n      }\n      .panel-${e} rect:nth-child(4) {\n        animation-delay: ${
      t + 1.5
    }s;\n      }\n      .panel-${e} rect:nth-child(5) {\n        animation-delay: ${
      t + 2
    }s;\n      }\n    `;
  }
}
class Ei extends HTMLFormElement {
  connectedCallback() {
    Array.from(this.querySelectorAll("input, select")).forEach((e) => {
      e.addEventListener("change", () => {
        this.submit();
      });
    });
  }
}
function Ai(e) {
  var t = e,
    { show: n, children: i, style: s = {}, forwardedRef: o = null } = t,
    r = c(t, ["show", "children", "style", "forwardedRef"]);
  const [l, d] = v(n);
  g(() => {
    n && d(!0);
  }, [n]);
  return (
    l &&
    u(
      "div",
      a(
        {
          style: a(
            { animation: (n ? "slideIn" : "slideOut") + " .3s both" },
            s
          ),
          onAnimationEnd: (e) => {
            n || "slideOut" !== e.animationName || d(!1);
          },
          ref: o,
        },
        r
      ),
      i
    )
  );
}
function Ci({ width: e = 16, margin: t = 10 }) {
  return u("spinning-dots", {
    style: {
      display: "block",
      width: `${e}px`,
      height: `${e}px`,
      margin: `${t}px auto`,
    },
  });
}
let Li = !1,
  Si = null;
function Oi(e, t) {
  !(function () {
    if (!0 === Li || !Ee()) return;
    const e = new URL(window.grafikart.MERCURE_URL);
    e.searchParams.append("topic", "/notifications/{channel}"),
      e.searchParams.append(
        "topic",
        `/notifications/user/${window.grafikart.USER}`
      );
    (new EventSource(e, { withCredentials: !0 }).onmessage = (e) => {
      const t = JSON.parse(e.data);
      "notification" === t.type &&
        (function () {
          if (!P()) return;
          null === Si && (Si = new Audio("/notification.mp3"));
          (Si.volume = 0.5), Si.play();
        })(),
        Ii(t);
    }),
      (Li = !0);
  })();
  const n = (e) => t(e.detail);
  return window.addEventListener(e, n), () => window.removeEventListener(e, n);
}
function Ii({ type: e, data: t }) {
  window.dispatchEvent(new CustomEvent(e, { detail: t }));
}
let Ti = [],
  _i = !1;
function Fi({ count: e }) {
  return e > 0 && u("span", { className: "notification-badge" }, e);
}
function $i(e) {
  var t = e,
    {
      notifications: n = [],
      onClickOutside: i = () => {},
      loading: s = !1,
      notificationReadAt: o,
    } = t,
    r = c(t, [
      "notifications",
      "onClickOutside",
      "loading",
      "notificationReadAt",
    ]);
  const l = m();
  return (
    R(l, i),
    u(
      "div",
      a({ ref: l }, r),
      u(
        "div",
        { className: "notifications_title" },
        "Nouveaux messages",
        u(
          "button",
          { "aria-label": "Fermer", onClick: i },
          u(Ce, { name: "cross" })
        )
      ),
      u(
        "div",
        { className: "notifications_body" },
        s && u(Ci, null),
        0 === n.length
          ? u(
              "span",
              { className: "notifications_body-empty" },
              "Vous n'avez aucune notification :("
            )
          : n.map((e) => u(Mi, a({ key: e.id, notificationReadAt: o }, e)))
      ),
      u(
        "a",
        { href: "/notifications", className: "notifications_footer" },
        "Toutes les notifications"
      )
    )
  );
}
function Mi({ url: e, message: t, createdAt: n, notificationReadAt: i }) {
  const s = "notifications_item " + (i > n ? "is-read" : ""),
    o = Date.parse(n) / 1e3;
  return u(
    "a",
    { href: e, className: s },
    u("div", { dangerouslySetInnerHTML: { __html: t } }),
    u("small", { class: "text-muted" }, u("time-ago", { time: o }))
  );
}
class Pi extends HTMLElement {
  constructor() {
    super(), (this.onHashChange = this.onHashChange.bind(this));
  }
  connectedCallback() {
    this.setAttribute("role", "tablist");
    const e = Array.from(this.children),
      t = window.location.hash.replace("#", "");
    let n = e[0];
    e.forEach((i, s) => {
      const o =
          "A" === i.tagName
            ? i.getAttribute("href").replace("#", "")
            : i.getAttribute("aria-controls"),
        r = document.getElementById(o);
      "true" === i.getAttribute("aria-selected") && "" === t && (n = i),
        o === t && (n = i),
        i.setAttribute("role", "tab"),
        i.setAttribute("aria-selected", "false"),
        i.setAttribute("tabindex", "-1"),
        i.setAttribute("aria-controls", o),
        i.getAttribute("id") || i.setAttribute("id", "tab-" + o),
        r.setAttribute("role", "tabpanel"),
        r.setAttribute("aria-labelledby", i.getAttribute("id")),
        r.setAttribute("hidden", "hidden"),
        r.setAttribute("tabindex", "0"),
        i.addEventListener("keyup", (t) => {
          let n = null;
          "ArrowRight" === t.key
            ? (n = s === e.length - 1 ? 0 : s + 1)
            : "ArrowLeft" === t.key
            ? (n = 0 === s ? e.length - 1 : s - 1)
            : "Home" === t.key
            ? (n = 0)
            : "End" === t.key && (n = e.length - 1),
            null !== n && (this.activate(e[n]), e[n].focus());
        }),
        i.addEventListener("click", (e) => {
          e.preventDefault(), this.activate(i, "A" === i.tagName);
        });
    }),
      window.addEventListener("hashchange", this.onHashChange),
      this.activate(n, !1),
      n.getAttribute("aria-controls") === t &&
        window.requestAnimationFrame(() => {
          n.scrollIntoView({ behavior: "smooth" });
        });
  }
  disconnectedCallback() {
    window.removeEventListener("hashchange", this.onHashChange);
  }
  onHashChange() {
    const e = Array.from(this.children).find(
      (e) => e.getAttribute("href") === window.location.hash
    );
    void 0 !== e &&
      (this.activate(e),
      document
        .querySelector(window.location.hash)
        .scrollIntoView({ behavior: "smooth" }));
  }
  activate(e, t = !0) {
    const n = this.querySelector('[aria-selected="true"]');
    if (null !== n) {
      const e = document.getElementById(n.getAttribute("aria-controls"));
      n.setAttribute("aria-selected", "false"),
        n.setAttribute("tabindex", "-1"),
        e.setAttribute("hidden", "hidden");
    }
    const i = e.getAttribute("aria-controls"),
      s = document.getElementById(i);
    e.setAttribute("aria-selected", "true"),
      e.setAttribute("tabindex", "0"),
      s.removeAttribute("hidden"),
      t && window.history.replaceState({}, "", "#" + i);
  }
}
void 0 !== window.autoDefineComponent && customElements.define("nav-tabs", Pi);
class Di extends HTMLElement {
  constructor() {
    super(),
      (this.onScroll = (function (e, t) {
        let n, i;
        return function () {
          const s = this,
            o = +new Date(),
            r = arguments;
          n && o < n + t
            ? (clearTimeout(i),
              (i = setTimeout(function () {
                (n = o), e.apply(s, r);
              }, t)))
            : ((n = o), e.apply(s, r));
        };
      })(this.onScroll.bind(this), 100)),
      (this.isVisible = !1);
  }
  connectedCallback() {
    this.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }),
      window.addEventListener("scroll", this.onScroll);
  }
  disconnectedCallback() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll() {
    const e = window.innerHeight / 3;
    window.scrollY > e && !1 === this.isVisible
      ? (this.removeAttribute("hidden", "hidden"), (this.isVisible = !0))
      : window.scrollY < e &&
        !0 === this.isVisible &&
        (this.setAttribute("hidden", "hidden"), (this.isVisible = !1));
  }
}
void 0 !== window.autoDefineComponent &&
  customElements.define("scroll-top", Di);
class Hi extends HTMLElement {
  static get observedAttributes() {
    return ["hidden"];
  }
  constructor() {
    super(),
      (this.close = this.close.bind(this)),
      (this.onKeyDown = this.onKeyDown.bind(this)),
      (this.previouslyFocusedElement = null),
      (this.trapElements = []);
  }
  connectedCallback() {
    this.setAttribute("aria-modal", "true"),
      this.setAttribute("role", "dialog"),
      this.addEventListener("click", (e) => {
        ((e.target === this && null !== this.getAttribute("overlay-close")) ||
          void 0 !== e.target.dataset.dismiss ||
          null !== e.target.closest("[data-dismiss]")) &&
          this.close();
      }),
      this.createTrapFocusElement("afterbegin"),
      this.createTrapFocusElement("beforeend"),
      document.addEventListener("keydown", this.onKeyDown);
  }
  disconnectedCallback() {
    document.removeEventListener("keydown", this.onKeyDown),
      this.trapElements.forEach((e) => e.parentElement.removeChild(e)),
      (this.trapElements = []);
  }
  attributeChangedCallback(e, t, n) {
    if ("hidden" === e && null === n) {
      this.previouslyFocusedElement = document.activeElement;
      const e = this.getFocusableElements()[0];
      e && e.focus(),
        document.addEventListener("keydown", this.onKeyDown),
        this.removeAttribute("aria-hidden");
    }
    "hidden" === e &&
      "hidden" === n &&
      (null !== this.previouslyFocusedElement &&
        this.previouslyFocusedElement.focus(),
      (this.previouslyFocusedElement = null),
      this.setAttribute("aria-hidden", "true"),
      document.removeEventListener("keydown", this.onKeyDown));
  }
  onKeyDown(e) {
    "Escape" === e.key && this.close();
  }
  close() {
    const e = new CustomEvent("close", {
      detail: { close: !0 },
      cancelable: !0,
    });
    this.dispatchEvent(e),
      e.defaultPrevented || this.setAttribute("hidden", "hidden");
  }
  createTrapFocusElement(e) {
    const t = document.createElement("div");
    t.setAttribute("tabindex", "0"),
      t.addEventListener("focus", () => {
        const t = this.getFocusableElements();
        t.length > 0 && t["afterbegin" === e ? t.length - 1 : 0].focus();
      }),
      this.trapElements.push(t),
      this.insertAdjacentElement(e, t);
  }
  getFocusableElements() {
    return Array.from(
      this.querySelectorAll(
        '[href],\n      button:not([disabled]),\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      [tabindex]:not([tabindex="-1"]'
      )
    ).filter((e) => {
      const t = e.getBoundingClientRect();
      return t.width > 0 && t.height > 0;
    });
  }
}
function Ri(e, t, n) {
  Array.from(e).forEach(function (e) {
    e.addEventListener(t, function (e) {
      e.preventDefault(), n();
    });
  });
}
function qi(e) {
  document.cookie = `${Ni.cookieName}=${JSON.stringify(e)};max-age=${
    Ni.expires
  };path=${Ni.path}`;
}
function Vi() {
  const e = Ni.cookieName + "=";
  for (const t of document.cookie.split(/; */))
    if (t.startsWith(e)) return JSON.parse(t.replace(e, ""));
  return null;
}
void 0 !== window.autoDefineComponent &&
  customElements.define("modal-dialog", Hi);
class Ni extends HTMLElement {
  connectedCallback() {
    null === Vi()
      ? (this.removeAttribute("hidden"),
        this.removeAttribute("aria-hidden"),
        this.setAttribute("tabindex", "0"),
        this.setAttribute("role", "dialog"),
        this.setAttribute("aria-live", "polite"),
        this.addEventListener("keydown", this.onKeyDown.bind(this)),
        Ri(
          this.querySelectorAll("[data-accept]"),
          "click",
          this.accept.bind(this)
        ),
        Ri(
          this.querySelectorAll("[data-reject]"),
          "click",
          this.reject.bind(this)
        ),
        Ri(this.querySelectorAll("form"), "submit", this.accept.bind(this)))
      : this.parentElement
      ? this.parentElement.removeChild(this)
      : this.hide();
  }
  disconnectedCallback() {
    document.removeEventListener("keydown", this.onKeyDown);
  }
  onKeyDown(e) {
    "Escape" === e.key && this.reject();
  }
  reject() {
    this.dispatchEvent(new CustomEvent("reject")), this.hide(), qi(!1);
  }
  accept() {
    const e = this.querySelector("form");
    let t = {};
    null !== e && (t = Object.fromEntries(new FormData(e).entries())),
      this.dispatchEvent(new CustomEvent("accept", { detail: t })),
      qi(t),
      this.hide();
  }
  hide() {
    this.removeAttribute("tabindex"),
      this.setAttribute("hidden", "hidden"),
      this.setAttribute("aria-hidden", "true"),
      document.removeEventListener("keydown", this.onKeyDown);
  }
  static hasConsent() {
    const e = Vi();
    return null !== e && !1 !== e && e;
  }
}
(Ni.cookieName = "cookieConsent"),
  (Ni.expires = 31104e6),
  (Ni.path = "/"),
  void 0 !== window.autoDefineComponent &&
    customElements.define("cookie-banner", Ni);
class zi extends HTMLTextAreaElement {
  autogrow() {
    const e = this.style.height;
    (this.style.height = "auto"),
      this.style.height !== e &&
        this.dispatchEvent(
          new CustomEvent("grow", { detail: { height: this.scrollHeight } })
        ),
      (this.style.height = this.scrollHeight + "px");
  }
  onFocus() {
    this.autogrow(),
      window.addEventListener("resize", this.onResize),
      this.removeEventListener("focus", this.onFocus);
  }
  onResize() {
    this.autogrow();
  }
  connectedCallback() {
    (this.style.overflow = "hidden"),
      (this.style.resize = "none"),
      this.addEventListener("input", this.autogrow),
      this.addEventListener("focus", this.onFocus);
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this.onResize);
  }
  constructor() {
    super(),
      (this.autogrow = this.autogrow.bind(this)),
      (this.onResize = (function (e, t) {
        let n;
        return function () {
          const i = arguments,
            s = this;
          clearTimeout(n),
            (n = setTimeout(function () {
              e.apply(s, i);
            }, t));
        };
      })(this.onResize.bind(this), 300)),
      (this.onFocus = this.onFocus.bind(this));
  }
}
function ji({ type: e = "success", children: t, duration: n }) {
  return u(
    "alert-message",
    { type: e, className: "full", duration: "success" === e ? n : void 0 },
    t
  );
}
void 0 !== window.autoDefineComponent &&
  customElements.define("textarea-autogrow", zi, { extends: "textarea" });
class Bi extends HTMLElement {
  connectedCallback() {
    window.grafikart &&
      window.grafikart.EDIT_LINK &&
      (this.removeAttribute("hidden"),
      (this.innerHTML = `<a class="btn-primary" href="${window.grafikart.EDIT_LINK}">\n        <svg class="icon icon-edit">\n          <use xlink:href="/sprite.svg#edit"></use>\n        </svg>\n        Editer\n      </a>`));
  }
}
function Ui({ onSuccess: e, message: t, topic: n }) {
  const i = { message: null, topic: null };
  if (t) i.message = `/api/forum/messages/${t}`;
  else {
    if (!n)
      throw new Error("Impossible de charger le formulaire de signalement");
    i.topic = `/api/forum/topics/${n}`;
  }
  return u(
    V,
    {
      data: i,
      className: "forum-report stack",
      action: "/api/forum/reports",
      onSuccess: function () {
        U("Merci pour votre signalement"), e();
      },
    },
    u(
      q,
      {
        type: "textarea",
        name: "reason",
        required: !0,
        placeholder: `Indiquez en quoi ce ${
          t ? "message" : "sujet"
        } ne convient pas`,
        autofocus: !0,
      },
      "Raison du signalement"
    ),
    u(N, null, "Envoyer")
  );
}
function Ki({
  id: e,
  container: t,
  endpoint: n,
  onCancel: i,
  content: s,
  onSuccess: o,
}) {
  return G(
    u(
      V,
      { action: n, method: "PUT", onSuccess: o },
      u(
        z,
        null,
        u(q, {
          id: `content${e}`,
          name: "content",
          defaultValue: s,
          type: "editor",
          autofocus: !0,
        }),
        u(
          A,
          null,
          u(N, null, "Editer"),
          u(L, { onClick: i, type: "button" }, "Annuler")
        )
      )
    ),
    t
  );
}
Q("forum-delete", function ({ message: e, topic: t, owner: n }) {
  let i = null;
  if (e) i = `/api/forum/messages/${e}`;
  else {
    if (!t)
      throw new Error("Impossible de charger le composant de suppression");
    i = `/api/forum/topics/${t}`;
  }
  const s = m(null),
    { loading: o, fetch: r, done: a } = K(i, { method: "DELETE" });
  return (
    k(async () => {
      if (a)
        if (e) {
          const e = M(s.current, ".forum-message");
          U("Votre message a bien été supprimé"),
            document.dispatchEvent(new Event("topic:message:delete")),
            e.remove();
        } else await I("/forum"), U("Votre sujet a bien été supprimé");
    }, [a, e, t]),
    Ae(n)
      ? u(
          E,
          null,
          " ",
          "-",
          " ",
          u(
            "button",
            {
              className: "text-danger",
              onClick: async () => {
                confirm("Voulez vous vraiment supprimer ce message ?") &&
                  (await r());
              },
              disabled: o,
              ref: s,
            },
            o && u(Y, { style: { width: 12, marginRight: 5 } }),
            "Supprimer"
          )
        )
      : null
  );
}),
  Q("forum-edit", function ({ message: e, topic: t, owner: n }) {
    const i = m(),
      s = m(),
      [o, r] = v(null),
      [a, l] = v(!1),
      [c, d] = v("view"),
      p = (function ({ message: e, topic: t }) {
        if (e) return `/api/forum/messages/${e}`;
        if (t) return `/api/forum/topics/${t}`;
        throw new Error("Impossible de charger le composant d'édition");
      })({ message: e, topic: t });
    function g() {
      d("view");
      i.current
        .closest(".forum-message")
        .querySelector(".js-content").style.display = null;
    }
    return Ae(n)
      ? t
        ? u(E, null, "- ", u("a", { href: `/forum/${t}/edit` }, "Editer"))
        : u(
            "span",
            { ref: i },
            "view" === c &&
              u(
                E,
                null,
                "-",
                " ",
                u(
                  "button",
                  {
                    onClick: async function () {
                      if (null === o) {
                        l(!0);
                        const e = await h(p);
                        l(!1), r(e.content);
                      }
                      const e = i.current.closest(".forum-message");
                      (s.current = e.querySelector(".js-forum-edit")),
                        (e.querySelector(".js-content").style.display = "none"),
                        d("edit");
                    },
                  },
                  a && u(Y, { style: { width: 12, marginRight: 5 } }),
                  "Editer"
                )
              ),
            "edit" === c &&
              u(Ki, {
                id: e,
                container: s.current,
                endpoint: p,
                content: o,
                onSuccess: function (e) {
                  const t = i.current.closest(".forum-message");
                  r(e.content);
                  const n = t.querySelector(".js-content");
                  (n.innerHTML = e.formattedContent), hn(n), g();
                },
                onCancel: g,
              })
          )
      : null;
  }),
  Q(
    "forum-create-message",
    function ({ topic: e, parent: t, disabled: n }) {
      const [i, s] = v({ content: "", notification: !0 }),
        o = `/api/forum/topics/${e}/messages`;
      return Ee()
        ? void 0 !== n
          ? u(
              "div",
              { class: "forum-locked-form" },
              u(
                z,
                null,
                u(
                  q,
                  {
                    placeholder: "Votre message",
                    name: "content",
                    type: "editor",
                  },
                  "Votre message"
                ),
                u(N, { disabled: !0 }, "Répondre")
              ),
              u(
                "div",
                { class: "forum-locked-form__message" },
                u(Ce, { name: "lock" }),
                " Ce sujet est verrouillé"
              )
            )
          : u(
              V,
              {
                action: o,
                value: i,
                onChange: s,
                onSuccess: function (e) {
                  const n = _(e.html);
                  t.insertAdjacentElement("beforebegin", n),
                    j(n),
                    s({ content: "" }),
                    document.dispatchEvent(new Event("topic:message:new"));
                },
              },
              u(
                z,
                null,
                u(
                  q,
                  {
                    placeholder: "Votre message",
                    name: "content",
                    type: "editor",
                  },
                  "Votre message"
                ),
                u(
                  q,
                  {
                    name: "notification",
                    type: "checkbox",
                    defaultChecked: !0,
                  },
                  "Être notifié en cas de réponse"
                ),
                u(N, null, "Répondre")
              )
            )
        : null;
    },
    ["topic", "disabled"]
  ),
  Q(
    "forum-report",
    function ({ message: e, topic: t, owner: n }) {
      const i = m(null),
        [s, o] = B(!1),
        [r, a] = B(!1);
      return (
        R(i, o),
        Ee() && window.grafikart.USER !== parseInt(n, 10)
          ? u(
              "div",
              { style: { position: "relative" } },
              u(
                "button",
                {
                  className: "rounded-button warning",
                  onClick: o,
                  disabled: r,
                  title: e ? "Signaler le message" : "Signaler le sujet",
                },
                "!"
              ),
              u(
                Ai,
                {
                  show: s && !r,
                  className: "forum-report__form",
                  forwardedRef: i,
                },
                u(Ui, { message: e, topic: t, onSuccess: a })
              )
            )
          : null
      );
    },
    ["message", "topic"]
  ),
  Q(
    "forum-follow",
    function ({ topic: e, subscribed: t = null }) {
      var n;
      const {
          loading: i,
          fetch: s,
          data: o,
        } = K(`/api/forum/topics/${e}/follow`, { method: "POST" }),
        r = null != (n = null == o ? void 0 : o.subscribed) ? n : "" === t;
      if (!Ee()) return null;
      const a = W(
        r ? "btn-danger" : "btn-secondary",
        "topic-follow",
        "relative"
      );
      return u(
        X,
        { onClick: () => s(), loading: i, className: a, size: "small" },
        !i && u(Ce, { name: "bell" }),
        r ? "Se désabonner" : "S'abonner"
      );
    },
    ["topic", "subscribed"]
  ),
  Q(
    "forum-solve",
    function ({ message: e, topicAuthor: t, disabled: n, parent: i }) {
      const s = m(null),
        [o, r] = v(void 0 !== n),
        [a, l] = v(!1);
      return Ae(t)
        ? u(
            "button",
            {
              ref: s,
              className: "rounded-button success",
              onClick: async () => {
                l(!0);
                try {
                  await h(`/api/forum/messages/${e}/solve`, { method: "post" }),
                    U("Le sujet a bien été marqué comme résolu"),
                    r(!0);
                  const t = M(s.current, ".forum-message");
                  t && t.classList.add("is-accepted");
                } catch (Zt) {
                  U("Une erreur serveur est survenue", "danger");
                }
                l(!1);
              },
              disabled: o,
              title: "Répond à ma question !",
            },
            a ? u(Y, null) : "✓"
          )
        : (i.remove(), null);
    },
    ["message", "topicAuthor", "disabled"]
  ),
  Q(
    "forum-read",
    function ({ endpoint: e }) {
      const { loading: t, done: n, fetch: i } = K(e, { method: "POST" });
      return (
        g(() => {
          n &&
            (U("Tous les sujets ont été marqués comme lu"),
            Array.from(document.querySelectorAll(".forum-topic")).forEach((e) =>
              e.classList.add("is-read")
            ));
        }, [n]),
        !Ee() || n
          ? null
          : u(
              L,
              { size: "small", loading: t, onClick: (e) => i() },
              !t && u(Ce, { name: "eye" }),
              " Marquer tous comme lus"
            )
      );
    },
    ["endpoint"]
  ),
  Q(
    "forum-count",
    function ({ count: e }) {
      const [t, n] = v(parseInt(e, 10)),
        i = () => n((e) => e + 1),
        s = () => n((e) => e - 1);
      return (
        g(
          () => (
            document.addEventListener("topic:message:new", i),
            document.addEventListener("topic:message:delete", s),
            () => {
              document.removeEventListener("topic:message:new", i),
                document.removeEventListener("topic:message:delete", s);
            }
          )
        ),
        0 === t ? "Aucune réponse" : 1 === t ? "1 réponse" : `${t} réponses`
      );
    },
    ["count"]
  );
var Yi = {};
!(function e(t, n, i, s) {
  var o = !!(
    t.Worker &&
    t.Blob &&
    t.Promise &&
    t.OffscreenCanvas &&
    t.OffscreenCanvasRenderingContext2D &&
    t.HTMLCanvasElement &&
    t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    t.URL &&
    t.URL.createObjectURL
  );
  function r() {}
  function a(e) {
    var i = n.exports.Promise,
      s = void 0 !== i ? i : t.Promise;
    return "function" == typeof s ? new s(e) : (e(r, r), null);
  }
  var l,
    c,
    d,
    u,
    h,
    p,
    m,
    g,
    f =
      ((d = Math.floor(1e3 / 60)),
      (u = {}),
      (h = 0),
      "function" == typeof requestAnimationFrame &&
      "function" == typeof cancelAnimationFrame
        ? ((l = function (e) {
            var t = Math.random();
            return (
              (u[t] = requestAnimationFrame(function n(i) {
                h === i || h + d - 1 < i
                  ? ((h = i), delete u[t], e())
                  : (u[t] = requestAnimationFrame(n));
              })),
              t
            );
          }),
          (c = function (e) {
            u[e] && cancelAnimationFrame(u[e]);
          }))
        : ((l = function (e) {
            return setTimeout(e, d);
          }),
          (c = function (e) {
            return clearTimeout(e);
          })),
      { frame: l, cancel: c }),
    v =
      ((g = {}),
      function () {
        if (p) return p;
        if (!i && o) {
          var t = [
            "var CONFETTI, SIZE = {}, module = {};",
            "(" + e.toString() + ")(this, module, true, SIZE);",
            "onmessage = function(msg) {",
            "  if (msg.data.options) {",
            "    CONFETTI(msg.data.options).then(function () {",
            "      if (msg.data.callback) {",
            "        postMessage({ callback: msg.data.callback });",
            "      }",
            "    });",
            "  } else if (msg.data.reset) {",
            "    CONFETTI.reset();",
            "  } else if (msg.data.resize) {",
            "    SIZE.width = msg.data.resize.width;",
            "    SIZE.height = msg.data.resize.height;",
            "  } else if (msg.data.canvas) {",
            "    SIZE.width = msg.data.canvas.width;",
            "    SIZE.height = msg.data.canvas.height;",
            "    CONFETTI = module.exports.create(msg.data.canvas);",
            "  }",
            "}",
          ].join("\n");
          try {
            p = new Worker(URL.createObjectURL(new Blob([t])));
          } catch (Zt) {
            return (
              void 0 !== typeof console &&
                "function" == typeof console.warn &&
                console.warn("🎊 Could not load worker", Zt),
              null
            );
          }
          !(function (e) {
            function t(t, n) {
              e.postMessage({ options: t || {}, callback: n });
            }
            (e.init = function (t) {
              var n = t.transferControlToOffscreen();
              e.postMessage({ canvas: n }, [n]);
            }),
              (e.fire = function (n, i, s) {
                if (m) return t(n, null), m;
                var o = Math.random().toString(36).slice(2);
                return (m = a(function (i) {
                  function r(t) {
                    t.data.callback === o &&
                      (delete g[o],
                      e.removeEventListener("message", r),
                      (m = null),
                      s(),
                      i());
                  }
                  e.addEventListener("message", r),
                    t(n, o),
                    (g[o] = r.bind(null, { data: { callback: o } }));
                }));
              }),
              (e.reset = function () {
                for (var t in (e.postMessage({ reset: !0 }), g))
                  g[t](), delete g[t];
              });
          })(p);
        }
        return p;
      }),
    y = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
      disableForReducedMotion: !1,
      scalar: 1,
    };
  function b(e, t, n) {
    return (function (e, t) {
      return t ? t(e) : e;
    })(e && null != e[t] ? e[t] : y[t], n);
  }
  function w(e) {
    return e < 0 ? 0 : Math.floor(e);
  }
  function k(e) {
    return parseInt(e, 16);
  }
  function x(e) {
    return e.map(E);
  }
  function E(e) {
    var t = String(e).replace(/[^0-9a-f]/gi, "");
    return (
      t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
      {
        r: k(t.substring(0, 2)),
        g: k(t.substring(2, 4)),
        b: k(t.substring(4, 6)),
      }
    );
  }
  function A(e) {
    (e.width = document.documentElement.clientWidth),
      (e.height = document.documentElement.clientHeight);
  }
  function C(e) {
    var t = e.getBoundingClientRect();
    (e.width = t.width), (e.height = t.height);
  }
  function L(e, t, n, o, r) {
    var l,
      c,
      d = t.slice(),
      u = e.getContext("2d"),
      h = a(function (t) {
        function a() {
          (l = c = null), u.clearRect(0, 0, o.width, o.height), r(), t();
        }
        (l = f.frame(function t() {
          !i ||
            (o.width === s.width && o.height === s.height) ||
            ((o.width = e.width = s.width), (o.height = e.height = s.height)),
            o.width ||
              o.height ||
              (n(e), (o.width = e.width), (o.height = e.height)),
            u.clearRect(0, 0, o.width, o.height),
            (d = d.filter(function (e) {
              return (function (e, t) {
                (t.x += Math.cos(t.angle2D) * t.velocity + t.drift),
                  (t.y += Math.sin(t.angle2D) * t.velocity + t.gravity),
                  (t.wobble += 0.1),
                  (t.velocity *= t.decay),
                  (t.tiltAngle += 0.1),
                  (t.tiltSin = Math.sin(t.tiltAngle)),
                  (t.tiltCos = Math.cos(t.tiltAngle)),
                  (t.random = Math.random() + 5),
                  (t.wobbleX = t.x + 10 * t.scalar * Math.cos(t.wobble)),
                  (t.wobbleY = t.y + 10 * t.scalar * Math.sin(t.wobble));
                var n = t.tick++ / t.totalTicks,
                  i = t.x + t.random * t.tiltCos,
                  s = t.y + t.random * t.tiltSin,
                  o = t.wobbleX + t.random * t.tiltCos,
                  r = t.wobbleY + t.random * t.tiltSin;
                return (
                  (e.fillStyle =
                    "rgba(" +
                    t.color.r +
                    ", " +
                    t.color.g +
                    ", " +
                    t.color.b +
                    ", " +
                    (1 - n) +
                    ")"),
                  e.beginPath(),
                  "circle" === t.shape
                    ? e.ellipse
                      ? e.ellipse(
                          t.x,
                          t.y,
                          Math.abs(o - i) * t.ovalScalar,
                          Math.abs(r - s) * t.ovalScalar,
                          (Math.PI / 10) * t.wobble,
                          0,
                          2 * Math.PI
                        )
                      : (function (e, t, n, i, s, o, r, a, l) {
                          e.save(),
                            e.translate(t, n),
                            e.rotate(o),
                            e.scale(i, s),
                            e.arc(0, 0, 1, r, a, l),
                            e.restore();
                        })(
                          e,
                          t.x,
                          t.y,
                          Math.abs(o - i) * t.ovalScalar,
                          Math.abs(r - s) * t.ovalScalar,
                          (Math.PI / 10) * t.wobble,
                          0,
                          2 * Math.PI
                        )
                    : (e.moveTo(Math.floor(t.x), Math.floor(t.y)),
                      e.lineTo(Math.floor(t.wobbleX), Math.floor(s)),
                      e.lineTo(Math.floor(o), Math.floor(r)),
                      e.lineTo(Math.floor(i), Math.floor(t.wobbleY))),
                  e.closePath(),
                  e.fill(),
                  t.tick < t.totalTicks
                );
              })(u, e);
            })).length
              ? (l = f.frame(t))
              : a();
        })),
          (c = a);
      });
    return {
      addFettis: function (e) {
        return (d = d.concat(e)), h;
      },
      canvas: e,
      promise: h,
      reset: function () {
        l && f.cancel(l), c && c();
      },
    };
  }
  function S(e, n) {
    var i,
      s = !e,
      r = !!b(n || {}, "resize"),
      l = b(n, "disableForReducedMotion", Boolean),
      c = o && !!b(n || {}, "useWorker") ? v() : null,
      d = s ? A : C,
      u = !(!e || !c) && !!e.__confetti_initialized,
      h =
        "function" == typeof matchMedia &&
        matchMedia("(prefers-reduced-motion)").matches;
    function p(t, n, s) {
      for (
        var o,
          r,
          a,
          l,
          c,
          u = b(t, "particleCount", w),
          h = b(t, "angle", Number),
          p = b(t, "spread", Number),
          m = b(t, "startVelocity", Number),
          g = b(t, "decay", Number),
          f = b(t, "gravity", Number),
          v = b(t, "drift", Number),
          y = b(t, "colors", x),
          k = b(t, "ticks", Number),
          E = b(t, "shapes"),
          A = b(t, "scalar"),
          C = (function (e) {
            var t = b(e, "origin", Object);
            return (t.x = b(t, "x", Number)), (t.y = b(t, "y", Number)), t;
          })(t),
          S = u,
          O = [],
          I = e.width * C.x,
          T = e.height * C.y;
        S--;

      )
        O.push(
          ((o = {
            x: I,
            y: T,
            angle: h,
            spread: p,
            startVelocity: m,
            color: y[S % y.length],
            shape:
              E[
                ((l = 0),
                (c = E.length),
                Math.floor(Math.random() * (c - l)) + l)
              ],
            ticks: k,
            decay: g,
            gravity: f,
            drift: v,
            scalar: A,
          }),
          (r = void 0),
          (a = void 0),
          (r = o.angle * (Math.PI / 180)),
          (a = o.spread * (Math.PI / 180)),
          {
            x: o.x,
            y: o.y,
            wobble: 10 * Math.random(),
            velocity: 0.5 * o.startVelocity + Math.random() * o.startVelocity,
            angle2D: -r + (0.5 * a - Math.random() * a),
            tiltAngle: Math.random() * Math.PI,
            color: o.color,
            shape: o.shape,
            tick: 0,
            totalTicks: o.ticks,
            decay: o.decay,
            drift: o.drift,
            random: Math.random() + 5,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: 3 * o.gravity,
            ovalScalar: 0.6,
            scalar: o.scalar,
          })
        );
      return i ? i.addFettis(O) : (i = L(e, O, d, n, s)).promise;
    }
    function m(n) {
      var o = l || b(n, "disableForReducedMotion", Boolean),
        m = b(n, "zIndex", Number);
      if (o && h)
        return a(function (e) {
          e();
        });
      s && i
        ? (e = i.canvas)
        : s &&
          !e &&
          ((e = (function (e) {
            var t = document.createElement("canvas");
            return (
              (t.style.position = "fixed"),
              (t.style.top = "0px"),
              (t.style.left = "0px"),
              (t.style.pointerEvents = "none"),
              (t.style.zIndex = e),
              t
            );
          })(m)),
          document.body.appendChild(e)),
        r && !u && d(e);
      var g = { width: e.width, height: e.height };
      function f() {
        if (c) {
          var t = {
            getBoundingClientRect: function () {
              if (!s) return e.getBoundingClientRect();
            },
          };
          return (
            d(t),
            void c.postMessage({ resize: { width: t.width, height: t.height } })
          );
        }
        g.width = g.height = null;
      }
      function v() {
        (i = null),
          r && t.removeEventListener("resize", f),
          s && e && (document.body.removeChild(e), (e = null), (u = !1));
      }
      return (
        c && !u && c.init(e),
        (u = !0),
        c && (e.__confetti_initialized = !0),
        r && t.addEventListener("resize", f, !1),
        c ? c.fire(n, g, v) : p(n, g, v)
      );
    }
    return (
      (m.reset = function () {
        c && c.reset(), i && i.reset();
      }),
      m
    );
  }
  (n.exports = S(null, { useWorker: !0, resize: !0 })), (n.exports.create = S);
})(
  (function () {
    return "undefined" != typeof window
      ? window
      : "undefined" != typeof self
      ? self
      : this || {};
  })(),
  Yi,
  !1
);
var Gi = Yi.exports;
Yi.exports.create;
class Wi extends HTMLElement {
  static get observedAttributes() {
    return ["progress"];
  }
  constructor() {
    super(),
      (this.onProgress = this.onProgress.bind(this)),
      (this.onEnd = this.onEnd.bind(this)),
      (this.onHashChange = this.onHashChange.bind(this)),
      (this.timeBeforeTracking = 10),
      (this.lastTickTime = 0),
      (this.contentId = this.getAttribute("contentId"));
  }
  connectedCallback() {
    return (
      (this.video = this.firstElementChild),
      this.video
        ? (window.addEventListener("hashchange", this.onHashChange),
          Ee()
            ? (this.video.addEventListener("timeupdate", this.onProgress),
              void this.video.addEventListener("ended", this.onEnd))
            : null)
        : null
    );
  }
  attributeChangedCallback(e, t, n) {
    "progress" === e &&
      n &&
      "1" !== n &&
      this.firstElementChild.setAttribute(
        "start",
        Math.floor(parseInt(this.getAttribute("duration"), 10) * parseFloat(n))
      );
  }
  async onEnd() {
    if ("1" === this.getAttribute("progress")) return;
    var e;
    await ((e = 300),
    new Promise((t) => {
      window.setTimeout(t, e);
    }));
    const { message: t } = await h(`/api/progress/${this.contentId}/1000`, {
      method: "POST",
    }).catch(console.error);
    document.body.appendChild(_(t)),
      Gi({ particleCount: 100, zIndex: 3e3, spread: 70, origin: { y: 0.6 } }),
      this.setAttribute("progress", "1");
  }
  async onProgress() {
    if (null === this.lastTickTime || !this.video.duration)
      return void (this.lastTickTime = this.video.currentTime);
    const e = this.video.currentTime - this.lastTickTime;
    if (e < 0 || e > 5)
      return (
        (this.lastTickTime = this.video.currentTime),
        void (this.timeBeforeTracking = 10)
      );
    if (
      ((this.timeBeforeTracking -= e),
      (this.lastTickTime = this.video.currentTime),
      this.timeBeforeTracking < 0)
    ) {
      if ("1" === this.getAttribute("progress")) return;
      this.timeBeforeTracking = 10;
      const e = Math.round(
        (1e3 * this.video.currentTime) / this.video.duration
      );
      try {
        await h(`/api/progress/${this.contentId}/${e}`, { method: "POST" });
      } catch (Zt) {
        console.error("Impossible d'enregistrer la progression");
      }
    }
  }
  onHashChange() {
    if (window.location.hash.startsWith("#t")) {
      const e = parseInt(window.location.hash.replace("#t", ""), 10);
      if (Number.isNaN(e)) return null;
      (this.video.currentTime = e),
        this.video.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
    }
  }
  disconnectedCallback() {
    this.video.removeEventListener("timeupdate", this.onProgress),
      window.removeEventListener("hashchange", this.onHashChange);
  }
}
class Xi extends HTMLAnchorElement {
  constructor() {
    super(),
      this.addEventListener("click", (e) => {
        e.preventDefault(),
          e.stopPropagation(),
          (function (e, t, n, i) {
            const s =
                void 0 !== window.screenLeft ? window.screenLeft : screen.left,
              o = void 0 !== window.screenTop ? window.screenTop : screen.top,
              r =
                (window.innerWidth
                  ? window.innerWidth
                  : document.documentElement.clientWidth
                  ? document.documentElement.clientWidth
                  : screen.width) /
                  2 -
                n / 2 +
                s,
              a =
                (window.innerHeight
                  ? window.innerHeight
                  : document.documentElement.clientHeight
                  ? document.documentElement.clientHeight
                  : screen.height) /
                  2 -
                i / 2 +
                o,
              l = window.open(
                e,
                t,
                `scrollbars=yes, width=${n}, height=${i}, top=${a}, left=${r}`
              );
            window.focus && l.focus();
          })(
            `${this.getAttribute("href")}&text=${encodeURIComponent(
              document.title
            )}`,
            "Partager",
            670,
            340
          );
      });
  }
}
let Qi = null;
function Zi(e) {
  var t = c(e, []);
  const [n, i] = v(null);
  return (
    k(async () => {
      if (Qi) return void i(Qi);
      const e = await h("/api/country");
      (Qi = e), i(e);
    }),
    null === n
      ? u("select", a({}, t))
      : u(
          "select",
          a({}, t),
          u("option", { defaultSelected: !0 }, "Veuillez sélectionner un pays"),
          Object.keys(n).map((e) =>
            u(
              "option",
              {
                key: e,
                defaultSelected: e === t.defaultValue || void 0,
                value: e,
              },
              n[e]
            )
          )
        )
  );
}
const Ji = [];
function es(e, t = null) {
  return Array.isArray(e)
    ? Promise.all(e.map((e) => es(e)))
    : new Promise((n, i) => {
        if (Ji.includes(e)) return void n(t ? window[t] : null);
        const s = document.getElementsByTagName("script")[0],
          o = document.createElement("script");
        (o.type = "text/javascript"),
          (o.src = e),
          (o.async = !0),
          (o.onload = o.onreadystatechange =
            function () {
              Ji.includes(e) ||
                (this.readyState && "complete" !== this.readyState) ||
                (Ji.push(e), n(t ? window[t] : null));
            }),
          (o.onerror = o.onabort = i),
          s.parentNode.insertBefore(o, s);
      });
}
function ts({
  plan: e,
  onPaypalApproval: t,
  description: n,
  price: i,
  stripeKey: s,
  paypalId: o,
}) {
  const [r, a] = v("CARD");
  return u(
    "div",
    { class: "text-left" },
    u(
      "div",
      { className: "form-group mb2" },
      u("label", null, "Méthode de paiement"),
      u(
        "div",
        { class: "btn-group" },
        u(
          "button",
          {
            onClick: () => a("CARD"),
            class: W("btn-secondary btn-small", "CARD" === r && "active"),
          },
          u("img", {
            src: "/images/payment-methods.png",
            width: "76",
            class: "mr1",
          })
        ),
        u(
          "button",
          {
            onClick: () => a("PAYPAL"),
            class: W("btn-secondary btn-small", "PAYPAL" === r && "active"),
          },
          u("img", { src: "/images/paypal.svg", width: "20", class: "mr1" })
        )
      )
    ),
    "PAYPAL" === r
      ? u(ns, {
          planId: e,
          price: i,
          description: n,
          onApprove: t,
          paypalId: o,
        })
      : u(is, { plan: e, publicKey: s })
  );
}
function ns({ planId: e, price: t, description: n, paypalId: i }) {
  const s = m(null),
    o = m(null),
    r = "EUR",
    [a, l] = v(null),
    [c, d] = B(!1),
    p = a
      ? (function (e, t) {
          return (
            Math.floor(
              100 *
                (e -
                  e /
                    (1 +
                      (function (e) {
                        return "FR" === e ? 0.2 : 0;
                      })(t)))
            ) / 100
          );
        })(t, a)
      : null;
  return (
    (o.current = async (e) => {
      d();
      try {
        await h(`/api/premium/paypal/${e}`, { method: "POST" }),
          await I("?success=1");
      } catch (Zt) {
        Zt instanceof ee && U(Zt.name, "danger", null);
      }
      d();
    }),
    g(() => {
      if (null === p) return;
      d();
      const a = t - p;
      cn(
        `https://www.paypal.com/sdk/js?client-id=${i}&disable-funding=card,credit&integration-date=2020-12-10&currency=EUR`,
        () => (
          d(),
          (s.current.innerHTML = ""),
          window.paypal
            .Buttons({
              style: { label: "pay" },
              createOrder: (i, s) =>
                s.order.create({
                  purchase_units: [
                    {
                      description: n,
                      custom_id: e,
                      items: [
                        {
                          name: n,
                          quantity: "1",
                          unit_amount: { value: a, currency_code: r },
                          tax: { value: p, currency_code: r },
                          category: "DIGITAL_GOODS",
                        },
                      ],
                      amount: {
                        currency_code: r,
                        value: t,
                        breakdown: {
                          item_total: { currency_code: r, value: a },
                          tax_total: { currency_code: r, value: p },
                        },
                      },
                    },
                  ],
                }),
              onApprove: (e) => {
                o.current(e.orderID);
              },
            })
            .render(s.current),
          () => {
            s.current.innerHTML = "";
          }
        )
      );
    }, [n, e, t, p]),
    u(
      z,
      null,
      u(
        O,
        {
          name: "countryCode",
          required: !0,
          component: Zi,
          value: a,
          onChange: (e) => l(e.target.value),
        },
        "Pays de résidence"
      ),
      a &&
        u("div", {
          style: { minHeight: 52, display: c ? "none" : null },
          ref: s,
        }),
      c &&
        u(X, { class: "btn-primary btn-block", loading: !0 }, "Chargement...")
    )
  );
}
function is({ plan: e, publicKey: t }) {
  const [n, i] = B(!0),
    [s, o] = B(!1);
  return u(
    z,
    { gap: 2 },
    u(
      te,
      { id: "subscription", name: "subscription", checked: n, onChange: i },
      "Renouveller automatiquement"
    ),
    u(
      C,
      {
        size: "block",
        onClick: async () => {
          o();
          try {
            const i = new (await es("https://js.stripe.com/v3/", "Stripe"))(t),
              { id: s } = await h(
                `/api/premium/${e}/stripe/checkout?subscription=${
                  n ? "1" : "0"
                }`,
                { method: "POST" }
              );
            i.redirectToCheckout({ sessionId: s });
          } catch (Zt) {
            U(Zt instanceof ee ? Zt.name : Zt, "error"), o();
          }
        },
        loading: s,
      },
      n ? "S'abonner via" : "Payer via ",
      u("img", {
        src: "/images/stripe.svg",
        height: "20",
        style: { marginLeft: ".4rem" },
      })
    )
  );
}
function ss({ defaultValue: e }) {
  const t = m(null),
    [n, i] = v(e || ""),
    { loading: s, fetch: o, data: r } = K(),
    [a, l] = v(null);
  let c = (null == r ? void 0 : r.items) || [];
  "" === n && (c = []);
  const d = (null == r ? void 0 : r.hits) || 0;
  "" !== n &&
    c.length > 0 &&
    (c = [
      ...c,
      {
        title: `Voir les <strong>${d}</strong> résultats`,
        url: `/recherche?q=${encodeURI(n)}&redirect=0`,
      },
    ]);
  const h = w(
      ye(async (e) => {
        await o(`/api/search?q=${encodeURI(e.target.value)}`), l(null);
      }, 300),
      []
    ),
    p = w(
      (e) => {
        0 !== c.length &&
          l((t) => {
            const n = t + e;
            return null === t && 1 === e
              ? 0
              : null === t && -1 === e
              ? c.length - 1
              : n < 0 || n >= c.length
              ? null
              : n;
          });
      },
      [c]
    );
  return (
    g(() => {
      const e = (e) => {
        switch (e.key) {
          case "ArrowDown":
          case "Tab":
            return e.preventDefault(), void p(1);
          case "ArrowUp":
            p(-1);
        }
      };
      return (
        window.addEventListener("keydown", e),
        () => window.removeEventListener("keydown", e)
      );
    }, [p]),
    g(() => {
      t.current.focus();
    }, []),
    u(
      "form",
      {
        action: "/recherche",
        onSubmit: (e) => {
          null !== a &&
            c[a] &&
            (e.preventDefault(), (window.location.href = c[a].url));
        },
        class: "search-input form-group",
        onClick: (e) => e.stopPropagation(),
      },
      u("input", {
        autofocus: !0,
        type: "text",
        name: "q",
        ref: t,
        onInput: (e) => {
          i(e.target.value), h(e);
        },
        autocomplete: "off",
        value: n,
        placeholder: "Rechercher un contenu...",
      }),
      u("button", { type: "submit" }, u(Ce, { name: "search" })),
      s && u(Y, { class: "search-input_loader" }),
      c.length > 0 &&
        u(
          "ul",
          { class: "search-input_suggestions" },
          c.map((e, t) =>
            u(
              "li",
              { key: e.url },
              u(
                "a",
                { class: W(t === a && "focused"), href: e.url },
                e.category &&
                  u("span", { class: "search-input_category" }, e.category),
                u("span", { dangerouslySetInnerHTML: { __html: e.title } })
              )
            )
          )
        )
    )
  );
}
function os({ onClose: e }) {
  return (
    g(() => {
      const t = (t) => {
        "Escape" === t.key && e();
      };
      return (
        window.addEventListener("keyup", t),
        () => window.removeEventListener("keyup", t)
      );
    }, [e]),
    G(
      u("div", { class: "search-popup", onclick: e }, u(ss, null)),
      document.body
    )
  );
}
class rs extends HTMLElement {
  connectedCallback() {
    (this.elements = Array.from(this.children)),
      this.applyClasses(),
      (this.timer = window.setTimeout(this.cycle.bind(this), 5e3));
  }
  applyClasses() {
    this.elements.forEach((e, t) => {
      e.classList.remove(e.dataset.currentClass),
        (e.dataset.currentClass = `item-${t}`),
        e.classList.add(`item-${t}`);
    });
  }
  cycle() {
    (this.elements = [
      this.elements[this.elements.length - 1],
      ...this.elements.slice(0, this.elements.length - 1),
    ]),
      this.applyClasses(),
      (this.timer = window.setTimeout(this.cycle.bind(this), 5e3));
  }
  disconnectedCallback() {
    window.clearTimeout(this.timer);
  }
}
class as extends HTMLElement {
  constructor() {
    super(),
      (this.open = this.open.bind(this)),
      (this.close = this.close.bind(this)),
      (this.toggleMenu = this.toggleMenu.bind(this)),
      (this.onKeyUp = this.onKeyUp.bind(this)),
      (this.onKeyDown = this.onKeyDown.bind(this)),
      (this.onBlur = this.onBlur.bind(this));
  }
  connectedCallback() {
    const e = this.querySelector("button"),
      t = this.querySelector("ul"),
      n = this.getAttribute("id");
    e.setAttribute("aria-haspopup", "listbox"),
      e.setAttribute("id", `${n}button`),
      e.setAttribute("aria-controls", `${n}list`),
      e.addEventListener("click", this.toggleMenu),
      t.setAttribute("id", `${n}list`),
      t.setAttribute("aria-labelledby", `${n}label`),
      t.setAttribute("tabindex", "-1"),
      t.setAttribute("role", "listbox"),
      t.addEventListener("keydown", this.onKeyDown),
      t.addEventListener("blur", this.onBlur),
      t.querySelectorAll("a").forEach((e) => e.setAttribute("tabindex", "-1")),
      document.addEventListener("keyup", this.onKeyUp),
      Array.from(t.children).forEach((e, t) => {
        e.setAttribute("role", "option"),
          e.setAttribute("id", `${n}-index${t}`),
          "true" === e.getAttribute("aria-selected") && (this.index = t);
      }),
      (this.ul = t),
      (this.button = e),
      this.close();
  }
  disconnectedCallback() {
    document.removeEventListener("keyup", this.onKeyUp);
  }
  toggleMenu(e) {
    e.preventDefault(), this.isOpen ? this.close() : this.open();
  }
  onKeyUp(e) {
    "Escape" === e.key && this.isOpen && (this.button.focus(), this.close());
  }
  onKeyDown(e) {
    if (
      ("ArrowDown" === e.key &&
        this.isOpen &&
        (e.preventDefault(), this.select(this.index + 1)),
      "ArrowUp" === e.key &&
        this.isOpen &&
        (e.preventDefault(), this.select(this.index - 1)),
      "Home" === e.key && this.isOpen && (e.preventDefault(), this.select(0)),
      "End" === e.key &&
        this.isOpen &&
        (e.preventDefault(), this.select(this.ul.children.length - 1)),
      "Enter" === e.key)
    ) {
      const e = this.ul.children[this.index];
      if (!e) return;
      const t = e.querySelector("a");
      t && (window.location.href = t.getAttribute("href"));
    }
  }
  onBlur(e) {
    this.ul.contains(e.relatedTarget)
      ? (e.preventDefault(), e.stopPropagation())
      : this.close();
  }
  open() {
    this.button.setAttribute("aria-expanded", "true"),
      this.ul.removeAttribute("aria-hidden", "true"),
      this.ul.removeAttribute("hidden"),
      (this.isOpen = !0),
      this.ul.focus(),
      this.select(this.index || 0);
  }
  close() {
    this.button.removeAttribute("aria-expanded"),
      this.ul.setAttribute("aria-hidden", "true"),
      this.ul.setAttribute("hidden", "hidden"),
      (this.isOpen = !1);
  }
  select(e) {
    if (void 0 !== this.index) {
      const e = this.ul.children[this.index];
      e && e.removeAttribute("aria-selected");
    }
    e < 0
      ? (e = this.ul.children.length - 1)
      : e >= this.ul.children.length && (e = 0);
    const t = this.ul.children[e];
    t.setAttribute("aria-selected", "true"),
      this.ul.setAttribute("aria-activedescendant", t.id),
      (this.index = e);
  }
}
class ls extends HTMLElement {
  connectedCallback() {
    const e = this.getBoundingClientRect(),
      t = (e.top + e.height / 2) / ne();
    Gi({
      particleCount: 100,
      zIndex: 3e3,
      spread: 90,
      disableForReducedMotion: !0,
      colors: [
        "#121c42",
        "#effbec",
        "#4869ee",
        "#f25353",
        "#41cf7c",
        "#feb32b",
      ],
      origin: { y: t },
    });
  }
}
class cs extends HTMLElement {
  constructor() {
    super(), (this.root = this.attachShadow({ mode: "open" }));
    let e = this.getAttribute("poster");
    if (
      ((e =
        null === e
          ? ""
          : `<button class="poster">\n      <img src="${e}" alt="">\n      <svg class="play" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><path d="M23 0C10.32 0 0 10.32 0 23s10.32 23 23 23 23-10.32 23-23S35.68 0 23 0zm8.55 23.83l-12 8A1 1 0 0118 31V15a1 1 0 011.55-.83l12 8a1 1 0 010 1.66z"/></svg>\n       <div class="title">Voir la vidéo <em>(${this.getAttribute(
              "duration"
            )})</em></div>\n    </button>`),
      (this.root.innerHTML = `\n      <style>${pe}</style>\n      <div class="ratio">\n        <div class="player"></div>\n        ${e}\n        <svg viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg" class="ratio-svg">\n          <rect width="16" height="9" fill="transparent"/>\n        </svg>\n      </div>`),
      "" !== e)
    ) {
      const e = () => {
        this.startPlay(), this.removeEventListener("click", e);
      };
      this.addEventListener("click", e),
        "#autoplay" !== window.location.hash ||
          this.getAttribute("autoplay") ||
          e();
    }
  }
  startPlay() {
    this.root.querySelector(".poster").setAttribute("aria-hidden", "true"),
      this.setAttribute("autoplay", "autoplay"),
      this.removeAttribute("poster"),
      this.loadPlayer(this.getAttribute("video"));
  }
  loadPlayer(e) {
    (this.video = document.createElement("video")),
      (this.video.src = e),
      (this.video.controls = !0),
      (this.video.autoplay = !0),
      (this.video.currentTime = this.getAttribute("start")
        ? parseInt(this.getAttribute("start"), 10)
        : 0),
      this.video.addEventListener("play", () => {
        this.dispatchEvent(new Event("play", { bubbles: !0 }));
      }),
      ["ended", "pause", "timeupdate"].forEach((e) => {
        this.video.addEventListener(e, () => {
          this.dispatchEvent(new Event(e));
        });
      }),
      this.video.addEventListener("error", () => {
        U("Une erreur est survenue lors du chargement de la vidéo", "error");
      }),
      this.root.querySelector(".player").appendChild(this.video);
  }
  pause() {
    this.video.pause();
  }
  play() {
    this.video.play();
  }
  get duration() {
    return this.video ? this.video.duration : null;
  }
  get currentTime() {
    return this.video ? this.video.currentTime : null;
  }
  set currentTime(e) {
    this.video
      ? (this.video.currentTime = e)
      : (this.setAttribute("start", e.toString()), this.startPlay());
  }
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
function us(e, t, n = {}) {
  if (void 0 === t) {
    const t = document.cookie.split(";");
    for (const n of t) {
      const [t, i] = n.split("=");
      if (t === e) return i;
    }
    return null;
  }
  if (
    (null === t ? ((t = ""), (n.expires = -365)) : (t = escape(t)), n.expires)
  ) {
    const e = new Date();
    e.setDate(e.getDate() + n.expires), (t += "; expires=" + e.toUTCString());
  }
  n.domain && (t += "; domain=" + n.domain),
    n.path && (t += "; path=" + n.path),
    (document.cookie = e + "=" + t);
}

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
customElements.define("nav-tabs", Pi),
  customElements.define("textarea-autogrow", zi, { extends: "textarea" }),
  customElements.define("modal-dialog", Hi),
  customElements.define("alert-message", oe),
  customElements.define("alert-floating", re),
  customElements.define("youtube-player", ge),
  customElements.define("live-recap", fe),
  customElements.define("play-button", ve),
  customElements.define("waves-shape", we),
  customElements.define("time-ago", bn),
  customElements.define("time-countdown", wn),
  customElements.define("ajax-delete", bi),
  customElements.define("animated-editor", xi),
  customElements.define("spinning-dots", ae),
  customElements.define("admin-edit", Bi),
  customElements.define("progress-tracker", Wi),
  customElements.define("skeleton-box", ke),
  customElements.define("social-share", Xi, { extends: "a" }),
  customElements.define("cycle-classes", rs),
  customElements.define("drop-down", as),
  customElements.define("con-fetti", ls),
  customElements.define("premium-player", cs),
  customElements.define("loader-overlay", ds),
  customElements.define("theme-switcher", hs),
  customElements.define("podcast-vote", ps),
  Q("site-notifications", function () {
    const [e, t] = v(1),
      [n, i] = D(Ti),
      [s, o] = v(window.grafikart.NOTIFICATION),
      [r, a] = v(!_i),
      l = (function (e, t) {
        return e.filter(({ createdAt: e }) => t < Date.parse(e)).length;
      })(n, s);
    return (
      H(l),
      (Ti = n),
      k(async () => {
        Ee() &&
          !1 === _i &&
          (await (async function () {
            const e = await h("/api/notifications?count=15");
            e.reverse(),
              e.forEach((e) => Ii({ type: "notification", data: e }));
          })(),
          a(!1),
          (_i = !0));
      }, []),
      g(() => Oi("notification", i), [i]),
      g(
        () =>
          Oi("markAsRead", () => {
            o(new Date());
          }),
        []
      ),
      Ee()
        ? u(
            E,
            null,
            u(
              "button",
              {
                onClick: (e) => {
                  e.preventDefault(),
                    t(0),
                    l > 0 &&
                      (o(new Date()),
                      h("/api/notifications/read", { method: "post" }).catch(
                        console.error
                      ));
                },
                "aria-label": "Voir les notifications",
              },
              u(Ce, { name: "bell" })
            ),
            u(Fi, { count: l }),
            u(
              Ai,
              { className: "notifications", show: 0 === e },
              u($i, {
                loading: r,
                onClickOutside: () => {
                  t(1);
                },
                notifications: n,
                notificationReadAt: s,
              })
            )
          )
        : null
    );
  }),
  Q("contact-form", function () {
    const [e, t] = v(!1);
    return e
      ? u(
          ji,
          null,
          "Votre mail a bien été envoyé, vous recevrez une réponse dans les plus bref délais."
        )
      : u(
          V,
          {
            action: "/api/contact",
            onSuccess: () => t(!0),
            className: "grid2",
          },
          u(q, { name: "name", required: !0 }, "Votre nom"),
          u(q, { name: "email", type: "email", required: !0 }, "Votre email"),
          u(
            q,
            {
              name: "content",
              type: "textarea",
              required: !0,
              wrapperClass: "full",
            },
            "Votre message"
          ),
          u("div", { className: "full" }, u(N, null, "Envoyer"))
        );
  }),
  Q(
    "comments-area",
    function ({ target: e, parent: t }) {
      e = parseInt(e, 10);
      const n = m(null),
        [i, s] = v({ editing: null, comments: null, focus: null, reply: null }),
        o = i.comments ? i.comments.length : null,
        r = y(t),
        c = b(
          () =>
            null === i.comments
              ? null
              : i.comments
                  .filter((e) => 0 === e.parent)
                  .sort((e, t) => t.createdAt - e.createdAt),
          [i.comments]
        ),
        d = w((e) => {
          s((t) => l(a({}, t), { editing: t.editing === e.id ? null : e.id }));
        }, []),
        p = w(async (e, t) => {
          const n = await (async function (e, t) {
            return h(`/api/comments/${e}`, {
              method: "PUT",
              body: JSON.stringify({ content: t }),
            });
          })(e.id, t);
          s((t) =>
            l(a({}, t), {
              editing: null,
              comments: t.comments.map((t) => (t === e ? n : t)),
            })
          );
        }, []),
        f = w(async (e) => {
          await (async function (e) {
            return h(`/api/comments/${e}`, { method: "DELETE" });
          })(e.id),
            s((t) =>
              l(a({}, t), { comments: t.comments.filter((t) => t !== e) })
            );
        }, []),
        A = w((e) => {
          s((t) => l(a({}, t), { reply: e.parent || e.id }));
        }, []),
        C = w(() => {
          s((e) => l(a({}, e), { reply: null }));
        }, []),
        L = w(
          async (t, n) => {
            t = l(a({}, t), { target: e, parent: n });
            const i = await (async function (e) {
              return h("/api/comments", { method: "POST", body: e });
            })(t);
            s((e) =>
              l(a({}, e), {
                focus: i.id,
                reply: null,
                comments: [...e.comments, i],
              })
            );
          },
          [e]
        );
      return (
        k(async () => {
          if (window.location.hash.startsWith("#c")) {
            const t = await Le(e);
            s((e) =>
              l(a({}, e), {
                comments: t,
                focus: window.location.hash.replace("#c", ""),
              })
            );
          }
        }, [n]),
        k(async () => {
          if (r) {
            const t = await Le(e);
            s((e) => l(a({}, e), { comments: t }));
          }
        }, [e, r]),
        g(() => {
          i.focus &&
            c &&
            (x(document.getElementById(`c${i.focus}`)),
            s((e) => l(a({}, e), { focus: null })));
        }, [i.focus, c]),
        u(
          "div",
          { className: "comment-area", ref: n },
          u(
            "div",
            { className: "comments__title" },
            null === o
              ? u("skeleton-box", { text: "3 Commentaires" })
              : u(E, null, o, " commentaire", o > 1 ? "s" : "")
          ),
          u(vn, { onSubmit: L }),
          u("hr", null),
          u(
            "div",
            { className: "comment-list" },
            c
              ? c.map((e) =>
                  u(
                    fn,
                    {
                      key: e.id,
                      comment: e,
                      editing: i.editing === e.id,
                      onEdit: d,
                      onUpdate: p,
                      onDelete: f,
                      onReply: A,
                    },
                    (function (e) {
                      return i.comments.filter((t) => t.parent === e.id);
                    })(e).map((e) =>
                      u(fn, {
                        key: e.id,
                        comment: e,
                        editing: i.editing === e.id,
                        onEdit: d,
                        onUpdate: p,
                        onDelete: f,
                        onReply: A,
                      })
                    ),
                    i.reply === e.id &&
                      u(vn, { onSubmit: L, parent: e.id, onCancel: C })
                  )
                )
              : u(E, null, u(gn, null), u(gn, null), u(gn, null))
          )
        )
      );
    },
    ["target"]
  ),
  Q(
    "delete-account",
    function ({ url: e, csrf: t, days: n }) {
      const [i, s] = B(!1);
      return u(
        E,
        null,
        u(
          X,
          { className: "btn btn-danger", onClick: s },
          u(Ce, { name: "trash" }),
          "Supprimer mon compte"
        ),
        i &&
          u(
            Z,
            { padding: 5 },
            u(
              V,
              {
                action: e,
                method: "DELETE",
                onSuccess: async ({ message: e }) => {
                  s(), await I("/"), U(e, "success", null);
                },
                data: { csrf: t },
                floatingAlert: !0,
              },
              u(
                z,
                { gap: "3" },
                u("h1", { class: "h1" }, "Confirmer la suppression"),
                u(
                  "p",
                  { class: "small text-muted" },
                  "Vous êtes sur le point de supprimer votre compte Grafikart.",
                  u("br", null),
                  "Pour confirmer cette demande merci de rentrer votre mot de passe. Le compte sera automatiquement supprimé au bout de ",
                  n,
                  " jours"
                ),
                u(q, {
                  type: "password",
                  name: "password",
                  placeholder: "Entrez votre mot de passer pour confirmer",
                }),
                u(
                  J,
                  { class: "btn btn-block btn-danger mla" },
                  "Confirmer la suppression"
                )
              )
            )
          )
      );
    },
    ["url", "csrf"]
  ),
  Q(
    "premium-button",
    function ({
      children: e,
      plan: t,
      price: n,
      duration: i,
      stripeKey: s,
      paypalId: o,
    }) {
      const [r, a] = B(!1),
        l = `Compte premium ${i} mois`;
      return Ee()
        ? !1 === r
          ? u(C, { onClick: a }, e)
          : u(
              Ai,
              { show: !0 },
              u(ts, {
                plan: t,
                price: n,
                description: l,
                stripeKey: s,
                paypalId: o,
              })
            )
        : u(
            "a",
            {
              href: "/connexion?redirect=/premium",
              class: "btn-primary btn-block",
            },
            e
          );
    },
    ["plan", "children"]
  ),
  Q(
    "badge-unlock",
    function ({ name: e, description: t, theme: n, image: i }) {
      return u(
        Z,
        { class: "badge-modal" },
        u(
          "div",
          { class: `badge-modal_sprite badge-modal_sprite-${n}` },
          u("div", { class: "badge-modal_sprite1" }),
          u("div", { class: "badge-modal_sprite2" }),
          u("div", { class: "badge-modal_sprite3" }),
          u("img", { alt: "Gamer", class: "badge-modal_icon", src: i })
        ),
        u(
          "div",
          { class: "h2 text-center mt3 mb2", style: { fontWeight: "normal" } },
          "Vous venez de débloquer le badge ",
          u("span", { class: "bold" }, e),
          " !"
        ),
        u("hr", { class: "my4" }),
        u("div", { class: "text-muted text-center text-big mb3" }, '"', t, '"')
      );
    },
    ["name", "description"]
  ),
  Q("search-button", function () {
    const [e, t] = B(!1);
    return (
      g(() => {
        const e = (e) => {
          ["k", " "].includes(e.key) &&
            !0 === e.ctrlKey &&
            (e.preventDefault(), t());
        };
        return (
          window.addEventListener("keydown", e),
          () => window.removeEventListener("keydown", e)
        );
      }, [t]),
      u(
        E,
        null,
        u(
          "button",
          { onClick: t, "aria-label": "Rechercher" },
          u(Ce, { name: "search" })
        ),
        e && u(os, { onClose: t })
      )
    );
  }),
  Q("search-input", ss),
  Q(
    "mark-as-watched",
    function ({ contentId: e }) {
      const {
        loading: t,
        done: n,
        fetch: i,
      } = K(`/api/progress/${e}/1000`, { method: "post" });
      return (
        g(() => {
          n && U("Le tutoriel a bien été marqué comme vu");
        }, [n]),
        !Ee() || n
          ? null
          : u(
              L,
              { loading: t, class: "btn-secondary", onClick: () => i() },
              u(Ce, { name: "eye" }),
              "Marquer comme vu"
            )
      );
    },
    ["contentId"]
  ),
  customElements.define("input-switch", xe, { extends: "input" }),
  customElements.define("input-choices", ci, { extends: "input" }),
  customElements.define("select-choices", di, { extends: "select" }),
  customElements.define("markdown-editor", yi, { extends: "textarea" }),
  customElements.define("auto-scroll", wi, { extends: "div" }),
  customElements.define("auto-submit", Ei, { extends: "form" });
const ms = new IntersectionObserver(
  function (e, t) {
    e.forEach((e) => {
      e.intersectionRatio > 0.02 &&
        (e.target.classList.add("in"),
        e.target.dataset.delay &&
          (e.target.style.transitionDelay = `.${e.target.dataset.delay}s`),
        t.unobserve(e.target));
    });
  },
  { root: null, rootMargin: "0px", threshold: 0.02 }
);
document.addEventListener("turbolinks:load", () => {
  document.querySelectorAll(".fade").forEach((e) => {
    ms.observe(e);
  });
}),
  document.addEventListener("turbolinks:before-render", () => {
    ms.takeRecords();
  });
const gs = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ],
  fs = [];
let vs,
  ys = !1;
window.nessie = () =>
  Ee()
    ? (h("/api/badges/lochness/unlock", { method: "POST" })
        .then(() => {
          console.log(
            "%c                        _   _       _a_a      \n            _   _     _{.`=`.}_    {/ ''\\_    \n      _    {.`'`.}   {.'  _  '.}  {|  ._oo)   \n     { \\  {/ .-. \\} {/  .' '.  \\} {/  |       \n~^~^~`~^~`~^~`~^~`~^~^~`^~^~`^~^~^~^~^~^~`^~~`",
            "color: #FFF; background-color: #2234ae;\nbackground-image: linear-gradient(315deg, #2234ae 0%, #191714 74%);"
          );
        })
        .catch((e) => {
          e instanceof ee &&
            (e.status === le
              ? console.warn("Vous avez déjà trouvé Nessie :(")
              : e.status === ce &&
                console.warn(
                  "Vous n'avez pas l'autorisation de débloquer ce badge :("
                ));
        }),
      "")
    : (console.warn("Vous devez être connecté pour trouver Nessie :("), "");
let bs = document.querySelector(".header"),
  ws = 0,
  ks = 0,
  xs = !1;
let Es = bs ? bs.offsetHeight : 0;
document.addEventListener("turbolinks:load", () => {
  (bs = document.querySelector(".header")), bs && (Es = bs.offsetHeight);
});
let As = 2;
function Cs(e) {
  e !== As &&
    (1 === e
      ? bs.classList.add("is-hidden")
      : 0 === e
      ? (bs.classList.remove("is-hidden"), bs.classList.add("is-fixed"))
      : 2 === e &&
        (bs.classList.remove("is-hidden"), bs.classList.remove("is-fixed")),
    (As = e));
}
const Ls = function () {
  bs &&
    ((ws = document.documentElement.scrollTop),
    ws > bs.offsetHeight
      ? ws - ks > 20 && ws > Es
        ? Cs(1)
        : ks - ws > 20 && Cs(0)
      : Cs(2),
    (ks = ws),
    (xs = !1));
};
var Ss = !1;
if ("undefined" != typeof window) {
  var Os = {
    get passive() {
      Ss = !0;
    },
  };
  window.addEventListener("testPassive", null, Os),
    window.removeEventListener("testPassive", null, Os);
}
var Is =
    "undefined" != typeof window &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      ("MacIntel" === window.navigator.platform &&
        window.navigator.maxTouchPoints > 1)),
  Ts = [],
  _s = !1,
  Fs = -1,
  $s = void 0,
  Ms = void 0,
  Ps = function (e) {
    return Ts.some(function (t) {
      return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
    });
  },
  Ds = function (e) {
    var t = e || window.event;
    return (
      !!Ps(t.target) ||
      t.touches.length > 1 ||
      (t.preventDefault && t.preventDefault(), !1)
    );
  },
  Hs = function () {
    void 0 !== Ms && ((document.body.style.paddingRight = Ms), (Ms = void 0)),
      void 0 !== $s && ((document.body.style.overflow = $s), ($s = void 0));
  },
  Rs = function (e, t) {
    if (e) {
      if (
        !Ts.some(function (t) {
          return t.targetElement === e;
        })
      ) {
        var n = { targetElement: e, options: t || {} };
        (Ts = [].concat(
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(Ts),
          [n]
        )),
          Is
            ? ((e.ontouchstart = function (e) {
                1 === e.targetTouches.length &&
                  (Fs = e.targetTouches[0].clientY);
              }),
              (e.ontouchmove = function (t) {
                1 === t.targetTouches.length &&
                  (function (e, t) {
                    var n = e.targetTouches[0].clientY - Fs;
                    !Ps(e.target) &&
                      ((t && 0 === t.scrollTop && n > 0) ||
                      ((function (e) {
                        return (
                          !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
                        );
                      })(t) &&
                        n < 0)
                        ? Ds(e)
                        : e.stopPropagation());
                  })(t, e);
              }),
              _s ||
                (document.addEventListener(
                  "touchmove",
                  Ds,
                  Ss ? { passive: !1 } : void 0
                ),
                (_s = !0)))
            : (function (e) {
                if (void 0 === Ms) {
                  var t = !!e && !0 === e.reserveScrollBarGap,
                    n =
                      window.innerWidth - document.documentElement.clientWidth;
                  t &&
                    n > 0 &&
                    ((Ms = document.body.style.paddingRight),
                    (document.body.style.paddingRight = n + "px"));
                }
                void 0 === $s &&
                  (($s = document.body.style.overflow),
                  (document.body.style.overflow = "hidden"));
              })(t);
      }
    } else
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
  };
!0 !== ys &&
  (window.addEventListener("keydown", async function (e) {
    for (fs.push(e.key); fs.length > gs.length; ) fs.shift();
    fs.toString().indexOf(gs) >= 0 &&
      (await h("/api/badges/gamer/unlock", { method: "POST" }).catch((e) => {
        e instanceof ee &&
          e.status === le &&
          U("Vous avez déjà débloqué ce badge", "error");
      }));
  }),
  (ys = !0)),
  vs && vs(),
  (vs = Oi("badge", (e) => {
    P() &&
      document.body.append(
        _(
          `<badge-unlock name="${e.name}" description="${e.description}" image="${e.image}" theme="${e.theme}"></badge-unlock>`
        )
      );
  })),
  (function () {
    const e = (function (e, t) {
      let n, i;
      return function () {
        let s = this,
          o = +new Date(),
          r = arguments;
        n && o < n + t
          ? (clearTimeout(i),
            (i = setTimeout(function () {
              (n = o), e.apply(s, r);
            }, t)))
          : ((n = o), e.apply(s, r));
      };
    })(() => {
      xs || ((xs = !0), window.requestAnimationFrame(Ls));
    }, 100);
    window.addEventListener("scroll", e);
  })(),
  document.addEventListener("DOMContentLoaded", () => {
    let e = window.innerHeight;
    document.documentElement.style.setProperty(
      "--vh",
      0.01 * window.innerHeight + "px"
    ),
      document.documentElement.style.setProperty(
        "--windowHeight",
        `${window.innerHeight}px`
      ),
      window.addEventListener("resize", () => {
        e !== window.innerHeight &&
          ((e = window.innerHeight),
          document.documentElement.style.setProperty(
            "--vh",
            0.01 * window.innerHeight + "px"
          ),
          document.documentElement.style.setProperty(
            "--windowHeight",
            `${window.innerHeight}px`
          ));
      });
  }),
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
    ue("select[multiple]:not([is])").forEach(
      (e) =>
        new li(e, {
          plugins: { remove_button: { title: "Supprimer cet élément" } },
          maxItems: e.dataset.limit || null,
        })
    ),
      ue("form.js-preventMultiSubmit").forEach((e) => {
        e.addEventListener("submit", () => {
          const t = e.querySelector('button[type="submit"]');
          t && ((t.disabled = !0), (t.innerText = "Chargement..."));
        });
      });
    const s = de("#podcast-new");
    s &&
      s.addEventListener("click", async (e) => {
        e.preventDefault(), s.remove();
        const t = de("#podcast-form");
        await j(t, 200), t.querySelector("input").focus();
      });
  }),
  document.addEventListener("turbolinks:click", (e) => {
    const t = e.target;
    t.hash &&
      t.origin === window.location.origin &&
      t.pathname === window.location.pathname &&
      (he.controller.pushHistoryWithLocationAndRestorationIdentifier(
        e.data.url,
        he.uuid()
      ),
      e.preventDefault(),
      window.dispatchEvent(new Event("hashchange")));
  }),
  (window.Grafikart = {
    showHistory: function (e) {
      document.querySelectorAll("[data-history]").forEach((t) => {
        const n = e[t.dataset.history];
        void 0 !== n &&
          ("PLAY-BUTTON" === t.tagName
            ? t.setAttribute("progress", (100 * n).toString())
            : "PROGRESS-TRACKER" === t.tagName
            ? t.setAttribute("progress", n.toString())
            : 1 === n
            ? t.classList.add("is-completed")
            : t.setAttribute("style", `--progress:${n}`));
      });
    },
  }),
  he.start();
