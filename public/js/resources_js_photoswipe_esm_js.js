"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_photoswipe_esm_js"],{

/***/ "./resources/js/photoswipe.esm.js":
/*!****************************************!*\
  !*** ./resources/js/photoswipe.esm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
  * PhotoSwipe 5.2.0-beta.3 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */

/**
  * Creates element and optionally appends it to another.
  *
  * @param {String} className
  * @param {String|NULL} tagName
  * @param {Element|NULL} appendToEl
  */
function createElement(className, tagName, appendToEl) {
  var el = document.createElement(tagName || 'div');

  if (className) {
    el.className = className;
  }

  if (appendToEl) {
    appendToEl.appendChild(el);
  }

  return el;
}

function equalizePoints(p1, p2) {
  p1.x = p2.x;
  p1.y = p2.y;

  if (p2.id !== undefined) {
    p1.id = p2.id;
  }

  return p1;
}

function roundPoint(p) {
  p.x = Math.round(p.x);
  p.y = Math.round(p.y);
}
/**
 * Returns distance between two points.
 *
 * @param {Object} p1 Point
 * @param {Object} p2 Point
 */


function getDistanceBetween(p1, p2) {
  var x = Math.abs(p1.x - p2.x);
  var y = Math.abs(p1.y - p2.y);
  return Math.sqrt(x * x + y * y);
}
/**
 * Whether X and Y positions of points are qual
 *
 * @param {Object} p1
 * @param {Object} p2
 */


function pointsEqual(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
/**
 * The float result between the min and max values.
 *
 * @param {Number} val
 * @param {Number} min
 * @param {Number} max
 */


function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
/**
 * Get transform string
 *
 * @param {Number} x
 * @param {Number|null} y
 * @param {Number|null} scale
 */


function toTransformString(x, y, scale) {
  var propValue = 'translate3d(' + x + 'px,' + (y || 0) + 'px' + ',0)';

  if (scale !== undefined) {
    propValue += ' scale3d(' + scale + ',' + scale + ',1)';
  }

  return propValue;
}
/**
 * Apply transform:translate(x, y) scale(scale) to element
 *
 * @param {DOMElement} el
 * @param {Number} x
 * @param {Number|null} y
 * @param {Number|null} scale
 */


function setTransform(el, x, y, scale) {
  el.style.transform = toTransformString(x, y, scale);
}

var defaultCSSEasing = 'cubic-bezier(.4,0,.22,1)';
/**
 * Apply CSS transition to element
 *
 * @param {Element} el
 * @param {String} prop CSS property to animate
 * @param {Number} duration in ms
 * @param {String|NULL} ease CSS easing function
 */

function setTransitionStyle(el, prop, duration, ease) {
  // inOut: 'cubic-bezier(.4, 0, .22, 1)', // for "toggle state" transitions
  // out: 'cubic-bezier(0, 0, .22, 1)', // for "show" transitions
  // in: 'cubic-bezier(.4, 0, 1, 1)'// for "hide" transitions
  el.style.transition = prop ? prop + ' ' + duration + 'ms ' + (ease || defaultCSSEasing) : 'none';
}
/**
 * Apply width and height CSS properties to element
 */


function setWidthHeight(el, w, h) {
  el.style.width = typeof w === 'number' ? w + 'px' : w;
  el.style.height = typeof h === 'number' ? h + 'px' : h;
}

function removeTransitionStyle(el) {
  setTransitionStyle(el);
}

function decodeImage(img) {
  if ('decode' in img) {
    return img.decode();
  }

  if (img.complete) {
    return Promise.resolve(img);
  }

  return new Promise(function (resolve, reject) {
    img.onload = function () {
      return resolve(img);
    };

    img.onerror = reject;
  });
}

var LOAD_STATE = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};
/**
 * Check if click or keydown event was dispatched
 * with a special key or via mouse wheel.
 *
 * @param {Event} e
 */

function specialKeyUsed(e) {
  if (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
    return true;
  }
}
/**
 * Parse `gallery` or `children` options.
 *
 * @param {Element|NodeList|String} option
 * @param {String|null} legacySelector
 * @param {Element|null} parent
 * @returns Element[]
 */


function getElementsFromOption(option, legacySelector) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var elements = [];

  if (option instanceof Element) {
    elements = [option];
  } else if (option instanceof NodeList || Array.isArray(option)) {
    elements = Array.from(option);
  } else {
    var selector = typeof option === 'string' ? option : legacySelector;

    if (selector) {
      elements = Array.from(parent.querySelectorAll(selector));
    }
  }

  return elements;
} // Detect passive event listener support


var supportsPassive = false;
/* eslint-disable */

try {
  window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  }));
} catch (e) {}
/* eslint-enable */


var DOMEvents = /*#__PURE__*/function () {
  function DOMEvents() {
    _classCallCheck(this, DOMEvents);

    this._pool = [];
  }
  /**
   * Adds event listeners
   *
   * @param {DOMElement} target
   * @param {String} type Can be multiple, separated by space.
   * @param {Function} listener
   * @param {Boolean} passive
   */


  _createClass(DOMEvents, [{
    key: "add",
    value: function add(target, type, listener, passive) {
      this._toggleListener(target, type, listener, passive);
    }
    /**
     * Removes event listeners
     *
     * @param {DOMElement} target
     * @param {String} type
     * @param {Function} listener
     * @param {Boolean} passive
     */

  }, {
    key: "remove",
    value: function remove(target, type, listener, passive) {
      this._toggleListener(target, type, listener, passive, true);
    }
    /**
     * Removes all bound events
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      var _this = this;

      this._pool.forEach(function (poolItem) {
        _this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
      });

      this._pool = [];
    }
    /**
     * Adds or removes event
     *
     * @param {DOMElement} target
     * @param {String} type
     * @param {Function} listener
     * @param {Boolean} passive
     * @param {Boolean} unbind Whether the event should be added or removed
     * @param {Boolean} skipPool Whether events pool should be skipped
     */

  }, {
    key: "_toggleListener",
    value: function _toggleListener(target, type, listener, passive, unbind, skipPool) {
      var _this2 = this;

      if (!target) {
        return;
      }

      var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
      type = type.split(' ');
      type.forEach(function (eType) {
        if (eType) {
          // Events pool is used to easily unbind all events when PhotoSwipe is closed,
          // so developer doesn't need to do this manually
          if (!skipPool) {
            if (unbind) {
              // Remove from the events pool
              _this2._pool = _this2._pool.filter(function (poolItem) {
                return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
              });
            } else {
              // Add to the events pool
              _this2._pool.push({
                target: target,
                type: eType,
                listener: listener,
                passive: passive
              });
            }
          } // most PhotoSwipe events call preventDefault,
          // and we do not need browser to scroll the page


          var eventOptions = supportsPassive ? {
            passive: passive || false
          } : false;
          target[methodName](eType, listener, eventOptions);
        }
      });
    }
  }]);

  return DOMEvents;
}();

function getViewportSize(options, pswp) {
  if (options.getViewportSizeFn) {
    var newViewportSize = options.getViewportSizeFn(options, pswp);

    if (newViewportSize) {
      return newViewportSize;
    }
  }

  return {
    x: document.documentElement.clientWidth,
    // TODO: height on mobile is very incosistent due to toolbar
    // find a way to improve this
    //
    // document.documentElement.clientHeight - doesn't seem to work well
    y: window.innerHeight
  };
}
/**
 * Parses padding option.
 * Supported formats:
 *
 * // Object
 * padding: {
 *  top: 0,
 *  bottom: 0,
 *  left: 0,
 *  right: 0
 * }
 *
 * // A function that returns the object
 * paddingFn: (viewportSize, itemData, index) => {
 *  return {
 *    top: 0,
 *    bottom: 0,
 *    left: 0,
 *    right: 0
 *  };
 * }
 *
 * // Legacy variant
 * paddingLeft: 0,
 * paddingRight: 0,
 * paddingTop: 0,
 * paddingBottom: 0,
 *
 * @param {String}  prop 'left', 'top', 'bottom', 'right'
 * @param {Object}  options PhotoSwipe options
 * @param {Object}  viewportSize PhotoSwipe viewport size, for example: { x:800, y:600 }
 * @param {Object}  itemData Data about the slide
 * @param {Integer} index Slide index
 * @returns {Number}
 */


function parsePaddingOption(prop, options, viewportSize, itemData, index) {
  var paddingValue;

  if (options.paddingFn) {
    paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
  } else if (options.padding) {
    paddingValue = options.padding[prop];
  } else {
    var legacyPropName = 'padding' + prop[0].toUpperCase() + prop.slice(1);

    if (options[legacyPropName]) {
      paddingValue = options[legacyPropName];
    }
  }

  return paddingValue || 0;
}

function getPanAreaSize(options, viewportSize, itemData, index) {
  return {
    x: viewportSize.x - parsePaddingOption('left', options, viewportSize, itemData, index) - parsePaddingOption('right', options, viewportSize, itemData, index),
    y: viewportSize.y - parsePaddingOption('top', options, viewportSize, itemData, index) - parsePaddingOption('bottom', options, viewportSize, itemData, index)
  };
}
/**
 * Calculates minimum, maximum and initial (center) bounds of a slide
 */


var PanBounds = /*#__PURE__*/function () {
  function PanBounds(slide) {
    _classCallCheck(this, PanBounds);

    this.slide = slide;
    this.currZoomLevel = 1;
    this.center = {};
    this.max = {};
    this.min = {};
    this.reset();
  } // _getItemBounds


  _createClass(PanBounds, [{
    key: "update",
    value: function update(currZoomLevel) {
      this.currZoomLevel = currZoomLevel;

      if (!this.slide.width) {
        this.reset();
      } else {
        this._updateAxis('x');

        this._updateAxis('y');

        this.slide.pswp.dispatch('calcBounds', {
          slide: this.slide
        });
      }
    } // _calculateItemBoundsForAxis

  }, {
    key: "_updateAxis",
    value: function _updateAxis(axis) {
      var pswp = this.slide.pswp;
      var elSize = this.slide[axis === 'x' ? 'width' : 'height'] * this.currZoomLevel;
      var paddingProp = axis === 'x' ? 'left' : 'top';
      var padding = parsePaddingOption(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
      var panAreaSize = this.slide.panAreaSize[axis]; // Default position of element.
      // By defaul it is center of viewport:

      this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding; // maximum pan position

      this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis]; // minimum pan position

      this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
    } // _getZeroBounds

  }, {
    key: "reset",
    value: function reset() {
      this.center.x = 0;
      this.center.y = 0;
      this.max.x = 0;
      this.max.y = 0;
      this.min.x = 0;
      this.min.y = 0;
    }
    /**
     * Correct pan position if it's beyond the bounds
     *
     * @param {String} axis x or y
     * @param {Object} panOffset
     */

  }, {
    key: "correctPan",
    value: function correctPan(axis, panOffset) {
      // checkPanBounds
      return clamp(panOffset, this.max[axis], this.min[axis]);
    }
  }]);

  return PanBounds;
}();
/**
 * Calculates zoom levels for specific slide.
 * Depends on viewport size and image size.
 */


var MAX_IMAGE_WIDTH = 4000;

var ZoomLevel = /*#__PURE__*/function () {
  /**
   * @param {Object} options PhotoSwipe options
   * @param {Object} itemData Slide data
   * @param {Integer} index Slide index
   * @param {PhotoSwipe|undefined} pswp PhotoSwipe instance, can be undefined if not initialized yet
   */
  function ZoomLevel(options, itemData, index, pswp) {
    _classCallCheck(this, ZoomLevel);

    this.pswp = pswp;
    this.options = options;
    this.itemData = itemData;
    this.index = index;
  }
  /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {Slide} slide
   */


  _createClass(ZoomLevel, [{
    key: "update",
    value: function update(maxWidth, maxHeight, panAreaSize) {
      this.elementSize = {
        x: maxWidth,
        y: maxHeight
      };
      this.panAreaSize = panAreaSize;
      var hRatio = this.panAreaSize.x / this.elementSize.x;
      var vRatio = this.panAreaSize.y / this.elementSize.y;
      this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
      this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio); // zoom.vFill defines zoom level of the image
      // when it has 100% of viewport vertical space (height)

      this.vFill = Math.min(1, vRatio);
      this.initial = this._getInitial();
      this.secondary = this._getSecondary();
      this.max = Math.max(this.initial, this.secondary, this._getMax());
      this.min = Math.min(this.fit, this.initial, this.secondary);

      if (this.pswp) {
        this.pswp.dispatch('zoomLevelsUpdate', {
          zoomLevels: this,
          slideData: this.itemData
        });
      }
    }
    /**
     * Parses user-defined zoom option.
     *
     * @param {Mixed} optionPrefix Zoom level option prefix (initial, secondary, max)
     */

  }, {
    key: "_parseZoomLevelOption",
    value: function _parseZoomLevelOption(optionPrefix) {
      // zoom.initial
      // zoom.secondary
      // zoom.max
      var optionValue = this.options[optionPrefix + 'ZoomLevel'];

      if (!optionValue) {
        return;
      }

      if (typeof optionValue === 'function') {
        return optionValue(this);
      }

      if (optionValue === 'fill') {
        return this.fill;
      }

      if (optionValue === 'fit') {
        return this.fit;
      }

      return Number(optionValue);
    }
    /**
     * Get zoom level to which image will be zoomed after double-tap gesture,
     * or when user clicks on zoom icon,
     * or mouse-click on image itself.
     * If you return 1 image will be zoomed to its original size.
     *
     * @return {Number}
     */

  }, {
    key: "_getSecondary",
    value: function _getSecondary() {
      var currZoomLevel = this._parseZoomLevelOption('secondary');

      if (currZoomLevel) {
        return currZoomLevel;
      } // 3x of "fit" state, but not larger than original


      currZoomLevel = Math.min(1, this.fit * 3);

      if (currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
        currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
      }

      return currZoomLevel;
    }
    /**
     * Get initial image zoom level.
     *
     * @return {Number}
     */

  }, {
    key: "_getInitial",
    value: function _getInitial() {
      return this._parseZoomLevelOption('initial') || this.fit;
    }
    /**
     * Maximum zoom level when user zooms
     * via zoom/pinch gesture,
     * via cmd/ctrl-wheel or via trackpad.
     *
     * @return {Number}
     */

  }, {
    key: "_getMax",
    value: function _getMax() {
      var currZoomLevel = this._parseZoomLevelOption('max');

      if (currZoomLevel) {
        return currZoomLevel;
      } // max zoom level is x4 from "fit state",
      // used for zoom gesture and ctrl/trackpad zoom


      return Math.max(1, this.fit * 4);
    }
  }]);

  return ZoomLevel;
}();
/**
 * Renders and allows to control a single slide
 */


