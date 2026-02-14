"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./assets/App.vue");
/* harmony import */ var _components_EtapesKanban_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EtapesKanban.vue */ "./assets/components/EtapesKanban.vue");
/* harmony import */ var _components_Dashboard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Dashboard.vue */ "./assets/components/Dashboard.vue");
/* harmony import */ var _styles_design_system_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/design-system.css */ "./assets/styles/design-system.css");
/* harmony import */ var _components_ui_Button_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ui/Button.vue */ "./assets/components/ui/Button.vue");
/* harmony import */ var _components_ui_Card_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ui/Card.vue */ "./assets/components/ui/Card.vue");
/* harmony import */ var _components_ui_Modal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ui/Modal.vue */ "./assets/components/ui/Modal.vue");
/* harmony import */ var _components_ui_Badge_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ui/Badge.vue */ "./assets/components/ui/Badge.vue");





// Import du Design System


// Import des composants UI




var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

// Enregistrer les composants globalement
app.component('Button', _components_ui_Button_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.component('Card', _components_ui_Card_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.component('Modal', _components_ui_Modal_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.component('Badge', _components_ui_Badge_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.component('EtapesKanban', _components_EtapesKanban_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.component('Dashboard', _components_Dashboard_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.mount('#app');

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_EtapesKanban_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EtapesKanban.vue */ "./assets/components/EtapesKanban.vue");
/* harmony import */ var _components_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Dashboard.vue */ "./assets/components/Dashboard.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  components: {
    EtapesKanban: _components_EtapesKanban_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Dashboard: _components_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      currentView: 'home' // home, dashboard, kanban
    };
  },
  methods: {
    navigateTo: function navigateTo(view) {
      this.currentView = view;
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }























/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Dashboard',
  data: function data() {
    return {
      etapes: [],
      charts: {
        status: null,
        category: null,
        priority: null
      }
    };
  },
  computed: {
    stats: function stats() {
      var total = this.etapes.length;
      var todo = this.etapes.filter(function (e) {
        return e.statut === 'todo';
      }).length;
      var inProgress = this.etapes.filter(function (e) {
        return e.statut === 'in_progress';
      }).length;
      var done = this.etapes.filter(function (e) {
        return e.statut === 'done';
      }).length;
      var completionRate = total > 0 ? Math.round(done / total * 100) : 0;
      return {
        total: total,
        todo: todo,
        inProgress: inProgress,
        done: done,
        completionRate: completionRate
      };
    },
    upcomingEtapes: function upcomingEtapes() {
      var today = new Date();
      var in30Days = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
      return this.etapes.filter(function (e) {
        return e.dateLimite && e.statut !== 'done';
      }).filter(function (e) {
        var deadline = new Date(e.dateLimite);
        return deadline >= today && deadline <= in30Days;
      }).sort(function (a, b) {
        return new Date(a.dateLimite) - new Date(b.dateLimite);
      }).slice(0, 5);
    },
    urgentEtapes: function urgentEtapes() {
      return this.etapes.filter(function (e) {
        return e.priority === 'urgent' && e.statut !== 'done';
      }).slice(0, 3);
    },
    currentDate: function currentDate() {
      return new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  },
  mounted: function mounted() {
    this.loadEtapes();
  },
  beforeUnmount: function beforeUnmount() {
    // Détruire les graphiques avant de détruire le composant
    Object.values(this.charts).forEach(function (chart) {
      if (chart) chart.destroy();
    });
  },
  methods: {
    loadEtapes: function loadEtapes() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return fetch('/api/etapes');
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.json();
            case 2:
              _this.etapes = _context.v;
              // Attendre le prochain tick pour être sûr que les canvas sont montés
              _this.$nextTick(function () {
                _this.createCharts();
              });
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Erreur chargement étapes:', _t);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3]]);
      }))();
    },
    createCharts: function createCharts() {
      this.createStatusChart();
      this.createCategoryChart();
      this.createPriorityChart();
    },
    createStatusChart: function createStatusChart() {
      var ctx = this.$refs.statusChart;
      if (!ctx) return;
      if (this.charts.status) {
        this.charts.status.destroy();
      }
      this.charts.status = new chart_js_auto__WEBPACK_IMPORTED_MODULE_22__["default"](ctx, {
        type: 'doughnut',
        data: {
          labels: ['À Faire', 'En Cours', 'Terminé'],
          datasets: [{
            data: [this.stats.todo, this.stats.inProgress, this.stats.done],
            backgroundColor: ['rgba(245, 158, 11, 0.8)',
            // Orange
            'rgba(139, 92, 246, 0.8)',
            // Violet
            'rgba(16, 185, 129, 0.8)' // Vert
            ],
            borderColor: ['rgba(245, 158, 11, 1)', 'rgba(139, 92, 246, 1)', 'rgba(16, 185, 129, 1)'],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 15,
                font: {
                  size: 12
                }
              }
            }
          }
        }
      });
    },
    createCategoryChart: function createCategoryChart() {
      var ctx = this.$refs.categoryChart;
      if (!ctx) return;
      if (this.charts.category) {
        this.charts.category.destroy();
      }

      // Compter les étapes par catégorie
      var categoryCounts = {};
      this.etapes.forEach(function (etape) {
        var cat = etape.category || 'Sans catégorie';
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      });
      var labels = Object.keys(categoryCounts);
      var data = Object.values(categoryCounts);
      this.charts.category = new chart_js_auto__WEBPACK_IMPORTED_MODULE_22__["default"](ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Nombre d\'étapes',
            data: data,
            backgroundColor: 'rgba(102, 126, 234, 0.8)',
            borderColor: 'rgba(102, 126, 234, 1)',
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      });
    },
    createPriorityChart: function createPriorityChart() {
      var ctx = this.$refs.priorityChart;
      if (!ctx) return;
      if (this.charts.priority) {
        this.charts.priority.destroy();
      }
      var urgent = this.etapes.filter(function (e) {
        return e.priority === 'urgent';
      }).length;
      var normal = this.etapes.filter(function (e) {
        return e.priority === 'normal';
      }).length;
      var low = this.etapes.filter(function (e) {
        return e.priority === 'low';
      }).length;
      var none = this.etapes.filter(function (e) {
        return !e.priority;
      }).length;
      this.charts.priority = new chart_js_auto__WEBPACK_IMPORTED_MODULE_22__["default"](ctx, {
        type: 'bar',
        data: {
          labels: ['Urgent', 'Normal', 'Basse', 'Non définie'],
          datasets: [{
            label: 'Nombre d\'étapes',
            data: [urgent, normal, low, none],
            backgroundColor: ['rgba(239, 68, 68, 0.8)',
            // Rouge
            'rgba(245, 158, 11, 0.8)',
            // Orange
            'rgba(16, 185, 129, 0.8)',
            // Vert
            'rgba(156, 163, 175, 0.8)' // Gris
            ],
            borderColor: ['rgba(239, 68, 68, 1)', 'rgba(245, 158, 11, 1)', 'rgba(16, 185, 129, 1)', 'rgba(156, 163, 175, 1)'],
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      });
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      return new Date(dateString).toLocaleDateString('fr-FR');
    },
    formatDateRelative: function formatDateRelative(dateString) {
      if (!dateString) return '';
      var date = new Date(dateString);
      var today = new Date();
      var diffTime = date - today;
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays < 0) return 'En retard';
      if (diffDays === 0) return "Aujourd'hui";
      if (diffDays === 1) return 'Demain';
      if (diffDays <= 7) return "Dans ".concat(diffDays, " jours");
      return this.formatDate(dateString);
    },
    getDateBadgeVariant: function getDateBadgeVariant(dateString) {
      if (!dateString) return 'gray';
      var date = new Date(dateString);
      var today = new Date();
      var diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) return 'danger';
      if (diffDays <= 3) return 'warning';
      return 'info';
    },
    getTimelineClass: function getTimelineClass(dateString) {
      var variant = this.getDateBadgeVariant(dateString);
      return "timeline-".concat(variant);
    },
    goToKanban: function goToKanban() {
      this.$emit('navigate', 'kanban');
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_44__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }












































function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EtapesKanban',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_44___default())
  },
  data: function data() {
    return {
      etapes: [],
      showAddModal: false,
      editingEtape: null,
      saving: false,
      searchQuery: '',
      sortBy: 'ordre',
      filterPriority: 'all',
      form: {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0,
        priority: '',
        category: ''
      },
      // Listes locales pour le drag & drop
      todoList: [],
      inProgressList: [],
      doneList: []
    };
  },
  computed: {
    filteredEtapes: function filteredEtapes() {
      var _this = this;
      var filtered = _toConsumableArray(this.etapes);

      // Recherche
      if (this.searchQuery) {
        var query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(function (e) {
          return e.titre.toLowerCase().includes(query) || e.description && e.description.toLowerCase().includes(query) || e.category && e.category.toLowerCase().includes(query);
        });
      }

      // Filtre priorité
      if (this.filterPriority !== 'all') {
        filtered = filtered.filter(function (e) {
          return e.priority === _this.filterPriority;
        });
      }

      // Tri
      if (this.sortBy === 'date-asc') {
        filtered.sort(function (a, b) {
          var dateA = a.dateLimite ? new Date(a.dateLimite) : new Date('9999-12-31');
          var dateB = b.dateLimite ? new Date(b.dateLimite) : new Date('9999-12-31');
          return dateA - dateB;
        });
      } else if (this.sortBy === 'date-desc') {
        filtered.sort(function (a, b) {
          var dateA = a.dateLimite ? new Date(a.dateLimite) : new Date('1900-01-01');
          var dateB = b.dateLimite ? new Date(b.dateLimite) : new Date('1900-01-01');
          return dateB - dateA;
        });
      } else if (this.sortBy === 'alpha') {
        filtered.sort(function (a, b) {
          return a.titre.localeCompare(b.titre);
        });
      } else {
        filtered.sort(function (a, b) {
          return a.ordre - b.ordre;
        });
      }
      return filtered;
    },
    filteredEtapesByStatut: function filteredEtapesByStatut() {
      return {
        todo: this.filteredEtapes.filter(function (e) {
          return e.statut === 'todo';
        }),
        in_progress: this.filteredEtapes.filter(function (e) {
          return e.statut === 'in_progress';
        }),
        done: this.filteredEtapes.filter(function (e) {
          return e.statut === 'done';
        })
      };
    },
    progression: function progression() {
      if (this.etapes.length === 0) return 0;
      var done = this.etapes.filter(function (e) {
        return e.statut === 'done';
      }).length;
      return Math.round(done / this.etapes.length * 100);
    },
    progressVariant: function progressVariant() {
      if (this.progression === 100) return 'success';
      if (this.progression >= 50) return 'warning';
      return 'info';
    }
  },
  watch: {
    // Synchronise les listes locales quand les données changent
    filteredEtapesByStatut: {
      handler: function handler(newVal) {
        this.todoList = _toConsumableArray(newVal.todo);
        this.inProgressList = _toConsumableArray(newVal.in_progress);
        this.doneList = _toConsumableArray(newVal.done);
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function mounted() {
    this.loadEtapes();
  },
  methods: {
    loadEtapes: function loadEtapes() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return fetch('/api/etapes');
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.json();
            case 2:
              _this2.etapes = _context.v;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Erreur chargement étapes:', _t);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3]]);
      }))();
    },
    saveEtape: function saveEtape() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var url, method, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this3.saving = true;
              _context2.p = 1;
              url = _this3.editingEtape ? "/api/etapes/".concat(_this3.editingEtape.id) : '/api/etapes';
              method = _this3.editingEtape ? 'PUT' : 'POST';
              _context2.n = 2;
              return fetch(url, {
                method: method,
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(_this3.form)
              });
            case 2:
              _this3.closeModal();
              _context2.n = 3;
              return _this3.loadEtapes();
            case 3:
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error('Erreur sauvegarde:', _t2);
            case 5:
              _context2.p = 5;
              _this3.saving = false;
              return _context2.f(5);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 4, 5, 6]]);
      }))();
    },
    changeStatut: function changeStatut(etape, newStatut) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return fetch("/api/etapes/".concat(etape.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(_objectSpread(_objectSpread({}, etape), {}, {
                  statut: newStatut,
                  dateDebut: newStatut === 'in_progress' && !etape.dateDebut ? new Date().toISOString().split('T')[0] : etape.dateDebut
                }))
              });
            case 1:
              _context3.n = 2;
              return _this4.loadEtapes();
            case 2:
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
              console.error('Erreur changement statut:', _t3);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 3]]);
      }))();
    },
    deleteEtape: function deleteEtape(etape) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (confirm("Supprimer l'\xE9tape \"".concat(etape.titre, "\" ?"))) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _context4.p = 1;
              _context4.n = 2;
              return fetch("/api/etapes/".concat(etape.id), {
                method: 'DELETE'
              });
            case 2:
              _context4.n = 3;
              return _this5.loadEtapes();
            case 3:
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t4 = _context4.v;
              console.error('Erreur suppression:', _t4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 4]]);
      }))();
    },
    editEtape: function editEtape(etape) {
      this.editingEtape = etape;
      this.form = {
        titre: etape.titre,
        description: etape.description || '',
        dateDebut: etape.dateDebut || '',
        dateLimite: etape.dateLimite || '',
        notes: etape.notes || '',
        statut: etape.statut,
        ordre: etape.ordre,
        priority: etape.priority || '',
        category: etape.category || ''
      };
    },
    closeModal: function closeModal() {
      this.showAddModal = false;
      this.editingEtape = null;
      this.saving = false;
      this.form = {
        titre: '',
        description: '',
        dateDebut: '',
        dateLimite: '',
        notes: '',
        statut: 'todo',
        ordre: 0,
        priority: '',
        category: ''
      };
    },
    // Nouvelle méthode pour gérer le drag
    onDragUpdate: function onDragUpdate(statut) {
      var _this6 = this;
      // Cette fonction est appelée quand une liste change
      return function (event) {
        if (event.added) {
          var etape = event.added.element;
          if (etape.statut !== statut) {
            _this6.updateEtapeStatut(etape, statut);
          }
        }
      };
    },
    updateEtapeStatut: function updateEtapeStatut(etape, newStatut) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var index, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return fetch("/api/etapes/".concat(etape.id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(_objectSpread(_objectSpread({}, etape), {}, {
                  statut: newStatut,
                  dateDebut: newStatut === 'in_progress' && !etape.dateDebut ? new Date().toISOString().split('T')[0] : etape.dateDebut
                }))
              });
            case 1:
              // Met à jour localement
              index = _this7.etapes.findIndex(function (e) {
                return e.id === etape.id;
              });
              if (index !== -1) {
                _this7.etapes[index].statut = newStatut;
              }
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t5 = _context5.v;
              console.error('Erreur changement statut:', _t5);
              // En cas d'erreur, recharge
              _context5.n = 3;
              return _this7.loadEtapes();
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      var date = new Date(dateString);
      return date.toLocaleDateString('fr-FR');
    },
    getPriorityIcon: function getPriorityIcon(priority) {
      var icons = {
        urgent: '🔴',
        normal: '🟡',
        low: '🟢'
      };
      return icons[priority] || '';
    },
    getPriorityVariant: function getPriorityVariant(priority) {
      var variants = {
        urgent: 'danger',
        normal: 'warning',
        low: 'success'
      };
      return variants[priority] || 'gray';
    },
    getPriorityLabel: function getPriorityLabel(priority) {
      var labels = {
        urgent: '🔴 Urgent',
        normal: '🟡 Normal',
        low: '🟢 Basse'
      };
      return labels[priority] || priority;
    },
    getDateVariant: function getDateVariant(dateLimite) {
      if (!dateLimite) return 'gray';
      var today = new Date();
      var limite = new Date(dateLimite);
      var diffDays = Math.ceil((limite - today) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) return 'danger';
      if (diffDays <= 7) return 'warning';
      return 'gray';
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Badge',
  props: {
    variant: {
      type: String,
      "default": 'primary',
      validator: function validator(value) {
        return ['primary', 'success', 'warning', 'danger', 'info', 'gray'].includes(value);
      }
    },
    size: {
      type: String,
      "default": 'md',
      validator: function validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
      }
    },
    pill: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    badgeClasses: function badgeClasses() {
      return ['badge', "badge-".concat(this.variant), "badge-".concat(this.size), {
        'badge-pill': this.pill
      }];
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Button',
  props: {
    variant: {
      type: String,
      "default": 'primary',
      // primary, secondary, success, danger, ghost
      validator: function validator(value) {
        return ['primary', 'secondary', 'success', 'danger', 'ghost'].includes(value);
      }
    },
    size: {
      type: String,
      "default": 'md',
      // sm, md, lg
      validator: function validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    buttonClasses: function buttonClasses() {
      return ['btn', "btn-".concat(this.variant), "btn-".concat(this.size), {
        'btn-disabled': this.disabled || this.loading
      }];
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Card',
  props: {
    hoverable: {
      type: Boolean,
      "default": false
    },
    bordered: {
      type: Boolean,
      "default": false
    },
    padding: {
      type: String,
      "default": 'md',
      // sm, md, lg, none
      validator: function validator(value) {
        return ['none', 'sm', 'md', 'lg'].includes(value);
      }
    }
  },
  computed: {
    cardClasses: function cardClasses() {
      return ['card', "card-padding-".concat(this.padding), {
        'card-hoverable': this.hoverable
      }, {
        'card-bordered': this.bordered
      }];
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      "default": 'md',
      // sm, md, lg, xl
      validator: function validator(value) {
        return ['sm', 'md', 'lg', 'xl'].includes(value);
      }
    }
  },
  methods: {
    close: function close() {
      this.$emit('close');
    }
  },
  watch: {
    show: function show(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03"
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

















function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  id: "app"
};
var _hoisted_2 = {
  "class": "app-header"
};
var _hoisted_3 = {
  "class": "header-container"
};
var _hoisted_4 = {
  "class": "header-nav"
};
var _hoisted_5 = {
  "class": "app-main"
};
var _hoisted_6 = {
  key: 0,
  "class": "home-view"
};
var _hoisted_7 = {
  "class": "features-grid"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Card");
  var _component_Dashboard = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Dashboard");
  var _component_EtapesKanban = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("EtapesKanban");
  return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Header avec navigation "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_3, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "header-brand"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h1", null, "Business Manager"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
    "class": "header-subtitle"
  }, "Gestion de ton projet entrepreneurial - Mon Assistant Numérique")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("nav", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.currentView = 'home';
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['nav-button', {
      active: $data.currentView === 'home'
    }])
  }, " 🏠 Accueil ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.currentView = 'dashboard';
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['nav-button', {
      active: $data.currentView === 'dashboard'
    }])
  }, " 📊 Dashboard ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.currentView = 'kanban';
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['nav-button', {
      active: $data.currentView === 'kanban'
    }])
  }, " 📋 Suivi des Étapes ", 2 /* CLASS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Contenu principal "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("main", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Accueil "), $data.currentView === 'home' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "welcome-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h2", null, "👋 Bienvenue sur ton Business Manager", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Ton tableau de bord entrepreneurial est prêt !", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "welcome-status"
      }, " ✅ Symfony 7.2 + Vue.js 3 fonctionnent parfaitement ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "feature-card",
    hoverable: "",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.currentView = 'dashboard';
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "feature-icon"
      }, "📊", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Dashboard", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Vue d'ensemble avec graphiques et statistiques", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "feature-card",
    hoverable: "",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $data.currentView = 'kanban';
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[8] || (_cache[8] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "feature-icon"
      }, "📋", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Suivi des Étapes", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Gère toutes les étapes de création de ton entreprise", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "feature-card disabled"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[9] || (_cache[9] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "feature-icon"
      }, "📁", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Documents", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Bientôt disponible", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "feature-card disabled"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "feature-icon"
      }, "📅", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Calendrier", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Bientôt disponible", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Dashboard "), $data.currentView === 'dashboard' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Dashboard, {
    key: 1,
    onNavigate: $options.navigateTo
  }, null, 8 /* PROPS */, ["onNavigate"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Kanban "), $data.currentView === 'kanban' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_EtapesKanban, {
    key: 2
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=template&id=83b04bae&scoped=true"
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=template&id=83b04bae&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

















function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "dashboard"
};
var _hoisted_2 = {
  "class": "dashboard-header"
};
var _hoisted_3 = {
  "class": "header-date"
};
var _hoisted_4 = {
  "class": "kpi-grid"
};
var _hoisted_5 = {
  "class": "kpi-content"
};
var _hoisted_6 = {
  "class": "kpi-details"
};
var _hoisted_7 = {
  "class": "kpi-value"
};
var _hoisted_8 = {
  "class": "kpi-content"
};
var _hoisted_9 = {
  "class": "kpi-details"
};
var _hoisted_10 = {
  "class": "kpi-value"
};
var _hoisted_11 = {
  "class": "kpi-content"
};
var _hoisted_12 = {
  "class": "kpi-details"
};
var _hoisted_13 = {
  "class": "kpi-value"
};
var _hoisted_14 = {
  "class": "kpi-content"
};
var _hoisted_15 = {
  "class": "kpi-details"
};
var _hoisted_16 = {
  "class": "kpi-value"
};
var _hoisted_17 = {
  "class": "kpi-progress-bar"
};
var _hoisted_18 = {
  "class": "charts-grid"
};
var _hoisted_19 = {
  "class": "chart-container"
};
var _hoisted_20 = {
  ref: "statusChart"
};
var _hoisted_21 = {
  "class": "chart-container"
};
var _hoisted_22 = {
  ref: "categoryChart"
};
var _hoisted_23 = {
  "class": "chart-container"
};
var _hoisted_24 = {
  ref: "priorityChart"
};
var _hoisted_25 = {
  "class": "timeline-container"
};
var _hoisted_26 = {
  key: 0,
  "class": "empty-timeline"
};
var _hoisted_27 = {
  key: 1,
  "class": "timeline-list"
};
var _hoisted_28 = {
  "class": "timeline-content"
};
var _hoisted_29 = {
  "class": "timeline-title"
};
var _hoisted_30 = {
  "class": "timeline-meta"
};
var _hoisted_31 = {
  "class": "urgent-list"
};
var _hoisted_32 = {
  "class": "urgent-content"
};
var _hoisted_33 = {
  key: 0
};
var _hoisted_34 = {
  "class": "urgent-meta"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Badge = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Badge");
  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Header "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_2, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "header-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h2", null, "📊 Tableau de Bord"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
    "class": "subtitle"
  }, "Vue d'ensemble de votre projet entrepreneurial")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
    variant: "primary",
    size: "lg"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.currentDate), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" KPI Cards "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "kpi-card total-card",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_5, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-icon"
      }, "📋", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_6, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "kpi-label"
      }, "Total Étapes", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.stats.total), 1 /* TEXT */)])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "kpi-card progress-card",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_8, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-icon"
      }, "⏳", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_9, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "kpi-label"
      }, "En Cours", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.stats.inProgress), 1 /* TEXT */)])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "kpi-card done-card",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_11, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-icon"
      }, "✅", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_12, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "kpi-label"
      }, "Terminées", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.stats.done), 1 /* TEXT */)])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "kpi-card completion-card",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_14, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-icon"
      }, "🎯", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_15, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "kpi-label"
      }, "Progression", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.stats.completionRate) + "%", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-progress-fill",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeStyle)({
          width: $options.stats.completionRate + '%'
        })
      }, null, 4 /* STYLE */)])];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Charts Grid "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Graphique en anneau - Statuts "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "chart-card"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "📊 Répartition par Statut", -1 /* CACHED */)]));
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("canvas", _hoisted_20, null, 512 /* NEED_PATCH */)])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Graphique en barres - Catégories "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "chart-card"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[11] || (_cache[11] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "📁 Étapes par Catégorie", -1 /* CACHED */)]));
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("canvas", _hoisted_22, null, 512 /* NEED_PATCH */)])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Graphique en barres - Priorités "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "chart-card"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "🔥 Répartition par Priorité", -1 /* CACHED */)]));
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("canvas", _hoisted_24, null, 512 /* NEED_PATCH */)])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Timeline - Prochaines échéances "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "chart-card timeline-card"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[13] || (_cache[13] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "📅 Prochaines Échéances (30 jours)", -1 /* CACHED */)]));
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_25, [$options.upcomingEtapes.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_26, _toConsumableArray(_cache[14] || (_cache[14] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "empty-icon"
      }, "📅", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Aucune échéance dans les 30 prochains jours", -1 /* CACHED */)])))) : ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_27, [((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($options.upcomingEtapes, function (etape) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
          key: etape.id,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(["timeline-item", $options.getTimelineClass(etape.dateLimite)])
        }, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
          "class": "timeline-dot"
        }, null, -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
          variant: $options.getDateBadgeVariant(etape.dateLimite),
          size: "sm"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatDateRelative(etape.dateLimite)), 1 /* TEXT */)];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"]), etape.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
          key: 0,
          variant: "gray",
          size: "sm"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.category), 1 /* TEXT */)];
          }),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])], 2 /* CLASS */);
      }), 128 /* KEYED_FRAGMENT */))]))])];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Étapes urgentes "), $options.urgentEtapes.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Card, {
    key: 0,
    "class": "urgent-card"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[16] || (_cache[16] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "🔴 Étapes Urgentes", -1 /* CACHED */)]));
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($options.urgentEtapes, function (etape) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
          key: etape.id,
          "class": "urgent-item",
          onClick: _cache[0] || (_cache[0] = function () {
            return $options.goToKanban && $options.goToKanban.apply($options, arguments);
          })
        }, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
          "class": "urgent-icon"
        }, "⚠️", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("p", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
          variant: "danger",
          size: "sm"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
            return _toConsumableArray(_cache[17] || (_cache[17] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)("Urgent", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        }), etape.dateLimite ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
          key: 0,
          variant: "warning",
          size: "sm"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Échéance : " + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatDate(etape.dateLimite)), 1 /* TEXT */)];
          }),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])]);
      }), 128 /* KEYED_FRAGMENT */))])];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true"
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

















