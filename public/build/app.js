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
/* harmony import */ var _components_Calendrier_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Calendrier.vue */ "./assets/components/Calendrier.vue");
/* harmony import */ var _components_Finances_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Finances.vue */ "./assets/components/Finances.vue");
/* harmony import */ var _styles_design_system_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/design-system.css */ "./assets/styles/design-system.css");
/* harmony import */ var _components_ui_Button_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ui/Button.vue */ "./assets/components/ui/Button.vue");
/* harmony import */ var _components_ui_Card_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ui/Card.vue */ "./assets/components/ui/Card.vue");
/* harmony import */ var _components_ui_Modal_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ui/Modal.vue */ "./assets/components/ui/Modal.vue");
/* harmony import */ var _components_ui_Badge_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ui/Badge.vue */ "./assets/components/ui/Badge.vue");







// Import du Design System


// Import des composants UI




var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

// Enregistrer les composants globalement
app.component('Button', _components_ui_Button_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.component('Card', _components_ui_Card_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.component('Modal', _components_ui_Modal_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.component('Badge', _components_ui_Badge_vue__WEBPACK_IMPORTED_MODULE_10__["default"]);
app.component('EtapesKanban', _components_EtapesKanban_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.component('Dashboard', _components_Dashboard_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.component('Calendrier', _components_Calendrier_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.component('Finances', _components_Finances_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
/* harmony import */ var _components_Calendrier_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Calendrier.vue */ "./assets/components/Calendrier.vue");
/* harmony import */ var _components_Finances_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Finances.vue */ "./assets/components/Finances.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  components: {
    EtapesKanban: _components_EtapesKanban_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Dashboard: _components_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Calendrier: _components_Calendrier_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Finances: _components_Finances_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      currentView: 'home' // home, dashboard, kanban, calendrier, finances
    };
  },
  methods: {
    navigateTo: function navigateTo(view) {
      this.currentView = view;
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=script&lang=js"
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_19__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Calendrier',
  data: function data() {
    return {
      etapes: [],
      currentDate: new Date(),
      selectedDay: null,
      daysOfWeek: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
    };
  },
  computed: {
    currentMonthYear: function currentMonthYear() {
      return this.currentDate.toLocaleDateString('fr-FR', {
        month: 'long',
        year: 'numeric'
      });
    },
    formatSelectedDate: function formatSelectedDate() {
      if (!this.selectedDay) return '';
      return this.selectedDay.date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    },
    calendarDays: function calendarDays() {
      var year = this.currentDate.getFullYear();
      var month = this.currentDate.getMonth();

      // Premier jour du mois
      var firstDay = new Date(year, month, 1);
      // Dernier jour du mois
      var lastDay = new Date(year, month + 1, 0);

      // Jour de la semaine du premier jour (0 = dimanche, 1 = lundi, etc.)
      var firstDayOfWeek = firstDay.getDay();
      // Convertir dimanche (0) en 7 pour que lundi soit 1
      firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
      var days = [];

      // Jours du mois précédent
      var prevMonthLastDay = new Date(year, month, 0).getDate();
      for (var i = firstDayOfWeek - 1; i > 0; i--) {
        var date = new Date(year, month - 1, prevMonthLastDay - i + 1);
        days.push({
          number: prevMonthLastDay - i + 1,
          date: date,
          isCurrentMonth: false,
          isToday: false,
          etapes: this.getEtapesForDate(date)
        });
      }

      // Jours du mois actuel
      for (var day = 1; day <= lastDay.getDate(); day++) {
        var _date = new Date(year, month, day);
        var today = new Date();
        var isToday = _date.toDateString() === today.toDateString();
        days.push({
          number: day,
          date: _date,
          isCurrentMonth: true,
          isToday: isToday,
          etapes: this.getEtapesForDate(_date)
        });
      }

      // Jours du mois suivant pour compléter la grille
      var remainingDays = 42 - days.length; // 6 semaines max
      for (var _day = 1; _day <= remainingDays; _day++) {
        var _date2 = new Date(year, month + 1, _day);
        days.push({
          number: _day,
          date: _date2,
          isCurrentMonth: false,
          isToday: false,
          etapes: this.getEtapesForDate(_date2)
        });
      }
      return days;
    },
    monthStats: function monthStats() {
      var year = this.currentDate.getFullYear();
      var month = this.currentDate.getMonth();
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var monthEtapes = this.etapes.filter(function (e) {
        if (!e.dateLimite) return false;
        var date = new Date(e.dateLimite);
        return date.getFullYear() === year && date.getMonth() === month;
      });

      // Cette semaine
      var startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay() + 1);
      var endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      var thisWeek = monthEtapes.filter(function (e) {
        var date = new Date(e.dateLimite);
        return date >= startOfWeek && date <= endOfWeek;
      }).length;
      return {
        total: monthEtapes.length,
        thisWeek: thisWeek,
        urgent: monthEtapes.filter(function (e) {
          return e.priority === 'urgent';
        }).length,
        overdue: monthEtapes.filter(function (e) {
          var date = new Date(e.dateLimite);
          return date < today && e.statut !== 'done';
        }).length
      };
    }
  },
  mounted: function mounted() {
    this.loadEtapes();
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
    getEtapesForDate: function getEtapesForDate(date) {
      return this.etapes.filter(function (etape) {
        if (!etape.dateLimite) return false;
        var etapeDate = new Date(etape.dateLimite);
        return etapeDate.toDateString() === date.toDateString();
      });
    },
    getDayClasses: function getDayClasses(day) {
      return ['calendar-day', {
        'other-month': !day.isCurrentMonth
      }, {
        'today': day.isToday
      }, {
        'has-etapes': day.etapes.length > 0
      }, {
        'selected': this.selectedDay && this.selectedDay.date.toDateString() === day.date.toDateString()
      }];
    },
    getPriorityClass: function getPriorityClass(priority) {
      var classes = {
        urgent: 'priority-urgent',
        normal: 'priority-normal',
        low: 'priority-low'
      };
      return classes[priority] || 'priority-none';
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
      return labels[priority] || 'Non définie';
    },
    getStatusVariant: function getStatusVariant(statut) {
      var variants = {
        todo: 'gray',
        in_progress: 'warning',
        done: 'success'
      };
      return variants[statut] || 'gray';
    },
    getStatusLabel: function getStatusLabel(statut) {
      var labels = {
        todo: '📝 À faire',
        in_progress: '⏳ En cours',
        done: '✅ Terminé'
      };
      return labels[statut] || statut;
    },
    previousMonth: function previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
      this.selectedDay = null;
    },
    nextMonth: function nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
      this.selectedDay = null;
    },
    goToToday: function goToToday() {
      this.currentDate = new Date();
      this.selectedDay = null;
    },
    selectDay: function selectDay(day) {
      if (day.etapes.length > 0) {
        this.selectedDay = day;
      }
    },
    openEtapeDetails: function openEtapeDetails(etape) {
      this.selectedDay = this.calendarDays.find(function (day) {
        return day.etapes.some(function (e) {
          return e.id === etape.id;
        });
      });
    },
    truncate: function truncate(text, length) {
      if (!text) return '';
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    goToKanban: function goToKanban() {
      this.$emit('navigate', 'kanban');
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");
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









































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Finances',
  data: function data() {
    return {
      transactions: [],
      showAddTransactionModal: false,
      showBudgetModal: false,
      saving: false,
      filterType: 'all',
      filterCategory: 'all',
      transactionForm: {
        type: 'expense',
        description: '',
        amount: 0,
        date: new Date().toISOString().split('T')[0],
        category: '',
        notes: ''
      },
      categories: ['Formation', 'Marketing', 'Matériel', 'Administratif', 'Locaux', 'Frais franchise', 'Autre'],
      budgetConfig: {
        'Formation': 5000,
        'Marketing': 3000,
        'Matériel': 2000,
        'Administratif': 1000,
        'Locaux': 5000,
        'Frais franchise': 20000,
        'Autre': 1000
      },
      charts: {
        expense: null,
        monthly: null
      }
    };
  },
  computed: {
    financialStats: function financialStats() {
      var totalRevenue = this.transactions.filter(function (t) {
        return t.type === 'revenue';
      }).reduce(function (sum, t) {
        return sum + t.amount;
      }, 0);
      var totalExpense = this.transactions.filter(function (t) {
        return t.type === 'expense';
      }).reduce(function (sum, t) {
        return sum + t.amount;
      }, 0);
      var balance = totalRevenue - totalExpense;
      var totalBudget = Object.values(this.budgetConfig).reduce(function (sum, val) {
        return sum + val;
      }, 0);
      var budgetRemaining = totalBudget - totalExpense;
      return {
        totalRevenue: totalRevenue,
        totalExpense: totalExpense,
        balance: balance,
        budgetRemaining: budgetRemaining
      };
    },
    balanceClass: function balanceClass() {
      return this.financialStats.balance >= 0 ? 'positive' : 'negative';
    },
    budgetUsedPercentage: function budgetUsedPercentage() {
      var totalBudget = Object.values(this.budgetConfig).reduce(function (sum, val) {
        return sum + val;
      }, 0);
      if (totalBudget === 0) return 0;
      return Math.min(100, Math.round(this.financialStats.totalExpense / totalBudget * 100));
    },
    filteredTransactions: function filteredTransactions() {
      var _this = this;
      return this.transactions.filter(function (t) {
        return _this.filterType === 'all' || t.type === _this.filterType;
      }).filter(function (t) {
        return _this.filterCategory === 'all' || t.category === _this.filterCategory;
      }).sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    },
    budgetCategories: function budgetCategories() {
      var _this2 = this;
      return this.categories.map(function (cat) {
        var spent = _this2.transactions.filter(function (t) {
          return t.type === 'expense' && t.category === cat;
        }).reduce(function (sum, t) {
          return sum + t.amount;
        }, 0);
        return {
          name: cat,
          spent: spent,
          planned: _this2.budgetConfig[cat] || 0
        };
      });
    }
  },
  mounted: function mounted() {
    this.loadTransactions();
    this.loadBudgetConfig();
  },
  beforeUnmount: function beforeUnmount() {
    Object.values(this.charts).forEach(function (chart) {
      if (chart) chart.destroy();
    });
  },
  methods: {
    loadTransactions: function loadTransactions() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var stored;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              // Simule le chargement depuis une API
              // TODO: Remplacer par un vrai appel API
              stored = localStorage.getItem('transactions');
              if (stored) {
                _this3.transactions = JSON.parse(stored);
              }
              _this3.$nextTick(function () {
                _this3.createCharts();
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    loadBudgetConfig: function loadBudgetConfig() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var stored;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              stored = localStorage.getItem('budgetConfig');
              if (stored) {
                _this4.budgetConfig = JSON.parse(stored);
              }
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    saveTransaction: function saveTransaction() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var newTransaction;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this5.saving = true;
              newTransaction = _objectSpread(_objectSpread({
                id: Date.now()
              }, _this5.transactionForm), {}, {
                createdAt: new Date().toISOString()
              });
              _this5.transactions.push(newTransaction);
              localStorage.setItem('transactions', JSON.stringify(_this5.transactions));
              _this5.closeTransactionModal();
              _this5.saving = false;
              _this5.$nextTick(function () {
                _this5.createCharts();
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    deleteTransaction: function deleteTransaction(transaction) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (confirm("Supprimer la transaction \"".concat(transaction.description, "\" ?"))) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _this6.transactions = _this6.transactions.filter(function (t) {
                return t.id !== transaction.id;
              });
              localStorage.setItem('transactions', JSON.stringify(_this6.transactions));
              _this6.$nextTick(function () {
                _this6.createCharts();
              });
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    saveBudgetConfig: function saveBudgetConfig() {
      var _this7 = this;
      localStorage.setItem('budgetConfig', JSON.stringify(this.budgetConfig));
      this.closeBudgetModal();
      this.$nextTick(function () {
        _this7.createCharts();
      });
    },
    closeTransactionModal: function closeTransactionModal() {
      this.showAddTransactionModal = false;
      this.saving = false;
      this.transactionForm = {
        type: 'expense',
        description: '',
        amount: 0,
        date: new Date().toISOString().split('T')[0],
        category: '',
        notes: ''
      };
    },
    closeBudgetModal: function closeBudgetModal() {
      this.showBudgetModal = false;
    },
    createCharts: function createCharts() {
      this.createExpenseChart();
      this.createMonthlyChart();
    },
    createExpenseChart: function createExpenseChart() {
      var ctx = this.$refs.expenseChart;
      if (!ctx) return;
      if (this.charts.expense) {
        this.charts.expense.destroy();
      }
      var expenseByCategory = {};
      this.transactions.filter(function (t) {
        return t.type === 'expense';
      }).forEach(function (t) {
        expenseByCategory[t.category] = (expenseByCategory[t.category] || 0) + t.amount;
      });
      var labels = Object.keys(expenseByCategory);
      var data = Object.values(expenseByCategory);
      this.charts.expense = new chart_js_auto__WEBPACK_IMPORTED_MODULE_40__["default"](ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: ['rgba(239, 68, 68, 0.8)', 'rgba(245, 158, 11, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(236, 72, 153, 0.8)', 'rgba(156, 163, 175, 0.8)'],
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
    createMonthlyChart: function createMonthlyChart() {
      var ctx = this.$refs.monthlyChart;
      if (!ctx) return;
      if (this.charts.monthly) {
        this.charts.monthly.destroy();
      }

      // Grouper par mois
      var monthlyData = {};
      this.transactions.forEach(function (t) {
        var month = new Date(t.date).toLocaleDateString('fr-FR', {
          month: 'short',
          year: 'numeric'
        });
        if (!monthlyData[month]) {
          monthlyData[month] = {
            revenue: 0,
            expense: 0
          };
        }
        if (t.type === 'revenue') {
          monthlyData[month].revenue += t.amount;
        } else {
          monthlyData[month].expense += t.amount;
        }
      });
      var labels = Object.keys(monthlyData).sort();
      var revenueData = labels.map(function (m) {
        return monthlyData[m].revenue;
      });
      var expenseData = labels.map(function (m) {
        return monthlyData[m].expense;
      });
      this.charts.monthly = new chart_js_auto__WEBPACK_IMPORTED_MODULE_40__["default"](ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Revenus',
            data: revenueData,
            backgroundColor: 'rgba(16, 185, 129, 0.8)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2,
            borderRadius: 8
          }, {
            label: 'Dépenses',
            data: expenseData,
            backgroundColor: 'rgba(239, 68, 68, 0.8)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    },
    formatCurrency: function formatCurrency(amount) {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount);
    },
    formatDate: function formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('fr-FR');
    },
    getBudgetPercentage: function getBudgetPercentage(cat) {
      if (cat.planned === 0) return 0;
      return Math.min(100, Math.round(cat.spent / cat.planned * 100));
    },
    getBudgetProgressClass: function getBudgetProgressClass(cat) {
      var percentage = this.getBudgetPercentage(cat);
      if (percentage >= 90) return 'danger';
      if (percentage >= 75) return 'warning';
      return 'success';
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
var _hoisted_8 = {
  "class": "home-stats"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Card");
  var _component_Dashboard = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Dashboard");
  var _component_EtapesKanban = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("EtapesKanban");
  var _component_Calendrier = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Calendrier");
  var _component_Finances = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Finances");
  return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Header avec navigation "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_3, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
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
  }, " 📋 Suivi des Étapes ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.currentView = 'calendrier';
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['nav-button', {
      active: $data.currentView === 'calendrier'
    }])
  }, " 📅 Calendrier ", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $data.currentView = 'finances';
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['nav-button', {
      active: $data.currentView === 'finances'
    }])
  }, " 💰 Finances ", 2 /* CLASS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Contenu principal "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("main", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Accueil "), $data.currentView === 'home' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "welcome-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h2", null, "👋 Bienvenue sur ton Business Manager", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Ton tableau de bord entrepreneurial complet est prêt !", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "welcome-status"
      }, " ✅ Application V1 complète avec 5 modules fonctionnels ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "feature-card",
    hoverable: "",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $data.currentView = 'dashboard';
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[11] || (_cache[11] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "feature-icon"
      }, "📊", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Dashboard", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Vue d'ensemble avec graphiques et statistiques", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "feature-card",
    hoverable: "",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $data.currentView = 'kanban';
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "feature-icon"
      }, "📋", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Suivi des Étapes", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Kanban avec drag & drop et filtres avancés", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "feature-card",
    hoverable: "",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $data.currentView = 'calendrier';
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[13] || (_cache[13] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "feature-icon"
      }, "📅", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Calendrier", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Visualise tes échéances et planifie ton projet", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "feature-card",
    hoverable: "",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $data.currentView = 'finances';
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[14] || (_cache[14] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "feature-icon"
      }, "💰", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", null, "Finances", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Budget, trésorerie et suivi des dépenses", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Stats rapides "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "home-stat-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[15] || (_cache[15] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-icon"
      }, "🎯"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-details"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-value"
      }, "V1"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "Version Actuelle")])], -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "home-stat-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[16] || (_cache[16] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-icon"
      }, "🚀"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-details"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-value"
      }, "5"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "Modules Actifs")])], -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "home-stat-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[17] || (_cache[17] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-content"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-icon"
      }, "⚡"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-details"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-value"
      }, "100%"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "Opérationnel")])], -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Dashboard "), $data.currentView === 'dashboard' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Dashboard, {
    key: 1,
    onNavigate: $options.navigateTo
  }, null, 8 /* PROPS */, ["onNavigate"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Kanban "), $data.currentView === 'kanban' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_EtapesKanban, {
    key: 2
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Calendrier "), $data.currentView === 'calendrier' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Calendrier, {
    key: 3,
    onNavigate: $options.navigateTo
  }, null, 8 /* PROPS */, ["onNavigate"])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Vue Finances "), $data.currentView === 'finances' ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Finances, {
    key: 4
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Footer "), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("footer", {
    "class": "app-footer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "footer-content"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "© 2026 Business Manager - Mon Assistant Numérique"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
    "class": "footer-version"
  }, "Version 1.0 - Symfony 7.2 + Vue.js 3")])], -1 /* CACHED */))]);
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=template&id=541ad3ac&scoped=true"
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=template&id=541ad3ac&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "calendrier"
};
var _hoisted_2 = {
  "class": "controls-row"
};
var _hoisted_3 = {
  "class": "current-month"
};
var _hoisted_4 = {
  "class": "controls-filters"
};
var _hoisted_5 = {
  "class": "calendar-header-days"
};
var _hoisted_6 = {
  "class": "calendar-grid"
};
var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  "class": "day-number"
};
var _hoisted_9 = {
  key: 0,
  "class": "day-etapes"
};
var _hoisted_10 = ["onClick"];
var _hoisted_11 = {
  "class": "etape-title"
};
var _hoisted_12 = {
  key: 0,
  "class": "more-etapes"
};
var _hoisted_13 = {
  "class": "chart-title"
};
var _hoisted_14 = {
  "class": "etapes-list"
};
var _hoisted_15 = {
  "class": "etape-header"
};
var _hoisted_16 = {
  key: 0,
  "class": "etape-description"
};
var _hoisted_17 = {
  "class": "etape-meta"
};
var _hoisted_18 = {
  "class": "monthly-stats"
};
var _hoisted_19 = {
  "class": "stat-content"
};
var _hoisted_20 = {
  "class": "stat-details"
};
var _hoisted_21 = {
  "class": "stat-value"
};
var _hoisted_22 = {
  "class": "stat-content"
};
var _hoisted_23 = {
  "class": "stat-details"
};
var _hoisted_24 = {
  "class": "stat-value"
};
var _hoisted_25 = {
  "class": "stat-content"
};
var _hoisted_26 = {
  "class": "stat-details"
};
var _hoisted_27 = {
  "class": "stat-value"
};
var _hoisted_28 = {
  "class": "stat-content"
};
var _hoisted_29 = {
  "class": "stat-details"
};
var _hoisted_30 = {
  "class": "stat-value"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Button");
  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Card");
  var _component_Badge = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Badge");
  return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Header "), _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "calendrier-header"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "header-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h2", null, "📅 Calendrier"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
    "class": "subtitle"
  }, "Visualise tes échéances et planifie ton projet")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Contrôles de navigation "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "calendar-controls"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.previousMonth,
        variant: "ghost"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ← Mois précédent ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.currentMonthYear), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.nextMonth,
        variant: "ghost"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Mois suivant → ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.goToToday,
        variant: "primary",
        size: "sm"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 📍 Aujourd'hui ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "legend"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "legend-item"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "legend-dot urgent"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", null, "Urgent")]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "legend-item"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "legend-dot normal"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", null, "Normal")]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "legend-item"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "legend-dot low"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", null, "Basse")])], -1 /* CACHED */))])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Calendrier "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "calendar-grid-container"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" En-tête des jours "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($data.daysOfWeek, function (day) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
          "class": "day-name",
          key: day
        }, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(day), 1 /* TEXT */);
      }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Grille du calendrier "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($options.calendarDays, function (day, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
          key: index,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)($options.getDayClasses(day)),
          onClick: function onClick($event) {
            return $options.selectDay(day);
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(day.number), 1 /* TEXT */), day.etapes.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)(day.etapes.slice(0, 3), function (etape) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
            key: etape.id,
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['etape-pill', $options.getPriorityClass(etape.priority)]),
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function ($event) {
              return $options.openEtapeDetails(etape);
            }, ["stop"])
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.truncate(etape.titre, 20)), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_10);
        }), 128 /* KEYED_FRAGMENT */)), day.etapes.length > 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_12, " +" + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(day.etapes.length - 3) + " autre(s) ", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_7);
      }), 128 /* KEYED_FRAGMENT */))])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Liste des étapes du jour sélectionné "), $data.selectedDay && $data.selectedDay.etapes.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createBlock)(_component_Card, {
    key: 0,
    "class": "selected-day-details"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", _hoisted_13, " 📋 Étapes du " + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatSelectedDate), 1 /* TEXT */)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($data.selectedDay.etapes, function (etape) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
          key: etape.id,
          "class": "etape-item",
          onClick: _cache[0] || (_cache[0] = function () {
            return $options.goToKanban && $options.goToKanban.apply($options, arguments);
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.titre), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
          variant: $options.getPriorityVariant(etape.priority)
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getPriorityLabel(etape.priority)), 1 /* TEXT */)];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"])]), etape.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(etape.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
          variant: $options.getStatusVariant(etape.statut),
          size: "sm"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getStatusLabel(etape.statut)), 1 /* TEXT */)];
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
        }, 1024 /* DYNAMIC_SLOTS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true)])]);
      }), 128 /* KEYED_FRAGMENT */))])];
    }),
    _: 1 /* STABLE */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Stats mensuelles "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "stat-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_19, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-icon"
      }, "📊", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.monthStats.total), 1 /* TEXT */), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "Échéances ce mois", -1 /* CACHED */))])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "stat-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_22, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-icon"
      }, "⏰", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.monthStats.thisWeek), 1 /* TEXT */), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "Cette semaine", -1 /* CACHED */))])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "stat-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_25, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-icon"
      }, "🔴", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.monthStats.urgent), 1 /* TEXT */), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "Urgentes", -1 /* CACHED */))])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "stat-card"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_28, [_cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "stat-icon"
      }, "⚠️", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.monthStats.overdue), 1 /* TEXT */), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "stat-label"
      }, "En retard", -1 /* CACHED */))])])];
    }),
    _: 1 /* STABLE */
  })])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=template&id=1a1bcf54&scoped=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=template&id=1a1bcf54&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "finances"
};
var _hoisted_2 = {
  "class": "finances-header"
};
var _hoisted_3 = {
  "class": "header-actions"
};
var _hoisted_4 = {
  "class": "financial-kpis"
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
  "class": "kpi-content"
};
var _hoisted_14 = {
  "class": "kpi-details"
};
var _hoisted_15 = {
  "class": "kpi-value"
};
var _hoisted_16 = {
  "class": "kpi-progress-bar"
};
var _hoisted_17 = {
  "class": "charts-section"
};
var _hoisted_18 = {
  "class": "chart-container"
};
var _hoisted_19 = {
  ref: "expenseChart"
};
var _hoisted_20 = {
  "class": "chart-container"
};
var _hoisted_21 = {
  ref: "monthlyChart"
};
var _hoisted_22 = {
  "class": "transactions-header"
};
var _hoisted_23 = {
  "class": "filters"
};
var _hoisted_24 = ["value"];
var _hoisted_25 = {
  "class": "transactions-list"
};
var _hoisted_26 = {
  key: 0,
  "class": "empty-state"
};
var _hoisted_27 = {
  "class": "transaction-icon"
};
var _hoisted_28 = {
  "class": "transaction-content"
};
var _hoisted_29 = {
  "class": "transaction-header"
};
var _hoisted_30 = {
  "class": "transaction-meta"
};
var _hoisted_31 = {
  "class": "transaction-date"
};
var _hoisted_32 = {
  "class": "budget-header"
};
var _hoisted_33 = {
  "class": "budget-categories"
};
var _hoisted_34 = {
  "class": "budget-cat-header"
};
var _hoisted_35 = {
  "class": "budget-cat-name"
};
var _hoisted_36 = {
  "class": "budget-cat-amounts"
};
var _hoisted_37 = {
  "class": "spent"
};
var _hoisted_38 = {
  "class": "planned"
};
var _hoisted_39 = {
  "class": "budget-progress-bar"
};
var _hoisted_40 = {
  "class": "budget-percentage"
};
var _hoisted_41 = {
  "class": "form-group"
};
var _hoisted_42 = {
  "class": "form-group"
};
var _hoisted_43 = {
  "class": "form-row"
};
var _hoisted_44 = {
  "class": "form-group"
};
var _hoisted_45 = {
  "class": "form-group"
};
var _hoisted_46 = {
  "class": "form-group"
};
var _hoisted_47 = ["value"];
var _hoisted_48 = {
  "class": "form-group"
};
var _hoisted_49 = {
  "class": "budget-config"
};
var _hoisted_50 = {
  "class": "budget-config-list"
};
var _hoisted_51 = {
  "class": "budget-config-label"
};
var _hoisted_52 = ["onUpdate:modelValue"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Button");
  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Card");
  var _component_Badge = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Badge");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_17__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Header "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_2, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
    "class": "header-title"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h2", null, "💰 Gestion Financière"), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
    "class": "subtitle"
  }, "Pilote ton budget et ta trésorerie")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showAddTransactionModal = true;
    }),
    size: "lg"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "icon"
      }, "➕", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Nouvelle Transaction ", -1 /* CACHED */)]));
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" KPI Financiers "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "kpi-card revenue-card",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_5, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-icon"
      }, "📈", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_6, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "kpi-label"
      }, "Total Revenus", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatCurrency($options.financialStats.totalRevenue)), 1 /* TEXT */)])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "kpi-card expense-card",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_8, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-icon"
      }, "📉", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_9, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "kpi-label"
      }, "Total Dépenses", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatCurrency($options.financialStats.totalExpense)), 1 /* TEXT */)])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "kpi-card balance-card",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_11, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-icon"
      }, "💵", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_12, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "kpi-label"
      }, "Solde", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['kpi-value', $options.balanceClass])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatCurrency($options.financialStats.balance)), 3 /* TEXT, CLASS */)])])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "kpi-card budget-card",
    hoverable: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_13, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-icon"
      }, "🎯", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_14, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "kpi-label"
      }, "Budget Restant", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatCurrency($options.financialStats.budgetRemaining)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
        "class": "kpi-progress-fill",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeStyle)({
          width: $options.budgetUsedPercentage + '%'
        })
      }, null, 4 /* STYLE */)])];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Graphiques "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "chart-card"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[22] || (_cache[22] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "📊 Répartition des Dépenses", -1 /* CACHED */)]));
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("canvas", _hoisted_19, null, 512 /* NEED_PATCH */)])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "chart-card"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return _toConsumableArray(_cache[23] || (_cache[23] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "📈 Évolution Mensuelle", -1 /* CACHED */)]));
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("canvas", _hoisted_21, null, 512 /* NEED_PATCH */)])];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Filtres et Transactions "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "transactions-section"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_22, [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "📋 Historique des Transactions", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.filterType = $event;
        }),
        "class": "filter-select"
      }, _toConsumableArray(_cache[24] || (_cache[24] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "all"
      }, "Tous types", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "revenue"
      }, "Revenus", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "expense"
      }, "Dépenses", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.filterType]]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.filterCategory = $event;
        }),
        "class": "filter-select"
      }, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "all"
      }, "Toutes catégories", -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($data.categories, function (cat) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("option", {
          key: cat,
          value: cat
        }, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(cat), 9 /* TEXT, PROPS */, _hoisted_24);
      }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.filterCategory]])])])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_25, [$options.filteredTransactions.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", _hoisted_26, [_cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "empty-icon"
      }, "💸", -1 /* CACHED */)), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", null, "Aucune transaction pour le moment", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $data.showAddTransactionModal = true;
        }),
        variant: "primary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[27] || (_cache[27] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Ajouter une transaction ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      })])) : (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($options.filteredTransactions, function (transaction) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
          key: transaction.id,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['transaction-item', transaction.type])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(transaction.type === 'revenue' ? '📈' : '📉'), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(transaction.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(['transaction-amount', transaction.type])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(transaction.type === 'revenue' ? '+' : '-') + (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatCurrency(transaction.amount)), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Badge, {
          variant: "gray",
          size: "sm"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(transaction.category), 1 /* TEXT */)];
          }),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatDate(transaction.date)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
          onClick: function onClick($event) {
            return $options.deleteTransaction(transaction);
          },
          variant: "danger",
          size: "sm"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
            return _toConsumableArray(_cache[30] || (_cache[30] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 🗑️ ", -1 /* CACHED */)]));
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"])], 2 /* CLASS */);
      }), 128 /* KEYED_FRAGMENT */))])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Budget Prévisionnel "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Card, {
    "class": "budget-section"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_32, [_cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("h3", {
        "class": "chart-title"
      }, "🎯 Budget Prévisionnel", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return $data.showBudgetModal = true;
        }),
        variant: "ghost",
        size: "sm"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[31] || (_cache[31] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" ⚙️ Configurer ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      })])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_33, [((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($options.budgetCategories, function (cat) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
          key: cat.name,
          "class": "budget-category"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(cat.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatCurrency(cat.spent)), 1 /* TEXT */), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
          "class": "separator"
        }, "/", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.formatCurrency(cat.planned)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeClass)(["budget-progress-fill", $options.getBudgetProgressClass(cat)]),
          style: (0,vue__WEBPACK_IMPORTED_MODULE_17__.normalizeStyle)({
            width: $options.getBudgetPercentage(cat) + '%'
          })
        }, null, 6 /* CLASS, STYLE */)]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)($options.getBudgetPercentage(cat)) + "%", 1 /* TEXT */)]);
      }), 128 /* KEYED_FRAGMENT */))])];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Modal Nouvelle Transaction "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Modal, {
    show: $data.showAddTransactionModal,
    title: "Nouvelle Transaction",
    onClose: $options.closeTransactionModal,
    size: "md"
  }, {
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.closeTransactionModal,
        variant: "secondary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[42] || (_cache[42] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Annuler ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.saveTransaction,
        loading: $data.saving
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[43] || (_cache[43] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 💾 Enregistrer ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick", "loading"])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("form", {
        onSubmit: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.withModifiers)(function () {
          return $options.saveTransaction && $options.saveTransaction.apply($options, arguments);
        }, ["prevent"])),
        "class": "transaction-form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_41, [_cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)("Type "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "required"
      }, "*")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.transactionForm.type = $event;
        }),
        "class": "form-input",
        required: ""
      }, _toConsumableArray(_cache[34] || (_cache[34] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "revenue"
      }, "📈 Revenu", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: "expense"
      }, "📉 Dépense", -1 /* CACHED */)])), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.transactionForm.type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_42, [_cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)("Description "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "required"
      }, "*")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.transactionForm.description = $event;
        }),
        type: "text",
        "class": "form-input",
        placeholder: "Ex: Achat matériel informatique",
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.transactionForm.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_44, [_cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)("Montant (€) "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "required"
      }, "*")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.transactionForm.amount = $event;
        }),
        type: "number",
        step: "0.01",
        "class": "form-input",
        placeholder: "0.00",
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.transactionForm.amount, void 0, {
        number: true
      }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_45, [_cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)("Date "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "required"
      }, "*")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $data.transactionForm.date = $event;
        }),
        type: "date",
        "class": "form-input",
        required: ""
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.transactionForm.date]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_46, [_cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)("Catégorie "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("span", {
        "class": "required"
      }, "*")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $data.transactionForm.category = $event;
        }),
        "class": "form-input",
        required: ""
      }, [_cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("option", {
        value: ""
      }, "Sélectionner...", -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($data.categories, function (cat) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("option", {
          key: cat,
          value: cat
        }, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(cat), 9 /* TEXT, PROPS */, _hoisted_47);
      }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelSelect, $data.transactionForm.category]])]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_48, [_cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", {
        "class": "form-label"
      }, "Notes", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $data.transactionForm.notes = $event;
        }),
        rows: "3",
        "class": "form-input",
        placeholder: "Informations complémentaires..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.transactionForm.notes]])])], 32 /* NEED_HYDRATION */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "onClose"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createCommentVNode)(" Modal Configuration Budget "), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Modal, {
    show: $data.showBudgetModal,
    title: "Configuration du Budget",
    onClose: $options.closeBudgetModal,
    size: "lg"
  }, {
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.closeBudgetModal,
        variant: "secondary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[45] || (_cache[45] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" Annuler ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createVNode)(_component_Button, {
        onClick: $options.saveBudgetConfig
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
          return _toConsumableArray(_cache[46] || (_cache[46] = [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createTextVNode)(" 💾 Enregistrer ", -1 /* CACHED */)]));
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_17__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_49, [_cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("p", {
        "class": "budget-intro"
      }, " Définis tes objectifs budgétaires par catégorie pour mieux suivre tes dépenses. ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("div", _hoisted_50, [((0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_17__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_17__.renderList)($data.categories, function (cat) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_17__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementBlock)("div", {
          key: cat,
          "class": "budget-config-item"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("label", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_17__.toDisplayString)(cat), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_17__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_17__.createElementVNode)("input", {
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $data.budgetConfig[cat] = $event;
          },
          type: "number",
          step: "100",
          "class": "form-input",
          placeholder: "0"
        }, null, 8 /* PROPS */, _hoisted_52), [[vue__WEBPACK_IMPORTED_MODULE_17__.vModelText, $data.budgetConfig[cat], void 0, {
          number: true
        }]])]);
      }), 128 /* KEYED_FRAGMENT */))])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "onClose"])]);
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=style&index=0&id=541ad3ac&scoped=true&lang=css"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=style&index=0&id=541ad3ac&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=style&index=0&id=1a1bcf54&scoped=true&lang=css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=style&index=0&id=1a1bcf54&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./assets/components/Calendrier.vue"
/*!******************************************!*\
  !*** ./assets/components/Calendrier.vue ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calendrier_vue_vue_type_template_id_541ad3ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendrier.vue?vue&type=template&id=541ad3ac&scoped=true */ "./assets/components/Calendrier.vue?vue&type=template&id=541ad3ac&scoped=true");