var Slide = /*#__PURE__*/function () {
  function Slide(data, index, pswp) {
    _classCallCheck(this, Slide);

    this.data = data;
    this.index = index;
    this.pswp = pswp;
    this.isActive = index === pswp.currIndex;
    this.currentResolution = 0;
    this.panAreaSize = {};
    this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
    this.zoomLevels = new ZoomLevel(pswp.options, data, index, pswp);
    this.pswp.dispatch('gettingData', {
      slide: this,
      data: this.data,
      index: index
    });
    this.pan = {
      x: 0,
      y: 0
    };
    this.content = this.pswp.contentLoader.getContentBySlide(this);
    this.container = createElement('pswp__zoom-wrap');
    this.currZoomLevel = 1;
    this.width = this.content.width;
    this.height = this.content.height;
    this.bounds = new PanBounds(this);
    this.prevDisplayedWidth = -1;
    this.prevDisplayedHeight = -1;
    this.pswp.dispatch('slideInit', {
      slide: this
    });
  }
  /**
   * If this slide is active/current/visible
   *
   * @param {Boolean} isActive
   */


  _createClass(Slide, [{
    key: "setIsActive",
    value: function setIsActive(isActive) {
      if (isActive && !this.isActive) {
        // slide just became active
        this.activate();
      } else if (!isActive && this.isActive) {
        // slide just became non-active
        this.deactivate();
      }
    }
    /**
     * Appends slide content to DOM
     */

  }, {
    key: "append",
    value: function append(holderElement) {
      this.holderElement = holderElement; // Slide appended to DOM

      if (!this.data) {
        this.holderElement.innerHTML = '';
        return;
      }

      this.calculateSize();
      this.container.transformOrigin = '0 0';
      this.load();
      this.appendHeavy();
      this.updateContentSize();
      this.holderElement.innerHTML = '';
      this.holderElement.appendChild(this.container);
      this.zoomAndPanToInitial();
      this.pswp.dispatch('firstZoomPan', {
        slide: this
      });
      this.applyCurrentZoomPan();
      this.pswp.dispatch('afterSetContent', {
        slide: this
      });

      if (this.isActive) {
        this.activate();
      }
    }
  }, {
    key: "load",
    value: function load() {
      this.content.load();
      this.pswp.dispatch('slideLoad', {
        slide: this
      });
    }
    /**
     * Append "heavy" DOM elements
     *
     * This may depend on a type of slide,
     * but generally these are large images.
     */

  }, {
    key: "appendHeavy",
    value: function appendHeavy() {
      var pswp = this.pswp;
      var appendHeavyNearby = true; // todo
      // Avoid appending heavy elements during animations

      if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) {
        return;
      }

      if (this.pswp.dispatch('appendHeavy', {
        slide: this
      }).defaultPrevented) {
        return;
      }

      this.heavyAppended = true;
      this.content.append();
      this.pswp.dispatch('appendHeavyContent', {
        slide: this
      });
    }
    /**
     * Append HTML content to slide container
     * (usually item.html or error message)
     *
     * @param {DOMElement} containerEl
     * @param {String} html
     */

  }, {
    key: "setSlideHTML",
    value: function setSlideHTML(html) {
      var container = this.container;

      if (html.tagName) {
        container.appendChild(html);
      } else {
        container.innerHTML = html;
      }
    }
    /**
     * Triggered when this slide is active (selected).
     *
     * If it's part of opening/closing transition -
     * activate() will trigger after the transition is ended.
     */

  }, {
    key: "activate",
    value: function activate() {
      this.isActive = true;
      this.appendHeavy();
      this.content.activate();
      this.pswp.dispatch('slideActivate', {
        slide: this
      });
    }
    /**
     * Triggered when this slide becomes inactive.
     *
     * Slide can become inactive only after it was active.
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      this.isActive = false;
      this.content.deactivate(); // reset zoom level

      this.currentResolution = 0;
      this.zoomAndPanToInitial();
      this.applyCurrentZoomPan();
      this.updateContentSize();
      this.pswp.dispatch('slideDeactivate', {
        slide: this
      });
    }
    /**
     * The slide should destroy itself, it will never be used again.
     * (unbind all events and destroy internal components)
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.content.hasSlide = false;
      this.content.remove();
      this.pswp.dispatch('slideDestroy', {
        slide: this
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
        // Keep initial zoom level if it was before the resize,
        // as well as when this slide is not active
        // Reset position and scale to original state
        this.calculateSize();
        this.currentResolution = 0;
        this.zoomAndPanToInitial();
        this.applyCurrentZoomPan();
        this.updateContentSize();
      } else {
        // readjust pan position if it's beyond the bounds
        this.calculateSize();
        this.bounds.update(this.currZoomLevel);
        this.panTo(this.pan.x, this.pan.y);
      }
    }
    /**
     * Apply size to current slide content,
     * based on the current resolution and scale.
     *
     * @param {Boolean} force if size should be updated even if dimensions weren't changed
     */

  }, {
    key: "updateContentSize",
    value: function updateContentSize(force) {
      // Use initial zoom level
      // if resolution is not defined (user didn't zoom yet)
      var scaleMultiplier = this.currentResolution || this.zoomLevels.initial;

      if (!scaleMultiplier) {
        return;
      }

      var width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
      var height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;

      if (!this.sizeChanged(width, height) && !force) {
        return;
      }

      this.content.setDisplayedSize(width, height);
    }
  }, {
    key: "sizeChanged",
    value: function sizeChanged(width, height) {
      if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
        this.prevDisplayedWidth = width;
        this.prevDisplayedHeight = height;
        return true;
      }

      return false;
    }
  }, {
    key: "getPlaceholderElement",
    value: function getPlaceholderElement() {
      if (this.content.placeholder) {
        return this.content.placeholder.element;
      }
    }
    /**
     * Zoom current slide image to...
     *
     * @param  {Number} destZoomLevel      Destination zoom level.
     * @param  {Object|false} centerPoint  Transform origin center point,
     *                                     or false if viewport center should be used.
     * @param  {Number} transitionDuration Transition duration, may be set to 0.
     * @param  {Boolean|null} ignoreBounds Minimum and maximum zoom levels will be ignored.
     * @return {Boolean|null}              Returns true if animated.
     */

  }, {
    key: "zoomTo",
    value: function zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
      var _this3 = this;

      var pswp = this.pswp;

      if (!this.isZoomable() || pswp.mainScroll.isShifted()) {
        return;
      }

      pswp.dispatch('beforeZoomTo', {
        destZoomLevel: destZoomLevel,
        centerPoint: centerPoint,
        transitionDuration: transitionDuration
      }); // stop all pan and zoom transitions

      pswp.animations.stopAllPan(); // if (!centerPoint) {
      //   centerPoint = pswp.getViewportCenterPoint();
      // }

      var prevZoomLevel = this.currZoomLevel;

      if (!ignoreBounds) {
        destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
      } // if (transitionDuration === undefined) {
      //   transitionDuration = this.pswp.options.zoomAnimationDuration;
      // }


      this.setZoomLevel(destZoomLevel);
      this.pan.x = this.calculateZoomToPanOffset('x', centerPoint, prevZoomLevel);
      this.pan.y = this.calculateZoomToPanOffset('y', centerPoint, prevZoomLevel);
      roundPoint(this.pan);

      var finishTransition = function finishTransition() {
        _this3._setResolution(destZoomLevel);

        _this3.applyCurrentZoomPan();
      };

      if (!transitionDuration) {
        finishTransition();
      } else {
        pswp.animations.startTransition({
          isPan: true,
          name: 'zoomTo',
          target: this.container,
          transform: this.getCurrentTransform(),
          onComplete: finishTransition,
          duration: transitionDuration,
          easing: pswp.options.easing
        });
      }
    }
  }, {
    key: "toggleZoom",
    value: function toggleZoom(centerPoint) {
      this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
    }
    /**
     * Updates zoom level property and recalculates new pan bounds,
     * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
     *
     * @param {Number} currZoomLevel
     */

  }, {
    key: "setZoomLevel",
    value: function setZoomLevel(currZoomLevel) {
      this.currZoomLevel = currZoomLevel;
      this.bounds.update(this.currZoomLevel);
    }
    /**
     * Get pan position after zoom at a given `point`.
     *
     * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
     * pan bounds according to the new zoom level.
     *
     * @param {String} axis
     * @param {Object|null} centerPoint point based on which zoom is performed,
     *                                  usually refers to the current mouse position,
     *                                  if false - viewport center will be used.
     * @param {Number|null} prevZoomLevel Zoom level before new zoom was applied.
     */

  }, {
    key: "calculateZoomToPanOffset",
    value: function calculateZoomToPanOffset(axis, point, prevZoomLevel) {
      var totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];

      if (totalPanDistance === 0) {
        return this.bounds.center[axis];
      }

      if (!point) {
        point = this.pswp.getViewportCenterPoint();
      }

      var zoomFactor = this.currZoomLevel / prevZoomLevel;
      return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
    }
    /**
     * Apply pan and keep it within bounds.
     *
     * @param {Number} panX
     * @param {Number} panY
     */

  }, {
    key: "panTo",
    value: function panTo(panX, panY) {
      this.pan.x = this.bounds.correctPan('x', panX);
      this.pan.y = this.bounds.correctPan('y', panY);
      this.applyCurrentZoomPan();
    }
    /**
     * If the slide in the current state can be panned by the user
     */

  }, {
    key: "isPannable",
    value: function isPannable() {
      return this.width && this.currZoomLevel > this.zoomLevels.fit;
    }
    /**
     * If the slide can be zoomed
     */

  }, {
    key: "isZoomable",
    value: function isZoomable() {
      return this.width && this.content.isZoomable();
    }
    /**
     * Apply transform and scale based on
     * the current pan position (this.pan) and zoom level (this.currZoomLevel)
     */

  }, {
    key: "applyCurrentZoomPan",
    value: function applyCurrentZoomPan() {
      this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);

      if (this === this.pswp.currSlide) {
        this.pswp.dispatch('zoomPanUpdate', {
          slide: this
        });
      }
    }
  }, {
    key: "zoomAndPanToInitial",
    value: function zoomAndPanToInitial() {
      this.currZoomLevel = this.zoomLevels.initial; // pan according to the zoom level

      this.bounds.update(this.currZoomLevel);
      equalizePoints(this.pan, this.bounds.center);
      this.pswp.dispatch('initialZoomPan', {
        slide: this
      });
    }
    /**
     * Set translate and scale based on current resolution
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} zoom
     */

  }, {
    key: "_applyZoomTransform",
    value: function _applyZoomTransform(x, y, zoom) {
      zoom /= this.currentResolution || this.zoomLevels.initial;
      setTransform(this.container, x, y, zoom);
    }
  }, {
    key: "calculateSize",
    value: function calculateSize() {
      var pswp = this.pswp;
      equalizePoints(this.panAreaSize, getPanAreaSize(pswp.options, pswp.viewportSize, this.data, this.index));
      this.zoomLevels.update(this.width, this.height, this.panAreaSize);
      pswp.dispatch('calcSlideSize', {
        slide: this
      });
    }
  }, {
    key: "getCurrentTransform",
    value: function getCurrentTransform() {
      var scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
      return toTransformString(this.pan.x, this.pan.y, scale);
    }
    /**
     * Set resolution and re-render the image.
     *
     * For example, if the real image size is 2000x1500,
     * and resolution is 0.5 - it will be rendered as 1000x750.
     *
     * Image with zoom level 2 and resolution 0.5 is
     * the same as image with zoom level 1 and resolution 1.
     *
     * Used to optimize animations and make
     * sure that browser renders image in highest quality.
     * Also used by responsive images to load the correct one.
     *
     * @param {Number} newResolution
     */

  }, {
    key: "_setResolution",
    value: function _setResolution(newResolution) {
      if (newResolution === this.currentResolution) {
        return;
      }

      this.currentResolution = newResolution;
      this.updateContentSize();
      this.pswp.dispatch('resolutionChanged');
    }
  }]);

  return Slide;
}();
/**
 * Handles single pointer dragging
 */


var PAN_END_FRICTION = 0.35;
var VERTICAL_DRAG_FRICTION = 0.6; // 1 corresponds to the third of viewport height

var MIN_RATIO_TO_CLOSE = 0.4; // Minimum speed required to navigate
// to next or previous slide

var MIN_NEXT_SLIDE_SPEED = 0.5;

function project(initialVelocity, decelerationRate) {
  return initialVelocity * decelerationRate / (1 - decelerationRate);
}

var DragHandler = /*#__PURE__*/function () {
  function DragHandler(gestures) {
    _classCallCheck(this, DragHandler);

    this.gestures = gestures;
    this.pswp = gestures.pswp;
    this.startPan = {};
  }

  _createClass(DragHandler, [{
    key: "start",
    value: function start() {
      equalizePoints(this.startPan, this.pswp.currSlide.pan);
      this.pswp.animations.stopAll();
    }
  }, {
    key: "change",
    value: function change() {
      var _this$gestures = this.gestures,
          p1 = _this$gestures.p1,
          prevP1 = _this$gestures.prevP1,
          dragAxis = _this$gestures.dragAxis,
          pswp = _this$gestures.pswp;
      var currSlide = pswp.currSlide;

      if (dragAxis === 'y' && pswp.options.closeOnVerticalDrag && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
        // Handle vertical drag to close
        var panY = currSlide.pan.y + (p1.y - prevP1.y);

        if (!pswp.dispatch('verticalDrag', {
          panY: panY
        }).defaultPrevented) {
          this._setPanWithFriction('y', panY, VERTICAL_DRAG_FRICTION);

          var bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
          pswp.applyBgOpacity(bgOpacity);
          currSlide.applyCurrentZoomPan();
        }
      } else {
        var mainScrollChanged = this._panOrMoveMainScroll('x');

        if (!mainScrollChanged) {
          this._panOrMoveMainScroll('y');

          roundPoint(currSlide.pan);
          currSlide.applyCurrentZoomPan();
        }
      }
    }
  }, {
    key: "end",
    value: function end() {
      var _this$gestures2 = this.gestures,
          pswp = _this$gestures2.pswp,
          velocity = _this$gestures2.velocity;
      var mainScroll = pswp.mainScroll;
      var indexDiff = 0;
      pswp.animations.stopAll(); // Handle main scroll if it's shifted

      if (mainScroll.isShifted()) {
        // Position of the main scroll relative to the viewport
        var mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX(); // Ratio between 0 and 1:
        // 0 - slide is not visible at all,
        // 0.5 - half of the slide is vicible
        // 1 - slide is fully visible

        var currentSlideVisibilityRatio = mainScrollShiftDiff / pswp.viewportSize.x; // Go next slide.
        //
        // - if velocity and its direction is matched
        //   and we see at least tiny part of the next slide
        //
        // - or if we see less than 50% of the current slide
        //   and velocity is close to 0
        //

        if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
          // Go to next slide
          indexDiff = 1;
          velocity.x = Math.min(velocity.x, 0);
        } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
          // Go to prev slide
          indexDiff = -1;
          velocity.x = Math.max(velocity.x, 0);
        }

        mainScroll.moveIndexBy(indexDiff, true, velocity.x);
      } // Restore zoom level


      if (pswp.currSlide.currZoomLevel > pswp.currSlide.zoomLevels.max || this.gestures.isMultitouch) {
        this.gestures.zoomLevels.correctZoomPan(true);
      } else {
        // we run two animations instead of one,
        // as each axis has own pan boundaries and thus different spring function
        // (correctZoomPan does not have this functionality,
        //  it animates all properties with single timing function)
        this._finishPanGestureForAxis('x');

        this._finishPanGestureForAxis('y');
      }
    }
  }, {
    key: "_finishPanGestureForAxis",
    value: function _finishPanGestureForAxis(axis) {
      var pswp = this.pswp;
      var currSlide = pswp.currSlide;
      var velocity = this.gestures.velocity;
      var pan = currSlide.pan,
          bounds = currSlide.bounds;
      var panPos = pan[axis];
      var restoreBgOpacity = pswp.bgOpacity < 1 && axis === 'y'; // 0.995 means - scroll view loses 0.5% of its velocity per millisecond
      // Inceasing this number will reduce travel distance

      var decelerationRate = 0.995; // 0.99
      // Pan position if there is no bounds

      var projectedPosition = panPos + project(velocity[axis], decelerationRate);

      if (restoreBgOpacity) {
        var vDragRatio = this._getVerticalDragRatio(panPos);

        var projectedVDragRatio = this._getVerticalDragRatio(projectedPosition); // If we are above and moving upwards,
        // or if we are below and moving downwards


        if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
          pswp.close();
          return;
        }
      } // Pan position with corrected bounds


      var correctedPanPosition = bounds.correctPan(axis, projectedPosition); // Exit if pan position should not be changed
      // or if speed it too low

      if (panPos === correctedPanPosition) {
        return;
      } // Overshoot if the final position is out of pan bounds


      var dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
      var initialBgOpacity = pswp.bgOpacity;
      var totalPanDist = correctedPanPosition - panPos;
      pswp.animations.startSpring({
        name: 'panGesture' + axis,
        isPan: true,
        start: panPos,
        end: correctedPanPosition,
        velocity: velocity[axis],
        dampingRatio: dampingRatio,
        onUpdate: function onUpdate(pos) {
          // Animate opacity of background relative to Y pan position of an image
          if (restoreBgOpacity && pswp.bgOpacity < 1) {
            // 0 - start of animation, 1 - end of animation
            var animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist; // We clamp opacity to keep it between 0 and 1.
            // As progress ratio can be larger than 1 due to overshoot,
            // and we do not want to bounce opacity.

            pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
          }

          pan[axis] = Math.floor(pos);
          currSlide.applyCurrentZoomPan();
        }
      });
    }
    /**
     * Update position of the main scroll,
     * or/and update pan position of the current slide.
     *
     * Should return true if it changes (or can change) main scroll.
     *
     * @param {String} axis
     */

  }, {
    key: "_panOrMoveMainScroll",
    value: function _panOrMoveMainScroll(axis) {
      var _this$gestures3 = this.gestures,
          p1 = _this$gestures3.p1,
          pswp = _this$gestures3.pswp,
          dragAxis = _this$gestures3.dragAxis,
          prevP1 = _this$gestures3.prevP1,
          isMultitouch = _this$gestures3.isMultitouch;
      var currSlide = pswp.currSlide,
          mainScroll = pswp.mainScroll;
      var delta = p1[axis] - prevP1[axis];
      var newMainScrollX = mainScroll.x + delta;

      if (!delta) {
        return;
      } // Always move main scroll if image can not be panned


      if (axis === 'x' && !currSlide.isPannable() && !isMultitouch) {
        mainScroll.moveTo(newMainScrollX, true);
        return true; // changed main scroll
      }

      var bounds = currSlide.bounds;
      var newPan = currSlide.pan[axis] + delta;

      if (pswp.options.allowPanToNext && dragAxis === 'x' && axis === 'x' && !isMultitouch) {
        var currSlideMainScrollX = mainScroll.getCurrSlideX(); // Position of the main scroll relative to the viewport

        var mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
        var isLeftToRight = delta > 0;
        var isRightToLeft = !isLeftToRight;

        if (newPan > bounds.min[axis] && isLeftToRight) {
          // Panning from left to right, beyond the left edge
          // Wether the image was at minimum pan position (or less)
          // when this drag gesture started.
          // Minimum pan position refers to the left edge of the image.
          var wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];

          if (wasAtMinPanPosition) {
            mainScroll.moveTo(newMainScrollX, true);
            return true;
          } else {
            this._setPanWithFriction(axis, newPan); //currSlide.pan[axis] = newPan;

          }
        } else if (newPan < bounds.max[axis] && isRightToLeft) {
          // Paning from right to left, beyond the right edge
          // Maximum pan position refers to the right edge of the image.
          var wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];

          if (wasAtMaxPanPosition) {
            mainScroll.moveTo(newMainScrollX, true);
            return true;
          } else {
            this._setPanWithFriction(axis, newPan); //currSlide.pan[axis] = newPan;

          }
        } else {
          // If main scroll is shifted
          if (mainScrollShiftDiff !== 0) {
            // If main scroll is shifted right
            if (mainScrollShiftDiff > 0
            /*&& isRightToLeft*/
            ) {
              mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
              return true;
            } else if (mainScrollShiftDiff < 0
            /*&& isLeftToRight*/
            ) {
              // Main scroll is shifted left (Position is less than 0 comparing to the viewport 0)
              mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
              return true;
            }
          } else {
            // We are within pan bounds, so just pan
            this._setPanWithFriction(axis, newPan);
          }
        }
      } else {
        if (axis === 'y') {
          // Do not pan vertically if main scroll is shifted o
          if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
            this._setPanWithFriction(axis, newPan);
          }
        } else {
          this._setPanWithFriction(axis, newPan);
        }
      }
    } //
    // If we move above - the ratio is negative
    // If we move below the ratio is positive

    /**
     * Relation between pan Y position and third of viewport height.
     *
     * When we are at initial position (center bounds) - the ratio is 0,
     * if position is shifted upwards - the ratio is negative,
     * if position is shifted downwards - the ratio is positive.
     *
     * @param {Number} panY The current pan Y position.
     */

  }, {
    key: "_getVerticalDragRatio",
    value: function _getVerticalDragRatio(panY) {
      return (panY - this.pswp.currSlide.bounds.center.y) / (this.pswp.viewportSize.y / 3);
    }
    /**
     * Set pan position of the current slide.
     * Apply friction if the position is beyond the pan bounds,
     * or if custom friction is defined.
     *
     * @param {String} axis
     * @param {Number} potentialPan
     * @param {Number|null} customFriction (0.1 - 1)
     */

  }, {
    key: "_setPanWithFriction",
    value: function _setPanWithFriction(axis, potentialPan, customFriction) {
      var _this$pswp$currSlide = this.pswp.currSlide,
          pan = _this$pswp$currSlide.pan,
          bounds = _this$pswp$currSlide.bounds;
      var correctedPan = bounds.correctPan(axis, potentialPan); // If we are out of pan bounds

      if (correctedPan !== potentialPan || customFriction) {
        var delta = Math.round(potentialPan - pan[axis]);
        pan[axis] += delta * (customFriction || PAN_END_FRICTION);
      } else {
        pan[axis] = potentialPan;
      }
    }
  }]);

  return DragHandler;
}();

