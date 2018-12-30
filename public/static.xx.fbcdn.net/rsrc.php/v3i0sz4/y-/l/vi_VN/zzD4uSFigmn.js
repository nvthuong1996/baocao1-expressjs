if (self.CavalryLogger) {
    CavalryLogger.start_js(["\/yEam"]);
}

self.__DEV__ = self.__DEV__ || 0;
"use strict";




(function() {
    "use strict";
    var a = Array.prototype.indexOf;
    Array.prototype.includes || (Array.prototype.includes = function(d) {
        "use strict";
        if (d !== undefined && Array.isArray(this) && !Number.isNaN(d)) return a.apply(this, arguments) !== -1;
        var e = Object(this),
            f = e.length ? b(e.length) : 0;
        if (f === 0) return !1;
        var g = arguments.length > 1 ? c(arguments[1]) : 0,
            h = g < 0 ? Math.max(f + g, 0) : g,
            i = Number.isNaN(d);
        while (h < f) {
            var j = e[h];
            if (j === d || i && Number.isNaN(j)) return !0;
            h++
        }
        return !1
    });

    function b(a) {
        return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER)
    }

    function c(a) {
        a = Number(a);
        return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a
    }

    function d(a) {
        return a >= 0 ? 1 : -1
    }
})();
var __p;
(function() {
    var a = {},
        b = function(a, b) {
            if (!a && !b) return null;
            var c = {};
            typeof a !== "undefined" && (c.type = a);
            typeof b !== "undefined" && (c.signature = b);
            return c
        },
        c = function(a, c) {
            return b(a && /^[A-Z]/.test(a) ? a : undefined, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                return /\?/.test(a) ? "?" + a.replace("?", "") : a
            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : undefined)
        },
        d = function(a, b, c) {
            return a
        },
        e = function(a, b, d) {
            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
            if ("typechecks" in __transform_includes) {
                b = c(b ? b.name : undefined, d);
                b && __w(a, b)
            }
            return a
        },
        f = function(a, b, c) {
            return c.apply(a, b)
        },
        g = function(a, b, c, d) {
            d && d.params && __t.apply(a, d.params);
            c = c.apply(a, b);
            d && d.returns && __t([c, d.returns]);
            return c
        },
        h = function(b, c, d, e, f) {
            if (f) {
                f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                e = f.callId;
                a[e] = (a[e] || 0) + 1
            }
            return d.apply(b, c)
        };
    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = h, __bodyWrapper.getCodeUsage = function() {
        return a
    }, __bodyWrapper.clearCodeUsage = function() {
        a = {}
    }) : "typechecks" in __transform_includes ? __bodyWrapper = g : __bodyWrapper = f)
})();
__t = function(a) {
    return a[0]
}, __w = function(a) {
    return a
};



(function(a, b) {
    var c = "keys",
        d = "values",
        e = "entries",
        f = function() {
            var a = h(Array),
                f;
            a || (f = function() {
                function a(a, b) {
                    "use strict";
                    this.$1 = a, this.$2 = b, this.$3 = 0
                }
                a.prototype.next = function() {
                    "use strict";
                    if (this.$1 == null) return {
                        value: b,
                        done: !0
                    };
                    var a = this.$1,
                        f = this.$1.length,
                        g = this.$3,
                        h = this.$2;
                    if (g >= f) {
                        this.$1 = b;
                        return {
                            value: b,
                            done: !0
                        }
                    }
                    this.$3 = g + 1;
                    if (h === c) return {
                        value: g,
                        done: !1
                    };
                    else if (h === d) return {
                        value: a[g],
                        done: !1
                    };
                    else if (h === e) return {
                        value: [g, a[g]],
                        done: !1
                    }
                };
                a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    "use strict";
                    return this
                };
                return a
            }());
            return {
                keys: a ? function(a) {
                    return a.keys()
                } : function(a) {
                    return new f(a, c)
                },
                values: a ? function(a) {
                    return a.values()
                } : function(a) {
                    return new f(a, d)
                },
                entries: a ? function(a) {
                    return a.entries()
                } : function(a) {
                    return new f(a, e)
                }
            }
        }(),
        g = function() {
            var a = h(String),
                c;
            a || (c = function() {
                function a(a) {
                    "use strict";
                    this.$1 = a, this.$2 = 0
                }
                a.prototype.next = function() {
                    "use strict";
                    if (this.$1 == null) return {
                        value: b,
                        done: !0
                    };
                    var a = this.$2,
                        c = this.$1,
                        d = c.length;
                    if (a >= d) {
                        this.$1 = b;
                        return {
                            value: b,
                            done: !0
                        }
                    }
                    var e = c.charCodeAt(a);
                    if (e < 55296 || e > 56319 || a + 1 === d) e = c[a];
                    else {
                        d = c.charCodeAt(a + 1);
                        d < 56320 || d > 57343 ? e = c[a] : e = c[a] + c[a + 1]
                    }
                    this.$2 = a + e.length;
                    return {
                        value: e,
                        done: !1
                    }
                };
                a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    "use strict";
                    return this
                };
                return a
            }());
            return {
                keys: function() {
                    throw TypeError("Strings default iterator doesn't implement keys.")
                },
                values: a ? function(a) {
                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                } : function(a) {
                    return new c(a)
                },
                entries: function() {
                    throw TypeError("Strings default iterator doesn't implement entries.")
                }
            }
        }();

    function h(a) {
        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
    }

    function i(a, b) {
        "use strict";
        this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0
    }
    i.prototype.next = function() {
        "use strict";
        var a = this.$3.length,
            f = this.$4,
            g = this.$2,
            h = this.$3[f];
        if (f >= a) {
            this.$1 = b;
            return {
                value: b,
                done: !0
            }
        }
        this.$4 = f + 1;
        if (g === c) return {
            value: h,
            done: !1
        };
        else if (g === d) return {
            value: this.$1[h],
            done: !1
        };
        else if (g === e) return {
            value: [h, this.$1[h]],
            done: !1
        }
    };
    i.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
        "use strict";
        return this
    };
    var j = {
        keys: function(a) {
            return new i(a, c)
        },
        values: function(a) {
            return new i(a, d)
        },
        entries: function(a) {
            return new i(a, e)
        }
    };

    function k(a, b) {
        if (typeof a === "string") return g[b || d](a);
        else if (Array.isArray(a)) return f[b || d](a);
        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        else return j[b || e](a)
    }
    Object.assign(k, {
        KIND_KEYS: c,
        KIND_VALUES: d,
        KIND_ENTRIES: e,
        keys: function(a) {
            return k(a, c)
        },
        values: function(a) {
            return k(a, d)
        },
        entries: function(a) {
            return k(a, e)
        },
        generic: j.entries
    });
    a.FB_enumerate = k
})(typeof global === "undefined" ? this : global);




typeof window !== "undefined" && window.JSON && JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]' && (JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function(d, e, f) {
        d = a.call(this, d, e, f);
        d && (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")), -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d
    }
}(JSON.stringify));


(function() {
    var a = Object.prototype.hasOwnProperty;
    Object.entries = function(b) {
        if (b == null) throw new TypeError("Object.entries called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push([d, b[d]]);
        return c
    };
    Object.values = function(b) {
        if (b == null) throw new TypeError("Object.values called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push(b[d]);
        return c
    }
})();


(function(a) {
    a.__m = function(a, b) {
        a.__SMmeta = b;
        return a
    }
})(this);


String.prototype.contains || (String.prototype.contains = String.prototype.includes);
String.prototype.padStart || (String.prototype.padStart = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return b.slice(0, a) + String(this)
    }
}), String.prototype.padEnd || (String.prototype.padEnd = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a)
    }
});
String.prototype.trimLeft || (String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "")
});


(function(a) {
    a = a.babelHelpers = {};
    var b = Object.prototype.hasOwnProperty;
    a.inherits = function(a, b) {
        Object.assign(a, b);
        a.prototype = Object.create(b && b.prototype);
        a.prototype.constructor = a;
        a.__superConstructor__ = b;
        return b
    };
    a._extends = Object.assign;
    a["extends"] = a._extends;
    a.construct = function(a, b) {
        return new(Function.prototype.bind.apply(a, [null].concat(b)))()
    };
    a.objectWithoutProperties = function(a, c) {
        var d = {};
        for (var e in a) {
            if (!b.call(a, e) || c.indexOf(e) >= 0) continue;
            d[e] = a[e]
        }
        return d
    };
    a.taggedTemplateLiteralLoose = function(a, b) {
        b || (b = a.slice(0));
        a.raw = b;
        return a
    };
    a.bind = Function.prototype.bind
})(typeof global === "undefined" ? self : global);
(function(a) {
    if (a.require) return;
    var b = (a.Env || {}).gk_require_dic,
        c = null,
        d = [],
        e = b ? Object.create(null) : {},
        f = b ? Object.create(null) : {},
        g = 0,
        h = 0,
        i = 0,
        j = 1,
        k = 2,
        l = 4,
        m = 8,
        n = {},
        o = Object.prototype.hasOwnProperty,
        p = Object.prototype.toString;

    function q(a) {
        a = Array.prototype.slice.call(a);
        var b = {},
            c, d, f, g;
        while (a.length) {
            d = a.shift();
            if (b[d]) continue;
            b[d] = !0;
            f = e[d];
            if (!f || Q(f)) continue;
            if (f.dependencies)
                for (c = 0; c < f.dependencies.length; c++) g = f.dependencies[c], Q(g) || a.push(g.id)
        }
        for (d in b) o.call(b, d) && a.push(d);
        b = [];
        for (c = 0; c < a.length; c++) {
            d = a[c];
            var h = d;
            f = e[d];
            if (!f || !f.dependencies) h += " is not defined";
            else if (Q(f)) h += " is ready";
            else {
                d = [];
                for (var i = 0; i < f.dependencies.length; i++) g = f.dependencies[i], (!e[g] || !Q(e[g])) && d.push(g.id);
                h += " is waiting for " + d.join(", ")
            }
            b.push(h)
        }
        return b.join("\n")
    }

    function r(a) {
        this.name = "ModuleError", this.message = a, this.stack = Error(a).stack, this.framesToPop = 2
    }
    r.prototype = Object.create(Error.prototype);
    r.prototype.constructor = r;
    var s = (a.Env || {}).profile_require_factories,
        t = a.performance || a.msPerformance || a.webkitPerformance || {},
        u;
    if (t.now && t.timing && t.timing.navigationStart) {
        var v = t.timing.navigationStart;
        u = function() {
            return t.now() + v
        }
    } else u = function() {
        return Date.now()
    };
    var w = 0,
        x = 0;

    function y(a) {
        x++;
        var b = e[a];
        if (b && b.exports != null) {
            b.refcount-- === 1 && (e[a] = void 0);
            return b.exports
        }
        return A(a)
    }

    function z(b) {
        var c = e[b];
        b = f[b];
        if (c.factoryLength === -1) {
            var d = s && a.ProfilingCounters,
                g;
            d && (g = d.startTiming("FACTORY_COMPILE_TIME"));
            c.factoryLength = c.factory.length;
            g != null && (d = d.stopTiming(g), b.compileTime += d)
        }
        return c.factoryLength
    }

    function A(b) {
        if (a.ErrorUtils && !a.ErrorUtils.inGuard()) return a.ErrorUtils.applyWithGuard(A, null, [b]);
        var d = e[b];
        if (!d) {
            var g = 'Requiring unknown module "' + b + '"';
            throw new r(g)
        }
        var h;
        if (d.hasError) throw new r('Requiring module "' + b + '" which threw an exception: ' + d.error.message);
        if (!Q(d)) throw new r('Requiring module "' + b + '" with unresolved dependencies: ' + q([b]));
        g = d.exports = {};
        var i = d.factory;
        if (p.call(i) === "[object Function]") {
            var j = d.dependencies,
                l = j.length;
            try {
                try {
                    V(d)
                } catch (a) {
                    B(a, b)
                }
                var o = [],
                    t = l;
                d.special & m && (o = c.slice(0), o[c.length - 2] = d, o[c.length - 1] = g, t += o.length);
                if (d.special & k) {
                    g = z(b);
                    t = Math.min(l + o.length, g)
                }
                for (var g = 0; g < l; g++) {
                    var v = j[g];
                    o.length < t && o.push(y.call(null, v.id))
                }++w;
                v = s && a.ProfilingCounters;
                var x;
                v && (v.incrementCounter("FACTORY_COUNT", 1), x = v.startTiming("FACTORY_EXEC_TIME"));
                try {
                    t = i.apply(d.context || a, o)
                } catch (a) {
                    B(a, b)
                } finally {
                    if (s) {
                        j = u();
                        l = 0;
                        x != null && (l = v.stopTiming(x));
                        g = f[d.id];
                        g.factoryTime = l;
                        g.factoryEnd = j;
                        if (i.__SMmeta)
                            for (var C in i.__SMmeta) Object.prototype.hasOwnProperty.call(i.__SMmeta, C) && (g[C] = i.__SMmeta[C])
                    }
                }
            } catch (a) {
                d.hasError = !0;
                d.error = a;
                d.exports = null;
                throw a
            }
            t && (d.exports = t);
            if (typeof d.exports === "function") {
                o = d.exports;
                v = o.__superConstructor__;
                (!o.displayName || v && v.displayName === o.displayName) && (o.displayName = (o.name || "(anonymous)") + " [from " + b + "]")
            }
            d.factoryFinished = !0
        } else d.exports = i;
        l = "__isRequired__" + b;
        j = e[l];
        j && !Q(j) && H(l, n);
        d.refcount-- === 1 && (e[b] = void 0);
        return d.exports
    }

    function B(a, b) {
        a instanceof Error || (a = new Error(a));
        if (e.ex && e.erx) {
            var c = y.call(null, "ex"),
                d = y.call(null, "erx");
            d = d(a.message);
            d[0].indexOf(' from module "%s"') < 0 && (d[0] += ' from module "%s"', d[d.length] = b);
            a.message = c.apply(null, d)
        }
        throw a
    }

    function C() {
        var a = 0;
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].factoryTime);
        return a
    }

    function D() {
        var a = 0;
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].compileTime);
        return a
    }

    function E() {
        return w
    }

    function F() {
        return x
    }

    function G() {
        var a = {};
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
        return a
    }

    function H(a, b, c, g, h, i, j) {
        b === undefined ? (b = [], c = a, a = M()) : c === undefined && (c = b, p.call(a) === "[object Array]" ? (b = a, a = M(b.join(","))) : b = []);
        var k = {
                cancel: K.bind(this, a)
            },
            l = e[a];
        if (!b && !c && i) {
            I(a).refcount += i;
            return k
        }
        f[a] = {
            id: a,
            dependencies: b,
            meta: j,
            category: g,
            defined: s ? u() : null,
            compileTime: null,
            factoryTime: null,
            factoryEnd: null
        };
        j = b.map(I);
        l = e[a];
        if (l) {
            if (l.dependencies && !l.reload) return k;
            i && (l.refcount += i);
            l.factory = c;
            l.dependencies = j;
            l.context = h;
            l.special = g
        } else l = new J(a, i || 0, null, c, j, h, g), e[a] = l;
        U(l);
        if (d.length > 0) {
            b = d;
            d = [];
            while (b.length > 0) y.call(null, b.pop().id)
        }
        return k
    }

    function I(a) {
        var b = e[a];
        if (b) return b;
        b = new J(a, 0);
        e[a] = b;
        return b
    }

    function J(a, b, c, d, e, f, g) {
        this.id = a, this.refcount = b, this.exports = c || null, this.factory = d, this.factoryLength = -1, this.factoryFinished = !1, this.dependencies = e, this.depPosition = 0, this.context = f, this.special = g || 0, this.hasError = !1, this.error = null, this.ranRecursiveSideEffects = !1, this.sideEffectDependencyException = null, this.nextDepWaitingHead = null, this.nextDepWaitingNext = null, this.tarjanGeneration = -1, this.tarjanLow = 0, this.tarjanIndex = 0, this.tarjanOnStack = !1
    }

    function K(a) {
        if (!e[a]) return;
        var b = e[a];
        e[a] = void 0;
        if (b.dependencies)
            for (var a = 0; a < b.dependencies.length; a++) {
                var c = b.dependencies[a];
                c.refcount-- === 1 && K(c.id)
            }
    }

    function L(a, b, c) {
        return H("__requireLazy__" + (a.length > 0 ? a.join(",") + "__" : "") + g++, a, $()(b, "requireLazy", {
            propagationType: 0
        }), j, c, 1)
    }

    function M(a) {
        return "__mod__" + (a ? a + "__" : "") + g++
    }

    function N(a, b, c) {
        c.tarjanGeneration != h && (c.tarjanGeneration = h, c.tarjanLow = c.tarjanIndex = i++, c.tarjanOnStack = !0, b.push(c));
        if (c.dependencies != null)
            for (var d = c.depPosition; d < c.dependencies.length; d++) {
                var e = c.dependencies[d];
                e.tarjanGeneration != h ? (N(a, b, e), c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)) : e.tarjanOnStack && (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex))
            }
        if (c.tarjanLow == c.tarjanIndex) {
            e = [];
            do {
                d = b.pop();
                d.tarjanOnStack = !1;
                e.push(d);
                if (c == b[0] && d != c && d.dependencies != null)
                    for (var f = d.depPosition; f < d.dependencies.length; f++) {
                        var g = d.dependencies[f];
                        !Q(g) && a.indexOf(g) == -1 && b.indexOf(g) == -1 && e.indexOf(g) == -1 && a.push(g)
                    }
            } while (d != c)
        }
    }

    function O(a) {
        h++, N(a.dependencies, [], a), a.depPosition++, U(a)
    }

    function P(a, b) {
        var c = b;
        while (!0) {
            if (c.dependencies && c.depPosition != c.dependencies.length) c = c.dependencies[c.depPosition];
            else break;
            if (c == a) {
                O(a);
                return
            }
        }
        a.nextDepWaitingNext = b.nextDepWaitingHead;
        b.nextDepWaitingHead = a
    }

    function Q(a) {
        return a.dependencies != null && a.depPosition >= a.dependencies.length
    }

    function R(a) {
        a.depPosition++, U(a)
    }

    function S(a) {
        var b = a.nextDepWaitingHead;
        a.nextDepWaitingHead = null;
        while (b !== null) {
            a = b;
            b = a.nextDepWaitingNext;
            a.nextDepWaitingNext = null;
            var c = !e[a.id];
            c || R(a)
        }
    }

    function T(a) {
        return a.special & j
    }

    function U(a) {
        while (a.depPosition < a.dependencies.length) {
            var b = a.dependencies[a.depPosition],
                c = Q(b);
            if (!c && a != b) {
                P(a, b);
                return
            }
            a.depPosition++
        }
        T(a) && d.push(a);
        a.nextDepWaitingHead !== null && S(a)
    }

    function V(a) {
        if (a.sideEffectDependencyException) throw a.sideEffectDependencyException;
        if (a.ranRecursiveSideEffects) return;
        a.ranRecursiveSideEffects = !0;
        var b = a.dependencies;
        if (b)
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    V(d)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
                if (d.special & l) try {
                    y.call(null, d.id)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
            }
    }

    function W(a, b) {
        e[a] = new J(a, 0, b), f[a] = {
            id: a,
            dependencies: [],
            category: 0,
            compileTime: null,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryEnd: null
        }
    }
    W("module", 0);
    W("exports", 0);
    W("define", H);
    W("global", a);
    W("require", y);
    W("requireDynamic", X);
    W("requireLazy", L);
    W("requireWeak", Y);
    W("ifRequired", Z);
    c = [y.call(null, "global"), y.call(null, "require"), y.call(null, "requireDynamic"), y.call(null, "requireLazy"), null, null];
    H.amd = {};
    a.define = H;
    a.require = y;
    a.requireDynamic = X;
    a.requireLazy = L;

    function X(a, b) {
        throw new ReferenceError("requireDynamic is not defined")
    }

    function Y(a, b) {
        Z.call(null, a, function(a) {
            b(a)
        }, function() {
            H("__requireWeak__" + a + "__" + g++, ["__isRequired__" + a], $()(function() {
                b(e[a].exports)
            }, "requireWeak"), j, null, 1)
        })
    }

    function Z(a, b, c) {
        a = e[a];
        if (a && a.factoryFinished) {
            if (typeof b === "function") return b(a.exports)
        } else if (typeof c === "function") return c()
    }
    b = {
        getModules: function() {
            var a = {};
            for (var b in e) e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
            return a
        },
        modulesMap: e,
        debugUnresolvedDependencies: q
    };

    function aa(a) {
        return a
    }

    function $() {
        return a.TimeSlice && a.TimeSlice.guard || aa
    }
    W("__getFactoryTime", C);
    W("__getCompileTime", D);
    W("__getTotalFactories", E);
    W("__getTotalRequireCalls", F);
    W("__getModuleTimeDetails", G);
    W("__debug", b);
    a.__d = function(a, b, c, d) {
        $()(function() {
            H(a, b, c, (d || k) | m, null, null, null)
        }, "define " + a, {
            root: !0
        })()
    }
})(this);

(function(a) {
    var b = a.performance;
    b && b.setResourceTimingBufferSize && (b.setResourceTimingBufferSize(1e5), b.onresourcetimingbufferfull = function() {
        a.__isresourcetimingbufferfull = !0
    }, b.setResourceTimingBufferSize = function() {})
})(this);
__d("javascript_shared_TAAL_OpCode", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3
    })
}), null);
__d("TAALOpcodes", ["javascript_shared_TAAL_OpCode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        previousFile: function() {
            return g.PREVIOUS_FILE
        },
        previousFrame: function() {
            return g.PREVIOUS_FRAME
        },
        previousDirectory: function() {
            return g.PREVIOUS_DIR
        },
        getString: function(a) {
            return a && a.length ? " TAAL[" + a.join(";") + "]" : ""
        }
    };
    e.exports = a
}), null);
__d("TAAL", ["TAALOpcodes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        blameToPreviousFile: function(a) {
            return this.applyOpcodes(a, [g.previousFile()])
        },
        blameToPreviousFrame: function(a) {
            return this.applyOpcodes(a, [g.previousFrame()])
        },
        blameToPreviousDirectory: function(a) {
            return this.applyOpcodes(a, [g.previousDirectory()])
        },
        applyOpcodes: function(a, b) {
            return a + g.getString(b)
        }
    };
    e.exports = a
}), null);
__d("eprintf", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = c.map(function(a) {
                return String(a)
            }),
            f = a.split("%s").length - 1;
        if (f !== e.length) return g("eprintf args number mismatch: %s", JSON.stringify([a].concat(e)));
        var h = 0;
        return a.replace(/%s/g, function() {
            return String(e[h++])
        })
    }
    e.exports = g
}), null);
__d("ex", ["eprintf"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = c.map(function(a) {
                return String(a)
            }),
            f = a.split("%s").length - 1;
        return f !== e.length ? h("ex args number mismatch: %s", JSON.stringify([a].concat(e))) : h._prefix + JSON.stringify([a].concat(e)) + h._suffix
    }
    h._prefix = "<![EX[";
    h._suffix = "]]>";
    e.exports = h
}), null);
__d("sprintf", [], (function(a, b, c, d, e, f) {
    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = 0;
        return a.replace(/%s/g, function() {
            return String(c[e++])
        })
    }
    e.exports = a
}), null);
__d("invariant", ["TAAL", "ex", "sprintf"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    var j = h;

    function a(a, b) {
        __p && __p();
        if (!a) {
            var c;
            if (b === undefined) c = new Error(g.blameToPreviousFrame("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."));
            else {
                for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
                c = new Error(g.blameToPreviousFrame(j.apply(undefined, [b].concat(e))));
                c.name = "Invariant Violation";
                c.messageWithParams = [b].concat(e)
            }
            throw c
        }
    }
    e.exports = a
}), null);
__d("ArbiterToken", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a(a, b) {
        this.$1 = a, this.$2 = b
    }
    a.prototype.unsubscribe = function() {
        for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
        this.$2.length = 0
    };
    a.prototype.isForArbiterInstance = function(a) {
        this.$1 || g(0);
        return this.$1 === a
    };
    e.exports = a
}), null);
__d("Env", [], (function(a, b, c, d, e, f) {
    b = {
        start: Date.now(),
        nocatch: !1,
        ajaxpipe_token: null
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    e.exports = b
}), null);
__d("ManagedError", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        Error.prototype.constructor.call(this, a), this.message = a, this.innerError = b
    }
    a.prototype = new Error();
    a.prototype.constructor = a;
    e.exports = a
}), null);
__d("LogviewForcedKeyError", ["ManagedError"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    b = babelHelpers.inherits(a, g);
    h = b && b.prototype;

    function a(a, b) {
        "use strict";
        h.constructor.call(this, b, a)
    }
    a.prototype.getCause = function() {
        "use strict";
        return this.innerError
    };
    a.prototype.getForcedCategoryKey = function() {
        "use strict";
        return this.message
    };
    e.exports = a
}), null);
__d("erx", ["ex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a(a) {
        __p && __p();
        if (typeof a !== "string") return a;
        var b = a.indexOf(g._prefix),
            c = a.lastIndexOf(g._suffix);
        if (b < 0 || c < 0) return [a];
        var d = b + g._prefix.length,
            e = c + g._suffix.length;
        if (d >= c) return ["erx slice failure: %s", a];
        b = a.substring(0, b);
        e = a.substring(e);
        a = a.substring(d, c);
        try {
            d = JSON.parse(a);
            d[0] = b + d[0] + e;
            return d
        } catch (b) {
            return ["erx parse failure: %s because %s", a, b.message]
        }
    }
    e.exports = a
}), null);
__d("removeFromArray", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        b = a.indexOf(b);
        b !== -1 && a.splice(b, 1)
    }
    e.exports = a
}), null);
__d("ErrorUtils", ["Env", "LogviewForcedKeyError", "eprintf", "erx", "removeFromArray", "sprintf"], (function(a, b, c, d, e, f, g, h, i, j, k, l) {
    __p && __p();
    var m = "<anonymous guard>",
        n = "<generated guard>",
        o = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
        p = "<global.react>",
        q = /^https?:\/\//i,
        r = /^Type Mismatch for/,
        s = /(.*)[@\s][^\s]+$/,
        t = /^at .*eval eval (at .*\:\d+\:\d+), .*$/,
        u = [],
        v, w = [],
        x = 50,
        y = [],
        z = !1,
        A = !1,
        B = !1,
        C = /\bnocatch\b/.test(location.search),
        D = ["Unknown script code", "Function code", "eval code"];
    g.stack_trace_limit && Error.stackTraceLimit != null && (Error.stackTraceLimit = g.stack_trace_limit);

    function E(a) {
        a = a.columnNumber || a.column;
        return a != null ? String(a) : ""
    }

    function F(a) {
        return a[0] && a[0].column || ""
    }

    function G(a) {
        for (var b = 0; b < D.length; b++) {
            var c = " " + D[b];
            if (a.endsWith(c)) return [a, a.substring(0, a.length - c.length)]
        }
        return null
    }

    function H(a) {
        a = a.lineNumber || a.line;
        return a != null ? String(a) : ""
    }

    function I(a) {
        return a[0] && a[0].line || ""
    }

    function J(a) {
        a = a.fileName || a.sourceURL;
        return a != null ? String(a) : ""
    }

    function K(a) {
        return a[0] && a[0].script || ""
    }

    function L(a) {
        if (!a) return null;
        a = a.split("\n");
        a.splice(0, 1);
        return a.map(function(a) {
            return a.trim()
        })
    }

    function M(a) {
        __p && __p();
        var b = a.stackTrace || a.stack;
        if (b == null) return [];
        a = a.message;
        var c = b.replace(/^[\w \.\<\>:]+:\s/, "");
        a = a != null && c.startsWith(a) ? c.substr(a.length + 1) : c !== b ? c.replace(/^.*?\n/, "") : b;
        return a.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]/g, "").split("\n").map(function(a) {
            __p && __p();
            a = a.trim();
            var b = a.match(t);
            b && (a = b[1]);
            var c, d;
            b = a.match(/:(\d+)(?::(\d+))?$/);
            b && (c = b[1], d = b[2], a = a.slice(0, -b[0].length));
            var e;
            b = G(a) || a.match(s);
            if (b) {
                a = a.substring(b[1].length + 1);
                b = b[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
                e = b ? b[1] : ""
            }
            a.includes("charset=utf-8;base64,") && (a = "<inlined-file>");
            b = {
                column: d,
                identifier: e,
                line: c,
                script: a
            };
            v && v(b);
            a = "    at" + (b.identifier ? " " + b.identifier + " (" : " ") + b.script + (b.line ? ":" + b.line : "") + (b.column ? ":" + b.column : "") + (b.identifier ? ")" : "");
            return babelHelpers["extends"]({}, b, {
                text: a
            })
        })
    }

    function N(a) {
        y.unshift(a), z = !0
    }

    function O() {
        y.shift(), z = y.length !== 0
    }
    var P = {
        ANONYMOUS_GUARD_TAG: m,
        GENERATED_GUARD_TAG: n,
        GLOBAL_ERROR_HANDLER_TAG: o,
        history: w,
        addListener: function(a, b) {
            b === void 0 && (b = !1), u.push(a), b || w.forEach(function(b) {
                return a(b.error, b.loggingType)
            })
        },
        removeListener: function(a) {
            k(u, a)
        },
        setSourceResolver: function(a) {
            v = a
        },
        applyWithGuard: function(b, c, d, e, f, h) {
            __p && __p();
            N(f || m);
            g.nocatch && (C = !0);
            if (C) {
                try {
                    f = b.apply(c, d || [])
                } finally {
                    O()
                }
                return f
            }
            try {
                return b.apply(c, d || [])
            } catch (g) {
                f = g;
                if (f == null) try {
                    var i = c,
                        j = function(a) {
                            __p && __p();
                            if (a == null) return "<unset>";
                            else if (typeof a === "object" && a.toString) return a.toString();
                            else if (typeof a === "boolean" && a.toString) return a.toString();
                            else if (typeof a === "number" && a.toString) return a.toString();
                            else if (typeof a === "string") return a;
                            else if (typeof a === "symbol" && a.toString) return a.toString();
                            else if (typeof a === "function" && a.toString) return a.toString();
                            return "<unset>"
                        };
                    if (c != null)
                        if (c == window) i = "[The window object]";
                        else if (c == a) i = "[The global object]";
                    else {
                        var k = c,
                            n = {};
                        Object.keys(k).map(function(a, b) {
                            b = k[a];
                            n[a] = j(b)
                        });
                        i = n
                    }
                    c = (d || []).map(j);
                    var o = "applyWithGuard threw null or undefined:\nFunc: %s\nContext: %s\nArgs: %s",
                        p = b.toString && b.toString().substr(0, 1024);
                    i = JSON.stringify(i).substr(0, 1024);
                    c = JSON.stringify(c).substr(0, 1024);
                    var q = l(o, p ? p : "this function does not support toString", i, c);
                    f = new Error(q);
                    f.messageWithParams = [o, p ? p : "this function does not support toString", i, c]
                } catch (a) {
                    q = "applyWithGuard threw null or undefined with unserializable data:\nFunc: %s\nMetaEx: %s";
                    o = b.toString && b.toString().substr(0, 1024);
                    p = l(q, o ? o : "this function does not support toString", a.message);
                    f = new Error(p);
                    f.messageWithParams = [p, o ? o : "this function does not support toString", a.message]
                }
                h && h.deferredSource && (f.deferredSource = h.deferredSource);
                i = P.normalizeError(f);
                e && e(i);
                i.extra || (i.extra = {});
                if (b) try {
                    i.extra[b.toString().substring(0, 100)] = "function"
                } catch (a) {}
                d && (i.extra[Array.from(d).toString().substring(0, 100)] = "args");
                i.guard = y[0];
                i.guardList = y.slice();
                P.reportError(i, !1, "GUARDED")
            } finally {
                O()
            }
        },
        guard: function(a, b, c) {
            b = b || a.name || n;

            function d() {
                return P.applyWithGuard(a, c || this, [].concat(Array.prototype.slice.call(arguments)), null, b)
            }
            a.__SMmeta && (d.__SMmeta = a.__SMmeta);
            return d
        },
        inGuard: function() {
            return z
        },
        normalizeError: function(a) {
            __p && __p();
            var b = a;
            a = a != null ? a : {};
            if (Object.prototype.hasOwnProperty.call(a, "_originalError")) return a;
            var c = M(a),
                d = !1;
            if (a.framesToPop) {
                var e = a.framesToPop,
                    f;
                while (e > 0 && c.length > 0) f = c.shift(), e--, d = !0;
                r.test(a.message) && a.framesToPop === 2 && f && (q.test(f.script) && (a.message += " at " + f.script + (f.line ? ":" + f.line : "") + (f.column ? ":" + f.column : "")))
            }
            e = L(a.reactComponentStackForLogging);
            var g = a instanceof h ? a.getForcedCategoryKey() : null;
            b = {
                _originalError: b,
                column: d ? F(c) : E(a) || F(c),
                deferredSource: a.deferredSource,
                extra: a.extra,
                fbloggerMetadata: a.fbloggerMetadata,
                forcedLogviewKey: g,
                guard: a.guard,
                guardList: a.guardList,
                line: d ? I(c) : H(a) || I(c),
                message: a.message,
                messageWithParams: a.messageWithParams,
                name: a.name,
                reactComponentStack: e,
                script: d ? K(c) : J(a) || K(c),
                serverHash: a.serverHash,
                snapshot: a.snapshot,
                stack: c.map(function(a) {
                    return a.text
                }).join("\n"),
                stackFrames: c,
                type: a.type
            };
            typeof b.message === "string" ? b.messageWithParams = b.messageWithParams || j(b.message) : (b.messageObject = b.message, b.message = String(b.message) + " (" + typeof b.message + ")");
            b.messageWithParams && (b.message = i.apply(undefined, b.messageWithParams));
            typeof window !== "undefined" && window && window.location && (b.windowLocationURL = window.location.href);
            v && v(b);
            for (var k in b) b[k] == null && delete b[k];
            return b
        },
        onerror: function(a, b, c, d, e) {
            e = e || {}, e.message = e.message || a, e.script = e.script || b, e.line = e.line || c, e.column = e.column || d, e.guard = o, e.guardList = [o], P.reportError(e, !0, "FATAL")
        },
        reportError: function(b, c, d) {
            __p && __p();
            c === void 0 && (c = !1);
            d === void 0 && (d = "DEPRECATED");
            if (A) {
                !1;
                return !1
            }
            b.reactComponentStack && N(p);
            y.length > 0 && (b.guard = b.guard || y[0], b.guardList = y.slice());
            b.reactComponentStack && O();
            b = P.normalizeError(b);
            if (!c) {
                c = a.console;
                var e = b._originalError;
                e = e != null ? "" + e.message : "";
                if ((!c[b.type] || b.type === "error") && !B) {
                    e = e.length > 80 ? e.slice(0, 77) + "..." : e;
                    c.error('ErrorUtils caught an error: "' + e + "\". Subsequent errors won't be logged; see https://fburl.com/debugjs.");
                    B = !0
                }
            }
            w.length > x && w.splice(x / 2, 1);
            w.push({
                error: b,
                loggingType: d
            });
            A = !0;
            for (var c = 0; c < u.length; c++) try {
                u[c](b, d)
            } catch (a) {
                !1
            }
            A = !1;
            return !0
        }
    };
    a.onerror = P.onerror;
    e.exports = a.ErrorUtils = P;
    typeof __t === "function" && __t.setHandler && __t.setHandler(P.reportError)
}), 3);
__d("CallbackDependencyManager", ["ErrorUtils"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a() {
        "use strict";
        this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map()
    }
    a.prototype.$5 = function(a, b) {
        "use strict";
        __p && __p();
        var c = 0,
            d = new Set();
        for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
        for (var b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (e) {
                if (f >= b.length) break;
                d = b[f++]
            } else {
                f = b.next();
                if (f.done) break;
                d = f.value
            }
            d = d;
            if (this.$4.get(d)) continue;
            c++;
            var g = this.$1.get(d);
            g === undefined && (g = new Map(), this.$1.set(d, g));
            g.set(a, (g.get(a) || 0) + 1)
        }
        return c
    };
    a.prototype.$6 = function(a) {
        "use strict";
        __p && __p();
        a = this.$1.get(a);
        if (!a) return;
        for (var b = a.entries(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= b.length) break;
                e = b[d++]
            } else {
                d = b.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            var f = e[0];
            e = e[1] - 1;
            a.set(f, e);
            e <= 0 && a["delete"](f);
            e = this.$2.get(f);
            if (e !== undefined) {
                e.$7--;
                if (e.$7 <= 0) {
                    e = e.$8;
                    this.$2["delete"](f);
                    g.applyWithGuard(e)
                }
            }
        }
    };
    a.prototype.addDependenciesToExistingCallback = function(a, b) {
        "use strict";
        var c = this.$2.get(a);
        if (!c) return null;
        b = this.$5(a, b);
        c.$7 += b;
        return a
    };
    a.prototype.isPersistentDependencySatisfied = function(a) {
        "use strict";
        return !!this.$4.get(a)
    };
    a.prototype.satisfyPersistentDependency = function(a) {
        "use strict";
        this.$4.set(a, 1), this.$6(a)
    };
    a.prototype.satisfyNonPersistentDependency = function(a) {
        "use strict";
        var b = this.$4.get(a) === 1;
        b || this.$4.set(a, 1);
        this.$6(a);
        b || this.$4["delete"](a)
    };
    a.prototype.registerCallback = function(a, b) {
        "use strict";
        __p && __p();
        var c = this.$3;
        this.$3++;
        b = this.$5(c, b);
        if (b === 0) {
            g.applyWithGuard(a);
            return null
        }
        this.$2.set(c, {
            $8: a,
            $7: b
        });
        return c
    };
    a.prototype.unsatisfyPersistentDependency = function(a) {
        "use strict";
        this.$4["delete"](a)
    };
    e.exports = a
}), null);
__d("EventSubscription", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        this.subscriber = a
    }
    a.prototype.remove = function() {
        this.subscriber && (this.subscriber.removeSubscription(this), this.subscriber = null)
    };
    e.exports = a
}), null);
__d("EmitterSubscription", ["EventSubscription"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = babelHelpers.inherits(a, g);
    h = b && b.prototype;

    function a(a, b, c) {
        h.constructor.call(this, a), this.listener = b, this.context = c
    }
    e.exports = a
}), null);
__d("EventSubscriptionVendor", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a() {
        this.$1 = {}
    }
    a.prototype.addSubscription = function(a, b) {
        b.subscriber === this || g(0);
        this.$1[a] || (this.$1[a] = []);
        var c = this.$1[a].length;
        this.$1[a].push(b);
        b.eventType = a;
        b.key = c;
        return b
    };
    a.prototype.removeAllSubscriptions = function(a) {
        a === undefined ? this.$1 = {} : delete this.$1[a]
    };
    a.prototype.removeSubscription = function(a) {
        var b = a.eventType;
        a = a.key;
        b = this.$1[b];
        b && delete b[a]
    };
    a.prototype.getSubscriptionsForType = function(a) {
        return this.$1[a]
    };
    e.exports = a
}), null);
__d("emptyFunction", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        return function() {
            return a
        }
    }
    b = function() {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function() {
        return this
    };
    b.thatReturnsArgument = function(a) {
        return a
    };
    e.exports = b
}), null);
__d("BaseEventEmitter", ["EmitterSubscription", "ErrorUtils", "EventSubscriptionVendor", "emptyFunction", "invariant"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();

    function a() {
        "use strict";
        this.$2 = new i(), this.$1 = null
    }
    a.prototype.addListener = function(a, b, c) {
        "use strict";
        return this.$2.addSubscription(a, new g(this.$2, b, c))
    };
    a.prototype.once = function(a, b, c) {
        "use strict";
        var d = this;
        return this.addListener(a, function() {
            d.removeCurrentListener(), b.apply(c, arguments)
        })
    };
    a.prototype.removeAllListeners = function(a) {
        "use strict";
        this.$2.removeAllSubscriptions(a)
    };
    a.prototype.removeCurrentListener = function() {
        "use strict";
        !this.$1 && k(0), this.$2.removeSubscription(this.$1)
    };
    a.prototype.listeners = function(a) {
        "use strict";
        a = this.$2.getSubscriptionsForType(a);
        return a ? a.filter(j.thatReturnsTrue).map(function(a) {
            return a.listener
        }) : []
    };
    a.prototype.emit = function(a) {
        "use strict";
        __p && __p();
        var b = this.$2.getSubscriptionsForType(a);
        if (b) {
            var c = Object.keys(b),
                d;
            for (var e = 0; e < c.length; e++) {
                var f = c[e],
                    g = b[f];
                if (g) {
                    this.$1 = g;
                    if (d == null) {
                        d = [g, a];
                        for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? undefined : arguments[h + 1]
                    } else d[0] = g;
                    this.__emitToSubscription.apply(this, d)
                }
            }
            this.$1 = null
        }
    };
    a.prototype.__emitToSubscription = function(a, b) {
        "use strict";
        for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++) d[e - 2] = arguments[e];
        h.applyWithGuard(a.listener, a.context, d, null, "EventEmitter " + b + " event")
    };
    e.exports = a
}), null);
__d("EventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f, g) {
    var h;
    h = babelHelpers.inherits(a, g);
    h && h.prototype;

    function a() {
        "use strict";
        h.apply(this, arguments)
    }
    e.exports = a
}), null);
__d("EventEmitterWithHolding", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a, b) {
        this.$1 = a, this.$2 = b, this.$3 = null, this.$4 = [], this.$5 = 0
    }
    a.prototype.addListener = function(a, b, c) {
        return this.$1.addListener(a, b, c)
    };
    a.prototype.once = function(a, b, c) {
        return this.$1.once(a, b, c)
    };
    a.prototype.addRetroactiveListener = function(a, b, c) {
        var d = this.$1.addListener(a, b, c),
            e = this.$4;
        e.push(!1);
        this.$5++;
        this.$2.emitToListener(a, b, c);
        this.$5--;
        e[e.length - 1] && d.remove();
        e.pop();
        return d
    };
    a.prototype.removeAllListeners = function(a) {
        this.$1.removeAllListeners(a)
    };
    a.prototype.removeCurrentListener = function() {
        if (this.$5) {
            var a = this.$4;
            a[a.length - 1] = !0
        } else this.$1.removeCurrentListener()
    };
    a.prototype.listeners = function(a) {
        return this.$1.listeners(a)
    };
    a.prototype.emit = function(a, b, c, d, e, f, g) {
        this.$1.emit(a, b, c, d, e, f, g)
    };
    a.prototype.emitAndHold = function(a, b, c, d, e, f, g) {
        this.$3 = this.$2.holdEvent(a, b, c, d, e, f, g), this.$1.emit(a, b, c, d, e, f, g), this.$3 = null
    };
    a.prototype.releaseCurrentEvent = function() {
        this.$3 !== null ? this.$2.releaseEvent(this.$3) : this.$5 && this.$2.releaseCurrentEvent()
    };
    a.prototype.releaseHeldEventType = function(a) {
        this.$2.releaseEventType(a)
    };
    e.exports = a
}), null);
__d("EventHolder", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a() {
        this.$1 = {}, this.$2 = []
    }
    a.prototype.holdEvent = function(a, b, c, d, e, f, g) {
        this.$1[a] = this.$1[a] || [];
        var h = this.$1[a];
        a = {
            eventType: a,
            index: h.length
        };
        h.push([b, c, d, e, f, g]);
        return a
    };
    a.prototype.emitToListener = function(a, b, c) {
        var d = this.$1[a];
        if (!d) return;
        d.forEach(function(d, e) {
            if (!d) return;
            this.$2.push({
                eventType: a,
                index: e
            });
            b.apply(c, d);
            this.$2.pop()
        }.bind(this))
    };
    a.prototype.releaseCurrentEvent = function() {
        this.$2.length || g(0), this.releaseEvent(this.$2[this.$2.length - 1])
    };
    a.prototype.releaseEvent = function(a) {
        delete this.$1[a.eventType][a.index]
    };
    a.prototype.releaseEventType = function(a) {
        this.$1[a] = []
    };
    e.exports = a
}), null);
__d("Arbiter", ["ArbiterToken", "CallbackDependencyManager", "ErrorUtils", "EventEmitter", "EventEmitterWithHolding", "EventHolder", "invariant"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use strict";
    __p && __p();
    var n;

    function o(a) {
        return Array.isArray(a) ? a : [a]
    }

    function p(a) {
        return a instanceof q || a === q ? a : q
    }

    function q() {
        var a = new j();
        this.$3 = new r();
        this.$2 = new k(a, this.$3);
        this.$1 = new h();
        this.$4 = []
    }
    q.prototype.subscribe = function(a, b, c) {
        __p && __p();
        a = o(a);
        a.forEach(function(a) {
            a && typeof a === "string" || m(0)
        });
        typeof b === "function" || m(0);
        c = c || q.SUBSCRIBE_ALL;
        c === q.SUBSCRIBE_NEW || c === q.SUBSCRIBE_ALL || m(0);
        a = a.map(function(a) {
            var d = this.$5.bind(this, b, a);
            d.__SMmeta = b.__SMmeta;
            if (c === q.SUBSCRIBE_NEW) return this.$2.addListener(a, d);
            this.$4.push({});
            a = this.$2.addRetroactiveListener(a, d);
            this.$4.pop();
            return a
        }, this);
        return new g(this, a)
    };
    q.prototype.$5 = function(a, b, c) {
        var d = this.$4[this.$4.length - 1];
        if (d[b] === !1) return;
        a = i.applyWithGuard(a, null, [b, c]);
        a === !1 && this.$2.releaseCurrentEvent();
        d[b] = a
    };
    q.prototype.unsubscribeCurrentSubscription = function() {
        this.$2.removeCurrentListener()
    };
    q.prototype.releaseCurrentPersistentEvent = function() {
        this.$2.releaseCurrentEvent()
    };
    q.prototype.subscribeOnce = function(a, b, c) {
        a = this.subscribe(a, function(a, c) {
            this.unsubscribeCurrentSubscription();
            return b(a, c)
        }.bind(this), c);
        return a
    };
    q.prototype.unsubscribe = function(a) {
        a.isForArbiterInstance(this) || m(0), a.unsubscribe()
    };
    q.prototype.inform = function(a, b, c) {
        __p && __p();
        var d = Array.isArray(a);
        a = o(a);
        c = c || q.BEHAVIOR_EVENT;
        var e = c === q.BEHAVIOR_STATE || c === q.BEHAVIOR_PERSISTENT;
        this.$4.push({});
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            g || m(0);
            this.$3.setHoldingBehavior(g, c);
            this.$2.emitAndHold(g, b);
            this.$6(g, b, e)
        }
        g = this.$4.pop();
        return d ? g : g[a[0]]
    };
    q.prototype.query = function(a) {
        var b = this.$3.getHoldingBehavior(a);
        !b || b === q.BEHAVIOR_STATE || m(0);
        b = null;
        this.$3.emitToListener(a, function(a) {
            b = a
        });
        return b
    };
    q.prototype.registerCallback = function(a, b) {
        if (typeof a === "function") return this.$1.registerCallback(a, b);
        else return this.$1.addDependenciesToExistingCallback(a, b)
    };
    q.prototype.$6 = function(a, b, c) {
        if (b === null) return;
        c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a)
    };
    q.subscribe = function(a, b, c) {
        return q.prototype.subscribe.apply(p(this), arguments)
    };
    q.unsubscribeCurrentSubscription = function() {
        return q.prototype.unsubscribeCurrentSubscription.apply(p(this))
    };
    q.releaseCurrentPersistentEvent = function() {
        return q.prototype.releaseCurrentPersistentEvent.apply(p(this))
    };
    q.subscribeOnce = function(a, b, c) {
        return q.prototype.subscribeOnce.apply(p(this), arguments)
    };
    q.unsubscribe = function(a) {
        return q.prototype.unsubscribe.apply(p(this), arguments)
    };
    q.inform = function(a, b, c) {
        return q.prototype.inform.apply(p(this), arguments)
    };
    q.query = function(a) {
        return q.prototype.query.apply(p(this), arguments)
    };
    q.registerCallback = function(a, b) {
        return q.prototype.registerCallback.apply(p(this), arguments)
    };
    q.$6 = function(a, b, c) {
        return q.prototype.$6.apply(p(this), arguments)
    };
    q.$5 = function(a, b, c) {
        return q.prototype.$5.apply(p(this), arguments)
    };
    q.BEHAVIOR_EVENT = "event";
    q.BEHAVIOR_PERSISTENT = "persistent";
    q.BEHAVIOR_STATE = "state";
    q.SUBSCRIBE_ALL = "all";
    q.SUBSCRIBE_NEW = "new";
    a = babelHelpers.inherits(r, l);
    n = a && a.prototype;

    function r() {
        n.constructor.call(this), this.$ArbiterEventHolder1 = {}
    }
    r.prototype.setHoldingBehavior = function(a, b) {
        this.$ArbiterEventHolder1[a] = b
    };
    r.prototype.getHoldingBehavior = function(a) {
        return this.$ArbiterEventHolder1[a]
    };
    r.prototype.holdEvent = function(a, b, c, d, e) {
        var f = this.$ArbiterEventHolder1[a];
        f !== q.BEHAVIOR_PERSISTENT && this.$ArbiterEventHolder2(a);
        return f !== q.BEHAVIOR_EVENT ? n.holdEvent.call(this, a, b, c, d, e) : undefined
    };
    r.prototype.$ArbiterEventHolder2 = function(a) {
        this.emitToListener(a, this.releaseCurrentEvent, this)
    };
    r.prototype.releaseEvent = function(a) {
        a && n.releaseEvent.call(this, a)
    };
    q.call(q);
    e.exports = q
}), null);
__d("CSRFGuard", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "for (;;);";
    var g = /^for ?\(;;\);/;
    b = {
        length: a.length,
        regex: g,
        exists: function(a) {
            return !!a.match(g)
        },
        clean: function(a) {
            var b = a.match(g);
            return b ? a.substr(b[0].length) : b
        }
    };
    e.exports = b
}), null);
__d("CircularBuffer", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a(a) {
        "use strict";
        a > 0 || g(0), this.$1 = a, this.$2 = 0, this.$3 = [], this.$4 = []
    }
    a.prototype.write = function(a) {
        "use strict";
        this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function(a) {
            return a(this.$3[this.$2])
        }.bind(this)), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
        return this
    };
    a.prototype.onEvict = function(a) {
        "use strict";
        this.$4.push(a);
        return this
    };
    a.prototype.read = function() {
        "use strict";
        return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2))
    };
    a.prototype.expand = function(a) {
        "use strict";
        if (a > this.$1) {
            var b = this.read();
            this.$2 = 0;
            this.$3 = b;
            this.$1 = a
        }
        return this
    };
    a.prototype.dropFirst = function(a) {
        "use strict";
        if (a <= this.$1) {
            var b = this.read();
            this.$2 = 0;
            b.splice(0, a);
            this.$3 = b
        }
        return this
    };
    a.prototype.clear = function() {
        "use strict";
        this.$2 = 0;
        this.$3 = [];
        return this
    };
    a.prototype.currentSize = function() {
        "use strict";
        return this.$3.length
    };
    e.exports = a
}), null);
__d("ResourceTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        JS: "js",
        CSS: "css",
        XHR: "xhr"
    };
    e.exports = a
}), null);
__d("TimingAnnotations", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a.prototype.addStringAnnotation = function(a, b) {
        "use strict";
        return this
    };
    a.prototype.addSetAnnotation = function(a, b) {
        "use strict";
        return this
    };
    a.prototype.addSetElement = function(a, b) {
        "use strict";
        return this
    };
    a.prototype.registerOnBeforeSend = function(a) {
        "use strict";
        return this
    };
    a.prototype.addVectorAnnotation = function(a, b) {
        "use strict";
        return this
    };
    a.prototype.addVectorElement = function(a, b) {
        "use strict";
        return this
    };

    function a() {
        "use strict"
    }

    function b() {
        "use strict";
        this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = []
    }
    b.prototype.addStringAnnotation = function(a, b) {
        "use strict";
        this.$2 = this.$2 || new Map();
        this.$2.set(a, b);
        return this
    };
    b.prototype.addSetAnnotation = function(a, b) {
        "use strict";
        var c = this.$1 || new Map(),
            d = c.get(a) || new Set();
        b.forEach(function(a) {
            return d.add(a)
        });
        c.set(a, d);
        this.$1 = c;
        return this
    };
    b.prototype.addSetElement = function(a, b) {
        "use strict";
        var c = this.$1 || new Map(),
            d = c.get(a) || new Set();
        d.add(b);
        c.set(a, d);
        this.$1 = c;
        return this
    };
    b.prototype.addVectorAnnotation = function(a, b) {
        "use strict";
        this.$3 = this.$3 || new Map();
        this.$3.set(a, b);
        return this
    };
    b.prototype.addVectorElement = function(a, b) {
        "use strict";
        var c = this.$3 = this.$3 || new Map(),
            d = this.$3.get(a) || [];
        d.push(b);
        c.set(a, d);
        return this
    };
    b.prototype.registerOnBeforeSend = function(a) {
        "use strict";
        this.$4.push(a);
        return this
    };
    b.prototype.prepareToSend = function() {
        "use strict";
        __p && __p();
        this.$4.forEach(function(a) {
            return a(this)
        }.bind(this));
        this.$4 = [];
        var a = {};
        if (this.$1 != null)
            for (var b = this.$1, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                a[f] = Array.from(e.values())
            }
        f = {};
        if (this.$2 != null)
            for (var e = this.$2, d = Array.isArray(e), c = 0, e = d ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (d) {
                    if (c >= e.length) break;
                    b = e[c++]
                } else {
                    c = e.next();
                    if (c.done) break;
                    b = c.value
                }
                b = b;
                var g = b[0];
                b = b[1];
                f[g] = b
            }
        g = {};
        if (this.$3 != null)
            for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var h = e[0];
                e = e[1];
                g[h] = e
            }
        return {
            setProps: a,
            stringProps: f,
            vectorProps: g
        }
    };
    b.combine = function(a, b) {
        "use strict";
        var c;
        a != null && b != null ? (a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps), a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps), c = a) : a != null ? c = a : b != null && (c = b);
        return c
    };
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    e.exports = b
}), null);
__d("flattenPHPQueryData", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a(a) {
        return h(a, "", {})
    }

    function h(a, b, c) {
        if (a === null || a === undefined) c[b] = undefined;
        else if (typeof a === "object") {
            typeof a.appendChild !== "function" || g(0);
            for (var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== undefined && h(a[d], b ? b + "[" + d + "]" : d, c)
        } else c[b] = a;
        return c
    }
    e.exports = a
}), null);
__d("PHPQuerySerializer", ["flattenPHPQueryData", "invariant"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();

    function a(a) {
        var b = [];
        a = g(a);
        for (var c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = i(c);
                a[c] === undefined ? b.push(d) : b.push(d + "=" + i(String(a[c])))
            }
        return b.join("&")
    }

    function i(a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }
    var j = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

    function k(a) {
        return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a
    }

    function b(a) {
        __p && __p();
        if (!a) return {};
        var b = {};
        a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        a = a.split("&");
        var c = Object.prototype.hasOwnProperty;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a[d].match(j);
            if (!f) {
                var g = a[d].split("=");
                b[l(g[0])] = g[1] === undefined ? null : l(g[1])
            } else {
                g = f[2].split(/\]\[|\[|\]/).slice(0, -1);
                var h = f[1];
                f = l(f[3] || "");
                g[0] = h;
                h = b;
                for (var i = 0; i < g.length - 1; i++) {
                    var m = k(g[i]);
                    if (m) {
                        if (!c.call(h, m)) {
                            var n = g[i + 1] && !g[i + 1].match(/^\d{1,3}$/) ? {} : [];
                            h[m] = n;
                            if (h[m] !== n) return b
                        }
                        h = h[m]
                    } else g[i + 1] && !g[i + 1].match(/^\d{1,3}$/) ? h.push({}) : h.push([]), h = h[h.length - 1]
                }
                h instanceof Array && g[g.length - 1] === "" ? h.push(f) : h[k(g[g.length - 1])] = f
            }
        }
        return b
    }

    function l(a) {
        try {
            return decodeURIComponent(a.replace(/\+/g, " "))
        } catch (b) {
            return a
        }
    }
    c = {
        serialize: a,
        encodeComponent: i,
        deserialize: b,
        decodeComponent: l
    };
    e.exports = c
}), null);
__d("ReloadPage", [], (function(a, b, c, d, e, f) {
    b = {
        now: function(b) {
            a.window.location.reload(b)
        },
        delay: function(b) {
            a.setTimeout(this.now.bind(this), b)
        }
    };
    e.exports = b
}), null);
__d("JavelinEvent", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        8: "delete",
        9: "tab",
        13: "return",
        27: "esc",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        63232: "up",
        63233: "down",
        62234: "left",
        62235: "right"
    };

    function a() {
        "use strict";
        this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = null, this.$5 = [], this.$6 = !1, this.$7 = !1, this.$8 = {}, this.$9 = {}
    }
    a.prototype.stop = function() {
        "use strict";
        var a = this.getRawEvent();
        a && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation());
        this.setStopped(!0);
        return this
    };
    a.prototype.prevent = function() {
        "use strict";
        var a = this.getRawEvent();
        a && (a.returnValue = !1, a.preventDefault && a.preventDefault());
        this.setPrevented(!0);
        return this
    };
    a.prototype.kill = function() {
        "use strict";
        this.prevent();
        this.stop();
        return this
    };
    a.prototype.getSpecialKey = function() {
        "use strict";
        var a = this.getRawEvent();
        if (!a || a.shiftKey) return null;
        if (a instanceof KeyboardEvent) {
            a = a.keyCode;
            return g[a.toString()] || null
        }
        return null
    };
    a.prototype.isRightButton = function() {
        "use strict";
        var a = this.getRawEvent();
        return a instanceof MouseEvent ? a.which == 3 || a.button == 2 : !1
    };
    a.prototype.getNode = function(a) {
        "use strict";
        return this.getNodes()[a] || null
    };
    a.prototype.getTouch = function() {
        "use strict";
        var a = this.getRawEvent();
        if (window.TouchEvent && a instanceof TouchEvent) {
            a = a.changedTouches;
            return a && a[0] || {}
        }
        return {}
    };
    a.prototype.getRawEvent = function() {
        "use strict";
        return this.$1
    };
    a.prototype.setRawEvent = function(a) {
        "use strict";
        this.$1 = a;
        return this
    };
    a.prototype.getType = function() {
        "use strict";
        return this.$2
    };
    a.prototype.setType = function(a) {
        "use strict";
        this.$2 = a;
        return this
    };
    a.prototype.getTarget = function() {
        "use strict";
        return this.$3
    };
    a.prototype.setTarget = function(a) {
        "use strict";
        this.$3 = a;
        return this
    };
    a.prototype.getData = function() {
        "use strict";
        return this.$4 || {}
    };
    a.prototype.setData = function(a) {
        "use strict";
        this.$4 = a;
        return this
    };
    a.prototype.getPath = function() {
        "use strict";
        return this.$5
    };
    a.prototype.setPath = function(a) {
        "use strict";
        this.$5 = a;
        return this
    };
    a.prototype.getStopped = function() {
        "use strict";
        return this.$6
    };
    a.prototype.setStopped = function(a) {
        "use strict";
        this.$6 = a;
        return this
    };
    a.prototype.getPrevented = function() {
        "use strict";
        return this.$7
    };
    a.prototype.setPrevented = function(a) {
        "use strict";
        this.$7 = a;
        return this
    };
    a.prototype.getNodes = function() {
        "use strict";
        return this.$8
    };
    a.prototype.setNodes = function(a) {
        "use strict";
        this.$8 = a;
        return this
    };
    a.prototype.getNodeDistances = function() {
        "use strict";
        return this.$9
    };
    a.prototype.setNodeDistances = function(a) {
        "use strict";
        this.$9 = a;
        return this
    };
    a.prototype.toString = function() {
        "use strict";
        return Object.prototype.toString.call(this)
    };
    e.exports = a
}), null);
__d("LogHistory", ["CircularBuffer"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = 500,
        i = {},
        j = new g(h);

    function k(a, b, event, c) {
        var d = c[0];
        if (typeof d !== "string" || c.length !== 1) return;
        j.write({
            date: Date.now(),
            level: a,
            category: b,
            event: event,
            args: d
        })
    }

    function l(a) {
        "use strict";
        this.category = a
    }
    l.prototype.debug = function(event) {
        "use strict";
        for (var a = arguments.length, b = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) b[c - 1] = arguments[c];
        k("debug", this.category, event, b);
        return this
    };
    l.prototype.log = function(event) {
        "use strict";
        for (var a = arguments.length, b = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) b[c - 1] = arguments[c];
        k("log", this.category, event, b);
        return this
    };
    l.prototype.warn = function(event) {
        "use strict";
        for (var a = arguments.length, b = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) b[c - 1] = arguments[c];
        k("warn", this.category, event, b);
        return this
    };
    l.prototype.error = function(event) {
        "use strict";
        for (var a = arguments.length, b = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) b[c - 1] = arguments[c];
        k("error", this.category, event, b);
        return this
    };

    function a(a) {
        i[a] || (i[a] = new l(a));
        return i[a]
    }

    function b() {
        return j.read()
    }

    function c() {
        j.clear()
    }

    function d(a) {}

    function f(a) {
        return a.map(function(a) {
            var b = /\d\d:\d\d:\d\d/.exec(new Date(a.date).toString());
            return [b && b[0], a.level, a.category, a.event, a.args].join(" | ")
        }).join("\n")
    }
    g = {
        MAX: h,
        getInstance: a,
        getEntries: b,
        clearEntries: c,
        toConsole: d,
        formatEntries: f
    };
    e.exports = g
}), null);
/**
 * License: https://www.facebook.com/legal/license/Xw9uo4x52zr/
 */
__d("Alea", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g() {
        __p && __p();
        var a = 4022871197,
            b = function(b) {
                __p && __p();
                b = b.toString();
                for (var c = 0; c < b.length; c++) {
                    a += b.charCodeAt(c);
                    var d = .02519603282416938 * a;
                    a = d >>> 0;
                    d -= a;
                    d *= a;
                    a = d >>> 0;
                    d -= a;
                    a += d * 4294967296
                }
                return (a >>> 0) * 23283064365386963e-26
            };
        b.version = "Mash 0.9";
        return b
    }

    function a() {
        __p && __p();
        return function(a) {
            __p && __p();
            var b = 0,
                c = 0,
                d = 0,
                e = 1;
            a.length === 0 && (a = [new Date()]);
            var f = new g();
            b = f(" ");
            c = f(" ");
            d = f(" ");
            for (var h = 0; h < a.length; h++) b -= f(a[h]), b < 0 && (b += 1), c -= f(a[h]), c < 0 && (c += 1), d -= f(a[h]), d < 0 && (d += 1);
            f = null;
            h = function() {
                var a = 2091639 * b + e * 23283064365386963e-26;
                b = c;
                c = d;
                d = a - (e = a | 0);
                return d
            };
            h.version = "Alea 0.9";
            h.args = a;
            return h
        }(Array.prototype.slice.call(arguments))
    }
    e.exports = a
}), null);
__d("Random", ["Alea", "ServerNonce"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = 4294967296;
    a = b("ServerNonce").ServerNonce;
    var i = g(a),
        j = {
            random: function() {
                if (window !== undefined && window.Uint32Array !== undefined) {
                    var a = new window.Uint32Array(1),
                        b = window.crypto || window.msCrypto;
                    if (b && b.getRandomValues) {
                        b.getRandomValues(a);
                        return a[0] / h
                    }
                }
                return i()
            },
            uint32: function() {
                return Math.floor(this.random() * h)
            },
            coinflip: function(a) {
                if (a === 0) return !1;
                return a <= 1 ? !0 : j.random() * a <= 1
            }
        };
    e.exports = j
}), null);
__d("ExecutionContextObservers", [], (function(a, b, c, d, e, f) {
    a = {
        MUTATION_COUNTING: 0,
        PROFILING_COUNTERS: 1,
        REFERENCE_COUNTING: 2,
        HEARTBEAT: 3,
        CALL_STACK: 4,
        ASYNC_PROFILER: 5,
        TIMESLICE_EXECUTION_LOGGER: 6
    };
    b = {
        MUTATION_COUNTING: 0,
        REFERENCE_COUNTING: 1,
        PROFILING_COUNTERS: 2,
        HEARTBEAT: 3,
        CALL_STACK: 4,
        ASYNC_PROFILER: 5,
        TIMESLICE_EXECUTION_LOGGER: 6
    };
    c = {
        beforeIDs: a,
        afterIDs: b
    };
    e.exports = c
}), null);
__d("ifRequired", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        var e;
        d && d.call(null, [a], function(a) {
            e = a
        });
        if (e && b) return b(e);
        else if (!e && c) return c()
    }
    e.exports = a
}), null);
__d("uniqueID", [], (function(a, b, c, d, e, f) {
    var g = "js_",
        h = 36,
        i = 0;

    function a() {
        return g + (i++).toString(h)
    }
    e.exports = a
}), null);
__d("CallStackExecutionObserver", ["ExecutionContextObservers", "ifRequired", "uniqueID"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    var j = null;

    function k(event, a) {
        __p && __p();
        if (a) {
            var b = a.id,
                c = a.name;
            a = a.interactions;
            var d = Error.stackTraceLimit;
            Error.stackTraceLimit = 1e3;
            var e = new Error().stack;
            Error.stackTraceLimit = d;
            a.forEach(function(a) {
                a.inform(event + ":" + c, {
                    rawStackTrace: e
                }).addStringAnnotation("id", b)
            })
        }
    }
    a = {
        onNewContextCreated: function(a, b, c) {
            __p && __p();
            a = h("TimeSliceAutoclosedInteraction", function(a) {
                return a
            });
            a = a ? a.getInteractionsActiveRightNow() : [];
            a = a.filter(function(a) {
                return a.isEnabledForMode("full")
            });
            if (c && c.isContinuation && a.length) {
                var d = i();
                c = Error.stackTraceLimit;
                Error.stackTraceLimit = 1e3;
                var e = new Error().stack;
                Error.stackTraceLimit = c;
                a.forEach(function(a) {
                    var c = a.inform("created_continuation:" + b, {
                        rawStackTrace: e
                    }).addStringAnnotation("id", d);
                    j && c.addStringAnnotation("parentID", j);
                    a.trace().addStringAnnotation("has_stack_trace", "1")
                });
                return {
                    id: d,
                    parentID: j,
                    name: b,
                    interactions: a
                }
            }
            return null
        },
        onContextCanceled: function(a, b) {
            k("cancelling_continuation", b)
        },
        onBeforeContextStarted: function(a, b, c) {
            a = j;
            b && b.id && (j = b.id);
            return {
                executionParentID: a
            }
        },
        onAfterContextStarted: function(a, b, c, d) {
            k("executing_continuation", b);
            return c
        },
        onAfterContextEnded: function(a, b, c, d) {
            c && (j = c.executionParentID), k("executing_continuation_end", b)
        },
        getBeforeID: function() {
            return g.beforeIDs.CALL_STACK
        },
        getAfterID: function() {
            return g.afterIDs.CALL_STACK
        }
    };
    e.exports = a
}), null);
__d("FBLoggerMetadata", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];

    function a() {
        this.metadata = [].concat(g)
    }
    a.prototype.addMetadata = function(a, b, c) {
        this.metadata.push([a, b, c]);
        return this
    };
    a.prototype.isEmpty = function() {
        return this.metadata.length === 0
    };
    a.prototype.getAll = function() {
        __p && __p();
        var a = [],
            b = this.metadata.filter(function(b) {
                if (b == null) return !1;
                var c = b.filter(function(a) {
                    return a && a.indexOf(":") > -1
                });
                if (c.length > 0) {
                    a.push(b);
                    return !1
                }
                return !0
            });
        return {
            invalidMetadata: a,
            validMetadata: b
        }
    };
    a.addGlobalMetadata = function(a, b, c) {
        g.push([a, b, c])
    };
    e.exports = a
}), null);
__d("FBLogMessage", ["ErrorUtils", "FBLoggerMetadata", "TAAL", "TAALOpcodes", "erx", "ex", "sprintf"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use strict";
    __p && __p();
    var n = {
            mustfix: "error",
            warn: "warn",
            info: "log"
        },
        o = l,
        p = function a(b) {
            return function(c) {
                b > 0 && (c(), a(b - 1)(c))
            }
        };

    function q(a) {
        this.project = a, this.metadata = new h(), this.taalOpcodes = []
    }
    q.prototype.$1 = function(a, b) {
        __p && __p();
        var c = 2;
        if (b === undefined) {
            var d = new q("fblogger");
            p(c)(function() {
                return d.blameToPreviousFrame()
            });
            d.mustfix("You provided an undefined format string to FBLogger, dropping log line");
            return
        }
        var e;
        for (var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), l = 2; l < f; l++) h[l - 2] = arguments[l];
        if (this.error) {
            e = this.error;
            var r = b + " from %s: %s";
            h.push(e.name);
            h.push(e.message ? m.apply(null, k(e.message)) : "");
            e.message = o.apply(undefined, [r].concat(h))
        } else {
            p(c)(function() {
                return this.taalOpcodes.unshift(j.previousFrame())
            }.bind(this));
            if (this.taalOpcodes) {
                var s = i.applyOpcodes(b, this.taalOpcodes);
                e = new Error(o.apply(undefined, [s].concat(h)))
            } else e = new Error(o.apply(undefined, [b].concat(h)))
        }
        if (this.error && e.name.startsWith("<level:")) {
            var t = new q("fblogger");
            p(c)(function() {
                return t.blameToPreviousFrame()
            });
            t.warn("Double logging detected")
        }
        var u = "FBLogger" + (this.error ? " caught " + e.name : "");
        e.name = m("<level:%s> <name:%s> %s", a, this.project, u);
        e = g.normalizeError(e);
        if (!this.metadata.isEmpty()) {
            var v = this.metadata.getAll(),
                w = v.invalidMetadata,
                x = v.validMetadata;
            if (w.length > 0) {
                var y = new q("fblogger");
                p(c)(function() {
                    return y.blameToPreviousFrame()
                });
                y.warn("Metadata cannot contain colon %s", w.map(function(a) {
                    return a.join(":")
                }).join(" "))
            }
            e.fbloggerMetadata = x.map(function(a) {
                return a.join(":")
            })
        }
        var z = n[a];
        e.type = z;
        if (this.error && (this.taalOpcodes && this.taalOpcodes.length)) {
            var A = new q("fblogger");
            p(c)(function() {
                return A.blameToPreviousFrame()
            });
            A.warn("Blame helpers do not work with catching")
        }
        g.reportError(e, !1, "FBLOGGER")
    };
    q.prototype.mustfix = function(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        this.$1.apply(this, ["mustfix", a].concat(c))
    };
    q.prototype.warn = function(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        this.$1.apply(this, ["warn", a].concat(c))
    };
    q.prototype.info = function(a) {};
    q.prototype.debug = function(a) {};
    q.prototype.catching = function(a) {
        !(a instanceof Error) ? new q("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = a;
        return this
    };
    q.prototype.blameToPreviousFile = function() {
        this.taalOpcodes.push(j.previousFile());
        return this
    };
    q.prototype.blameToPreviousFrame = function() {
        this.taalOpcodes.push(j.previousFrame());
        return this
    };
    q.prototype.blameToPreviousDirectory = function() {
        this.taalOpcodes.push(j.previousDirectory());
        return this
    };
    q.prototype.addMetadata = function(a, b, c) {
        this.metadata.addMetadata(a, b, c);
        return this
    };
    e.exports = q
}), null);
__d("FBLogger", ["FBLoggerMetadata", "FBLogMessage"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function(a) {
        return new h(a)
    };
    a.addGlobalMetadata = function(a, b, c) {
        g.addGlobalMetadata(a, b, c)
    };
    e.exports = a
}), null);
__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorUtils"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = 5e3;

    function a(a) {
        __p && __p();
        this.$6 = 0;
        if (a != null) {
            if (a <= 0) throw new Error("Size for a buffer must be greater than zero.")
        } else a = i;
        this.$4 = a;
        this.$1 = new g(a);
        this.$1.onEvict(function() {
            return this.$6++
        }.bind(this));
        this.$2 = [];
        this.$3 = 1;
        this.$5 = 0
    }
    a.prototype.open = function() {
        __p && __p();
        var a = this.$3++,
            b = !1,
            c, d = this.$5,
            e = {
                id: a,
                startIdx: d,
                hasOverflown: function() {
                    return e.getOverflowSize() > 0
                },
                getOverflowSize: function() {
                    return c != null ? c : Math.max(this.$6 - d, 0)
                }.bind(this),
                close: function() {
                    if (b) return [];
                    else {
                        b = !0;
                        c = this.$6 - d;
                        return this.$7(a)
                    }
                }.bind(this)
            };
        this.$2.push(e);
        return e
    };
    a.prototype.pushElement = function(a) {
        this.$2.length > 0 && (this.$1.write(a), this.$5++);
        return this
    };
    a.prototype.isActive = function() {
        return this.$2.length > 0
    };
    a.prototype.$8 = function(a) {
        return Math.max(a - this.$6, 0)
    };
    a.prototype.$7 = function(a) {
        __p && __p();
        var b, c, d, e;
        for (var f = 0; f < this.$2.length; f++) {
            var g = this.$2[f],
                i = g.startIdx;
            g = g.id;
            g === a ? (d = f, e = i) : (c == null || i < c) && (c = i);
            (b == null || i < b) && (b = i)
        }
        if (d == null || b == null || e == null) {
            h.reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
            return []
        }
        this.$2.splice(d, 1);
        g = this.$8(e);
        i = this.$1.read().slice(g);
        f = this.$8(c == null ? this.$5 : c) - this.$8(b);
        f > 0 && (this.$1.dropFirst(f), this.$6 += f);
        return i
    };
    e.exports = a
}), null);
__d("WorkerUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function b() {
        try {
            return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope
        } catch (a) {
            return !1
        }
    }
    e.exports = {
        isWorkerContext: b
    }
}), null);
__d("getReusableTimeSliceContinuation", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a, b, c) {
        __p && __p();
        var d = !1,
            e = a.getGuardedContinuation(c),
            f = function(b) {
                e(function() {
                    d || (e = a.getGuardedContinuation(c)), b()
                })
            };
        f.last = function(a) {
            var b = e;
            g();
            b(a)
        };
        f[b] = {
            cancel: function() {
                d || (a.cancel(e), g(), d = !0)
            },
            tokens: [],
            invoked: !1
        };

        function g() {
            d = !0, e = function(a) {
                a()
            }
        }
        return f
    }
    e.exports = a
}), null);
__d("nullthrows", [], (function(a, b, c, d, e, f) {
    a = function(a, b) {
        b === void 0 && (b = "Got unexpected null or undefined");
        if (a != null) return a;
        a = new Error(b);
        a.framesToPop = 1;
        throw a
    };
    e.exports = a
}), null);
__d("ExecutionEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    b = {
        canUseDOM: a,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: a && !!(window.addEventListener || window.attachEvent),
        canUseViewport: a && !!window.screen,
        isInWorker: !a
    };
    e.exports = b
}), null);
__d("performance", ["ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    g.canUseDOM && (h = window.performance || window.msPerformance || window.webkitPerformance);
    e.exports = h || {}
}), null);
__d("performanceAbsoluteNow", ["performance"], (function(a, b, c, d, e, f, g) {
    if (g.now && g.timing && g.timing.navigationStart) {
        var h = g.timing.navigationStart;
        a = function() {
            return g.now() + h
        }
    } else a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("wrapFunction", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    a = function(a, b, c) {
        return function() {
            var d = b in g ? g[b](a, c) : a;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
            return d.apply(this, f)
        }
    };
    a.setWrapper = function(a, b) {
        g[b] = a
    };
    e.exports = a
}), null);
__d("TimeSlice", ["CallStackExecutionObserver", "CircularBuffer", "Env", "ErrorUtils", "FBLogger", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "invariant", "nullthrows", "performanceAbsoluteNow", "wrapFunction"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    __p && __p();
    var s = [],
        t = [],
        u = "key" + Math.random(),
        v = 1,
        w = !1,
        x = 0,
        y = 1,
        z = 2,
        A = {},
        B = x,
        C = new h(100),
        D = 0,
        E = 0;
    b = i.timesliceBufferSize;
    b == null && (b = 5e3);
    var F = new l(b),
        G = "stackTraceLimit" in Error,
        H = [],
        I = [],
        J = [];

    function K() {
        return L(H)
    }

    function L(a) {
        return a.length > 0 ? a[a.length - 1] : null
    }

    function M(a, b) {
        var c = {};
        j.applyWithGuard(Q, null, [a, b, c]);
        j.applyWithGuard(R, null, [a, b, c]);
        H.push(a);
        I.push(b);
        J.push(c)
    }

    function N(a, b, c) {
        s.forEach(function(d) {
            var e = d.onNewContextCreated(K(), b, c);
            a[d.getBeforeID()] = e
        })
    }

    function O(a, b) {
        s.forEach(function(c) {
            c.onContextCanceled(a, b[c.getBeforeID()])
        })
    }

    function P(a, b, c) {
        t.forEach(function(d) {
            d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta)
        })
    }

    function Q(a, b, c) {
        s.forEach(function(d) {
            var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function R(a, b, c) {
        s.forEach(function(d) {
            var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function S() {
        __p && __p();
        var a = K(),
            b = L(I),
            c = L(J);
        if (a == null || b == null || c == null) {
            k("TimeSlice").mustfix("popped too many times off the timeslice stack");
            w = !1;
            return
        }
        j.applyWithGuard(P, null, [a, b, c]);
        w = !a.isRoot;
        H.pop();
        I.pop();
        J.pop()
    }
    var T = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(a, b, c) {
            __p && __p();
            typeof a === "function" || o(0);
            typeof b === "string" || o(0);
            var d = U(c);
            if (a[u]) return a;
            d.root || T.checkCoverage();
            var e;
            w && (e = K());
            var f = {},
                g = 0,
                h = undefined,
                l = i.deferred_stack_trace_rate || 0;
            l !== 0 && Math.random() * l <= 1 && i.timeslice_heartbeat_config && i.timeslice_heartbeat_config.isArtilleryOn && c && c.registerCallStack && (h = j.normalizeError(new Error("deferred execution source")));
            var n = {
                cancel: function() {
                    n.invoked || j.applyWithGuard(O, null, [b, f])
                },
                tokens: [],
                invoked: !1
            };
            l = function() {
                __p && __p();
                var c = q(),
                    i, l = v++,
                    o = {
                        contextID: l,
                        name: b,
                        isRoot: !w,
                        executionNumber: g++,
                        meta: d,
                        absBeginTimeMs: c
                    };
                n.invoked || (n.invoked = !0, n.tokens.length && (n.tokens.forEach(function(a) {
                    delete A[a]
                }), n.tokens = []));
                M(o, f);
                if (e != null) {
                    var p = !!d.isContinuation;
                    e.isRoot ? (o.indirectParentID = e.contextID, o.isEdgeContinuation = p) : (o.indirectParentID = e.indirectParentID, o.isEdgeContinuation = !!(p && e.isEdgeContinuation))
                }
                var r = m.isWorkerContext();
                w = !0;
                try {
                    if (!o.isRoot || r) return a.apply(this, arguments);
                    else {
                        var s = "TimeSlice" + (b ? ": " + b : "");
                        i = j.applyWithGuard(a, this, [].concat(Array.prototype.slice.call(arguments)), null, s, {
                            deferredSource: h
                        });
                        return i
                    }
                } finally {
                    var t = K();
                    if (t == null) k("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), w = !1;
                    else {
                        var u = t.isRoot,
                            x = t.contextID,
                            y = t.indirectParentID,
                            z = t.isEdgeContinuation,
                            B = q();
                        t.absEndTimeMs = B;
                        if (u && c != null) {
                            E += B - c;
                            var C = babelHelpers["extends"]({
                                begin: c,
                                end: B,
                                id: x,
                                indirectParentID: y,
                                representsExecution: !0,
                                isEdgeContinuation: e && z,
                                guard: b
                            }, d, a.__SMmeta);
                            F.pushElement(C)
                        }
                        S()
                    }
                }
            };
            l = l;
            l[u] = n;
            j.applyWithGuard(N, null, [f, b, d]);
            return l
        },
        copyGuardForWrapper: function(a, b) {
            a && a[u] && (b[u] = a[u]);
            return b
        },
        cancel: function(a) {
            a = a ? a[u] : null;
            a && !a.invoked && (a.cancel(), a.tokens.forEach(function(a) {
                delete A[a]
            }), a.invoked = !0)
        },
        cancelWithToken: function(a) {
            A[a] && T.cancel(A[a])
        },
        registerForCancelling: function(a, b) {
            a && (b[u] && (A[a] || (b[u].invoked || (A[a] = b, b[u].tokens.push(a)))))
        },
        inGuard: function() {
            return w
        },
        checkCoverage: function() {
            var a;
            if (B !== z && !w) {
                G && (a = Error.stackTraceLimit, Error.stackTraceLimit = 50);
                var b = new Error("Missing TimeSlice coverage");
                G && (Error.stackTraceLimit = a);
                B === y && Math.random() < D ? k("TimeSlice").catching(b).debug("Missing TimeSlice coverage") : B === x && p(C).write(b)
            }
        },
        setLogging: function(a, b) {
            if (B !== x) return;
            D = b;
            a ? (B = y, p(C).read().forEach(function(a) {
                Math.random() < D && k("TimeSlice").catching(a).warn("error from logging buffer")
            })) : B = z;
            p(C).clear();
            C = undefined
        },
        getContext: function() {
            return K()
        },
        getTotalTime: function() {
            return E
        },
        getGuardedContinuation: function(a) {
            return T.guard(function(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return a.apply(this, c)
            }, a, {
                propagationType: T.PropagationType.CONTINUATION
            })
        },
        getReusableContinuation: function(a) {
            return n(T, u, a)
        },
        getPlaceholderReusableContinuation: function() {
            var a = function(a) {
                return a()
            };
            a.last = a;
            return a
        },
        getGuardNameStack: function() {
            return H.map(function(a) {
                return a.name
            })
        },
        registerExecutionContextObserver: function(a) {
            __p && __p();
            var b = !1;
            for (var c = 0; c < s.length; c++)
                if (s[c].getBeforeID() > a.getBeforeID()) {
                    s.splice(c, 0, a);
                    b = !0;
                    break
                }
            b || s.push(a);
            for (var c = 0; c < t.length; c++)
                if (t[c].getAfterID() > a.getAfterID()) {
                    t.splice(c, 0, a);
                    return
                }
            t.push(a)
        },
        catchUpOnDemandExecutionContextObservers: function(a) {
            for (var b = 0; b < H.length; b++) {
                var c = H[b],
                    d = I[b],
                    e = J[b] || {};
                d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
                e[a.getBeforeID()] = d;
                J[b] = e
            }
        },
        getBuffer: function() {
            return F
        }
    };

    function U(a) {
        __p && __p();
        var b = {};
        a && a.propagateCounterAttribution !== undefined && (b.propagateCounterAttribution = a.propagateCounterAttribution);
        a && a.root !== undefined && (b.root = a.root);
        switch (a && a.propagationType) {
            case T.PropagationType.CONTINUATION:
                b.isContinuation = !0;
                b.extendsExecution = !0;
                break;
            case T.PropagationType.ORPHAN:
                b.isContinuation = !1;
                b.extendsExecution = !1;
                break;
            case T.PropagationType.EXECUTION:
            default:
                b.isContinuation = !1, b.extendsExecution = !0
        }
        return b
    }
    i.sample_continuation_stacktraces && T.registerExecutionContextObserver(g);
    r.setWrapper(T.guard, "entry");
    a.TimeSlice = T;
    e.exports = T
}), 3);
__d("StratcomManager", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h;

    function a(a) {
        h = a
    }
    var i = [],
        j = function(a) {
            __p && __p();
            i.push(a);
            if (h) {
                var b = i;
                i = [];
                for (var c = 0; c < b.length; ++c) {
                    var d = b[c];
                    h.dispatch(d)
                }
            } else {
                d = a.srcElement || a.target;
                if (d && a.type in {
                        click: 1,
                        submit: 1
                    } && d.getAttribute && d.getAttribute("data-mustcapture") === "1") {
                    a.returnValue = !1;
                    a.preventDefault && a.preventDefault();
                    c = document;
                    b = c.body;
                    b && (b.id = "event_capture");
                    return !1
                }
            }
        };
    c = {};

    function b(a, b) {
        var c = b === "touchstart" || b === "touchmove";
        a.addEventListener(b, g.guard(j, "Stratcom:" + b), {
            capture: !0,
            passive: c
        })
    }
    d = ["click", "change", "submit", "keypress", "mousedown", "mouseover", "mouseout", "mouseup", "load", "keyup", "keydown", "input", "drop", "dragenter", "dragleave", "dragover", "touchstart", "touchmove", "touchend", "touchcancel", "loadedmetadata", "playing", "pause", "ended", "waiting", "timeupdate", "volumechange"];
    f = document;
    c = f.documentElement;
    if (c)
        for (var f = 0; f < d.length; ++f) b(c, d[f]);
    c = ["onpagehide" in window ? "pagehide" : "unload", "resize", "focus", "blur", "popstate", "hashchange"];
    for (var d = 0; d < c.length; ++d) b(window, c[d]);
    f = {
        allowedEvents: undefined,
        injectStratcom: a,
        enableDispatch: b
    };
    e.exports = f
}), null);
__d("createArrayFromMixed", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a) {
        __p && __p();
        var b = a.length;
        !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || g(0);
        typeof b === "number" || g(0);
        b === 0 || b - 1 in a || g(0);
        typeof a.callee !== "function" || g(0);
        if (a.hasOwnProperty) try {
            return Array.prototype.slice.call(a)
        } catch (a) {}
        var c = Array(b);
        for (var d = 0; d < b; d++) c[d] = a[d];
        return c
    }

    function i(a) {
        return !!a && (typeof a === "object" || typeof a === "function") && "length" in a && !("setInterval" in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee" in a || "item" in a)
    }

    function a(a) {
        if (!i(a)) return [a];
        else if (Array.isArray(a)) return a.slice();
        else return h(a)
    }
    e.exports = a
}), null);
__d("Stratcom", ["ErrorUtils", "JavelinEvent", "LogHistory", "Random", "StratcomManager", "createArrayFromMixed", "nullthrows"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    __p && __p();
    var n = i.getInstance("stratcom"),
        o = {
            ready: !1,
            _targets: {},
            _handlers: [],
            _need: {},
            _useCapture: {},
            _auto: "*",
            _execContext: [],
            invoke: function(a, b, c) {
                b = l(b);
                return o._dispatchProxy(new h().setType(a).setData(c || {}).setPath(b || []))
            },
            listen: function(a, b, c) {
                return o._listen(a, b, c, !1)
            },
            listenCapture: function(a, b, c) {
                return o._listen(a, b, c, !0)
            },
            _listen: function(a, b, c, d) {
                __p && __p();
                var e = [];
                a = l(a);
                b = o._normalizePaths(b);
                var f = {
                    _callback: c,
                    remove: function() {
                        if (f) {
                            if (f._callback) {
                                delete f._callback;
                                for (var a = 0; a < m(e).length; a++) delete o._handlers[m(e)[a]]
                            }
                            e = null
                        }
                    }
                };
                for (var c = 0; c < a.length; ++c) {
                    var g = a[c];
                    "onpagehide" in window && g == "unload" && (g = "pagehide");
                    g in o._targets || (o._targets[g] = {});
                    g = o._targets[g];
                    for (var h = 0; h < b.length; ++h) {
                        var i = b[h],
                            j = o._handlers.length;
                        o._handlers.push(f);
                        o._useCapture[j] = d || !1;
                        o._need[j] = i.length;
                        e.push(j);
                        for (var k = 0; k < i.length; ++k)(g[i[k]] || (g[i[k]] = [])).push(j)
                    }
                }
                return f
            },
            removeCurrentListener: function() {
                var a = o._execContext[o._execContext.length - 1],
                    b = a.listeners;
                a = a.cursor - 1;
                b[a] && b[a].handler.remove()
            },
            getJavelinEventFromNative: function(event) {
                __p && __p();
                var a = [],
                    b = {},
                    c = {},
                    d = function(e, f, d) {
                        b[e] || (b[e] = f, c[e] = d, a.push(e))
                    },
                    e = event.srcElement || event.target;
                e && e.nodeType === 3 && (e = e.parentNode);
                (!e || !e.getAttribute) && (e = null);
                var f = 1,
                    g = e;
                while (g instanceof Element) {
                    d("tag:" + g.nodeName.toLowerCase(), g, f);
                    var i = g.id;
                    i && d("id:" + i, g, f);
                    i = g.getAttribute("data-sigil");
                    if (i) {
                        i = i.split(" ");
                        for (var j = 0; j < i.length; j++) d(i[j], g, f)
                    }
                    j = g.getAttribute("data-autoid");
                    j && d("autoid:" + j, g, f);
                    ++f;
                    g = g.parentNode
                }
                i = event.type;
                i == "focusin" ? i = "focus" : i == "focusout" && (i = "blur");
                j = new h().setRawEvent(event).setType(i).setTarget(e).setNodes(b).setNodeDistances(c).setPath(a.reverse());
                return j
            },
            dispatch: function(event) {
                return o._dispatchProxy(o.getJavelinEventFromNative(event))
            },
            _dispatchProxy: function(a) {
                __p && __p();
                var b = a.getType();
                if (!b) return a;
                b = o._targets[b];
                if (!b) return a;
                var c = a.getPath(),
                    d = a.getNodeDistances(),
                    e = c.length,
                    f = {},
                    g = {},
                    h, i = 1e6;
                for (var j = -1; j < e; ++j) {
                    h = b[j == -1 ? o._auto : c[j]];
                    if (h) {
                        var k = d[c[j]] || i;
                        for (var l = 0; l < h.length; ++l) {
                            var m = h[l];
                            f[m] = (f[m] || 0) + 1;
                            g[m] = Math.min(g[m] || k, k)
                        }
                    }
                }
                m = [];
                for (var n in f)
                    if (f[n] == o._need[n]) {
                        k = o._handlers[parseInt(n, 10)];
                        k && m.push({
                            distance: g[n],
                            useCapture: o._useCapture[n],
                            handler: k
                        })
                    }
                m.sort(function(a, b) {
                    return a.useCapture !== b.useCapture ? a.useCapture ? -1 : 1 : a.distance - b.distance
                });
                o._execContext.push({
                    listeners: m,
                    event: a,
                    cursor: 0
                });
                o.pass();
                o._execContext.pop();
                return a
            },
            pass: function() {
                __p && __p();
                var a = o._execContext[o._execContext.length - 1],
                    event = a.event,
                    b = a.listeners;
                while (a.cursor < b.length) {
                    var c = a.cursor++;
                    if (b[c]) {
                        var d = b[c].handler;
                        d._callback && (function() {
                            var a = event.getType(),
                                b = event.getPath(),
                                c = event.getTarget();
                            g.applyWithGuard(d._callback, d, [event], function(d) {
                                n.error("pass", a, b, c, d.message)
                            }, "Stratcom:pass type: " + (a || "") + " path: [" + (b ? b.toString() : "") + "] target: " + (c ? c.toString() : ""))
                        })()
                    }
                    if (event.getStopped()) break
                }
                return event.getStopped() || event.getPrevented()
            },
            context: function() {
                var a = o._execContext.length;
                return a ? o._execContext[a - 1].event : null
            },
            mergeData: function() {
                k.injectStratcom(o)
            },
            hasSigil: function(a, b) {
                a = a.getAttribute("data-sigil") || !1;
                return a && (" " + a + " ").indexOf(" " + b + " ") > -1
            },
            addSigil: function(a, b) {
                var c = a.getAttribute("data-sigil") || "";
                o.hasSigil(a, b) || (c += " " + b);
                a.setAttribute("data-sigil", c)
            },
            removeSigil: function(a, b) {
                var c = a.getAttribute("data-sigil") || "";
                o.hasSigil(a, b) && (c = " " + c + " ", c = c.replace(" " + b + " ", " "), c = c.substring(1, c.length - 1), a.setAttribute("data-sigil", c))
            },
            _normalizePaths: function(a) {
                a || (a = o._auto);
                !Array.isArray(a) ? a = [
                    [a]
                ] : Array.isArray(a[0]) || (a = [a]);
                return a
            }
        };
    e.exports = o
}), null);
__d("URIRFC3986", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");
    a = {
        parse: function(a) {
            __p && __p();
            if (a.trim() === "") return null;
            a = a.match(g);
            if (a == null) return null;
            var b = {};
            b.uri = a[0] ? a[0] : null;
            b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
            b.authority = a[2] ? a[2].substr(2) : null;
            b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
            b.host = a[2] ? a[4] : null;
            b.port = a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null;
            b.path = a[6] ? a[6] : null;
            b.query = a[7] ? a[7].substr(1) : null;
            b.fragment = a[8] ? a[8].substr(1) : null;
            b.isGenericURI = b.authority === null && !!b.scheme;
            return b
        }
    };
    e.exports = a
}), null);
__d("createObjectFrom", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, b) {
        if (b === undefined) return g(a, !0);
        var c = {};
        if (Array.isArray(b))
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
        else
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
        return c
    }
    e.exports = g
}), null);
__d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f, g) {
    var h = g(["blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "ftp", "http", "https", "mailto", "ms-app", "intent", "itms", "itms-apps", "itms-services", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "tbauth", "oculus", "oculus.store", "skype", "callto", "workchat", "fb236786383180508", "fb1775440806014337", "data"]);
    a = {
        isAllowed: function(a) {
            return !a ? !0 : Object.prototype.hasOwnProperty.call(h, a.toLowerCase())
        }
    };
    e.exports = a
}), null);
__d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        a = a.split(".");
        a.length < 3 ? a.unshift(b) : a[0] = b;
        return a.join(".")
    }
    e.exports = a
}), null);
__d("URIBase", ["URIRFC3986", "URISchemes", "ex", "invariant", "setHostSubdomain"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        m = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");

    function n(a, b, c, d) {
        __p && __p();
        if (!b) return !0;
        if (b instanceof p) {
            a.setProtocol(b.getProtocol());
            a.setDomain(b.getDomain());
            a.setPort(b.getPort());
            a.setPath(b.getPath());
            a.setQueryData(d.deserialize(d.serialize(b.getQueryData())));
            a.setFragment(b.getFragment());
            a.setIsGeneric(b.getIsGeneric());
            a.setForceFragmentSeparator(b.getForceFragmentSeparator());
            return !0
        }
        b = b.toString().trim();
        var e = g.parse(b) || {
            fragment: null,
            scheme: null
        };
        if (!c && !h.isAllowed(e.scheme)) return !1;
        a.setProtocol(e.scheme || "");
        if (!c && l.test(e.host || "")) return !1;
        a.setDomain(e.host || "");
        a.setPort(e.port || "");
        a.setPath(e.path || "");
        if (c) a.setQueryData(d.deserialize(e.query || "") || {});
        else try {
            a.setQueryData(d.deserialize(e.query || "") || {})
        } catch (a) {
            return !1
        }
        a.setFragment(e.fragment || "");
        e.fragment === "" && a.setForceFragmentSeparator(!0);
        a.setIsGeneric(e.isGenericURI || !1);
        if (e.userinfo !== null)
            if (c) throw new Error(i("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", a.toString()));
            else return !1;
        if (!a.getDomain() && a.getPath().indexOf("\\") !== -1)
            if (c) throw new Error(i("URI.parse: invalid URI (no domain but multiple back-slashes): %s", a.toString()));
            else return !1;
        if (!a.getProtocol() && m.test(b))
            if (c) throw new Error(i("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", a.toString()));
            else return !1;
        if (a.getDomain() && a.getPath() && !a.getPath().startsWith("/"))
            if (c) throw new Error(i("URI.parse: invalid URI (domain and path where path lacks leading slash): %s", a.toString()));
            else return !1;
        return !0
    }
    var o = [];
    p.tryParse = function(a, b) {
        "use strict";
        var c = new p(null, b);
        return n(c, a, !1, b) ? c : null
    };
    p.isValid = function(a, b) {
        "use strict";
        return !!p.tryParse(a, b)
    };

    function p(a, b) {
        "use strict";
        b || j(0), this.$9 = b, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, n(this, a, !0, b)
    }
    p.prototype.setProtocol = function(a) {
        "use strict";
        h.isAllowed(a) || j(0);
        this.$7 = a;
        return this
    };
    p.prototype.getProtocol = function() {
        "use strict";
        return (this.$7 || "").toLowerCase()
    };
    p.prototype.setSecure = function(a) {
        "use strict";
        return this.setProtocol(a ? "https" : "http")
    };
    p.prototype.isSecure = function() {
        "use strict";
        return this.getProtocol() === "https"
    };
    p.prototype.setDomain = function(a) {
        "use strict";
        if (l.test(a)) throw new Error(i("URI.setDomain: unsafe domain specified: %s for url %s", a, this.toString()));
        this.$1 = a;
        return this
    };
    p.prototype.getDomain = function() {
        "use strict";
        return this.$1
    };
    p.prototype.setPort = function(a) {
        "use strict";
        this.$6 = a;
        return this
    };
    p.prototype.getPort = function() {
        "use strict";
        return this.$6
    };
    p.prototype.setPath = function(a) {
        "use strict";
        this.$5 = a;
        return this
    };
    p.prototype.getPath = function() {
        "use strict";
        return this.$5
    };
    p.prototype.addQueryData = function(a, b) {
        "use strict";
        Object.prototype.toString.call(a) === "[object Object]" ? Object.assign(this.$8, a) : this.$8[a] = b;
        return this
    };
    p.prototype.setQueryData = function(a) {
        "use strict";
        this.$8 = a;
        return this
    };
    p.prototype.getQueryData = function() {
        "use strict";
        return this.$8
    };
    p.prototype.removeQueryData = function(a) {
        "use strict";
        Array.isArray(a) || (a = [a]);
        for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
        return this
    };
    p.prototype.setFragment = function(a) {
        "use strict";
        this.$3 = a;
        this.setForceFragmentSeparator(!1);
        return this
    };
    p.prototype.getFragment = function() {
        "use strict";
        return this.$3
    };
    p.prototype.setForceFragmentSeparator = function(a) {
        "use strict";
        this.$2 = a;
        return this
    };
    p.prototype.getForceFragmentSeparator = function() {
        "use strict";
        return this.$2
    };
    p.prototype.setIsGeneric = function(a) {
        "use strict";
        this.$4 = a;
        return this
    };
    p.prototype.getIsGeneric = function() {
        "use strict";
        return this.$4
    };
    p.prototype.isEmpty = function() {
        "use strict";
        return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
    };
    p.prototype.toString = function() {
        "use strict";
        var a = this;
        for (var b = 0; b < o.length; b++) a = o[b](a);
        return a.$10()
    };
    p.prototype.$10 = function() {
        "use strict";
        __p && __p();
        var a = "",
            b = this.getProtocol();
        b && (a += b + ":" + (this.getIsGeneric() ? "" : "//"));
        b = this.getDomain();
        b && (a += b);
        b = this.getPort();
        b && (a += ":" + b);
        b = this.getPath();
        b ? a += b : a && (a += "/");
        b = this.$9.serialize(this.getQueryData());
        b && (a += "?" + b);
        b = this.getFragment();
        b ? a += "#" + b : this.getForceFragmentSeparator() && (a += "#");
        return a
    };
    p.registerFilter = function(a) {
        "use strict";
        o.push(a)
    };
    p.prototype.getOrigin = function() {
        "use strict";
        var a = this.getPort();
        return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
    };
    p.prototype.getQualifiedURIBase = function() {
        "use strict";
        return new p(this, this.$9).qualify()
    };
    p.prototype.qualify = function() {
        "use strict";
        if (!this.getDomain()) {
            var a = new p(window.location.href, this.$9);
            this.setProtocol(a.getProtocol()).setDomain(a.getDomain()).setPort(a.getPort())
        }
        return this
    };
    p.prototype.setSubdomain = function(a) {
        "use strict";
        var b = this.qualify().getDomain();
        return this.setDomain(k(b, a))
    };
    p.prototype.getSubdomain = function() {
        "use strict";
        if (!this.getDomain()) return "";
        var a = this.getDomain().split(".");
        if (a.length <= 2) return "";
        else return a[0]
    };
    e.exports = p
}), null);
__d("URI", ["PHPQuerySerializer", "ReloadPage", "Stratcom", "URIBase", "ex"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l;
    a = babelHelpers.inherits(m, j);
    l = a && a.prototype;

    function m(a) {
        "use strict";
        l.constructor.call(this, a, g)
    }
    m.prototype.setPath = function(a) {
        "use strict";
        return l.setPath.call(this, a)
    };
    m.prototype.setProtocol = function(a) {
        "use strict";
        return l.setProtocol.call(this, a)
    };
    m.prototype.setDomain = function(a) {
        "use strict";
        return l.setDomain.call(this, a)
    };
    m.prototype.setPort = function(a) {
        "use strict";
        return l.setPort.call(this, a)
    };
    m.prototype.setFragment = function(a) {
        "use strict";
        return l.setFragment.call(this, a)
    };
    m.prototype.go = function() {
        "use strict";
        var a = this.toString();
        if (i.invoke("go", null, {
                uri: a
            }).getPrevented()) return;
        a ? window.location = a : h.now(!0)
    };
    m.prototype.getSubdomain = function() {
        "use strict";
        if (!this.getDomain()) return "";
        var a = this.getDomain().split(".");
        if (a.length <= 2) return "";
        else return a[0]
    };
    m.prototype.isSubdomainOfDomain = function(a) {
        "use strict";
        __p && __p();
        var b = this.getDomain();
        if (a === "" || b === "") return !1;
        if (b.endsWith(a)) {
            var c = b.length,
                d = a.length,
                e = c - d - 1;
            if (c === d || b[e] === ".") return m.isValidURI(a)
        }
        return !1
    };
    m.prototype.getQualifiedURI = function() {
        "use strict";
        return new m(this).$URI1()
    };
    m.prototype.$URI1 = function() {
        "use strict";
        if (!this.getDomain()) {
            var a = new m(window.location.href);
            this.setProtocol(a.getProtocol()).setDomain(a.getDomain()).setPort(a.getPort())
        }
        return this
    };
    m.tryParseURI = function(a) {
        "use strict";
        a = j.tryParse(a, g);
        return a ? new m(a) : null
    };
    m.isValidURI = function(a) {
        "use strict";
        return j.isValid(a, g)
    };
    m.getRequestURI = function() {
        "use strict";
        return new m(window.location.href)
    };
    e.exports = m
}), null);
__d("ResourceTimingsStore", ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    __p && __p();
    var l = 1e3,
        m = new i.EmptyTimingAnnotations(),
        n = {},
        o = {};
    Object.keys(h).forEach(function(a) {
        a = h[a];
        var b = new g(l),
            c = new Map();
        b.onEvict(function(a) {
            return c["delete"](a)
        });
        n[a] = {
            idx: 1,
            entries: b
        };
        o[a] = c
    });

    function p(a, b, c) {
        __p && __p();
        var d;
        switch (a) {
            case "css":
            case "js":
                var e = q.parseMakeHasteURL(b);
                e = e == null ? "unknown_resource" : e[0];
                d = c + "_" + e;
                break;
            case "xhr":
                e = new j(b).getQualifiedURI();
                b = e.getDomain() + e.getPath();
                d = c + "_" + b;
                break;
            default:
                a, d = "never here"
        }
        return d
    }
    var q = {
        getUID: function(a, b) {
            var c = n[a],
                d = p(a, b, c.idx);
            c.entries.write(d);
            o[a].set(d, {
                uri: b,
                uid: d
            });
            c.idx++;
            return d
        },
        updateURI: function(a, b, c) {
            a = o[a].get(b);
            a != null && (a.uri = c)
        },
        getMapFor: function(a) {
            return o[a]
        },
        parseMakeHasteURL: function(a) {
            a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!a) return null;
            a = a[1];
            var b = "",
                c = a.match(/\.(\w+)$/);
            c && (b = c[1]);
            return [a, b]
        },
        measureRequestSent: function(a, b) {
            a = o[a];
            a = a.get(b);
            if (a == null || a.requestSent != null) return;
            else a.requestSent = k()
        },
        measureResponseReceived: function(a, b) {
            a = o[a];
            a = a.get(b);
            if (a == null || a.requestSent == null || a.responseReceived != null) return;
            else a.responseReceived = k()
        },
        annotate: function(a, b) {
            __p && __p();
            a = o[a];
            a = a.get(b);
            if (!a) return m;
            else {
                b = a.annotations;
                if (b != null) return b;
                else {
                    b = new i();
                    a.annotations = b;
                    return b
                }
            }
        },
        getAnnotationsFor: function(a, b) {
            a = o[a];
            a = a.get(b);
            if (!a) return null;
            else {
                b = a.annotations;
                return b != null ? b.prepareToSend() : null
            }
        }
    };
    e.exports = q
}), null);
__d("TimerStorage", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    var g = {};
    Object.keys(a).forEach(function(a) {
        return g[a] = {}
    });
    b = babelHelpers["extends"]({}, a, {
        set: function(a, b) {
            g[a][b] = !0
        },
        unset: function(a, b) {
            delete g[a][b]
        },
        clearAll: function(a, b) {
            Object.keys(g[a]).forEach(b), g[a] = {}
        },
        getStorages: function() {
            return {}
        }
    });
    e.exports = b
}), null);
__d("clearInterval", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f, g, h) {
    var i = a.__fbNativeClearTimeout || a.clearTimeout;

    function b(a) {
        if (a != null) {
            g.unset(g.INTERVAL, a);
            var b = g.TIMEOUT + String(a);
            h.cancelWithToken(b)
        }
        i(a)
    }
    e.exports = b
}), null);
__d("isEmpty", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a(a) {
        __p && __p();
        if (Array.isArray(a)) return a.length === 0;
        else if (typeof a === "object") {
            if (a) {
                !h(a) || a.size === undefined || g(0);
                for (var b in a) return !1
            }
            return !0
        } else return !a
    }

    function h(a) {
        return typeof Symbol === "undefined" ? !1 : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
    }
    e.exports = a
}), null);
__d("setIntervalAcrossTransitions", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h = a.__fbNativeSetInterval || a.setInterval;

    function b(b, c) {
        var d = g.guard(b, "setInterval");
        for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), i = 2; i < e; i++) f[i - 2] = arguments[i];
        return Function.prototype.apply.call(h, a, [d, c].concat(f))
    }
    e.exports = b
}), null);
__d("CSSLoader", ["CSSLoaderConfig", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    __p && __p();
    var n = 20,
        o = g.timeout,
        p = g.loadEventSupported || !1,
        q, r = {},
        s = [],
        t, u = {};

    function v(a) {
        if (q) return;
        q = !0;
        var b = document.createElement("link");
        b.onload = function() {
            p = !0, b.parentNode && b.parentNode.removeChild(b)
        };
        b.rel = "stylesheet";
        b.href = "data:text/css;base64,";
        a.appendChild(b)
    }

    function w() {
        __p && __p();
        var a, b = [],
            c = [];
        if (Date.now() >= t) {
            for (a in u) c.push(u[a].signal), b.push(u[a].error);
            u = {}
        } else
            for (a in u) {
                var d = u[a].signal,
                    e = window.getComputedStyle ? getComputedStyle(d) : d.currentStyle;
                e && parseInt(e.height, 10) > 1 && (b.push(u[a].load), c.push(d), delete u[a])
            }
        for (var e = 0; e < c.length; e++) c[e].parentNode.removeChild(c[e]);
        if (!l(b)) {
            for (e = 0; e < b.length; e++) b[e]();
            t = Date.now() + o
        }
        return l(u)
    }

    function x(a, b, c, d) {
        var e = document.createElement("meta");
        e.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
        b.appendChild(e);
        b = !l(u);
        t = Date.now() + o;
        u[a] = {
            signal: e,
            load: c,
            error: d
        };
        if (!b) var f = m(function() {
            w() && j(f)
        }, n)
    }
    a = {
        loadStyleSheet: function(a, b, c, d, e, f) {
            __p && __p();
            if (r[a]) throw new Error("CSS component " + a + " has already been requested.");
            var g = h.getUID("css", b);
            k("TimeSliceAutoclosedInteraction", function(a) {
                return a.getInteractionsActiveRightNow().forEach(function(a) {
                    return a.forResourceRequest(g).addStringAnnotation("requested_in_continuation", "true")
                })
            });
            h.annotate("css", g).addStringAnnotation("name", a).addStringAnnotation("source", b).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
            k("TimeSliceInteraction", function(c) {
                c.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", b).addStringAnnotation("name", a)
            });
            h.measureRequestSent("css", g);
            var j = function() {
                    h.measureResponseReceived("css", g), e && e()
                },
                l = document;
            if ("createStyleSheet" in l) {
                var m;
                for (var n = 0; n < s.length; n++)
                    if (s[n].imports.length < 31) {
                        m = n;
                        break
                    }
                if (m === undefined) {
                    try {
                        s.push(l.createStyleSheet())
                    } catch (a) {
                        f();
                        return
                    }
                    m = s.length - 1
                }
                s[m].addImport(b);
                r[a] = {
                    styleSheet: s[m],
                    uri: b
                };
                x(a, c, j, f);
                return
            }
            var o = l.createElement("link");
            o.rel = "stylesheet";
            o.type = "text/css";
            o.href = b;
            d && (o.crossOrigin = "anonymous");
            r[a] = {
                link: o
            };
            n = i.getGuardedContinuation("CSSLoader link.onresponse");
            p ? (o.onload = n.bind(undefined, function() {
                o.onload = o.onerror = null, j()
            }), o.onerror = n.bind(undefined, function() {
                o.onload = o.onerror = null, f()
            })) : (x(a, c, j, f), p === undefined && v(c));
            c.appendChild(o)
        },
        registerLoadedStyleSheet: function(a, b) {
            if (r[a]) return !1;
            r[a] = {
                link: b
            };
            return !0
        },
        unloadStyleSheet: function(a) {
            __p && __p();
            var b = r[a];
            if (b == null) return;
            var c = b.link;
            if (c) c.onload = c.onerror = null, c.parentNode.removeChild(c);
            else {
                c = b.styleSheet;
                for (var d = 0; d < c.imports.length; d++)
                    if (c.imports[d].href == b.uri) {
                        c.removeImport(d);
                        break
                    }
            }
            delete u[a];
            delete r[a]
        },
        moduleName: function(a) {
            return g.modulePrefix + a
        }
    };
    e.exports = a
}), null);
__d("PageEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NATIVE_ONLOAD: "onload/onload",
        BIGPIPE_ONLOAD: "onload/onload_callback",
        AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
        NATIVE_DOMREADY: "onload/dom_content_ready",
        BIGPIPE_DOMREADY: "onload/domcontent_callback",
        AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
        NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
        NATIVE_ONUNLOAD: "onload/unload",
        AJAXPIPE_ONUNLOAD: "onload/exit",
        AJAXPIPE_SEND: "ajaxpipe/send",
        AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
        AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas"
    });
    e.exports = a
}), null);
__d("Run", ["Arbiter", "ExecutionEnvironment", "PageEvents", "Stratcom", "TimeSlice", "ifRequired", "invariant", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    "use strict";
    __p && __p();

    function o(b, c) {
        var d = a.CavalryLogger;
        d = d && d.getInstance();
        if (!d) return;
        c ? d.setAbsTimeStamp && d.setAbsTimeStamp(b, c) : d.setTimeStamp(b)
    }

    function p(a, b) {
        return j.listen(a, null, function() {
            j.removeCurrentListener(), b()
        })
    }

    function b() {
        __p && __p();
        document.addEventListener("DOMContentLoaded", k.guard(function() {
            g.inform(i.NATIVE_DOMREADY, !0, g.BEHAVIOR_STATE)
        }, "DOMContentLoaded"), !0);
        var a = window.onload;
        window.onload = k.guard(function() {
            o("t_layout"), a && a(), g.inform(i.NATIVE_ONLOAD, !0, g.BEHAVIOR_STATE)
        }, "window.onload");
        window.onbeforeunload = k.guard(function() {
            var a = {};
            g.inform(i.NATIVE_ONBEFOREUNLOAD, a, g.BEHAVIOR_STATE);
            a.warn || g.inform(i.AJAXPIPE_ONUNLOAD, {
                transition_type: "normal"
            });
            return a.warn
        }, "window.onbeforeunload")
    }

    function c() {
        g.registerCallback(function() {
            g.inform("uipage_onload", !0, g.BEHAVIOR_STATE)
        }, [i.BIGPIPE_DOMREADY])
    }

    function q() {
        var a = n();
        o("t_onload", a);
        g.inform(i.BIGPIPE_ONLOAD, {
            ts: a
        }, g.BEHAVIOR_STATE)
    }
    d = g.registerCallback(function() {
        l("BigPipe", function(a) {
            a.getCurrentInstance() ? g.subscribeOnce(a.Events.displayed, q) : q()
        })
    }, [i.NATIVE_ONLOAD]);
    f = g.registerCallback(function() {
        o("t_domcontent");
        var a = {
            timeTriggered: Date.now()
        };
        g.inform(i.BIGPIPE_DOMREADY, a, g.BEHAVIOR_STATE)
    }, [i.NATIVE_DOMREADY]);
    h.canUseDOM && (b(), c());
    h = {
        onAfterLoad: function(a) {
            return p("m:onload", a)
        },
        onAfterUnload: function(a) {
            m(0)
        },
        onBeforeUnload: function(a) {
            m(0)
        },
        onLeave: function(a) {
            return p("m:page:unload", a)
        },
        onLoad: function(a) {
            m(0)
        },
        onUnload: function(a) {
            return p("m:page:unload", a)
        },
        __domContentCallback: f,
        __onloadCallback: d
    };
    e.exports = h
}), null);
__d("CSSCore", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a, b) {
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (c instanceof Element) {
            c = c.querySelectorAll(b);
            return Array.prototype.indexOf.call(c, a) !== -1
        }
        return !1
    }
    var i = {
        addClass: function(a, b) {
            /\s/.test(b) && g(0);
            b && (a.classList ? a.classList.add(b) : i.hasClass(a, b) || (a.className = a.className + " " + b));
            return a
        },
        removeClass: function(a, b) {
            /\s/.test(b) && g(0);
            b && (a.classList ? a.classList.remove(b) : i.hasClass(a, b) && (a.className = a.className.replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")));
            return a
        },
        conditionClass: function(a, b, c) {
            return (c ? i.addClass : i.removeClass)(a, b)
        },
        hasClass: function(a, b) {
            /\s/.test(b) && g(0);
            return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
        },
        matchesSelector: function(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || function(b) {
                return h(a, b)
            };
            return c.call(a, b)
        }
    };
    e.exports = i
}), null);
__d("CSS", ["CSSCore", "invariant"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = {
        hide: function(a) {
            a.style.display = "none";
            return a
        },
        show: function(a) {
            a.style.display = "";
            return a
        },
        conditionShow: function(a, b) {
            return (b ? i.show : i.hide)(a)
        },
        addClass: function(a, b) {
            return g.addClass(a, b)
        },
        removeClass: function(a, b) {
            return g.removeClass(a, b)
        },
        hasClass: function(a, b) {
            /\s/.test(b) && h(0);
            return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
        }
    };
    a = null;
    e.exports = Object.assign({}, i, g, a)
}), null);
__d("Parent", ["CSS"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {
        byTag: function(a, b) {
            b = b.toUpperCase();
            a = h.find(a, function(a) {
                return a.nodeName === b
            });
            return a instanceof Element ? a : null
        },
        byClass: function(a, b) {
            a = h.find(a, function(a) {
                return a instanceof Element && g.hasClass(a, b)
            });
            return a instanceof Element ? a : null
        },
        bySelector: function(a, b) {
            __p && __p();
            a = a;
            if (typeof a.matches === "function") {
                while (a && a !== document && !a.matches(b)) a = a.parentNode;
                return a instanceof Element ? a : null
            } else if (typeof a.msMatchesSelector === "function") {
                while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
                return a instanceof Element ? a : null
            } else return h.bySelector_SLOW(a, b)
        },
        bySelector_SLOW: function(a, b) {
            __p && __p();
            a = a;
            var c = a;
            while (c.parentNode) c = c.parentNode;
            if (!(c instanceof Element) && !(c instanceof Document)) return null;
            c = c.querySelectorAll(b);
            while (a) {
                if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
                a = a.parentNode
            }
            return a instanceof Element ? a : null
        },
        byAttribute: function(a, b) {
            a = h.find(a, function(a) {
                return a instanceof Element && !!a.getAttribute(b)
            });
            return a instanceof Element ? a : null
        },
        find: function(a, b) {
            a = a;
            while (a) {
                if (b(a)) return a;
                a = a.parentNode
            }
            return null
        }
    };
    e.exports = h
}), null);
__d("ContextualComponent", ["Parent"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    h.forNode = function(a) {
        "use strict";
        return h.$1.get(a) || null
    };
    h.closestToNode = function(a) {
        "use strict";
        a = g.find(a, function(a) {
            return !!h.forNode(a)
        });
        return a ? h.forNode(a) : null
    };
    h.register = function(a) {
        "use strict";
        return new h(a)
    };

    function h(a) {
        var b = a.element,
            c = a.isRoot;
        a = a.parent;
        this.$2 = c;
        this.$3 = b;
        this.$4 = a;
        this.$5 = new Set();
        this.$6 = [];
        this.$7 = [];
        this.$8()
    }
    h.prototype.onCleanup = function(a) {
        "use strict";
        this.$6.push(a)
    };
    h.prototype.onUnmount = function(a) {
        "use strict";
        this.$7.push(a)
    };
    h.prototype.cleanup = function() {
        "use strict";
        this.$5.forEach(function(a) {
            return a.cleanup()
        }), this.$6.forEach(function(a) {
            return a()
        }), this.$6 = []
    };
    h.prototype.unmount = function() {
        "use strict";
        this.cleanup();
        this.$5.forEach(function(a) {
            return a.unmount()
        });
        this.$7.forEach(function(a) {
            return a()
        });
        this.$7 = [];
        var a = this.$4;
        a && (h.$1["delete"](this.$3), a.$9(this))
    };
    h.prototype.reinitialize = function() {
        "use strict";
        var a = this.$4;
        a && (a.$9(this), this.$4 = undefined);
        h.$1["delete"](this.$3);
        this.$8()
    };
    h.prototype.$8 = function() {
        "use strict";
        if (!this.$2 && !this.$4) {
            var a = h.closestToNode(this.$3);
            a && (this.$4 = a)
        }
        this.$4 && this.$4.$10(this);
        h.$1.set(this.$3, this)
    };
    h.prototype.$10 = function(a) {
        "use strict";
        this.$5.add(a)
    };
    h.prototype.$9 = function(a) {
        "use strict";
        this.$5["delete"](a)
    };
    h.$1 = new Map();
    e.exports = h
}), null);
__d("getMarkupWrap", ["ExecutionEnvironment", "invariant"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = g.canUseDOM ? document.createElement("div") : null,
        j = {};
    b = [1, '<select multiple="true">', "</select>"];
    c = [1, "<table>", "</table>"];
    d = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var k = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        l = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: b,
            option: b,
            caption: c,
            colgroup: c,
            tbody: c,
            tfoot: c,
            thead: c,
            td: d,
            th: d
        };
    f = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    f.forEach(function(a) {
        l[a] = k, j[a] = !0
    });

    function a(a) {
        a = a;
        !i && h(0);
        Object.prototype.hasOwnProperty.call(l, a) || (a = "*");
        Object.prototype.hasOwnProperty.call(j, a) || (a === "*" ? i.innerHTML = "<link />" : i.innerHTML = "<" + a + "></" + a + ">", j[a] = !i.firstChild);
        return j[a] ? l[a] : null
    }
    e.exports = a
}), null);
__d("createNodesFromMarkup", ["ExecutionEnvironment", "getMarkupWrap", "invariant"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j = g.canUseDOM ? document.createElement("div") : null,
        k = /^\s*<(\w+)/;

    function l(a) {
        a = a.match(k);
        return a && a[1].toLowerCase()
    }

    function a(a, b) {
        __p && __p();
        var c = j;
        !j && i(0);
        var d = l(a);
        d = d && h(d);
        if (d) {
            c.innerHTML = d[1] + a + d[2];
            d = d[0];
            while (d--) c = c.lastChild
        } else c.innerHTML = a;
        d = c.getElementsByTagName("script");
        d.length && (b || i(0), Array.from(d).forEach(b));
        a = Array.from(c.childNodes);
        while (c.lastChild) c.removeChild(c.lastChild);
        return a
    }
    e.exports = a
}), null);
__d("HTML", ["createNodesFromMarkup"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a) {
        "use strict";
        typeof a.__html === "string" && (!1, a = a.__html), this.$1 = a
    }
    h.prototype.getFragment = function() {
        "use strict";
        var a = document.createDocumentFragment(),
            b = g(this.$1, null);
        for (var c = 0; c < b.length; c++) a.appendChild(b[c]);
        return a
    };
    h.prototype.getRootNode = function() {
        "use strict";
        var a = this.getFragment();
        if (a.childNodes.length === 1) return a.firstChild;
        else return a
    };
    h.isHTML = function(a) {
        "use strict";
        return !!a && (a instanceof h || a.__html !== undefined)
    };
    h.replaceJSONWrapper = function(a) {
        return a && a.__html !== undefined ? new h(a.__html) : a
    };
    e.exports = h
}), null);
__d("BitMap", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

    function a() {
        "use strict";
        this.$1 = []
    }
    a.prototype.set = function(a) {
        "use strict";
        this.$1[a] = 1;
        return this
    };
    a.prototype.toString = function() {
        "use strict";
        var a = [];
        for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
        return a.length ? i(a.join("")) : ""
    };
    a.prototype.toCompressedString = function() {
        "use strict";
        __p && __p();
        if (this.$1.length === 0) return "";
        var a = [],
            b = 1,
            c = this.$1[0] || 0,
            d = c.toString(2);
        for (var e = 1; e < this.$1.length; e++) {
            var f = this.$1[e] || 0;
            f === c ? b++ : (a.push(h(b)), c = f, b = 1)
        }
        b && a.push(h(b));
        return i(d + a.join(""))
    };

    function h(a) {
        a = a.toString(2);
        var b = "0".repeat(a.length - 1);
        return b + a
    }

    function i(a) {
        a = (a + "00000").match(/[01]{6}/g);
        var b = "";
        for (var c = 0; c < a.length; c++) b += g[parseInt(a[c], 2)];
        return b
    }
    e.exports = a
}), null);
__d("ge", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, b, c) {
        if (typeof a !== "string") return a;
        else if (!b) return document.getElementById(a);
        else return g(a, b, c)
    }

    function g(a, b, c) {
        __p && __p();
        var d;
        if (h(b) == a) return b;
        else if (b.getElementsByTagName) {
            c = b.getElementsByTagName(c || "*");
            for (d = 0; d < c.length; d++)
                if (h(c[d]) == a) return c[d]
        } else {
            c = b.childNodes;
            for (d = 0; d < c.length; d++) {
                b = g(a, c[d]);
                if (b) return b
            }
        }
        return null
    }

    function h(a) {
        return a.getAttribute ? a.getAttribute("id") : null
    }
    e.exports = a
}), null);
__d("memoize", ["invariant"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = a,
            c;
        return function() {
            arguments.length && g(0);
            b && (c = b(), b = null);
            return c
        }
    }
    e.exports = a
}), null);
__d("replaceTransportMarkers", ["ErrorUtils", "ge", "memoize"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function j(a, c, e) {
        __p && __p();
        var f = e !== undefined ? c[e] : c,
            k;
        if (Array.isArray(f))
            for (k = 0; k < f.length; k++) j(a, f, k);
        else if (f && typeof f === "object")
            if (f.__m) f.__lazy ? c[e] = i(b.bind(null, f.__m)) : c[e] = b.call(null, f.__m);
            else if (f.__deferredElement) {
            var l = [],
                m;
            d.call(null, [f.__deferredElement], function(a) {
                m = a, l.length && (l.forEach(g.guard(function(b) {
                    b(a)
                }, "JS::deferredElement callback: '" + f.__deferredElement + "'")), l.length = 0)
            });
            k = {
                then: function(a) {
                    m ? a(m) : l.push(a)
                }
            };
            c[e] = k
        } else if (f.__e) c[e] = h(f.__e);
        else if (f.__rel) c[e] = a.relativeTo;
        else if (f.__bigPipeContext) c[e] = a.bigPipeContext;
        else {
            for (var n in f) j(a, f, n);
            if (f.__map) c[e] = new Map(f.__map);
            else if (f.__set) c[e] = new Set(f.__set);
            else if (f.__imm) {
                k = f.__imm;
                a = k.module;
                var o = k.method;
                k = k.value;
                c[e] = a[o](k)
            }
        }
    }
    e.exports = j
}), null);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = 2,
        j = new g(),
        k = {
            getLoadedModuleHash: function() {
                return j.toCompressedString()
            },
            handleDefine: function(a, b, c, d, e) {
                d >= 0 && j.set(d), define(a, b, function() {
                    h({
                        relativeTo: e
                    }, c);
                    if (d === -42) throw new Error(a + ": " + c.__throw8367__);
                    return c
                }, i)
            },
            handleDefines: function(a, b) {
                a.forEach(function(a) {
                    b && a.push(b), k.handleDefine.apply(null, a)
                })
            }
        };
    e.exports = k
}), null);
__d("__debug", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("ServerJS", ["ContextualComponent", "ErrorUtils", "LogviewForcedKeyError", "ServerJSDefine", "TimeSlice", "ex", "ge", "replaceTransportMarkers", "__debug"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    __p && __p();
    var o = 1,
        p = 2,
        q = 0;

    function a() {
        "use strict";
        this.$1 = {}, this.$2 = null, this.$3 = {}, this.$4 = undefined
    }
    a.prototype.handle = function(a, b) {
        "use strict";
        __p && __p();
        this.$4 = b;
        if (a.__guard) throw new Error("ServerJS.handle called on data that has already been handled");
        a.__guard = !0;
        s(a.define || [], this.$5, this);
        s(a.markup || [], this.$6, this);
        s(a.elements || [], this.$7, this);
        this.$8(a.contexts || []);
        s(a.instances || [], this.$9, this);
        var c = s(a.pre_display_requires || [], this.$10, this);
        c = c.concat(s(a.require || [], this.$10, this));
        return {
            cancel: function() {
                for (var a = 0; a < c.length; a++) c[a] && c[a].cancel()
            }
        }
    };
    a.prototype.handlePartial = function(a, b) {
        "use strict";
        (a.instances || []).forEach(u.bind(null, this.$1, 3));
        (a.markup || []).forEach(u.bind(null, this.$1, 2));
        (a.elements || []).forEach(u.bind(null, this.$1, 2));
        return this.handle(a, b)
    };
    a.prototype.setRelativeTo = function(a) {
        "use strict";
        this.$2 = a;
        return this
    };
    a.prototype.setServerFeatures = function() {
        "use strict";
        return this
    };
    a.prototype.cleanup = function() {
        "use strict";
        __p && __p();
        var a = Object.keys(this.$1);
        d.call(null, a, k.guard(v, "SeverJS Cleanup requireLazy", {
            propagationType: k.PropagationType.ORPHAN
        }));
        this.$1 = {};

        function c(c) {
            var d = this.$3[c],
                a = d[0],
                f = d[1];
            d = d[2];
            delete this.$3[c];
            f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
            a = b("__debug").debugUnresolvedDependencies([a, c]);
            c = l("%s did not fire because it has missing dependencies.\n%s", f, a);
            throw r(new i(c, "Missing dependencies: " + f + " | " + a), d)
        }
        for (var f in this.$3) h.applyWithGuard(c, this, [f], null, "ServerJS:cleanup id: " + f)
    };
    a.prototype.$5 = function(a, b, c, d) {
        "use strict";
        return h.applyWithGuard(j.handleDefine, j, [a, b, c, d, this.$2], null, "JS::define")
    };
    a.prototype.$10 = function(a, b, c, d) {
        "use strict";
        return h.applyWithGuard(this.$11, this, [a, b, c, d], null, b ? "JS::call" : "JS::requireModule")
    };
    a.prototype.$11 = function(a, c, d, f) {
        "use strict";
        __p && __p();
        a = a.split("@");
        var g = a[0],
            i = a[1];
        typeof c === "object" && (d = c, c = undefined);
        a = [g].concat(d || []);
        var j;
        c ? j = "__call__" + g + "." + c : j = "__requireModule__" + g;
        j += "__" + q++;
        this.$3[j] = [g, c, i];
        var k = this.$4 && this.$4.bigPipeContext,
            m = h.guard(function(a) {
                __p && __p();
                var a = b.call(null, g);
                delete this.$3[j];
                f && n({
                    relativeTo: this.$2,
                    bigPipeContext: k
                }, f);
                if (c) {
                    if (!a[c]) throw r(new TypeError(l('Module %s has no method "%s"', g, c)), i);
                    a[c].apply(a, f || []);
                    m.__SMmeta = a[c].__SMmeta || {};
                    m.__SMmeta.module = m.__SMmeta.module || g;
                    m.__SMmeta.name = m.__SMmeta.name || c
                }
            }.bind(this), c ? "JS::call('" + g + "', '" + c + "', ...)" : "JS::requireModule('" + g + "')");
        return define(j, a, m, o | p, this, 1, this.$4)
    };
    a.prototype.$9 = function(a, b, c, d) {
        "use strict";
        return h.applyWithGuard(this.$12, this, [a, b, c, d], null, "JS::instance")
    };
    a.prototype.$12 = function(a, c, d, e) {
        "use strict";
        __p && __p();
        var f = null;
        a = a.split("@");
        var g = a[0];
        a = a[1];
        if (c) {
            var h = this.$4 && this.$4.bigPipeContext;
            f = function() {
                var a = b.call(null, c[0]);
                n({
                    relativeTo: this.$2,
                    bigPipeContext: h
                }, d);
                var e = Object.create(a.prototype);
                a.apply(e, d);
                return e
            }.bind(this)
        }
        define(g, c, f, p, null, e)
    };
    a.prototype.$6 = function(a, b, c) {
        "use strict";
        return h.applyWithGuard(this.$13, this, [a, b, c], null, "JS::markup")
    };
    a.prototype.$13 = function(a, b, c) {
        "use strict";
        a = a.split("@");
        var d = a[0];
        a = a[1];
        define(d, ["HTML"], function(c) {
            try {
                return c.replaceJSONWrapper(b).getRootNode()
            } catch (b) {
                throw r(b, a)
            }
        }, 0, null, c)
    };
    a.prototype.$7 = function(a, b, c, d) {
        "use strict";
        return h.applyWithGuard(this.$14, this, [a, b, c, d], null, "JS::element")
    };
    a.prototype.$14 = function(a, b, c, d) {
        "use strict";
        __p && __p();
        a = a.split("@");
        var e = a[0],
            f = a[1];
        if (b === null && c) {
            define(e, null, null, 0, null, c);
            return
        }
        a = [];
        var g = 0;
        d && (a.push(d), g = o, c++);
        define(e, a, function(a) {
            a = m(b, a);
            if (!a) {
                var c = "";
                throw r(new Error(l('Could not find element "%s"%s', b, c)), f)
            }
            return a
        }, g, null, c)
    };
    a.prototype.$8 = function(a) {
        "use strict";
        h.applyWithGuard(this.$15, this, [a], null, "ContextualComponents")
    };
    a.prototype.$15 = function(a) {
        "use strict";
        __p && __p();
        var b = this.$4 && this.$4.bigPipeContext;
        a.map(function(a) {
            n({
                relativeTo: this.$2,
                bigPipeContext: b
            }, a);
            var c = a[0];
            return [a, t(c)]
        }.bind(this)).sort(function(a, b) {
            return a[1] - b[1]
        }).forEach(function(a) {
            a = a[0];
            var b = a[0];
            a = a[1];
            g.register({
                element: b,
                isRoot: a
            })
        })
    };

    function r(a, b) {
        a.serverHash = b;
        return a
    }(function() {
        d(["HTML"], function(a) {})
    });

    function s(a, b, c) {
        return a.map(function(a) {
            return b.apply(c, a)
        })
    }

    function t(a) {
        var b = 0;
        while (a) a = a.parentElement, b++;
        return b
    }

    function u(b, c, a) {
        var d = a[0];
        d in b || (a[c] = (a[c] || 0) + 1);
        b[d] = !0
    }

    function v() {
        return {}
    }
    e.exports = a
}), null);
__d("EventEmitterWithValidation", ["BaseEventEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h;
    b = babelHelpers.inherits(a, g);
    h = b && b.prototype;

    function a(a) {
        h.constructor.call(this), this.$EventEmitterWithValidation1 = Object.keys(a)
    }
    a.prototype.emit = function(a) {
        i(a, this.$EventEmitterWithValidation1);
        return h.emit.apply(this, arguments)
    };

    function i(a, b) {
        if (b.indexOf(a) === -1) throw new TypeError(j(a, b))
    }

    function j(a, b) {
        a = 'Unknown event type "' + a + '". ';
        a += "Known event types: " + b.join(", ") + ".";
        return a
    }
    e.exports = a
}), null);
__d("mixInEventEmitter", ["EventEmitterWithHolding", "EventEmitterWithValidation", "EventHolder", "invariant"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    __p && __p();

    function a(a, b) {
        b || j(0);
        var c = a.prototype || a;
        c.__eventEmitter && j(0);
        a = a.constructor;
        a && (a === Object || a === Function || j(0));
        c.__types = babelHelpers["extends"]({}, c.__types, b);
        Object.assign(c, k)
    }
    var k = {
        emit: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emit(a, b, c, d, e, f, g)
        },
        emitAndHold: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g)
        },
        addListener: function(a, b, c) {
            return this.__getEventEmitter().addListener(a, b, c)
        },
        once: function(a, b, c) {
            return this.__getEventEmitter().once(a, b, c)
        },
        addRetroactiveListener: function(a, b, c) {
            return this.__getEventEmitter().addRetroactiveListener(a, b, c)
        },
        listeners: function(a) {
            return this.__getEventEmitter().listeners(a)
        },
        removeAllListeners: function() {
            this.__getEventEmitter().removeAllListeners()
        },
        removeCurrentListener: function() {
            this.__getEventEmitter().removeCurrentListener()
        },
        releaseHeldEventType: function(a) {
            this.__getEventEmitter().releaseHeldEventType(a)
        },
        __getEventEmitter: function() {
            if (!this.__eventEmitter) {
                var a = new h(this.__types),
                    b = new i();
                this.__eventEmitter = new g(a, b)
            }
            return this.__eventEmitter
        }
    };
    e.exports = a
}), null);
__d("Visibility", ["TimeSlice", "mixInEventEmitter"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i, j;
    document.hidden !== undefined ? (i = "hidden", j = "visibilitychange") : document.mozHidden !== undefined ? (i = "mozHidden", j = "mozvisibilitychange") : document.msHidden !== undefined ? (i = "msHidden", j = "msvisibilitychange") : document.webkitHidden !== undefined && (i = "webkitHidden", j = "webkitvisibilitychange");

    function k() {
        return i ? document[i] : !1
    }

    function a() {
        return document.addEventListener && j !== undefined
    }
    var l = {
        HIDDEN: "hidden",
        VISIBLE: "visible",
        isHidden: k,
        isSupported: a
    };
    h(l, {
        visible: !0,
        hidden: !0
    });
    a() && document.addEventListener(j, g.guard(function(a) {
        l.emit(k() ? l.HIDDEN : l.VISIBLE, {
            changeTime: a.timeStamp
        })
    }, "visibility change"));
    e.exports = l
}), null);
__d("bx", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};

    function a(a) {
        a = h[a];
        !a && g(0);
        return a
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (h[c] = a[c])
    };
    a.getURL = function(a) {
        return a.uri
    };
    e.exports = a
}), null);
__d("performanceNow", ["performance"], (function(a, b, c, d, e, f, g) {
    g.now ? a = function() {
        return g.now()
    } : a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("nativeRequestAnimationFrame", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeRequestAnimationFrame || a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
    e.exports = b
}), null);
__d("requestAnimationFramePolyfill", ["emptyFunction", "nativeRequestAnimationFrame"], (function(a, b, c, d, e, f, g, h) {
    var i = 0;
    b = h || function(b) {
        var c = Date.now(),
            d = Math.max(0, 16 - (c - i));
        i = c + d;
        return a.setTimeout(function() {
            b(Date.now())
        }, d)
    };
    b(g);
    e.exports = b
}), null);
__d("IdleCallbackImplementation", ["performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = [],
        j = 0,
        k = 0,
        l = -1,
        m = !1,
        n = 1e3 / 60,
        o = 2;

    function p(a) {
        return a
    }

    function q(a) {
        return a
    }

    function b(b, c) {
        var d = k++;
        i[d] = b;
        s();
        if (c != null && c.timeout > 0) {
            var e = p(d);
            a.setTimeout(function() {
                return y(e)
            }, c.timeout)
        }
        return p(d)
    }

    function r(a) {
        a = q(a);
        i[a] = null
    }

    function s() {
        m || (m = !0, h(function(a) {
            m = !1, u(g() - a)
        }))
    }

    function t(a) {
        var b = n - o;
        if (a < b) return b - a;
        a = a % n;
        if (a > b || a < o) return 0;
        else return b - a
    }

    function u(a) {
        __p && __p();
        var b = g();
        if (b > l) {
            a = t(a);
            if (a > 0) {
                b = b + a;
                x(b);
                l = b
            }
        }
        v() && s()
    }

    function v() {
        return j < i.length
    }

    function w() {
        while (v()) {
            var a = i[j];
            j++;
            if (a) return a
        }
    }

    function x(a) {
        var b;
        while (g() < a && (b = w())) b(new z(a))
    }

    function y(a) {
        var b = q(a);
        b = i[b];
        b && (r(a), b(new z(null)))
    }

    function z(a) {
        "use strict";
        this.didTimeout = a == null, this.$1 = a
    }
    z.prototype.timeRemaining = function() {
        "use strict";
        var a = this.$1;
        if (a != null) {
            var b = g();
            if (b < a) return a - b
        }
        return 0
    };
    e.exports = {
        requestIdleCallback: b,
        cancelIdleCallback: r
    }
}), null);
__d("cancelIdleCallback", ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f, g, h, i) {
    var j = h.IDLE_CALLBACK;

    function a(a) {
        h.unset(j, a);
        var b = j + String(a);
        i.cancelWithToken(b);
        g.cancelIdleCallback(a)
    }
    e.exports = a
}), null);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], (function(a, b, c, d, e, f, g) {
    a = {
        getID: function() {
            return g.COMMUNITY_ID || "0"
        },
        getName: function() {
            return g.COMMUNITY_NAME || ""
        }
    };
    e.exports = a
}), null);
/**
 * License: https://www.facebook.com/legal/license/ZtTipMAcpq9/
 */
__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    (function(b, c) {
        "use strict";
        __p && __p();
        var d = 1,
            e = {},
            h = {},
            i = h,
            j = !1,
            k = b.document,
            l;

        function m(a) {
            var b = a[0];
            a = Array.prototype.slice.call(a, 1);
            e[d] = function() {
                b.apply(c, a)
            };
            i = i.next = {
                handle: d++
            };
            return i.handle
        }

        function n() {
            __p && __p();
            var a, b;
            while (!j && (a = h.next)) {
                h = a;
                if (b = e[a.handle]) {
                    j = !0;
                    try {
                        b(), j = !1
                    } finally {
                        o(a.handle), j && (j = !1, h.next && l(n))
                    }
                }
            }
        }

        function o(a) {
            delete e[a]
        }

        function p() {
            __p && __p();
            if (b.postMessage && !b.importScripts) {
                var a = !0,
                    c = function c() {
                        a = !1, b.removeEventListener ? b.removeEventListener("message", c, !1) : b.detachEvent("onmessage", c)
                    };
                if (b.addEventListener) b.addEventListener("message", c, !1);
                else if (b.attachEvent) b.attachEvent("onmessage", c);
                else return !1;
                b.postMessage("", "*");
                return a
            }
        }

        function q() {
            var a = "setImmediate$" + Math.random() + "$",
                c = function(event) {
                    event.source === b && typeof event.data === "string" && event.data.indexOf(a) === 0 && n()
                };
            b.addEventListener ? b.addEventListener("message", c, !1) : b.attachEvent("onmessage", c);
            l = function() {
                var c = m(arguments);
                b.originalPostMessage ? b.originalPostMessage(a + c, "*") : b.postMessage(a + c, "*");
                return c
            }
        }

        function r() {
            var a = new MessageChannel();
            a.port1.onmessage = n;
            l = function() {
                var b = m(arguments);
                a.port2.postMessage(b);
                return b
            }
        }

        function s() {
            var a = k.documentElement;
            l = function() {
                var b = m(arguments),
                    c = k.createElement("script");
                c.onreadystatechange = function() {
                    c.onreadystatechange = null, a.removeChild(c), c = null, n()
                };
                a.appendChild(c);
                return b
            }
        }

        function t() {
            l = function() {
                setTimeout(n, 0);
                return m(arguments)
            }
        }
        p() ? b.MessageChannel && g.prefer_message_channel ? r() : q() : b.MessageChannel ? r() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? s() : t();
        f.setImmediate = l;
        f.clearImmediate = o
    })(Function("return this")())
}), null);
__d("setImmediatePolyfill", ["PromiseUsePolyfillSetImmediateGK", "invariant", "ImmediateImplementation"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = a.setImmediate;
    if (g.www_always_use_polyfill_setimmediate || !i) {
        d = b("ImmediateImplementation");
        i = d.setImmediate
    }

    function c(a) {
        typeof a === "function" || h(0);
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return i.apply(undefined, [a].concat(c))
    }
    e.exports = c
}), null);
__d("setImmediateAcrossTransitions", ["TimerStorage", "TimeSlice", "setImmediatePolyfill"], (function(a, b, c, d, e, f, g, h, i) {
    var j = g.IMMEDIATE;

    function a(a) {
        var b = h.guard(a, "setImmediate", {
            propagationType: h.PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        var f = i.apply(undefined, [b].concat(d)),
            g = j + String(f);
        h.registerForCancelling(g, b);
        return f
    }
    e.exports = a
}), null);
__d("setTimeoutAcrossTransitions", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f, g, h) {
    var i = a.__fbNativeSetTimeout || a.setTimeout,
        j = g.TIMEOUT;

    function b(b, c) {
        var d = h.guard(b, "setTimeout", {
            propagationType: h.PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
        var k = Function.prototype.apply.call(i, a, [d, c].concat(f)),
            l = j + k;
        h.registerForCancelling(l, d);
        return k
    }
    e.exports = b
}), null);
__d("Promise", ["TimeSlice", "invariant", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    __p && __p();

    function k() {}
    var l = null,
        m = {};

    function n(a) {
        try {
            return a.then
        } catch (a) {
            l = a;
            return m
        }
    }

    function o(a, b) {
        try {
            return a(b)
        } catch (a) {
            l = a;
            return m
        }
    }

    function p(a, b, c) {
        try {
            a(b, c)
        } catch (a) {
            l = a;
            return m
        }
    }

    function q(a) {
        __p && __p();
        if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
        if (typeof a !== "function") throw new TypeError("not a function");
        this._state = 0;
        this._value = null;
        this._deferreds = [];
        if (a === k) return;
        x(a, this)
    }
    q._noop = k;
    q.prototype.then = function(a, b) {
        if (this.constructor !== q) return r(this, a, b);
        var c = new q(k);
        s(this, new w(a, b, c));
        return c
    };

    function r(a, b, c) {
        return new a.constructor(function(d, e) {
            var f = new q(k);
            f.then(d, e);
            s(a, new w(b, c, f))
        })
    }

    function s(a, b) {
        __p && __p();
        while (a._state === 3) a = a._value;
        if (a._state === 0) {
            a._deferreds.push(b);
            return
        }
        i(function() {
            var c = a._state === 1 ? b.onFulfilled : b.onRejected;
            if (c === null) {
                b.continuation(function() {});
                a._state === 1 ? t(b.promise, a._value) : u(b.promise, a._value);
                return
            }
            c = o(b.continuation.bind(null, c), a._value);
            c === m ? u(b.promise, l) : t(b.promise, c)
        })
    }

    function t(a, b) {
        __p && __p();
        if (b === a) return u(a, new TypeError("A promise cannot be resolved with itself."));
        if (b && (typeof b === "object" || typeof b === "function")) {
            var c = n(b);
            if (c === m) return u(a, l);
            if (c === a.then && b instanceof q) {
                a._state = 3;
                a._value = b;
                v(a);
                return
            } else if (typeof c === "function") {
                x(c.bind(b), a);
                return
            }
        }
        a._state = 1;
        a._value = b;
        v(a)
    }

    function u(a, b) {
        a._state = 2, a._value = b, v(a)
    }

    function v(a) {
        for (var b = 0; b < a._deferreds.length; b++) s(a, a._deferreds[b]);
        a._deferreds = null
    }

    function w(a, b, c) {
        this.onFulfilled = typeof a === "function" ? a : null, this.onRejected = typeof b === "function" ? b : null, this.continuation = g.getGuardedContinuation("Promise Handler"), this.promise = c
    }

    function x(a, b) {
        __p && __p();
        var c = !1;
        a = p(a, function(a) {
            if (c) return;
            c = !0;
            t(b, a)
        }, function(a) {
            if (c) return;
            c = !0;
            u(b, a)
        });
        !c && a === m && (c = !0, u(b, l))
    }
    q.prototype.done = function(a, b) {
        var c = new Error("Promise.done"),
            d = arguments.length ? this.then.apply(this, arguments) : this;
        d.then(null, function(a) {
            j(function() {
                if (a instanceof Error) throw a;
                else {
                    c.message = "" + a;
                    throw c
                }
            }, 0)
        })
    };
    var y = E(!0),
        z = E(!1),
        A = E(null),
        B = E(undefined),
        C = E(0),
        D = E("");

    function E(a) {
        var b = new q(q._noop);
        b._state = 1;
        b._value = a;
        return b
    }
    q.resolve = function(a) {
        __p && __p();
        if (a instanceof q) return a;
        if (a === null) return A;
        if (a === undefined) return B;
        if (a === !0) return y;
        if (a === !1) return z;
        if (a === 0) return C;
        if (a === "") return D;
        if (typeof a === "object" || typeof a === "function") try {
            var b = a.then;
            if (typeof b === "function") return new q(b.bind(a))
        } catch (a) {
            return new q(function(b, c) {
                c(a)
            })
        }
        return E(a)
    };
    q.all = function(a) {
        __p && __p();
        Array.isArray(a) || (a = [new q(function() {
            throw new TypeError("Promise.all must be passed an iterable.")
        })]);
        var b = Array.prototype.slice.call(a);
        return new q(function(a, c) {
            __p && __p();
            if (b.length === 0) return a([]);
            var d = b.length;

            function e(f, g) {
                __p && __p();
                if (g && (typeof g === "object" || typeof g === "function"))
                    if (g instanceof q && g.then === q.prototype.then) {
                        while (g._state === 3) g = g._value;
                        if (g._state === 1) return e(f, g._value);
                        g._state === 2 && c(g._value);
                        g.then(function(a) {
                            e(f, a)
                        }, c);
                        return
                    } else {
                        var h = g.then;
                        if (typeof h === "function") {
                            h = new q(h.bind(g));
                            h.then(function(a) {
                                e(f, a)
                            }, c);
                            return
                        }
                    }
                b[f] = g;
                --d === 0 && a(b)
            }
            for (var f = 0; f < b.length; f++) e(f, b[f])
        })
    };
    q.reject = function(a) {
        return new q(function(b, c) {
            c(a)
        })
    };
    q.race = function(a) {
        return new q(function(b, c) {
            a.forEach(function(a) {
                q.resolve(a).then(b, c)
            })
        })
    };
    q.prototype["catch"] = function(a) {
        return this.then(null, a)
    };
    q.prototype["finally"] = function(a) {
        return this.then(function(b) {
            return q.resolve(a()).then(function() {
                return b
            })
        }, function(b) {
            return q.resolve(a()).then(function() {
                throw b
            })
        })
    };
    e.exports = q
}), null);
__d("FBJSON", ["ex"], (function(a, b, c, d, e, f, g) {
    function a(a, b, c) {
        typeof b !== "function" && (c = b || c, b = undefined);
        c = c || "unknown";
        try {
            return JSON.parse(a, b)
        } catch (d) {
            b = new Error(g('JSON.parse from %s failed: %s "%s" with exception: %s', c, Object.prototype.toString.call(a), a, d));
            b.framesToPop = 1;
            throw b
        }
    }
    e.exports = {
        parse: a,
        stringify: JSON.stringify
    }
}), null);
__d("XHRTransport", ["Promise", "CSRFGuard", "FBJSON", "PHPQuerySerializer"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j = b("PHPQuerySerializer").serialize;

    function k(a, b) {
        return a && b ? a + "&" + b : a || b || ""
    }

    function a() {
        try {
            try {
                return new XMLHttpRequest()
            } catch (a) {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }
        } catch (a) {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
    }

    function l(a, b, c, d, e) {
        __p && __p();
        return new g(function(f, g) {
            __p && __p();
            var h = n.createTransportObject(),
                i = e || "";
            c && (i = k(i, j(c)));
            d && (i = k(i, j(d)));
            a === "GET" && (b += (b.indexOf("?") === -1 ? "?" : "&") + i);
            h.open(a, b, !0);
            h.onreadystatechange = function() {
                if (h.readyState === 4) {
                    if (h.status < 200 || h.status >= 300) {
                        g(h.responseText);
                        return
                    }
                    f(h.responseText)
                }
            };
            a === "POST" ? (h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), h.send(i)) : h.send()
        })
    }

    function c(a, b, c, d) {
        return l(a, b, c, d, "__ajax__=true").then(m)
    }

    function m(a) {
        a = a.replace(h.regex, "");
        a = i.parse(a, e.id);
        if (a.error) return g.reject(a.error);
        else {
            a = a.payload;
            typeof a === "string" && (a = i.parse(a, e.id));
            return a
        }
    }
    var n = {
        sendAJAXRequest: c,
        sendRequest: l,
        createTransportObject: a
    };
    e.exports = n
}), null);
__d("clearTimeout", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f, g, h) {
    var i = a.__fbNativeClearTimeout || a.clearTimeout,
        j = g.TIMEOUT;

    function b(a) {
        if (a != null) {
            g.unset(j, a);
            var b = j + String(a);
            h.cancelWithToken(b)
        }
        i(a)
    }
    e.exports = b
}), null);
__d("DTSG", ["Promise", "MRequestConfig", "XHRTransport", "clearTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    __p && __p();
    a = h.dtsg;
    var l, m, n;

    function o() {
        n = null, m = null
    }

    function p(a) {
        j(m), m = k(o, (a.valid_for - 60) * 1e3), n = a.token
    }
    p(a);
    var q = {
        getCachedToken: function() {
            return n
        },
        getToken: function() {
            return n != null ? g.resolve(n) : q.refresh()
        },
        setToken: function(a) {
            n = a
        },
        refresh: function() {
            l || (l = r().then(function(a) {
                p(a);
                return a.token
            }));
            return l
        }
    };

    function r() {
        __p && __p();
        var a = 0;

        function b() {
            return i.sendAJAXRequest("GET", "/ajax/dtsg/").then(c)["catch"](d)
        }

        function c(b) {
            var a = b.token;
            b = b.valid_for;
            if (typeof a === "string" && typeof b === "number") return {
                token: a,
                valid_for: b
            };
            throw new Error("DTSG: Bad response received.")
        }

        function d() {
            return new g(function(c) {
                a += 1, k(function() {
                    c(b())
                }, Math.pow(2, a) * 1e3)
            })
        }
        return b()
    }
    e.exports = q
}), null);
__d("DTSGUtils", ["SprinkleConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getNumericValue: function(a) {
            var b = "";
            for (var c = 0; c < a.length; c++) b += a.charCodeAt(c);
            return g.version + b
        }
    };
    e.exports = a
}), null);
__d("StaticSiteData", [], (function(a, b, c, d, e, f) {
    e.exports = {
        pkg_cohort_key: "__pc",
        be_key: "__be",
        spin_rev_key: "__spin_r",
        spin_time_key: "__spin_t",
        spin_branch_key: "__spin_b",
        spin_mhenv_key: "__spin_dev_mhenv"
    }
}), null);
__d("asyncParams", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        add: function(a, b) {
            g[a] = b
        },
        get: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("isSocialPlugin", ["CSSCore"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return !!document.body && g.hasClass(document.body, "plugin")
    }
    e.exports = a
}), null);
__d("getAsyncParams", ["CurrentCommunity", "CurrentUserInitialData", "DTSG", "DTSGUtils", "ISB", "LSD", "ServerJSDefine", "SiteData", "SprinkleConfig", "StaticSiteData", "asyncParams", "isSocialPlugin"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    __p && __p();
    var s = 1;

    function a(a) {
        __p && __p();
        var b, c = babelHelpers["extends"]({}, q.get(), (b = {
            __user: h.USER_ID,
            __a: 1,
            __dyn: m.getLoadedModuleHash(),
            __req: (s++).toString(36)
        }, b[p.be_key] = n.be_mode, b[p.pkg_cohort_key] = n.pkg_cohort, b.__rev = n.client_revision, b));
        window.location.search.slice(1).split("&").forEach(function(a) {
            a = a.split("=");
            var b = a[0];
            a = a[1];
            (b === "locale" || b === "cxobfus" || b === "js_debug" || b === "binast" || b.substr(0, 4) === "tfc_" || b.substr(0, 4) === "tfi_" || b.substr(0, 3) === "mh_") && (c[b] = a)
        });
        if (a == "POST") {
            b = i.getCachedToken ? i.getCachedToken() : i.getToken();
            b && (c.fb_dtsg = b, o.param_name && (c[o.param_name] = j.getNumericValue(b)));
            l.token && (c.lsd = l.token)
        }
        k.token && (c.fb_isb = k.token);
        g.getID() !== "0" && (c.__cid = g.getID());
        r() && (c.__sp = 1);
        n.spin && (c[p.spin_rev_key] = n[p.spin_rev_key], c[p.spin_branch_key] = n[p.spin_branch_key], c[p.spin_time_key] = n[p.spin_time_key], n[p.spin_mhenv_key] && (c[p.spin_mhenv_key] = n[p.spin_mhenv_key]));
        return c
    }
    e.exports = a
}), null);
__d("getSameOriginTransport", ["ex"], (function(a, b, c, d, e, f, g) {
    function b() {
        try {
            return a.XMLHttpRequest ? new a.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0")
        } catch (a) {
            throw new Error(g("getSameOriginTransport: %s", a.message))
        }
    }
    e.exports = b
}), null);
__d("requireWeak", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        d && d.call(null, [a], b)
    }
    e.exports = a
}), null);
__d("gkx", ["emptyFunction", "invariant", "requireWeak"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    var j = {},
        k = {};

    function a(a) {
        var b = j[a];
        b != null || h(0);
        k[a] || (k[a] = !0, i("Banzai", function(c) {
            return c.post("gk2_exposure", {
                identifier: a,
                hash: b.hash
            })
        }));
        return b.result
    }
    a.add = function(a) {
        for (var b in a) b in j || (j[b] = a[b])
    };
    b = g;
    a.setPass = b;
    a.setFail = b;
    e.exports = a
}), null);
__d("ix", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};

    function a(a) {
        a = h[a];
        !a && g(0);
        return a
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (h[c] = a[c])
    };
    e.exports = a
}), null);
__d("qex", ["invariant", "requireWeak"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = {},
        j = {};

    function a(a, b) {
        throw new Error("qex should NEVER be called at runtime directly")
    }
    a._ = function(a) {
        var b = i[a];
        b != null || g(0);
        var c = b.r,
            d = b.l;
        d != null && !j[a] && (j[a] = !0, h("Banzai", function(a) {
            a.post("qex", {
                l: d
            }, {
                signal: !0
            })
        }));
        return c
    };
    a.add = function(a) {
        for (var b in a) b in i || (i[b] = a[b])
    };
    e.exports = a
}), null);
__d("requestIdleCallbackAcrossTransitions", ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f, g, h, i) {
    var j = a.requestIdleCallback || g.requestIdleCallback,
        k = h.IDLE_CALLBACK;
    e.exports = function(b, c) {
        b = i.guard(b, "requestIdleCallback", {
            propagationType: i.PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        c = j.call(a, b, c);
        var d = k + String(c);
        i.registerForCancelling(d, b);
        return c
    }
}), null);
__d("requestIdleCallback", ["TimerStorage", "TimeSlice", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i) {
    e.exports = function(b, c) {
        var d;

        function e(a) {
            g.unset(g.IDLE_CALLBACK, d), b(a)
        }
        h.copyGuardForWrapper(b, e);
        d = i.call(a, e, c);
        g.set(g.IDLE_CALLBACK, d);
        return d
    }
}), null);
__d("Bootloader", ["Arbiter", "BootloaderConfig", "CallbackDependencyManager", "CSRFGuard", "CSSLoader", "ErrorUtils", "FBLogger", "ResourceTimingsStore", "ServerJS", "TimeSlice", "Visibility", "bx", "cancelIdleCallback", "ex", "getAsyncParams", "getSameOriginTransport", "gkx", "ifRequired", "invariant", "ix", "performanceAbsoluteNow", "qex", "requestIdleCallback", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, aa, ba, ca, u, da, ea, v, fa, ga, ha) {
    __p && __p();
    var w = function() {},
        x = [],
        y = [],
        z = {},
        A = {},
        B = {},
        C = {},
        D = {},
        E = null,
        F = {},
        G = {},
        ia = {},
        H = {},
        I = {},
        J = [],
        K = {},
        L = {},
        ja = {},
        M = {},
        ka = !1,
        N = !1,
        O = new i(),
        la = 0,
        ma = h.preloader_num_preloads,
        na = h.preloader_num_loads,
        oa = {},
        P = {},
        Q = [],
        R = [],
        pa = {},
        S = null,
        T = h.preloader_enabled,
        qa = !1;
    T && d(["Run"], function(a) {
        a.onLeave(function() {
            Q.length = 0, R.length = 0, S && (s(S), S = null), T = !1
        })
    });
    var ra = h.jsRetries || [],
        sa = h.jsRetryAbortNum,
        ta = h.jsRetryAbortTime,
        ua = ra.length > 0,
        va = Object.freeze({
            BOOTLOAD: "bootloader/bootload"
        });
    l.addListener(function(a) {
        a.loadingUrls = Object.keys(G)
    }, !0);

    function wa(a) {
        var b = C[a];
        if (b) return b;
        throw new Error(t("Bootloader: %s is not in the component map", a))
    }

    function U() {
        E || (E = document.head || document.getElementsByTagName("head")[0] || document.body);
        return E
    }

    function xa() {
        if (!ua) return !1;
        var a = J.length;
        if (a < sa) return !0;
        a = J[a - 1] - J[a - sa];
        a < ta && (m("FIXME").warn("JS retry abort"), ua = !1);
        return ua
    }

    function ya(a, b, c, d, e) {
        var f = document.createElement("link");
        f.href = a;
        f.rel = "preload";
        b !== "async" || da(0);
        f.as = b === "js" ? "script" : "style";
        e && (f.onload = e);
        c != null && F[c].crossOrigin && (f.crossOrigin = "anonymous");
        A[c] = !0;
        d.appendChild(f)
    }

    function za(a, b, c, d) {
        __p && __p();
        var e = document.createElement("script");
        e.src = a;
        e.async = !0;
        b != null && F[b].crossOrigin && (e.crossOrigin = "anonymous");
        var f = v(),
            g = p.getGuardedContinuation("Bootloader script.onresponse"),
            i = n.getUID("js", a);
        u("TimeSliceAutoclosedInteraction", function(a) {
            return a.getInteractionsActiveRightNow().forEach(function(a) {
                return a.forResourceRequest(i).addStringAnnotation("requested_in_continuation", "true")
            })
        });
        n.annotate("js", i).addStringAnnotation("name", b != null ? b : "").addStringAnnotation("source", a);
        u("TimeSliceInteraction", function(c) {
            c.informGlobally("bootloader._loadJS").addStringAnnotation("source", a).addStringAnnotation("name", b != null ? b : "")
        });
        n.measureRequestSent("js", i);
        e.onload = g.bind(undefined, function() {
            I[a] && m("FIXME").info("JS retry success [%s] at %s | time: %s | retries: %s", b, a, v() - f, I[a]), n.measureResponseReceived("js", i), c()
        });
        e.onreadystatechange = function() {
            ["loaded", "complete"].includes(this.readyState) && (n.measureResponseReceived("js", i), g.bind(undefined, c)())
        }.bind(this);
        e.onerror = g.bind(undefined, function() {
            n.measureResponseReceived("js", i), I[a] || (I[a] = 0), xa() && I[a] < ra.length ? (J.push(v()), setTimeout(function() {
                if (!xa()) return;
                var d = e.parentNode;
                d.removeChild(e);
                za(a, b, c, d)
            }, ra[I[a]]), I[a]++) : (H[a] = !0, m("FIXME").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", b, a, v() - f, I[a], Object.keys(G).length), c())
        });
        !q.isHidden() && h.staggerJsDownloads ? Aa(e) : d.appendChild(e);
        return e
    }
    var V = !1,
        W = [],
        X = !1;

    function Aa(a) {
        V ? (W.push(a), X || (X = !0, Ba())) : (U().appendChild(a), V = !0)
    }

    function Ba() {
        __p && __p();
        ha(p.guard(function() {
            __p && __p();
            var a = W.shift();
            U().appendChild(a);
            if (W.length === 0) V = !1, X = !1;
            else if (q.isHidden()) {
                while (W.length) U().appendChild(W.shift());
                V = !1;
                X = !1
            } else Ba()
        }, "Bootloader staggered download scheduler", {
            propagationType: p.PropagationType.ORPHAN
        }), 0)
    }

    function Ca(a, b, c, d) {
        __p && __p();
        var e = function() {
            return $.done([c], b)
        };
        G[b] = v();
        if (a === "js") za(b, c, e, d);
        else if (a === "async") Da(b, e);
        else if (a === "css") {
            if (c == null) {
                m("FIXME").mustfix("name must be defined when loading CSS resource");
                return
            }
            a = F[c].crossOrigin;
            k.loadStyleSheet(c, b, d, !!a, e, function() {
                m("FIXME").warn("CSS timeout [%s] at %s | concurrency: %s", c, b, Object.keys(G).length), H[b] = !0, e()
            })
        }
    }

    function Da(a, b) {
        __p && __p();
        var c = aa("GET");
        for (var d in c) {
            var e = encodeURIComponent(d),
                f = encodeURIComponent(c[d]);
            a += "&" + e + "=" + f
        }
        var g = ba();
        g.open("GET", a, !0);
        var h = p.getGuardedContinuation("Bootloader _requestHastePayload");
        g.onreadystatechange = function() {
            g.readyState === 4 && h(function() {
                var c = g.status === 200 ? JSON.parse(j.clean(g.responseText)) : {},
                    d = Ea();
                d(c, a, b)
            })
        };
        g.send()
    }

    function Ea() {
        __p && __p();
        return p.guard(function(a, b, c) {
            __p && __p();
            var d = a.jsmods;
            b = a.resource_map;
            var e = a.bootloadable,
                f = a.ixData,
                g = a.bxData,
                h = a.gkxData,
                i = a.qexData;
            a = a.allResources;
            b && $.setResourceMap(b);
            f && ea.add(f);
            g && r.add(g);
            h && ca.add(h);
            i && fa.add(i);
            e && $.enableBootload(e);
            $.loadResources(a || [], function() {
                new o().handle(d || {}), c()
            })
        }, "Bootloader receiveEndpointData", {
            propagationType: p.PropagationType.CONTINUATION
        })
    }

    function Fa(a) {
        if (!F[a]) {
            m("FIXME").mustfix("Missing unloading resource %s", a);
            return
        }
        F[a].type === "css" && (k.unloadStyleSheet(a), delete z[a], O.unsatisfyPersistentDependency(a), K[a] && (K[a].cancel(), delete K[a]))
    }

    function Y(a, b, c, d) {
        __p && __p();
        var e = {},
            f = {},
            i = {},
            j = window.CavalryLogger && window.CavalryLogger.getInstance();
        a.forEach(function(a) {
            var b = F[a];
            if (!b) {
                m("FIXME").mustfix("Unable to resolve resource %s.", a);
                return
            }
            b.nonblocking && !h.assumeNotNonblocking ? i[a] = !0 : f[a] = !0;
            z[a] || (z[a] = !0, (b.permanent || h.assumePermanent) && (B[a] = !0), e[a] = b, j && j.measureResources({
                name: a,
                type: b.type
            }, c))
        });
        a = b;
        if (d) {
            var k = v();
            a = function() {
                var a = Math.round(v() - k),
                    c = Object.keys(f).length,
                    h = Object.keys(e);
                h = {
                    blocking_resources_downloaded: h.filter(function(a) {
                        return a in f
                    }).length,
                    blocking_resources_count: c,
                    all_resources_downloaded: h.length,
                    all_resources_count: c + Object.keys(i).length,
                    err_count: Object.values(e).filter(function(a) {
                        a = a.src;
                        return a in H
                    }).length
                };
                c = p.getContext();
                h = babelHelpers["extends"]({}, d, h, {
                    timeslice_context: c && c.name,
                    start_time: k,
                    duration: a
                });
                g.inform(va.BOOTLOAD, h, g.BEHAVIOR_PERSISTENT);
                b && b()
            }
        }
        a && O.registerCallback(a, Object.keys(f));
        var l = document.createDocumentFragment();
        Object.entries(e).forEach(function(a) {
            var b = a[0];
            a = a[1];
            var c = a.type;
            a = a.src;
            Ca(c, a, b, l)
        });
        U().appendChild(l)
    }

    function Ga() {
        return p.guard(function(a, b, c, d) {
            if (b) {
                for (var e = arguments.length, f = new Array(e > 4 ? e - 4 : 0), g = 4; g < e; g++) f[g - 4] = arguments[g];
                b.apply(a, f)
            }
            d && m("FIXME").warn("JS loading error [%s] at %s", c, a.src);
            $.done([c])
        }, "Bootloader _onScriptDone", {
            propagationType: p.PropagationType.CONTINUATION
        })
    }

    function Ha() {
        __p && __p();
        if (ka) return;
        ka = !0;
        Array.from(document.getElementsByTagName("link")).forEach(function(a) {
            var b;
            (b = a.getAttribute("data-bootloader-hash")) && (F[b] = {
                src: a.href,
                type: "css"
            }, (a.getAttribute("data-permanent") || h.assumePermanent) && (F[b].permanent = 1, B[b] = !0), k.registerLoadedStyleSheet(b, a) || m("FIXME").warn("Duplicate CSS link loaded for [%s]: %s", b, a.href), $.done([b]), M[b] = !0)
        });
        Array.from(document.getElementsByTagName("script")).forEach(function(a) {
            __p && __p();
            var b;
            if (b = a.getAttribute("data-bootloader-hash")) {
                F[b] = {
                    src: a.src,
                    type: "js"
                };
                if (a.getAttribute("async"))
                    if (window._btldr && window._btldr[b]) $.done([b]);
                    else {
                        var c = Ga();
                        a.onload = c.bind(null, a, a.onload, b, !1);
                        a.onerror = c.bind(null, a, a.onerror, b, !0);
                        z[b] = !0
                    }
                else $.done([b]);
                M[b] = !0
            }
        })
    }
    var Z = {
            _insertSorted: function(a) {
                __p && __p();
                if (R.length === 0) {
                    R.push(a);
                    return
                }
                var b = 0,
                    c = R.length - 1,
                    d, e;
                while (b <= c) {
                    d = Math.floor((b + c) / 2);
                    e = R[d];
                    if (e.priority < a.priority) b = d + 1;
                    else if (e.priority > a.priority) c = d - 1;
                    else {
                        R.splice(d, 0, a);
                        return
                    }
                }
                R.splice(b, 0, a)
            },
            enqueuePreloadJob: function(a, b) {
                b === void 0 && (b = 1), !(a in A) && !(a in z) && !(a in pa) && (pa[a] = !0, Z._insertSorted({
                    hash: a,
                    priority: b
                }), Z.runPreloadQueue())
            },
            runPreloadQueue: function() {
                __p && __p();
                if (h.preloader_preload_after_dd && !qa || !T) return;
                var a = U(),
                    b = function() {
                        var b = R.pop(),
                            c = F[b.hash];
                        if (!c) return "continue";
                        !z[b.hash] && !A[b.hash] && (oa[b.hash] = !0, ya(c.src, c.type, b.hash, a, function() {
                            T && (delete oa[b.hash], Z.runPreloadQueue(), Z._enqueueScriptLoadingJob(b.hash, F[b.hash].type))
                        }))
                    };
                while (Z._isNetworkIdle() && R.length > 0 && Object.keys(oa).length < ma) {
                    var c = b();
                    if (c === "continue") continue
                }
            },
            _enqueueScriptLoadingJob: function(a, b) {
                if (b === "css") return;
                z[a] || (Q.push(a), Z._issueIdleCallback())
            },
            _runScriptLoadingQueue: function() {
                S = null;
                var a = function() {
                    var a = Q.shift();
                    z[a] || (P[a] = !0, Y([a], function() {
                        T && (delete P[a], Z._issueIdleCallback())
                    }))
                };
                while (Q.length > 0 && Object.keys(P).length < na) a()
            },
            _issueIdleCallback: function() {
                Q.length > 0 && Object.keys(P).length < na && !S && (S = ga(Z._runScriptLoadingQueue))
            },
            _isNetworkIdle: function() {
                return Object.keys(G).length == 0
            }
        },
        $ = {
            preloadModules: function(a) {
                __p && __p();
                if (!N) {
                    var b = p.getGuardedContinuation("Deferred: Bootloader.preloadModules");
                    x.push([a, b]);
                    return
                }
                b = document.createDocumentFragment();
                for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (c) {
                        if (d >= a.length) break;
                        e = a[d++]
                    } else {
                        d = a.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    e = wa(e);
                    for (var e = e.resources, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var h;
                        if (f) {
                            if (g >= e.length) break;
                            h = e[g++]
                        } else {
                            g = e.next();
                            if (g.done) break;
                            h = g.value
                        }
                        h = h;
                        var i = F[h];
                        if (!i) {
                            m("FIXME").mustfix("Unable to resolve resource %s.", h);
                            continue
                        }
                        if (A[h] || z[h]) continue;
                        ya(i.src, i.type, h, b)
                    }
                }
                U().appendChild(b)
            },
            loadModules: function(a, b, c) {
                __p && __p();
                b === void 0 && (b = w);
                c === void 0 && (c = "loadModules: unknown caller");
                var e = function() {
                        return b.apply(undefined, arguments)
                    },
                    f = {
                        remove: function() {
                            b = w
                        }
                    };
                if (!N) {
                    var g = "Deferred: Bootloader.loadModules";
                    g = p.getGuardedContinuation(g);
                    y.push([a, e, c, g]);
                    return f
                }
                var i = v();
                g = JSON.stringify([c, a]);
                var j = !1;
                g in ja || (j = !0, ja[g] = i);
                var k = [],
                    l = [],
                    m = [],
                    n = [];
                g = !1;
                var o = 0;
                a.forEach(function(a) {
                    var b = wa(a);
                    b.needsAsync && (o++, a in D ? m.push(D[a]) : u.call(null, a, null, function() {
                        n.push(a)
                    }));
                    a in L || (g = !0, L[a] = i);
                    b.module && k.push(a);
                    b.rds && l.push.apply(l, b.rds);
                    m.push.apply(m, b.resources)
                });
                if (n.length > 0) {
                    var q = h.payloadEndpointURI,
                        r = "async:" + la++,
                        s = encodeURIComponent(n.join(",")),
                        t = q.indexOf("?") > -1 ? "&" : "?";
                    F[r] = {
                        src: "" + q + t + "modules=" + s,
                        type: "async"
                    };
                    m.push(r);
                    n.forEach(function(a) {
                        D[a] = r
                    })
                }
                u("TimeSliceInteraction", function(b) {
                    b.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", m).addStringAnnotation("bootloader_reference", c).addSetAnnotation("requested_components", a)
                });
                q = null;
                j && (q = {
                    ref: c,
                    components: a,
                    has_new_component: g,
                    first_identical_request: j,
                    async_resources_count: o,
                    async_resources_downloaded: n.length
                });
                Y(m, d.bind(null, k, function() {
                    e.apply(undefined, arguments), l.length && d.call(null, l, w)
                }), null, q);
                return f
            },
            loadResources: function(a, b, c, d) {
                __p && __p();
                Ha();
                if (c) {
                    var e = {};
                    a.forEach(function(a) {
                        e[a] = !0
                    });
                    for (var f in z) f in B || f in e || f in M || Fa(f);
                    M = {}
                }
                Y(a, b, d)
            },
            requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(a) {
                Ca("js", a, null, U())
            },
            done: function(a, b) {
                b != null && (ia[b] = v() - G[b], delete G[b], Z.runPreloadQueue()), window.CavalryLogger && window.CavalryLogger.done_js(a), a.forEach(function(a) {
                    a != null && (z[a] = !0, O.satisfyPersistentDependency(a), F[a] && F[a].type === "css" && !K[a] && (K[a] = define(k.moduleName(a), [], "x", 2, null, 1)))
                })
            },
            enableBootload: function(a) {
                __p && __p();
                for (var b in a)
                    if (!C[b]) {
                        C[b] = a[b];
                        if (T && a[b].priority && a[b].priority > 0)
                            for (var c = a[b].resources, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var f;
                                if (d) {
                                    if (e >= c.length) break;
                                    f = c[e++]
                                } else {
                                    e = c.next();
                                    if (e.done) break;
                                    f = e.value
                                }
                                f = f;
                                Z.enqueuePreloadJob(f, 1)
                            }
                    }
                N || (Ha(), N = !0, y.forEach(function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2];
                    a = a[3];
                    a(function() {
                        $.loadModules.apply($, [b, c, d])
                    })
                }), x.forEach(function(a) {
                    var b = a[0];
                    a = a[1];
                    a(function() {
                        $.preloadModules.apply($, [b])
                    })
                }), x = [], y = [])
            },
            setResourceMap: function(a) {
                for (var b in a) F[b] || (F[b] = a[b])
            },
            getURLToHashMap: function() {
                var a = {};
                for (var b in F) a[F[b].src] = b;
                return a
            },
            loadPredictedResources: function(a, b) {
                a.forEach(function(a) {
                    M[a] = !0
                }), Y(a, b)
            },
            loadPredictedResourceMap: function(a, b) {
                $.setResourceMap(a), $.loadPredictedResources(Object.keys(a), b)
            },
            getLoadingUrls: function() {
                var a = {},
                    b = v();
                for (var c in G) a[c] = b - G[c];
                return a
            },
            getBootloadedComponents: function() {
                return L
            },
            getLoadedUrlTimes: function() {
                return ia
            },
            getErrorUrls: function() {
                return Object.keys(H)
            },
            notifyDisplayDone: function() {
                qa || (qa = !0, Z.runPreloadQueue())
            },
            __debug: {
                callbackManager: O,
                componentMap: C,
                requested: z,
                resources: F,
                retries: I,
                errors: H,
                loading: G,
                predictedResources: M,
                bootloaded: L,
                preloader: Z
            },
            Events: va
        };
    e.exports = $
}), null);
__d("ReactExperimentalProdProfiling", ["requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = null,
        i = !1,
        j = 0,
        k = {};
    a = {
        startProfiling: function() {
            var a = (j++).toString();
            h !== null ? k[a] = h.addUserTimingListener() : k[a] = function() {};
            var b = function() {
                k[a](), delete k[a]
            };
            return {
                stopProfiling: b
            }
        },
        onReactDomLoad: function(a) {
            __p && __p();
            if (h !== null) return;
            h = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            if (typeof h.addUserTimingListener !== "function") {
                g("warning", function(a) {
                    a(i, "ReactExperimentalProdProfiling.onReactDomLoad() cannot find the necessary React internals."), i = !0
                });
                h = null;
                return
            }
            Object.keys(k).map(function(a) {
                h && (k[a] = h.addUserTimingListener())
            })
        }
    };
    e.exports = a
}), null);
__d("ArtilleryUserTimingProfiler", ["ArtilleryExperiments", "Bootloader", "ReactExperimentalProdProfiling"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    var j = window.PerformanceObserver,
        k = window.PerformanceObserverEntryList,
        l = null,
        m, n = [],
        o = [];

    function p() {
        return m != null ? m.isActive() : o.length > 0
    }
    q() && h.loadModules(["GeneratedArtilleryUserTimingSink"], function(a) {
        __p && __p();
        m = new a();
        m.setScalar("navStart", window.performance.timing.navigationStart);
        for (var a = 0; a < o.length; a++) {
            var b = o[a];
            b()
        }
        o.length = 0;
        n.forEach(function(a) {
            return r(a, null)
        });
        n.length = 0
    }, "ArtilleryUserTimingProfiler");

    function q() {
        if (navigator && navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Chrome") > -1) {
            var a = navigator.userAgent.match(/Chrome\/(\d*)/);
            if (a) {
                a = Number(a[1]);
                if (a < 60) return !1
            }
        }
        return g.user_timing && window && window.performance && window.performance.timing && window.performance.timing.navigationStart && j && k
    }

    function r(a, b) {
        m != null ? a.getEntries().forEach(function(a) {
            m.addEntry(a)
        }) : n.push(a)
    }

    function s() {
        return {
            react: i.startProfiling()
        }
    }

    function t(a) {
        a.react.stopProfiling()
    }
    var u = {
        close: function(a) {
            a === void 0 && !1;
            return null
        }
    };

    function a() {
        __p && __p();
        if (!q()) return null;
        l === null && (l = new j(r), l.observe({
            entryTypes: ["measure"]
        }));
        var a = !1,
            b;
        m == null ? (b = u, o.push(function() {
            a || (b = m.open())
        })) : b = m.open();
        var c = s();
        return {
            close: function(d) {
                d === void 0 && (d = !1);
                a = !0;
                t(c);
                d = b.close(d);
                !p() && l !== null && (l.disconnect(), l = null);
                return d
            }
        }
    }
    b = {
        startRecording: a
    };
    e.exports = b
}), null);
__d("LogBuffer", ["CircularBuffer"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = a.__fbNativeSetTimeout || a.setTimeout,
        i = 5e3,
        j = {},
        k = {};
    b = {
        write: function(a, b) {
            var c = j[a] = j[a] || new g(i);
            c.write(b);
            k[a] && k[a].forEach(function(a) {
                try {
                    a(b)
                } catch (a) {}
            })
        },
        read: function(a) {
            if (!j[a]) return [];
            else return j[a].read()
        },
        tail: function(a, b) {
            __p && __p();
            if (typeof b !== "function") return;
            k[a] = k[a] || [];
            k[a].push(b);
            if (j[a]) {
                a = j[a];
                a.read().forEach(function(a) {
                    try {
                        b(a)
                    } catch (a) {}
                })
            }
        },
        expand: function(a, b) {
            var c = j[a];
            c ? c.expand(b) : j[a] = new g(b)
        },
        clear: function(a) {
            j[a] && h(function() {
                j[a].clear()
            }, 0)
        }
    };
    e.exports = b
}), null);
__d("OnDemandExecutionContextObserver", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a() {
        this.$5 = !1, this.$4 = !1, this.$1 = 0, this.$2 = {}, this.$3 = 0
    }
    a.prototype.onNewContextCreatedWhileEnabled = function(a, b, c) {
        throw Error("unimplemented abstract method")
    };
    a.prototype.onNewContextCreatedWhileDisabled = function(a, b, c) {};
    a.prototype.onContextCanceled = function(a, b) {};
    a.prototype.onBeforeContextStartedWhileEnabled = function(a, b, c) {
        throw Error("unimplemented abstract method")
    };
    a.prototype.onBeforeContextStartedWhileDisabled = function(a, b, c) {};
    a.prototype.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
        throw Error("unimplemented abstract method")
    };
    a.prototype.onAfterContextStartedWhileDisabled = function(a, b, c, d) {};
    a.prototype.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
        throw Error("unimplemented abstract method")
    };
    a.prototype.onAfterContextEndedWhileDisabled = function(a, b, c, d) {};
    a.prototype.onNewContextCreated = function(a, b, c) {
        if (this.isEnabled()) return this.onNewContextCreatedWhileEnabled(a, b, c);
        else {
            this.onNewContextCreatedWhileDisabled(a, b, c);
            return null
        }
    };
    a.prototype.onBeforeContextStarted = function(a, b, c) {
        if (this.isEnabled()) return this.onBeforeContextStartedWhileEnabled(a, b, c);
        else {
            this.onBeforeContextStartedWhileDisabled(a, b, c);
            return null
        }
    };
    a.prototype.onAfterContextStarted = function(a, b, c, d) {
        c = c;
        if (this.isEnabled()) return this.onAfterContextStartedWhileEnabled(a, b, c, d);
        else {
            this.onAfterContextStartedWhileDisabled(a, b, c, d);
            return null
        }
    };
    a.prototype.onAfterContextEnded = function(a, b, c, d) {
        if (this.isEnabled()) {
            var e = c;
            this.onAfterContextEndedWhileEnabled(a, b, e, d)
        } else this.onAfterContextEndedWhileDisabled(a, b, c, d);
        this.$4 && !this.$5 && a.isRoot && (this.onDisable(), this.$4 = !1)
    };
    a.prototype.onDisable = function() {};
    a.prototype.onEnable = function() {};
    a.prototype.getBeforeID = function() {
        throw Error("unimplemented abstract method")
    };
    a.prototype.getAfterID = function() {
        throw Error("unimplemented abstract method")
    };
    a.prototype.isEnabled = function() {
        return this.$4
    };
    a.prototype.__getExpiryCallback = function() {
        var a = ++this.$1;
        this.$2[a] = !0;
        this.$3++;
        return function() {
            this.$2[a] && (delete this.$2[a], this.$3--, this.$3 === 0 && (this.$5 = !1))
        }.bind(this)
    };
    a.prototype.expressInterest = function() {
        var a = this.__getExpiryCallback();
        this.isEnabled() || (this.onEnable(), g.catchUpOnDemandExecutionContextObservers(this));
        this.$4 = !0;
        this.$5 = !0;
        return a
    };
    e.exports = a
}), null);
__d("Heartbeat", ["Env", "ExecutionContextObservers", "FBLogger", "LogBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use strict";
    __p && __p();
    var n;
    c = babelHelpers.inherits(b, k);
    n = c && c.prototype;

    function b() {
        var a, b;
        for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
        return b = (a = n.constructor).call.apply(a, [this].concat(d)), this.$HeartbeatObserver1 = null, this.$HeartbeatObserver2 = 33, this.$HeartbeatObserver3 = 60, this.$HeartbeatObserver4 = null, this.$HeartbeatObserver5 = null, this.$HeartbeatObserver6 = {}, this.$HeartbeatObserver7 = null, this.$HeartbeatObserver8 = [], this.$HeartbeatObserver9 = 1, this.$HeartbeatObserver10 = null, b
    }
    b.prototype.onNewContextCreatedWhileEnabled = function(a, b, c) {
        return null
    };
    b.prototype.onBeforeContextStartedWhileEnabled = function(a, b, c) {
        return null
    };
    b.prototype.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
        return null
    };
    b.prototype.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
        b = a.absBeginTimeMs;
        c = a.absEndTimeMs;
        d = a.name;
        a = a.isRoot;
        a && b != null && c != null && (this.$HeartbeatObserver6[d] ? (this.$HeartbeatObserver11({
            type: "ignored_exec",
            timeMs: b
        }, !0), this.$HeartbeatObserver11({
            type: "ignored_exec",
            timeMs: c
        }, !1)) : (this.$HeartbeatObserver11({
            type: "exec",
            timeMs: b
        }, !0), this.$HeartbeatObserver11({
            type: "exec",
            timeMs: c
        }, !1)))
    };
    b.prototype.__getExpiryCallback = function() {
        var a = n.__getExpiryCallback.call(this),
            b = m();
        this.$HeartbeatObserver8.push([b, a]);
        return function() {
            a(), this.$HeartbeatObserver12()
        }.bind(this)
    };
    b.prototype.onEnable = function() {
        __p && __p();
        var b = g.timeslice_heartbeat_config || {};
        this.$HeartbeatObserver2 = b.pollIntervalMs || this.$HeartbeatObserver2;
        this.$HeartbeatObserver3 = b.idleGapThresholdMs || this.$HeartbeatObserver3;
        this.$HeartbeatObserver6 = b.ignoredTimesliceNames || this.$HeartbeatObserver6;
        b = a.__fbNativeSetInterval || a.setInterval;
        this.$HeartbeatObserver5 = b(this.$HeartbeatObserver13.bind(this), this.$HeartbeatObserver2);
        b = m();
        this.$HeartbeatObserver4 = {
            type: "beat",
            timeMs: b
        };
        this.$HeartbeatObserver7 = b + this.$HeartbeatObserver2;
        this.$HeartbeatObserver10 = b
    };
    b.prototype.onDisable = function() {
        this.$HeartbeatObserver5 && clearInterval(this.$HeartbeatObserver5), this.$HeartbeatObserver5 = null
    };
    b.prototype.getBeforeID = function() {
        return h.beforeIDs.HEARTBEAT
    };
    b.prototype.getAfterID = function() {
        return h.afterIDs.HEARTBEAT
    };
    b.prototype.$HeartbeatObserver14 = function(event) {
        return event.type == "beat" || event.type == "ignored_exec"
    };
    b.prototype.$HeartbeatObserver11 = function(a, b) {
        __p && __p();
        if (this.$HeartbeatObserver4 == null) {
            i("FIXME").mustfix("lastEvent should never be null");
            this.$HeartbeatObserver4 = a;
            return
        }
        var c = this.$HeartbeatObserver4.timeMs,
            d = a.timeMs;
        if (b) {
            b = this.$HeartbeatObserver7 + this.$HeartbeatObserver3;
            b = d > b;
            if (this.$HeartbeatObserver4.type === "exec") a.type === "exec" ? this.$HeartbeatObserver15(c, d, b ? "likely_btwn_exec" : "btwn_exec") : this.$HeartbeatObserver14(a) && this.$HeartbeatObserver15(c, d, b ? "likely_post_exec" : "post_exec");
            else if (this.$HeartbeatObserver14(this.$HeartbeatObserver4))
                if (a.type === "exec") this.$HeartbeatObserver15(c, d, b ? "likely_pre_exec" : "pre_exec");
                else if (this.$HeartbeatObserver14(a) && b) {
                b = a.type === "beat" ? "delayed_beat" : "delayed_beat_btwn_ignored";
                this.$HeartbeatObserver15(c, d, b)
            }
        }
        this.$HeartbeatObserver4 = a
    };
    b.prototype.$HeartbeatObserver15 = function(a, b, c) {
        a < b && j.write("time_slice_heartbeat", {
            begin: a,
            end: b,
            id: this.$HeartbeatObserver9++,
            parentID: null,
            guard: "browser time: " + c,
            representsExecution: !1
        })
    };
    b.prototype.$HeartbeatObserver13 = function() {
        var a = m();
        this.$HeartbeatObserver12(a);
        this.$HeartbeatObserver11({
            type: "beat",
            timeMs: a
        }, !0);
        this.$HeartbeatObserver7 = a + this.$HeartbeatObserver2
    };
    b.prototype.$HeartbeatObserver12 = function(a) {
        __p && __p();
        a = a || m();
        while (this.$HeartbeatObserver8.length > 0) {
            var b = this.$HeartbeatObserver8[0],
                c = b[0];
            b = b[1];
            if (a - c > p.MAX_SINGLE_INTEREST_TIME_MS) b(), this.$HeartbeatObserver8.shift();
            else break
        }
        c = this.$HeartbeatObserver10;
        a - c > p.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver16()
    };
    b.prototype.$HeartbeatObserver16 = function() {
        __p && __p();
        for (var a = this.$HeartbeatObserver8, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var d;
            if (b) {
                if (c >= a.length) break;
                d = a[c++]
            } else {
                c = a.next();
                if (c.done) break;
                d = c.value
            }
            d = d;
            d[0];
            d = d[1];
            d()
        }
        this.$HeartbeatObserver8 = []
    };
    var o = new b();
    l.registerExecutionContextObserver(o);
    var p = {
        MAX_SINGLE_INTEREST_TIME_MS: 6e4,
        MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
        get: function() {
            return o
        },
        enableHeartbeat: function() {},
        disablePageHeartbeat: function() {}
    };
    e.exports = p
}), 3);
__d("ProfilingCountersStore", ["IntervalTrackingBoundedBuffer"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = new g(),
        i = {
            getInstance: function() {
                return h
            },
            toMap: function(a) {
                var b = {};
                a.forEach(function(a) {
                    return b[a.getTimeSliceContextID()] = a
                });
                return b
            },
            getNestedTotals: function(a) {
                return i._accumulateOverNestedActiveCounters(a, function(a, b) {
                    i._addOnto(b, a.getActiveCounters().getTotals());
                    return b
                }, {})
            },
            _accumulateOverNestedActiveCounters: function(a, b, c) {
                __p && __p();
                c = c;
                a.hasActiveCounters() && (c = b(a, c));
                if (a.processedNestedContexts != null)
                    for (var a = a.processedNestedContexts, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var f;
                        if (d) {
                            if (e >= a.length) break;
                            f = a[e++]
                        } else {
                            e = a.next();
                            if (e.done) break;
                            f = e.value
                        }
                        f = f;
                        c = i._accumulateOverNestedActiveCounters(f, b, c)
                    }
                return c
            },
            _getMaximumAttribution: function(a, b) {
                __p && __p();
                if (a.length === 0) return null;
                for (var c = a, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    if (b.propagatedAttributions && b.propagatedAttributions[f] != null) return f
                }
                f = null;
                e = null;
                for (var d = a, c = Array.isArray(d), a = 0, d = c ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    if (c) {
                        if (a >= d.length) break;
                        g = d[a++]
                    } else {
                        a = d.next();
                        if (a.done) break;
                        g = a.value
                    }
                    g = g;
                    if (b.newAttributions && b.newAttributions[g] != null) {
                        var h = b.newAttributions[g].newCounterIdx;
                        (e == null || h < e) && (f = g, e = h)
                    }
                }
                return f
            },
            getNestedTotalsByAttributions: function(a, b) {
                __p && __p();
                return i._accumulateOverNestedActiveCounters(a, function(a, c) {
                    __p && __p();
                    var d = i._getMaximumAttribution(b, a);
                    if (d) {
                        d = i._getAttributedAndUnattributedForThisContext(d, a);
                        var e = d.attributed;
                        d = d.unattributed;
                        e != null && i._addOnto(c.attributed, e);
                        d != null && i._addOnto(c.unattributed, d)
                    } else i._addOnto(c.unattributed, a.getActiveCounters().getTotals());
                    return c
                }, {
                    attributed: {},
                    unattributed: {}
                })
            },
            _getAttributedAndUnattributedForThisContext: function(a, b) {
                __p && __p();
                var c = b.getActiveCounters().getTotals();
                if (b.propagatedAttributions != null && b.propagatedAttributions[a] != null) return {
                    attributed: c,
                    unattributed: null
                };
                else if (b.newAttributions != null && b.newAttributions[a] != null) {
                    b = b.newAttributions[a].snapshotAtStart;
                    if (b != null) {
                        a = Object.entries(b);
                        for (var d = 0; d < a.length; d++) {
                            var e = a[d],
                                f = e[0];
                            e = e[1];
                            e = c[f] - e;
                            e === 0 ? delete c[f] : c[f] = e
                        }
                        return {
                            attributed: c,
                            unattributed: b
                        }
                    } else return {
                        attributed: c,
                        unattributed: null
                    }
                } else return {
                    attributed: null,
                    unattributed: c
                }
            },
            _addOnto: function(a, b) {
                b = Object.entries(b);
                for (var c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = d[0];
                    d = d[1];
                    a[e] = (a[e] || 0) + d
                }
            }
        };
    e.exports = i
}), null);
__d("ProfilingCounters", ["ErrorUtils", "ExecutionContextObservers", "OnDemandExecutionContextObserver", "ProfilingCountersStore", "TimeSlice", "TimeSliceInteractionSV", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    __p && __p();
    var n;
    m();
    var o = {
            ALL: "ALL",
            ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC: "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC"
        },
        p = 100,
        q = [];
    n = babelHelpers.inherits(r, i);
    n && n.prototype;
    r.prototype.onNewContextCreatedWhileEnabled = function(a, b, c) {
        "use strict";
        return s.currentContext().getPropagatedContextForChild(!!(c && c.isContinuation))
    };
    r.prototype.onBeforeContextStartedWhileEnabled = function(a, b, c) {
        "use strict";
        __p && __p();
        var d = c && c.propagateCounterAttribution,
            e = null;
        if (a.executionNumber > 0 && b) {
            var f = Object.entries(b);
            for (var g = 0; g < f.length; g++) {
                var h = f[g],
                    i = h[0];
                h = h[1];
                var j = h.propagationType;
                j !== "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC" && (e = e || {}, e[i] = h)
            }
        } else e = b;
        j = s.currentContext().getExecutionContext(!!(c && c.isContinuation), e);
        i = new s(!1, j, a.contextID);
        d != null && i.addAttribution(d, o.ALL);
        s.nestContext(i);
        return null
    };
    r.prototype.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
        "use strict";
        return null
    };
    r.prototype.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
        "use strict";
        b = s.unnestContext();
        a.isRoot && j.getInstance().pushElement(b)
    };
    r.prototype.getBeforeID = function() {
        "use strict";
        return h.beforeIDs.PROFILING_COUNTERS
    };
    r.prototype.getAfterID = function() {
        "use strict";
        return h.afterIDs.PROFILING_COUNTERS
    };
    r.prototype.onDisable = function() {
        "use strict";
        s.resetState()
    };

    function r() {
        "use strict";
        n.apply(this, arguments)
    }
    s.getObserver = function() {
        "use strict";
        s.$2 || (s.$2 = new r());
        return s.$2
    };
    s.wrapInSingleContext = function(a) {
        "use strict";
        var b = new s(!1, null, 0);
        a.forEach(function(a) {
            return b.$3(a, !1)
        });
        return b
    };
    s.startTimingInContext = function(a, b) {
        "use strict";
        if (!s.getObserver().isEnabled()) return null;
        for (var c = 0; c < q.length; c++) {
            var d = q[c];
            if (d.getTimeSliceContextID() === b) return d.getActiveCounters().startTiming(a)
        }
        return null
    };
    s.stopTimingInContext = function(a, b) {
        "use strict";
        __p && __p();
        if (!s.getObserver().isEnabled()) return;
        for (var c = 0; c < q.length; c++) {
            var d = q[c];
            if (d.getTimeSliceContextID() === b) {
                d.getActiveCounters().stopTiming(a);
                return
            }
        }
        return
    };
    s.startTiming = function(a) {
        "use strict";
        return s.currentContext().getActiveCounters().startTiming(a)
    };
    s.stopTiming = function(a) {
        "use strict";
        return s.currentContext().getActiveCounters().stopTiming(a)
    };
    s.incrementCounter = function(a, b) {
        "use strict";
        s.currentContext().getActiveCounters().incrementCounter(a, b)
    };
    s.currentContext = function() {
        "use strict";
        return q[q.length - 1]
    };

    function s(a, b, c) {
        "use strict";
        this.isGlobal = a, this.propagatedAttributions = b, this.newAttributions = null, this.active = null, this.processedNestedContexts = null, this.newAttributionsCount = 0, this.$1 = c
    }
    s.prototype.addAttribution = function(a, b) {
        "use strict";
        this.$4(a) || (this.newAttributions == null && (this.newAttributions = {}), this.newAttributions[a] = {
            newCounterIdx: this.newAttributionsCount,
            propagationType: b,
            snapshotAtStart: this.hasActiveCounters() ? this.getActiveCounters().getTotals() : null
        }, this.newAttributionsCount++);
        return this
    };
    s.prototype.$5 = function(a, b) {
        "use strict";
        return b != null && b[a] != null
    };
    s.prototype.$4 = function(a) {
        "use strict";
        return this.$5(a, this.propagatedAttributions) || this.$5(a, this.newAttributions)
    };
    s.$6 = function(a, b, c) {
        "use strict";
        for (var d = 0; d < c.length; d++) {
            var e = c[d],
                f = e[0];
            e = e[1];
            var g = e.propagationType;
            (g === o.ALL || b) && (a[f] = e)
        }
    };
    s.prototype.getPropagatedContextForChild = function(a) {
        "use strict";
        __p && __p();
        var b;
        if (this.newAttributions == null)
            if (this.propagatedAttributions == null || a) return this.propagatedAttributions;
            else {
                b = Object.entries(this.propagatedAttributions);
                var c = !0;
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    e[0];
                    e = e[1];
                    if (e.propagationType === o.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC) {
                        c = !1;
                        break
                    }
                }
                if (c) return this.propagatedAttributions
            }
        e = {};
        this.propagatedAttributions != null && s.$6(e, a, b || Object.entries(this.propagatedAttributions));
        this.newAttributions != null && s.$6(e, a, Object.entries(this.newAttributions));
        return e
    };
    s.prototype.getExecutionContext = function(a, b) {
        "use strict";
        var c = a ? this.getPropagatedContextForChild(a) || {} : {};
        b && s.$6(c, a, Object.entries(b));
        return c
    };
    s.prototype.getActiveCounters = function() {
        "use strict";
        this.active == null && (this.active = new t());
        return this.active
    };
    s.prototype.$7 = function() {
        "use strict";
        return this.isGlobal
    };
    s.prototype.hasActiveCounters = function() {
        "use strict";
        return this.active != null
    };
    s.nestContext = function(a) {
        "use strict";
        q.push(a)
    };
    s.unnestContext = function() {
        "use strict";
        if (q.length === 1) throw new Error("popping off the global context");
        var a = q.pop();
        if (a.hasActiveCounters()) var b = a.getActiveCounters();
        (a.hasActiveCounters() || a.processedNestedContexts != null) && s.currentContext().$3(a);
        return a
    };
    s.prototype.$3 = function(a, b) {
        b === void 0 && (b = !0);
        if (this.$7()) return;
        else b && this.processedNestedContexts != null && this.processedNestedContexts.length >= p || (this.processedNestedContexts = this.processedNestedContexts || [], this.processedNestedContexts.push(a))
    };
    s.prototype.getTimeSliceContextID = function() {
        "use strict";
        return this.$1
    };
    s.resetState = function() {
        "use strict";
        q = [new s(!0, null, 0)]
    };
    s.getHandle = function() {
        "use strict";
        return u
    };
    s.AttributionPropagation = o;

    function t() {
        "use strict";
        this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = null
    }
    t.prototype.startTiming = function(a) {
        "use strict";
        __p && __p();
        var b = t.$5++;
        a = {
            value: 0,
            counter: a,
            id: b,
            lastStartTime: 0
        };
        var c = this.$1 || [];
        this.$2 = this.$2 || {};
        this.$2[b] = c.length;
        c.push(a);
        var d = m();
        a.lastStartTime = d;
        if (c.length > 1) {
            a = c[c.length - 2];
            a.value += d - a.lastStartTime
        }
        this.$1 = c;
        return b
    };
    t.prototype.stopTiming = function(a) {
        "use strict";
        __p && __p();
        var b = m(),
            c = this.$2,
            d = this.$1;
        if (c == null || d == null) {
            g.reportError(new Error("token does not match the counter context"));
            return 0
        }
        var e = c[a];
        delete c[a];
        if (e == null || d[e] == null) return 0;
        a = null;
        var f = 0;
        while (d.length - 1 > e) {
            var h = d.pop();
            f += h.value;
            delete c[h.id];
            a == null && h.lastStartTime != null && (a = h.lastStartTime)
        }
        h = d.pop();
        h.value += b - (a || h.lastStartTime);
        h.value += f;
        e = this.$4 || {};
        e[h.counter] = e[h.counter] || 0;
        e[h.counter] += h.value;
        d.length > 0 && (d[d.length - 1].lastStartTime = b);
        this.$1 = d;
        this.$4 = e;
        this.$2 = c;
        return h.value
    };
    t.prototype.incrementCounter = function(a, b) {
        "use strict";
        var c = this.$3 || {};
        c[a] = c[a] || 0;
        c[a] += b;
        this.$3 = c
    };
    t.prototype.getTotals = function() {
        "use strict";
        return babelHelpers["extends"]({}, this.$4 || {}, this.$3 || {})
    };
    t.prototype.openCounterCount = function() {
        "use strict";
        return this.$1 != null ? this.$1.length : 0
    };
    t.$5 = 1;
    q.push(new s(!0, null, 0));
    k.registerExecutionContextObserver(s.getObserver());
    var u = s.getObserver().expressInterest();
    a.ProfilingCounters = s;
    e.exports = s
}), 3);
__d("ArtilleryRequestDataCollector", ["ArtilleryUserTimingProfiler", "Env", "FBLogger", "Heartbeat", "ProfilingCounters", "ProfilingCountersStore", "TimeSlice", "requireWeak"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    "use strict";
    __p && __p();
    var o;
    n("AsyncProfiler", function(a) {
        o = a
    });

    function a(a) {
        a === void 0 && (a = !1), this.$1 = null, this.$2 = !1, this.$3 = null, this.$4 = null, this.$5 = null, this.$6 = null, this.$7 = null, this.$2 = a
    }
    a.prototype.start = function() {
        this.$3 = l.getInstance().open();
        this.$7 = g.startRecording();
        o != null && o.isSupported() ? this.$5 = o.startRecording() : this.$5 = null;
        var a = h.timeslice_heartbeat_config || {},
            b = a.isHeartbeatEnabled;
        a = a.isArtilleryOn;
        b && (!this.$2 || a) && this.enablePageHeartbeat();
        this.$2 ? this.$4 = k.getHandle() : this.$4 = k.getObserver().expressInterest();
        this.$6 = m.getBuffer().open();
        return this
    };
    a.prototype.enablePageHeartbeat = function() {
        this.$1 == null && (this.$1 = j.get().expressInterest())
    };
    a.prototype.finish = function() {
        (!this.$3 || !this.$4 || !this.$6 || !this.$1) && i("artillery").warn("Missing handles. PCData: %s, PCOnDemand: %s, TS: %s, heartbeat: %s", this.$3 == null, this.$4 == null, this.$6 == null, this.$1 == null);
        return this.$8()
    };
    a.prototype.disable = function() {
        var a = this.$5;
        a != null && o != null && (o.stopRecording(a), this.$5 = null);
        this.$8()
    };
    a.prototype.$8 = function() {
        __p && __p();
        var a = this.$7 ? this.$7.close() : null;
        this.$7 = null;
        var b = this.$3 ? this.$3.close() : [];
        this.$3 = null;
        var c = this.$6 ? this.$6.close() : [];
        this.$6 = null;
        this.$4 && this.$4();
        this.$4 = null;
        this.$1 && this.$1();
        this.$1 = null;
        return {
            sampleRecorder: this.$5,
            profilingCountersData: b,
            userTimingProfilerData: a,
            timeSliceData: c
        }
    };
    e.exports = a
}), null);
__d("setInterval", ["TimerStorage", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++) d[e - 2] = arguments[e];
        var f = h.apply(undefined, [a, b].concat(d));
        g.set(g.INTERVAL, f);
        return f
    }
    e.exports = a
}), null);
__d("ArtilleryOnUntilOffLogging", ["ArtilleryRequestDataCollector", "Env", "clearInterval", "performanceAbsoluteNow", "setInterval"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    __p && __p();
    var l = null,
        m = null;

    function n() {
        return window.CavalryLogger && window.CavalryLogger.disableArtilleryOnUntilOffLogging || !!h.disable_profiling
    }
    var o = null,
        p = {
            disable: function() {
                o == null && (o = j()), l && (i(l), l = null), m && (m.disable(), m = null)
            },
            finish: function() {
                l && (i(l), l = null);
                if (m) {
                    var a = m.finish();
                    m = null;
                    return a
                }
                return {
                    sampleRecorder: null,
                    profilingCountersData: [],
                    userTimingProfilerData: null,
                    timeSliceData: []
                }
            },
            lastDisableTime: function() {
                return o
            },
            onNewPageLoad: function(a) {
                a === void 0 && (a = !1), a || (p.disable(), o = null), m = new g(a), m.start()
            },
            enablePageHeartbeat: function() {
                m && m.enablePageHeartbeat()
            }
        };
    !n() ? (p.onNewPageLoad(!0), l = k(function() {
        n() && p.disable()
    }, 250)) : o = j();
    e.exports = p
}), 3);
__d("$-core", ["TAAL", "ex"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();

    function a(a) {
        return i(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function b(a) {
        return i(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function i(a, b) {
        if (!b) throw new Error(g.blameToPreviousFile(h('Tried to get element with id of "%s" but it is not present on the page', a)));
        return b
    }
    a.fromIDOrElement = b;
    e.exports = a
}), null);
__d("$", ["ErrorDebugHooks", "$-core"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        try {
            return h(a)
        } catch (a) {
            g.SnapShotHook && g.SnapShotHook(a, b);
            throw a
        }
    }
    a.fromIDOrElement = h.fromIDOrElement;
    e.exports = a
}), null);
__d("BigPipeInstance", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = {
        Events: {
            init: "BigPipe/init",
            tti: "tti_bigpipe",
            displayed: "all_pagelets_displayed",
            loaded: "all_pagelets_loaded"
        },
        setCurrentInstance_DO_NOT_USE: function(a) {
            g = a
        },
        getCurrentInstance: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("MLegacyDataStore", ["FBJSON", "invariant"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = [];

    function j(a) {
        __p && __p();
        if (a.hasAttribute("data-store-id")) {
            var b = parseInt(a.getAttribute("data-store-id"), 10);
            !isNaN(b) && b < i.length || h(0);
            return i[b]
        }
        a.hasAttribute("data-store") ? b = g.parse(a.getAttribute("data-store"), e.id) : b = {};
        var c = i.length;
        i.push(b);
        a.setAttribute("data-store-id", c.toString());
        return b
    }

    function a(a) {
        a = j(a);
        return a
    }

    function b(a, b) {
        a = j(a);
        Object.assign(a, b)
    }
    c = {
        get: a,
        set: b
    };
    e.exports = c
}), null);
__d("DataStore", ["MLegacyDataStore", "ex"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    a = {
        set: function(a, b, c) {
            if (!a) throw new TypeError(h("DataStore.set: element is required, got %s", typeof a));
            var d = g.get(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            a = g.get(a);
            var d = a[b];
            c !== undefined && d === undefined && (d = a[b] = c);
            return d
        },
        remove: function(a, b) {
            if (!a) throw new TypeError(h("DataStore.remove: element is required, got %s", typeof a));
            a = g.get(a);
            var c = a[b];
            delete a[b];
            return c
        }
    };
    e.exports = a
}), null);
__d("BigPipePlugins", ["DataStore"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    h.runPluginOnPagelet = function(a) {
        "use strict";
        h.getPluginList().forEach(function(b) {
            b(a)
        })
    };
    h.getPluginList = function() {
        "use strict";
        return [h.$1]
    };
    h.$1 = function(a) {
        "use strict";
        if (!a) return;
        a = a.querySelectorAll("div[data-fte]");
        for (var b = 0, c = a.length; b < c; b++) h.$2(a[b], "data-ft", "data-ft")
    };
    h.$2 = function(a, b, c) {
        "use strict";
        var d = a.getAttribute(b);
        d && (g.set(a, c, d), a.removeAttribute(b))
    };

    function h() {
        "use strict"
    }
    e.exports = h
}), null);
__d("JSCC", [], (function(a, b, c, d, e, f) {
    a = {
        init: function() {
            throw new Error("JSCC is unsupported in Mobile")
        },
        parse: function() {
            throw new Error("JSCC is unsupported in Mobile")
        }
    };
    e.exports = a
}), null);
__d("PageletEventConstsJS", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ARRIVE_START: "prearrive",
        ARRIVE_END: "arrive",
        CSS_START: "css",
        CSS_END: "css_load",
        DISPLAY_START: "display_start",
        DISPLAY_END: "display",
        JS_START: "jsstart",
        JS_END: "jsdone",
        ONLOAD_START: "preonload",
        ONLOAD_END: "onload",
        SETUP: "setup"
    })
}), null);
__d("PageletSet", ["Arbiter"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {},
        i = {
            hasPagelet: function(a) {
                return Object.prototype.hasOwnProperty.call(h, a)
            },
            getPagelet: function(a) {
                return h[a]
            },
            getOrCreatePagelet: function(a) {
                if (!i.hasPagelet(a)) {
                    var b = new k(a);
                    h[a] = b
                }
                return i.getPagelet(a)
            },
            getPageletIDs: function() {
                return Object.keys(h)
            },
            removePagelet: function(a) {
                if (i.hasPagelet(a)) {
                    var b = i.getPagelet(a);
                    delete h[a];
                    b.destroy()
                }
            }
        };

    function j(a, b) {
        return a.contains ? a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }

    function k(a) {
        "use strict";
        this.id = a, this.$1 = null, this.$2 = [], this.addDestructor(function() {
            g.inform("pagelet/destroy", {
                id: this.id,
                root: this.$1
            })
        }.bind(this))
    }
    k.prototype.getRoot = function() {
        "use strict";
        return this.$1
    };
    k.prototype.setRoot = function(a) {
        "use strict";
        this.$1 = a
    };
    k.prototype.$3 = function() {
        "use strict";
        __p && __p();
        var a = [],
            b = this.$1;
        if (!b) return a;
        var c = i.getPageletIDs();
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e === this.id) continue;
            e = h[e];
            var f = e.getRoot();
            f && j(b, f) && a.push(e)
        }
        return a
    };
    k.prototype.addDestructor = function(a) {
        "use strict";
        this.$2.push(a)
    };
    k.prototype.destroy = function() {
        "use strict";
        __p && __p();
        var a = this.$3();
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            i.hasPagelet(c.id) && i.removePagelet(c.id)
        }
        for (var c = 0; c < this.$2.length; c++) {
            a = this.$2[c]();
            a && a()
        }
    };
    e.exports = i
}), null);
__d("UserTimingUtils", ["performance"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = typeof g.mark === "function" && typeof g.clearMarks === "function" && typeof g.measure === "function" && typeof g.clearMeasures === "function";

    function a(a) {
        h && g.mark(a)
    }

    function b(a, b) {
        if (h) {
            try {
                g.measure(a, b)
            } catch (a) {
                !1
            }
            g.clearMarks(b);
            g.clearMeasures(a)
        }
    }
    e.exports = {
        measureStart: a,
        measureEnd: b
    }
}), null);
__d("__getCompileTime", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("__getFactoryTime", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("__getTotalFactories", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("captureUsageSnapshot", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        var a = window.__bodyWrapper;
        if (!a.getCodeUsage) return {};
        a = babelHelpers["extends"]({}, a.getCodeUsage());
        var b = window.document.body.outerHTML,
            c = {};
        Array.from(document.styleSheets).forEach(function(a) {
            a.href && (c[a.href] = !0)
        });
        return {
            js_calls: a,
            document_html: b,
            stylesheets: c
        }
    };
    e.exports = a
}), null);
__d("fastDeepCopy", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        return typeof a === "object" && a !== null ? g(a) : a
    }

    function g(a) {
        __p && __p();
        var b = typeof a.constructor === "function" ? a.constructor() : {};
        if (Array.isArray(a))
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                b[c] = typeof d === "object" && d !== null ? g(d) : d
            } else
                for (var e in a) {
                    d = a[e];
                    b[e] = typeof d === "object" && d !== null ? g(d) : d
                }
        return b
    }
    e.exports = a
}), null);
__d("requestAnimationFrameAcrossTransitions", ["Env", "ErrorUtils", "TimerStorage", "TimeSlice", "clearTimeout", "performanceNow", "requestAnimationFramePolyfill", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    __p && __p();
    var o = i.ANIMATION_FRAME,
        p = 100,
        q = null,
        r = null,
        s = g.gk_require_dic ? Object.create(null) : {},
        t = g.gk_require_dic ? Object.create(null) : {},
        u = {
            DEFAULT: 0,
            QUERY_THEN_MUTATE: 1,
            FORCE_CLIENT_REFLOW: 2,
            DISPLAY_DONE_LOGGING: 3,
            SIZE: 4
        };

    function v(b) {
        __p && __p();
        t = s;
        s = g.gk_require_dic ? Object.create(null) : {};
        q = null;
        r && (k(r), r = null);
        for (var c = 0; c < u.SIZE; c++) {
            var d = function(d) {
                var e = t[d];
                if (c === u.FORCE_CLIENT_REFLOW) {
                    g.gk_raf_force_client_reflow && window.document.body && window.document.body.getClientRects();
                    return "break"
                }
                if (e.deleted || e.priority !== c) return "continue";
                h.applyWithGuard(function() {
                    e.call(a, b)
                })
            };
            _loop: for (var e in t) {
                var f = d(e);
                switch (f) {
                    case "break":
                        break _loop;
                    case "continue":
                        continue
                }
            }
        }
        t = null
    }

    function w(a, b) {
        __p && __p();
        b = b && b.priority || u.DEFAULT;
        q || (q = m(function(a) {
            q = null, v(a)
        }));
        !r && b > u.DEFAULT && (r = n(j.guard(function() {
            r = null, v(l())
        }, "requestAnimationFrame priorityRAFCallback setTimeout", {
            propagationType: j.PropagationType.ORPHAN
        }), p));
        a = j.guard(a, "requestAnimationFrame", {
            propagationType: j.PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        a.priority = b;
        a.deleted && h.applyWithGuard(function() {
            throw new Error("Scheduling a deleted callback")
        });
        b = m(function() {});
        s[b] = a;
        return b
    }

    function x(a) {
        a = j.guard(a, "requestAnimationFrame", {
            propagationType: j.PropagationType.CONTINUATION
        });
        var b = m(a);
        j.registerForCancelling(o + b, a);
        return b
    }
    e.exports = function(a, b) {
        if (g.gk_raf_flush) return w(a, b);
        else return x(a)
    };
    e.exports.Priorities = u;
    e.exports.cancelVirtualRAF = function(a) {
        if (g.gk_raf_flush) {
            j.cancel(s[a]);
            delete s[a];
            if (t) {
                a = t[a];
                a && (a.deleted = !0)
            }
        }
    }
}), null);
__d("requestAnimationFrame", ["TimerStorage", "TimeSlice", "requestAnimationFrameAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function a(a, b) {
        var c;

        function d(b) {
            g.unset(g.ANIMATION_FRAME, c), a(b)
        }
        h.copyGuardForWrapper(a, d);
        d.__originalCallback = a;
        c = i(d, b);
        g.set(g.ANIMATION_FRAME, c);
        return c
    }
    e.exports = a
}), null);
__d("setTimeout", ["TimerStorage", "TimeSlice", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function a(a, b) {
        __p && __p();
        var c, d = function() {
            g.unset(g.TIMEOUT, c);
            for (var b = arguments.length, d = new Array(b), e = 0; e < b; e++) d[e] = arguments[e];
            Function.prototype.apply.call(a, this, d)
        };
        h.copyGuardForWrapper(a, d);
        for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), j = 2; j < e; j++) f[j - 2] = arguments[j];
        c = i.apply(undefined, [d, b].concat(f));
        g.set(g.TIMEOUT, c);
        return c
    }
    e.exports = a
}), null);
__d("BigPipe", ["Arbiter", "BigPipeExperiments", "BigPipeInstance", "BigPipePlugins", "Bootloader", "Env", "ErrorUtils", "FBLogger", "JSCC", "PageEvents", "PageletEventConstsJS", "PageletSet", "Run", "ServerJS", "TimeSlice", "UserTimingUtils", "$", "bx", "captureUsageSnapshot", "clearTimeout", "fastDeepCopy", "ge", "gkx", "ix", "performanceAbsoluteNow", "qex", "requestAnimationFrame", "requestAnimationFrameAcrossTransitions", "setTimeout", "__getTotalFactories", "__getCompileTime", "__getFactoryTime"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I) {
    __p && __p();
    var J = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
        K = g.BEHAVIOR_STATE,
        L = g.BEHAVIOR_PERSISTENT,
        M = console.timeStamp && window.location.search.indexOf("pagelet_ts=1") > 0;

    function N(a, b) {
        v.measureStart(a + " " + b)
    }

    function O(a, b, c) {
        v.measureEnd("\u26cf " + a + " [" + b + "][phase " + c + "]", a + " " + b)
    }

    function P(a, b) {
        if (a)
            for (var c = 0; c < a.length; c++) m.applyWithGuard(new Function(a[c]), b)
    }
    var Q = 1;

    function R(a) {
        "use strict";
        this._onDisplayDone = function(a) {
            this.arbiter.registerCallback(a, ["display_done"])
        }.bind(this), Object.assign(this, {
            arbiter: g,
            rootNodeID: "content",
            lid: null,
            isAjax: !1,
            domContentCallback: s.__domContentCallback,
            onloadCallback: s.__onloadCallback,
            domContentEvt: p.BIGPIPE_DOMREADY,
            onloadEvt: p.BIGPIPE_ONLOAD,
            forceFinish: !1,
            config: {},
            _currentPhase: 0,
            _lastPhaseOfLastResponse: -1,
            _lastPhaseBeforeLastResponse: -1,
            _livePagelets: {},
            _phases: {},
            _orderedPhases: [],
            _maxPhase: 0,
            _displayDoneFired: !1,
            _displayDone: !1,
            _awaitingLIDEventQueue: []
        }, a), this.config || (this.config = {}), this.automatic ? this._relevant_instance = i.getCurrentInstance() : i.setCurrentInstance_DO_NOT_USE(this), this._serverJS = new t(), this._informEventExternal(R.Events.init, {
            arbiter: this.arbiter
        }, g), this._displayDoneCallback = this.arbiter.registerCallback(function() {
            var a = y();
            this._informEventExternal(R.Events.displayed, {
                rid: this.rid,
                ajax: this.isAjax,
                usageSnapshot: a
            })
        }.bind(this), ["display_done"]), this.arbiter.registerCallback(this.domContentCallback, ["pagelet_displayed_all"]), this._beginPhase(0), this.arbiter.registerCallback(this.onloadCallback, ["bigpipe_e2e_reported"]), this._loadedCallback = this.arbiter.registerCallback(function() {
            this._informEventExternal(R.Events.loaded, {
                rid: this.rid,
                ajax: this.isAjax
            }), this.arbiter.inform("bigpipe_e2e_reported", !0)
        }.bind(this), ["pagelet_displayed_all"]), this.arbiter.registerCallback(function() {
            return this._serverJS.cleanup()
        }.bind(this), [this.onloadEvt, "bigpipe_e2e_reported"])
    }
    R.prototype._beginPhase = function(a) {
        "use strict";
        var b = this._getOrCreatePhase(a);
        b.begun = !0;
        this._informEventExternal("phase_begin", {
            phase: a
        });
        this.arbiter.inform("phase_begin_" + a, !0, K);
        this._displayDone && !this.isAjax && k.notifyDisplayDone()
    };
    R.prototype._getOrCreatePhase = function(a) {
        "use strict";
        __p && __p();
        if (this._phases[a]) return this._phases[a];
        var b = {
            pagelets: [],
            begun: !1,
            complete: !1
        };
        this._phases[a] = b;
        var c = 0;
        while (c < this._orderedPhases.length) {
            if (a < this._orderedPhases[c]) break;
            c++
        }
        this._orderedPhases.splice(c, 0, a);
        return b
    };
    R.prototype._tryRenderingNextPhase = function() {
        "use strict";
        __p && __p();
        var a = this._phases[this._currentPhase];
        if (a && a.begun && !a.complete) return;
        for (var a = this._orderedPhases, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var d;
            if (b) {
                if (c >= a.length) break;
                d = a[c++]
            } else {
                c = a.next();
                if (c.done) break;
                d = c.value
            }
            d = d;
            var e = this._phases[d];
            if (e.begun)
                if (e.complete) continue;
                else return;
            else {
                this._currentPhase = d;
                this._beginPhase(d);
                return
            }
        }
    };
    R.prototype._displayPageletHandler = function(a) {
        "use strict";
        this.displayCallback ? this.displayCallback(this._displayPagelet.bind(this, a)) : this._displayPagelet(a)
    };
    R.prototype._displayPagelet = function(a) {
        "use strict";
        __p && __p();
        N(a.id, "display");
        a.displayStarted = !0;
        this._informPageletEvent(q.DISPLAY_START, a);
        var b = this._getPagelet(a),
            c = [],
            d = {};
        for (var e in a.content) {
            var f = a.content[e];
            a.append && (e = this._getPageletRootID(a));
            var g = B(e);
            if (!g) {
                var i = "Root element %s is missing for pagelet %s";
                !1;
                continue
            }
            e === b.id && b.setRoot(g);
            if (f) {
                if (a.append) U(g, f, c);
                else if (f.nodeType) g.innerHTML = "", U(g, f, c);
                else {
                    i = S(f);
                    g.innerHTML = i;
                    d[e] = i;
                    c.push(g)
                }
                h.enable_bigpipe_plugins && j.runPluginOnPagelet(g)
            }
            f = g.getAttribute("data-referrer");
            f || g.setAttribute("data-referrer", e)
        }
        i = null;
        if (a.static_templates) {
            f = B("static_templates");
            !f ? !1 : (i = S(a.static_templates), U(f, i, c))
        }
        this._informPageletDisplayDetails(a.id, a.jsmods, d, i);
        a.displayed = !0;
        if (a.jsmods) {
            g = this._serverJS.handlePartial(a.jsmods, {
                pagelet: a.id,
                bigPipeContext: {
                    onDisplayDone: this._onDisplayDone
                }
            });
            b.addDestructor(g.cancel.bind(g))
        }
        var k = [];
        c.forEach(function(a) {
            if (typeof a.getElementsByTagName === "function") {
                a = a.getElementsByTagName("img");
                for (var b = 0; b < a.length; b++) k.push(a[b].src)
            }
        });
        k.length > 0 && this._informEventExternal("images_displayed", {
            pagelet: a.id,
            timeslice: u.getContext() ? u.getContext().contextID : null,
            images: k
        });
        this._informPageletEvent(q.DISPLAY_END, a);
        O(a.id, "display", a.phase);
        this.arbiter.inform(a.id + "_displayed", !0, K)
    };
    R.prototype._onPhaseDisplayEnd = function(a) {
        "use strict";
        __p && __p();
        var c = this._getOrCreatePhase(a);
        c.complete = !0;
        if (a === this._ttiPhase) {
            c = k.__debug.predictedResources;
            var d = k.__debug.requested,
                e = 0;
            for (var f in d) e += !(f in c);
            d = {
                pre_tti_non_ef_resources: e
            };
            c = y();
            this.isAjax || (d.cjs_factory_count_tti = b("__getTotalFactories")(), d.cjs_compile_time_tti = b("__getCompileTime")(), d.cjs_factory_time_tti = b("__getFactoryTime")());
            this._informEventExternal(R.Events.tti, {
                phase: this._ttiPhase,
                rid: this.rid,
                ajax: this.isAjax,
                metrics: d,
                usageSnapshot: c
            });
            this.arbiter.inform("tti_pagelet_displayed", !0, K)
        }
        e = C("AT4kYIk7PhRqUACJJM8qs58t-WNCoM2ZYe35b1xv03xf3OtmC7RfXVIT9hWB6yTOgfA");
        var g = !1;
        this._isRelevant() && (a === this._lastPhaseBeforeLastResponse && (g = e, this._fireDisplayDone(function() {
            g && this._nextPhase()
        }.bind(this))), a === this._lastPhaseOfLastResponse && (this._displayDoneFired || (g = e, this._fireDisplayDone(function() {})), this.arbiter.inform("pagelet_displayed_all", !0, K)));
        !g && a !== this._lastPhaseOfLastResponse && this._nextPhase()
    };
    R.prototype._nextPhase = function() {
        "use strict";
        this.config.flush_pagelets_asap ? J <= 8 ? I(this._tryRenderingNextPhase.bind(this), 20) : this._tryRenderingNextPhase() : (this._currentPhase++, J <= 8 ? I(this._beginPhase.bind(this, this._currentPhase), 20) : this._beginPhase(this._currentPhase))
    };
    R.prototype._fireDisplayDone = function(a) {
        "use strict";
        this._displayDoneFired = !0, l.gk_raf_flush ? G(function() {
            this.arbiter.inform("display_done", !0), this._displayDone = !0, a()
        }.bind(this), {
            priority: H.Priorities.DISPLAY_DONE_LOGGING
        }) : (this.arbiter.inform("display_done", !0), this._displayDone = !0, a()), this.lid && O("display_done", this.lid, "all")
    };
    R.prototype._downloadJsForPagelet = function(a) {
        "use strict";
        __p && __p();
        this._informPageletEvent(q.JS_START, a), k.loadResources(a.allResources || [], function() {
            this._informPageletEvent(q.JS_END, a);
            a.requires = a.requires || [];
            (!this.isAjax || a.phase >= 1) && a.requires.push("uipage_onload");
            var b = function() {
                    this._informPageletEvent(q.ONLOAD_START, a), this._isRelevantPagelet(a) && P(a.onload), this._informPageletEvent(q.ONLOAD_END, a), this.arbiter.inform("pagelet_onload", !0), a.provides && this.arbiter.inform(a.provides, !0, K)
                }.bind(this),
                c = function() {
                    this._isRelevantPagelet(a) && P(a.onafterload)
                }.bind(this);
            this.arbiter.registerCallback(b, a.requires);
            this.arbiter.registerCallback(c, [this.onloadEvt])
        }.bind(this), !1, a.id)
    };
    R.prototype._getPagelet = function(a) {
        "use strict";
        a = this._getPageletRootID(a);
        return r.getPagelet(a)
    };
    R.prototype._getPageletRootID = function(a) {
        "use strict";
        return a.append || Object.keys(a.content)[0] || null
    };
    R.prototype._isRelevant = function() {
        "use strict";
        var a = i.getCurrentInstance();
        return this == a || this.automatic && this._relevant_instance == a || this.jsNonBlock || this.forceFinish || a && a.allowIrrelevantRequests
    };
    R.prototype._isRelevantPagelet = function(a) {
        "use strict";
        if (!this._isRelevant()) return !1;
        a = this._getPageletRootID(a);
        return !!this._livePagelets[a]
    };
    R.prototype._informEventExternal = function(a, b, c) {
        "use strict";
        b = b || {}, c = c || this.arbiter, b.ts = E(), M && (console.timeStamp && console.timeStamp(a + " " + (Object.prototype.hasOwnProperty.call(b, "arbiter") ? JSON.stringify(babelHelpers["extends"]({}, b, {
            arbiter: null
        })) : JSON.stringify(b)))), this.lid === null ? this._awaitingLIDEventQueue.push([c, a, b]) : (b.lid = this.lid, c.inform(a, b, L))
    };
    R.prototype._informPageletEvent = function(a, b) {
        "use strict";
        a = {
            event: a,
            id: b.id
        };
        b.phase && (a.phase = b.phase);
        b.categories && (a.categories = b.categories);
        b.allResources && (a.allResources = b.allResources);
        b.displayResources && (a.displayResources = b.displayResources);
        this._informEventExternal("pagelet_event", a)
    };
    R.prototype._informPageletDisplayDetails = function(a, b, c, d) {
        "use strict";
        if (this.config.dispatch_pagelet_replayable_actions) try {
            this._informEventExternal("pagelet_performing_replayable_actions", {
                id: a,
                jsmods: A(b),
                contentMap: c,
                staticTemplates: d
            })
        } catch (a) {
            n("bigpipe_pagelet_replay").catching(a).warn("failed at _informPageletDisplayDetails"), this._informEventExternal("pagelet_performing_replayable_actions_failed", {})
        }
    };
    R.getCurrentInstance = function() {
        "use strict";
        return i.getCurrentInstance()
    };
    Object.assign(R.prototype, {
        beforePageletArrive: function(a) {
            u.guard(function() {
                return this._informPageletEvent(q.ARRIVE_START, {
                    id: a
                })
            }.bind(this), "beforePageletArrive " + a, {
                root: !0
            })()
        },
        setPageID: function(a) {
            this.lid = a, this._awaitingLIDEventQueue.forEach(function(b) {
                var c = b[0],
                    d = b[1];
                b = b[2];
                b.lid = a;
                c.inform(d, b, L)
            }), this._awaitingLIDEventQueue = [], this.lid && N("display_done", this.lid)
        },
        onPageletArrive: m.guard(function(a) {
            __p && __p();
            this._informPageletEvent(q.ARRIVE_END, a);
            x.add(a.bxData);
            C.add(a.gkxData);
            D.add(a.ixData);
            F.add(a.qexData);
            k.setResourceMap(a.resource_map || {});
            a.bootloadable && k.enableBootload(a.bootloadable);
            a.content = a.content || {};
            var b = a.phase;
            if (a.all_phases)
                for (var c = a.all_phases, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    this._getOrCreatePhase(f)
                }
            f = this._getOrCreatePhase(b);
            f.pagelets.push(a.id);
            this._maxPhase = Math.max(b, this._maxPhase);
            a.last_in_phase && this.arbiter.registerCallback(function() {
                return this._onPhaseDisplayEnd(b)
            }.bind(this), f.pagelets.map(function(a) {
                return a + "_displayed"
            }).concat(["phase_begin_" + b]));
            e = this._getPageletRootID(a);
            var g = r.getOrCreatePagelet(e);
            a.last_pagelet && (this._lastPhaseBeforeLastResponse = this._maxPhase);
            a.the_end && (this._lastPhaseOfLastResponse = b);
            a.tti_phase !== undefined && (this._ttiPhase = a.tti_phase);
            this._livePagelets[g.id] = !0;
            g.addDestructor(function() {
                delete this._livePagelets[g.id]
            }.bind(this));
            if (a.jscc_map) {
                d = o.parse(a.jscc_map);
                c = o.init(d);
                g.addDestructor(c)
            }
            var h, i = [];
            f = !a.the_end || this._displayDone || !C("AT42vHZv2FMRQFxjYy8soPYLMZQ4FvEb3npoHjDNtK5L_ed7xyu66vqbi4snBVFxLSGN0ZKY0U-z6rBE6MS3Ht3lEToi6aqMBaQBAYDf8hAjMw");
            if (a.jsmods && f) {
                e = a.jsmods.define;
                d = a.jsmods.instances;
                c = a.jsmods.markup;
                var j = a.jsmods.pre_display_requires;
                delete a.jsmods.define;
                delete a.jsmods.instances;
                delete a.jsmods.markup;
                delete a.jsmods.pre_display_requires;
                var l = 19e3;
                l = function() {
                    if (a.displayStarted) {
                        n("BigPipe").warn("registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.", a.id);
                        return function() {}
                    }
                    var b, c, d = Q + "_preDisplayEvent";
                    Q++;
                    h ? this.arbiter.registerCallback(h, [d]) : i.push(d);
                    return u.guard(function() {
                        c = !0, z(b), this.arbiter.inform(d, !0, K)
                    }.bind(this), "BigPipeDisplayBlockingEvent " + d, {
                        propagationType: u.PropagationType.EXECUTION
                    })
                }.bind(this);
                this._informPageletDisplayDetails(a.id, {
                    define: e,
                    instances: d,
                    markup: c,
                    pre_display_requires: j
                }, {});
                this._serverJS.handlePartial({
                    define: e,
                    instances: d,
                    markup: c,
                    pre_display_requires: j
                }, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone,
                        registerToBlockDisplayUntilDone_DONOTUSE: l
                    }
                })
            }
            this._informPageletEvent(q.SETUP, a);
            if (a.display_out_of_phase === "asap") i = i.concat(["first_response_displayed", a.id + "_css_end"]);
            else if (a.display_out_of_phase === "after_tti") {
                var m = a.id + "_greedy_render";
                i = i.concat(["first_response_displayed", a.id + "_css_end", m]);
                var p = !1;
                e = function() {
                    if (p) return;
                    this.arbiter.inform(m, !0, K)
                }.bind(this);
                this.arbiter.registerCallback(e, ["tti_pagelet_displayed"]);
                this.arbiter.registerCallback(e, ["phase_begin_" + b])
            } else i = i.concat(["phase_begin_" + a.phase, a.id + "_css_end"]);
            (a.display_dependency || []).forEach(function(a) {
                return i.push(a + "_displayed")
            });
            if (a.display_group) {
                d = document.body.getElementsByClassName("pagelet-group");
                for (var c = 0; c < d.length; c++) {
                    j = d[c];
                    if (j.id === a.id) break;
                    j.getAttribute("data-display-group") === a.display_group && i.push(j.id + "_displayed")
                }
            }
            h = this.arbiter.registerCallback(function() {
                this._displayPageletHandler(a)
            }.bind(this), i);
            var s = !1;
            l = function() {
                if (s) return;
                s = !0;
                this._informPageletEvent(q.CSS_START, a);
                var b = a.displayResources || [];
                k.loadResources(b, function() {
                    this._informPageletEvent(q.CSS_END, a), this.arbiter.inform(a.id + "_css_end", !0, K)
                }.bind(this), !1, a.id)
            }.bind(this);
            this.config.flush_pagelets_asap && f ? l() : this.arbiter.registerCallback(l, ["phase_begin_" + b]);
            this.arbiter.registerCallback(this._loadedCallback, ["pagelet_onload"]);
            e = [a.id + "_displayed"];
            this.jsNonBlock || e.push(this.domContentEvt);
            this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, a), e)
        }, "BigPipe#onPageletArrive")
    });
    R.Events = i.Events;

    function S(a) {
        __p && __p();
        if (!a || typeof a === "string") return a;
        if (a.container_id) {
            var b = w(a.container_id);
            a = T(b) || "";
            b.parentNode.removeChild(b);
            return a
        }
        a.nodeType && !1;
        return null
    }

    function T(a) {
        __p && __p();
        if (!a.firstChild) {
            !1;
            return null
        }
        if (a.firstChild.nodeType !== 8) {
            !1;
            return null
        }
        a = a.firstChild.nodeValue;
        a = a.substring(1, a.length - 1);
        return a.replace(/\\([\s\S]|$)/g, "$1")
    }

    function U(a, b, c) {
        b = V(b);
        for (var d = 0; d < b.childNodes.length; d++) c.push(b.childNodes[d]);
        a.appendChild(b)
    }

    function V(a) {
        __p && __p();
        if (a.nodeType) return a;
        var b = document.createDocumentFragment();
        a = S(a);
        if (a) {
            var c = document.createElement("div");
            c.innerHTML = a;
            while (c.firstChild) b.appendChild(c.firstChild)
        }
        return b
    }
    e.exports = R
}), null);
__d("killswitch", ["KSConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return g.killed.has(a)
    }
    a.override = function(a, b) {
        b ? g.killed.add(a) : g.killed["delete"](a)
    };
    e.exports = a
}), null);
__d("FbtResultBase", ["FBLogger", "killswitch"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();

    function i(a) {
        g("fbt").blameToPreviousFile().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", a)
    }

    function j(a) {
        "use strict";
        this.$1 = a, this.$2 = null
    }
    j.prototype.flattenToArray = function() {
        "use strict";
        return j.flattenToArray(this.$1)
    };
    j.prototype.getContents = function() {
        "use strict";
        return this.$1
    };
    j.prototype.toString = function() {
        "use strict";
        __p && __p();
        if (this.$2 !== null) return this.$2;
        var a = "",
            b = this.flattenToArray();
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (typeof d === "string" || d instanceof j) a += d;
            else {
                var e = "Context not logged.";
                if (!h("JS_RELIABILITY_FBT_LOGGING")) try {
                    e = JSON.stringify(d).substr(0, 250)
                } catch (a) {
                    e = a.message
                }
                g("fbt").blameToPreviousFile().mustfix("Converting to a string will drop content data. %s", e)
            }
        }
        Object.isFrozen(this) || (this.$2 = a);
        return a
    };
    j.prototype.toJSON = function() {
        "use strict";
        return this.toString()
    };
    j.flattenToArray = function(a) {
        "use strict";
        var b = [];
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            Array.isArray(d) ? b.push.apply(b, j.flattenToArray(d)) : d instanceof j ? b.push.apply(b, d.flattenToArray()) : b.push(d)
        }
        return b
    };
    ["replace", "split", "toLowerCase", "toUpperCase", "indexOf", "charAt", "charCodeAt", "substr", "substring", "trim", "lastIndexOf", "search", "match", "slice", "codePointAt", "endsWith", "includes", "localeCompare", "normalize", "repeat", "startsWith", "toLocaleLowerCase", "toLocaleUpperCase", "trimLeft", "trimRight", "link", "anchor", "fontcolor", "fontsize", "big", "blink", "bold", "fixed", "italics", "small", "strike", "sub", "sup", "contains"].forEach(function(a) {
        j.prototype[a] = function() {
            "use strict";
            i(a);
            return this.toString()[a].apply(this, arguments)
        }
    }.bind(this));
    e.exports = j
}), null);
__d("BrowserScroll", [], (function(a, b, c, d, e, f) {
    a = {
        getPageScrollLeft: function() {
            return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        },
        getPageScrollTop: function() {
            return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }
    };
    e.exports = a
}), null);
__d("BasicVector", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, b) {
        "use strict";
        this.x = a, this.y = b
    }
    g.prototype.derive = function(a, b) {
        "use strict";
        return new g(a, b)
    };
    g.prototype.toString = function() {
        "use strict";
        return "(" + this.x + ", " + this.y + ")"
    };
    g.prototype.add = function(a, b) {
        "use strict";
        b === undefined && (b = a.y, a = a.x);
        a = parseFloat(a);
        b = parseFloat(b);
        return this.derive(this.x + a, this.y + b)
    };
    g.prototype.mul = function(a, b) {
        "use strict";
        b === undefined && (b = a);
        return this.derive(this.x * a, this.y * b)
    };
    g.prototype.div = function(a, b) {
        "use strict";
        b === undefined && (b = a);
        return this.derive(this.x * 1 / a, this.y * 1 / b)
    };
    g.prototype.sub = function(a, b) {
        "use strict";
        if (arguments.length === 1) return this.add(a.mul(-1));
        else return this.add(-a, -b)
    };
    g.prototype.distanceTo = function(a) {
        "use strict";
        return this.sub(a).magnitude()
    };
    g.prototype.magnitude = function() {
        "use strict";
        return Math.sqrt(this.x * this.x + this.y * this.y)
    };
    g.prototype.rotate = function(a) {
        "use strict";
        return this.derive(this.x * Math.cos(a) - this.y * Math.sin(a), this.x * Math.sin(a) + this.y * Math.cos(a))
    };
    e.exports = g
}), null);
__d("getDocumentScrollElement", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;

    function a(a) {
        a = a || document;
        return a.scrollingElement ? a.scrollingElement : !g && a.compatMode === "CSS1Compat" ? a.documentElement : a.body
    }
    e.exports = a
}), null);
__d("isNode", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = a ? a.ownerDocument || a : document;
        b = b.defaultView || window;
        return !!(a && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
    }
    e.exports = a
}), null);
__d("isTextNode", ["isNode"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return g(a) && a.nodeType == 3
    }
    e.exports = a
}), null);
__d("containsNode", ["isTextNode"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a, b) {
        __p && __p();
        if (!a || !b) return !1;
        else if (a === b) return !0;
        else if (g(a)) return !1;
        else if (g(b)) return h(a, b.parentNode);
        else if ("contains" in a) return a.contains(b);
        else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(b) & 16);
        else return !1
    }
    e.exports = h
}), null);
__d("normalizeBoundingClientRect", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a, b) {
        a = a.ownerDocument.documentElement;
        var c = a ? a.clientLeft : 0;
        a = a ? a.clientTop : 0;
        var d = Math.round(b.left) - c;
        c = Math.round(b.right) - c;
        var e = Math.round(b.top) - a;
        b = Math.round(b.bottom) - a;
        return {
            left: d,
            right: c,
            top: e,
            bottom: b,
            width: c - d,
            height: b - e
        }
    }
    e.exports = a
}), null);
__d("getElementRect", ["containsNode", "normalizeBoundingClientRect"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        var b;
        b = a == null ? void 0 : (b = a.ownerDocument) == null ? void 0 : b.documentElement;
        return !a || !("getBoundingClientRect" in a) || !g(b, a) ? {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
        } : h(a, a.getBoundingClientRect())
    }
    e.exports = a
}), null);
__d("getElementPosition", ["getElementRect"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a = g(a);
        return {
            x: a.left,
            y: a.top,
            width: a.right - a.left,
            height: a.bottom - a.top
        }
    }
    e.exports = a
}), null);
__d("Scroll", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, b) {
        return !!b && (a === b.documentElement || a === b.body)
    }
    a = {
        getTop: function(a) {
            var b = a.ownerDocument;
            return g(a, b) ? b.body.scrollTop || b.documentElement.scrollTop : a.scrollTop
        },
        setTop: function(a, b) {
            var c = a.ownerDocument;
            g(a, c) ? c.body.scrollTop = c.documentElement.scrollTop = b : a.scrollTop = b
        },
        getLeft: function(a) {
            var b = a.ownerDocument;
            return g(a, b) ? b.body.scrollLeft || b.documentElement.scrollLeft : a.scrollLeft
        },
        setLeft: function(a, b) {
            var c = a.ownerDocument;
            g(a, c) ? c.body.scrollLeft = c.documentElement.scrollLeft = b : a.scrollLeft = b
        }
    };
    e.exports = a
}), null);
__d("getUnboundedScrollPosition", ["Scroll"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return a === window ? {
            x: window.pageXOffset || g.getLeft(document.documentElement),
            y: window.pageYOffset || g.getTop(document.documentElement)
        } : {
            x: g.getLeft(a),
            y: g.getTop(a)
        }
    }
    e.exports = a
}), null);
__d("VersionRange", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = /\./,
        i = /\|\|/,
        j = /\s+\-\s+/,
        k = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        l = /^(\d*)(.*)/;

    function m(a, b) {
        var c = a.split(i);
        if (c.length > 1) return c.some(function(a) {
            return D.contains(a, b)
        });
        else {
            a = c[0].trim();
            return n(a, b)
        }
    }

    function n(a, b) {
        a = a.split(j);
        a.length > 0 && a.length <= 2 || g(0);
        if (a.length === 1) return o(a[0], b);
        else {
            var c = a[0];
            a = a[1];
            x(c) && x(a) || g(0);
            return o(">=" + c, b) && o("<=" + a, b)
        }
    }

    function o(a, b) {
        __p && __p();
        a = a.trim();
        if (a === "") return !0;
        b = b.split(h);
        a = v(a);
        var c = a.modifier;
        a = a.rangeComponents;
        switch (c) {
            case "<":
                return p(b, a);
            case "<=":
                return q(b, a);
            case ">=":
                return s(b, a);
            case ">":
                return t(b, a);
            case "~":
            case "~>":
                return u(b, a);
            default:
                return r(b, a)
        }
    }

    function p(a, b) {
        return C(a, b) === -1
    }

    function q(a, b) {
        a = C(a, b);
        return a === -1 || a === 0
    }

    function r(a, b) {
        return C(a, b) === 0
    }

    function s(a, b) {
        a = C(a, b);
        return a === 1 || a === 0
    }

    function t(a, b) {
        return C(a, b) === 1
    }

    function u(a, b) {
        var c = b.slice();
        b = b.slice();
        b.length > 1 && b.pop();
        var d = b.length - 1,
            e = parseInt(b[d], 10);
        w(e) && (b[d] = e + 1 + "");
        return s(a, c) && p(a, b)
    }

    function v(a) {
        a = a.split(h);
        var b = a[0].match(k);
        b || g(0);
        return {
            modifier: b[1],
            rangeComponents: [b[2]].concat(a.slice(1))
        }
    }

    function w(a) {
        return !isNaN(a) && isFinite(a)
    }

    function x(a) {
        return !v(a).modifier
    }

    function y(a, b) {
        for (var c = a.length; c < b; c++) a[c] = "0"
    }

    function z(a, b) {
        __p && __p();
        a = a.slice();
        b = b.slice();
        y(a, b.length);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].match(/^[x*]$/i);
            if (d) {
                b[c] = a[c] = "0";
                if (d[0] === "*" && c === b.length - 1)
                    for (var d = c; d < a.length; d++) a[d] = "0"
            }
        }
        y(b, a.length);
        return [a, b]
    }

    function A(a, b) {
        var c = a.match(l)[1],
            d = b.match(l)[1];
        c = parseInt(c, 10);
        d = parseInt(d, 10);
        if (w(c) && w(d) && c !== d) return B(c, d);
        else return B(a, b)
    }

    function B(a, b) {
        typeof a === typeof b || g(0);
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0
    }

    function C(a, b) {
        a = z(a, b);
        b = a[0];
        a = a[1];
        for (var c = 0; c < a.length; c++) {
            var d = A(b[c], a[c]);
            if (d) return d
        }
        return 0
    }
    var D = {
        contains: function(a, b) {
            return m(a.trim(), b.trim())
        }
    };
    e.exports = D
}), null);
__d("mapObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = Object.prototype.hasOwnProperty;

    function h(a, b, c) {
        if (!a) return null;
        var d = {};
        for (var e in a) {
            var f = e;
            g.call(a, f) && (d[f] = b.call(c, a[f], f, a))
        }
        return d
    }

    function a(a, b, c) {
        return h(a, b, c)
    }

    function b(a, b, c) {
        return h(a, b, c)
    }
    h.untyped = a;
    h.shape = b;
    e.exports = h
}), null);
__d("memoizeStringOnly", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = {};
        return function(c) {
            Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
            return b[c]
        }
    }
    e.exports = a
}), null);
__d("UserAgent", ["UserAgentData", "VersionRange", "mapObject", "memoizeStringOnly"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    __p && __p();

    function k(a, b, c, d) {
        __p && __p();
        if (a === c) return !0;
        if (!c.startsWith(a)) return !1;
        c = c.slice(a.length);
        if (b) {
            c = d ? d(c) : c;
            return h.contains(c, b)
        }
        return !1
    }

    function l(a) {
        return g.platformName === "Windows" ? a.replace(/^\s*NT/, "") : a
    }
    a = {
        isBrowser: function(a) {
            return k(g.browserName, g.browserFullVersion, a)
        },
        isBrowserArchitecture: function(a) {
            return k(g.browserArchitecture, null, a)
        },
        isDevice: function(a) {
            return k(g.deviceName, null, a)
        },
        isEngine: function(a) {
            return k(g.engineName, g.engineVersion, a)
        },
        isPlatform: function(a) {
            return k(g.platformName, g.platformFullVersion, a, l)
        },
        isPlatformArchitecture: function(a) {
            return k(g.platformArchitecture, null, a)
        }
    };
    e.exports = i(a, j)
}), null);
__d("getViewportDimensions", ["UserAgent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function h() {
        var a;
        document.documentElement && (a = document.documentElement.clientWidth);
        !a && document.body && (a = document.body.clientWidth);
        return a || 0
    }

    function i() {
        var a;
        document.documentElement && (a = document.documentElement.clientHeight);
        !a && document.body && (a = document.body.clientHeight);
        return a || 0
    }

    function j() {
        return {
            width: window.innerWidth || h(),
            height: window.innerHeight || i()
        }
    }
    j.withoutScrollbars = function() {
        return g.isPlatform("Android") ? j() : {
            width: h(),
            height: i()
        }
    };
    e.exports = j
}), null);
__d("DOMVector", ["BasicVector", "getDocumentScrollElement", "getElementPosition", "getUnboundedScrollPosition", "getViewportDimensions"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l;
    a = babelHelpers.inherits(m, g);
    l = a && a.prototype;

    function m(a, b, c) {
        "use strict";
        l.constructor.call(this, a, b), this.domain = c || "pure"
    }
    m.prototype.derive = function(a, b, c) {
        "use strict";
        return new m(a, b, c || this.domain)
    };
    m.prototype.add = function(a, b) {
        "use strict";
        a instanceof m && a.getDomain() !== "pure" && (a = a.convertTo(this.domain));
        return l.add.call(this, a, b)
    };
    m.prototype.convertTo = function(a) {
        "use strict";
        __p && __p();
        if (a != "pure" && a != "viewport" && a != "document") {
            !1;
            return this.derive(0, 0)
        }
        if (a == this.domain) return this.derive(this.x, this.y, this.domain);
        if (a == "pure") return this.derive(this.x, this.y);
        if (this.domain == "pure") {
            !1;
            return this.derive(0, 0)
        }
        var b = m.getScrollPosition("document"),
            c = this.x,
            d = this.y;
        this.domain == "document" ? (c -= b.x, d -= b.y) : (c += b.x, d += b.y);
        return this.derive(c, d, a)
    };
    m.prototype.getDomain = function() {
        "use strict";
        return this.domain
    };
    m.from = function(a, b, c) {
        "use strict";
        return new m(a, b, c)
    };
    m.getScrollPosition = function(a) {
        "use strict";
        a = a || "document";
        var b = j(window);
        return this.from(b.x, b.y, "document").convertTo(a)
    };
    m.getElementPosition = function(a, b) {
        "use strict";
        b = b || "document";
        a = i(a);
        return this.from(a.x, a.y, "viewport").convertTo(b)
    };
    m.getElementDimensions = function(a) {
        "use strict";
        return this.from(a.offsetWidth || 0, a.offsetHeight || 0)
    };
    m.getViewportDimensions = function() {
        "use strict";
        var a = k();
        return this.from(a.width, a.height, "viewport")
    };
    m.getViewportWithoutScrollbarDimensions = function() {
        "use strict";
        var a = k.withoutScrollbars();
        return this.from(a.width, a.height, "viewport")
    };
    m.getDocumentDimensions = function(a) {
        "use strict";
        a = h(a);
        return this.from(a.scrollWidth, a.scrollHeight, "document")
    };
    e.exports = m
}), null);
__d("Vector", ["BrowserScroll", "DOMVector", "Scroll"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j;
    f = babelHelpers.inherits(k, h);
    j = f && f.prototype;

    function k(a, b) {
        "use strict";
        j.constructor.call(this, parseFloat(a), parseFloat(b))
    }
    k.from = function(a, b) {
        "use strict";
        return new k(a, b)
    };
    k.prototype.setPos = function(a) {
        "use strict";
        a.style.left = this.x + "px";
        a.style.top = this.y + "px";
        return this
    };
    k.prototype.setDim = function(a) {
        "use strict";
        a.style.width = this.x + "px";
        a.style.height = this.y + "px";
        return this
    };

    function a(a) {
        var b = null;
        a && (a.getRawEvent ? b = m(a.getRawEvent()) : a.nodeType === 1 ? b = l(a) : (a.preventDefault || Object.prototype.toString.call(a) === "[object Touch]") && (b = m(a)));
        return b
    }

    function b(a) {
        return new k(a.offsetWidth, a.offsetHeight)
    }

    function l(a) {
        var b = 0,
            c = 0,
            d = o();
        do b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent; while (a && a !== d);
        return new k(b, c)
    }

    function m(a) {
        if ("pageX" in a) return new k(a.pageX, a.pageY);
        if ("clientX" in a) {
            var b = o();
            return new k(a.clientX + i.getLeft(b), a.clientY + i.getTop(b))
        }
        b = a.touches && a.touches[0] || a.changedTouches && a.changedTouches[0];
        return b ? m(b) : null
    }

    function c() {
        return new k(g.getPageScrollLeft(), g.getPageScrollTop())
    }

    function d() {
        var a = o();
        return new k(window.innerWidth || a.clientWidth || 0, window.innerHeight || a.clientHeight || 0)
    }
    var n;

    function o() {
        n || (n = document.documentElement);
        return n
    }
    k.getPos = a;
    k.getDim = b;
    k.getScroll = c;
    k.getViewport = d;
    k.getElementPosition = a;
    k.getElementDimensions = b;
    e.exports = k
}), null);
__d("isElementNode", ["isNode"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return g(a) && a.nodeType == 1
    }
    e.exports = a
}), null);
__d("DOM", ["CSS", "FbtResultBase", "HTML", "MLegacyDataStore", "Stratcom", "StratcomManager", "Vector", "containsNode", "createArrayFromMixed", "ex", "isElementNode", "isTextNode"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    __p && __p();
    var s = 0,
        t = 0,
        u = {},
        v = {},
        w, x;

    function y(a, b, c) {
        __p && __p();
        var d, e;
        c === undefined ? b != null && typeof b === "object" ? b.getFragment || b.nodeType || Array.isArray(b) ? (d = v, e = b) : (d = b, e = "") : (d = v, e = b == null ? "" : b) : (d = b || {}, e = c);
        b = document.createElement(a);
        d.style && (Object.assign(b.style, d.style), delete d.style);
        d.sigil && (k.addSigil(b, d.sigil), delete d.sigil);
        d.meta && (j.set(b, d.meta), delete d.meta);
        for (var f in d) {
            c = d[f];
            f in b ? b[f] = c : b.setAttribute && b.setAttribute(f, c)
        }
        e && z(b, e);
        return b
    }

    function z(a, b) {
        S(a), A(a, b)
    }

    function a(a, b) {
        F(a, b, B, !0)
    }

    function A(a, b) {
        F(a, b, C, !1)
    }

    function b(a, b) {
        F(a, b, D, !1)
    }

    function c(a, b) {
        F(a, b, E, !0)
    }

    function B(a, b) {
        a.insertBefore(b, a.firstChild)
    }

    function C(a, b) {
        a.appendChild(b)
    }

    function D(a, b) {
        a.parentNode.insertBefore(b, a)
    }

    function E(a, b) {
        var c = a.nextSibling;
        c ? a.parentNode.insertBefore(b, c) : a.parentNode.appendChild(b)
    }

    function F(a, b, c, d) {
        __p && __p();
        b == null ? b = "" : b && b.__html != null ? b = new i(b.__html) : b instanceof h && (b = b.getContents());
        if (Array.isArray(b)) {
            d && (b = [].concat(b).reverse());
            for (var e = 0; e < b.length; e++) F(a, b[e], c, d)
        } else {
            e = typeof b;
            b != null && typeof b.getFragment === "function" ? b = b.getFragment() : (e == "string" || e == "number") && (b = document.createTextNode(b));
            var f;
            if ((!b || !b.nodeType) && e === "object" && (f = Object.keys(b)).length) {
                b = f.map(function(a) {
                    return this[a]
                }, b);
                return F(a, b, c, d)
            }
            b && c(a, b)
        }
    }

    function G(a) {
        a.parentNode && a.parentNode.removeChild(a);
        return a
    }

    function d(a, b) {
        var c;
        a.nextSibling ? c = function(a, b) {
            a.insertBefore(b, this)
        }.bind(a.nextSibling) : c = C;
        var d = a.parentNode;
        d.removeChild(a);
        F(d, b, c, !1);
        return a
    }

    function H(a) {
        __p && __p();
        a = a.getElementsByTagName("*");
        var b = [];
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (!d.name || d.disabled) continue;
            var e = d.type;
            d = d.tagName;
            var f;
            switch (e) {
                case "radio":
                case "checkbox":
                    f = a[c].checked;
                    break;
                case "text":
                case "hidden":
                case "password":
                case "email":
                case "tel":
                case "number":
                case "search":
                case "date":
                    f = !0;
                    break;
                default:
                    f = d === "TEXTAREA" || d === "SELECT";
                    break
            }
            f && b.push([a[c].name, a[c].value])
        }
        return b
    }

    function f(a) {
        __p && __p();
        var b = {},
            c = {};
        a = H(a);
        for (var d = 0; d < a.length; d++) {
            var e = a[d][0];
            if (e.substr(-2) === "[]") {
                var f = b[e] || 0,
                    g = e.substr(0, e.length - 2) + "[" + f + "]";
                f++;
                b[e] = f;
                e = g
            }
            c[e] = a[d][1]
        }
        return c
    }

    function l(a, b) {
        a = String(a.nodeName || "").toUpperCase();
        b = o(b);
        for (var c = 0; c < b.length; ++c)
            if (b[c].toUpperCase() == a) return !0;
        return !1
    }

    function I(a, b, c, d) {
        a = ["autoid:" + Q(a)];
        c = o(c || []);
        if (!c.length) c = a;
        else
            for (var e = 0; e < c.length; e++) c[e] = a.concat(o(c[e]));
        a = k.listen(b, c, d);
        return a
    }

    function J(a) {
        a.getAttribute("id") || a.setAttribute("id", "uniqid_" + ++t);
        return a.getAttribute("id")
    }

    function K(a) {
        return String(a).replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function L(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) arguments[b] && g.show(arguments[b])
    }

    function M(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) arguments[b] && g.hide(arguments[b])
    }

    function N(a, b, c) {
        __p && __p();
        u[b] || (u[b] = y("var", {
            className: b
        }, ""));
        var d = document.body;
        b = u[b];
        d.appendChild(b);
        b.style.width = c ? c + "px" : "";
        c = K(a.value).replace(/\n/g, "<br />");
        z(b, new i(c));
        a = m.getDim(b);
        d.removeChild(b);
        return a
    }

    function O(a, b, c) {
        a = a.getElementsByTagName(b);
        if (!c) return o(a);
        b = [];
        for (var d = 0; d < a.length; d++) k.hasSigil(a[d], c) && b.push(a[d]);
        return b
    }

    function P(a, b, c) {
        a = O(a, b, c);
        if (!a.length) throw new Error(p('find(<node>, "%s", "%s"): matched no nodes.', b, c));
        return a[0]
    }

    function Q(a) {
        a.getAttribute("data-autoid") || a.setAttribute("data-autoid", "autoid_" + ++s);
        return a.getAttribute("data-autoid")
    }

    function R(a) {
        if (r(a)) return a.data;
        else if (q(a)) {
            var b = document.createElement("div");
            b = b.textContent != null ? "textContent" : "innerText";
            return a[b]
        } else return ""
    }

    function S(a) {
        while (a.firstChild) G(a.firstChild)
    }
    f = {
        appendContent: A,
        convertFormToDictionary: f,
        convertFormToListOfPairs: H,
        contains: n,
        create: y,
        empty: S,
        find: P,
        hide: M,
        htmlize: K,
        insertAfter: c,
        insertBefore: b,
        isType: l,
        listen: I,
        prependContent: a,
        remove: G,
        replace: d,
        scry: O,
        setContent: z,
        show: L,
        textMetrics: N,
        uniqID: J,
        getText: R
    };
    e.exports = f
}), null);
__d("MutationObserver", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function b(a) {
        "use strict"
    }
    b.prototype.observe = function(a, b) {
        "use strict"
    };
    b.prototype.disconnect = function() {
        "use strict"
    };
    b.prototype.takeRecords = function() {
        "use strict";
        return null
    };
    c = a.MutationObserver || a.WebKitMutationObserver || b;
    e.exports = c
}), null);
__d("PageDOMMutationObserver", ["ExecutionEnvironment", "MutationObserver"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = new h(function() {}),
        j = !1,
        k = {
            tryStart: function() {
                __p && __p();
                var a = typeof i.takeRecords === "function";
                if (!g.canUseDOM || !a) {
                    k.tryStart = function() {};
                    k.consumePendingDOMMutations = function() {
                        return 0
                    };
                    return
                }
                if (!window.Env || !document.body) return;
                k.tryStart = function() {};
                if (!window.Env.dom_mutation_flag) return;
                j = !0;
                i.observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })
            },
            consumePendingDOMMutations: function() {
                var a = i.takeRecords();
                return a != null ? a.length : 0
            },
            isSupported: function() {
                return j
            }
        };
    e.exports = k
}), null);
__d("ArtilleryJSPointTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ASYNC_REQUEST_SENT: 1,
        ASYNC_RESPONSE_RECEIVED: 2,
        TRACE_STARTED: 3,
        TRACE_ENDED: 4
    })
}), null);
__d("ArtilleryTraceIDUtils", ["Alea", "FBLogger", "ServerNonce"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        k = g(i.ServerNonce),
        l = function() {
            var a = 0,
                b = 0,
                c = "";
            for (var d = 10; d >= 0; d--) a < 6 && (b = Math.floor(2147483648 * k()), a = 32), d === 0 && (b &= 7), c = j.charAt(b & 63) + c, b >>= 6, a -= 6;
            return c
        };
    a = {
        newTraceId: function() {
            var a;
            for (var b = 3; b > 0; b--) {
                a = l();
                if (a != this.getDummyId()) return a
            }
            h("FIXME").mustfix("failed to generate valid Fbtrace id");
            return this.getDummyId()
        },
        newObjectId: function() {
            return this.newTraceId()
        },
        getDummyId: function() {
            return "AAAAAAAAAAA"
        },
        traceIdToBucket: function(a) {
            a = a.charAt(a.length - 1);
            return j.indexOf(a) % 32
        }
    };
    e.exports = a
}), null);
__d("ArtilleryAsyncRequestTracingAnnotator", ["FBLogger", "IntervalTrackingBoundedBuffer", "ResourceTimingsStore", "ResourceTypes"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    __p && __p();
    var k = [1e3],
        l = new h(),
        m = "FB-ART-INFO",
        n = new Map();

    function o(a, b) {
        return b != null && b.artillery_join_data != null ? {
            uid: a,
            ids_for_timings: b.artillery_join_data
        } : null
    }
    a = {
        startTracingWindow: function(a, b, c) {
            c === void 0 && (c = null);
            var d = l.open();
            c = c || k;
            n.set(a, {
                trace_id: a,
                interaction_name: b,
                tracing_levels: c
            });
            return {
                finishTracingWindow: function() {
                    n["delete"](a);
                    return d.close()
                }
            }
        },
        registerAsyncRequest: function(a, b) {
            if (n.size === 0) return function() {};
            else {
                var c = JSON.stringify(Array.from(n.values()));
                a.setRequestHeader(m, c);
                return function(a) {
                    a = o(b, a);
                    a != null ? l.pushElement(a) : (g("ArtilleryAsyncRequestTracingAnnotator").debug("expected a payload back in the response from the server containing trace information, but nothing arrived."), i.annotate(j.XHR, b).addStringAnnotation("join_error", "join_data_expected_but_not_found"))
                }
            }
        },
        __active: function() {
            throw new Error("__active should only be available in __DEV__")
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionExtraSaver", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        EXAMPLE_COMPONENT_SAVER: "example_component_saver",
        ADS_WAIT_TIME_SAVER: "ads_wait_time_saver",
        ADS_FLUX_PROFILER_SAVER: "ads_flux_profiler_saver",
        TIMESLICE_EXECUTION_SAVER: "timeslice_execution_saver",
        INTERACTION_ASYNC_REQUEST_JOIN_DATA: "interaction_async_request_join_data",
        RESOURCES_SAVER: "resources_saver",
        USER_TIMING_SAVER: "user_timing_saver"
    })
}), null);
__d("InteractionAsyncRequestJoinDataSource", ["ArtilleryAsyncRequestTracingAnnotator", "FBLogger", "TimeSliceInteractionExtraSaver"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    a = {
        registerInteraction: function(a) {
            __p && __p();
            a.countDown();
            var b = a.traceID,
                c = a.name;
            if (b == null) {
                h("InteractionAsyncRequestJoinDataSource").mustfix("got a null trace_id for interaction " + c + ". Typically this indicates that only lite tracing was on, which this hook does not support");
                return
            }
            var d = g.startTracingWindow(b, c);
            a.registerOnBeforeFinish(function(a) {
                var b = d.finishTracingWindow();
                a.recordWithExtraSaver(i.INTERACTION_ASYNC_REQUEST_JOIN_DATA, "entries", b)
            });
            a.registerOnCleanup(function() {
                d.finishTracingWindow()
            })
        }
    };
    e.exports = a
}), null);
__d("TimeSliceExecutionLogger", ["ExecutionContextObservers", "IntervalTrackingBoundedBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "TimingAnnotations", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    __p && __p();
    var m, n = 1e4,
        o = {
            BEGIN: "b",
            END: "e"
        },
        p = new k(),
        q;
    b = babelHelpers.inherits(a, i);
    m = b && b.prototype;

    function a() {
        var a, b;
        for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
        return b = (a = m.constructor).call.apply(a, [this].concat(d)), this.$TimeSliceExecutionLogger1 = new h(n), b
    }
    a.prototype.onNewContextCreatedWhileEnabled = function(a, b, c) {
        if (a) return l();
        else return null
    };
    a.prototype.onBeforeContextStartedWhileEnabled = function(a, b, c) {
        c = {
            type: o.BEGIN,
            ts: a.absBeginTimeMs
        };
        b !== null && (c.creation = b);
        this.$TimeSliceExecutionLogger1.pushElement(c);
        a = q;
        q = null;
        return a
    };
    a.prototype.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
        return c
    };
    a.prototype.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
        b = a.absEndTimeMs;
        d = {
            type: o.END,
            ts: b,
            name: a.name,
            id: a.contextID
        };
        q && (d.annotations = q.prepareToSend());
        this.$TimeSliceExecutionLogger1.pushElement(d);
        q = c
    };
    a.prototype.annotateCurrentExecution = function() {
        if (!this.isEnabled()) return p;
        q == null && (q = new k());
        return q
    };
    a.prototype.getBeforeID = function() {
        return g.beforeIDs.TIMESLICE_EXECUTION_LOGGER
    };
    a.prototype.getAfterID = function() {
        return g.afterIDs.TIMESLICE_EXECUTION_LOGGER
    };
    a.prototype.getBuffer = function() {
        return this.$TimeSliceExecutionLogger1
    };
    c = new a();
    j.registerExecutionContextObserver(c);
    e.exports = c
}), null);
__d("TimeSliceExecutionDataSource", ["TimeSliceExecutionLogger", "TimeSliceInteractionExtraSaver", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    a = {
        registerInteraction: function(a) {
            a.countDown();
            var b = i(),
                c = g.getBuffer().open(),
                d = g.expressInterest();
            a.registerOnBeforeFinish(function(a) {
                d();
                var e = c.close(),
                    f = c.hasOverflown();
                a.recordWithExtraSaver(h.TIMESLICE_EXECUTION_SAVER, "entries", {
                    startTime: b,
                    entries: e,
                    hasOverflown: f
                })
            });
            a.registerOnCleanup(function() {
                d(), c.close()
            })
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionBootloadForPost", ["Bootloader"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        g.loadModules(["Banzai", "BanzaiStream", "BanzaiODS", "ResourceTimingBootloaderHelper", "TimeSliceHelper", "SnappyCompressUtil", "PerfXSharedFields"], a, "TimeSliceInteractionBootloadForPost")
    }
    e.exports = a
}), null);
__d("TimeSliceInteractionReliability", ["ifRequired"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = "timeslice_interactions",
        i = !0,
        j = new Map();

    function k(a, b, c) {
        return b + ":" + c + ":" + a
    }

    function a(a, b, c) {
        a = k(a, b, c);
        var d = g("BanzaiODS", function(a) {
            return a
        });
        if (!d) {
            b = j.get(a) || 0;
            j.set(a, b + 1)
        } else i && (j.forEach(function(a, b) {
            return d.bumpEntityKey(h, b, a)
        }), i = !1), d.bumpEntityKey(h, a, 1)
    }
    e.exports = {
        bumpLifecycleCounter: a
    }
}), null);
__d("compactArray", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            d != null && b.push(d)
        }
        return b
    }
    e.exports = a
}), null);
__d("performanceNavigationStart", ["performance"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    if (g.now)
        if (g.timing && g.timing.navigationStart) a = function() {
            return g.timing.navigationStart
        };
        else if (typeof window._cstart === "number") a = function() {
        return window._cstart
    };
    else {
        var h = Date.now();
        a = function() {
            return h
        }
    } else a = function() {
        return 0
    };
    e.exports = a
}), null);
__d("TimeSliceInteraction", ["Arbiter", "ArtilleryComponentSaverOptions", "ArtilleryJSPointTypes", "ArtilleryTraceIDUtils", "Bootloader", "CircularBuffer", "ErrorUtils", "FBLogger", "Heartbeat", "InteractionAsyncRequestJoinDataSource", "ProfilingCounters", "ProfilingCountersStore", "Random", "ResourceTimingsStore", "ResourceTypes", "TimeSlice", "TimeSliceExecutionDataSource", "TimeSliceInteractionBootloadForPost", "TimeSliceInteractionExtraSaver", "TimeSliceInteractionReliability", "TimeSliceInteractionSV", "TimingAnnotations", "Visibility", "compactArray", "invariant", "nullthrows", "performance", "performanceAbsoluteNow", "performanceNavigationStart", "requestIdleCallbackAcrossTransitions", "requireWeak"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K) {
    __p && __p();
    var L;
    K("AsyncProfiler", function(a) {
        L = a
    });
    var M;
    K("ArtilleryUserTimingProfiler", function(a) {
        M = a
    });
    var N = {
        pointGroup: null,
        type: null,
        isPointOfInterest: null
    };
    c = 250;
    var O = new l(c);
    new Map();
    d = 100;
    var P = new l(d),
        Q = new Map(),
        R = !1,
        S = null;
    g.subscribe("perf_nub_interaction_trace", function(a, b) {
        if (S) return;
        R = !0
    });
    var T = new B.EmptyTimingAnnotations(),
        U = new B.EmptyTraceTimingAnnotations(),
        V = "artillery_javascript_actions",
        W = "artillery_javascript_lite_actions";

    function b(a) {
        var b = "visibility_state_" + a,
            c = {
                isPointOfInterest: !0,
                pointGroup: "visibility_state_changes"
            };
        return function() {
            return $.informGlobally(b, c)
        }
    }
    C && C.addListener && (C.addListener(C.HIDDEN, b("hidden")), C.addListener(C.VISIBLE, b("visible")));

    function X(a) {
        if (C) {
            var b = C.isHidden() ? C.HIDDEN : C.VISIBLE;
            a.inform("visibility_state_" + b, {
                pointGroup: "visibility_state_changes"
            })
        }
    }

    function Y(a) {
        return R && a === "Event"
    }

    function aa(a) {
        __p && __p();
        var b = A.interaction_to_coinflip,
            c = A.interaction_to_lite_coinflip,
            d;
        Y(a) ? d = 1 : d = Object.prototype.hasOwnProperty.call(b, a) ? b[a] : A.default_rate;
        b = Object.prototype.hasOwnProperty.call(c, a) ? c[a] : A.lite_default_rate;
        c = new Set();
        s.coinflip(b) && c.add("lite");
        s.coinflip(d) && c.add("full");
        a = 0;
        c.has("full") ? a = 1 / d : d === 0 ? a = 0 : a = 1 - 1 / d;
        d = 0;
        c.has("lite") && (d = 1 / b);
        return {
            modes: c,
            probability: a,
            liteProbability: d
        }
    }

    function ba() {
        return Q.size !== 0
    }

    function Z(a) {
        return babelHelpers["extends"]({}, a, {
            annotations: a.annotations.prepareToSend()
        })
    }

    function ca(a, b) {
        __p && __p();
        b = r.getNestedTotalsByAttributions(b, a);
        a = b.attributed;
        b = b.unattributed;
        var c = {};
        a = Object.entries(a);
        for (var d = 0; d < a.length; d++) {
            var e = a[d],
                f = e[0];
            e = e[1];
            c["internal:" + f] = e
        }
        f = Object.entries(b);
        for (var e = 0; e < f.length; e++) {
            a = f[e];
            d = a[0];
            b = a[1];
            c["external:" + d] = b
        }
        return c
    }
    $.create = function(a, b, c) {
        b === void 0 && (b = []);
        c === void 0 && (c = !1);
        a = new $(a, b, c);
        a.trace().addStringAnnotation("initiatorType", "manually_ended");
        return a
    };
    $.informGlobally = function(a, b) {
        "use strict";
        if (!ba()) return T;
        var c = H(),
            d = new B(),
            e = babelHelpers["extends"]({
                ts: c,
                name: a,
                annotations: d,
                rawStackTrace: b && b.rawStackTrace || null,
                guardStack: v.getGuardNameStack()
            }, N, b);
        d.addStringAnnotation("global_point", "1");
        Q.forEach(function(a) {
            return a.push(e)
        });
        return d
    };
    $.informOnPage = function(a, b) {
        "use strict";
        var c = H(),
            d = new B();
        c = babelHelpers["extends"]({
            ts: c,
            name: a,
            annotations: d,
            rawStackTrace: b && b.rawStackTrace || null,
            guardStack: []
        }, N, b);
        O.write(c);
        return d
    };

    function $(a, b, c) {
        __p && __p();
        b === void 0 && (b = []);
        c === void 0 && (c = !1);
        this.$2 = null;
        this.$4 = !0;
        this.$5 = null;
        this.$6 = [];
        this.$7 = !1;
        this.$8 = null;
        this.$12 = [];
        this.$13 = [];
        this.$14 = [];
        this.$15 = [];
        this.$16 = new B.TraceTimingAnnotations();
        this.$17 = new Map();
        this.$20 = null;
        this.$21 = 1;
        this.$24 = 1;
        this.$28 = !0;
        this.$29 = {};
        var d = aa(a),
            e = d.modes,
            f = d.probability;
        d = d.liteProbability;
        this.$18 = e;
        this.$1 = a;
        this.$22 = f;
        this.$23 = d;
        this.$19 = c ? I() : H();
        this.$27 = new Map();
        this.$11 = new Set();
        f = this.inform("trace_started", {
            type: i.TRACE_STARTED,
            pointGroup: "e2e",
            isPointOfInterest: !0,
            ts: this.$19
        });
        G && G.now && f.addStringAnnotation("offset_from_start_of_req_ms", G.now().toString());
        X(this);
        Q.set(this, []);
        if (this.isEnabledForMode("full")) {
            A.enable_heartbeat && (this.$5 = o.get().expressInterest());
            L && L.enabled() && (this.$9 = L.startRecording());
            d = A.user_timing_coinflip || 0;
            M && d && s.coinflip(d) && (this.$10 = M.startRecording());
            this.$3 = j.newTraceId()
        }
        e.has("full") && P.write({
            interaction: this,
            ts: H()
        });
        if (e.size === 0) this.disable(!0);
        else {
            if (this.isEnabledForMode("full")) {
                A.enable_heartbeat && (this.$5 = o.get().expressInterest());
                A.force_async_request_tracing_on && b.push(p);
                c = q.getObserver().expressInterest();
                this.$14.push(c);
                Y(a) && (S = F(this.$3), R = !1);
                this.$25 = r.getInstance().open();
                this.$26 = v.getBuffer().open();
                this.$14.push(function() {
                    this.$26 && this.$26.close(), this.$25 && this.$25.close()
                }.bind(this))
            }
            var g = {
                trace: function() {
                    return this.trace()
                }.bind(this),
                countDown: function() {
                    return this.countDown()
                }.bind(this),
                forceFinish: function() {
                    return this.finish(!0)
                }.bind(this),
                registerOnBeforeFinish: function(a) {
                    return this.registerOnBeforeFinish(a)
                }.bind(this),
                registerOnCleanup: function(a) {
                    return this.registerOnCleanUp(a)
                }.bind(this),
                traceID: this.$3,
                name: a
            };
            A.also_record_new_timeslice_format && b.push(w);
            var h = D(b.map(function(a) {
                this.$24++;
                return a.registerInteraction(g)
            }.bind(this)));
            this.$14.push(function() {
                h.forEach(function(a) {
                    return a.remove()
                })
            });
            this.$13.push(function() {
                this.trace().addStringAnnotation("wait_for_count", "" + this.$24)
            }.bind(this))
        }
        for (var f = e, d = Array.isArray(f), c = 0, f = d ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (d) {
                if (c >= f.length) break;
                b = f[c++]
            } else {
                c = f.next();
                if (c.done) break;
                b = c.value
            }
            e = b;
            z.bumpLifecycleCounter("starting", a, e)
        }
    }
    $.prototype.recordWithExtraSaver = function(a, b, c) {
        "use strict";
        if (this.isEnabled()) {
            var d = this.$27.get(a) || {};
            b != null && c != null && (d[b] = c);
            this.$27.set(a, d)
        }
        return this
    };
    $.prototype.countDown = function() {
        "use strict";
        this.$24--, this.$24 === 0 ? this.$20 && this.$20() : this.$24 < 0 && n("FIXME").mustfix("some hook counted down twice")
    };
    $.prototype.countUp = function() {
        "use strict";
        this.$24 > 0 ? ++this.$24 : n("FIXME").mustfix("Attempting to countUp on finished interaction")
    };
    $.prototype.inform = function(a, b) {
        "use strict";
        var c = b != null && b.isPointOfInterest;
        if (!this.isEnabledForMode("full") && !(this.isEnabledForMode("lite") && c)) return T;
        c = b && b.ts || H();
        var d = new B(),
            e = this.isEnabledForMode("full") ? v.getGuardNameStack() : [];
        this.$12.push(babelHelpers["extends"]({
            ts: c,
            name: a,
            annotations: d,
            rawStackTrace: b && b.rawStackTrace || null,
            guardStack: e
        }, N, b));
        return d
    };
    $.prototype.informPointWithOverride = function(a, b) {
        "use strict";
        __p && __p();
        var c = H(),
            d = b != null && b.isPointOfInterest;
        if (!this.isEnabledForMode("full") && !(this.isEnabledForMode("lite") && d) || !this.$29) return T;
        d = this.isEnabledForMode("full") ? v.getGuardNameStack() : [];
        var e = this.$29[a];
        b && (b.rawStackTrace = b.rawStackTrace || null);
        if (e) e.ts = c, e.guardStack = d, Object.assign(e, b || {});
        else {
            e = new B();
            this.$29[a] = babelHelpers["extends"]({
                ts: c,
                name: a,
                annotations: e,
                rawStackTrace: b && b.rawStackTrace || null,
                guardStack: d
            }, N, b)
        }
        return this.$29[a].annotations
    };
    $.prototype.invokeWithProfiling = function(b, c) {
        "use strict";
        if (!this.isEnabledForMode("full")) return c();
        var d = this.inform("start_" + b);
        this.$6.push(d);
        d = m.applyWithGuard(c, a, null, null, b);
        this.inform("finished_" + b);
        this.$6.pop();
        return d
    };
    $.prototype.getCurrentInvocation = function() {
        "use strict";
        if (!this.isEnabledForMode("full")) return T;
        else if (this.$6.length < 1) return T;
        else return this.$6[this.$6.length - 1]
    };
    $.prototype.finish = function(a) {
        "use strict";
        __p && __p();
        if (!this.$4) return;
        if (a && this.$20) {
            this.$20();
            return
        }
        if (this.$7) n("FIXME").mustfix("Trace was already marked as ended");
        else {
            X(this);
            this.$15.forEach(function(a) {
                return a(this)
            }.bind(this));
            for (var b = this.$18, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                z.bumpLifecycleCounter("finishing", this.$1, e)
            }
            this.inform("trace_ended", {
                type: i.TRACE_ENDED,
                pointGroup: "e2e",
                isPointOfInterest: !0
            });
            var f = this.isEnabledForMode("lite"),
                h = this.isEnabledForMode("full");
            h && this.trace().addStringAnnotation("weight", "" + 1 / (this.$21 * this.$22));
            f && this.trace().addStringAnnotation("lite_weight", "" + 1 / (this.$21 * this.$23));
            navigator && navigator.connection && (typeof navigator.connection.downlink === "number" && this.trace().addStringAnnotation("browser_downlink_megabits", navigator.connection.downlink.toString()), typeof navigator.connection.rtt === "number" && this.trace().addStringAnnotation("browser_rtt_ms", navigator.connection.rtt.toString()), typeof navigator.connection.effectiveType === "string" && this.trace().addStringAnnotation("browser_effective_connection_type", navigator.connection.effectiveType));
            var j = H(),
                k = Q.get(this);
            Q["delete"](this);
            this.$5 && this.$5();
            var l = this.$25 != null ? this.$25.close() : [],
                m = this.$26 != null ? this.$26.close() : [],
                o = this.$26 != null ? this.$26.hasOverflown() : !1,
                p = this.$26 != null ? this.$26.getOverflowSize() : 0,
                q = this.$10 != null ? this.$10.close() : null;
            if (f || h) {
                var r = function(a) {
                        f && this.$30(k), h && (q != null && this.recordWithExtraSaver(y.USER_TIMING_SAVER, "data", q), this.$31(j, k, a, l, m, o, p)), S && S === this.$3 && (g.inform("time_slice_trace_posted", {
                            traceId: this.$3
                        }), S = null), this.$32()
                    }.bind(this),
                    s = r;
                if (this.$9 !== undefined) {
                    L || E(0);
                    var t = L.stopRecording(this.$9);
                    s = function() {
                        t["catch"](function(a) {
                            setTimeout(function() {
                                throw a
                            }, 0)
                        }).then(r)
                    }
                }
                a ? s() : this.$20 = function() {
                    return J(function() {
                        return s()
                    })
                }
            }
            this.countDown();
            this.$7 = !0
        }
    };
    $.prototype.registerOnBeforeSend = function(a) {
        "use strict";
        this.$4 && this.$13.push(a);
        return this
    };
    $.prototype.registerOnBeforeFinish = function(a) {
        "use strict";
        this.$4 && this.$15.push(a);
        return this
    };
    $.prototype.registerOnCleanUp = function(a) {
        "use strict";
        this.$4 && this.$14.push(a);
        return this
    };
    $.prototype.trace = function() {
        "use strict";
        return !this.$4 ? U : this.$16
    };
    $.prototype.getTraceID = function() {
        "use strict";
        return this.$4 ? this.$3 : null
    };
    $.prototype.setExtraSampleRate = function(a) {
        "use strict";
        this.$21 = a;
        return this
    };
    $.prototype.isEnabled = function() {
        "use strict";
        return this.$4
    };
    $.prototype.disable = function(a) {
        __p && __p();
        a === void 0 && (a = !1);
        Q["delete"](this);
        this.$5 && this.$5();
        this.$9 !== undefined && (L || E(0), L.stopRecording(this.$9));
        if (!a && this.$4)
            for (var a = this.$18, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                z.bumpLifecycleCounter("disabled", this.$1, d)
            }
        this.$4 = !1;
        this.$32()
    };
    $.prototype.disableBanzaiStream = function() {
        "use strict";
        this.$28 = !1
    };
    $.getPageLoadPoints = function(a, b) {
        "use strict";
        var c = [],
            d = O.read();
        for (var e = d.length - 1; e >= 0; e--) {
            var f = d[e];
            if (f.ts < a) return c;
            else f.ts < b && c.push(Z(f))
        }
        return c
    };
    $.getInteractionIDsBetween = function(a, b) {
        "use strict";
        __p && __p();
        var c = [],
            d = P.read();
        for (var e = d.length - 1; e >= 0; e--) {
            var f = d[e],
                g = f.interaction;
            f = f.ts;
            g = g.getTraceID();
            if (f < a) return c;
            else f < b && g != null && c.push(g)
        }
        return c
    };
    $.prototype.receiveAsyncResponse = function(a) {
        "use strict";
        a != null && a.artillery_info && this.isEnabledForMode("full") ? this.$33(a.artillery_info.artillery_join_points) : this.disable();
        return this
    };
    $.prototype.addArtilleryIDHeader = function(a) {
        "use strict";
        this.$4 && a.setRequestHeader("X-ARTILLERY-REQ-METADATA", JSON.stringify({
            trace_id: this.$3
        }));
        return this
    };
    $.prototype.forResourceRequest = function(a) {
        "use strict";
        __p && __p();
        if (!this.isEnabledForMode("full")) return T;
        else {
            var b = this.$17.get(a);
            if (b) return b;
            else {
                b = new B();
                this.$17.set(a, b);
                return b
            }
        }
    };
    $.prototype.addProfilingCounterAttribution = function(a) {
        "use strict";
        this.$11.add(a);
        return this
    };
    $.prototype.$33 = function(a) {
        "use strict";
        if (!this.isEnabledForMode("full")) return this;
        this.$2 = a;
        return this
    };
    $.prototype.$30 = function(a) {
        "use strict";
        __p && __p();
        this.$13.forEach(function(a) {
            return a()
        });
        this.$13 = [];
        if (!this.isEnabled()) return;
        var b = [];
        a = this.$12.concat(Object.values(this.$29)).concat(a || []);
        a.forEach(function(a) {
            a.isPointOfInterest && b.push({
                ts: a.ts,
                name: a.name,
                pointGroup: a.pointGroup,
                annotations: a.annotations.prepareToSend()
            })
        });
        var c = {
            trace_id: this.$3,
            action_name: this.$1,
            trace_annotations: this.$16.prepareToSend(),
            points: b
        };
        k.loadModules(["Banzai", "BanzaiODS", "PerfXSharedFields"], function(a, b, d) {
            z.bumpLifecycleCounter("posting", this.$1, "lite"), a.post(W, d.addCommonValues(c), a.VITAL)
        }.bind(this), "TimeSliceInteraction")
    };
    $.prototype.$31 = function(a, b, c, d, e, f, g) {
        "use strict";
        __p && __p();
        this.$13.forEach(function(a) {
            return a()
        });
        this.$13 = [];
        if (!this.isEnabled()) return;
        b = b != null ? this.$12.concat(b) : this.$12;
        b.push.apply(b, Object.values(this.$29));
        var i = b.map(Z),
            j = Array.from(this.$11.keys()),
            k = new Map(this.$27.entries());
        x(function(b, l, m, n, o, p, q) {
            __p && __p();
            z.bumpLifecycleCounter("posting", this.$1, "full");
            m = o.getMetrics(this.$19, a, A.maxBlockMergeDuration, A.maxBlockMergeDistance, e, r.toMap(d), {
                includeRefTreeIDs: !0,
                counterFunction: function(a) {
                    return ca(j, a)
                }
            });
            this.$16.addStringAnnotation("overflown_timeslice_buffer", f ? "1" : "0");
            this.$16.addStringAnnotation("overflown_timeslice_entry_count", "" + g);
            if (G && G.timing && G.timing.navigationStart) {
                var v = e.length > 0 ? e[0].begin : null;
                n = n.getMetrics(v != null && v < this.$19 ? v : this.$19, !1, null, a, !0, !0);
                v = n.data;
                n = n.diagnostics;
                n && (this.$16.addStringAnnotation("number_of_valid_entries", n.numValidEntries.toString()), this.$16.addStringAnnotation("number_of_success_metrics", n.numSuccessfulMetrics.toString()));
                Object.values(v).forEach(function(a) {
                    return a.forEach(function(a) {
                        var b = a.desc,
                            c = a.type,
                            d = this.$17.get(b);
                        d = d && d.prepareToSend();
                        if (c === u.JS || c === u.CSS || c === u.XHR) {
                            c = t.getAnnotationsFor(c, b);
                            d = B.combine(d, c)
                        }
                        a.annotations = d
                    }.bind(this))
                }.bind(this))
            } else v = {};
            var w = {};
            k.forEach(function(a, b) {
                __p && __p();
                var c = h.options[b];
                c = !!(c && c.shouldCompress);
                if (c) {
                    c = p.compressStringToSnappy(JSON.stringify(a));
                    if (c != null) {
                        w[b] = {
                            data: c,
                            isCompressed: !0
                        };
                        return
                    }
                }
                w[b] = {
                    isCompressed: !1,
                    data: a
                }
            });
            n = {
                trace_id: this.$3,
                join_points: this.$2,
                action_name: this.$1,
                points: i,
                traceAnnotations: this.$16.prepareToSend(),
                timeslices: o.formatMetricsForTransport(m),
                resource_timings: v,
                sampler_profile: c,
                extra_savers: w
            };
            n = q.addCommonValues(n);
            A.compression_enabled && (n = this.$34(p, n));
            o = A.banzai_stream_coinflip || 0;
            this.$28 && A.enable_banzai_stream && s.coinflip(o) ? l.post(V, n, {
                compress: !1
            }) : b.post(V, n, {
                compress: !1
            })
        }.bind(this))
    };
    $.prototype.$34 = function(a, b) {
        "use strict";
        __p && __p();
        var c = ["points", "timeslices", "resource_timings", "sampler_profile"],
            d = {};
        c.forEach(function(c) {
            var e = b[c];
            if (e == null) return;
            e = JSON.stringify(e);
            e = a.compressStringToSnappy(e);
            e !== null && (d[c] = e, delete b[c])
        });
        return babelHelpers["extends"]({}, b, {
            miny: d
        })
    };
    $.prototype.$32 = function() {
        "use strict";
        delete this.$12, this.$13 = [], this.$14 && (this.$14.forEach(function(a) {
            return a()
        }), this.$14 = []), this.$15 = [], delete this.$29, delete this.$20, delete this.$27
    };
    $.prototype.isEnabledForMode = function(a) {
        "use strict";
        return this.$4 && !this.$7 && this.$18.has(a)
    };
    $.prototype.isDone = function() {
        "use strict";
        return this.$7
    };
    $.getAllActiveInteractions = function() {
        "use strict";
        return Q.keys()
    };
    e.exports = $
}), null);
__d("TimeSliceReferenceCounting", ["ExecutionContextObservers", "OnDemandExecutionContextObserver", "ProfilingCounters", "TimeSlice", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l, m = [],
        n = [];
    b = null;
    var o = null,
        p = 1,
        q = [];

    function r(a) {
        if (a == null || a.length === 0) return;
        a = a.filter(function(a) {
            return --a.openReferenceCount == 0
        });
        a.length > 0 && (q.push.apply(q, a), k(j.guard(s, "invoking onAllChildrenFinished callbacks", {
            propagationType: j.PropagationType.ORPHAN
        })))
    }

    function s() {
        while (q.length) q.pop().finish()
    }

    function t(a, b) {
        "use strict";
        this.$2 = t.$1++, this.$3 = a, this.$4 = [], this.$5 = !1, this.$6 = b, this.openReferenceCount = 1, this.timeslices = [a]
    }
    t.prototype.isProfiling = function() {
        "use strict";
        return this.$6
    };
    t.prototype.addCallback = function(a) {
        "use strict";
        !this.$5 ? this.$4.push(a) : a();
        return this
    };
    t.prototype.finish = function() {
        "use strict";
        this.$5 || (this.$5 = !0, this.$4.forEach(function(a) {
            return a()
        }), delete this.$4)
    };
    t.prototype.getContinuationExecutionCounterID = function() {
        "use strict";
        return this.$2
    };
    t.prototype.isInsideContinuationExecution = function() {
        "use strict";
        return n.indexOf(this) !== -1
    };
    t.prototype.getTimeSliceContextsThisCounted = function() {
        "use strict";
        return this.timeslices
    };
    t.prototype.getRootContextID = function() {
        "use strict";
        return this.$3
    };
    t.$1 = 1;

    function u(a, b) {
        a.forEach(function(a) {
            var c = a.getContinuationExecutionCounterID(),
                d = b.find(function(a) {
                    return a.getContinuationExecutionCounterID() === c
                });
            d || b.push(a)
        })
    }
    l = babelHelpers.inherits(a, h);
    l && l.prototype;
    a.prototype.onNewContextCreatedWhileEnabled = function(a, b, c) {
        "use strict";
        var d;
        c.isContinuation && (d = n, d.forEach(function(a) {
            return a.openReferenceCount++
        }));
        a = {
            hasBeenInvoked: !1,
            hasExecutionBeenCounted: !1,
            parentReferenceCounters: d,
            creationID: p++
        };
        return a
    };
    a.prototype.onContextCanceled = function(a, b) {
        "use strict";
        a = b || {};
        a.hasBeenInvoked || (r(a.parentReferenceCounters), a.hasBeenInvoked = !0)
    };
    a.prototype.onBeforeContextStartedWhileEnabled = function(a, b, c) {
        "use strict";
        __p && __p();
        var d = {
            callerProfilingCounterID: o,
            callerReferenceCounters: m,
            callerExecutionCounters: n.slice()
        };
        b = b || {
            hasBeenInvoked: !1,
            creationID: -1
        };
        b.hasBeenInvoked = !0;
        a.executionNumber > 0 ? m = [] : m = b.parentReferenceCounters || [];
        c.extendsExecution ? u(m, n) : n = [];
        n.forEach(function(b) {
            return b.timeslices.push(a.contextID)
        });
        m.filter(function(a) {
            return a.isProfiling()
        }).length > 0 && a.executionNumber === 0 ? o = i.startTimingInContext("REF_COUNTED_TIMESLICE_TIME", a.contextID) : o = null;
        return d
    };
    a.prototype.onDisable = function() {
        "use strict";
        o = null, m = [], n = []
    };
    a.prototype.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
        "use strict";
        return c
    };
    a.prototype.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
        "use strict";
        b = a.contextID;
        o != null && (i.stopTimingInContext(o, b), o = null);
        r(m);
        m = c.callerReferenceCounters;
        n = c.callerExecutionCounters;
        o = c.callerProfilingCounterID
    };
    a.prototype.getBeforeID = function() {
        "use strict";
        return g.beforeIDs.REFERENCE_COUNTING
    };
    a.prototype.getAfterID = function() {
        "use strict";
        return g.afterIDs.REFERENCE_COUNTING
    };

    function a() {
        "use strict";
        l.apply(this, arguments)
    }
    var v = {
            onAllChildrenFinished: function(a, b) {
                b === void 0 && (b = !1);
                var c = v.getObserver().expressInterest();
                return v.onAllChildrenFinishedWithoutAutoTurningObserverOn(a, c, b)
            },
            onAllChildrenFinishedWithoutAutoTurningObserverOn: function(a, c, d) {
                __p && __p();
                var e = j.getContext();
                if (e == null) {
                    c();
                    return null
                }
                e = e.contextID;
                b = new t(e, d);
                b.addCallback(c);
                a && b.addCallback(a);
                m = m.slice();
                m.push(b);
                n = n.slice();
                n.push(b);
                o == null && b.isProfiling() && (o = i.startTimingInContext("REF_COUNTED_TIMESLICE_TIME", e));
                return b
            },
            getObserver: function() {
                return w
            }
        },
        w = new a();
    j.registerExecutionContextObserver(w);
    e.exports = v
}), null);
__d("TimeSliceAutoclosedInteraction", ["ErrorUtils", "ProfilingCounters", "TimeSlice", "TimeSliceInteraction", "TimeSliceInteractionExtraSaver", "TimeSliceInteractionSV", "TimeSliceReferenceCounting", "clearTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    "use strict";
    __p && __p();
    var p, q = 70 * 1e3;
    b = babelHelpers.inherits(a, j);
    p = b && b.prototype;

    function a(a, b) {
        __p && __p();
        b === void 0 && (b = []);
        p.constructor.call(this, a, b);
        this.$TimeSliceAutoclosedInteraction1 = new Map();
        this.$TimeSliceAutoclosedInteraction2 = 0;
        this.$TimeSliceAutoclosedInteraction3 = !0;
        this.$TimeSliceAutoclosedInteraction4 = [];
        this.$TimeSliceAutoclosedInteraction5 = new Set();
        if (this.isEnabled()) {
            this.trace().addStringAnnotation("initiatorType", "autoclosed");
            var c = o(i.guard(function() {
                this.isDone() || (this.trace().addStringAnnotation("terminated_by_timeout_ms", q.toString()), this.finish())
            }.bind(this), "timeout for action " + a, {
                propagationType: i.PropagationType.EXECUTION
            }), q);
            this.registerOnBeforeSend(function() {
                this.trace().addStringAnnotation("ref_counting_trees", "" + this.$TimeSliceAutoclosedInteraction2).addStringAnnotation("ref_counters_pending_count", "" + this.$TimeSliceAutoclosedInteraction1.size), n(c)
            }.bind(this));
            b = m.onAllChildrenFinished(null, !0);
            if (b == null) this.disable(), g.reportError(new Error("starting autoclosed interaction outside of a timeslice."));
            else {
                this.waitForReferenceCounter(b);
                this.trace().addStringAnnotation("on_demand_reference_counting", l.on_demand_reference_counting ? "1" : "0");
                a = "timeslice_interaction_" + this.getTraceID();
                this.isEnabledForMode("full") && (h.currentContext().addAttribution(a, h.AttributionPropagation.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC), this.addProfilingCounterAttribution(a))
            }
        }
    }
    a.getInteractionsActiveRightNow = function() {
        return Array.from(j.getAllActiveInteractions()).filter(function(a) {
            return a.$TimeSliceAutoclosedInteraction3 && a.hasActiveReferenceCountingHandle()
        })
    };
    a.prototype.waitForReferenceCounter = function(a) {
        __p && __p();
        if (!this.isEnabled()) return this;
        var b = a.getContinuationExecutionCounterID();
        this.$TimeSliceAutoclosedInteraction1.set(b, a);
        this.$TimeSliceAutoclosedInteraction2++;
        a.addCallback(function() {
            l.also_record_new_timeslice_format && this.$TimeSliceAutoclosedInteraction1.has(b) && a.getTimeSliceContextsThisCounted().forEach(function(a) {
                return this.$TimeSliceAutoclosedInteraction5.add(a)
            }.bind(this)), this.$TimeSliceAutoclosedInteraction1["delete"](b) && this.$TimeSliceAutoclosedInteraction1.size === 0 && (this.$TimeSliceAutoclosedInteraction4.forEach(function(a) {
                return a()
            }), this.$TimeSliceAutoclosedInteraction4 = [], this.isEnabled() && !this.isDone() && (l.also_record_new_timeslice_format && this.recordWithExtraSaver(k.TIMESLICE_EXECUTION_SAVER, "reference_counted_contexts", Array.from(this.$TimeSliceAutoclosedInteraction5.values())), this.finish()))
        }.bind(this));
        return this
    };
    a.prototype.onReferenceCountedExecutionFinished = function(a) {
        this.$TimeSliceAutoclosedInteraction4.push(a)
    };
    a.prototype.hasActiveReferenceCountingHandle = function() {
        __p && __p();
        for (var a = this.$TimeSliceAutoclosedInteraction1.values(), b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var d;
            if (b) {
                if (c >= a.length) break;
                d = a[c++]
            } else {
                c = a.next();
                if (c.done) break;
                d = c.value
            }
            d = d;
            if (d.isInsideContinuationExecution()) return !0
        }
        return !1
    };
    e.exports = a
}), null);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], (function(a, b, c, d, e, f) {
    e.exports = a.clearImmediate || b("ImmediateImplementation").clearImmediate
}), null);
__d("clearImmediate", ["TimerStorage", "TimeSlice", "clearImmediatePolyfill"], (function(a, b, c, d, e, f, g, h, i) {
    var j = g.IMMEDIATE;

    function a(a) {
        if (a != null) {
            g.unset(g.IMMEDIATE, a);
            var b = j + String(a);
            h.cancelWithToken(b)
        }
        i(a)
    }
    e.exports = a
}), null);
__d("setImmediate", ["TimerStorage", "TimeSlice", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function a(a) {
        __p && __p();
        var b, c = function() {
            g.unset(g.IMMEDIATE, b);
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            Function.prototype.apply.call(a, this, d)
        };
        h.copyGuardForWrapper(a, c);
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        b = i.apply(undefined, [c].concat(e));
        g.set(g.IMMEDIATE, b);
        return b
    }
    e.exports = a
}), null);
__d("TimeSliceInteractionCancelHook", ["clearImmediate", "requireWeak", "setImmediate"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    var j = [];
    a = {
        registerInteraction: function(a) {
            var b = i(function() {
                    j.push(a)
                }),
                c = !1;
            return {
                remove: function() {
                    if (c) return;
                    c = !0;
                    g(b);
                    var d = j.indexOf(a);
                    d !== -1 && j.splice(d, 1)
                }
            }
        }
    };
    h("Stratcom", function(a) {
        a.listen("click", null, function() {
            j.forEach(function(a) {
                a.trace().addStringAnnotation("clicked_during_interaction", "1")
            })
        })
    });
    e.exports = a
}), null);
__d("CurrentEventMeta", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = {};
    a = {
        __setCurrentEventID: function(a) {
            g = a
        },
        __informEventDataReady: function(a, b) {
            h[a] && (h[a].forEach(function(a) {
                return a(b)
            }), delete h[a])
        },
        hasCurrentEvent: function() {
            return !!g
        },
        registerForCurrentEventData: function(a) {
            g && (h[g] = h[g] || [], h[g].push(a))
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionEventHook", ["CurrentEventMeta"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            g.hasCurrentEvent() && (a.countUp(), g.registerForCurrentEventData(function(b) {
                Object.keys(b).forEach(function(c) {
                    var d = "" + b[c];
                    a.trace().addStringAnnotation(c, d)
                }), a.countDown()
            }));
            return null
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionLeaveHook", ["Run"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = [];
    a = {
        registerInteraction: function(a) {
            h.push(a);
            return {
                remove: function() {
                    var b = h.indexOf(a);
                    b !== -1 && h.splice(b, 1)
                }
            }
        }
    };
    g.onUnload(function() {
        h.forEach(function(a) {
            a.trace().addStringAnnotation("ended_early_because_page_is_unloading", "1"), a.finish(!0)
        })
    });
    e.exports = a
}), null);
__d("MDeepCopy", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        if (Array.isArray(a)) return i(a);
        else if (typeof a === "object" && a !== null) return h(a);
        else return a
    }

    function h(a) {
        var b = {};
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = g(a[c]));
        return b
    }

    function i(a) {
        a = a.slice();
        for (var b = 0; b < a.length; ++b) a[b] = g(a[b]);
        return a
    }
    e.exports = g
}), null);
__d("MRenderingScheduler", ["Arbiter", "Bootloader", "CallbackDependencyManager", "DOM", "ErrorUtils", "LogHistory", "MDeepCopy", "MRenderingSchedulerConfig", "PageEvents", "PageletEventConstsJS", "ServerJS", "Stratcom", "$", "bx", "captureUsageSnapshot", "ge", "gkx", "invariant", "ix", "performanceAbsoluteNow", "qex"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A) {
    __p && __p();

    function B(a, b) {
        a = {
            event: a,
            id: b.name,
            lid: b.serverlid,
            ts: z()
        };
        b.phase && (a.phase = b.phase);
        b.categories && (a.categories = b.categories);
        g.inform("pagelet_event", a, g.BEHAVIOR_PERSISTENT)
    }

    function C() {
        var a;
        (a = l.getInstance("scheduler")).log.apply(a, arguments)
    }

    function D() {
        "use strict";
        this.$2 = new i(), this.$3 = null, this.$4 = 0, this.$5 = [], this.$6 = [], this.$7 = [], this.$8 = {}, this.$10 = !1
    }
    D.getInstance = function() {
        "use strict";
        return D.$1 || (D.$1 = new D())
    };
    D.satisfyDependency = function(a) {
        "use strict";
        D.getInstance().$11(a)
    };
    D.prototype.$11 = function(a) {
        "use strict";
        this.$2.satisfyPersistentDependency(a)
    };
    D.prototype.$12 = function(a) {
        "use strict";
        a = this.$8[a];
        if (!a) return;
        a.displayResourcesBootloaded = !0;
        B(p.CSS_END, a.pageletConfig);
        this.$13()
    };
    D.prototype.$14 = function(a) {
        "use strict";
        __p && __p();
        a = this.$8[a];
        if (!a) return;
        a.normalResourcesBootloaded = !0;
        B(p.JS_END, a.pageletConfig);
        a = a.pageletConfig;
        var b = a.name;
        a = a.serverlid;
        this.$11(b + "_" + a + "_js_ready");
        this.$15()
    };
    D.prototype.$16 = function(a) {
        "use strict";
        __p && __p();
        var b = this.$8[a];
        b || x(0);
        b.displayResourcesBootloaded || x(0);
        var c = this.$6.findIndex(function(b) {
            return b.id === a
        });
        if (c === -1) return;
        var d = this.$6[c];
        this.$6.splice(c, 1);
        this.$17(d, b);
        this.$18(a)
    };
    D.prototype.$13 = function() {
        "use strict";
        __p && __p();
        while (this.$6.length) {
            var a = this.$6[0].id;
            a = this.$8[a];
            if (!a.displayResourcesBootloaded) break;
            var b = this.$6.shift();
            this.$17(b, a)
        }
        this.$15()
    };
    D.prototype.$17 = function(a, b) {
        "use strict";
        __p && __p();
        var c = a.pageletConfig,
            d = c.name,
            e = c.serverlid,
            f = a.callback,
            h = a.content,
            i = a.id;
        k.guard(function() {
            __p && __p();
            var a = v(i);
            if (a) {
                C("insert", d);
                j.setContent(a, h);
                a = [].map.call(a.getElementsByClassName("img"), function(a) {
                    return a.src || getComputedStyle(a).backgroundImage.slice(4, -1).replace(/[\'\"]/g, "")
                });
                g.inform("MRenderingScheduler/images_displayed", {
                    lid: e,
                    images: a,
                    pagelet: d,
                    ts: z()
                });
                b.insertedInDOM = !0;
                f();
                this.$2.satisfyPersistentDependency(i + "_displayed")
            } else C("discard", d), delete this.$8[i]
        }.bind(this), "scheduler")()
    };
    D.prototype.$18 = function(a) {
        "use strict";
        __p && __p();
        var b = this.$8[a];
        if (!b) {
            C("skip_js", this.$7[0].pageletConfig.name, "pagelet was discarded before JS processing");
            return
        }
        b.displayResourcesBootloaded || x(0);
        b.insertedInDOM || x(0);
        b = this.$7.findIndex(function(b) {
            return b.id === a
        });
        var c = this.$7[b];
        this.$7.splice(b, 1);
        if (!v(a)) {
            C("skip_js", c.pageletConfig.name, "document element " + a + " was missing, maybe due to a page transition");
            return
        }
        D.onPageletReady(c.pageletConfig);
        delete this.$8[a];
        this.$19()
    };
    D.prototype.$15 = function() {
        "use strict";
        __p && __p();
        while (this.$7.length) {
            var a = this.$7[0].id;
            if (!this.$8[a]) {
                C("skip_js", this.$7[0].pageletConfig.name, "pagelet was discarded before JS processing");
                this.$7.shift();
                continue
            }
            if (!this.$8[a].normalResourcesBootloaded || !this.$8[a].insertedInDOM) break;
            var b = this.$7.shift();
            if (!v(a)) {
                C("skip_js", b.pageletConfig.name, "document element " + a + " was missing, maybe due to a page transition");
                continue
            }
            D.onPageletReady(b.pageletConfig);
            delete this.$8[a];
            this.$19()
        }
    };
    D.onPageletReady = function(a) {
        "use strict";
        B(p.DISPLAY_START, a), C("load", a.name), y.add(a.ixData), t.add(a.bxData), w.add(a.gkxData), A.add(a.qexData), j.appendContent(s(a.templateContainer), a.templates), a.onload && new Function(a.onload)(), a.onafterload && new Function(a.onafterload)(), a.serverJSData && new q().handle(a.serverJSData), r.invoke("m:schedulable:loaded", null, a), B(p.DISPLAY_END, a)
    };
    D.preArrive = function(a) {
        "use strict";
        B(p.ARRIVE_START, a)
    };
    D.prototype.init = function(a, b) {
        "use strict";
        this.$9 = a, g.inform("MRenderingScheduler/init", {
            lid: a,
            arbiter: g,
            ts: z()
        }, g.BEHAVIOR_PERSISTENT), this.$20(a, b.ttiPagelets), this.$21(a)
    };
    D.prototype.schedule = function(a, b, c) {
        "use strict";
        __p && __p();
        var d = a.pageletConfig;
        c = a.displayResources;
        var e = a.normalResources,
            f = a.id;
        B(p.ARRIVE_END, d);
        var i = d.resource_map,
            j = d.bootloadable,
            k = d.name;
        (i || j) && (h.setResourceMap(i), h.enableBootload(j));
        C("schedule", k);
        g.inform("MRenderingScheduler/pageletSchedule", m(a), g.BEHAVIOR_PERSISTENT);
        i = babelHelpers["extends"]({
            callback: b
        }, a);
        this.$6.push(i);
        this.$7.push(i);
        this.$8[f] = {
            pageletConfig: d
        };
        this.$4++;
        B(p.SETUP, d);
        B(p.CSS_START, d);
        h.loadResources(c, function() {
            return this.$12(f)
        }.bind(this));
        j = function() {
            B(p.JS_START, d), h.loadResources(e, function() {
                return this.$14(f)
            }.bind(this))
        }.bind(this);
        n.delayNormalResources ? this.$2.registerCallback(j, [f + "_displayed", "tti_ready"]) : j()
    };
    D.prototype.addPostSchedulerFunction = function(a) {
        "use strict";
        this.$22() ? a() : this.$5.push(a)
    };
    D.prototype.$22 = function() {
        "use strict";
        return this.$3 === this.$4 && Object.keys(this.$8).length === 0
    };
    D.prototype.$19 = function() {
        "use strict";
        this.$22() && (g.inform("MRenderingScheduler/dd", {
            lid: this.$9,
            ts: z(),
            usageSnapshot: u()
        }, g.BEHAVIOR_PERSISTENT), this.$5.forEach(function(a) {
            return a()
        }), this.$5.length = 0)
    };
    D.prototype.$23 = function(a, b) {
        "use strict";
        var c = ["MCoreInit_js_ready"];
        b && (c = c.concat(b.map(function(b) {
            return b + "_" + a + "_display"
        })).concat(b.map(function(b) {
            return b + "_" + a + "_js_ready"
        })));
        return c
    };
    D.prototype.$20 = function(a, b) {
        "use strict";
        this.$2.registerCallback(function() {
            this.$10 || (this.$10 = !0, this.fireTTI(a))
        }.bind(this), this.$23(a, b))
    };
    D.prototype.$21 = function(a) {
        "use strict";
        g.subscribe(o.BIGPIPE_ONLOAD, function() {
            g.inform("MRenderingScheduler/e2e", {
                lid: a,
                ts: z()
            }, g.BEHAVIOR_PERSISTENT)
        })
    };
    D.prototype.setPageletCount = function(a) {
        "use strict";
        this.$3 = a, this.$19()
    };
    D.prototype.fireTTI = function(a) {
        "use strict";
        var b = z();
        g.inform("MRenderingScheduler/tti", {
            lid: a,
            ts: b,
            usageSnapshot: u()
        }, g.BEHAVIOR_PERSISTENT)
    };
    D.$1 = null;
    e.exports = D
}), null);
__d("pageID", [], (function(a, b, c, d, e, f) {
    e.exports = Math.floor(2147483648 * Math.random()).toString(36)
}), null);
__d("NavigationMetricsCore", ["mixInEventEmitter", "pageID"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = {
            NAVIGATION_DONE: "NAVIGATION_DONE",
            EVENT_OCCURRED: "EVENT_OCCURRED"
        },
        j = {
            tti: "tti",
            e2e: "e2e",
            all_pagelets_loaded: "all_pagelets_loaded",
            all_pagelets_displayed: "all_pagelets_displayed"
        },
        k = 0,
        l = {};

    function m() {
        "use strict";
        this.eventTimings = {
            tti: null,
            e2e: null,
            all_pagelets_loaded: null,
            all_pagelets_displayed: null
        }, this.lid = h + ":" + k++, this.extras = {}
    }
    m.prototype.getLID = function() {
        "use strict";
        return this.lid
    };
    m.prototype.setRequestStart = function(a) {
        "use strict";
        this.start = a;
        return this
    };
    m.prototype.setTTI = function(a) {
        "use strict";
        this.eventTimings.tti = a;
        this.$1(j.tti, a);
        return this
    };
    m.prototype.setE2E = function(a) {
        "use strict";
        this.eventTimings.e2e = a;
        this.$1(j.e2e, a);
        return this
    };
    m.prototype.setExtra = function(a, b) {
        "use strict";
        this.extras[a] = b;
        return this
    };
    m.prototype.setDisplayDone = function(a) {
        "use strict";
        this.eventTimings.all_pagelets_displayed = a;
        this.setExtra("all_pagelets_displayed", a);
        this.$1(j.all_pagelets_displayed, a);
        return this
    };
    m.prototype.setAllPageletsLoaded = function(a) {
        "use strict";
        this.eventTimings.all_pagelets_loaded = a;
        this.setExtra("all_pagelets_loaded", a);
        this.$1(j.all_pagelets_loaded, a);
        return this
    };
    m.prototype.setServerLID = function(a) {
        "use strict";
        this.serverLID = a;
        return this
    };
    m.prototype.$1 = function(event, a) {
        "use strict";
        var b = {};
        l != null && this.serverLID != null && l[this.serverLID] != null && (b = l[this.serverLID]);
        b = babelHelpers["extends"]({}, b, {
            event: event,
            timestamp: a
        });
        n.emitAndHold(i.EVENT_OCCURRED, this.serverLID, b);
        return this
    };
    m.prototype.doneNavigation = function() {
        "use strict";
        var a = babelHelpers["extends"]({
            start: this.start,
            extras: this.extras
        }, this.eventTimings);
        if (this.serverLID && l[this.serverLID]) {
            var b = this.serverLID;
            Object.assign(a, l[b]);
            delete l[b]
        }
        n.emitAndHold(i.NAVIGATION_DONE, this.lid, a)
    };
    var n = {
        Events: i,
        postPagelet: function(a, b, c) {},
        siteInit: function(a) {
            a(m)
        },
        setPage: function(a) {
            if (!a.serverLID) return;
            l[a.serverLID] = {
                page: a.page,
                pageType: a.page_type,
                pageURI: a.page_uri,
                serverLID: a.serverLID
            }
        },
        getFullPageLoadLid: function() {
            throw new Error("getFullPageLoadLid is not implemented on this site")
        }
    };
    g(n, i);
    e.exports = n
}), null);
__d("NavigationMetrics", ["Arbiter", "MRenderingScheduler", "NavigationMetricsCore", "PageEvents", "Stratcom", "gkx", "performance", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    __p && __p();
    var o = {};
    i.postPagelet = function(a, b, c) {
        o[c] || (o[c] = n()), h.satisfyDependency(b + "_" + c + "_display")
    };
    i.siteInit(function(a) {
        __p && __p();
        var b = new a();
        b.setRequestStart(m.timing && m.timing.navigationStart);

        function c(a, c, d, e) {
            __p && __p();
            g.subscribe(a, function(a, f) {
                __p && __p();
                b.setServerLID(f.lid), f.arbiter.subscribe(c, function(a, c) {
                    a = c.lid;
                    c = c.ts;
                    b.setTTI(c);
                    l("AT64OjP4oVuvstFjzbDT-bVZiPbiojG0zyjbyWGW5xqhWd5PV8lOQAaU0boVR7zf5v2SUGNGfZkpE7I19ksV-nLimTCJ0AgU9faj1FK9VMmZbw") || i.emitAndHold(i.Events.EVENT_OCCURRED, a, {
                        event: "tti",
                        timestamp: c
                    })
                }), f.arbiter.subscribe(d, function(a, c) {
                    a = c.ts;
                    b.setDisplayDone(a)
                }), g.subscribe(e, function(a, c) {
                    a = c.ts;
                    b.eventTimings.tti || b.setTTI(o[f.lid]);
                    b.setE2E(a).doneNavigation();
                    delete o[f.lid]
                })
            })
        }
        c("BigPipe/init", "tti_bigpipe", "all_pagelets_displayed", j.BIGPIPE_ONLOAD);
        c("MRenderingScheduler/init", "MRenderingScheduler/tti", "MRenderingScheduler/dd", "MRenderingScheduler/e2e");
        k.listen("m:page:loading", null, function() {
            b = new a(), b.setRequestStart(n())
        })
    });
    e.exports = i
}), 3);
__d("TimeSliceInteractionPageStatsHook", ["NavigationMetrics"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h, i = [];
    g.addRetroactiveListener(g.Events.NAVIGATION_DONE, function(a, b) {
        if (b.pageType !== "normal") return;
        h = {
            start: b.start,
            dd: b.all_pagelets_displayed,
            tti: b.tti,
            e2e: b.e2e
        };
        for (var a = 0; a < i.length; a++) {
            b = i[a];
            j(b);
            b.countDown()
        }
        i = []
    });

    function j(a) {
        h ? (a.trace().addStringAnnotation("page_start", "" + h.start), a.trace().addStringAnnotation("page_tti", "" + h.tti), a.trace().addStringAnnotation("page_dd", "" + h.dd), a.trace().addStringAnnotation("page_e2e", "" + h.e2e)) : (a.countUp(), i.push(a))
    }
    a = {
        registerInteraction: function(a) {
            j(a);
            return {
                remove: function() {
                    var b = i.indexOf(a);
                    b !== -1 && i.splice(b, 1)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionResourcesDataSource", ["SiteData", "TimeSliceInteractionExtraSaver"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            a.countDown(), a.registerOnBeforeFinish(function(a) {
                a.recordWithExtraSaver(h.RESOURCES_SAVER, "info", {
                    client_revision: g.client_revision,
                    pkg_cohort: g.pkg_cohort
                })
            })
        }
    };
    e.exports = a
}), null);
__d("BrowserEventBasedInteraction", ["Bootloader", "FBLogger", "PageDOMMutationObserver", "TimeSliceAutoclosedInteraction", "TimeSliceInteractionCancelHook", "TimeSliceInteractionEventHook", "TimeSliceInteractionLeaveHook", "TimeSliceInteractionPageStatsHook", "TimeSliceInteractionResourcesDataSource", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    "use strict";
    __p && __p();
    var q, r = [k, l, m, n];
    a = babelHelpers.inherits(s, j);
    q = a && a.prototype;

    function s(a, b, c) {
        __p && __p();
        q.constructor.call(this, "Event", [o]);
        this.$BrowserEventBasedInteraction2 = [];
        this.$BrowserEventBasedInteraction4 = null;
        this.$BrowserEventBasedInteraction5 = null;
        this.$BrowserEventBasedInteraction6 = null;
        this.$BrowserEventBasedInteraction7 = 0;
        this.$BrowserEventBasedInteraction8 = 0;
        this.$BrowserEventBasedInteraction1 = b;
        [].push.apply(this.$BrowserEventBasedInteraction2, a);
        this.setExtraSampleRate(c);
        var d = r.map(function(a) {
            a.registerInteraction(this)
        }.bind(this));
        this.registerOnCleanUp(function() {
            d.forEach(function(a) {
                return a && a.remove()
            })
        });
        this.registerOnBeforeSend(function() {
            this.trace().addVectorAnnotation("interaction_ids", this.$BrowserEventBasedInteraction2)
        }.bind(this));
        this.trace().addStringAnnotation("is_mutation_observer_supported", i.isSupported() ? "1" : "0")
    }
    s.prototype.getEventType = function() {
        return this.$BrowserEventBasedInteraction1
    };
    s.prototype.tagAsInteractionID = function(a) {
        this.$BrowserEventBasedInteraction2.push(a)
    };
    s.prototype.hasInteractionIDs = function(a) {
        __p && __p();
        for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var d;
            if (b) {
                if (c >= a.length) break;
                d = a[c++]
            } else {
                c = a.next();
                if (c.done) break;
                d = c.value
            }
            d = d;
            if (!this.$BrowserEventBasedInteraction2.includes(d)) return !1
        }
        return !0
    };
    s.prototype.addEagerExecution = function(a, b, c) {
        this.waitForReferenceCounter(a), this.addProfilingCounterAttribution(b), [].push.apply(this.$BrowserEventBasedInteraction2, c)
    };
    s.prototype.setManualStartAndEnd = function(a, b, c, d) {
        this.$BrowserEventBasedInteraction7++, this.$BrowserEventBasedInteraction8++, this.$BrowserEventBasedInteraction3 = a, this.$BrowserEventBasedInteraction4 = b, this.$BrowserEventBasedInteraction5 = c, this.$BrowserEventBasedInteraction6 = d, this.isEnabled() ? this.addManualInstrumentationData() : d || this.logManualInstrumentationData()
    };
    s.prototype.markManualStart = function(a, b) {
        this.$BrowserEventBasedInteraction7++, this.$BrowserEventBasedInteraction4 || (this.$BrowserEventBasedInteraction4 = b || p(), this.$BrowserEventBasedInteraction3 = a, this.isEnabled() && (this.countUp(), this.registerOnBeforeFinish(function() {
            this.addManualInstrumentationData()
        }.bind(this))))
    };
    s.prototype.markManualEnd = function(a) {
        if (!this.$BrowserEventBasedInteraction4) {
            h("event_profiler").warn("Attempting to mark end for interaction which never had start marked");
            return
        }
        this.$BrowserEventBasedInteraction8++;
        this.$BrowserEventBasedInteraction5 = a || p();
        this.$BrowserEventBasedInteraction6 = this.hasActiveReferenceCountingHandle();
        !this.isEnabled() && !this.$BrowserEventBasedInteraction6 ? this.logManualInstrumentationData() : this.isEnabled() && this.$BrowserEventBasedInteraction8 === 1 && this.countDown()
    };
    s.prototype.getManualInstrumentationData = function() {
        var a = {};
        this.$BrowserEventBasedInteraction4 && this.$BrowserEventBasedInteraction3 && (a.manual_instrumentation_start = "" + this.$BrowserEventBasedInteraction4, a.manual_instrumentation_marked_start_count = "" + this.$BrowserEventBasedInteraction7, a.manual_instrumentation_start_reference_counted = "1");
        this.$BrowserEventBasedInteraction5 && (a.manual_instrumentation_end = "" + this.$BrowserEventBasedInteraction5, a.manual_instrumentation_marked_end_count = "" + this.$BrowserEventBasedInteraction8, a.manual_instrumentation_end_reference_counted = this.$BrowserEventBasedInteraction6 ? "1" : "0");
        this.$BrowserEventBasedInteraction4 && this.$BrowserEventBasedInteraction5 && (a.manual_instrumentation_duration = "" + (this.$BrowserEventBasedInteraction5 - this.$BrowserEventBasedInteraction4));
        return a
    };
    s.prototype.addManualInstrumentationData = function() {
        var a = this.getManualInstrumentationData();
        Object.keys(a).forEach(function(b) {
            this.trace().addStringAnnotation(b, a[b])
        }.bind(this));
        this.trace().addVectorAnnotation("manual_instrumentation_interaction_ids", this.$BrowserEventBasedInteraction3 || []);
        a.manual_instrumentation_start && this.inform("manual_instrumentation_start", {
            ts: parseFloat(a.manual_instrumentation_start)
        }).addStringAnnotation("visual_role", "global_signpost");
        a.manual_instrumentation_end && this.inform("manual_instrumentation_end", {
            ts: parseFloat(a.manual_instrumentation_end)
        }).addStringAnnotation("visual_role", "global_signpost")
    };
    s.prototype.logManualInstrumentationData = function() {
        var a = this.$BrowserEventBasedInteraction3 || [],
            b = this.getManualInstrumentationData();
        b.lite_weight = "1";
        g.loadModules(["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"], function(c, d) {
            new c().setActionName("Event").setTraceAnnotations({
                stringProps: b,
                setProps: {},
                vectorProps: {
                    manual_instrumentation_interaction_ids: a,
                    interaction_ids: this.$BrowserEventBasedInteraction2
                }
            }).updateData(d.getCommonData()).logVital()
        }.bind(this), "BrowserEventBasedInteraction")
    };
    s.prototype.getActiveBrowserEventBasedInteractions = function() {
        return j.getInteractionsActiveRightNow().filter(function(a) {
            return a instanceof s
        })
    };
    e.exports = s
}), null);
__d("EventProfilerAdsSessionProvider", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        sessionID: null
    }
}), null);
__d("EventProfilerEagerExecution", ["EventConfig", "FBLogger", "ProfilingCounters", "TimeSliceReferenceCounting"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    __p && __p();
    var k = 0,
        l = {},
        m = 0,
        n = {};

    function o(a, b, c) {
        __p && __p();
        this.interaction = null;
        this.$2 = [];
        this.$3 = [];
        this.$4 = [];
        this.$5 = [];
        this.id = m++;
        this.$6 = a;
        for (var c = 0; c < a.length; c++) n[a[c]] && h("event_profiler").blameToPreviousDirectory().mustfix("Declaring multiple eager executions for the same interaction not supported: %s", a[c]), n[a[c]] = this;
        c = "eagerly_executed_tree_" + ++k;
        g.profile_eager_execution && (this.handle = j.onAllChildrenFinished(function() {
            this.finish()
        }.bind(this), b !== 0), b && i.currentContext().addAttribution(c, i.AttributionPropagation.ONLY_ON_CONTINUATIONS));
        this.sampleWeight = b;
        this.$1 = c;
        l[this.id] = this
    }
    o.prototype.hasInteractionIDs = function(a) {
        __p && __p();
        for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var d;
            if (b) {
                if (c >= a.length) break;
                d = a[c++]
            } else {
                c = a.next();
                if (c.done) break;
                d = c.value
            }
            d = d;
            if (!this.$6.includes(d)) return !1
        }
        return !0
    };
    o.prototype.__registerInteractionWePotentiallyEagerlyExecutedFor = function(a) {
        this.$2.push(a)
    };
    o.prototype.attributeToCurrentlyActiveInteraction = function() {
        __p && __p();
        var a = this,
            b = this.handle;
        if (!b) return;
        var c = function() {
            __p && __p();
            if (e) {
                if (f >= d.length) return "break";
                g = d[f++]
            } else {
                f = d.next();
                if (f.done) return "break";
                g = f.value
            }
            var c = g;
            if (c.hasActiveReferenceCountingHandle()) {
                c.addEagerExecution(b, a.$1, a.$3.slice());
                a.interaction = c;
                a.$4.forEach(function(a) {
                    return a(c)
                });
                a.$4 = [];
                return "break"
            }
        };
        for (var d = this.$2, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g, h = c();
            if (h === "break") break
        }
    };
    o.prototype.tagAsInteractionID = function(a) {
        this.$3.push(a)
    };
    o.prototype.withInteraction = function(a) {
        !this.interaction ? this.$4.push(a) : a(this.interaction)
    };
    o.prototype.isActive = function() {
        return !!(this.handle && this.handle.isInsideContinuationExecution())
    };
    o.prototype.onFinish = function(a) {
        this.$5.push(a)
    };
    o.prototype.finish = function() {
        delete l[this.id], this.$5.forEach(function(a) {
            return a()
        }), this.$5 = []
    };
    a = {
        declareEagerExecution: function(a, b, c) {
            a = new o(a, c, b);
            var d = a.id;
            return function() {
                l[d] && l[d].attributeToCurrentlyActiveInteraction()
            }
        },
        getEagerExecution: function(a, b) {
            var c = a.map(function(a) {
                return n[a]
            }).filter(function(b) {
                return b && b.hasInteractionIDs(a)
            });
            b = c.filter(function(a, b) {
                return b === c.indexOf(a)
            });
            return b.length == 1 ? b[0] : null
        },
        getActiveExecutions: function() {
            return Object.values(l).filter(function(a) {
                return a.handle && a.handle.isInsideContinuationExecution()
            })
        }
    };
    e.exports = a
}), null);
__d("EventProfilerInteractionTracker", ["Bootloader", "BrowserEventBasedInteraction", "EventProfilerEagerExecution", "EventConfig", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    "use strict";
    __p && __p();
    var l = [],
        m = j.profile_eager_execution && j.manual_instrumentation;
    a = {
        createNewInteraction: function(a, b, c, d) {
            __p && __p();
            if (!a.length) return null;
            var e = d && d.sampleWeight || 0,
                f;
            (m || c || e) && (f = new h(a, b, 1 / (e || c)));
            if (f && d) {
                var g = d;
                g.__registerInteractionWePotentiallyEagerlyExecutedFor(f);
                f.registerOnBeforeSend(function() {
                    f && f !== g.interaction && (c ? f.setExtraSampleRate(1 / c) : f.disable())
                })
            }
            if (f) {
                var i = f;
                l.push(f);
                f.onReferenceCountedExecutionFinished(function() {
                    var a = l.indexOf(i);
                    a !== -1 && l.splice(a, 1)
                })
            }
            e === 0 && c === 0 && f && f.disable();
            return c === 0 ? null : f
        },
        markManualStart: function(a, b, c) {
            __p && __p();
            if (!m) return {
                markManualEnd: function() {}
            };
            var d = l.filter(function(c) {
                    return c.hasInteractionIDs(a) && c.getEventType() === b
                }),
                e = i.getActiveExecutions();
            if (d.length === 1) return n(d[0], a, c);
            else if (e.length === 1) return q(e[0], a, c);
            else {
                d.forEach(function(a) {
                    a.trace().addStringAnnotation("has_manual_instrumentation_conflict", "1")
                });
                return o(a, d.length + e.length, c)
            }
        }
    };

    function n(a, b, c) {
        a.markManualStart(b, c);
        return {
            markManualEnd: function(b) {
                a.markManualEnd(b)
            }
        }
    }

    function o(a, b, c) {
        var d = c || k();
        return {
            markManualEnd: function(c) {
                c = c || k();
                p(d, c, a, b)
            }
        }
    }

    function p(a, b, c, d) {
        var e = {
            manual_instrumentation_start: "" + a,
            manual_instrumentation_end: "" + b,
            manual_instrumentation_duration: "" + (b - a),
            manual_instrumentation_start_reference_counted: "0",
            manual_instrumentation_end_reference_counted: "0",
            lite_weight: "1"
        };
        d && (e.manual_instrumentation_conflicts = "" + d);
        g.loadModules(["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"], function(a, b) {
            new a().setActionName("Event").setTraceAnnotations({
                stringProps: e,
                setProps: {},
                vectorProps: {
                    manual_instrumentation_interaction_ids: c
                }
            }).updateData(b.getCommonData()).logVital()
        }, "EventProfilerInteractionTracker")
    }

    function q(a, b, c) {
        __p && __p();
        var d = c || k(),
            e, f, g, h = !1;

        function i() {
            e && f !== undefined && !h && g !== undefined && (h = !0, f ? f.setManualStartAndEnd(b, d, e, g) : p(d, e, b))
        }
        var j;
        a.withInteraction(function(a) {
            j = a, a.onReferenceCountedExecutionFinished(function() {
                a.hasInteractionIDs(b) ? f = a : f = null, i()
            })
        });
        a.onFinish(function() {
            j || (f = !1, i())
        });
        return {
            markManualEnd: function(b) {
                if (e) return;
                g = a.isActive() || j && j.hasActiveReferenceCountingHandle() || !1;
                e = b || k();
                i()
            }
        }
    }
    e.exports = a
}), null);
__d("EventProfilerSampler", ["EventConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = g.interaction_boost,
        i = g.event_types,
        j = g.sampling || {},
        k = g.page_sampling_boost || 1,
        l = [];
    Object.keys(g.interaction_regexes).forEach(function(a) {
        l.push({
            id: a,
            regex: new RegExp(g.interaction_regexes[a])
        })
    });
    a = "click";
    b = "mouseup";
    var m = [a, b],
        n = a;
    c = {
        canSample: function(a) {
            return !!j[a]
        },
        getEventSampleWeights: function(event, a) {
            event.__samplingWeights == undefined && (event.__samplingWeights = {
                interaction: o(this.getInteractionWeight(event, a)),
                event: o(this.getEventWeight(event))
            });
            return event.__samplingWeights
        },
        getInteractionWeight: function(event, a) {
            __p && __p();
            var b = event.type in j ? j[event.type] : 1;
            if (!b || !a || !a.length) return 0;
            var c = 1;
            for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= a.length) break;
                    f = a[e++]
                } else {
                    e = a.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                if (h[f]) {
                    c = h[f];
                    break
                }
            }
            return b * j.__interactionDefault / c
        },
        getEventWeight: function(event) {
            var a = event.type in j ? j[event.type] : 1;
            a /= k;
            return a * j.__eventDefault
        },
        getEventInteractionIDs: function(a, b) {
            __p && __p();
            if (m.indexOf(a) === -1) return [];
            var c = [];
            for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= b.length) break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                for (var g = 0; g < l.length; g++) {
                    var h = l[g];
                    if (h.regex.test(f)) {
                        var j = i[h.id];
                        if (j) {
                            if (j.indexOf(a) === -1) continue
                        } else if (a !== n) continue;
                        c.push(h.id)
                    }
                }
            }
            return c
        }
    };

    function o(a) {
        if (a === 0) return 0;
        var b = j.__min || 1;
        a = Math.round(Math.max(b, a));
        return Math.random() * a < 1 ? a : 0
    }
    e.exports = c
}), null);
__d("SubscriptionList", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a(a, b) {
        "use strict";
        this.$1 = [], this.$2 = a, this.$3 = b
    }
    a.prototype.add = function(a) {
        "use strict";
        var b = {
            callback: a
        };
        this.$1.push(b);
        this.$2 && this.$1.length === 1 && this.$2();
        return {
            remove: function() {
                var a = this.$1.indexOf(b);
                a !== -1 || g(0);
                this.$1.splice(a, 1);
                this.$3 && this.$1.length === 0 && this.$3()
            }.bind(this)
        }
    };
    a.prototype.getCallbacks = function() {
        "use strict";
        return this.$1.map(function(a) {
            return a.callback
        })
    };
    a.prototype.fireCallbacks = function(a) {
        "use strict";
        this.getCallbacks().forEach(function(b) {
            b(a)
        })
    };
    e.exports = a
}), null);
__d("TimeSpentPageTransitionCause", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        PAGE_LOAD: "load",
        PAGE_UNLOAD: "unload",
        TRANSITION: "transition",
        OPEN_OVERLAY_VIEW: "open_overlay_view",
        REPLACE_OVERLAY_VIEW: "replace_overlay_view",
        CLOSE_OVERLAY_VIEW: "close_overlay_view"
    })
}), null);
__d("WebStorage", ["FBLogger", "ex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = {},
        j = {};

    function k(a, b, c) {
        Object.prototype.hasOwnProperty.call(i, c) || (i[c] = b(c));
        return i[c]
    }

    function l(a) {
        try {
            return window[a]
        } catch (a) {
            g("web_storage").warn("Failed to get storage for read %s", a.message)
        }
        return null
    }

    function m(a) {
        __p && __p();
        try {
            a = window[a];
            if (a) {
                var b = "__test__" + Date.now();
                a.setItem(b, "");
                a.removeItem(b)
            }
            return a
        } catch (a) {
            g("web_storage").warn("Failed to get storage %s", a.message)
        }
        return null
    }

    function n(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
        return b
    }

    function a(a, b, c) {
        __p && __p();
        if (a == null) return new Error("storage cannot be null");
        var d = null;
        try {
            a.setItem(b, c)
        } catch (f) {
            var e = n(a).map(function(b) {
                var c = (a.getItem(b) || "").length;
                return b + "(" + c + ")"
            });
            d = new Error(h("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", f.name ? f.name + ": " : "", b, c.length, e.join()));
            g("web_storage").catching(d).mustfix("Error set item")
        }
        return d
    }
    b = {
        getLocalStorage: function() {
            return k(i, m, "localStorage")
        },
        getSessionStorage: function() {
            return k(i, m, "sessionStorage")
        },
        getLocalStorageForRead: function() {
            return k(j, l, "localStorage")
        },
        getSessionStorageForRead: function() {
            return k(j, l, "sessionStorage")
        },
        setItemGuarded: a
    };
    e.exports = b
}), null);
__d("isInIframe", [], (function(a, b, c, d, e, f) {
    var g = window != window.top;

    function a() {
        return g
    }
    e.exports = a
}), null);
__d("ScriptPath", ["ErrorUtils", "SubscriptionList", "TimeSlice", "TimeSpentPageTransitionCause", "WebStorage", "isInIframe"], (function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    __p && __p();
    var m = "sp_pi",
        n = 1e3 * 30,
        o = null,
        p = null,
        q = new h(),
        r = null,
        s = [],
        t = i.guard(function(a, b) {
            q.getCallbacks().forEach(function(c) {
                g.applyWithGuard(function() {
                    c({
                        source: o,
                        dest: p,
                        cause: a,
                        extraData: b
                    })
                })
            })
        }, "ScriptPath Notifying callbacks", {
            propagationType: i.PropagationType.ORPHAN
        });

    function u() {
        return p ? p.scriptPath : undefined
    }

    function v() {
        var a = k.getSessionStorage();
        if (!a || l()) return;
        a.setItem(m, JSON.stringify({
            pageInfo: p,
            clickPoint: r,
            time: Date.now()
        }))
    }

    function a() {
        var a = k.getSessionStorageForRead();
        if (!a) return;
        var b = a.getItem(m);
        if (b) {
            b = JSON.parse(b);
            b && (b.time < Date.now() - n && (a = k.getSessionStorage(), a && a.removeItem(m)), p = b.pageInfo, r = b.clickPoint, p && (p.restored = !0))
        }
    }
    a();
    b = {
        set: function(a, b, c) {
            o = p, p = {
                scriptPath: a,
                categoryToken: b,
                extraData: c || {}
            }, s = [], window._script_path = a, t()
        },
        openOverlayView: function(a, b, c) {
            if (!a) return;
            var d = s.length;
            (d === 0 || s[d - 1] !== a) && (o = Object.assign({}, p), p && (p.topViewEndpoint = a), c && c.replaceTopOverlay && d > 0 ? (s[d - 1] = a, t(j.REPLACE_OVERLAY_VIEW, b)) : (s.push(a), t(j.OPEN_OVERLAY_VIEW, b)))
        },
        closeOverlayView: function(a, b) {
            a = s.lastIndexOf(a);
            if (a === -1) return;
            o = Object.assign({}, p);
            p && (a > 0 ? p.topViewEndpoint = s[a - 1] : p.topViewEndpoint = null);
            s = s.slice(0, a);
            t(j.CLOSE_OVERLAY_VIEW, b)
        },
        setClickPointInfo: function(a) {
            r = a, v()
        },
        getClickPointInfo: function() {
            return r
        },
        getScriptPath: u,
        getCategoryToken: function() {
            return p ? p.categoryToken : undefined
        },
        getEarlyFlushPage: function() {
            var a;
            return (a = p) == null ? void 0 : (a = a.extraData) == null ? void 0 : a.ef_page
        },
        getTopViewEndpoint: function() {
            var a = s.length;
            return a > 0 ? s[a - 1] : u()
        },
        getPageInfo: function() {
            return p
        },
        getSourcePageInfo: function() {
            return o
        },
        subscribe: function(a) {
            return q.add(i.guard(a, "ScriptPath.subscribe"))
        },
        shutdown: function() {
            v()
        }
    };
    e.exports = b
}), null);
__d("cx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("cx: Unexpected class transformation.")
    }
    e.exports = a
}), null);
__d("getParentClassesForEventProfiler", ["cx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function h(a) {
        __p && __p();
        if (!a || !(a instanceof HTMLElement)) return "";
        var b = a.id,
            c = a.nodeName,
            d = a.getAttribute("class");
        c = c ? c.replace(/^#/, "") : "unknown";
        b = b ? "#" + b : "";
        d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
        if (a.getAttribute("rel") === "theater") {
            a = "_342u";
            d = d.length ? d + " " + a : a
        }
        return ":" + c + b + d
    }

    function a(a) {
        var b = [];
        while (a && a instanceof HTMLElement) b.push(h(a)), a = a.parentElement;
        b.reverse();
        return b
    }
    e.exports = a
}), null);
__d("EventProfiler", ["Arbiter", "Bootloader", "BrowserEventBasedInteraction", "CurrentEventMeta", "EventConfig", "EventProfilerAdsSessionProvider", "EventProfilerEagerExecution", "EventProfilerInteractionTracker", "EventProfilerSampler", "Parent", "ScriptPath", "TimeSlice", "TimeSliceAutoclosedInteraction", "UserAgent", "getParentClassesForEventProfiler", "performanceAbsoluteNow", "requestAnimationFrameAcrossTransitions", "setTimeoutAcrossTransitions", "uniqueID"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    __p && __p();
    var z = {},
        A = {},
        B = {},
        C = !0,
        D = new Set(["click", "keydown", "mousewheel", "scroll"]),
        E = null,
        F = null,
        G = function(a, b) {},
        H = null,
        I = null,
        J = !1;
    g.subscribe("perf_nub_interaction_trace", function(a, b) {
        J = !0
    });
    var K = {
        __wrapEventListenHandler: function(a) {
            __p && __p();
            return k.disable_event_profiler ? a : function(b, event) {
                __p && __p();
                if (!o.canSample(b)) return a.call(this, b, event);
                var c, d = {
                        interaction: 0,
                        event: 0
                    },
                    e = v();
                event.id = event.id || y();
                var f = event.id;
                j.__setCurrentEventID(f);
                var g = B[f],
                    h = null;
                if (A[f] === undefined && !g) {
                    h = u(event.target);
                    var i = o.getEventInteractionIDs(b, h);
                    c = m.getEagerExecution(i, b);
                    J && b === "click" ? (i.push("PerfNubTrace"), d = {
                        interaction: 1,
                        event: 1
                    }, J = !1) : d = o.getEventSampleWeights(event, i);
                    E = n.createNewInteraction(i, b, d.interaction, c);
                    i = a.call(this, b, event);
                    B[f] = r.getGuardedContinuation("Event Bubble Continuation")
                } else d = o.getEventSampleWeights(event, []), i = g(function() {
                    B[f] = r.getGuardedContinuation("Event Bubble Continuation");
                    return a.call(this, b, event)
                }.bind(this));
                c = v();
                if (A[f] === undefined) {
                    h = h;
                    g = M(event);
                    g = g || e;
                    var k = Math.max(e - g, 0),
                        p = N(event.target, "data-referrer"),
                        s = null;
                    t.isBrowser("Chrome") && (s = !!event.cancelable);
                    var I = s && (!!event.deliberateSync || t.isBrowser("Chrome < 51"));
                    A[f] = {
                        event_name: b,
                        event_start_ms: Math.round(g),
                        main_thread_wait_ms: Math.round(k),
                        event_handlers_runtime_ms: 0,
                        script_path: q.getScriptPath() || "<unknown>",
                        request_animation_frame_wait_ms: 0,
                        set_timeout_wait_ms: 0
                    };
                    z[f] = {
                        event_target_raw: h,
                        weight: d.event,
                        cancelable: s,
                        deliberate_sync: I,
                        ad_account_id: F,
                        event_end_ms: 0
                    };
                    g = l.sessionID;
                    g && (z[f].ads_session_id = g);
                    H != null && H(z[f]);
                    D.has(b) && (z[f].is_first_in_frame = C, C = !1, G(b, event.target));
                    if (E) {
                        k = E.trace();
                        k.addVectorAnnotation("event_target_stack", h).addVectorAnnotation("pagelets", p)
                    }
                    var K = E;
                    w(function() {
                        __p && __p();
                        E = null;
                        var a = v();
                        A[f].request_animation_frame_wait_ms = Math.round(a - z[f].event_end_ms);
                        delete z[f].event_end_ms;
                        x(function() {
                            __p && __p();
                            x(function() {
                                C = !0
                            }, 50);
                            var b = v();
                            A[f].set_timeout_wait_ms = Math.round(b - a);
                            L(f, e, b);
                            b = B[f];
                            b && (r.cancel(b), delete B[f]);
                            K && K.inform("TTI", {
                                isPointOfInterest: !0
                            });
                            delete A[f];
                            delete z[f]
                        }, 0)
                    })
                }
                A[f].event_handlers_runtime_ms += c - e;
                z[f].event_end_ms = c;
                j.__setCurrentEventID(null);
                E && E.informPointWithOverride("tti_ts", {
                    isPointOfInterest: !0
                });
                return i
            }
        },
        tagCurrentActiveInteractionsAs: function(a) {
            K.getActiveInteractions().forEach(function(b) {
                b.tagAsInteractionID(a)
            }), m.getActiveExecutions().forEach(function(b) {
                return b.tagAsInteractionID(a)
            })
        },
        informManualInteractionTimestamp: function(a, b, c) {},
        markManualStart: function(a, b, c) {
            return n.markManualStart(a, b, c)
        },
        getActiveInteractions: function() {
            return s.getInteractionsActiveRightNow().filter(function(a) {
                return a instanceof i && a.isEnabled()
            })
        },
        informPointOnActiveInteractions: function(a, b, c) {
            K.getActiveInteractions().map(function(d) {
                d = d.inform(a, b);
                c && d.addStringAnnotation("is_goal_point", "1")
            })
        },
        notifyRunningEagerInteraction: function(a, b) {
            var c = o.getEventSampleWeights({
                type: b
            }, a);
            return m.declareEagerExecution(a, b, c.interaction)
        },
        setCurrentAdAccountId: function(a) {
            F = a
        },
        setAdsEventListener: function(a) {
            G = a
        },
        setApplyAdsLoggingFields: function(a) {
            H = a
        },
        setAdsLogInteraction: function(a) {
            I = a
        }
    };

    function L(a, b, c) {
        b = A[a];
        b.event_handlers_runtime_ms = Math.round(b.event_handlers_runtime_ms);
        var d = Object.assign({}, A[a], z[a]);
        I != null && I(d);
        d.weight && h.loadModules(["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"], function(a, b) {
            b.addCommonValues(d), new a().updateData(d).log()
        }, "EventProfiler");
        j.__informEventDataReady(a, A[a])
    }
    var M = function() {
        function b(event) {
            return null
        }
        if (!a.performance || !a.performance.now || !a.performance.timing || !a.performance.timing.navigationStart) return b;
        var c = a.performance.timing.navigationStart,
            d = a.CustomEvent && (typeof a.CustomEvent === "function" || a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
        d = d ? new a.CustomEvent("test").timeStamp : a.document.createEvent("KeyboardEvent").timeStamp;
        return d && d <= a.performance.now() ? function(event) {
            return event.timeStamp + c
        } : b
    }();

    function N(a, b) {
        var c = [];
        while (a && a instanceof HTMLElement) {
            var d = a.getAttribute(b);
            d && c.push(d);
            a = p.byAttribute(a.parentNode, b)
        }
        return c.reverse()
    }
    e.exports = K
}), null);
__d("DOMEventProfilingHook", ["DOM", "EventProfiler"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = g.listen;
    g.listen = function(a, b, c, d) {
        var e = function(event) {
            if (!event.getRawEvent() || event.getType() !== "click") d(event);
            else {
                var a = h.__wrapEventListenHandler(function() {
                    return d(event)
                });
                a(event.getType(), event.getRawEvent())
            }
        };
        return i.call(g, a, b, c, e)
    };
    e.exports = null
}), null);
__d("DeadImage", [], (function(a, b, c, d, e, f) {
    window.addEventListener("error", function(a) {
        a.target && a.target.nodeName == "IMG" && (a.target.src = "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")
    }, !0)
}), null);
__d("createDeprecatedProperties", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        return function(b) {
            this[a] = b;
            return this
        }
    }

    function h(a) {
        return function(b) {
            return this[a]
        }
    }

    function a(a, b) {
        a = a.prototype;
        for (var c in b) {
            var d = c.charAt(0).toUpperCase() + c.substr(1),
                e = "__auto__" + c;
            a[e] = b[c];
            a["set" + d] = g(e);
            a["get" + d] = h(e)
        }
    }
    e.exports = a
}), null);
__d("MViewportConstraint", ["Stratcom", "createDeprecatedProperties"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = document.createElement("div");
    i.style.paddingBottom = "max(0px, env(safe-area-inset-bottom))";

    function j() {
        document.body.appendChild(i);
        var a = parseInt(window.getComputedStyle(i).paddingBottom, 10);
        document.body.removeChild(i);
        return a
    }

    function k(a, b) {
        "use strict";
        k.constraints.push(this), this.setExact(b), this.setValue(a)
    }
    k.prototype.release = function() {
        "use strict";
        var a = k.constraints.indexOf(this);
        k.constraints.splice(a, 1);
        g.invoke("mviewport:update")
    };
    k.prototype.getValue = function() {
        "use strict";
        return this._value
    };
    k.prototype.setValue = function(a) {
        "use strict";
        this.getValue() !== a && (this._value = a, g.invoke("mviewport:update"))
    };
    k.getCalculatedStyles = function(a) {
        "use strict";
        __p && __p();
        var b = 0,
            c = k.constraints,
            d = c.length,
            e = j();
        while (d--) {
            var f = c[d];
            if (f.getExact()) {
                var g = Math.max(a, f.getValue());
                b = Math.max(b, f.getValue());
                var h = "";
                (g === a || b && b === g) && (h = g + "px");
                return {
                    height: h + e,
                    maxHeight: g + e + "px",
                    minHeight: b + e + "px"
                }
            }
            b = Math.max(b, f.getValue())
        }
        return {
            height: "",
            maxHeight: "",
            minHeight: Math.max(a, b) + e + "px"
        }
    };
    h(k, {
        exact: !1
    });
    Object.assign(k, {
        constraints: []
    });
    e.exports = k
}), null);
__d("WebPixelRatio", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        get: function() {
            var a = null;
            (navigator.userAgent.indexOf("Firefox") !== -1 || !window.devicePixelRatio && navigator.userAgent.indexOf("Windows Phone") !== -1) && (a = screen.width / document.documentElement.offsetWidth, a = Math.max(1, Math.floor(a * 2) / 2));
            (!a || a === 1) && navigator.userAgent.indexOf("IEMobile") !== -1 && (a = Math.sqrt(screen.deviceXDPI * screen.deviceYDPI) / 96, a = Math.max(1, Math.round(a * 2) / 2));
            return a || window.devicePixelRatio || 1
        }
    };
    e.exports = a
}), null);
__d("cancelAnimationFramePolyfill", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeCancelAnimationFrame || a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.oCancelAnimationFrame || a.msCancelAnimationFrame || a.clearTimeout;
    e.exports = b
}), null);
__d("cancelAnimationFrame", ["Env", "TimerStorage", "TimeSlice", "cancelAnimationFramePolyfill", "requestAnimationFrameAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j) {
    __p && __p();
    var k = h.ANIMATION_FRAME;

    function a(a) {
        if (a != null)
            if (g.gk_raf_flush) b("requestAnimationFrameAcrossTransitions").cancelVirtualRAF(a);
            else {
                h.unset(k, a);
                var c = k + String(a);
                i.cancelWithToken(c)
            }
        j(a)
    }
    e.exports = a
}), null);
__d("camelize", [], (function(a, b, c, d, e, f) {
    var g = /-(.)/g;

    function a(a) {
        return a.replace(g, function(a, b) {
            return b.toUpperCase()
        })
    }
    e.exports = a
}), null);
__d("hyphenate", [], (function(a, b, c, d, e, f) {
    var g = /([A-Z])/g;

    function a(a) {
        return a.replace(g, "-$1").toLowerCase()
    }
    e.exports = a
}), null);
__d("getStyleProperty", ["camelize", "hyphenate"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();

    function i(a) {
        return a == null ? a : String(a)
    }

    function a(a, b) {
        __p && __p();
        var c;
        if (window.getComputedStyle) {
            c = window.getComputedStyle(a, null);
            if (c) return i(c.getPropertyValue(h(b)))
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            c = document.defaultView.getComputedStyle(a, null);
            if (c) return i(c.getPropertyValue(h(b)));
            if (b === "display") return "none"
        }
        return a.currentStyle ? b === "float" ? i(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : i(a.currentStyle[g(b)]) : i(a.style && a.style[g(b)])
    }
    e.exports = a
}), null);
__d("getOuterHeight", ["getStyleProperty"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = 0;
        ["height", "margin-top", "margin-bottom", "padding-top", "padding-bottom"].forEach(function(c) {
            b += parseInt(g(a, c), 10)
        });
        return b
    }
    e.exports = a
}), null);
__d("setTimeoutWithRetries", ["setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function(a, b, c, d) {
        __p && __p();
        d = d;
        d || (d = {
            startImmediatly: !1,
            maxRetries: 3
        });
        var e = d.startImmediatly || !1,
            f = d.maxRetries;
        (f === null || f === undefined) && (f = 3);
        var h = Math.max(0, f || 0),
            i = d.acrossTransitions || !1,
            j = Math.max(b || 0, 0),
            k = 0,
            l = null;
        f = function b() {
            c() ? a() : k < h && (k++, i ? l = g(b, j) : l = setTimeout(b, j))
        };
        e ? f() : i ? l = g(f, j) : l = setTimeout(f, j);
        var m = !1;
        return function() {
            l && !m && clearTimeout(l), m = !0
        }
    };
    e.exports = a
}), null);
__d("MViewport", ["DOM", "MJSEnvironment", "MViewportConstraint", "Stratcom", "URI", "Vector", "WebPixelRatio", "cancelAnimationFrame", "ge", "getOuterHeight", "getStyleProperty", "isInIframe", "nullthrows", "requestAnimationFrame", "setTimeoutWithRetries"], (function(a, b, c, d, e, f, g, aa, h, i, ba, j, ca, k, l, da, m, ea, n, fa, ga) {
    __p && __p();
    var o = !1,
        p = location.pathname.replace(/^\/v\d+\.\d\d?/, ""),
        ha = /^\/plugins\//.test(p),
        ia = /^\/dialog\//.test(p),
        ja = /^\/dialog\/share/.test(p),
        ka = /^\/dialog\/oauth/.test(p),
        q = window.parent !== window,
        r = window.APP_ENABLED || window.FW_ENABLED;
    p = navigator.userAgent;
    var s = /iPod/.test(p),
        t = /iPhone/.test(p),
        u = /iPad/.test(p),
        v = t || u || s,
        w = v && /Safari/.test(p);
    t = v && p.match(/OS ([0-9]+)/);
    s = v && t && t.length > 1 && parseInt(t[1], 10) >= 7;
    var x = aa.IS_ANDROID,
        y = /Chrome/.test(p),
        z = /Windows Phone/.test(p),
        A = !ia && (!r && w && !u && !s || !r && x),
        B, C = 0,
        D = 0,
        E = 0,
        F, G = 0,
        H = 0,
        I, J, K = n(document.documentElement),
        L, la = 44,
        ma = 44,
        na = 56;

    function b() {
        __p && __p();
        if (o) return;
        o = !0;
        J = n(document.body);
        K = n(document.documentElement);
        i.listen("m:root:render", null, M);
        i.listen("mviewport:update", null, M);
        i.listen("mviewport:force-update", null, oa);
        z && window.matchMedia && (window.orientation = window.matchMedia("(orientation:portrait)").matches ? 0 : 90);
        Z();
        !v && !S() && Q() > P() && (G = 1);
        if (ea()) {
            var a = new ba(window.location.href).getQueryData();
            a = parseInt(a.parent_height, 10);
            a && (D = a)
        }
        window.screen.mozOrientation ? window.screen.addEventListener("mozorientationchange", ya) : window.addEventListener("orientationchange", ya);
        z && window.matchMedia && (window.matchMedia("(orientation:landscape)").addListener(za), window.matchMedia("(orientation:portrait)").addListener(za));
        window.addEventListener("resize", Aa);
        O();
        A && T(0, 1)
    }

    function c(a) {
        return new h(a, !0)
    }

    function d(a) {
        return new h(a, !1)
    }

    function f(a) {
        J.appendChild(a)
    }

    function M() {
        L && k(L), L = fa(O)
    }

    function oa() {
        L && k(L), O()
    }

    function N(a, b) {
        for (var a = a; a; a = a.offsetParent) b -= a.offsetTop, b -= parseInt(m(a, "padding-bottom"), 10), b -= parseInt(m(a, "border-bottom"), 10), b -= parseInt(m(a, "margin-bottom"), 10);
        return Math.max(b, 0)
    }

    function O() {
        __p && __p();
        L = null;
        var a = l("root"),
            b = l("viewport");
        if (ha || ja && q) a && (a.style.minHeight = "0"), b && (b.style.minHeight = "0"), J.style.minHeight = "0", J.style.paddingBottom = "0";
        else if (!q) {
            var c;
            A ? c = Math.max(P(), R()) : c = P();
            var d = h.getCalculatedStyles(c),
                e = babelHelpers["extends"]({}, d);
            e.minHeight = parseInt(e.minHeight, 10) - qa() + "px";
            a && Object.assign(a.style, e);
            b && Object.assign(b.style, d);
            Object.assign(J.style, d);
            i.invoke("m:viewport:update", null, d)
        } else {
            e = P();
            a && (a.style.minHeight = N(a, e) + "px");
            b && (b.style.minHeight = N(b, e) + "px");
            J.style.minHeight = e + "px";
            i.invoke("m:viewport:iframe-update-complete")
        }
        c !== undefined && H !== undefined && (c > H ? i.invoke("m:viewport:resize-taller") : i.invoke("m:viewport:resize-shorter"));
        H = c;
        i.invoke("m:viewport:update-complete", null, d)
    }

    function P() {
        if (C) return C;
        return D ? D : window.innerHeight
    }

    function Q() {
        return K.offsetWidth
    }

    function pa() {
        var a = l("viewport");
        if (a.getBoundingClientRect) return a.getBoundingClientRect();
        a = P();
        var b = Q();
        return {
            bottom: a,
            height: a,
            left: 0,
            top: 0,
            right: b,
            width: b
        }
    }

    function R() {
        __p && __p();
        if (q || r) return P();
        if (x && !y) return window.outerHeight / ca.get();
        else if (w) {
            var a = B ? screen.availWidth : screen.availHeight;
            a -= B ? na : ma;
            return a
        } else return window.innerHeight
    }

    function S() {
        B === undefined && Z();
        return G ? !B : B
    }

    function qa() {
        var a = Y();
        if (ka) {
            a = g.scry(J, "*", "MOauthDialogHeader")[0];
            return a != null ? da(a) : 0
        }
        return a ? la + X() : 0
    }

    function ra(a) {
        sa(a, 0)
    }

    function sa(a, b) {
        T(0, j.getPos(a).y + b)
    }

    function ta(a) {
        var b = j.getPos(a).y,
            c = U(),
            d = P(),
            e = c + d;
        a = a.offsetHeight;
        var f = b + a;
        b < c ? T(0, b) : f > e && (d < a ? T(0, b) : T(0, f - d))
    }

    function ua() {
        T(0, 0)
    }

    function T(a, b) {
        b < 1 && A && (b = 1);
        if (U() === b && V() === a) return;
        window.scrollTo(a, b);
        i.invoke("scroll")
    }

    function va(a, b) {
        var c = W();
        T(c.x + a, c.y + b)
    }

    function U() {
        return window.pageYOffset
    }

    function V() {
        return window.pageXOffset
    }

    function wa() {
        return Math.max(K.scrollHeight, J ? J.scrollHeight : 0)
    }

    function W() {
        return new j(V(), U())
    }

    function xa(a) {
        var b = X() - g.scry(J, "*", "MAppTopBanner").reduce(function(a, b) {
            return a + b.offsetHeight
        }, 0);
        a && (b += a);
        T(0, b);
        i.invoke("m:viewport:scroll-to-header")
    }

    function ya() {
        Z(), x && !y ? (E = 1, F = window.innerHeight, C = screen.width, M(), C = 0) : (M(), i.invoke("m:viewport:orientation-change"))
    }

    function za(a) {
        a.matches && (E = 1, window.orientation = a.media.indexOf("landscape") !== -1 ? 90 : 0, Z(), M(), i.invoke("m:viewport:orientation-change"))
    }

    function Aa() {
        if (!window.innerHeight || window.innerHeight == F) return;
        M();
        E && (E = 0, i.invoke("m:viewport:orientation-change"))
    }

    function X() {
        var a = document,
            b = Y(),
            c = 0;
        while (b && b !== a) c += b.offsetTop, b = b.offsetParent;
        return c
    }

    function Y() {
        !I && J && (I = g.scry(J, "*", "MTopBlueBarHeader")[0]);
        return I || null
    }

    function Z() {
        B = a.__updateOrientation()
    }

    function Ba() {
        __p && __p();
        var a = function(event) {
                event && (event.stopImmediatePropagation && event.stopImmediatePropagation(), event.preventDefault());
                return !1
            },
            b = window.onwheel;
        window.onwheel = a;
        var c = window.onmousewheel;
        window.onmousewheel = a;
        var d = window.ontouchmove;
        window.ontouchmove = a;
        var e = function() {};
        if (v) {
            var f = J.style.position;
            J.style.position = "fixed";
            var g = J.style.width;
            J.style.width = "100vw";
            e = function() {
                f ? J.style.position = f : J.style.position = "", g ? J.style.width = g : J.style.width = ""
            }
        }
        return function() {
            window.onwheel = b, window.onmousewheel = c, window.ontouchmove = d, e()
        }
    }
    var $;

    function Ca(a, b) {
        __p && __p();
        b === void 0 && (b = !1);
        $ && ($(), $ = null);
        if (!b) {
            T(0, a);
            return null
        }
        $ = ga(function() {
            $ = null, T(0, a)
        }, 250, function() {
            return wa() >= a
        }, {
            maxRetries: 10
        });
        return $
    }
    t = {
        addHeightConstraint: c,
        addMinHeightConstraint: d,
        appendNode: f,
        getHeaderTop: X,
        getHeaderHeight: qa,
        getHeaderElement: Y,
        getHeight: P,
        getUseableHeight: P,
        getUseableWidth: Q,
        getWidth: Q,
        getScrollPos: W,
        getScreenHeight: R,
        getScroll: W,
        getScrollHeight: wa,
        getScrollLeft: V,
        getScrollTop: U,
        init: b,
        isLandscape: S,
        getBoundingRect: pa,
        scrollBy: va,
        scrollTo: T,
        scrollToTop: ua,
        scrollToHeader: xa,
        scrollToNode: ra,
        scrollToNodeWithOffset: sa,
        scrollToNodeIfNecessary: ta,
        scrollToY: Ca,
        MViewportConstraint: h,
        disableScroll: Ba
    };
    e.exports = t
}), null);
__d("AddressBar", ["MViewport", "ge", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();
    a = 0;

    function j() {
        a = 0;
        if (g.getScrollTop() < 60) {
            var b = k() * -1;
            g.scrollToHeader(b)
        }
    }

    function k() {
        var a = h("header-notices");
        return a ? a.offsetHeight : 0
    }

    function b() {
        navigator.userAgent.indexOf("iPad") === -1 && window.addEventListener("load", function a() {
            window.removeEventListener("load", a, !1), j()
        }, !1)
    }
    f.setupLoadListener = b
}), null);
__d("EventListener", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = {
        listen: function(a, b, c) {
            __p && __p();
            c = g.guard(c, "EventListener:" + b);
            if (a.addEventListener) {
                a.addEventListener(b, c, !1);
                return {
                    remove: function() {
                        a.removeEventListener(b, c, !1)
                    }
                }
            } else if (a.attachEvent) {
                a.attachEvent("on" + b, c);
                return {
                    remove: function() {
                        a.detachEvent("on" + b, c)
                    }
                }
            }
        },
        capture: function(a, b, c, d) {
            __p && __p();
            c = g.guard(c, "EventListener:" + b);
            if (!a.addEventListener) {
                !1;
                return
            } else {
                d ? d.capture = !0 : d = !0;
                a.addEventListener(b, c, d);
                return {
                    remove: function() {
                        a.removeEventListener(b, c, d)
                    }
                }
            }
        },
        registerDefault: function(a, b) {
            return this.listen(document, a, b)
        }
    };
    e.exports = a
}), null);
__d("CacheStorage", ["ErrorUtils", "EventListener", "ExecutionEnvironment", "FBJSON", "WebStorage"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l, m, n = "_@_",
        o = "3b",
        p = "CacheStorageVersion";

    function a(a) {
        "use strict";
        this._store = a
    }
    a.prototype.getStore = function() {
        "use strict";
        return this._store
    };
    a.prototype.keys = function() {
        "use strict";
        var a = [];
        for (var b = 0; b < this._store.length; b++) a.push(this._store.key(b));
        return a
    };
    a.prototype.get = function(a) {
        "use strict";
        return this._store.getItem(a)
    };
    a.prototype.set = function(a, b) {
        "use strict";
        this._store.setItem(a, b)
    };
    a.prototype.remove = function(a) {
        "use strict";
        this._store.removeItem(a)
    };
    a.prototype.clear = function() {
        "use strict";
        this._store.clear()
    };
    d = babelHelpers.inherits(b, a);
    l = d && d.prototype;

    function b() {
        "use strict";
        l.constructor.call(this, k.getLocalStorage())
    }
    b.available = function() {
        "use strict";
        return !!k.getLocalStorage()
    };
    f = babelHelpers.inherits(c, a);
    m = f && f.prototype;

    function c() {
        "use strict";
        m.constructor.call(this, k.getSessionStorage())
    }
    c.available = function() {
        "use strict";
        return !!k.getSessionStorage()
    };

    function q() {
        "use strict";
        this._store = {}
    }
    q.prototype.getStore = function() {
        "use strict";
        return this._store
    };
    q.prototype.keys = function() {
        "use strict";
        return Object.keys(this._store)
    };
    q.prototype.get = function(a) {
        "use strict";
        return this._store[a] === undefined ? null : this._store[a]
    };
    q.prototype.set = function(a, b) {
        "use strict";
        this._store[a] = b
    };
    q.prototype.remove = function(a) {
        "use strict";
        a in this._store && delete this._store[a]
    };
    q.prototype.clear = function() {
        "use strict";
        this._store = {}
    };
    q.available = function() {
        "use strict";
        return !0
    };
    var r = {
        memory: q,
        localstorage: b,
        sessionstorage: c
    };

    function s(a, b) {
        "use strict";
        __p && __p();
        this._exceptionMessage = null;
        this._key_prefix = b || "_cs_";
        if (a == "AUTO" || !a)
            for (var c in r) {
                b = r[c];
                if (b.available()) {
                    a = c;
                    break
                }
            }
        a && (!r[a] || !r[a].available() ? (i.canUseDOM, this._backend = new q()) : this._backend = new r[a]());
        b = this.useBrowserStorage();
        b && h.listen(window, "storage", this._onBrowserValueChanged.bind(this));
        a = b ? this._backend.getStore().getItem(p) : this._backend.getStore()[p];
        a !== o && this.clear()
    }
    s.prototype.useBrowserStorage = function() {
        "use strict";
        return this._backend.getStore() === k.getLocalStorage() || this._backend.getStore() === k.getSessionStorage()
    };
    s.prototype.addValueChangeCallback = function(a) {
        "use strict";
        this._changeCallbacks = this._changeCallbacks || [];
        this._changeCallbacks.push(a);
        return {
            remove: function() {
                this._changeCallbacks.slice(this._changeCallbacks.indexOf(a), 1)
            }.bind(this)
        }
    };
    s.prototype._onBrowserValueChanged = function(a) {
        "use strict";
        this._changeCallbacks && String(a.key).startsWith(this._key_prefix) && this._changeCallbacks.forEach(function(b) {
            b(a.key, a.oldValue, a.newValue)
        })
    };
    s.prototype.keys = function() {
        "use strict";
        var a = [];
        g.guard(function() {
            if (this._backend) {
                var b = this._backend.keys(),
                    c = this._key_prefix.length;
                for (var d = 0; d < b.length; d++) b[d].substr(0, c) == this._key_prefix && a.push(b[d].substr(c))
            }
        }.bind(this), "CacheStorage")();
        return a
    };
    s.prototype.set = function(a, b, c) {
        "use strict";
        __p && __p();
        if (this._backend) {
            var d;
            typeof b === "string" ? d = n + b : !c ? (d = {
                __t: Date.now(),
                __v: b
            }, d = j.stringify(d)) : d = j.stringify(b);
            c = this._backend;
            b = this._key_prefix + a;
            a = !0;
            var e = null;
            while (a) try {
                e = null, c.set(b, d), a = !1
            } catch (b) {
                e = b;
                var f = c.keys().length;
                this._evictCacheEntries();
                a = c.keys().length < f
            }
            if (e !== null) {
                this._exceptionMessage = e.message;
                return !1
            } else {
                this._exceptionMessage = null;
                return !0
            }
        }
        this._exceptionMessage = "no back end";
        return !1
    };
    s.prototype.getLastSetExceptionMessage = function() {
        "use strict";
        return this._exceptionMessage
    };
    s.prototype._evictCacheEntries = function() {
        "use strict";
        __p && __p();
        var a = [],
            b = this._backend;
        b.keys().forEach(function(c) {
            __p && __p();
            if (c === p) return;
            var d = b.get(c);
            if (d === undefined) {
                b.remove(c);
                return
            }
            if (s._hasMagicPrefix(d)) return;
            try {
                d = j.parse(d, e.id)
            } catch (a) {
                b.remove(c);
                return
            }
            d && d.__t !== undefined && d.__v !== undefined && a.push([c, d.__t])
        });
        a.sort(function(a, b) {
            return a[1] - b[1]
        });
        for (var c = 0; c < Math.ceil(a.length / 2); c++) b.remove(a[c][0])
    };
    s.prototype.get = function(a, b) {
        "use strict";
        __p && __p();
        var c;
        if (this._backend) {
            g.applyWithGuard(function() {
                c = this._backend.get(this._key_prefix + a)
            }, this, null, function() {
                c = null
            }, "CacheStorage:get");
            if (c !== null)
                if (s._hasMagicPrefix(c)) c = c.substr(n.length);
                else try {
                    c = j.parse(c, e.id), c && c.__t !== undefined && c.__v !== undefined && (c = c.__v)
                } catch (a) {
                    c = undefined
                } else c = undefined
        }
        c === undefined && b !== undefined && (c = b, this.set(a, c));
        return c
    };
    s.prototype.remove = function(a) {
        "use strict";
        this._backend && g.applyWithGuard(this._backend.remove, this._backend, [this._key_prefix + a], null, "CacheStorage:remove")
    };
    s.prototype.clear = function() {
        "use strict";
        this._backend && (g.applyWithGuard(this._backend.clear, this._backend, null, null, null, "CacheStorage:clear"), this.useBrowserStorage() ? this._backend.getStore().setItem(p, o) : this._backend.getStore()[p] = o)
    };
    s.getAllStorageTypes = function() {
        "use strict";
        return Object.keys(r)
    };
    s._hasMagicPrefix = function(a) {
        "use strict";
        return a.substr(0, n.length) === n
    };
    e.exports = s
}), null);
__d("MCache", ["CacheStorage", "ErrorUtils", "MWebStorageMonsterWhiteList", "WebStorage", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l, m = {
        _VERSION: "2h",
        _VERSION_KEY: "version",
        VIEWER_KEY: "viewer",
        getItem: function(a) {
            l || m.install();
            a = l.get(a);
            return a === undefined ? null : a
        },
        setItem: function(a, b, c) {
            h.guard(function() {
                l || m.install(), l.set(a, b, c)
            }, "MCache")()
        },
        removeItem: function(a) {
            l || m.install(), l.remove(a)
        },
        clear: function() {
            __p && __p();
            var a = j.getLocalStorage();
            if (a) {
                var b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = a.key(c);
                    i.whitelist.some(function(a) {
                        return new RegExp(a).test(d)
                    }) || b.push(d)
                }
                b.forEach(function(b) {
                    a.removeItem(b)
                })
            } else l.clear();
            l.set(m._VERSION_KEY, m._VERSION, !0)
        },
        install: function(a) {
            if (l && !a) return;
            l = new g("localstorage", "");
            a = l.get(m._VERSION_KEY);
            a != m._VERSION && m.clear()
        }
    };
    k(m.install, 0);
    e.exports = m
}), null);
__d("MFacewebAndroidLink", ["DOM"], (function(a, b, c, d, e, f, g) {
    function a() {
        g.listen(document.documentElement, "click", null, function(a) {
            var b = a.getNode("tag:a");
            if (!b) return;
            b = b.getAttribute("href");
            b && (b.indexOf("#") === 0 && a.prevent())
        })
    }
    f.setupListeners = a
}), null);
__d("IndicatorType", [], (function(a, b, c, d, e, f) {
    a = {
        ANDROID: 1,
        ANDROID_NONROTATING: 2,
        IOS: 3
    };
    e.exports = a
}), null);
__d("getVendorPrefixedName", ["ExecutionEnvironment", "UserAgent", "camelize", "invariant"], (function(a, b, c, d, e, f, g, h, i, j) {
    __p && __p();
    var k = {},
        l = ["Webkit", "ms", "Moz", "O"],
        m = new RegExp("^(" + l.join("|") + ")"),
        n = g.canUseDOM ? document.createElement("div").style : {};

    function o(a) {
        for (var b = 0; b < l.length; b++) {
            var c = l[b] + a;
            if (c in n) return c
        }
        return null
    }

    function p(a) {
        switch (a) {
            case "lineClamp":
                return h.isEngine("WebKit >= 315.14.2") ? "WebkitLineClamp" : null;
            default:
                return null
        }
    }

    function a(a) {
        a = i(a);
        if (k[a] === undefined) {
            var b = a.charAt(0).toUpperCase() + a.slice(1);
            m.test(b) && j(0);
            g.canUseDOM ? k[a] = a in n ? a : o(b) : k[a] = p(a)
        }
        return k[a]
    }
    e.exports = a
}), null);
__d("isVisible", ["MViewport"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = getComputedStyle(a);
        a = a.getBoundingClientRect();
        return b && b.visibility !== "hidden" && a.height > 0 && a.bottom > 0 && a.top < g.getUseableHeight()
    }
    e.exports = a
}), null);
__d("MJSAnimator", ["IndicatorType", "getVendorPrefixedName", "isVisible", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j) {
    __p && __p();

    function a(a, b, c) {
        __p && __p();
        this._root = a;
        this._elementClassName = a.className;
        var d;
        switch (b) {
            case g.ANDROID:
                this._framesPerAnim = 30;
                d = 1e3;
                break;
            case g.ANDROID_NONROTATING:
                this._framesPerAnim = 7;
                d = 860;
                break;
            case g.IOS:
                this._framesPerAnim = 12;
                d = 1e3;
                break
        }
        this._shouldRotate = c;
        this._frame = 0;
        this._degreesPerFrame = 360 / this._framesPerAnim;
        this._animationInterval = Math.round(d / this._framesPerAnim);
        this._animatingTimeStamp = 0;
        this._doAnimation = this._doAnimation.bind(this)
    }
    a.prototype.start = function() {
        this._animating = !0, this._animationTimer || (this._animationTimer = j(this._doAnimation, this._animationInterval))
    };
    a.prototype.stop = function() {
        this._animating = !1, this._animationTimer && (clearTimeout(this._animationTimer), this._animationTimer = 0, this._animatingTimeStamp = 0)
    };
    a.prototype.pause = a.prototype.stop;
    a.prototype._doAnimation = function() {
        __p && __p();
        if (this._animating && i(this._root)) {
            var a = Date.now(),
                b = this._animatingTimeStamp ? a - this._animatingTimeStamp : this._animationInterval;
            this._frame = this._frame >= this._framesPerAnim ? 1 : this._frame + 1;
            if (this._shouldRotate) {
                var c = this._frame * this._degreesPerFrame - this._degreesPerFrame;
                this._root.style[h("transform")] = "rotate(" + c + "deg)"
            } else this._root.className = this._elementClassName + " frame" + this._frame;
            c = this._animationInterval + this._animationInterval - b;
            c < 16 && (c = 16);
            this._animationTimer = j(this._doAnimation, c);
            this._animatingTimeStamp = a
        } else clearTimeout(this._animationTimer), this._animationTimer = 0, this._animating = !1
    };
    a.prototype.cleanup = function() {
        clearTimeout(this._animationTimer)
    };
    e.exports = a
}), null);
__d("eventsMixinDeprecated", ["Stratcom", "ex"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = 1;

    function j(a) {
        a.__id__ = a.__id__ || i, i++
    }

    function k(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        j(this);
        return g.invoke("obj:" + a, this.__class__.__path__.concat([this.__id__]), {
            args: c
        })
    }

    function l(a, b) {
        j(this);
        var c = function(a) {
            return b.apply(this, a.getData().args)
        }.bind(this);
        c.__SMmeta = b.__SMmeta || this.constructor && this.constructor.__SMmeta;
        return g.listen("obj:" + a, this.__id__, c)
    }

    function m(a, b) {
        var c = function(a) {
            return b.apply(this, a.getData().args)
        }.bind(this);
        c.__SMmeta = b.__SMmeta || this.constructor && this.constructor.__SMmeta;
        return g.listen("obj:" + a, this.__name__, c)
    }
    var n = 0;

    function a(a, b) {
        __p && __p();
        var c = a.prototype,
            d = c.prototype || c.__class__ || {},
            e = d.__events__ || {},
            f = {};
        for (var g in e || {}) f[g] = !0;
        for (var e = 0; e < b.length; ++e) f[b[e]] = !0;
        a.__events__ = f;
        a.__name__ = "en:" + n;
        n++;
        a.__path__ = (d.__path__ || []).concat([a.__name__]);
        c.__class__ = a;
        c.invoke = k;
        c.listen = l;
        a.listen = m
    }
    e.exports = a
}), null);
__d("MStopNGo", ["MViewport", "Stratcom", "StratcomManager", "eventsMixinDeprecated", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();

    function l() {}
    j(l, ["stop", "go"]);
    Object.assign(l, {
        TIMER_DELAY: 200,
        _timer: null,
        _touching: !1,
        _interactionStartCallback: function() {
            var a = l;
            clearTimeout(a._timer);
            a._touching || a._instance.invoke("stop");
            a._touching = !0
        },
        _interactionStopCallback: function() {
            var a = l;
            a._scrollOffset = g.getScroll();
            clearTimeout(a._timer);
            a._timer = k(a._delayedCallback, a.TIMER_DELAY)
        },
        _delayedCallback: function() {
            var a = l,
                b = g.getScroll();
            b.y === a._scrollOffset.y && b.x === a._scrollOffset.x ? (a._touching = !1, a._instance.invoke("go")) : a._interactionStopCallback()
        },
        _scrollCallback: function() {
            var a = l;
            a._touching || a._interactionStartCallback();
            a._interactionStopCallback()
        }
    });
    (function() {
        i.enableDispatch(document, "scroll"), l._instance = new l(), h.listen(["scroll", "m:page:render:complete"], null, l._scrollCallback), h.listen(["touchend", "touchcancel", "MScrollArea:scrollend"], null, l._interactionStopCallback), h.listen(["touchstart", "MScrollArea:scrollstart"], null, l._interactionStartCallback)
    })();
    e.exports = l
}), null);
__d("MLoadingIndicator", ["DOM", "IndicatorType", "MJSAnimator", "MLoadingIndicatorSigils", "MStopNGo", "Stratcom", "invariant", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    __p && __p();
    var o = {};
    Object.keys(h).forEach(function(a) {
        return o[h[a]] = a
    });

    function p(a) {
        "use strict";
        __p && __p();
        if (!("getBoundingClientRect" in a)) return;
        var b = parseInt(a.getAttribute("data-animtype"), 10);
        if (!b || isNaN(b) || !(b in o)) return;
        this.$1 = b;
        this.$2 = b !== h.ANDROID_NONROTATING;
        this.$3 = !1;
        l.hasSigil(a, j.ANIMATE) || (a = g.find(a, "div", j.ANIMATE));
        this.$4 = a;
        this.$5 = 0;
        b = this.willStartAnimation.bind(this);
        this.$6 = [l.listen(["m:side-area:show", "m:jewel:flyout:open"], null, b), l.listen("m:page:unload", null, this.$7.bind(this)), k.listen("go", b), k.listen("stop", this.willPauseAnimation.bind(this))]
    }
    p.prototype.setSpinAcrossPageTransitions = function(a) {
        "use strict";
        this.$3 = !0;
        return this
    };
    p.prototype.$8 = function() {
        "use strict";
        this.$9(!0)
    };
    p.prototype.$10 = function() {
        "use strict";
        this.$11 && this.$11.pause()
    };
    p.prototype.$9 = function(a) {
        "use strict";
        if (!document.body.contains(this.$4)) {
            this.$7();
            return
        }
        this.$11 || (this.$11 = this.$12());
        a ? this.$11.start() : this.$11.stop()
    };
    p.prototype.$12 = function() {
        "use strict";
        return new i(this.$4, this.$1, this.$2)
    };
    p.prototype.willStartAnimation = function() {
        "use strict";
        clearTimeout(this.$5), this.$5 = n(this.$8.bind(this), 100)
    };
    p.prototype.willPauseAnimation = function() {
        "use strict";
        clearTimeout(this.$5), this.$5 = n(this.$10.bind(this), 100)
    };
    p.prototype.$7 = function() {
        "use strict";
        __p && __p();
        if (this.$3) return;
        clearTimeout(this.$5);
        this.$11 && this.$11.cleanup();
        this.$4 = null;
        if (this.$6) {
            for (var a = 0, b = this.$6.length; a < b; ++a) this.$6[a].remove();
            this.$6 = null
        }
    };
    p.init = function(a) {
        "use strict";
        a = document.getElementById(a);
        if (a) {
            a = new p(a);
            a.willStartAnimation();
            return a
        }
    };
    e.exports = p
}), null);
__d("getOpacityStyleName", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = !1,
        h = null;

    function a() {
        __p && __p();
        if (!g) {
            if (document.body && "opacity" in document.body.style) h = "opacity";
            else {
                var a = document.createElement("div");
                a.style.filter = "alpha(opacity=100)";
                a.style.filter && (h = "filter")
            }
            g = !0
        }
        return h
    }
    e.exports = a
}), null);
__d("StyleCore", ["camelize", "containsNode", "ex", "getOpacityStyleName", "getStyleProperty", "hyphenate", "invariant"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    __p && __p();

    function n(a, b) {
        a = t.get(a, b);
        return a === "auto" || a === "scroll"
    }
    var o = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)", "g");

    function p(a) {
        var b = {};
        a.replace(o, function(a, c, d) {
            b[c] = d;
            return d
        });
        return b
    }

    function q(a) {
        var b = "";
        for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
        return b
    }

    function r(a) {
        return a !== "" ? "alpha(opacity=" + a * 100 + ")" : ""
    }

    function s(a, b, c) {
        switch (l(b)) {
            case "font-weight":
            case "line-height":
            case "opacity":
            case "z-index":
            case "animation-iteration-count":
            case "-webkit-animation-iteration-count":
                break;
            case "width":
            case "height":
                a = parseInt(c, 10) < 0;
                a && m(0);
            default:
                isNaN(c) || !c || c === "0" || m(0);
                break
        }
    }
    var t = {
        set: function(a, b, c) {
            __p && __p();
            s("Style.set", b, c);
            a = a.style;
            switch (b) {
                case "opacity":
                    j() === "filter" ? a.filter = r(c) : a.opacity = c;
                    break;
                case "float":
                    a.cssFloat = a.styleFloat = c || "";
                    break;
                default:
                    try {
                        a[g(b)] = c
                    } catch (a) {
                        throw new Error(i('Style.set: "%s" argument is invalid: %s', b, c))
                    }
            }
        },
        apply: function(a, b) {
            __p && __p();
            var c;
            for (c in b) s("Style.apply", c, b[c]);
            "opacity" in b && j() === "filter" && (b.filter = r(b.opacity), delete b.opacity);
            var d = p(a.style.cssText);
            for (c in b) {
                var e = b[c];
                delete b[c];
                var f = l(c);
                for (var g in d)(g === f || g.indexOf(f + "-") === 0) && delete d[g];
                b[f] = e
            }
            Object.assign(d, b);
            a.style.cssText = q(d)
        },
        get: k,
        getFloat: function(a, b) {
            return parseFloat(t.get(a, b), 10)
        },
        getOpacity: function(a) {
            if (j() === "filter") {
                var b = t.get(a, "filter");
                if (b) {
                    b = /(\d+(?:\.\d+)?)/.exec(b);
                    if (b) return parseFloat(b.pop()) / 100
                }
            }
            return t.getFloat(a, "opacity") || 1
        },
        isFixed: function(a) {
            while (h(document.body, a)) {
                if (t.get(a, "position") === "fixed") return !0;
                a = a.parentNode
            }
            return !1
        },
        getScrollParent: function(a) {
            if (!a) return null;
            while (a && a !== document.body) {
                if (n(a, "overflow") || n(a, "overflowY") || n(a, "overflowX")) return a;
                a = a.parentNode
            }
            return window
        }
    };
    e.exports = t
}), null);
__d("Style", ["StyleCore"], (function(a, b, c, d, e, f) {
    e.exports = b("StyleCore")
}), null);
__d("LoadingIndicator", ["DOM", "MLoadingIndicator", "MLoadingIndicatorSigils", "MViewport", "Style"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l, m, n = !1,
        o = {
            init: function(a, b, c) {
                if (n) return;
                l = a;
                k.apply(b, {
                    "max-height": Math.floor(j.getWidth() / 2) + "px"
                });
                k.apply(c, {
                    "max-height": Math.floor(j.getHeight() / 2) + "px"
                });
                m = new h(g.find(l, "div", i.ROOT)).setSpinAcrossPageTransitions(!0);
                n = !0
            },
            hide: function() {
                o._toggle(!1)
            },
            show: function() {
                o._toggle(!0)
            },
            _toggle: function(a) {
                if (!n) return;
                a ? (m && m.willStartAnimation(), g.show(l)) : (g.hide(l), m && m.willPauseAnimation())
            }
        };
    e.exports = o
}), null);
__d("MAjaxSafety", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        return h.test(a) && location.protocol != "file:" && location.protocol != "data:" && location.protocol != "javascript:"
    }
    var h = new RegExp("^" + location.protocol + "//" + location.host.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "/");

    function i(a) {
        if (a === null || a === undefined) return location.toString();
        a = a.toString();
        if (g(a)) return a;
        else if (a.startsWith("/")) return j() + a;
        else return location.toString()
    }

    function j() {
        return location.protocol + "//" + location.host
    }
    var k = {
        getSafeForAjaxURL: function(a, b) {
            __p && __p();
            b === void 0 && (b = !1);
            if (a === null || a === undefined) return location.toString();
            else if (document === null || document === undefined || b) return i(a);
            else {
                b = k.browserEncodeURI(a);
                if (g(b)) return b;
                else return location.toString()
            }
        },
        isURLSafeForAjax: function(a) {
            return g(k.browserEncodeURI(a))
        },
        browserEncodeURI: function(a) {
            var b = document.createElement("a");
            b.href = a.toString();
            return b.href.toString()
        }
    };
    e.exports = k
}), null);
__d("MRequestTypes", [], (function(a, b, c, d, e, f) {
    e.exports = {
        TRANSITION: 1,
        DEPENDENT: 2,
        INDEPENDENT: 3
    }
}), null);
__d("MResponseActions", ["DOM", "HTML", "URI", "ex"], (function(a, b, c, d, e, f, g, h, i, j) {
    __p && __p();
    var k = {
        _cacheData: {},
        _getItemChildElements: function(a) {
            return Array.from(new h(a.html).getFragment().childNodes)
        },
        _replaceAllExisting: function(a) {
            var b = [];
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.id && document.getElementById(d.id);
                e ? g.replace(e, d) : b.push(d)
            }
            return b
        },
        _getItemTarget: function(a, b) {
            var c = a.target && (document.getElementById(a.target) || document.querySelector('[data-uniqueid="' + a.target + '"]'));
            if (!c && !b) throw new Error(j('Unable to find the target "%s" on the page for m-response action "%s"!', a.target, a.cmd));
            return c
        },
        _getItemTargets: function(a, b) {
            var c = Array.from(document.querySelectorAll('[id="' + a.target + '"]'));
            if (!c.length && !b) throw new Error(j('Unable to find any target "%s" on the page for m-response action "%s"!', a.target, a.cmd));
            return c
        },
        append: function(a) {
            var b = k._getItemChildElements(a);
            a.replaceifexists && (b = k._replaceAllExisting(b));
            if (b.length) {
                a = k._getItemTarget(a);
                g.appendContent(a, b)
            }
        },
        insertAfter: function(a) {
            __p && __p();
            var b = k._getItemChildElements(a);
            a.replaceifexists && (b = k._replaceAllExisting(b));
            if (b.length) {
                a = k._getItemTarget(a);
                var c = a.nextSibling;
                if (c)
                    for (var d = 0; d < b.length; d++) {
                        var e = b[d];
                        a.parentNode.insertBefore(e, c)
                    } else g.appendContent(a.parentNode, b)
            }
        },
        insertBefore: function(a) {
            var b = k._getItemChildElements(a);
            a.replaceifexists && (b = k._replaceAllExisting(b));
            if (b.length) {
                a = k._getItemTarget(a);
                for (var c = 0; c < b.length; c++) a.parentNode.insertBefore(b[c], a)
            }
        },
        cacheData: function(a) {
            __p && __p();
            a = new h(a.html).getFragment();
            while (a.firstChild) {
                var b = a.removeChild(a.firstChild),
                    c = b.outerHTML;
                if (!c) {
                    var d = g.create("div");
                    d.appendChild(b);
                    c = d.innerHTML
                }
                k._cacheData[b.id] = c;
                d = document.getElementById(b.id);
                d && g.replace(d, b)
            }
        },
        cacheDataLoad: function(a) {
            __p && __p();
            for (var b = 0; b < a.ids.length; b++) {
                var c = a.ids[b],
                    d = document.getElementById(c);
                if (d) {
                    c = k._cacheData[c];
                    if (c) {
                        c = new h(c).getFragment().firstChild;
                        g.replace(d, c)
                    }
                }
            }
        },
        merge: function(a) {
            var b = new h(a.html).getFragment();
            a = a.target && document.getElementById(a.target);
            var c = null;
            a && (delete a.id, c = a.parentNode);
            while (b.firstChild) {
                var d = b.removeChild(b.firstChild),
                    e = document.getElementById(d.id);
                e ? g.replace(e, d) : c && c.insertBefore(d, a)
            }
            c && a.parentNode === c && c.removeChild(a)
        },
        prepend: function(a) {
            var b = k._getItemChildElements(a);
            a.replaceifexists && (b = k._replaceAllExisting(b));
            if (b.length) {
                a = k._getItemTarget(a);
                g.prependContent(a, b)
            }
        },
        redirect: function(a) {
            new i(a.uri).go()
        },
        remove: function(a) {
            a = k._getItemTargets(a, !0);
            a.forEach(g.remove)
        },
        replace: function(a) {
            var b = k._getItemChildElements(a);
            a.replaceifexists && (b = k._replaceAllExisting(b, a.replaceifexists));
            a = k._getItemTarget(a, a.allownull);
            b.length && a && g.replace(a, b)
        },
        setContent: function(a) {
            var b = k._getItemChildElements(a);
            a = k._getItemTarget(a);
            g.setContent(a, b)
        },
        script: function(a) {
            var b = a.fn ? a.fn : new Function(a.code);
            if (a.type == "onload" || a.type == "nocache") return b;
            else a.type == "immediate" && b()
        }
    };
    e.exports = k
}), null);
__d("econcat", [], (function(a, b, c, d, e, f) {
    a = function(a, b) {
        if (a.length === 0) return b;
        return b.length === 0 ? a : [a[0] + b[0]].concat(a.slice(1)).concat(b.slice(1))
    };
    e.exports = a
}), null);
__d("MResponseData", ["Bootloader", "CallbackDependencyManager", "ErrorUtils", "HTML", "LogHistory", "MRequestConfig", "MResponseActions", "Stratcom", "URI", "WebStorage", "bx", "econcat", "erx", "eventsMixinDeprecated", "ex", "gkx", "invariant", "ix", "qex"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    __p && __p();
    var z = k.getInstance("response");

    function A(a) {
        "use strict";
        this._data = a || {}
    }
    A.prototype.getData = function() {
        "use strict";
        return this._data
    };
    A.prototype.isPagelet = function() {
        "use strict";
        return !!this._data.is_pagelet
    };
    A.prototype.getRedirectURI = function() {
        "use strict";
        var a = this.getData();
        a = a.actions && a.actions.find(function(a) {
            return a.cmd === "redirect"
        });
        return a ? new o(a.uri) : null
    };
    A.prototype.willRedirect = function() {
        "use strict";
        return this._data.actions && this._data.actions.some(function(a) {
            return a.cmd === "redirect"
        })
    };
    A.prototype.process = function(a) {
        "use strict";
        __p && __p();
        if (l.checkResponseToken) {
            a = this._data.ajax_response_token;
            if (a == null) {
                this._data.actions && !1;
                return
            }
            a === l.ajaxResponseToken.secret || w(0)
        }
        this._data.ixData && x.add(this._data.ixData);
        this._data.bxData && q.add(this._data.bxData);
        this._data.gkxData && v.add(this._data.gkxData);
        this._data.qexData && y.add(this._data.qexData);
        g.setResourceMap(this._data.resource_map || {});
        g.enableBootload(this._data.bootloadable || {});
        z.log("process", this.__id__, this._data.uri, this._data.cached ? "cached" : "live");
        var b = [],
            c = this._data.actions,
            d = !1,
            e = n.listen("m:page:loading", null, function() {
                z.log("discard", this.__id__, this._data.uri, this._data.cached ? "cached" : "live"), n.removeCurrentListener(), d = !0
            }.bind(this)),
            f = new h();
        f.registerCallback(function() {
            __p && __p();
            if (d) return;
            for (var a = 0; c && c.length && a < c.length; a++) {
                var e = c[a];
                z.log("action", this.__id__, this._data.uri, this._data.cached ? "cached" : "live", e.cmd, e.target || e.code && e.code.substr(0, 100));
                if (!m[e.cmd]) throw new Error(u('Invalid response action "%s" received from "%s" by "%s"', e.cmd, this._data.uri, this._data.controller));
                var g;
                try {
                    g = m[e.cmd](e)
                } catch (a) {
                    var h = s(a.message);
                    h = r(h, [' From "%s" by "%s"', this._data.uri, this._data.controller]);
                    z.error(u.apply(null, h))
                }
                g && b.push(g);
                e.cmd === "redirect" && (this._redirecting = !0)
            }
            f.satisfyPersistentDependency("displayed")
        }.bind(this), ["display-rsrc-loaded"]);
        f.registerCallback(function() {
            __p && __p();
            if (d) return;
            try {
                z.log("callback", this.__id__, this._data.uri, this._data.cached ? "cached" : "live");
                while (b.length) {
                    var a = b.shift();
                    a()
                }
            } catch (b) {
                z.error("callback error"), this.invoke("fail"), b.guard = "m-response:process-fail", b.callee = a && a.toString(), i.reportError(b)
            }
            e.remove();
            !this._redirecting ? (z.log("complete", this.__id__, this._data.uri, this._data.cached ? "cached" : "live"), this.invoke("complete")) : this.invoke("discard")
        }.bind(this), ["displayed", "normal-rsrc-loaded"]);
        a = function() {
            return f.satisfyPersistentDependency("display-rsrc-loaded")
        };
        g.loadResources(this._data.displayResources || [], a);
        g.loadResources(this._data.normalResources || [], function() {
            return f.satisfyPersistentDependency("normal-rsrc-loaded")
        })
    };
    A.prototype.prepForCache = function(a) {
        "use strict";
        __p && __p();
        a && (a = !!p.getLocalStorage());
        var b = {
            ajax_response_token: this._data.ajax_response_token,
            uri: this._data.uri,
            controller: this._data.controller,
            cached: !0,
            actions: [],
            resource_map: this._data.resource_map,
            bootloadable: this._data.bootloadable
        };
        a && (b.displayResources = this._data.displayResources, b.normalResources = this._data.normalResources, b.is_pagelet = this._data.is_pagelet);
        a = this._data.actions || [];
        var c = 0;
        for (var d = 0; d < a.length; ++d) {
            var e = a[d],
                f = e.cmd;
            if (f === "script" && e.type === "nocache") continue;
            f === "cacheData" ? (b.actions.push(A._convertToCacheDataLoadCommand(e)), c++) : b.actions.push(e)
        }
        c === b.actions.length && (b.actions = []);
        return b.actions.length || b.displayResources || b.normalResources ? b : null
    };
    A._convertToCacheDataLoadCommand = function(a) {
        "use strict";
        a = new j(a.html).getFragment();
        a = a.childNodes;
        var b = a.length,
            c = [];
        for (var d = 0; d < b; ++d) c.push(a[d].id);
        return {
            cmd: "cacheDataLoad",
            ids: c
        }
    };
    t(A, ["complete", "fail", "discard"]);
    Object.assign(A.prototype, {
        _data: null,
        _processed: !1,
        _redirecting: !1
    });
    e.exports = A
}), null);
__d("ClientServiceWorkerMessage", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, b, c) {
        "use strict";
        this.$1 = a, this.$2 = b, this.$3 = c
    }
    a.prototype.sendViaController = function() {
        "use strict";
        if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
        var a = new self.MessageChannel();
        this.$3 && (a.port1.onmessage = this.$3);
        navigator.serviceWorker.controller.postMessage({
            command: this.$1,
            data: this.$2
        }, [a.port2])
    };
    e.exports = a
}), null);
__d("MRequestDataSerializer", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        defaultDataSerializer: function(a) {
            var b = [];
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = encodeURIComponent(d[0]);
                d = encodeURIComponent(d[1]);
                b.push(e + "=" + d)
            }
            return b.join("&")
        }
    };
    e.exports = a
}), null);
__d("SWBackgroundRequestMessage", ["ClientServiceWorkerMessage", "MRequestDataSerializer", "URI"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function j(a, b) {
        var c = i.tryParseURI(a);
        if (c) {
            c.addQueryData("bgsync_id", b);
            return c.toString()
        }
        return a
    }
    a = {
        sendToSW: function(a, b) {
            var c = {
                method: a._method,
                headers: a._headers,
                body: a._data ? h.defaultDataSerializer(a._data) : undefined,
                referrer: a._referrer
            };
            c = babelHelpers["extends"]({
                uri: j(a._uri, b.requestId),
                request: c,
                timeout: a._timeout,
                timestamp: Date.now() / 1e3
            }, b);
            new g("backgroundRequest", c).sendViaController()
        }
    };
    e.exports = a
}), null);
__d("getCrossOriginTransport", ["ex", "invariant"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();

    function i() {
        try {
            var a = new XMLHttpRequest();
            !("withCredentials" in a) && typeof XDomainRequest !== "undefined" && (a = new XDomainRequest());
            return a
        } catch (a) {
            throw new Error(g("getCrossOriginTransport: %s", a.message))
        }
    }
    i.withCredentials = function() {
        var a = i();
        "withCredentials" in a || h(0);
        var b = a.open;
        a.open = function() {
            b.apply(this, arguments), this.withCredentials = !0
        };
        return a
    };
    e.exports = i
}), null);
__d("isFacebookURI", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = ["http", "https"];

    function a(a) {
        g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    a.setRegex = function(a) {
        g = a
    };
    e.exports = a
}), null);
__d("ZeroRewrites", ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l = {
        rewriteURI: function(a) {
            if (!k(a) || l._isWhitelisted(a)) return a;
            var b = l._getRewrittenSubdomain(a);
            b !== null && b !== undefined && (a = a.setSubdomain(b));
            return a
        },
        getTransportBuilderForURI: function(a) {
            return l._isRewritten(a) ? i.withCredentials : j
        },
        isRewriteSafe: function(a) {
            if (Object.keys(h.rewrite_rules).length === 0 || !k(a)) return !1;
            var b = l._getCurrentURI().getDomain(),
                c = new g(a).qualify().getDomain();
            return b === c || l._isRewritten(a)
        },
        _isWhitelisted: function(a) {
            a = a.getPath();
            a.endsWith("/") || (a += "/");
            return h.whitelist && h.whitelist[a] == 1
        },
        _getRewrittenSubdomain: function(a) {
            a = new g(a).qualify().getSubdomain();
            return h.rewrite_rules[a]
        },
        _isRewritten: function(a) {
            a = new g(a).qualify();
            if (Object.keys(h.rewrite_rules).length === 0 || !k(a) || l._isWhitelisted(a)) return !1;
            var b = a.getSubdomain(),
                c = l._getCurrentURI(),
                d = l._getRewrittenSubdomain(c);
            return a.getDomain() !== c.getDomain() && b === d
        },
        _getCurrentURI: function() {
            return new g("/").qualify()
        }
    };
    e.exports = l
}), null);
__d("uuid", [], (function(a, b, c, d, e, f) {
    function a() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            a = a == "x" ? b : b & 3 | 8;
            return a.toString(16)
        })
    }
    e.exports = a
}), null);
__d("MRequestGateway", ["CurrentCommunity", "LogHistory", "MAjaxSafety", "MRequestTypes", "Stratcom", "SWBackgroundRequestMessage", "URI", "ZeroRewrites", "gkx", "uuid", "MResponseData", "MHistory"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    __p && __p();
    var q = h.getInstance("request"),
        r = {
            ERROR_TIMEOUT: 15e3,
            stopAllRequests: function() {
                while (r._requests.length) r._requests.pop().abort()
            },
            canAjax: function(a) {
                var b = /^\/(?:\w|$|[?#])/,
                    c = new RegExp("^" + location.protocol + "//" + location.host.replace(/\./g, "\\.") + "/"),
                    d = function(a) {
                        return b.test(a) || c.test(a)
                    };
                r.canAjax = d;
                return d(a)
            },
            send: function(a) {
                __p && __p();
                var b = r.canAjax(a.getURI()),
                    c = i.isURLSafeForAjax(a.getURI()),
                    d = !1;
                b !== c && (d = o("AT7zMB0I7eORfH-UodO4y3BTPg5wOO8T247ZMNn2q5-aNcyAQUvzZrGn32ptMehFmO1oqnCJmh_zFD3-bdTI6XU3_0z7OLdKJrGgHtrOitBdeg"));
                d = d ? c : b;
                if (!a.getCORS() && !n.isRewriteSafe(new m(a.getURI())) && !d) {
                    a.abort();
                    a.invoke("error");
                    a.invoke("finally");
                    return
                }
                a.setReferrer(window.location.href);
                a.listen("finally", function() {
                    r._removeRequest(a)
                });
                a.getCORS() || a.listen("open", function() {
                    var b = a.getTransport();
                    b.setRequestHeader("X-Requested-With", "XMLHttpRequest")
                });
                a.listen("response", this._getResponseHandler(a));
                if (a.getAutoRetry()) {
                    if (a.getType() === j.INDEPENDENT) {
                        a.setTimeout(r.ERROR_TIMEOUT);
                        var e = a.listen("error", function(a, b) {
                            e.remove(), b.setAutoRetry(!1), b.setTimeout(r.ERROR_TIMEOUT), b.reset(), b.addData({
                                is_retry: 1
                            }), b.sendAfterProcessing(), this._maybeResendInBackground(b), this._maybeLogFailureInBackground(b)
                        }.bind(this))
                    }
                } else a.getFailureLoggingRequest() && (a.setTimeout(r.ERROR_TIMEOUT), this._maybeLogFailureInBackground(a));
                this._addSessionData(a);
                g.getID() !== "0" && a.addData({
                    __cid: g.getID()
                });
                a.canAbort() && r._requests.push(a);
                a.sendAfterProcessing()
            },
            _maybeResendInBackground: function(a) {
                var b = a.getBackgroundRetry();
                if (b) var c = a.listen("error", function(a, d) {
                    c.remove(), l.sendToSW(d, b)
                })
            },
            _maybeLogFailureInBackground: function(a) {
                var b = a.getFailureLoggingRequest();
                if (b) var c = a.listen("error", function(a, d) {
                    c.remove(), l.sendToSW(b, {
                        requestId: "log_" + p(),
                        ttl: 1e3 * 60 * 60 * 24,
                        addMetadataParams: !0,
                        retry: 2
                    })
                })
            },
            _addSessionData: function(a) {
                var b = document.getElementById("m_sess");
                b = b ? b.value : "";
                a.addData({
                    m_sess: b
                })
            },
            _getResponseHandler: function(a) {
                __p && __p();
                var c = [],
                    d = !1,
                    e = function() {
                        !d && c.length && (d = !0, c.shift().process())
                    };
                return function(f) {
                    __p && __p();
                    var a = this;
                    if (a.getAutoProcess()) {
                        var g = b("MResponseData");
                        g = new g(f);
                        var h = {
                            request: a,
                            response: g,
                            data: f
                        };
                        q.log("process", a.__id__, a.getURI());
                        f = a.invoke("process", h);
                        if (!f.getStopped()) {
                            f = b("MHistory");
                            var i = window.location.href;
                            f = f.SOFT_STATE_KEY + "=";
                            if (i.indexOf(f) === -1 && i !== a.getReferrer() && !a.processResponseAfterPageTransitions) return;
                            g.listen("complete", function() {
                                q.log("postprocess", a.__id__, a.getURI()), a.invoke("postprocess", h), d = !1, e()
                            });
                            g.listen("fail", function() {
                                q.log("fail", a.__id__, a.getURI()), a.invoke("fail")
                            });
                            c.push(g);
                            e()
                        }
                    }
                }.bind(a)
            },
            _requests: [],
            _removeRequest: function(a) {
                a = r._requests.indexOf(a);
                a !== -1 && this._requests.splice(a, 1)
            }
        };
    (function() {
        k.listen("m:page:loading", null, r.stopAllRequests)
    })();
    e.exports = r
}), null);
__d("BrowserHistory", [], (function(a, b, c, d, e, f) {
    e.exports = window.history
}), null);
__d("JavelinHistory", ["BrowserHistory", "MJSEnvironment", "Stratcom", "URI", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    a = h.IS_APPLE_WEBKIT_IOS && (h.IS_CHROME || h.OS_VERSION < 5) || h.IS_ANDROID && !h.IS_CHROME && h.OS_VERSION < 4.2 || h.IS_WINDOWS_PHONE;
    var l = !!g.pushState && !a,
        m = {
            DEFAULT: Infinity,
            PUSHSTATE: 3,
            HASHCHANGE: 2,
            POLLING: 1,
            CAN_USE_PUSH_STATE: l,
            _hash: null,
            _initialPath: null,
            _mechanism: null,
            install: function(a) {
                a = a || m.DEFAULT, a >= m.PUSHSTATE && "pushState" in history ? (m._mechanism = m.PUSHSTATE, m._initialPath = m._getBasePath(location.href), i.listen("popstate", null, m._handleChange)) : a >= m.HASHCHANGE && "onhashchange" in window ? (m._mechanism = m.HASHCHANGE, i.listen("hashchange", null, m._handleChange)) : (m._mechanism = m.POLLING, k(m._handleChange, 200))
            },
            getMechanism: function() {
                return m._mechanism
            },
            getPath: function() {
                if (m.getMechanism() === m.PUSHSTATE) return m._getBasePath(location.href);
                else {
                    var a = m.parseFragment(m.getLocationHash());
                    return a || m._getBasePath(location.href)
                }
            },
            push: function(a) {
                if (m.getMechanism() === m.PUSHSTATE) m._initialPath && m._initialPath !== a && (m._initialPath = null), g.pushState(null, null, a), m._fire(a);
                else {
                    a = m._composeFragment(a);
                    if (l && m._mechanism === m.HASHCHANGE) {
                        var b = location.href,
                            c = new j(b);
                        c.getFragment() || (c.setPath(null), c.setQueryData(null), c.setFragment(m._composeFragment(b)), g.replaceState(null, null, c.toString()))
                    }
                    location.hash = a
                }
            },
            replace: function(a) {
                if (m.getMechanism() === m.PUSHSTATE) g.replaceState(null, null, a), m._fire(a);
                else {
                    var b = new j(location.href);
                    b.setFragment(m._composeFragment(a));
                    h.IS_APPLE_WEBKIT_IOS && "replaceState" in history ? (g.replaceState(null, null, b.toString()), m._handleChange()) : location.replace(b.toString())
                }
            },
            _handleChange: function() {
                var a = m.getPath();
                m.getMechanism() === m.PUSHSTATE ? (a !== m._initialPath && m._fire(a), m._initialPath = null) : a !== m._hash && (m._hash = a, m._fire(a))
            },
            getLocationHash: function() {
                var a = location.href.split("#")[1];
                if (a) return "#" + a;
                else return ""
            },
            _fire: function(a) {
                i.invoke("history:change", null, {
                    path: m._getBasePath(a)
                })
            },
            _getBasePath: function(a) {
                return new j(a).setProtocol(null).setDomain(null).toString()
            },
            _composeFragment: function(a) {
                a = m._getBasePath(a);
                if (m.getPath() === a) {
                    var b = m.getLocationHash();
                    if (b && b.charAt(1) === "!") return "~!" + a
                }
                return "!" + a
            },
            parseFragment: function(a) {
                if (a)
                    if (a.charAt(1) === "!") return a.substr(2);
                    else if (a.substr(1, 2) === "~!") return a.substr(3);
                return null
            }
        };
    e.exports = m
}), null);
__d("MURI", ["URI"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h, i = /^\~?\!\//;
    h = babelHelpers.inherits(j, g);
    h && h.prototype;
    j.prototype.normalize = function() {
        "use strict";
        __p && __p();
        var a = this.getQueryData();
        for (var b in a) /^_/.test(b) && (a[b] = undefined);
        a.fbb = undefined;
        a.refid = undefined;
        a.pos = undefined;
        a.__ef__ = undefined;
        var c = this.getFragment();
        if (i.test(c)) {
            c = new j(c.replace(i, "/"));
            return this.setFragment(null).setPath(c.getPath()).setQueryData(c.getQueryData()).normalize()
        } else return this.setProtocol(null).setDomain(null).setFragment(null).setQueryData(a)
    };
    j.prototype.setFaceweb = function(a) {
        "use strict";
        return !a ? this.addQueryData("fb_fw_version", undefined).addQueryData("fb_fw_cache_bust", undefined) : this.addQueryData("fb_fw_version", window.FB_FW_VERSION || undefined).addQueryData("fb_fw_cache_bust", window.FB_FW_CACHE_BUST || undefined)
    };
    j.getHashPrefixRegex = function() {
        "use strict";
        return i
    };

    function j() {
        "use strict";
        h.apply(this, arguments)
    }
    e.exports = j
}), null);
__d("Base64", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function h(a) {
        a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
        return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63))
    }
    var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

    function j(a) {
        a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
        return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255)
    }
    var k = {
        encode: function(a) {
            a = unescape(encodeURI(a));
            var b = (a.length + 2) % 3;
            a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
            return a.slice(0, a.length + b - 2) + "==".slice(b)
        },
        decode: function(a) {
            a = a.replace(/[^A-Za-z0-9+\/]/g, "");
            var b = a.length + 3 & 3;
            a = (a + "AAA".slice(b)).replace(/..../g, j);
            a = a.slice(0, a.length + b - 3);
            try {
                return decodeURIComponent(escape(a))
            } catch (a) {
                throw new Error("Not valid UTF-8")
            }
        },
        encodeObject: function(a) {
            return k.encode(JSON.stringify(a))
        },
        decodeObject: function(a) {
            return JSON.parse(k.decode(a))
        },
        encodeNums: function(a) {
            return String.fromCharCode.apply(String, a.map(function(a) {
                return g.charCodeAt((a | -(a > 63)) & -(a > 0) & 63)
            }))
        }
    };
    e.exports = k
}), null);
__d("CookieCore", ["CookieCoreConfig", "CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow"], (function(a, b, c, d, e, f, g, h, i, j, k, l) {
    __p && __p();
    var m = /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace)\..*)$/i,
        n = /_js_(.*)/,
        o = "",
        p = 0,
        q = 10 * 1e3;

    function r(a) {
        return window.self != window.top ? !1 : !0
    }
    var s = {
        set: function(a, b) {
            if (!v(a)) return;
            s.setWithoutChecks(a, b, x(a), y(a), w(a))
        },
        setWithoutChecks: function(a, b, c, d, e) {
            __p && __p();
            var f = Date.now();
            if (c != null)
                if (c > f) c -= f;
                else if (c == 1) {
                s.clear(a, d);
                return
            }
            document.cookie = a + "=" + encodeURIComponent(b) + "; " + (c ? "expires=" + new Date(f + c).toUTCString() + "; " : "") + "path=" + d + "; domain=" + window.location.hostname.replace(m, "$1") + (e ? "; secure" : "");
            A()
        },
        setIfFirstPartyContext: function(a, b) {
            if (!r(a)) return;
            s.set(a, b)
        },
        setWithoutChecksIfFirstPartyContext: function(a, b, c, d, e) {
            if (!r(a)) return;
            s.setWithoutChecks(a, b, c, d, e)
        },
        clear: function(a, b) {
            b === void 0 && (b = "/"), b = b || "/", document.cookie = a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + window.location.hostname.replace(m, "$1"), A()
        },
        get: function(a) {
            if (!v(a)) return null;
            a = z().match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
            return a ? decodeURIComponent(a[1]) : a
        }
    };

    function t(a) {
        return {
            insecure: a.i || !1,
            path: a.p || "/",
            ttlSeconds: a.t || 0
        }
    }

    function u(a) {
        if (g[a] !== undefined) return t(g[a]);
        a = a.match(n);
        return a && a.length > 1 ? u(a[1]) : null
    }

    function v(a) {
        return u(a) !== null
    }

    function w(a) {
        a = u(a);
        return a == null ? !0 : !a.insecure
    }

    function x(a) {
        a = u(a);
        return a == null ? null : a.ttlSeconds * 1e3
    }

    function y(a) {
        a = u(a);
        return a == null ? "/" : a.path
    }

    function z() {
        if (k("AT5tMpZqIKh0vdvJexCKKhPqDfMAWQPHLQnR8CgtajZUMLAZP8rj8YnSD9bEFc4BrmsaxTBmOCxn2mR6tM_ew1hH")) {
            p + q < Date.now() && B();
            return o
        } else return C()
    }

    function A() {
        p = 0
    }

    function B() {
        o = C(), p = Date.now()
    }

    function C() {
        if (h.sampleRate > 0) {
            var a = l(),
                b = document.cookie;
            a = l() - a;
            var c = a > h.maximumIgnorableStallMs && j.coinflip(1 / h.sampleRate);
            c && i("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", h.maximumIgnorableStallMs);
            return b
        } else return document.cookie
    }
    e.exports = s
}), null);
__d("Cookie", ["Bootloader", "CookieCore", "Env"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function j(a) {
        if (i.no_cookies) return !1;
        if (i.defer_cookies) {
            g.loadModules(["BanzaiODS"], function(b) {
                b.bumpEntityKey("defer_cookies", "set." + a)
            }, "Cookie");
            return !1
        }
        return !0
    }

    function a(a, b) {
        if (!j(a)) return;
        h.set(a, b)
    }

    function b(a, b, c, d, e) {
        if (!j(a)) return;
        h.setWithoutChecks(a, b, c, d, e)
    }
    e.exports = babelHelpers["extends"]({}, h, {
        set: a,
        setWithoutChecks: b
    })
}), null);
__d("XReferer", ["Base64", "Cookie", "FBJSON", "URI", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l = {
        update: function(a, b, c) {
            __p && __p();
            if (!c) {
                h.set("x-referer", "");
                return
            }
            a != null && (a = l.truncatePath(a));
            b != null && (b = l.truncatePath(b));
            var d = window.location.pathname + window.location.search;
            c = j.getRequestURI();
            var e = c.getSubdomain();
            b != null && l._setCookie(b, d, e);
            a != null && k(function() {
                a != null && l._setCookie(a, d, e)
            }, 0)
        },
        _setCookie: function(a, b, c) {
            a = {
                r: a,
                h: b,
                s: c
            };
            b = g.encode(i.stringify(a));
            h.set("x-referer", b)
        },
        truncatePath: function(a) {
            var b = 1024;
            a && a.length > b && (a = a.substring(0, b) + "...");
            return a
        }
    };
    e.exports = l
}), null);
__d("MHistory", ["JavelinHistory", "MAjaxSafety", "MRequestGateway", "MURI", "Stratcom", "URI", "XReferer", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    __p && __p();
    var o = {
        SOFT_STATE_KEY: "soft",
        _softState: null,
        install: function() {
            __p && __p();
            var a = g.DEFAULT;
            g.CAN_USE_PUSH_STATE || (a = g.HASHCHANGE);
            g.install(a);
            if (o._enabled) {
                a = o.getPath();
                var b = new l(a);
                b.getQueryData()[o.SOFT_STATE_KEY] && (a = b.addQueryData(o.SOFT_STATE_KEY).toString(), o.replaceState(a));
                o._lastPath = a;
                k.listen("history:change", null, o._handleStateChange)
            }
        },
        _updateSoftState: function(a) {
            a = new l(a).getQueryData()[o.SOFT_STATE_KEY];
            o._softState = a
        },
        getParam: function(a) {
            return new l(o.getPath()).getQueryData()[a]
        },
        getPath: function() {
            var a = g.getPath();
            return h.getSafeForAjaxURL(a)
        },
        pushSoftState: function(a) {
            if (!o._enabled) return;
            a = new l(o.getPath()).addQueryData(o.SOFT_STATE_KEY, a).toString();
            return o.pushState(a)
        },
        popSoftState: function(a) {
            if (!o._enabled) return;
            o._softState === a && n(function() {
                o._softState === a && history.go(-1)
            }, 0)
        },
        _updateXRefererCookie: function(a, b) {
            var c = i.canAjax(window.location);
            m.update(a, b, c)
        },
        pushState: function(a, b) {
            __p && __p();
            b === void 0 && (b = !0);
            if (!o._enabled) return;
            if (o._softState) o.replaceState(a);
            else {
                o._updateSoftState(a);
                a = new j(a).normalize().toString();
                var c = g.getPath();
                g.push(a);
                o._updateXRefererCookie(b ? a : null, c)
            }
        },
        getState: function() {
            return this.hasSoftState() ? this._softState : null
        },
        replaceState: function(a, b) {
            b === void 0 && (b = !0);
            if (!o._enabled) return;
            o._updateSoftState(a);
            a = new j(a).normalize().toString();
            var c = g.getPath();
            g.replace(a);
            o._updateXRefererCookie(b ? a : null, c)
        },
        hasSoftState: function() {
            return !!o._softState
        },
        _enabled: !window.operamini && !window.APP_ENABLED,
        _lastPath: null,
        _handleStateChange: function(a) {
            a = h.getSafeForAjaxURL(a.getData().path);
            if (a !== o._lastPath) {
                o._lastPath = a;
                o._updateSoftState(a);
                a = new l(a);
                a = {
                    path: a.addQueryData(o.SOFT_STATE_KEY).toString(),
                    soft: o._softState
                };
                var b = k.invoke("m:history:change", null, a);
                b.getPrevented() || k.invoke("m:history:change-default", null, a)
            }
        }
    };
    e.exports = o
}), null);
__d("MHome", ["MHistory", "MURI", "Stratcom"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function a() {
        i.listen("m:page:unload", null, function(a) {
            i.invoke("m:homepage:unload"), i.removeCurrentListener()
        }), i.invoke("m:homepage:load")
    }
    e.exports = {
        init: a,
        isHome: function(a) {
            a = a;
            a || (a = g.getPath());
            if (!a) return !1;
            a = new h(a).normalize();
            a = a.getPath();
            return a && (a === "/" || a === "/home.php") && !g.hasSoftState()
        }
    }
}), null);
__d("MPageCache", ["FBLogger", "LogHistory", "MResponseData", "MURI", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();
    var l = h.getInstance("cache"),
        m = {
            _pageCache: {},
            _URIStack: [],
            _iuiResponses: {},
            _scrollHistory: {},
            _reset: function() {
                this._pageCache = {}, this._URIStack = [], this._iuiResponses = {}, this._scrollHistory = {}
            },
            isPageCached: function(a, b) {
                a = m._getItemByURI(a);
                return a && !m._hasCacheExpired(a, b)
            },
            getCachedPage: function(a) {
                l.log("get page", a);
                var b = m._getItemByURI(a);
                if (!b || b.version != window.m_version) {
                    l.log("page cache miss", a);
                    return null
                } else {
                    l.log("page cache hit", a);
                    return new i(b.markup)
                }
            },
            setCachedPage: function(a, b, c) {
                l.log("set page", a);
                c = {
                    markup: b.prepForCache(!0),
                    time: Date.now(),
                    version: window.m_version
                };
                b = m._getCacheKey(a);
                m._pageCache[b] = c;
                m._URIStack.push(b)
            },
            removeCachedPage: function(a) {
                l.log("remove page", a), delete m._pageCache[m._getCacheKey(a)]
            },
            clearEntireCache: function() {
                this._reset()
            },
            popCachedPage: function() {
                m.removeCachedPage(m._URIStack.pop())
            },
            addCachedIUIResponse: function(a, b) {
                l.log("add iui:response", a);
                if (b) {
                    a = m._getCacheKey(a);
                    a = m._iuiResponses[a];
                    if (a) {
                        b = b.prepForCache(!1);
                        b && a.push(b)
                    }
                }
            },
            applyCachedIUIResponses: function(a, b) {
                __p && __p();
                l.log("apply iui:response", a);
                var c = m._getCacheKey(a),
                    d = m._iuiResponses[c] || [],
                    e = d.length,
                    f = !1,
                    g = !1,
                    h = function() {
                        g = !0
                    };
                for (var j = 0; j < d.length; j++) {
                    e !== d.length && !f && (this.sendWarning(d.length, e, a), f = !0);
                    l.log("iui:response cache hit", c, j);
                    var k = new i(d[j]),
                        n = k.listen("discard", h);
                    k.process();
                    n.remove();
                    if (g) {
                        l.log("iui:response cache discarded", c, j);
                        return
                    }
                }
                b && b()
            },
            sendWarning: function(a, b, c) {
                k(function() {
                    g("FIXME").warn("iui responses changed from %s to %s while applying cache for uri %s", b, a, c)
                }, 100)
            },
            clearCachedIUIResponses: function(a) {
                l.log("clear iui:response", a), m._iuiResponses[m._getCacheKey(a)] = []
            },
            setScrollHistory: function(a, b) {
                m._scrollHistory[m._getCacheKey(a)] = b
            },
            getScrollHistory: function(a) {
                a = m._getCacheKey(a);
                var b = m._scrollHistory[a];
                delete m._scrollHistory[a];
                return b
            },
            _getCacheKey: function(a) {
                return new j(a).normalize().toString()
            },
            _getItemByURI: function(a) {
                return m._pageCache[m._getCacheKey(a)]
            },
            _hasCacheExpired: function(a, b) {
                if (!a) return !0;
                a = a.time;
                if (b === 0) return !0;
                var c = Date.now();
                if (c >= a + b) return !0;
                return c <= a - 6e5 ? !0 : !1
            }
        };
    e.exports = m
}), null);
__d("MPageControllerPath", ["MAjaxSafety", "MHistory", "MURI", "gkx"], (function(a, b, c, d, e, f, g, h, i, j) {
    __p && __p();
    var k = null;

    function l(a, b) {
        var c = a === b;
        a = g.browserEncodeURI(a) === g.browserEncodeURI(b);
        return c !== a
    }
    e.exports = {
        isRequestPath: function(a) {
            if (!a || !k) return !a && !k;
            var b = k;
            a = new i(a).normalize().toString();
            l(b, a) && j("AT7zMB0I7eORfH-UodO4y3BTPg5wOO8T247ZMNn2q5-aNcyAQUvzZrGn32ptMehFmO1oqnCJmh_zFD3-bdTI6XU3_0z7OLdKJrGgHtrOitBdeg") && (b = g.browserEncodeURI(b), a = g.browserEncodeURI(a));
            return b === a
        },
        getRequestPath: function() {
            return k
        },
        setRequestPath: function(a) {
            k = a ? new i(a).normalize().addQueryData(h.SOFT_STATE_KEY, undefined).toString() : null
        }
    }
}), null);
__d("Banzai", ["BanzaiRefactored"], (function(a, b, c, d, e, f) {
    e.exports = b("BanzaiRefactored").module
}), null);
__d("IntlVariations", [], (function(a, b, c, d, e, f) {
    e.exports = {
        BITMASK_NUMBER: 28,
        BITMASK_GENDER: 3,
        NUMBER_ZERO: 16,
        NUMBER_ONE: 4,
        NUMBER_TWO: 8,
        NUMBER_FEW: 20,
        NUMBER_MANY: 12,
        NUMBER_OTHER: 24,
        GENDER_MALE: 1,
        GENDER_FEMALE: 2,
        GENDER_UNKNOWN: 3
    }
}), null);
__d("FbtNumberType", ["IntlNumberTypeConfig", "IntlVariations"], (function(a, b, c, d, e, f, g, h) {
    a = new Function("IntlVariations", '"use strict"; return (function(n) {' + g.impl + "});")(h);
    e.exports = {
        getNumberVariationType: a
    }
}), null);
__d("FbtReactUtil", [], (function(a, b, c, d, e, f) {
    a = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
    var g = !1;
    b = {
        REACT_ELEMENT_TYPE: a,
        defineProperty: function(a, b, c) {
            g ? Object.defineProperty(a, b, {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: c
            }) : a[b] = c
        }
    };
    e.exports = b
}), null);
__d("FbtResult", ["FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i;
    b = babelHelpers.inherits(a, h);
    i = b && b.prototype;

    function a(a) {
        "use strict";
        i.constructor.call(this, a), this.props = {
            content: a
        }, this.key = null, this.ref = null
    }
    c = function(a) {
        return a.content
    };
    a.prototype.type = c;
    a.prototype.$$typeof = g.REACT_ELEMENT_TYPE;
    e.exports = a
}), null);
__d("GenderConst", [], (function(a, b, c, d, e, f) {
    e.exports = {
        NOT_A_PERSON: 0,
        FEMALE_SINGULAR: 1,
        MALE_SINGULAR: 2,
        FEMALE_SINGULAR_GUESS: 3,
        MALE_SINGULAR_GUESS: 4,
        MIXED_SINGULAR: 5,
        MIXED_PLURAL: 5,
        NEUTER_SINGULAR: 6,
        UNKNOWN_SINGULAR: 7,
        FEMALE_PLURAL: 8,
        MALE_PLURAL: 9,
        NEUTER_PLURAL: 10,
        UNKNOWN_PLURAL: 11,
        UNKNOWN: 0
    }
}), null);
__d("I18nAssets", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a.prototype.isComponentScriptFastI18nAvailable = function() {
        return !1
    };
    a.prototype.getStringFromHashKey = function(a) {
        return ""
    };
    a.prototype.isNativeModuleAvailable = function() {
        return !1
    };
    a.prototype.getString = function(a) {
        return ""
    };

    function a() {}
    e.exports = new a()
}), null);
__d("InlineFbtResult", ["FbtReactUtil", "FbtResultBase", "cx"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();
    var j;

    function k(a, b, c, d) {
        var e = "_4qba";
        d && (b === "TRANSLATION" ? e = "_4qbb" : b === "APPROVE" ? e = "_4qbc" : b === "REPORT" && (e = "_4qbd"));
        return {
            $$typeof: g.REACT_ELEMENT_TYPE,
            type: "em",
            key: null,
            ref: null,
            props: {
                className: e,
                "data-intl-hash": d,
                "data-intl-translation": c,
                "data-intl-trid": "",
                children: a,
                suppressHydrationWarning: !0
            },
            _owner: null
        }
    }
    b = function(a) {
        return k(a.content, a.inlineMode, a.translation, a.hash)
    };
    c = babelHelpers.inherits(a, h);
    j = c && c.prototype;

    function a(a, b, c, d) {
        "use strict";
        j.constructor.call(this, a), this.props = {
            content: a,
            inlineMode: b,
            translation: c,
            hash: d
        }, this.key = null, this.ref = null
    }
    a.prototype.type = b;
    a.prototype.$$typeof = g.REACT_ELEMENT_TYPE;
    e.exports = a
}), null);
__d("escapeRegex", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }
    e.exports = a
}), null);
__d("intlNumUtils", ["NumberFormatConfig", "escapeRegex"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = 3;
    d = ["\u0433\u0440\u043d.", "\u0434\u0435\u043d.", "\u043b\u0432.", "\u043c\u0430\u043d.", "\u0564\u0580.", "\u062c.\u0645.", "\u062f.\u0625.", "\u062f.\u0627.", "\u062f.\u0628.", "\u062f.\u062a.", "\u062f.\u062c.", "\u062f.\u0639.", "\u062f.\u0643.", "\u062f.\u0644.", "\u062f.\u0645.", "\u0631.\u0633.", "\u0631.\u0639.", "\u0631.\u0642.", "\u0631.\u064a.", "\u0644.\u0633.", "\u0644.\u0644.", "\u0783.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."];
    var j = {};

    function k(a) {
        j[a] || (j[a] = new RegExp(a, "i"));
        return j[a]
    }
    var l = k(d.reduce(function(a, b, c) {
        return a + (c ? "|" : "") + "(" + h(b) + ")"
    }, ""));

    function m(a, b, c, d, e, f, g) {
        __p && __p();
        c = c || "";
        d = d || ".";
        e = e || 0;
        f = f || {
            primaryGroupSize: i,
            secondaryGroupSize: i
        };
        var j = f.primaryGroupSize || i;
        f = f.secondaryGroupSize || j;
        g = g && g.digits;
        b === undefined || b === null ? a = a.toString() : typeof a === "string" ? a = r(a, b) : a = p(a, b);
        b = a.toString().split(".");
        a = b[0];
        b = b[1];
        if (Math.abs(parseInt(a, 10)).toString().length >= e) {
            e = "$1" + c + "$2$3";
            j = "(\\d)(\\d{" + (j - 0) + "})($|\\D)";
            j = a.replace(k(j), e);
            if (j != a) {
                a = j;
                f = "(\\d)(\\d{" + (f - 0) + "})(" + h(c) + ")";
                c = k(f);
                while ((j = a.replace(c, e)) != a) a = j
            }
        }
        g && (a = n(a, g), b = b && n(b, g));
        f = a;
        b && (f += d + b);
        return f
    }

    function n(a, b) {
        var c = "";
        for (var d = 0; d < a.length; ++d) {
            var e = b[a.charCodeAt(d) - 48];
            c += e !== undefined ? e : a[d]
        }
        return c
    }

    function a(a, b) {
        return m(a, b, "", g.decimalSeparator, g.minDigitsForThousandsSeparator, g.standardDecimalPatternInfo, g.numberingSystemData)
    }

    function o(a, b) {
        return m(a, b, g.numberDelimiter, g.decimalSeparator, g.minDigitsForThousandsSeparator, g.standardDecimalPatternInfo, g.numberingSystemData)
    }

    function b(a, b, c) {
        var d = Math.floor(Math.log(a) / Math.LN10),
            e = a;
        d < c && (e = a * Math.pow(10, -d + c));
        a = Math.pow(10, Math.floor(Math.log(e) / Math.LN10) - c + 1);
        e = Math.round(e / a) * a;
        d < c && (e /= Math.pow(10, -d + c));
        return o(e, b)
    }

    function p(a, b) {
        __p && __p();
        b = b == null ? 0 : b;
        var c = Math.pow(10, b);
        a = a;
        a = Math.round(a * c) / c;
        a = a + "";
        if (!b) return a;
        if (a.indexOf("e-") !== -1) return a;
        c = a.indexOf(".");
        var d;
        c == -1 ? (a += ".", d = b) : d = b - (a.length - c - 1);
        for (var b = 0, c = d; b < c; b++) a += "0";
        return a
    }
    var q = function(a, b) {
        for (var c = 0; c < b; c++) a += "0";
        return a
    };

    function r(a, b) {
        var c = a.indexOf("."),
            d = c === -1 ? a : a.slice(0, c);
        a = c === -1 ? "" : a.slice(c + 1);
        return b ? d + "." + q(a.slice(0, b), b - a.length) : d
    }
    var s = {};
    (function(a) {
        s[a] || (s[a] = new RegExp("([^\\/p]|^)" + h(a) + "(\\d*).*", "i"));
        return s[a]
    });

    function t(a, b, c) {
        __p && __p();
        var d = v();
        d && (a = a.split("").map(function(a) {
            return d[a] || a
        }).join("").trim());
        a = a.replace(/^[^\d]*\-/, "\x02");
        a = a.replace(l, "");
        c = c || "";
        b = h(b);
        c = h(c);
        var e = k("^[^\\d]*\\d.*" + b + ".*\\d[^\\d]*$");
        if (!e.test(a)) {
            e = k("(^[^\\d]*)" + b + "(\\d*[^\\d]*$)");
            if (e.test(a)) {
                a = a.replace(e, "$1\x01$2");
                return u(a)
            }
            e = k("^[^\\d]*[\\d " + h(c) + "]*[^\\d]*$");
            e.test(a) || (a = "");
            return u(a)
        }
        e = k("(^[^\\d]*[\\d " + c + "]*)" + b + "(\\d*[^\\d]*$)");
        a = e.test(a) ? a.replace(e, "$1\x01$2") : "";
        return u(a)
    }

    function u(a) {
        a = a.replace(/[^0-9\u0001\u0002]/g, "").replace("\x01", ".").replace("\x02", "-");
        var b = Number(a);
        return a === "" || isNaN(b) ? null : b
    }

    function v() {
        var a = {},
            b = g.numberingSystemData && g.numberingSystemData.digits;
        if (!b) return null;
        for (var c = 0; c < b.length; c++) a[b.charAt(c)] = c.toString();
        return a
    }

    function c(a) {
        return t(a, g.decimalSeparator || ".", g.numberDelimiter)
    }
    var w = {
        formatNumber: a,
        formatNumberRaw: m,
        formatNumberWithThousandDelimiters: o,
        formatNumberWithLimitedSigFig: b,
        parseNumber: c,
        parseNumberRaw: t,
        truncateLongNumber: r,
        getFloatString: function(a, b, c) {
            a = String(a);
            a = a.split(".");
            b = w.getIntegerString(a[0], b);
            return a.length === 1 ? b : b + c + a[1]
        },
        getIntegerString: function(a, b) {
            b === "" && (b = ",");
            a = String(a);
            var c = /(\d+)(\d{3})/;
            while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
            return a
        }
    };
    e.exports = w
}), null);
__d("Intl", ["IntlPhonologicalRules", "memoize"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    c = "[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";
    var i = new RegExp(c + "[)\"'\xbb\u0f3b\u0f3d\u2019\u201d\u203a\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\uff07\uff09\uff3d\\s]*$"),
        j = h(function() {
            __p && __p();
            var a = [];
            for (var b in g.patterns) {
                var c = g.patterns[b];
                for (var d in g.meta) {
                    var e = new RegExp(d.slice(1, -1), "g"),
                        f = g.meta[d];
                    b = b.replace(e, f);
                    c = c.replace(e, f)
                }
                c === "javascript" && (c = function(a) {
                    return a.slice(1).toLowerCase()
                });
                a.push([new RegExp(b.slice(1, -1), "g"), c])
            }
            return a
        });

    function a(a) {
        var b = j();
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = d[0];
            d = d[1];
            a = a.replace(e, d)
        }
        return a.replace(/\x01/g, "")
    }

    function b(a) {
        return typeof a !== "string" ? !1 : i.test(a)
    }
    e.exports = {
        PUNCT_CHAR_CLASS: c,
        endsInPunct: b,
        applyPhonologicalRules: a
    }
}), null);
__d("substituteTokens", ["Intl", "invariant"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = new RegExp("\\{([^}]+)\\}(" + g.PUNCT_CHAR_CLASS + "*)", "g");

    function j(a) {
        return a
    }

    function a(a, b) {
        __p && __p();
        var c = b;
        if (!c) return a;
        typeof c === "object" || h(0);
        var d = [],
            e = [];
        b = a.replace(i, function(a, b, f) {
            a = c[b];
            if (a && typeof a === "object") {
                d.push(a);
                e.push(b);
                return "\x17" + f
            } else if (a === null) return "";
            return a + (g.endsInPunct(a) ? "" : f)
        }).split("\x17").map(g.applyPhonologicalRules);
        if (b.length === 1) return b[0];
        a = [b[0]];
        for (var f = 0; f < d.length; f++) a.push(j(d[f]), b[f + 1]);
        return a
    }
    e.exports = a
}), null);
__d("fbt", ["Banzai", "FbtLogger", "FbtNumberType", "FbtQTOverrides", "FbtResult", "FbtResultGK", "GenderConst", "I18nAssets", "InlineFbtResult", "IntlHoldoutGK", "IntlVariations", "IntlViewerContext", "intlNumUtils", "invariant", "substituteTokens"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    __p && __p();
    var v = h.logger,
        w = j.overrides,
        x = !1,
        y = {
            INDEX: 0,
            SUBSTITUTION: 1
        },
        z = {
            NUMBER: 0,
            GENDER: 1
        },
        A = {
            OBJECT: 0,
            POSSESSIVE: 1,
            REFLEXIVE: 2,
            SUBJECT: 3
        },
        B = "_1",
        C = {},
        D = function() {};
    D._ = function(a, b, c) {
        __p && __p();
        if (c && c.hash_key) {
            if (x) return {
                text: a,
                fbt: !0,
                hashKey: c.hash_key
            };
            var d = null;
            n.isComponentScriptFastI18nAvailable() && (d = n.getStringFromHashKey(c.hash_key));
            d == null && n.isNativeModuleAvailable() && (d = n.getString(c.hash_key), d && (d = JSON.parse(d)));
            a = d || a
        }
        c = {};
        d = a;
        a.__vcg && (b = b || [], b.unshift([
            [r.GENDER, "*"], null
        ]));
        b && (d = this._accessTable(a, c, b, 0), d !== null || t(0));
        a = d;
        b = null;
        n.isComponentScriptFastI18nAvailable() ? "\nNote: Certain fbt constructs such as fbt.plural() and the third positional `variations` argument to fbt.param() are currently disallowed" : "";
        typeof d === "string" || Array.isArray(d) || t(0);
        if (Array.isArray(d)) {
            a = d[0];
            b = d[1];
            d = "1_" + b;
            a = w[d] || a;
            w[d] && D.logQTImpression(b);
            D.logImpression(b)
        }
        d = C[a];
        var e = this._hasKeys(c);
        if (d && !e) return d;
        else {
            d = u(a, c);
            c = H(d, a, b);
            e || (C[a] = c);
            return c
        }
    };
    D._hasKeys = function(a) {
        for (var b in a) return !0;
        return !1
    };
    D._accessTable = function(a, b, c, d) {
        __p && __p();
        if (d >= c.length) return a;
        else if (a == null) return null;
        var e = null,
            f = c[d],
            g = f[y.INDEX];
        if (Array.isArray(g))
            for (var h = 0; h < g.length; ++h) {
                var i = a[g[h]];
                e = this._accessTable(i, b, c, d + 1);
                if (e != null) break
            } else a = g !== null ? a[g] : a, e = this._accessTable(a, b, c, d + 1);
        e != null && Object.assign(b, f[y.SUBSTITUTION]);
        return e
    };

    function E(a) {
        if (p.inIntlHoldout) return a === 1 ? [B, "*"] : ["*"];
        var b = i.getNumberVariationType(a);
        b & q.BITMASK_NUMBER || t(0);
        return a === 1 ? [B, b, "*"] : [b, "*"]
    }

    function F(a) {
        if (p.inIntlHoldout) return ["*"];
        a & q.BITMASK_GENDER || t(0);
        return [a, "*"]
    }
    D._enum = function(a, b) {
        return [a, null]
    };
    D._subject = function(a) {
        return [F(a), null]
    };
    D._param = function(a, b, c) {
        __p && __p();
        var d = null,
            e = !1;
        if (c)
            if (c[0] === z.NUMBER) {
                var f = c.length > 1 ? c[1] : b;
                typeof f === "number" || t(0);
                d = E(f);
                e = !0
            } else c[0] === z.GENDER ? (c.length > 1 || t(0), d = F(c[1])) : t(0);
        f = {};
        f[a] = e && typeof b === "number" ? s.formatNumberWithThousandDelimiters(b) : b;
        return [d, f]
    };
    D._plural = function(a, b, c) {
        var d = E(a),
            e = {};
        b && (typeof c === "number" ? e[b] = s.formatNumberWithThousandDelimiters(c) : e[b] = c || s.formatNumberWithThousandDelimiters(a));
        return [d, e]
    };
    D._pronoun = function(a, b, c) {
        b !== m.NOT_A_PERSON || !c || !c.human || t(0);
        c = G(a, b);
        return [
            [c, "*"], null
        ]
    };

    function G(a, b) {
        switch (b) {
            case m.NOT_A_PERSON:
                return a === A.OBJECT || a === A.REFLEXIVE ? m.NOT_A_PERSON : m.UNKNOWN_PLURAL;
            case m.FEMALE_SINGULAR:
            case m.FEMALE_SINGULAR_GUESS:
                return m.FEMALE_SINGULAR;
            case m.MALE_SINGULAR:
            case m.MALE_SINGULAR_GUESS:
                return m.MALE_SINGULAR;
            case m.MIXED_SINGULAR:
            case m.FEMALE_PLURAL:
            case m.MALE_PLURAL:
            case m.NEUTER_PLURAL:
            case m.UNKNOWN_PLURAL:
                return m.UNKNOWN_PLURAL;
            case m.NEUTER_SINGULAR:
            case m.UNKNOWN_SINGULAR:
                return a === A.REFLEXIVE ? m.NOT_A_PERSON : m.UNKNOWN_PLURAL
        }
        return m.NOT_A_PERSON
    }
    D._name = function(a, b, c) {
        c = F(c);
        var d = {};
        d[a] = b;
        return [c, d]
    };
    D.logImpression = function(a) {
        v && v.logImpression(a);
        return a
    };
    D.logQTImpression = function(a) {
        g.post("intl_qt_event", {
            hash: a
        });
        return a
    };

    function H(a, b, c) {
        if (!l.shouldReturnFbtResult && l.inlineMode !== "REPORT") return a;
        a = typeof a === "string" ? [a] : a;
        return l.inlineMode && l.inlineMode !== "NO_INLINE" ? new o(a, l.inlineMode, b, c) : new k(a)
    }
    D.enableJsonExportMode = function() {
        x = !0
    };
    D.disableJsonExportMode = function() {
        x = !1
    };
    e.exports = D
}), null);
__d("MErrorCodes", ["FBLogger", "fbt"], (function(a, b, c, d, e, f, g, h) {
    var i = {
        loadPageFailed: 876e3,
        showPageFailed: 876001,
        uncaughtException: 876002,
        noInternetConnection: 876003,
        badStatusCode: 876004,
        getMessage: function(a) {
            switch (a) {
                case i.loadPageFailed:
                    return h._("L\u1ed7i k\u1ebft n\u1ed1i");
                case i.noInternetConnection:
                    return h._("Kh\u00f4ng c\u00f3 k\u1ebft n\u1ed1i internet");
                case i.showPageFailed:
                case i.uncaughtException:
                case i.badStatusCode:
                    return h._("R\u1ea5t ti\u1ebfc, \u0111\u00e3 x\u1ea3y ra l\u1ed7i.");
                default:
                    g("FIXME").mustfix("Unhandled error code %d", a);
                    return h._("R\u1ea5t ti\u1ebfc, \u0111\u00e3 x\u1ea3y ra l\u1ed7i.")
            }
        }
    };
    e.exports = i
}), null);
__d("CurrentUser", ["Cookie", "CurrentUserInitialData"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = {
        getID: function() {
            return h.USER_ID
        },
        getAccountID: function() {
            return h.ACCOUNT_ID
        },
        getWorkUserID: function() {
            return h.WORK_USER_ID
        },
        getName: function() {
            return h.NAME
        },
        getShortName: function() {
            return h.SHORT_NAME
        },
        isLoggedIn: function() {
            return h.USER_ID && h.USER_ID !== "0"
        },
        isLoggedInNow: function() {
            if (!i.isLoggedIn()) return !1;
            if (h.IS_INTERN_SITE) return !0;
            if (h.IS_WORK_USER) return !0;
            return h.ORIGINAL_USER_ID ? h.ORIGINAL_USER_ID === g.get("c_user") : h.USER_ID === g.get("c_user")
        },
        isEmployee: function() {
            return !!h.IS_EMPLOYEE
        },
        hasWorkUser: function() {
            return !!h.HAS_WORK_USER
        },
        isWorkUser: function() {
            return !!h.IS_WORK_USER
        },
        isGray: function() {
            return !!h.IS_GRAY
        },
        isUnderage: function() {
            return !!h.IS_UNDERAGE
        },
        isMessengerOnlyUser: function() {
            return !!h.IS_MESSENGER_ONLY_USER
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !!h.IS_DEACTIVATED_ALLOWED_ON_MESSENGER
        }
    };
    e.exports = i
}), null);
__d("JSONStreamParser", ["FBJSON"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a(a) {
        "use strict";
        this.$1 = !1, this.$2 = 0, this.$3 = a || 0, this.$4 = 0
    }
    a.prototype.parse = function(a) {
        "use strict";
        var b, c = [];
        while (this.$3 < a.length) b = a.charAt(this.$3), this.$1 && b === "\\" ? this.$3++ : b === '"' ? this.$1 = !this.$1 : this.$1 || (b === "{" ? (this.$4 === 0 && (this.$2 = this.$3), this.$4++) : b === "}" && (this.$4--, this.$4 === 0 && c.push(g.parse(a.substring(this.$2, this.$3 + 1), e.id)))), this.$3++;
        return c
    };
    e.exports = a
}), null);
__d("XControllerURIBuilder", ["URI", "gkx", "invariant"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function j(a, b) {
        "use strict";
        this.$1 = {}, this.$2 = a, this.$3 = b
    }
    j.prototype.setInt = function(a, b) {
        "use strict";
        return this.__setParam(a, "Int", b)
    };
    j.prototype.setFBID = function(a, b) {
        "use strict";
        return this.__setParam(a, "FBID", b)
    };
    j.prototype.setFloat = function(a, b) {
        "use strict";
        return this.__setParam(a, "Float", b)
    };
    j.prototype.setString = function(a, b) {
        "use strict";
        return this.__setParam(a, "String", b)
    };
    j.prototype.setExists = function(a, b) {
        "use strict";
        b === !1 && (b = undefined);
        return this.__setParam(a, "Exists", b)
    };
    j.prototype.setBool = function(a, b) {
        "use strict";
        return this.__setParam(a, "Bool", b)
    };
    j.prototype.setEnum = function(a, b) {
        "use strict";
        return this.__setParam(a, "Enum", b)
    };
    j.prototype.setIntVector = function(a, b) {
        "use strict";
        return this.__setParam(a, "IntVector", b)
    };
    j.prototype.setIntKeyset = function(a, b) {
        "use strict";
        return this.__setParam(a, "IntKeyset", b)
    };
    j.prototype.setIntSet = function(a, b) {
        "use strict";
        return this.__setParam(a, "IntSet", b.join(","))
    };
    j.prototype.setFloatVector = function(a, b) {
        "use strict";
        return this.__setParam(a, "FloatVector", b)
    };
    j.prototype.setFloatSet = function(a, b) {
        "use strict";
        return this.__setParam(a, "FloatSet", b.join(","))
    };
    j.prototype.setStringVector = function(a, b) {
        "use strict";
        return this.__setParam(a, "StringVector", b)
    };
    j.prototype.setStringKeyset = function(a, b) {
        "use strict";
        return this.__setParam(a, "StringKeyset", b)
    };
    j.prototype.setStringSet = function(a, b) {
        "use strict";
        return this.__setParam(a, "StringSet", b)
    };
    j.prototype.setFBIDVector = function(a, b) {
        "use strict";
        return this.__setParam(a, "FBIDVector", b)
    };
    j.prototype.setFBIDSet = function(a, b) {
        "use strict";
        return this.__setParam(a, "FBIDSet", b)
    };
    j.prototype.setFBIDKeyset = function(a, b) {
        "use strict";
        return this.__setParam(a, "FBIDKeyset", b)
    };
    j.prototype.setEnumVector = function(a, b) {
        "use strict";
        return this.__setParam(a, "EnumVector", b)
    };
    j.prototype.setEnumSet = function(a, b) {
        "use strict";
        return this.__setParam(a, "EnumSet", b)
    };
    j.prototype.setEnumKeyset = function(a, b) {
        "use strict";
        return this.__setParam(a, "EnumKeyset", b)
    };
    j.prototype.setIntToIntMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "IntToIntMap", b)
    };
    j.prototype.setIntToFloatMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "IntToFloatMap", b)
    };
    j.prototype.setIntToStringMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "IntToStringMap", b)
    };
    j.prototype.setIntToBoolMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "IntToBoolMap", b)
    };
    j.prototype.setStringToIntMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "StringToIntMap", b)
    };
    j.prototype.setStringToFloatMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "StringToFloatMap", b)
    };
    j.prototype.setStringToStringMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "StringToStringMap", b)
    };
    j.prototype.setStringToNullableStringMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "StringToNullableStringMap", b)
    };
    j.prototype.setStringToBoolMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "StringToBoolMap", b)
    };
    j.prototype.setEnumToStringVectorMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "EnumToStringVectorMap", b)
    };
    j.prototype.setEnumToBoolMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "EnumToBoolMap", b)
    };
    j.prototype.setEnumToFBIDVectorMap = function(a, b) {
        "use strict";
        return this.__setParam(a, "EnumToFBIDVectorMap", b)
    };
    j.prototype.setHackType = function(a, b) {
        "use strict";
        return this.__setParam(a, "HackType", b)
    };
    j.prototype.setTypeAssert = function(a, b) {
        "use strict";
        return this.__setParam(a, "TypeAssert", b)
    };
    j.prototype.__validateRequiredParamsExistence = function() {
        "use strict";
        for (var a in this.$3) !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || i(0)
    };
    j.prototype.setParams = function(a) {
        "use strict";
        for (var b in a) {
            this.__assertParamExists(b);
            var c = this.$3[b].type;
            this.__setParam(b, c, a[b])
        }
        return this
    };
    j.prototype.__assertParamExists = function(a) {
        "use strict";
        a in this.$3 || i(0)
    };
    j.prototype.__setParam = function(a, b, c) {
        "use strict";
        this.__assertParamExists(a);
        var d = this.$3[a].type;
        d === b || i(0);
        this.__setParamInt(a, c);
        return this
    };
    j.prototype.__setParamInt = function(a, b) {
        "use strict";
        this.$1[a] = b
    };
    j.prototype.getRequest = function(a) {
        "use strict";
        h("AT4miIiW4pJzE0dukYVRr93bo-U7aeRzegmes3xLz6J7QfAO9xBCVDCcWNxQBaSegngcbU8UJ8KqD-c2mDX0kNsMkP4Db418yITqzzh_hAbRIA") && (a = a.setReplaceTransportMarkers());
        return a.setURI(this.getURI())
    };
    j.prototype.getURI = function() {
        "use strict";
        __p && __p();
        this.__validateRequiredParamsExistence();
        var a = {},
            b = "",
            c = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
            d = this.$2.split("/"),
            e = !1;
        for (var f = 0; f < d.length; f++) {
            var h = d[f];
            if (h === "") continue;
            var j = c.exec(h);
            if (!j) b += "/" + h;
            else {
                h = j[2] === "?";
                var k = j[4],
                    l = this.$3[k];
                l || i(0);
                if (h && e) continue;
                if (this.$1[k] == null && h) {
                    e = !0;
                    continue
                }
                this.$1[k] != null || i(0);
                l = j[1] ? j[1] : "";
                h = j[5] ? j[5] : "";
                b += "/" + l + this.$1[k] + h;
                a[k] = !0
            }
        }
        this.$2.slice(-1) === "/" && (b += "/");
        b === "" && (b = "/");
        j = new g(b);
        for (var m in this.$1) {
            l = this.$1[m];
            if (!a[m] && l != null) {
                h = this.$3[m];
                j.addQueryData(m, h && h.type === "Exists" ? null : l)
            }
        }
        return j
    };
    j.prototype.getLookasideURI = function() {
        "use strict";
        var a = "origincache.facebook.com";
        h("AT68bJwSI-83elN-7JSMMH9zt32KbiF6pW-XMlf6NViAJ3CbAk_16Vq8cK1tl1029_ApvFwINR8hmoci3nMKFTDhDCBp1wrvYQbOKq0pCjZpqA") && (a = "lookaside.internmc.facebook.com");
        return this.getURI().setDomain(a).setProtocol("https")
    };
    j.create = function(a, b) {
        "use strict";
        return function() {
            return new j(a, b)
        }
    };
    e.exports = j
}), null);
__d("XRequest", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = function a(b, c, d) {
        __p && __p();
        var e;
        switch (b) {
            case "Bool":
                e = c && c !== "false" && c !== "0" || !1;
                break;
            case "Int":
                e = c.toString();
                /-?\d+/.test(e) || g(0);
                break;
            case "Float":
                e = parseFloat(c, 10);
                isNaN(e) && g(0);
                break;
            case "FBID":
                e = c.toString();
                for (var f = 0; f < e.length; ++f) {
                    var h = e.charCodeAt(f);
                    48 <= h && h <= 57 || g(0)
                }
                break;
            case "String":
                e = c.toString();
                break;
            case "Enum":
                d === 0 ? e = a("Int", c, null) : d === 1 ? e = a("String", c, null) : d === 2 ? e = c : g(0);
                break;
            default:
                if (h = /^Nullable(\w+)$/.exec(b)) c === null ? e = null : e = a(h[1], c, d);
                else if (f = /^(\w+)Vector$/.exec(b)) {
                    !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c;
                    var i = f[1];
                    typeof i === "string" || g(0);
                    e = e.map(function(b) {
                        return a(i, b, d && d.member)
                    })
                } else if (h = /^(\w+)(Set|Keyset)$/.exec(b)) !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c, e = e.reduce(function(a, b) {
                    a[b] = b;
                    return a
                }, {}), i = h[1], typeof i === "string" || g(0), e = Object.keys(e).map(function(b) {
                    return a(i, e[b], d && d.member)
                });
                else if (f = /^(\w+)To(\w+)Map$/.exec(b)) {
                    e = {};
                    var j = f[1],
                        k = f[2];
                    typeof j === "string" && typeof k === "string" || g(0);
                    Object.keys(c).forEach(function(b) {
                        e[a(j, b, d && d.key)] = a(k, c[b], d && d.value)
                    })
                } else g(0)
        }
        return e
    };

    function a(a, b, c) {
        "use strict";
        __p && __p();
        this.$1 = b;
        this.$2 = babelHelpers["extends"]({}, c.getQueryData());
        b = a.split("/").filter(function(a) {
            return a
        });
        a = c.getPath().split("/").filter(function(a) {
            return a
        });
        for (var c = 0; c < b.length; ++c) {
            var d = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[c]);
            if (!d) {
                b[c] === a[c] || g(0);
                continue
            }
            var e = !!d[1],
                f = !!d[2];
            !f || c === b.length - 1 || g(0);
            d = d[3];
            Object.prototype.hasOwnProperty.call(this.$1, d) || g(0);
            this.$1[d].required ? e && g(0) : e || g(0);
            a[c] && (this.$2[d] = f ? a.slice(c).join("/") : a[c])
        }
        Object.keys(this.$1).forEach(function(a) {
            !this.$1[a].required || Object.prototype.hasOwnProperty.call(this.$2, a) || g(0)
        }, this)
    }
    a.prototype.getExists = function(a) {
        "use strict";
        return this.$2[a] !== undefined
    };
    a.prototype.getBool = function(a) {
        "use strict";
        return this.$3(a, "Bool")
    };
    a.prototype.getInt = function(a) {
        "use strict";
        return this.$3(a, "Int")
    };
    a.prototype.getFloat = function(a) {
        "use strict";
        return this.$3(a, "Float")
    };
    a.prototype.getFBID = function(a) {
        "use strict";
        return this.$3(a, "FBID")
    };
    a.prototype.getString = function(a) {
        "use strict";
        return this.$3(a, "String")
    };
    a.prototype.getEnum = function(a) {
        "use strict";
        return this.$3(a, "Enum")
    };
    a.prototype.getOptionalInt = function(a) {
        "use strict";
        return this.$4(a, "Int")
    };
    a.prototype.getOptionalFloat = function(a) {
        "use strict";
        return this.$4(a, "Float")
    };
    a.prototype.getOptionalFBID = function(a) {
        "use strict";
        return this.$4(a, "FBID")
    };
    a.prototype.getOptionalString = function(a) {
        "use strict";
        return this.$4(a, "String")
    };
    a.prototype.getOptionalEnum = function(a) {
        "use strict";
        return this.$4(a, "Enum")
    };
    a.prototype.getIntVector = function(a) {
        "use strict";
        return this.$3(a, "IntVector")
    };
    a.prototype.getFloatVector = function(a) {
        "use strict";
        return this.$3(a, "FloatVector")
    };
    a.prototype.getFBIDVector = function(a) {
        "use strict";
        return this.$3(a, "FBIDVector")
    };
    a.prototype.getStringVector = function(a) {
        "use strict";
        return this.$3(a, "StringVector")
    };
    a.prototype.getEnumVector = function(a) {
        "use strict";
        return this.$3(a, "EnumVector")
    };
    a.prototype.getOptionalIntVector = function(a) {
        "use strict";
        return this.$4(a, "IntVector")
    };
    a.prototype.getOptionalFloatVector = function(a) {
        "use strict";
        return this.$4(a, "FloatVector")
    };
    a.prototype.getOptionalFBIDVector = function(a) {
        "use strict";
        return this.$4(a, "FBIDVector")
    };
    a.prototype.getOptionalStringVector = function(a) {
        "use strict";
        return this.$4(a, "StringVector")
    };
    a.prototype.getOptionalEnumVector = function(a) {
        "use strict";
        return this.$4(a, "EnumVector")
    };
    a.prototype.getIntSet = function(a) {
        "use strict";
        return this.$3(a, "IntSet")
    };
    a.prototype.getFBIDSet = function(a) {
        "use strict";
        return this.$3(a, "FBIDSet")
    };
    a.prototype.getFBIDKeyset = function(a) {
        "use strict";
        return this.$3(a, "FBIDKeyset")
    };
    a.prototype.getStringSet = function(a) {
        "use strict";
        return this.$3(a, "StringSet")
    };
    a.prototype.getEnumKeyset = function(a) {
        "use strict";
        return this.$3(a, "EnumKeyset")
    };
    a.prototype.getOptionalIntSet = function(a) {
        "use strict";
        return this.$4(a, "IntSet")
    };
    a.prototype.getOptionalFBIDSet = function(a) {
        "use strict";
        return this.$4(a, "FBIDSet")
    };
    a.prototype.getOptionalFBIDKeyset = function(a) {
        "use strict";
        return this.$4(a, "FBIDKeyset")
    };
    a.prototype.getOptionalStringSet = function(a) {
        "use strict";
        return this.$4(a, "StringSet")
    };
    a.prototype.getEnumToBoolMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToBoolMap")
    };
    a.prototype.getEnumToEnumMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToEnumMap")
    };
    a.prototype.getEnumToFloatMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToFloatMap")
    };
    a.prototype.getEnumToIntMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToIntMap")
    };
    a.prototype.getEnumToStringMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToStringMap")
    };
    a.prototype.getIntToBoolMap = function(a) {
        "use strict";
        return this.$3(a, "IntToBoolMap")
    };
    a.prototype.getIntToEnumMap = function(a) {
        "use strict";
        return this.$3(a, "IntToEnumMap")
    };
    a.prototype.getIntToFloatMap = function(a) {
        "use strict";
        return this.$3(a, "IntToFloatMap")
    };
    a.prototype.getIntToIntMap = function(a) {
        "use strict";
        return this.$3(a, "IntToIntMap")
    };
    a.prototype.getIntToStringMap = function(a) {
        "use strict";
        return this.$3(a, "IntToStringMap")
    };
    a.prototype.getStringToBoolMap = function(a) {
        "use strict";
        return this.$3(a, "StringToBoolMap")
    };
    a.prototype.getStringToEnumMap = function(a) {
        "use strict";
        return this.$3(a, "StringToEnumMap")
    };
    a.prototype.getStringToFloatMap = function(a) {
        "use strict";
        return this.$3(a, "StringToFloatMap")
    };
    a.prototype.getStringToIntMap = function(a) {
        "use strict";
        return this.$3(a, "StringToIntMap")
    };
    a.prototype.getStringToStringMap = function(a) {
        "use strict";
        return this.$3(a, "StringToStringMap")
    };
    a.prototype.getOptionalEnumToBoolMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToBoolMap")
    };
    a.prototype.getOptionalEnumToEnumMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToEnumMap")
    };
    a.prototype.getOptionalEnumToFloatMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToFloatMap")
    };
    a.prototype.getOptionalEnumToIntMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToIntMap")
    };
    a.prototype.getOptionalEnumToStringMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToStringMap")
    };
    a.prototype.getOptionalIntToBoolMap = function(a) {
        "use strict";
        return this.$4(a, "IntToBoolMap")
    };
    a.prototype.getOptionalIntToEnumMap = function(a) {
        "use strict";
        return this.$4(a, "IntToEnumMap")
    };
    a.prototype.getOptionalIntToFloatMap = function(a) {
        "use strict";
        return this.$4(a, "IntToFloatMap")
    };
    a.prototype.getOptionalIntToIntMap = function(a) {
        "use strict";
        return this.$4(a, "IntToIntMap")
    };
    a.prototype.getOptionalIntToStringMap = function(a) {
        "use strict";
        return this.$4(a, "IntToStringMap")
    };
    a.prototype.getOptionalStringToBoolMap = function(a) {
        "use strict";
        return this.$4(a, "StringToBoolMap")
    };
    a.prototype.getOptionalStringToEnumMap = function(a) {
        "use strict";
        return this.$4(a, "StringToEnumMap")
    };
    a.prototype.getOptionalStringToFloatMap = function(a) {
        "use strict";
        return this.$4(a, "StringToFloatMap")
    };
    a.prototype.getOptionalStringToIntMap = function(a) {
        "use strict";
        return this.$4(a, "StringToIntMap")
    };
    a.prototype.getOptionalStringToStringMap = function(a) {
        "use strict";
        return this.$4(a, "StringToStringMap")
    };
    a.prototype.getEnumToNullableEnumMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToNullableEnumMap")
    };
    a.prototype.getEnumToNullableFloatMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToNullableFloatMap")
    };
    a.prototype.getEnumToNullableIntMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToNullableIntMap")
    };
    a.prototype.getEnumToNullableStringMap = function(a) {
        "use strict";
        return this.$3(a, "EnumToNullableStringMap")
    };
    a.prototype.getIntToNullableEnumMap = function(a) {
        "use strict";
        return this.$3(a, "IntToNullableEnumMap")
    };
    a.prototype.getIntToNullableFloatMap = function(a) {
        "use strict";
        return this.$3(a, "IntToNullableFloatMap")
    };
    a.prototype.getIntToNullableIntMap = function(a) {
        "use strict";
        return this.$3(a, "IntToNullableIntMap")
    };
    a.prototype.getIntToNullableStringMap = function(a) {
        "use strict";
        return this.$3(a, "IntToNullableStringMap")
    };
    a.prototype.getStringToNullableEnumMap = function(a) {
        "use strict";
        return this.$3(a, "StringToNullableEnumMap")
    };
    a.prototype.getStringToNullableFloatMap = function(a) {
        "use strict";
        return this.$3(a, "StringToNullableFloatMap")
    };
    a.prototype.getStringToNullableIntMap = function(a) {
        "use strict";
        return this.$3(a, "StringToNullableIntMap")
    };
    a.prototype.getStringToNullableStringMap = function(a) {
        "use strict";
        return this.$3(a, "StringToNullableStringMap")
    };
    a.prototype.getOptionalEnumToNullableEnumMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToNullableEnumMap")
    };
    a.prototype.getOptionalEnumToNullableFloatMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToNullableFloatMap")
    };
    a.prototype.getOptionalEnumToNullableIntMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToNullableIntMap")
    };
    a.prototype.getOptionalEnumToNullableStringMap = function(a) {
        "use strict";
        return this.$4(a, "EnumToNullableStringMap")
    };
    a.prototype.getOptionalIntToNullableEnumMap = function(a) {
        "use strict";
        return this.$4(a, "IntToNullableEnumMap")
    };
    a.prototype.getOptionalIntToNullableFloatMap = function(a) {
        "use strict";
        return this.$4(a, "IntToNullableFloatMap")
    };
    a.prototype.getOptionalIntToNullableIntMap = function(a) {
        "use strict";
        return this.$4(a, "IntToNullableIntMap")
    };
    a.prototype.getOptionalIntToNullableStringMap = function(a) {
        "use strict";
        return this.$4(a, "IntToNullableStringMap")
    };
    a.prototype.getOptionalStringToNullableEnumMap = function(a) {
        "use strict";
        return this.$4(a, "StringToNullableEnumMap")
    };
    a.prototype.getOptionalStringToNullableFloatMap = function(a) {
        "use strict";
        return this.$4(a, "StringToNullableFloatMap")
    };
    a.prototype.getOptionalStringToNullableIntMap = function(a) {
        "use strict";
        return this.$4(a, "StringToNullableIntMap")
    };
    a.prototype.getOptionalStringToNullableStringMap = function(a) {
        "use strict";
        return this.$4(a, "StringToNullableStringMap")
    };
    a.prototype.$3 = function(a, b) {
        "use strict";
        this.$5(a, b);
        var c = this.$1[a];
        if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
            c.required && g(0);
            return h(b, c.defaultValue, c.enumType)
        }
        c.required || b === "Bool" || c.defaultValue != null || g(0);
        return h(b, this.$2[a], c.enumType)
    };
    a.prototype.$4 = function(a, b) {
        "use strict";
        this.$5(a, b);
        var c = this.$1[a];
        c.required && g(0);
        c.defaultValue && g(0);
        return Object.prototype.hasOwnProperty.call(this.$2, a) ? h(b, this.$2[a], c.enumType) : null
    };
    a.prototype.$5 = function(a, b) {
        "use strict";
        Object.prototype.hasOwnProperty.call(this.$1, a) || g(0), this.$1[a].type === b || g(0)
    };
    e.exports = a
}), null);
__d("XController", ["XControllerURIBuilder", "XRequest"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();

    function i(a, b) {
        "use strict";
        this.$1 = a, this.$2 = b
    }
    i.prototype.getURIBuilder = function(a) {
        "use strict";
        __p && __p();
        var b = new g(this.$1, this.$2);
        if (a) {
            var c = this.getRequest(a);
            Object.keys(this.$2).forEach(function(a) {
                var d = this.$2[a],
                    e = "";
                !d.required && !Object.prototype.hasOwnProperty.call(d, "defaultValue") && (e = "Optional");
                e = "get" + e + d.type;
                e = c[e](a);
                if (e == null || Object.prototype.hasOwnProperty.call(d, "defaultValue") && e === d.defaultValue) return;
                d = "set" + d.type;
                b[d](a, e)
            }, this)
        }
        return b
    };
    i.prototype.getRequest = function(a) {
        "use strict";
        return new h(this.$1, this.$2, a)
    };
    i.create = function(a, b) {
        "use strict";
        return new i(a, b)
    };
    e.exports = i
}), null);
__d("XFailedMRequestsLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/logging/mrequest/fail/", {
        request_type: {
            type: "String",
            required: !0
        },
        request_id: {
            type: "String"
        },
        original_client_time: {
            type: "Int"
        },
        original_network_type: {
            type: "String"
        },
        original_effective_network_type: {
            type: "String"
        },
        original_downlink: {
            type: "Int"
        },
        original_rtt: {
            type: "Int"
        },
        current_client_time: {
            type: "Int"
        },
        current_network_type: {
            type: "String"
        },
        current_effective_network_type: {
            type: "String"
        },
        current_downlink: {
            type: "Int"
        },
        current_rtt: {
            type: "Int"
        }
    })
}), null);
__d("getAsyncHeaders", ["ZeroCategoryHeader", "isFacebookURI"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        var b = {};
        h(a) && g.value && (b[g.header] = g.value);
        return b
    }
    e.exports = a
}), null);
__d("MRequest", ["ArtilleryJSPointTypes", "CSRFGuard", "CurrentUser", "DTSG", "DTSGUtils", "FBLogger", "JSONStreamParser", "LogHistory", "MHistory", "MRequestConfig", "MRequestDataSerializer", "MRequestGateway", "MRequestTypes", "MURI", "ServerJSDefine", "SprinkleConfig", "Stratcom", "TimeSlice", "XFailedMRequestsLoggingController", "ZeroRewrites", "eventsMixinDeprecated", "ex", "getAsyncHeaders", "getCrossOriginTransport", "gkx", "invariant", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G) {
    __p && __p();
    var H = n.getInstance("request"),
        I = null,
        J = new RegExp("^(?:/?[\\w\\.-])+/?(?:[\\?#]|$)"),
        K = new RegExp("^" + location.protocol + "//" + location.host.replace(/\./g, "\\.") + "/"),
        L = 1;

    function M(a) {
        return !!(J.test(a.toString()) || K.test(a.toString()) || z.isRewriteSafe(new t(a)))
    }

    function N(a) {
        a.reset(), a.send()
    }

    function O(a) {
        "use strict";
        __p && __p();
        this._autoProcess = !0;
        this._autoRetry = !1;
        this._backgroundRetry = null;
        this._cors = !1;
        this._doneInvoked = !1;
        this._data = null;
        this._finished = !1;
        this._fullPage = !1;
        this._headers = {};
        this._ignoreErrors = !1;
        this._loaded = 0;
        this._method = "POST";
        this._sent = !1;
        this._timeSliceInteraction = null;
        this._timeout = null;
        this._timer = null;
        this._type = s.INDEPENDENT;
        this._transport = null;
        this._raw = !1;
        this._rawData = null;
        this._requestForFailureLogging = null;
        this._readOnly = !1;
        this._referrer = window.location.href;
        this._xportID = 1;
        this.setURI(a || "");
        a = function(a) {
            l("timeslice").warn("MRequest continuation used without calling send");
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            return a.apply(this, c)
        };
        a.last = a;
        this._continuation = a;
        var b, c, d = null;
        this.listen("statechange", function(a) {
            __p && __p();
            a = a.getTransport();
            var e = a.readyState;
            if (e < 3) return;
            if (p.checkResponseOrigin && a.responseURL) {
                e = new t(this._uri);
                var f = new t(a.responseURL);
                e = e.getDomain() || window.location.hostname;
                f.getDomain() === e || z.isRewriteSafe(f) || F(0)
            }
            e = a.responseText;
            e.length > 0 && this._onprogress(a, {
                lengthComputable: !1,
                loaded: e.length,
                total: 0
            });
            if (d === null) {
                if (e.length <= h.length) return;
                f = e.match(h.regex);
                f && (d = !0, c = new m(f[0].length))
            }
            try {
                f = d ? c.parse(e) : [];
                for (var i = 0; i < f.length; ++i) {
                    var j = f[i];
                    b || (b = j, this._timeSliceInteraction && this._timeSliceInteraction.receiveAsyncResponse(j).inform("async_response_starting", g.ASYNC_RESPONSE_RECEIVED));
                    if (j.error) {
                        this._fail({
                            code: j.error,
                            description: j.errorDescription,
                            summary: j.errorSummary,
                            backtrace: j.errorBacktrace,
                            isWarning: j.errorIsWarning,
                            isSilent: j.silentError,
                            isTransient: j.transientError
                        });
                        return
                    }
                    H.log("response", this.__id__, this.getURI());
                    this._continuation(function() {
                        this.invoke("response", this.getRaw() ? j : j.payload, this)
                    }.bind(this))
                }
                if (a.readyState !== 4) return;
                this._timeSliceInteraction && this._timeSliceInteraction.inform("async_response_finished");
                if (a.status !== 0 && (a.status < 200 || a.status >= 300)) {
                    this._fail();
                    return
                }
                if (!b) {
                    this._fail();
                    if (!d) throw new Error(B("MRequest(%s, ...): server returned an invalid response: No CSRF guard: %s", this.getURI(), e.substring(0, 100)));
                    return
                }
                this._done(b)
            } catch (a) {
                this._fail();
                throw new Error(B('MRequest("%s", ...): server returned a partial invalid response. There may be broken functionality or partially rendered content on this page. %s', this.getURI(), a))
            }
        }.bind(this));
        this.listen("open", function() {
            if (!this.getCORS()) {
                var a = this.getTransport();
                a.setRequestHeader("X-Response-Format", "JSONStream")
            }
        }.bind(this));
        this.listen("error", function(a) {
            w.pass(), !this.getIgnoreErrors() && a && typeof a !== "string" && !a.isHandled && this._defaultErrorHandler(a)
        }.bind(this))
    }
    O.prototype._defaultErrorHandler = function(a) {
        "use strict";
        if (a.code) {
            a = new t("/error/index.php").addQueryData({
                err: "ec",
                kerr: a.code,
                kerr_summary: a.summary,
                kerr_description: a.description
            });
            o.pushState(a)
        }
    };
    O.prototype.setType = function(a) {
        "use strict";
        this._type = a;
        return this
    };
    O.prototype.getType = function() {
        "use strict";
        return this._type
    };
    O.prototype.setAutoProcess = function(a) {
        "use strict";
        this._autoProcess = a;
        return this
    };
    O.prototype.getAutoProcess = function() {
        "use strict";
        return this._autoProcess
    };
    O.prototype.setFullPage = function(a) {
        "use strict";
        this._fullPage = a;
        return this
    };
    O.prototype.getFullPage = function() {
        "use strict";
        return this._fullPage
    };
    O.prototype.setReferrer = function(a) {
        "use strict";
        this._referrer = a;
        return this
    };
    O.prototype.getReferrer = function() {
        "use strict";
        return this._referrer
    };
    O.prototype.setAutoRetry = function(a) {
        "use strict";
        this._autoRetry = a;
        return this
    };
    O.prototype.getAutoRetry = function() {
        "use strict";
        return this._autoRetry
    };
    O.prototype.setBackgroundRetry = function(a) {
        "use strict";
        this._backgroundRetry = a;
        return this
    };
    O.prototype.getBackgroundRetry = function() {
        "use strict";
        return this._backgroundRetry
    };
    O.prototype.setFailureLogging = function(a) {
        "use strict";
        __p && __p();
        if (!E("AT6vIKc4yvpLzvCe00DDqmWnCcWW9gg6lvyzBsK0MPzrJqNmyZ-lzLSw8lY20YNrZBEF7JSPcBJS9N9bCmn1zMDUn2EIk_0tdJz3AHqh5jmikg")) return this;
        var b = new t(this.getURI()).addQueryData("mreqtyp", a).addQueryData("swinst", !!(navigator.serviceWorker && navigator.serviceWorker.controller));
        this.setURI(b.toString());
        b = y.getURIBuilder().setString("request_type", a).setInt("original_client_time", Date.now());
        a = navigator.connection;
        a && (b.setString("original_network_type", a.type), b.setString("original_effective_network_type", a.effectiveType), b.setInt("original_downlink", Math.round(a.downlink * 1e3)), b.setInt("original_rtt", a.rtt));
        this._requestForFailureLogging = new O(b.getURI());
        this._requestForFailureLogging.setMethod("GET");
        return this
    };
    O.prototype.getFailureLoggingRequest = function() {
        "use strict";
        return this._requestForFailureLogging
    };
    O.prototype.setMethod = function(a) {
        "use strict";
        this._method = a;
        return this
    };
    O.prototype.getMethod = function() {
        "use strict";
        return this._method
    };
    O.prototype.setRawData = function(a) {
        "use strict";
        this._rawData = a;
        return this
    };
    O.prototype.getRawData = function() {
        "use strict";
        return this._rawData
    };
    O.prototype.setRaw = function(a) {
        "use strict";
        this._raw = a;
        return this
    };
    O.prototype.getRaw = function() {
        "use strict";
        return this._raw
    };
    O.prototype.setTimeout = function(a) {
        "use strict";
        this._timeout = a;
        return this
    };
    O.prototype.getTimeout = function() {
        "use strict";
        return this._timeout
    };
    O.prototype.setCORS = function(a) {
        "use strict";
        this._cors = a;
        return this
    };
    O.prototype.getCORS = function() {
        "use strict";
        return this._cors
    };
    O.prototype.setIgnoreErrors = function(a) {
        "use strict";
        this._ignoreErrors = a;
        return this
    };
    O.prototype.getIgnoreErrors = function() {
        "use strict";
        return this._ignoreErrors
    };
    O.prototype.setReadOnly = function(a) {
        "use strict";
        typeof a !== "boolean" ? !1 : this._readOnly = a;
        return this
    };
    O.prototype.getReadOnly = function() {
        "use strict";
        return this._readOnly
    };
    O.prototype.getTransport = function() {
        "use strict";
        this._transport || (this._transport = this.getCORS() && !z.isRewriteSafe(new t(this.getURI())) ? D() : z.getTransportBuilderForURI(new t(this.getURI()))());
        return this._transport
    };
    O.prototype.setRequestHeader = function(a, b) {
        "use strict";
        this._headers[a] = b.toString()
    };
    O.prototype.canAbort = function() {
        "use strict";
        return this.getType() !== s.INDEPENDENT
    };
    O.prototype.send = function() {
        "use strict";
        this._timeSliceInteraction && this._timeSliceInteraction.inform("send_queued"), this._continuation = x.getReusableContinuation("MRequest response received"), r.send(this)
    };
    O.prototype.sendAfterProcessing = function() {
        "use strict";
        __p && __p();
        H.log("send", this.__id__, this.getURI());
        if (this._sent || this._finished) return;
        this.invoke("start", this);
        this._timeSliceInteraction && this._timeSliceInteraction.addArtilleryIDHeader(this).inform("async_request_sent", {
            type: g.ASYNC_REQUEST_SENT
        });
        var a = this.getTransport();
        a.id = this._xportID;
        if (M(this.getURI()) && this.getMethod().toUpperCase() === "POST") {
            var b = j.getCachedToken();
            if (b) {
                this.replaceData({
                    fb_dtsg: b
                });
                if (v.param_name) {
                    var c;
                    this.replaceData((c = {}, c[v.param_name] = k.getNumericValue(b), c))
                }
            } else {
                this.abort();
                j.getToken().done(function() {
                    return N(this)
                }.bind(this));
                return
            }
            b = p.lsd;
            b && this.replaceData({
                lsd: b
            })
        }
        if (this._finished) return;
        this.replaceData({
            __dyn: u.getLoadedModuleHash()
        });
        this.replaceData({
            __req: (L++).toString(36)
        });
        a.onreadystatechange = this._onreadystatechange.bind(this, a);
        a.upload && this._rawData && (a.upload.onprogress = function(b) {
            return this._onuploadprogress(a, b)
        }.bind(this));
        c = this.getMethod().toUpperCase();
        this.replaceData({
            __ajax__: p.ajaxResponseToken.encrypted,
            __user: i.getID()
        });
        b = this._data || [];
        b = q.defaultDataSerializer(b);
        var d = this.getURI();
        (c == "GET" || this.getRawData()) && (d += (d.indexOf("?") === -1 ? "?" : "&") + b);
        this.getTimeout() && (this._timer = G(this._fail.bind(this, O.ERROR_TIMEOUT + ""), this.getTimeout()));
        try {
            a.open(c, d, !0)
        } catch (a) {
            H.warn("xport.send", this.__id__, this.getURI(), a.message);
            this._fail(a.message);
            return
        }
        this.invoke("open", this);
        if (this._finished) return;
        this.invoke("send", this);
        if (this._finished) return;
        d = null;
        c == "POST" && (d = this.getRawData(), d || (this.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), d = b));
        var e = C(new t(this.getURI()));
        Object.keys(e).forEach(function(b) {
            a.setRequestHeader(b, e[b])
        });
        if (this._headers)
            for (var f in this._headers) a.setRequestHeader(f, this._headers[f]);
        a.send(d);
        this._sent = !0
    };
    O.prototype.reset = function() {
        "use strict";
        H.log("reset", this.__id__, this.getURI()), this._transport = null, this._sent = !1, this._finished = !1
    };
    O.prototype.abort = function() {
        "use strict";
        this._cleanup()
    };
    O.prototype._onprogress = function(a, b) {
        "use strict";
        if (a.id < this._xportID) return;
        if (!this.getCORS()) {
            a = a.getResponseHeader("X-Loader-Length");
            a !== null && (b.loaderLength = parseInt(a, 10) || 0)
        }
        this.invoke("progress", b);
        this._loaded = b.loaded
    };
    O.prototype._onuploadprogress = function(a, b) {
        "use strict";
        if (a.id < this._xportID) return;
        this._continuation(function() {
            this.invoke("uploadprogress", b)
        }.bind(this))
    };
    O.prototype._onreadystatechange = function(a) {
        "use strict";
        __p && __p();
        if (a.id < this._xportID) return;
        I = this;
        var b;
        try {
            this._continuation(function() {
                this.invoke("statechange", this)
            }.bind(this));
            if (this._finished) return;
            if (a.readyState != 4) return;
            if (a.status < 200 || a.status >= 300) {
                this._fail("status=" + a.status);
                return
            }
            b = this._extractResponse(a);
            if (!b) {
                H.error("response extract failed", this.__id__, this.getURI());
                throw new Error(B('Request("%s", ...): response extract failed', this.getURI()))
            }
        } catch (a) {
            this._fail(a.message);
            return
        } finally {
            I = null
        }
        I = this;
        try {
            this._handleResponse(b), this._cleanup()
        } catch (a) {
            G(function() {
                throw a
            }, 0)
        } finally {
            I = null
        }
    };
    O.prototype._extractResponse = function(a) {
        "use strict";
        a = h.clean(a.responseText);
        try {
            return JSON.parse(a)
        } catch (a) {
            return null
        }
    };
    O.prototype._fail = function(a) {
        "use strict";
        if (this._finished) return;
        this._continuation.last(function() {
            a === O.ERROR_TIMEOUT + "" && w.invoke("MRequest:timeout", null, this.getURI()), H.error("fail", this.__id__, this.getURI(), a, "onLine=" + navigator.onLine.toString(), "connection=" + (navigator.connection && navigator.connection.type)), this._cleanup(), this.invoke("error", a, this), this.invoke("finally")
        }.bind(this))
    };
    O.prototype._done = function(a) {
        "use strict";
        __p && __p();
        if (this._finished || this._doneInvoked) return;
        this._continuation.last(function() {
            H.log("done", this.__id__, this.getURI());
            this._cleanup();
            this._doneInvoked = !0;
            if (a.onload)
                for (var b = 0; b < a.onload.length; b++) new Function(a.onload[b])();
            this.invoke("done", this.getRaw() ? a : a.payload, this);
            w.invoke("MRequest:done", null, a);
            this._invokeFinallyHandler()
        }.bind(this))
    };
    O.prototype._invokeFinallyHandler = function() {
        "use strict";
        this.invoke("finally")
    };
    O.prototype._cleanup = function() {
        "use strict";
        this._finished = !0, clearTimeout(this._timer), this._timer = null, this._xportID++, this._transport && this._transport.readyState != 4 && (H.warn("abort", this.__id__, this.getURI()), this._transport && this._transport.abort()), x.cancel(this._continuation)
    };
    O.prototype.setData = function(a) {
        "use strict";
        this._data = null;
        this.addData(a);
        return this
    };
    O.prototype.addData = function(a) {
        "use strict";
        this._data || (this._data = []);
        for (var b in a) this._data.push([b, a[b]]);
        return this
    };
    O.prototype.replaceData = function(a) {
        "use strict";
        this._data && (this._data = this._data.filter(function(b) {
            b = b[0];
            return !Object.prototype.hasOwnProperty.call(a, b)
        }));
        return this.addData(a)
    };
    O.prototype.setURI = function(a) {
        "use strict";
        this._uri = z.rewriteURI(new t(a)).toString();
        z.isRewriteSafe(new t(this._uri)) && this.setCORS(!0);
        return this
    };
    O.prototype.getURI = function() {
        "use strict";
        return this._uri
    };
    O.prototype._handleResponse = function(a) {
        "use strict";
        if (this._doneInvoked) return;
        H.log("done", this.__id__, this.getURI());
        this._cleanup();
        this._doneInvoked = !0;
        this.invoke("done", a, this);
        this.invoke("finally")
    };
    O.getContextualInstance = function() {
        "use strict";
        return I
    };
    O.ERROR_TIMEOUT = -9e3;
    A(O, ["start", "open", "send", "statechange", "done", "error", "finally", "progress", "uploadprogress", "fail", "process", "response", "postprocess"]);
    e.exports = O;
    a.MRequest = O
}), null);
__d("MPageFetcher", ["MErrorCodes", "MPageCache", "MPageControllerPath", "MRequest", "MRequestTypes", "MURI", "Stratcom", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    __p && __p();
    var o = {
        FETCH_TIMEOUT_MS: 10 * 1e3,
        _pending: {},
        _handlers: [],
        fetch: function(a, b, c, d) {
            __p && __p();
            if (!o._acquireAccess(b)) return;
            var e = new l(b).addQueryData("__m_async_page__", "").setFaceweb(window.FW_ENABLED);
            h.getCachedPage(b) && e.addQueryData("__cached__", "");
            var f = {
                path: new l(b).normalize().toString(),
                method: a,
                progress: undefined,
                success: undefined
            };
            m.invoke("m:page:async:start", null, f);
            e.setFragment(null);
            var j = this.createRequest(a, e, c);
            j.listen("progress", function(a) {
                a.loaded && a.loaderLength && (f.progress = Math.min(a.loaded / a.loaderLength, 1), m.invoke("m:page:async:progress", null, f))
            });
            j.listen("process", function(c) {
                m.context().stop(), o._releaseAccess(b), c.response && (f.success = !0, m.invoke("m:page:async:handle", null, f), a === "GET" && (c.response.isPagelet() ? h.addCachedIUIResponse(b, c.response) : (h.setCachedPage(b, c.response), h.clearCachedIUIResponses(b))), i.isRequestPath(b) && (d && d(c.response)))
            });
            j.listen("fail", function() {
                o._releaseAccess(b), o._handleFail(g.loadPageFailed, b, j, f, d)
            });
            j.listen("error", function() {
                o._releaseAccess(b);
                var a = j.getTransport().status;
                a = a !== 0 && (a < 200 || a >= 300) ? g.badStatusCode : g.loadPageFailed;
                o._handleFail(a, b, j, f, d)
            });
            j.listen("finally", function() {
                o._releaseAccess(b)
            });
            j.send();
            return j
        },
        addHandler: function(a) {
            this._handlers.push(a)
        },
        createRequest: function(a, b, c) {
            var d;
            for (var e = 0; e < this._handlers.length; e++) {
                d = this._handlers[e](a, b, c);
                if (d) return d
            }
            d = b.toString();
            return new j(d).setType(k.TRANSITION).setData(c).setMethod(a).setFullPage(!0)
        },
        _handleFail: function(a, b, c, d, e) {
            __p && __p();
            d.success = !1;
            m.invoke("m:page:async:handle", null, d);
            if (c.getTransport().status === 0) {
                n(function() {
                    i.isRequestPath(b) && (a = g.noInternetConnection, m.invoke("m:page:error", null, a))
                }, 2e3);
                return
            }
            h.removeCachedPage(b);
            h.clearCachedIUIResponses(b);
            i.isRequestPath(b) && (e && e(null, a));
            m.invoke("m:page:async:complete", null, d)
        },
        _acquireAccess: function(a) {
            a = new l(a).normalize().toString();
            if (o._pending[a] && new Date() - o._pending[a] < o.FETCH_TIMEOUT_MS) return !1;
            o._pending[a] = Date.now();
            return !0
        },
        _releaseAccess: function(a) {
            delete o._pending[new l(a).normalize().toString()]
        }
    };
    e.exports = o
}), null);
__d("Event", ["EventListener"], (function(a, b, c, d, e, f, g) {
    e.exports = g
}), null);
__d("QE2Logger", ["Banzai"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = "qe2_log_exposure",
        i = {},
        j = {
            logExposureForUser: function(a, b) {
                b = b ? b : "", j.__logExposure(a, b, 9)
            },
            logExposureForEmail: function(a, b) {
                j.__logExposure(a, b, 3)
            },
            logExposureForDatr: function(a) {
                j.__logExposure(a, "", 5)
            },
            logExposureForOculusLoggedOut: function(a) {
                j.__logExposure(a, "", 31)
            },
            logExposureForPage: function(a, b) {
                j.__logExposure(a, b, 7)
            },
            logExposureForGroup: function(a, b) {
                j.__logExposure(a, b, 25)
            },
            logExposureForPhoneNumber: function(a, b) {
                j.__logExposure(a, b, 8)
            },
            logExposureForScimCompanyID: function(a, b) {
                j.__logExposure(a, b, 22)
            },
            logExposureForAnalyticsEntityID: function(a, b) {
                j.__logExposure(a, b, 27)
            },
            logExposureForAdAccountID: function(a, b) {
                j.__logExposure(a, b, 0)
            },
            logExposure: function(a, b, c) {
                j.__logExposure(a, b, c)
            },
            __logExposure: function(a, b, c) {
                var d = a + "|" + b;
                if (i[d]) return;
                a = {
                    universeName: a,
                    unitID: b,
                    unitType: c
                };
                g.post(h, a, {
                    signal: !0
                });
                i[d] = !0
            }
        };
    e.exports = j
}), null);
__d("MHeaderLogger", ["QE2Logger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "mtouch_header_navigation",
        i = !1;
    e.exports = {
        logExposure: function() {
            if (i) return;
            g.logExposureForUser(h);
            i = !0
        }
    }
}), null);
__d("MStickyHeaderSoftNavigationListener", ["CSS", "MHistory", "Stratcom"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    __p && __p();
    var j = !1;
    a = {
        init: function() {
            __p && __p();
            if (j) return;
            j = !0;
            var a, b = function(b) {
                __p && __p();
                b = document.getElementById("page");
                if (b) {
                    var c = h.getState();
                    a != null && (g.removeClass(b, a), a = null);
                    if (c) a = "-softstate-" + c, g.addClass(b, a);
                    else {
                        var d = window.location.pathname;
                        if (d) {
                            d.indexOf("/") === 0 && (d = d.substring(1));
                            var e = d.indexOf("/");
                            e !== -1 && (d = d.substring(0, e));
                            c = d
                        }
                        a = "-hardstate-" + c;
                        g.addClass(b, a)
                    }
                }
            };
            ["m:history:change", "m:history:change-default"].forEach(function(a) {
                i.listen(a, null, function() {
                    b(a)
                })
            });
            b()
        }
    };
    e.exports = a
}), null);
__d("csx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("csx: Unexpected class selector transformation.")
    }
    e.exports = a
}), null);
__d("throttle", ["TimeSlice", "TimeSliceInteractionSV", "setTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i, j) {
    __p && __p();

    function a(a, b, c) {
        return k(a, b, c, i, !1)
    }
    Object.assign(a, {
        acrossTransitions: function(a, b, c) {
            return k(a, b, c, j, !1)
        },
        withBlocking: function(a, b, c) {
            return k(a, b, c, i, !0)
        },
        acrossTransitionsWithBlocking: function(a, b, c) {
            return k(a, b, c, j, !0)
        }
    });

    function k(a, b, c, d, e) {
        __p && __p();
        var f = b == null ? 100 : b,
            i, j, k = 0,
            l = null,
            m = [],
            n = g.guard(function() {
                __p && __p();
                k = Date.now();
                if (j) {
                    var b = function(b) {
                            a.apply(i, b)
                        }.bind(null, j),
                        c = m.length;
                    while (--c >= 0) b = m[c].bind(null, b);
                    m = [];
                    b();
                    j = null;
                    l = d(n, f)
                } else l = null
            }, "throttle_" + f + "_ms", {
                propagationType: g.PropagationType.EXECUTION
            });
        n.__SMmeta = a.__SMmeta;
        return function() {
            h.ref_counting_fix && m.push(g.getGuardedContinuation("throttleWithContinuation")), j = arguments, i = this, c !== undefined && (i = c), (l === null || Date.now() - k > f) && (e ? n() : l = d(n, 0))
        }
    }
    e.exports = a
}), null);
__d("MStickyHeaderHandler", ["CSS", "Event", "MHeaderLogger", "MHome", "MStickyHeaderSoftNavigationListener", "MViewport", "Stratcom", "csx", "cx", "setTimeoutAcrossTransitions", "throttle"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    "use strict";
    __p && __p();
    var r, s = [],
        t = null,
        u = null,
        v = !0,
        w = !1,
        x = !1,
        y = !1,
        z = "_3wo2",
        A = 500,
        B = 150,
        C = 300,
        D = ["scroll", "touchmove"],
        E = [".popoverOpen", ".flyout"].join(" ");

    function F() {
        t && g.addClass(t, "scrolled")
    }

    function G() {
        t && g.removeClass(t, "scrolled")
    }

    function H() {
        return document.querySelector(E)
    }

    function I(a) {
        return !a ? null : a.scrollHeight <= a.scrollTop + window.innerHeight + B
    }

    function J(a) {
        return a ? a.scrollTop : l.getScrollTop()
    }
    var K = 0,
        L = 0,
        M = 0,
        N;

    function O(a) {
        __p && __p();
        a = a;
        (!a || typeof a !== "boolean") && (a = !1);
        N && (clearTimeout(N), N = null);
        v && (u = H());
        v = !1;
        var b = J(u);
        u || m.invoke("msticky-header:mroot-scroll", null, {
            offset: b
        });
        var c = I(u) || !1;
        c = b <= A || c;
        var d = a || b <= K,
            e = d ? 1 : 0,
            f = M !== e;
        M = e;
        t && (!d && !c && !a ? F() : (c || d && L > b + C) && G());
        d ? (f || !L) && (L = b) : L = 0;
        K = b;
        a || (N = setTimeout(function() {
            O(!0), v = !0
        }, 250))
    }

    function P() {
        while (s.length) {
            var a = s.pop();
            a.remove()
        }
    }

    function Q() {
        return document.getElementById("page")
    }

    function R() {
        __p && __p();
        P();
        t = Q();
        u = null;
        v = !0;
        if (t) {
            G();
            var a = t;
            p(function() {
                var b = w,
                    c = j.isHome();
                w && !x && (b = !c);
                y && (b || x || !c) && i.logExposure();
                b ? (g.addClass(a, z), c && (r = q.acrossTransitions(O, 100), D.forEach(function(event) {
                    s.push(h.listen(document, event, r, !0))
                }))) : g.removeClass(a, z)
            }, 1)
        }
        s.push(m.listen("history:change", null, R), m.listen("history:change-default", null, R), m.listen("m:homepage:load", null, R))
    }
    var S = !1;
    e.exports = {
        init: function(a) {
            if (S) return;
            y = a.logExposure;
            w = a.enabled;
            x = a.enabledForNewsfeed;
            S = !0;
            k.init();
            R();
            m.invoke("msticky-header:init")
        },
        isEnabled: function() {
            return w || t !== null && g.hasClass(t, z)
        },
        isEnabledForHome: function() {
            return this.isEnabled() && x
        }
    }
}), null);
__d("getActiveElement", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a === void 0 && (a = document);
        if (typeof a === "undefined") return null;
        try {
            return a.activeElement || a.body
        } catch (b) {
            return a.body
        }
    }
    e.exports = a
}), null);
__d("goURI", ["ReloadPage", "URI"], (function(a, b, c, d, e, f, g, h) {
    function b(b, c, d) {
        b = new h(b);
        b = b.toString();
        !c && a.PageTransitions ? a.PageTransitions.go(b, d) : window.location.href == b ? g.now() : d ? window.location.replace(b) : window.location.href = b
    }
    e.exports = b
}), null);
__d("createWarning", ["CoreWarningGK", "SiteData", "emptyFunction"], (function(a, b, c, d, e, f, g, h, i) {
    a = i.thatReturns;
    e.exports = a
}), null);
__d("BanzaiScuba", ["Banzai"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = "scuba_sample";

    function a(a, b, c) {
        __p && __p();
        this.fields = {};
        this.post = function(d) {
            if (!a) return;
            var e = babelHelpers["extends"]({}, this.fields);
            e._ds = a;
            b && (e._lid = b);
            e._options = c;
            g.post(h, e, d);
            this.post = function() {};
            this.posted = !0
        };
        this.lid = b;
        return this
    }

    function i(a, b, c) {
        this.fields[a] || (this.fields[a] = {});
        this.fields[a][b] = c;
        return this
    }

    function b(a) {
        return function(b, c) {
            return this.posted ? this : i.call(this, a, b, c)
        }
    }
    Object.assign(a.prototype, {
        post: function() {},
        addNormal: b("normal"),
        addInteger: b("int"),
        addDenorm: b("denorm"),
        addTagset: b("tags"),
        addNormVector: b("normvector")
    });
    e.exports = a
}), null);
__d("ReactCurrentOwner", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        current: null
    };
    e.exports = a
}), null);
__d("forEachObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;

    function a(a, b, c) {
        for (var d in a) {
            var e = d;
            g.call(a, e) && b.call(c, a[e], e, a)
        }
    }
    e.exports = a
}), null);
__d("monitorCodeUse", ["BanzaiScuba", "ErrorUtils", "ScriptPath", "forEachObject", "invariant", "ReactCurrentOwner"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    __p && __p();

    function l(a) {
        a = a.type;
        if (typeof a === "string") return a;
        return typeof a === "function" ? a.displayName || a.name : null
    }

    function m(a) {
        var b = 1e3,
            c = [];
        while (a && c.length < b) c.push(l(a) || ""), typeof a.tag === "number" ? a = a["return"] : a = a._currentElement && a._currentElement._owner;
        return c
    }

    function n(a) {
        return Array.isArray(a) ? "[...]" : o(a)
    }

    function o(a) {
        __p && __p();
        if (a == null) return "" + a;
        if (Array.isArray(a)) {
            if (a.length > 10) {
                var b = a.slice(0, 5).map(n);
                return "[" + b.join(", ") + ", ...]"
            }
            b = a.map(n);
            return "[" + b.join(", ") + "]"
        }
        if (typeof a === "string") return "'" + a + "'";
        if (typeof a === "object") {
            b = Object.keys(a).map(function(a) {
                return a + "=..."
            });
            return "{" + b.join(", ") + "}"
        }
        return "" + a
    }

    function p(a) {
        return a.identifier || ""
    }

    function q(a) {
        return a.script + "  " + a.line + ":" + a.column
    }

    function a(a, c, d) {
        __p && __p();
        d === void 0 && (d = {});
        a && !/[^a-z0-9_]/.test(a) || k(0);
        var e = {};
        d.sampleRate != null && (e.sampleRate = d.sampleRate);
        var f = new g("core_monitor", null, e);
        f.addNormal("event", a);
        e = b("ReactCurrentOwner");
        f.addNormVector("owners", m(e.current));
        f.addNormal("uri", window.location.href);
        f.addNormal("script_path", i.getScriptPath());
        e = !1;
        d.forceIncludeStackTrace && (e = !0);
        if (e) try {
            d = new Error(a);
            d.framesToPop = 1;
            e = h.normalizeError(d).stackFrames;
            a = e.map(p);
            d = e.map(q).join("\n");
            f.addNormVector("stacktrace", a);
            f.addDenorm("stack", d)
        } catch (a) {}
        j(c, function(a, b, c) {
            typeof a === "string" ? f.addNormal(b, a) : typeof a === "number" && (a | 0) === a ? f.addInteger(b, a) : Array.isArray(a) ? f.addNormVector(b, a.map(o)) : f.addNormal(b, o(a))
        });
        f.post()
    }
    e.exports = a
}), null);
__d("warningCore", ["createWarning", "emptyFunction", "monitorCodeUse"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = g(i, h);
    e.exports = a
}), null);
__d("warning", ["warningCore"], (function(a, b, c, d, e, f) {
    e.exports = b("warningCore")
}), null);
__d("ReactScheduler-dev", ["warning"], (function(a, b, c, d, e, f) {
    "use strict"
}), null);
__d("ReactScheduler-prod", ["warning"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    Object.defineProperty(f, "__esModule", {
        value: !0
    });
    a = !("undefined" === typeof window || !window.document || !window.document.createElement);
    b("warning");
    var g = Date,
        h = "function" === typeof setTimeout ? setTimeout : void 0,
        i = "function" === typeof clearTimeout ? clearTimeout : void 0,
        j = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
        k = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;
    c = "object" === typeof performance && "function" === typeof performance.now;
    f.now = void 0;
    if (c) {
        var l = performance;
        f.now = function() {
            return l.now()
        }
    } else f.now = function() {
        return g.now()
    };
    f.scheduleWork = void 0;
    f.cancelScheduledWork = void 0;
    if (a) {
        var m = null,
            n = null,
            o = -1,
            p = !1,
            q = !1,
            r = void 0,
            s = void 0,
            t = function(a) {
                r = j(function(b) {
                    i(s), a(b)
                }), s = h(function() {
                    k(r), a(f.now())
                }, 100)
            },
            u = 0,
            v = 33,
            w = 33,
            x = {
                didTimeout: !1,
                timeRemaining: function() {
                    var a = u - f.now();
                    return 0 < a ? a : 0
                }
            },
            y = function(a, b) {
                var c = a.scheduledCallback,
                    d = !1;
                try {
                    c(b), d = !0
                } finally {
                    f.cancelScheduledWork(a), d || (p = !0, window.postMessage(z, "*"))
                }
            },
            z = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
        window.addEventListener("message", function(event) {
            __p && __p();
            if (event.source === window && event.data === z && (p = !1, null !== m)) {
                if (null !== m) {
                    var a = f.now();
                    if (!(-1 === o || o > a)) {
                        event = -1;
                        for (var b = [], c = m; null !== c;) {
                            var d = c.timeoutTime; - 1 !== d && d <= a ? b.push(c) : -1 !== d && (-1 === event || d < event) && (event = d);
                            c = c.next
                        }
                        if (0 < b.length)
                            for (x.didTimeout = !0, a = 0, c = b.length; a < c; a++) y(b[a], x);
                        o = event
                    }
                }
                for (event = f.now(); 0 < u - event && null !== m;) event = m, x.didTimeout = !1, y(event, x), event = f.now();
                null === m || q || (q = !0, t(A))
            }
        }, !1);
        var A = function(a) {
            q = !1;
            var b = a - u + w;
            b < w && v < w ? (8 > b && (b = 8), w = b < v ? v : b) : v = b;
            u = a + w;
            p || (p = !0, window.postMessage(z, "*"))
        };
        f.scheduleWork = function(a, b) {
            var c = -1;
            null != b && "number" === typeof b.timeout && (c = f.now() + b.timeout);
            (-1 === o || -1 !== c && c < o) && (o = c);
            a = {
                scheduledCallback: a,
                timeoutTime: c,
                prev: null,
                next: null
            };
            null === m ? m = a : (b = a.prev = n, null !== b && (b.next = a));
            n = a;
            q || (q = !0, t(A));
            return a
        };
        f.cancelScheduledWork = function(a) {
            if (null !== a.prev || m === a) {
                var b = a.next,
                    c = a.prev;
                a.next = null;
                a.prev = null;
                null !== b ? null !== c ? (c.next = b, b.prev = c) : (b.prev = null, m = b) : null !== c ? (c.next = null, n = c) : n = m = null
            }
        }
    } else {
        var B = new Map();
        f.scheduleWork = function(a) {
            var b = {
                    scheduledCallback: a,
                    timeoutTime: 0,
                    next: null,
                    prev: null
                },
                c = h(function() {
                    a({
                        timeRemaining: function() {
                            return Infinity
                        },
                        didTimeout: !1
                    })
                });
            B.set(a, c);
            return b
        };
        f.cancelScheduledWork = function(a) {
            var b = B.get(a.scheduledCallback);
            B["delete"](a);
            i(b)
        }
    }
}), null);
__d("customSchedule", ["TimeSlice", "requestAnimationFramePolyfill", "ReactScheduler-dev", "ReactScheduler-prod"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a.requestAnimationFrame === undefined && (a.requestAnimationFrame = b("requestAnimationFramePolyfill"));
    c = b("ReactScheduler-prod");
    d = c;
    f = d.now;
    var h = d.scheduleWork;
    a = d.cancelScheduledWork;
    b = function(a, b) {
        function c(b) {
            a(b)
        }
        g.copyGuardForWrapper(a, c);
        c.__originalCallback = a;
        return h(c, b)
    };
    e.exports = {
        now: f,
        scheduleWork: b,
        cancelScheduledWork: a
    }
}), null);
__d("replaceNativeTimer", ["customSchedule", "cancelAnimationFrame", "clearInterval", "clearTimeout", "requestAnimationFrame", "setInterval", "setTimeout"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    !g, a.__fbNativeSetTimeout = a.setTimeout, a.__fbNativeClearTimeout = a.clearTimeout, a.__fbNativeSetInterval = a.setInterval, a.__fbNativeClearInterval = a.clearInterval, a.__fbNativeRequestAnimationFrame = a.requestAnimationFrame, a.__fbNativeCancelAnimationFrame = a.cancelAnimationFrame, m.nativeBackup = a.setTimeout, j.nativeBackup = a.clearTimeout, l.nativeBackup = a.setInterval, i.nativeBackup = a.clearInterval, k.nativeBackup = a.requestAnimationFrame, h.nativeBackup = a.cancelAnimationFrame, a.setTimeout = m, a.clearTimeout = j, a.setInterval = l, a.clearInterval = i, a.requestAnimationFrame = k, a.cancelAnimationFrame = h
}), null);
__d("MPageController", ["ArtilleryOnUntilOffLogging", "DOM", "FWLoader", "LoadingIndicator", "LogHistory", "MHistory", "MHome", "MPageCache", "MPageControllerGating", "MPageControllerPath", "MPageFetcher", "MStickyHeaderHandler", "MURI", "MViewport", "Stratcom", "TimerStorage", "URI", "XReferer", "$", "cancelAnimationFrame", "cancelIdleCallback", "clearImmediate", "clearInterval", "clearTimeout", "getActiveElement", "goURI", "invariant", "setTimeoutAcrossTransitions", "gkx", "replaceNativeTimer"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, aa) {
    __p && __p();
    var ba = i.MSkeleton;
    b("replaceNativeTimer");
    var I = i.FW,
        ca = /(rgba\((\d,\s*)+\s*0\))|(transparent)/g,
        J = k.getInstance("page");

    function K() {
        var a = document.getElementById("root");
        a = a && a.childNodes.length > 0 && window.getComputedStyle(a);
        a = a ? a.backgroundColor : "";
        var b = !a || ca.test(a);
        !b && document.body && (document.body.style.backgroundColor = a)
    }
    var L = 0,
        M = 24 * 60 * 60 * 1e3,
        da = {
            "/auth.php": !0,
            "/authorize.php": !0,
            "/canvas.php": !0,
            "/l.php": !0,
            "/login.php": !0,
            "/logout.php": !0,
            "/netego/redirect/": !0,
            "/redirect.php": !0,
            "/click.php": !0,
            "/r.php": !0,
            "/video_redirect/": !0,
            "/wifiauth/redirect/": !0,
            "/login/identify/loggedin/": !0,
            "/offers/url/": !0,
            "/secured_action/continue/": !0,
            "/photo/view_full_size/": !0
        },
        N = !1,
        O = null,
        P = function(a) {
            return a ? O === new s(a).normalize().toString() : !O
        },
        Q = function() {
            return O
        },
        R = function(a) {
            O = a ? new s(a).normalize().addQueryData(l.SOFT_STATE_KEY, undefined).toString() : null
        },
        S = m.isHome;
    a = function() {
        __p && __p();
        if (N) return;
        var a = function() {
            __p && __p();
            var a = 0,
                b;
            u.listen("msticky-header:mroot-scroll", null, function(event) {
                if (event && event.getData) {
                    var b = event.getData();
                    a = b.offset || a
                }
            });
            u.listen("m:history:change", null, function(event) {
                __p && __p();
                b && b();
                var c = l.getPath();
                if (!c) return;
                H(function() {
                    var d = S(c);
                    if (d) {
                        if (!a) return;
                        d = a;
                        b = t.scrollToY(d, !0)
                    }
                }, 1)
            })
        };
        r.isEnabledForHome() ? a() : u.listen("msticky-header:init", null, function() {
            r.isEnabledForHome() && a(), u.removeCurrentListener()
        });
        K();
        u.listen("m:history:change-default", null, function(a) {
            a = a.getData().path;
            p.isRequestPath(a) || (p.setRequestPath(a), P(a) || U(a, {
                expiration: M
            }))
        });
        !window.FW_ENABLED ? u.listen("m:page:error", null, X) : u.listen("go", null, function(event) {
            var a = event.getData().uri;
            if (!a) {
                W();
                event.prevent();
                return
            }
            var b = new w(a),
                c = b.getProtocol();
            !c && b.getPath() ? (T(a), event.prevent()) : c === "fb" && (I.openInNewWebView(a), event.prevent())
        });

        function b() {
            window.removeEventListener("load", b), u.invoke("m:onload")
        }
        window.addEventListener("load", b);
        l.install();
        J.log("initialize");
        u.invoke("m:page:initialize");
        N = !0;
        var c = new w(location.href).setProtocol(null).setDomain(null);
        if (window.FW_ENABLED && c.getPath() === "/root.php") return;
        p.setRequestPath(l.getPath());
        R(c.toString());
        n.removeCachedPage(c.toString());
        window.FW_ENABLED || (P(p.getRequestPath()) || T(p.getRequestPath(), {
            forceIncrementalPageTransition: !0,
            replace: !0
        }))
    };
    var T = function(a, b) {
            __p && __p();
            if (!a) throw new Error("load(): path required.");
            var c = new w(a),
                d = c.getDomain();
            if (da[c.getPath()] || d && d !== window.location.hostname || c.getPath().toLowerCase().indexOf("/dialog/oauth") === 0 || c.getPath().indexOf("/about/basics") === 0 || c.getPath().indexOf("/apps/") === 0 || c.getPath().indexOf("/instantgames/play/") === 0 || c.getPath().indexOf("/download/") === 0 || c.getPath().indexOf("/help/resources") == 0) {
                F(a);
                return undefined
            }
            b = b || {};
            d = b.force || b.method === "POST" || b.replace || !P(a);
            (b.expiration === null || b.expiration === undefined) && (b.expiration = L);
            if (window.FW_ENABLED && new w(location.href).getPath() !== "/root.php" && I.isRootless()) {
                if (!d) return f;
                I.openInSameWebView(a, b.method || "GET", {}, b.force || !1);
                return f
            }
            p.setRequestPath(a);
            b.replace ? l.replaceState(a, !1) : l.pushState(a, !1);
            return !d ? f : U(a, b)
        },
        U = function(a, b) {
            __p && __p();
            J.log("load", a);
            window.ExitTime = Date.now();
            P(a) || (ea(), b.hideLoadingIndicator || j.show(), !o.shouldDeferUntilCertainNoRedirect && !b.hideLoadingIndicator && X());
            u.invoke("m:page:loading", null, a);
            window.FW_ENABLED && ba.exec(a);
            if (n.isPageCached(a, b.expiration)) {
                x.update(null, new s(a).normalize().toString(), !0);
                var c = n.getCachedPage(a);
                Y(a, c, $)
            } else {
                var d = [],
                    e = !1,
                    h = !1,
                    i = function() {
                        !e && d.length && (e = !0, d.shift().process())
                    };
                u.listen("m:page:loading", null, function() {
                    u.removeCurrentListener(), d.length = 0, h = !0
                });
                q.fetch(b.method === "POST" ? "POST" : "GET", a, b.queryData ? b.queryData : null, function(f, k) {
                    __p && __p();
                    if (h) return;
                    if (f) {
                        f.listen("complete", function() {
                            e = !1, i()
                        });
                        f.listen("discard", function() {
                            if (!o.shouldDeferUntilCertainNoRedirect) return;
                            var a = f.getRedirectURI();
                            a !== null || G(0);
                            (!a.proto || a.proto.match(/^http/)) && H(function() {
                                if (h) return;
                                j.hide()
                            }, 300)
                        });
                        if (f.isPagelet()) {
                            d.push(f);
                            i();
                            return
                        }
                        e = !0;
                        x.update(null, new s(a).normalize().toString(), !0);
                        g.onNewPageLoad();
                        Z(a, f, function() {
                            var a = t.getScrollTop();
                            document.body && document.body.focus();
                            t.scrollTo(0, a);
                            H(function() {
                                E() === document.body && t.scrollTo(0, a)
                            }, 0)
                        }, b.noAutoScroll)
                    } else {
                        var c = n.getCachedPage(a);
                        c ? Y(a, c) : (j.hide(), k && (J.error("error", k), u.invoke("m:page:error", null, k)))
                    }
                });
                u.invoke("m:page:request-sent", null, a)
            }
            return f
        },
        V = function(a, b) {
            b = b || {};
            b.expiration = 0;
            b.force = !0;
            return T(a, b)
        },
        W = function(a) {
            var b = Q() || p.getRequestPath();
            b && V(b, {
                replace: !0,
                queryData: a
            });
            return f
        },
        X = function() {
            __p && __p();
            J.log("unload");
            if (!Q()) return undefined;
            u.invoke("m:page:unload");
            R(null);
            var a = y("root");
            h.setContent(a);
            u.invoke("m:page:unload-complete");
            u.invoke("m:root:render");
            K();
            return f
        },
        Y = function(a, b, c) {
            J.log("render cache", a), u.invoke("m:page:render:cache:start", null, {
                path: a
            }), g.onNewPageLoad(), Z(a, b, function() {
                u.invoke("m:page:render:cache:complete", null, {
                    path: a
                }), n.applyCachedIUIResponses(a, c), u.invoke("m:page:render:cache:complete-with-replays", null, {
                    path: a
                })
            }, c === $)
        },
        Z = function(a, b, c, d) {
            __p && __p();
            o.shouldDeferUntilCertainNoRedirect || X(), J.log("render", a), (!o.shouldDeferUntilCertainNoRedirect || !b.willRedirect()) && (X(), u.invoke("m:page:render:start", null, {
                path: a
            }), b.listen("complete", function() {
                __p && __p();
                R(a);
                j.hide();
                var b = new w(a).getFragment();
                b = b && document.getElementById(b);
                b ? t.scrollToNode(b) : d || t.scrollToHeader();
                u.invoke("m:page:render:complete", null, {
                    path: a
                });
                c && c();
                K();
                u.invoke("m:root:render");
                u.invoke("m:page:iui:response:complete", null, {
                    path: a
                })
            })), b.process()
        },
        ea = function() {
            var a = Q();
            if (a) {
                var b = t.getScrollTop();
                n.setScrollHistory(a, b)
            }
        },
        $ = function() {
            var a = Q();
            if (a) {
                var b = n.getScrollHistory(a) || t.getHeaderTop();
                H(function() {
                    t.scrollTo(0, b)
                }, 0)
            }
        };
    u.listen("m:page:unload", null, function() {
        v.clearAll(v.ANIMATION_FRAME, z), v.clearAll(v.IDLE_CALLBACK, A), v.clearAll(v.IMMEDIATE, B), v.clearAll(v.INTERVAL, C), v.clearAll(v.TIMEOUT, D)
    });
    f.HISTORY_EXPIRE_MS = M;
    f.USER_EXPIRE_MS = L;
    f.forceLoad = V;
    f.getRenderedPath = Q;
    f.init = a;
    f.isRenderedPath = P;
    f.load = T;
    f.reload = W;
    f.isHomeishPath = S
}), null);
__d("MWildeLink", ["DOM", "Stratcom", "URI"], (function(a, b, c, d, e, f, g, h, i) {
    __p && __p();

    function a() {
        __p && __p();
        var a = null,
            b = function(b) {
                a && document.body.removeChild(a), a = document.createElement("iframe"), a.style.width = a.style.height = "1px", a.style.position = "absolute", a.style.borderStyle = "none", b.getProtocol() !== "fb" ? a.src = new i("fb://f").addQueryData("u", b.toString()).toString() : a.src = b, document.body.appendChild(a)
            },
            c = function(a) {
                return a && a !== "http" && a !== "https" && a !== "fb"
            };
        g.listen(document.documentElement, "click", null, function(a) {
            __p && __p();
            if (a.getPrevented()) return;
            var d = a.getNode("tag:a");
            if (!d) return;
            var e = a.getRawEvent(),
                f = d.getAttribute("href"),
                g = d.getAttribute("target"),
                h = new i(f),
                j = h.getProtocol();
            if (!f || d.getAttribute("onclick") || (e.which || e.button) >= 2 || g && g !== "_blank" || c(j)) {
                if (g === "_self" && j === "fb") {
                    a.prevent();
                    window.location.href = h;
                    return
                }
                return
            }
            a.prevent();
            if (f[0] === "#") {
                d = document.getElementById(f.substr(1));
                d && d.scrollIntoView()
            } else b(h)
        });
        h.listen("go", null, function(a) {
            var d = new i(a.getData().uri);
            if (c(d.getProtocol())) return;
            a.prevent();
            b(d)
        })
    }
    f.setupListeners = a
}), null);
__d("PageletEventsHelper", ["Arbiter", "PageletEventConstsJS"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = "BigPipe/init",
        j = "MRenderingScheduler/init",
        k = "pagelet_event",
        l = "phase_begin",
        m = {},
        n = [],
        o = !1;

    function p() {
        return {
            pagelets: {},
            categories: {},
            phase_start: {},
            display_resources: {},
            all_resources: {}
        }
    }

    function q(a, b, c, d) {
        m[d] == undefined && (m[d] = p()), m[d].pagelets[b] == undefined && (m[d].pagelets[b] = {}), m[d].pagelets[b][a] = c
    }

    function r(a) {
        __p && __p();
        a.subscribe(k, function(a, b) {
            __p && __p();
            var event = b.event,
                c = b.ts;
            a = b.id;
            var d = b.lid,
                e = b.phase,
                f = b.categories,
                g = b.allResources;
            b = b.displayResources;
            q(event, a, c, d);
            var i = m[d],
                j = i.pagelets[a];
            event === h.ARRIVE_END && (j.phase = e, i.all_resources[a] = g, i.display_resources[a] = b);
            (event === h.ONLOAD_END || event === h.DISPLAY_END) && f && f.forEach(function(a) {
                i.categories[a] == undefined && (i.categories[a] = {}), i.categories[a][event] = c
            });
            for (var j = 0, e = n.length; j < e; j++) n[j](a, event, c, d)
        }), a.subscribe(l, function(event, a) {
            m[a.lid].phase_start[a.phase] = a.ts
        })
    }
    a = {
        init: function() {
            __p && __p();
            if (o) return;
            g.subscribe(i, function(event, a) {
                var b = a.lid;
                a = a.arbiter;
                m[b] = p();
                r(a)
            });
            g.subscribe(j, function(event, a) {
                var b = a.lid;
                a = a.arbiter;
                m[b] = p();
                r(a)
            });
            o = !0
        },
        getMetrics: function(a) {
            return m[a] ? JSON.parse(JSON.stringify(m[a])) : null
        },
        subscribeToPageletEvents: function(a) {
            n.push(a);
            return {
                remove: function() {
                    n.splice(0, n.indexOf(a))
                }
            }
        }
    };
    e.exports = a
}), null);
__d("MobileBigPipeStratcomProxy", ["PageletEventConstsJS", "PageletEventsHelper", "Stratcom"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = {
        init: function() {
            h.init(), h.subscribeToPageletEvents(j._onPageletEvent)
        },
        _onPageletEvent: function(a, b, c, d) {
            b === g.DISPLAY_END && i.invoke("m:schedulable:loaded", null, {
                name: a,
                lid: d
            })
        }
    };
    e.exports = j
}), null);
__d("MCoreInit", ["AddressBar", "Arbiter", "BigPipe", "Bootloader", "CallbackDependencyManager", "ErrorUtils", "MCache", "MFacewebAndroidLink", "MobileBigPipeStratcomProxy", "MPageController", "MRenderingScheduler", "MRenderingSchedulerConfig", "MViewport", "MWildeLink", "ServerJS", "Stratcom", "bx", "gkx", "ix", "qex"], (function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    __p && __p();
    var A = new k();

    function a(a) {
        __p && __p();
        y.add(a.ixData);
        w.add(a.bxData);
        x.add(a.gkxData);
        z.add(a.qexData);
        j.setResourceMap(a.resource_map);
        j.enableBootload(a.bootloadable);
        a.hideLocationBar && g.setupLoadListener();
        a.isWildeWeb && t.setupListeners();
        a.isFacewebAndroid && n.setupListeners();
        var b = h.subscribe(i.Events.init, function() {
            o.init();
            b.unsubscribe();
            if (r.delayNormalResources) var a = h.subscribe(i.Events.tti, function() {
                A.satisfyPersistentDependency("tti_ready"), a.unsubscribe()
            })
        });
        v.mergeData(0);
        s.init();
        p.init();
        a.immedateSJS && a.serverJSData && new u().handle(a.serverJSData);
        var c = function() {
            j.loadResources(a.deferredResources, l.guard(function() {
                a.clearMCache && m.clear(), a.onload && new Function(a.onload)(), !a.immedateSJS && a.serverJSData && new u().handle(a.serverJSData), a.onafterload && new Function(a.onafterload)(), v.invoke("m:root:render"), q.satisfyDependency("MCoreInit_js_ready")
            }, "onload"))
        };
        r.delayNormalResources ? A.registerCallback(c, ["tti_ready"]) : c()
    }

    function b(a) {
        A.satisfyPersistentDependency(a)
    }
    e.exports = {
        init: a,
        satisfyDependency: b
    }
}), null);
__d("MutationCountingExecutionObserver", ["EventConfig", "ExecutionContextObservers", "PageDOMMutationObserver", "ProfilingCounters", "TimeSlice", "ifRequired"], (function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    __p && __p();
    var m = [],
        n = !1;

    function o() {
        __p && __p();
        var a = i.consumePendingDOMMutations();
        if (a) {
            j.incrementCounter("DOM_MUTATION", a);
            a = l("TimeSliceAutoclosedInteraction", function(a) {
                return a
            });
            if (a) {
                a = a.getInteractionsActiveRightNow();
                a.length && a.forEach(function(a) {
                    __p && __p();
                    a.informPointWithOverride("display_done_ts_executed_from_client", {
                        isPointOfInterest: !0
                    });
                    if (!a.__mceoSeenThisRootGuardFrame) {
                        a.__mceoSeenThisRootGuardFrame = !0;
                        a.countUp();
                        m.push(a);
                        n || (n = !0, r.executeOnRootGuardEnded(function() {
                            p(), n = !1
                        }));
                        var b = l("Visibility", function(a) {
                            return a
                        });
                        b && (b.isHidden() ? a.trace().addStringAnnotation("hidden_during_dd", "1") : a.trace().addStringAnnotation("hidden_during_dd", "0"))
                    }
                })
            }
        }
    }

    function p() {
        __p && __p();
        if (m.length === 0) return;
        m.forEach(function(a) {
            a.informPointWithOverride("display_done", {
                isPointOfInterest: !0
            }).addStringAnnotation("visual_role", "global_signpost"), a.__mceoSeenThisRootGuardFrame = !1
        });
        if (g.disable_heuristic) {
            m.forEach(function(a) {
                return a.countDown()
            });
            m = [];
            return
        }
        var a = m,
            b = l("requestAnimationFrameAcrossTransitions", function(a) {
                return a
            }),
            c = l("setTimeoutAcrossTransitions", function(a) {
                return a
            });
        if (!b || !c) return;
        b(function() {
            a.forEach(function(a) {
                a.informPointWithOverride("display_done_ts_raf", {
                    isPointOfInterest: !0
                })
            }), c(function() {
                a.forEach(function(a) {
                    a.informPointWithOverride("display_done_ts_st", {
                        isPointOfInterest: !0
                    }), a.countDown()
                })
            })
        });
        m = []
    }
    var q = [];
    a.prototype.executeOnRootGuardEnded = function(a) {
        q.push(a)
    };
    a.prototype.onNewContextCreated = function(a, b, c) {
        return null
    };
    a.prototype.onContextCanceled = function(a, b) {};
    a.prototype.onBeforeContextStarted = function(a, b, c) {
        i.tryStart();
        o();
        return null
    };
    a.prototype.onAfterContextStarted = function(a, b, c, d) {
        return null
    };
    a.prototype.onAfterContextEnded = function(a, b, c, d) {
        o();
        if (a && a.isRoot)
            while (q.length) q.pop()()
    };
    a.prototype.getBeforeID = function() {
        return h.beforeIDs.MUTATION_COUNTING
    };
    a.prototype.getAfterID = function() {
        return h.afterIDs.MUTATION_COUNTING
    };

    function a() {}
    var r = new a();
    k.registerExecutionContextObserver(r);
    e.exports = r
}), 3);
__d("MPrelude", ["Env", "MCoreInit", "Bootloader", "MRenderingScheduler", "DeadImage", "StratcomManager", "TimeSlice", "ArtilleryOnUntilOffLogging", "EventProfiler", "DOMEventProfilingHook", "MutationCountingExecutionObserver", "BigPipe"], (function(a, b, c, d, e, f, g) {
    b("MCoreInit"), b("Bootloader"), b("MRenderingScheduler"), b("DeadImage"), b("StratcomManager"), b("TimeSlice"), b("ArtilleryOnUntilOffLogging"), b("EventProfiler"), g.stratcom_event_profiler_hook && (b("DOMEventProfilingHook"), b("MutationCountingExecutionObserver")), b("BigPipe")
}), null);