/* harmony import */ var _Calendrier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendrier.vue?vue&type=script&lang=js */ "./assets/components/Calendrier.vue?vue&type=script&lang=js");
/* harmony import */ var _Calendrier_vue_vue_type_style_index_0_id_541ad3ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendrier.vue?vue&type=style&index=0&id=541ad3ac&scoped=true&lang=css */ "./assets/components/Calendrier.vue?vue&type=style&index=0&id=541ad3ac&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Calendrier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Calendrier_vue_vue_type_template_id_541ad3ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-541ad3ac"],['__file',"assets/components/Calendrier.vue"]])
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

/***/ "./assets/components/Finances.vue"
/*!****************************************!*\
  !*** ./assets/components/Finances.vue ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Finances_vue_vue_type_template_id_1a1bcf54_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Finances.vue?vue&type=template&id=1a1bcf54&scoped=true */ "./assets/components/Finances.vue?vue&type=template&id=1a1bcf54&scoped=true");
/* harmony import */ var _Finances_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Finances.vue?vue&type=script&lang=js */ "./assets/components/Finances.vue?vue&type=script&lang=js");
/* harmony import */ var _Finances_vue_vue_type_style_index_0_id_1a1bcf54_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Finances.vue?vue&type=style&index=0&id=1a1bcf54&scoped=true&lang=css */ "./assets/components/Finances.vue?vue&type=style&index=0&id=1a1bcf54&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Finances_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Finances_vue_vue_type_template_id_1a1bcf54_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1a1bcf54"],['__file',"assets/components/Finances.vue"]])
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