var UPPER_ZOOM_FRICTION = 0.05;
var LOWER_ZOOM_FRICTION = 0.15;
/**
 * Get center point between two points
 *
 * @param {Point} p
 * @param {Point} p1
 * @param {Point} p2
 */

function getZoomPointsCenter(p, p1, p2) {
  p.x = (p1.x + p2.x) / 2;
  p.y = (p1.y + p2.y) / 2;
  return p;
}

var ZoomHandler = /*#__PURE__*/function () {
  function ZoomHandler(gestures) {
    _classCallCheck(this, ZoomHandler);

    this.gestures = gestures;
    this.pswp = this.gestures.pswp;
    this._startPan = {};
    this._startZoomPoint = {};
    this._zoomPoint = {};
  }

  _createClass(ZoomHandler, [{
    key: "start",
    value: function start() {
      this._startZoomLevel = this.pswp.currSlide.currZoomLevel;
      equalizePoints(this._startPan, this.pswp.currSlide.pan);
      this.pswp.animations.stopAllPan();
      this._wasOverFitZoomLevel = false;
    }
  }, {
    key: "change",
    value: function change() {
      var _this$gestures4 = this.gestures,
          p1 = _this$gestures4.p1,
          startP1 = _this$gestures4.startP1,
          p2 = _this$gestures4.p2,
          startP2 = _this$gestures4.startP2,
          pswp = _this$gestures4.pswp;
      var currSlide = pswp.currSlide;
      var minZoomLevel = currSlide.zoomLevels.min;
      var maxZoomLevel = currSlide.zoomLevels.max;

      if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
        return;
      }

      getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
      getZoomPointsCenter(this._zoomPoint, p1, p2);

      var currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p2) * this._startZoomLevel; // slightly over the zoom.fit


      if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) {
        this._wasOverFitZoomLevel = true;
      }

      if (currZoomLevel < minZoomLevel) {
        if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
          // fade out background if zooming out
          var bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);

          if (!pswp.dispatch('pinchClose', {
            bgOpacity: bgOpacity
          }).defaultPrevented) {
            pswp.applyBgOpacity(bgOpacity);
          }
        } else {
          // Apply the friction if zoom level is below the min
          currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
        }
      } else if (currZoomLevel > maxZoomLevel) {
        // Apply the friction if zoom level is above the max
        currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
      }

      currSlide.pan.x = this._calculatePanForZoomLevel('x', currZoomLevel);
      currSlide.pan.y = this._calculatePanForZoomLevel('y', currZoomLevel);
      currSlide.setZoomLevel(currZoomLevel);
      currSlide.applyCurrentZoomPan();
    }
  }, {
    key: "end",
    value: function end() {
      var pswp = this.pswp;
      var currSlide = pswp.currSlide;

      if (currSlide.currZoomLevel < currSlide.zoomLevels.initial && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) {
        pswp.close();
      } else {
        this.correctZoomPan();
      }
    }
  }, {
    key: "_calculatePanForZoomLevel",
    value: function _calculatePanForZoomLevel(axis, currZoomLevel) {
      var zoomFactor = currZoomLevel / this._startZoomLevel;
      return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
    }
    /**
     * Correct currZoomLevel and pan if they are
     * beyond minimum or maximum values.
     * With animation.
     *
     * @param {Boolean} ignoreGesture Wether gesture coordinates should be ignored
     *                                when calculating destination pan position.
     */

  }, {
    key: "correctZoomPan",
    value: function correctZoomPan(ignoreGesture) {
      var pswp = this.pswp;
      var currSlide = pswp.currSlide;

      if (!currSlide.isZoomable()) {
        return;
      }

      if (this._zoomPoint.x === undefined) {
        ignoreGesture = true;
      }

      var prevZoomLevel = currSlide.currZoomLevel;
      var destinationZoomLevel;
      var currZoomLevelNeedsChange = true;

      if (prevZoomLevel < currSlide.zoomLevels.initial) {
        destinationZoomLevel = currSlide.zoomLevels.initial; // zoom to min
      } else if (prevZoomLevel > currSlide.zoomLevels.max) {
        destinationZoomLevel = currSlide.zoomLevels.max; // zoom to max
      } else {
        currZoomLevelNeedsChange = false;
        destinationZoomLevel = prevZoomLevel;
      }

      var initialBgOpacity = pswp.bgOpacity;
      var restoreBgOpacity = pswp.bgOpacity < 1;
      var initialPan = equalizePoints({}, currSlide.pan);
      var destinationPan = equalizePoints({}, initialPan);

      if (ignoreGesture) {
        this._zoomPoint.x = 0;
        this._zoomPoint.y = 0;
        this._startZoomPoint.x = 0;
        this._startZoomPoint.y = 0;
        this._startZoomLevel = prevZoomLevel;
        equalizePoints(this._startPan, initialPan);
      }

      if (currZoomLevelNeedsChange) {
        destinationPan = {
          x: this._calculatePanForZoomLevel('x', destinationZoomLevel),
          y: this._calculatePanForZoomLevel('y', destinationZoomLevel)
        };
      } // set zoom level, so pan bounds are updated according to it


      currSlide.setZoomLevel(destinationZoomLevel);
      destinationPan = {
        x: currSlide.bounds.correctPan('x', destinationPan.x),
        y: currSlide.bounds.correctPan('y', destinationPan.y)
      }; // return zoom level and its bounds to initial

      currSlide.setZoomLevel(prevZoomLevel);
      var panNeedsChange = true;

      if (pointsEqual(destinationPan, initialPan)) {
        panNeedsChange = false;
      }

      if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
        // update resolution after gesture
        currSlide._setResolution(destinationZoomLevel);

        currSlide.applyCurrentZoomPan(); // nothing to animate

        return;
      }

      pswp.animations.stopAllPan();
      pswp.animations.startSpring({
        isPan: true,
        start: 0,
        end: 1000,
        velocity: 0,
        dampingRatio: 1,
        naturalFrequency: 40,
        onUpdate: function onUpdate(now) {
          now /= 1000; // 0 - start, 1 - end

          if (panNeedsChange || currZoomLevelNeedsChange) {
            if (panNeedsChange) {
              currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now;
              currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now;
            }

            if (currZoomLevelNeedsChange) {
              var newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now;
              currSlide.setZoomLevel(newZoomLevel);
            }

            currSlide.applyCurrentZoomPan();
          } // Restore background opacity


          if (restoreBgOpacity && pswp.bgOpacity < 1) {
            // We clamp opacity to keep it between 0 and 1.
            // As progress ratio can be larger than 1 due to overshoot,
            // and we do not want to bounce opacity.
            pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now, 0, 1));
          }
        },
        onComplete: function onComplete() {
          // update resolution after transition ends
          currSlide._setResolution(destinationZoomLevel);

          currSlide.applyCurrentZoomPan();
        }
      });
    }
  }]);

  return ZoomHandler;
}();
/**
 * Tap, double-tap handler.
 */

/**
 * Whether the tap was performed on the main slide
 * (rather than controls or caption).
 *
 * @param {Event} event
 */


function didTapOnMainContent(event) {
  return !!event.target.closest('.pswp__container');
}

var TapHandler = /*#__PURE__*/function () {
  function TapHandler(gestures) {
    _classCallCheck(this, TapHandler);

    this.gestures = gestures;
  }

  _createClass(TapHandler, [{
    key: "click",
    value: function click(point, originalEvent) {
      var targetClassList = originalEvent.target.classList;
      var isImageClick = targetClassList.contains('pswp__img');
      var isBackgroundClick = targetClassList.contains('pswp__item') || targetClassList.contains('pswp__zoom-wrap');

      if (isImageClick) {
        this._doClickOrTapAction('imageClick', point, originalEvent);
      } else if (isBackgroundClick) {
        this._doClickOrTapAction('bgClick', point, originalEvent);
      }
    }
  }, {
    key: "tap",
    value: function tap(point, originalEvent) {
      if (didTapOnMainContent(originalEvent)) {
        this._doClickOrTapAction('tap', point, originalEvent);
      }
    }
  }, {
    key: "doubleTap",
    value: function doubleTap(point, originalEvent) {
      if (didTapOnMainContent(originalEvent)) {
        this._doClickOrTapAction('doubleTap', point, originalEvent);
      }
    }
  }, {
    key: "_doClickOrTapAction",
    value: function _doClickOrTapAction(actionName, point, originalEvent) {
      var pswp = this.gestures.pswp;
      var currSlide = pswp.currSlide;
      var optionValue = pswp.options[actionName + 'Action'];

      if (pswp.dispatch(actionName + 'Action', {
        point: point,
        originalEvent: originalEvent
      }).defaultPrevented) {
        return;
      }

      if (typeof optionValue === 'function') {
        optionValue.call(pswp, point, originalEvent);
        return;
      }

      switch (optionValue) {
        case 'close':
        case 'next':
          pswp[optionValue]();
          break;

        case 'zoom':
          currSlide.toggleZoom(point);
          break;

        case 'zoom-or-close':
          // by default click zooms current image,
          // if it can not be zoomed - gallery will be closed
          if (currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
            currSlide.toggleZoom(point);
          } else if (pswp.options.clickToCloseNonZoomable) {
            pswp.close();
          }

          break;

        case 'toggle-controls':
          this.gestures.pswp.element.classList.toggle('pswp--ui-visible'); // if (_controlsVisible) {
          //   _ui.hideControls();
          // } else {
          //   _ui.showControls();
          // }

          break;
      }
    }
  }]);

  return TapHandler;
}();
/**
 * Gestures class bind touch, pointer or mouse events
 * and emits drag to drag-handler and zoom events zoom-handler.
 *
 * Drag and zoom events are emited in requestAnimationFrame,
 * and only when one of pointers was actually changed.
 */
// How far should user should drag
// until we can determine that the gesture is swipe and its direction


var AXIS_SWIPE_HYSTERISIS = 10; //const PAN_END_FRICTION = 0.35;

var DOUBLE_TAP_DELAY = 300; // ms

var MIN_TAP_DISTANCE = 25; // px

