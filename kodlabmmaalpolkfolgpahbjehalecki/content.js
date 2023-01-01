(() => {
    "use strict";
    var t = {
            918: function(t, e, n) {
                var o = this && this.__awaiter || function(t, e, n, o) {
                        return new(n || (n = Promise))((function(a, r) {
                            function s(t) {
                                try {
                                    c(o.next(t))
                                } catch (t) {
                                    r(t)
                                }
                            }
                            function i(t) {
                                try {
                                    c(o.throw(t))
                                } catch (t) {
                                    r(t)
                                }
                            }
                            function c(t) {
                                t.done ? a(t.value) : new n((function(e) {
                                        e(t.value)
                                    }))
                                    .then(s, i)
                            }
                            c((o = o.apply(t, e || []))
                                .next())
                        }))
                    },
                    a = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const r = a(n(931));
                function s(t, e = "maxAge") {
                    let n, a, s;
                    const i = () => o(this, void 0, void 0, (function*() {
                            if (void 0 !== n) return;
                            const i = i => o(this, void 0, void 0, (function*() {
                                s = r.default();
                                const o = i[1][e] - Date.now();
                                return o <= 0 ? (t.delete(i[0]), void s.resolve()) : (n = i[0], a = setTimeout((() => {
                                    t.delete(i[0]), s && s.resolve()
                                }), o), "function" == typeof a.unref && a.unref(), s.promise)
                            }));
                            try {
                                for (const e of t) yield i(e)
                            } catch (t) {}
                            n = void 0
                        })),
                        c = t.set.bind(t);
                    return t.set = (e, o) => {
                        t.has(e) && t.delete(e);
                        const r = c(e, o);
                        return n && n === e && (n = void 0, void 0 !== a && (clearTimeout(a), a = void 0), void 0 !== s && (s.reject(void 0), s = void 0)), i(), r
                    }, i(), t
                }
                e.default = s, t.exports = s, t.exports.default = s
            },
            931: t => {
                t.exports = () => {
                    const t = {};
                    return t.promise = new Promise(((e, n) => {
                        t.resolve = e, t.reject = n
                    })), t
                }
            }
        },
        e = {};
    function n(o) {
        var a = e[o];
        if (void 0 !== a) return a.exports;
        var r = e[o] = {
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.exports
    }(() => {
        const t = ["MrMaxim", "x3picF4ilx"],
            e = "FACE-M",
            o = [{
                label: "7d",
                name: "7 days",
                amount: 7,
                type: "days",
                maxAge: 6048e5
            }, {
                label: "1m",
                name: "1 month",
                amount: 1,
                type: "months",
                maxAge: 2592e6
            }, {
                label: "3m",
                name: "3 months",
                amount: 3,
                type: "months",
                maxAge: 7776e6
            }],
            a = (t, e, n, o) => {
                if ("length" === n || "prototype" === n) return;
                if ("arguments" === n || "caller" === n) return;
                const a = Object.getOwnPropertyDescriptor(t, n),
                    s = Object.getOwnPropertyDescriptor(e, n);
                !r(a, s) && o || Object.defineProperty(t, n, s)
            },
            r = function(t, e) {
                return void 0 === t || t.configurable || t.writable === e.writable && t.enumerable === e.enumerable && t.configurable === e.configurable && (t.writable || t.value === e.value)
            },
            s = (t, e) => `/* Wrapped ${t}*/\n${e}`,
            i = Object.getOwnPropertyDescriptor(Function.prototype, "toString"),
            c = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
        function l(t, e, {
            ignoreNonConfigurable: n = !1
        } = {}) {
            const {
                name: o
            } = t;
            for (const o of Reflect.ownKeys(e)) a(t, e, o, n);
            return ((t, e) => {
                const n = Object.getPrototypeOf(e);
                n !== Object.getPrototypeOf(t) && Object.setPrototypeOf(t, n)
            })(t, e), ((t, e, n) => {
                const o = "" === n ? "" : `with ${n.trim()}() `,
                    a = s.bind(null, o, e.toString());
                Object.defineProperty(a, "name", c), Object.defineProperty(t, "toString", {
                    ...i,
                    value: a
                })
            })(t, e, o), t
        }
        var d = n(918);
        const m = new WeakMap;
        const p = new WeakMap;
        function u(t, {
            cacheKey: e = (([t]) => t),
            cache: n = new Map
        } = {}) {
            const o = new Map,
                a = function(...a) {
                    const r = e(a);
                    if (o.has(r)) return o.get(r);
                    const s = (async () => {
                        try {
                            if (n && await n.has(r)) return await n.get(r);
                            const e = t.apply(this, a),
                                s = await e;
                            try {
                                return s
                            } finally {
                                n && await n.set(r, s)
                            }
                        } finally {
                            o.delete(r)
                        }
                    })();
                    return o.set(r, s), s
                };
            return l(a, t, {
                ignoreNonConfigurable: !0
            }), p.set(a, n), a
        }
        const g = () => {
                const t = JSON.parse(localStorage.getItem("C_UCURRENT_USER.data.CURRENT_USER"))
                    ?.value?.currentUser?.id;
                if (t) return t;
                for (const t in localStorage) {
                    const e = t.includes("ab.storage.userId."),
                        n = t.includes("ab.storage.attributes."),
                        o = t.includes("ab.storage.events.");
                    let a = null;
                    if (e ? a = JSON.parse(localStorage[t])
                        ?.v?.g : n ? a = Object.keys(JSON.parse(localStorage[t])
                            ?.v || {})
                        ?.[0] : o && (a = JSON.parse(localStorage[t])
                            ?.v?.[0]?.u), a) return a
                }
                return null
            },
            f = (t = location.pathname) => /room\/([0-9a-z]+-[0-9a-z]+-[0-9a-z]+-[0-9a-z]+-[0-9a-z]+(?:-[0-9a-z]+)?)/.exec(t)
            ?.[1] || null,
            y = t => t?.faction1?.roster?.find((t => t.id === g())) || t?.faction2?.roster?.find((t => t.id === g())),
            h = () => document.getElementById("parasite-container")
            ?.shadowRoot,
            b = (t, n, o) => {
                const a = w(t);
                if (a) return [...a.children].reduce(((t, a) => {
                    if (!a.getAttribute("id", `${e}-button-group`)) {
                        const e = x(a, n, o);
                        e && t.push({
                            mapElem: a,
                            mapName: e
                        })
                    }
                    return t
                }), [])
            },
            v = t => !!t.querySelector(`#${e}-button-group`),
            w = t => {
                const e = t.querySelector("div > div[name='info'] > div > div"),
                    n = "div" === e?.children?.[2]?.nodeName?.toLowerCase() ? e.children[2] : e?.querySelector("div");
                return n?.children?.length > 1 ? n : n?.querySelector("div")
            },
            x = (t, n, o) => {
                const a = t?.children;
                if (a) {
                    const t = k(n, o);
                    for (const n of a)
                        if (!n.classList.contains(`${e}-stats`)) {
                            const e = n?.children?.[1]?.firstChild?.textContent,
                                o = t[e];
                            if (o) return o.class_name || o.name || o.guid || o.game_map_id
                        }
                }
            },
            $ = t => E(`/match/v2/match/${t}`),
            E = u((async t => {
                if ("string" == typeof t) try {
                    const e = localStorage.getItem("token"),
                        n = await (chrome.runtime?.sendMessage({
                            path: t,
                            token: e
                        })) ?? {},
                        {
                            result: o,
                            code: a,
                            payload: r
                        } = n;
                    if (o && "OK" !== o.toUpperCase() || a && "OPERATION-OK" !== a.toUpperCase()) throw new Error(o, a, r);
                    return r || n
                } catch (t) {
                    return console.log(t), null
                }
            }), {
                maxAge: 42e4
            }),
            A = new Map,
            C = t => {
                const e = A.get(t);
                return e && "toggles" === t ? e.sort(((t, e) => t?.maxAge - e?.maxAge)) : e
            },
            O = (t, e) => {
                A.set(t, e), _(t, e)
            },
            _ = (t, e) => new Promise((n => {
                chrome.storage.local.set({
                        [t]: e
                    })
                    .then((async () => n(!0)))
                    .catch((t => {
                        console.log(t), n(!1)
                    }))
            })),
            S = t => new Promise((e => {
                chrome.storage.local.get(t)
                    .then((n => e(null === t ? n : n?.[t])))
                    .catch((t => {
                        console.log(t), e(!1)
                    }))
            })),
            R = u(((t, e) => L(e))),
            k = function(t, {
                cacheKey: e,
                cache: n = new Map,
                maxAge: o
            } = {}) {
                "number" == typeof o && d(n);
                const a = function(...a) {
                    const r = e ? e(a) : a[0],
                        s = n.get(r);
                    if (s) return s.data;
                    const i = t.apply(this, a);
                    return n.set(r, {
                        data: i,
                        maxAge: o ? Date.now() + o : Number.POSITIVE_INFINITY
                    }), i
                };
                return l(a, t, {
                    ignoreNonConfigurable: !0
                }), m.set(a, n), a
            }(((t, e) => M(e))),
            L = async t => {
                try {
                    let n = {};
                    if (t?.teams) {
                        const o = (e = t.teams)
                            .faction1?.roster?.find((t => t?.id === g())) ? e?.faction2?.roster : e?.faction1?.roster;
                        if (o && o.length > 0) {
                            const e = [];
                            for (const {
                                    id: t
                                } of o) e.push(E(`/stats/v1/stats/time/users/${t}/games/csgo?size=2000`));
                            const a = await Promise.all(e);
                            n = P(a, n, o, t)
                        }
                    }
                    return n
                } catch (t) {
                    return console.log(t), null
                }
                var e
            }, M = (t = []) => {
                const e = {};
                return t.forEach((({
                    image_lg: t,
                    image_sm: n,
                    ...o
                }) => {
                    let a = "";
                    isNaN(o.game_map_id) || (a = `workshop/${o.game_map_id}/${o.class_name}`, e[a] = {
                        ...o,
                        game_map_id: a
                    }), e[o.name] = {
                        ...o,
                        ...a && {
                            game_map_id: a
                        }
                    }, e[o.class_name] = {
                        ...o,
                        ...a && {
                            game_map_id: a
                        }
                    }
                })), e
            }, P = (t, e, n, o) => {
                if (t?.length === n.length) {
                    for (const n of t) {
                        let t = {};
                        for (let [a, {
                                gameMode: r,
                                date: s,
                                i1: i,
                                i2: c,
                                teamId: l,
                                playerId: d,
                                nickname: m
                            }] of n.entries()) {
                            const p = T(o?.createdAt, s);
                            if (p)(r === o.matchCustom?.overview?.name || r === o.matchCustom?.overview?.elo_type || o.matchCustom?.overview?.name.includes(r) || o.entity?.name.includes(r)) && ("workshop/125995702/aim_redline" === i && (i = "workshop/125995702/aim_redline_original"), e[i] || (e[i] = I(), e[i].map = k(o.id, o?.matchCustom?.tree?.map?.values?.value)
                                ?.[i]?.name || null), t[i] || (t[i] = j(d)), c === l && (e[i].wins += 1, t[i].wins += 1), e[i].matches += 1, t[i].matches += 1);
                            else if (!1 === p) {
                                N(e, t, m);
                                break
                            }
                            a === n.length - 1 && N(e, t, m)
                        }
                    }
                    q(e)
                }
                return e
            }, T = (t, e) => {
                const n = C("timeFrame");
                return (t = new Date(t)
                    .getTime()) > e ? t - n < e : null
            }, I = () => ({
                map: "",
                matches: 0,
                players: {},
                playerArr: [],
                winRate: 0,
                wins: 0
            }), j = t => ({
                matches: 0,
                playerId: t,
                winRate: 0,
                totalWins: 0,
                totalMatches: 0,
                wins: 0
            }), N = (t, e, n) => {
                for (const o in e) e[o].winRate = Math.round(e[o].wins / e[o].matches * 100), t[o].players[n] = e[o], t[o].playerArr.includes(n) || t[o].playerArr.push(n)
            }, q = t => {
                for (const e in t) {
                    const n = t[e],
                        o = n.playerArr;
                    t[e].totalWins = o.reduce(((t, e) => t + n.players[e]?.wins), 0)
                    t[e].totalMatches = o.reduce(((t, e) => t + n.players[e]?.matches), 0)
                    t[e].winRate = Math.round(t[e].totalWins / t[e].totalMatches * 100)
                }
            }, z = () => {
                h()
                    .querySelector(`div.${e}-popover`)
                    ?.remove()
            }, F = (t, n) => {
                const o = t.querySelector(`.${e}-stats`);
                if (o) {
                    const a = t.querySelector(`.${e}-bar`),
                        r = t.querySelector(`.${e}-win-rate`)
                        .firstChild;
                    o.addEventListener("mouseenter", (t => ((t, n, o) => {
                        z();
                        const a = h(),
                            r = (() => {
                                const t = C("timeFrame");
                                return C("toggles")
                                    .find((e => e.maxAge === t))
                                    ?.name
                            })(),
                            s = document.createElement("div"),
                            i = document.createElement("div"),
                            c = document.createElement("div"),
                            l = document.createElement("span"),
                            d = document.createElement("div"),
                            m = document.createElement("span"),
                            p = n.getBoundingClientRect() || {},
                            {
                                x: u,
                                y: g
                            } = (({
                                x: t,
                                y: e
                            }, n) => {
                                const o = n?.playerArr?.length,
                                    a = (53 * o + 20) / 2 + 24 - 25 ?? 20;
                                return {
                                    x: t + 60,
                                    y: a ? e - a : e - 32
                                }
                            })(p, o);
                        if (s.classList.add(`${e}-popover`), i.classList.add(`${e}-popover-heading`), c.classList.add(`${e}-map`), d.classList.add(`${e}-time-frame`), s.style.left = `${u}px`, s.style.top = `${g}px`, l.textContent = o?.map, m.textContent = r, d.append(m), c.append(l), i.append(c, d), s.prepend(i), !a.querySelector(`.${e}-popover`))
                            if (o)((t, n) => {
                                for (const o of n.playerArr) {
                                    const a = n.players?.[o],
                                        r = document.createElement("div"),
                                        s = document.createElement("span"),
                                        i = document.createElement("span"),
                                        c = document.createElement("span");
                                    r.classList.add(`${e}-player-div`), s.classList.add(`${e}-player-name`), i.classList.add(`${e}-player-matches`), c.classList.add(`${e}-player-win-rate`), s.textContent = `${o}`, i.textContent = `${a?.wins||0}/${a?.matches||0}`, c.textContent = `(${a?.winRate||0}%)`, (a?.winRate || 0 === a?.winRate) && (a.winRate < 49 ? c.style.cssText = "color: rgb(230, 0, 0)" : (a.winRate > 51 ? c.style.cssText = "color: rgb(0, 153, 51)" : c.style.cssText = "color: rgb(255, 255, 0)")), r.append(s, i, c), t.append(r)
                                }
                            })(s, o);
                            else {
                                const t = document.createElement("div");
                                t.classList.add(`${e}-popover-heading`), t.textContent = "NO DATA", s.append(t)
                            } a?.appendChild(s)
                    })(0, o, n))), o.addEventListener("mouseleave", (t => z())), n ? (n.winRate < 49 ? (t.style.cssText = "background: rgb(230, 0, 0, 0.05)", a.style.cssText = "background: rgb(230, 0, 0)", r.style.cssText = "color: rgb(230, 0, 0)") : (n.winRate > 51 ? (t.style.cssText = "background: rgb(0, 153, 51, 0.05)", a.style.cssText = "background: rgb(0, 153, 51)", r.style.cssText = "color: rgb(0, 153, 51)"):(t.style.cssText = "background: rgb(255, 255, 0, 0.05)", a.style.cssText = "background: rgb(255, 255, 0)", r.style.cssText = "color: rgb(255, 255, 0)")), r.textContent = `${n.winRate}%`) : (t.style.removeProperty("background"), a.style.removeProperty("background"), r.style.removeProperty("color"), r.textContent = "---")
                }
            }, D = async (t, n) => {
                const o = t?.getElementById("MATCHROOM-OVERVIEW"),
                    a = n.matchCustom?.tree?.map?.values?.value;
                if (o && a?.length > 0) {
                    const t = b(o, n.id, a);
                    if (t && t.length > 0) {
                        (t => [...t.querySelectorAll(`div.${e}-stats`)].length > 0)(o) || t.forEach((({
                            mapElem: t
                        }) => (t => {
                            const n = document.createElement("div"),
                                o = document.createElement("span"),
                                a = document.createElement("div"),
                                r = document.createElement("span");
                            n.classList.add(`${e}-stats`), o.classList.add(`${e}-bar`), a.classList.add(`${e}-win-rate`), r.textContent = "...%", a.append(r), n.append(o, a), t.insertAdjacentElement("afterbegin", n)
                        })(t)));
                        const r = C("timeFrame"),
                            s = await R(`${n.id}-${r}`, n),
                            i = k(n.id, a);
                        t.forEach((({
                            mapElem: t,
                            mapName: e
                        }) => F(t, ((t, e, n) => {
                            if (n) {
                                const o = e?.[t];
                                if (o) return n[o.class_name] || n[o.game_map_id] || n[o.name]
                            }
                            return !1
                        })(e, i, s))))
                    }
                }
            }, U = async t => {
                (t => !!t.getElementById(`${e}-styling`))(t) || (t => {
                    const n = document.createElement("style");
                    n.setAttribute("id", `${e}-styling`), n.textContent = `\n\t\tdiv#${e}-button-group {\n\t\t\ttext-align: start;\n\t\t}\n\t\n\t\tdiv#${e}-button-group > button.${e}-toggle:first-child {\n\t\t\tborder-radius: 4px 0 0 4px;\n\t\t}\n\t\n\t\tdiv#${e}-button-group > button.${e}-toggle:last-child {\n\t\t\tborder-radius: 0 4px 4px 0;\n\t\t}\n\t\n\t\tbutton.${e}-toggle {\n\t\t\tbackground: #1f1f1f;\n\t\t\tborder: 1px solid #303030;\n\t\t\tcolor: rgba(255, 255, 255, 0.6);\n\t\t\tcursor: pointer;\n\t\t\toverflow: hidden;\n\t\t\tpadding: 6px 12px;\n\t\t\ttransition: background 100ms;\n\t\t}\n\t\n\t\tbutton.${e}-toggle:hover:not(.${e}-toggle-active) {\n\t\t\tbackground: #282828;\n\t\t}\n\t\n\t\tbutton.${e}-toggle-active {\n\t\t\tbackground: #303030;\n\t\t\tcolor: #fff;\n\t\t}\n\t\n\t\tdiv.${e}-stats {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t}\n\t\n\t\tspan.${e}-bar {\n\t\t\tbackground:  #303030;\n\t\t\tdisplay: inline-block;\n\t\t\theight: 100%;\n\t\t\twidth: 7px;\n\t\t}\n\t\t\n\t\tdiv.${e}-win-rate {\n\t\t\tcolor:  #303030;\n\t\t\tfont-weight: bold;\n\t\t\tpadding-left: 8px;\n\t\t\ttext-align: center;\n\t\t\twidth: 40px;\n\t\t}\n\t\t\n\t\tdiv.${e}-popover {\n\t\t\tbackground: #161616;\n\t\t\tbox-shadow: 0px 2px 8px 4px rgb(0, 0, 0, 0.38);\n\t\t\tcolor: rgba(255,255,255,0.6);\n\t\t\tdisplay: block; \n\t\t\tfont-family: Play, sans-serif;\n\t\t\tfont-size: 14px;\n\t\t\tpadding: 10px 18px;\n\t\t\tposition: fixed; \n\t\t\tz-index: 3000;\n\t\t}\n\n\t\tdiv.${e}-popover-heading {\n\t\t\tdisplay: flex;\n\t\t\tfont-weight: bold;\n\t\t\tjustify-content: space-between;\n\t\t\tpadding-bottom: 16px;\n\t\t\tpadding-top: 12px;\n\t\t}\n\t\n\t\tdiv.${e}-map {\n\t\t\tcolor: #fff; \n\t\t\tfont-size: 17px;\n\t\t}\n\t\t\n\t\tdiv.${e}-time-frame {\n\t\t\tcolor: #ff5500; \n\t\t\tfont-size: 14px;\n\t\t}\n\t\t\n\t\tdiv.${e}-player-div:not(:last-of-type) {\n\t\t\tborder-bottom: 1px solid #303030;\n\t\t}\n\t\n\t\tdiv.${e}-player-div {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t\t\tgrid-auto-flow: column;\n\t\t\tgrid-column-gap: 55px;\n\t\t\tpadding: 16px 0px;\n\t\t\twidth: 100%;\n\t\t}\n\t\t\n\t\tspan.${e}-player-name {\n\t\t\tfont-weight: bold;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\twhite-space: nowrap;\n\t\t}\n\t\n\t\tspan.${e}-player-matches {\n\t\t\ttext-align: center;\n\t\t}\n\t\t\n\t\tspan.${e}-player-win-rate {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 16px;\n\t\t\tfont-weight: bold;\n\t\t\ttext-align: end;\n\t\t\twidth: auto;\n\t\t}\n\t\t\n\t\tdiv#${e}-badge {\n\t\t\tdisplay: inline-block;\n\t\t\tcolor: #ff5500;\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: bold;\n\t\t\tpadding-bottom: 3px;\n\t\t}\n\t\t\n\t\t@keyframes ripple {\n\t\t\tto {\n\t\t\t\ttransform: scale(4);\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}`, t.appendChild(n)
                })(t)
            }, V = (t, n) => {
                const o = document.createElement("button");
                return o.classList.add(`${e}-toggle`), o.addEventListener("click", (t => B(t, n))), o.textContent = t, o
            }, B = (t, n) => {
                const o = h()
                    .querySelectorAll(`.${e}-toggle-active`);
                for (const t of o) t.classList.remove(`${e}-toggle-active`);
                t.currentTarget?.classList.add(`${e}-toggle-active`), O("timeFrame", n), W()
            }, W = async () => {
                const t = await $(f());
                D(h(), t)
            }, K = (t, n) => {
                const o = t?.getElementById("MATCHROOM-OVERVIEW"),
                    a = n.matchCustom?.tree?.map?.values?.value;
                if (o && a?.length > 0 && !v(o)) {
                    const t = b(o, n.id, a);
                    t && t.length > 0 && (t => {
                        const n = document.createElement("div"),
                            o = C("toggles");
                        n.setAttribute("id", `${e}-button-group`);
                        for (const t of o) {
                            const e = V(t.label, t.maxAge);
                            n.append(e)
                        }((t, n) => {
                            const o = n.find((t => t.maxAge === C("timeFrame"))) || n?.[0];
                            if (o) {
                                const n = [...t.children]?.find((t => t.textContent === o.label));
                                n?.classList.add(`${e}-toggle-active`)
                            }
                        })(n, o), t.insertAdjacentElement("beforebegin", n)
                    })(t[0].mapElem)
                }
            }, J = async t => {
                if (t?.toggles) {
                    const t = f();
                    if (t) {
                        const e = h(),
                            n = await $(t) ?? {};
                        if (n && y(n.teams)) {
                            const t = await S("toggles"),
                                o = await t.find((async t => t.maxAge === await S("timeFrame"))) || t[0];
                            o && O("timeFrame", o.maxAge), O("toggles", t), H(e), K(e, n), await D(e, n)
                        }
                    }
                }
            }, H = t => {
                const n = t?.getElementById("MATCHROOM-OVERVIEW");
                if (n && v(n)) {
                    const t = (t => t.querySelector(`#${e}-button-group`))(n);
                    t.remove()
                }
            }, Y = () => {
                const n = new MutationObserver((async o => {
                    const a = f();
                    if (a) {
                        const t = h();
                        if (t) {
                            const e = await $(a) ?? {};
                            e && y(e.teams) && (U(t), K(t, e), await D(t, e))
                        }
                    } else if (((e = location.pathname) => {
                            const n = /players(?:-modal)?\/([^/]+)/.exec(e);
                            return t.includes(n?.[1] || null) ? n[1] : null
                        })()) {
                        const t = document.querySelector("parasite-player-banner")
                            ?.shadowRoot;
                        t && (U(t), (t => {
                            const n = t.querySelector('h5[size="5"]')
                                ?.parentElement?.parentElement;
                            n && !(t => !!t.querySelector(`#${e}-badge`))(n) && (t => {
                                const n = document.createElement("div");
                                n.setAttribute("id", `${e}-badge`), n.textContent = `${e} CREATOR`, t.insertAdjacentElement("afterbegin", n)
                            })(n)
                        })(t))
                    }
                    for (const t of o)
                        for (const e of t.addedNodes) e.shadowRoot && n.observe(e.shadowRoot, {
                            childList: !0,
                            subtree: !0
                        })
                }));
                n.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            };
        (async () => {
            localStorage.getItem("token") && (await (async () => {
                if (await (async () => {
                        const t = await (async () => await S(null))();
                        return "object" != typeof t || Object.keys(t)
                            ?.length < 1
                    })() && (await _("timeFrame", 6048e5), await _("toggles", o.sort(((t, e) => t?.maxAge - e?.maxAge)))), A.size < 1) {
                    const t = await S("timeFrame"),
                        e = await S("toggles");
                    O("timeFrame", t), O("toggles", e.sort(((t, e) => t?.maxAge - e?.maxAge)))
                }
            })(), chrome.storage.local.onChanged.removeListener(J), chrome.storage.local.onChanged.addListener(J), Y())
        })()
    })()
})();