function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "etapes-kanban"
};
var _hoisted_2 = {
  "class": "kanban-header"
};
var _hoisted_3 = {
  "class": "header-content"
};
var _hoisted_4 = {
  "class": "header-actions"
};
var _hoisted_5 = {
  "class": "filters-container"
};
var _hoisted_6 = {
  "class": "search-box"
};
var _hoisted_7 = {
  "class": "filters"
};
var _hoisted_8 = {
  key: 0,
  "class": "active-filters"
};
var _hoisted_9 = {
  "class": "progress-header"
};
var _hoisted_10 = {
  "class": "progress-bar"
};
var _hoisted_11 = {
  key: 0,
  "class": "progress-text"
};
var _hoisted_12 = {
  "class": "progress-stats"
};
var _hoisted_13 = {
  "class": "stat"
};
var _hoisted_14 = {
  "class": "stat-value"
};
var _hoisted_15 = {
  "class": "stat"
};
var _hoisted_16 = {
  "class": "stat-value"
};
var _hoisted_17 = {
  "class": "stat"
};
var _hoisted_18 = {
  "class": "stat-value"
};
var _hoisted_19 = {
  "class": "kanban-board"
};
var _hoisted_20 = {
  "class": "kanban-column"
};
var _hoisted_21 = {
  "class": "column-header todo-header"
};
var _hoisted_22 = {
  "class": "column-content"
};
var _hoisted_23 = {
  "class": "card-content"
};
var _hoisted_24 = {
  "class": "card-header-row"
};
var _hoisted_25 = {
  "class": "card-title"
};
var _hoisted_26 = {
  key: 0,
  "class": "card-description"
};
var _hoisted_27 = {
  "class": "card-meta"
};
var _hoisted_28 = {
  "class": "card-actions"
};
var _hoisted_29 = {
  key: 0,
  "class": "empty-state"
};
var _hoisted_30 = {
  "class": "kanban-column"
};
var _hoisted_31 = {
  "class": "column-header progress-header"
};
var _hoisted_32 = {
  "class": "column-content"
};
var _hoisted_33 = {
  "class": "card-content"
};
var _hoisted_34 = {
  "class": "card-header-row"
};
var _hoisted_35 = {
  "class": "card-title"
};
var _hoisted_36 = {
  key: 0,
  "class": "card-description"
};
var _hoisted_37 = {
  "class": "card-meta"
};
var _hoisted_38 = {
  "class": "card-actions"
};
var _hoisted_39 = {
  key: 0,
  "class": "empty-state"
};
var _hoisted_40 = {
  "class": "kanban-column"
};
var _hoisted_41 = {
  "class": "column-header done-header"
};
var _hoisted_42 = {
  "class": "column-content"
};
var _hoisted_43 = {
  "class": "card-content"
};
var _hoisted_44 = {
  "class": "card-title"
};
var _hoisted_45 = {
  key: 0,
  "class": "card-description"
};
var _hoisted_46 = {
  "class": "card-meta"
};
var _hoisted_47 = {
  "class": "card-actions"
};
var _hoisted_48 = {
  key: 0,
  "class": "empty-state"
};
var _hoisted_49 = {
  "class": "form-group"
};
var _hoisted_50 = {
  "class": "form-row"
};
var _hoisted_51 = {
  "class": "form-group"
};
var _hoisted_52 = {
  "class": "form-group"
};
var _hoisted_53 = {
  "class": "form-group"
};
var _hoisted_54 = {
  "class": "form-row"
};
var _hoisted_55 = {
  "class": "form-group"
};
var _hoisted_56 = {
  "class": "form-group"
};
var _hoisted_57 = {
  "class": "form-group"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Button");
  var _component_Badge = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Badge");
  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Card");
  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("draggable");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Header modernisé avec filtres "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_3, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "header-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h2", null, "📋 Suivi des Étapes"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
    "class": "subtitle"
  }, "Création d'Entreprise - Mon Assistant Numérique")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showAddModal = true;
    }),
    size: "lg"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[21] || (_cache[21] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "icon"
      }, "✨", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Nouvelle Étape ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Barre de recherche et filtres "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "filters-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_6, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "search-icon"
      }, "🔍", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.searchQuery = $event;
        }),
        type: "text",
        placeholder: "Rechercher une étape...",
        "class": "search-input"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.searchQuery]]), $data.searchQuery ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $data.searchQuery = '';
        }),
        "class": "clear-search"
      }, "✕")) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.sortBy = $event;
        }),
        "class": "filter-select"
      }, _toConsumableArray(_cache[24] || (_cache[24] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "ordre"
      }, "📊 Ordre", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "date-asc"
      }, "📅 Date (plus ancienne)", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "date-desc"
      }, "📅 Date (plus récente)", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "alpha"
      }, "🔤 Alphabétique", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.sortBy]]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.filterPriority = $event;
        }),
        "class": "filter-select"
      }, _toConsumableArray(_cache[25] || (_cache[25] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "all"
      }, "Toutes priorités", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "urgent"
      }, "🔴 Urgent", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "normal"
      }, "🟡 Normal", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "low"
      }, "🟢 Basse", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.filterPriority]])])]), $data.searchQuery || $data.filterPriority !== 'all' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_8, [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "filter-label"
      }, "Filtres actifs :", -1 /* CACHED */)), $data.searchQuery ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
        key: 0,
        variant: "info",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $data.searchQuery = '';
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 🔍 \"" + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.searchQuery) + "\" ✕ ", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), $data.filterPriority !== 'all' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
        key: 1,
        variant: "warning",
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $data.filterPriority = 'all';
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getPriorityLabel($data.filterPriority)) + " ✕ ", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Barre de progression modernisée "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "progress-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_9, [_cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "progress-label"
      }, "Progression globale", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
        variant: $options.progressVariant,
        size: "lg",
        pill: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.progression) + "%", 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["variant"])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "progress-fill",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeStyle)({
          width: $options.progression + '%'
        })
      }, [$options.progression > 10 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.progression) + "%", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)], 4 /* STYLE */)]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.done.length), 1 /* TEXT */), _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "Terminées", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.in_progress.length), 1 /* TEXT */), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "En cours", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.todo.length), 1 /* TEXT */), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "À faire", -1 /* CACHED */))])])];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Board Kanban avec Drag & Drop "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Colonne À FAIRE "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_21, [_cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "column-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "column-icon"
  }, "📝"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "À Faire")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
    variant: "gray",
    pill: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.todo.length), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_draggable, {
    modelValue: $data.todoList,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.todoList = $event;
    }),
    group: "etapes",
    "item-key": "id",
    onChange: _cache[8] || (_cache[8] = function ($event) {
      return $options.onDragUpdate('todo');
    }),
    "class": "draggable-list",
    animation: 200
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function (_ref) {
      var etape = _ref.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
        "class": "kanban-card todo-card",
        hoverable: "",
        onClick: function onClick($event) {
          return $options.editEtape(etape);
        }
      }, {
        footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.changeStatut(etape, 'in_progress');
            }, ["stop"]),
            variant: "ghost",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[32] || (_cache[32] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ▶️ Démarrer ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.deleteEtape(etape);
            }, ["stop"]),
            variant: "danger",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[33] || (_cache[33] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 🗑️ ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"])])];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.priority ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: $options.getPriorityVariant(etape.priority),
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getPriorityIcon(etape.priority)), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)]), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("p", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_27, [etape.dateLimite ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: $options.getDateVariant(etape.dateLimite),
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 📅 " + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatDate(etape.dateLimite)), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), etape.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 1,
            variant: "gray",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.category), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), $options.filteredEtapesByStatut.todo.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_29, [_cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "empty-icon"
  }, "✅", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.searchQuery ? 'Aucun résultat' : 'Aucune étape à faire'), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Colonne EN COURS "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_31, [_cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "column-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "column-icon"
  }, "⏳"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "En Cours")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
    variant: "warning",
    pill: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.in_progress.length), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_draggable, {
    modelValue: $data.inProgressList,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.inProgressList = $event;
    }),
    group: "etapes",
    "item-key": "id",
    onChange: _cache[10] || (_cache[10] = function ($event) {
      return $options.onDragUpdate('in_progress');
    }),
    "class": "draggable-list",
    animation: 200
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function (_ref2) {
      var etape = _ref2.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
        "class": "kanban-card progress-card",
        hoverable: "",
        onClick: function onClick($event) {
          return $options.editEtape(etape);
        }
      }, {
        footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.changeStatut(etape, 'todo');
            }, ["stop"]),
            variant: "ghost",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[37] || (_cache[37] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ⬅️ ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.changeStatut(etape, 'done');
            }, ["stop"]),
            variant: "success",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[38] || (_cache[38] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ✅ Terminer ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"])])];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_33, [_cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
            "class": "card-status"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
            "class": "pulse-dot"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", null, "En cours")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.priority ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: $options.getPriorityVariant(etape.priority),
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getPriorityIcon(etape.priority)), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)]), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("p", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_37, [etape.dateDebut ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: "info",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 🚀 " + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatDate(etape.dateDebut)), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), etape.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 1,
            variant: "gray",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.category), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), $options.filteredEtapesByStatut.in_progress.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_39, [_cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "empty-icon"
  }, "💤", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.searchQuery ? 'Aucun résultat' : 'Aucune étape en cours'), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Colonne TERMINÉ "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_41, [_cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "column-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "column-icon"
  }, "✅"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Terminé")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
    variant: "success",
    pill: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.filteredEtapesByStatut.done.length), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_draggable, {
    modelValue: $data.doneList,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.doneList = $event;
    }),
    group: "etapes",
    "item-key": "id",
    onChange: _cache[12] || (_cache[12] = function ($event) {
      return $options.onDragUpdate('done');
    }),
    "class": "draggable-list",
    animation: 200
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function (_ref3) {
      var etape = _ref3.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
        "class": "kanban-card done-card",
        hoverable: "",
        onClick: function onClick($event) {
          return $options.editEtape(etape);
        }
      }, {
        footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.changeStatut(etape, 'in_progress');
            }, ["stop"]),
            variant: "ghost",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return _toConsumableArray(_cache[42] || (_cache[42] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ↩️ Réouvrir ", -1 /* CACHED */)]));
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"])])];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_43, [_cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
            "class": "card-status success"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
            "class": "success-icon"
          }, "🎉"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", null, "Terminé")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("p", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_46, [etape.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Badge, {
            key: 0,
            variant: "gray",
            size: "sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.category), 1 /* TEXT */)];
            }),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])];
        }),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), $options.filteredEtapesByStatut.done.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_48, [_cache[43] || (_cache[43] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
    "class": "empty-icon"
  }, "🎯", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.searchQuery ? 'Aucun résultat' : 'Aucune étape terminée'), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Modal avec champs de priorité et catégorie "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Modal, {
    show: $data.showAddModal || !!$data.editingEtape,
    title: $data.editingEtape ? 'Modifier l\'étape' : 'Nouvelle étape',
    onClose: $options.closeModal,
    size: "lg"
  }, {
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.closeModal,
        variant: "secondary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[52] || (_cache[52] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Annuler ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.saveEtape,
        loading: $data.saving
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($data.editingEtape ? '💾 Mettre à jour' : '✨ Créer'), 1 /* TEXT */)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick", "loading"])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("form", {
        onSubmit: _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function () {
          return $options.saveEtape && $options.saveEtape.apply($options, arguments);
        }, ["prevent"])),
        "class": "etape-form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_49, [_cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)("Titre "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "required"
      }, "*")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          return $data.form.titre = $event;
        }),
        type: "text",
        "class": "form-input",
        placeholder: "Ex: Étude de marché",
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.titre]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_51, [_cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "Priorité", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
          return $data.form.priority = $event;
        }),
        "class": "form-input"
      }, _toConsumableArray(_cache[45] || (_cache[45] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: ""
      }, "Aucune", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "urgent"
      }, "🔴 Urgent", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "normal"
      }, "🟡 Normal", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "low"
      }, "🟢 Basse", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.form.priority]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_52, [_cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "Catégorie", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
          return $data.form.category = $event;
        }),
        type: "text",
        "class": "form-input",
        placeholder: "Ex: Administratif, Formation..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.category]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_53, [_cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          return $data.form.description = $event;
        }),
        rows: "3",
        "class": "form-input",
        placeholder: "Décrivez cette étape..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_55, [_cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "📅 Date de début", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
          return $data.form.dateDebut = $event;
        }),
        type: "date",
        "class": "form-input"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.dateDebut]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_56, [_cache[50] || (_cache[50] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "⏰ Date limite", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
          return $data.form.dateLimite = $event;
        }),
        type: "date",
        "class": "form-input"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.dateLimite]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_57, [_cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "📝 Notes", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
          return $data.form.notes = $event;
        }),
        rows: "4",
        "class": "form-input",
        placeholder: "Ajoutez des notes, liens, ou informations supplémentaires..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.form.notes]])])], 32 /* NEED_HYDRATION */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "title", "onClose"])]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.badgeClasses)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)], 2 /* CLASS */);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true"
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["disabled"];
var _hoisted_2 = {
  key: 0,
  "class": "spinner"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.buttonClasses),
    disabled: $props.disabled || $props.loading,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('click', $event);
    })
  }, [$props.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    key: 1
  }, undefined, true)], 10 /* CLASS, PROPS */, _hoisted_1);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "card-header"
};
var _hoisted_2 = {
  "class": "card-body"
};
var _hoisted_3 = {
  key: 1,
  "class": "card-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.cardClasses)
  }, [_ctx.$slots.header ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "header", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _ctx.$slots.footer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal-header"
};
var _hoisted_2 = {
  "class": "modal-body"
};
var _hoisted_3 = {
  key: 0,
  "class": "modal-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "modal"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        "class": "modal-overlay",
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.close && $options.close.apply($options, arguments);
        }, ["self"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["modal-container", "modal-".concat($props.size)])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.close && $options.close.apply($options, arguments);
        }),
        "class": "modal-close"
      }, "✕")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), _ctx.$slots.footer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3 /* FORWARDED */
  });
}