var Gestures = /*#__PURE__*/function () {
  function Gestures(pswp) {
    var _this4 = this;

    _classCallCheck(this, Gestures);

    this.pswp = pswp; // point objects are defined once and reused
    // PhotoSwipe keeps track only of two pointers, others are ignored

    this.p1 = {}; // the first pressed pointer

    this.p2 = {}; // the second pressed pointer

    this.prevP1 = {};
    this.prevP2 = {};
    this.startP1 = {};
    this.startP2 = {};
    this.velocity = {};
    this._lastStartP1 = {};
    this._intervalP1 = {};
    this._numActivePoints = 0;
    this._ongoingPointers = [];
    this._touchEventEnabled = 'ontouchstart' in window;
    this._pointerEventEnabled = !!window.PointerEvent;
    this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;

    if (!this.supportsTouch) {
      // disable pan to next slide for non-touch devices
      pswp.options.allowPanToNext = false;
    }

    this.drag = new DragHandler(this);
    this.zoomLevels = new ZoomHandler(this);
    this.tapHandler = new TapHandler(this);
    pswp.on('bindEvents', function () {
      pswp.events.add(pswp.scrollWrap, 'click', function (e) {
        return _this4._onClick(e);
      });

      if (_this4._pointerEventEnabled) {
        _this4._bindEvents('pointer', 'down', 'up', 'cancel');
      } else if (_this4._touchEventEnabled) {
        _this4._bindEvents('touch', 'start', 'end', 'cancel'); // In previous versions we also bound mouse event here,
        // in case device supports both touch and mouse events,
        // but newer versions of browsers now support PointerEvent.
        // on iOS10 if you bind touchmove/end after touchstart,
        // and you don't preventDefault touchstart (which PhotoSwipe does),
        // preventDefault will have no effect on touchmove and touchend.
        // Unless you bind it previously.


        pswp.scrollWrap.ontouchmove = function () {}; // eslint-disable-line


        pswp.scrollWrap.ontouchend = function () {}; // eslint-disable-line

      } else {
        _this4._bindEvents('mouse', 'down', 'up');
      }
    });
  }

  _createClass(Gestures, [{
    key: "_bindEvents",
    value: function _bindEvents(pref, down, up, cancel) {
      var pswp = this.pswp;
      var events = pswp.events;
      var cancelEvent = cancel ? pref + cancel : '';
      events.add(pswp.scrollWrap, pref + down, this.onPointerDown.bind(this));
      events.add(window, pref + 'move', this.onPointerMove.bind(this));
      events.add(window, pref + up, this.onPointerUp.bind(this));

      if (cancelEvent) {
        events.add(pswp.scrollWrap, cancelEvent, this.onPointerUp.bind(this));
      }
    }
  }, {
    key: "onPointerDown",
    value: function onPointerDown(e) {
      // We do not call preventDefault for touch events
      // to allow browser to show native dialog on longpress
      // (the one that allows to save image or open it in new tab).
      //
      // Desktop Safari allows to drag images when preventDefault isn't called on mousedown,
      // even though preventDefault IS called on mousemove. That's why we preventDefault mousedown.
      var isMousePointer;

      if (e.type === 'mousedown' || e.pointerType === 'mouse') {
        isMousePointer = true;
      } // Allow dragging only via left mouse button.
      // http://www.quirksmode.org/js/events_properties.html
      // https://developer.mozilla.org/en-US/docs/Web/API/event.button


      if (isMousePointer && e.button > 0) {
        return;
      }

      var pswp = this.pswp; // if PhotoSwipe is opening or closing

      if (!pswp.opener.isOpen) {
        e.preventDefault();
        return;
      }

      if (pswp.dispatch('pointerDown', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }

      if (isMousePointer) {
        pswp.mouseDetected(); // preventDefault mouse event to prevent
        // browser image drag feature

        this._preventPointerEventBehaviour(e);
      }

      pswp.animations.stopAll();

      this._updatePoints(e, 'down');

      this.pointerDown = true;

      if (this._numActivePoints === 1) {
        this.dragAxis = null; // we need to store initial point to determine the main axis,
        // drag is activated only after the axis is determined

        equalizePoints(this.startP1, this.p1);
      }

      if (this._numActivePoints > 1) {
        // Tap or double tap should not trigger if more than one pointer
        this._clearTapTimer();

        this.isMultitouch = true;
      } else {
        this.isMultitouch = false;
      }
    }
  }, {
    key: "onPointerMove",
    value: function onPointerMove(e) {
      e.preventDefault(); // always preventDefault move event

      if (!this._numActivePoints) {
        return;
      }

      this._updatePoints(e, 'move');

      if (this.pswp.dispatch('pointerMove', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }

      if (this._numActivePoints === 1 && !this.isDragging) {
        if (!this.dragAxis) {
          this._calculateDragDirection();
        } // Drag axis was detected, emit drag.start


        if (this.dragAxis && !this.isDragging) {
          if (this.isZooming) {
            this.isZooming = false;
            this.zoomLevels.end();
          }

          this.isDragging = true;

          this._clearTapTimer(); // Tap can not trigger after drag
          // Adjust starting point


          this._updateStartPoints();

          this._intervalTime = Date.now(); //this._startTime = this._intervalTime;

          this._velocityCalculated = false;
          equalizePoints(this._intervalP1, this.p1);
          this.velocity.x = 0;
          this.velocity.y = 0;
          this.drag.start();

          this._rafStopLoop();

          this._rafRenderLoop();
        }
      } else if (this._numActivePoints > 1 && !this.isZooming) {
        this._finishDrag();

        this.isZooming = true; // Adjust starting points

        this._updateStartPoints();

        this.zoomLevels.start();

        this._rafStopLoop();

        this._rafRenderLoop();
      }
    }
  }, {
    key: "_finishDrag",
    value: function _finishDrag() {
      if (this.isDragging) {
        this.isDragging = false; // Try to calculate velocity,
        // if it wasn't calculated yet in drag.change

        if (!this._velocityCalculated) {
          this._updateVelocity(true);
        }

        this.drag.end();
        this.dragAxis = null;
      }
    }
  }, {
    key: "onPointerUp",
    value: function onPointerUp(e) {
      if (!this._numActivePoints) {
        return;
      }

      this._updatePoints(e, 'up');

      if (this.pswp.dispatch('pointerUp', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }

      if (this._numActivePoints === 0) {
        this.pointerDown = false;

        this._rafStopLoop();

        if (this.isDragging) {
          this._finishDrag();
        } else if (!this.isZooming && !this.isMultitouch) {
          //this.zoomLevels.correctZoomPan();
          this._finishTap(e);
        }
      }

      if (this._numActivePoints < 2 && this.isZooming) {
        this.isZooming = false;
        this.zoomLevels.end();

        if (this._numActivePoints === 1) {
          // Since we have 1 point left, we need to reinitiate drag
          this.dragAxis = null;

          this._updateStartPoints();
        }
      }
    }
  }, {
    key: "_rafRenderLoop",
    value: function _rafRenderLoop() {
      if (this.isDragging || this.isZooming) {
        this._updateVelocity();

        if (this.isDragging) {
          // make sure that pointer moved since the last update
          if (!pointsEqual(this.p1, this.prevP1)) {
            this.drag.change();
          }
        } else
          /* if (this.isZooming) */
          {
            if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) {
              this.zoomLevels.change();
            }
          }

        this._updatePrevPoints();

        this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
      }
    }
    /**
     * Update velocity at 50ms interval
     */

  }, {
    key: "_updateVelocity",
    value: function _updateVelocity(force) {
      var time = Date.now();
      var duration = time - this._intervalTime;

      if (duration < 50 && !force) {
        return;
      }

      this.velocity.x = this._getVelocity('x', duration);
      this.velocity.y = this._getVelocity('y', duration);
      this._intervalTime = time;
      equalizePoints(this._intervalP1, this.p1);
      this._velocityCalculated = true;
    }
  }, {
    key: "_finishTap",
    value: function _finishTap(e) {
      var _this5 = this;

      var mainScroll = this.pswp.mainScroll; // Do not trigger tap events if main scroll is shifted

      if (mainScroll.isShifted()) {
        // restore main scroll position
        // (usually happens if stopped in the middle of animation)
        mainScroll.moveIndexBy(0, true);
        return;
      } // Do not trigger tap for touchcancel or pointercancel


      if (e.type.indexOf('cancel') > 0) {
        return;
      } // Trigger click instead of tap for mouse events


      if (e.type === 'mouseup' || e.pointerType === 'mouse') {
        this.tapHandler.click(this.startP1, e);
        return;
      } // Disable delay if there is no doubleTapAction


      var tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0; // If tapTimer is defined - we tapped recently,
      // check if the current tap is close to the previous one,
      // if yes - trigger double tap

      if (this._tapTimer) {
        this._clearTapTimer(); // Check if two taps were more or less on the same place


        if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
          this.tapHandler.doubleTap(this.startP1, e);
        }
      } else {
        equalizePoints(this._lastStartP1, this.startP1);
        this._tapTimer = setTimeout(function () {
          _this5.tapHandler.tap(_this5.startP1, e);

          _this5._clearTapTimer();
        }, tapDelay);
      }
    }
  }, {
    key: "_clearTapTimer",
    value: function _clearTapTimer() {
      if (this._tapTimer) {
        clearTimeout(this._tapTimer);
        this._tapTimer = null;
      }
    }
    /**
     * Get velocity for axis
     *
     * @param {Number} axis
     * @param {Number} duration
     */

  }, {
    key: "_getVelocity",
    value: function _getVelocity(axis, duration) {
      // displacement is like distance, but can be negative.
      var displacement = this.p1[axis] - this._intervalP1[axis];

      if (Math.abs(displacement) > 1 && duration > 5) {
        return displacement / duration;
      }

      return 0;
    }
  }, {
    key: "_rafStopLoop",
    value: function _rafStopLoop() {
      if (this.raf) {
        cancelAnimationFrame(this.raf);
        this.raf = null;
      }
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "_preventPointerEventBehaviour",
    value: function _preventPointerEventBehaviour(e) {
      // TODO find a way to disable e.preventDefault on some elements
      //      via event or some class or something
      e.preventDefault();
      return true;
    }
    /**
     * Parses and normalizes points from the touch, mouse or pointer event.
     * Updates p1 and p2.
     *
     * @param {Event} e
     * @param {String} pointerType Normalized pointer type ('up', 'down' or 'move')
     */

  }, {
    key: "_updatePoints",
    value: function _updatePoints(e, pointerType) {
      if (this._pointerEventEnabled) {
        // Try to find the current pointer in ongoing pointers by its ID
        var pointerIndex = this._ongoingPointers.findIndex(function (ongoingPoiner) {
          return ongoingPoiner.id === e.pointerId;
        });

        if (pointerType === 'up' && pointerIndex > -1) {
          // release the pointer - remove it from ongoing
          this._ongoingPointers.splice(pointerIndex, 1);
        } else if (pointerType === 'down' && pointerIndex === -1) {
          // add new pointer
          this._ongoingPointers.push(this._convertEventPosToPoint(e, {}));
        } else if (pointerIndex > -1) {
          // update existing pointer
          this._convertEventPosToPoint(e, this._ongoingPointers[pointerIndex]);
        }

        this._numActivePoints = this._ongoingPointers.length; // update points that PhotoSwipe uses
        // to calculate position and scale

        if (this._numActivePoints > 0) {
          equalizePoints(this.p1, this._ongoingPointers[0]);
        }

        if (this._numActivePoints > 1) {
          equalizePoints(this.p2, this._ongoingPointers[1]);
        }
      } else {
        this._numActivePoints = 0;

        if (e.type.indexOf('touch') > -1) {
          // Touch Event
          // https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
          if (e.touches && e.touches.length > 0) {
            this._convertEventPosToPoint(e.touches[0], this.p1);

            this._numActivePoints++;

            if (e.touches.length > 1) {
              this._convertEventPosToPoint(e.touches[1], this.p2);

              this._numActivePoints++;
            }
          }
        } else {
          // Mouse Event
          this._convertEventPosToPoint(e, this.p1);

          if (pointerType === 'up') {
            // clear all points on mouseup
            this._numActivePoints = 0;
          } else {
            this._numActivePoints++;
          }
        }
      }
    } // update points that were used during previous rAF tick

  }, {
    key: "_updatePrevPoints",
    value: function _updatePrevPoints() {
      equalizePoints(this.prevP1, this.p1);
      equalizePoints(this.prevP2, this.p2);
    } // update points at the start of gesture

  }, {
    key: "_updateStartPoints",
    value: function _updateStartPoints() {
      equalizePoints(this.startP1, this.p1);
      equalizePoints(this.startP2, this.p2);

      this._updatePrevPoints();
    }
  }, {
    key: "_calculateDragDirection",
    value: function _calculateDragDirection() {
      if (this.pswp.mainScroll.isShifted()) {
        // if main scroll position is shifted – direction is always horizontal
        this.dragAxis = 'x';
      } else {
        // calculate delta of the last touchmove tick
        var diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);

        if (diff !== 0) {
          // check if pointer was shifted horizontally or vertically
          var axisToCheck = diff > 0 ? 'x' : 'y';

          if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
            this.dragAxis = axisToCheck;
          }
        }
      }
    }
    /**
     * Converts touch, pointer or mouse event
     * to PhotoSwipe point.
     *
     * @param {Event} e
     * @param {Point} p
     */

  }, {
    key: "_convertEventPosToPoint",
    value: function _convertEventPosToPoint(e, p) {
      p.x = e.pageX - this.pswp.offset.x;
      p.y = e.pageY - this.pswp.offset.y; // e.pointerId can be zero

      if (e.pointerId !== undefined) {
        p.id = e.pointerId;
      } else if (e.identifier !== undefined) {
        p.id = e.identifier;
      }

      return p;
    }
  }, {
    key: "_onClick",
    value: function _onClick(e) {
      // Do not allow click event to pass through after drag
      if (this.pswp.mainScroll.isShifted()) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }]);

  return Gestures;
}();
/**
 * Handles movement of the main scrolling container
 * (for example, it repositions when user swipes left or right).
 *
 * Also stores its state.
 */


var MAIN_SCROLL_END_FRICTION = 0.35; // const MIN_SWIPE_TRANSITION_DURATION = 250;
// const MAX_SWIPE_TRABSITION_DURATION = 500;
// const DEFAULT_SWIPE_TRANSITION_DURATION = 333;

var MainScroll = /*#__PURE__*/function () {
  /**
   * @param {PhotoSwipe} pswp
   */
  function MainScroll(pswp) {
    _classCallCheck(this, MainScroll);

    this.pswp = pswp;
    this.x = 0;
    this.resetPosition();
  }
  /**
   * Position the scroller and slide containers
   * according to viewport size.
   *
   * @param {Boolean} resizeSlides Whether slides content should resized
   */


  _createClass(MainScroll, [{
    key: "resize",
    value: function resize(resizeSlides) {
      var _this6 = this;

      var pswp = this.pswp;
      var newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing); // Mobile browsers might trigger a resize event during a gesture.
      // (due to toolbar appearing or hiding).
      // Avoid re-adjusting main scroll position if width wasn't changed

      var slideWidthChanged = newSlideWidth !== this.slideWidth;

      if (slideWidthChanged) {
        this.slideWidth = newSlideWidth;
        this.moveTo(this.getCurrSlideX());
      }

      this.itemHolders.forEach(function (itemHolder, index) {
        if (slideWidthChanged) {
          setTransform(itemHolder.el, (index + _this6._containerShiftIndex) * _this6.slideWidth);
        }

        if (resizeSlides && itemHolder.slide) {
          itemHolder.slide.resize();
        }
      });
    }
    /**
     * Reset X position of the main scroller to zero
     */

  }, {
    key: "resetPosition",
    value: function resetPosition() {
      // Position on the main scroller (offset)
      // it is independent from slide index
      this._currPositionIndex = 0;
      this._prevPositionIndex = 0; // This will force recalculation of size on next resize()

      this.slideWidth = 0; // _containerShiftIndex*viewportSize will give you amount of transform of the current slide

      this._containerShiftIndex = -1;
    }
    /**
     * Create and append array of three items
     * that hold data about slides in DOM
     */

  }, {
    key: "appendHolders",
    value: function appendHolders() {
      this.itemHolders = []; // append our three slide holders -
      // previous, current, and next

      for (var i = 0; i < 3; i++) {
        var el = createElement('pswp__item', false, this.pswp.container); // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)

        el.style.display = i === 1 ? 'block' : 'none';
        this.itemHolders.push({
          el: el //index: -1

        });
      }
    }
    /**
     * Whether the main scroll can be horizontally swiped to the next or previous slide.
     */

  }, {
    key: "canBeSwiped",
    value: function canBeSwiped() {
      return this.pswp.getNumItems() > 1;
    }
    /**
     * Move main scroll by X amount of slides.
     * For example:
     *   `-1` will move to the previous slide,
     *    `0` will reset the scroll position of the current slide,
     *    `3` will move three slides forward
     *
     * If loop option is enabled - index will be automatically looped too,
     * (for example `-1` will move to the last slide of the gallery).
     *
     * @param {Integer} diff
     * @returns {Boolean} whether index was changed or not
     */

  }, {
    key: "moveIndexBy",
    value: function moveIndexBy(diff, animate, velocityX) {
      var _this7 = this;

      var pswp = this.pswp;
      var newIndex = pswp.potentialIndex + diff;
      var numSlides = pswp.getNumItems();

      if (pswp.canLoop()) {
        newIndex = pswp.getLoopedIndex(newIndex);
        var distance = (diff + numSlides) % numSlides;

        if (distance <= numSlides / 2) {
          // go forward
          diff = distance;
        } else {
          // go backwards
          diff = distance - numSlides;
        }
      } else {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= numSlides) {
          newIndex = numSlides - 1;
        }

        diff = newIndex - pswp.potentialIndex;
      }

      pswp.potentialIndex = newIndex;
      this._currPositionIndex -= diff;
      pswp.animations.stopMainScroll();
      var destinationX = this.getCurrSlideX();

      if (!animate) {
        this.moveTo(destinationX);
        this.updateCurrItem();
      } else {
        pswp.animations.startSpring({
          isMainScroll: true,
          start: this.x,
          end: destinationX,
          velocity: velocityX || 0,
          naturalFrequency: 30,
          dampingRatio: 1,
          //0.7,
          onUpdate: function onUpdate(x) {
            _this7.moveTo(x);
          },
          onComplete: function onComplete() {
            _this7.updateCurrItem();

            pswp.appendHeavy();
          }
        });
        var currDiff = pswp.potentialIndex - pswp.currIndex;

        if (pswp.canLoop()) {
          var currDistance = (currDiff + numSlides) % numSlides;

          if (currDistance <= numSlides / 2) {
            // go forward
            currDiff = currDistance;
          } else {
            // go backwards
            currDiff = currDistance - numSlides;
          }
        } // Force-append new slides during transition
        // if difference between slides is more than 1


        if (Math.abs(currDiff) > 1) {
          this.updateCurrItem();
        }
      }

      if (diff) {
        return true;
      }
    }
    /**
     * X position of the main scroll for the current slide
     * (ignores position during dragging)
     */

  }, {
    key: "getCurrSlideX",
    value: function getCurrSlideX() {
      return this.slideWidth * this._currPositionIndex;
    }
    /**
     * Whether scroll position is shifted.
     * For example, it will return true if the scroll is being dragged or animated.
     */

  }, {
    key: "isShifted",
    value: function isShifted() {
      return this.x !== this.getCurrSlideX();
    }
    /**
     * Update slides X positions and set their content
     */

  }, {
    key: "updateCurrItem",
    value: function updateCurrItem() {
      var pswp = this.pswp;
      var positionDifference = this._prevPositionIndex - this._currPositionIndex;

      if (!positionDifference) {
        return;
      }

      this._prevPositionIndex = this._currPositionIndex;
      pswp.currIndex = pswp.potentialIndex;
      var diffAbs = Math.abs(positionDifference);
      var tempHolder;

      if (diffAbs >= 3) {
        this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
        diffAbs = 3;
      }

      for (var i = 0; i < diffAbs; i++) {
        if (positionDifference > 0) {
          tempHolder = this.itemHolders.shift();
          this.itemHolders[2] = tempHolder; // move first to last

          this._containerShiftIndex++;
          setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
          pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i + 2);
        } else {
          tempHolder = this.itemHolders.pop();
          this.itemHolders.unshift(tempHolder); // move last to first

          this._containerShiftIndex--;
          setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
          pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i - 2);
        }
      } // Reset transfrom every 50ish navigations in one direction.
      //
      // Otherwise transform will keep growing indefinitely,
      // which might cause issues as browsers have a maximum transform limit.
      // I wasn't able to reach it, but just to be safe.
      // This should not cause noticable lag.


      if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
        this.resetPosition();
        this.resize();
      } // Pan transition might be running (and consntantly updating pan position)


      pswp.animations.stopAllPan();
      this.itemHolders.forEach(function (itemHolder, i) {
        if (itemHolder.slide) {
          // Slide in the 2nd holder is always active
          itemHolder.slide.setIsActive(i === 1);
        }
      });
      pswp.currSlide = this.itemHolders[1].slide;
      pswp.contentLoader.updateLazy(positionDifference);
      pswp.currSlide.applyCurrentZoomPan();
      pswp.dispatch('change');
    }
    /**
     * Move the X position of the main scroll container
     *
     * @param {Number} x
     * @param {Boolean} dragging
     */

  }, {
    key: "moveTo",
    value: function moveTo(x, dragging) {
      var newSlideIndexOffset;
      var delta;

      if (!this.pswp.canLoop() && dragging) {
        // Apply friction
        newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x) / this.slideWidth;
        newSlideIndexOffset += this.pswp.currIndex;
        delta = Math.round(x - this.x);

        if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) {
          x = this.x + delta * MAIN_SCROLL_END_FRICTION;
        }
      }

      this.x = x;
      setTransform(this.pswp.container, x);
      this.pswp.dispatch('moveMainScroll', {
        x: x,
        dragging: dragging
      });
    }
  }]);

  return MainScroll;
}();
/**
 *
 * keyboard.js
 *
 * - Manages keyboard shortcuts.
 * - Heps trap focus within photoswipe.
 *
 */