/***/ "./assets/components/Calendrier.vue?vue&type=script&lang=js"
/*!******************************************************************!*\
  !*** ./assets/components/Calendrier.vue?vue&type=script&lang=js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Calendrier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Calendrier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Calendrier.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=script&lang=js");
 

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

/***/ "./assets/components/Finances.vue?vue&type=script&lang=js"
/*!****************************************************************!*\
  !*** ./assets/components/Finances.vue?vue&type=script&lang=js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Finances_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Finances_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Finances.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=script&lang=js");
 

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

/***/ "./assets/components/Calendrier.vue?vue&type=template&id=541ad3ac&scoped=true"
/*!************************************************************************************!*\
  !*** ./assets/components/Calendrier.vue?vue&type=template&id=541ad3ac&scoped=true ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Calendrier_vue_vue_type_template_id_541ad3ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Calendrier_vue_vue_type_template_id_541ad3ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Calendrier.vue?vue&type=template&id=541ad3ac&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=template&id=541ad3ac&scoped=true");


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

/***/ "./assets/components/Finances.vue?vue&type=template&id=1a1bcf54&scoped=true"
/*!**********************************************************************************!*\
  !*** ./assets/components/Finances.vue?vue&type=template&id=1a1bcf54&scoped=true ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Finances_vue_vue_type_template_id_1a1bcf54_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Finances_vue_vue_type_template_id_1a1bcf54_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Finances.vue?vue&type=template&id=1a1bcf54&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=template&id=1a1bcf54&scoped=true");


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

/***/ "./assets/components/Calendrier.vue?vue&type=style&index=0&id=541ad3ac&scoped=true&lang=css"
/*!**************************************************************************************************!*\
  !*** ./assets/components/Calendrier.vue?vue&type=style&index=0&id=541ad3ac&scoped=true&lang=css ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Calendrier_vue_vue_type_style_index_0_id_541ad3ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Calendrier.vue?vue&type=style&index=0&id=541ad3ac&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Calendrier.vue?vue&type=style&index=0&id=541ad3ac&scoped=true&lang=css");


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

/***/ "./assets/components/Finances.vue?vue&type=style&index=0&id=1a1bcf54&scoped=true&lang=css"
/*!************************************************************************************************!*\
  !*** ./assets/components/Finances.vue?vue&type=style&index=0&id=1a1bcf54&scoped=true&lang=css ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Finances_vue_vue_type_style_index_0_id_1a1bcf54_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Finances.vue?vue&type=style&index=0&id=1a1bcf54&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Finances.vue?vue&type=style&index=0&id=1a1bcf54&scoped=true&lang=css");


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_vuedraggable_dist_vuedragga-a2e429"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMOztBQUVsRCxDQUEyRTs7QUFFUTtBQUNuRixpQ0FBaUMseUZBQWUsQ0FBQyx5RUFBTSxhQUFhLHVGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxFQVlmOzs7QUFHRCxpRUFBZSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QitEO0FBQ3RCO0FBQ0w7O0FBRW5ELENBQTRFOztBQUVPO0FBQ25GLGlDQUFpQyx5RkFBZSxDQUFDLDBFQUFNLGFBQWEsd0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBWWY7OztBQUdELGlFQUFlLFc7Ozs7Ozs7Ozs7Ozs7OztBQ3hCNkssQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWEsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUcsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUosQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUcsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUMsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUYsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FsZW5kcmllci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbmFuY2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9CYWRnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9kZXNpZ24tc3lzdGVtLmNzcz9kYjdkIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlP2IyODMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FsZW5kcmllci52dWU/OTViMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlP2M5NTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZT9jNDY2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbmFuY2VzLnZ1ZT8wOTg3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZT8yOTc2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0J1dHRvbi52dWU/YzcxNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9DYXJkLnZ1ZT9lNTM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZT9lMzg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzg5ZGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FsZW5kcmllci52dWU/ODMxZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlPzdkNTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZT9iOThhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbmFuY2VzLnZ1ZT9mZTc3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZT81ODQ4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0J1dHRvbi52dWU/ZjgzMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9DYXJkLnZ1ZT81NTEyIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZT8xZjMwIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzdlMDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FsZW5kcmllci52dWU/N2U0MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlPzI1YmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZT80YmFmIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbmFuY2VzLnZ1ZT8xMDA2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZT8wMDY2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0J1dHRvbi52dWU/MDE4YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9DYXJkLnZ1ZT9lNmVkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZT9kMzI1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlP2VkN2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FsZW5kcmllci52dWU/NGEyNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlPzU3NmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZT81MDZkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbmFuY2VzLnZ1ZT9iOWViIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZT9mNDllIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0J1dHRvbi52dWU/N2E5YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9DYXJkLnZ1ZT80NWNlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZT9iZTg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzkxMzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FsZW5kcmllci52dWU/ZmM5ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlPzk1NDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZT8wNDllIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZpbmFuY2VzLnZ1ZT9jZjkxIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZT9jZDk1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL0J1dHRvbi52dWU/MzlmYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9DYXJkLnZ1ZT81ZDJjIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL01vZGFsLnZ1ZT8xZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcclxuaW1wb3J0IEV0YXBlc0thbmJhbiBmcm9tICcuL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZSc7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Rhc2hib2FyZC52dWUnO1xyXG5pbXBvcnQgQ2FsZW5kcmllciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsZW5kcmllci52dWUnO1xyXG5pbXBvcnQgRmluYW5jZXMgZnJvbSAnLi9jb21wb25lbnRzL0ZpbmFuY2VzLnZ1ZSc7XHJcblxyXG4vLyBJbXBvcnQgZHUgRGVzaWduIFN5c3RlbVxyXG5pbXBvcnQgJy4vc3R5bGVzL2Rlc2lnbi1zeXN0ZW0uY3NzJztcclxuXHJcbi8vIEltcG9ydCBkZXMgY29tcG9zYW50cyBVSVxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy91aS9CdXR0b24udnVlJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL3VpL0NhcmQudnVlJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vY29tcG9uZW50cy91aS9Nb2RhbC52dWUnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL0JhZGdlLnZ1ZSc7XHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKTtcclxuXHJcbi8vIEVucmVnaXN0cmVyIGxlcyBjb21wb3NhbnRzIGdsb2JhbGVtZW50XHJcbmFwcC5jb21wb25lbnQoJ0J1dHRvbicsIEJ1dHRvbik7XHJcbmFwcC5jb21wb25lbnQoJ0NhcmQnLCBDYXJkKTtcclxuYXBwLmNvbXBvbmVudCgnTW9kYWwnLCBNb2RhbCk7XHJcbmFwcC5jb21wb25lbnQoJ0JhZGdlJywgQmFkZ2UpO1xyXG5hcHAuY29tcG9uZW50KCdFdGFwZXNLYW5iYW4nLCBFdGFwZXNLYW5iYW4pO1xyXG5hcHAuY29tcG9uZW50KCdEYXNoYm9hcmQnLCBEYXNoYm9hcmQpO1xyXG5hcHAuY29tcG9uZW50KCdDYWxlbmRyaWVyJywgQ2FsZW5kcmllcik7XHJcbmFwcC5jb21wb25lbnQoJ0ZpbmFuY2VzJywgRmluYW5jZXMpO1xyXG5cclxuYXBwLm1vdW50KCcjYXBwJyk7IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgaWQ9XCJhcHBcIj5cclxuICAgIDwhLS0gSGVhZGVyIGF2ZWMgbmF2aWdhdGlvbiAtLT5cclxuICAgIDxoZWFkZXIgY2xhc3M9XCJhcHAtaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1icmFuZFwiPlxyXG4gICAgICAgICAgPGgxPkJ1c2luZXNzIE1hbmFnZXI8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItc3VidGl0bGVcIj5HZXN0aW9uIGRlIHRvbiBwcm9qZXQgZW50cmVwcmVuZXVyaWFsIC0gTW9uIEFzc2lzdGFudCBOdW3DqXJpcXVlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXItbmF2XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBAY2xpY2s9XCJjdXJyZW50VmlldyA9ICdob21lJ1wiIFxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJbJ25hdi1idXR0b24nLCB7IGFjdGl2ZTogY3VycmVudFZpZXcgPT09ICdob21lJyB9XVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIPCfj6AgQWNjdWVpbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBAY2xpY2s9XCJjdXJyZW50VmlldyA9ICdkYXNoYm9hcmQnXCIgXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIlsnbmF2LWJ1dHRvbicsIHsgYWN0aXZlOiBjdXJyZW50VmlldyA9PT0gJ2Rhc2hib2FyZCcgfV1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDwn5OKIERhc2hib2FyZFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBAY2xpY2s9XCJjdXJyZW50VmlldyA9ICdrYW5iYW4nXCIgXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIlsnbmF2LWJ1dHRvbicsIHsgYWN0aXZlOiBjdXJyZW50VmlldyA9PT0gJ2thbmJhbicgfV1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDwn5OLIFN1aXZpIGRlcyDDiXRhcGVzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2NhbGVuZHJpZXInXCIgXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIlsnbmF2LWJ1dHRvbicsIHsgYWN0aXZlOiBjdXJyZW50VmlldyA9PT0gJ2NhbGVuZHJpZXInIH1dXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg8J+ThSBDYWxlbmRyaWVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2ZpbmFuY2VzJ1wiIFxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJbJ25hdi1idXR0b24nLCB7IGFjdGl2ZTogY3VycmVudFZpZXcgPT09ICdmaW5hbmNlcycgfV1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDwn5KwIEZpbmFuY2VzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuXHJcbiAgICA8IS0tIENvbnRlbnUgcHJpbmNpcGFsIC0tPlxyXG4gICAgPG1haW4gY2xhc3M9XCJhcHAtbWFpblwiPlxyXG4gICAgICA8IS0tIFZ1ZSBBY2N1ZWlsIC0tPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJjdXJyZW50VmlldyA9PT0gJ2hvbWUnXCIgY2xhc3M9XCJob21lLXZpZXdcIj5cclxuICAgICAgICA8Q2FyZCBjbGFzcz1cIndlbGNvbWUtY2FyZFwiPlxyXG4gICAgICAgICAgPGgyPvCfkYsgQmllbnZlbnVlIHN1ciB0b24gQnVzaW5lc3MgTWFuYWdlcjwvaDI+XHJcbiAgICAgICAgICA8cD5Ub24gdGFibGVhdSBkZSBib3JkIGVudHJlcHJlbmV1cmlhbCBjb21wbGV0IGVzdCBwcsOqdCAhPC9wPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZS1zdGF0dXNcIj5cclxuICAgICAgICAgICAg4pyFIEFwcGxpY2F0aW9uIFYxIGNvbXBsw6h0ZSBhdmVjIDUgbW9kdWxlcyBmb25jdGlvbm5lbHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmVzLWdyaWRcIj5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzPVwiZmVhdHVyZS1jYXJkXCIgaG92ZXJhYmxlIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2Rhc2hib2FyZCdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmUtaWNvblwiPvCfk4o8L2Rpdj5cclxuICAgICAgICAgICAgPGgzPkRhc2hib2FyZDwvaDM+XHJcbiAgICAgICAgICAgIDxwPlZ1ZSBkJ2Vuc2VtYmxlIGF2ZWMgZ3JhcGhpcXVlcyBldCBzdGF0aXN0aXF1ZXM8L3A+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgPENhcmQgY2xhc3M9XCJmZWF0dXJlLWNhcmRcIiBob3ZlcmFibGUgQGNsaWNrPVwiY3VycmVudFZpZXcgPSAna2FuYmFuJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1pY29uXCI+8J+TizwvZGl2PlxyXG4gICAgICAgICAgICA8aDM+U3VpdmkgZGVzIMOJdGFwZXM8L2gzPlxyXG4gICAgICAgICAgICA8cD5LYW5iYW4gYXZlYyBkcmFnICYgZHJvcCBldCBmaWx0cmVzIGF2YW5jw6lzPC9wPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzPVwiZmVhdHVyZS1jYXJkXCIgaG92ZXJhYmxlIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2NhbGVuZHJpZXInXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlLWljb25cIj7wn5OFPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMz5DYWxlbmRyaWVyPC9oMz5cclxuICAgICAgICAgICAgPHA+VmlzdWFsaXNlIHRlcyDDqWNow6lhbmNlcyBldCBwbGFuaWZpZSB0b24gcHJvamV0PC9wPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzPVwiZmVhdHVyZS1jYXJkXCIgaG92ZXJhYmxlIEBjbGljaz1cImN1cnJlbnRWaWV3ID0gJ2ZpbmFuY2VzJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1pY29uXCI+8J+SsDwvZGl2PlxyXG4gICAgICAgICAgICA8aDM+RmluYW5jZXM8L2gzPlxyXG4gICAgICAgICAgICA8cD5CdWRnZXQsIHRyw6lzb3JlcmllIGV0IHN1aXZpIGRlcyBkw6lwZW5zZXM8L3A+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gU3RhdHMgcmFwaWRlcyAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZS1zdGF0c1wiPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3M9XCJob21lLXN0YXQtY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaWNvblwiPvCfjq88L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj5WMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPlZlcnNpb24gQWN0dWVsbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzPVwiaG9tZS1zdGF0LWNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWljb25cIj7wn5qAPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPk1vZHVsZXMgQWN0aWZzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICA8Q2FyZCBjbGFzcz1cImhvbWUtc3RhdC1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pY29uXCI+4pqhPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+MTAwJTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPk9ww6lyYXRpb25uZWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gVnVlIERhc2hib2FyZCAtLT5cclxuICAgICAgPERhc2hib2FyZCBcclxuICAgICAgICB2LWlmPVwiY3VycmVudFZpZXcgPT09ICdkYXNoYm9hcmQnXCIgXHJcbiAgICAgICAgQG5hdmlnYXRlPVwibmF2aWdhdGVUb1wiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8IS0tIFZ1ZSBLYW5iYW4gLS0+XHJcbiAgICAgIDxFdGFwZXNLYW5iYW4gdi1pZj1cImN1cnJlbnRWaWV3ID09PSAna2FuYmFuJ1wiIC8+XHJcblxyXG4gICAgICA8IS0tIFZ1ZSBDYWxlbmRyaWVyIC0tPlxyXG4gICAgICA8Q2FsZW5kcmllciBcclxuICAgICAgICB2LWlmPVwiY3VycmVudFZpZXcgPT09ICdjYWxlbmRyaWVyJ1wiXHJcbiAgICAgICAgQG5hdmlnYXRlPVwibmF2aWdhdGVUb1wiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8IS0tIFZ1ZSBGaW5hbmNlcyAtLT5cclxuICAgICAgPEZpbmFuY2VzIHYtaWY9XCJjdXJyZW50VmlldyA9PT0gJ2ZpbmFuY2VzJ1wiIC8+XHJcbiAgICA8L21haW4+XHJcblxyXG4gICAgPCEtLSBGb290ZXIgLS0+XHJcbiAgICA8Zm9vdGVyIGNsYXNzPVwiYXBwLWZvb3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICA8cD4mY29weTsgMjAyNiBCdXNpbmVzcyBNYW5hZ2VyIC0gTW9uIEFzc2lzdGFudCBOdW3DqXJpcXVlPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLXZlcnNpb25cIj5WZXJzaW9uIDEuMCAtIFN5bWZvbnkgNy4yICsgVnVlLmpzIDM8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRXRhcGVzS2FuYmFuIGZyb20gJy4vY29tcG9uZW50cy9FdGFwZXNLYW5iYW4udnVlJ1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9EYXNoYm9hcmQudnVlJ1xyXG5pbXBvcnQgQ2FsZW5kcmllciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsZW5kcmllci52dWUnXHJcbmltcG9ydCBGaW5hbmNlcyBmcm9tICcuL2NvbXBvbmVudHMvRmluYW5jZXMudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdBcHAnLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEV0YXBlc0thbmJhbixcclxuICAgIERhc2hib2FyZCxcclxuICAgIENhbGVuZHJpZXIsXHJcbiAgICBGaW5hbmNlc1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGN1cnJlbnRWaWV3OiAnaG9tZScgLy8gaG9tZSwgZGFzaGJvYXJkLCBrYW5iYW4sIGNhbGVuZHJpZXIsIGZpbmFuY2VzXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBuYXZpZ2F0ZVRvKHZpZXcpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHZpZXdcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi8qIFJlc2V0IGV0IHZhcmlhYmxlcyBnbG9iYWxlcyBkw6lqw6AgZGFucyBkZXNpZ24tc3lzdGVtLmNzcyAqL1xyXG5cclxuI2FwcCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuLmFwcC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnkpIDAlLCB2YXIoLS1zZWNvbmRhcnkpIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZykgMDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UteGwpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaGVhZGVyLWJyYW5kIGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5oZWFkZXItc3VidGl0bGUge1xyXG4gIG1hcmdpbjogdmFyKC0tc3BhY2UteHMpIDAgMCAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uaGVhZGVyLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCkgdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLm5hdi1idXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogTWFpbiAqL1xyXG4uYXBwLW1haW4ge1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLyogSG9tZSBWaWV3ICovXHJcbi5ob21lLXZpZXcge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLndlbGNvbWUtY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5KSAwJSwgdmFyKC0tc2Vjb25kYXJ5KSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi53ZWxjb21lLWNhcmQgaDIge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLW1kKSAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLndlbGNvbWUtY2FyZCBwIHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1sZykgMDtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLndlbGNvbWUtc3RhdHVzIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1pY29uIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkIGgzIHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zbSkgMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmhvbWUtc3RhdHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5ob21lLXN0YXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctcHJpbWFyeSksIHZhcigtLWJnLXNlY29uZGFyeSkpO1xyXG59XHJcblxyXG4uc3RhdC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5zdGF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uc3RhdC1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS14cyk7XHJcbn1cclxuXHJcbi5zdGF0LXZhbHVlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuLmFwcC1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktODAwKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS0zMDApO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKSAwO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS14bCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS14cykgMDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLXZlcnNpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1uYXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0dXJlcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FsZW5kcmllclwiPlxyXG4gICAgPCEtLSBIZWFkZXIgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kcmllci1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPlxyXG4gICAgICAgIDxoMj7wn5OFIENhbGVuZHJpZXI8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5WaXN1YWxpc2UgdGVzIMOpY2jDqWFuY2VzIGV0IHBsYW5pZmllIHRvbiBwcm9qZXQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBDb250csO0bGVzIGRlIG5hdmlnYXRpb24gLS0+XHJcbiAgICA8Q2FyZCBjbGFzcz1cImNhbGVuZGFyLWNvbnRyb2xzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scy1yb3dcIj5cclxuICAgICAgICA8QnV0dG9uIEBjbGljaz1cInByZXZpb3VzTW9udGhcIiB2YXJpYW50PVwiZ2hvc3RcIj5cclxuICAgICAgICAgIOKGkCBNb2lzIHByw6ljw6lkZW50XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGgzIGNsYXNzPVwiY3VycmVudC1tb250aFwiPnt7IGN1cnJlbnRNb250aFllYXIgfX08L2gzPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCdXR0b24gQGNsaWNrPVwibmV4dE1vbnRoXCIgdmFyaWFudD1cImdob3N0XCI+XHJcbiAgICAgICAgICBNb2lzIHN1aXZhbnQg4oaSXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLWZpbHRlcnNcIj5cclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgQGNsaWNrPVwiZ29Ub1RvZGF5XCIgXHJcbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiIFxyXG4gICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDwn5ONIEF1am91cmQnaHVpXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLWRvdCB1cmdlbnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPlVyZ2VudDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLWRvdCBub3JtYWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPk5vcm1hbDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLWRvdCBsb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkJhc3NlPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG5cclxuICAgIDwhLS0gQ2FsZW5kcmllciAtLT5cclxuICAgIDxDYXJkIGNsYXNzPVwiY2FsZW5kYXItZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgPCEtLSBFbi10w6p0ZSBkZXMgam91cnMgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkZXItZGF5c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXktbmFtZVwiIHYtZm9yPVwiZGF5IGluIGRheXNPZldlZWtcIiA6a2V5PVwiZGF5XCI+XHJcbiAgICAgICAgICB7eyBkYXkgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIEdyaWxsZSBkdSBjYWxlbmRyaWVyIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItZ3JpZFwiPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICB2LWZvcj1cIihkYXksIGluZGV4KSBpbiBjYWxlbmRhckRheXNcIiBcclxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJnZXREYXlDbGFzc2VzKGRheSlcIlxyXG4gICAgICAgICAgQGNsaWNrPVwic2VsZWN0RGF5KGRheSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXktbnVtYmVyXCI+e3sgZGF5Lm51bWJlciB9fTwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJkYXkuZXRhcGVzLmxlbmd0aCA+IDBcIiBjbGFzcz1cImRheS1ldGFwZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICB2LWZvcj1cImV0YXBlIGluIGRheS5ldGFwZXMuc2xpY2UoMCwgMylcIiBcclxuICAgICAgICAgICAgICA6a2V5PVwiZXRhcGUuaWRcIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsnZXRhcGUtcGlsbCcsIGdldFByaW9yaXR5Q2xhc3MoZXRhcGUucHJpb3JpdHkpXVwiXHJcbiAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJvcGVuRXRhcGVEZXRhaWxzKGV0YXBlKVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV0YXBlLXRpdGxlXCI+e3sgdHJ1bmNhdGUoZXRhcGUudGl0cmUsIDIwKSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJkYXkuZXRhcGVzLmxlbmd0aCA+IDNcIiBjbGFzcz1cIm1vcmUtZXRhcGVzXCI+XHJcbiAgICAgICAgICAgICAgK3t7IGRheS5ldGFwZXMubGVuZ3RoIC0gMyB9fSBhdXRyZShzKVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuXHJcbiAgICA8IS0tIExpc3RlIGRlcyDDqXRhcGVzIGR1IGpvdXIgc8OpbGVjdGlvbm7DqSAtLT5cclxuICAgIDxDYXJkIHYtaWY9XCJzZWxlY3RlZERheSAmJiBzZWxlY3RlZERheS5ldGFwZXMubGVuZ3RoID4gMFwiIGNsYXNzPVwic2VsZWN0ZWQtZGF5LWRldGFpbHNcIj5cclxuICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiY2hhcnQtdGl0bGVcIj5cclxuICAgICAgICAgIPCfk4sgw4l0YXBlcyBkdSB7eyBmb3JtYXRTZWxlY3RlZERhdGUgfX1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cImV0YXBlcy1saXN0XCI+XHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgIHYtZm9yPVwiZXRhcGUgaW4gc2VsZWN0ZWREYXkuZXRhcGVzXCIgXHJcbiAgICAgICAgICA6a2V5PVwiZXRhcGUuaWRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJldGFwZS1pdGVtXCJcclxuICAgICAgICAgIEBjbGljaz1cImdvVG9LYW5iYW5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJldGFwZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGg0Pnt7IGV0YXBlLnRpdHJlIH19PC9oND5cclxuICAgICAgICAgICAgPEJhZGdlIDp2YXJpYW50PVwiZ2V0UHJpb3JpdHlWYXJpYW50KGV0YXBlLnByaW9yaXR5KVwiPlxyXG4gICAgICAgICAgICAgIHt7IGdldFByaW9yaXR5TGFiZWwoZXRhcGUucHJpb3JpdHkpIH19XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHAgdi1pZj1cImV0YXBlLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJldGFwZS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICB7eyBldGFwZS5kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXRhcGUtbWV0YVwiPlxyXG4gICAgICAgICAgICA8QmFkZ2UgOnZhcmlhbnQ9XCJnZXRTdGF0dXNWYXJpYW50KGV0YXBlLnN0YXR1dClcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICB7eyBnZXRTdGF0dXNMYWJlbChldGFwZS5zdGF0dXQpIH19XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZXRhcGUuY2F0ZWdvcnlcIiB2YXJpYW50PVwiZ3JheVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgIHt7IGV0YXBlLmNhdGVnb3J5IH19XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcblxyXG4gICAgPCEtLSBTdGF0cyBtZW5zdWVsbGVzIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vbnRobHktc3RhdHNcIj5cclxuICAgICAgPENhcmQgY2xhc3M9XCJzdGF0LWNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pY29uXCI+8J+TijwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBtb250aFN0YXRzLnRvdGFsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj7DiWNow6lhbmNlcyBjZSBtb2lzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDxDYXJkIGNsYXNzPVwic3RhdC1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaWNvblwiPuKPsDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBtb250aFN0YXRzLnRoaXNXZWVrIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5DZXR0ZSBzZW1haW5lPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDxDYXJkIGNsYXNzPVwic3RhdC1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaWNvblwiPvCflLQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+e3sgbW9udGhTdGF0cy51cmdlbnQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPlVyZ2VudGVzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDxDYXJkIGNsYXNzPVwic3RhdC1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaWNvblwiPuKaoO+4jzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBtb250aFN0YXRzLm92ZXJkdWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPkVuIHJldGFyZDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQ2FsZW5kcmllcicsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGV0YXBlczogW10sXHJcbiAgICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBzZWxlY3RlZERheTogbnVsbCxcclxuICAgICAgZGF5c09mV2VlazogWydMdW4nLCAnTWFyJywgJ01lcicsICdKZXUnLCAnVmVuJywgJ1NhbScsICdEaW0nXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGN1cnJlbnRNb250aFllYXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7IFxyXG4gICAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICAgIHllYXI6ICdudW1lcmljJyBcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBmb3JtYXRTZWxlY3RlZERhdGUoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZERheSkgcmV0dXJuICcnXHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRGF5LmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgbW9udGg6ICdsb25nJyxcclxuICAgICAgICB5ZWFyOiAnbnVtZXJpYydcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjYWxlbmRhckRheXMoKSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgY29uc3QgbW9udGggPSB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKClcclxuICAgICAgXHJcbiAgICAgIC8vIFByZW1pZXIgam91ciBkdSBtb2lzXHJcbiAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpXHJcbiAgICAgIC8vIERlcm5pZXIgam91ciBkdSBtb2lzXHJcbiAgICAgIGNvbnN0IGxhc3REYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApXHJcbiAgICAgIFxyXG4gICAgICAvLyBKb3VyIGRlIGxhIHNlbWFpbmUgZHUgcHJlbWllciBqb3VyICgwID0gZGltYW5jaGUsIDEgPSBsdW5kaSwgZXRjLilcclxuICAgICAgbGV0IGZpcnN0RGF5T2ZXZWVrID0gZmlyc3REYXkuZ2V0RGF5KClcclxuICAgICAgLy8gQ29udmVydGlyIGRpbWFuY2hlICgwKSBlbiA3IHBvdXIgcXVlIGx1bmRpIHNvaXQgMVxyXG4gICAgICBmaXJzdERheU9mV2VlayA9IGZpcnN0RGF5T2ZXZWVrID09PSAwID8gNyA6IGZpcnN0RGF5T2ZXZWVrXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBkYXlzID0gW11cclxuICAgICAgXHJcbiAgICAgIC8vIEpvdXJzIGR1IG1vaXMgcHLDqWPDqWRlbnRcclxuICAgICAgY29uc3QgcHJldk1vbnRoTGFzdERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKClcclxuICAgICAgZm9yIChsZXQgaSA9IGZpcnN0RGF5T2ZXZWVrIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIHByZXZNb250aExhc3REYXkgLSBpICsgMSlcclxuICAgICAgICBkYXlzLnB1c2goe1xyXG4gICAgICAgICAgbnVtYmVyOiBwcmV2TW9udGhMYXN0RGF5IC0gaSArIDEsXHJcbiAgICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgICAgaXNDdXJyZW50TW9udGg6IGZhbHNlLFxyXG4gICAgICAgICAgaXNUb2RheTogZmFsc2UsXHJcbiAgICAgICAgICBldGFwZXM6IHRoaXMuZ2V0RXRhcGVzRm9yRGF0ZShkYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEpvdXJzIGR1IG1vaXMgYWN0dWVsXHJcbiAgICAgIGZvciAobGV0IGRheSA9IDE7IGRheSA8PSBsYXN0RGF5LmdldERhdGUoKTsgZGF5KyspIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSlcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgICAgICBjb25zdCBpc1RvZGF5ID0gZGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gdG9kYXkudG9EYXRlU3RyaW5nKClcclxuICAgICAgICBcclxuICAgICAgICBkYXlzLnB1c2goe1xyXG4gICAgICAgICAgbnVtYmVyOiBkYXksXHJcbiAgICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgICAgaXNDdXJyZW50TW9udGg6IHRydWUsXHJcbiAgICAgICAgICBpc1RvZGF5OiBpc1RvZGF5LFxyXG4gICAgICAgICAgZXRhcGVzOiB0aGlzLmdldEV0YXBlc0ZvckRhdGUoZGF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBKb3VycyBkdSBtb2lzIHN1aXZhbnQgcG91ciBjb21wbMOpdGVyIGxhIGdyaWxsZVxyXG4gICAgICBjb25zdCByZW1haW5pbmdEYXlzID0gNDIgLSBkYXlzLmxlbmd0aCAvLyA2IHNlbWFpbmVzIG1heFxyXG4gICAgICBmb3IgKGxldCBkYXkgPSAxOyBkYXkgPD0gcmVtYWluaW5nRGF5czsgZGF5KyspIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCBkYXkpXHJcbiAgICAgICAgZGF5cy5wdXNoKHtcclxuICAgICAgICAgIG51bWJlcjogZGF5LFxyXG4gICAgICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAgICAgIGlzQ3VycmVudE1vbnRoOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG9kYXk6IGZhbHNlLFxyXG4gICAgICAgICAgZXRhcGVzOiB0aGlzLmdldEV0YXBlc0ZvckRhdGUoZGF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gZGF5c1xyXG4gICAgfSxcclxuICAgIG1vbnRoU3RhdHMoKSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgY29uc3QgbW9udGggPSB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKClcclxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBtb250aEV0YXBlcyA9IHRoaXMuZXRhcGVzLmZpbHRlcihlID0+IHtcclxuICAgICAgICBpZiAoIWUuZGF0ZUxpbWl0ZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGUuZGF0ZUxpbWl0ZSlcclxuICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGhcclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIC8vIENldHRlIHNlbWFpbmVcclxuICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSBuZXcgRGF0ZSh0b2RheSlcclxuICAgICAgc3RhcnRPZldlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSB0b2RheS5nZXREYXkoKSArIDEpXHJcbiAgICAgIGNvbnN0IGVuZE9mV2VlayA9IG5ldyBEYXRlKHN0YXJ0T2ZXZWVrKVxyXG4gICAgICBlbmRPZldlZWsuc2V0RGF0ZShzdGFydE9mV2Vlay5nZXREYXRlKCkgKyA2KVxyXG4gICAgICBcclxuICAgICAgY29uc3QgdGhpc1dlZWsgPSBtb250aEV0YXBlcy5maWx0ZXIoZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGUuZGF0ZUxpbWl0ZSlcclxuICAgICAgICByZXR1cm4gZGF0ZSA+PSBzdGFydE9mV2VlayAmJiBkYXRlIDw9IGVuZE9mV2Vla1xyXG4gICAgICB9KS5sZW5ndGhcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdG90YWw6IG1vbnRoRXRhcGVzLmxlbmd0aCxcclxuICAgICAgICB0aGlzV2VlazogdGhpc1dlZWssXHJcbiAgICAgICAgdXJnZW50OiBtb250aEV0YXBlcy5maWx0ZXIoZSA9PiBlLnByaW9yaXR5ID09PSAndXJnZW50JykubGVuZ3RoLFxyXG4gICAgICAgIG92ZXJkdWU6IG1vbnRoRXRhcGVzLmZpbHRlcihlID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShlLmRhdGVMaW1pdGUpXHJcbiAgICAgICAgICByZXR1cm4gZGF0ZSA8IHRvZGF5ICYmIGUuc3RhdHV0ICE9PSAnZG9uZSdcclxuICAgICAgICB9KS5sZW5ndGhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMubG9hZEV0YXBlcygpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBsb2FkRXRhcGVzKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZXRhcGVzJylcclxuICAgICAgICB0aGlzLmV0YXBlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBjaGFyZ2VtZW50IMOpdGFwZXM6JywgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRFdGFwZXNGb3JEYXRlKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZXRhcGVzLmZpbHRlcihldGFwZSA9PiB7XHJcbiAgICAgICAgaWYgKCFldGFwZS5kYXRlTGltaXRlKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBjb25zdCBldGFwZURhdGUgPSBuZXcgRGF0ZShldGFwZS5kYXRlTGltaXRlKVxyXG4gICAgICAgIHJldHVybiBldGFwZURhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnZXREYXlDbGFzc2VzKGRheSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgICdjYWxlbmRhci1kYXknLFxyXG4gICAgICAgIHsgJ290aGVyLW1vbnRoJzogIWRheS5pc0N1cnJlbnRNb250aCB9LFxyXG4gICAgICAgIHsgJ3RvZGF5JzogZGF5LmlzVG9kYXkgfSxcclxuICAgICAgICB7ICdoYXMtZXRhcGVzJzogZGF5LmV0YXBlcy5sZW5ndGggPiAwIH0sXHJcbiAgICAgICAgeyAnc2VsZWN0ZWQnOiB0aGlzLnNlbGVjdGVkRGF5ICYmIHRoaXMuc2VsZWN0ZWREYXkuZGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gZGF5LmRhdGUudG9EYXRlU3RyaW5nKCkgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgZ2V0UHJpb3JpdHlDbGFzcyhwcmlvcml0eSkge1xyXG4gICAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAgIHVyZ2VudDogJ3ByaW9yaXR5LXVyZ2VudCcsXHJcbiAgICAgICAgbm9ybWFsOiAncHJpb3JpdHktbm9ybWFsJyxcclxuICAgICAgICBsb3c6ICdwcmlvcml0eS1sb3cnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNsYXNzZXNbcHJpb3JpdHldIHx8ICdwcmlvcml0eS1ub25lJ1xyXG4gICAgfSxcclxuICAgIGdldFByaW9yaXR5VmFyaWFudChwcmlvcml0eSkge1xyXG4gICAgICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgICB1cmdlbnQ6ICdkYW5nZXInLFxyXG4gICAgICAgIG5vcm1hbDogJ3dhcm5pbmcnLFxyXG4gICAgICAgIGxvdzogJ3N1Y2Nlc3MnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHZhcmlhbnRzW3ByaW9yaXR5XSB8fCAnZ3JheSdcclxuICAgIH0sXHJcbiAgICBnZXRQcmlvcml0eUxhYmVsKHByaW9yaXR5KSB7XHJcbiAgICAgIGNvbnN0IGxhYmVscyA9IHtcclxuICAgICAgICB1cmdlbnQ6ICfwn5S0IFVyZ2VudCcsXHJcbiAgICAgICAgbm9ybWFsOiAn8J+foSBOb3JtYWwnLFxyXG4gICAgICAgIGxvdzogJ/Cfn6IgQmFzc2UnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxhYmVsc1twcmlvcml0eV0gfHwgJ05vbiBkw6lmaW5pZSdcclxuICAgIH0sXHJcbiAgICBnZXRTdGF0dXNWYXJpYW50KHN0YXR1dCkge1xyXG4gICAgICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgICB0b2RvOiAnZ3JheScsXHJcbiAgICAgICAgaW5fcHJvZ3Jlc3M6ICd3YXJuaW5nJyxcclxuICAgICAgICBkb25lOiAnc3VjY2VzcydcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdmFyaWFudHNbc3RhdHV0XSB8fCAnZ3JheSdcclxuICAgIH0sXHJcbiAgICBnZXRTdGF0dXNMYWJlbChzdGF0dXQpIHtcclxuICAgICAgY29uc3QgbGFiZWxzID0ge1xyXG4gICAgICAgIHRvZG86ICfwn5OdIMOAIGZhaXJlJyxcclxuICAgICAgICBpbl9wcm9ncmVzczogJ+KPsyBFbiBjb3VycycsXHJcbiAgICAgICAgZG9uZTogJ+KchSBUZXJtaW7DqSdcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGFiZWxzW3N0YXR1dF0gfHwgc3RhdHV0XHJcbiAgICB9LFxyXG4gICAgcHJldmlvdXNNb250aCgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCkgLSAxLFxyXG4gICAgICAgIDFcclxuICAgICAgKVxyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF5ID0gbnVsbFxyXG4gICAgfSxcclxuICAgIG5leHRNb250aCgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgIDFcclxuICAgICAgKVxyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF5ID0gbnVsbFxyXG4gICAgfSxcclxuICAgIGdvVG9Ub2RheSgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgdGhpcy5zZWxlY3RlZERheSA9IG51bGxcclxuICAgIH0sXHJcbiAgICBzZWxlY3REYXkoZGF5KSB7XHJcbiAgICAgIGlmIChkYXkuZXRhcGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF5ID0gZGF5XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcGVuRXRhcGVEZXRhaWxzKGV0YXBlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXkgPSB0aGlzLmNhbGVuZGFyRGF5cy5maW5kKGRheSA9PiBcclxuICAgICAgICBkYXkuZXRhcGVzLnNvbWUoZSA9PiBlLmlkID09PSBldGFwZS5pZClcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHRydW5jYXRlKHRleHQsIGxlbmd0aCkge1xyXG4gICAgICBpZiAoIXRleHQpIHJldHVybiAnJ1xyXG4gICAgICByZXR1cm4gdGV4dC5sZW5ndGggPiBsZW5ndGggPyB0ZXh0LnN1YnN0cmluZygwLCBsZW5ndGgpICsgJy4uLicgOiB0ZXh0XHJcbiAgICB9LFxyXG4gICAgZ29Ub0thbmJhbigpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnbmF2aWdhdGUnLCAna2FuYmFuJylcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY2FsZW5kcmllciB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpO1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIHZhcigtLXRyYW5zaXRpb24tc2xvdyk7XHJcbn1cclxuXHJcbi8qIEhlYWRlciAqL1xyXG4uY2FsZW5kcmllci1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2Utc20pIDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBDb250cm9scyAqL1xyXG4uY2FsZW5kYXItY29udHJvbHMge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmNvbnRyb2xzLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5jdXJyZW50LW1vbnRoIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmNvbnRyb2xzLWZpbHRlcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ubGVnZW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4ubGVnZW5kLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLXhzKTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5sZWdlbmQtZG90IHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubGVnZW5kLWRvdC51cmdlbnQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7IH1cclxuLmxlZ2VuZC1kb3Qubm9ybWFsIHsgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7IH1cclxuLmxlZ2VuZC1kb3QubG93IHsgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7IH1cclxuXHJcbi8qIENhbGVuZGFyIEdyaWQgKi9cclxuLmNhbGVuZGFyLWdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi5jYWxlbmRhci1oZWFkZXItZGF5cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG4gIGdhcDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmRheS1uYW1lIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYWxlbmRhci1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgZ2FwOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLmNhbGVuZGFyLWRheSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYWxlbmRhci1kYXk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5jYWxlbmRhci1kYXkub3RoZXItbW9udGgge1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmNhbGVuZGFyLWRheS50b2RheSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpLCByZ2JhKDExOCwgNzUsIDE2MiwgMC4xKSk7XHJcbn1cclxuXHJcbi5jYWxlbmRhci1kYXkudG9kYXkgLmRheS1udW1iZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY2FsZW5kYXItZGF5LnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLmRheS1udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14cyk7XHJcbn1cclxuXHJcbi5kYXktZXRhcGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAycHg7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmV0YXBlLXBpbGwge1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmV0YXBlLXBpbGw6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG5cclxuLnByaW9yaXR5LXVyZ2VudCB7IGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTsgfVxyXG4ucHJpb3JpdHktbm9ybWFsIHsgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7IH1cclxuLnByaW9yaXR5LWxvdyB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpOyB9XHJcbi5wcmlvcml0eS1ub25lIHsgYmFja2dyb3VuZDogdmFyKC0tZ3JheS00MDApOyB9XHJcblxyXG4uZXRhcGUtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4ubW9yZS1ldGFwZXMge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBTZWxlY3RlZCBEYXkgRGV0YWlscyAqL1xyXG4uc2VsZWN0ZWQtZGF5LWRldGFpbHMge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmV0YXBlcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi5ldGFwZS1pdGVtIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZXRhcGUtaXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG5cclxuLmV0YXBlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xyXG59XHJcblxyXG4uZXRhcGUtaGVhZGVyIGg0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4uZXRhcGUtZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLW1kKSAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmV0YXBlLW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4vKiBNb250aGx5IFN0YXRzICovXHJcbi5tb250aGx5LXN0YXRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1iZy1wcmltYXJ5KSwgdmFyKC0tYmctc2Vjb25kYXJ5KSk7XHJcbn1cclxuXHJcbi5zdGF0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLnN0YXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uc3RhdC1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS14cyk7XHJcbn1cclxuXHJcbi5zdGF0LXZhbHVlIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uc3RhdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhbGVuZGFyLWdyaWQge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxlbmRhci1kYXkge1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhzKTtcclxuICB9XHJcbiAgXHJcbiAgLmRheS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKTtcclxuICB9XHJcbiAgXHJcbiAgLmN1cnJlbnQtbW9udGgge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udHJvbHMtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxuICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImRhc2hib2FyZFwiPlxyXG4gICAgPCEtLSBIZWFkZXIgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlXCI+XHJcbiAgICAgICAgPGgyPvCfk4ogVGFibGVhdSBkZSBCb3JkPC9oMj5cclxuICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+VnVlIGQnZW5zZW1ibGUgZGUgdm90cmUgcHJvamV0IGVudHJlcHJlbmV1cmlhbDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItZGF0ZVwiPlxyXG4gICAgICAgIDxCYWRnZSB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiPnt7IGN1cnJlbnREYXRlIH19PC9CYWRnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIEtQSSBDYXJkcyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJrcGktZ3JpZFwiPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImtwaS1jYXJkIHRvdGFsLWNhcmRcIiBob3ZlcmFibGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWljb25cIj7wn5OLPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrcGktbGFiZWxcIj5Ub3RhbCDDiXRhcGVzPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtwaS12YWx1ZVwiPnt7IHN0YXRzLnRvdGFsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDxDYXJkIGNsYXNzPVwia3BpLWNhcmQgcHJvZ3Jlc3MtY2FyZFwiIGhvdmVyYWJsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktaWNvblwiPuKPszwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLWxhYmVsXCI+RW4gQ291cnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLXZhbHVlXCI+e3sgc3RhdHMuaW5Qcm9ncmVzcyB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImtwaS1jYXJkIGRvbmUtY2FyZFwiIGhvdmVyYWJsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktaWNvblwiPuKchTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLWxhYmVsXCI+VGVybWluw6llczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrcGktdmFsdWVcIj57eyBzdGF0cy5kb25lIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDxDYXJkIGNsYXNzPVwia3BpLWNhcmQgY29tcGxldGlvbi1jYXJkXCIgaG92ZXJhYmxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcGktY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1pY29uXCI+8J+OrzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLWxhYmVsXCI+UHJvZ3Jlc3Npb248L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLXZhbHVlXCI+e3sgc3RhdHMuY29tcGxldGlvblJhdGUgfX0lPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1wcm9ncmVzcy1iYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktcHJvZ3Jlc3MtZmlsbFwiIDpzdHlsZT1cInsgd2lkdGg6IHN0YXRzLmNvbXBsZXRpb25SYXRlICsgJyUnIH1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBDaGFydHMgR3JpZCAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjaGFydHMtZ3JpZFwiPlxyXG4gICAgICA8IS0tIEdyYXBoaXF1ZSBlbiBhbm5lYXUgLSBTdGF0dXRzIC0tPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cclxuICAgICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+8J+TiiBSw6lwYXJ0aXRpb24gcGFyIFN0YXR1dDwvaDM+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Y2FudmFzIHJlZj1cInN0YXR1c0NoYXJ0XCI+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDwhLS0gR3JhcGhpcXVlIGVuIGJhcnJlcyAtIENhdMOpZ29yaWVzIC0tPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cclxuICAgICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+8J+TgSDDiXRhcGVzIHBhciBDYXTDqWdvcmllPC9oMz5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxjYW52YXMgcmVmPVwiY2F0ZWdvcnlDaGFydFwiPjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8IS0tIEdyYXBoaXF1ZSBlbiBiYXJyZXMgLSBQcmlvcml0w6lzIC0tPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cclxuICAgICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+8J+UpSBSw6lwYXJ0aXRpb24gcGFyIFByaW9yaXTDqTwvaDM+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Y2FudmFzIHJlZj1cInByaW9yaXR5Q2hhcnRcIj48L2NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgPCEtLSBUaW1lbGluZSAtIFByb2NoYWluZXMgw6ljaMOpYW5jZXMgLS0+XHJcbiAgICAgIDxDYXJkIGNsYXNzPVwiY2hhcnQtY2FyZCB0aW1lbGluZS1jYXJkXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjaGFydC10aXRsZVwiPvCfk4UgUHJvY2hhaW5lcyDDiWNow6lhbmNlcyAoMzAgam91cnMpPC9oMz5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgdi1pZj1cInVwY29taW5nRXRhcGVzLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiZW1wdHktdGltZWxpbmVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlbXB0eS1pY29uXCI+8J+ThTwvc3Bhbj5cclxuICAgICAgICAgICAgPHA+QXVjdW5lIMOpY2jDqWFuY2UgZGFucyBsZXMgMzAgcHJvY2hhaW5zIGpvdXJzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRpbWVsaW5lLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICB2LWZvcj1cImV0YXBlIGluIHVwY29taW5nRXRhcGVzXCIgXHJcbiAgICAgICAgICAgICAgOmtleT1cImV0YXBlLmlkXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cInRpbWVsaW5lLWl0ZW1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cImdldFRpbWVsaW5lQ2xhc3MoZXRhcGUuZGF0ZUxpbWl0ZSlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWRvdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aW1lbGluZS10aXRsZVwiPnt7IGV0YXBlLnRpdHJlIH19PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZSA6dmFyaWFudD1cImdldERhdGVCYWRnZVZhcmlhbnQoZXRhcGUuZGF0ZUxpbWl0ZSlcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBmb3JtYXREYXRlUmVsYXRpdmUoZXRhcGUuZGF0ZUxpbWl0ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPEJhZGdlIHYtaWY9XCJldGFwZS5jYXRlZ29yeVwiIHZhcmlhbnQ9XCJncmF5XCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZXRhcGUuY2F0ZWdvcnkgfX1cclxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIMOJdGFwZXMgdXJnZW50ZXMgLS0+XHJcbiAgICA8Q2FyZCB2LWlmPVwidXJnZW50RXRhcGVzLmxlbmd0aCA+IDBcIiBjbGFzcz1cInVyZ2VudC1jYXJkXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjaGVhZGVyPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+8J+UtCDDiXRhcGVzIFVyZ2VudGVzPC9oMz5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPGRpdiBjbGFzcz1cInVyZ2VudC1saXN0XCI+XHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgIHYtZm9yPVwiZXRhcGUgaW4gdXJnZW50RXRhcGVzXCIgXHJcbiAgICAgICAgICA6a2V5PVwiZXRhcGUuaWRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJ1cmdlbnQtaXRlbVwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJnb1RvS2FuYmFuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXJnZW50LWljb25cIj7imqDvuI88L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cmdlbnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8aDQ+e3sgZXRhcGUudGl0cmUgfX08L2g0PlxyXG4gICAgICAgICAgICA8cCB2LWlmPVwiZXRhcGUuZGVzY3JpcHRpb25cIj57eyBldGFwZS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVyZ2VudC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJkYW5nZXJcIiBzaXplPVwic21cIj5VcmdlbnQ8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZXRhcGUuZGF0ZUxpbWl0ZVwiIHZhcmlhbnQ9XCJ3YXJuaW5nXCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICDDiWNow6lhbmNlIDoge3sgZm9ybWF0RGF0ZShldGFwZS5kYXRlTGltaXRlKSB9fVxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0Rhc2hib2FyZCcsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGV0YXBlczogW10sXHJcbiAgICAgIGNoYXJ0czoge1xyXG4gICAgICAgIHN0YXR1czogbnVsbCxcclxuICAgICAgICBjYXRlZ29yeTogbnVsbCxcclxuICAgICAgICBwcmlvcml0eTogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgc3RhdHMoKSB7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5ldGFwZXMubGVuZ3RoXHJcbiAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLmV0YXBlcy5maWx0ZXIoZSA9PiBlLnN0YXR1dCA9PT0gJ3RvZG8nKS5sZW5ndGhcclxuICAgICAgY29uc3QgaW5Qcm9ncmVzcyA9IHRoaXMuZXRhcGVzLmZpbHRlcihlID0+IGUuc3RhdHV0ID09PSAnaW5fcHJvZ3Jlc3MnKS5sZW5ndGhcclxuICAgICAgY29uc3QgZG9uZSA9IHRoaXMuZXRhcGVzLmZpbHRlcihlID0+IGUuc3RhdHV0ID09PSAnZG9uZScpLmxlbmd0aFxyXG4gICAgICBjb25zdCBjb21wbGV0aW9uUmF0ZSA9IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKGRvbmUgLyB0b3RhbCkgKiAxMDApIDogMFxyXG5cclxuICAgICAgcmV0dXJuIHsgdG90YWwsIHRvZG8sIGluUHJvZ3Jlc3MsIGRvbmUsIGNvbXBsZXRpb25SYXRlIH1cclxuICAgIH0sXHJcbiAgICB1cGNvbWluZ0V0YXBlcygpIHtcclxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIGNvbnN0IGluMzBEYXlzID0gbmV3IERhdGUodG9kYXkuZ2V0VGltZSgpICsgMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRoaXMuZXRhcGVzXHJcbiAgICAgICAgLmZpbHRlcihlID0+IGUuZGF0ZUxpbWl0ZSAmJiBlLnN0YXR1dCAhPT0gJ2RvbmUnKVxyXG4gICAgICAgIC5maWx0ZXIoZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKGUuZGF0ZUxpbWl0ZSlcclxuICAgICAgICAgIHJldHVybiBkZWFkbGluZSA+PSB0b2RheSAmJiBkZWFkbGluZSA8PSBpbjMwRGF5c1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZGF0ZUxpbWl0ZSkgLSBuZXcgRGF0ZShiLmRhdGVMaW1pdGUpKVxyXG4gICAgICAgIC5zbGljZSgwLCA1KVxyXG4gICAgfSxcclxuICAgIHVyZ2VudEV0YXBlcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZXRhcGVzXHJcbiAgICAgICAgLmZpbHRlcihlID0+IGUucHJpb3JpdHkgPT09ICd1cmdlbnQnICYmIGUuc3RhdHV0ICE9PSAnZG9uZScpXHJcbiAgICAgICAgLnNsaWNlKDAsIDMpXHJcbiAgICB9LFxyXG4gICAgY3VycmVudERhdGUoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7IFxyXG4gICAgICAgIHdlZWtkYXk6ICdsb25nJywgXHJcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICBkYXk6ICdudW1lcmljJyBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmxvYWRFdGFwZXMoKVxyXG4gIH0sXHJcbiAgYmVmb3JlVW5tb3VudCgpIHtcclxuICAgIC8vIETDqXRydWlyZSBsZXMgZ3JhcGhpcXVlcyBhdmFudCBkZSBkw6l0cnVpcmUgbGUgY29tcG9zYW50XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuY2hhcnRzKS5mb3JFYWNoKGNoYXJ0ID0+IHtcclxuICAgICAgaWYgKGNoYXJ0KSBjaGFydC5kZXN0cm95KClcclxuICAgIH0pXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBsb2FkRXRhcGVzKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZXRhcGVzJylcclxuICAgICAgICB0aGlzLmV0YXBlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEF0dGVuZHJlIGxlIHByb2NoYWluIHRpY2sgcG91ciDDqnRyZSBzw7tyIHF1ZSBsZXMgY2FudmFzIHNvbnQgbW9udMOpc1xyXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlQ2hhcnRzKClcclxuICAgICAgICB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBjaGFyZ2VtZW50IMOpdGFwZXM6JywgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVDaGFydHMoKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlU3RhdHVzQ2hhcnQoKVxyXG4gICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5Q2hhcnQoKVxyXG4gICAgICB0aGlzLmNyZWF0ZVByaW9yaXR5Q2hhcnQoKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZVN0YXR1c0NoYXJ0KCkge1xyXG4gICAgICBjb25zdCBjdHggPSB0aGlzLiRyZWZzLnN0YXR1c0NoYXJ0XHJcbiAgICAgIGlmICghY3R4KSByZXR1cm5cclxuXHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0cy5zdGF0dXMpIHtcclxuICAgICAgICB0aGlzLmNoYXJ0cy5zdGF0dXMuZGVzdHJveSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2hhcnRzLnN0YXR1cyA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGxhYmVsczogWyfDgCBGYWlyZScsICdFbiBDb3VycycsICdUZXJtaW7DqSddLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IFt0aGlzLnN0YXRzLnRvZG8sIHRoaXMuc3RhdHMuaW5Qcm9ncmVzcywgdGhpcy5zdGF0cy5kb25lXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjQ1LCAxNTgsIDExLCAwLjgpJywgIC8vIE9yYW5nZVxyXG4gICAgICAgICAgICAgICdyZ2JhKDEzOSwgOTIsIDI0NiwgMC44KScsICAgLy8gVmlvbGV0XHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTYsIDE4NSwgMTI5LCAwLjgpJyAgICAvLyBWZXJ0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBbXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjQ1LCAxNTgsIDExLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTM5LCA5MiwgMjQ2LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTYsIDE4NSwgMTI5LCAxKSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTUsXHJcbiAgICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDEyIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQ2F0ZWdvcnlDaGFydCgpIHtcclxuICAgICAgY29uc3QgY3R4ID0gdGhpcy4kcmVmcy5jYXRlZ29yeUNoYXJ0XHJcbiAgICAgIGlmICghY3R4KSByZXR1cm5cclxuXHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0cy5jYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuY2hhcnRzLmNhdGVnb3J5LmRlc3Ryb3koKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDb21wdGVyIGxlcyDDqXRhcGVzIHBhciBjYXTDqWdvcmllXHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5Q291bnRzID0ge31cclxuICAgICAgdGhpcy5ldGFwZXMuZm9yRWFjaChldGFwZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ID0gZXRhcGUuY2F0ZWdvcnkgfHwgJ1NhbnMgY2F0w6lnb3JpZSdcclxuICAgICAgICBjYXRlZ29yeUNvdW50c1tjYXRdID0gKGNhdGVnb3J5Q291bnRzW2NhdF0gfHwgMCkgKyAxXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zdCBsYWJlbHMgPSBPYmplY3Qua2V5cyhjYXRlZ29yeUNvdW50cylcclxuICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlDb3VudHMpXHJcblxyXG4gICAgICB0aGlzLmNoYXJ0cy5jYXRlZ29yeSA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ05vbWJyZSBkXFwnw6l0YXBlcycsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTAyLCAxMjYsIDIzNCwgMC44KScsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMDIsIDEyNiwgMjM0LCAxKScsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDhcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHRpY2tzOiB7IHN0ZXBTaXplOiAxIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGVQcmlvcml0eUNoYXJ0KCkge1xyXG4gICAgICBjb25zdCBjdHggPSB0aGlzLiRyZWZzLnByaW9yaXR5Q2hhcnRcclxuICAgICAgaWYgKCFjdHgpIHJldHVyblxyXG5cclxuICAgICAgaWYgKHRoaXMuY2hhcnRzLnByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5jaGFydHMucHJpb3JpdHkuZGVzdHJveSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVyZ2VudCA9IHRoaXMuZXRhcGVzLmZpbHRlcihlID0+IGUucHJpb3JpdHkgPT09ICd1cmdlbnQnKS5sZW5ndGhcclxuICAgICAgY29uc3Qgbm9ybWFsID0gdGhpcy5ldGFwZXMuZmlsdGVyKGUgPT4gZS5wcmlvcml0eSA9PT0gJ25vcm1hbCcpLmxlbmd0aFxyXG4gICAgICBjb25zdCBsb3cgPSB0aGlzLmV0YXBlcy5maWx0ZXIoZSA9PiBlLnByaW9yaXR5ID09PSAnbG93JykubGVuZ3RoXHJcbiAgICAgIGNvbnN0IG5vbmUgPSB0aGlzLmV0YXBlcy5maWx0ZXIoZSA9PiAhZS5wcmlvcml0eSkubGVuZ3RoXHJcblxyXG4gICAgICB0aGlzLmNoYXJ0cy5wcmlvcml0eSA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsYWJlbHM6IFsnVXJnZW50JywgJ05vcm1hbCcsICdCYXNzZScsICdOb24gZMOpZmluaWUnXSxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ05vbWJyZSBkXFwnw6l0YXBlcycsXHJcbiAgICAgICAgICAgIGRhdGE6IFt1cmdlbnQsIG5vcm1hbCwgbG93LCBub25lXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjM5LCA2OCwgNjgsIDAuOCknLCAgICAvLyBSb3VnZVxyXG4gICAgICAgICAgICAgICdyZ2JhKDI0NSwgMTU4LCAxMSwgMC44KScsICAgLy8gT3JhbmdlXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTYsIDE4NSwgMTI5LCAwLjgpJywgICAvLyBWZXJ0XHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTU2LCAxNjMsIDE3NSwgMC44KScgICAvLyBHcmlzXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBbXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjM5LCA2OCwgNjgsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNDUsIDE1OCwgMTEsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNiwgMTg1LCAxMjksIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNTYsIDE2MywgMTc1LCAxKSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogOFxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgdGlja3M6IHsgc3RlcFNpemU6IDEgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGZvcm1hdERhdGUoZGF0ZVN0cmluZykge1xyXG4gICAgICBpZiAoIWRhdGVTdHJpbmcpIHJldHVybiAnJ1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZykudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicpXHJcbiAgICB9LFxyXG4gICAgZm9ybWF0RGF0ZVJlbGF0aXZlKGRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKCFkYXRlU3RyaW5nKSByZXR1cm4gJydcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXHJcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICBjb25zdCBkaWZmVGltZSA9IGRhdGUgLSB0b2RheVxyXG4gICAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguY2VpbChkaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcclxuICAgICAgXHJcbiAgICAgIGlmIChkaWZmRGF5cyA8IDApIHJldHVybiAnRW4gcmV0YXJkJ1xyXG4gICAgICBpZiAoZGlmZkRheXMgPT09IDApIHJldHVybiBcIkF1am91cmQnaHVpXCJcclxuICAgICAgaWYgKGRpZmZEYXlzID09PSAxKSByZXR1cm4gJ0RlbWFpbidcclxuICAgICAgaWYgKGRpZmZEYXlzIDw9IDcpIHJldHVybiBgRGFucyAke2RpZmZEYXlzfSBqb3Vyc2BcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZShkYXRlU3RyaW5nKVxyXG4gICAgfSxcclxuICAgIGdldERhdGVCYWRnZVZhcmlhbnQoZGF0ZVN0cmluZykge1xyXG4gICAgICBpZiAoIWRhdGVTdHJpbmcpIHJldHVybiAnZ3JheSdcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXHJcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguY2VpbCgoZGF0ZSAtIHRvZGF5KSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcclxuICAgICAgXHJcbiAgICAgIGlmIChkaWZmRGF5cyA8IDApIHJldHVybiAnZGFuZ2VyJ1xyXG4gICAgICBpZiAoZGlmZkRheXMgPD0gMykgcmV0dXJuICd3YXJuaW5nJ1xyXG4gICAgICByZXR1cm4gJ2luZm8nXHJcbiAgICB9LFxyXG4gICAgZ2V0VGltZWxpbmVDbGFzcyhkYXRlU3RyaW5nKSB7XHJcbiAgICAgIGNvbnN0IHZhcmlhbnQgPSB0aGlzLmdldERhdGVCYWRnZVZhcmlhbnQoZGF0ZVN0cmluZylcclxuICAgICAgcmV0dXJuIGB0aW1lbGluZS0ke3ZhcmlhbnR9YFxyXG4gICAgfSxcclxuICAgIGdvVG9LYW5iYW4oKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ25hdmlnYXRlJywgJ2thbmJhbicpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmRhc2hib2FyZCB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpO1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIHZhcigtLXRyYW5zaXRpb24tc2xvdyk7XHJcbn1cclxuXHJcbi8qIEhlYWRlciAqL1xyXG4uZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UteGwpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2Utc20pIDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBLUEkgQ2FyZHMgKi9cclxuLmtwaS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmtwaS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1iZy1wcmltYXJ5KSwgdmFyKC0tYmctc2Vjb25kYXJ5KSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ua3BpLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmtwaS1pY29uIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5rcGktZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UteHMpO1xyXG59XHJcblxyXG4ua3BpLWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmtwaS12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLnRvdGFsLWNhcmQgLmtwaS1pY29uIHsgY29sb3I6IHZhcigtLXByaW1hcnkpOyB9XHJcbi5wcm9ncmVzcy1jYXJkIC5rcGktaWNvbiB7IGNvbG9yOiB2YXIoLS13YXJuaW5nKTsgfVxyXG4uZG9uZS1jYXJkIC5rcGktaWNvbiB7IGNvbG9yOiB2YXIoLS1zdWNjZXNzKTsgfVxyXG4uY29tcGxldGlvbi1jYXJkIC5rcGktaWNvbiB7IGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpOyB9XHJcblxyXG4ua3BpLXByb2dyZXNzLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmtwaS1wcm9ncmVzcy1maWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1wcmltYXJ5KSwgdmFyKC0tc2Vjb25kYXJ5KSk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzUsIDEpO1xyXG59XHJcblxyXG4vKiBDaGFydHMgR3JpZCAqL1xyXG4uY2hhcnRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UteGwpO1xyXG59XHJcblxyXG4uY2hhcnQtY2FyZCB7XHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5jaGFydC10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUaW1lbGluZSAqL1xyXG4udGltZWxpbmUtY2FyZCB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4udGltZWxpbmUtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4udGltZWxpbmUtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWRhbmdlciB7IGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1lcnJvcik7IH1cclxuLnRpbWVsaW5lLXdhcm5pbmcgeyBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0td2FybmluZyk7IH1cclxuLnRpbWVsaW5lLWluZm8geyBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0taW5mbyk7IH1cclxuXHJcbi50aW1lbGluZS1kb3Qge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRpbWVsaW5lLXRpdGxlIHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zbSkgMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRpbWVsaW5lLW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZW1wdHktdGltZWxpbmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0yeGwpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxufVxyXG5cclxuLmVtcHR5LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4vKiBVcmdlbnQgTGlzdCAqL1xyXG4udXJnZW50LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZWYzYzcsICNmZGU2OGEpO1xyXG59XHJcblxyXG4udXJnZW50LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLnVyZ2VudC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWVycm9yKTtcclxufVxyXG5cclxuLnVyZ2VudC1pdGVtOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcclxufVxyXG5cclxuLnVyZ2VudC1pY29uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi51cmdlbnQtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnVyZ2VudC1jb250ZW50IGg0IHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS14cykgMDtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi51cmdlbnQtY29udGVudCBwIHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1zbSkgMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi51cmdlbnQtbWV0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNoYXJ0cy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAua3BpLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJldGFwZXMta2FuYmFuXCI+XHJcbiAgICA8IS0tIEhlYWRlciBtb2Rlcm5pc8OpIGF2ZWMgZmlsdHJlcyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJrYW5iYW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVcIj5cclxuICAgICAgICAgIDxoMj7wn5OLIFN1aXZpIGRlcyDDiXRhcGVzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5DcsOpYXRpb24gZCdFbnRyZXByaXNlIC0gTW9uIEFzc2lzdGFudCBOdW3DqXJpcXVlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBAY2xpY2s9XCJzaG93QWRkTW9kYWwgPSB0cnVlXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPuKcqDwvc3Bhbj4gTm91dmVsbGUgw4l0YXBlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8IS0tIEJhcnJlIGRlIHJlY2hlcmNoZSBldCBmaWx0cmVzIC0tPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImZpbHRlcnMtY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtaWNvblwiPvCflI08L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoUXVlcnlcIiBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciB1bmUgw6l0YXBlLi4uXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cInNlYXJjaC1pbnB1dFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwic2VhcmNoUXVlcnlcIiBAY2xpY2s9XCJzZWFyY2hRdWVyeSA9ICcnXCIgY2xhc3M9XCJjbGVhci1zZWFyY2hcIj7inJU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzb3J0QnlcIiBjbGFzcz1cImZpbHRlci1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3JkcmVcIj7wn5OKIE9yZHJlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhdGUtYXNjXCI+8J+ThSBEYXRlIChwbHVzIGFuY2llbm5lKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXRlLWRlc2NcIj7wn5OFIERhdGUgKHBsdXMgcsOpY2VudGUpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFscGhhXCI+8J+UpCBBbHBoYWLDqXRpcXVlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZmlsdGVyUHJpb3JpdHlcIiBjbGFzcz1cImZpbHRlci1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+VG91dGVzIHByaW9yaXTDqXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXJnZW50XCI+8J+UtCBVcmdlbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9ybWFsXCI+8J+foSBOb3JtYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+8J+foiBCYXNzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgdi1pZj1cInNlYXJjaFF1ZXJ5IHx8IGZpbHRlclByaW9yaXR5ICE9PSAnYWxsJ1wiIGNsYXNzPVwiYWN0aXZlLWZpbHRlcnNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsdGVyLWxhYmVsXCI+RmlsdHJlcyBhY3RpZnMgOjwvc3Bhbj5cclxuICAgICAgICAgIDxCYWRnZSB2LWlmPVwic2VhcmNoUXVlcnlcIiB2YXJpYW50PVwiaW5mb1wiIEBjbGljaz1cInNlYXJjaFF1ZXJ5ID0gJydcIj5cclxuICAgICAgICAgICAg8J+UjSBcInt7IHNlYXJjaFF1ZXJ5IH19XCIg4pyVXHJcbiAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgPEJhZGdlIHYtaWY9XCJmaWx0ZXJQcmlvcml0eSAhPT0gJ2FsbCdcIiB2YXJpYW50PVwid2FybmluZ1wiIEBjbGljaz1cImZpbHRlclByaW9yaXR5ID0gJ2FsbCdcIj5cclxuICAgICAgICAgICAge3sgZ2V0UHJpb3JpdHlMYWJlbChmaWx0ZXJQcmlvcml0eSkgfX0g4pyVXHJcbiAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIFxyXG4gICAgICA8IS0tIEJhcnJlIGRlIHByb2dyZXNzaW9uIG1vZGVybmlzw6llIC0tPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cInByb2dyZXNzLWNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2dyZXNzLWxhYmVsXCI+UHJvZ3Jlc3Npb24gZ2xvYmFsZTwvc3Bhbj5cclxuICAgICAgICAgIDxCYWRnZSA6dmFyaWFudD1cInByb2dyZXNzVmFyaWFudFwiIHNpemU9XCJsZ1wiIHBpbGw+e3sgcHJvZ3Jlc3Npb24gfX0lPC9CYWRnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtZmlsbFwiIDpzdHlsZT1cInsgd2lkdGg6IHByb2dyZXNzaW9uICsgJyUnIH1cIj5cclxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInByb2dyZXNzaW9uID4gMTBcIiBjbGFzcz1cInByb2dyZXNzLXRleHRcIj57eyBwcm9ncmVzc2lvbiB9fSU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3Mtc3RhdHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZVwiPnt7IGZpbHRlcmVkRXRhcGVzQnlTdGF0dXQuZG9uZS5sZW5ndGggfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPlRlcm1pbsOpZXM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZVwiPnt7IGZpbHRlcmVkRXRhcGVzQnlTdGF0dXQuaW5fcHJvZ3Jlc3MubGVuZ3RoIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5FbiBjb3Vyczwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+e3sgZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC50b2RvLmxlbmd0aCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LWxhYmVsXCI+w4AgZmFpcmU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBCb2FyZCBLYW5iYW4gYXZlYyBEcmFnICYgRHJvcCAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJrYW5iYW4tYm9hcmRcIj5cclxuICAgICAgPCEtLSBDb2xvbm5lIMOAIEZBSVJFIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwia2FuYmFuLWNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4taGVhZGVyIHRvZG8taGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1uLWljb25cIj7wn5OdPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDM+w4AgRmFpcmU8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cImdyYXlcIiBwaWxsPnt7IGZpbHRlcmVkRXRhcGVzQnlTdGF0dXQudG9kby5sZW5ndGggfX08L0JhZGdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRyYWdnYWJsZVxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidG9kb0xpc3RcIlxyXG4gICAgICAgICAgICBncm91cD1cImV0YXBlc1wiXHJcbiAgICAgICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG4gICAgICAgICAgICBAY2hhbmdlPVwib25EcmFnVXBkYXRlKCd0b2RvJylcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImRyYWdnYWJsZS1saXN0XCJcclxuICAgICAgICAgICAgOmFuaW1hdGlvbj1cIjIwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaXRlbT1cInsgZWxlbWVudDogZXRhcGUgfVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJrYW5iYW4tY2FyZCB0b2RvLWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0RXRhcGUoZXRhcGUpXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgZXRhcGUudGl0cmUgfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBcclxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJldGFwZS5wcmlvcml0eVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgOnZhcmlhbnQ9XCJnZXRQcmlvcml0eVZhcmlhbnQoZXRhcGUucHJpb3JpdHkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgZ2V0UHJpb3JpdHlJY29uKGV0YXBlLnByaW9yaXR5KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZXRhcGUuZGVzY3JpcHRpb25cIiBjbGFzcz1cImNhcmQtZGVzY3JpcHRpb25cIj57eyBldGFwZS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2Ugdi1pZj1cImV0YXBlLmRhdGVMaW1pdGVcIiA6dmFyaWFudD1cImdldERhdGVWYXJpYW50KGV0YXBlLmRhdGVMaW1pdGUpXCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDwn5OFIHt7IGZvcm1hdERhdGUoZXRhcGUuZGF0ZUxpbWl0ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZXRhcGUuY2F0ZWdvcnlcIiB2YXJpYW50PVwiZ3JheVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgZXRhcGUuY2F0ZWdvcnkgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cImNoYW5nZVN0YXR1dChldGFwZSwgJ2luX3Byb2dyZXNzJylcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDilrbvuI8gRMOpbWFycmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiZGVsZXRlRXRhcGUoZXRhcGUpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIPCfl5HvuI9cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvZHJhZ2dhYmxlPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LnRvZG8ubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJlbXB0eS1zdGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVtcHR5LWljb25cIj7inIU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxwPnt7IHNlYXJjaFF1ZXJ5ID8gJ0F1Y3VuIHLDqXN1bHRhdCcgOiAnQXVjdW5lIMOpdGFwZSDDoCBmYWlyZScgfX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbjwhLS0gQ29sb25uZSBFTiBDT1VSUyAtLT5cclxuPGRpdiBjbGFzcz1cImthbmJhbi1jb2x1bW5cIj5cclxuICA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlciBwcm9ncmVzcy1oZWFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4taWNvblwiPuKPszwvc3Bhbj5cclxuICAgICAgPGgzPkVuIENvdXJzPC9oMz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEJhZGdlIHZhcmlhbnQ9XCJ3YXJuaW5nXCIgcGlsbD57eyBmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LmluX3Byb2dyZXNzLmxlbmd0aCB9fTwvQmFkZ2U+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNvbHVtbi1jb250ZW50XCI+XHJcbiAgICA8ZHJhZ2dhYmxlXHJcbiAgICAgIHYtbW9kZWw9XCJpblByb2dyZXNzTGlzdFwiXHJcbiAgICAgIGdyb3VwPVwiZXRhcGVzXCJcclxuICAgICAgaXRlbS1rZXk9XCJpZFwiXHJcbiAgICAgIEBjaGFuZ2U9XCJvbkRyYWdVcGRhdGUoJ2luX3Byb2dyZXNzJylcIlxyXG4gICAgICBjbGFzcz1cImRyYWdnYWJsZS1saXN0XCJcclxuICAgICAgOmFuaW1hdGlvbj1cIjIwMFwiXHJcbiAgICA+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjaXRlbT1cInsgZWxlbWVudDogZXRhcGUgfVwiPlxyXG4gICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgY2xhc3M9XCJrYW5iYW4tY2FyZCBwcm9ncmVzcy1jYXJkXCJcclxuICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgQGNsaWNrPVwiZWRpdEV0YXBlKGV0YXBlKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsc2UtZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RW4gY291cnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGV0YXBlLnRpdHJlIH19PC9oND5cclxuICAgICAgICAgICAgICA8QmFkZ2UgXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZXRhcGUucHJpb3JpdHlcIiBcclxuICAgICAgICAgICAgICAgIDp2YXJpYW50PVwiZ2V0UHJpb3JpdHlWYXJpYW50KGV0YXBlLnByaW9yaXR5KVwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt7IGdldFByaW9yaXR5SWNvbihldGFwZS5wcmlvcml0eSkgfX1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgdi1pZj1cImV0YXBlLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3sgZXRhcGUuZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIHYtaWY9XCJldGFwZS5kYXRlRGVidXRcIiB2YXJpYW50PVwiaW5mb1wiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAg8J+agCB7eyBmb3JtYXREYXRlKGV0YXBlLmRhdGVEZWJ1dCkgfX1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZXRhcGUuY2F0ZWdvcnlcIiB2YXJpYW50PVwiZ3JheVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAge3sgZXRhcGUuY2F0ZWdvcnkgfX1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cImNoYW5nZVN0YXR1dChldGFwZSwgJ3RvZG8nKVwiIFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCIgXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOKshe+4j1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cImNoYW5nZVN0YXR1dChldGFwZSwgJ2RvbmUnKVwiIFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4pyFIFRlcm1pbmVyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L2RyYWdnYWJsZT5cclxuICAgIFxyXG4gICAgPGRpdiB2LWlmPVwiZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC5pbl9wcm9ncmVzcy5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZW1wdHktaWNvblwiPvCfkqQ8L3NwYW4+XHJcbiAgICAgIDxwPnt7IHNlYXJjaFF1ZXJ5ID8gJ0F1Y3VuIHLDqXN1bHRhdCcgOiAnQXVjdW5lIMOpdGFwZSBlbiBjb3VycycgfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIENvbG9ubmUgVEVSTUlOw4kgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJrYW5iYW4tY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1oZWFkZXIgZG9uZS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4taWNvblwiPuKchTwvc3Bhbj5cclxuICAgICAgICAgICAgPGgzPlRlcm1pbsOpPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzdWNjZXNzXCIgcGlsbD57eyBmaWx0ZXJlZEV0YXBlc0J5U3RhdHV0LmRvbmUubGVuZ3RoIH19PC9CYWRnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkcmFnZ2FibGVcclxuICAgICAgICAgICAgdi1tb2RlbD1cImRvbmVMaXN0XCJcclxuICAgICAgICAgICAgZ3JvdXA9XCJldGFwZXNcIlxyXG4gICAgICAgICAgICBpdGVtLWtleT1cImlkXCJcclxuICAgICAgICAgICAgQGNoYW5nZT1cIm9uRHJhZ1VwZGF0ZSgnZG9uZScpXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJkcmFnZ2FibGUtbGlzdFwiXHJcbiAgICAgICAgICAgIDphbmltYXRpb249XCIyMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2l0ZW09XCJ7IGVsZW1lbnQ6IGV0YXBlIH1cIj5cclxuICAgICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwia2FuYmFuLWNhcmQgZG9uZS1jYXJkXCJcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZWRpdEV0YXBlKGV0YXBlKVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1zdGF0dXMgc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3VjY2Vzcy1pY29uXCI+8J+OiTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UZXJtaW7DqTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBldGFwZS50aXRyZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJldGFwZS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiY2FyZC1kZXNjcmlwdGlvblwiPnt7IGV0YXBlLmRlc2NyaXB0aW9uIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2LWlmPVwiZXRhcGUuY2F0ZWdvcnlcIiB2YXJpYW50PVwiZ3JheVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgZXRhcGUuY2F0ZWdvcnkgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cImNoYW5nZVN0YXR1dChldGFwZSwgJ2luX3Byb2dyZXNzJylcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDihqnvuI8gUsOpb3V2cmlyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L2RyYWdnYWJsZT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiB2LWlmPVwiZmlsdGVyZWRFdGFwZXNCeVN0YXR1dC5kb25lLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiZW1wdHktc3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlbXB0eS1pY29uXCI+8J+Orzwvc3Bhbj5cclxuICAgICAgICAgICAgPHA+e3sgc2VhcmNoUXVlcnkgPyAnQXVjdW4gcsOpc3VsdGF0JyA6ICdBdWN1bmUgw6l0YXBlIHRlcm1pbsOpZScgfX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIE1vZGFsIGF2ZWMgY2hhbXBzIGRlIHByaW9yaXTDqSBldCBjYXTDqWdvcmllIC0tPlxyXG4gICAgPE1vZGFsIFxyXG4gICAgICA6c2hvdz1cInNob3dBZGRNb2RhbCB8fCAhIWVkaXRpbmdFdGFwZVwiIFxyXG4gICAgICA6dGl0bGU9XCJlZGl0aW5nRXRhcGUgPyAnTW9kaWZpZXIgbFxcJ8OpdGFwZScgOiAnTm91dmVsbGUgw6l0YXBlJ1wiXHJcbiAgICAgIEBjbG9zZT1cImNsb3NlTW9kYWxcIlxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzYXZlRXRhcGVcIiBjbGFzcz1cImV0YXBlLWZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlRpdHJlIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRpdHJlXCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IMOJdHVkZSBkZSBtYXJjaMOpXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5Qcmlvcml0w6k8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJmb3JtLnByaW9yaXR5XCIgY2xhc3M9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkF1Y3VuZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1cmdlbnRcIj7wn5S0IFVyZ2VudDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3JtYWxcIj7wn5+hIE5vcm1hbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj7wn5+iIEJhc3NlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5DYXTDqWdvcmllPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmNhdGVnb3J5XCIgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IEFkbWluaXN0cmF0aWYsIEZvcm1hdGlvbi4uLlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgICByb3dzPVwiM1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRMOpY3JpdmV6IGNldHRlIMOpdGFwZS4uLlwiXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj7wn5OFIERhdGUgZGUgZMOpYnV0PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmRhdGVEZWJ1dFwiIHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj7ij7AgRGF0ZSBsaW1pdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZGF0ZUxpbWl0ZVwiIHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPvCfk50gTm90ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5ub3Rlc1wiIFxyXG4gICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWpvdXRleiBkZXMgbm90ZXMsIGxpZW5zLCBvdSBpbmZvcm1hdGlvbnMgc3VwcGzDqW1lbnRhaXJlcy4uLlwiXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICBcclxuICAgICAgPHRlbXBsYXRlICNmb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvbiBAY2xpY2s9XCJjbG9zZU1vZGFsXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgQW5udWxlclxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gQGNsaWNrPVwic2F2ZUV0YXBlXCIgOmxvYWRpbmc9XCJzYXZpbmdcIj5cclxuICAgICAgICAgIHt7IGVkaXRpbmdFdGFwZSA/ICfwn5K+IE1ldHRyZSDDoCBqb3VyJyA6ICfinKggQ3LDqWVyJyB9fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9Nb2RhbD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBkcmFnZ2FibGUgZnJvbSAndnVlZHJhZ2dhYmxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFdGFwZXNLYW5iYW4nLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIGRyYWdnYWJsZVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGV0YXBlczogW10sXHJcbiAgICAgIHNob3dBZGRNb2RhbDogZmFsc2UsXHJcbiAgICAgIGVkaXRpbmdFdGFwZTogbnVsbCxcclxuICAgICAgc2F2aW5nOiBmYWxzZSxcclxuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxyXG4gICAgICBzb3J0Qnk6ICdvcmRyZScsXHJcbiAgICAgIGZpbHRlclByaW9yaXR5OiAnYWxsJyxcclxuICAgICAgZm9ybToge1xyXG4gICAgICAgIHRpdHJlOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgZGF0ZURlYnV0OiAnJyxcclxuICAgICAgICBkYXRlTGltaXRlOiAnJyxcclxuICAgICAgICBub3RlczogJycsXHJcbiAgICAgICAgc3RhdHV0OiAndG9kbycsXHJcbiAgICAgICAgb3JkcmU6IDAsXHJcbiAgICAgICAgcHJpb3JpdHk6ICcnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICAvLyBMaXN0ZXMgbG9jYWxlcyBwb3VyIGxlIGRyYWcgJiBkcm9wXHJcbiAgICAgIHRvZG9MaXN0OiBbXSxcclxuICAgICAgaW5Qcm9ncmVzc0xpc3Q6IFtdLFxyXG4gICAgICBkb25lTGlzdDogW11cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBmaWx0ZXJlZEV0YXBlcygpIHtcclxuICAgICAgbGV0IGZpbHRlcmVkID0gWy4uLnRoaXMuZXRhcGVzXVxyXG4gICAgICBcclxuICAgICAgLy8gUmVjaGVyY2hlXHJcbiAgICAgIGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKClcclxuICAgICAgICBmaWx0ZXJlZCA9IGZpbHRlcmVkLmZpbHRlcihlID0+IFxyXG4gICAgICAgICAgZS50aXRyZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSB8fFxyXG4gICAgICAgICAgKGUuZGVzY3JpcHRpb24gJiYgZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSkgfHxcclxuICAgICAgICAgIChlLmNhdGVnb3J5ICYmIGUuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkpXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBGaWx0cmUgcHJpb3JpdMOpXHJcbiAgICAgIGlmICh0aGlzLmZpbHRlclByaW9yaXR5ICE9PSAnYWxsJykge1xyXG4gICAgICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKGUgPT4gZS5wcmlvcml0eSA9PT0gdGhpcy5maWx0ZXJQcmlvcml0eSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVHJpXHJcbiAgICAgIGlmICh0aGlzLnNvcnRCeSA9PT0gJ2RhdGUtYXNjJykge1xyXG4gICAgICAgIGZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGVBID0gYS5kYXRlTGltaXRlID8gbmV3IERhdGUoYS5kYXRlTGltaXRlKSA6IG5ldyBEYXRlKCc5OTk5LTEyLTMxJylcclxuICAgICAgICAgIGNvbnN0IGRhdGVCID0gYi5kYXRlTGltaXRlID8gbmV3IERhdGUoYi5kYXRlTGltaXRlKSA6IG5ldyBEYXRlKCc5OTk5LTEyLTMxJylcclxuICAgICAgICAgIHJldHVybiBkYXRlQSAtIGRhdGVCXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNvcnRCeSA9PT0gJ2RhdGUtZGVzYycpIHtcclxuICAgICAgICBmaWx0ZXJlZC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkYXRlQSA9IGEuZGF0ZUxpbWl0ZSA/IG5ldyBEYXRlKGEuZGF0ZUxpbWl0ZSkgOiBuZXcgRGF0ZSgnMTkwMC0wMS0wMScpXHJcbiAgICAgICAgICBjb25zdCBkYXRlQiA9IGIuZGF0ZUxpbWl0ZSA/IG5ldyBEYXRlKGIuZGF0ZUxpbWl0ZSkgOiBuZXcgRGF0ZSgnMTkwMC0wMS0wMScpXHJcbiAgICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3J0QnkgPT09ICdhbHBoYScpIHtcclxuICAgICAgICBmaWx0ZXJlZC5zb3J0KChhLCBiKSA9PiBhLnRpdHJlLmxvY2FsZUNvbXBhcmUoYi50aXRyZSkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyZWQuc29ydCgoYSwgYikgPT4gYS5vcmRyZSAtIGIub3JkcmUpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFxyXG4gICAgfSxcclxuICAgIGZpbHRlcmVkRXRhcGVzQnlTdGF0dXQoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9kbzogdGhpcy5maWx0ZXJlZEV0YXBlcy5maWx0ZXIoZSA9PiBlLnN0YXR1dCA9PT0gJ3RvZG8nKSxcclxuICAgICAgICBpbl9wcm9ncmVzczogdGhpcy5maWx0ZXJlZEV0YXBlcy5maWx0ZXIoZSA9PiBlLnN0YXR1dCA9PT0gJ2luX3Byb2dyZXNzJyksXHJcbiAgICAgICAgZG9uZTogdGhpcy5maWx0ZXJlZEV0YXBlcy5maWx0ZXIoZSA9PiBlLnN0YXR1dCA9PT0gJ2RvbmUnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvZ3Jlc3Npb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmV0YXBlcy5sZW5ndGggPT09IDApIHJldHVybiAwXHJcbiAgICAgIGNvbnN0IGRvbmUgPSB0aGlzLmV0YXBlcy5maWx0ZXIoZSA9PiBlLnN0YXR1dCA9PT0gJ2RvbmUnKS5sZW5ndGhcclxuICAgICAgcmV0dXJuIE1hdGgucm91bmQoKGRvbmUgLyB0aGlzLmV0YXBlcy5sZW5ndGgpICogMTAwKVxyXG4gICAgfSxcclxuICAgIHByb2dyZXNzVmFyaWFudCgpIHtcclxuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3Npb24gPT09IDEwMCkgcmV0dXJuICdzdWNjZXNzJ1xyXG4gICAgICBpZiAodGhpcy5wcm9ncmVzc2lvbiA+PSA1MCkgcmV0dXJuICd3YXJuaW5nJ1xyXG4gICAgICByZXR1cm4gJ2luZm8nXHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgLy8gU3luY2hyb25pc2UgbGVzIGxpc3RlcyBsb2NhbGVzIHF1YW5kIGxlcyBkb25uw6llcyBjaGFuZ2VudFxyXG4gICAgZmlsdGVyZWRFdGFwZXNCeVN0YXR1dDoge1xyXG4gICAgICBoYW5kbGVyKG5ld1ZhbCkge1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBbLi4ubmV3VmFsLnRvZG9dXHJcbiAgICAgICAgdGhpcy5pblByb2dyZXNzTGlzdCA9IFsuLi5uZXdWYWwuaW5fcHJvZ3Jlc3NdXHJcbiAgICAgICAgdGhpcy5kb25lTGlzdCA9IFsuLi5uZXdWYWwuZG9uZV1cclxuICAgICAgfSxcclxuICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgaW1tZWRpYXRlOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5sb2FkRXRhcGVzKClcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGxvYWRFdGFwZXMoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9ldGFwZXMnKVxyXG4gICAgICAgIHRoaXMuZXRhcGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGNoYXJnZW1lbnQgw6l0YXBlczonLCBlcnJvcilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNhdmVFdGFwZSgpIHtcclxuICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5lZGl0aW5nRXRhcGUgXHJcbiAgICAgICAgICA/IGAvYXBpL2V0YXBlcy8ke3RoaXMuZWRpdGluZ0V0YXBlLmlkfWBcclxuICAgICAgICAgIDogJy9hcGkvZXRhcGVzJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuZWRpdGluZ0V0YXBlID8gJ1BVVCcgOiAnUE9TVCdcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRFdGFwZXMoKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBzYXV2ZWdhcmRlOicsIGVycm9yKVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGNoYW5nZVN0YXR1dChldGFwZSwgbmV3U3RhdHV0KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvZXRhcGVzLyR7ZXRhcGUuaWR9YCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgICAgICAgICAgLi4uZXRhcGUsIFxyXG4gICAgICAgICAgICBzdGF0dXQ6IG5ld1N0YXR1dCxcclxuICAgICAgICAgICAgZGF0ZURlYnV0OiBuZXdTdGF0dXQgPT09ICdpbl9wcm9ncmVzcycgJiYgIWV0YXBlLmRhdGVEZWJ1dCBcclxuICAgICAgICAgICAgICA/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdIFxyXG4gICAgICAgICAgICAgIDogZXRhcGUuZGF0ZURlYnV0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkRXRhcGVzKClcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgY2hhbmdlbWVudCBzdGF0dXQ6JywgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBkZWxldGVFdGFwZShldGFwZSkge1xyXG4gICAgICBpZiAoIWNvbmZpcm0oYFN1cHByaW1lciBsJ8OpdGFwZSBcIiR7ZXRhcGUudGl0cmV9XCIgP2ApKSByZXR1cm5cclxuICAgICAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvZXRhcGVzLyR7ZXRhcGUuaWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkRXRhcGVzKClcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgc3VwcHJlc3Npb246JywgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlZGl0RXRhcGUoZXRhcGUpIHtcclxuICAgICAgdGhpcy5lZGl0aW5nRXRhcGUgPSBldGFwZVxyXG4gICAgICB0aGlzLmZvcm0gPSB7XHJcbiAgICAgICAgdGl0cmU6IGV0YXBlLnRpdHJlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBldGFwZS5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBkYXRlRGVidXQ6IGV0YXBlLmRhdGVEZWJ1dCB8fCAnJyxcclxuICAgICAgICBkYXRlTGltaXRlOiBldGFwZS5kYXRlTGltaXRlIHx8ICcnLFxyXG4gICAgICAgIG5vdGVzOiBldGFwZS5ub3RlcyB8fCAnJyxcclxuICAgICAgICBzdGF0dXQ6IGV0YXBlLnN0YXR1dCxcclxuICAgICAgICBvcmRyZTogZXRhcGUub3JkcmUsXHJcbiAgICAgICAgcHJpb3JpdHk6IGV0YXBlLnByaW9yaXR5IHx8ICcnLFxyXG4gICAgICAgIGNhdGVnb3J5OiBldGFwZS5jYXRlZ29yeSB8fCAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgdGhpcy5zaG93QWRkTW9kYWwgPSBmYWxzZVxyXG4gICAgICB0aGlzLmVkaXRpbmdFdGFwZSA9IG51bGxcclxuICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLmZvcm0gPSB7XHJcbiAgICAgICAgdGl0cmU6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBkYXRlRGVidXQ6ICcnLFxyXG4gICAgICAgIGRhdGVMaW1pdGU6ICcnLFxyXG4gICAgICAgIG5vdGVzOiAnJyxcclxuICAgICAgICBzdGF0dXQ6ICd0b2RvJyxcclxuICAgICAgICBvcmRyZTogMCxcclxuICAgICAgICBwcmlvcml0eTogJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBOb3V2ZWxsZSBtw6l0aG9kZSBwb3VyIGfDqXJlciBsZSBkcmFnXHJcbiAgICBvbkRyYWdVcGRhdGUoc3RhdHV0KSB7XHJcbiAgICAgIC8vIENldHRlIGZvbmN0aW9uIGVzdCBhcHBlbMOpZSBxdWFuZCB1bmUgbGlzdGUgY2hhbmdlXHJcbiAgICAgIHJldHVybiAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuYWRkZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV0YXBlID0gZXZlbnQuYWRkZWQuZWxlbWVudFxyXG4gICAgICAgICAgaWYgKGV0YXBlLnN0YXR1dCAhPT0gc3RhdHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRXRhcGVTdGF0dXQoZXRhcGUsIHN0YXR1dClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyB1cGRhdGVFdGFwZVN0YXR1dChldGFwZSwgbmV3U3RhdHV0KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvZXRhcGVzLyR7ZXRhcGUuaWR9YCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgICAgICAgICAgLi4uZXRhcGUsIFxyXG4gICAgICAgICAgICBzdGF0dXQ6IG5ld1N0YXR1dCxcclxuICAgICAgICAgICAgZGF0ZURlYnV0OiBuZXdTdGF0dXQgPT09ICdpbl9wcm9ncmVzcycgJiYgIWV0YXBlLmRhdGVEZWJ1dCBcclxuICAgICAgICAgICAgICA/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdIFxyXG4gICAgICAgICAgICAgIDogZXRhcGUuZGF0ZURlYnV0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWV0IMOgIGpvdXIgbG9jYWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldGFwZXMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gZXRhcGUuaWQpXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy5ldGFwZXNbaW5kZXhdLnN0YXR1dCA9IG5ld1N0YXR1dFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgY2hhbmdlbWVudCBzdGF0dXQ6JywgZXJyb3IpXHJcbiAgICAgICAgLy8gRW4gY2FzIGQnZXJyZXVyLCByZWNoYXJnZVxyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEV0YXBlcygpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmb3JtYXREYXRlKGRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKCFkYXRlU3RyaW5nKSByZXR1cm4gJydcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXHJcbiAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInKVxyXG4gICAgfSxcclxuICAgIGdldFByaW9yaXR5SWNvbihwcmlvcml0eSkge1xyXG4gICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICB1cmdlbnQ6ICfwn5S0JyxcclxuICAgICAgICBub3JtYWw6ICfwn5+hJyxcclxuICAgICAgICBsb3c6ICfwn5+iJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpY29uc1twcmlvcml0eV0gfHwgJydcclxuICAgIH0sXHJcbiAgICBnZXRQcmlvcml0eVZhcmlhbnQocHJpb3JpdHkpIHtcclxuICAgICAgY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgICAgICAgdXJnZW50OiAnZGFuZ2VyJyxcclxuICAgICAgICBub3JtYWw6ICd3YXJuaW5nJyxcclxuICAgICAgICBsb3c6ICdzdWNjZXNzJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2YXJpYW50c1twcmlvcml0eV0gfHwgJ2dyYXknXHJcbiAgICB9LFxyXG4gICAgZ2V0UHJpb3JpdHlMYWJlbChwcmlvcml0eSkge1xyXG4gICAgICBjb25zdCBsYWJlbHMgPSB7XHJcbiAgICAgICAgdXJnZW50OiAn8J+UtCBVcmdlbnQnLFxyXG4gICAgICAgIG5vcm1hbDogJ/Cfn6EgTm9ybWFsJyxcclxuICAgICAgICBsb3c6ICfwn5+iIEJhc3NlJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYWJlbHNbcHJpb3JpdHldIHx8IHByaW9yaXR5XHJcbiAgICB9LFxyXG4gICAgZ2V0RGF0ZVZhcmlhbnQoZGF0ZUxpbWl0ZSkge1xyXG4gICAgICBpZiAoIWRhdGVMaW1pdGUpIHJldHVybiAnZ3JheSdcclxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIGNvbnN0IGxpbWl0ZSA9IG5ldyBEYXRlKGRhdGVMaW1pdGUpXHJcbiAgICAgIGNvbnN0IGRpZmZEYXlzID0gTWF0aC5jZWlsKChsaW1pdGUgLSB0b2RheSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZGlmZkRheXMgPCAwKSByZXR1cm4gJ2RhbmdlcidcclxuICAgICAgaWYgKGRpZmZEYXlzIDw9IDcpIHJldHVybiAnd2FybmluZydcclxuICAgICAgcmV0dXJuICdncmF5J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5ldGFwZXMta2FuYmFuIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gdmFyKC0tdHJhbnNpdGlvbi1zbG93KTtcclxufVxyXG5cclxuLyogRmlsdHJlcyAqL1xyXG4uZmlsdGVycy1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5maWx0ZXJzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCkgdmFyKC0tc3BhY2UtbWQpIHZhcigtLXNwYWNlLW1kKSAzcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcclxufVxyXG5cclxuLmNsZWFyLXNlYXJjaCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLmNsZWFyLXNlYXJjaDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0zMDApO1xyXG59XHJcblxyXG4uZmlsdGVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLmZpbHRlci1zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKSB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLmZpbHRlci1zZWxlY3Q6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VsZWN0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcclxufVxyXG5cclxuLmFjdGl2ZS1maWx0ZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcclxufVxyXG5cclxuLmZpbHRlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5hY3RpdmUtZmlsdGVycyAuYmFkZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRHJhZyAmIERyb3AgYW3DqWxpb3LDqSAqL1xyXG4uZHJhZ2dhYmxlLWxpc3Qge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLmthbmJhbi1jYXJkIHtcclxuICBjdXJzb3I6IGdyYWI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5rYW5iYW4tY2FyZDphY3RpdmUge1xyXG4gIGN1cnNvcjogZ3JhYmJpbmc7XHJcbn1cclxuXHJcbi5kcmFnLWNhcmQge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yeGwpICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5naG9zdC1jYXJkIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XHJcbn1cclxuXHJcbi8qIEhlYWRlciAqL1xyXG4ua2FuYmFuLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UteGwpO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUgaDIge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXNtKSAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmhlYWRlci1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4vKiBQcm9ncmVzcyBDYXJkICovXHJcbi5wcm9ncmVzcy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5KSAwJSwgdmFyKC0tc2Vjb25kYXJ5KSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWxnKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1maWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzUsIDEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtbWQpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtZmlsbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwyNTUsMjU1LDAuMyksIHRyYW5zcGFyZW50KTtcclxuICBhbmltYXRpb246IHNoaW1tZXIgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgdG8geyBsZWZ0OiAxMDAlOyB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcy10ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mtc3RhdHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLnN0YXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXQtdmFsdWUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhzKTtcclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4vKiBLYW5iYW4gQm9hcmQgKi9cclxuLmthbmJhbi1ib2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICBnYXA6IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmthbmJhbi1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmNvbHVtbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbn1cclxuXHJcbi5jb2x1bW4tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxufVxyXG5cclxuLmNvbHVtbi1pY29uIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbHVtbi10aXRsZSBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udG9kby1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZWYzYzcsICNmZGU2OGEpO1xyXG4gIGNvbG9yOiAjOTI0MDBlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZGRkNmZlLCAjYzRiNWZkKTtcclxuICBjb2xvcjogIzViMjFiNjtcclxufVxyXG5cclxuLmRvbmUtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDFmYWU1LCAjYTdmM2QwKTtcclxuICBjb2xvcjogIzA2NWY0NjtcclxufVxyXG5cclxuLmNvbHVtbi1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogS2FuYmFuIENhcmRzICovXHJcbi5rYW5iYW4tY2FyZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRvZG8tY2FyZCB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmNTllMGI7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1jYXJkIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzhiNWNmNjtcclxufVxyXG5cclxuLmRvbmUtY2FyZCB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMGI5ODE7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uZG9uZS1jYXJkOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5jYXJkLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14cykgdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi5jYXJkLXN0YXR1cy5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiAjZDFmYWU1O1xyXG4gIGNvbG9yOiAjMDY1ZjQ2O1xyXG59XHJcblxyXG4ucHVsc2UtZG90IHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cclxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IH1cclxufVxyXG5cclxuLnN1Y2Nlc3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2Utc20pIDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS1tZCkgMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNhcmQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCkgdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi8qIEVtcHR5IFN0YXRlICovXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTJ4bCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG59XHJcblxyXG4uZW1wdHktaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLyogRm9ybSAqL1xyXG4uZXRhcGUtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5rYW5iYW4tYm9hcmQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlcnMtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1ib3gge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVycyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlci1zZWxlY3Qge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZpbmFuY2VzXCI+XHJcbiAgICA8IS0tIEhlYWRlciAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbmNlcy1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPlxyXG4gICAgICAgIDxoMj7wn5KwIEdlc3Rpb24gRmluYW5jacOocmU8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5QaWxvdGUgdG9uIGJ1ZGdldCBldCB0YSB0csOpc29yZXJpZTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYWN0aW9uc1wiPlxyXG4gICAgICAgIDxCdXR0b24gQGNsaWNrPVwic2hvd0FkZFRyYW5zYWN0aW9uTW9kYWwgPSB0cnVlXCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj7inpU8L3NwYW4+IE5vdXZlbGxlIFRyYW5zYWN0aW9uXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBLUEkgRmluYW5jaWVycyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJmaW5hbmNpYWwta3Bpc1wiPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImtwaS1jYXJkIHJldmVudWUtY2FyZFwiIGhvdmVyYWJsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktaWNvblwiPvCfk4g8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtwaS1sYWJlbFwiPlRvdGFsIFJldmVudXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLXZhbHVlXCI+e3sgZm9ybWF0Q3VycmVuY3koZmluYW5jaWFsU3RhdHMudG90YWxSZXZlbnVlKSB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImtwaS1jYXJkIGV4cGVuc2UtY2FyZFwiIGhvdmVyYWJsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktaWNvblwiPvCfk4k8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrcGktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtwaS1sYWJlbFwiPlRvdGFsIETDqXBlbnNlczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrcGktdmFsdWVcIj57eyBmb3JtYXRDdXJyZW5jeShmaW5hbmNpYWxTdGF0cy50b3RhbEV4cGVuc2UpIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDxDYXJkIGNsYXNzPVwia3BpLWNhcmQgYmFsYW5jZS1jYXJkXCIgaG92ZXJhYmxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcGktY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1pY29uXCI+8J+StTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLWxhYmVsXCI+U29sZGU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cIlsna3BpLXZhbHVlJywgYmFsYW5jZUNsYXNzXVwiPlxyXG4gICAgICAgICAgICAgIHt7IGZvcm1hdEN1cnJlbmN5KGZpbmFuY2lhbFN0YXRzLmJhbGFuY2UpIH19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImtwaS1jYXJkIGJ1ZGdldC1jYXJkXCIgaG92ZXJhYmxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcGktY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1pY29uXCI+8J+OrzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtwaS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLWxhYmVsXCI+QnVkZ2V0IFJlc3RhbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3BpLXZhbHVlXCI+e3sgZm9ybWF0Q3VycmVuY3koZmluYW5jaWFsU3RhdHMuYnVkZ2V0UmVtYWluaW5nKSB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrcGktcHJvZ3Jlc3MtYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia3BpLXByb2dyZXNzLWZpbGxcIiA6c3R5bGU9XCJ7IHdpZHRoOiBidWRnZXRVc2VkUGVyY2VudGFnZSArICclJyB9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gR3JhcGhpcXVlcyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjaGFydHMtc2VjdGlvblwiPlxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cclxuICAgICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+8J+TiiBSw6lwYXJ0aXRpb24gZGVzIETDqXBlbnNlczwvaDM+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Y2FudmFzIHJlZj1cImV4cGVuc2VDaGFydFwiPjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICA8Q2FyZCBjbGFzcz1cImNoYXJ0LWNhcmRcIj5cclxuICAgICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+8J+TiCDDiXZvbHV0aW9uIE1lbnN1ZWxsZTwvaDM+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Y2FudmFzIHJlZj1cIm1vbnRobHlDaGFydFwiPjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIEZpbHRyZXMgZXQgVHJhbnNhY3Rpb25zIC0tPlxyXG4gICAgPENhcmQgY2xhc3M9XCJ0cmFuc2FjdGlvbnMtc2VjdGlvblwiPlxyXG4gICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHJhbnNhY3Rpb25zLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiY2hhcnQtdGl0bGVcIj7wn5OLIEhpc3RvcmlxdWUgZGVzIFRyYW5zYWN0aW9uczwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJmaWx0ZXJUeXBlXCIgY2xhc3M9XCJmaWx0ZXItc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPlRvdXMgdHlwZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmV2ZW51ZVwiPlJldmVudXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZXhwZW5zZVwiPkTDqXBlbnNlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZmlsdGVyQ2F0ZWdvcnlcIiBjbGFzcz1cImZpbHRlci1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+VG91dGVzIGNhdMOpZ29yaWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNhdCBpbiBjYXRlZ29yaWVzXCIgOmtleT1cImNhdFwiIDp2YWx1ZT1cImNhdFwiPlxyXG4gICAgICAgICAgICAgICAge3sgY2F0IH19XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwidHJhbnNhY3Rpb25zLWxpc3RcIj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJmaWx0ZXJlZFRyYW5zYWN0aW9ucy5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImVtcHR5LWljb25cIj7wn5K4PC9zcGFuPlxyXG4gICAgICAgICAgPHA+QXVjdW5lIHRyYW5zYWN0aW9uIHBvdXIgbGUgbW9tZW50PC9wPlxyXG4gICAgICAgICAgPEJ1dHRvbiBAY2xpY2s9XCJzaG93QWRkVHJhbnNhY3Rpb25Nb2RhbCA9IHRydWVcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBBam91dGVyIHVuZSB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICB2LWZvcj1cInRyYW5zYWN0aW9uIGluIGZpbHRlcmVkVHJhbnNhY3Rpb25zXCIgXHJcbiAgICAgICAgICA6a2V5PVwidHJhbnNhY3Rpb24uaWRcIlxyXG4gICAgICAgICAgOmNsYXNzPVwiWyd0cmFuc2FjdGlvbi1pdGVtJywgdHJhbnNhY3Rpb24udHlwZV1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFuc2FjdGlvbi1pY29uXCI+XHJcbiAgICAgICAgICAgIHt7IHRyYW5zYWN0aW9uLnR5cGUgPT09ICdyZXZlbnVlJyA/ICfwn5OIJyA6ICfwn5OJJyB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJhbnNhY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJhbnNhY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg0Pnt7IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uIH19PC9oND5cclxuICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJbJ3RyYW5zYWN0aW9uLWFtb3VudCcsIHRyYW5zYWN0aW9uLnR5cGVdXCI+XHJcbiAgICAgICAgICAgICAgICB7eyB0cmFuc2FjdGlvbi50eXBlID09PSAncmV2ZW51ZScgPyAnKycgOiAnLScgfX17eyBmb3JtYXRDdXJyZW5jeSh0cmFuc2FjdGlvbi5hbW91bnQpIH19XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYW5zYWN0aW9uLW1ldGFcIj5cclxuICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cImdyYXlcIiBzaXplPVwic21cIj57eyB0cmFuc2FjdGlvbi5jYXRlZ29yeSB9fTwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cmFuc2FjdGlvbi1kYXRlXCI+e3sgZm9ybWF0RGF0ZSh0cmFuc2FjdGlvbi5kYXRlKSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKVwiIFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCIgXHJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIPCfl5HvuI9cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuXHJcbiAgICA8IS0tIEJ1ZGdldCBQcsOpdmlzaW9ubmVsIC0tPlxyXG4gICAgPENhcmQgY2xhc3M9XCJidWRnZXQtc2VjdGlvblwiPlxyXG4gICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVkZ2V0LWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiY2hhcnQtdGl0bGVcIj7wn46vIEJ1ZGdldCBQcsOpdmlzaW9ubmVsPC9oMz5cclxuICAgICAgICAgIDxCdXR0b24gQGNsaWNrPVwic2hvd0J1ZGdldE1vZGFsID0gdHJ1ZVwiIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICDimpnvuI8gQ29uZmlndXJlclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnVkZ2V0LWNhdGVnb3JpZXNcIj5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgdi1mb3I9XCJjYXQgaW4gYnVkZ2V0Q2F0ZWdvcmllc1wiIFxyXG4gICAgICAgICAgOmtleT1cImNhdC5uYW1lXCJcclxuICAgICAgICAgIGNsYXNzPVwiYnVkZ2V0LWNhdGVnb3J5XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVkZ2V0LWNhdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidWRnZXQtY2F0LW5hbWVcIj57eyBjYXQubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidWRnZXQtY2F0LWFtb3VudHNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwZW50XCI+e3sgZm9ybWF0Q3VycmVuY3koY2F0LnNwZW50KSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPi88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwbGFubmVkXCI+e3sgZm9ybWF0Q3VycmVuY3koY2F0LnBsYW5uZWQpIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWRnZXQtcHJvZ3Jlc3MtYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidWRnZXQtcHJvZ3Jlc3MtZmlsbFwiIFxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cImdldEJ1ZGdldFByb2dyZXNzQ2xhc3MoY2F0KVwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogZ2V0QnVkZ2V0UGVyY2VudGFnZShjYXQpICsgJyUnIH1cIlxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnVkZ2V0LXBlcmNlbnRhZ2VcIj57eyBnZXRCdWRnZXRQZXJjZW50YWdlKGNhdCkgfX0lPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuXHJcbiAgICA8IS0tIE1vZGFsIE5vdXZlbGxlIFRyYW5zYWN0aW9uIC0tPlxyXG4gICAgPE1vZGFsIFxyXG4gICAgICA6c2hvdz1cInNob3dBZGRUcmFuc2FjdGlvbk1vZGFsXCIgXHJcbiAgICAgIHRpdGxlPVwiTm91dmVsbGUgVHJhbnNhY3Rpb25cIlxyXG4gICAgICBAY2xvc2U9XCJjbG9zZVRyYW5zYWN0aW9uTW9kYWxcIlxyXG4gICAgICBzaXplPVwibWRcIlxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzYXZlVHJhbnNhY3Rpb25cIiBjbGFzcz1cInRyYW5zYWN0aW9uLWZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlR5cGUgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInRyYW5zYWN0aW9uRm9ybS50eXBlXCIgY2xhc3M9XCJmb3JtLWlucHV0XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZXZlbnVlXCI+8J+TiCBSZXZlbnU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImV4cGVuc2VcIj7wn5OJIETDqXBlbnNlPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5EZXNjcmlwdGlvbiA8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidHJhbnNhY3Rpb25Gb3JtLmRlc2NyaXB0aW9uXCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IEFjaGF0IG1hdMOpcmllbCBpbmZvcm1hdGlxdWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5Nb250YW50ICjigqwpIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cInRyYW5zYWN0aW9uRm9ybS5hbW91bnRcIiBcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RGF0ZSA8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInRyYW5zYWN0aW9uRm9ybS5kYXRlXCIgXHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIiBcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkNhdMOpZ29yaWUgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInRyYW5zYWN0aW9uRm9ybS5jYXRlZ29yeVwiIGNsYXNzPVwiZm9ybS1pbnB1dFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U8OpbGVjdGlvbm5lci4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiY2F0IGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiY2F0XCIgOnZhbHVlPVwiY2F0XCI+XHJcbiAgICAgICAgICAgICAge3sgY2F0IH19XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Tm90ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICB2LW1vZGVsPVwidHJhbnNhY3Rpb25Gb3JtLm5vdGVzXCIgXHJcbiAgICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcy4uLlwiXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHRlbXBsYXRlICNmb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvbiBAY2xpY2s9XCJjbG9zZVRyYW5zYWN0aW9uTW9kYWxcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICBBbm51bGVyXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBAY2xpY2s9XCJzYXZlVHJhbnNhY3Rpb25cIiA6bG9hZGluZz1cInNhdmluZ1wiPlxyXG4gICAgICAgICAg8J+SviBFbnJlZ2lzdHJlclxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9Nb2RhbD5cclxuXHJcbiAgICA8IS0tIE1vZGFsIENvbmZpZ3VyYXRpb24gQnVkZ2V0IC0tPlxyXG4gICAgPE1vZGFsIFxyXG4gICAgICA6c2hvdz1cInNob3dCdWRnZXRNb2RhbFwiIFxyXG4gICAgICB0aXRsZT1cIkNvbmZpZ3VyYXRpb24gZHUgQnVkZ2V0XCJcclxuICAgICAgQGNsb3NlPVwiY2xvc2VCdWRnZXRNb2RhbFwiXHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJidWRnZXQtY29uZmlnXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJidWRnZXQtaW50cm9cIj5cclxuICAgICAgICAgIETDqWZpbmlzIHRlcyBvYmplY3RpZnMgYnVkZ8OpdGFpcmVzIHBhciBjYXTDqWdvcmllIHBvdXIgbWlldXggc3VpdnJlIHRlcyBkw6lwZW5zZXMuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVkZ2V0LWNvbmZpZy1saXN0XCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiY2F0IGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiY2F0XCIgY2xhc3M9XCJidWRnZXQtY29uZmlnLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnVkZ2V0LWNvbmZpZy1sYWJlbFwiPnt7IGNhdCB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICB2LW1vZGVsLm51bWJlcj1cImJ1ZGdldENvbmZpZ1tjYXRdXCIgXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgIHN0ZXA9XCIxMDBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHRlbXBsYXRlICNmb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvbiBAY2xpY2s9XCJjbG9zZUJ1ZGdldE1vZGFsXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgQW5udWxlclxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gQGNsaWNrPVwic2F2ZUJ1ZGdldENvbmZpZ1wiPlxyXG4gICAgICAgICAg8J+SviBFbnJlZ2lzdHJlclxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9Nb2RhbD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdGaW5hbmNlcycsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRyYW5zYWN0aW9uczogW10sXHJcbiAgICAgIHNob3dBZGRUcmFuc2FjdGlvbk1vZGFsOiBmYWxzZSxcclxuICAgICAgc2hvd0J1ZGdldE1vZGFsOiBmYWxzZSxcclxuICAgICAgc2F2aW5nOiBmYWxzZSxcclxuICAgICAgZmlsdGVyVHlwZTogJ2FsbCcsXHJcbiAgICAgIGZpbHRlckNhdGVnb3J5OiAnYWxsJyxcclxuICAgICAgdHJhbnNhY3Rpb25Gb3JtOiB7XHJcbiAgICAgICAgdHlwZTogJ2V4cGVuc2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXHJcbiAgICAgICAgY2F0ZWdvcnk6ICcnLFxyXG4gICAgICAgIG5vdGVzOiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgJ0Zvcm1hdGlvbicsXHJcbiAgICAgICAgJ01hcmtldGluZycsXHJcbiAgICAgICAgJ01hdMOpcmllbCcsXHJcbiAgICAgICAgJ0FkbWluaXN0cmF0aWYnLFxyXG4gICAgICAgICdMb2NhdXgnLFxyXG4gICAgICAgICdGcmFpcyBmcmFuY2hpc2UnLFxyXG4gICAgICAgICdBdXRyZSdcclxuICAgICAgXSxcclxuICAgICAgYnVkZ2V0Q29uZmlnOiB7XHJcbiAgICAgICAgJ0Zvcm1hdGlvbic6IDUwMDAsXHJcbiAgICAgICAgJ01hcmtldGluZyc6IDMwMDAsXHJcbiAgICAgICAgJ01hdMOpcmllbCc6IDIwMDAsXHJcbiAgICAgICAgJ0FkbWluaXN0cmF0aWYnOiAxMDAwLFxyXG4gICAgICAgICdMb2NhdXgnOiA1MDAwLFxyXG4gICAgICAgICdGcmFpcyBmcmFuY2hpc2UnOiAyMDAwMCxcclxuICAgICAgICAnQXV0cmUnOiAxMDAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYXJ0czoge1xyXG4gICAgICAgIGV4cGVuc2U6IG51bGwsXHJcbiAgICAgICAgbW9udGhseTogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgZmluYW5jaWFsU3RhdHMoKSB7XHJcbiAgICAgIGNvbnN0IHRvdGFsUmV2ZW51ZSA9IHRoaXMudHJhbnNhY3Rpb25zXHJcbiAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ3JldmVudWUnKVxyXG4gICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB0b3RhbEV4cGVuc2UgPSB0aGlzLnRyYW5zYWN0aW9uc1xyXG4gICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcclxuICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IHRvdGFsUmV2ZW51ZSAtIHRvdGFsRXhwZW5zZVxyXG4gICAgICBcclxuICAgICAgY29uc3QgdG90YWxCdWRnZXQgPSBPYmplY3QudmFsdWVzKHRoaXMuYnVkZ2V0Q29uZmlnKS5yZWR1Y2UoKHN1bSwgdmFsKSA9PiBzdW0gKyB2YWwsIDApXHJcbiAgICAgIGNvbnN0IGJ1ZGdldFJlbWFpbmluZyA9IHRvdGFsQnVkZ2V0IC0gdG90YWxFeHBlbnNlXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvdGFsUmV2ZW51ZSxcclxuICAgICAgICB0b3RhbEV4cGVuc2UsXHJcbiAgICAgICAgYmFsYW5jZSxcclxuICAgICAgICBidWRnZXRSZW1haW5pbmdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhbGFuY2VDbGFzcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmluYW5jaWFsU3RhdHMuYmFsYW5jZSA+PSAwID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSdcclxuICAgIH0sXHJcbiAgICBidWRnZXRVc2VkUGVyY2VudGFnZSgpIHtcclxuICAgICAgY29uc3QgdG90YWxCdWRnZXQgPSBPYmplY3QudmFsdWVzKHRoaXMuYnVkZ2V0Q29uZmlnKS5yZWR1Y2UoKHN1bSwgdmFsKSA9PiBzdW0gKyB2YWwsIDApXHJcbiAgICAgIGlmICh0b3RhbEJ1ZGdldCA9PT0gMCkgcmV0dXJuIDBcclxuICAgICAgcmV0dXJuIE1hdGgubWluKDEwMCwgTWF0aC5yb3VuZCgodGhpcy5maW5hbmNpYWxTdGF0cy50b3RhbEV4cGVuc2UgLyB0b3RhbEJ1ZGdldCkgKiAxMDApKVxyXG4gICAgfSxcclxuICAgIGZpbHRlcmVkVHJhbnNhY3Rpb25zKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50cmFuc2FjdGlvbnNcclxuICAgICAgICAuZmlsdGVyKHQgPT4gdGhpcy5maWx0ZXJUeXBlID09PSAnYWxsJyB8fCB0LnR5cGUgPT09IHRoaXMuZmlsdGVyVHlwZSlcclxuICAgICAgICAuZmlsdGVyKHQgPT4gdGhpcy5maWx0ZXJDYXRlZ29yeSA9PT0gJ2FsbCcgfHwgdC5jYXRlZ29yeSA9PT0gdGhpcy5maWx0ZXJDYXRlZ29yeSlcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpXHJcbiAgICB9LFxyXG4gICAgYnVkZ2V0Q2F0ZWdvcmllcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5tYXAoY2F0ID0+IHtcclxuICAgICAgICBjb25zdCBzcGVudCA9IHRoaXMudHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZXhwZW5zZScgJiYgdC5jYXRlZ29yeSA9PT0gY2F0KVxyXG4gICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMClcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogY2F0LFxyXG4gICAgICAgICAgc3BlbnQ6IHNwZW50LFxyXG4gICAgICAgICAgcGxhbm5lZDogdGhpcy5idWRnZXRDb25maWdbY2F0XSB8fCAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMubG9hZFRyYW5zYWN0aW9ucygpXHJcbiAgICB0aGlzLmxvYWRCdWRnZXRDb25maWcoKVxyXG4gIH0sXHJcbiAgYmVmb3JlVW5tb3VudCgpIHtcclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5jaGFydHMpLmZvckVhY2goY2hhcnQgPT4ge1xyXG4gICAgICBpZiAoY2hhcnQpIGNoYXJ0LmRlc3Ryb3koKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGxvYWRUcmFuc2FjdGlvbnMoKSB7XHJcbiAgICAgIC8vIFNpbXVsZSBsZSBjaGFyZ2VtZW50IGRlcHVpcyB1bmUgQVBJXHJcbiAgICAgIC8vIFRPRE86IFJlbXBsYWNlciBwYXIgdW4gdnJhaSBhcHBlbCBBUElcclxuICAgICAgY29uc3Qgc3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyYW5zYWN0aW9ucycpXHJcbiAgICAgIGlmIChzdG9yZWQpIHtcclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IEpTT04ucGFyc2Uoc3RvcmVkKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGFydHMoKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvYWRCdWRnZXRDb25maWcoKSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdidWRnZXRDb25maWcnKVxyXG4gICAgICBpZiAoc3RvcmVkKSB7XHJcbiAgICAgICAgdGhpcy5idWRnZXRDb25maWcgPSBKU09OLnBhcnNlKHN0b3JlZClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNhdmVUcmFuc2FjdGlvbigpIHtcclxuICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBuZXdUcmFuc2FjdGlvbiA9IHtcclxuICAgICAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgICAgICAuLi50aGlzLnRyYW5zYWN0aW9uRm9ybSxcclxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnRyYW5zYWN0aW9ucy5wdXNoKG5ld1RyYW5zYWN0aW9uKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHJhbnNhY3Rpb25zJywgSlNPTi5zdHJpbmdpZnkodGhpcy50cmFuc2FjdGlvbnMpKVxyXG4gICAgICBcclxuICAgICAgdGhpcy5jbG9zZVRyYW5zYWN0aW9uTW9kYWwoKVxyXG4gICAgICB0aGlzLnNhdmluZyA9IGZhbHNlXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGFydHMoKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbGV0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XHJcbiAgICAgIGlmICghY29uZmlybShgU3VwcHJpbWVyIGxhIHRyYW5zYWN0aW9uIFwiJHt0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbn1cIiA/YCkpIHJldHVyblxyXG4gICAgICBcclxuICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSB0aGlzLnRyYW5zYWN0aW9ucy5maWx0ZXIodCA9PiB0LmlkICE9PSB0cmFuc2FjdGlvbi5pZClcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyYW5zYWN0aW9ucycsIEpTT04uc3RyaW5naWZ5KHRoaXMudHJhbnNhY3Rpb25zKSlcclxuICAgICAgXHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNoYXJ0cygpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2F2ZUJ1ZGdldENvbmZpZygpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2J1ZGdldENvbmZpZycsIEpTT04uc3RyaW5naWZ5KHRoaXMuYnVkZ2V0Q29uZmlnKSlcclxuICAgICAgdGhpcy5jbG9zZUJ1ZGdldE1vZGFsKClcclxuICAgICAgXHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNoYXJ0cygpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY2xvc2VUcmFuc2FjdGlvbk1vZGFsKCkge1xyXG4gICAgICB0aGlzLnNob3dBZGRUcmFuc2FjdGlvbk1vZGFsID0gZmFsc2VcclxuICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLnRyYW5zYWN0aW9uRm9ybSA9IHtcclxuICAgICAgICB0eXBlOiAnZXhwZW5zZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcclxuICAgICAgICBjYXRlZ29yeTogJycsXHJcbiAgICAgICAgbm90ZXM6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZUJ1ZGdldE1vZGFsKCkge1xyXG4gICAgICB0aGlzLnNob3dCdWRnZXRNb2RhbCA9IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQ2hhcnRzKCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUV4cGVuc2VDaGFydCgpXHJcbiAgICAgIHRoaXMuY3JlYXRlTW9udGhseUNoYXJ0KClcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFeHBlbnNlQ2hhcnQoKSB7XHJcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuJHJlZnMuZXhwZW5zZUNoYXJ0XHJcbiAgICAgIGlmICghY3R4KSByZXR1cm5cclxuXHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0cy5leHBlbnNlKSB7XHJcbiAgICAgICAgdGhpcy5jaGFydHMuZXhwZW5zZS5kZXN0cm95KClcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZXhwZW5zZUJ5Q2F0ZWdvcnkgPSB7fVxyXG4gICAgICB0aGlzLnRyYW5zYWN0aW9uc1xyXG4gICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcclxuICAgICAgICAuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgIGV4cGVuc2VCeUNhdGVnb3J5W3QuY2F0ZWdvcnldID0gKGV4cGVuc2VCeUNhdGVnb3J5W3QuY2F0ZWdvcnldIHx8IDApICsgdC5hbW91bnRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgbGFiZWxzID0gT2JqZWN0LmtleXMoZXhwZW5zZUJ5Q2F0ZWdvcnkpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QudmFsdWVzKGV4cGVuc2VCeUNhdGVnb3J5KVxyXG5cclxuICAgICAgdGhpcy5jaGFydHMuZXhwZW5zZSA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDIzOSwgNjgsIDY4LCAwLjgpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNDUsIDE1OCwgMTEsIDAuOCknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE2LCAxODUsIDEyOSwgMC44KScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNTksIDEzMCwgMjQ2LCAwLjgpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxMzksIDkyLCAyNDYsIDAuOCknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDIzNiwgNzIsIDE1MywgMC44KScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTU2LCAxNjMsIDE3NSwgMC44KSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDJcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTUsXHJcbiAgICAgICAgICAgICAgICBmb250OiB7IHNpemU6IDEyIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTW9udGhseUNoYXJ0KCkge1xyXG4gICAgICBjb25zdCBjdHggPSB0aGlzLiRyZWZzLm1vbnRobHlDaGFydFxyXG4gICAgICBpZiAoIWN0eCkgcmV0dXJuXHJcblxyXG4gICAgICBpZiAodGhpcy5jaGFydHMubW9udGhseSkge1xyXG4gICAgICAgIHRoaXMuY2hhcnRzLm1vbnRobHkuZGVzdHJveSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEdyb3VwZXIgcGFyIG1vaXNcclxuICAgICAgY29uc3QgbW9udGhseURhdGEgPSB7fVxyXG4gICAgICB0aGlzLnRyYW5zYWN0aW9ucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUodC5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJywgeyBtb250aDogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pXHJcbiAgICAgICAgaWYgKCFtb250aGx5RGF0YVttb250aF0pIHtcclxuICAgICAgICAgIG1vbnRobHlEYXRhW21vbnRoXSA9IHsgcmV2ZW51ZTogMCwgZXhwZW5zZTogMCB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0LnR5cGUgPT09ICdyZXZlbnVlJykge1xyXG4gICAgICAgICAgbW9udGhseURhdGFbbW9udGhdLnJldmVudWUgKz0gdC5hbW91bnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbW9udGhseURhdGFbbW9udGhdLmV4cGVuc2UgKz0gdC5hbW91bnRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zdCBsYWJlbHMgPSBPYmplY3Qua2V5cyhtb250aGx5RGF0YSkuc29ydCgpXHJcbiAgICAgIGNvbnN0IHJldmVudWVEYXRhID0gbGFiZWxzLm1hcChtID0+IG1vbnRobHlEYXRhW21dLnJldmVudWUpXHJcbiAgICAgIGNvbnN0IGV4cGVuc2VEYXRhID0gbGFiZWxzLm1hcChtID0+IG1vbnRobHlEYXRhW21dLmV4cGVuc2UpXHJcblxyXG4gICAgICB0aGlzLmNoYXJ0cy5tb250aGx5ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnUmV2ZW51cycsXHJcbiAgICAgICAgICAgICAgZGF0YTogcmV2ZW51ZURhdGEsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNiwgMTg1LCAxMjksIDAuOCknLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxNiwgMTg1LCAxMjksIDEpJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnRMOpcGVuc2VzJyxcclxuICAgICAgICAgICAgICBkYXRhOiBleHBlbnNlRGF0YSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIzOSwgNjgsIDY4LCAwLjgpJyxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjM5LCA2OCwgNjgsIDEpJyxcclxuICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGZvcm1hdEN1cnJlbmN5KGFtb3VudCkge1xyXG4gICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmci1GUicsIHtcclxuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgICAgICBjdXJyZW5jeTogJ0VVUidcclxuICAgICAgfSkuZm9ybWF0KGFtb3VudClcclxuICAgIH0sXHJcbiAgICBmb3JtYXREYXRlKGRhdGVTdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmcpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInKVxyXG4gICAgfSxcclxuICAgIGdldEJ1ZGdldFBlcmNlbnRhZ2UoY2F0KSB7XHJcbiAgICAgIGlmIChjYXQucGxhbm5lZCA9PT0gMCkgcmV0dXJuIDBcclxuICAgICAgcmV0dXJuIE1hdGgubWluKDEwMCwgTWF0aC5yb3VuZCgoY2F0LnNwZW50IC8gY2F0LnBsYW5uZWQpICogMTAwKSlcclxuICAgIH0sXHJcbiAgICBnZXRCdWRnZXRQcm9ncmVzc0NsYXNzKGNhdCkge1xyXG4gICAgICBjb25zdCBwZXJjZW50YWdlID0gdGhpcy5nZXRCdWRnZXRQZXJjZW50YWdlKGNhdClcclxuICAgICAgaWYgKHBlcmNlbnRhZ2UgPj0gOTApIHJldHVybiAnZGFuZ2VyJ1xyXG4gICAgICBpZiAocGVyY2VudGFnZSA+PSA3NSkgcmV0dXJuICd3YXJuaW5nJ1xyXG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmZpbmFuY2VzIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gdmFyKC0tdHJhbnNpdGlvbi1zbG93KTtcclxufVxyXG5cclxuLyogSGVhZGVyICovXHJcbi5maW5hbmNlcy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUgaDIge1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXNtKSAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogS1BJIENhcmRzICovXHJcbi5maW5hbmNpYWwta3BpcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi5rcGktY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctcHJpbWFyeSksIHZhcigtLWJnLXNlY29uZGFyeSkpO1xyXG59XHJcblxyXG4ua3BpLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmtwaS1pY29uIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5yZXZlbnVlLWNhcmQgLmtwaS1pY29uIHsgY29sb3I6IHZhcigtLXN1Y2Nlc3MpOyB9XHJcbi5leHBlbnNlLWNhcmQgLmtwaS1pY29uIHsgY29sb3I6IHZhcigtLWVycm9yKTsgfVxyXG4uYmFsYW5jZS1jYXJkIC5rcGktaWNvbiB7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxyXG4uYnVkZ2V0LWNhcmQgLmtwaS1pY29uIHsgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7IH1cclxuXHJcbi5rcGktZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UteHMpO1xyXG59XHJcblxyXG4ua3BpLWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmtwaS12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5rcGktdmFsdWUucG9zaXRpdmUgeyBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7IH1cclxuLmtwaS12YWx1ZS5uZWdhdGl2ZSB7IGNvbG9yOiB2YXIoLS1lcnJvcik7IH1cclxuXHJcbi5rcGktcHJvZ3Jlc3MtYmFyIHtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ua3BpLXByb2dyZXNzLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXByaW1hcnkpLCB2YXIoLS1zZWNvbmRhcnkpKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNSwgMSk7XHJcbn1cclxuXHJcbi8qIENoYXJ0cyAqL1xyXG4uY2hhcnRzLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0NTBweCwgMWZyKSk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UteGwpO1xyXG59XHJcblxyXG4uY2hhcnQtY2FyZCB7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5jaGFydC10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUcmFuc2FjdGlvbnMgKi9cclxuLnRyYW5zYWN0aW9ucy1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbnMtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZpbHRlcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VsZWN0IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSkgdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VsZWN0OmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb25zLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWl0ZW0ucmV2ZW51ZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24taXRlbS5leHBlbnNlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tZXJyb3IpO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24taXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWhlYWRlciBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWFtb3VudCB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1hbW91bnQucmV2ZW51ZSB7XHJcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tYW1vdW50LmV4cGVuc2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1kYXRlIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTJ4bCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG59XHJcblxyXG4uZW1wdHktaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi8qIEJ1ZGdldCAqL1xyXG4uYnVkZ2V0LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmJ1ZGdldC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idWRnZXQtY2F0ZWdvcmllcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uYnVkZ2V0LWNhdGVnb3J5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG59XHJcblxyXG4uYnVkZ2V0LWNhdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xyXG59XHJcblxyXG4uYnVkZ2V0LWNhdC1uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4uYnVkZ2V0LWNhdC1hbW91bnRzIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uc3BlbnQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgbWFyZ2luOiAwIHZhcigtLXNwYWNlLXhzKTtcclxufVxyXG5cclxuLnBsYW5uZWQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5idWRnZXQtcHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhzKTtcclxufVxyXG5cclxuLmJ1ZGdldC1wcm9ncmVzcy1maWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzUsIDEpO1xyXG59XHJcblxyXG4uYnVkZ2V0LXByb2dyZXNzLWZpbGwuc3VjY2VzcyB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpOyB9XHJcbi5idWRnZXQtcHJvZ3Jlc3MtZmlsbC53YXJuaW5nIHsgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7IH1cclxuLmJ1ZGdldC1wcm9ncmVzcy1maWxsLmRhbmdlciB7IGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTsgfVxyXG5cclxuLmJ1ZGdldC1wZXJjZW50YWdlIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogRm9ybXMgKi9cclxuLnRyYW5zYWN0aW9uLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dCB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG4vKiBCdWRnZXQgQ29uZmlnICovXHJcbi5idWRnZXQtY29uZmlnIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbn1cclxuXHJcbi5idWRnZXQtaW50cm8ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnVkZ2V0LWNvbmZpZy1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uYnVkZ2V0LWNvbmZpZy1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbn1cclxuXHJcbi5idWRnZXQtY29uZmlnLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNoYXJ0cy1zZWN0aW9uIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idWRnZXQtY29uZmlnLWxpc3Qge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxzcGFuIDpjbGFzcz1cImJhZGdlQ2xhc3Nlc1wiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQmFkZ2UnLFxyXG4gIHByb3BzOiB7XHJcbiAgICB2YXJpYW50OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxyXG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4gWydwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbycsICdncmF5J10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdtZCcsXHJcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ3NtJywgJ21kJywgJ2xnJ10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9LFxyXG4gICAgcGlsbDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGJhZGdlQ2xhc3NlcygpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAnYmFkZ2UnLFxyXG4gICAgICAgIGBiYWRnZS0ke3RoaXMudmFyaWFudH1gLFxyXG4gICAgICAgIGBiYWRnZS0ke3RoaXMuc2l6ZX1gLFxyXG4gICAgICAgIHsgJ2JhZGdlLXBpbGwnOiB0aGlzLnBpbGwgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLmJhZGdlLXBpbGwge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxufVxyXG5cclxuLyogU2l6ZXMgKi9cclxuLmJhZGdlLXNtIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5iYWRnZS1tZCB7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uYmFkZ2UtbGcge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogVmFyaWFudHMgKi9cclxuLmJhZGdlLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktbGlnaHQpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2Utc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2Utd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2UtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2UtaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW5mbyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2UtZ3JheSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxidXR0b24gXHJcbiAgICA6Y2xhc3M9XCJidXR0b25DbGFzc2VzXCIgXHJcbiAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZCB8fCBsb2FkaW5nXCJcclxuICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsICRldmVudClcIlxyXG4gID5cclxuICAgIDxzcGFuIHYtaWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJzcGlubmVyXCI+PC9zcGFuPlxyXG4gICAgPHNsb3Qgdi1lbHNlPjwvc2xvdD5cclxuICA8L2J1dHRvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQnV0dG9uJyxcclxuICBwcm9wczoge1xyXG4gICAgdmFyaWFudDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JywgLy8gcHJpbWFyeSwgc2Vjb25kYXJ5LCBzdWNjZXNzLCBkYW5nZXIsIGdob3N0XHJcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3N1Y2Nlc3MnLCAnZGFuZ2VyJywgJ2dob3N0J10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdtZCcsIC8vIHNtLCBtZCwgbGdcclxuICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IFsnc20nLCAnbWQnLCAnbGcnXS5pbmNsdWRlcyh2YWx1ZSlcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGxvYWRpbmc6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBidXR0b25DbGFzc2VzKCkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgICdidG4nLFxyXG4gICAgICAgIGBidG4tJHt0aGlzLnZhcmlhbnR9YCxcclxuICAgICAgICBgYnRuLSR7dGhpcy5zaXplfWAsXHJcbiAgICAgICAgeyAnYnRuLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyogU2l6ZXMgKi9cclxuLmJ0bi1zbSB7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmJ0bi1tZCB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuLWxnIHtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxufVxyXG5cclxuLyogVmFyaWFudHMgKi9cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5KSAwJSwgdmFyKC0tc2Vjb25kYXJ5KSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyOm5vdCguYnRuLWRpc2FibGVkKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTphY3RpdmU6bm90KC5idG4tZGlzYWJsZWQpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KC5idG4tZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTIwMCk7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzczpob3Zlcjpub3QoLmJ0bi1kaXNhYmxlZCkge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KC5idG4tZGlzYWJsZWQpIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5idG4tZ2hvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLmJ0bi1naG9zdDpob3Zlcjpub3QoLmJ0bi1kaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogRGlzYWJsZWQgKi9cclxuLmJ0bi1kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNwaW5uZXIgKi9cclxuLnNwaW5uZXIge1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAwLjZzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cImNhcmRDbGFzc2VzXCI+XHJcbiAgICA8ZGl2IHYtaWY9XCIkc2xvdHMuaGVhZGVyXCIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwiJHNsb3RzLmZvb3RlclwiIGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdDYXJkJyxcclxuICBwcm9wczoge1xyXG4gICAgaG92ZXJhYmxlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyZWQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJ21kJywgLy8gc20sIG1kLCBsZywgbm9uZVxyXG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4gWydub25lJywgJ3NtJywgJ21kJywgJ2xnJ10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY2FyZENsYXNzZXMoKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgJ2NhcmQnLFxyXG4gICAgICAgIGBjYXJkLXBhZGRpbmctJHt0aGlzLnBhZGRpbmd9YCxcclxuICAgICAgICB7ICdjYXJkLWhvdmVyYWJsZSc6IHRoaXMuaG92ZXJhYmxlIH0sXHJcbiAgICAgICAgeyAnY2FyZC1ib3JkZXJlZCc6IHRoaXMuYm9yZGVyZWQgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG4gIGFuaW1hdGlvbjogc2NhbGVJbiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG59XHJcblxyXG4uY2FyZC1ob3ZlcmFibGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaG92ZXJhYmxlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxufVxyXG5cclxuLmNhcmQtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxufVxyXG5cclxuLyogUGFkZGluZyB2YXJpYW50cyAqL1xyXG4uY2FyZC1wYWRkaW5nLW5vbmUgLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhcmQtcGFkZGluZy1zbSAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbn1cclxuXHJcbi5jYXJkLXBhZGRpbmctbWQgLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG59XHJcblxyXG4uY2FyZC1wYWRkaW5nLWxnIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFRyYW5zaXRpb24gbmFtZT1cIm1vZGFsXCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJzaG93XCIgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCIgQGNsaWNrLnNlbGY9XCJjbG9zZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCIgOmNsYXNzPVwiYG1vZGFsLSR7c2l6ZX1gXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cclxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY2xvc2VcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCI+4pyVPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCIkc2xvdHMuZm9vdGVyXCIgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9UcmFuc2l0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdNb2RhbCcsXHJcbiAgcHJvcHM6IHtcclxuICAgIHNob3c6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgc2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdtZCcsIC8vIHNtLCBtZCwgbGcsIHhsXHJcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10uaW5jbHVkZXModmFsdWUpXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHNob3cobmV3VmFsKSB7XHJcbiAgICAgIGlmIChuZXdWYWwpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogdmFyKC0tei1tb2RhbCk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yeGwpO1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vZGFsLXNtIHsgbWF4LXdpZHRoOiA0MDBweDsgfVxyXG4ubW9kYWwtbWQgeyBtYXgtd2lkdGg6IDYwMHB4OyB9XHJcbi5tb2RhbC1sZyB7IG1heC13aWR0aDogODAwcHg7IH1cclxuLm1vZGFsLXhsIHsgbWF4LXdpZHRoOiAxMjAwcHg7IH1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LTEwMCk7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbi5tb2RhbC1lbnRlci1hY3RpdmUsXHJcbi5tb2RhbC1sZWF2ZS1hY3RpdmUge1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxufVxyXG5cclxuLm1vZGFsLWVudGVyLWFjdGl2ZSAubW9kYWwtY29udGFpbmVyLFxyXG4ubW9kYWwtbGVhdmUtYWN0aXZlIC5tb2RhbC1jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG59XHJcblxyXG4ubW9kYWwtZW50ZXItZnJvbSxcclxuLm1vZGFsLWxlYXZlLXRvIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubW9kYWwtZW50ZXItZnJvbSAubW9kYWwtY29udGFpbmVyLFxyXG4ubW9kYWwtbGVhdmUtdG8gLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKC0yMHB4KTtcclxufVxyXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YmNkYWYwMyZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvQXBwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1YmNkYWYwM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzViY2RhZjAzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWJjZGFmMDMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDNcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNWJjZGFmMDMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NhbGVuZHJpZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MWFkM2FjJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FsZW5kcmllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FsZW5kcmllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NhbGVuZHJpZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQxYWQzYWMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTU0MWFkM2FjXCJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL0NhbGVuZHJpZXIudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjU0MWFkM2FjXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTQxYWQzYWMnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1NDFhZDNhYycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FsZW5kcmllci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxYWQzYWMmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNTQxYWQzYWMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNiMDRiYWUmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04M2IwNGJhZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtODNiMDRiYWVcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI4M2IwNGJhZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzgzYjA0YmFlJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnODNiMDRiYWUnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNiMDRiYWUmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignODNiMDRiYWUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FdGFwZXNLYW5iYW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2U3YzRjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMDdlN2M0YzRcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvRXRhcGVzS2FuYmFuLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwN2U3YzRjNFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzA3ZTdjNGM0JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDdlN2M0YzQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMDdlN2M0YzQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZpbmFuY2VzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTFiY2Y1NCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbmFuY2VzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GaW5hbmNlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0ZpbmFuY2VzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhMWJjZjU0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0xYTFiY2Y1NFwiXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9GaW5hbmNlcy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMWExYmNmNTRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxYTFiY2Y1NCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzFhMWJjZjU0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaW5hbmNlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWExYmNmNTQmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMWExYmNmNTQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0JhZGdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Mjc4NDAyMyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0JhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9CYWRnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0JhZGdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyNzg0MDIzJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi02Mjc4NDAyM1wiXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy91aS9CYWRnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjI3ODQwMjNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2Mjc4NDAyMycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzYyNzg0MDIzJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CYWRnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI3ODQwMjMmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjI3ODQwMjMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdiYzNiM2Mmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2JjM2IzYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNzdiYzNiM2NcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvdWkvQnV0dG9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3N2JjM2IzY1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzc3YmMzYjNjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNzdiYzNiM2MnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdiYzNiM2Mmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNzdiYzNiM2MnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NzZjNTgwJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTU3NmM1ODAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTU1NzZjNTgwXCJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL3VpL0NhcmQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjU1NzZjNTgwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTU3NmM1ODAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1NTc2YzU4MCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU3NmM1ODAmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNTU3NmM1ODAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NWRmMGEyZCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY1ZGYwYTJkJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi02NWRmMGEyZFwiXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy91aS9Nb2RhbC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjVkZjBhMmRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2NWRmMGEyZCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzY1ZGYwYTJkJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjVkZjBhMmQmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjVkZjBhMmQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DYWxlbmRyaWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NhbGVuZHJpZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXRhcGVzS2FuYmFuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZpbmFuY2VzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZpbmFuY2VzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQmFkZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQmFkZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwM1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NhbGVuZHJpZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MWFkM2FjJnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04M2IwNGJhZSZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0V0YXBlc0thbmJhbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GaW5hbmNlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWExYmNmNTQmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CYWRnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI3ODQwMjMmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YmMzYjNjJnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU3NmM1ODAmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjVkZjBhMmQmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YmNkYWYwMyZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2FsZW5kcmllci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NDFhZDNhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgzYjA0YmFlJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9FdGFwZXNLYW5iYW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDdlN2M0YzQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZpbmFuY2VzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhMWJjZjU0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CYWRnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mjc4NDAyMyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3YmMzYjNjJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU1NzZjNTgwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NWRmMGEyZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIl0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsIkFwcCIsIkV0YXBlc0thbmJhbiIsIkRhc2hib2FyZCIsIkNhbGVuZHJpZXIiLCJGaW5hbmNlcyIsIkJ1dHRvbiIsIkNhcmQiLCJNb2RhbCIsIkJhZGdlIiwiYXBwIiwiY29tcG9uZW50IiwibW91bnQiLCJuYW1lIiwiY29tcG9uZW50cyIsImRhdGEiLCJjdXJyZW50VmlldyIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwidmlldyIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZXRhcGVzIiwiY3VycmVudERhdGUiLCJEYXRlIiwic2VsZWN0ZWREYXkiLCJkYXlzT2ZXZWVrIiwiY29tcHV0ZWQiLCJjdXJyZW50TW9udGhZZWFyIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0U2VsZWN0ZWREYXRlIiwiZGF0ZSIsIndlZWtkYXkiLCJkYXkiLCJjYWxlbmRhckRheXMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZmlyc3REYXkiLCJsYXN0RGF5IiwiZmlyc3REYXlPZldlZWsiLCJnZXREYXkiLCJkYXlzIiwicHJldk1vbnRoTGFzdERheSIsImdldERhdGUiLCJwdXNoIiwibnVtYmVyIiwiaXNDdXJyZW50TW9udGgiLCJpc1RvZGF5IiwiZ2V0RXRhcGVzRm9yRGF0ZSIsInRvZGF5IiwidG9EYXRlU3RyaW5nIiwicmVtYWluaW5nRGF5cyIsIm1vbnRoU3RhdHMiLCJzZXRIb3VycyIsIm1vbnRoRXRhcGVzIiwiZmlsdGVyIiwiZGF0ZUxpbWl0ZSIsInN0YXJ0T2ZXZWVrIiwic2V0RGF0ZSIsImVuZE9mV2VlayIsInRoaXNXZWVrIiwidG90YWwiLCJ1cmdlbnQiLCJwcmlvcml0eSIsIm92ZXJkdWUiLCJzdGF0dXQiLCJtb3VudGVkIiwibG9hZEV0YXBlcyIsIl90aGlzIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiX3QiLCJfY29udGV4dCIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsImV0YXBlIiwiZXRhcGVEYXRlIiwiZ2V0RGF5Q2xhc3NlcyIsImdldFByaW9yaXR5Q2xhc3MiLCJjbGFzc2VzIiwibm9ybWFsIiwibG93IiwiZ2V0UHJpb3JpdHlWYXJpYW50IiwidmFyaWFudHMiLCJnZXRQcmlvcml0eUxhYmVsIiwibGFiZWxzIiwiZ2V0U3RhdHVzVmFyaWFudCIsInRvZG8iLCJpbl9wcm9ncmVzcyIsImdldFN0YXR1c0xhYmVsIiwicHJldmlvdXNNb250aCIsIm5leHRNb250aCIsImdvVG9Ub2RheSIsInNlbGVjdERheSIsIm9wZW5FdGFwZURldGFpbHMiLCJmaW5kIiwic29tZSIsImlkIiwidHJ1bmNhdGUiLCJ0ZXh0Iiwic3Vic3RyaW5nIiwiZ29Ub0thbmJhbiIsIiRlbWl0IiwiQ2hhcnQiLCJjaGFydHMiLCJzdGF0dXMiLCJjYXRlZ29yeSIsInN0YXRzIiwiaW5Qcm9ncmVzcyIsImNvbXBsZXRpb25SYXRlIiwiTWF0aCIsInJvdW5kIiwidXBjb21pbmdFdGFwZXMiLCJpbjMwRGF5cyIsImdldFRpbWUiLCJkZWFkbGluZSIsInNvcnQiLCJiIiwic2xpY2UiLCJ1cmdlbnRFdGFwZXMiLCJiZWZvcmVVbm1vdW50IiwidmFsdWVzIiwiZm9yRWFjaCIsImNoYXJ0IiwiZGVzdHJveSIsIiRuZXh0VGljayIsImNyZWF0ZUNoYXJ0cyIsImNyZWF0ZVN0YXR1c0NoYXJ0IiwiY3JlYXRlQ2F0ZWdvcnlDaGFydCIsImNyZWF0ZVByaW9yaXR5Q2hhcnQiLCJjdHgiLCIkcmVmcyIsInN0YXR1c0NoYXJ0IiwidHlwZSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInBhZGRpbmciLCJmb250Iiwic2l6ZSIsImNhdGVnb3J5Q2hhcnQiLCJjYXRlZ29yeUNvdW50cyIsImNhdCIsImtleXMiLCJsYWJlbCIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJzY2FsZXMiLCJiZWdpbkF0WmVybyIsInRpY2tzIiwic3RlcFNpemUiLCJwcmlvcml0eUNoYXJ0Iiwibm9uZSIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZm9ybWF0RGF0ZVJlbGF0aXZlIiwiZGlmZlRpbWUiLCJkaWZmRGF5cyIsImNlaWwiLCJjb25jYXQiLCJnZXREYXRlQmFkZ2VWYXJpYW50IiwiZ2V0VGltZWxpbmVDbGFzcyIsInZhcmlhbnQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImlzQXJyYXkiLCJkcmFnZ2FibGUiLCJzaG93QWRkTW9kYWwiLCJlZGl0aW5nRXRhcGUiLCJzYXZpbmciLCJzZWFyY2hRdWVyeSIsInNvcnRCeSIsImZpbHRlclByaW9yaXR5IiwiZm9ybSIsInRpdHJlIiwiZGVzY3JpcHRpb24iLCJkYXRlRGVidXQiLCJub3RlcyIsIm9yZHJlIiwidG9kb0xpc3QiLCJpblByb2dyZXNzTGlzdCIsImRvbmVMaXN0IiwiZmlsdGVyZWRFdGFwZXMiLCJmaWx0ZXJlZCIsInF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRhdGVBIiwiZGF0ZUIiLCJsb2NhbGVDb21wYXJlIiwiZmlsdGVyZWRFdGFwZXNCeVN0YXR1dCIsInByb2dyZXNzaW9uIiwicHJvZ3Jlc3NWYXJpYW50Iiwid2F0Y2giLCJoYW5kbGVyIiwibmV3VmFsIiwiZGVlcCIsImltbWVkaWF0ZSIsIl90aGlzMiIsInNhdmVFdGFwZSIsIl90aGlzMyIsIl9jYWxsZWUyIiwidXJsIiwibWV0aG9kIiwiX3QyIiwiX2NvbnRleHQyIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xvc2VNb2RhbCIsImNoYW5nZVN0YXR1dCIsIm5ld1N0YXR1dCIsIl90aGlzNCIsIl9jYWxsZWUzIiwiX3QzIiwiX2NvbnRleHQzIiwiX29iamVjdFNwcmVhZCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJkZWxldGVFdGFwZSIsIl90aGlzNSIsIl9jYWxsZWU0IiwiX3Q0IiwiX2NvbnRleHQ0IiwiY29uZmlybSIsImVkaXRFdGFwZSIsIm9uRHJhZ1VwZGF0ZSIsIl90aGlzNiIsImV2ZW50IiwiYWRkZWQiLCJlbGVtZW50IiwidXBkYXRlRXRhcGVTdGF0dXQiLCJfdGhpczciLCJfY2FsbGVlNSIsImluZGV4IiwiX3Q1IiwiX2NvbnRleHQ1IiwiZmluZEluZGV4IiwiZ2V0UHJpb3JpdHlJY29uIiwiaWNvbnMiLCJnZXREYXRlVmFyaWFudCIsImxpbWl0ZSIsInRyYW5zYWN0aW9ucyIsInNob3dBZGRUcmFuc2FjdGlvbk1vZGFsIiwic2hvd0J1ZGdldE1vZGFsIiwiZmlsdGVyVHlwZSIsImZpbHRlckNhdGVnb3J5IiwidHJhbnNhY3Rpb25Gb3JtIiwiYW1vdW50IiwiY2F0ZWdvcmllcyIsImJ1ZGdldENvbmZpZyIsImV4cGVuc2UiLCJtb250aGx5IiwiZmluYW5jaWFsU3RhdHMiLCJ0b3RhbFJldmVudWUiLCJyZWR1Y2UiLCJzdW0iLCJ0b3RhbEV4cGVuc2UiLCJiYWxhbmNlIiwidG90YWxCdWRnZXQiLCJ2YWwiLCJidWRnZXRSZW1haW5pbmciLCJiYWxhbmNlQ2xhc3MiLCJidWRnZXRVc2VkUGVyY2VudGFnZSIsIm1pbiIsImZpbHRlcmVkVHJhbnNhY3Rpb25zIiwiYnVkZ2V0Q2F0ZWdvcmllcyIsIm1hcCIsInNwZW50IiwicGxhbm5lZCIsImxvYWRUcmFuc2FjdGlvbnMiLCJsb2FkQnVkZ2V0Q29uZmlnIiwic3RvcmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwic2F2ZVRyYW5zYWN0aW9uIiwibmV3VHJhbnNhY3Rpb24iLCJub3ciLCJjcmVhdGVkQXQiLCJzZXRJdGVtIiwiY2xvc2VUcmFuc2FjdGlvbk1vZGFsIiwiZGVsZXRlVHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbiIsInNhdmVCdWRnZXRDb25maWciLCJjbG9zZUJ1ZGdldE1vZGFsIiwiY3JlYXRlRXhwZW5zZUNoYXJ0IiwiY3JlYXRlTW9udGhseUNoYXJ0IiwiZXhwZW5zZUNoYXJ0IiwiZXhwZW5zZUJ5Q2F0ZWdvcnkiLCJtb250aGx5Q2hhcnQiLCJtb250aGx5RGF0YSIsInJldmVudWUiLCJyZXZlbnVlRGF0YSIsImV4cGVuc2VEYXRhIiwiZm9ybWF0Q3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImdldEJ1ZGdldFBlcmNlbnRhZ2UiLCJnZXRCdWRnZXRQcm9ncmVzc0NsYXNzIiwicGVyY2VudGFnZSIsInByb3BzIiwiU3RyaW5nIiwidmFsaWRhdG9yIiwicGlsbCIsIkJvb2xlYW4iLCJiYWRnZUNsYXNzZXMiLCJkaXNhYmxlZCIsImxvYWRpbmciLCJidXR0b25DbGFzc2VzIiwiaG92ZXJhYmxlIiwiYm9yZGVyZWQiLCJjYXJkQ2xhc3NlcyIsInNob3ciLCJyZXF1aXJlZCIsInRpdGxlIiwiY2xvc2UiLCJkb2N1bWVudCIsIm92ZXJmbG93IiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIm9uQ2xpY2siLCJfY2FjaGUiLCIkZXZlbnQiLCIkZGF0YSIsIl9ub3JtYWxpemVDbGFzcyIsImFjdGl2ZSIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9DYXJkIiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X0Rhc2hib2FyZCIsIm9uTmF2aWdhdGUiLCIkb3B0aW9ucyIsIl9jb21wb25lbnRfRXRhcGVzS2FuYmFuIiwia2V5IiwiX2NvbXBvbmVudF9DYWxlbmRyaWVyIiwiX2NvbXBvbmVudF9GaW5hbmNlcyIsIl9jb21wb25lbnRfQnV0dG9uIiwiX3RvRGlzcGxheVN0cmluZyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2hvaXN0ZWRfOSIsIl93aXRoTW9kaWZpZXJzIiwiX2hvaXN0ZWRfMTEiLCJfaG9pc3RlZF8xMiIsImhlYWRlciIsIl93aXRoQ3R4IiwiX2hvaXN0ZWRfMTMiLCJfaG9pc3RlZF8xNCIsIl9ob2lzdGVkXzE1IiwiX2NvbXBvbmVudF9CYWRnZSIsIl9ob2lzdGVkXzE2IiwiX2hvaXN0ZWRfMTciLCJfaG9pc3RlZF8xOCIsIl9ob2lzdGVkXzE5IiwiX2hvaXN0ZWRfMjAiLCJfaG9pc3RlZF8yMSIsIl9ob2lzdGVkXzIyIiwiX2hvaXN0ZWRfMjMiLCJfaG9pc3RlZF8yNCIsIl9ob2lzdGVkXzI1IiwiX2hvaXN0ZWRfMjYiLCJfaG9pc3RlZF8yNyIsIl9ob2lzdGVkXzI4IiwiX2hvaXN0ZWRfMjkiLCJfaG9pc3RlZF8zMCIsInJlZiIsIl9ob2lzdGVkXzEwIiwiX25vcm1hbGl6ZVN0eWxlIiwid2lkdGgiLCJfaG9pc3RlZF8zMSIsIl9ob2lzdGVkXzMyIiwiX2hvaXN0ZWRfMzMiLCJfaG9pc3RlZF8zNCIsInBsYWNlaG9sZGVyIiwiX2NvbXBvbmVudF9kcmFnZ2FibGUiLCJncm91cCIsIm9uQ2hhbmdlIiwiYW5pbWF0aW9uIiwiaXRlbSIsIl9yZWYiLCJmb290ZXIiLCJfcmVmMiIsIl9ob2lzdGVkXzM4IiwiX2hvaXN0ZWRfMzUiLCJfaG9pc3RlZF8zNiIsIl9ob2lzdGVkXzM3IiwiX2hvaXN0ZWRfMzkiLCJfaG9pc3RlZF80MCIsIl9ob2lzdGVkXzQxIiwiX2hvaXN0ZWRfNDIiLCJfcmVmMyIsIl9ob2lzdGVkXzQ3IiwiX2hvaXN0ZWRfNDMiLCJfaG9pc3RlZF80NCIsIl9ob2lzdGVkXzQ1IiwiX2hvaXN0ZWRfNDYiLCJfaG9pc3RlZF80OCIsIl9jb21wb25lbnRfTW9kYWwiLCJvbkNsb3NlIiwib25TdWJtaXQiLCJfaG9pc3RlZF80OSIsIl9ob2lzdGVkXzUwIiwiX2hvaXN0ZWRfNTEiLCJfaG9pc3RlZF81MiIsIl9ob2lzdGVkXzUzIiwicm93cyIsIl9ob2lzdGVkXzU0IiwiX2hvaXN0ZWRfNTUiLCJfaG9pc3RlZF81NiIsIl9ob2lzdGVkXzU3Iiwic3RlcCIsIl9yZW5kZXJTbG90IiwiX2N0eCIsIiRzbG90cyIsInVuZGVmaW5lZCIsIiRwcm9wcyIsIl9UcmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==