/***/ },

/***/ "./assets/styles/design-system.css"
/*!*****************************************!*\
  !*** ./assets/styles/design-system.css ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=style&index=0&id=83b04bae&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=style&index=0&id=83b04bae&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./assets/App.vue"
/*!************************!*\
  !*** ./assets/App.vue ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5bcdaf03 */ "./assets/App.vue?vue&type=template&id=5bcdaf03");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./assets/App.vue?vue&type=script&lang=js");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_5bcdaf03_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css */ "./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/App.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/Dashboard.vue"
/*!*****************************************!*\
  !*** ./assets/components/Dashboard.vue ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_83b04bae_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=83b04bae&scoped=true */ "./assets/components/Dashboard.vue?vue&type=template&id=83b04bae&scoped=true");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./assets/components/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_83b04bae_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=83b04bae&scoped=true&lang=css */ "./assets/components/Dashboard.vue?vue&type=style&index=0&id=83b04bae&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_83b04bae_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-83b04bae"],['__file',"assets/components/Dashboard.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/EtapesKanban.vue"
/*!********************************************!*\
  !*** ./assets/components/EtapesKanban.vue ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EtapesKanban_vue_vue_type_template_id_07e7c4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true */ "./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true");
/* harmony import */ var _EtapesKanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EtapesKanban.vue?vue&type=script&lang=js */ "./assets/components/EtapesKanban.vue?vue&type=script&lang=js");
/* harmony import */ var _EtapesKanban_vue_vue_type_style_index_0_id_07e7c4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css */ "./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EtapesKanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EtapesKanban_vue_vue_type_template_id_07e7c4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-07e7c4c4"],['__file',"assets/components/EtapesKanban.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/ui/Badge.vue"
/*!****************************************!*\
  !*** ./assets/components/ui/Badge.vue ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Badge_vue_vue_type_template_id_62784023_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge.vue?vue&type=template&id=62784023&scoped=true */ "./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true");
/* harmony import */ var _Badge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge.vue?vue&type=script&lang=js */ "./assets/components/ui/Badge.vue?vue&type=script&lang=js");
/* harmony import */ var _Badge_vue_vue_type_style_index_0_id_62784023_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css */ "./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Badge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Badge_vue_vue_type_template_id_62784023_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-62784023"],['__file',"assets/components/ui/Badge.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/ui/Button.vue"
/*!*****************************************!*\
  !*** ./assets/components/ui/Button.vue ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_77bc3b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=77bc3b3c&scoped=true */ "./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true");
/* harmony import */ var _Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js */ "./assets/components/ui/Button.vue?vue&type=script&lang=js");
/* harmony import */ var _Button_vue_vue_type_style_index_0_id_77bc3b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css */ "./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_77bc3b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-77bc3b3c"],['__file',"assets/components/ui/Button.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/ui/Card.vue"
/*!***************************************!*\
  !*** ./assets/components/ui/Card.vue ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_5576c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=5576c580&scoped=true */ "./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true");
/* harmony import */ var _Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js */ "./assets/components/ui/Card.vue?vue&type=script&lang=js");
/* harmony import */ var _Card_vue_vue_type_style_index_0_id_5576c580_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css */ "./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Card_vue_vue_type_template_id_5576c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5576c580"],['__file',"assets/components/ui/Card.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/components/ui/Modal.vue"
/*!****************************************!*\
  !*** ./assets/components/ui/Modal.vue ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_65df0a2d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=65df0a2d&scoped=true */ "./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./assets/components/ui/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _Modal_vue_vue_type_style_index_0_id_65df0a2d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css */ "./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_vue_vue_type_template_id_65df0a2d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-65df0a2d"],['__file',"assets/components/ui/Modal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ },

/***/ "./assets/App.vue?vue&type=script&lang=js"
/*!************************************************!*\
  !*** ./assets/App.vue?vue&type=script&lang=js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/Dashboard.vue?vue&type=script&lang=js"
/*!*****************************************************************!*\
  !*** ./assets/components/Dashboard.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/EtapesKanban.vue?vue&type=script&lang=js"
/*!********************************************************************!*\
  !*** ./assets/components/EtapesKanban.vue?vue&type=script&lang=js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EtapesKanban.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/ui/Badge.vue?vue&type=script&lang=js"
/*!****************************************************************!*\
  !*** ./assets/components/ui/Badge.vue?vue&type=script&lang=js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Badge.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/ui/Button.vue?vue&type=script&lang=js"
/*!*****************************************************************!*\
  !*** ./assets/components/ui/Button.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/ui/Card.vue?vue&type=script&lang=js"
/*!***************************************************************!*\
  !*** ./assets/components/ui/Card.vue?vue&type=script&lang=js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/components/ui/Modal.vue?vue&type=script&lang=js"
/*!****************************************************************!*\
  !*** ./assets/components/ui/Modal.vue?vue&type=script&lang=js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=script&lang=js");
 

/***/ },

/***/ "./assets/App.vue?vue&type=template&id=5bcdaf03"
/*!******************************************************!*\
  !*** ./assets/App.vue?vue&type=template&id=5bcdaf03 ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=5bcdaf03 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03");


/***/ },

/***/ "./assets/components/Dashboard.vue?vue&type=template&id=83b04bae&scoped=true"
/*!***********************************************************************************!*\
  !*** ./assets/components/Dashboard.vue?vue&type=template&id=83b04bae&scoped=true ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_83b04bae_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_83b04bae_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=83b04bae&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=template&id=83b04bae&scoped=true");


/***/ },

/***/ "./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true"
/*!**************************************************************************************!*\
  !*** ./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_template_id_07e7c4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_template_id_07e7c4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=template&id=07e7c4c4&scoped=true");


/***/ },

/***/ "./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true"
/*!**********************************************************************************!*\
  !*** ./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_template_id_62784023_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_template_id_62784023_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Badge.vue?vue&type=template&id=62784023&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=template&id=62784023&scoped=true");


/***/ },

/***/ "./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true"
/*!***********************************************************************************!*\
  !*** ./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_77bc3b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_77bc3b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=template&id=77bc3b3c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=template&id=77bc3b3c&scoped=true");


/***/ },

/***/ "./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true"
/*!*********************************************************************************!*\
  !*** ./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_5576c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_5576c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=template&id=5576c580&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=template&id=5576c580&scoped=true");


/***/ },

/***/ "./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true"
/*!**********************************************************************************!*\
  !*** ./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_65df0a2d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_65df0a2d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=template&id=65df0a2d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=template&id=65df0a2d&scoped=true");


/***/ },

/***/ "./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css"
/*!********************************************************************!*\
  !*** ./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_5bcdaf03_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=style&index=0&id=5bcdaf03&lang=css");


/***/ },

/***/ "./assets/components/Dashboard.vue?vue&type=style&index=0&id=83b04bae&scoped=true&lang=css"
/*!*************************************************************************************************!*\
  !*** ./assets/components/Dashboard.vue?vue&type=style&index=0&id=83b04bae&scoped=true&lang=css ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_style_index_0_id_83b04bae_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=style&index=0&id=83b04bae&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Dashboard.vue?vue&type=style&index=0&id=83b04bae&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css"
/*!****************************************************************************************************!*\
  !*** ./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EtapesKanban_vue_vue_type_style_index_0_id_07e7c4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EtapesKanban.vue?vue&type=style&index=0&id=07e7c4c4&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css"
/*!************************************************************************************************!*\
  !*** ./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Badge_vue_vue_type_style_index_0_id_62784023_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Badge.vue?vue&type=style&index=0&id=62784023&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css"
/*!*************************************************************************************************!*\
  !*** ./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_style_index_0_id_77bc3b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Button.vue?vue&type=style&index=0&id=77bc3b3c&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css"
/*!***********************************************************************************************!*\
  !*** ./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_5576c580_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Card.vue?vue&type=style&index=0&id=5576c580&scoped=true&lang=css");


/***/ },