var Keyboard = /*#__PURE__*/function () {
  function Keyboard(pswp) {
    var _this8 = this;

    _classCallCheck(this, Keyboard);

    this.pswp = pswp;
    pswp.on('bindEvents', function () {
      // Dialog was likely opened by keyboard if initial point is not defined
      if (!pswp.options.initialPointerPos) {
        // focus causes layout,
        // which causes lag during the animation,
        // that's why we delay it until the opener transition ends
        _this8._focusRoot();
      }

      pswp.events.add(document, 'focusin', _this8._onFocusIn.bind(_this8));
      pswp.events.add(document, 'keydown', _this8._onKeyDown.bind(_this8));
    });
    var lastActiveElement = document.activeElement;
    pswp.on('destroy', function () {
      if (pswp.options.returnFocus && lastActiveElement && _this8._wasFocused) {
        lastActiveElement.focus();
      }
    });
  }

  _createClass(Keyboard, [{
    key: "_focusRoot",
    value: function _focusRoot() {
      if (!this._wasFocused) {
        this.pswp.element.focus();
        this._wasFocused = true;
      }
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(e) {
      var pswp = this.pswp;

      if (pswp.dispatch('keydown', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }

      if (specialKeyUsed(e)) {
        // don't do anything if special key pressed
        // to prevent from overriding default browser actions
        // for example, in Chrome on Mac cmd+arrow-left returns to previous page
        return;
      }

      var keydownAction;
      var axis;
      var isForward;

      switch (e.keyCode) {
        case 27:
          // esc
          if (pswp.options.escKey) {
            keydownAction = 'close';
          }

          break;

        case 90:
          // z key
          keydownAction = 'toggleZoom';
          break;

        case 37:
          // left
          axis = 'x';
          break;

        case 38:
          // top
          axis = 'y';
          break;

        case 39:
          // right
          axis = 'x';
          isForward = true;
          break;

        case 40:
          // bottom
          isForward = true;
          axis = 'y';
          break;

        case 9:
          // tab
          this._focusRoot();

          break;
      } // if left/right/top/bottom key


      if (axis) {
        // prevent page scroll
        e.preventDefault();
        var currSlide = pswp.currSlide;

        if (pswp.options.arrowKeys && axis === 'x' && pswp.getNumItems() > 1) {
          keydownAction = isForward ? 'next' : 'prev';
        } else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
          // up/down arrow keys pan the image vertically
          // left/right arrow keys pan horizontally.
          // Unless there is only one image,
          // or arrowKeys option is disabled
          currSlide.pan[axis] += isForward ? -80 : 80;
          currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
        }
      }

      if (keydownAction) {
        e.preventDefault();
        pswp[keydownAction]();
      }
    }
    /**
     * Trap focus inside photoswipe
     *
     * @param {Event} e
     */

  }, {
    key: "_onFocusIn",
    value: function _onFocusIn(e) {
      var template = this.pswp.template;

      if (document !== e.target && template !== e.target && !template.contains(e.target)) {
        // focus root element
        template.focus();
      }
    }
  }]);

  return Keyboard;
}();
/**
 * Runs CSS transition.
 */


var DEFAULT_EASING = 'cubic-bezier(.4,0,.22,1)';

var CSSAnimation = /*#__PURE__*/function () {
  // onComplete can be unpredictable, be careful about current state
  function CSSAnimation(props) {
    var _this9 = this;

    _classCallCheck(this, CSSAnimation);

    this.props = props;
    var target = props.target,
        onComplete = props.onComplete,
        transform = props.transform;
    var duration = props.duration,
        easing = props.easing; // support only transform and opacity

    var prop = transform ? 'transform' : 'opacity';
    var propValue = props[prop];
    this._target = target;
    this._onComplete = onComplete;
    duration = duration || 333;
    easing = easing || DEFAULT_EASING;
    this._onTransitionEnd = this._onTransitionEnd.bind(this); // Using timeout hack to make sure that animation
    // starts even if the animated property was changed recently,
    // otherwise transitionend might not fire or transiton won't start.
    // https://drafts.csswg.org/css-transitions/#starting
    //
    // ¯\_(ツ)_/¯

    this._firstFrameTimeout = setTimeout(function () {
      setTransitionStyle(target, prop, duration, easing);
      _this9._firstFrameTimeout = setTimeout(function () {
        target.addEventListener('transitionend', _this9._onTransitionEnd, false);
        target.addEventListener('transitioncancel', _this9._onTransitionEnd, false);
        target.style[prop] = propValue;
      }, 30); // Do not reduce this number
    }, 0);
  }

  _createClass(CSSAnimation, [{
    key: "_onTransitionEnd",
    value: function _onTransitionEnd(e) {
      if (e.target === this._target) {
        this._finalizeAnimation();
      }
    }
  }, {
    key: "_finalizeAnimation",
    value: function _finalizeAnimation() {
      if (!this._finished) {
        this._finished = true;
        this.onFinish();

        if (this._onComplete) {
          this._onComplete();
        }
      }
    } // Destroy is called automatically onFinish

  }, {
    key: "destroy",
    value: function destroy() {
      if (this._firstFrameTimeout) {
        clearTimeout(this._firstFrameTimeout);
      }

      removeTransitionStyle(this._target);

      this._target.removeEventListener('transitionend', this._onTransitionEnd, false);

      this._target.removeEventListener('transitioncancel', this._onTransitionEnd, false);

      if (!this._finished) {
        this._finalizeAnimation();
      }
    }
  }]);

  return CSSAnimation;
}();
/**
 * Spring easing helper
 */


var DEFAULT_NATURAL_FREQUENCY = 12;
var DEFAULT_DAMPING_RATIO = 0.75;

var SpringEaser = /*#__PURE__*/function () {
  /**
   * @param {Number} initialVelocity Initial velocity, px per ms.
   *
   * @param {Number} dampingRatio Determines how bouncy animation will be.
   *                              From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
   *                              "overshoot" refers to part of animation that
   *                              goes beyond the final value.
   *
   * @param {Number} naturalFrequency Determines how fast animation will slow down.
   *                                  The higher value - the stiffer the transition will be,
   *                                  and the faster it will slow down.
   *                                  Recommended value from 10 to 50
   */
  function SpringEaser(initialVelocity, dampingRatio, naturalFrequency) {
    _classCallCheck(this, SpringEaser);

    this.velocity = initialVelocity * 1000; // convert to "pixels per second"
    // https://en.wikipedia.org/wiki/Damping_ratio

    this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO; // https://en.wikipedia.org/wiki/Natural_frequency

    this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;

    if (this._dampingRatio < 1) {
      this._dampedFrequency = this._naturalFrequency * Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
    }
  }
  /**
   * @param {Number} deltaPosition Difference between current and end position of the animation
   * @param {Number} deltaTime Frame duration in milliseconds
   *
   * @returns {Number} Displacement, relative to the end position.
   */


  _createClass(SpringEaser, [{
    key: "easeFrame",
    value: function easeFrame(deltaPosition, deltaTime) {
      // Inspired by Apple Webkit and Android spring function implementation
      // https://en.wikipedia.org/wiki/Oscillation
      // https://en.wikipedia.org/wiki/Damping_ratio
      // we ignore mass (assume that it's 1kg)
      var displacement = 0;
      var coeff;
      deltaTime /= 1000;
      var naturalDumpingPow = Math.pow(Math.E, -this._dampingRatio * this._naturalFrequency * deltaTime);

      if (this._dampingRatio === 1) {
        coeff = this.velocity + this._naturalFrequency * deltaPosition;
        displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
        this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
      } else if (this._dampingRatio < 1) {
        coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
        var dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
        var dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
        displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
        this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
      } // Overdamped (>1) damping ratio is not supported


      return displacement;
    }
  }]);

  return SpringEaser;
}();

var SpringAnimation = /*#__PURE__*/function () {
  function SpringAnimation(props) {
    var _this10 = this;

    _classCallCheck(this, SpringAnimation);

    this.props = props;
    var start = props.start,
        end = props.end,
        velocity = props.velocity,
        onUpdate = props.onUpdate,
        onComplete = props.onComplete,
        onFinish = props.onFinish,
        dampingRatio = props.dampingRatio,
        naturalFrequency = props.naturalFrequency;
    var easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
    var prevTime = Date.now();
    var deltaPosition = start - end;
    this._onFinish = onFinish;

    var animationLoop = function animationLoop() {
      if (_this10._raf) {
        deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime); // Stop the animation if velocity is low and position is close to end

        if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
          // Finalize the animation
          onUpdate(end);

          if (onComplete) {
            onComplete();
          }

          _this10.onFinish();
        } else {
          prevTime = Date.now();
          onUpdate(deltaPosition + end);
          _this10._raf = requestAnimationFrame(animationLoop);
        }
      }
    };

    this._raf = requestAnimationFrame(animationLoop);
  } // Destroy is called automatically onFinish


  _createClass(SpringAnimation, [{
    key: "destroy",
    value: function destroy() {
      if (this._raf >= 0) {
        cancelAnimationFrame(this._raf);
      }

      this._raf = null;
    }
  }]);

  return SpringAnimation;
}();
/**
 * Manages animations
 */


var Animations = /*#__PURE__*/function () {
  function Animations() {
    _classCallCheck(this, Animations);

    this.activeAnimations = [];
  }

  _createClass(Animations, [{
    key: "startSpring",
    value: function startSpring(props) {
      this._start(props, true);
    }
  }, {
    key: "startTransition",
    value: function startTransition(props) {
      this._start(props);
    }
  }, {
    key: "_start",
    value: function _start(props, isSpring) {
      var _this11 = this;

      var animation;

      if (isSpring) {
        animation = new SpringAnimation(props);
      } else {
        animation = new CSSAnimation(props);
      }

      this.activeAnimations.push(animation);

      animation.onFinish = function () {
        return _this11.stop(animation);
      };

      return animation;
    }
  }, {
    key: "stop",
    value: function stop(animation) {
      animation.destroy();
      var index = this.activeAnimations.indexOf(animation);

      if (index > -1) {
        this.activeAnimations.splice(index, 1);
      }
    }
  }, {
    key: "stopAll",
    value: function stopAll() {
      // _stopAllAnimations
      this.activeAnimations.forEach(function (animation) {
        animation.destroy();
      });
      this.activeAnimations = [];
    }
    /**
     * Stop all pan or zoom transitions
     */

  }, {
    key: "stopAllPan",
    value: function stopAllPan() {
      this.activeAnimations = this.activeAnimations.filter(function (animation) {
        if (animation.props.isPan) {
          animation.destroy();
          return false;
        }

        return true;
      });
    }
  }, {
    key: "stopMainScroll",
    value: function stopMainScroll() {
      this.activeAnimations = this.activeAnimations.filter(function (animation) {
        if (animation.props.isMainScroll) {
          animation.destroy();
          return false;
        }

        return true;
      });
    }
    /**
     * Returns true if main scroll transition is running
     */
    // isMainScrollRunning() {
    //   return this.activeAnimations.some((animation) => {
    //     return animation.props.isMainScroll;
    //   });
    // }

    /**
     * Returns true if any pan or zoom transition is running
     */

  }, {
    key: "isPanRunning",
    value: function isPanRunning() {
      return this.activeAnimations.some(function (animation) {
        return animation.props.isPan;
      });
    }
  }]);

  return Animations;
}();
/**
 * Handles scroll wheel.
 * Can pan and zoom current slide image.
 */


var ScrollWheel = /*#__PURE__*/function () {
  function ScrollWheel(pswp) {
    _classCallCheck(this, ScrollWheel);

    this.pswp = pswp;
    pswp.events.add(pswp.element, 'wheel', this._onWheel.bind(this));
  }

  _createClass(ScrollWheel, [{
    key: "_onWheel",
    value: function _onWheel(e) {
      e.preventDefault();
      var currSlide = this.pswp.currSlide;
      var deltaX = e.deltaX,
          deltaY = e.deltaY;

      if (!currSlide) {
        return;
      }

      if (this.pswp.dispatch('wheel', {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }

      if (e.ctrlKey || this.pswp.options.wheelToZoom) {
        // zoom
        if (currSlide.isZoomable()) {
          var zoomFactor = -deltaY;

          if (e.deltaMode === 1
          /* DOM_DELTA_LINE */
          ) {
            zoomFactor *= 0.05;
          } else {
            zoomFactor *= e.deltaMode ? 1 : 0.002;
          }

          zoomFactor = Math.pow(2, zoomFactor);
          var destZoomLevel = currSlide.currZoomLevel * zoomFactor;
          currSlide.zoomTo(destZoomLevel, {
            x: e.clientX,
            y: e.clientY
          });
        }
      } else {
        // pan
        if (currSlide.isPannable()) {
          if (e.deltaMode === 1
          /* DOM_DELTA_LINE */
          ) {
            // 18 - average line height
            deltaX *= 18;
            deltaY *= 18;
          }

          currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
        }
      }
    }
  }]);

  return ScrollWheel;
}();

function addElementHTML(htmlData) {
  if (typeof htmlData === 'string') {
    // Allow developers to provide full svg,
    // For example:
    // <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" class="pswp__icn">
    //   <path d="..." />
    //   <circle ... />
    // </svg>
    // Can also be any HTML string.
    return htmlData;
  }

  if (!htmlData || !htmlData.isCustomSVG) {
    return '';
  }

  var svgData = htmlData;
  var out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
  out = out.split('%d').join(svgData.size || 32); // replace all %d with size
  // Icons may contain outline/shadow,
  // to make it we "clone" base icon shape and add border to it.
  // Icon itself and border are styled via CSS.
  //
  // Property shadowID defines ID of element that should be cloned.

  if (svgData.outlineID) {
    out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
  }

  out += svgData.inner;
  out += '</svg>';
  return out;
}

var UIElement = /*#__PURE__*/_createClass(function UIElement(pswp, data) {
  _classCallCheck(this, UIElement);

  var name = data.name || data.className;
  var elementHTML = data.html;

  if (pswp.options[name] === false) {
    // exit if element is disabled from options
    return;
  } // Allow to override SVG icons from options


  if (typeof pswp.options[name + 'SVG'] === 'string') {
    // arrowPrevSVG
    // arrowNextSVG
    // closeSVG
    // zoomSVG
    elementHTML = pswp.options[name + 'SVG'];
  }

  pswp.dispatch('uiElementCreate', {
    data: data
  });
  var className = '';

  if (data.isButton) {
    className += 'pswp__button ';
    className += data.className || "pswp__button--".concat(data.name);
  } else {
    className += data.className || "pswp__".concat(data.name);
  }

  var element;
  var tagName = data.isButton ? data.tagName || 'button' : data.tagName || 'div';
  tagName = tagName.toLowerCase();
  element = createElement(className, tagName);

  if (data.isButton) {
    // create button element
    element = createElement(className, tagName);

    if (tagName === 'button') {
      element.type = 'button';
    }

    if (typeof pswp.options[name + 'Title'] === 'string') {
      element.title = pswp.options[name + 'Title'];
    } else if (data.title) {
      element.title = data.title;
    }
  }

  element.innerHTML = addElementHTML(elementHTML);

  if (data.onInit) {
    data.onInit(element, pswp);
  }

  if (data.onClick) {
    element.onclick = function (e) {
      if (typeof data.onClick === 'string') {
        pswp[data.onClick]();
      } else {
        data.onClick(e, element, pswp);
      }
    };
  } // Top bar is default position


  var appendTo = data.appendTo || 'bar';
  var container;

  if (appendTo === 'bar') {
    if (!pswp.topBar) {
      pswp.topBar = createElement('pswp__top-bar pswp__hide-on-close', false, pswp.scrollWrap);
    }

    container = pswp.topBar;
  } else {
    // element outside of top bar gets a secondary class
    // that makes element fade out on close
    element.classList.add('pswp__hide-on-close');

    if (appendTo === 'wrapper') {
      container = pswp.scrollWrap;
    } else {
      // root element
      container = pswp.element;
    }
  }

  container.appendChild(element);
});
/*
  Backward and forward arrow buttons
 */


function initArrowButton(element, pswp, isNextButton) {
  element.classList.add('pswp__button--arrow');
  pswp.on('change', function () {
    if (!pswp.options.loop) {
      if (isNextButton) {
        element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
      } else {
        element.disabled = !(pswp.currIndex > 0);
      }
    }
  });
}

var arrowPrev = {
  name: 'arrowPrev',
  className: 'pswp__button--arrow--prev',
  title: 'Previous',
  order: 10,
  isButton: true,
  appendTo: 'wrapper',
  html: {
    isCustomSVG: true,
    size: 60,
    inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
    outlineID: 'pswp__icn-arrow'
  },
  onClick: 'prev',
  onInit: initArrowButton
};
var arrowNext = {
  name: 'arrowNext',
  className: 'pswp__button--arrow--next',
  title: 'Next',
  order: 11,
  isButton: true,
  appendTo: 'wrapper',
  html: {
    isCustomSVG: true,
    size: 60,
    inner: '<use xlink:href="#pswp__icn-arrow"/>',
    outlineID: 'pswp__icn-arrow'
  },
  onClick: 'next',
  onInit: function onInit(el, pswp) {
    initArrowButton(el, pswp, true);
  }
};
var closeButton = {
  name: 'close',
  title: 'Close',
  order: 20,
  isButton: true,
  html: {
    isCustomSVG: true,
    inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
    outlineID: 'pswp__icn-close'
  },
  onClick: 'close'
};
var zoomButton = {
  name: 'zoom',
  title: 'Zoom (z)',
  order: 10,
  isButton: true,
  html: {
    isCustomSVG: true,
    inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/>' + '<path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/>' + '<path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
    outlineID: 'pswp__icn-zoom'
  },
  onClick: 'toggleZoom'
};
var loadingIndicator = {
  name: 'preloader',
  appendTo: 'bar',
  order: 7,
  html: {
    isCustomSVG: true,
    inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
    outlineID: 'pswp__icn-loading'
  },
  onInit: function onInit(indicatorElement, pswp) {
    var isVisible;
    var delayTimeout;

    var toggleIndicatorClass = function toggleIndicatorClass(className, add) {
      indicatorElement.classList[add ? 'add' : 'remove']('pswp__preloader--' + className);
    };

    var setIndicatorVisibility = function setIndicatorVisibility(visible) {
      if (isVisible !== visible) {
        isVisible = visible;
        toggleIndicatorClass('active', visible);
      }
    };

    var updatePreloaderVisibility = function updatePreloaderVisibility() {
      if (!pswp.currSlide.content.isLoading()) {
        setIndicatorVisibility(false);

        if (delayTimeout) {
          clearTimeout(delayTimeout);
          delayTimeout = null;
        }

        return;
      }

      if (!delayTimeout) {
        // display loading indicator with delay
        delayTimeout = setTimeout(function () {
          setIndicatorVisibility(pswp.currSlide.content.isLoading());
          delayTimeout = null;
        }, pswp.options.preloaderDelay);
      }
    };

    pswp.on('change', updatePreloaderVisibility);
    pswp.on('loadComplete', function (e) {
      if (pswp.currSlide === e.slide) {
        updatePreloaderVisibility();
      }
    }); // expose the method

    pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
  }
};
var counterIndicator = {
  name: 'counter',
  order: 5,
  onInit: function onInit(counterElement, pswp) {
    pswp.on('change', function () {
      counterElement.innerHTML = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
    });
  }
};
/**
 * Set special class on element when image is zoomed.
 *
 * By default it is used to adjust
 * zoom icon and zoom cursor via CSS.
 *
 * @param {Boolean} isZoomedIn
 */

function setZoomedIn(el, isZoomedIn) {
  el.classList[isZoomedIn ? 'add' : 'remove']('pswp--zoomed-in');
}

var UI = /*#__PURE__*/function () {
  function UI(pswp) {
    _classCallCheck(this, UI);

    this.pswp = pswp;
  }

  _createClass(UI, [{
    key: "init",
    value: function init() {
      var _this12 = this;

      var pswp = this.pswp;
      this.isRegistered = false;
      this.uiElementsData = [closeButton, arrowPrev, arrowNext, zoomButton, loadingIndicator, counterIndicator];
      pswp.dispatch('uiRegister'); // sort by order

      this.uiElementsData.sort(function (a, b) {
        // default order is 0
        return (a.order || 0) - (b.order || 0);
      });
      this.items = [];
      this.isRegistered = true;
      this.uiElementsData.forEach(function (uiElementData) {
        _this12.registerElement(uiElementData);
      }); // TODO: ensure this works when dynamically adding or removing slides

      if (pswp.getNumItems() === 1) {
        pswp.element.classList.add('pswp--one-slide');
      }

      pswp.on('zoomPanUpdate', function () {
        return _this12._onZoomPanUpdate();
      });
    }
  }, {
    key: "registerElement",
    value: function registerElement(elementData) {
      if (this.isRegistered) {
        this.items.push(new UIElement(this.pswp, elementData));
      } else {
        this.uiElementsData.push(elementData);
      }
    }
    /**
     * Fired each time zoom or pan position is changed.
     * Update classes that control visibility of zoom button and cursor icon.
     */

  }, {
    key: "_onZoomPanUpdate",
    value: function _onZoomPanUpdate() {
      var _this$pswp = this.pswp,
          template = _this$pswp.template,
          currSlide = _this$pswp.currSlide,
          options = _this$pswp.options;
      var currZoomLevel = currSlide.currZoomLevel;

      if (this.pswp.opener.isClosing) {
        return;
      } // if not open yet - check against initial zoom level


      if (!this.pswp.opener.isOpen) {
        currZoomLevel = currSlide.zoomLevels.initial;
      }

      if (currZoomLevel === this._lastUpdatedZoomLevel) {
        return;
      }

      this._lastUpdatedZoomLevel = currZoomLevel;
      var currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary; // Initial and secondary zoom levels are almost equal

      if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
        // disable zoom
        setZoomedIn(template, false);
        template.classList.remove('pswp--zoom-allowed');
        return;
      }

      template.classList.add('pswp--zoom-allowed');
      var secondaryIsHigher = currZoomLevelDiff < 0;

      if (currZoomLevel === currSlide.zoomLevels.secondary) {
        setZoomedIn(template, secondaryIsHigher);
      } else if (currZoomLevel > currSlide.zoomLevels.secondary) {
        setZoomedIn(template, true);
      } else {
        //  if (currZoomLevel < currSlide.zoomLevels.secondary)
        setZoomedIn(template, false);
      }

      if (options.imageClickAction === 'zoom' || options.imageClickAction === 'zoom-or-close') {
        template.classList.add('pswp--click-to-zoom');
      }
    }
  }]);

  return UI;
}();

function getBoundsByElement(el) {
  var thumbAreaRect = el.getBoundingClientRect();
  return {
    x: thumbAreaRect.left,
    y: thumbAreaRect.top,
    w: thumbAreaRect.width
  };
}

function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
  var thumbAreaRect = el.getBoundingClientRect(); // fill image into the area
  // (do they same as object-fit:cover does to retrieve coordinates)

  var hRatio = thumbAreaRect.width / imageWidth;
  var vRatio = thumbAreaRect.height / imageHeight;
  var fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
  var offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
  var offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2; // Coordinates of the image,
  // as if it was not cropped,
  // height is calculated automatically

  var bounds = {
    x: thumbAreaRect.left + offsetX,
    y: thumbAreaRect.top + offsetY,
    w: imageWidth * fillZoomLevel
  }; // Coordinates of inner crop area
  // relative to the image

  bounds.innerRect = {
    w: thumbAreaRect.width,
    h: thumbAreaRect.height,
    x: offsetX,
    y: offsetY
  };
  return bounds;
}
/**
 * Get dimensions of thumbnail image
 * (click on which opens photoswipe or closes photoswipe to)
 *
 * @param {Integer} index
 * @param {Object} itemData
 * @param {PhotoSwipe} instance PhotoSwipe instance
 * @returns Object|undefined
 */


