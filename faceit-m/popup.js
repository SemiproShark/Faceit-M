(() => {
    "use strict";
    var t = {
            994: (t, n, r) => {
                r.d(n, {
                    Z: () => i
                });
                var e = r(537),
                    o = r.n(e),
                    A = r(645),
                    a = r.n(A)()(o());
                a.push([t.id, "body {\r\n\tbackground: #161616;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-weight: 400;\r\n\tpadding: 15px;\r\n\twidth: 290px;\r\n}\r\n\r\n#FACE-M-button-group {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tpadding-top: 10px;\r\n}\r\n\r\n.heading {\r\n\tcolor: #ff5500;\r\n\tfont-size: 18px;\r\n\tfont-weight: 700;\r\n\tletter-spacing: 0.8px;\r\n\tpadding-bottom: 10px;\r\n\ttext-align: start;\r\n}\r\n\r\n.content-container {\r\n\tpadding: 20px 0px;\r\n}\r\n\r\n.content-container:last-child {\r\n\tpadding: 20px 0px;\r\n\tpadding-bottom: 0px;\r\n}\r\n\r\n.sub-heading {\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\tfont-weight: 700;\r\n\ttext-align: start;\r\n}\r\n\r\n.info {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-size: 12px;\r\n\tfont-style: italic;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#FACE-M-creators {\r\n\tcolor: #fff;\r\n\tfont-size: 13px;\r\n}\r\n\r\n#FACE-M-button-group > .FACE-M-toggle:first-child {\r\n\tborder-radius: 4px 0 0 4px;\r\n}\r\n\r\n#FACE-M-button-group > .FACE-M-toggle:last-child {\r\n\tborder-radius: 0 4px 4px 0;\r\n}\r\n\r\n.FACE-M-toggle {\r\n\tbackground: #1f1f1f;\r\n\tborder: 1px solid #303030;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tcursor: pointer;\r\n\toverflow: hidden;\r\n\tpadding: 6px 12px;\r\n\ttransition: background 100ms;\r\n}\r\n\r\n.FACE-M-toggle:hover:not(.FACE-M-toggle-active) {\r\n\tbackground: #282828;\r\n}\r\n\r\n.FACE-M-toggle-active {\r\n\tbackground: #303030;\r\n\tcolor: #fff;\r\n}\r\n\r\n.FACE-M-form-div {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n}\r\n\r\n#FACE-M-input {\r\n\tbackground: #1f1f1f;\r\n\tborder: 0px;\r\n\tborder-bottom: 1px solid #fff;\r\n\tcolor: #fff;\r\n\theight: 29px;\r\n\tfont-size: 13px;\r\n\tpadding: 0px 10px;\r\n\tmargin-right: 10px;\r\n\twidth: 60px;\r\n}\r\n\r\n#FACE-M-input:disabled {\r\n\tbackground: #1f1f1f;\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n#FACE-M-input:disabled::placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n#FACE-M-input::placeholder {\r\n\tcolor: #fff;\r\n}\r\n\r\n#FACE-M-select {\r\n\tbackground: #1f1f1f;\r\n\tborder: 0px;\r\n\tcolor: #fff;\r\n\theight: 29px;\r\n\tfont-size: 13px;\r\n\tmargin-right: 10px;\r\n\twidth: 70px;\r\n}\r\n\r\n.FACE-M-form-desc {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-size: 11px;\r\n\tfont-weight: 700;\r\n\ttext-align: start;\r\n}\r\n\r\n.FACE-M-form-desc-disabled {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-size: 11px;\r\n\tfont-weight: 700;\r\n\ttext-align: start;\r\n}\r\n\r\n.FACE-M-submit-btn {\r\n\tbackground: #ff5500;\r\n\tborder: 0px;\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tfont-size: 12px;\r\n\tfont-weight: 600;\r\n\theight: 28px;\r\n\tmargin-left: auto;\r\n\tmargin-right: 0;\r\n\ttext-transform: uppercase;\r\n\ttransition: background 100ms;\r\n\twidth: 85px;\r\n}\r\n\r\n.FACE-M-submit-btn:hover:not(:disabled) {\r\n\tbackground: #ff5500b3;\r\n}\r\n\r\n.FACE-M-submit-btn:active:not(:disabled) {\r\n\tbackground: #f87b3d8b;\r\n}\r\n\r\n.FACE-M-submit-btn:disabled {\r\n\tbackground: #fea3756c;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tcursor: auto;\r\n}\r\n\r\n.FACE-M-feedback {\r\n\talign-items: center;\r\n\tanimation: fadeIn 0.25s;\r\n\tbackground: rgb(0, 153, 51);\r\n\tborder-radius: 3px;\r\n\tcolor: #fff;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 14px;\r\n\tfont-weight: 600;\r\n\tmax-height: 40px;\r\n\tpadding: 10px 25px;\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 10px;\r\n}\r\n\r\n@keyframes fadeIn {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n", "", {
                    version: 3,
                    sources: ["webpack://./scripts/popup/styles.css"],
                    names: [],
                    mappings: "AAAA;CACC,mBAAmB;CACnB,+BAA+B;CAC/B,gBAAgB;CAChB,aAAa;CACb,YAAY;AACb;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,iBAAiB;AAClB;;AAEA;CACC,cAAc;CACd,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,oBAAoB;CACpB,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,eAAe;CACf,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,+BAA+B;CAC/B,eAAe;CACf,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,eAAe;AAChB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;CACzB,+BAA+B;CAC/B,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,4BAA4B;AAC7B;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,2BAA2B;AAC5B;;AAEA;CACC,mBAAmB;CACnB,WAAW;CACX,6BAA6B;CAC7B,WAAW;CACX,YAAY;CACZ,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,WAAW;AACZ;;AAEA;CACC,mBAAmB;CACnB,iDAAiD;AAClD;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,mBAAmB;CACnB,WAAW;CACX,WAAW;CACX,YAAY;CACZ,eAAe;CACf,kBAAkB;CAClB,WAAW;AACZ;;AAEA;CACC,+BAA+B;CAC/B,eAAe;CACf,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,+BAA+B;CAC/B,eAAe;CACf,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;CACnB,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,iBAAiB;CACjB,eAAe;CACf,yBAAyB;CACzB,4BAA4B;CAC5B,WAAW;AACZ;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,qBAAqB;CACrB,+BAA+B;CAC/B,YAAY;AACb;;AAEA;CACC,mBAAmB;CACnB,uBAAuB;CACvB,2BAA2B;CAC3B,kBAAkB;CAClB,WAAW;CACX,aAAa;CACb,uBAAuB;CACvB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;CAClB,WAAW;CACX,SAAS;AACV;;AAEA;CACC;EACC,UAAU;CACX;CACA;EACC,UAAU;CACX;AACD",
                    sourcesContent: ["body {\r\n\tbackground: #161616;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-weight: 400;\r\n\tpadding: 15px;\r\n\twidth: 290px;\r\n}\r\n\r\n#FACE-M-button-group {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tpadding-top: 10px;\r\n}\r\n\r\n.heading {\r\n\tcolor: #ff5500;\r\n\tfont-size: 18px;\r\n\tfont-weight: 700;\r\n\tletter-spacing: 0.8px;\r\n\tpadding-bottom: 10px;\r\n\ttext-align: start;\r\n}\r\n\r\n.content-container {\r\n\tpadding: 20px 0px;\r\n}\r\n\r\n.content-container:last-child {\r\n\tpadding: 20px 0px;\r\n\tpadding-bottom: 0px;\r\n}\r\n\r\n.sub-heading {\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\tfont-weight: 700;\r\n\ttext-align: start;\r\n}\r\n\r\n.info {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-size: 12px;\r\n\tfont-style: italic;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#FACE-M-creators {\r\n\tcolor: #fff;\r\n\tfont-size: 13px;\r\n}\r\n\r\n#FACE-M-button-group > .FACE-M-toggle:first-child {\r\n\tborder-radius: 4px 0 0 4px;\r\n}\r\n\r\n#FACE-M-button-group > .FACE-M-toggle:last-child {\r\n\tborder-radius: 0 4px 4px 0;\r\n}\r\n\r\n.FACE-M-toggle {\r\n\tbackground: #1f1f1f;\r\n\tborder: 1px solid #303030;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tcursor: pointer;\r\n\toverflow: hidden;\r\n\tpadding: 6px 12px;\r\n\ttransition: background 100ms;\r\n}\r\n\r\n.FACE-M-toggle:hover:not(.FACE-M-toggle-active) {\r\n\tbackground: #282828;\r\n}\r\n\r\n.FACE-M-toggle-active {\r\n\tbackground: #303030;\r\n\tcolor: #fff;\r\n}\r\n\r\n.FACE-M-form-div {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n}\r\n\r\n#FACE-M-input {\r\n\tbackground: #1f1f1f;\r\n\tborder: 0px;\r\n\tborder-bottom: 1px solid #fff;\r\n\tcolor: #fff;\r\n\theight: 29px;\r\n\tfont-size: 13px;\r\n\tpadding: 0px 10px;\r\n\tmargin-right: 10px;\r\n\twidth: 60px;\r\n}\r\n\r\n#FACE-M-input:disabled {\r\n\tbackground: #1f1f1f;\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n#FACE-M-input:disabled::placeholder {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n#FACE-M-input::placeholder {\r\n\tcolor: #fff;\r\n}\r\n\r\n#FACE-M-select {\r\n\tbackground: #1f1f1f;\r\n\tborder: 0px;\r\n\tcolor: #fff;\r\n\theight: 29px;\r\n\tfont-size: 13px;\r\n\tmargin-right: 10px;\r\n\twidth: 70px;\r\n}\r\n\r\n.FACE-M-form-desc {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-size: 11px;\r\n\tfont-weight: 700;\r\n\ttext-align: start;\r\n}\r\n\r\n.FACE-M-form-desc-disabled {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-size: 11px;\r\n\tfont-weight: 700;\r\n\ttext-align: start;\r\n}\r\n\r\n.FACE-M-submit-btn {\r\n\tbackground: #ff5500;\r\n\tborder: 0px;\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tfont-size: 12px;\r\n\tfont-weight: 600;\r\n\theight: 28px;\r\n\tmargin-left: auto;\r\n\tmargin-right: 0;\r\n\ttext-transform: uppercase;\r\n\ttransition: background 100ms;\r\n\twidth: 85px;\r\n}\r\n\r\n.FACE-M-submit-btn:hover:not(:disabled) {\r\n\tbackground: #ff5500b3;\r\n}\r\n\r\n.FACE-M-submit-btn:active:not(:disabled) {\r\n\tbackground: #f87b3d8b;\r\n}\r\n\r\n.FACE-M-submit-btn:disabled {\r\n\tbackground: #fea3756c;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tcursor: auto;\r\n}\r\n\r\n.FACE-M-feedback {\r\n\talign-items: center;\r\n\tanimation: fadeIn 0.25s;\r\n\tbackground: rgb(0, 153, 51);\r\n\tborder-radius: 3px;\r\n\tcolor: #fff;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 14px;\r\n\tfont-weight: 600;\r\n\tmax-height: 40px;\r\n\tpadding: 10px 25px;\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 10px;\r\n}\r\n\r\n@keyframes fadeIn {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n"],
                    sourceRoot: ""
                }]);
                const i = a
            },
            645: t => {
                t.exports = function(t) {
                    var n = [];
                    return n.toString = function() {
                        return this.map((function(n) {
                                var r = "",
                                    e = void 0 !== n[5];
                                return n[4] && (r += "@supports (".concat(n[4], ") {")), n[2] && (r += "@media ".concat(n[2], " {")), e && (r += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), r += t(n), e && (r += "}"), n[2] && (r += "}"), n[4] && (r += "}"), r
                            }))
                            .join("")
                    }, n.i = function(t, r, e, o, A) {
                        "string" == typeof t && (t = [
                            [null, t, void 0]
                        ]);
                        var a = {};
                        if (e)
                            for (var i = 0; i < this.length; i++) {
                                var s = this[i][0];
                                null != s && (a[s] = !0)
                            }
                        for (var c = 0; c < t.length; c++) {
                            var C = [].concat(t[c]);
                            e && a[C[0]] || (void 0 !== A && (void 0 === C[5] || (C[1] = "@layer".concat(C[5].length > 0 ? " ".concat(C[5]) : "", " {")
                                .concat(C[1], "}")), C[5] = A), r && (C[2] ? (C[1] = "@media ".concat(C[2], " {")
                                .concat(C[1], "}"), C[2] = r) : C[2] = r), o && (C[4] ? (C[1] = "@supports (".concat(C[4], ") {")
                                .concat(C[1], "}"), C[4] = o) : C[4] = "".concat(o)), n.push(C))
                        }
                    }, n
                }
            },
            537: t => {
                t.exports = function(t) {
                    var n = t[1],
                        r = t[3];
                    if (!r) return n;
                    if ("function" == typeof btoa) {
                        var e = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                            o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),
                            A = "/*# ".concat(o, " */");
                        return [n].concat([A])
                            .join("\n")
                    }
                    return [n].join("\n")
                }
            },
            379: t => {
                var n = [];
                function r(t) {
                    for (var r = -1, e = 0; e < n.length; e++)
                        if (n[e].identifier === t) {
                            r = e;
                            break
                        } return r
                }
                function e(t, e) {
                    for (var A = {}, a = [], i = 0; i < t.length; i++) {
                        var s = t[i],
                            c = e.base ? s[0] + e.base : s[0],
                            C = A[c] || 0,
                            l = "".concat(c, " ")
                            .concat(C);
                        A[c] = C + 1;
                        var d = r(l),
                            g = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3],
                                supports: s[4],
                                layer: s[5]
                            };
                        if (-1 !== d) n[d].references++, n[d].updater(g);
                        else {
                            var f = o(g, e);
                            e.byIndex = i, n.splice(i, 0, {
                                identifier: l,
                                updater: f,
                                references: 1
                            })
                        }
                        a.push(l)
                    }
                    return a
                }
                function o(t, n) {
                    var r = n.domAPI(n);
                    return r.update(t),
                        function(n) {
                            if (n) {
                                if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap && n.supports === t.supports && n.layer === t.layer) return;
                                r.update(t = n)
                            } else r.remove()
                        }
                }
                t.exports = function(t, o) {
                    var A = e(t = t || [], o = o || {});
                    return function(t) {
                        t = t || [];
                        for (var a = 0; a < A.length; a++) {
                            var i = r(A[a]);
                            n[i].references--
                        }
                        for (var s = e(t, o), c = 0; c < A.length; c++) {
                            var C = r(A[c]);
                            0 === n[C].references && (n[C].updater(), n.splice(C, 1))
                        }
                        A = s
                    }
                }
            },
            569: t => {
                var n = {};
                t.exports = function(t, r) {
                    var e = function(t) {
                        if (void 0 === n[t]) {
                            var r = document.querySelector(t);
                            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                                r = r.contentDocument.head
                            } catch (t) {
                                r = null
                            }
                            n[t] = r
                        }
                        return n[t]
                    }(t);
                    if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    e.appendChild(r)
                }
            },
            216: t => {
                t.exports = function(t) {
                    var n = document.createElement("style");
                    return t.setAttributes(n, t.attributes), t.insert(n, t.options), n
                }
            },
            565: (t, n, r) => {
                t.exports = function(t) {
                    var n = r.nc;
                    n && t.setAttribute("nonce", n)
                }
            },
            795: t => {
                t.exports = function(t) {
                    var n = t.insertStyleElement(t);
                    return {
                        update: function(r) {
                            ! function(t, n, r) {
                                var e = "";
                                r.supports && (e += "@supports (".concat(r.supports, ") {")), r.media && (e += "@media ".concat(r.media, " {"));
                                var o = void 0 !== r.layer;
                                o && (e += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), e += r.css, o && (e += "}"), r.media && (e += "}"), r.supports && (e += "}");
                                var A = r.sourceMap;
                                A && "undefined" != typeof btoa && (e += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A)))), " */")), n.styleTagTransform(e, t, n.options)
                            }(n, t, r)
                        },
                        remove: function() {
                            ! function(t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t)
                            }(n)
                        }
                    }
                }
            },
            589: t => {
                t.exports = function(t, n) {
                    if (n.styleSheet) n.styleSheet.cssText = t;
                    else {
                        for (; n.firstChild;) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(t))
                    }
                }
            }
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var A = n[e] = {
            id: e,
            exports: {}
        };
        return t[e](A, A.exports, r), A.exports
    }
    r.n = t => {
        var n = t && t.__esModule ? () => t.default : () => t;
        return r.d(n, {
            a: n
        }), n
    }, r.d = (t, n) => {
        for (var e in n) r.o(n, e) && !r.o(t, e) && Object.defineProperty(t, e, {
            enumerable: !0,
            get: n[e]
        })
    }, r.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n), r.nc = void 0, (() => {
        var t = r(379),
            n = r.n(t),
            e = r(795),
            o = r.n(e),
            A = r(569),
            a = r.n(A),
            i = r(565),
            s = r.n(i),
            c = r(216),
            C = r.n(c),
            l = r(589),
            d = r.n(l),
            g = r(994),
            f = {};
        f.styleTagTransform = d(), f.setAttributes = s(), f.insert = a()
            .bind(null, "head"), f.domAPI = o(), f.insertStyleElement = C(), n()(g.Z, f), g.Z && g.Z.locals && g.Z.locals;
        const p = "FACE-M",
            u = [{
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
            B = t => {
                const n = document.querySelector(`#${p}-input`);
                /^0*[1-9]\d*$/.test(t.target.value) && +t.target.value <= 999 ? n.value = t.target.value : n.value = t.target.value.slice(0, t.target.value.length - 1)
            },
            m = new Map,
            b = t => {
                const n = m.get(t);
                return n && "toggles" === t ? n.sort(((t, n) => t?.maxAge - n?.maxAge)) : n
            },
            x = (t, n) => {
                m.set(t, n), h(t, n)
            },
            h = (t, n) => new Promise((r => {
                chrome.storage.local.set({
                        [t]: n
                    })
                    .then((async () => r(!0)))
                    .catch((t => {
                        console.log(t), r(!1)
                    }))
            })),
            v = t => new Promise((n => {
                chrome.storage.local.get(t)
                    .then((r => n(null === t ? r : r?.[t])))
                    .catch((t => {
                        console.log(t), n(!1)
                    }))
            })),
            y = (t, n = null) => {
                const r = [...document.querySelector(`#${p}-form-edit`)
                        ?.children
                    ],
                    e = document.querySelector(`#${p}-heading`);
                let o = "Select button to edit";
                for (const n of r) n.disabled = t;
                if (!t) {
                    const t = document.querySelector(`#${p}-select`),
                        r = (t => {
                            const n = b("toggles");
                            if (n?.length > 0) return n.find((n => n.label === t))
                        })(n.textContent);
                    r?.type && (t.value = r.type), o = "Editing button"
                }
                e.textContent = o
            },
            E = (t, n) => {
                const r = document.createElement("button");
                return r.classList.add(n), r.addEventListener("click", M), r.textContent = t, r
            },
            M = t => {
                const n = document.querySelectorAll(`.${p}-toggle-active`);
                if (t.currentTarget.classList.contains(`${p}-toggle-active`)) t.currentTarget.classList.remove(`${p}-toggle-active`), y(!0);
                else {
                    for (const t of n) t.classList.remove(`${p}-toggle-active`);
                    t.currentTarget?.classList.add(`${p}-toggle-active`), y(!1, t.currentTarget)
                }
            },
            w = async () => {
                const t = document.getElementById(`${p}-button-group`),
                    n = await v("toggles");
                x("toggles", n), ((t, n) => {
                    for (const r of t) {
                        const t = E(r.label, `${p}-toggle`);
                        n.append(t)
                    }
                })(n, t)
            }, k = async t => {
                if (t?.toggles) {
                    const t = await v("toggles");
                    x("toggles", t), y(!0), [...document.querySelector(`#${p}-button-group`)
                        ?.children
                    ].forEach((t => {
                        t.classList.contains(`${p}-toggle`) && t.remove()
                    })), await w()
                }
            }, F = async t => {
                t.preventDefault();
                const n = new FormData(t.target),
                    r = +n.get("input"),
                    e = n.get("select"),
                    o = t.submitter.name;
                W[o](r, e), ((t, n) => {
                        (() => {
                            const t = document.querySelector(`.${p}-feedback`);
                            t && t.remove()
                        })();
                        const r = document.createElement("div");
                        r.classList.add(`${p}-feedback`), r.textContent = "Success", t.append(r), setTimeout((() => {
                            r.remove()
                        }), 1500)
                    })(t.target), document.querySelector(`#${p}-input`)
                    .value = null
            }, W = {
                edit: (t, n) => $(t, n),
                reset: () => z()
            }, $ = async (t, n) => {
                let r = b("toggles");
                const e = document.querySelector(`.${p}-toggle-active`)
                    ?.textContent,
                    o = r.findIndex((t => t.label === e));
                if (o >= 0) {
                    const e = {
                        label: `${t}${n[0]}`,
                        name: `${t} ${t>1?n:n.slice(0,n.length-1)}`,
                        amount: t,
                        type: n,
                        maxAge: S(t, n)
                    };
                    r[o] = e
                }
                await h("toggles", r.sort(((t, n) => t?.maxAge - n?.maxAge)))
            }, z = async () => {
                await h("toggles", u.sort(((t, n) => t?.maxAge - n?.maxAge)))
            }, S = (t, n) => {
                const r = 864e5;
                return {
                    days: r * t,
                    weeks: r * t * 7,
                    months: r * t * 30,
                    years: r * t * 365
                } [n]
            };
        (async () => {
            await (async () => {
                if (await (async () => {
                        const t = await (async () => await v(null))();
                        return "object" != typeof t || Object.keys(t)
                            ?.length < 1
                    })() && (await h("timeFrame", 6048e5), await h("toggles", u.sort(((t, n) => t?.maxAge - n?.maxAge)))), m.size < 1) {
                    const t = await v("timeFrame"),
                        n = await v("toggles");
                    x("timeFrame", t), x("toggles", n.sort(((t, n) => t?.maxAge - n?.maxAge)))
                }
            })(), chrome.storage.local.onChanged.removeListener(k), chrome.storage.local.onChanged.addListener(k), await (async () => {
                const t = document.querySelector(`#${p}-input`),
                    n = document.querySelector(`#${p}-form`);
                await w(), t.addEventListener("input", B), n.addEventListener("submit", F)
            })()
        })()
    })()
})();