/***/ "./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css"
/*!************************************************************************************************!*\
  !*** ./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_65df0a2d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/ui/Modal.vue?vue&type=style&index=0&id=65df0a2d&scoped=true&lang=css");


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_vuedraggable_dist_vuedragga-e2370e"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9CdXR0b24udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Rlc2lnbi1zeXN0ZW0uY3NzP2RiN2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/YjI4MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlP2M5NTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZT9jNDY2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZT8yOTc2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0J1dHRvbi52dWU/YzcxNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9DYXJkLnZ1ZT9lNTM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZT9lMzg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzg5ZGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZT83ZDU0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V0YXBlc0thbmJhbi52dWU/Yjk4YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9CYWRnZS52dWU/NTg0OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9CdXR0b24udnVlP2Y4MzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQ2FyZC52dWU/NTUxMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9Nb2RhbC52dWU/MWYzMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwLnZ1ZT83ZTAwIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/MjViYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlPzRiYWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQmFkZ2UudnVlPzAwNjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZT8wMThhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlP2U2ZWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvTW9kYWwudnVlP2QzMjUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/ZWQ3YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlPzU3NmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZT81MDZkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZT9mNDllIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0J1dHRvbi52dWU/N2E5YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9DYXJkLnZ1ZT80NWNlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZT9iZTg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzkxMzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZT85NTQxIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V0YXBlc0thbmJhbi52dWU/MDQ5ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9CYWRnZS52dWU/Y2Q5NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9CdXR0b24udnVlPzM5ZmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQ2FyZC52dWU/NWQyYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9Nb2RhbC52dWU/MWY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XHJcbmltcG9ydCBFdGFwZXNLYW5iYW4gZnJvbSAnLi9jb21wb25lbnRzL0V0YXBlc0thbmJhbi52dWUnO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9EYXNoYm9hcmQudnVlJztcclxuXHJcbi8vIEltcG9ydCBkdSBEZXNpZ24gU3lzdGVtXHJcbmltcG9ydCAnLi9zdHlsZXMvZGVzaWduLXN5c3RlbS5jc3MnO1xyXG5cclxuLy8gSW1wb3J0IGRlcyBjb21wb3NhbnRzIFVJXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL3VpL0J1dHRvbi52dWUnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvdWkvQ2FyZC52dWUnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZSc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvQmFkZ2UudnVlJztcclxuXHJcbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApO1xyXG5cclxuLy8gRW5yZWdpc3RyZXIgbGVzIGNvbXBvc2FudHMgZ2xvYmFsZW1lbnRcclxuYXBwLmNvbXBvbmVudCgnQnV0dG9uJywgQnV0dG9uKTtcclxuYXBwLmNvbXBvbmVudCgnQ2FyZCcsIENhcmQpO1xyXG5hcHAuY29tcG9uZW50KCdNb2RhbCcsIE1vZGFsKTtcclxuYXBwLmNvbXBvbmVudCgnQmFkZ2UnLCBCYWRnZSk7XHJcbmFwcC5jb21wb25lbnQoJ0V0YXBlc0thbmJhbicsIEV0YXBlc0thbmJhbik7XHJcbmFwcC5jb21wb25lbnQoJ0Rhc2hib2FyZCcsIERhc2hib2FyZCk7XHJcblxyXG5hcHAubW91bnQoJyNhcHAnKTsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPCEtLSBIZWFkZXIgYXZlYyBuYXZpZ2F0aW9uIC0tPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWJyYW5kXCI+XHJcbiAgICAgICAgICA8aDE+QnVzaW5lc3MgTWFuYWdlcjwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1zdWJ0aXRsZVwiPkdlc3Rpb24gZGUgdG9uIHByb2pldCBlbnRyZXByZW5ldXJpYWwgLSBNb24gQXNzaXN0YW50IE51bcOpcmlxdWU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlci1uYXZcIj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2hvbWUnXCIgXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIlsnbmF2LWJ1dHRvbicsIHsgYWN0aXZlOiBjdXJyZW50VmlldyA9PT0gJ2hvbWUnIH1dXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg8J+PoCBBY2N1ZWlsXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2Rhc2hib2FyZCdcIiBcclxuICAgICAgICAgICAgOmNsYXNzPVwiWyduYXYtYnV0dG9uJywgeyBhY3RpdmU6IGN1cnJlbnRWaWV3ID09PSAnZGFzaGJvYXJkJyB9XVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIPCfk4ogRGFzaGJvYXJkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2thbmJhbidcIiBcclxuICAgICAgICAgICAgOmNsYXNzPVwiWyduYXYtYnV0dG9uJywgeyBhY3RpdmU6IGN1cnJlbnRWaWV3ID09PSAna2FuYmFuJyB9XVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIPCfk4sgU3VpdmkgZGVzIMOJdGFwZXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG5cclxuICAgIDwhLS0gQ29udGVudSBwcmluY2lwYWwgLS0+XHJcbiAgICA8bWFpbiBjbGFzcz1cImFwcC1tYWluXCI+XHJcbiAgICAgIDwhLS0gVnVlIEFjY3VlaWwgLS0+XHJcbiAgICAgIDxkaXYgdi1pZj1cImN1cnJlbnRWaWV3ID09PSAnaG9tZSdcIiBjbGFzcz1cImhvbWUtdmlld1wiPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzPVwid2VsY29tZS1jYXJkXCI+XHJcbiAgICAgICAgICA8aDI+8J+RiyBCaWVudmVudWUgc3VyIHRvbiBCdXNpbmVzcyBNYW5hZ2VyPC9oMj5cclxuICAgICAgICAgIDxwPlRvbiB0YWJsZWF1IGRlIGJvcmQgZW50cmVwcmVuZXVyaWFsIGVzdCBwcsOqdCAhPC9wPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAg4pyFIFN5bWZvbnkgNy4yICsgVnVlLmpzIDMgZm9uY3Rpb25uZW50IHBhcmZhaXRlbWVudFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXMtZ3JpZFwiPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3M9XCJmZWF0dXJlLWNhcmRcIiBob3ZlcmFibGUgQGNsaWNrPVwiY3VycmVudFZpZXcgPSAnZGFzaGJvYXJkJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1pY29uXCI+8J+TijwvZGl2PlxyXG4gICAgICAgICAgICA8aDM+RGFzaGJvYXJkPC9oMz5cclxuICAgICAgICAgICAgPHA+VnVlIGQnZW5zZW1ibGUgYXZlYyBncmFwaGlxdWVzIGV0IHN0YXRpc3RpcXVlczwvcD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICA8Q2FyZCBjbGFzcz1cImZlYXR1cmUtY2FyZFwiIGhvdmVyYWJsZSBAY2xpY2s9XCJjdXJyZW50VmlldyA9ICdrYW5iYW4nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWljb25cIj7wn5OLPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMz5TdWl2aSBkZXMgw4l0YXBlczwvaDM+XHJcbiAgICAgICAgICAgIDxwPkfDqHJlIHRvdXRlcyBsZXMgw6l0YXBlcyBkZSBjcsOpYXRpb24gZGUgdG9uIGVudHJlcHJpc2U8L3A+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgPENhcmQgY2xhc3M9XCJmZWF0dXJlLWNhcmQgZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaWNvblwiPvCfk4E8L2Rpdj5cclxuICAgICAgICAgICAgPGgzPkRvY3VtZW50czwvaDM+XHJcbiAgICAgICAgICAgIDxwPkJpZW50w7R0IGRpc3BvbmlibGU8L3A+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgPENhcmQgY2xhc3M9XCJmZWF0dXJlLWNhcmQgZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaWNvblwiPvCfk4U8L2Rpdj5cclxuICAgICAgICAgICAgPGgzPkNhbGVuZHJpZXI8L2gzPlxyXG4gICAgICAgICAgICA8cD5CaWVudMO0dCBkaXNwb25pYmxlPC9wPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gVnVlIERhc2hib2FyZCAtLT5cclxuICAgICAgPERhc2hib2FyZCBcclxuICAgICAgICB2LWlmPVwiY3VycmVudFZpZXcgPT09ICdkYXNoYm9hcmQnXCIgXHJcbiAgICAgICAgQG5hdmlnYXRlPVwibmF2aWdhdGVUb1wiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8IS0tIFZ1ZSBLYW5iYW4gLS0+XHJcbiAgICAgIDxFdGFwZXNLYW5iYW4gdi1pZj1cImN1cnJlbnRWaWV3ID09PSAna2FuYmFuJ1wiIC8+XHJcbiAgICA8L21haW4+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRXRhcGVzS2FuYmFuIGZyb20gJy4vY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlJ1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9EYXNoYm9hcmQudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdBcHAnLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEV0YXBlc0thbmJhbixcclxuICAgIERhc2hib2FyZFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGN1cnJlbnRWaWV3OiAnaG9tZScgLy8gaG9tZSwgZGFzaGJvYXJkLCBrYW5iYW5cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG5hdmlnYXRlVG8odmlldykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdmlld1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLyogUmVzZXQgZXQgdmFyaWFibGVzIGdsb2JhbGVzIGTDqWrDoCBkYW5zIGRlc2lnbi1zeXN0ZW0uY3NzICovXHJcblxyXG4jYXBwIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qIEhlYWRlciAqL1xyXG4uYXBwLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeSkgMCUsIHZhcigtLXNlY29uZGFyeSkgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKSAwO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS14bCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5oZWFkZXItYnJhbmQgaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmhlYWRlci1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS14cykgMCAwIDA7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5oZWFkZXItbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpIHZhcigtLXNwYWNlLWxnKTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBNYWluICovXHJcbi5hcHAtbWFpbiB7XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4vKiBIb21lIFZpZXcgKi9cclxuLmhvbWUtdmlldyB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ud2VsY29tZS1jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UteGwpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnkpIDAlLCB2YXIoLS1zZWNvbmRhcnkpIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndlbGNvbWUtY2FyZCBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2UtbWQpIDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ud2VsY29tZS1jYXJkIHAge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLWxnKSAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4ud2VsY29tZS1zdGF0dXMge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQuZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOm5vdCguZGlzYWJsZWQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQgaDMge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXNtKSAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1uYXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmRcIj5cclxuICAgIDwhLS0gSGVhZGVyIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPlxyXG4gICAgICAgIDxoMj7wn5OKIFRhYmxlYXUgZGUgQm9yZDwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPlZ1ZSBkJ2Vuc2VtYmxlIGRlIHZvdHJlIHByb2pldCBlbnRyZXByZW5ldXJpYWw8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWRhdGVcIj5cclxuICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIj57eyBjdXJyZW50RGF0ZSB9fTwvQmFkZ2U+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBLUEkgQ2FyZHMgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwia3BpLWdyaWRcIj5cclxuICAgICAgPENhcmQgY2xhc3M9XCJrcGktY2FyZCB0b3RhbC1jYXJkXCIgaG92ZXJhYmxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcGktY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1pY29uXCI+8J+TizwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLWxhYmVsXCI+VG90YWwgw4l0YXBlczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrcGktdmFsdWVcIj57eyBzdGF0cy50b3RhbCB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImtwaS1jYXJkIHByb2dyZXNzLWNhcmRcIiBob3ZlcmFibGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWljb25cIj7ij7M8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtwaS1sYWJlbFwiPkVuIENvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtwaS12YWx1ZVwiPnt7IHN0YXRzLmluUHJvZ3Jlc3MgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgPENhcmQgY2xhc3M9XCJrcGktY2FyZCBkb25lLWNhcmRcIiBob3ZlcmFibGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWljb25cIj7inIU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtwaS1sYWJlbFwiPlRlcm1pbsOpZXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLXZhbHVlXCI+e3sgc3RhdHMuZG9uZSB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImtwaS1jYXJkIGNvbXBsZXRpb24tY2FyZFwiIGhvdmVyYWJsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktaWNvblwiPvCfjq88L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtwaS1sYWJlbFwiPlByb2dyZXNzaW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtwaS12YWx1ZVwiPnt7IHN0YXRzLmNvbXBsZXRpb25SYXRlIH19JTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcGktcHJvZ3Jlc3MtYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLXByb2dyZXNzLWZpbGxcIiA6c3R5bGU9XCJ7IHdpZHRoOiBzdGF0cy5jb21wbGV0aW9uUmF0ZSArICclJyB9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQ2hhcnRzIEdyaWQgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnRzLWdyaWRcIj5cclxuICAgICAgPCEtLSBHcmFwaGlxdWUgZW4gYW5uZWF1IC0gU3RhdHV0cyAtLT5cclxuICAgICAgPENhcmQgY2xhc3M9XCJjaGFydC1jYXJkXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjaGFydC10aXRsZVwiPvCfk4ogUsOpcGFydGl0aW9uIHBhciBTdGF0dXQ8L2gzPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGNhbnZhcyByZWY9XCJzdGF0dXNDaGFydFwiPjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8IS0tIEdyYXBoaXF1ZSBlbiBiYXJyZXMgLSBDYXTDqWdvcmllcyAtLT5cclxuICAgICAgPENhcmQgY2xhc3M9XCJjaGFydC1jYXJkXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjaGFydC10aXRsZVwiPvCfk4Egw4l0YXBlcyBwYXIgQ2F0w6lnb3JpZTwvaDM+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Y2FudmFzIHJlZj1cImNhdGVnb3J5Q2hhcnRcIj48L2NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgPCEtLSBHcmFwaGlxdWUgZW4gYmFycmVzIC0gUHJpb3JpdMOpcyAtLT5cclxuICAgICAgPENhcmQgY2xhc3M9XCJjaGFydC1jYXJkXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjaGFydC10aXRsZVwiPvCflKUgUsOpcGFydGl0aW9uIHBhciBQcmlvcml0w6k8L2gzPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGNhbnZhcyByZWY9XCJwcmlvcml0eUNoYXJ0XCI+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDwhLS0gVGltZWxpbmUgLSBQcm9jaGFpbmVzIMOpY2jDqWFuY2VzIC0tPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImNoYXJ0LWNhcmQgdGltZWxpbmUtY2FyZFwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSAjaGVhZGVyPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiY2hhcnQtdGl0bGVcIj7wn5OFIFByb2NoYWluZXMgw4ljaMOpYW5jZXMgKDMwIGpvdXJzKTwvaDM+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJ1cGNvbWluZ0V0YXBlcy5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXRpbWVsaW5lXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZW1wdHktaWNvblwiPvCfk4U8L3NwYW4+XHJcbiAgICAgICAgICAgIDxwPkF1Y3VuZSDDqWNow6lhbmNlIGRhbnMgbGVzIDMwIHByb2NoYWlucyBqb3VyczwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ0aW1lbGluZS1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgdi1mb3I9XCJldGFwZSBpbiB1cGNvbWluZ0V0YXBlc1wiIFxyXG4gICAgICAgICAgICAgIDprZXk9XCJldGFwZS5pZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aW1lbGluZS1pdGVtXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJnZXRUaW1lbGluZUNsYXNzKGV0YXBlLmRhdGVMaW1pdGUpXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1kb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGltZWxpbmUtdGl0bGVcIj57eyBldGFwZS50aXRyZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgOnZhcmlhbnQ9XCJnZXREYXRlQmFkZ2VWYXJpYW50KGV0YXBlLmRhdGVMaW1pdGUpXCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZm9ybWF0RGF0ZVJlbGF0aXZlKGV0YXBlLmRhdGVMaW1pdGUpIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZXRhcGUuY2F0ZWdvcnlcIiB2YXJpYW50PVwiZ3JheVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGV0YXBlLmNhdGVnb3J5IH19XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSDDiXRhcGVzIHVyZ2VudGVzIC0tPlxyXG4gICAgPENhcmQgdi1pZj1cInVyZ2VudEV0YXBlcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJ1cmdlbnQtY2FyZFwiPlxyXG4gICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjaGFydC10aXRsZVwiPvCflLQgw4l0YXBlcyBVcmdlbnRlczwvaDM+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ1cmdlbnQtbGlzdFwiPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICB2LWZvcj1cImV0YXBlIGluIHVyZ2VudEV0YXBlc1wiIFxyXG4gICAgICAgICAgOmtleT1cImV0YXBlLmlkXCJcclxuICAgICAgICAgIGNsYXNzPVwidXJnZW50LWl0ZW1cIlxyXG4gICAgICAgICAgQGNsaWNrPVwiZ29Ub0thbmJhblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVyZ2VudC1pY29uXCI+4pqg77iPPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXJnZW50LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGg0Pnt7IGV0YXBlLnRpdHJlIH19PC9oND5cclxuICAgICAgICAgICAgPHAgdi1pZj1cImV0YXBlLmRlc2NyaXB0aW9uXCI+e3sgZXRhcGUuZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cmdlbnQtbWV0YVwiPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwiZGFuZ2VyXCIgc2l6ZT1cInNtXCI+VXJnZW50PC9CYWRnZT5cclxuICAgICAgICAgICAgICA8QmFkZ2Ugdi1pZj1cImV0YXBlLmRhdGVMaW1pdGVcIiB2YXJpYW50PVwid2FybmluZ1wiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgw4ljaMOpYW5jZSA6IHt7IGZvcm1hdERhdGUoZXRhcGUuZGF0ZUxpbWl0ZSkgfX1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEYXNoYm9hcmQnLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldGFwZXM6IFtdLFxyXG4gICAgICBjaGFydHM6IHtcclxuICAgICAgICBzdGF0dXM6IG51bGwsXHJcbiAgICAgICAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgICAgcHJpb3JpdHk6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHN0YXRzKCkge1xyXG4gICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZXRhcGVzLmxlbmd0aFxyXG4gICAgICBjb25zdCB0b2RvID0gdGhpcy5ldGFwZXMuZmlsdGVyKGUgPT4gZS5zdGF0dXQgPT09ICd0b2RvJykubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGluUHJvZ3Jlc3MgPSB0aGlzLmV0YXBlcy5maWx0ZXIoZSA9PiBlLnN0YXR1dCA9PT0gJ2luX3Byb2dyZXNzJykubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGRvbmUgPSB0aGlzLmV0YXBlcy5maWx0ZXIoZSA9PiBlLnN0YXR1dCA9PT0gJ2RvbmUnKS5sZW5ndGhcclxuICAgICAgY29uc3QgY29tcGxldGlvblJhdGUgPSB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKChkb25lIC8gdG90YWwpICogMTAwKSA6IDBcclxuXHJcbiAgICAgIHJldHVybiB7IHRvdGFsLCB0b2RvLCBpblByb2dyZXNzLCBkb25lLCBjb21wbGV0aW9uUmF0ZSB9XHJcbiAgICB9LFxyXG4gICAgdXBjb21pbmdFdGFwZXMoKSB7XHJcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICBjb25zdCBpbjMwRGF5cyA9IG5ldyBEYXRlKHRvZGF5LmdldFRpbWUoKSArIDMwICogMjQgKiA2MCAqIDYwICogMTAwMClcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0aGlzLmV0YXBlc1xyXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlLmRhdGVMaW1pdGUgJiYgZS5zdGF0dXQgIT09ICdkb25lJylcclxuICAgICAgICAuZmlsdGVyKGUgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZShlLmRhdGVMaW1pdGUpXHJcbiAgICAgICAgICByZXR1cm4gZGVhZGxpbmUgPj0gdG9kYXkgJiYgZGVhZGxpbmUgPD0gaW4zMERheXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmRhdGVMaW1pdGUpIC0gbmV3IERhdGUoYi5kYXRlTGltaXRlKSlcclxuICAgICAgICAuc2xpY2UoMCwgNSlcclxuICAgIH0sXHJcbiAgICB1cmdlbnRFdGFwZXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmV0YXBlc1xyXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlLnByaW9yaXR5ID09PSAndXJnZW50JyAmJiBlLnN0YXR1dCAhPT0gJ2RvbmUnKVxyXG4gICAgICAgIC5zbGljZSgwLCAzKVxyXG4gICAgfSxcclxuICAgIGN1cnJlbnREYXRlKCkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJywgeyBcclxuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsIFxyXG4gICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgbW9udGg6ICdsb25nJywgXHJcbiAgICAgICAgZGF5OiAnbnVtZXJpYycgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5sb2FkRXRhcGVzKClcclxuICB9LFxyXG4gIGJlZm9yZVVubW91bnQoKSB7XHJcbiAgICAvLyBEw6l0cnVpcmUgbGVzIGdyYXBoaXF1ZXMgYXZhbnQgZGUgZMOpdHJ1aXJlIGxlIGNvbXBvc2FudFxyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNoYXJ0cykuZm9yRWFjaChjaGFydCA9PiB7XHJcbiAgICAgIGlmIChjaGFydCkgY2hhcnQuZGVzdHJveSgpXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgbG9hZEV0YXBlcygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2V0YXBlcycpXHJcbiAgICAgICAgdGhpcy5ldGFwZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBcclxuICAgICAgICAvLyBBdHRlbmRyZSBsZSBwcm9jaGFpbiB0aWNrIHBvdXIgw6p0cmUgc8O7ciBxdWUgbGVzIGNhbnZhcyBzb250IG1vbnTDqXNcclxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUNoYXJ0cygpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgY2hhcmdlbWVudCDDqXRhcGVzOicsIGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQ2hhcnRzKCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZVN0YXR1c0NoYXJ0KClcclxuICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeUNoYXJ0KClcclxuICAgICAgdGhpcy5jcmVhdGVQcmlvcml0eUNoYXJ0KClcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTdGF0dXNDaGFydCgpIHtcclxuICAgICAgY29uc3QgY3R4ID0gdGhpcy4kcmVmcy5zdGF0dXNDaGFydFxyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuXHJcblxyXG4gICAgICBpZiAodGhpcy5jaGFydHMuc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5jaGFydHMuc3RhdHVzLmRlc3Ryb3koKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNoYXJ0cy5zdGF0dXMgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsYWJlbHM6IFsnw4AgRmFpcmUnLCAnRW4gQ291cnMnLCAnVGVybWluw6knXSxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiBbdGhpcy5zdGF0cy50b2RvLCB0aGlzLnN0YXRzLmluUHJvZ3Jlc3MsIHRoaXMuc3RhdHMuZG9uZV0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI0NSwgMTU4LCAxMSwgMC44KScsICAvLyBPcmFuZ2VcclxuICAgICAgICAgICAgICAncmdiYSgxMzksIDkyLCAyNDYsIDAuOCknLCAgIC8vIFZpb2xldFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE2LCAxODUsIDEyOSwgMC44KScgICAgLy8gVmVydFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI0NSwgMTU4LCAxMSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDEzOSwgOTIsIDI0NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE2LCAxODUsIDEyOSwgMSknXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1LFxyXG4gICAgICAgICAgICAgICAgZm9udDogeyBzaXplOiAxMiB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUNhdGVnb3J5Q2hhcnQoKSB7XHJcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuJHJlZnMuY2F0ZWdvcnlDaGFydFxyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuXHJcblxyXG4gICAgICBpZiAodGhpcy5jaGFydHMuY2F0ZWdvcnkpIHtcclxuICAgICAgICB0aGlzLmNoYXJ0cy5jYXRlZ29yeS5kZXN0cm95KClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ29tcHRlciBsZXMgw6l0YXBlcyBwYXIgY2F0w6lnb3JpZVxyXG4gICAgICBjb25zdCBjYXRlZ29yeUNvdW50cyA9IHt9XHJcbiAgICAgIHRoaXMuZXRhcGVzLmZvckVhY2goZXRhcGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdCA9IGV0YXBlLmNhdGVnb3J5IHx8ICdTYW5zIGNhdMOpZ29yaWUnXHJcbiAgICAgICAgY2F0ZWdvcnlDb3VudHNbY2F0XSA9IChjYXRlZ29yeUNvdW50c1tjYXRdIHx8IDApICsgMVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgbGFiZWxzID0gT2JqZWN0LmtleXMoY2F0ZWdvcnlDb3VudHMpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QudmFsdWVzKGNhdGVnb3J5Q291bnRzKVxyXG5cclxuICAgICAgdGhpcy5jaGFydHMuY2F0ZWdvcnkgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdOb21icmUgZFxcJ8OpdGFwZXMnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEwMiwgMTI2LCAyMzQsIDAuOCknLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTAyLCAxMjYsIDIzNCwgMSknLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4XHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDogeyBkaXNwbGF5OiBmYWxzZSB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICB0aWNrczogeyBzdGVwU2l6ZTogMSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlUHJpb3JpdHlDaGFydCgpIHtcclxuICAgICAgY29uc3QgY3R4ID0gdGhpcy4kcmVmcy5wcmlvcml0eUNoYXJ0XHJcbiAgICAgIGlmICghY3R4KSByZXR1cm5cclxuXHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0cy5wcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMuY2hhcnRzLnByaW9yaXR5LmRlc3Ryb3koKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1cmdlbnQgPSB0aGlzLmV0YXBlcy5maWx0ZXIoZSA9PiBlLnByaW9yaXR5ID09PSAndXJnZW50JykubGVuZ3RoXHJcbiAgICAgIGNvbnN0IG5vcm1hbCA9IHRoaXMuZXRhcGVzLmZpbHRlcihlID0+IGUucHJpb3JpdHkgPT09ICdub3JtYWwnKS5sZW5ndGhcclxuICAgICAgY29uc3QgbG93ID0gdGhpcy5ldGFwZXMuZmlsdGVyKGUgPT4gZS5wcmlvcml0eSA9PT0gJ2xvdycpLmxlbmd0aFxyXG4gICAgICBjb25zdCBub25lID0gdGhpcy5ldGFwZXMuZmlsdGVyKGUgPT4gIWUucHJpb3JpdHkpLmxlbmd0aFxyXG5cclxuICAgICAgdGhpcy5jaGFydHMucHJpb3JpdHkgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbGFiZWxzOiBbJ1VyZ2VudCcsICdOb3JtYWwnLCAnQmFzc2UnLCAnTm9uIGTDqWZpbmllJ10sXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdOb21icmUgZFxcJ8OpdGFwZXMnLFxyXG4gICAgICAgICAgICBkYXRhOiBbdXJnZW50LCBub3JtYWwsIGxvdywgbm9uZV0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDIzOSwgNjgsIDY4LCAwLjgpJywgICAgLy8gUm91Z2VcclxuICAgICAgICAgICAgICAncmdiYSgyNDUsIDE1OCwgMTEsIDAuOCknLCAgIC8vIE9yYW5nZVxyXG4gICAgICAgICAgICAgICdyZ2JhKDE2LCAxODUsIDEyOSwgMC44KScsICAgLy8gVmVydFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1NiwgMTYzLCAxNzUsIDAuOCknICAgLy8gR3Jpc1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDIzOSwgNjgsIDY4LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjQ1LCAxNTgsIDExLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTYsIDE4NSwgMTI5LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTU2LCAxNjMsIDE3NSwgMSknXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDhcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHRpY2tzOiB7IHN0ZXBTaXplOiAxIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBmb3JtYXREYXRlKGRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKCFkYXRlU3RyaW5nKSByZXR1cm4gJydcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmcpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInKVxyXG4gICAgfSxcclxuICAgIGZvcm1hdERhdGVSZWxhdGl2ZShkYXRlU3RyaW5nKSB7XHJcbiAgICAgIGlmICghZGF0ZVN0cmluZykgcmV0dXJuICcnXHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKVxyXG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgICAgY29uc3QgZGlmZlRpbWUgPSBkYXRlIC0gdG9kYXlcclxuICAgICAgY29uc3QgZGlmZkRheXMgPSBNYXRoLmNlaWwoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZGlmZkRheXMgPCAwKSByZXR1cm4gJ0VuIHJldGFyZCdcclxuICAgICAgaWYgKGRpZmZEYXlzID09PSAwKSByZXR1cm4gXCJBdWpvdXJkJ2h1aVwiXHJcbiAgICAgIGlmIChkaWZmRGF5cyA9PT0gMSkgcmV0dXJuICdEZW1haW4nXHJcbiAgICAgIGlmIChkaWZmRGF5cyA8PSA3KSByZXR1cm4gYERhbnMgJHtkaWZmRGF5c30gam91cnNgXHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGUoZGF0ZVN0cmluZylcclxuICAgIH0sXHJcbiAgICBnZXREYXRlQmFkZ2VWYXJpYW50KGRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKCFkYXRlU3RyaW5nKSByZXR1cm4gJ2dyYXknXHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKVxyXG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgICAgY29uc3QgZGlmZkRheXMgPSBNYXRoLmNlaWwoKGRhdGUgLSB0b2RheSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZGlmZkRheXMgPCAwKSByZXR1cm4gJ2RhbmdlcidcclxuICAgICAgaWYgKGRpZmZEYXlzIDw9IDMpIHJldHVybiAnd2FybmluZydcclxuICAgICAgcmV0dXJuICdpbmZvJ1xyXG4gICAgfSxcclxuICAgIGdldFRpbWVsaW5lQ2xhc3MoZGF0ZVN0cmluZykge1xyXG4gICAgICBjb25zdCB2YXJpYW50ID0gdGhpcy5nZXREYXRlQmFkZ2VWYXJpYW50KGRhdGVTdHJpbmcpXHJcbiAgICAgIHJldHVybiBgdGltZWxpbmUtJHt2YXJpYW50fWBcclxuICAgIH0sXHJcbiAgICBnb1RvS2FuYmFuKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCduYXZpZ2F0ZScsICdrYW5iYW4nKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5kYXNoYm9hcmQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBhbmltYXRpb246IGZhZGVJbiB2YXIoLS10cmFuc2l0aW9uLXNsb3cpO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuLmRhc2hib2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUgaDIge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXNtKSAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogS1BJIENhcmRzICovXHJcbi5rcGktZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi5rcGktY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctcHJpbWFyeSksIHZhcigtLWJnLXNlY29uZGFyeSkpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmtwaS1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5rcGktaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4ua3BpLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLXhzKTtcclxufVxyXG5cclxuLmtwaS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5rcGktdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi50b3RhbC1jYXJkIC5rcGktaWNvbiB7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxyXG4ucHJvZ3Jlc3MtY2FyZCAua3BpLWljb24geyBjb2xvcjogdmFyKC0td2FybmluZyk7IH1cclxuLmRvbmUtY2FyZCAua3BpLWljb24geyBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7IH1cclxuLmNvbXBsZXRpb24tY2FyZCAua3BpLWljb24geyBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTsgfVxyXG5cclxuLmtwaS1wcm9ncmVzcy1iYXIge1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW1kKTtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5rcGktcHJvZ3Jlc3MtZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tcHJpbWFyeSksIHZhcigtLXNlY29uZGFyeSkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjM1LCAxKTtcclxufVxyXG5cclxuLyogQ2hhcnRzIEdyaWQgKi9cclxuLmNoYXJ0cy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UteGwpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmNoYXJ0LWNhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4uY2hhcnQtdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGltZWxpbmUgKi9cclxuLnRpbWVsaW5lLWNhcmQge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XHJcbn1cclxuXHJcbi50aW1lbGluZS1kYW5nZXIgeyBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tZXJyb3IpOyB9XHJcbi50aW1lbGluZS13YXJuaW5nIHsgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXdhcm5pbmcpOyB9XHJcbi50aW1lbGluZS1pbmZvIHsgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWluZm8pOyB9XHJcblxyXG4udGltZWxpbmUtZG90IHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50aW1lbGluZS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2Utc20pIDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50aW1lbGluZS1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmVtcHR5LXRpbWVsaW5lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMnhsKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbn1cclxuXHJcbi5lbXB0eS1pY29uIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLyogVXJnZW50IExpc3QgKi9cclxuLnVyZ2VudC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3LCAjZmRlNjhhKTtcclxufVxyXG5cclxuLnVyZ2VudC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi51cmdlbnQtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1lcnJvcik7XHJcbn1cclxuXHJcbi51cmdlbnQtaXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbn1cclxuXHJcbi51cmdlbnQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4udXJnZW50LWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi51cmdlbnQtY29udGVudCBoNCB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2UteHMpIDA7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4udXJnZW50LWNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2Utc20pIDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4udXJnZW50LW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jaGFydHMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLmtwaS1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZXRhcGVzLWthbmJhblwiPlxyXG4gICAgPCEtLSBIZWFkZXIgbW9kZXJuaXPDqSBhdmVjIGZpbHRyZXMgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwia2FuYmFuLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+8J+TiyBTdWl2aSBkZXMgw4l0YXBlczwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+Q3LDqWF0aW9uIGQnRW50cmVwcmlzZSAtIE1vbiBBc3Npc3RhbnQgTnVtw6lyaXF1ZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFjdGlvbnNcIj5cclxuICAgICAgICAgIDxCdXR0b24gQGNsaWNrPVwic2hvd0FkZE1vZGFsID0gdHJ1ZVwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj7inKg8L3NwYW4+IE5vdXZlbGxlIMOJdGFwZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPCEtLSBCYXJyZSBkZSByZWNoZXJjaGUgZXQgZmlsdHJlcyAtLT5cclxuICAgICAgPENhcmQgY2xhc3M9XCJmaWx0ZXJzLWNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVycy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VhcmNoLWljb25cIj7wn5SNPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5XCIgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXIgdW5lIMOpdGFwZS4uLlwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1pZj1cInNlYXJjaFF1ZXJ5XCIgQGNsaWNrPVwic2VhcmNoUXVlcnkgPSAnJ1wiIGNsYXNzPVwiY2xlYXItc2VhcmNoXCI+4pyVPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcnNcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic29ydEJ5XCIgY2xhc3M9XCJmaWx0ZXItc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9yZHJlXCI+8J+TiiBPcmRyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXRlLWFzY1wiPvCfk4UgRGF0ZSAocGx1cyBhbmNpZW5uZSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGF0ZS1kZXNjXCI+8J+ThSBEYXRlIChwbHVzIHLDqWNlbnRlKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbHBoYVwiPvCflKQgQWxwaGFiw6l0aXF1ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImZpbHRlclByaW9yaXR5XCIgY2xhc3M9XCJmaWx0ZXItc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPlRvdXRlcyBwcmlvcml0w6lzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVyZ2VudFwiPvCflLQgVXJnZW50PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vcm1hbFwiPvCfn6EgTm9ybWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPvCfn6IgQmFzc2U8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IHYtaWY9XCJzZWFyY2hRdWVyeSB8fCBmaWx0ZXJQcmlvcml0eSAhPT0gJ2FsbCdcIiBjbGFzcz1cImFjdGl2ZS1maWx0ZXJzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbHRlci1sYWJlbFwiPkZpbHRyZXMgYWN0aWZzIDo8L3NwYW4+XHJcbiAgICAgICAgICA8QmFkZ2Ugdi1pZj1cInNlYXJjaFF1ZXJ5XCIgdmFyaWFudD1cImluZm9cIiBAY2xpY2s9XCJzZWFyY2hRdWVyeSA9ICcnXCI+XHJcbiAgICAgICAgICAgIPCflI0gXCJ7eyBzZWFyY2hRdWVyeSB9fVwiIOKclVxyXG4gICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZmlsdGVyUHJpb3JpdHkgIT09ICdhbGwnXCIgdmFyaWFudD1cIndhcm5pbmdcIiBAY2xpY2s9XCJmaWx0ZXJQcmlvcml0eSA9ICdhbGwnXCI+XHJcbiAgICAgICAgICAgIHt7IGdldFByaW9yaXR5TGFiZWwoZmlsdGVyUHJpb3JpdHkpIH19IOKclVxyXG4gICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICBcclxuICAgICAgPCEtLSBCYXJyZSBkZSBwcm9ncmVzc2lvbiBtb2Rlcm5pc8OpZSAtLT5cclxuICAgICAgPENhcmQgY2xhc3M9XCJwcm9ncmVzcy1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWhlYWRlclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1sYWJlbFwiPlByb2dyZXNzaW9uIGdsb2JhbGU8L3NwYW4+XHJcbiAgICAgICAgICA8QmFkZ2UgOnZhcmlhbnQ9XCJwcm9ncmVzc1ZhcmlhbnRcIiBzaXplPVwibGdcIiBwaWxsPnt7IHByb2dyZXNzaW9uIH19JTwvQmFkZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWZpbGxcIiA6c3R5bGU9XCJ7IHdpZHRoOiBwcm9ncmVzc2lvbiArICclJyB9XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJwcm9ncmVzc2lvbiA+IDEwXCIgY2xhc3M9XCJwcm9ncmVzcy10ZXh0XCI+e3sgcHJvZ3Jlc3Npb24gfX0lPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXN0YXRzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LmRvbmUubGVuZ3RoIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5UZXJtaW7DqWVzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LmluX3Byb2dyZXNzLmxlbmd0aCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LWxhYmVsXCI+RW4gY291cnM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZVwiPnt7IGZpbHRlcmVkRXRhcGVzQnlTdGF0dXQudG9kby5sZW5ndGggfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPsOAIGZhaXJlPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQm9hcmQgS2FuYmFuIGF2ZWMgRHJhZyAmIERyb3AgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwia2FuYmFuLWJvYXJkXCI+XHJcbiAgICAgIDwhLS0gQ29sb25uZSDDgCBGQUlSRSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImthbmJhbi1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlciB0b2RvLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi10aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi1pY29uXCI+8J+TnTwvc3Bhbj5cclxuICAgICAgICAgICAgPGgzPsOAIEZhaXJlPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJncmF5XCIgcGlsbD57eyBmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LnRvZG8ubGVuZ3RoIH19PC9CYWRnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkcmFnZ2FibGVcclxuICAgICAgICAgICAgdi1tb2RlbD1cInRvZG9MaXN0XCJcclxuICAgICAgICAgICAgZ3JvdXA9XCJldGFwZXNcIlxyXG4gICAgICAgICAgICBpdGVtLWtleT1cImlkXCJcclxuICAgICAgICAgICAgQGNoYW5nZT1cIm9uRHJhZ1VwZGF0ZSgndG9kbycpXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJkcmFnZ2FibGUtbGlzdFwiXHJcbiAgICAgICAgICAgIDphbmltYXRpb249XCIyMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2l0ZW09XCJ7IGVsZW1lbnQ6IGV0YXBlIH1cIj5cclxuICAgICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwia2FuYmFuLWNhcmQgdG9kby1jYXJkXCJcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZWRpdEV0YXBlKGV0YXBlKVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGV0YXBlLnRpdHJlIH19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZXRhcGUucHJpb3JpdHlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIDp2YXJpYW50PVwiZ2V0UHJpb3JpdHlWYXJpYW50KGV0YXBlLnByaW9yaXR5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFByaW9yaXR5SWNvbihldGFwZS5wcmlvcml0eSkgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImV0YXBlLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3sgZXRhcGUuZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHYtaWY9XCJldGFwZS5kYXRlTGltaXRlXCIgOnZhcmlhbnQ9XCJnZXREYXRlVmFyaWFudChldGFwZS5kYXRlTGltaXRlKVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg8J+ThSB7eyBmb3JtYXREYXRlKGV0YXBlLmRhdGVMaW1pdGUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2Ugdi1pZj1cImV0YXBlLmNhdGVnb3J5XCIgdmFyaWFudD1cImdyYXlcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGV0YXBlLmNhdGVnb3J5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJjaGFuZ2VTdGF0dXQoZXRhcGUsICdpbl9wcm9ncmVzcycpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4pa277iPIETDqW1hcnJlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cImRlbGV0ZUV0YXBlKGV0YXBlKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDwn5eR77iPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L2RyYWdnYWJsZT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiB2LWlmPVwiZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC50b2RvLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiZW1wdHktc3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlbXB0eS1pY29uXCI+4pyFPC9zcGFuPlxyXG4gICAgICAgICAgICA8cD57eyBzZWFyY2hRdWVyeSA/ICdBdWN1biByw6lzdWx0YXQnIDogJ0F1Y3VuZSDDqXRhcGUgw6AgZmFpcmUnIH19PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG48IS0tIENvbG9ubmUgRU4gQ09VUlMgLS0+XHJcbjxkaXYgY2xhc3M9XCJrYW5iYW4tY29sdW1uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbHVtbi1oZWFkZXIgcHJvZ3Jlc3MtaGVhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXRpdGxlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLWljb25cIj7ij7M8L3NwYW4+XHJcbiAgICAgIDxoMz5FbiBDb3VyczwvaDM+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxCYWRnZSB2YXJpYW50PVwid2FybmluZ1wiIHBpbGw+e3sgZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC5pbl9wcm9ncmVzcy5sZW5ndGggfX08L0JhZGdlPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb2x1bW4tY29udGVudFwiPlxyXG4gICAgPGRyYWdnYWJsZVxyXG4gICAgICB2LW1vZGVsPVwiaW5Qcm9ncmVzc0xpc3RcIlxyXG4gICAgICBncm91cD1cImV0YXBlc1wiXHJcbiAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG4gICAgICBAY2hhbmdlPVwib25EcmFnVXBkYXRlKCdpbl9wcm9ncmVzcycpXCJcclxuICAgICAgY2xhc3M9XCJkcmFnZ2FibGUtbGlzdFwiXHJcbiAgICAgIDphbmltYXRpb249XCIyMDBcIlxyXG4gICAgPlxyXG4gICAgICA8dGVtcGxhdGUgI2l0ZW09XCJ7IGVsZW1lbnQ6IGV0YXBlIH1cIj5cclxuICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgIGNsYXNzPVwia2FuYmFuLWNhcmQgcHJvZ3Jlc3MtY2FyZFwiXHJcbiAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgIEBjbGljaz1cImVkaXRFdGFwZShldGFwZSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bHNlLWRvdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPkVuIGNvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBldGFwZS50aXRyZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIFxyXG4gICAgICAgICAgICAgICAgdi1pZj1cImV0YXBlLnByaW9yaXR5XCIgXHJcbiAgICAgICAgICAgICAgICA6dmFyaWFudD1cImdldFByaW9yaXR5VmFyaWFudChldGFwZS5wcmlvcml0eSlcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7eyBnZXRQcmlvcml0eUljb24oZXRhcGUucHJpb3JpdHkpIH19XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIHYtaWY9XCJldGFwZS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiY2FyZC1kZXNjcmlwdGlvblwiPnt7IGV0YXBlLmRlc2NyaXB0aW9uIH19PC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbWV0YVwiPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZXRhcGUuZGF0ZURlYnV0XCIgdmFyaWFudD1cImluZm9cIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgIPCfmoAge3sgZm9ybWF0RGF0ZShldGFwZS5kYXRlRGVidXQpIH19XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8QmFkZ2Ugdi1pZj1cImV0YXBlLmNhdGVnb3J5XCIgdmFyaWFudD1cImdyYXlcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgIHt7IGV0YXBlLmNhdGVnb3J5IH19XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHRlbXBsYXRlICNmb290ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJjaGFuZ2VTdGF0dXQoZXRhcGUsICd0b2RvJylcIiBcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiIFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDirIXvuI9cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJjaGFuZ2VTdGF0dXQoZXRhcGUsICdkb25lJylcIiBcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCIgXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOKchSBUZXJtaW5lclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9kcmFnZ2FibGU+XHJcbiAgICBcclxuICAgIDxkaXYgdi1pZj1cImZpbHRlcmVkRXRhcGVzQnlTdGF0dXQuaW5fcHJvZ3Jlc3MubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJlbXB0eS1zdGF0ZVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImVtcHR5LWljb25cIj7wn5KkPC9zcGFuPlxyXG4gICAgICA8cD57eyBzZWFyY2hRdWVyeSA/ICdBdWN1biByw6lzdWx0YXQnIDogJ0F1Y3VuZSDDqXRhcGUgZW4gY291cnMnIH19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBDb2xvbm5lIFRFUk1JTsOJIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwia2FuYmFuLWNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4taGVhZGVyIGRvbmUtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLWljb25cIj7inIU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMz5UZXJtaW7DqTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic3VjY2Vzc1wiIHBpbGw+e3sgZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC5kb25lLmxlbmd0aCB9fTwvQmFkZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkb25lTGlzdFwiXHJcbiAgICAgICAgICAgIGdyb3VwPVwiZXRhcGVzXCJcclxuICAgICAgICAgICAgaXRlbS1rZXk9XCJpZFwiXHJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkRyYWdVcGRhdGUoJ2RvbmUnKVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZHJhZ2dhYmxlLWxpc3RcIlxyXG4gICAgICAgICAgICA6YW5pbWF0aW9uPVwiMjAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwieyBlbGVtZW50OiBldGFwZSB9XCI+XHJcbiAgICAgICAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImthbmJhbi1jYXJkIGRvbmUtY2FyZFwiXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cImVkaXRFdGFwZShldGFwZSlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtc3RhdHVzIHN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1Y2Nlc3MtaWNvblwiPvCfjok8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVybWluw6k8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgZXRhcGUudGl0cmUgfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZXRhcGUuZGVzY3JpcHRpb25cIiBjbGFzcz1cImNhcmQtZGVzY3JpcHRpb25cIj57eyBldGFwZS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2Ugdi1pZj1cImV0YXBlLmNhdGVnb3J5XCIgdmFyaWFudD1cImdyYXlcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGV0YXBlLmNhdGVnb3J5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJjaGFuZ2VTdGF0dXQoZXRhcGUsICdpbl9wcm9ncmVzcycpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4oap77iPIFLDqW91dnJpclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC9kcmFnZ2FibGU+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgdi1pZj1cImZpbHRlcmVkRXRhcGVzQnlTdGF0dXQuZG9uZS5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZW1wdHktaWNvblwiPvCfjq88L3NwYW4+XHJcbiAgICAgICAgICAgIDxwPnt7IHNlYXJjaFF1ZXJ5ID8gJ0F1Y3VuIHLDqXN1bHRhdCcgOiAnQXVjdW5lIMOpdGFwZSB0ZXJtaW7DqWUnIH19PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBNb2RhbCBhdmVjIGNoYW1wcyBkZSBwcmlvcml0w6kgZXQgY2F0w6lnb3JpZSAtLT5cclxuICAgIDxNb2RhbCBcclxuICAgICAgOnNob3c9XCJzaG93QWRkTW9kYWwgfHwgISFlZGl0aW5nRXRhcGVcIiBcclxuICAgICAgOnRpdGxlPVwiZWRpdGluZ0V0YXBlID8gJ01vZGlmaWVyIGxcXCfDqXRhcGUnIDogJ05vdXZlbGxlIMOpdGFwZSdcIlxyXG4gICAgICBAY2xvc2U9XCJjbG9zZU1vZGFsXCJcclxuICAgICAgc2l6ZT1cImxnXCJcclxuICAgID5cclxuICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic2F2ZUV0YXBlXCIgY2xhc3M9XCJldGFwZS1mb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5UaXRyZSA8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50aXRyZVwiIFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiDDiXR1ZGUgZGUgbWFyY2jDqVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UHJpb3JpdMOpPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZm9ybS5wcmlvcml0eVwiIGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BdWN1bmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXJnZW50XCI+8J+UtCBVcmdlbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9ybWFsXCI+8J+foSBOb3JtYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+8J+foiBCYXNzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Q2F0w6lnb3JpZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5jYXRlZ29yeVwiIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBBZG1pbmlzdHJhdGlmLCBGb3JtYXRpb24uLi5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIiBcclxuICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkTDqWNyaXZleiBjZXR0ZSDDqXRhcGUuLi5cIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+8J+ThSBEYXRlIGRlIGTDqWJ1dDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5kYXRlRGVidXRcIiB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+4o+wIERhdGUgbGltaXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmRhdGVMaW1pdGVcIiB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj7wn5OdIE5vdGVzPC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubm90ZXNcIiBcclxuICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFqb3V0ZXogZGVzIG5vdGVzLCBsaWVucywgb3UgaW5mb3JtYXRpb25zIHN1cHBsw6ltZW50YWlyZXMuLi5cIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPlxyXG4gICAgICAgIDxCdXR0b24gQGNsaWNrPVwiY2xvc2VNb2RhbFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgIEFubnVsZXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIEBjbGljaz1cInNhdmVFdGFwZVwiIDpsb2FkaW5nPVwic2F2aW5nXCI+XHJcbiAgICAgICAgICB7eyBlZGl0aW5nRXRhcGUgPyAn8J+SviBNZXR0cmUgw6Agam91cicgOiAn4pyoIENyw6llcicgfX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvTW9kYWw+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZHJhZ2dhYmxlIGZyb20gJ3Z1ZWRyYWdnYWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRXRhcGVzS2FuYmFuJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBkcmFnZ2FibGVcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldGFwZXM6IFtdLFxyXG4gICAgICBzaG93QWRkTW9kYWw6IGZhbHNlLFxyXG4gICAgICBlZGl0aW5nRXRhcGU6IG51bGwsXHJcbiAgICAgIHNhdmluZzogZmFsc2UsXHJcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcclxuICAgICAgc29ydEJ5OiAnb3JkcmUnLFxyXG4gICAgICBmaWx0ZXJQcmlvcml0eTogJ2FsbCcsXHJcbiAgICAgIGZvcm06IHtcclxuICAgICAgICB0aXRyZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGRhdGVEZWJ1dDogJycsXHJcbiAgICAgICAgZGF0ZUxpbWl0ZTogJycsXHJcbiAgICAgICAgbm90ZXM6ICcnLFxyXG4gICAgICAgIHN0YXR1dDogJ3RvZG8nLFxyXG4gICAgICAgIG9yZHJlOiAwLFxyXG4gICAgICAgIHByaW9yaXR5OiAnJyxcclxuICAgICAgICBjYXRlZ29yeTogJydcclxuICAgICAgfSxcclxuICAgICAgLy8gTGlzdGVzIGxvY2FsZXMgcG91ciBsZSBkcmFnICYgZHJvcFxyXG4gICAgICB0b2RvTGlzdDogW10sXHJcbiAgICAgIGluUHJvZ3Jlc3NMaXN0OiBbXSxcclxuICAgICAgZG9uZUxpc3Q6IFtdXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgZmlsdGVyZWRFdGFwZXMoKSB7XHJcbiAgICAgIGxldCBmaWx0ZXJlZCA9IFsuLi50aGlzLmV0YXBlc11cclxuICAgICAgXHJcbiAgICAgIC8vIFJlY2hlcmNoZVxyXG4gICAgICBpZiAodGhpcy5zZWFyY2hRdWVyeSkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgZmlsdGVyZWQgPSBmaWx0ZXJlZC5maWx0ZXIoZSA9PiBcclxuICAgICAgICAgIGUudGl0cmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkgfHxcclxuICAgICAgICAgIChlLmRlc2NyaXB0aW9uICYmIGUuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpIHx8XHJcbiAgICAgICAgICAoZS5jYXRlZ29yeSAmJiBlLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRmlsdHJlIHByaW9yaXTDqVxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJQcmlvcml0eSAhPT0gJ2FsbCcpIHtcclxuICAgICAgICBmaWx0ZXJlZCA9IGZpbHRlcmVkLmZpbHRlcihlID0+IGUucHJpb3JpdHkgPT09IHRoaXMuZmlsdGVyUHJpb3JpdHkpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFRyaVxyXG4gICAgICBpZiAodGhpcy5zb3J0QnkgPT09ICdkYXRlLWFzYycpIHtcclxuICAgICAgICBmaWx0ZXJlZC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkYXRlQSA9IGEuZGF0ZUxpbWl0ZSA/IG5ldyBEYXRlKGEuZGF0ZUxpbWl0ZSkgOiBuZXcgRGF0ZSgnOTk5OS0xMi0zMScpXHJcbiAgICAgICAgICBjb25zdCBkYXRlQiA9IGIuZGF0ZUxpbWl0ZSA/IG5ldyBEYXRlKGIuZGF0ZUxpbWl0ZSkgOiBuZXcgRGF0ZSgnOTk5OS0xMi0zMScpXHJcbiAgICAgICAgICByZXR1cm4gZGF0ZUEgLSBkYXRlQlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3J0QnkgPT09ICdkYXRlLWRlc2MnKSB7XHJcbiAgICAgICAgZmlsdGVyZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZUEgPSBhLmRhdGVMaW1pdGUgPyBuZXcgRGF0ZShhLmRhdGVMaW1pdGUpIDogbmV3IERhdGUoJzE5MDAtMDEtMDEnKVxyXG4gICAgICAgICAgY29uc3QgZGF0ZUIgPSBiLmRhdGVMaW1pdGUgPyBuZXcgRGF0ZShiLmRhdGVMaW1pdGUpIDogbmV3IERhdGUoJzE5MDAtMDEtMDEnKVxyXG4gICAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUFcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29ydEJ5ID09PSAnYWxwaGEnKSB7XHJcbiAgICAgICAgZmlsdGVyZWQuc29ydCgoYSwgYikgPT4gYS50aXRyZS5sb2NhbGVDb21wYXJlKGIudGl0cmUpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IGEub3JkcmUgLSBiLm9yZHJlKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gZmlsdGVyZWRcclxuICAgIH0sXHJcbiAgICBmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0KCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvZG86IHRoaXMuZmlsdGVyZWRFdGFwZXMuZmlsdGVyKGUgPT4gZS5zdGF0dXQgPT09ICd0b2RvJyksXHJcbiAgICAgICAgaW5fcHJvZ3Jlc3M6IHRoaXMuZmlsdGVyZWRFdGFwZXMuZmlsdGVyKGUgPT4gZS5zdGF0dXQgPT09ICdpbl9wcm9ncmVzcycpLFxyXG4gICAgICAgIGRvbmU6IHRoaXMuZmlsdGVyZWRFdGFwZXMuZmlsdGVyKGUgPT4gZS5zdGF0dXQgPT09ICdkb25lJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb2dyZXNzaW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5ldGFwZXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxyXG4gICAgICBjb25zdCBkb25lID0gdGhpcy5ldGFwZXMuZmlsdGVyKGUgPT4gZS5zdGF0dXQgPT09ICdkb25lJykubGVuZ3RoXHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKChkb25lIC8gdGhpcy5ldGFwZXMubGVuZ3RoKSAqIDEwMClcclxuICAgIH0sXHJcbiAgICBwcm9ncmVzc1ZhcmlhbnQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzaW9uID09PSAxMDApIHJldHVybiAnc3VjY2VzcydcclxuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3Npb24gPj0gNTApIHJldHVybiAnd2FybmluZydcclxuICAgICAgcmV0dXJuICdpbmZvJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIC8vIFN5bmNocm9uaXNlIGxlcyBsaXN0ZXMgbG9jYWxlcyBxdWFuZCBsZXMgZG9ubsOpZXMgY2hhbmdlbnRcclxuICAgIGZpbHRlcmVkRXRhcGVzQnlTdGF0dXQ6IHtcclxuICAgICAgaGFuZGxlcihuZXdWYWwpIHtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0ID0gWy4uLm5ld1ZhbC50b2RvXVxyXG4gICAgICAgIHRoaXMuaW5Qcm9ncmVzc0xpc3QgPSBbLi4ubmV3VmFsLmluX3Byb2dyZXNzXVxyXG4gICAgICAgIHRoaXMuZG9uZUxpc3QgPSBbLi4ubmV3VmFsLmRvbmVdXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZXA6IHRydWUsXHJcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMubG9hZEV0YXBlcygpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBsb2FkRXRhcGVzKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZXRhcGVzJylcclxuICAgICAgICB0aGlzLmV0YXBlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBjaGFyZ2VtZW50IMOpdGFwZXM6JywgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBzYXZlRXRhcGUoKSB7XHJcbiAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZWRpdGluZ0V0YXBlIFxyXG4gICAgICAgICAgPyBgL2FwaS9ldGFwZXMvJHt0aGlzLmVkaXRpbmdFdGFwZS5pZH1gXHJcbiAgICAgICAgICA6ICcvYXBpL2V0YXBlcydcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtZXRob2QgPSB0aGlzLmVkaXRpbmdFdGFwZSA/ICdQVVQnIDogJ1BPU1QnXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZm9ybSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkRXRhcGVzKClcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgc2F1dmVnYXJkZTonLCBlcnJvcilcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBjaGFuZ2VTdGF0dXQoZXRhcGUsIG5ld1N0YXR1dCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL2V0YXBlcy8ke2V0YXBlLmlkfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgIC4uLmV0YXBlLCBcclxuICAgICAgICAgICAgc3RhdHV0OiBuZXdTdGF0dXQsXHJcbiAgICAgICAgICAgIGRhdGVEZWJ1dDogbmV3U3RhdHV0ID09PSAnaW5fcHJvZ3Jlc3MnICYmICFldGFwZS5kYXRlRGVidXQgXHJcbiAgICAgICAgICAgICAgPyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSBcclxuICAgICAgICAgICAgICA6IGV0YXBlLmRhdGVEZWJ1dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEV0YXBlcygpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGNoYW5nZW1lbnQgc3RhdHV0OicsIGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZGVsZXRlRXRhcGUoZXRhcGUpIHtcclxuICAgICAgaWYgKCFjb25maXJtKGBTdXBwcmltZXIgbCfDqXRhcGUgXCIke2V0YXBlLnRpdHJlfVwiID9gKSkgcmV0dXJuXHJcbiAgICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL2V0YXBlcy8ke2V0YXBlLmlkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KVxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEV0YXBlcygpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIHN1cHByZXNzaW9uOicsIGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWRpdEV0YXBlKGV0YXBlKSB7XHJcbiAgICAgIHRoaXMuZWRpdGluZ0V0YXBlID0gZXRhcGVcclxuICAgICAgdGhpcy5mb3JtID0ge1xyXG4gICAgICAgIHRpdHJlOiBldGFwZS50aXRyZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZXRhcGUuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgZGF0ZURlYnV0OiBldGFwZS5kYXRlRGVidXQgfHwgJycsXHJcbiAgICAgICAgZGF0ZUxpbWl0ZTogZXRhcGUuZGF0ZUxpbWl0ZSB8fCAnJyxcclxuICAgICAgICBub3RlczogZXRhcGUubm90ZXMgfHwgJycsXHJcbiAgICAgICAgc3RhdHV0OiBldGFwZS5zdGF0dXQsXHJcbiAgICAgICAgb3JkcmU6IGV0YXBlLm9yZHJlLFxyXG4gICAgICAgIHByaW9yaXR5OiBldGFwZS5wcmlvcml0eSB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogZXRhcGUuY2F0ZWdvcnkgfHwgJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgIHRoaXMuc2hvd0FkZE1vZGFsID0gZmFsc2VcclxuICAgICAgdGhpcy5lZGl0aW5nRXRhcGUgPSBudWxsXHJcbiAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2VcclxuICAgICAgdGhpcy5mb3JtID0ge1xyXG4gICAgICAgIHRpdHJlOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgZGF0ZURlYnV0OiAnJyxcclxuICAgICAgICBkYXRlTGltaXRlOiAnJyxcclxuICAgICAgICBub3RlczogJycsXHJcbiAgICAgICAgc3RhdHV0OiAndG9kbycsXHJcbiAgICAgICAgb3JkcmU6IDAsXHJcbiAgICAgICAgcHJpb3JpdHk6ICcnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gTm91dmVsbGUgbcOpdGhvZGUgcG91ciBnw6lyZXIgbGUgZHJhZ1xyXG4gICAgb25EcmFnVXBkYXRlKHN0YXR1dCkge1xyXG4gICAgICAvLyBDZXR0ZSBmb25jdGlvbiBlc3QgYXBwZWzDqWUgcXVhbmQgdW5lIGxpc3RlIGNoYW5nZVxyXG4gICAgICByZXR1cm4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmFkZGVkKSB7XHJcbiAgICAgICAgICBjb25zdCBldGFwZSA9IGV2ZW50LmFkZGVkLmVsZW1lbnRcclxuICAgICAgICAgIGlmIChldGFwZS5zdGF0dXQgIT09IHN0YXR1dCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUV0YXBlU3RhdHV0KGV0YXBlLCBzdGF0dXQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgdXBkYXRlRXRhcGVTdGF0dXQoZXRhcGUsIG5ld1N0YXR1dCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoKGAvYXBpL2V0YXBlcy8ke2V0YXBlLmlkfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXHJcbiAgICAgICAgICAgIC4uLmV0YXBlLCBcclxuICAgICAgICAgICAgc3RhdHV0OiBuZXdTdGF0dXQsXHJcbiAgICAgICAgICAgIGRhdGVEZWJ1dDogbmV3U3RhdHV0ID09PSAnaW5fcHJvZ3Jlc3MnICYmICFldGFwZS5kYXRlRGVidXQgXHJcbiAgICAgICAgICAgICAgPyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSBcclxuICAgICAgICAgICAgICA6IGV0YXBlLmRhdGVEZWJ1dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1ldCDDoCBqb3VyIGxvY2FsZW1lbnRcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXRhcGVzLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGV0YXBlLmlkKVxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgIHRoaXMuZXRhcGVzW2luZGV4XS5zdGF0dXQgPSBuZXdTdGF0dXRcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGNoYW5nZW1lbnQgc3RhdHV0OicsIGVycm9yKVxyXG4gICAgICAgIC8vIEVuIGNhcyBkJ2VycmV1ciwgcmVjaGFyZ2VcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRFdGFwZXMoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XHJcbiAgICAgIGlmICghZGF0ZVN0cmluZykgcmV0dXJuICcnXHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKVxyXG4gICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJylcclxuICAgIH0sXHJcbiAgICBnZXRQcmlvcml0eUljb24ocHJpb3JpdHkpIHtcclxuICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgdXJnZW50OiAn8J+UtCcsXHJcbiAgICAgICAgbm9ybWFsOiAn8J+foScsXHJcbiAgICAgICAgbG93OiAn8J+foidcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaWNvbnNbcHJpb3JpdHldIHx8ICcnXHJcbiAgICB9LFxyXG4gICAgZ2V0UHJpb3JpdHlWYXJpYW50KHByaW9yaXR5KSB7XHJcbiAgICAgIGNvbnN0IHZhcmlhbnRzID0ge1xyXG4gICAgICAgIHVyZ2VudDogJ2RhbmdlcicsXHJcbiAgICAgICAgbm9ybWFsOiAnd2FybmluZycsXHJcbiAgICAgICAgbG93OiAnc3VjY2VzcydcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdmFyaWFudHNbcHJpb3JpdHldIHx8ICdncmF5J1xyXG4gICAgfSxcclxuICAgIGdldFByaW9yaXR5TGFiZWwocHJpb3JpdHkpIHtcclxuICAgICAgY29uc3QgbGFiZWxzID0ge1xyXG4gICAgICAgIHVyZ2VudDogJ/CflLQgVXJnZW50JyxcclxuICAgICAgICBub3JtYWw6ICfwn5+hIE5vcm1hbCcsXHJcbiAgICAgICAgbG93OiAn8J+foiBCYXNzZSdcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGFiZWxzW3ByaW9yaXR5XSB8fCBwcmlvcml0eVxyXG4gICAgfSxcclxuICAgIGdldERhdGVWYXJpYW50KGRhdGVMaW1pdGUpIHtcclxuICAgICAgaWYgKCFkYXRlTGltaXRlKSByZXR1cm4gJ2dyYXknXHJcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICBjb25zdCBsaW1pdGUgPSBuZXcgRGF0ZShkYXRlTGltaXRlKVxyXG4gICAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguY2VpbCgobGltaXRlIC0gdG9kYXkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxyXG4gICAgICBcclxuICAgICAgaWYgKGRpZmZEYXlzIDwgMCkgcmV0dXJuICdkYW5nZXInXHJcbiAgICAgIGlmIChkaWZmRGF5cyA8PSA3KSByZXR1cm4gJ3dhcm5pbmcnXHJcbiAgICAgIHJldHVybiAnZ3JheSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uZXRhcGVzLWthbmJhbiB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpO1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIHZhcigtLXRyYW5zaXRpb24tc2xvdyk7XHJcbn1cclxuXHJcbi8qIEZpbHRyZXMgKi9cclxuLmZpbHRlcnMtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uZmlsdGVycy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpIHZhcigtLXNwYWNlLW1kKSB2YXIoLS1zcGFjZS1tZCkgM3JlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5jbGVhci1zZWFyY2gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5jbGVhci1zZWFyY2g6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMzAwKTtcclxufVxyXG5cclxuLmZpbHRlcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VsZWN0IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCkgdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VsZWN0OmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZmlsdGVyLXNlbGVjdDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5hY3RpdmUtZmlsdGVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW1kKTtcclxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTEwMCk7XHJcbn1cclxuXHJcbi5maWx0ZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYWN0aXZlLWZpbHRlcnMgLmJhZGdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIERyYWcgJiBEcm9wIGFtw6lsaW9yw6kgKi9cclxuLmRyYWdnYWJsZS1saXN0IHtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi5rYW5iYW4tY2FyZCB7XHJcbiAgY3Vyc29yOiBncmFiO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG59XHJcblxyXG4ua2FuYmFuLWNhcmQ6YWN0aXZlIHtcclxuICBjdXJzb3I6IGdyYWJiaW5nO1xyXG59XHJcblxyXG4uZHJhZy1jYXJkIHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMnhsKSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uZ2hvc3QtY2FyZCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuLmthbmJhbi1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIGgyIHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zbSkgMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLyogUHJvZ3Jlc3MgQ2FyZCAqL1xyXG4ucHJvZ3Jlc3MtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeSkgMCUsIHZhcigtLXNlY29uZGFyeSkgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLnByb2dyZXNzLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjM1LCAxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1kKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb2dyZXNzLWZpbGw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwwLjMpLCB0cmFuc3BhcmVudCk7XHJcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xyXG4gIHRvIHsgbGVmdDogMTAwJTsgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3MtdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnByb2dyZXNzLXN0YXRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5zdGF0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0LXZhbHVlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14cyk7XHJcbn1cclxuXHJcbi5zdGF0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLyogS2FuYmFuIEJvYXJkICovXHJcbi5rYW5iYW4tYm9hcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi5rYW5iYW4tY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5jb2x1bW4taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xyXG59XHJcblxyXG4uY29sdW1uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbn1cclxuXHJcbi5jb2x1bW4taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jb2x1bW4tdGl0bGUgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnRvZG8taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3LCAjZmRlNjhhKTtcclxuICBjb2xvcjogIzkyNDAwZTtcclxufVxyXG5cclxuLnByb2dyZXNzLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RkZDZmZSwgI2M0YjVmZCk7XHJcbiAgY29sb3I6ICM1YjIxYjY7XHJcbn1cclxuXHJcbi5kb25lLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2QxZmFlNSwgI2E3ZjNkMCk7XHJcbiAgY29sb3I6ICMwNjVmNDY7XHJcbn1cclxuXHJcbi5jb2x1bW4tY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qIEthbmJhbiBDYXJkcyAqL1xyXG4ua2FuYmFuLWNhcmQge1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50b2RvLWNhcmQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjU5ZTBiO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtY2FyZCB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM4YjVjZjY7XHJcbn1cclxuXHJcbi5kb25lLWNhcmQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTBiOTgxO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmRvbmUtY2FyZDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uY2FyZC1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteHMpIHZhcigtLXNwYWNlLW1kKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4uY2FyZC1zdGF0dXMuc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogI2QxZmFlNTtcclxuICBjb2xvcjogIzA2NWY0NjtcclxufVxyXG5cclxuLnB1bHNlLWRvdCB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMC41OyB9XHJcbn1cclxuXHJcbi5zdWNjZXNzLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXNtKSAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4uY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2UtbWQpIDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQtbWV0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jYXJkLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpIHZhcigtLXNwYWNlLWxnKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4vKiBFbXB0eSBTdGF0ZSAqL1xyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0yeGwpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxufVxyXG5cclxuLmVtcHR5LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi8qIEZvcm0gKi9cclxuLmV0YXBlLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dCB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAua2FuYmFuLWJvYXJkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXJzLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtYm94IHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlcnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXItc2VsZWN0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxzcGFuIDpjbGFzcz1cImJhZGdlQ2xhc3Nlc1wiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQmFkZ2UnLFxyXG4gIHByb3BzOiB7XHJcbiAgICB2YXJpYW50OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxyXG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4gWydwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbycsICdncmF5J10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdtZCcsXHJcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ3NtJywgJ21kJywgJ2xnJ10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9LFxyXG4gICAgcGlsbDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGJhZGdlQ2xhc3NlcygpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAnYmFkZ2UnLFxyXG4gICAgICAgIGBiYWRnZS0ke3RoaXMudmFyaWFudH1gLFxyXG4gICAgICAgIGBiYWRnZS0ke3RoaXMuc2l6ZX1gLFxyXG4gICAgICAgIHsgJ2JhZGdlLXBpbGwnOiB0aGlzLnBpbGwgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLmJhZGdlLXBpbGwge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxufVxyXG5cclxuLyogU2l6ZXMgKi9cclxuLmJhZGdlLXNtIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5iYWRnZS1tZCB7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uYmFkZ2UtbGcge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogVmFyaWFudHMgKi9cclxuLmJhZGdlLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2Utc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2Utd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2UtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2UtaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW5mbyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2UtZ3JheSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxidXR0b24gXHJcbiAgICA6Y2xhc3M9XCJidXR0b25DbGFzc2VzXCIgXHJcbiAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcclxuICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsICRldmVudClcIlxyXG4gID5cclxuICAgIDxzcGFuIHYtaWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJzcGlubmVyXCI+PC9zcGFuPlxyXG4gICAgPHNsb3Qgdi1lbHNlPjwvc2xvdD5cclxuICA8L2J1dHRvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQnV0dG9uJyxcclxuICBwcm9wczoge1xyXG4gICAgdmFyaWFudDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JywgLy8gcHJpbWFyeSwgc2Vjb25kYXJ5LCBzdWNjZXNzLCBkYW5nZXIsIGdob3N0XHJcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3N1Y2Nlc3MnLCAnZGFuZ2VyJywgJ2dob3N0J10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdtZCcsIC8vIHNtLCBtZCwgbGdcclxuICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IFsnc20nLCAnbWQnLCAnbGcnXS5pbmNsdWRlcyh2YWx1ZSlcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGxvYWRpbmc6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBidXR0b25DbGFzc2VzKCkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgICdidG4nLFxyXG4gICAgICAgIGBidG4tJHt0aGlzLnZhcmlhbnR9YCxcclxuICAgICAgICBgYnRuLSR7dGhpcy5zaXplfWAsXHJcbiAgICAgICAgeyAnYnRuLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyogU2l6ZXMgKi9cclxuLmJ0bi1zbSB7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmJ0bi1tZCB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuLWxnIHtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxufVxyXG5cclxuLyogVmFyaWFudHMgKi9cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5KSAwJSwgdmFyKC0tc2Vjb25kYXJ5KSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyOm5vdCguYnRuLWRpc2FibGVkKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTphY3RpdmU6bm90KC5idG4tZGlzYWJsZWQpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KC5idG4tZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTIwMCk7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzczpob3Zlcjpub3QoLmJ0bi1kaXNhYmxlZCkge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KC5idG4tZGlzYWJsZWQpIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5idG4tZ2hvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLmJ0bi1naG9zdDpob3Zlcjpub3QoLmJ0bi1kaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogRGlzYWJsZWQgKi9cclxuLmJ0bi1kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNwaW5uZXIgKi9cclxuLnNwaW5uZXIge1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAwLjZzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cImNhcmRDbGFzc2VzXCI+XHJcbiAgICA8ZGl2IHYtaWY9XCIkc2xvdHMuaGVhZGVyXCIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwiJHNsb3RzLmZvb3RlclwiIGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdDYXJkJyxcclxuICBwcm9wczoge1xyXG4gICAgaG92ZXJhYmxlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyZWQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJ21kJywgLy8gc20sIG1kLCBsZywgbm9uZVxyXG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4gWydub25lJywgJ3NtJywgJ21kJywgJ2xnJ10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY2FyZENsYXNzZXMoKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgJ2NhcmQnLFxyXG4gICAgICAgIGBjYXJkLXBhZGRpbmctJHt0aGlzLnBhZGRpbmd9YCxcclxuICAgICAgICB7ICdjYXJkLWhvdmVyYWJsZSc6IHRoaXMuaG92ZXJhYmxlIH0sXHJcbiAgICAgICAgeyAnY2FyZC1ib3JkZXJlZCc6IHRoaXMuYm9yZGVyZWQgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG4gIGFuaW1hdGlvbjogc2NhbGVJbiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG59XHJcblxyXG4uY2FyZC1ob3ZlcmFibGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaG92ZXJhYmxlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxufVxyXG5cclxuLmNhcmQtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxufVxyXG5cclxuLyogUGFkZGluZyB2YXJpYW50cyAqL1xyXG4uY2FyZC1wYWRkaW5nLW5vbmUgLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhcmQtcGFkZGluZy1zbSAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi5jYXJkLXBhZGRpbmctbWQgLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uY2FyZC1wYWRkaW5nLWxnIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFRyYW5zaXRpb24gbmFtZT1cIm1vZGFsXCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJzaG93XCIgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCIgQGNsaWNrLnNlbGY9XCJjbG9zZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCIgOmNsYXNzPVwiYG1vZGFsLSR7c2l6ZX1gXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cclxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY2xvc2VcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCI+4pyVPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCIkc2xvdHMuZm9vdGVyXCIgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9UcmFuc2l0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdNb2RhbCcsXHJcbiAgcHJvcHM6IHtcclxuICAgIHNob3c6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdtZCcsIC8vIHNtLCBtZCwgbGcsIHhsXHJcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHNob3cobmV3VmFsKSB7XHJcbiAgICAgIGlmIChuZXdWYWwpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogdmFyKC0tei1tb2RhbCk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yeGwpO1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vZGFsLXNtIHsgbWF4LXdpZHRoOiA0MDBweDsgfVxyXG4ubW9kYWwtbWQgeyBtYXgtd2lkdGg6IDYwMHB4OyB9XHJcbi5tb2RhbC1sZyB7IG1heC13aWR0aDogODAwcHg7IH1cclxuLm1vZGFsLXhsIHsgbWF4LXdpZHRoOiAxMjAwcHg7IH1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LTEwMCk7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbi5tb2RhbC1lbnRlci1hY3RpdmUsXHJcbi5tb2RhbC1sZWF2ZS1hY3RpdmUge1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLm1vZGFsLWVudGVyLWFjdGl2ZSAubW9kYWwtY29udGFpbmVyLFxyXG4ubW9kYWwtbGVhdmUtYWN0aXZlIC5tb2RhbC1jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG59XHJcblxyXG4ubW9kYWwtZW50ZXItZnJvbSxcclxuLm1vZGFsLWxlYXZlLXRvIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubW9kYWwtZW50ZXItZnJvbSAubW9kYWwtY29udGFpbmVyLFxyXG4ubW9kYWwtbGVhdmUtdG8gLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKC0yMHB4KTtcclxufVxyXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YmNkYWYwMyZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvQXBwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1YmNkYWYwM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzViY2RhZjAzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWJjZGFmMDMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDNcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNWJjZGFmMDMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNiMDRiYWUmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04M2IwNGJhZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtODNiMDRiYWVcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI4M2IwNGJhZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzgzYjA0YmFlJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnODNiMDRiYWUnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNiMDRiYWUmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignODNiMDRiYWUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FdGFwZXNLYW5iYW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMDdlN2M0YzRcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwN2U3YzRjNFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzA3ZTdjNGM0JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDdlN2M0YzQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMDdlN2M0YzQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0JhZGdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Mjc4NDAyMyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0JhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9CYWRnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0JhZGdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyNzg0MDIzJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi02Mjc4NDAyM1wiXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy91aS9CYWRnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjI3ODQwMjNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2Mjc4NDAyMycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzYyNzg0MDIzJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CYWRnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI3ODQwMjMmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjI3ODQwMjMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdiYzNiM2Mmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2JjM2IzYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNzdiYzNiM2NcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3N2JjM2IzY1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzc3YmMzYjNjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNzdiYzNiM2MnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdiYzNiM2Mmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNzdiYzNiM2MnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NzZjNTgwJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTU3NmM1ODAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTU1NzZjNTgwXCJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjU1NzZjNTgwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTU3NmM1ODAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1NTc2YzU4MCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU3NmM1ODAmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNTU3NmM1ODAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NWRmMGEyZCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY1ZGYwYTJkJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi02NWRmMGEyZFwiXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy91aS9Nb2RhbC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjVkZjBhMmRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2NWRmMGEyZCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzY1ZGYwYTJkJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjVkZjBhMmQmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjVkZjBhMmQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgzYjA0YmFlJnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0JhZGdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Mjc4NDAyMyZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdiYzNiM2Mmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTc2YzU4MCZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NWRmMGEyZCZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTViY2RhZjAzJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODNiMDRiYWUmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQmFkZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjI3ODQwMjMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2JjM2IzYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NTc2YzU4MCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjVkZjBhMmQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiJdLCJuYW1lcyI6WyJjcmVhdGVBcHAiLCJBcHAiLCJFdGFwZXNLYW5iYW4iLCJEYXNoYm9hcmQiLCJCdXR0b24iLCJDYXJkIiwiTW9kYWwiLCJCYWRnZSIsImFwcCIsImNvbXBvbmVudCIsIm1vdW50IiwibmFtZSIsImNvbXBvbmVudHMiLCJkYXRhIiwiY3VycmVudFZpZXciLCJtZXRob2RzIiwibmF2aWdhdGVUbyIsInZpZXciLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIkNoYXJ0IiwiZXRhcGVzIiwiY2hhcnRzIiwic3RhdHVzIiwiY2F0ZWdvcnkiLCJwcmlvcml0eSIsImNvbXB1dGVkIiwic3RhdHMiLCJ0b3RhbCIsInRvZG8iLCJmaWx0ZXIiLCJzdGF0dXQiLCJpblByb2dyZXNzIiwiY29tcGxldGlvblJhdGUiLCJNYXRoIiwicm91bmQiLCJ1cGNvbWluZ0V0YXBlcyIsInRvZGF5IiwiRGF0ZSIsImluMzBEYXlzIiwiZ2V0VGltZSIsImRhdGVMaW1pdGUiLCJkZWFkbGluZSIsInNvcnQiLCJiIiwic2xpY2UiLCJ1cmdlbnRFdGFwZXMiLCJjdXJyZW50RGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJtb3VudGVkIiwibG9hZEV0YXBlcyIsImJlZm9yZVVubW91bnQiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiY2hhcnQiLCJkZXN0cm95IiwiX3RoaXMiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJfdCIsIl9jb250ZXh0IiwiZmV0Y2giLCJqc29uIiwiJG5leHRUaWNrIiwiY3JlYXRlQ2hhcnRzIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlU3RhdHVzQ2hhcnQiLCJjcmVhdGVDYXRlZ29yeUNoYXJ0IiwiY3JlYXRlUHJpb3JpdHlDaGFydCIsImN0eCIsIiRyZWZzIiwic3RhdHVzQ2hhcnQiLCJ0eXBlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwicGFkZGluZyIsImZvbnQiLCJzaXplIiwiY2F0ZWdvcnlDaGFydCIsImNhdGVnb3J5Q291bnRzIiwiZXRhcGUiLCJjYXQiLCJrZXlzIiwibGFiZWwiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5Iiwic2NhbGVzIiwiYmVnaW5BdFplcm8iLCJ0aWNrcyIsInN0ZXBTaXplIiwicHJpb3JpdHlDaGFydCIsInVyZ2VudCIsIm5vcm1hbCIsImxvdyIsIm5vbmUiLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImZvcm1hdERhdGVSZWxhdGl2ZSIsImRhdGUiLCJkaWZmVGltZSIsImRpZmZEYXlzIiwiY2VpbCIsImNvbmNhdCIsImdldERhdGVCYWRnZVZhcmlhbnQiLCJnZXRUaW1lbGluZUNsYXNzIiwidmFyaWFudCIsImdvVG9LYW5iYW4iLCIkZW1pdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiY29uc3RydWN0b3IiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsImRyYWdnYWJsZSIsInNob3dBZGRNb2RhbCIsImVkaXRpbmdFdGFwZSIsInNhdmluZyIsInNlYXJjaFF1ZXJ5Iiwic29ydEJ5IiwiZmlsdGVyUHJpb3JpdHkiLCJmb3JtIiwidGl0cmUiLCJkZXNjcmlwdGlvbiIsImRhdGVEZWJ1dCIsIm5vdGVzIiwib3JkcmUiLCJ0b2RvTGlzdCIsImluUHJvZ3Jlc3NMaXN0IiwiZG9uZUxpc3QiLCJmaWx0ZXJlZEV0YXBlcyIsImZpbHRlcmVkIiwicXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGF0ZUEiLCJkYXRlQiIsImxvY2FsZUNvbXBhcmUiLCJmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0IiwiaW5fcHJvZ3Jlc3MiLCJwcm9ncmVzc2lvbiIsInByb2dyZXNzVmFyaWFudCIsIndhdGNoIiwiaGFuZGxlciIsIm5ld1ZhbCIsImRlZXAiLCJpbW1lZGlhdGUiLCJfdGhpczIiLCJzYXZlRXRhcGUiLCJfdGhpczMiLCJfY2FsbGVlMiIsInVybCIsIm1ldGhvZCIsIl90MiIsIl9jb250ZXh0MiIsImlkIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xvc2VNb2RhbCIsImNoYW5nZVN0YXR1dCIsIm5ld1N0YXR1dCIsIl90aGlzNCIsIl9jYWxsZWUzIiwiX3QzIiwiX2NvbnRleHQzIiwiX29iamVjdFNwcmVhZCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJkZWxldGVFdGFwZSIsIl90aGlzNSIsIl9jYWxsZWU0IiwiX3Q0IiwiX2NvbnRleHQ0IiwiY29uZmlybSIsImVkaXRFdGFwZSIsIm9uRHJhZ1VwZGF0ZSIsIl90aGlzNiIsImV2ZW50IiwiYWRkZWQiLCJlbGVtZW50IiwidXBkYXRlRXRhcGVTdGF0dXQiLCJfdGhpczciLCJfY2FsbGVlNSIsImluZGV4IiwiX3Q1IiwiX2NvbnRleHQ1IiwiZmluZEluZGV4IiwiZ2V0UHJpb3JpdHlJY29uIiwiaWNvbnMiLCJnZXRQcmlvcml0eVZhcmlhbnQiLCJ2YXJpYW50cyIsImdldFByaW9yaXR5TGFiZWwiLCJnZXREYXRlVmFyaWFudCIsImxpbWl0ZSIsInByb3BzIiwiU3RyaW5nIiwidmFsaWRhdG9yIiwicGlsbCIsIkJvb2xlYW4iLCJiYWRnZUNsYXNzZXMiLCJkaXNhYmxlZCIsImxvYWRpbmciLCJidXR0b25DbGFzc2VzIiwiaG92ZXJhYmxlIiwiYm9yZGVyZWQiLCJjYXJkQ2xhc3NlcyIsInNob3ciLCJyZXF1aXJlZCIsInRpdGxlIiwiY2xvc2UiLCJkb2N1bWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80Iiwib25DbGljayIsIl9jYWNoZSIsIiRldmVudCIsIiRkYXRhIiwiX25vcm1hbGl6ZUNsYXNzIiwiYWN0aXZlIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0NhcmQiLCJfaG9pc3RlZF83IiwiX2NyZWF0ZUJsb2NrIiwiX2NvbXBvbmVudF9EYXNoYm9hcmQiLCJvbk5hdmlnYXRlIiwiJG9wdGlvbnMiLCJfY29tcG9uZW50X0V0YXBlc0thbmJhbiIsImtleSIsInJlZiIsIl9jb21wb25lbnRfQmFkZ2UiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2hvaXN0ZWRfOCIsIl9ob2lzdGVkXzkiLCJfaG9pc3RlZF8xMCIsIl9ob2lzdGVkXzExIiwiX2hvaXN0ZWRfMTIiLCJfaG9pc3RlZF8xMyIsIl9ob2lzdGVkXzE0IiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xNiIsIl9ob2lzdGVkXzE3IiwiX25vcm1hbGl6ZVN0eWxlIiwid2lkdGgiLCJfaG9pc3RlZF8xOCIsImhlYWRlciIsIl93aXRoQ3R4IiwiX2hvaXN0ZWRfMTkiLCJfaG9pc3RlZF8yMCIsIl9ob2lzdGVkXzIxIiwiX2hvaXN0ZWRfMjIiLCJfaG9pc3RlZF8yMyIsIl9ob2lzdGVkXzI0IiwiX2hvaXN0ZWRfMjUiLCJfaG9pc3RlZF8yNiIsIl9ob2lzdGVkXzI3IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfaG9pc3RlZF8yOCIsIl9ob2lzdGVkXzI5IiwiX2hvaXN0ZWRfMzAiLCJfaG9pc3RlZF8zMSIsIl9ob2lzdGVkXzMyIiwiX2hvaXN0ZWRfMzMiLCJfaG9pc3RlZF8zNCIsIl9jb21wb25lbnRfQnV0dG9uIiwicGxhY2Vob2xkZXIiLCJfY29tcG9uZW50X2RyYWdnYWJsZSIsImdyb3VwIiwib25DaGFuZ2UiLCJhbmltYXRpb24iLCJpdGVtIiwiX3JlZiIsImZvb3RlciIsIl93aXRoTW9kaWZpZXJzIiwiX3JlZjIiLCJfaG9pc3RlZF8zOCIsIl9ob2lzdGVkXzM1IiwiX2hvaXN0ZWRfMzYiLCJfaG9pc3RlZF8zNyIsIl9ob2lzdGVkXzM5IiwiX2hvaXN0ZWRfNDAiLCJfaG9pc3RlZF80MSIsIl9ob2lzdGVkXzQyIiwiX3JlZjMiLCJfaG9pc3RlZF80NyIsIl9ob2lzdGVkXzQzIiwiX2hvaXN0ZWRfNDQiLCJfaG9pc3RlZF80NSIsIl9ob2lzdGVkXzQ2IiwiX2hvaXN0ZWRfNDgiLCJfY29tcG9uZW50X01vZGFsIiwib25DbG9zZSIsIm9uU3VibWl0IiwiX2hvaXN0ZWRfNDkiLCJfaG9pc3RlZF81MCIsIl9ob2lzdGVkXzUxIiwiX2hvaXN0ZWRfNTIiLCJfaG9pc3RlZF81MyIsInJvd3MiLCJfaG9pc3RlZF81NCIsIl9ob2lzdGVkXzU1IiwiX2hvaXN0ZWRfNTYiLCJfaG9pc3RlZF81NyIsIl9yZW5kZXJTbG90IiwiX2N0eCIsIiRzbG90cyIsInVuZGVmaW5lZCIsIiRwcm9wcyIsIl9UcmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==