function _getThumbBounds(index, itemData, instance) {
  // legacy event, before filters were introduced
  var event = instance.dispatch('thumbBounds', {
    index: index,
    itemData: itemData,
    instance: instance
  });

  if (event.thumbBounds) {
    return event.thumbBounds;
  }

  var element = itemData.element;
  var thumbBounds;
  var thumbnail;

  if (element && instance.options.thumbSelector !== false) {
    var thumbSelector = instance.options.thumbSelector || 'img';
    thumbnail = element.matches(thumbSelector) ? element : element.querySelector(thumbSelector);
  }

  thumbnail = instance.applyFilters('thumbEl', thumbnail, itemData, index);

  if (thumbnail) {
    if (!itemData.thumbCropped) {
      thumbBounds = getBoundsByElement(thumbnail);
    } else {
      thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.w, itemData.h);
    }
  }

  return instance.applyFilters('thumbBounds', thumbBounds, itemData, index);
}
/**
 * Base PhotoSwipe event object
 */


var PhotoSwipeEvent = /*#__PURE__*/function () {
  function PhotoSwipeEvent(type, details) {
    _classCallCheck(this, PhotoSwipeEvent);

    this.type = type;

    if (details) {
      Object.assign(this, details);
    }
  }

  _createClass(PhotoSwipeEvent, [{
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }]);

  return PhotoSwipeEvent;
}();
/**
 * PhotoSwipe base class that can listen and dispatch for events.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox, extended by base.js
 */


var Eventable = /*#__PURE__*/function () {
  function Eventable() {
    _classCallCheck(this, Eventable);

    this._listeners = {};
    this._filters = {};
  }

  _createClass(Eventable, [{
    key: "addFilter",
    value: function addFilter(name, fn) {
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

      if (!this._filters[name]) {
        this._filters[name] = [];
      }

      this._filters[name].push({
        fn: fn,
        priority: priority
      });

      this._filters[name].sort(function (f1, f2) {
        return f1.priority - f2.priority;
      });

      if (this.pswp) {
        this.pswp.addFilter(name, fn, priority);
      }
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(name, fn) {
      if (this._filters[name]) {
        this._filters[name] = this._filters[name].filter(function (filter) {
          return filter.fn !== fn;
        });
      }

      if (this.pswp) {
        this.pswp.removeFilter(name, fn);
      }
    }
  }, {
    key: "applyFilters",
    value: function applyFilters(name) {
      var _this13 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this._filters[name]) {
        this._filters[name].forEach(function (filter) {
          args[0] = filter.fn.apply(_this13, args);
        });
      }

      return args[0];
    }
  }, {
    key: "on",
    value: function on(name, fn) {
      if (!this._listeners[name]) {
        this._listeners[name] = [];
      }

      this._listeners[name].push(fn); // When binding events to lightbox,
      // also bind events to PhotoSwipe Core,
      // if it's open.


      if (this.pswp) {
        this.pswp.on(name, fn);
      }
    }
  }, {
    key: "off",
    value: function off(name, fn) {
      if (this._listeners[name]) {
        this._listeners[name] = this._listeners[name].filter(function (listener) {
          return fn !== listener;
        });
      }

      if (this.pswp) {
        this.pswp.off(name, fn);
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(name, details) {
      var _this14 = this;

      if (this.pswp) {
        return this.pswp.dispatch(name, details);
      }

      var event = new PhotoSwipeEvent(name, details);

      if (!this._listeners) {
        return event;
      }

      if (this._listeners[name]) {
        this._listeners[name].forEach(function (listener) {
          listener.call(_this14, event);
        });
      }

      return event;
    }
  }]);

  return Eventable;
}();

var Placeholder = /*#__PURE__*/function () {
  /**
   * @param {String|false} imageSrc
   * @param {Element} container
   */
  function Placeholder(imageSrc, container) {
    _classCallCheck(this, Placeholder);

    // Create placeholder
    // (stretched thumbnail or simple div behind the main image)
    this.element = createElement('pswp__img pswp__img--placeholder', imageSrc ? 'img' : '', container);

    if (imageSrc) {
      this.element.decoding = 'async';
      this.element.alt = '';
      this.element.src = imageSrc;
      this.element.setAttribute('role', 'presentation');
    }

    this.element.setAttribute('aria-hiden', 'true');
  }

  _createClass(Placeholder, [{
    key: "setDisplayedSize",
    value: function setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }

      if (this.element.tagName === 'IMG') {
        // Use transform scale() to modify img placeholder size
        // (instead of changing width/height directly).
        // This helps with performance, specifically in iOS15 Safari.
        setWidthHeight(this.element, 250, 'auto');
        this.element.style.transformOrigin = '0 0';
        this.element.style.transform = toTransformString(0, 0, width / 250);
      } else {
        setWidthHeight(this.element, width, height);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.element.parentNode) {
        this.element.remove();
      }

      this.element = null;
    }
  }]);

  return Placeholder;
}();

var Content = /*#__PURE__*/function () {
  /**
   * @param {Object} itemData Slide data
   * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {Slide|undefined} slide Slide that requested the image,
   *                                can be undefined if image was requested by something else
   *                                (for example by lazy-loader)
   */
  function Content(itemData, instance) {
    _classCallCheck(this, Content);

    this.instance = instance;
    this.data = itemData;
    this.width = Number(this.data.w) || Number(this.data.width) || 0;
    this.height = Number(this.data.h) || Number(this.data.height) || 0;
    this.isAttached = false;
    this.hasSlide = false;
    this.state = LOAD_STATE.IDLE;

    if (this.data.type) {
      this.type = this.data.type;
    } else if (this.data.src) {
      this.type = 'image';
    } else {
      this.type = 'html';
    }

    this.instance.dispatch('contentInit', {
      content: this
    });
  }

  _createClass(Content, [{
    key: "removePlaceholder",
    value: function removePlaceholder() {
      var _this15 = this;

      if (this.placeholder && !this.keepPlaceholder()) {
        // With delay, as image might be loaded, but not rendered
        setTimeout(function () {
          if (_this15.placeholder) {
            _this15.placeholder.destroy();

            _this15.placeholder = null;
          }
        }, 500);
      }
    }
    /**
     * Preload content
     *
     * @param {Boolean} isLazy
     */

  }, {
    key: "load",
    value: function load(isLazy, reload) {
      if (!this.placeholder && this.slide && this.usePlaceholder()) {
        // use   -based placeholder only for the first slide,
        // as rendering (even small stretched thumbnail) is an expensive operation
        var placeholderSrc = this.instance.applyFilters('placeholderSrc', this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
        this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
      }

      if (this.element && !reload) {
        return;
      }

      if (this.instance.dispatch('contentLoad', {
        content: this,
        isLazy: isLazy
      }).defaultPrevented) {
        return;
      }

      if (this.isImageContent()) {
        this.loadImage(isLazy);
      } else {
        this.element = createElement('pswp__content');
        this.element.innerHTML = this.data.html || '';
      }

      if (reload && this.slide) {
        this.slide.updateContentSize(true);
      }
    }
    /**
     * Preload image
     *
     * @param {Boolean} isLazy
     */

  }, {
    key: "loadImage",
    value: function loadImage(isLazy) {
      var _this16 = this;

      this.element = createElement('pswp__img', 'img');

      if (this.instance.dispatch('contentLoadImage', {
        content: this,
        isLazy: isLazy
      }).defaultPrevented) {
        return;
      }

      if (this.data.srcset) {
        this.element.srcset = this.data.srcset;
      }

      this.element.src = this.data.src;
      this.element.alt = this.data.alt || '';
      this.state = LOAD_STATE.LOADING;

      if (this.element.complete) {
        this.onLoaded();
      } else {
        this.element.onload = function () {
          _this16.onLoaded();
        };

        this.element.onerror = function () {
          _this16.onError();
        };
      }
    }
    /**
     * Assign slide to content
     *
     * @param {Slide} slide
     */

  }, {
    key: "setSlide",
    value: function setSlide(slide) {
      this.slide = slide;
      this.hasSlide = true;
      this.instance = slide.pswp; // todo: do we need to unset slide?
    }
    /**
     * Content load success handler
     */

  }, {
    key: "onLoaded",
    value: function onLoaded() {
      this.state = LOAD_STATE.LOADED;

      if (this.slide) {
        this.instance.dispatch('loadComplete', {
          slide: this.slide,
          content: this
        }); // if content is reloaded

        if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
          this.slide.container.innerHTML = '';
          this.append();
          this.slide.updateContentSize(true);
        }
      }
    }
    /**
     * Content load error handler
     */

  }, {
    key: "onError",
    value: function onError() {
      this.state = LOAD_STATE.ERROR;

      if (this.slide) {
        this.displayError();
        this.instance.dispatch('loadComplete', {
          slide: this.slide,
          isError: true,
          content: this
        });
        this.instance.dispatch('loadError', {
          slide: this.slide,
          content: this
        });
      }
    }
    /**
     * @returns {Boolean} If the content is currently loading
     */

  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.instance.applyFilters('isContentLoading', this.state === LOAD_STATE.LOADING, this);
    }
  }, {
    key: "isError",
    value: function isError() {
      return this.state === LOAD_STATE.ERROR;
    }
    /**
     * @returns {Boolean} If the content is image
     */

  }, {
    key: "isImageContent",
    value: function isImageContent() {
      return this.type === 'image';
    }
    /**
     * Update content size
     *
     * @param {Number} width
     * @param {Number} height
     */

  }, {
    key: "setDisplayedSize",
    value: function setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }

      if (this.placeholder) {
        this.placeholder.setDisplayedSize(width, height);
      }

      if (this.instance.dispatch('contentResize', {
        content: this,
        width: width,
        height: height
      }).defaultPrevented) {
        return;
      }

      setWidthHeight(this.element, width, height);

      if (this.isImageContent() && !this.isError()) {
        var image = this.element; // Handle srcset sizes attribute.
        //
        // Never lower quality, if it was increased previously.
        // Chrome does this automatically, Firefox and Safari do not,
        // so we store largest used size in dataset.

        if (image.srcset && (!image.dataset.largestUsedSize || width > image.dataset.largestUsedSize)) {
          image.sizes = width + 'px';
          image.dataset.largestUsedSize = width;
        }

        if (this.slide) {
          this.instance.dispatch('imageSizeChange', {
            slide: this.slide,
            width: width,
            height: height,
            content: this
          });
        }
      }
    }
    /**
     * @returns {Boolean} If the content can be zoomed
     */

  }, {
    key: "isZoomable",
    value: function isZoomable() {
      return this.instance.applyFilters('isContentZoomable', this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
    }
    /**
     * @returns {Boolean} If content should use a placeholder (from msrc by default)
     */

  }, {
    key: "usePlaceholder",
    value: function usePlaceholder() {
      return this.instance.applyFilters('useContentPlaceholder', this.isImageContent(), this);
    }
    /**
     * Preload content with lazy-loading param
     *
     * @param {Boolean} isLazy
     */

  }, {
    key: "lazyLoad",
    value: function lazyLoad() {
      if (this.instance.dispatch('contentLazyLoad', {
        content: this
      }).defaultPrevented) {
        return;
      }

      this.load(true);
    }
    /**
     * @returns {Boolean} If placeholder should be kept after content is loaded
     */

  }, {
    key: "keepPlaceholder",
    value: function keepPlaceholder() {
      return this.instance.applyFilters('isKeepingPlaceholder', this.isLoading(), this);
    }
    /**
     * Destroy the content
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.hasSlide = false;
      this.slide = null;

      if (this.instance.dispatch('contentDestroy', {
        content: this
      }).defaultPrevented) {
        return;
      }

      if (this.isImageContent() && this.element) {
        this.element.onload = null;
        this.element.onerror = null;
        this.element = null;
      }
    }
    /**
     * Display error message
     */

  }, {
    key: "displayError",
    value: function displayError() {
      if (this.slide) {
        var errorMsgEl = createElement('pswp__error-msg');
        errorMsgEl.innerText = this.instance.options.errorMsg;
        errorMsgEl = this.instance.applyFilters('contentErrorElement', errorMsgEl, this);
        this.element = createElement('pswp__content pswp__error-msg-container');
        this.element.appendChild(errorMsgEl);
        this.slide.container.innerHTML = '';
        this.slide.container.appendChild(this.element);
        this.slide.updateContentSize(true);
        this.removePlaceholder();
      }
    }
    /**
     * Append the content
     */

  }, {
    key: "append",
    value: function append() {
      var _this17 = this;

      this.isAttached = true;

      if (this.state === LOAD_STATE.ERROR) {
        this.displayError();
        return;
      }

      if (this.instance.dispatch('contentAppend', {
        content: this
      }).defaultPrevented) {
        return;
      }

      if (this.isImageContent()) {
        // Use decode() on nearby slides
        //
        // Nearby slide images are in DOM and not hidden via display:none.
        // However, they are placed offscreen (to the left and right side).
        //
        // Some browsers do not composite the image until it's actually visible,
        // using decode() helps.
        //
        // You might ask "why dont you just decode() and then append all images",
        // that's because I want to show image before it's fully loaded,
        // as browser can render parts of image while it is loading.
        if (this.slide && !this.slide.isActive && 'decode' in this.element) {
          this.isDecoding = true; // Make sure that we start decoding on the next frame

          requestAnimationFrame(function () {
            // element might change
            if (_this17.element && _this17.element.tagName === 'IMG') {
              _this17.element.decode().then(function () {
                _this17.isDecoding = false;
                requestAnimationFrame(function () {
                  _this17.appendImage();
                });
              })["catch"](function () {
                _this17.isDecoding = false;
              });
            }
          });
        } else {
          if (this.placeholder && (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR)) {
            this.removePlaceholder();
          }

          this.appendImage();
        }
      } else if (this.element && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
    }
    /**
     * Activate the slide,
     * active slide is generally the current one,
     * meaning the user can see it.
     */

  }, {
    key: "activate",
    value: function activate() {
      if (this.instance.dispatch('contentActivate', {
        content: this
      }).defaultPrevented) {
        return;
      }

      if (this.slide) {
        if (this.isImageContent() && this.isDecoding) {
          // add image to slide when it becomes active,
          // even if it's not finished decoding
          this.appendImage();
        } else if (this.isError()) {
          this.load(false, true); // try to reload
        }
      }
    }
    /**
     * Deactivate the content
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      this.instance.dispatch('contentDeactivate', {
        content: this
      });
    }
    /**
     * Remove the content from DOM
     */

  }, {
    key: "remove",
    value: function remove() {
      this.isAttached = false;

      if (this.instance.dispatch('contentRemove', {
        content: this
      }).defaultPrevented) {
        return;
      }

      if (this.element && this.element.parentNode) {
        this.element.remove();
      }
    }
    /**
     * Append the image content to slide container
     */

  }, {
    key: "appendImage",
    value: function appendImage() {
      if (!this.isAttached) {
        return;
      }

      if (this.instance.dispatch('contentAppendImage', {
        content: this
      }).defaultPrevented) {
        return;
      } // ensure that element exists and is not already appended


      if (this.slide && this.element && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);

        if (this.placeholder && (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR)) {
          this.removePlaceholder();
        }
      }
    }
  }]);

  return Content;
}();
/**
 * PhotoSwipe base class that can retrieve data about every slide.
 * Shared by PhotoSwipe Core and PhotoSwipe Lightbox
 */


