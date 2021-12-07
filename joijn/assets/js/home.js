/*! For license information please see home.js.LICENSE.txt */ ! function(t) {
    var n = {};

    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = t, e.c = n, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: i
        })
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (e.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var o in t) e.d(i, o, function(n) {
                return t[n]
            }.bind(null, o));
        return i
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "/", e(e.s = 0)
}({
    0: function(t, n, e) {
        e("ANKz"), e("buao"), e("pyCd"), t.exports = e("qw8q")
    },
    ANKz: function(t, n, e) {
        "use strict";
        e.r(n);
        const i = {
            CREATED: 1,
            MOUNTED: 2,
            IDLE: 3,
            MOVING: 4,
            DESTROYED: 5
        };

        function o(t) {
            t.length = 0
        }

        function r(t) {
            return !l(t) && "object" == typeof t
        }

        function s(t) {
            return Array.isArray(t)
        }

        function c(t) {
            return "string" == typeof t
        }

        function u(t) {
            return void 0 === t
        }

        function l(t) {
            return null === t
        }

        function a(t) {
            return t instanceof HTMLElement
        }

        function d(t) {
            return s(t) ? t : [t]
        }

        function f(t, n) {
            d(t).forEach(n)
        }

        function p(t, n) {
            return t.indexOf(n) > -1
        }

        function h(t, n) {
            return t.push(...d(n)), t
        }
        const g = Array.prototype;

        function m(t, n, e) {
            return g.slice.call(t, n, e)
        }

        function y(t, n, e) {
            t && f(n, n => {
                n && t.classList[e ? "add" : "remove"](n)
            })
        }

        function v(t, n) {
            y(t, c(n) ? n.split(" ") : n, !0)
        }

        function b(t, n) {
            f(n, t.appendChild.bind(t))
        }

        function _(t, n) {
            f(t, t => {
                const e = n.parentNode;
                e && e.insertBefore(t, n)
            })
        }

        function w(t, n) {
            return (t.msMatchesSelector || t.matches).call(t, n)
        }

        function x(t, n) {
            return t ? m(t.children).filter(t => w(t, n)) : []
        }

        function E(t, n) {
            return n ? x(t, n)[0] : t.firstElementChild
        }

        function S(t, n, e) {
            if (t) {
                let i = Object.keys(t);
                i = e ? i.reverse() : i;
                for (let e = 0; e < i.length; e++) {
                    const o = i[e];
                    if ("__proto__" !== o && !1 === n(t[o], o)) break
                }
            }
            return t
        }

        function k(t) {
            return m(arguments, 1).forEach(n => {
                S(n, (e, i) => {
                    t[i] = n[i]
                })
            }), t
        }

        function P(t, n) {
            return S(n, (n, e) => {
                s(n) ? t[e] = n.slice() : r(n) ? t[e] = P(r(t[e]) ? t[e] : {}, n) : t[e] = n
            }), t
        }

        function z(t, n) {
            t && f(n, n => {
                t.removeAttribute(n)
            })
        }

        function C(t, n, e) {
            r(n) ? S(n, (n, e) => {
                C(t, e, n)
            }) : l(e) ? z(t, n) : t.setAttribute(n, String(e))
        }

        function L(t, n, e) {
            const i = document.createElement(t);
            return n && (c(n) ? v(i, n) : C(i, n)), e && b(e, i), i
        }

        function A(t, n, e) {
            if (u(e)) return getComputedStyle(t)[n];
            if (!l(e)) {
                const {
                    style: i
                } = t;
                e = "" + e, i[n] !== e && (i[n] = e)
            }
        }

        function $(t, n) {
            A(t, "display", n)
        }

        function D(t, n) {
            return t.getAttribute(n)
        }

        function M(t, n) {
            return t && t.classList.contains(n)
        }

        function O(t) {
            return t.getBoundingClientRect()
        }

        function T(t) {
            f(t, t => {
                t && t.parentNode && t.parentNode.removeChild(t)
            })
        }

        function N(t) {
            return E((new DOMParser).parseFromString(t, "text/html").body)
        }

        function I(t, n) {
            t.preventDefault(), n && (t.stopPropagation(), t.stopImmediatePropagation())
        }

        function j(t, n) {
            return t && t.querySelector(n)
        }

        function R(t, n) {
            return m(t.querySelectorAll(n))
        }

        function F(t, n) {
            y(t, n, !1)
        }

        function B(t) {
            return c(t) ? t : t ? t + "px" : ""
        }

        function W(t, n = "") {
            if (!t) throw new Error("[splide] " + n)
        }

        function X(t) {
            setTimeout(t)
        }
        const q = () => {};

        function H(t) {
            return requestAnimationFrame(t)
        }
        const {
            min: G,
            max: Y,
            floor: K,
            ceil: U,
            abs: Q
        } = Math;

        function J(t, n, e, i) {
            const o = G(n, e),
                r = Y(n, e);
            return i ? o < t && t < r : o <= t && t <= r
        }

        function V(t, n, e) {
            const i = G(n, e),
                o = Y(n, e);
            return G(Y(i, t), o)
        }

        function Z(t) {
            return +(t > 0) - +(t < 0)
        }

        function tt(t, n) {
            return f(n, n => {
                t = t.replace("%s", "" + n)
            }), t
        }

        function nt(t) {
            return t < 10 ? "0" + t : "" + t
        }
        const et = {};

        function it(t) {
            return `${t}${nt(et[t]=(et[t]||0)+1)}`
        }

        function ot(t) {
            const {
                event: n
            } = t, e = {};
            let i = [];

            function o(t, n, e) {
                r(t, n, (t, n) => {
                    i = i.filter(i => !!(i[0] !== t || i[1] !== n || e && i[2] !== e) || (t.removeEventListener(n, i[2], i[3]), !1))
                })
            }

            function r(t, n, e) {
                f(t, t => {
                    t && n.split(" ").forEach(e.bind(null, t))
                })
            }

            function s() {
                i = i.filter(t => o(t[0], t[1])), n.offBy(e)
            }
            return n.on("destroy", s, e), {
                on: function(t, i, o) {
                    n.on(t, i, e, o)
                },
                off: function(t) {
                    n.off(t, e)
                },
                emit: n.emit,
                bind: function(t, n, e, o) {
                    r(t, n, (t, n) => {
                        i.push([t, n, e, o]), t.addEventListener(n, e, o)
                    })
                },
                unbind: o,
                destroy: s
            }
        }

        function rt(t, n, e, i) {
            const {
                now: o
            } = Date;
            let r, s, c = 0,
                u = !0,
                l = 0;

            function a() {
                if (!u) {
                    const s = o() - r;
                    if (s >= t ? (c = 1, r = o()) : c = s / t, e && e(c), 1 === c && (n(), i && ++l >= i)) return d();
                    H(a)
                }
            }

            function d() {
                u = !0
            }

            function f() {
                cancelAnimationFrame(s), c = 0, s = 0, u = !0
            }
            return {
                start: function(n) {
                    !n && f(), r = o() - (n ? c * t : 0), u = !1, H(a)
                },
                rewind: function() {
                    r = o(), c = 0, e && e(c)
                },
                pause: d,
                cancel: f,
                isPaused: function() {
                    return u
                }
            }
        }

        function st(t, n) {
            let e;
            return function() {
                e || (e = rt(n || 0, () => {
                    t.apply(this, arguments), e = null
                }, null, 1), e.start())
            }
        }
        const ct = {
            marginRight: ["marginBottom", "marginLeft"],
            autoWidth: ["autoHeight"],
            fixedWidth: ["fixedHeight"],
            paddingLeft: ["paddingTop", "paddingRight"],
            paddingRight: ["paddingBottom", "paddingLeft"],
            width: ["height"],
            left: ["top", "right"],
            right: ["bottom", "left"],
            x: ["y"],
            X: ["Y"],
            Y: ["X"],
            ArrowLeft: ["ArrowUp", "ArrowRight"],
            ArrowRight: ["ArrowDown", "ArrowLeft"]
        };

        function ut(t, n, e) {
            return {
                resolve: function(t, n) {
                    const {
                        direction: i
                    } = e;
                    return ct[t]["rtl" !== i || n ? "ttb" === i ? 0 : -1 : 1] || t
                },
                orient: function(t) {
                    return t * ("rtl" === e.direction ? 1 : -1)
                }
            }
        }
        const lt = "splide",
            at = "is-active",
            dt = [at, "is-visible", "is-prev", "is-next", "is-loading"],
            ft = {
                slide: "splide__slide",
                clone: "splide__slide--clone",
                arrows: "splide__arrows",
                arrow: "splide__arrow",
                prev: "splide__arrow--prev",
                next: "splide__arrow--next",
                pagination: "splide__pagination",
                page: "splide__pagination__page",
                spinner: "splide__spinner"
            };
        const pt = ["role", "aria-controls", "aria-current", "aria-label", "aria-hidden", "aria-orientation", "tabindex", "disabled"],
            ht = "loop";

        function gt(t, n, e, i) {
            const {
                on: o,
                emit: r,
                bind: s,
                destroy: c
            } = ot(t), {
                Components: u,
                root: l,
                options: a
            } = t, {
                isNavigation: d,
                updateOnMove: f
            } = a, {
                resolve: p
            } = u.Direction, h = D(i, "style"), g = e > -1, m = E(i, ".splide__slide__container"), v = a.focusableNodes && R(i, a.focusableNodes);
            let b;

            function _() {
                const o = g ? e : n,
                    r = tt(a.i18n.slideX, o + 1),
                    s = t.splides.map(t => t.splide.root.id).join(" ");
                C(i, "aria-label", r), C(i, "aria-controls", s), C(i, "role", "menuitem"), S.call(this, P())
            }

            function w(t, e, i) {
                b || (x.call(this), i === n && S.call(this, !0))
            }

            function x() {
                if (!b) {
                    const {
                        index: e
                    } = t;
                    S.call(this, P()), k.call(this, function() {
                        if (t.is("fade")) return P();
                        const n = O(u.Elements.track),
                            e = O(i),
                            o = p("left"),
                            r = p("right");
                        return K(n[o]) <= U(e[o]) && K(e[r]) <= U(n[r])
                    }()), y(i, "is-prev", n === e - 1), y(i, "is-next", n === e + 1)
                }
            }

            function S(t) {
                t !== M(i, at) && (y(i, at, t), d && C(i, "aria-current", t || null), r(t ? "active" : "inactive", this))
            }

            function k(t) {
                const n = !t && !P();
                C(i, "aria-hidden", n || null), C(i, "tabindex", !n && a.slideFocus ? 0 : null), v && v.forEach(t => {
                    C(t, "tabindex", n ? -1 : null)
                }), t !== M(i, "is-visible") && (y(i, "is-visible", t), r(t ? "visible" : "hidden", this))
            }

            function P() {
                return t.index === n
            }
            return {
                index: n,
                slideIndex: e,
                slide: i,
                container: m,
                isClone: g,
                mount: function() {
                    g || (i.id = `${l.id}-slide${nt(n+1)}`), s(i, "click keydown", t => {
                        r("click" === t.type ? "click" : "slide:keydown", this, t)
                    }), o(["refresh", "repositioned", "moved", "scrolled"], x.bind(this)), o("navigation:mounted", _.bind(this)), f && o("move", w.bind(this))
                },
                destroy: function() {
                    b = !0, c(), F(i, dt), z(i, pt), C(i, "style", h)
                },
                style: function(t, n, e) {
                    A(e && m || i, t, n)
                },
                isWithin: function(e, i) {
                    let o = Q(e - n);
                    return g || !a.rewind && !t.is(ht) || (o = G(o, t.length - o)), o <= i
                }
            }
        }
        const mt = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
        const yt = ["Left", "Right", "Up", "Down"];
        const vt = [" ", "Enter", "Spacebar"];
        var bt = Object.freeze({
            __proto__: null,
            Options: function(t, n, e) {
                const i = st(u);
                let o, r, s;

                function c(t) {
                    t && removeEventListener("resize", i)
                }

                function u() {
                    const n = (i = t => t[1].matches, m(r).filter(i)[0] || []);
                    var i;
                    n[0] !== s && function(n) {
                        const i = e.breakpoints[n] || o;
                        i.destroy ? (t.options = o, t.destroy("completely" === i.destroy)) : (t.state.is(5) && (c(!0), t.mount()), t.options = i)
                    }(s = n[0])
                }
                return {
                    setup: function() {
                        try {
                            P(e, JSON.parse(D(t.root, "data-splide")))
                        } catch (t) {
                            W(!1, t.message)
                        }
                        o = P({}, e);
                        const {
                            breakpoints: n
                        } = e;
                        if (n) {
                            const t = "min" === e.mediaQuery;
                            r = Object.keys(n).sort((n, e) => t ? +e - +n : +n - +e).map(n => [n, matchMedia(`(${t?"min":"max"}-width:${n}px)`)]), u()
                        }
                    },
                    mount: function() {
                        r && addEventListener("resize", i)
                    },
                    destroy: c
                }
            },
            Direction: ut,
            Elements: function(t, n, e) {
                const {
                    on: i
                } = ot(t), {
                    root: r
                } = t, s = {}, c = [];
                let u, l, a, d;

                function f() {
                    ! function() {
                        l = E(r, ".splide__slider"), a = j(r, ".splide__track"), d = E(a, ".splide__list"), W(a && d, "A track/list element is missing."), h(c, x(d, ".splide__slide:not(.splide__slide--clone)"));
                        const t = y(".splide__autoplay"),
                            n = y(".splide__arrows");
                        k(s, {
                            root: r,
                            slider: l,
                            track: a,
                            list: d,
                            slides: c,
                            arrows: n,
                            autoplay: t,
                            prev: j(n, ".splide__arrow--prev"),
                            next: j(n, ".splide__arrow--next"),
                            bar: j(y(".splide__progress"), ".splide__progress__bar"),
                            play: j(t, ".splide__play"),
                            pause: j(t, ".splide__pause")
                        })
                    }(),
                    function() {
                        const t = r.id || it("splide");
                        r.id = t, a.id = a.id || t + "-track", d.id = d.id || t + "-list"
                    }(), v(r, u = b())
                }

                function p() {
                    [r, a, d].forEach(t => {
                        z(t, "style")
                    }), o(c), F(r, u)
                }

                function g() {
                    p(), f()
                }

                function m() {
                    F(r, u), v(r, u = b())
                }

                function y(t) {
                    return E(r, t) || E(l, t)
                }

                function b() {
                    return [`${lt}--${e.type}`, `${lt}--${e.direction}`, e.drag && lt + "--draggable", e.isNavigation && lt + "--nav", at]
                }
                return k(s, {
                    setup: f,
                    mount: function() {
                        i("refresh", g, 8), i("updated", m)
                    },
                    destroy: p
                })
            },
            Slides: function(t, n, e) {
                const {
                    on: i,
                    emit: r,
                    bind: s
                } = ot(t), {
                    slides: u,
                    list: l
                } = n.Elements, h = [];

                function g() {
                    u.forEach((t, n) => {
                        x(t, n, -1)
                    })
                }

                function m() {
                    S(t => {
                        t.destroy()
                    }), o(h)
                }

                function y() {
                    m(), g()
                }

                function x(n, e, i) {
                    const o = gt(t, e, i, n);
                    o.mount(), h.push(o)
                }

                function E(t) {
                    return t ? k(t => !t.isClone) : h
                }

                function S(t, n) {
                    E(n).forEach(t)
                }

                function k(t) {
                    return h.filter("function" == typeof t ? t : n => c(t) ? w(n.slide, t) : p(d(t), n.index))
                }
                return {
                    mount: function() {
                        g(), i("refresh", y), i(["mounted", "refresh"], () => {
                            h.sort((t, n) => t.index - n.index)
                        })
                    },
                    destroy: m,
                    register: x,
                    get: E,
                    getIn: function(t) {
                        const {
                            Controller: i
                        } = n, o = i.toIndex(t), r = i.hasFocus() ? 1 : e.perPage;
                        return k(t => J(t.index, o, o + r - 1))
                    },
                    getAt: function(t) {
                        return k(t)[0]
                    },
                    add: function(t, n) {
                        f(t, t => {
                            if (c(t) && (t = N(t)), a(t)) {
                                const i = u[n];
                                i ? _(t, i) : b(l, t), v(t, e.classes.slide),
                                    function(t, n) {
                                        const e = R(t, "img");
                                        let {
                                            length: i
                                        } = e;
                                        i ? e.forEach(t => {
                                            s(t, "load error", () => {
                                                --i || n()
                                            })
                                        }) : n()
                                    }(t, r.bind(null, "resize"))
                            }
                        }), r("refresh")
                    },
                    remove: function(t) {
                        T(k(t).map(t => t.slide)), r("refresh")
                    },
                    forEach: S,
                    filter: k,
                    style: function(t, n, e) {
                        S(i => {
                            i.style(t, n, e)
                        })
                    },
                    getLength: function(t) {
                        return t ? u.length : h.length
                    },
                    isEnough: function() {
                        return h.length > e.perPage
                    }
                }
            },
            Layout: function(t, n, e) {
                const {
                    on: i,
                    bind: o,
                    emit: s
                } = ot(t), {
                    Slides: c
                } = n, {
                    resolve: u
                } = n.Direction, {
                    root: l,
                    track: a,
                    list: d
                } = n.Elements, {
                    getAt: f
                } = c;
                let p, h;

                function g() {
                    h = null, p = "ttb" === e.direction, A(l, "maxWidth", B(e.width)), A(a, u("paddingLeft"), y(!1)), A(a, u("paddingRight"), y(!0)), m()
                }

                function m() {
                    const t = O(l);
                    h && h.width === t.width && h.height === t.height || (A(a, "height", function() {
                        let t = "";
                        p && (t = v(), W(t, "height or heightRatio is missing."), t = `calc(${t} - ${y(!1)} - ${y(!0)})`);
                        return t
                    }()), c.style(u("marginRight"), B(e.gap)), c.style("width", (e.autoWidth ? "" : B(e.fixedWidth) || (p ? "" : b())) || null), c.style("height", B(e.fixedHeight) || (p ? e.autoHeight ? "" : b() : v()) || null, !0), h = t, s("resized"))
                }

                function y(t) {
                    const {
                        padding: n
                    } = e, i = u(t ? "right" : "left");
                    return n && B(n[i] || (r(n) ? 0 : n)) || "0px"
                }

                function v() {
                    return B(e.height || O(d).width * e.heightRatio)
                }

                function b() {
                    const t = B(e.gap);
                    return `calc((100%${t&&" + "+t})/${e.perPage||1}${t&&" - "+t})`
                }

                function _(t, n) {
                    const e = f(t);
                    if (e) {
                        const t = O(e.slide)[u("right")],
                            i = O(d)[u("left")];
                        return Q(t - i) + (n ? 0 : w())
                    }
                    return 0
                }

                function w() {
                    const t = f(0);
                    return t && parseFloat(A(t.slide, u("marginRight"))) || 0
                }
                return {
                    mount: function() {
                        g(), o(window, "resize load", st(s.bind(this, "resize"))), i(["updated", "refresh"], g), i("resize", m)
                    },
                    listSize: function() {
                        return O(d)[u("width")]
                    },
                    slideSize: function(t, n) {
                        const e = f(t || 0);
                        return e ? O(e.slide)[u("width")] + (n ? 0 : w()) : 0
                    },
                    sliderSize: function() {
                        return _(t.length - 1, !0) - _(-1, !0)
                    },
                    totalSize: _,
                    getPadding: function(t) {
                        return parseFloat(A(a, u("padding" + (t ? "Right" : "Left")))) || 0
                    }
                }
            },
            Clones: function(t, n, e) {
                const {
                    on: i,
                    emit: r
                } = ot(t), {
                    Elements: s,
                    Slides: u
                } = n, {
                    resolve: l
                } = n.Direction, a = [];
                let d;

                function f() {
                    (d = y()) && (! function(n) {
                        const i = u.get().slice(),
                            {
                                length: o
                            } = i;
                        if (o) {
                            for (; i.length < n;) h(i, i);
                            h(i.slice(-n), i.slice(0, n)).forEach((r, c) => {
                                const l = c < n,
                                    d = function(n, i) {
                                        const o = n.cloneNode(!0);
                                        return v(o, e.classes.clone), o.id = `${t.root.id}-clone${nt(i+1)}`, o
                                    }(r.slide, c);
                                l ? _(d, i[0].slide) : b(s.list, d), h(a, d), u.register(d, c - n + (l ? 0 : o), r.index)
                            })
                        }
                    }(d), r("resize"))
                }

                function p() {
                    T(a), o(a)
                }

                function g() {
                    p(), f()
                }

                function m() {
                    d < y() && r("refresh")
                }

                function y() {
                    let {
                        clones: n
                    } = e;
                    if (t.is(ht)) {
                        if (!n) {
                            const i = function(t, n) {
                                if (c(n)) {
                                    const e = L("div", {
                                        style: `width: ${n}; position: absolute;`
                                    }, t);
                                    n = O(e).width, T(e)
                                }
                                return n
                            }(s.list, e[l("fixedWidth")]);
                            n = (i && U(O(s.track)[l("width")] / i) || e[l("autoWidth")] && t.length || e.perPage) * (e.drag ? (e.flickMaxPages || 1) + 1 : 2)
                        }
                    } else n = 0;
                    return n
                }
                return {
                    mount: function() {
                        f(), i("refresh", g), i(["updated", "resize"], m)
                    },
                    destroy: p
                }
            },
            Move: function(t, n, e) {
                const {
                    on: i,
                    emit: o
                } = ot(t), {
                    slideSize: r,
                    getPadding: s,
                    totalSize: c,
                    listSize: l,
                    sliderSize: a
                } = n.Layout, {
                    resolve: d,
                    orient: f
                } = n.Direction, {
                    list: p,
                    track: h
                } = n.Elements;
                let g;

                function m() {
                    E() || (n.Scroll.cancel(), y(t.index), o("repositioned"))
                }

                function y(t) {
                    v(_(t, !0))
                }

                function v(n, e) {
                    t.is("fade") || (p.style.transform = `translate${d("X")}(${e?n:function(n){if(t.is(ht)){const t=f(n-w()),e=S(!1,n)&&t<0,i=S(!0,n)&&t>0;(e||i)&&(n=b(n,i))}return n}(n)}px)`)
                }

                function b(t, n) {
                    const e = t - x(n),
                        i = a();
                    return t -= f(i * (U(Q(e) / i) || 1)) * (n ? 1 : -1)
                }

                function _(n, i) {
                    const o = f(c(n - 1) - function(t) {
                        const {
                            focus: n
                        } = e;
                        return "center" === n ? (l() - r(t, !0)) / 2 : +n * r(t) || 0
                    }(n));
                    return i ? function(n) {
                        e.trimSpace && t.is("slide") && (n = V(n, 0, f(a() - l())));
                        return n
                    }(o) : o
                }

                function w() {
                    const t = d("left");
                    return O(p)[t] - O(h)[t] + f(s(!1))
                }

                function x(t) {
                    return _(t ? n.Controller.getEnd() : 0, !!e.trimSpace)
                }

                function E() {
                    return t.state.is(4) && e.waitForTransition
                }

                function S(t, n) {
                    n = u(n) ? w() : n;
                    const e = !0 !== t && f(n) < f(x(!1)),
                        i = !1 !== t && f(n) > f(x(!0));
                    return e || i
                }
                return {
                    mount: function() {
                        g = n.Transition, i(["mounted", "resized", "updated", "refresh"], m)
                    },
                    destroy: function() {
                        z(p, "style")
                    },
                    move: function(i, r, s, c) {
                        if (!E()) {
                            const {
                                set: u
                            } = t.state, l = w();
                            i !== r && (g.cancel(), v(b(l, i > r), !0)), u(4), o("move", r, s, i), g.start(r, () => {
                                u(3), o("moved", r, s, i), "move" === e.trimSpace && i !== s && l === w() ? n.Controller.go(i > s ? ">" : "<", !1, c) : c && c()
                            })
                        }
                    },
                    jump: y,
                    translate: v,
                    shift: b,
                    cancel: function() {
                        v(w()), g.cancel()
                    },
                    toIndex: function(t) {
                        const e = n.Slides.get();
                        let i = 0,
                            o = 1 / 0;
                        for (let n = 0; n < e.length; n++) {
                            const r = e[n].index,
                                s = Q(_(r, !0) - t);
                            if (!(s <= o)) break;
                            o = s, i = r
                        }
                        return i
                    },
                    toPosition: _,
                    getPosition: w,
                    getLimit: x,
                    isBusy: E,
                    exceededLimit: S
                }
            },
            Controller: function(t, n, e) {
                const {
                    on: i
                } = ot(t), {
                    Move: o
                } = n, {
                    getPosition: r,
                    getLimit: s
                } = o, {
                    isEnough: l,
                    getLength: a
                } = n.Slides, d = t.is(ht), f = t.is("slide");
                let p, h, g, m = e.start || 0,
                    y = m;

                function v() {
                    p = a(!0), h = e.perMove, g = e.perPage, m = V(m, 0, p - 1)
                }

                function b(t, e, i, r, s) {
                    const c = e ? t : C(t);
                    n.Scroll.scroll(e || i ? o.toPosition(c, !0) : t, r, () => {
                        L(o.toIndex(o.getPosition())), s && s()
                    })
                }

                function _(t) {
                    return x(!1, t)
                }

                function w(t) {
                    return x(!0, t)
                }

                function x(t, n) {
                    const e = h || (A() ? 1 : g),
                        i = E(m + e * (t ? -1 : 1), m);
                    return -1 !== i || !f || (o = r(), c = s(!t), u = 1, Q(o - c) < u) ? n ? i : k(i) : t ? 0 : S();
                    var o, c, u
                }

                function E(t, n, i) {
                    if (l()) {
                        const o = S();
                        t < 0 || t > o ? t = J(0, t, n, !0) || J(o, n, t, !0) ? P(z(t)) : d ? h ? t : t < 0 ? -(p % g || g) : p : e.rewind ? t < 0 ? o : 0 : -1 : i || t === n || (t = h ? t : P(z(n) + (t < n ? -1 : 1)))
                    } else t = -1;
                    return t
                }

                function S() {
                    let t = p - g;
                    return (A() || d && h) && (t = p - 1), Y(t, 0)
                }

                function k(t) {
                    return d ? l() ? t % p + (t < 0 ? p : 0) : -1 : t
                }

                function P(t) {
                    return V(A() ? t : g * t, 0, S())
                }

                function z(t) {
                    return A() || (t = J(t, p - g, p - 1) ? p - 1 : t, t = K(t / g)), t
                }

                function C(t) {
                    const n = o.toIndex(t);
                    return f ? V(n, 0, S()) : n
                }

                function L(t) {
                    t !== m && (y = m, m = t)
                }

                function A() {
                    return !u(e.focus) || e.isNavigation
                }
                return {
                    mount: function() {
                        v(), i(["updated", "refresh"], v, 9)
                    },
                    go: function(t, n, i) {
                        const r = function(t) {
                            let n = m;
                            if (c(t)) {
                                const [, e, i] = t.match(/([+\-<>])(\d+)?/) || [];
                                "+" === e || "-" === e ? n = E(m + +`${e}${+i||1}`, m, !0) : ">" === e ? n = i ? P(+i) : _(!0) : "<" === e && (n = w(!0))
                            } else n = d ? t : V(t, 0, S());
                            return n
                        }(t);
                        if (e.useScroll) b(r, !0, !0, e.speed, i);
                        else {
                            const t = k(r);
                            t > -1 && !o.isBusy() && (n || t !== m) && (L(t), o.move(r, t, y, i))
                        }
                    },
                    scroll: b,
                    getNext: _,
                    getPrev: w,
                    getEnd: S,
                    setIndex: L,
                    getIndex: function(t) {
                        return t ? y : m
                    },
                    toIndex: P,
                    toPage: z,
                    toDest: C,
                    hasFocus: A
                }
            },
            Arrows: function(t, n, e) {
                const {
                    on: i,
                    bind: o,
                    emit: r
                } = ot(t), {
                    classes: s,
                    i18n: c
                } = e, {
                    Elements: u,
                    Controller: l
                } = n;
                let a, d = u.arrows,
                    f = u.prev,
                    p = u.next;
                const h = {};

                function g() {
                    if (e.arrows && (f && p || (d = L("div", s.arrows), f = m(!0), p = m(!1), a = !0, b(d, [f, p]), _(d, E("slider" === e.arrows && u.slider || t.root)))), f && p)
                        if (h.prev) $(d, !1 === e.arrows ? "none" : "");
                        else {
                            const {
                                id: t
                            } = u.track;
                            C(f, "aria-controls", t), C(p, "aria-controls", t), h.prev = f, h.next = p,
                                function() {
                                    const {
                                        go: t
                                    } = l;
                                    i(["mounted", "moved", "updated", "refresh", "scrolled"], y), o(p, "click", () => {
                                        t(">", !0)
                                    }), o(f, "click", () => {
                                        t("<", !0)
                                    })
                                }(), r("arrows:mounted", f, p)
                        }
                }

                function m(t) {
                    return N(`<button class="${s.arrow} ${t?s.prev:s.next}" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="${e.arrowPath||mt}" />`)
                }

                function y() {
                    const n = t.index,
                        e = l.getPrev(),
                        i = l.getNext(),
                        o = e > -1 && n < e ? c.last : c.prev,
                        s = i > -1 && n > i ? c.first : c.next;
                    f.disabled = e < 0, p.disabled = i < 0, C(f, "aria-label", o), C(p, "aria-label", s), r("arrows:updated", f, p, e, i)
                }
                return {
                    arrows: h,
                    mount: function() {
                        g(), i("updated", g)
                    },
                    destroy: function() {
                        a ? T(d) : (z(f, pt), z(p, pt))
                    }
                }
            },
            Autoplay: function(t, n, e) {
                const {
                    on: i,
                    bind: o,
                    emit: r
                } = ot(t), {
                    Elements: s
                } = n, c = rt(e.interval, t.go.bind(t, ">"), (function(t) {
                    const {
                        bar: n
                    } = s;
                    n && A(n, "width", 100 * t + "%");
                    r("autoplay:playing", t)
                })), {
                    isPaused: u
                } = c;
                let l, a, d;

                function f(t) {
                    const n = t ? "pause" : "play",
                        i = s[n];
                    i && (C(i, "aria-controls", s.track.id), C(i, "aria-label", e.i18n[n]), o(i, "click", t ? h : p))
                }

                function p() {
                    u() && n.Slides.isEnough() && (c.start(!e.resetProgress), a = l = d = !1, r("autoplay:play"))
                }

                function h(t = !0) {
                    u() || (c.pause(), r("autoplay:pause")), d = t
                }

                function g() {
                    d || (l || a ? h(!1) : p())
                }
                return {
                    mount: function() {
                        const {
                            autoplay: t
                        } = e;
                        t && (f(!0), f(!1), function() {
                            const {
                                root: t
                            } = s;
                            e.pauseOnHover && o(t, "mouseenter mouseleave", t => {
                                l = "mouseenter" === t.type, g()
                            });
                            e.pauseOnFocus && o(t, "focusin focusout", t => {
                                a = "focusin" === t.type, g()
                            });
                            i(["move", "scroll", "refresh"], c.rewind)
                        }(), "pause" !== t && p())
                    },
                    destroy: c.cancel,
                    play: p,
                    pause: h,
                    isPaused: u
                }
            },
            Cover: function(t, n, e) {
                const {
                    on: i
                } = ot(t);

                function o(t) {
                    n.Slides.forEach(n => {
                        const e = E(n.container || n.slide, "img");
                        e && e.src && r(t, e, n)
                    })
                }

                function r(t, n, e) {
                    e.style("background", t ? `center/cover no-repeat url("${n.src}")` : "", !0), $(n, t ? "none" : "")
                }
                return {
                    mount: function() {
                        e.cover && (i("lazyload:loaded", (t, n) => {
                            r(!0, t, n)
                        }), i(["mounted", "updated", "refresh"], o.bind(null, !0)))
                    },
                    destroy: function() {
                        o(!1)
                    }
                }
            },
            Scroll: function(t, n, e) {
                const {
                    on: i,
                    emit: o
                } = ot(t), {
                    Move: r
                } = n, {
                    getPosition: s,
                    getLimit: c,
                    exceededLimit: u
                } = r;
                let l, a;

                function d(n, i, h, g) {
                    const m = s();
                    let y = 1;
                    var v;
                    i = i || (v = Q(n - m), Y(v / 1.5, 800)), a = h, p(), l = rt(i, f, i => {
                        const o = s(),
                            l = (m + (n - m) * function(t) {
                                const {
                                    easingFunc: n
                                } = e;
                                return n ? n(t) : 1 - Math.pow(1 - t, 4)
                            }(i) - s()) * y;
                        var a;
                        r.translate(o + l), t.is("slide") && !g && u() && (y *= .6, Q(l) < 10 && (a = u(!1), d(c(!a), 600, null, !0)))
                    }, 1), o("scroll"), l.start()
                }

                function f() {
                    const n = s(),
                        e = r.toIndex(n);
                    J(e, 0, t.length - 1) || r.translate(r.shift(n, e > 0), !0), a && a(), o("scrolled")
                }

                function p() {
                    l && l.cancel()
                }

                function h() {
                    l && !l.isPaused() && (p(), f())
                }
                return {
                    mount: function() {
                        i("move", p), i(["updated", "refresh"], h)
                    },
                    destroy: p,
                    scroll: d,
                    cancel: h
                }
            },
            Drag: function(t, n, e) {
                const {
                    on: i,
                    emit: o,
                    bind: s,
                    unbind: c
                } = ot(t), {
                    Move: u,
                    Scroll: l,
                    Controller: d
                } = n, {
                    track: f
                } = n.Elements, {
                    resolve: p,
                    orient: h
                } = n.Direction, {
                    getPosition: g,
                    exceededLimit: m
                } = u, y = {
                    passive: !1,
                    capture: !0
                };
                let v, b, _, x, E, S, k, P, z, C = !1;

                function L() {
                    const {
                        drag: t
                    } = e;
                    F(!t), E = "free" === t
                }

                function A(t) {
                    if (!P) {
                        const {
                            noDrag: n
                        } = e, i = R(t);
                        !(!n || a(t.target) && !w(t.target, n)) || !i && t.button || (u.isBusy() ? I(t, !0) : (z = i ? f : window, _ = null, x = null, k = !1, s(z, "touchmove mousemove", $, y), s(z, "touchend touchcancel mouseup", D, y), u.cancel(), l.cancel(), M(t)))
                    }
                }

                function $(n) {
                    if (x || o("drag"), x = n, n.cancelable) {
                        const i = N(n) - N(b);
                        if (S) {
                            u.translate(v + function(n) {
                                return n / (C && t.is("slide") ? 5 : 1)
                            }(i));
                            const e = j(n) - j(b) > 200,
                                r = C !== (C = m());
                            (e || r) && M(n), o("dragging"), k = !0, I(n)
                        } else {
                            let {
                                dragMinThreshold: t
                            } = e;
                            t = r(t) ? t : {
                                mouse: 0,
                                touch: +t || 10
                            }, S = Q(i) > (R(n) ? t.touch : t.mouse), T() && I(n)
                        }
                    }
                }

                function D(i) {
                    if (c(z, "touchmove mousemove", $), c(z, "touchend touchcancel mouseup", D), x) {
                        if (S || i.cancelable && T()) {
                            const o = function(n) {
                                    if (t.is(ht) || !C) {
                                        const t = b === x && _ || b,
                                            e = N(x) - N(t),
                                            i = j(n) - j(t),
                                            o = j(n) - j(x) < 200;
                                        if (i && o) return e / i
                                    }
                                    return 0
                                }(i),
                                r = function(t) {
                                    return g() + Z(t) * G(Q(t) * (e.flickPower || 600), E ? 1 / 0 : n.Layout.listSize() * (e.flickMaxPages || 1))
                                }(o);
                            E ? d.scroll(r) : t.is("fade") ? d.go(t.index + h(Z(o))) : d.go(d.toDest(r), !0), I(i)
                        }
                        o("dragged")
                    } else E || d.go(t.index, !0);
                    S = !1
                }

                function M(t) {
                    _ = b, b = t, v = g()
                }

                function O(t) {
                    !P && k && I(t, !0)
                }

                function T() {
                    return Q(N(x) - N(b)) > Q(N(x, !0) - N(b, !0))
                }

                function N(t, n) {
                    return (R(t) ? t.touches[0] : t)["page" + p(n ? "Y" : "X")]
                }

                function j(t) {
                    return t.timeStamp
                }

                function R(t) {
                    return "undefined" != typeof TouchEvent && t instanceof TouchEvent
                }

                function F(t) {
                    P = t
                }
                return {
                    mount: function() {
                        s(f, "touchmove mousemove", q, y), s(f, "touchend touchcancel mouseup", q, y), s(f, "touchstart mousedown", A, y), s(f, "click", O, {
                            capture: !0
                        }), s(f, "dragstart", I), i(["mounted", "updated"], L)
                    },
                    disable: F,
                    isDragging: function() {
                        return S
                    }
                }
            },
            Keyboard: function(t, n, e) {
                const {
                    on: i,
                    bind: o,
                    unbind: r
                } = ot(t), {
                    root: s
                } = n.Elements, {
                    resolve: c
                } = n.Direction;
                let u, l;

                function d() {
                    const {
                        keyboard: t = "global"
                    } = e;
                    t && ("focused" === t ? (u = s, C(s, "tabindex", 0)) : u = window, o(u, "keydown", m))
                }

                function f() {
                    r(u, "keydown"), a(u) && z(u, "tabindex")
                }

                function h() {
                    l = !0, X(() => {
                        l = !1
                    })
                }

                function g() {
                    f(), d()
                }

                function m(n) {
                    if (!l) {
                        const {
                            key: e
                        } = n, i = p(yt, e) ? "Arrow" + e : e;
                        i === c("ArrowLeft") ? t.go("<") : i === c("ArrowRight") && t.go(">")
                    }
                }
                return {
                    mount: function() {
                        d(), i("updated", g), i("move", h)
                    },
                    destroy: f
                }
            },
            LazyLoad: function(t, n, e) {
                const {
                    on: i,
                    off: o,
                    bind: r,
                    emit: s
                } = ot(t), c = "sequential" === e.lazyLoad;
                let u = [],
                    l = 0;

                function a() {
                    l = 0, u = []
                }

                function d() {
                    u = u.filter(n => {
                        const i = e.perPage * ((e.preloadPages || 1) + 1) - 1;
                        return !n._Slide.isWithin(t.index, i) || f(n)
                    }), u.length || o("moved")
                }

                function f(t) {
                    const {
                        _img: n
                    } = t;
                    v(t._Slide.slide, "is-loading"), r(n, "load error", n => {
                        ! function(t, n) {
                            const {
                                _Slide: e
                            } = t;
                            F(e.slide, "is-loading"), n || (T(t._spinner), $(t._img, ""), s("lazyload:loaded", t._img, e), s("resize"));
                            c && p()
                        }(t, "error" === n.type)
                    }), ["src", "srcset"].forEach(e => {
                        t[e] && (C(n, e, t[e]), z(n, "src" === e ? "data-splide-lazy" : "data-splide-lazy-srcset"))
                    })
                }

                function p() {
                    l < u.length && f(u[l++])
                }
                return {
                    mount: function() {
                        e.lazyLoad && (i(["mounted", "refresh"], () => {
                            a(), n.Slides.forEach(t => {
                                R(t.slide, "[data-splide-lazy], [data-splide-lazy-srcset]").forEach(n => {
                                    const i = D(n, "data-splide-lazy"),
                                        o = D(n, "data-splide-lazy-srcset");
                                    if (i !== n.src || o !== n.srcset) {
                                        const r = L("span", e.classes.spinner, n.parentElement);
                                        C(r, "role", "presentation"), u.push({
                                            _img: n,
                                            _Slide: t,
                                            src: i,
                                            srcset: o,
                                            _spinner: r
                                        }), !n.src && $(n, "none")
                                    }
                                })
                            }), c && p()
                        }), c || i(["mounted", "refresh", "moved"], d))
                    },
                    destroy: a
                }
            },
            Pagination: function(t, n, e) {
                const {
                    on: i,
                    emit: r,
                    bind: s,
                    unbind: c
                } = ot(t), {
                    Slides: u,
                    Elements: l,
                    Controller: a
                } = n, {
                    hasFocus: d,
                    getIndex: f
                } = a, p = [];
                let h;

                function g() {
                    m(), e.pagination && u.isEnough() && (! function() {
                        const {
                            length: n
                        } = t, {
                            classes: i,
                            i18n: o,
                            perPage: r
                        } = e, c = "slider" === e.pagination && l.slider || l.root, a = d() ? n : U(n / r);
                        h = L("ul", i.pagination, c);
                        for (let t = 0; t < a; t++) {
                            const n = L("li", null, h),
                                e = L("button", {
                                    class: i.page,
                                    type: "button"
                                }, n),
                                c = u.getIn(t).map(t => t.slide.id),
                                l = !d() && r > 1 ? o.pageX : o.slideX;
                            s(e, "click", y.bind(null, t)), C(e, "aria-controls", c.join(" ")), C(e, "aria-label", tt(l, t + 1)), p.push({
                                li: n,
                                button: e,
                                page: t
                            })
                        }
                    }(), r("pagination:mounted", {
                        list: h,
                        items: p
                    }, b(t.index)), _())
                }

                function m() {
                    h && (T(h), p.forEach(t => {
                        c(t.button, "click")
                    }), o(p), h = null)
                }

                function y(t) {
                    a.go(">" + t, !0, () => {
                        const n = u.getAt(a.toIndex(t));
                        var e;
                        n && ((e = n.slide).setActive && e.setActive() || e.focus({
                            preventScroll: !0
                        }))
                    })
                }

                function b(t) {
                    return p[a.toPage(t)]
                }

                function _() {
                    const t = b(f(!0)),
                        n = b(f());
                    t && (F(t.button, at), z(t.button, "aria-current")), n && (v(n.button, at), C(n.button, "aria-current", !0)), r("pagination:updated", {
                        list: h,
                        items: p
                    }, t, n)
                }
                return {
                    items: p,
                    mount: function() {
                        g(), i(["updated", "refresh"], g), i(["move", "scrolled"], _)
                    },
                    destroy: m,
                    getAt: b
                }
            },
            Sync: function(t, n, e) {
                const {
                    list: i
                } = n.Elements, r = [];

                function s() {
                    t.splides.forEach(n => {
                        !n.isParent && function(n) {
                            [t, n].forEach(e => {
                                const i = ot(e),
                                    o = e === t ? n : t;
                                i.on("move", (t, n, e) => {
                                    o.go(o.is(ht) ? e : t)
                                }), r.push(i)
                            })
                        }(n.splide)
                    }), e.isNavigation && function() {
                        const n = ot(t),
                            {
                                on: e
                            } = n;
                        e("click", l), e("slide:keydown", a), e(["mounted", "updated"], u), C(i, "role", "menu"), r.push(n), n.emit("navigation:mounted", t.splides)
                    }()
                }

                function c() {
                    z(i, pt), r.forEach(t => {
                        t.destroy()
                    }), o(r)
                }

                function u() {
                    C(i, "aria-orientation", "ttb" !== e.direction ? "horizontal" : null)
                }

                function l(n) {
                    t.go(n.index)
                }

                function a(t, n) {
                    p(vt, n.key) && (l(t), I(n))
                }
                return {
                    mount: s,
                    destroy: c,
                    remount: function() {
                        c(), s()
                    }
                }
            },
            Wheel: function(t, n, e) {
                const {
                    bind: i
                } = ot(t);

                function o(n) {
                    const {
                        deltaY: e
                    } = n;
                    e && (t.go(e < 0 ? "<" : ">"), I(n))
                }
                return {
                    mount: function() {
                        e.wheel && i(n.Elements.track, "wheel", o, {
                            passive: !1,
                            capture: !0
                        })
                    }
                }
            }
        });
        const _t = {
            type: "slide",
            speed: 400,
            waitForTransition: !0,
            perPage: 1,
            arrows: !0,
            pagination: !0,
            interval: 5e3,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            resetProgress: !0,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            drag: !0,
            direction: "ltr",
            slideFocus: !0,
            trimSpace: !0,
            focusableNodes: "a, button, textarea, input, select, iframe",
            classes: ft,
            i18n: {
                prev: "Previous slide",
                next: "Next slide",
                first: "Go to first slide",
                last: "Go to last slide",
                slideX: "Go to slide %s",
                pageX: "Go to page %s",
                play: "Start autoplay",
                pause: "Pause autoplay"
            }
        };

        function wt(t, n, e) {
            const {
                on: i
            } = ot(t);
            return {
                mount: function() {
                    i(["mounted", "refresh"], () => {
                        X(() => {
                            n.Slides.style("transition", `opacity ${e.speed}ms ${e.easing}`)
                        })
                    })
                },
                start: function(t, e) {
                    const {
                        track: i
                    } = n.Elements;
                    A(i, "height", B(O(i).height)), X(() => {
                        e(), A(i, "height", "")
                    })
                },
                cancel: q
            }
        }

        function xt(t, n, e) {
            const {
                bind: i
            } = ot(t), {
                Move: o,
                Controller: r
            } = n, {
                list: s
            } = n.Elements;
            let c;

            function u() {
                l("")
            }

            function l(t) {
                A(s, "transition", t)
            }
            return {
                mount: function() {
                    i(s, "transitionend", t => {
                        t.target === s && c && (u(), c())
                    })
                },
                start: function(n, i) {
                    const s = o.toPosition(n, !0),
                        u = o.getPosition(),
                        a = function(n) {
                            const {
                                rewindSpeed: i
                            } = e;
                            if (t.is("slide") && i) {
                                const t = r.getIndex(!0),
                                    e = r.getEnd();
                                if (0 === t && n >= e || t >= e && 0 === n) return i
                            }
                            return e.speed
                        }(n);
                    Q(s - u) >= 1 && a >= 1 ? (l(`transform ${a}ms ${e.easing}`), o.translate(s, !0), c = i) : (o.jump(n), i())
                },
                cancel: u
            }
        }
        const Et = class {
            constructor(t, n) {
                this.event = function() {
                    let t = {};

                    function n(n, i) {
                        e(n, (n, e) => {
                            const o = t[n];
                            t[n] = o && o.filter(t => t._key ? t._key !== i : i || t._namespace !== e)
                        })
                    }

                    function e(t, n) {
                        d(t).join(" ").split(" ").forEach(t => {
                            const e = t.split(".");
                            n(e[0], e[1])
                        })
                    }
                    return {
                        on: function(n, i, o, r = 10) {
                            e(n, (n, e) => {
                                t[n] = t[n] || [], h(t[n], {
                                    _event: n,
                                    _callback: i,
                                    _namespace: e,
                                    _priority: r,
                                    _key: o
                                }).sort((t, n) => t._priority - n._priority)
                            })
                        },
                        off: n,
                        offBy: function(e) {
                            S(t, (t, i) => {
                                n(i, e)
                            })
                        },
                        emit: function(n) {
                            (t[n] || []).forEach(t => {
                                t._callback.apply(t, m(arguments, 1))
                            })
                        },
                        destroy: function() {
                            t = {}
                        }
                    }
                }(), this.Components = {}, this.state = function(t) {
                    let n = t;
                    return {
                        set: function(t) {
                            n = t
                        },
                        is: function(t) {
                            return p(d(t), n)
                        }
                    }
                }(1), this.splides = [], this._options = {}, this._Extensions = {};
                const e = c(t) ? j(document, t) : t;
                W(e, e + " is invalid."), this.root = e, P(_t, Et.defaults), P(P(this._options, _t), n || {})
            }
            mount(t, n) {
                const {
                    state: e,
                    Components: i
                } = this;
                W(e.is([1, 5]), "Already mounted!"), e.set(1), this._Components = i, this._Transition = n || this._Transition || (this.is("fade") ? wt : xt), this._Extensions = t || this._Extensions;
                return S(k({}, bt, this._Extensions, {
                    Transition: this._Transition
                }), (t, n) => {
                    const e = t(this, i, this._options);
                    i[n] = e, e.setup && e.setup()
                }), S(i, t => {
                    t.mount && t.mount()
                }), this.emit("mounted"), v(this.root, "is-initialized"), e.set(3), this.emit("ready"), this
            }
            sync(t) {
                return this.splides.push({
                    splide: t
                }), t.splides.push({
                    splide: this,
                    isParent: !0
                }), this.state.is(3) && (this._Components.Sync.remount(), t.Components.Sync.remount()), this
            }
            go(t) {
                return this._Components.Controller.go(t), this
            }
            on(t, n) {
                return this.event.on(t, n, null, 20), this
            }
            off(t) {
                return this.event.off(t), this
            }
            emit(t) {
                return this.event.emit(t, ...m(arguments, 1)), this
            }
            add(t, n) {
                return this._Components.Slides.add(t, n), this
            }
            remove(t) {
                return this._Components.Slides.remove(t), this
            }
            is(t) {
                return this._options.type === t
            }
            refresh() {
                return this.emit("refresh"), this
            }
            destroy(t = !0) {
                const {
                    event: n,
                    state: e
                } = this;
                return e.is(1) ? n.on("ready", this.destroy.bind(this, t), this) : (S(this._Components, n => {
                    n.destroy && n.destroy(t)
                }, !0), n.emit("destroy"), n.destroy(), t && o(this.splides), e.set(5)), this
            }
            get options() {
                return this._options
            }
            set options(t) {
                const {
                    _options: n
                } = this;
                P(n, t), this.state.is(1) || this.emit("updated", n)
            }
            get length() {
                return this._Components.Slides.getLength(!0)
            }
            get index() {
                return this._Components.Controller.getIndex()
            }
        };
        let St = Et;
        St.defaults = {}, St.STATES = i;
        new St(".splide", {
            padding: "3rem",
            gap: "1.5rem",
            arrows: !1,
            pagination: !1,
            mediaQuery: "min",
            breakpoints: {
                768: {
                    destroy: !0
                }
            }
        }).mount()
    },
    buao: function(t, n) {},
    pyCd: function(t, n) {},
    qw8q: function(t, n) {}
});