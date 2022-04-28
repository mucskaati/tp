/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/photoswipe-lightbox.esm.js":
/*!*************************************************!*\
  !*** ./resources/js/photoswipe-lightbox.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
  * PhotoSwipe Lightbox 5.2.0-beta.3 - https://photoswipe.com
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
 * Apply width and height CSS properties to element
 */


function setWidthHeight(el, w, h) {
  el.style.width = typeof w === 'number' ? w + 'px' : w;
  el.style.height = typeof h === 'number' ? h + 'px' : h;
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
}
/**
 * @param {*} v
 * @returns Boolean
 */


function isClass(fn) {
  return typeof fn === 'function' && /^\s*class\s+/.test(fn.toString());
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
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this._filters[name]) {
        this._filters[name].forEach(function (filter) {
          args[0] = filter.fn.apply(_this, args);
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
      var _this2 = this;

      if (this.pswp) {
        return this.pswp.dispatch(name, details);
      }

      var event = new PhotoSwipeEvent(name, details);

      if (!this._listeners) {
        return event;
      }

      if (this._listeners[name]) {
        this._listeners[name].forEach(function (listener) {
          listener.call(_this2, event);
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
      var _this3 = this;

      if (this.placeholder && !this.keepPlaceholder()) {
        // With delay, as image might be loaded, but not rendered
        setTimeout(function () {
          if (_this3.placeholder) {
            _this3.placeholder.destroy();

            _this3.placeholder = null;
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
      var _this4 = this;

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
          _this4.onLoaded();
        };

        this.element.onerror = function () {
          _this4.onError();
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
      var _this5 = this;

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
            if (_this5.element && _this5.element.tagName === 'IMG') {
              _this5.element.decode().then(function () {
                _this5.isDecoding = false;
                requestAnimationFrame(function () {
                  _this5.appendImage();
                });
              })["catch"](function () {
                _this5.isDecoding = false;
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
/**
 * PhotoSwipe lightbox
 *
 * - If user has unsupported browser it falls back to default browser action (just opens URL)
 * - Binds click event to links that should open PhotoSwipe
 * - parses DOM strcture for PhotoSwipe (retrieves large image URLs and sizes)
 * - Initializes PhotoSwipe
 *
 *
 * Loader options use the same object as PhotoSwipe, and supports such options:
 *
 * gallery - Element | Element[] | NodeList | string selector for the gallery element
 * children - Element | Element[] | NodeList | string selector for the gallery children
 *
 */


var PhotoSwipeLightbox = /*#__PURE__*/function (_PhotoSwipeBase) {
  _inherits(PhotoSwipeLightbox, _PhotoSwipeBase);

  var _super2 = _createSuper(PhotoSwipeLightbox);

  function PhotoSwipeLightbox(options) {
    var _this6;

    _classCallCheck(this, PhotoSwipeLightbox);

    _this6 = _super2.call(this);
    _this6.options = options || {};
    _this6._uid = 0;
    return _this6;
  }

  _createClass(PhotoSwipeLightbox, [{
    key: "init",
    value: function init() {
      var _this7 = this;

      this.onThumbnailsClick = this.onThumbnailsClick.bind(this); // Bind click events to each gallery

      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(function (galleryElement) {
        galleryElement.addEventListener('click', _this7.onThumbnailsClick, false);
      });
    }
  }, {
    key: "onThumbnailsClick",
    value: function onThumbnailsClick(e) {
      // Exit and allow default browser action if:
      if (specialKeyUsed(e) // ... if clicked with a special key (ctrl/cmd...)
      || window.pswp // ... if PhotoSwipe is already open
      || window.navigator.onLine === false) {
        // ... if offline
        return;
      } // If both clientX and clientY are 0 or not defined,
      // the event is likely triggered by keyboard,
      // so we do not pass the initialPoint
      //
      // Note that some screen readers emulate the mouse position,
      // so it's not ideal way to detect them.
      //


      var initialPoint = {
        x: e.clientX,
        y: e.clientY
      };

      if (!initialPoint.x && !initialPoint.y) {
        initialPoint = null;
      }

      var clickedIndex = this.getClickedIndex(e);
      clickedIndex = this.applyFilters('clickedIndex', clickedIndex, e, this);
      var dataSource = {
        gallery: e.currentTarget
      };

      if (clickedIndex >= 0) {
        e.preventDefault();
        this.loadAndOpen(clickedIndex, dataSource, initialPoint);
      }
    }
    /**
     * Get index of gallery item that was clicked.
     *
     * @param {Event} e click event
     */

  }, {
    key: "getClickedIndex",
    value: function getClickedIndex(e) {
      // legacy option
      if (this.options.getClickedIndexFn) {
        return this.options.getClickedIndexFn.call(this, e);
      }

      var clickedTarget = e.target;
      var childElements = getElementsFromOption(this.options.children, this.options.childSelector, e.currentTarget);
      var clickedChildIndex = childElements.findIndex(function (child) {
        return child === clickedTarget || child.contains(clickedTarget);
      });

      if (clickedChildIndex !== -1) {
        return clickedChildIndex;
      } else if (this.options.children || this.options.childSelector) {
        // click wasn't on a child element
        return -1;
      } // There is only one item (which is the gallery)


      return 0;
    }
    /**
     * Load and open PhotoSwipe
     *
     * @param {Integer} index
     * @param {Array|Object|null} dataSource
     * @param {Point|null} initialPoint
     */

  }, {
    key: "loadAndOpen",
    value: function loadAndOpen(index, dataSource, initialPoint) {
      // Check if the gallery is already open
      if (window.pswp) {
        return false;
      } // set initial index


      this.options.index = index; // define options for PhotoSwipe constructor

      this.options.initialPointerPos = initialPoint;
      this.shouldOpen = true;
      this.preload(index, dataSource);
      return true;
    }
    /**
     * Load the main module and the slide content by index
     *
     * @param {Integer} index
     */

  }, {
    key: "preload",
    value: function preload(index, dataSource) {
      var _this8 = this;

      var options = this.options;

      if (dataSource) {
        options.dataSource = dataSource;
      } // Add the main module


      var promiseArray = [];

      var pswpModuleType = _typeof(options.pswpModule);

      if (isClass(options.pswpModule)) {
        promiseArray.push(options.pswpModule);
      } else if (pswpModuleType === 'string') {
        throw new Error('pswpModule as string is no longer supported');
      } else if (pswpModuleType === 'function') {
        promiseArray.push(options.pswpModule());
      } else {
        throw new Error('pswpModule is not valid');
      } // Add custom-defined promise, if any


      if (typeof options.openPromise === 'function') {
        // allow developers to perform some task before opening
        promiseArray.push(options.openPromise());
      }

      if (options.preloadFirstSlide !== false && index >= 0) {
        this._preloadedContent = lazyLoadSlide(index, this);
      } // Wait till all promises resolve and open PhotoSwipe


      var uid = ++this._uid;
      Promise.all(promiseArray).then(function (iterableModules) {
        if (_this8.shouldOpen) {
          var mainModule = iterableModules[0];

          _this8._openPhotoswipe(mainModule, uid);
        }
      });
    }
  }, {
    key: "_openPhotoswipe",
    value: function _openPhotoswipe(module, uid) {
      var _this9 = this;

      // Cancel opening if UID doesn't match the current one
      // (if user clicked on another gallery item before current was loaded).
      //
      // Or if shouldOpen flag is set to false
      // (developer may modify it via public API)
      if (uid !== this._uid && this.shouldOpen) {
        return;
      }

      this.shouldOpen = false; // PhotoSwipe is already open

      if (window.pswp) {
        return;
      } // Pass data to PhotoSwipe and open init


      var pswp = _typeof(module) === 'object' ? new module["default"](null, this.options) // eslint-disable-line
      : new module(null, this.options); // eslint-disable-line

      this.pswp = pswp;
      window.pswp = pswp; // map listeners from Lightbox to PhotoSwipe Core

      Object.keys(this._listeners).forEach(function (name) {
        _this9._listeners[name].forEach(function (fn) {
          pswp.on(name, fn);
        });
      }); // same with filters

      Object.keys(this._filters).forEach(function (name) {
        _this9._filters[name].forEach(function (filter) {
          pswp.addFilter(name, filter.fn, filter.priority);
        });
      });

      if (this._preloadedContent) {
        pswp.contentLoader.addToCache(this._preloadedContent);
        this._preloadedContent = null;
      }

      pswp.on('destroy', function () {
        // clean up public variables
        _this9.pswp = null;
        window.pswp = null;
      });
      pswp.init();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this10 = this;

      if (this.pswp) {
        this.pswp.destroy();
      }

      this.shouldOpen = false;
      this._listeners = null;
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(function (galleryElement) {
        galleryElement.removeEventListener('click', _this10.onThumbnailsClick, false);
      });
    }
  }]);

  return PhotoSwipeLightbox;
}(PhotoSwipeBase);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoSwipeLightbox);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/photoswipe.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/photoswipe.css ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! PhotoSwipe main CSS by Dmytro Semenov | photoswipe.com */\r\n\r\n.pswp {\r\n  --pswp-bg: #000;\r\n  --pswp-placeholder-bg: #222;\r\n  \r\n\r\n  --pswp-root-z-index: 100000;\r\n  \r\n  --pswp-preloader-color: rgba(79, 79, 79, 0.4);\r\n  --pswp-preloader-color-secondary: rgba(255, 255, 255, 0.9);\r\n  \r\n  /* defined via js:\r\n  --pswp-transition-duration: 333ms; */\r\n  \r\n  --pswp-icon-color: #fff;\r\n  --pswp-icon-color-secondary: #4f4f4f;\r\n  --pswp-icon-stroke-color: #4f4f4f;\r\n  --pswp-icon-stroke-width: 2px;\r\n\r\n  --pswp-error-text-color: var(--pswp-icon-color);\r\n}\r\n\r\n\r\n/*\r\n\tStyles for basic PhotoSwipe (pswp) functionality (sliding area, open/close transitions)\r\n*/\r\n\r\n.pswp {\r\n\tposition: fixed;\r\n\tz-index: var(--pswp-root-z-index);\r\n\tdisplay: none;\r\n\ttouch-action: none;\r\n\toutline: 0;\r\n\topacity: 0.003;\r\n\tcontain: layout style size;\r\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n/* Prevents focus outline on the root element,\r\n  (it may be focused initially) */\r\n.pswp:focus {\r\n  outline: 0;\r\n}\r\n\r\n.pswp * {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.pswp img {\r\n  max-width: none;\r\n}\r\n\r\n.pswp--open {\r\n\tdisplay: block;\r\n}\r\n\r\n.pswp,\r\n.pswp__bg {\r\n\ttransform: translateZ(0);\r\n\twill-change: opacity;\r\n}\r\n\r\n.pswp__bg {\r\n  opacity: 0.005;\r\n\tbackground: var(--pswp-bg);\r\n}\r\n\r\n.pswp,\r\n.pswp__scroll-wrap {\r\n\toverflow: hidden;\r\n}\r\n\r\n.pswp,\r\n.pswp__scroll-wrap,\r\n.pswp__bg,\r\n.pswp__container,\r\n.pswp__item,\r\n.pswp__content,\r\n.pswp__img,\r\n.pswp__zoom-wrap {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.pswp {\r\n\tposition: fixed;\r\n}\r\n\r\n.pswp__img,\r\n.pswp__zoom-wrap {\r\n\twidth: auto;\r\n\theight: auto;\r\n}\r\n\r\n.pswp--click-to-zoom.pswp--zoom-allowed .pswp__img {\r\n\tcursor: zoom-in;\r\n}\r\n\r\n.pswp--click-to-zoom.pswp--zoomed-in .pswp__img {\r\n\tcursor: move;\r\n\tcursor: -webkit-grab;\r\n\tcursor: grab;\r\n}\r\n\r\n.pswp--click-to-zoom.pswp--zoomed-in .pswp__img:active {\r\n  cursor: -webkit-grabbing;\r\n  cursor: grabbing;\r\n}\r\n\r\n/* :active to override grabbing cursor */\r\n.pswp--no-mouse-drag.pswp--zoomed-in .pswp__img,\r\n.pswp--no-mouse-drag.pswp--zoomed-in .pswp__img:active,\r\n.pswp__img {\r\n\tcursor: zoom-out;\r\n}\r\n\r\n\r\n/* Prevent selection and tap highlights */\r\n.pswp__container,\r\n.pswp__img,\r\n.pswp__button {\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n.pswp__item {\r\n\t/* z-index for fade transition */\r\n\tz-index: 1;\r\n\toverflow: hidden;\r\n}\r\n\r\n.pswp__hidden {\r\n\tdisplay: none !important;\r\n}\r\n\r\n/* Allow to click through pswp__content element, but not its children */\r\n.pswp__content {\r\n  pointer-events: none;\r\n}\r\n.pswp__content > * {\r\n  pointer-events: auto;\r\n}\r\n\r\n\r\n/*\r\n\r\n  PhotoSwipe UI\r\n\r\n*/\r\n\r\n/*\r\n\tError message appears when image is not loaded\r\n\t(JS option errorMsg controls markup)\r\n*/\r\n.pswp__error-msg-container {\r\n  display: grid;\r\n}\r\n.pswp__error-msg {\r\n\tmargin: auto;\r\n\tfont-size: 1em;\r\n\tline-height: 1;\r\n\tcolor: var(--pswp-error-text-color);\r\n}\r\n\r\n/*\r\nclass pswp__hide-on-close is applied to elements that\r\nshould hide (for example fade out) when PhotoSwipe is closed\r\nand show (for example fade in) when PhotoSwipe is opened\r\n */\r\n.pswp .pswp__hide-on-close {\r\n\topacity: 0.005;\r\n\twill-change: opacity;\r\n\ttransition: opacity var(--pswp-transition-duration) cubic-bezier(0.4, 0, 0.22, 1);\r\n\tz-index: 10; /* always overlap slide content */\r\n\tpointer-events: none; /* hidden elements should not be clickable */\r\n}\r\n\r\n/* class pswp--ui-visible is added when opening or closing transition starts */\r\n.pswp--ui-visible .pswp__hide-on-close {\r\n\topacity: 1;\r\n\tpointer-events: auto;\r\n}\r\n\r\n/* <button> styles, including css reset */\r\n.pswp__button {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 50px;\r\n\theight: 60px;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\toverflow: hidden;\r\n\tcursor: pointer;\r\n\tbackground: none;\r\n\tborder: 0;\r\n\tbox-shadow: none;\r\n\topacity: 0.85;\r\n\t-webkit-appearance: none;\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n.pswp__button:hover,\r\n.pswp__button:active,\r\n.pswp__button:focus {\r\n  transition: none;\r\n  padding: 0;\r\n  background: none;\r\n  border: 0;\r\n  box-shadow: none;\r\n  opacity: 1;\r\n}\r\n\r\n.pswp__button:disabled {\r\n  opacity: 0.3;\r\n  cursor: auto;\r\n}\r\n\r\n.pswp__icn {\r\n  fill: var(--pswp-icon-color);\r\n  color: var(--pswp-icon-color-secondary);\r\n}\r\n\r\n.pswp__icn {\r\n  position: absolute;\r\n  top: 14px;\r\n  left: 9px;\r\n  width: 32px;\r\n  height: 32px;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n}\r\n\r\n.pswp__icn-shadow {\r\n  stroke: var(--pswp-icon-stroke-color);\r\n  stroke-width: var(--pswp-icon-stroke-width);\r\n  fill: none;\r\n}\r\n\r\n.pswp__icn:focus {\r\n\toutline: 0;\r\n}\r\n\r\n/*\r\n\tdiv element that matches size of large image,\r\n\tlarge image loads on top of it,\r\n\tused when msrc is not provided\r\n*/\r\ndiv.pswp__img--placeholder,\r\n.pswp__img--with-bg {\r\n\tbackground: var(--pswp-placeholder-bg);\r\n}\r\n\r\n.pswp__top-bar {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 60px;\r\n\tdisplay: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n\tz-index: 10;\r\n\r\n\t/* allow events to pass through top bar itself */\r\n\tpointer-events: none !important;\r\n}\r\n.pswp__top-bar > * {\r\n  pointer-events: auto;\r\n  /* this makes transition significantly more smooth,\r\n     even though inner elements are not animated */\r\n  will-change: opacity;\r\n}\r\n\r\n\r\n/*\r\n\r\n  Close button\r\n\r\n*/\r\n.pswp__button--close {\r\n  margin-right: 6px;\r\n}\r\n\r\n\r\n/*\r\n\r\n  Arrow buttons\r\n\r\n*/\r\n.pswp__button--arrow {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 75px;\r\n  height: 100px;\r\n  top: 50%;\r\n  margin-top: -50px;\r\n}\r\n\r\n.pswp__button--arrow:disabled {\r\n  display: none;\r\n  cursor: default;\r\n}\r\n\r\n.pswp__button--arrow .pswp__icn {\r\n  top: 50%;\r\n  margin-top: -30px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: none;\r\n  border-radius: 0;\r\n}\r\n\r\n.pswp--one-slide .pswp__button--arrow {\r\n  display: none;\r\n}\r\n\r\n/* hide arrows on touch screens */\r\n.pswp--touch .pswp__button--arrow {\r\n  visibility: hidden;\r\n}\r\n\r\n/* show arrows only after mouse was used */\r\n.pswp--has_mouse .pswp__button--arrow {\r\n  visibility: visible;\r\n}\r\n\r\n.pswp__button--arrow--prev {\r\n  right: auto;\r\n  left: 0px;\r\n}\r\n\r\n.pswp__button--arrow--next {\r\n  right: 0px;\r\n}\r\n.pswp__button--arrow--next .pswp__icn {\r\n  left: auto;\r\n  right: 14px;\r\n  /* flip horizontally */\r\n  transform: scale(-1, 1);\r\n}\r\n\r\n/*\r\n\r\n  Zoom button\r\n\r\n*/\r\n.pswp__button--zoom {\r\n  display: none;\r\n}\r\n\r\n.pswp--zoom-allowed .pswp__button--zoom {\r\n  display: block;\r\n}\r\n\r\n/* \"+\" => \"-\" */\r\n.pswp--zoomed-in .pswp__zoom-icn-bar-v {\r\n  display: none;\r\n}\r\n\r\n\r\n/*\r\n\r\n  Loading indicator\r\n\r\n*/\r\n.pswp__preloader {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 50px;\r\n  height: 60px;\r\n  margin-right: auto;\r\n}\r\n\r\n.pswp__preloader .pswp__icn {\r\n  opacity: 0;\r\n  transition: opacity 0.2s linear;\r\n  -webkit-animation: pswp-clockwise 600ms linear infinite;\r\n          animation: pswp-clockwise 600ms linear infinite;\r\n}\r\n\r\n.pswp__preloader--active .pswp__icn {\r\n  opacity: 0.85;\r\n}\r\n\r\n@-webkit-keyframes pswp-clockwise {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes pswp-clockwise {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n\r\n/*\r\n\r\n  \"1 of 10\" counter\r\n\r\n*/\r\n.pswp__counter {\r\n  height: 30px;\r\n  margin: 15px 0 0 20px;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n  color: var(--pswp-icon-color);\r\n  text-shadow: 1px 1px 3px var(--pswp-icon-color-secondary);\r\n  opacity: 0.85;\r\n}\r\n\r\n.pswp--one-slide .pswp__counter {\r\n  display: none;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/css/photoswipe.css":
/*!**************************************!*\
  !*** ./resources/css/photoswipe.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./photoswipe.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/photoswipe.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * PhotoSwipe Dynamic Caption plugin v1.1.0
 * https://github.com/dimsemenov/photoswipe-dynamic-caption-plugin
 * 
 * By https://dimsemenov.com
 */

const defaultOptions = {
  captionContent: '.pswp-caption-content',
  type: 'auto',
  horizontalEdgeThreshold: 20,
  mobileCaptionOverlapRatio: 0.3,
  mobileLayoutBreakpoint: 600,
};

class PhotoSwipeDynamicCaption {
  constructor(lightbox, options) {
    this.options = {
      ...defaultOptions,
      ...options
    };

    this.lightbox = lightbox;

    this.lightbox.on('init', () => {
      this.initPlugin();
    });
  }

  initPlugin() {
    this.pswp = this.lightbox.pswp;
    this.isCaptionHidden = false;
    this.tempCaption = false;
    this.captionElement = false;

    this.pswp.on('uiRegister', () => {
      this.pswp.ui.registerElement({
        name: 'dynamic-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: '',
        onInit: (el) => {
          this.captionElement = el;
          this.initCaption();
        }
      });
    });
  }

  initCaption() {
    const { pswp } = this;

    pswp.on('change', () => {
      this.updateCaptionHTML(); 
      this.updateCurrentCaptionPosition();

      // make sure caption is displayed after slides are switched
      this.showCaption();
    });

    pswp.on('calcSlideSize', (e) => this.onCalcSlideSize(e));

    // hide caption if mainscroll is shifted (dragging)
    pswp.on('moveMainScroll', () => {
      if (!this.useMobileLayout()) {
        if (this.pswp.mainScroll.isShifted()) {
          this.hideCaption();
        } else {
          this.showCaption();
        }
      }
    });

    // hide caption if zoomed
    pswp.on('zoomPanUpdate', () => {
      if (pswp.currSlide.currZoomLevel > pswp.currSlide.zoomLevels.initial) {
        this.hideCaption();
      } else {
        this.showCaption();
      }
    });

    pswp.on('beforeZoomTo', (e) => {
      const { currSlide } = pswp;

      if (currSlide.__dcAdjustedPanAreaSize) {
        if (e.destZoomLevel > currSlide.zoomLevels.initial) {
          currSlide.panAreaSize.x = currSlide.__dcOriginalPanAreaSize.x;
          currSlide.panAreaSize.y = currSlide.__dcOriginalPanAreaSize.y;
        } else {
          // Restore panAreaSize after we zoom back to initial position
          currSlide.panAreaSize.x = currSlide.__dcAdjustedPanAreaSize.x;
          currSlide.panAreaSize.y = currSlide.__dcAdjustedPanAreaSize.y;
        }
      }
    });
  }

  useMobileLayout() {
    const { mobileLayoutBreakpoint } = this.options;

    if (typeof mobileLayoutBreakpoint === 'function') {
      return mobileLayoutBreakpoint.call(this);
    } else if (typeof mobileLayoutBreakpoint === 'number') {
      if (window.innerWidth < mobileLayoutBreakpoint) {
        return true;
      }
    }
    
    return false;
  }

  hideCaption() {
    if (!this.isCaptionHidden) {
      this.isCaptionHidden = true;
      this.captionElement.classList.add('pswp__dynamic-caption--faded');

      // Disable caption visibility with the delay, so it's not interactable 
      if (this.captionFadeTimeout) {
        clearTimeout(this.captionFadeTimeout);
      }
      this.captionFadeTimeout = setTimeout(() => {
        this.captionElement.style.visibility = 'hidden';
        this.captionFadeTimeout = null;
      }, 400);
    }
  }

  showCaption() {
    if (this.isCaptionHidden) {
      this.isCaptionHidden = false;
      this.captionElement.style.visibility = 'visible';
      
      clearTimeout(this.captionFadeTimeout);
      this.captionFadeTimeout = setTimeout(() => {
        this.captionElement.classList.remove('pswp__dynamic-caption--faded');
        this.captionFadeTimeout = null;
      }, 50);
    }
  }

  setCaptionPosition(x, y) {
    const isOnHorizontalEdge = (x <= this.options.horizontalEdgeThreshold);
    this.captionElement.classList[
      isOnHorizontalEdge ? 'add' : 'remove'
    ]('pswp__dynamic-caption--on-hor-edge');

    this.captionElement.style.left = x + 'px';
    this.captionElement.style.top = y + 'px';
  }

  setCaptionWidth(captionEl, width) {
    if (!width) {
      captionEl.style.removeProperty('width');
    } else {
      captionEl.style.width = width + 'px';
    }
  }

  setCaptionType(captionEl, type) {
    const prevType = captionEl.dataset.pswpCaptionType;
    if (type !== prevType) {
      captionEl.classList.add('pswp__dynamic-caption--' + type);
      captionEl.classList.remove('pswp__dynamic-caption--' + prevType);
      captionEl.dataset.pswpCaptionType = type;
    }
  }

  updateCurrentCaptionPosition() {
    const slide = this.pswp.currSlide;

    if (!slide.dynamicCaptionType) {
      return;
    }

    if (slide.dynamicCaptionType === 'mobile') {
      this.setCaptionType(this.captionElement, slide.dynamicCaptionType);
      
      this.captionElement.style.removeProperty('left');
      this.captionElement.style.removeProperty('top');
      this.setCaptionWidth(this.captionElement, false);
      return;
    }

    const zoomLevel = slide.zoomLevels.initial;
    const imageWidth = Math.ceil(slide.width * zoomLevel);
    const imageHeight = Math.ceil(slide.height * zoomLevel);

    
    this.setCaptionType(this.captionElement, slide.dynamicCaptionType);
    if (slide.dynamicCaptionType === 'aside') {
      this.setCaptionPosition(
        this.pswp.currSlide.bounds.center.x + imageWidth,
        this.pswp.currSlide.bounds.center.y
      );
      this.setCaptionWidth(this.captionElement, false);
    } else if (slide.dynamicCaptionType === 'below') {
      this.setCaptionPosition(
        this.pswp.currSlide.bounds.center.x,
        this.pswp.currSlide.bounds.center.y + imageHeight
      );
      this.setCaptionWidth(this.captionElement, imageWidth);
    }
  }

  /**
   * Temporary caption is used to measure size for the current/next/previous captions,
   * (it has visibility:hidden)
   */
  createTemporaryCaption() {
    this.tempCaption = document.createElement('div');
    this.tempCaption.className = 'pswp__dynamic-caption pswp__dynamic-caption--temp';
    this.tempCaption.style.visibility = 'hidden';
    this.tempCaption.setAttribute('aria-hidden', 'true');
    // move caption element, so it's after BG,
    // so that other controls can freely overlap it
    this.pswp.bg.after(this.captionElement); 
    this.captionElement.after(this.tempCaption);
  }

  onCalcSlideSize(e) {
    const { slide } = e;

    const captionHTML = this.getCaptionHTML(e.slide);
    let useMobileVersion = false;
    let captionSize;

    if (!captionHTML) {
      slide.dynamicCaptionType = false;
      return;
    }

    this.storeOriginalPanAreaSize(slide);

    slide.bounds.update(slide.zoomLevels.initial);
    
    if (this.useMobileLayout()) {
      slide.dynamicCaptionType = 'mobile';
      useMobileVersion = true;
    } else {
      if (this.options.type === 'auto') {
        if (slide.bounds.center.x > slide.bounds.center.y) {
          slide.dynamicCaptionType = 'aside';
        } else {
          slide.dynamicCaptionType = 'below';
        }
      } else {
        slide.dynamicCaptionType = this.options.type;
      }
    } 

    const imageWidth = Math.ceil(slide.width * slide.zoomLevels.initial);
    const imageHeight = Math.ceil(slide.height * slide.zoomLevels.initial);

    if (!this.tempCaption) {
      this.createTemporaryCaption();
    }

    this.setCaptionType(this.tempCaption, slide.dynamicCaptionType);

    if (slide.dynamicCaptionType === 'aside') {
      this.tempCaption.innerHTML = this.getCaptionHTML(e.slide);
      this.setCaptionWidth(this.tempCaption, false);
      captionSize = this.measureCaptionSize(this.tempCaption, e.slide);
      const captionWidth = captionSize.x;      

      const horizontalEnding = imageWidth + slide.bounds.center.x;
      const horizontalLeftover = (slide.panAreaSize.x - horizontalEnding);

      if (horizontalLeftover <= captionWidth) {
        slide.panAreaSize.x -= captionWidth;
        this.recalculateZoomLevelAndBounds(slide);
      } else {
        // do nothing, caption will fit aside without any adjustments
      }
    } else if (slide.dynamicCaptionType === 'below' || useMobileVersion) {
      this.setCaptionWidth(
        this.tempCaption, 
        useMobileVersion ? this.pswp.viewportSize.x : imageWidth
      );
      this.tempCaption.innerHTML = this.getCaptionHTML(e.slide);
      captionSize = this.measureCaptionSize(this.tempCaption, e.slide);
      const captionHeight = captionSize.y;


      // vertical ending of the image
      const verticalEnding = imageHeight + slide.bounds.center.y;

      // height between bottom of the screen and ending of the image
      // (before any adjustments applied) 
      const verticalLeftover = slide.panAreaSize.y - verticalEnding;
      const initialPanAreaHeight = slide.panAreaSize.y;

      if (verticalLeftover <= captionHeight) {
        // lift up the image to give more space for caption
        slide.panAreaSize.y -= Math.min((captionHeight - verticalLeftover) * 2, captionHeight);

        // we reduce viewport size, thus we need to update zoom level and pan bounds
        this.recalculateZoomLevelAndBounds(slide);

        const maxPositionX = slide.panAreaSize.x * this.options.mobileCaptionOverlapRatio / 2;

        // Do not reduce viewport height if too few space available
        if (useMobileVersion 
            && slide.bounds.center.x > maxPositionX) {
          // Restore the default position
          slide.panAreaSize.y = initialPanAreaHeight;
          this.recalculateZoomLevelAndBounds(slide);
        }
      }

      
      
      // if (this.useMobileLayout && slide.bounds.center.x > 100) {
      //   // do nothing, caption will overlap the bottom part of the image
      // } else if (verticalLeftover <= captionHeight) {
        
      // } else {
      //   // do nothing, caption will fit below the image without any adjustments
      // }
    } else {
      // mobile
    }

    this.storeAdjustedPanAreaSize(slide);

    if (slide === this.pswp.currSlide) {
      this.updateCurrentCaptionPosition();
    }
  }

  measureCaptionSize(captionEl, slide) {
    const rect = captionEl.getBoundingClientRect();
    const event = this.pswp.dispatch('dynamicCaptionMeasureSize', {
      captionEl,
      slide,
      captionSize: {
        x: rect.width,
        y: rect.height
      }
    });
    return event.captionSize;
  }

  recalculateZoomLevelAndBounds(slide) {
    slide.zoomLevels.update(slide.width, slide.height, slide.panAreaSize);
    slide.bounds.update(slide.zoomLevels.initial);
  }

  storeAdjustedPanAreaSize(slide) {
    if (!slide.__dcAdjustedPanAreaSize) {
      slide.__dcAdjustedPanAreaSize = {};
    }
    slide.__dcAdjustedPanAreaSize.x = slide.panAreaSize.x;
    slide.__dcAdjustedPanAreaSize.y = slide.panAreaSize.y;
  }

  storeOriginalPanAreaSize(slide) {
    if (!slide.__dcOriginalPanAreaSize) {
      slide.__dcOriginalPanAreaSize = {};
    }
    slide.__dcOriginalPanAreaSize.x = slide.panAreaSize.x;
    slide.__dcOriginalPanAreaSize.y = slide.panAreaSize.y;
  }

  getCaptionHTML(slide) {
    if (typeof this.options.captionContent === 'function') {
      return this.options.captionContent.call(this, slide);
    }

    const currSlideElement = slide.data.element;
    let captionHTML = '';
    if (currSlideElement) {
      const hiddenCaption = currSlideElement.querySelector(this.options.captionContent);
      if (hiddenCaption) {
        // get caption from element with class pswp-caption-content
        captionHTML = hiddenCaption.innerHTML;
      } else {
        const img = currSlideElement.querySelector('img');
        if (img) {
          // get caption from alt attribute
          captionHTML = img.getAttribute('alt');
        }
      }
    }
    return captionHTML;
  }

  updateCaptionHTML() {
    const captionHTML = this.getCaptionHTML(pswp.currSlide);
    this.captionElement.style.visibility = captionHTML ? 'visible' :  'hidden';
    this.captionElement.innerHTML = captionHTML || '';
    this.pswp.dispatch('dynamicCaptionUpdateHTML', { 
      captionElement: this.captionElement
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotoSwipeDynamicCaption);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "resources_js_photoswipe_esm_js") return "js/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/lightbox": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./resources/js/lightbox.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _photoswipe_lightbox_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photoswipe-lightbox.esm.js */ "./resources/js/photoswipe-lightbox.esm.js");
/* harmony import */ var photoswipe_dynamic_caption_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe-dynamic-caption-plugin */ "./node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js");
/* harmony import */ var _css_photoswipe_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/photoswipe.css */ "./resources/css/photoswipe.css");
/* Photo Swipe Lightbox */




var lightboxImages = document.querySelectorAll("#nomenclator-gallery img");
lightboxImages.forEach(function (image) {
  if (image.parentElement.tagName.toLowerCase() == "a") {
    image.parentElement.dataset.pswpWidth = image.naturalWidth;
    image.parentElement.dataset.pswpHeight = image.naturalHeight;
  }
});
var lightbox = new _photoswipe_lightbox_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  gallery: "#nomenclator-gallery",
  children: "a",
  pswpModule: function pswpModule() {
    return __webpack_require__.e(/*! import() */ "resources_js_photoswipe_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! ./photoswipe.esm.js */ "./resources/js/photoswipe.esm.js"));
  }
});
var captionPlugin = new photoswipe_dynamic_caption_plugin__WEBPACK_IMPORTED_MODULE_1__["default"](lightbox, {
  type: "below",
  captionContent: ".pswp-caption-content"
});
lightbox.init();
})();

/******/ })()
;