var PhotoSwipeBase = /*#__PURE__*/function (_Eventable) {
  _inherits(PhotoSwipeBase, _Eventable);

  var _super = _createSuper(PhotoSwipeBase);

  function PhotoSwipeBase() {
    _classCallCheck(this, PhotoSwipeBase);

    return _super.apply(this, arguments);
  }

  _createClass(PhotoSwipeBase, [{
    key: "getNumItems",
    value:
    /**
     * Get total number of slides
     */
    function getNumItems() {
      var numItems;
      var dataSource = this.options.dataSource;

      if (!dataSource) {
        numItems = 0;
      } else if (dataSource.length) {
        // may be an array or just object with length property
        numItems = dataSource.length;
      } else if (dataSource.gallery) {
        // query DOM elements
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }

        if (dataSource.items) {
          numItems = dataSource.items.length;
        }
      } // legacy event, before filters were introduced


      var event = this.dispatch('numItems', {
        dataSource: dataSource,
        numItems: numItems
      });
      return this.applyFilters('numItems', event.numItems, dataSource);
    }
  }, {
    key: "createContentFromData",
    value: function createContentFromData(slideData) {
      return new Content(slideData, this);
    }
    /**
     * Get item data by index.
     *
     * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
     * For example, it may contain properties like
     * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
     *
     * @param {Integer} index
     */

  }, {
    key: "getItemData",
    value: function getItemData(index) {
      var dataSource = this.options.dataSource;
      var dataSourceItem;

      if (Array.isArray(dataSource)) {
        // Datasource is an array of elements
        dataSourceItem = dataSource[index];
      } else if (dataSource && dataSource.gallery) {
        // dataSource has gallery property,
        // thus it was created by Lightbox, based on
        // gallerySelecor and childSelector options
        // query DOM elements
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }

        dataSourceItem = dataSource.items[index];
      }

      var itemData = dataSourceItem;

      if (itemData instanceof Element) {
        itemData = this._domElementToItemData(itemData);
      } // Dispatching the itemData event,
      // it's a legacy verion before filters were introduced


      var event = this.dispatch('itemData', {
        itemData: itemData || {},
        index: index
      });
      return this.applyFilters('itemData', event.itemData, index);
    }
    /**
     * Get array of gallery DOM elements,
     * based on childSelector and gallery element.
     *
     * @param {Element} galleryElement
     */

  }, {
    key: "_getGalleryDOMElements",
    value: function _getGalleryDOMElements(galleryElement) {
      if (this.options.children || this.options.childSelector) {
        return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
      }

      return [galleryElement];
    }
    /**
     * Converts DOM element to item data object.
     *
     * @param {Element} element DOM element
     */
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "_domElementToItemData",
    value: function _domElementToItemData(element) {
      var itemData = {
        element: element
      };
      var linkEl = element.tagName === 'A' ? element : element.querySelector('a');

      if (linkEl) {
        // src comes from data-pswp-src attribute,
        // if it's empty link href is used
        itemData.src = linkEl.dataset.pswpSrc || linkEl.href;

        if (linkEl.dataset.pswpSrcset) {
          itemData.srcset = linkEl.dataset.pswpSrcset;
        }

        itemData.width = parseInt(linkEl.dataset.pswpWidth, 10);
        itemData.height = parseInt(linkEl.dataset.pswpHeight, 10); // support legacy w & h properties

        itemData.w = itemData.width;
        itemData.h = itemData.height;

        if (linkEl.dataset.pswpType) {
          itemData.type = linkEl.dataset.pswpType;
        }

        var thumbnailEl = element.querySelector('img');

        if (thumbnailEl) {
          // msrc is URL to placeholder image that's displayed before large image is loaded
          // by default it's displayed only for the first slide
          itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
          itemData.alt = thumbnailEl.getAttribute('alt');
        }

        if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
          itemData.thumbCropped = true;
        }
      }

      this.applyFilters('domItemData', itemData, element, linkEl);
      return itemData;
    }
  }]);

  return PhotoSwipeBase;
}(Eventable);
/**
 * Manages opening and closing transitions of the PhotoSwipe.
 *
 * It can perform zoom, fade or no transition.
 */
// some browsers do not paint
// elements which opacity is set to 0,
// since we need to pre-render elements for the animation -
// we set it to the minimum amount


var MIN_OPACITY = 0.003;

var Opener = /*#__PURE__*/function () {
  function Opener(pswp) {
    _classCallCheck(this, Opener);

    this.pswp = pswp;
    this.isClosed = true;
    this._prepareOpen = this._prepareOpen.bind(this); // Override initial zoom and pan position

    pswp.on('firstZoomPan', this._prepareOpen);
  }

  _createClass(Opener, [{
    key: "open",
    value: function open() {
      this._prepareOpen();

      this._start();
    }
  }, {
    key: "close",
    value: function close() {
      var _this18 = this;

      if (this.isClosed || this.isClosing || this.isOpening) {
        // if we close during opening animation
        // for now do nothing,
        // browsers aren't good at changing the direction of the CSS transition
        return false;
      }

      var slide = this.pswp.currSlide;
      this.isOpen = false;
      this.isOpening = false;
      this.isClosing = true;
      this._duration = this.pswp.options.hideAnimationDuration;

      if (slide && slide.currZoomLevel * slide.width >= this.pswp.options.maxWidthToAnimate) {
        this._duration = 0;
      }

      this._applyStartProps();

      setTimeout(function () {
        _this18._start();
      }, this._croppedZoom ? 30 : 0);
      return true;
    }
  }, {
    key: "_prepareOpen",
    value: function _prepareOpen() {
      this.pswp.off('firstZoomPan', this._prepareOpen);

      if (!this.isOpening) {
        var slide = this.pswp.currSlide;
        this.isOpening = true;
        this.isClosing = false;
        this._duration = this.pswp.options.showAnimationDuration;

        if (slide && slide.zoomLevels.initial * slide.width >= this.pswp.options.maxWidthToAnimate) {
          this._duration = 0;
        }

        this._applyStartProps();
      }
    }
  }, {
    key: "_applyStartProps",
    value: function _applyStartProps() {
      var pswp = this.pswp;
      var slide = this.pswp.currSlide;
      var options = pswp.options;

      if (options.showHideAnimationType === 'fade') {
        options.showHideOpacity = true;
        this._thumbBounds = false;
      } else if (options.showHideAnimationType === 'none') {
        options.showHideOpacity = false;
        this._duration = 0;
        this._thumbBounds = false;
      } else if (this.isOpening && pswp._initialThumbBounds) {
        // Use initial bounds if defined
        this._thumbBounds = pswp._initialThumbBounds;
      } else {
        this._thumbBounds = this.pswp.getThumbBounds();
      }

      this._placeholder = slide.getPlaceholderElement();
      pswp.animations.stopAll(); // Discard animations when duration is less than 50ms

      this._useAnimation = this._duration > 50;
      this._animateZoom = Boolean(this._thumbBounds) && slide.content && slide.content.type === 'image' && (!this.isClosing || !pswp.mainScroll.isShifted());

      if (!this._animateZoom) {
        this._animateRootOpacity = true;

        if (this.isOpening) {
          slide.zoomAndPanToInitial();
          slide.applyCurrentZoomPan();
        }
      } else {
        this._animateRootOpacity = options.showHideOpacity;
      }

      this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
      this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;

      if (!this._useAnimation) {
        this._duration = 0;
        this._animateZoom = false;
        this._animateBgOpacity = false;
        this._animateRootOpacity = true;

        if (this.isOpening) {
          pswp.element.style.opacity = MIN_OPACITY;
          pswp.applyBgOpacity(1);
        }

        return;
      }

      if (this._animateZoom && this._thumbBounds.innerRect) {
        // Properties are used when animation from cropped thumbnail
        this._croppedZoom = true;
        this._cropContainer1 = this.pswp.container;
        this._cropContainer2 = this.pswp.currSlide.holderElement;
        pswp.container.style.overflow = 'hidden';
        pswp.container.style.width = pswp.viewportSize.x + 'px';
      } else {
        this._croppedZoom = false;
      }

      if (this.isOpening) {
        // Apply styles before opening transition
        if (this._animateRootOpacity) {
          pswp.element.style.opacity = MIN_OPACITY;
          pswp.applyBgOpacity(1);
        } else {
          if (this._animateBgOpacity) {
            pswp.bg.style.opacity = MIN_OPACITY;
          }

          pswp.element.style.opacity = 1;
        }

        if (this._animateZoom) {
          this._setClosedStateZoomPan();

          if (this._placeholder) {
            // tell browser that we plan to animate the placeholder
            this._placeholder.willChange = 'transform'; // hide placeholder to allow hiding of
            // elements that overlap it (such as icons over the thumbnail)

            this._placeholder.style.opacity = MIN_OPACITY;
          }
        }
      } else if (this.isClosing) {
        // hide nearby slides to make sure that
        // they are not painted during the transition
        pswp.mainScroll.itemHolders[0].el.style.display = 'none';
        pswp.mainScroll.itemHolders[2].el.style.display = 'none';

        if (this._croppedZoom) {
          if (pswp.mainScroll.x !== 0) {
            // shift the main scroller to zero position
            pswp.mainScroll.resetPosition();
            pswp.mainScroll.resize();
          }
        }
      }
    }
  }, {
    key: "_start",
    value: function _start() {
      var _this19 = this;

      if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === 'IMG') {
        // To ensure smooth animation
        // we wait till the current slide image placeholder is decoded,
        // but no longer than 250ms,
        // and no shorter than 50ms
        // (just using requestanimationframe is not enough in Firefox,
        // for some reason)
        new Promise(function (resolve) {
          var decoded = false;
          var isDelaying = true;
          decodeImage(_this19._placeholder)["finally"](function () {
            decoded = true;

            if (!isDelaying) {
              resolve();
            }
          });
          setTimeout(function () {
            isDelaying = false;

            if (decoded) {
              resolve();
            }
          }, 50);
          setTimeout(resolve, 250);
        })["finally"](function () {
          return _this19._initiate();
        });
      } else {
        this._initiate();
      }
    }
  }, {
    key: "_initiate",
    value: function _initiate() {
      this.pswp.element.style.setProperty('--pswp-transition-duration', this._duration + 'ms');
      this.pswp.dispatch(this.isOpening ? 'openingAnimationStart' : 'closingAnimationStart'); // legacy event

      this.pswp.dispatch('initialZoom' + (this.isOpening ? 'In' : 'Out'));
      this.pswp.element.classList[this.isOpening ? 'add' : 'remove']('pswp--ui-visible');

      if (this.isOpening) {
        if (this._placeholder) {
          // unhide the placeholder
          this._placeholder.style.opacity = 1;
        }

        this._animateToOpenState();
      } else if (this.isClosing) {
        this._animateToClosedState();
      }

      if (!this._useAnimation) {
        this._onAnimationComplete();
      }
    }
  }, {
    key: "_onAnimationComplete",
    value: function _onAnimationComplete() {
      var pswp = this.pswp;
      this.isOpen = this.isOpening;
      this.isClosed = this.isClosing;
      this.isOpening = false;
      this.isClosing = false;
      pswp.dispatch(this.isOpen ? 'openingAnimationEnd' : 'closingAnimationEnd'); // legacy event

      pswp.dispatch('initialZoom' + (this.isOpen ? 'InEnd' : 'OutEnd'));

      if (this.isClosed) {
        pswp.destroy();
      } else if (this.isOpen) {
        if (this._animateZoom) {
          pswp.container.style.overflow = 'visible';
          pswp.container.style.width = '100%';
        }

        pswp.currSlide.applyCurrentZoomPan();
      }
    }
  }, {
    key: "_animateToOpenState",
    value: function _animateToOpenState() {
      var pswp = this.pswp;

      if (this._animateZoom) {
        if (this._croppedZoom) {
          this._animateTo(this._cropContainer1, 'transform', 'translate3d(0,0,0)');

          this._animateTo(this._cropContainer2, 'transform', 'none');
        }

        pswp.currSlide.zoomAndPanToInitial();

        this._animateTo(pswp.currSlide.container, 'transform', pswp.currSlide.getCurrentTransform());
      }

      if (this._animateBgOpacity) {
        this._animateTo(pswp.bg, 'opacity', pswp.options.bgOpacity);
      }

      if (this._animateRootOpacity) {
        this._animateTo(pswp.element, 'opacity', 1);
      }
    }
  }, {
    key: "_animateToClosedState",
    value: function _animateToClosedState() {
      var pswp = this.pswp;

      if (this._animateZoom) {
        this._setClosedStateZoomPan(true);
      }

      if (this._animateBgOpacity && pswp.bgOpacity > 0.01) {
        // do not animate opacity if it's already at 0
        this._animateTo(pswp.bg, 'opacity', 0);
      }

      if (this._animateRootOpacity) {
        this._animateTo(pswp.element, 'opacity', 0);
      }
    }
  }, {
    key: "_setClosedStateZoomPan",
    value: function _setClosedStateZoomPan(animate) {
      var pswp = this.pswp;
      var innerRect = this._thumbBounds.innerRect;
      var currSlide = pswp.currSlide,
          viewportSize = pswp.viewportSize;

      if (this._croppedZoom) {
        var containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
        var containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
        var containerTwoPanX = viewportSize.x - innerRect.w;
        var containerTwoPanY = viewportSize.y - innerRect.h;

        if (animate) {
          this._animateTo(this._cropContainer1, 'transform', toTransformString(containerOnePanX, containerOnePanY));

          this._animateTo(this._cropContainer2, 'transform', toTransformString(containerTwoPanX, containerTwoPanY));
        } else {
          setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
          setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
        }
      }

      equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
      currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;

      if (animate) {
        this._animateTo(currSlide.container, 'transform', currSlide.getCurrentTransform());
      } else {
        currSlide.applyCurrentZoomPan();
      }
    }
    /**
     * @param {Element} target
     * @param {String} prop
     * @param {String} propValue
     */

  }, {
    key: "_animateTo",
    value: function _animateTo(target, prop, propValue) {
      var _this20 = this;

      if (!this._duration) {
        target.style[prop] = propValue;
        return;
      }

      var animations = this.pswp.animations;
      var animProps = {
        duration: this._duration,
        easing: this.pswp.options.easing,
        onComplete: function onComplete() {
          if (!animations.activeAnimations.length) {
            _this20._onAnimationComplete();
          }
        },
        target: target
      };
      animProps[prop] = propValue;
      animations.startTransition(animProps);
    }
  }]);

  return Opener;
}();

var MIN_SLIDES_TO_CACHE = 5;
/**
 * Returns cache key by slide index and data
 *
 * @param {Object} itemData
 * @param {Integer} index
 * @returns {String}
 */

