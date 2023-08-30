/*! For license information please see Shery.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('ControlKit'),
        require('THREE'),
        require('gsap')
      ))
    : 'function' == typeof define && define.amd
    ? define('Shery', ['ControlKit', 'THREE', 'gsap'], t)
    : 'object' == typeof exports
    ? (exports.Shery = t(
        require('ControlKit'),
        require('THREE'),
        require('gsap')
      ))
    : (e.Shery = t(e.ControlKit, e.THREE, e.gsap));
})(self, (e, t, n) =>
  (() => {
    'use strict';
    var r = {
        160: (t) => {
          t.exports = e;
        },
        824: (e) => {
          e.exports = t;
        },
        163: (e) => {
          e.exports = n;
        },
      },
      i = {};
    function a(e) {
      var t = i[e];
      if (void 0 !== t) return t.exports;
      var n = (i[e] = { exports: {} });
      return r[e](n, n.exports, a), n.exports;
    }
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
      (a.d = (e, t) => {
        for (var n in t)
          a.o(t, n) &&
            !a.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (a.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var o = {};
    return (
      (() => {
        a.r(o),
          a.d(o, {
            default: () => Kn,
            hoverWithMediaCircle: () => Hn,
            imageEffect: () => Wn,
            imageMasker: () => Yn,
            makeMagnet: () => Vn,
            mouseFollower: () => Bn,
            textAnimate: () => Xn,
          });
        var e = {};
        a.r(e),
          a.d(e, {
            hoverWithMediaCircle: () => Hn,
            imageEffect: () => Wn,
            imageMasker: () => Yn,
            makeMagnet: () => Vn,
            mouseFollower: () => Bn,
            textAnimate: () => Xn,
          });
        var t = a(163),
          n = a.n(t),
          r = a(824),
          i = a(160),
          s = a.n(i);
        let u = null;
        const l = (e) => {
            u = e;
          },
          c = (e) => {
            e.style.display = u;
            const t = {
              width: e.getBoundingClientRect().width,
              height: e.getBoundingClientRect().height,
            };
            return (e.style.display = 'none'), t;
          },
          d = (e, t, n) => e * (1 - n) + t * n,
          h = () => {
            const e =
                '#controlKit .panel .group-list .group .sub-group-list .sub-group .wrap .wrap',
              t = '#controlKit .panel .button, #controlKit .picker .button';
            document.querySelector(e) &&
              document
                .querySelectorAll(e)
                .forEach((e) => (e.style.width = '30%')),
              document.querySelector(t) &&
                ((document.querySelector(t).parentElement.style.float = 'none'),
                (document.querySelector(t).parentElement.style.width =
                  '100% ')),
              document.querySelector(e + '.color') &&
                (document.querySelector(
                  e + '.color'
                ).parentElement.style.width = '60%');
          },
          f = (e, t) => {
            let n = new r.PlaneGeometry(
              e.geometry.parameters.width,
              e.geometry.parameters.height,
              t,
              t
            );
            e.geometry.dispose(), (e.geometry = n);
          };
        var p = [];
        const m = (
          e,
          t,
          i,
          a,
          {
            opts: o,
            effect: l = 0,
            aspect: d = 1,
            onDoc: h = !1,
            size: f = 0.01744,
            geoVertex: m = 1,
            fov: v = 1,
            dposition: _ = 1,
            offset: g = 0,
          } = {}
        ) => {
          let y = 0;
          const b = '#controlKit .options',
            x = new r.Vector2(),
            w = new r.Scene(),
            T = new r.PerspectiveCamera(v, d, 0.1, 2);
          T.position.z = 1;
          const S = [],
            M = (
              o.target ? document.querySelector(o.target) : e
            ).getBoundingClientRect().top,
            C = (e) => {
              (a.uSection.value = e),
                S.length > e &&
                  (S.length > e + 1
                    ? (a.uTexture.value = [S[e], S[e + 1]])
                    : (a.uTexture.value = [S[S.length - 1], S[S.length - 1]]));
            };
          if ('img' !== e.nodeName.toLowerCase()) {
            i = i.replace(
              'isMulti ;',
              '\n      float c = (sin((uv.x*7.0*snoise(vec3(uv,1.0)))+(time))/15.0*snoise(vec3(uv,1.0)))+.01;\n      gl_FragColor = mix(texture2D(uTexture[1], uv), texture2D(uTexture[0], uv), step((uScroll)-uSection, sin(c) + uv.y));'
            );
            const N = { value: 0 };
            if (!o.slideStyle)
              if (o.staticScroll) {
                function j(e) {
                  n().to(N, {
                    value: N.value + e / innerHeight,
                    duration: 0.5,
                    onUpdate: () => {
                      N.value < 0 && (N.value = 0), (a.uScroll.value = N.value);
                      const e = Math.floor(N.value);
                      e !== a.uSection.value && S.length > e + 1 && C(e);
                    },
                  });
                }
                window.addEventListener('wheel', (e) => {
                  j(e.deltaY);
                });
                let U = 0;
                window.addEventListener('touchstart', (e) => {
                  U = e.touches[0].clientY;
                }),
                  window.addEventListener(
                    'touchmove',
                    (e) => {
                      const t = 2 * (U - e.touches[0].clientY);
                      (U = e.touches[0].clientY), j(3 * t), e.preventDefault();
                    },
                    { passive: !1 }
                  );
              } else
                window.addEventListener('scroll', () => {
                  let e =
                    Math.max(g, scrollY / innerHeight - M / innerHeight) + g;
                  e < 0 && (e = 0), (a.uScroll.value = e);
                  const t = Math.floor(e);
                  t != a.uSection.value && S.length > t + 1 && C(t);
                });
            for (let B = 0; B < e.children.length; B++)
              S[B] = new r.TextureLoader().load(
                e.children[B].getAttribute('src')
              );
          }
          Object.assign(a, {
            time: { value: 0 },
            mouse: { value: x },
            uIntercept: { value: 0 },
            onMouse: { value: 0 },
            uSection: { value: 0 },
            isMulti: { value: !('img' === e.nodeName.toLowerCase()) },
            uScroll: { value: 3 * g },
            uTexture: {
              value:
                'img' === e.nodeName.toLowerCase()
                  ? [new r.TextureLoader().load(e.getAttribute('src'))]
                  : [S[0], S[1]],
            },
          });
          o.slideStyle &&
            'function' == typeof o.slideStyle &&
            o.slideStyle((e) => {
              e >= 0 && ((a.uScroll.value = e), C(Math.floor(e)));
            });
          const E = document.createElement('canvas'),
            A = document.createElement('div');
          document.body.appendChild(E), document.body.appendChild(A);
          const k = new r.WebGLRenderer({ antialias: !0, alpha: !0 });
          L(),
            k.setSize(c(e).width, c(e).height),
            k.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
            e.parentElement.appendChild(k.domElement),
            (e.style.visibility = 'hidden');
          const D =
              'vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}',
            q = new r.Mesh(
              new r.PlaneGeometry(f, f, m, m),
              new r.ShaderMaterial({
                vertexShader: t.replace('₹snoise', D),
                fragmentShader: i.replace('₹snoise', D),
                uniforms: a,
              })
            );
          w.add(q);
          m = { value: 32, range: [1, 64] };
          var O = {
              Mode: [
                'Off',
                'Reflact/Glow',
                'Exclusion',
                'Diffrance',
                'Darken',
                'ColorBurn',
                'ColorDoge',
                'SoftLight',
                'Overlay',
                'Phonix',
                'Add',
                'Multiply',
                'Screen',
                'Negitive',
                'Divide',
                'Substract',
                'Neon',
                'Natural',
                'Mod',
                'NeonNegative',
                'Dark',
                'Avarage',
              ],
              'Mode Active': 'Soft Light',
              Trigo: ['Sin', 'Cos', 'Tan', 'Atan'],
              'Trig A': 'Cos',
              Trigo: ['Sin', 'Cos', 'Tan', 'Atan'],
              'Trig A': 'Cos',
              'Trig N': 'Sin',
              Mouse: ['Off', 'Mode 1', ' Mode 2', ' Mode 3'],
              onMouse: [
                'Always Active',
                'Active On Hover',
                'Deactive On Hover',
              ],
              Active: 'Always Active',
              'Mouse Active': 'Off',
              Offset: { value: 3 * g, range: [-1, 1] },
              Color: '#54A8FF',
              speed: {
                precise: 1,
                normal: 1,
                range: [-500, 500],
                rangep: [-10, 10],
              },
              frequency: {
                precise: 1,
                normal: 50,
                range: [-800, 800],
                rangep: [-50, 50],
              },
              pixelStrength: {
                precise: 1,
                normal: 3,
                range: [-20, 100],
                rangep: [-20, 20],
              },
              strength: {
                precise: 1,
                normal: 0.2,
                range: [-40, 40],
                rangep: [-5, 5],
              },
              s: 0.6,
              range: [0.1, 1],
              f: 0.6,
              rangef: [1, 10],
            },
            P = null,
            z = null;
          const F = (e) => {
            e.color && (e.color.value = new r.Color(e.color.value)),
              Object.assign(a, e);
          };
          function R(t, n = !1) {
            n
              ? ((x.x = (t.x / c(e).width) * 2 - 1),
                (x.y = -((t.y / c(e).height) * 2 - 1)))
              : ((x.x = (t.offsetX / c(e).width) * 2 - 1),
                (x.y = -((t.offsetY / c(e).height) * 2 - 1)));
          }
          function L() {
            e.style.display = u;
            const t = window.getComputedStyle(e);
            for (let n in t) {
              if (t.hasOwnProperty(n) && !Number(n) && 'length' !== n) {
                const e = t[n],
                  r = window.getComputedStyle(E)[n];
                (r === window.getComputedStyle(A)[n] && r === e) ||
                  (k.domElement.style[n] = e);
              }
              e.style.display = 'none';
            }
            (k.domElement.style.display = u),
              (k.domElement.style.visibility = 'visible');
          }
          o.preset &&
            fetch(o.preset)
              .then((e) => e.json())
              .then((e) => F(e)),
            o.config && F(o.config),
            a.uFrequencyZ &&
              ((T.fov = 1 + a.uFrequencyZ.value / 400),
              T.updateProjectionMatrix()),
            o.debug &&
              !p[l] &&
              ((p[l] = !0),
              (z = (P = new (s())())
                .addPanel({
                  enable: !1,
                  label: 'Debug Panel',
                  fixed: !1,
                  position: [_, 0],
                  width: 280,
                })
                .addButton('Save To Clipboard', () => {
                  const {
                    uScroll: e,
                    isMulti: t,
                    uSection: n,
                    time: r,
                    resolution: i,
                    uTexture: o,
                    mouse: s,
                    uIntercept: u,
                    ...l
                  } = a;
                  navigator.clipboard.writeText(JSON.stringify(l));
                })),
              'img' === e.nodeName.toLowerCase() ||
                o.staticScroll ||
                z.addSlider(O.Offset, 'value', 'range', {
                  label: 'Slide Offset',
                  step: 1e-5,
                  onChange: () => {
                    (g = O.Offset.value),
                      (a.uScroll.value =
                        Math.max(g, scrollY / innerHeight - M / innerHeight) +
                        g);
                  },
                })),
            (h ? document : k.domElement).addEventListener('mousemove', (e) =>
              R(e, h)
            ),
            k.domElement.addEventListener('mouseleave', (e) => {
              (y = 0), R(e);
            }),
            k.domElement.addEventListener('mouseenter', (e) => {
              (y = 1), R(e);
            }),
            window.addEventListener('resize', () => {
              k.setSize(c(e).width, c(e).height),
                k.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            });
          const I = new r.Clock();
          return {
            debugObj: O,
            controlKit: P,
            panel: z,
            geoVertex: m,
            animate: function e() {
              L(),
                document.querySelector(b) &&
                  parseInt(document.querySelector(b).style.top) < 0 &&
                  (document.querySelector(b).style.top = '0px'),
                Object.assign(a, {
                  time: { value: I.getElapsedTime() },
                  mouse: { value: x },
                  uIntercept: {
                    value: r.MathUtils.lerp(
                      a.uIntercept.value,
                      1 === y ? 1 : 0,
                      0.07
                    ),
                  },
                }),
                requestAnimationFrame(e),
                k.render(w, T);
            },
            plane: q,
            uniforms: q.material.uniforms,
          };
        };
        function v(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function _(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t);
        }
        var g,
          y,
          b,
          x,
          w,
          T,
          S,
          M,
          C,
          E,
          A,
          k,
          D,
          q,
          O,
          P = {
            autoSleep: 120,
            force3D: 'auto',
            nullTargetWarn: 1,
            units: { lineHeight: '' },
          },
          z = { duration: 0.5, overwrite: !1, delay: 0 },
          F = 1e8,
          R = 1e-8,
          L = 2 * Math.PI,
          I = L / 4,
          N = 0,
          j = Math.sqrt,
          U = Math.cos,
          B = Math.sin,
          Y = function (e) {
            return 'string' == typeof e;
          },
          V = function (e) {
            return 'function' == typeof e;
          },
          X = function (e) {
            return 'number' == typeof e;
          },
          H = function (e) {
            return void 0 === e;
          },
          W = function (e) {
            return 'object' == typeof e;
          },
          K = function (e) {
            return !1 !== e;
          },
          Z = function () {
            return 'undefined' != typeof window;
          },
          G = function (e) {
            return V(e) || Y(e);
          },
          Q =
            ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          $ = Array.isArray,
          J = /(?:-?\.?\d|\.)+/gi,
          ee = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          ne = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          re = /[+-]=-?[.\d]+/,
          ie = /[^,'"\[\]\s]+/gi,
          ae = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          oe = {},
          se = {},
          ue = function (e) {
            return (se = Le(e, oe)) && In;
          },
          le = function (e, t) {
            return console.warn(
              'Invalid property',
              e,
              'set to',
              t,
              'Missing plugin? gsap.registerPlugin()'
            );
          },
          ce = function (e, t) {
            return !t && console.warn(e);
          },
          de = function (e, t) {
            return (e && (oe[e] = t) && se && (se[e] = t)) || oe;
          },
          he = function () {
            return 0;
          },
          fe = { suppressEvents: !0, isStart: !0, kill: !1 },
          pe = { suppressEvents: !0, kill: !1 },
          me = { suppressEvents: !0 },
          ve = {},
          _e = [],
          ge = {},
          ye = {},
          be = {},
          xe = 30,
          we = [],
          Te = '',
          Se = function (e) {
            var t,
              n,
              r = e[0];
            if ((W(r) || V(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
              for (n = we.length; n-- && !we[n].targetTest(r); );
              t = we[n];
            }
            for (n = e.length; n--; )
              (e[n] && (e[n]._gsap || (e[n]._gsap = new Qt(e[n], t)))) ||
                e.splice(n, 1);
            return e;
          },
          Me = function (e) {
            return e._gsap || Se(mt(e))[0]._gsap;
          },
          Ce = function (e, t, n) {
            return (n = e[t]) && V(n)
              ? e[t]()
              : (H(n) && e.getAttribute && e.getAttribute(t)) || n;
          },
          Ee = function (e, t) {
            return (e = e.split(',')).forEach(t) || e;
          },
          Ae = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          ke = function (e) {
            return Math.round(1e7 * e) / 1e7 || 0;
          },
          De = function (e, t) {
            var n = t.charAt(0),
              r = parseFloat(t.substr(2));
            return (
              (e = parseFloat(e)),
              '+' === n ? e + r : '-' === n ? e - r : '*' === n ? e * r : e / r
            );
          },
          qe = function (e, t) {
            for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
            return r < n;
          },
          Oe = function () {
            var e,
              t,
              n = _e.length,
              r = _e.slice(0);
            for (ge = {}, _e.length = 0, e = 0; e < n; e++)
              (t = r[e]) &&
                t._lazy &&
                (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
          },
          Pe = function (e, t, n, r) {
            _e.length && !y && Oe(),
              e.render(t, n, r || (y && t < 0 && (e._initted || e._startAt))),
              _e.length && !y && Oe();
          },
          ze = function (e) {
            var t = parseFloat(e);
            return (t || 0 === t) && (e + '').match(ie).length < 2
              ? t
              : Y(e)
              ? e.trim()
              : e;
          },
          Fe = function (e) {
            return e;
          },
          Re = function (e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e;
          },
          Le = function (e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          },
          Ie = function e(t, n) {
            for (var r in n)
              '__proto__' !== r &&
                'constructor' !== r &&
                'prototype' !== r &&
                (t[r] = W(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
            return t;
          },
          Ne = function (e, t) {
            var n,
              r = {};
            for (n in e) n in t || (r[n] = e[n]);
            return r;
          },
          je = function (e) {
            var t,
              n = e.parent || x,
              r = e.keyframes
                ? ((t = $(e.keyframes)),
                  function (e, n) {
                    for (var r in n)
                      r in e ||
                        ('duration' === r && t) ||
                        'ease' === r ||
                        (e[r] = n[r]);
                  })
                : Re;
            if (K(e.inherit))
              for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
            return e;
          },
          Ue = function (e, t, n, r, i) {
            void 0 === n && (n = '_first'), void 0 === r && (r = '_last');
            var a,
              o = e[r];
            if (i) for (a = t[i]; o && o[i] > a; ) o = o._prev;
            return (
              o
                ? ((t._next = o._next), (o._next = t))
                : ((t._next = e[n]), (e[n] = t)),
              t._next ? (t._next._prev = t) : (e[r] = t),
              (t._prev = o),
              (t.parent = t._dp = e),
              t
            );
          },
          Be = function (e, t, n, r) {
            void 0 === n && (n = '_first'), void 0 === r && (r = '_last');
            var i = t._prev,
              a = t._next;
            i ? (i._next = a) : e[n] === t && (e[n] = a),
              a ? (a._prev = i) : e[r] === t && (e[r] = i),
              (t._next = t._prev = t.parent = null);
          },
          Ye = function (e, t) {
            e.parent &&
              (!t || e.parent.autoRemoveChildren) &&
              e.parent.remove &&
              e.parent.remove(e),
              (e._act = 0);
          },
          Ve = function (e, t) {
            if (e && (!t || t._end > e._dur || t._start < 0))
              for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
            return e;
          },
          Xe = function (e, t, n, r) {
            return (
              e._startAt &&
              (y
                ? e._startAt.revert(pe)
                : (e.vars.immediateRender && !e.vars.autoRevert) ||
                  e._startAt.render(t, !0, r))
            );
          },
          He = function e(t) {
            return !t || (t._ts && e(t.parent));
          },
          We = function (e) {
            return e._repeat
              ? Ke(e._tTime, (e = e.duration() + e._rDelay)) * e
              : 0;
          },
          Ke = function (e, t) {
            var n = Math.floor((e /= t));
            return e && n === e ? n - 1 : n;
          },
          Ze = function (e, t) {
            return (
              (e - t._start) * t._ts +
              (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            );
          },
          Ge = function (e) {
            return (e._end = ke(
              e._start + (e._tDur / Math.abs(e._ts || e._rts || R) || 0)
            ));
          },
          Qe = function (e, t) {
            var n = e._dp;
            return (
              n &&
                n.smoothChildTiming &&
                e._ts &&
                ((e._start = ke(
                  n._time -
                    (e._ts > 0
                      ? t / e._ts
                      : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
                )),
                Ge(e),
                n._dirty || Ve(n, e)),
              e
            );
          },
          $e = function (e, t) {
            var n;
            if (
              ((t._time ||
                (!t._dur && t._initted) ||
                (t._start < e._time && (t._dur || !t.add))) &&
                ((n = Ze(e.rawTime(), t)),
                (!t._dur || ct(0, t.totalDuration(), n) - t._tTime > R) &&
                  t.render(n, !0)),
              Ve(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
            ) {
              if (e._dur < e.duration())
                for (n = e; n._dp; )
                  n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
              e._zTime = -1e-8;
            }
          },
          Je = function (e, t, n, r) {
            return (
              t.parent && Ye(t),
              (t._start = ke(
                (X(n) ? n : n || e !== x ? st(e, n, t) : e._time) + t._delay
              )),
              (t._end = ke(
                t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
              )),
              Ue(e, t, '_first', '_last', e._sort ? '_start' : 0),
              rt(t) || (e._recent = t),
              r || $e(e, t),
              e._ts < 0 && Qe(e, e._tTime),
              e
            );
          },
          et = function (e, t) {
            return (
              (oe.ScrollTrigger || le('scrollTrigger', t)) &&
              oe.ScrollTrigger.create(t, e)
            );
          },
          tt = function (e, t, n, r, i) {
            return (
              on(e, t, i),
              e._initted
                ? !n &&
                  e._pt &&
                  !y &&
                  ((e._dur && !1 !== e.vars.lazy) ||
                    (!e._dur && e.vars.lazy)) &&
                  C !== It.frame
                  ? (_e.push(e), (e._lazy = [i, r]), 1)
                  : void 0
                : 1
            );
          },
          nt = function e(t) {
            var n = t.parent;
            return (
              n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
            );
          },
          rt = function (e) {
            var t = e.data;
            return 'isFromStart' === t || 'isStart' === t;
          },
          it = function (e, t, n, r) {
            var i = e._repeat,
              a = ke(t) || 0,
              o = e._tTime / e._tDur;
            return (
              o && !r && (e._time *= a / e._dur),
              (e._dur = a),
              (e._tDur = i
                ? i < 0
                  ? 1e10
                  : ke(a * (i + 1) + e._rDelay * i)
                : a),
              o > 0 && !r && Qe(e, (e._tTime = e._tDur * o)),
              e.parent && Ge(e),
              n || Ve(e.parent, e),
              e
            );
          },
          at = function (e) {
            return e instanceof Jt ? Ve(e) : it(e, e._dur);
          },
          ot = { _start: 0, endTime: he, totalDuration: he },
          st = function e(t, n, r) {
            var i,
              a,
              o,
              s = t.labels,
              u = t._recent || ot,
              l = t.duration() >= F ? u.endTime(!1) : t._dur;
            return Y(n) && (isNaN(n) || n in s)
              ? ((a = n.charAt(0)),
                (o = '%' === n.substr(-1)),
                (i = n.indexOf('=')),
                '<' === a || '>' === a
                  ? (i >= 0 && (n = n.replace(/=/, '')),
                    ('<' === a ? u._start : u.endTime(u._repeat >= 0)) +
                      (parseFloat(n.substr(1)) || 0) *
                        (o ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                  : i < 0
                  ? (n in s || (s[n] = l), s[n])
                  : ((a = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                    o &&
                      r &&
                      (a = (a / 100) * ($(r) ? r[0] : r).totalDuration()),
                    i > 1 ? e(t, n.substr(0, i - 1), r) + a : l + a))
              : null == n
              ? l
              : +n;
          },
          ut = function (e, t, n) {
            var r,
              i,
              a = X(t[1]),
              o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
              s = t[o];
            if ((a && (s.duration = t[1]), (s.parent = n), e)) {
              for (r = s, i = n; i && !('immediateRender' in r); )
                (r = i.vars.defaults || {}),
                  (i = K(i.vars.inherit) && i.parent);
              (s.immediateRender = K(r.immediateRender)),
                e < 2 ? (s.runBackwards = 1) : (s.startAt = t[o - 1]);
            }
            return new dn(t[0], s, t[o + 1]);
          },
          lt = function (e, t) {
            return e || 0 === e ? t(e) : t;
          },
          ct = function (e, t, n) {
            return n < e ? e : n > t ? t : n;
          },
          dt = function (e, t) {
            return Y(e) && (t = ae.exec(e)) ? t[1] : '';
          },
          ht = [].slice,
          ft = function (e, t) {
            return (
              e &&
              W(e) &&
              'length' in e &&
              ((!t && !e.length) || (e.length - 1 in e && W(e[0]))) &&
              !e.nodeType &&
              e !== w
            );
          },
          pt = function (e, t, n) {
            return (
              void 0 === n && (n = []),
              e.forEach(function (e) {
                var r;
                return (Y(e) && !t) || ft(e, 1)
                  ? (r = n).push.apply(r, mt(e))
                  : n.push(e);
              }) || n
            );
          },
          mt = function (e, t, n) {
            return b && !t && b.selector
              ? b.selector(e)
              : !Y(e) || n || (!T && Nt())
              ? $(e)
                ? pt(e, n)
                : ft(e)
                ? ht.call(e, 0)
                : e
                ? [e]
                : []
              : ht.call((t || S).querySelectorAll(e), 0);
          },
          vt = function (e) {
            return (
              (e = mt(e)[0] || ce('Invalid scope') || {}),
              function (t) {
                var n = e.current || e.nativeElement || e;
                return mt(
                  t,
                  n.querySelectorAll
                    ? n
                    : n === e
                    ? ce('Invalid scope') || S.createElement('div')
                    : e
                );
              }
            );
          },
          _t = function (e) {
            return e.sort(function () {
              return 0.5 - Math.random();
            });
          },
          gt = function (e) {
            if (V(e)) return e;
            var t = W(e) ? e : { each: e },
              n = Ht(t.ease),
              r = t.from || 0,
              i = parseFloat(t.base) || 0,
              a = {},
              o = r > 0 && r < 1,
              s = isNaN(r) || o,
              u = t.axis,
              l = r,
              c = r;
            return (
              Y(r)
                ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
                : !o && s && ((l = r[0]), (c = r[1])),
              function (e, o, d) {
                var h,
                  f,
                  p,
                  m,
                  v,
                  _,
                  g,
                  y,
                  b,
                  x = (d || t).length,
                  w = a[x];
                if (!w) {
                  if (!(b = 'auto' === t.grid ? 0 : (t.grid || [1, F])[1])) {
                    for (
                      g = -F;
                      g < (g = d[b++].getBoundingClientRect().left) && b < x;

                    );
                    b--;
                  }
                  for (
                    w = a[x] = [],
                      h = s ? Math.min(b, x) * l - 0.5 : r % b,
                      f = b === F ? 0 : s ? (x * c) / b - 0.5 : (r / b) | 0,
                      g = 0,
                      y = F,
                      _ = 0;
                    _ < x;
                    _++
                  )
                    (p = (_ % b) - h),
                      (m = f - ((_ / b) | 0)),
                      (w[_] = v =
                        u ? Math.abs('y' === u ? m : p) : j(p * p + m * m)),
                      v > g && (g = v),
                      v < y && (y = v);
                  'random' === r && _t(w),
                    (w.max = g - y),
                    (w.min = y),
                    (w.v = x =
                      (parseFloat(t.amount) ||
                        parseFloat(t.each) *
                          (b > x
                            ? x - 1
                            : u
                            ? 'y' === u
                              ? x / b
                              : b
                            : Math.max(b, x / b)) ||
                        0) * ('edges' === r ? -1 : 1)),
                    (w.b = x < 0 ? i - x : i),
                    (w.u = dt(t.amount || t.each) || 0),
                    (n = n && x < 0 ? Vt(n) : n);
                }
                return (
                  (x = (w[e] - w.min) / w.max || 0),
                  ke(w.b + (n ? n(x) : x) * w.v) + w.u
                );
              }
            );
          },
          yt = function (e) {
            var t = Math.pow(10, ((e + '').split('.')[1] || '').length);
            return function (n) {
              var r = ke(Math.round(parseFloat(n) / e) * e * t);
              return (r - (r % 1)) / t + (X(n) ? 0 : dt(n));
            };
          },
          bt = function (e, t) {
            var n,
              r,
              i = $(e);
            return (
              !i &&
                W(e) &&
                ((n = i = e.radius || F),
                e.values
                  ? ((e = mt(e.values)), (r = !X(e[0])) && (n *= n))
                  : (e = yt(e.increment))),
              lt(
                t,
                i
                  ? V(e)
                    ? function (t) {
                        return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                      }
                    : function (t) {
                        for (
                          var i,
                            a,
                            o = parseFloat(r ? t.x : t),
                            s = parseFloat(r ? t.y : 0),
                            u = F,
                            l = 0,
                            c = e.length;
                          c--;

                        )
                          (i = r
                            ? (i = e[c].x - o) * i + (a = e[c].y - s) * a
                            : Math.abs(e[c] - o)) < u && ((u = i), (l = c));
                        return (
                          (l = !n || u <= n ? e[l] : t),
                          r || l === t || X(t) ? l : l + dt(t)
                        );
                      }
                  : yt(e)
              )
            );
          },
          xt = function (e, t, n, r) {
            return lt($(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
              return $(e)
                ? e[~~(Math.random() * e.length)]
                : (n = n || 1e-5) &&
                    (r = n < 1 ? Math.pow(10, (n + '').length - 2) : 1) &&
                    Math.floor(
                      Math.round(
                        (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                      ) *
                        n *
                        r
                    ) / r;
            });
          },
          wt = function (e, t, n) {
            return lt(n, function (n) {
              return e[~~t(n)];
            });
          },
          Tt = function (e) {
            for (
              var t, n, r, i, a = 0, o = '';
              ~(t = e.indexOf('random(', a));

            )
              (r = e.indexOf(')', t)),
                (i = '[' === e.charAt(t + 7)),
                (n = e.substr(t + 7, r - t - 7).match(i ? ie : J)),
                (o +=
                  e.substr(a, t - a) +
                  xt(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
                (a = r + 1);
            return o + e.substr(a, e.length - a);
          },
          St = function (e, t, n, r, i) {
            var a = t - e,
              o = r - n;
            return lt(i, function (t) {
              return n + (((t - e) / a) * o || 0);
            });
          },
          Mt = function (e, t, n) {
            var r,
              i,
              a,
              o = e.labels,
              s = F;
            for (r in o)
              (i = o[r] - t) < 0 == !!n &&
                i &&
                s > (i = Math.abs(i)) &&
                ((a = r), (s = i));
            return a;
          },
          Ct = function (e, t, n) {
            var r,
              i,
              a,
              o = e.vars,
              s = o[t],
              u = b,
              l = e._ctx;
            if (s)
              return (
                (r = o[t + 'Params']),
                (i = o.callbackScope || e),
                n && _e.length && Oe(),
                l && (b = l),
                (a = r ? s.apply(i, r) : s.call(i)),
                (b = u),
                a
              );
          },
          Et = function (e) {
            return (
              Ye(e),
              e.scrollTrigger && e.scrollTrigger.kill(!!y),
              e.progress() < 1 && Ct(e, 'onInterrupt'),
              e
            );
          },
          At = [],
          kt = function (e) {
            if (Z() && e) {
              var t = (e = (!e.name && e.default) || e).name,
                n = V(e),
                r =
                  t && !n && e.init
                    ? function () {
                        this._props = [];
                      }
                    : e,
                i = {
                  init: he,
                  render: bn,
                  add: rn,
                  kill: wn,
                  modifier: xn,
                  rawVars: 0,
                },
                a = {
                  targetTest: 0,
                  get: 0,
                  getSetter: vn,
                  aliases: {},
                  register: 0,
                };
              if ((Nt(), e !== r)) {
                if (ye[t]) return;
                Re(r, Re(Ne(e, i), a)),
                  Le(r.prototype, Le(i, Ne(e, a))),
                  (ye[(r.prop = t)] = r),
                  e.targetTest && (we.push(r), (ve[t] = 1)),
                  (t =
                    ('css' === t
                      ? 'CSS'
                      : t.charAt(0).toUpperCase() + t.substr(1)) + 'Plugin');
              }
              de(t, r), e.register && e.register(In, r, Mn);
            } else e && At.push(e);
          },
          Dt = 255,
          qt = {
            aqua: [0, Dt, Dt],
            lime: [0, Dt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Dt],
            navy: [0, 0, 128],
            white: [Dt, Dt, Dt],
            olive: [128, 128, 0],
            yellow: [Dt, Dt, 0],
            orange: [Dt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Dt, 0, 0],
            pink: [Dt, 192, 203],
            cyan: [0, Dt, Dt],
            transparent: [Dt, Dt, Dt, 0],
          },
          Ot = function (e, t, n) {
            return (
              ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
                ? t + (n - t) * e * 6
                : e < 0.5
                ? n
                : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) *
                Dt +
                0.5) |
              0
            );
          },
          Pt = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s,
              u,
              l,
              c,
              d,
              h,
              f = e ? (X(e) ? [e >> 16, (e >> 8) & Dt, e & Dt] : 0) : qt.black;
            if (!f) {
              if (
                (',' === e.substr(-1) && (e = e.substr(0, e.length - 1)), qt[e])
              )
                f = qt[e];
              else if ('#' === e.charAt(0)) {
                if (
                  (e.length < 6 &&
                    ((r = e.charAt(1)),
                    (i = e.charAt(2)),
                    (a = e.charAt(3)),
                    (e =
                      '#' +
                      r +
                      r +
                      i +
                      i +
                      a +
                      a +
                      (5 === e.length ? e.charAt(4) + e.charAt(4) : ''))),
                  9 === e.length)
                )
                  return [
                    (f = parseInt(e.substr(1, 6), 16)) >> 16,
                    (f >> 8) & Dt,
                    f & Dt,
                    parseInt(e.substr(7), 16) / 255,
                  ];
                f = [
                  (e = parseInt(e.substr(1), 16)) >> 16,
                  (e >> 8) & Dt,
                  e & Dt,
                ];
              } else if ('hsl' === e.substr(0, 3))
                if (((f = h = e.match(J)), t)) {
                  if (~e.indexOf('='))
                    return (
                      (f = e.match(ee)), n && f.length < 4 && (f[3] = 1), f
                    );
                } else
                  (o = (+f[0] % 360) / 360),
                    (s = +f[1] / 100),
                    (r =
                      2 * (u = +f[2] / 100) -
                      (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
                    f.length > 3 && (f[3] *= 1),
                    (f[0] = Ot(o + 1 / 3, r, i)),
                    (f[1] = Ot(o, r, i)),
                    (f[2] = Ot(o - 1 / 3, r, i));
              else f = e.match(J) || qt.transparent;
              f = f.map(Number);
            }
            return (
              t &&
                !h &&
                ((r = f[0] / Dt),
                (i = f[1] / Dt),
                (a = f[2] / Dt),
                (u = ((l = Math.max(r, i, a)) + (c = Math.min(r, i, a))) / 2),
                l === c
                  ? (o = s = 0)
                  : ((d = l - c),
                    (s = u > 0.5 ? d / (2 - l - c) : d / (l + c)),
                    (o =
                      l === r
                        ? (i - a) / d + (i < a ? 6 : 0)
                        : l === i
                        ? (a - r) / d + 2
                        : (r - i) / d + 4),
                    (o *= 60)),
                (f[0] = ~~(o + 0.5)),
                (f[1] = ~~(100 * s + 0.5)),
                (f[2] = ~~(100 * u + 0.5))),
              n && f.length < 4 && (f[3] = 1),
              f
            );
          },
          zt = function (e) {
            var t = [],
              n = [],
              r = -1;
            return (
              e.split(Rt).forEach(function (e) {
                var i = e.match(te) || [];
                t.push.apply(t, i), n.push((r += i.length + 1));
              }),
              (t.c = n),
              t
            );
          },
          Ft = function (e, t, n) {
            var r,
              i,
              a,
              o,
              s = '',
              u = (e + s).match(Rt),
              l = t ? 'hsla(' : 'rgba(',
              c = 0;
            if (!u) return e;
            if (
              ((u = u.map(function (e) {
                return (
                  (e = Pt(e, t, 1)) &&
                  l +
                    (t
                      ? e[0] + ',' + e[1] + '%,' + e[2] + '%,' + e[3]
                      : e.join(',')) +
                    ')'
                );
              })),
              n && ((a = zt(e)), (r = n.c).join(s) !== a.c.join(s)))
            )
              for (
                o = (i = e.replace(Rt, '1').split(te)).length - 1;
                c < o;
                c++
              )
                s +=
                  i[c] +
                  (~r.indexOf(c)
                    ? u.shift() || l + '0,0,0,0)'
                    : (a.length ? a : u.length ? u : n).shift());
            if (!i)
              for (o = (i = e.split(Rt)).length - 1; c < o; c++)
                s += i[c] + u[c];
            return s + i[o];
          },
          Rt = (function () {
            var e,
              t =
                '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
            for (e in qt) t += '|' + e + '\\b';
            return new RegExp(t + ')', 'gi');
          })(),
          Lt = /hsl[a]?\(/,
          It = (function () {
            var e,
              t,
              n,
              r,
              i,
              a,
              o = Date.now,
              s = 500,
              u = 33,
              l = o(),
              c = l,
              d = 1e3 / 240,
              h = d,
              f = [],
              p = function n(p) {
                var m,
                  v,
                  _,
                  g,
                  y = o() - c,
                  b = !0 === p;
                if (
                  (y > s && (l += y - u),
                  ((m = (_ = (c += y) - l) - h) > 0 || b) &&
                    ((g = ++r.frame),
                    (i = _ - 1e3 * r.time),
                    (r.time = _ /= 1e3),
                    (h += m + (m >= d ? 4 : d - m)),
                    (v = 1)),
                  b || (e = t(n)),
                  v)
                )
                  for (a = 0; a < f.length; a++) f[a](_, i, g, p);
              };
            return (r = {
              time: 0,
              frame: 0,
              tick: function () {
                p(!0);
              },
              deltaRatio: function (e) {
                return i / (1e3 / (e || 60));
              },
              wake: function () {
                M &&
                  (!T &&
                    Z() &&
                    ((w = T = window),
                    (S = w.document || {}),
                    (oe.gsap = In),
                    (w.gsapVersions || (w.gsapVersions = [])).push(In.version),
                    ue(se || w.GreenSockGlobals || (!w.gsap && w) || {}),
                    (n = w.requestAnimationFrame),
                    At.forEach(kt)),
                  e && r.sleep(),
                  (t =
                    n ||
                    function (e) {
                      return setTimeout(e, (h - 1e3 * r.time + 1) | 0);
                    }),
                  (A = 1),
                  p(2));
              },
              sleep: function () {
                (n ? w.cancelAnimationFrame : clearTimeout)(e),
                  (A = 0),
                  (t = he);
              },
              lagSmoothing: function (e, t) {
                (s = e || 1 / 0), (u = Math.min(t || 33, s));
              },
              fps: function (e) {
                (d = 1e3 / (e || 240)), (h = 1e3 * r.time + d);
              },
              add: function (e, t, n) {
                var i = t
                  ? function (t, n, a, o) {
                      e(t, n, a, o), r.remove(i);
                    }
                  : e;
                return r.remove(e), f[n ? 'unshift' : 'push'](i), Nt(), i;
              },
              remove: function (e, t) {
                ~(t = f.indexOf(e)) && f.splice(t, 1) && a >= t && a--;
              },
              _listeners: f,
            });
          })(),
          Nt = function () {
            return !A && It.wake();
          },
          jt = {},
          Ut = /^[\d.\-M][\d.\-,\s]/,
          Bt = /["']/g,
          Yt = function (e) {
            for (
              var t,
                n,
                r,
                i = {},
                a = e.substr(1, e.length - 3).split(':'),
                o = a[0],
                s = 1,
                u = a.length;
              s < u;
              s++
            )
              (n = a[s]),
                (t = s !== u - 1 ? n.lastIndexOf(',') : n.length),
                (r = n.substr(0, t)),
                (i[o] = isNaN(r) ? r.replace(Bt, '').trim() : +r),
                (o = n.substr(t + 1).trim());
            return i;
          },
          Vt = function (e) {
            return function (t) {
              return 1 - e(1 - t);
            };
          },
          Xt = function e(t, n) {
            for (var r, i = t._first; i; )
              i instanceof Jt
                ? e(i, n)
                : !i.vars.yoyoEase ||
                  (i._yoyo && i._repeat) ||
                  i._yoyo === n ||
                  (i.timeline
                    ? e(i.timeline, n)
                    : ((r = i._ease),
                      (i._ease = i._yEase),
                      (i._yEase = r),
                      (i._yoyo = n))),
                (i = i._next);
          },
          Ht = function (e, t) {
            return (
              (e &&
                (V(e)
                  ? e
                  : jt[e] ||
                    (function (e) {
                      var t,
                        n,
                        r,
                        i,
                        a = (e + '').split('('),
                        o = jt[a[0]];
                      return o && a.length > 1 && o.config
                        ? o.config.apply(
                            null,
                            ~e.indexOf('{')
                              ? [Yt(a[1])]
                              : ((t = e),
                                (n = t.indexOf('(') + 1),
                                (r = t.indexOf(')')),
                                (i = t.indexOf('(', n)),
                                t.substring(
                                  n,
                                  ~i && i < r ? t.indexOf(')', r + 1) : r
                                ))
                                  .split(',')
                                  .map(ze)
                          )
                        : jt._CE && Ut.test(e)
                        ? jt._CE('', e)
                        : o;
                    })(e))) ||
              t
            );
          },
          Wt = function (e, t, n, r) {
            void 0 === n &&
              (n = function (e) {
                return 1 - t(1 - e);
              }),
              void 0 === r &&
                (r = function (e) {
                  return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
                });
            var i,
              a = { easeIn: t, easeOut: n, easeInOut: r };
            return (
              Ee(e, function (e) {
                for (var t in ((jt[e] = oe[e] = a),
                (jt[(i = e.toLowerCase())] = n),
                a))
                  jt[
                    i +
                      ('easeIn' === t
                        ? '.in'
                        : 'easeOut' === t
                        ? '.out'
                        : '.inOut')
                  ] = jt[e + '.' + t] = a[t];
              }),
              a
            );
          },
          Kt = function (e) {
            return function (t) {
              return t < 0.5
                ? (1 - e(1 - 2 * t)) / 2
                : 0.5 + e(2 * (t - 0.5)) / 2;
            };
          },
          Zt = function e(t, n, r) {
            var i = n >= 1 ? n : 1,
              a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
              o = (a / L) * (Math.asin(1 / i) || 0),
              s = function (e) {
                return 1 === e
                  ? 1
                  : i * Math.pow(2, -10 * e) * B((e - o) * a) + 1;
              },
              u =
                'out' === t
                  ? s
                  : 'in' === t
                  ? function (e) {
                      return 1 - s(1 - e);
                    }
                  : Kt(s);
            return (
              (a = L / a),
              (u.config = function (n, r) {
                return e(t, n, r);
              }),
              u
            );
          },
          Gt = function e(t, n) {
            void 0 === n && (n = 1.70158);
            var r = function (e) {
                return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
              },
              i =
                'out' === t
                  ? r
                  : 'in' === t
                  ? function (e) {
                      return 1 - r(1 - e);
                    }
                  : Kt(r);
            return (
              (i.config = function (n) {
                return e(t, n);
              }),
              i
            );
          };
        Ee('Linear,Quad,Cubic,Quart,Quint,Strong', function (e, t) {
          var n = t < 5 ? t + 1 : t;
          Wt(
            e + ',Power' + (n - 1),
            t
              ? function (e) {
                  return Math.pow(e, n);
                }
              : function (e) {
                  return e;
                },
            function (e) {
              return 1 - Math.pow(1 - e, n);
            },
            function (e) {
              return e < 0.5
                ? Math.pow(2 * e, n) / 2
                : 1 - Math.pow(2 * (1 - e), n) / 2;
            }
          );
        }),
          (jt.Linear.easeNone = jt.none = jt.Linear.easeIn),
          Wt('Elastic', Zt('in'), Zt('out'), Zt()),
          (k = 7.5625),
          (q = 1 / (D = 2.75)),
          Wt(
            'Bounce',
            function (e) {
              return 1 - O(1 - e);
            },
            (O = function (e) {
              return e < q
                ? k * e * e
                : e < 0.7272727272727273
                ? k * Math.pow(e - 1.5 / D, 2) + 0.75
                : e < 0.9090909090909092
                ? k * (e -= 2.25 / D) * e + 0.9375
                : k * Math.pow(e - 2.625 / D, 2) + 0.984375;
            })
          ),
          Wt('Expo', function (e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0;
          }),
          Wt('Circ', function (e) {
            return -(j(1 - e * e) - 1);
          }),
          Wt('Sine', function (e) {
            return 1 === e ? 1 : 1 - U(e * I);
          }),
          Wt('Back', Gt('in'), Gt('out'), Gt()),
          (jt.SteppedEase =
            jt.steps =
            oe.SteppedEase =
              {
                config: function (e, t) {
                  void 0 === e && (e = 1);
                  var n = 1 / e,
                    r = e + (t ? 0 : 1),
                    i = t ? 1 : 0;
                  return function (e) {
                    return (((r * ct(0, 0.99999999, e)) | 0) + i) * n;
                  };
                },
              }),
          (z.ease = jt['quad.out']),
          Ee(
            'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
            function (e) {
              return (Te += e + ',' + e + 'Params,');
            }
          );
        var Qt = function (e, t) {
            (this.id = N++),
              (e._gsap = this),
              (this.target = e),
              (this.harness = t),
              (this.get = t ? t.get : Ce),
              (this.set = t ? t.getSetter : vn);
          },
          $t = (function () {
            function e(e) {
              (this.vars = e),
                (this._delay = +e.delay || 0),
                (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                  ((this._rDelay = e.repeatDelay || 0),
                  (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
                (this._ts = 1),
                it(this, +e.duration, 1, 1),
                (this.data = e.data),
                b && ((this._ctx = b), b.data.push(this)),
                A || It.wake();
            }
            var t = e.prototype;
            return (
              (t.delay = function (e) {
                return e || 0 === e
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + e - this._delay),
                    (this._delay = e),
                    this)
                  : this._delay;
              }),
              (t.duration = function (e) {
                return arguments.length
                  ? this.totalDuration(
                      this._repeat > 0
                        ? e + (e + this._rDelay) * this._repeat
                        : e
                    )
                  : this.totalDuration() && this._dur;
              }),
              (t.totalDuration = function (e) {
                return arguments.length
                  ? ((this._dirty = 0),
                    it(
                      this,
                      this._repeat < 0
                        ? e
                        : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                    ))
                  : this._tDur;
              }),
              (t.totalTime = function (e, t) {
                if ((Nt(), !arguments.length)) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                  for (
                    Qe(this, e), !n._dp || n.parent || $e(n, this);
                    n && n.parent;

                  )
                    n.parent._time !==
                      n._start +
                        (n._ts >= 0
                          ? n._tTime / n._ts
                          : (n.totalDuration() - n._tTime) / -n._ts) &&
                      n.totalTime(n._tTime, !0),
                      (n = n.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && e < this._tDur) ||
                      (this._ts < 0 && e > 0) ||
                      (!this._tDur && !e)) &&
                    Je(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime !== e ||
                    (!this._dur && !t) ||
                    (this._initted && Math.abs(this._zTime) === R) ||
                    (!e && !this._initted && (this.add || this._ptLookup))) &&
                    (this._ts || (this._pTime = e), Pe(this, e, t)),
                  this
                );
              }),
              (t.time = function (e, t) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), e + We(this)) %
                        (this._dur + this._rDelay) || (e ? this._dur : 0),
                      t
                    )
                  : this._time;
              }),
              (t.totalProgress = function (e, t) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * e, t)
                  : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.ratio;
              }),
              (t.progress = function (e, t) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                        We(this),
                      t
                    )
                  : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.ratio;
              }),
              (t.iteration = function (e, t) {
                var n = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (e - 1) * n, t)
                  : this._repeat
                  ? Ke(this._tTime, n) + 1
                  : 1;
              }),
              (t.timeScale = function (e) {
                if (!arguments.length)
                  return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === e) return this;
                var t =
                  this.parent && this._ts
                    ? Ze(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +e || 0),
                  (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
                  this.totalTime(ct(-Math.abs(this._delay), this._tDur, t), !0),
                  Ge(this),
                  (function (e) {
                    for (var t = e.parent; t && t.parent; )
                      (t._dirty = 1), t.totalDuration(), (t = t.parent);
                    return e;
                  })(this)
                );
              }),
              (t.paused = function (e) {
                return arguments.length
                  ? (this._ps !== e &&
                      ((this._ps = e),
                      e
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (Nt(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              Math.abs(this._zTime) !== R &&
                              (this._tTime -= R)
                          ))),
                    this)
                  : this._ps;
              }),
              (t.startTime = function (e) {
                if (arguments.length) {
                  this._start = e;
                  var t = this.parent || this._dp;
                  return (
                    t &&
                      (t._sort || !this.parent) &&
                      Je(t, this, e - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (t.endTime = function (e) {
                return (
                  this._start +
                  (K(e) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts || 1)
                );
              }),
              (t.rawTime = function (e) {
                var t = this.parent || this._dp;
                return t
                  ? e &&
                    (!this._ts ||
                      (this._repeat && this._time && this.totalProgress() < 1))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                    ? Ze(t.rawTime(e), this)
                    : this._tTime
                  : this._tTime;
              }),
              (t.revert = function (e) {
                void 0 === e && (e = me);
                var t = y;
                return (
                  (y = e),
                  (this._initted || this._startAt) &&
                    (this.timeline && this.timeline.revert(e),
                    this.totalTime(-0.01, e.suppressEvents)),
                  'nested' !== this.data && !1 !== e.kill && this.kill(),
                  (y = t),
                  this
                );
              }),
              (t.globalTime = function (e) {
                for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                  (n = t._start + n / (t._ts || 1)), (t = t._dp);
                return !this.parent && this._sat
                  ? this._sat.vars.immediateRender
                    ? -1 / 0
                    : this._sat.globalTime(e)
                  : n;
              }),
              (t.repeat = function (e) {
                return arguments.length
                  ? ((this._repeat = e === 1 / 0 ? -2 : e), at(this))
                  : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
              }),
              (t.repeatDelay = function (e) {
                if (arguments.length) {
                  var t = this._time;
                  return (this._rDelay = e), at(this), t ? this.time(t) : this;
                }
                return this._rDelay;
              }),
              (t.yoyo = function (e) {
                return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
              }),
              (t.seek = function (e, t) {
                return this.totalTime(st(this, e), K(t));
              }),
              (t.restart = function (e, t) {
                return this.play().totalTime(e ? -this._delay : 0, K(t));
              }),
              (t.play = function (e, t) {
                return (
                  null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                );
              }),
              (t.reverse = function (e, t) {
                return (
                  null != e && this.seek(e || this.totalDuration(), t),
                  this.reversed(!0).paused(!1)
                );
              }),
              (t.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0);
              }),
              (t.resume = function () {
                return this.paused(!1);
              }),
              (t.reversed = function (e) {
                return arguments.length
                  ? (!!e !== this.reversed() &&
                      this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                    this)
                  : this._rts < 0;
              }),
              (t.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -1e-8), this
                );
              }),
              (t.isActive = function () {
                var e,
                  t = this.parent || this._dp,
                  n = this._start;
                return !(
                  t &&
                  !(
                    this._ts &&
                    this._initted &&
                    t.isActive() &&
                    (e = t.rawTime(!0)) >= n &&
                    e < this.endTime(!0) - R
                  )
                );
              }),
              (t.eventCallback = function (e, t, n) {
                var r = this.vars;
                return arguments.length > 1
                  ? (t
                      ? ((r[e] = t),
                        n && (r[e + 'Params'] = n),
                        'onUpdate' === e && (this._onUpdate = t))
                      : delete r[e],
                    this)
                  : r[e];
              }),
              (t.then = function (e) {
                var t = this;
                return new Promise(function (n) {
                  var r = V(e) ? e : Fe,
                    i = function () {
                      var e = t.then;
                      (t.then = null),
                        V(r) &&
                          (r = r(t)) &&
                          (r.then || r === t) &&
                          (t.then = e),
                        n(r),
                        (t.then = e);
                    };
                  (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
                  (!t._tTime && t._ts < 0)
                    ? i()
                    : (t._prom = i);
                });
              }),
              (t.kill = function () {
                Et(this);
              }),
              e
            );
          })();
        Re($t.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -1e-8,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var Jt = (function (e) {
          function t(t, n) {
            var r;
            return (
              void 0 === t && (t = {}),
              ((r = e.call(this, t) || this).labels = {}),
              (r.smoothChildTiming = !!t.smoothChildTiming),
              (r.autoRemoveChildren = !!t.autoRemoveChildren),
              (r._sort = K(t.sortChildren)),
              x && Je(t.parent || x, v(r), n),
              t.reversed && r.reverse(),
              t.paused && r.paused(!0),
              t.scrollTrigger && et(v(r), t.scrollTrigger),
              r
            );
          }
          _(t, e);
          var n = t.prototype;
          return (
            (n.to = function (e, t, n) {
              return ut(0, arguments, this), this;
            }),
            (n.from = function (e, t, n) {
              return ut(1, arguments, this), this;
            }),
            (n.fromTo = function (e, t, n, r) {
              return ut(2, arguments, this), this;
            }),
            (n.set = function (e, t, n) {
              return (
                (t.duration = 0),
                (t.parent = this),
                je(t).repeatDelay || (t.repeat = 0),
                (t.immediateRender = !!t.immediateRender),
                new dn(e, t, st(this, n), 1),
                this
              );
            }),
            (n.call = function (e, t, n) {
              return Je(this, dn.delayedCall(0, e, t), n);
            }),
            (n.staggerTo = function (e, t, n, r, i, a, o) {
              return (
                (n.duration = t),
                (n.stagger = n.stagger || r),
                (n.onComplete = a),
                (n.onCompleteParams = o),
                (n.parent = this),
                new dn(e, n, st(this, i)),
                this
              );
            }),
            (n.staggerFrom = function (e, t, n, r, i, a, o) {
              return (
                (n.runBackwards = 1),
                (je(n).immediateRender = K(n.immediateRender)),
                this.staggerTo(e, t, n, r, i, a, o)
              );
            }),
            (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
              return (
                (r.startAt = n),
                (je(r).immediateRender = K(r.immediateRender)),
                this.staggerTo(e, t, r, i, a, o, s)
              );
            }),
            (n.render = function (e, t, n) {
              var r,
                i,
                a,
                o,
                s,
                u,
                l,
                c,
                d,
                h,
                f,
                p,
                m = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                _ = this._dur,
                g = e <= 0 ? 0 : ke(e),
                b = this._zTime < 0 != e < 0 && (this._initted || !_);
              if (
                (this !== x && g > v && e >= 0 && (g = v),
                g !== this._tTime || n || b)
              ) {
                if (
                  (m !== this._time &&
                    _ &&
                    ((g += this._time - m), (e += this._time - m)),
                  (r = g),
                  (d = this._start),
                  (u = !(c = this._ts)),
                  b && (_ || (m = this._zTime), (e || !t) && (this._zTime = e)),
                  this._repeat)
                ) {
                  if (
                    ((f = this._yoyo),
                    (s = _ + this._rDelay),
                    this._repeat < -1 && e < 0)
                  )
                    return this.totalTime(100 * s + e, t, n);
                  if (
                    ((r = ke(g % s)),
                    g === v
                      ? ((o = this._repeat), (r = _))
                      : ((o = ~~(g / s)) && o === g / s && ((r = _), o--),
                        r > _ && (r = _)),
                    (h = Ke(this._tTime, s)),
                    !m &&
                      this._tTime &&
                      h !== o &&
                      this._tTime - h * s - this._dur <= 0 &&
                      (h = o),
                    f && 1 & o && ((r = _ - r), (p = 1)),
                    o !== h && !this._lock)
                  ) {
                    var w = f && 1 & h,
                      T = w === (f && 1 & o);
                    if (
                      (o < h && (w = !w),
                      (m = w ? 0 : g % _ ? _ : g),
                      (this._lock = 1),
                      (this.render(m || (p ? 0 : ke(o * s)), t, !_)._lock = 0),
                      (this._tTime = g),
                      !t && this.parent && Ct(this, 'onRepeat'),
                      this.vars.repeatRefresh &&
                        !p &&
                        (this.invalidate()._lock = 1),
                      (m && m !== this._time) ||
                        u !== !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((_ = this._dur),
                      (v = this._tDur),
                      T &&
                        ((this._lock = 2),
                        (m = w ? _ : -1e-4),
                        this.render(m, !0),
                        this.vars.repeatRefresh && !p && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !u)
                    )
                      return this;
                    Xt(this, p);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    ((l = (function (e, t, n) {
                      var r;
                      if (n > t)
                        for (r = e._first; r && r._start <= n; ) {
                          if ('isPause' === r.data && r._start > t) return r;
                          r = r._next;
                        }
                      else
                        for (r = e._last; r && r._start >= n; ) {
                          if ('isPause' === r.data && r._start < t) return r;
                          r = r._prev;
                        }
                    })(this, ke(m), ke(r))),
                    l && (g -= r - (r = l._start))),
                  (this._tTime = g),
                  (this._time = r),
                  (this._act = !c),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = e),
                    (m = 0)),
                  !m &&
                    r &&
                    !t &&
                    !o &&
                    (Ct(this, 'onStart'), this._tTime !== g))
                )
                  return this;
                if (r >= m && e >= 0)
                  for (i = this._first; i; ) {
                    if (
                      ((a = i._next),
                      (i._act || r >= i._start) && i._ts && l !== i)
                    ) {
                      if (i.parent !== this) return this.render(e, t, n);
                      if (
                        (i.render(
                          i._ts > 0
                            ? (r - i._start) * i._ts
                            : (i._dirty ? i.totalDuration() : i._tDur) +
                                (r - i._start) * i._ts,
                          t,
                          n
                        ),
                        r !== this._time || (!this._ts && !u))
                      ) {
                        (l = 0), a && (g += this._zTime = -1e-8);
                        break;
                      }
                    }
                    i = a;
                  }
                else {
                  i = this._last;
                  for (var S = e < 0 ? e : r; i; ) {
                    if (
                      ((a = i._prev),
                      (i._act || S <= i._end) && i._ts && l !== i)
                    ) {
                      if (i.parent !== this) return this.render(e, t, n);
                      if (
                        (i.render(
                          i._ts > 0
                            ? (S - i._start) * i._ts
                            : (i._dirty ? i.totalDuration() : i._tDur) +
                                (S - i._start) * i._ts,
                          t,
                          n || (y && (i._initted || i._startAt))
                        ),
                        r !== this._time || (!this._ts && !u))
                      ) {
                        (l = 0), a && (g += this._zTime = S ? -1e-8 : R);
                        break;
                      }
                    }
                    i = a;
                  }
                }
                if (
                  l &&
                  !t &&
                  (this.pause(),
                  (l.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
                  this._ts)
                )
                  return (this._start = d), Ge(this), this.render(e, t, n);
                this._onUpdate && !t && Ct(this, 'onUpdate', !0),
                  ((g === v && this._tTime >= this.totalDuration()) ||
                    (!g && m)) &&
                    ((d !== this._start &&
                      Math.abs(c) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((e || !_) &&
                        ((g === v && this._ts > 0) || (!g && this._ts < 0)) &&
                        Ye(this, 1),
                      t ||
                        (e < 0 && !m) ||
                        (!g && !m && v) ||
                        (Ct(
                          this,
                          g === v && e >= 0
                            ? 'onComplete'
                            : 'onReverseComplete',
                          !0
                        ),
                        this._prom &&
                          !(g < v && this.timeScale() > 0) &&
                          this._prom())));
              }
              return this;
            }),
            (n.add = function (e, t) {
              var n = this;
              if ((X(t) || (t = st(this, t, e)), !(e instanceof $t))) {
                if ($(e))
                  return (
                    e.forEach(function (e) {
                      return n.add(e, t);
                    }),
                    this
                  );
                if (Y(e)) return this.addLabel(e, t);
                if (!V(e)) return this;
                e = dn.delayedCall(0, e);
              }
              return this !== e ? Je(this, e, t) : this;
            }),
            (n.getChildren = function (e, t, n, r) {
              void 0 === e && (e = !0),
                void 0 === t && (t = !0),
                void 0 === n && (n = !0),
                void 0 === r && (r = -F);
              for (var i = [], a = this._first; a; )
                a._start >= r &&
                  (a instanceof dn
                    ? t && i.push(a)
                    : (n && i.push(a),
                      e && i.push.apply(i, a.getChildren(!0, t, n)))),
                  (a = a._next);
              return i;
            }),
            (n.getById = function (e) {
              for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
                if (t[n].vars.id === e) return t[n];
            }),
            (n.remove = function (e) {
              return Y(e)
                ? this.removeLabel(e)
                : V(e)
                ? this.killTweensOf(e)
                : (Be(this, e),
                  e === this._recent && (this._recent = this._last),
                  Ve(this));
            }),
            (n.totalTime = function (t, n) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = ke(
                      It.time -
                        (this._ts > 0
                          ? t / this._ts
                          : (this.totalDuration() - t) / -this._ts)
                    )),
                  e.prototype.totalTime.call(this, t, n),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (n.addLabel = function (e, t) {
              return (this.labels[e] = st(this, t)), this;
            }),
            (n.removeLabel = function (e) {
              return delete this.labels[e], this;
            }),
            (n.addPause = function (e, t, n) {
              var r = dn.delayedCall(0, t || he, n);
              return (
                (r.data = 'isPause'),
                (this._hasPause = 1),
                Je(this, r, st(this, e))
              );
            }),
            (n.removePause = function (e) {
              var t = this._first;
              for (e = st(this, e); t; )
                t._start === e && 'isPause' === t.data && Ye(t), (t = t._next);
            }),
            (n.killTweensOf = function (e, t, n) {
              for (var r = this.getTweensOf(e, n), i = r.length; i--; )
                en !== r[i] && r[i].kill(e, t);
              return this;
            }),
            (n.getTweensOf = function (e, t) {
              for (var n, r = [], i = mt(e), a = this._first, o = X(t); a; )
                a instanceof dn
                  ? qe(a._targets, i) &&
                    (o
                      ? (!en || (a._initted && a._ts)) &&
                        a.globalTime(0) <= t &&
                        a.globalTime(a.totalDuration()) > t
                      : !t || a.isActive()) &&
                    r.push(a)
                  : (n = a.getTweensOf(i, t)).length && r.push.apply(r, n),
                  (a = a._next);
              return r;
            }),
            (n.tweenTo = function (e, t) {
              t = t || {};
              var n,
                r = this,
                i = st(r, e),
                a = t,
                o = a.startAt,
                s = a.onStart,
                u = a.onStartParams,
                l = a.immediateRender,
                c = dn.to(
                  r,
                  Re(
                    {
                      ease: t.ease || 'none',
                      lazy: !1,
                      immediateRender: !1,
                      time: i,
                      overwrite: 'auto',
                      duration:
                        t.duration ||
                        Math.abs(
                          (i - (o && 'time' in o ? o.time : r._time)) /
                            r.timeScale()
                        ) ||
                        R,
                      onStart: function () {
                        if ((r.pause(), !n)) {
                          var e =
                            t.duration ||
                            Math.abs(
                              (i - (o && 'time' in o ? o.time : r._time)) /
                                r.timeScale()
                            );
                          c._dur !== e &&
                            it(c, e, 0, 1).render(c._time, !0, !0),
                            (n = 1);
                        }
                        s && s.apply(c, u || []);
                      },
                    },
                    t
                  )
                );
              return l ? c.render(0) : c;
            }),
            (n.tweenFromTo = function (e, t, n) {
              return this.tweenTo(t, Re({ startAt: { time: st(this, e) } }, n));
            }),
            (n.recent = function () {
              return this._recent;
            }),
            (n.nextLabel = function (e) {
              return void 0 === e && (e = this._time), Mt(this, st(this, e));
            }),
            (n.previousLabel = function (e) {
              return void 0 === e && (e = this._time), Mt(this, st(this, e), 1);
            }),
            (n.currentLabel = function (e) {
              return arguments.length
                ? this.seek(e, !0)
                : this.previousLabel(this._time + R);
            }),
            (n.shiftChildren = function (e, t, n) {
              void 0 === n && (n = 0);
              for (var r, i = this._first, a = this.labels; i; )
                i._start >= n && ((i._start += e), (i._end += e)),
                  (i = i._next);
              if (t) for (r in a) a[r] >= n && (a[r] += e);
              return Ve(this);
            }),
            (n.invalidate = function (t) {
              var n = this._first;
              for (this._lock = 0; n; ) n.invalidate(t), (n = n._next);
              return e.prototype.invalidate.call(this, t);
            }),
            (n.clear = function (e) {
              void 0 === e && (e = !0);
              for (var t, n = this._first; n; )
                (t = n._next), this.remove(n), (n = t);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                e && (this.labels = {}),
                Ve(this)
              );
            }),
            (n.totalDuration = function (e) {
              var t,
                n,
                r,
                i = 0,
                a = this,
                o = a._last,
                s = F;
              if (arguments.length)
                return a.timeScale(
                  (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                    (a.reversed() ? -e : e)
                );
              if (a._dirty) {
                for (r = a.parent; o; )
                  (t = o._prev),
                    o._dirty && o.totalDuration(),
                    (n = o._start) > s && a._sort && o._ts && !a._lock
                      ? ((a._lock = 1), (Je(a, o, n - o._delay, 1)._lock = 0))
                      : (s = n),
                    n < 0 &&
                      o._ts &&
                      ((i -= n),
                      ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                        ((a._start += n / a._ts),
                        (a._time -= n),
                        (a._tTime -= n)),
                      a.shiftChildren(-n, !1, -Infinity),
                      (s = 0)),
                    o._end > i && o._ts && (i = o._end),
                    (o = t);
                it(a, a === x && a._time > i ? a._time : i, 1, 1),
                  (a._dirty = 0);
              }
              return a._tDur;
            }),
            (t.updateRoot = function (e) {
              if (
                (x._ts && (Pe(x, Ze(e, x)), (C = It.frame)), It.frame >= xe)
              ) {
                xe += P.autoSleep || 120;
                var t = x._first;
                if ((!t || !t._ts) && P.autoSleep && It._listeners.length < 2) {
                  for (; t && !t._ts; ) t = t._next;
                  t || It.sleep();
                }
              }
            }),
            t
          );
        })($t);
        Re(Jt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var en,
          tn,
          nn = function (e, t, n, r, i, a, o) {
            var s,
              u,
              l,
              c,
              d,
              h,
              f,
              p,
              m = new Mn(this._pt, e, t, 0, 1, yn, null, i),
              v = 0,
              _ = 0;
            for (
              m.b = n,
                m.e = r,
                n += '',
                (f = ~(r += '').indexOf('random(')) && (r = Tt(r)),
                a && (a((p = [n, r]), e, t), (n = p[0]), (r = p[1])),
                u = n.match(ne) || [];
              (s = ne.exec(r));

            )
              (c = s[0]),
                (d = r.substring(v, s.index)),
                l ? (l = (l + 1) % 5) : 'rgba(' === d.substr(-5) && (l = 1),
                c !== u[_++] &&
                  ((h = parseFloat(u[_ - 1]) || 0),
                  (m._pt = {
                    _next: m._pt,
                    p: d || 1 === _ ? d : ',',
                    s: h,
                    c: '=' === c.charAt(1) ? De(h, c) - h : parseFloat(c) - h,
                    m: l && l < 4 ? Math.round : 0,
                  }),
                  (v = ne.lastIndex));
            return (
              (m.c = v < r.length ? r.substring(v, r.length) : ''),
              (m.fp = o),
              (re.test(r) || f) && (m.e = 0),
              (this._pt = m),
              m
            );
          },
          rn = function (e, t, n, r, i, a, o, s, u, l) {
            V(r) && (r = r(i || 0, e, a));
            var c,
              d = e[t],
              h =
                'get' !== n
                  ? n
                  : V(d)
                  ? u
                    ? e[
                        t.indexOf('set') || !V(e['get' + t.substr(3)])
                          ? t
                          : 'get' + t.substr(3)
                      ](u)
                    : e[t]()
                  : d,
              f = V(d) ? (u ? pn : fn) : hn;
            if (
              (Y(r) &&
                (~r.indexOf('random(') && (r = Tt(r)),
                '=' === r.charAt(1) &&
                  ((c = De(h, r) + (dt(h) || 0)) || 0 === c) &&
                  (r = c)),
              !l || h !== r || tn)
            )
              return isNaN(h * r) || '' === r
                ? (!d && !(t in e) && le(t, r),
                  nn.call(this, e, t, h, r, f, s || P.stringFilter, u))
                : ((c = new Mn(
                    this._pt,
                    e,
                    t,
                    +h || 0,
                    r - (h || 0),
                    'boolean' == typeof d ? gn : _n,
                    0,
                    f
                  )),
                  u && (c.fp = u),
                  o && c.modifier(o, this, e),
                  (this._pt = c));
          },
          an = function (e, t, n, r, i, a) {
            var o, s, u, l;
            if (
              ye[e] &&
              !1 !==
                (o = new ye[e]()).init(
                  i,
                  o.rawVars
                    ? t[e]
                    : (function (e, t, n, r, i) {
                        if (
                          (V(e) && (e = un(e, i, t, n, r)),
                          !W(e) || (e.style && e.nodeType) || $(e) || Q(e))
                        )
                          return Y(e) ? un(e, i, t, n, r) : e;
                        var a,
                          o = {};
                        for (a in e) o[a] = un(e[a], i, t, n, r);
                        return o;
                      })(t[e], r, i, a, n),
                  n,
                  r,
                  a
                ) &&
              ((n._pt = s =
                new Mn(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
              n !== E)
            )
              for (
                u = n._ptLookup[n._targets.indexOf(i)], l = o._props.length;
                l--;

              )
                u[o._props[l]] = s;
            return o;
          },
          on = function e(t, n, r) {
            var i,
              a,
              o,
              s,
              u,
              l,
              c,
              d,
              h,
              f,
              p,
              m,
              v,
              _ = t.vars,
              b = _.ease,
              w = _.startAt,
              T = _.immediateRender,
              S = _.lazy,
              M = _.onUpdate,
              C = _.onUpdateParams,
              E = _.callbackScope,
              A = _.runBackwards,
              k = _.yoyoEase,
              D = _.keyframes,
              q = _.autoRevert,
              O = t._dur,
              P = t._startAt,
              L = t._targets,
              I = t.parent,
              N = I && 'nested' === I.data ? I.vars.targets : L,
              j = 'auto' === t._overwrite && !g,
              U = t.timeline;
            if (
              (U && (!D || !b) && (b = 'none'),
              (t._ease = Ht(b, z.ease)),
              (t._yEase = k ? Vt(Ht(!0 === k ? b : k, z.ease)) : 0),
              k &&
                t._yoyo &&
                !t._repeat &&
                ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)),
              (t._from = !U && !!_.runBackwards),
              !U || (D && !_.stagger))
            ) {
              if (
                ((m = (d = L[0] ? Me(L[0]).harness : 0) && _[d.prop]),
                (i = Ne(_, ve)),
                P &&
                  (P._zTime < 0 && P.progress(1),
                  n < 0 && A && T && !q
                    ? P.render(-1, !0)
                    : P.revert(A && O ? pe : fe),
                  (P._lazy = 0)),
                w)
              ) {
                if (
                  (Ye(
                    (t._startAt = dn.set(
                      L,
                      Re(
                        {
                          data: 'isStart',
                          overwrite: !1,
                          parent: I,
                          immediateRender: !0,
                          lazy: !P && K(S),
                          startAt: null,
                          delay: 0,
                          onUpdate: M,
                          onUpdateParams: C,
                          callbackScope: E,
                          stagger: 0,
                        },
                        w
                      )
                    ))
                  ),
                  (t._startAt._dp = 0),
                  (t._startAt._sat = t),
                  n < 0 && (y || (!T && !q)) && t._startAt.revert(pe),
                  T && O && n <= 0 && r <= 0)
                )
                  return void (n && (t._zTime = n));
              } else if (A && O && !P)
                if (
                  (n && (T = !1),
                  (o = Re(
                    {
                      overwrite: !1,
                      data: 'isFromStart',
                      lazy: T && !P && K(S),
                      immediateRender: T,
                      stagger: 0,
                      parent: I,
                    },
                    i
                  )),
                  m && (o[d.prop] = m),
                  Ye((t._startAt = dn.set(L, o))),
                  (t._startAt._dp = 0),
                  (t._startAt._sat = t),
                  n < 0 &&
                    (y ? t._startAt.revert(pe) : t._startAt.render(-1, !0)),
                  (t._zTime = n),
                  T)
                ) {
                  if (!n) return;
                } else e(t._startAt, R, R);
              for (
                t._pt = t._ptCache = 0, S = (O && K(S)) || (S && !O), a = 0;
                a < L.length;
                a++
              ) {
                if (
                  ((c = (u = L[a])._gsap || Se(L)[a]._gsap),
                  (t._ptLookup[a] = f = {}),
                  ge[c.id] && _e.length && Oe(),
                  (p = N === L ? a : N.indexOf(u)),
                  d &&
                    !1 !== (h = new d()).init(u, m || i, t, p, N) &&
                    ((t._pt = s =
                      new Mn(
                        t._pt,
                        u,
                        h.name,
                        0,
                        1,
                        h.render,
                        h,
                        0,
                        h.priority
                      )),
                    h._props.forEach(function (e) {
                      f[e] = s;
                    }),
                    h.priority && (l = 1)),
                  !d || m)
                )
                  for (o in i)
                    ye[o] && (h = an(o, i, t, p, u, N))
                      ? h.priority && (l = 1)
                      : (f[o] = s =
                          rn.call(
                            t,
                            u,
                            o,
                            'get',
                            i[o],
                            p,
                            N,
                            0,
                            _.stringFilter
                          ));
                t._op && t._op[a] && t.kill(u, t._op[a]),
                  j &&
                    t._pt &&
                    ((en = t),
                    x.killTweensOf(u, f, t.globalTime(n)),
                    (v = !t.parent),
                    (en = 0)),
                  t._pt && S && (ge[c.id] = 1);
              }
              l && Sn(t), t._onInit && t._onInit(t);
            }
            (t._onUpdate = M),
              (t._initted = (!t._op || t._pt) && !v),
              D && n <= 0 && U.render(F, !0, !0);
          },
          sn = function (e, t, n, r) {
            var i,
              a,
              o = t.ease || r || 'power1.inOut';
            if ($(t))
              (a = n[e] || (n[e] = [])),
                t.forEach(function (e, n) {
                  return a.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
                });
            else
              for (i in t)
                (a = n[i] || (n[i] = [])),
                  'ease' === i || a.push({ t: parseFloat(e), v: t[i], e: o });
          },
          un = function (e, t, n, r, i) {
            return V(e)
              ? e.call(t, n, r, i)
              : Y(e) && ~e.indexOf('random(')
              ? Tt(e)
              : e;
          },
          ln = Te + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
          cn = {};
        Ee(
          ln + ',id,stagger,delay,duration,paused,scrollTrigger',
          function (e) {
            return (cn[e] = 1);
          }
        );
        var dn = (function (e) {
          function t(t, n, r, i) {
            var a;
            'number' == typeof n && ((r.duration = n), (n = r), (r = null));
            var o,
              s,
              u,
              l,
              c,
              d,
              h,
              f,
              p = (a = e.call(this, i ? n : je(n)) || this).vars,
              m = p.duration,
              _ = p.delay,
              y = p.immediateRender,
              b = p.stagger,
              w = p.overwrite,
              T = p.keyframes,
              S = p.defaults,
              M = p.scrollTrigger,
              C = p.yoyoEase,
              E = n.parent || x,
              A = ($(t) || Q(t) ? X(t[0]) : 'length' in n) ? [t] : mt(t);
            if (
              ((a._targets = A.length
                ? Se(A)
                : ce(
                    'GSAP target ' + t + ' not found. https://greensock.com',
                    !P.nullTargetWarn
                  ) || []),
              (a._ptLookup = []),
              (a._overwrite = w),
              T || b || G(m) || G(_))
            ) {
              if (
                ((n = a.vars),
                (o = a.timeline =
                  new Jt({
                    data: 'nested',
                    defaults: S || {},
                    targets: E && 'nested' === E.data ? E.vars.targets : A,
                  })).kill(),
                (o.parent = o._dp = v(a)),
                (o._start = 0),
                b || G(m) || G(_))
              ) {
                if (((l = A.length), (h = b && gt(b)), W(b)))
                  for (c in b) ~ln.indexOf(c) && (f || (f = {}), (f[c] = b[c]));
                for (s = 0; s < l; s++)
                  ((u = Ne(n, cn)).stagger = 0),
                    C && (u.yoyoEase = C),
                    f && Le(u, f),
                    (d = A[s]),
                    (u.duration = +un(m, v(a), s, d, A)),
                    (u.delay = (+un(_, v(a), s, d, A) || 0) - a._delay),
                    !b &&
                      1 === l &&
                      u.delay &&
                      ((a._delay = _ = u.delay),
                      (a._start += _),
                      (u.delay = 0)),
                    o.to(d, u, h ? h(s, d, A) : 0),
                    (o._ease = jt.none);
                o.duration() ? (m = _ = 0) : (a.timeline = 0);
              } else if (T) {
                je(Re(o.vars.defaults, { ease: 'none' })),
                  (o._ease = Ht(T.ease || n.ease || 'none'));
                var k,
                  D,
                  q,
                  O = 0;
                if ($(T))
                  T.forEach(function (e) {
                    return o.to(A, e, '>');
                  }),
                    o.duration();
                else {
                  for (c in ((u = {}), T))
                    'ease' === c ||
                      'easeEach' === c ||
                      sn(c, T[c], u, T.easeEach);
                  for (c in u)
                    for (
                      k = u[c].sort(function (e, t) {
                        return e.t - t.t;
                      }),
                        O = 0,
                        s = 0;
                      s < k.length;
                      s++
                    )
                      ((q = {
                        ease: (D = k[s]).e,
                        duration: ((D.t - (s ? k[s - 1].t : 0)) / 100) * m,
                      })[c] = D.v),
                        o.to(A, q, O),
                        (O += q.duration);
                  o.duration() < m && o.to({}, { duration: m - o.duration() });
                }
              }
              m || a.duration((m = o.duration()));
            } else a.timeline = 0;
            return (
              !0 !== w || g || ((en = v(a)), x.killTweensOf(A), (en = 0)),
              Je(E, v(a), r),
              n.reversed && a.reverse(),
              n.paused && a.paused(!0),
              (y ||
                (!m &&
                  !T &&
                  a._start === ke(E._time) &&
                  K(y) &&
                  He(v(a)) &&
                  'nested' !== E.data)) &&
                ((a._tTime = -1e-8), a.render(Math.max(0, -_) || 0)),
              M && et(v(a), M),
              a
            );
          }
          _(t, e);
          var n = t.prototype;
          return (
            (n.render = function (e, t, n) {
              var r,
                i,
                a,
                o,
                s,
                u,
                l,
                c,
                d,
                h = this._time,
                f = this._tDur,
                p = this._dur,
                m = e < 0,
                v = e > f - R && !m ? f : e < R ? 0 : e;
              if (p) {
                if (
                  v !== this._tTime ||
                  !e ||
                  n ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 !== m)
                ) {
                  if (((r = v), (c = this.timeline), this._repeat)) {
                    if (((o = p + this._rDelay), this._repeat < -1 && m))
                      return this.totalTime(100 * o + e, t, n);
                    if (
                      ((r = ke(v % o)),
                      v === f
                        ? ((a = this._repeat), (r = p))
                        : ((a = ~~(v / o)) && a === v / o && ((r = p), a--),
                          r > p && (r = p)),
                      (u = this._yoyo && 1 & a) &&
                        ((d = this._yEase), (r = p - r)),
                      (s = Ke(this._tTime, o)),
                      r === h && !n && this._initted)
                    )
                      return (this._tTime = v), this;
                    a !== s &&
                      (c && this._yEase && Xt(c, u),
                      !this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = n = 1),
                        (this.render(ke(o * a), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (tt(this, m ? e : r, n, t, v))
                      return (this._tTime = 0), this;
                    if (h !== this._time) return this;
                    if (p !== this._dur) return this.render(e, t, n);
                  }
                  if (
                    ((this._tTime = v),
                    (this._time = r),
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = l = (d || this._ease)(r / p)),
                    this._from && (this.ratio = l = 1 - l),
                    r &&
                      !h &&
                      !t &&
                      !a &&
                      (Ct(this, 'onStart'), this._tTime !== v))
                  )
                    return this;
                  for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
                  (c &&
                    c.render(
                      e < 0
                        ? e
                        : !r && u
                        ? -1e-8
                        : c._dur * c._ease(r / this._dur),
                      t,
                      n
                    )) ||
                    (this._startAt && (this._zTime = e)),
                    this._onUpdate &&
                      !t &&
                      (m && Xe(this, e, 0, n), Ct(this, 'onUpdate')),
                    this._repeat &&
                      a !== s &&
                      this.vars.onRepeat &&
                      !t &&
                      this.parent &&
                      Ct(this, 'onRepeat'),
                    (v !== this._tDur && v) ||
                      this._tTime !== v ||
                      (m && !this._onUpdate && Xe(this, e, 0, !0),
                      (e || !p) &&
                        ((v === this._tDur && this._ts > 0) ||
                          (!v && this._ts < 0)) &&
                        Ye(this, 1),
                      t ||
                        (m && !h) ||
                        !(v || h || u) ||
                        (Ct(
                          this,
                          v === f ? 'onComplete' : 'onReverseComplete',
                          !0
                        ),
                        this._prom &&
                          !(v < f && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (e, t, n, r) {
                  var i,
                    a,
                    o,
                    s = e.ratio,
                    u =
                      t < 0 ||
                      (!t &&
                        ((!e._start && nt(e) && (e._initted || !rt(e))) ||
                          ((e._ts < 0 || e._dp._ts < 0) && !rt(e))))
                        ? 0
                        : 1,
                    l = e._rDelay,
                    c = 0;
                  if (
                    (l &&
                      e._repeat &&
                      ((c = ct(0, e._tDur, t)),
                      (a = Ke(c, l)),
                      e._yoyo && 1 & a && (u = 1 - u),
                      a !== Ke(e._tTime, l) &&
                        ((s = 1 - u),
                        e.vars.repeatRefresh && e._initted && e.invalidate())),
                    u !== s || y || r || e._zTime === R || (!t && e._zTime))
                  ) {
                    if (!e._initted && tt(e, t, r, n, c)) return;
                    for (
                      o = e._zTime,
                        e._zTime = t || (n ? R : 0),
                        n || (n = t && !o),
                        e.ratio = u,
                        e._from && (u = 1 - u),
                        e._time = 0,
                        e._tTime = c,
                        i = e._pt;
                      i;

                    )
                      i.r(u, i.d), (i = i._next);
                    t < 0 && Xe(e, t, 0, !0),
                      e._onUpdate && !n && Ct(e, 'onUpdate'),
                      c && e._repeat && !n && e.parent && Ct(e, 'onRepeat'),
                      (t >= e._tDur || t < 0) &&
                        e.ratio === u &&
                        (u && Ye(e, 1),
                        n ||
                          y ||
                          (Ct(e, u ? 'onComplete' : 'onReverseComplete', !0),
                          e._prom && e._prom()));
                  } else e._zTime || (e._zTime = t);
                })(this, e, t, n);
              return this;
            }),
            (n.targets = function () {
              return this._targets;
            }),
            (n.invalidate = function (t) {
              return (
                (!t || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt =
                  this._op =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(t),
                e.prototype.invalidate.call(this, t)
              );
            }),
            (n.resetTo = function (e, t, n, r) {
              A || It.wake(), this._ts || this.play();
              var i = Math.min(
                this._dur,
                (this._dp._time - this._start) * this._ts
              );
              return (
                this._initted || on(this, i),
                (function (e, t, n, r, i, a, o) {
                  var s,
                    u,
                    l,
                    c,
                    d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
                  if (!d)
                    for (
                      d = e._ptCache[t] = [],
                        l = e._ptLookup,
                        c = e._targets.length;
                      c--;

                    ) {
                      if ((s = l[c][t]) && s.d && s.d._pt)
                        for (s = s.d._pt; s && s.p !== t && s.fp !== t; )
                          s = s._next;
                      if (!s)
                        return (
                          (tn = 1), (e.vars[t] = '+=0'), on(e, o), (tn = 0), 1
                        );
                      d.push(s);
                    }
                  for (c = d.length; c--; )
                    ((s = (u = d[c])._pt || u).s =
                      (!r && 0 !== r) || i ? s.s + (r || 0) + a * s.c : r),
                      (s.c = n - s.s),
                      u.e && (u.e = Ae(n) + dt(u.e)),
                      u.b && (u.b = s.s + dt(u.b));
                })(this, e, t, n, r, this._ease(i / this._dur), i)
                  ? this.resetTo(e, t, n, r)
                  : (Qe(this, 0),
                    this.parent ||
                      Ue(
                        this._dp,
                        this,
                        '_first',
                        '_last',
                        this._dp._sort ? '_start' : 0
                      ),
                    this.render(0))
              );
            }),
            (n.kill = function (e, t) {
              if ((void 0 === t && (t = 'all'), !(e || (t && 'all' !== t))))
                return (
                  (this._lazy = this._pt = 0), this.parent ? Et(this) : this
                );
              if (this.timeline) {
                var n = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    e,
                    t,
                    en && !0 !== en.vars.overwrite
                  )._first || Et(this),
                  this.parent &&
                    n !== this.timeline.totalDuration() &&
                    it(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                  this
                );
              }
              var r,
                i,
                a,
                o,
                s,
                u,
                l,
                c = this._targets,
                d = e ? mt(e) : c,
                h = this._ptLookup,
                f = this._pt;
              if (
                (!t || 'all' === t) &&
                (function (e, t) {
                  for (
                    var n = e.length, r = n === t.length;
                    r && n-- && e[n] === t[n];

                  );
                  return n < 0;
                })(c, d)
              )
                return 'all' === t && (this._pt = 0), Et(this);
              for (
                r = this._op = this._op || [],
                  'all' !== t &&
                    (Y(t) &&
                      ((s = {}),
                      Ee(t, function (e) {
                        return (s[e] = 1);
                      }),
                      (t = s)),
                    (t = (function (e, t) {
                      var n,
                        r,
                        i,
                        a,
                        o = e[0] ? Me(e[0]).harness : 0,
                        s = o && o.aliases;
                      if (!s) return t;
                      for (r in ((n = Le({}, t)), s))
                        if ((r in n))
                          for (i = (a = s[r].split(',')).length; i--; )
                            n[a[i]] = n[r];
                      return n;
                    })(c, t))),
                  l = c.length;
                l--;

              )
                if (~d.indexOf(c[l]))
                  for (s in ((i = h[l]),
                  'all' === t
                    ? ((r[l] = t), (o = i), (a = {}))
                    : ((a = r[l] = r[l] || {}), (o = t)),
                  o))
                    (u = i && i[s]) &&
                      (('kill' in u.d && !0 !== u.d.kill(s)) ||
                        Be(this, u, '_pt'),
                      delete i[s]),
                      'all' !== a && (a[s] = 1);
              return this._initted && !this._pt && f && Et(this), this;
            }),
            (t.to = function (e, n) {
              return new t(e, n, arguments[2]);
            }),
            (t.from = function (e, t) {
              return ut(1, arguments);
            }),
            (t.delayedCall = function (e, n, r, i) {
              return new t(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i,
              });
            }),
            (t.fromTo = function (e, t, n) {
              return ut(2, arguments);
            }),
            (t.set = function (e, n) {
              return (
                (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n)
              );
            }),
            (t.killTweensOf = function (e, t, n) {
              return x.killTweensOf(e, t, n);
            }),
            t
          );
        })($t);
        Re(dn.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          Ee('staggerTo,staggerFrom,staggerFromTo', function (e) {
            dn[e] = function () {
              var t = new Jt(),
                n = ht.call(arguments, 0);
              return (
                n.splice('staggerFromTo' === e ? 5 : 4, 0, 0), t[e].apply(t, n)
              );
            };
          });
        var hn = function (e, t, n) {
            return (e[t] = n);
          },
          fn = function (e, t, n) {
            return e[t](n);
          },
          pn = function (e, t, n, r) {
            return e[t](r.fp, n);
          },
          mn = function (e, t, n) {
            return e.setAttribute(t, n);
          },
          vn = function (e, t) {
            return V(e[t]) ? fn : H(e[t]) && e.setAttribute ? mn : hn;
          },
          _n = function (e, t) {
            return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
          },
          gn = function (e, t) {
            return t.set(t.t, t.p, !!(t.s + t.c * e), t);
          },
          yn = function (e, t) {
            var n = t._pt,
              r = '';
            if (!e && t.b) r = t.b;
            else if (1 === e && t.e) r = t.e;
            else {
              for (; n; )
                (r =
                  n.p +
                  (n.m
                    ? n.m(n.s + n.c * e)
                    : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
                  r),
                  (n = n._next);
              r += t.c;
            }
            t.set(t.t, t.p, r, t);
          },
          bn = function (e, t) {
            for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
          },
          xn = function (e, t, n, r) {
            for (var i, a = this._pt; a; )
              (i = a._next), a.p === r && a.modifier(e, t, n), (a = i);
          },
          wn = function (e) {
            for (var t, n, r = this._pt; r; )
              (n = r._next),
                (r.p === e && !r.op) || r.op === e
                  ? Be(this, r, '_pt')
                  : r.dep || (t = 1),
                (r = n);
            return !t;
          },
          Tn = function (e, t, n, r) {
            r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
          },
          Sn = function (e) {
            for (var t, n, r, i, a = e._pt; a; ) {
              for (t = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
              (a._prev = n ? n._prev : i) ? (a._prev._next = a) : (r = a),
                (a._next = n) ? (n._prev = a) : (i = a),
                (a = t);
            }
            e._pt = r;
          },
          Mn = (function () {
            function e(e, t, n, r, i, a, o, s, u) {
              (this.t = t),
                (this.s = r),
                (this.c = i),
                (this.p = n),
                (this.r = a || _n),
                (this.d = o || this),
                (this.set = s || hn),
                (this.pr = u || 0),
                (this._next = e),
                e && (e._prev = this);
            }
            return (
              (e.prototype.modifier = function (e, t, n) {
                (this.mSet = this.mSet || this.set),
                  (this.set = Tn),
                  (this.m = e),
                  (this.mt = n),
                  (this.tween = t);
              }),
              e
            );
          })();
        Ee(
          Te +
            'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
          function (e) {
            return (ve[e] = 1);
          }
        ),
          (oe.TweenMax = oe.TweenLite = dn),
          (oe.TimelineLite = oe.TimelineMax = Jt),
          (x = new Jt({
            sortChildren: !1,
            defaults: z,
            autoRemoveChildren: !0,
            id: 'root',
            smoothChildTiming: !0,
          })),
          (P.stringFilter = function (e) {
            var t,
              n = e.join(' ');
            if (((Rt.lastIndex = 0), Rt.test(n)))
              return (
                (t = Lt.test(n)),
                (e[1] = Ft(e[1], t)),
                (e[0] = Ft(e[0], t, zt(e[1]))),
                !0
              );
          });
        var Cn = [],
          En = {},
          An = [],
          kn = 0,
          Dn = 0,
          qn = function (e) {
            return (En[e] || An).map(function (e) {
              return e();
            });
          },
          On = function () {
            var e = Date.now(),
              t = [];
            e - kn > 2 &&
              (qn('matchMediaInit'),
              Cn.forEach(function (e) {
                var n,
                  r,
                  i,
                  a,
                  o = e.queries,
                  s = e.conditions;
                for (r in o)
                  (n = w.matchMedia(o[r]).matches) && (i = 1),
                    n !== s[r] && ((s[r] = n), (a = 1));
                a && (e.revert(), i && t.push(e));
              }),
              qn('matchMediaRevert'),
              t.forEach(function (e) {
                return e.onMatch(e);
              }),
              (kn = e),
              qn('matchMedia'));
          },
          Pn = (function () {
            function e(e, t) {
              (this.selector = t && vt(t)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = Dn++),
                e && this.add(e);
            }
            var t = e.prototype;
            return (
              (t.add = function (e, t, n) {
                V(e) && ((n = t), (t = e), (e = V));
                var r = this,
                  i = function () {
                    var e,
                      i = b,
                      a = r.selector;
                    return (
                      i && i !== r && i.data.push(r),
                      n && (r.selector = vt(n)),
                      (b = r),
                      (e = t.apply(r, arguments)),
                      V(e) && r._r.push(e),
                      (b = i),
                      (r.selector = a),
                      (r.isReverted = !1),
                      e
                    );
                  };
                return (r.last = i), e === V ? i(r) : e ? (r[e] = i) : i;
              }),
              (t.ignore = function (e) {
                var t = b;
                (b = null), e(this), (b = t);
              }),
              (t.getTweens = function () {
                var t = [];
                return (
                  this.data.forEach(function (n) {
                    return n instanceof e
                      ? t.push.apply(t, n.getTweens())
                      : n instanceof dn &&
                          !(n.parent && 'nested' === n.parent.data) &&
                          t.push(n);
                  }),
                  t
                );
              }),
              (t.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (t.kill = function (e, t) {
                var n = this;
                if (e) {
                  var r = this.getTweens();
                  this.data.forEach(function (e) {
                    'isFlip' === e.data &&
                      (e.revert(),
                      e.getChildren(!0, !0, !1).forEach(function (e) {
                        return r.splice(r.indexOf(e), 1);
                      }));
                  }),
                    r
                      .map(function (e) {
                        return { g: e.globalTime(0), t: e };
                      })
                      .sort(function (e, t) {
                        return t.g - e.g || -1 / 0;
                      })
                      .forEach(function (t) {
                        return t.t.revert(e);
                      }),
                    this.data.forEach(function (t) {
                      return !(t instanceof dn) && t.revert && t.revert(e);
                    }),
                    this._r.forEach(function (t) {
                      return t(e, n);
                    }),
                    (this.isReverted = !0);
                } else
                  this.data.forEach(function (e) {
                    return e.kill && e.kill();
                  });
                if ((this.clear(), t))
                  for (var i = Cn.length; i--; )
                    Cn[i].id === this.id && Cn.splice(i, 1);
              }),
              (t.revert = function (e) {
                this.kill(e || {});
              }),
              e
            );
          })(),
          zn = (function () {
            function e(e) {
              (this.contexts = []), (this.scope = e);
            }
            var t = e.prototype;
            return (
              (t.add = function (e, t, n) {
                W(e) || (e = { matches: e });
                var r,
                  i,
                  a,
                  o = new Pn(0, n || this.scope),
                  s = (o.conditions = {});
                for (i in (b && !o.selector && (o.selector = b.selector),
                this.contexts.push(o),
                (t = o.add('onMatch', t)),
                (o.queries = e),
                e))
                  'all' === i
                    ? (a = 1)
                    : (r = w.matchMedia(e[i])) &&
                      (Cn.indexOf(o) < 0 && Cn.push(o),
                      (s[i] = r.matches) && (a = 1),
                      r.addListener
                        ? r.addListener(On)
                        : r.addEventListener('change', On));
                return a && t(o), this;
              }),
              (t.revert = function (e) {
                this.kill(e || {});
              }),
              (t.kill = function (e) {
                this.contexts.forEach(function (t) {
                  return t.kill(e, !0);
                });
              }),
              e
            );
          })(),
          Fn = {
            registerPlugin: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              t.forEach(function (e) {
                return kt(e);
              });
            },
            timeline: function (e) {
              return new Jt(e);
            },
            getTweensOf: function (e, t) {
              return x.getTweensOf(e, t);
            },
            getProperty: function (e, t, n, r) {
              Y(e) && (e = mt(e)[0]);
              var i = Me(e || {}).get,
                a = n ? Fe : ze;
              return (
                'native' === n && (n = ''),
                e
                  ? t
                    ? a(((ye[t] && ye[t].get) || i)(e, t, n, r))
                    : function (t, n, r) {
                        return a(((ye[t] && ye[t].get) || i)(e, t, n, r));
                      }
                  : e
              );
            },
            quickSetter: function (e, t, n) {
              if ((e = mt(e)).length > 1) {
                var r = e.map(function (e) {
                    return In.quickSetter(e, t, n);
                  }),
                  i = r.length;
                return function (e) {
                  for (var t = i; t--; ) r[t](e);
                };
              }
              e = e[0] || {};
              var a = ye[t],
                o = Me(e),
                s = (o.harness && (o.harness.aliases || {})[t]) || t,
                u = a
                  ? function (t) {
                      var r = new a();
                      (E._pt = 0),
                        r.init(e, n ? t + n : t, E, 0, [e]),
                        r.render(1, r),
                        E._pt && bn(1, E);
                    }
                  : o.set(e, s);
              return a
                ? u
                : function (t) {
                    return u(e, s, n ? t + n : t, o, 1);
                  };
            },
            quickTo: function (e, t, n) {
              var r,
                i = In.to(
                  e,
                  Le((((r = {})[t] = '+=0.1'), (r.paused = !0), r), n || {})
                ),
                a = function (e, n, r) {
                  return i.resetTo(t, e, n, r);
                };
              return (a.tween = i), a;
            },
            isTweening: function (e) {
              return x.getTweensOf(e, !0).length > 0;
            },
            defaults: function (e) {
              return (
                e && e.ease && (e.ease = Ht(e.ease, z.ease)), Ie(z, e || {})
              );
            },
            config: function (e) {
              return Ie(P, e || {});
            },
            registerEffect: function (e) {
              var t = e.name,
                n = e.effect,
                r = e.plugins,
                i = e.defaults,
                a = e.extendTimeline;
              (r || '').split(',').forEach(function (e) {
                return (
                  e &&
                  !ye[e] &&
                  !oe[e] &&
                  ce(t + ' effect requires ' + e + ' plugin.')
                );
              }),
                (be[t] = function (e, t, r) {
                  return n(mt(e), Re(t || {}, i), r);
                }),
                a &&
                  (Jt.prototype[t] = function (e, n, r) {
                    return this.add(
                      be[t](e, W(n) ? n : (r = n) && {}, this),
                      r
                    );
                  });
            },
            registerEase: function (e, t) {
              jt[e] = Ht(t);
            },
            parseEase: function (e, t) {
              return arguments.length ? Ht(e, t) : jt;
            },
            getById: function (e) {
              return x.getById(e);
            },
            exportRoot: function (e, t) {
              void 0 === e && (e = {});
              var n,
                r,
                i = new Jt(e);
              for (
                i.smoothChildTiming = K(e.smoothChildTiming),
                  x.remove(i),
                  i._dp = 0,
                  i._time = i._tTime = x._time,
                  n = x._first;
                n;

              )
                (r = n._next),
                  (!t &&
                    !n._dur &&
                    n instanceof dn &&
                    n.vars.onComplete === n._targets[0]) ||
                    Je(i, n, n._start - n._delay),
                  (n = r);
              return Je(x, i, 0), i;
            },
            context: function (e, t) {
              return e ? new Pn(e, t) : b;
            },
            matchMedia: function (e) {
              return new zn(e);
            },
            matchMediaRefresh: function () {
              return (
                Cn.forEach(function (e) {
                  var t,
                    n,
                    r = e.conditions;
                  for (n in r) r[n] && ((r[n] = !1), (t = 1));
                  t && e.revert();
                }) || On()
              );
            },
            addEventListener: function (e, t) {
              var n = En[e] || (En[e] = []);
              ~n.indexOf(t) || n.push(t);
            },
            removeEventListener: function (e, t) {
              var n = En[e],
                r = n && n.indexOf(t);
              r >= 0 && n.splice(r, 1);
            },
            utils: {
              wrap: function e(t, n, r) {
                var i = n - t;
                return $(t)
                  ? wt(t, e(0, t.length), n)
                  : lt(r, function (e) {
                      return ((i + ((e - t) % i)) % i) + t;
                    });
              },
              wrapYoyo: function e(t, n, r) {
                var i = n - t,
                  a = 2 * i;
                return $(t)
                  ? wt(t, e(0, t.length - 1), n)
                  : lt(r, function (e) {
                      return (
                        t + ((e = (a + ((e - t) % a)) % a || 0) > i ? a - e : e)
                      );
                    });
              },
              distribute: gt,
              random: xt,
              snap: bt,
              normalize: function (e, t, n) {
                return St(e, t, 0, 1, n);
              },
              getUnit: dt,
              clamp: function (e, t, n) {
                return lt(n, function (n) {
                  return ct(e, t, n);
                });
              },
              splitColor: Pt,
              toArray: mt,
              selector: vt,
              mapRange: St,
              pipe: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return function (e) {
                  return t.reduce(function (e, t) {
                    return t(e);
                  }, e);
                };
              },
              unitize: function (e, t) {
                return function (n) {
                  return e(parseFloat(n)) + (t || dt(n));
                };
              },
              interpolate: function e(t, n, r, i) {
                var a = isNaN(t + n)
                  ? 0
                  : function (e) {
                      return (1 - e) * t + e * n;
                    };
                if (!a) {
                  var o,
                    s,
                    u,
                    l,
                    c,
                    d = Y(t),
                    h = {};
                  if ((!0 === r && (i = 1) && (r = null), d))
                    (t = { p: t }), (n = { p: n });
                  else if ($(t) && !$(n)) {
                    for (u = [], l = t.length, c = l - 2, s = 1; s < l; s++)
                      u.push(e(t[s - 1], t[s]));
                    l--,
                      (a = function (e) {
                        e *= l;
                        var t = Math.min(c, ~~e);
                        return u[t](e - t);
                      }),
                      (r = n);
                  } else i || (t = Le($(t) ? [] : {}, t));
                  if (!u) {
                    for (o in n) rn.call(h, t, o, 'get', n[o]);
                    a = function (e) {
                      return bn(e, h) || (d ? t.p : t);
                    };
                  }
                }
                return lt(r, a);
              },
              shuffle: _t,
            },
            install: ue,
            effects: be,
            ticker: It,
            updateRoot: Jt.updateRoot,
            plugins: ye,
            globalTimeline: x,
            core: {
              PropTween: Mn,
              globals: de,
              Tween: dn,
              Timeline: Jt,
              Animation: $t,
              getCache: Me,
              _removeLinkedListItem: Be,
              reverting: function () {
                return y;
              },
              context: function (e) {
                return e && b && (b.data.push(e), (e._ctx = b)), b;
              },
              suppressOverwrites: function (e) {
                return (g = e);
              },
            },
          };
        Ee('to,from,fromTo,delayedCall,set,killTweensOf', function (e) {
          return (Fn[e] = dn[e]);
        }),
          It.add(Jt.updateRoot),
          (E = Fn.to({}, { duration: 0 }));
        var Rn = function (e, t) {
            for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
              n = n._next;
            return n;
          },
          Ln = function (e, t) {
            return {
              name: e,
              rawVars: 1,
              init: function (e, n, r) {
                r._onInit = function (e) {
                  var r, i;
                  if (
                    (Y(n) &&
                      ((r = {}),
                      Ee(n, function (e) {
                        return (r[e] = 1);
                      }),
                      (n = r)),
                    t)
                  ) {
                    for (i in ((r = {}), n)) r[i] = t(n[i]);
                    n = r;
                  }
                  !(function (e, t) {
                    var n,
                      r,
                      i,
                      a = e._targets;
                    for (n in t)
                      for (r = a.length; r--; )
                        (i = e._ptLookup[r][n]) &&
                          (i = i.d) &&
                          (i._pt && (i = Rn(i, n)),
                          i && i.modifier && i.modifier(t[n], e, a[r], n));
                  })(e, n);
                };
              },
            };
          },
          In =
            Fn.registerPlugin(
              {
                name: 'attr',
                init: function (e, t, n, r, i) {
                  var a, o, s;
                  for (a in ((this.tween = n), t))
                    (s = e.getAttribute(a) || ''),
                      ((o = this.add(
                        e,
                        'setAttribute',
                        (s || 0) + '',
                        t[a],
                        r,
                        i,
                        0,
                        0,
                        a
                      )).op = a),
                      (o.b = s),
                      this._props.push(a);
                },
                render: function (e, t) {
                  for (var n = t._pt; n; )
                    y ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
                },
              },
              {
                name: 'endArray',
                init: function (e, t) {
                  for (var n = t.length; n--; )
                    this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
                },
              },
              Ln('roundProps', yt),
              Ln('modifiers'),
              Ln('snap', bt)
            ) || Fn;
        (dn.version = Jt.version = In.version = '3.12.2'), (M = 1), Z() && Nt();
        jt.Power0,
          jt.Power1,
          jt.Power2,
          jt.Power3,
          jt.Power4,
          jt.Linear,
          jt.Quad,
          jt.Cubic,
          jt.Quart,
          jt.Quint,
          jt.Strong,
          jt.Elastic,
          jt.Back,
          jt.SteppedEase,
          jt.Bounce,
          jt.Sine;
        var Nn = jt.Expo,
          jn = (jt.Circ, null),
          Un = null;
        function Bn(e = {}) {
          (jn = document.createElement('div')),
            (Un = document.createElement('div')),
            jn.classList.add('mousefollower'),
            Un.classList.add('mousefollower'),
            (Un.id = 'behindmouse');
          var t = 0;
          window.addEventListener('mousemove', function (r) {
            e.skew &&
              ((diff = n().utils.clamp(15, 35, r.clientX - t)),
              (t = r.clientX),
              n().to('.mousefollower', {
                width: diff + 'px',
                ease: e.ease || Nn.easeOut,
                duration: e.duration || 1,
              })),
              n().to('.mousefollower', {
                opacity: 1,
                top: r.clientY,
                left: r.clientX,
                duration: e.duration || 1,
                ease: e.ease || Nn.easeOut,
              });
          }),
            document.addEventListener('mouseleave', function () {
              n().to('.mousefollower', {
                opacity: 0,
                duration: e.duration || 1,
                ease: e.ease || Nn.easeOut,
              });
            }),
            document.body.appendChild(Un),
            document.body.appendChild(jn);
        }
        function Yn(e = 'img', t = {}) {
          document.querySelectorAll(e).forEach(function (e) {
            var r = e.parentNode,
              i = document.createElement('div');
            if (t.mouseFollower) {
              var a = document.createElement('div');
              (a.style.width =
                n().utils.clamp(50, 70, 0.3 * e.getBoundingClientRect().width) +
                'px'),
                (a.style.height =
                  n().utils.clamp(
                    50,
                    70,
                    0.3 * e.getBoundingClientRect().width
                  ) + 'px'),
                (a.textContent = t.text || 'View More'),
                a.classList
                  .add('circle')
                  .addEventListener('mouseenter', function () {
                    n().to(a, { opacity: 1, ease: Nn.easeOut, duration: 1 });
                  }),
                i.addEventListener('mousemove', function (e) {
                  i.appendChild(a),
                    n().to(a, {
                      top: e.clientY - i.getBoundingClientRect().y,
                      left: e.clientX - i.getBoundingClientRect().x,
                      ease: Nn.easeOut,
                      duration: 2,
                    });
                }),
                i.addEventListener('mouseleave', function () {
                  n().to(a, { opacity: 0, ease: Nn.easeOut, duration: 0.8 });
                });
            }
            i.classList.add('mask'),
              r.replaceChild(i, e),
              i.appendChild(e),
              i.addEventListener('mouseenter', function () {
                n().to(jn, { opacity: 0, ease: Power1 });
              }),
              i.addEventListener('mousemove', function (r) {
                n().to(e, {
                  scale: t.scale || 1.2,
                  ease: t.ease || Nn.easeOut,
                  duration: t.duration || 1,
                });
              }),
              i.addEventListener('mouseleave', function () {
                n().to(jn, { opacity: 1, ease: Power1 }),
                  n().to(this.childNodes[0], {
                    scale: 1,
                    ease: t.ease || Nn.easeOut,
                    duration: t.duration || 1,
                  });
              });
          });
        }
        function Vn(e, t = {}) {
          document.querySelectorAll(e).forEach(function (e) {
            e.addEventListener('mousemove', function (r) {
              var i = e.getBoundingClientRect(),
                a = n().utils.mapRange(0, i.width, 0, 1, r.clientX - i.left),
                o = n().utils.mapRange(0, i.height, 0, 1, r.clientY - i.top);
              n().to('.mousefollower', {
                scale: 4,
                ease: Power2,
                duration: 0.5,
              }),
                n().to(e, {
                  x: d(-20, 20, a),
                  y: d(-20, 20, o),
                  duration: t.duration || 1,
                  ease: t.ease || Nn.easeOut,
                });
            }),
              e.addEventListener('mouseleave', function (r) {
                n().to('.mousefollower', {
                  scale: 1,
                  ease: Power2,
                  duration: 0.5,
                }),
                  n().to(e, {
                    x: 0,
                    y: 0,
                    duration: t.duration || 1,
                    ease: t.ease || Nn.easeOut,
                  });
              });
          });
        }
        function Xn(e, t = {}) {
          var r = document.querySelectorAll(e);
          switch (
            (r.forEach(function (e) {
              e.classList.add('sheryelem');
              var t = '';
              e.textContent.split('').forEach(function (e) {
                t += `<span>${e}</span>`;
              }),
                (e.innerHTML = t);
            }),
            t.style || 1)
          ) {
            case 1:
              r.forEach(function (e) {
                n().from(e.childNodes, {
                  scrollTrigger: { trigger: e, start: 'top 80%' },
                  y: t.y || 10,
                  stagger: t.delay || 0.1,
                  opacity: 0,
                  duration: t.duration || 2,
                  ease: t.ease || Nn.easeOut,
                });
              });
              break;
            case 2:
              r.forEach(function (e, r) {
                var i = e.childNodes.length - 1;
                for (r = 0; r < e.childNodes.length / 2; r++)
                  e.childNodes[r].dataset.delay = r;
                for (
                  r = Math.floor(e.childNodes.length / 2);
                  r < e.childNodes.length;
                  r++
                )
                  e.childNodes[r].dataset.delay = i - r;
                e.childNodes.forEach(function (e) {
                  n().from(e, {
                    y: 20,
                    delay: e.dataset.delay * (t.multiplier || 0.1),
                    opacity: 0,
                    ease: t.ease || Nn.easeOut,
                  });
                });
              });
              break;
            default:
              console.warn(
                'SheryJS : no such style available for text, mentioned in textanimate()'
              );
          }
        }
        function Hn(e, t) {
          function r(e) {
            return e % (t.images ? t.images.length : t.videos.length);
          }
          var i = document.body,
            a = document.createElement('div');
          a.classList.add('just-a-white-blend-screen'),
            a.classList.add('movercirc');
          var o = document.createElement('div'),
            s = null;
          if ((document.body.click(), t.images)) {
            var u = document.createElement('img');
            s = u;
          } else if (t.videos) {
            var l = document.createElement('video');
            (l.preload = !0), (l.autoplay = !0), (l.muted = !0), (s = l);
          }
          o.appendChild(s),
            i.appendChild(a),
            i.appendChild(o),
            o.classList.add('movercirc'),
            document.querySelectorAll(e).forEach(function (e, i) {
              var a,
                u = 0,
                l = 0;
              e.classList.add('hovercircle'),
                e.addEventListener('mouseenter', function (e) {
                  s.setAttribute(
                    'src',
                    t.images ? t.images[r(i)] : t.videos[r(i)]
                  );
                }),
                e.addEventListener('mousemove', function (e) {
                  var t = n().utils.pipe(
                      n().utils.clamp(-1, 1),
                      n().utils.mapRange(-1, 1, 0.8, 1.2)
                    ),
                    r = (t(e.clientX - u), t(e.clientY - l));
                  (u = e.clientX),
                    (l = e.clientY),
                    clearTimeout(a),
                    (a = setTimeout(function () {
                      n().to('.movercirc', {
                        transform: 'translate(-50%,-50%)',
                      });
                    }, 500)),
                    n().to('.movercirc', {
                      left: e.clientX,
                      top: e.clientY,
                      width: '20vw',
                      height: '20vw',
                      transform: `translate(-50%,-50%) scale(${r})`,
                      ease: Circ,
                      duration: 0.4,
                      opacity: 1,
                    }),
                    o.classList.add('blend');
                }),
                e.addEventListener('mouseleave', function (e) {
                  n().to('.movercirc', {
                    width: '0',
                    height: '0',
                    ease: Power2,
                    duration: 0.4,
                    opacity: 0,
                  }),
                    o.classList.remove('blend');
                });
            });
        }
        function Wn(e = 'img', t = {}) {
          document.querySelectorAll(e).forEach(function (e) {
            switch (
              ('img' !== e.nodeName.toLowerCase()
                ? Array.from(e.children).forEach((e, t) => {
                    0 != t && (e.style.display = 'none');
                  })
                : (l(window.getComputedStyle(e).display),
                  (e.style.visibility = 'hidden')),
              t.style || 1)
            ) {
              case 1:
                {
                  const r =
                      'varying vec2 vuv;void main(){gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);vuv = uv;}',
                    s =
                      '\n            uniform sampler2D uTexture[16];\n            uniform float uIntercept,time,a,b,onMouse,uScroll,uSection;\n            uniform bool isMulti;\n            varying vec2 vuv;\n            ₹snoise\n            void main(){\n            vec2 uv=vuv;\n            vec3 v = vec3(vuv.x*1.0+time*a/10.0,vuv.y,time);\n            vec2 surface=vec2(snoise(v)*.08,snoise(v)*.01);\n            surface = onMouse == 0. ? surface : onMouse == 1. ? mix( vec2(0.) , surface ,uIntercept) : mix(surface , vec2(0.) ,uIntercept);\n            uv +=refract(vec2(.0,.0),surface,b);\n            gl_FragColor=texture2D(uTexture[0],uv);\n            isMulti ;\n            }';
                  var {
                    debugObj: n,
                    panel: i,
                    uniforms: a,
                    animate: o,
                  } = m(
                    e,
                    r,
                    s,
                    {
                      a: { value: 2, range: [0, 30] },
                      b: { value: 0.7, range: [-1, 1] },
                    },
                    { effect: 1, opts: t, offset: -0.04 }
                  );
                  i &&
                    (i
                      .addSelect(n, 'onMouse', {
                        target: 'Active',
                        label: 'Effect Mode',
                        onChange: (e) => (a.onMouse.value = e),
                      })
                      .addSlider(a.a, 'value', 'range', {
                        label: 'Speed',
                        step: 0.001,
                      })
                      .addSlider(a.b, 'value', 'range', {
                        label: 'Wobbleness',
                        step: 0.001,
                      }),
                    h()),
                    o();
                }
                break;
              case 2:
                {
                  const u =
                      'varying vec2 vuv;void main(){gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);vuv = uv;}',
                    l =
                      '\n          uniform vec2 resolution,mouse;\n          uniform float uIntercept,time,frequency, angle, speed, waveFactor,contrast,pixelStrength, quality, brightness, colorExposer, strength,exposer,uScroll,uSection;\n          uniform int onMouse, mousemove, mode, modeA, modeN;\n          uniform bool distortion, isMulti;\n          uniform vec3 color;\n          varying vec2 vuv;\n          uniform sampler2D uTexture[16];\n          float mina(vec4 a){return min(min(a.r, a.g),a.b);}\n          float maxa(vec4 a){return max(max(a.r, a.g),a.b);}\n          vec4 minn(vec4 a , vec4 b){return vec4(min(a.r,b.r),min(a.g,b.g),min(a.b,b.b),1.0);}\n          vec4 maxx(vec4 a , vec4 b){return vec4(max(a.r,b.r),max(a.g,b.g),max(a.b,b.b),1.0);}\n          mat2 rotate2D(float r) {return mat2(cos(r), sin(r), -sin(r), cos(r));}\n          ₹snoise\n\n          vec4 img (vec2 uv,float c){\n            return mix(texture2D(uTexture[1], uv), texture2D(uTexture[0], uv), step((uScroll)-uSection, c + uv.y));\n          }\n          \n          void main() {\n          float brightness = clamp(brightness, -1.0,25.0);\n          float frequency=clamp(frequency,-999.0,999.0);\n          float contrast=clamp(contrast,-50.,50.0);\n          float pixelStrength=clamp(pixelStrength,-20.0,999.0); \n          float strength=clamp(strength,-100.,100.);\n          float colorExposer=clamp(colorExposer,-5.,5.);\n          vec2 uv = .5*(gl_FragCoord.xy-.5*resolution.xy)/resolution.y;\n          uv=mousemove!=0 ? mix(uv,.5*(gl_FragCoord.xy-.5*resolution.xy)/resolution.y+mouse.xy/300.,uIntercept):uv;\n          float c = (sin((uv.x*7.0*snoise(vec3(uv,1.0)))+(time))/15.0*snoise(vec3(uv,1.0)))+.01;\n          vec3 col = vec3(0);\n          vec2 n,q = vec2(0);\n          vec2 p = (uv + brightness/10.0);\n          float d = dot(p, p);\n          float a = -(contrast/100.0);\n          mat2 angle = rotate2D(angle);\n          \n          for(float i = 1.; i <= 10.0; i++) {\n          if(i>quality) break;\n          p,n *= angle;\n          if(mousemove==0) q = p * frequency + time * speed + sin(time) * .0018 * i - pixelStrength * n ;\n          if(mousemove==1) q = p * frequency + time * speed + sin(time) * .0018 * i + mouse - pixelStrength * n ;\n          if(mousemove==2) q = p * frequency + time * speed + sin(time) * .0018 * i - pixelStrength + mouse * n ;\n          if(mousemove==3) q = p * frequency + time * speed + sin(time) * .0018 * i + mouse - pixelStrength + mouse * n ;\n          if(modeA==0) a += dot(sin(q) / frequency, vec2(strength));\n          else if(modeA==1) a += dot(cos(q) / frequency, vec2(strength));\n          else if(modeA==2) a += dot(tan(q) / frequency , vec2(strength));\n          else if(modeA==3) a += dot(atan(q) / frequency , vec2(strength));\n          if(modeN==0) n -= sin(q);\n          else if(modeN==1) n -= cos(q);\n          else if(modeN==2) n -= tan(q);\n          else if(modeN==3) n -= atan(q);\n          n =mousemove !=0 ? mix(n+mouse,n,uIntercept):n;\n          frequency *= waveFactor;\n          }\n          col = (color*4.5) * (a + colorExposer) +exposer* a + a + d;\n          vec4 base = distortion? img((vuv+a+contrast/100.0),c):img(vuv,c);\n          base = onMouse == 0 ? base : onMouse == 1 ? mix( img(vuv,c),base,uIntercept) : mix( base,img(vuv,c),uIntercept);\n          vec4 blend = vec4(col, 1.0);\n          vec4 final = mix( base,gl_FragColor,uIntercept);\n          if (mode == -10) final = base;\n          else if (mode == -1) final =\tminn(base,blend)-maxx(base,blend)+vec4(1.0);\n          else if (mode == -9) final =\t(maxa(blend)==1.0)?blend:minn(base*base/(1.0-blend),vec4(1.0));\n          else if (mode == -8) final =\tbase+blend-2.0*base*blend;\n          else if (mode == -7) final =\tabs(base-blend);\n          else if (mode == -6) final =\tminn(base,blend);\n          else if (mode == -5) final =\t(mina(blend)==0.0)?blend:maxx((1.0-((1.0-base)/blend)),vec4(0.0));\n          else if (mode == -4) final =\tmaxa(base)==1.0? blend : minn(base/(1.0-blend),vec4(1.0));\n          else if (mode == -3) final = (1.0-2.0*blend)*base*base+2.0*base*blend;\n          else if (mode == -2) final = maxa(base) < 0.5? 2.0 * base * blend : 1.0 - 2.0* (1.0 - base)*(1.0 - blend);\n          else if(mode==0) final = base + blend ;\n          else if(mode==1) final = base * blend ;\n          else if(mode==2) final = 1.0 - (1.0 - base)*(1.0 - blend);\n          else if(mode==3) final = blend - base ;\n          else if(mode==4) final = base / blend ;\n          else if(mode==5) final =\tmaxx(base+blend-1.0,vec4(0.0));\n          else if(mode==6) final = (base + blend / base)-.55;\n          else if(mode==7) final = base + blend *base;\n          else if(mode==8) final = mod(base , blend);\n          else if(mode==9) final = 1.0-(base + blend / base)+.5;\n          else if(mode==10) final = blend - base * blend;\n          else if(mode==11) final = (base +blend/2.0);\n          final = mix(final * brightness,mix(maxx(final,vec4(1.0)), final, contrast), 0.5);\n          final = onMouse == 0 ? final : onMouse == 1 ? mix( base , final ,uIntercept) : mix( final , base ,uIntercept) ;\n          gl_FragColor=final;          \n          }';
                  var {
                    debugObj: n,
                    controlKit: s,
                    panel: i,
                    uniforms: a,
                    animate: o,
                  } = m(
                    e,
                    u,
                    l,
                    {
                      resolution: {
                        value: new r.Vector2(c(e).width, c(e).height),
                      },
                      distortion: { value: !0 },
                      mode: { value: -3 },
                      mousemove: { value: 0 },
                      modeA: { value: 1 },
                      modeN: { value: 0 },
                      speed: {
                        value: 1,
                        range: [-500, 500],
                        rangep: [-10, 10],
                      },
                      frequency: {
                        value: 50,
                        range: [-800, 800],
                        rangep: [-50, 50],
                      },
                      angle: { value: 0.5, range: [0, Math.PI] },
                      waveFactor: { value: 1.4, range: [-3, 3] },
                      color: { value: new r.Color(0.33, 0.66, 1) },
                      pixelStrength: {
                        value: 3,
                        range: [-20, 100],
                        rangep: [-20, 20],
                      },
                      quality: { value: 5, range: [0, 10] },
                      contrast: { value: 1, range: [-25, 25] },
                      brightness: { value: 1, range: [-1, 25] },
                      colorExposer: { value: 0.182, range: [-5, 5] },
                      strength: {
                        value: 0.2,
                        range: [-40, 40],
                        rangep: [-5, 5],
                      },
                      exposer: { value: 8, range: [-100, 100] },
                    },
                    { effect: 2, opts: t, dposition: 350 }
                  );
                  i &&
                    (i
                      .addCheckbox(a.distortion, 'value', {
                        label: 'Distortion Effect',
                      })
                      .addSelect(n, 'onMouse', {
                        target: 'Active',
                        label: 'Effect Mode',
                        onChange: (e) => (a.onMouse.value = e),
                      })
                      .addSelect(n, 'Mode', {
                        target: 'Mode Active',
                        label: 'Blend/Overlay Mode',
                        onChange: (e) => (a.mode.value = e - 10),
                      })
                      .addSelect(n, 'Mouse', {
                        target: 'Mouse Active',
                        label: 'Mousemove Effect',
                        onChange: (e) => (a.mousemove.value = e),
                      })
                      .addSelect(n, 'Trigo', {
                        target: 'Trig A',
                        label: 'Effect StyleA',
                        onChange: (e) => (a.modeA.value = e),
                      })
                      .addSelect(n, 'Trigo', {
                        target: 'Trig N',
                        label: 'Effect StyleN',
                        onChange: (e) => (a.modeN.value = e),
                      })
                      .addColor(n, 'Color', {
                        colorMode: 'hex',
                        onChange: (e) => a.color.value.set(e),
                      }),
                    s
                      .addPanel({
                        enable: !1,
                        label: 'Debug Panel',
                        width: 350,
                        fixed: !1,
                        position: [0, 0],
                      })
                      .addSlider(n.speed, 'normal', 'range', {
                        label: 'Speed',
                        step: 1e-5,
                        onChange: () => (a.speed.value = n.speed.normal),
                      })
                      .addSlider(n.speed, 'precise', 'rangep', {
                        label: 'Speed Precise',
                        step: 1e-5,
                        onChange: () => (a.speed.value = n.speed.precise),
                      })
                      .addSlider(n.frequency, 'normal', 'range', {
                        label: 'Frequency',
                        step: 1e-5,
                        onChange: () =>
                          (a.frequency.value = n.frequency.normal),
                      })
                      .addSlider(n.frequency, 'precise', 'rangep', {
                        label: 'Frequency Precise',
                        step: 1e-5,
                        onChange: () =>
                          (a.frequency.value = n.frequency.precise),
                      })
                      .addSlider(a.angle, 'value', 'range', {
                        label: 'Angle',
                        step: 1e-5,
                      })
                      .addSlider(a.waveFactor, 'value', 'range', {
                        label: 'Wave Factor',
                        step: 1e-5,
                      })
                      .addSlider(n.pixelStrength, 'normal', 'range', {
                        label: 'Pixel Strength',
                        step: 1e-5,
                        onChange: () =>
                          (a.pixelStrength.value = n.pixelStrength.normal),
                      })
                      .addSlider(n.pixelStrength, 'precise', 'rangep', {
                        label: 'Precise Pixel',
                        step: 1e-5,
                        onChange: () =>
                          (a.pixelStrength.value = n.pixelStrength.normal),
                      })
                      .addSlider(a.quality, 'value', 'range', {
                        label: 'Quality',
                        step: 1e-5,
                      })
                      .addSlider(a.contrast, 'value', 'range', {
                        label: 'Contrast',
                        step: 1e-5,
                      })
                      .addSlider(a.brightness, 'value', 'range', {
                        label: 'Brightness',
                        step: 1e-5,
                      })
                      .addSlider(a.colorExposer, 'value', 'range', {
                        label: 'Color Exposer',
                        step: 1e-5,
                      })
                      .addSlider(n.strength, 'normal', 'range', {
                        label: 'Strength',
                        step: 1e-5,
                        onChange: (e) => (a.strength.value = n.strength.normal),
                      })
                      .addSlider(n.strength, 'precise', 'rangep', {
                        label: 'Strength Precise',
                        step: 1e-5,
                        onChange: (e) =>
                          (a.strength.value = n.strength.precise),
                      })
                      .addSlider(a.exposer, 'value', 'range', {
                        label: 'Exposer',
                        step: 1e-5,
                      }),
                    h()),
                    o();
                }
                break;
              case 3:
                {
                  const r =
                      '\n          uniform float uFrequencyX,uFrequencyY,uFrequencyZ,time,uIntercept;\n          uniform int onMouse;\n          varying vec2 vUv;\n          void main(){\n          vec3 uFrequency=vec3(uFrequencyX/.01744,uFrequencyY/.01744,uFrequencyZ);\n          vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n          float elevation = sin(modelPosition.x * uFrequency.x - time) *uFrequency.z/1000.0;\n          elevation += sin(modelPosition.y * uFrequency.y - time) *uFrequency.z/1000.0;\n          modelPosition.z += elevation;\n          modelPosition = onMouse == 0 ? modelPosition : onMouse == 1 ? mix( modelMatrix * vec4(position, 1.0) , modelPosition ,uIntercept) : mix( modelPosition , modelMatrix * vec4(position, 1.0) ,uIntercept) ;\n          gl_Position = projectionMatrix * viewMatrix * modelPosition;\n          vUv = uv;}',
                    s =
                      '\n          uniform sampler2D uTexture[16];\n          uniform float uScroll,uSection,time;\n          uniform bool isMulti;\n          ₹snoise\n          varying vec2 vUv;void main(){vec2 uv=vUv;gl_FragColor = texture2D(uTexture[0], vUv); isMulti ;\n          }';
                  var {
                    debugObj: n,
                    panel: i,
                    geoVertex: u,
                    plane: d,
                    uniforms: a,
                    animate: o,
                  } = m(
                    e,
                    r,
                    s,
                    {
                      uFrequencyX: { value: 12, range: [0, 100] },
                      uFrequencyY: { value: 12, range: [0, 100] },
                      uFrequencyZ: { value: 10, range: [0, 100] },
                    },
                    {
                      effect: 3,
                      opts: t,
                      geoVertex: 32,
                      fov: 1.0375,
                      size: 0.01744,
                      offset: -0.04,
                    }
                  );
                  i &&
                    (i
                      .addSelect(n, 'onMouse', {
                        target: 'Active',
                        label: 'Effect Mode',
                        onChange: (e) => (a.onMouse.value = e),
                      })
                      .addSlider(u, 'value', 'range', {
                        label: 'VertexCount',
                        step: 1,
                        onChange: () => {
                          f(d, u.value);
                        },
                      })
                      .addSlider(a.uFrequencyX, 'value', 'range', {
                        label: 'FrequencyX',
                        step: 0.01,
                      })
                      .addSlider(a.uFrequencyY, 'value', 'range', {
                        label: 'FrequencyY',
                        step: 0.01,
                      })
                      .addSlider(a.uFrequencyZ, 'value', 'range', {
                        label: 'FrequencyZ',
                        onChange: () => {
                          (camera.fov = 1 + a.uFrequencyZ.value / 400),
                            camera.updateProjectionMatrix();
                        },
                        step: 0.01,
                      }),
                    h()),
                    o();
                }
                break;
              case 4:
                {
                  const r =
                      '\n          varying vec2 vUv;\n          varying float vWave;\n          uniform float time,uFrequency,uAmplitude,uSpeed,uIntercept,onMouse;\n          ₹snoise\n          void main(){\n          vUv=uv;\n          vec3 pos=position;\n          float noiseFreq=uFrequency;\n          float noiseAmp=uAmplitude/10.0;\n          vec3 noisePos=vec3(pos.x*noiseFreq+time*uSpeed,pos.y,pos.z);\n          pos.z+=snoise(noisePos)*noiseAmp;\n          pos = onMouse == 0. ? pos : onMouse == 1. ? mix( position , pos ,uIntercept) : mix( pos , position ,uIntercept) ;\n          vWave=pos.z;\n          gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);\n          }',
                    s =
                      '\n          uniform bool uColor,isMulti;\n          uniform sampler2D uTexture[16];\n          varying vec2 vUv;\n          varying float vWave;\n          uniform float uScroll,uSection,time;\n          ₹snoise\n          void main() {vec2 uv = vUv; gl_FragColor =uColor? mix(texture2D(uTexture[0], vUv ),vec4(1.0),vWave):texture2D(uTexture[0], vUv ); isMulti ;}';
                  var {
                    debugObj: n,
                    panel: i,
                    geoVertex: u,
                    plane: d,
                    uniforms: a,
                    animate: o,
                  } = m(
                    e,
                    r,
                    s,
                    {
                      uColor: { value: !1 },
                      uSpeed: { value: 0.6, range: [0.1, 1], rangef: [1, 10] },
                      uAmplitude: { value: 1.5, range: [0, 5] },
                      uFrequency: { value: 3.5, range: [0, 10] },
                    },
                    {
                      effect: 4,
                      opts: t,
                      geoVertex: 16,
                      fov: 25,
                      size: 0.4,
                      aspect: 1,
                      offset: -0.04,
                    }
                  );
                  t.config &&
                    Object.keys(t.config).forEach(
                      (e) => (a[e].value = t.config[e].value)
                    ),
                    i &&
                      (i
                        .addCheckbox(a.uColor, 'value', {
                          label: 'Color Depth',
                        })
                        .addSelect(n, 'onMouse', {
                          target: 'Active',
                          label: 'Effect Mode',
                          onChange: (e) => (a.onMouse.value = e),
                        })
                        .addSlider(u, 'value', 'range', {
                          label: 'VertexCount',
                          step: 1,
                          onChange: () => f(d, u.value),
                        })
                        .addSlider(n, 's', 'range', {
                          label: 'Speed',
                          onChange: () => (a.uSpeed.value = obj.s),
                          step: 0.01,
                        })
                        .addSlider(n, 'f', 'rangef', {
                          label: 'FastForward',
                          onChange: () => (a.uSpeed.value = obj.f),
                          step: 0.01,
                        })
                        .addSlider(a.uAmplitude, 'value', 'range', {
                          label: 'Amplitude',
                          step: 0.01,
                        })
                        .addSlider(a.uFrequency, 'value', 'range', {
                          label: 'Frequency',
                          step: 0.01,
                        }),
                      h()),
                    o();
                }
                break;
              case 5: {
                const r =
                    'varying vec2 vuv;void main(){gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);vuv = uv;}',
                  s =
                    '\n          uniform sampler2D uTexture[16];\n          uniform float uIntercept,time,a,b,onMouse,uScroll,uSection;\n          uniform bool isMulti;\n          uniform vec2 mouse;\n          varying vec2 vuv;\n          ₹snoise\n          float cnoise(vec2 P){return snoise(vec3(P,1.0));}    \n          void main() {                  \n            vec2 uv = vuv;\n            float time = time * a;\n            vec2 surface = vec2(cnoise(uv - mouse / 7. + .2 * time) * .08, cnoise(uv - mouse / 7. + .2 * time) * .08);\n            surface = onMouse == 0. ? surface : onMouse == 1. ? mix( vec2(0.) , surface ,uIntercept) : mix(surface , vec2(0.) ,uIntercept);\n            uv += refract(vec2(mouse.x / 300., mouse.y / 300.),surface,b);\n            gl_FragColor=texture2D(uTexture[0], uv);\n            isMulti ;\n          }';
                var {
                  debugObj: n,
                  panel: i,
                  uniforms: a,
                  animate: o,
                } = m(
                  e,
                  r,
                  s,
                  {
                    a: { value: 2, range: [0, 30] },
                    b: { value: 1 / 1.333, range: [-1, 1] },
                  },
                  { effect: 1, opts: t, fov: 0.9, onDoc: !0, offset: -0.04 }
                );
                i &&
                  (i
                    .addSelect(n, 'onMouse', {
                      target: 'Active',
                      label: 'Effect Mode',
                      onChange: (e) => (a.onMouse.value = e),
                    })
                    .addSlider(a.a, 'value', 'range', {
                      label: 'Speed',
                      step: 0.001,
                    })
                    .addSlider(a.b, 'value', 'range', {
                      label: 'Wobbleness',
                      step: 0.001,
                    }),
                  h()),
                  o();
              }
            }
          });
        }
        const Kn = e;
      })(),
      o
    );
  })()
);
