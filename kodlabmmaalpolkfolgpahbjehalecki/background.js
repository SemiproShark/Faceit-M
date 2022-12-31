(() => {
    var t = {
            353: (t, e, r) => {
                t.exports = r(846)
            },
            846: (t, e, r) => {
                var o = r(960);
                e.operation = function(t) {
                    var r = e.timeouts(t);
                    return new o(r, {
                        forever: t && (t.forever || t.retries === 1 / 0),
                        unref: t && t.unref,
                        maxRetryTime: t && t.maxRetryTime
                    })
                }, e.timeouts = function(t) {
                    if (t instanceof Array) return [].concat(t);
                    var e = {
                        retries: 10,
                        factor: 2,
                        minTimeout: 1e3,
                        maxTimeout: 1 / 0,
                        randomize: !1
                    };
                    for (var r in t) e[r] = t[r];
                    if (e.minTimeout > e.maxTimeout) throw new Error("minTimeout is greater than maxTimeout");
                    for (var o = [], i = 0; i < e.retries; i++) o.push(this.createTimeout(i, e));
                    return t && t.forever && !o.length && o.push(this.createTimeout(i, e)), o.sort((function(t, e) {
                        return t - e
                    })), o
                }, e.createTimeout = function(t, e) {
                    var r = e.randomize ? Math.random() + 1 : 1,
                        o = Math.round(r * Math.max(e.minTimeout, 1) * Math.pow(e.factor, t));
                    return Math.min(o, e.maxTimeout)
                }, e.wrap = function(t, r, o) {
                    if (r instanceof Array && (o = r, r = null), !o)
                        for (var i in o = [], t) "function" == typeof t[i] && o.push(i);
                    for (var n = 0; n < o.length; n++) {
                        var s = o[n],
                            a = t[s];
                        t[s] = function(o) {
                            var i = e.operation(r),
                                n = Array.prototype.slice.call(arguments, 1),
                                s = n.pop();
                            n.push((function(t) {
                                i.retry(t) || (t && (arguments[0] = i.mainError()), s.apply(this, arguments))
                            })), i.attempt((function() {
                                o.apply(t, n)
                            }))
                        }.bind(t, a), t[s].options = r
                    }
                }
            },
            960: t => {
                function e(t, e) {
                    "boolean" == typeof e && (e = {
                        forever: e
                    }), this._originalTimeouts = JSON.parse(JSON.stringify(t)), this._timeouts = t, this._options = e || {}, this._maxRetryTime = e && e.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
                }
                t.exports = e, e.prototype.reset = function() {
                    this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0)
                }, e.prototype.stop = function() {
                    this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null
                }, e.prototype.retry = function(t) {
                    if (this._timeout && clearTimeout(this._timeout), !t) return !1;
                    var e = (new Date)
                        .getTime();
                    if (t && e - this._operationStart >= this._maxRetryTime) return this._errors.push(t), this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
                    this._errors.push(t);
                    var r = this._timeouts.shift();
                    if (void 0 === r) {
                        if (!this._cachedTimeouts) return !1;
                        this._errors.splice(0, this._errors.length - 1), r = this._cachedTimeouts.slice(-1)
                    }
                    var o = this;
                    return this._timer = setTimeout((function() {
                        o._attempts++, o._operationTimeoutCb && (o._timeout = setTimeout((function() {
                            o._operationTimeoutCb(o._attempts)
                        }), o._operationTimeout), o._options.unref && o._timeout.unref()), o._fn(o._attempts)
                    }), r), this._options.unref && this._timer.unref(), !0
                }, e.prototype.attempt = function(t, e) {
                    this._fn = t, e && (e.timeout && (this._operationTimeout = e.timeout), e.cb && (this._operationTimeoutCb = e.cb));
                    var r = this;
                    this._operationTimeoutCb && (this._timeout = setTimeout((function() {
                            r._operationTimeoutCb()
                        }), r._operationTimeout)), this._operationStart = (new Date)
                        .getTime(), this._fn(this._attempts)
                }, e.prototype.try = function(t) {
                    console.log("Using RetryOperation.try() is deprecated"), this.attempt(t)
                }, e.prototype.start = function(t) {
                    console.log("Using RetryOperation.start() is deprecated"), this.attempt(t)
                }, e.prototype.start = e.prototype.try, e.prototype.errors = function() {
                    return this._errors
                }, e.prototype.attempts = function() {
                    return this._attempts
                }, e.prototype.mainError = function() {
                    if (0 === this._errors.length) return null;
                    for (var t = {}, e = null, r = 0, o = 0; o < this._errors.length; o++) {
                        var i = this._errors[o],
                            n = i.message,
                            s = (t[n] || 0) + 1;
                        t[n] = s, s >= r && (e = i, r = s)
                    }
                    return e
                }
            }
        },
        e = {};
    function r(o) {
        var i = e[o];
        if (void 0 !== i) return i.exports;
        var n = e[o] = {
            exports: {}
        };
        return t[o](n, n.exports, r), n.exports
    }(() => {
        "use strict";
        var t = r(353);
        const e = new Set(["Failed to fetch", "NetworkError when attempting to fetch resource.", "The Internet connection appears to be offline.", "Network request failed", "fetch failed"]);
        class o extends Error {
            constructor(t) {
                super(), t instanceof Error ? (this.originalError = t, ({
                    message: t
                } = t)) : (this.originalError = new Error(t), this.originalError.stack = this.stack), this.name = "AbortError", this.message = t
            }
        }
        const i = t => void 0 === globalThis.DOMException ? new Error(t) : new DOMException(t);
        async function n(r, n) {
            return new Promise(((s, a) => {
                n = {
                    onFailedAttempt() {},
                    retries: 10,
                    ...n
                };
                const u = t.operation(n);
                u.attempt((async t => {
                    try {
                        s(await r(t))
                    } catch (r) {
                        if (!(r instanceof Error)) return void a(new TypeError(`Non-error was thrown: "${r}". You should only throw errors.`));
                        if (r instanceof o) u.stop(), a(r.originalError);
                        else if (r instanceof TypeError && (i = r.message, !e.has(i))) u.stop(), a(r);
                        else {
                            ((t, e, r) => {
                                const o = r.retries - (e - 1);
                                t.attemptNumber = e, t.retriesLeft = o
                            })(r, t, n);
                            try {
                                await n.onFailedAttempt(r)
                            } catch (t) {
                                return void a(t)
                            }
                            u.retry(r) || a(u.mainError())
                        }
                    }
                    var i
                })), n.signal && !n.signal.aborted && n.signal.addEventListener("abort", (() => {
                    u.stop();
                    const t = void 0 === n.signal.reason ? i("The operation was aborted.") : n.signal.reason;
                    a(t instanceof Error ? t : i(t))
                }), {
                    once: !0
                })
            }))
        }
        chrome.runtime.onMessage.addListener(((t, e, r) => {
            if (!t) return;
            const {
                path: o,
                token: i
            } = t, s = async function(t, e = null) {
                try {
                    const r = {
                            headers: {
                                ...(e = await (chrome?.cookies.get({
                                        name: "t",
                                        url: "https://faceit.com"
                                    })
                                    ?.value) || e) && {
                                    Authorization: `Bearer ${e}`
                                }
                            }
                        },
                        o = await n((() => fetch(`https://api.faceit.com${t}`, r)
                            .then((t => {
                                if (404 === t.status) throw new n.AbortError(t.statusText);
                                if (!t.ok) throw new Error(t.statusText);
                                return t
                            }))), {
                            retries: 3
                        });
                    return await o.json()
                } catch (t) {
                    return console.log(t), null
                }
            }(o, i);
            return s.then((t => r(t)))
                .catch((t => (console.log(t), !1))), !0
        }))
    })()
})();