function getKey(itemData, index) {
  if (itemData && itemData.src) {
    return itemData.src + '_' + index;
  }

  return index;
}
/**
 * Lazy-load an image
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * @param {Object} itemData Data about the slide
 * @param {PhotoSwipeBase}  instance PhotoSwipe or PhotoSwipeLightbox
 * @param {Integer} index
 * @returns {Object|Boolean} Image that is being decoded or false.
 */


function lazyLoadData(itemData, instance, index) {
  // src/slide/content/content.js
  var content = instance.createContentFromData(itemData);

  if (!content || !content.lazyLoad) {
    return;
  }

  content.key = getKey(itemData, index);
  var options = instance.options; // We need to know dimensions of the image to preload it,
  // as it might use srcset and we need to define sizes

  var viewportSize = instance.viewportSize || getViewportSize(options);
  var panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
  var zoomLevel = new ZoomLevel(options, itemData, -1);
  zoomLevel.update(content.width, content.height, panAreaSize);
  content.lazyLoad();
  content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
  return content;
}
/**
 * Lazy-loads specific slide.
 * This function is used both by Lightbox and PhotoSwipe core,
 * thus it can be called before dialog is opened.
 *
 * By default it loads image based on viewport size and initial zoom level.
 *
 * @param {Integer} index Slide index
 * @param {Object}  instance PhotoSwipe or PhotoSwipeLightbox eventable instance
 */


function lazyLoadSlide(index, instance) {
  var itemData = instance.getItemData(index);

  if (instance.dispatch('lazyLoadSlide', {
    index: index,
    itemData: itemData
  }).defaultPrevented) {
    return;
  }

  return lazyLoadData(itemData, instance, index);
}

var ContentLoader = /*#__PURE__*/function () {
  function ContentLoader(pswp) {
    _classCallCheck(this, ContentLoader);

    this.pswp = pswp; // Total amount of cached images

    this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
    this._cachedItems = [];
  }
  /**
   * Lazy load nearby slides based on `preload` option.
   *
   * @param {Integer} diff Difference between slide indexes that was changed recently, or 0.
   */


  _createClass(ContentLoader, [{
    key: "updateLazy",
    value: function updateLazy(diff) {
      var pswp = this.pswp;

      if (pswp.dispatch('lazyLoad').defaultPrevented) {
        return;
      }

      var preload = pswp.options.preload;
      var isForward = diff === undefined ? true : diff >= 0;
      var i; // preload[1] - num items to preload in forward direction

      for (i = 0; i <= preload[1]; i++) {
        this.loadSlideByIndex(pswp.currIndex + (isForward ? i : -i));
      } // preload[0] - num items to preload in backward direction


      for (i = 1; i <= preload[0]; i++) {
        this.loadSlideByIndex(pswp.currIndex + (isForward ? -i : i));
      }
    }
  }, {
    key: "loadSlideByIndex",
    value: function loadSlideByIndex(index) {
      index = this.pswp.getLoopedIndex(index);
      var itemData = this.pswp.getItemData(index);
      var key = getKey(itemData, index); // try to get cached content

      var content = this.getContentByKey(key);

      if (!content) {
        // no cached content, so try to load from scratch:
        content = lazyLoadSlide(index, this.pswp); // if content can be loaded, add it to cache:

        if (content) {
          content.key = key;
          this.addToCache(content);
        }
      }
    }
  }, {
    key: "getContentBySlide",
    value: function getContentBySlide(slide) {
      var content = this.getContentByKey(this.getKeyBySlide(slide));

      if (!content) {
        // create content if not found in cache
        content = this.pswp.createContentFromData(slide.data);

        if (content) {
          content.key = this.getKeyBySlide(slide);
          this.addToCache(content);
        }
      }

      if (content) {
        // assign slide to content
        content.setSlide(slide);
      }

      return content;
    }
    /**
     * @param {Content} content
     */

  }, {
    key: "addToCache",
    value: function addToCache(content) {
      // move to the end of array
      this.removeByKey(content.key);

      this._cachedItems.push(content);

      if (this._cachedItems.length > this.limit) {
        // Destroy the first content that's not attached
        var indexToRemove = this._cachedItems.findIndex(function (item) {
          return !item.isAttached && !item.hasSlide;
        });

        if (indexToRemove !== -1) {
          var removedItem = this._cachedItems.splice(indexToRemove, 1)[0];

          removedItem.destroy();
        }
      }
    }
    /**
     * Removes an image from cache, does not destroy() it, just removes.
     *
     * @param {String} key
     */

  }, {
    key: "removeByKey",
    value: function removeByKey(key) {
      var indexToRemove = this._cachedItems.findIndex(function (item) {
        return item.key === key;
      });

      if (indexToRemove !== -1) {
        this._cachedItems.splice(indexToRemove, 1);
      }
    }
  }, {
    key: "getContentByKey",
    value: function getContentByKey(key) {
      return this._cachedItems.find(function (content) {
        return content.key === key;
      });
    }
  }, {
    key: "getKeyBySlide",
    value: function getKeyBySlide(slide) {
      return getKey(slide.data, slide.index);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._cachedItems.forEach(function (content) {
        return content.destroy();
      });

      this._cachedItems = null;
    }
  }]);

  return ContentLoader;
}();

var defaultOptions = {
  allowPanToNext: true,
  spacing: 0.1,
  loop: true,
  pinchToClose: true,
  closeOnVerticalDrag: true,
  hideAnimationDuration: 333,
  showAnimationDuration: 333,
  zoomAnimationDuration: 333,
  escKey: true,
  arrowKeys: true,
  returnFocus: true,
  maxWidthToAnimate: 4000,
  clickToCloseNonZoomable: true,
  imageClickAction: 'zoom-or-close',
  bgClickAction: 'close',
  tapAction: 'toggle-controls',
  doubleTapAction: 'zoom',
  indexIndicatorSep: ' / ',
  preloaderDelay: 2000,
  bgOpacity: 0.8,
  index: 0,
  errorMsg: 'The image cannot be loaded',
  preload: [1, 2],
  easing: 'cubic-bezier(.4,0,.22,1)'
};

var PhotoSwipe = /*#__PURE__*/function (_PhotoSwipeBase) {
  _inherits(PhotoSwipe, _PhotoSwipeBase);

  var _super2 = _createSuper(PhotoSwipe);

  function PhotoSwipe(items, options) {
    var _this21;

    _classCallCheck(this, PhotoSwipe);

    _this21 = _super2.call(this);
    _this21.items = items;

    _this21._prepareOptions(options); // offset of viewport relative to document


    _this21.offset = {};
    _this21._prevViewportSize = {}; // Size of scrollable PhotoSwipe viewport

    _this21.viewportSize = {}; // background (backdrop) opacity

    _this21.bgOpacity = 1;
    _this21.events = new DOMEvents();
    /** @type {Animations} */

    _this21.animations = new Animations();
    _this21.mainScroll = new MainScroll(_assertThisInitialized(_this21));
    _this21.gestures = new Gestures(_assertThisInitialized(_this21));
    _this21.opener = new Opener(_assertThisInitialized(_this21));
    _this21.keyboard = new Keyboard(_assertThisInitialized(_this21));
    _this21.contentLoader = new ContentLoader(_assertThisInitialized(_this21));
    return _this21;
  }

  _createClass(PhotoSwipe, [{
    key: "init",
    value: function init() {
      var _this22 = this;

      if (this.isOpen || this.isDestroying) {
        return;
      }

      this.isOpen = true;
      this.dispatch('init'); // legacy

      this.dispatch('beforeOpen');

      this._createMainStructure(); // init modules
      // _modules.forEach(function (module) {
      //   module();
      // });
      // add classes to the root element of PhotoSwipe


      var rootClasses = 'pswp--open';

      if (this.gestures.supportsTouch) {
        rootClasses += ' pswp--touch';
      }

      if (this.options.mainClass) {
        rootClasses += ' ' + this.options.mainClass;
      }

      this.element.className += ' ' + rootClasses;
      this.currIndex = this.options.index || 0;
      this.potentialIndex = this.currIndex;
      this.dispatch('firstUpdate'); // starting index can be modified here
      // initialize scroll wheel handler to block the scroll

      this.scrollWheel = new ScrollWheel(this); // sanitize index

      if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
        this.currIndex = 0;
      }

      if (!this.gestures.supportsTouch) {
        // enable mouse features if no touch support detected
        this.mouseDetected();
      } // causes forced synchronous layout


      this.updateSize();
      this.offset.y = window.pageYOffset;
      this._initialItemData = this.getItemData(this.currIndex);
      this.dispatch('gettingData', this.currIndex, this._initialItemData, true); // *Layout* - calculate size and position of elements here

      this._initialThumbBounds = this.getThumbBounds();
      this.dispatch('initialLayout');
      this.on('openingAnimationEnd', function () {
        // Add content to the previous and next slide
        _this22.setContent(_this22.mainScroll.itemHolders[0], _this22.currIndex - 1);

        _this22.setContent(_this22.mainScroll.itemHolders[2], _this22.currIndex + 1);

        _this22.mainScroll.itemHolders[0].el.style.display = 'block';
        _this22.mainScroll.itemHolders[2].el.style.display = 'block';

        _this22.appendHeavy();

        _this22.contentLoader.updateLazy();

        _this22.events.add(window, 'resize', _this22._handlePageResize.bind(_this22));

        _this22.events.add(window, 'scroll', _this22._updatePageScrollOffset.bind(_this22));

        _this22.dispatch('bindEvents');
      }); // set content for center slide (first time)

      this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
      this.dispatch('change');
      this.opener.open();
      this.dispatch('afterInit');
      return true;
    }
    /**
     * Get looped slide index
     * (for example, -1 will return the last slide)
     *
     * @param {Integer} index
     */

  }, {
    key: "getLoopedIndex",
    value: function getLoopedIndex(index) {
      var numSlides = this.getNumItems();

      if (this.options.loop) {
        if (index > numSlides - 1) {
          index -= numSlides;
        }

        if (index < 0) {
          index += numSlides;
        }
      }

      index = clamp(index, 0, numSlides - 1);
      return index;
    }
  }, {
    key: "appendHeavy",
    value: function appendHeavy() {
      this.mainScroll.itemHolders.forEach(function (itemHolder) {
        if (itemHolder.slide) {
          itemHolder.slide.appendHeavy();
        }
      });
    }
    /**
     * Change the slide
     * @param  {Integer} New index
     */

  }, {
    key: "goTo",
    value: function goTo(index) {
      this.mainScroll.moveIndexBy(this.getLoopedIndex(index) - this.potentialIndex);
    }
    /**
     * Go to the next slide.
     */

  }, {
    key: "next",
    value: function next() {
      this.goTo(this.potentialIndex + 1);
    }
    /**
     * Go to the previous slide.
     */

  }, {
    key: "prev",
    value: function prev() {
      this.goTo(this.potentialIndex - 1);
    }
    /**
     * @see slide/slide.js zoomTo
     */

  }, {
    key: "zoomTo",
    value: function zoomTo() {
      var _this$currSlide;

      (_this$currSlide = this.currSlide).zoomTo.apply(_this$currSlide, arguments);
    }
    /**
     * @see slide/slide.js toggleZoom
     */

  }, {
    key: "toggleZoom",
    value: function toggleZoom() {
      this.currSlide.toggleZoom();
    }
    /**
     * Close the gallery.
     * After closing transition ends - destroy it
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.opener.isOpen || this.isDestroying) {
        return;
      }

      this.isDestroying = true;
      this.dispatch('close');
      this.events.removeAll();
      this.opener.close();
    }
    /**
     * Destroys the gallery:
     * - instantly closes the gallery
     * - unbinds events,
     * - cleans intervals and timeouts
     * - removes elements from DOM
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.isDestroying) {
        this.options.showHideAnimationType = 'none';
        this.close();
        return;
      }

      this.dispatch('destroy');
      this.listeners = null;
      this.scrollWrap.ontouchmove = null;
      this.scrollWrap.ontouchend = null;
      this.element.remove();
      this.mainScroll.itemHolders.forEach(function (itemHolder) {
        if (itemHolder.slide) {
          itemHolder.slide.destroy();
        }
      });
      this.contentLoader.destroy();
      this.events.removeAll();
    }
  }, {
    key: "setContent",
    value: function setContent(holder, index) {
      if (this.canLoop()) {
        index = this.getLoopedIndex(index);
      }

      if (holder.slide) {
        if (holder.slide.index === index) {
          // exit if holder already contains this slide
          // this could be common when just three slides are used
          return;
        } // destroy previous slide


        holder.slide.destroy();
        holder.slide = null;
      } // exit if no loop and index is out of bounds


      if (!this.canLoop() && (index < 0 || index >= this.getNumItems())) {
        return;
      }

      var itemData = this.getItemData(index);
      holder.slide = new Slide(itemData, index, this); // set current slide

      if (index === this.currIndex) {
        this.currSlide = holder.slide;
      }

      holder.slide.append(holder.el);
    }
  }, {
    key: "getViewportCenterPoint",
    value: function getViewportCenterPoint() {
      return {
        x: this.viewportSize.x / 2,
        y: this.viewportSize.y / 2
      };
    }
    /**
     * Update size of all elements.
     * Executed on init and on page resize.
     *
     * @param  {Boolean} force Update size even if size of viewport was not changed.
     */

  }, {
    key: "updateSize",
    value: function updateSize(force) {
      // let item;
      // let itemIndex;
      if (this.isDestroying) {
        // exit if PhotoSwipe is closed or closing
        // (to avoid errors, as resize event might be delayed)
        return;
      } //const newWidth = this.scrollWrap.clientWidth;
      //const newHeight = this.scrollWrap.clientHeight;


      var newViewportSize = getViewportSize(this.options, this);

      if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
        // Exit if dimensions were not changed
        return;
      } //this._prevViewportSize.x = newWidth;
      //this._prevViewportSize.y = newHeight;


      equalizePoints(this._prevViewportSize, newViewportSize);
      this.dispatch('beforeResize');
      equalizePoints(this.viewportSize, this._prevViewportSize);

      this._updatePageScrollOffset();

      this.dispatch('viewportSize'); // Resize slides only after opener animation is finished
      // and don't re-calculate size on inital size update

      this.mainScroll.resize(this.opener.isOpen);

      if (!this.hasMouse && window.matchMedia('(any-hover: hover)').matches) {
        this.mouseDetected();
      }

      this.dispatch('resize');
    }
  }, {
    key: "applyBgOpacity",
    value: function applyBgOpacity(opacity) {
      this.bgOpacity = Math.max(opacity, 0);
      this.bg.style.opacity = this.bgOpacity * this.options.bgOpacity;
    }
    /**
     * Whether mouse is detected
     */

  }, {
    key: "mouseDetected",
    value: function mouseDetected() {
      if (!this.hasMouse) {
        this.hasMouse = true;
        this.element.classList.add('pswp--has_mouse');
      }
    }
    /**
     * Page resize event handler
     */

  }, {
    key: "_handlePageResize",
    value: function _handlePageResize() {
      var _this23 = this;

      this.updateSize(); // In iOS webview, if element size depends on document size,
      // it'll be measured incorrectly in resize event
      //
      // https://bugs.webkit.org/show_bug.cgi?id=170595
      // https://hackernoon.com/onresize-event-broken-in-mobile-safari-d8469027bf4d

      if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
        setTimeout(function () {
          _this23.updateSize();
        }, 500);
      }
    }
    /**
     * Page scroll offset is used
     * to get correct coordinates
     * relative to PhotoSwipe viewport.
     */

  }, {
    key: "_updatePageScrollOffset",
    value: function _updatePageScrollOffset() {
      this.setScrollOffset(0, window.pageYOffset);
    }
  }, {
    key: "setScrollOffset",
    value: function setScrollOffset(x, y) {
      this.offset.x = x;
      this.offset.y = y;
      this.dispatch('updateScrollOffset');
    }
    /**
     * Create main HTML structure of PhotoSwipe,
     * and add it to DOM
     */

  }, {
    key: "_createMainStructure",
    value: function _createMainStructure() {
      // root DOM element of PhotoSwipe (.pswp)
      this.element = createElement('pswp');
      this.element.setAttribute('tabindex', -1);
      this.element.setAttribute('role', 'dialog'); // template is legacy prop

      this.template = this.element; // Background is added as a separate element,
      // as animating opacity is faster than animating rgba()

      this.bg = createElement('pswp__bg', false, this.element);
      this.scrollWrap = createElement('pswp__scroll-wrap', false, this.element);
      this.container = createElement('pswp__container', false, this.scrollWrap);
      this.mainScroll.appendHolders();
      this.ui = new UI(this);
      this.ui.init(); // append to DOM

      (this.options.appendToEl || document.body).appendChild(this.element);
    }
    /**
     * Get position and dimensions of small thumbnail
     *   {x:,y:,w:}
     *
     * Height is optional (calculated based on the large image)
     */

  }, {
    key: "getThumbBounds",
    value: function getThumbBounds() {
      return _getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
    }
    /**
     * If the PhotoSwipe can have continious loop
     * @returns Boolean
     */

  }, {
    key: "canLoop",
    value: function canLoop() {
      return this.options.loop && this.getNumItems() > 2;
    }
  }, {
    key: "_prepareOptions",
    value: function _prepareOptions(options) {
      if (window.matchMedia('(prefers-reduced-motion), (update: slow)').matches) {
        options.showHideAnimationType = 'none';
        options.zoomAnimationDuration = 0;
      }

      this.options = _objectSpread(_objectSpread({}, defaultOptions), options);
    }
  }]);

  return PhotoSwipe;
}(PhotoSwipeBase);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoSwipe);

/***/ })

}]);