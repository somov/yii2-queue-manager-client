/*!
 * @license
 * yii2qmc 1.0.4 <https://github.com/somov/yii2-queue-manager-client#readme>
 * Copyright: somov.nn@gmail.com
 * Licensed under MIT
 */

(function ($$1, document, window$1) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($$1);
  var document__default = /*#__PURE__*/_interopDefaultLegacy(document);
  var window__default = /*#__PURE__*/_interopDefaultLegacy(window$1);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }
  }

  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }

    return privateMap.get(receiver);
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }

  function _classApplyDescriptorGet$2(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet$2(receiver, descriptor);
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  /**
   *
   */
  var CSSClassNameMixin = {
    /**
     * @type {null|string}
     */
    classPrefix: null,

    /**
     * @param {string} name
     * @return {*}
     */
    getClassName: function getClassName(name) {
      if (this.classPrefix === null || name.startsWith(this.classPrefix)) {
        return name;
      }

      return this.classPrefix + name;
    }
  };

  /**
   * @file fullscreen-api.js
   * @module fullscreen-api
   * @private
   */
  /**
   * Store the browser-specific methods for the fullscreen API.
   *
   * @type {Object}
   * @see [Specification]{@link https://fullscreen.spec.whatwg.org}
   * @see [Map Approach From Screenfull.js]{@link https://github.com/sindresorhus/screenfull.js}
   */

  var FullscreenApi = {
    prefixed: true
  }; // browser API methods

  var apiMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror', 'fullscreen'], // WebKit
  ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror', '-webkit-full-screen'], // Mozilla
  ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror', '-moz-full-screen'], // Microsoft
  ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError', '-ms-fullscreen']];
  var specApi = apiMap[0];
  var browserApi; // determine the supported set of functions

  for (var i = 0; i < apiMap.length; i++) {
    // check for exitFullscreen function
    if (apiMap[i][1] in document__default['default']) {
      browserApi = apiMap[i];
      break;
    }
  } // map the browser API names to the spec API names


  if (browserApi) {
    for (var _i = 0; _i < browserApi.length; _i++) {
      FullscreenApi[specApi[_i]] = browserApi[_i];
    }

    FullscreenApi.prefixed = browserApi[0] !== specApi[0];
  }

  /**
   * @file obj.js
   * @module obj
   */

  /**
   * @callback obj:EachCallback
   *
   * @param {Mixed} value
   *        The current key for the object that is being iterated over.
   *
   * @param {string} key
   *        The current key-value for object that is being iterated over
   */

  /**
   * @callback obj:ReduceCallback
   *
   * @param {Mixed} accum
   *        The value that is accumulating over the reduce loop.
   *
   * @param {Mixed} value
   *        The current key for the object that is being iterated over.
   *
   * @param {string} key
   *        The current key-value for object that is being iterated over
   *
   * @return {Mixed}
   *         The new accumulated value.
   */
  var toString = Object.prototype.toString;
  /**
   * Get the keys of an Object
   *
   * @param {Object}
   *        The Object to get the keys from
   *
   * @return {string[]}
   *         An array of the keys from the object. Returns an empty array if the
   *         object passed in was invalid or had no keys.
   *
   * @private
   */

  var keys = function keys(object) {
    return isObject$1(object) ? Object.keys(object) : [];
  };
  /**
   * Array-like iteration for objects.
   *
   * @param {Object} object
   *        The object to iterate over
   *
   * @param {obj:EachCallback} fn
   *        The callback function which is called for each key in the object.
   */


  function each(object, fn) {
    keys(object).forEach(function (key) {
      return fn(object[key], key);
    });
  }
  /**
   * Returns whether a value is an object of any kind - including DOM nodes,
   * arrays, regular expressions, etc. Not functions, though.
   *
   * This avoids the gotcha where using `typeof` on a `null` value
   * results in `'object'`.
   *
   * @param  {Object} value
   * @return {boolean}
   */

  function isObject$1(value) {
    return !!value && typeof value === 'object';
  }
  /**
   * Returns whether an object appears to be a "plain" object - that is, a
   * direct instance of `Object`.
   *
   * @param  {Object} value
   * @return {boolean}
   */

  function isPlain(value) {
    return isObject$1(value) && toString.call(value) === '[object Object]' && value.constructor === Object;
  }

  /**
   * @file computed-style.js
   * @module computed-style
   */
  /**
   * A safe getComputedStyle.
   *
   * This is needed because in Firefox, if the player is loaded in an iframe with
   * `display:none`, then `getComputedStyle` returns `null`, so, we do a
   * null-check to make sure that the player doesn't break in these cases.
   *
   * @function
   * @param    {Element} el
   *           The element you want the computed style of
   *
   * @param    {string} prop
   *           The property name you want
   *
   * @see      https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */

  function computedStyle(el, prop) {
    if (!el || !prop) {
      return '';
    }

    if (typeof window__default['default'].getComputedStyle === 'function') {
      var computedStyleValue = window__default['default'].getComputedStyle(el);
      return computedStyleValue ? computedStyleValue.getPropertyValue(prop) || computedStyleValue[prop] : '';
    }

    return '';
  }

  /**
   * @file browser.js
   * @module browser
   */
  var USER_AGENT = window__default['default'].navigator && window__default['default'].navigator.userAgent || '';
  var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
  webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;
  /**
   * Whether or not this device is an iPod.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  /iPod/i.test(USER_AGENT);
  /**
   * The detected iOS version - or `null`.
   *
   * @static
   * @const
   * @type {string|null}
   */

  (function () {
    var match = USER_AGENT.match(/OS (\d+)_/i);

    if (match && match[1]) {
      return match[1];
    }

    return null;
  })();
  /**
   * Whether or not this is an Android device.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  var IS_ANDROID = /Android/i.test(USER_AGENT);
  /**
   * The detected Android version - or `null`.
   *
   * @static
   * @const
   * @type {number|string|null}
   */

  (function () {
    // This matches Android Major.Minor.Patch versions
    // ANDROID_VERSION is Major.Minor as a Number, if Minor isn't available, then only Major is returned
    var match = USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);

    if (!match) {
      return null;
    }

    var major = match[1] && parseFloat(match[1]);
    var minor = match[2] && parseFloat(match[2]);

    if (major && minor) {
      return parseFloat(match[1] + '.' + match[2]);
    } else if (major) {
      return major;
    }

    return null;
  })();
  /**
   * Whether or not this is Mozilla Firefox.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  /Firefox/i.test(USER_AGENT);
  /**
   * Whether or not this is Microsoft Edge.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  var IS_EDGE = /Edg/i.test(USER_AGENT);
  /**
   * Whether or not this is Google Chrome.
   *
   * This will also be `true` for Chrome on iOS, which will have different support
   * as it is actually Safari under the hood.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  var IS_CHROME = !IS_EDGE && (/Chrome/i.test(USER_AGENT) || /CriOS/i.test(USER_AGENT));
  /**
   * The detected Google Chrome version - or `null`.
   *
   * @static
   * @const
   * @type {number|null}
   */

  (function () {
    var match = USER_AGENT.match(/(Chrome|CriOS)\/(\d+)/);

    if (match && match[2]) {
      return parseFloat(match[2]);
    }

    return null;
  })();
  /**
   * The detected Internet Explorer version - or `null`.
   *
   * @static
   * @const
   * @type {number|null}
   */

  (function () {
    var result = /MSIE\s(\d+)\.\d/.exec(USER_AGENT);
    var version = result && parseFloat(result[1]);

    if (!version && /Trident\/7.0/i.test(USER_AGENT) && /rv:11.0/.test(USER_AGENT)) {
      // IE 11 has a different user agent string than other IE versions
      version = 11.0;
    }

    return version;
  })();
  /**
   * Whether or not this is desktop Safari.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  var IS_SAFARI = /Safari/i.test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE;
  /**
   * Whether or not this is a Windows machine.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  /Windows/i.test(USER_AGENT);
  /**
   * Whether or not this device is touch-enabled.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  var TOUCH_ENABLED = Boolean(isReal() && ('ontouchstart' in window__default['default'] || window__default['default'].navigator.maxTouchPoints || window__default['default'].DocumentTouch && window__default['default'].document instanceof window__default['default'].DocumentTouch));
  /**
   * Whether or not this device is an iPad.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  var IS_IPAD = /iPad/i.test(USER_AGENT) || IS_SAFARI && TOUCH_ENABLED && !/iPhone/i.test(USER_AGENT);
  /**
   * Whether or not this device is an iPhone.
   *
   * @static
   * @const
   * @type {Boolean}
   */
  // The Facebook app's UIWebView identifies as both an iPhone and iPad, so
  // to identify iPhones, we need to exclude iPads.
  // http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/

  /iPhone/i.test(USER_AGENT) && !IS_IPAD;

  /**
   * @file dom.js
   * @module dom
   */
  /**
   * Detect if a value is a string with any non-whitespace characters.
   *
   * @private
   * @param  {string} str
   *         The string to check
   *
   * @return {boolean}
   *         Will be `true` if the string is non-blank, `false` otherwise.
   *
   */

  function isNonBlankString(str) {
    // we use str.trim as it will trim any whitespace characters
    // from the front or back of non-whitespace characters. aka
    // Any string that contains non-whitespace characters will
    // still contain them after `trim` but whitespace only strings
    // will have a length of 0, failing this check.
    return typeof str === 'string' && Boolean(str.trim());
  }
  /**
   * Throws an error if the passed string has whitespace. This is used by
   * class methods to be relatively consistent with the classList API.
   *
   * @private
   * @param  {string} str
   *         The string to check for whitespace.
   *
   * @throws {Error}
   *         Throws an error if there is whitespace in the string.
   */


  function throwIfWhitespace(str) {
    // str.indexOf instead of regex because str.indexOf is faster performance wise.
    if (str.indexOf(' ') >= 0) {
      throw new Error('class has illegal whitespace characters');
    }
  }
  /**
   * Produce a regular expression for matching a className within an elements className.
   *
   * @private
   * @param  {string} className
   *         The className to generate the RegExp for.
   *
   * @return {RegExp}
   *         The RegExp that will check for a specific `className` in an elements
   *         className.
   */


  function classRegExp(className) {
    return new RegExp('(^|\\s)' + className + '($|\\s)');
  }
  /**
   * Whether the current DOM interface appears to be real (i.e. not simulated).
   *
   * @return {boolean}
   *         Will be `true` if the DOM appears to be real, `false` otherwise.
   */


  function isReal() {
    // Both document and window will never be undefined thanks to `global`.
    return document__default['default'] === window__default['default'].document;
  }
  /**
   * Determines, via duck typing, whether or not a value is a DOM element.
   *
   * @param  {Mixed} value
   *         The value to check.
   *
   * @return {boolean}
   *         Will be `true` if the value is a DOM element, `false` otherwise.
   */

  function isEl(value) {
    return isObject$1(value) && value.nodeType === 1;
  }
  /**
   * Creates functions to query the DOM using a given method.
   *
   * @private
   * @param   {string} method
   *          The method to create the query with.
   *
   * @return  {Function}
   *          The query method
   */

  function createQuerier(method) {
    return function (selector, context) {
      if (!isNonBlankString(selector)) {
        return document__default['default'][method](null);
      }

      if (isNonBlankString(context)) {
        context = document__default['default'].querySelector(context);
      }

      var ctx = isEl(context) ? context : document__default['default'];
      return ctx[method] && ctx[method](selector);
    };
  }
  /**
   * Creates an element and applies properties, attributes, and inserts content.
   *
   * @param  {string} [tagName='div']
   *         Name of tag to be created.
   *
   * @param  {Object} [properties={}]
   *         Element properties to be applied.
   *
   * @param  {Object} [attributes={}]
   *         Element attributes to be applied.
   *
   * @param {module:dom~ContentDescriptor} content
   *        A content descriptor object.
   *
   * @return {Element}
   *         The element that was created.
   */


  function createEl(tagName, properties, attributes, content) {
    if (tagName === void 0) {
      tagName = 'div';
    }

    if (properties === void 0) {
      properties = {};
    }

    if (attributes === void 0) {
      attributes = {};
    }

    var el = document__default['default'].createElement(tagName);
    Object.getOwnPropertyNames(properties).forEach(function (propName) {
      var val = properties[propName]; // See #2176
      // We originally were accepting both properties and attributes in the
      // same object, but that doesn't work so well.

      if (propName.indexOf('aria-') !== -1 || propName === 'role' || propName === 'type') {
        el.setAttribute(propName, val);
      } else if (propName === 'style' && typeof val === 'object') {
        Object.getOwnPropertyNames(val).forEach(function (styleName) {
          el.style[styleName] = val[styleName];
        });
      } else if (propName === 'textContent') {
        // Handle textContent since it's not supported everywhere and we have a
        // method for it.
        textContent(el, val);
      } else if (el[propName] !== val || propName === 'tabIndex') {
        el[propName] = val;
      }
    });
    Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
      el.setAttribute(attrName, attributes[attrName]);
    });

    if (content) {
      appendContent(el, content);
    }

    return el;
  }
  /**
   * Injects text into an element, replacing any existing contents entirely.
   *
   * @param  {Element} el
   *         The element to add text content into
   *
   * @param  {string} text
   *         The text content to add.
   *
   * @return {Element}
   *         The element with added text content.
   */

  function textContent(el, text) {
    if (typeof el.textContent === 'undefined') {
      el.innerText = text;
    } else {
      el.textContent = text;
    }

    return el;
  }
  /**
   * Check if an element has a class name.
   *
   * @param  {Element} element
   *         Element to check
   *
   * @param  {string} classToCheck
   *         Class name to check for
   *
   * @return {boolean}
   *         Will be `true` if the element has a class, `false` otherwise.
   *
   * @throws {Error}
   *         Throws an error if `classToCheck` has white space.
   */

  function hasClass(element, classToCheck) {
    throwIfWhitespace(classToCheck);

    if (element.classList) {
      return element.classList.contains(classToCheck);
    }

    return classRegExp(classToCheck).test(element.className);
  }
  /**
   * Add a class name to an element.
   *
   * @param  {Element} element
   *         Element to add class name to.
   *
   * @param  {string} classToAdd
   *         Class name to add.
   *
   * @return {Element}
   *         The DOM element with the added class name.
   */

  function addClass(element, classToAdd) {
    if (element.classList) {
      element.classList.add(classToAdd); // Don't need to `throwIfWhitespace` here because `hasElClass` will do it
      // in the case of classList not being supported.
    } else if (!hasClass(element, classToAdd)) {
      element.className = (element.className + ' ' + classToAdd).trim();
    }

    return element;
  }
  /**
   * Remove a class name from an element.
   *
   * @param  {Element} element
   *         Element to remove a class name from.
   *
   * @param  {string} classToRemove
   *         Class name to remove
   *
   * @return {Element}
   *         The DOM element with class name removed.
   */

  function removeClass(element, classToRemove) {
    if (element.classList) {
      element.classList.remove(classToRemove);
    } else {
      throwIfWhitespace(classToRemove);
      element.className = element.className.split(/\s+/).filter(function (c) {
        return c !== classToRemove;
      }).join(' ');
    }

    return element;
  }
  /**
   * The callback definition for toggleClass.
   *
   * @callback module:dom~PredicateCallback
   * @param    {Element} element
   *           The DOM element of the Component.
   *
   * @param    {string} classToToggle
   *           The `className` that wants to be toggled
   *
   * @return   {boolean|undefined}
   *           If `true` is returned, the `classToToggle` will be added to the
   *           `element`. If `false`, the `classToToggle` will be removed from
   *           the `element`. If `undefined`, the callback will be ignored.
   */

  /**
   * Adds or removes a class name to/from an element depending on an optional
   * condition or the presence/absence of the class name.
   *
   * @param  {Element} element
   *         The element to toggle a class name on.
   *
   * @param  {string} classToToggle
   *         The class that should be toggled.
   *
   * @param  {boolean|module:dom~PredicateCallback} [predicate]
   *         See the return value for {@link module:dom~PredicateCallback}
   *
   * @return {Element}
   *         The element with a class that has been toggled.
   */

  function toggleClass(element, classToToggle, predicate) {
    // This CANNOT use `classList` internally because IE11 does not support the
    // second parameter to the `classList.toggle()` method! Which is fine because
    // `classList` will be used by the add/remove functions.
    var has = hasClass(element, classToToggle);

    if (typeof predicate === 'function') {
      predicate = predicate(element, classToToggle);
    }

    if (typeof predicate !== 'boolean') {
      predicate = !has;
    } // If the necessary class operation matches the current state of the
    // element, no action is required.


    if (predicate === has) {
      return;
    }

    if (predicate) {
      addClass(element, classToToggle);
    } else {
      removeClass(element, classToToggle);
    }

    return element;
  }
  /**
   * Set the value of an element's attribute.
   *
   * @param {Element} el
   *        A DOM element.
   *
   * @param {string} attribute
   *        Attribute to set.
   *
   * @param {string} value
   *        Value to set the attribute to.
   */

  function setAttribute(el, attribute, value) {
    el.setAttribute(attribute, value);
  }
  /**
   * Remove an element's attribute.
   *
   * @param {Element} el
   *        A DOM element.
   *
   * @param {string} attribute
   *        Attribute to remove.
   */

  function removeAttribute(el, attribute) {
    el.removeAttribute(attribute);
  }
  /**
   * Identical to the native `getBoundingClientRect` function, but ensures that
   * the method is supported at all (it is in all browsers we claim to support)
   * and that the element is in the DOM before continuing.
   *
   * This wrapper function also shims properties which are not provided by some
   * older browsers (namely, IE8).
   *
   * Additionally, some browsers do not support adding properties to a
   * `ClientRect`/`DOMRect` object; so, we shallow-copy it with the standard
   * properties (except `x` and `y` which are not widely supported). This helps
   * avoid implementations where keys are non-enumerable.
   *
   * @param  {Element} el
   *         Element whose `ClientRect` we want to calculate.
   *
   * @return {Object|undefined}
   *         Always returns a plain object - or `undefined` if it cannot.
   */

  function getBoundingClientRect(el) {
    if (el && el.getBoundingClientRect && el.parentNode) {
      var rect = el.getBoundingClientRect();
      var result = {};
      ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(function (k) {
        if (rect[k] !== undefined) {
          result[k] = rect[k];
        }
      });

      if (!result.height) {
        result.height = parseFloat(computedStyle(el, 'height'));
      }

      if (!result.width) {
        result.width = parseFloat(computedStyle(el, 'width'));
      }

      return result;
    }
  }
  /**
   * Determines, via duck typing, whether or not a value is a text node.
   *
   * @param  {Mixed} value
   *         Check if this value is a text node.
   *
   * @return {boolean}
   *         Will be `true` if the value is a text node, `false` otherwise.
   */

  function isTextNode(value) {
    return isObject$1(value) && value.nodeType === 3;
  }
  /**
   * @param el
   * @return {boolean}
   */

  function isVisible(el) {
    var _el$style;

    if (isEl(el) === false) {
      return false;
    }

    var opacity = ((_el$style = el.style) == null ? void 0 : _el$style.opacity) !== '' ? parseFloat(el.style.opacity) : 1;

    if (opacity === 0 || computedStyle(el, 'visibility') === 'hidden') {
      return false;
    }

    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
  /**
   *
   * @param {Element} element
   * @param {string} cssClass
   * @param {string} searchClass
   * @param {function} compare
   */

  function switchClass(element, cssClass, searchClass, compare) {
    if (compare === void 0) {
      compare = function compare(c) {
        if (c.startsWith(searchClass)) {
          return c;
        }

        return '';
      };
    }

    var exist = '';
    element.classList.forEach(function (c) {
      if (exist.length === 0) {
        exist = compare(c);
      }
    });

    if (exist !== cssClass) {
      if (exist.length > 0) {
        removeClass(element, exist);
      }

      addClass(element, cssClass);
    }
  }
  /**
   * This is a mixed value that describes content to be injected into the DOM
   * via some method. It can be of the following types:
   *
   * Type       | Description
   * -----------|-------------
   * `string`   | The value will be normalized into a text node.
   * `Element`  | The value will be accepted as-is.
   * `TextNode` | The value will be accepted as-is.
   * `Array`    | A one-dimensional array of strings, elements, text nodes, or functions. These functions should return a string, element, or text node (any other return value, like an array, will be ignored).
   * `Function` | A function, which is expected to return a string, element, text node, or array - any of the other possible values described above. This means that a content descriptor could be a function that returns an array of functions, but those second-level functions must return strings, elements, or text nodes.
   *
   * @typedef {string|Element|TextNode|Array|Function} module:dom~ContentDescriptor
   */

  /**
   * Normalizes content for eventual insertion into the DOM.
   *
   * This allows a wide range of content definition methods, but helps protect
   * from falling into the trap of simply writing to `innerHTML`, which could
   * be an XSS concern.
   *
   * The content for an element can be passed in multiple types and
   * combinations, whose behavior is as follows:
   *
   * @param {module:dom~ContentDescriptor} content
   *        A content descriptor value.
   *
   * @return {Array}
   *         All of the content that was passed in, normalized to an array of
   *         elements or text nodes.
   */

  function normalizeContent(content) {
    // First, invoke content if it is a function. If it produces an array,
    // that needs to happen before normalization.
    if (typeof content === 'function') {
      content = content();
    } // Next up, normalize to an array, so one or many items can be normalized,
    // filtered, and returned.


    return (Array.isArray(content) ? content : [content]).map(function (value) {
      // First, invoke value if it is a function to produce a new value,
      // which will be subsequently normalized to a Node of some kind.
      if (typeof value === 'function') {
        value = value();
      }

      if (isEl(value) || isTextNode(value)) {
        return value;
      }

      if (typeof value === 'string' && /\S/.test(value)) {
        return document__default['default'].createTextNode(value);
      }
    }).filter(function (value) {
      return value;
    });
  }
  /**
   * Normalizes and appends content to an element.
   *
   * @param  {Element} el
   *         Element to append normalized content to.
   *
   * @param {module:dom~ContentDescriptor} content
   *        A content descriptor value.
   *
   * @return {Element}
   *         The element with appended normalized content.
   */

  function appendContent(el, content) {
    normalizeContent(content).forEach(function (node) {
      return el.appendChild(node);
    });
    return el;
  }
  /**
   * closest element polyfill
   */

  (function (ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
      if (!this) return null;
      if (this.matches(selector)) return this;

      if (!this.parentElement) {
        return null;
      } else return this.parentElement.closest(selector);
    };
  })(Element.prototype);
  /**
   * Finds a single DOM element matching `selector` within the optional
   * `context` of another DOM element (defaulting to `document`).
   *
   * @param  {string} selector
   *         A valid CSS selector, which will be passed to `querySelector`.
   *
   * @param  {Element|String} [context=document]
   *         A DOM element within which to query. Can also be a selector
   *         string in which case the first matching element will be used
   *         as context. If missing (or no element matches selector), falls
   *         back to `document`.
   *
   * @return {Element|null}
   *         The element that was found or null.
   */


  var $ = createQuerier('querySelector');
  /**
   * Finds a all DOM elements matching `selector` within the optional
   * `context` of another DOM element (defaulting to `document`).
   *
   * @param  {string} selector
   *         A valid CSS selector, which will be passed to `querySelectorAll`.
   *
   * @param  {Element|String} [context=document]
   *         A DOM element within which to query. Can also be a selector
   *         string in which case the first matching element will be used
   *         as context. If missing (or no element matches selector), falls
   *         back to `document`.
   *
   * @return {NodeList}
   *         A element list of elements that were found. Will be empty if none
   *         were found.
   *
   */

  var $$ = createQuerier('querySelectorAll');

  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  var UIComponent = /*#__PURE__*/function () {
    function UIComponent() {}

    /**
     * @param property
     * @param options
     * @param instanceOf
     * @return {*}
     */
    UIComponent.removeOptionsPtoperty = function removeOptionsPtoperty(property, options, instanceOf) {
      if (instanceOf === void 0) {
        instanceOf = Element;
      }

      if (options[property] instanceof instanceOf === false) {
        throw Error('Invalid call. Property ' + property + ' is not valid');
      } else {
        var result = options[property];
        delete options[property];
        return result;
      }
    }
    /**
     * @param {string} tagName
     * @param {Object} properties
     * @param {Object}  attributes
     * @param {Object[]|string}  content
     * @return {Element}
     */
    ;

    var _proto = UIComponent.prototype;

    _proto.createEl = function createEl$1(tagName, properties, attributes, content) {
      if (tagName === void 0) {
        tagName = 'div';
      }

      if (properties === void 0) {
        properties = {};
      }

      if (attributes === void 0) {
        attributes = {};
      }

      if (typeof properties.className !== "undefined") {
        var classSet = new Set(),
            array = typeof properties.className === 'string' ? properties.className.split(' ') : properties.className;
        array.forEach(function (item) {
          return classSet.add(item);
        });
        var className = '';

        for (var _iterator = _createForOfIteratorHelperLoose(classSet), _step; !(_step = _iterator()).done;) {
          var cssClass = _step.value;
          className += ' ' + UIComponent.getClassName(cssClass);
        }

        properties.className = className.trim();
      }

      return createEl(tagName, properties, attributes, content);
    }
    /**
     *
     * @param {string} selector
     * @return {string}
     * @private
     */
    ;

    UIComponent._normalizePrefix = function _normalizePrefix(selector) {
      var r = selector.replace(new RegExp("\\.", 'g'), '$&' + UIComponent.classPrefix);
      console.log(r);
      return r;
    }
    /**
     * @param {String} selector
     * @param {Element} context
     * @return {Element|null}
     */
    ;

    _proto.$ = function $$1(selector, context) {
      selector = UIComponent._normalizePrefix(selector);
      return $(selector, context);
    }
    /**
     * @param {String} selector
     * @param {Element} context
     * @return {Element[]|null}
     */
    ;

    _proto.$$ = function $$$1(selector, context) {
      selector = UIComponent._normalizePrefix(selector);
      return $$(selector, context);
    };

    return UIComponent;
  }();

  _extends(UIComponent, CSSClassNameMixin);

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  /* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
  var crc32 = createCommonjsModule(function (module, exports) {

    (function (factory) {
      /*jshint ignore:start */

      /*eslint-disable */
      if (typeof DO_NOT_EXPORT_CRC === 'undefined') {
        {
          factory(exports);
        }
      } else {
        factory({});
      }
      /*eslint-enable */

      /*jshint ignore:end */

    })(function (CRC32) {
      CRC32.version = '1.2.0';
      /* see perf/crc32table.js */

      /*global Int32Array */

      function signed_crc_table() {
        var c = 0,
            table = new Array(256);

        for (var n = 0; n != 256; ++n) {
          c = n;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          table[n] = c;
        }

        return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
      }

      var T = signed_crc_table();

      function crc32_bstr(bstr, seed) {
        var C = seed ^ -1,
            L = bstr.length - 1;

        for (var i = 0; i < L;) {
          C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 0xFF];
          C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 0xFF];
        }

        if (i === L) C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i)) & 0xFF];
        return C ^ -1;
      }

      function crc32_buf(buf, seed) {
        if (buf.length > 10000) return crc32_buf_8(buf, seed);
        var C = seed ^ -1,
            L = buf.length - 3;

        for (var i = 0; i < L;) {
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
        }

        while (i < L + 3) {
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
        }

        return C ^ -1;
      }

      function crc32_buf_8(buf, seed) {
        var C = seed ^ -1,
            L = buf.length - 7;

        for (var i = 0; i < L;) {
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
        }

        while (i < L + 7) {
          C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
        }

        return C ^ -1;
      }

      function crc32_str(str, seed) {
        var C = seed ^ -1;

        for (var i = 0, L = str.length, c, d; i < L;) {
          c = str.charCodeAt(i++);

          if (c < 0x80) {
            C = C >>> 8 ^ T[(C ^ c) & 0xFF];
          } else if (c < 0x800) {
            C = C >>> 8 ^ T[(C ^ (192 | c >> 6 & 31)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 0xFF];
          } else if (c >= 0xD800 && c < 0xE000) {
            c = (c & 1023) + 64;
            d = str.charCodeAt(i++) & 1023;
            C = C >>> 8 ^ T[(C ^ (240 | c >> 8 & 7)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | c >> 2 & 63)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | d & 63)) & 0xFF];
          } else {
            C = C >>> 8 ^ T[(C ^ (224 | c >> 12 & 15)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | c >> 6 & 63)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 0xFF];
          }
        }

        return C ^ -1;
      }

      CRC32.table = T; // $FlowIgnore

      CRC32.bstr = crc32_bstr; // $FlowIgnore

      CRC32.buf = crc32_buf; // $FlowIgnore

      CRC32.str = crc32_str;
    });
  });

  /**
  * Simple object check.
  * @param item
  * @returns {boolean}
  */
  function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }
  /**
   * Deep merge two objects.
   * @param target
   * @param sources
   */

  function extend(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (isObject(target) && isObject(source)) {
      for (var key in source) {
        if (isObject(source[key])) {
          var _extends2;

          if (!target[key]) _extends(target, (_extends2 = {}, _extends2[key] = {}, _extends2));
          extend(target[key], source[key]);
        } else {
          var _extends3;

          _extends(target, (_extends3 = {}, _extends3[key] = source[key], _extends3));
        }
      }
    }

    return extend.apply(void 0, [target].concat(sources));
  }

  var StatusesList = {
    INIT: -1,
    WAIT: 0,
    EXEC: 1,
    DONE: 2,
    ERROR: 3,
    DELETED: 99
  };
  StatusesList.SET_VISIBLE = [StatusesList.WAIT, StatusesList.EXEC, StatusesList.ERROR, StatusesList.DONE];
  StatusesList.SET_COMPLETE = [StatusesList.DONE, StatusesList.ERROR, StatusesList.DELETED];
  /**
   * @param {Array} set
   * @param {number} status
   * @return {boolean}
   */

  StatusesList.is = function (set, status) {
    return set.indexOf(status) > -1;
  };

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classStaticPrivateFieldSpecGet$1(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess$4(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor$1(descriptor, "get"); return _classApplyDescriptorGet$1(receiver, descriptor); }

  function _classCheckPrivateStaticFieldDescriptor$1(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

  function _classCheckPrivateStaticAccess$4(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

  function _classApplyDescriptorGet$1(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

  function _classPrivateMethodGet$6(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  /**
   *@interface
   */

  var _manager$1 = /*#__PURE__*/new WeakMap();

  var _element$4 = /*#__PURE__*/new WeakMap();

  var _render = /*#__PURE__*/new WeakSet();

  var TaskAbstract = /*#__PURE__*/function (_UIComponent) {
    _inheritsLoose(TaskAbstract, _UIComponent);

    /**
     * @type {Manager}
     */

    /**
     * @type {number}
     */

    /**
     * @type {boolean}
     */

    /**
     * @type {Manager}
     */

    /**
     * @type {number}
     */

    /**
     * @type {string}
     */

    /**
     * @type {string}
     */

    /**
     * @type {number}
     */

    /**
     * @type {Element}
     */

    /**
     * @type {{init: null, hide: null, show: null, refresh: null, render: null, remove: null}}
     */

    /**
     * @type {Object|null}
     */

    /**
     * @param {number|string} id
     * @param {Manager} manager
     */
    function TaskAbstract(id, manager) {
      var _this;

      _this = _UIComponent.call(this) || this;

      _render.add(_assertThisInitialized(_this));

      _manager$1.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _defineProperty(_assertThisInitialized(_this), "id", void 0);

      _defineProperty(_assertThisInitialized(_this), "common", false);

      _defineProperty(_assertThisInitialized(_this), "initiatorManager", void 0);

      _defineProperty(_assertThisInitialized(_this), "progress", 0);

      _defineProperty(_assertThisInitialized(_this), "text", '');

      _defineProperty(_assertThisInitialized(_this), "title", '');

      _defineProperty(_assertThisInitialized(_this), "status", StatusesList.INIT);

      _element$4.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _defineProperty(_assertThisInitialized(_this), "callbacks", {
        init: null,
        render: null,
        show: null,
        refresh: null,
        hide: null,
        remove: null
      });

      _defineProperty(_assertThisInitialized(_this), "result", null);

      _this.id = parseInt(id);

      _classPrivateFieldSet(_assertThisInitialized(_this), _manager$1, manager);

      setTimeout(function () {
        return _this.callCallback('init');
      }, 50);
      return _this;
    }
    /**
     * @param {string} type
     * @param {Array} params
     */


    var _proto = TaskAbstract.prototype;

    _proto.callCallback = function callCallback(type, params) {
      if (params === void 0) {
        params = [];
      }

      if (this.common) {
        return;
      }

      if (typeof this.callbacks[type] === 'function') {
        this.callbacks[type].apply(this, params);
      }
    }
    /**
     * @private
     * @return {Element}
     */
    ;

    /**
     * Render child instances
     * @protected
     */
    _proto._renderChild = function _renderChild(elWrapper) {} // noinspection JSMethodCanBeStatic

    /**
     * @return {Array}
     * @protected
     */
    ;

    _proto._buildCssClass = function _buildCssClass() {
      return ['task-item'];
    }
    /**
     * @return {Object}
     */
    ;

    _proto.cssClassSwitch = function cssClassSwitch() {
      var element = _classPrivateMethodGet$6(this, _render, _render2).call(this);

      var cssClass, searchClass;

      if (typeof this.manager.options.theme === 'object') {
        var theme = this.manager.options.theme[this.status] || false;

        if (theme) {
          cssClass = TaskAbstract.getClassName('theme-' + theme);
          searchClass = TaskAbstract.getClassName('theme');
          switchClass(element, cssClass, searchClass);
        }
      }

      cssClass = _classStaticPrivateFieldSpecGet$1(TaskAbstract, TaskAbstract, _cssList).call(TaskAbstract)[this.status];
      searchClass = TaskAbstract.getClassName('status');
      switchClass(element, cssClass, searchClass);
    }
    /**
     *
     * @param {Object} response
     * @param {Object} elements
     */
    ;

    _proto.refresh = function refresh(response, elements) {
      if (elements === void 0) {
        elements = null;
      }

      _classPrivateMethodGet$6(this, _render, _render2).call(this);

      if (elements) {
        this._refreshElements(elements, response);
      }

      this.callCallback('refresh', [response, elements]);
    }
    /**
     *
     * @param property
     * @return {number}
     */
    ;

    _proto.getProgressTotal = function getProgressTotal(property) {
      if (property === void 0) {
        property = 'progress';
      }

      var value = 0;

      if (this.hasOwnProperty(property)) {
        value = this[property];

        if (typeof value === 'object' && value.length) {
          value = Math.round(value.reduce(function (a, c) {
            return a + c;
          }) / value.length, 0);
        }
      }

      return value;
    }
    /**
     *
     * @param elements
     * @param oldTask
     * @protected
     */
    ;

    _proto._refreshElements = function _refreshElements(elements, oldTask) {
      var _this2 = this;

      var optionsParts = this.options.parts;
      Object.keys(elements).forEach(function (elementName) {
        var property = optionsParts[elementName],
            method = 'refreshBasicProperty';

        if (typeof property === 'string') {
          if (property.indexOf('.') > 0) {
            var _property$split = property.split('.'),
                m = _property$split[0],
                p = _property$split[1];

            method = m + p[0].toUpperCase() + p.slice(1);
            property = p;
          }

          var value = typeof _this2[property] !== "undefined" ? _this2[property] : null,
              oldValue = typeof oldTask[property] !== "undefined" ? oldTask[property] : null;

          if (value !== oldValue) {
            method = '_' + method;

            if (typeof _this2[method] === "function") {
              _this2[method].call(_this2, elements[elementName], value, property);
            }
          }
        }
      });
    } // noinspection JSMethodCanBeStatic

    /**
     *
     * @param {Element} element
     * @param {string|number|Array} value
     * @param {string} property
     * @protected
     */
    ;

    _proto._refreshBasicProperty = function _refreshBasicProperty(element, value, property) {
      if (Array.isArray(value)) {
        var className = TaskAbstract.getClassName('list-' + property);
        var elList = $('ul.' + className, element);

        if (elList === null) {
          elList = this.createEl('ul', {
            className: className
          });
          element.append(elList);
        }

        value.forEach(function (value, index) {
          var elLi = $("li:nth-child(" + (index + 1) + ")", elList);

          if (elLi === null) {
            elList.append(createEl('li', {}, {}, value));
          } else if (elLi.innerText !== value) {
            elLi.innerText = value;
          }
        });
      } else {
        element.innerHTML = value;
      }
    }
    /**
     * @return {Manager}
     */
    ;

    /**
     *
     * @return {string}
     */
    _proto.getTitle = function getTitle() {
      return '';
    }
    /**
     *
     */
    ;

    _proto.toString = function toString() {
      return this.statusText + " " + this.getTitle();
    };

    _createClass(TaskAbstract, [{
      key: "el",
      get:
      /**
       * @return {Element}
       */
      function get() {
        return _classPrivateFieldGet(this, _element$4);
      }
    }, {
      key: "manager",
      get: function get() {
        return _classPrivateFieldGet(this, _manager$1);
      }
      /**
       * @return {Element}
       */

    }, {
      key: "element",
      get: function get() {
        return _classPrivateFieldGet(this, _element$4);
      }
      /**
       * @return {Defaults.taskOptions|{}}
       */

    }, {
      key: "options",
      get: function get() {
        return this.manager.options.taskOptions;
      }
      /**
       * @return {string}
       */

    }, {
      key: "statusText",
      get: function get() {
        return this.manager.options.statusText[this.status] || '';
      }
    }]);

    return TaskAbstract;
  }(UIComponent);

  function _render2() {
    if (_classPrivateFieldGet(this, _element$4)) {
      return _classPrivateFieldGet(this, _element$4);
    }

    var element = _classPrivateFieldSet(this, _element$4, this.createEl('div', {
      className: 'wrapper'
    }, {
      'data-task-id': this.id
    })),
        elTask = this.createEl('div', {
      className: this._buildCssClass()
    });

    this._renderChild(elTask);

    this.callCallback('render', [elTask, element]);
    element.append(elTask);
    return element;
  }

  var _cssList = {
    writable: true,
    value: function value() {
      if (this._cssList) {
        return this._cssList;
      }

      this._cssList = {};

      for (var statusesListKey in StatusesList) {
        if (typeof StatusesList[statusesListKey] === 'number') {
          this._cssList[StatusesList[statusesListKey]] = UIComponent.getClassName('status-' + statusesListKey.toLowerCase());
        }
      }

      return this._cssList;
    }
  };

  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess$3(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

  function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

  function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

  function _classStaticPrivateMethodGet$3(receiver, classConstructor, method) { _classCheckPrivateStaticAccess$3(receiver, classConstructor); return method; }

  function _classCheckPrivateStaticAccess$3(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

  function _classPrivateMethodGet$5(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  var EMPTY_MESSAGE = '__EMPTY__';
  var Defaults$4 = {
    method: 'post',
    delayTime: 1000,
    params: {}
  };
  /**
   * Resolve task information
   */

  var _managers = /*#__PURE__*/new WeakMap();

  var _options$3 = /*#__PURE__*/new WeakMap();

  var _numberRequests = /*#__PURE__*/new WeakMap();

  var _request = /*#__PURE__*/new WeakSet();

  var _createRequest = /*#__PURE__*/new WeakSet();

  var _getManagers = /*#__PURE__*/new WeakSet();

  var Resolver = /*#__PURE__*/function () {
    /**
     * @type {Resolver[]}
     * @private
     */

    /**
     * @type {Manager[]}
     */

    /**
     * @type {Manager[]}
     */

    /**
     * @type {{}}
     */

    /**
     *
     * @type {number}
     */

    /**
     * @param {Object} options
     */
    function Resolver(options) {
      _getManagers.add(this);

      _createRequest.add(this);

      _request.add(this);

      _managers.set(this, {
        writable: true,
        value: []
      });

      _options$3.set(this, {
        writable: true,
        value: void 0
      });

      _numberRequests.set(this, {
        writable: true,
        value: -1
      });

      var opt = _classPrivateFieldSet(this, _options$3, extend({}, Defaults$4, options));

      if (opt.params && isPlain(opt.params)) {
        opt.params = Object.entries(opt.params).map(function (_ref) {
          var key = _ref[0],
              value = _ref[1];
          return key + "=" + value;
        });
      }
    }
    /**
     * @param {function} onStart
     * @param {function} onEnd
     */


    var _proto = Resolver.prototype;

    _proto.resolve = function resolve(onStart, onEnd) {
      var _this = this;

      if (this.isRunning === false) {
        var managers = _classPrivateMethodGet$5(this, _getManagers, _getManagers2).call(this);

        _classPrivateFieldSet(this, _numberRequests, 0);

        managers.forEach(function (manager) {
          return onStart(manager);
        });

        _classPrivateMethodGet$5(this, _request, _request2).call(this, 0)["catch"](function (error) {
          if (error !== EMPTY_MESSAGE) {
            console.error(error);
          }
        }).then(function () {
          var number = _classPrivateFieldGet(_this, _numberRequests);

          managers.forEach(function (manager) {
            return onEnd(manager, number);
          });

          _classPrivateFieldSet(_this, _numberRequests, -1);

          return number;
        });
      }
    }
    /**
     * @return {Promise}
     */
    ;

    /**
     *
     * @param id
     * @return {TaskAbstract|boolean}
     */
    _proto.findTasks = function findTasks(id) {
      return this.tasks.filter(function (task) {
        return task.id === id;
      });
    }
    /**
     * @return {Object}
     */
    ;

    /**
     * @param {Manager} manager
     * @return {Resolver}
     */
    Resolver.factory = function factory(manager) {
      var options = manager.options.resolver,
          hash = crc32.str(options.url),
          cache = _classStaticPrivateFieldSpecGet(Resolver, Resolver, _cache),
          commonManagers = _classStaticPrivateFieldSpecGet(Resolver, Resolver, _commonManagers);

      var resolver = cache[hash] = cache[hash] instanceof Resolver ? cache[hash] : new Resolver(options),
          managers = _classPrivateMethodGet$5(resolver, _getManagers, _getManagers2).call(resolver);

      if (managers.indexOf(manager) === -1) {
        managers.push(manager);

        if (manager.options.common) {
          commonManagers.push(manager);
        }

        manager.ownerElement.addEventListener(Manager.Events.destroy, function (event) {
          var index = managers.indexOf(event.manager);

          if (index > -1) {
            commonManagers.forEach(function (manager) {
              manager.getTasks().filter(function (value) {
                return value.initiatorManager === managers[index];
              }).forEach(function (task) {
                manager.removeTask(task);
              });
            });
            managers.splice(index, 1);
          }

          index = commonManagers.findIndex(function (value) {
            return value === event.manager;
          });

          if (index > -1) {
            commonManagers.splice(index, 1);
          }
        });
      }

      return resolver;
    };

    _createClass(Resolver, [{
      key: "tasks",
      get:
      /**
       * @return {TaskAbstract[]}
       */
      function get() {
        var tasks = [];

        _classPrivateFieldGet(this, _managers).forEach(function (manager) {
          manager.getTasks().forEach(function (task) {
            if (task.common === false) {
              tasks.push(task);
            }
          });
        });

        return tasks;
      }
      /**
       * @return {Number[]}
       */

    }, {
      key: "tasksId",
      get: function get() {
        return this.tasks.map(function (task) {
          return task.id;
        }).filter(function (value, index, array) {
          return array.indexOf(value) === index;
        });
      }
    }, {
      key: "options",
      get: function get() {
        return _classPrivateFieldGet(this, _options$3);
      }
      /**
       * @return {boolean}
       */

    }, {
      key: "isRunning",
      get: function get() {
        return _classPrivateFieldGet(this, _numberRequests) > -1;
      }
      /**
       * @return {Manager[]}
       */

    }]);

    return Resolver;
  }();

  function _request2(timeOut) {
    var _this2 = this;

    if (timeOut === void 0) {
      timeOut = this.options.delayTime;
    }

    return _classPrivateMethodGet$5(this, _createRequest, _createRequest2).call(this, timeOut).then(function (response) {
      if (response.ok === false) {
        throw Error(response.status + " - " + response.statusText + "' ");
      }

      return response.json().then(function (raw) {
        if (raw.length > 0) {
          raw.forEach(function (item) {
            _this2.findTasks(item.id).forEach(function (task) {
              task.manager._updateTask(task, item);
            });
          });

          _classStaticPrivateMethodGet$3(Resolver, Resolver, _updateCommonManagers).call(Resolver, raw, _this2);
        }

        return _classPrivateMethodGet$5(_this2, _request, _request2).call(_this2);
      });
    });
  }

  function _updateCommonManagers(response, resolver) {
    _classStaticPrivateFieldSpecGet(Resolver, Resolver, _commonManagers).forEach(function (manager) {
      response.forEach(function (item) {
        var task = manager.findTask(item.id);

        if (task === null && StatusesList.is(StatusesList.SET_COMPLETE, item.status) === false) {
          var _resolver$tasks$find;

          item.common = true;
          manager.addTasks([item.id], false);
          task = manager.findTask(item.id);

          manager._updateTask(task, item);

          task.initiatorManager = (_resolver$tasks$find = resolver.tasks.find(function (value) {
            return value.id === item.id;
          })) == null ? void 0 : _resolver$tasks$find.manager;
        }

        if (task instanceof TaskAbstract && task.common) {
          manager._updateTask(task, item);
        } //}

      });
    });
  }

  function _createRequest2(timeOut) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var tasks = _this3.tasksId;

      if (tasks.length === 0) {
        reject(EMPTY_MESSAGE);
      } else {
        setTimeout(function () {
          return resolve(tasks);
        }, timeOut);
      }
    }).then(function (tasks) {
      _classPrivateFieldSet(_this3, _numberRequests, +_classPrivateFieldGet(_this3, _numberRequests) + 1);

      var body = tasks.map(function (item) {
        return "t[]=" + item;
      }),
          params = _this3.options.params;

      if (Array.isArray(params) && params.length > 0) {
        body = body.concat(params);
      }

      return fetch(_this3.options.url, extend({}, _this3.options, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: encodeURI(body.join('&'))
      }));
    });
  }

  function _getManagers2(common) {
    if (common === void 0) {
      common = false;
    }

    if (common === false) {
      return _classPrivateFieldGet(this, _managers);
    }

    return _classPrivateFieldGet(this, _managers).filter(function (manager) {
      return manager.options.common === true;
    });
  }

  var _cache = {
    writable: true,
    value: []
  };
  var _commonManagers = {
    writable: true,
    value: []
  };

  /**
   *
   */

  var Event = {
    ready: 'qmc:manager:ready',
    destroy: 'qmc:manager:destroy',
    statusChange: 'qmc:manager:statusChange',
    taskRemoved: 'qmc:manager:taskRemoved',
    taskElementAppend: 'qmc:manager:taskElementAppend',
    taskElementRemoved: 'qmc:manager:taskElementRemoved',
    newTask: 'qmc:manager:newTask',
    fetchStart: 'qmc:resolver:start',
    fetchEnd: 'qmc:resolver:end'
  };

  Event.toString = function () {
    var events = [];
    each(this, function (event) {
      events.push(event);
    });
    return events.join(' ');
  };

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  var _manager = /*#__PURE__*/new WeakMap();

  /**
   * Manager Event
   */
  var ManagerEvent = /*#__PURE__*/function (_CustomEvent) {
    _inheritsLoose(ManagerEvent, _CustomEvent);

    /**
     *
     * @type {Manager}
     */

    /**
     *
     * @param {Manager} manager
     * @param {string} type
     * @param {Object} props
     */
    function ManagerEvent(manager, type, props) {
      var _this;

      _this = _CustomEvent.call(this, type, props) || this;

      _manager.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _classPrivateFieldSet(_assertThisInitialized(_this), _manager, manager);

      return _this;
    }
    /**
     * @return {Manager}
     */


    _createClass(ManagerEvent, [{
      key: "manager",
      get: function get() {
        return _classPrivateFieldGet(this, _manager);
      }
    }]);

    return ManagerEvent;
  }( /*#__PURE__*/_wrapNativeSuper(CustomEvent));

  /**
   * @file guid.js
   * @module guid
   */
  // Default value for GUIDs. This allows us to reset the GUID counter in tests.
  //
  // The initial GUID is 3 because some users have come to rely on the first
  // default player ID ending up as `vjs_video_3`.
  //
  // See: https://github.com/videojs/video.js/pull/6216
  var _initialGuid = 3;
  /**
   * Unique ID for an element or function
   *
   * @type {Number}
   */

  var _guid = _initialGuid;
  /**
   * Get a unique auto-incrementing ID by number that has not been returned before.
   *
   * @return {number}
   *         A new unique ID.
   */

  function newGUID() {
    return _guid++;
  }

  /**
   * @file dom-data.js
   * @module dom-data
   */
  var FakeWeakMap;

  if (!window__default['default'].WeakMap) {
    FakeWeakMap = /*#__PURE__*/function () {
      function FakeWeakMap() {
        this.vdata = 'vdata' + Math.floor(window__default['default'].performance && window__default['default'].performance.now() || Date.now());
        this.data = {};
      }

      var _proto = FakeWeakMap.prototype;

      _proto.set = function set(key, value) {
        var access = key[this.vdata] || newGUID();

        if (!key[this.vdata]) {
          key[this.vdata] = access;
        }

        this.data[access] = value;
        return this;
      };

      _proto.get = function get(key) {
        var access = key[this.vdata]; // we have data, return it

        if (access) {
          return this.data[access];
        }

        return undefined;
      };

      _proto.has = function has(key) {
        var access = key[this.vdata];
        return access in this.data;
      };

      _proto["delete"] = function _delete(key) {
        var access = key[this.vdata];

        if (access) {
          delete this.data[access];
          delete key[this.vdata];
        }
      };

      return FakeWeakMap;
    }();
  }
  /**
   * Element Data Store.
   *
   * Allows for binding data to an element without putting it directly on the
   * element. Ex. Event listeners are stored here.
   * (also from jsninja.com, slightly modified and updated for closure compiler)
   *
   * @type {Object}
   * @private
   */


  var DomData = window__default['default'].WeakMap ? new WeakMap() : new FakeWeakMap();

  function _classPrivateMethodGet$4(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  /**
   *
   */

  var _bars = /*#__PURE__*/new WeakMap();

  var _labelEl = /*#__PURE__*/new WeakMap();

  var _el = /*#__PURE__*/new WeakMap();

  var _getLabelEl = /*#__PURE__*/new WeakSet();

  var Progress = /*#__PURE__*/function (_UIComponent) {
    _inheritsLoose(Progress, _UIComponent);

    /**
     *
     * @type {string}
     */

    /**
     *
     * @type {string}
      */

    /**
     *
     * @type {string|null}
     */

    /**
     *
     * @type {ProgressBar[]}
     */

    /**
     *
     * @type {Element|HTMLElement}
     */

    /**
     * @type {Element|HTMLElement}
     */

    /**
     * @type {boolean}
     */

    /**
     * @type {string|null}
     */

    /**
     * @param {Object} options
     */
    function Progress() {
      var _this;

      _this = _UIComponent.call(this) || this;

      _getLabelEl.add(_assertThisInitialized(_this));

      _defineProperty(_assertThisInitialized(_this), "label", '');

      _defineProperty(_assertThisInitialized(_this), "className", Progress.getClassName('progress'));

      _defineProperty(_assertThisInitialized(_this), "size", null);

      _bars.set(_assertThisInitialized(_this), {
        writable: true,
        value: []
      });

      _defineProperty(_assertThisInitialized(_this), "barOptions", {});

      _labelEl.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _el.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _defineProperty(_assertThisInitialized(_this), "isShowGradient", true);

      for (var _len = arguments.length, options = new Array(_len), _key = 0; _key < _len; _key++) {
        options[_key] = arguments[_key];
      }

      extend.apply(void 0, [_assertThisInitialized(_this)].concat(options));
      return _this;
    }
    /**
     *
     * @return {Element}
     */


    var _proto = Progress.prototype;

    _proto.render = function render() {
      var el = _classPrivateFieldGet(this, _el);

      if (el instanceof HTMLElement) {
        return el;
      }

      var className = this.className;

      if (this.size) {
        className += ' ' + Progress.getClassName('size-' + this.size);
      }

      if (this.isShowGradient === false) {
        className += ' ' + Progress.getClassName('no-gradient');
      }

      el = createEl('div', {
        className: className
      }, {}, createEl('div', {
        className: Progress.getClassName('progress-items')
      }));
      return _classPrivateFieldSet(this, _el, el);
    }
    /**
     *
     * @return {HTMLElement|Element}
     */
    ;

    /**
     * @param {number|number[]} value
     */
    _proto.setProgress = function setProgress(value) {
      var _this2 = this;

      var bars = _classPrivateFieldGet(this, _bars),
          el = _classPrivateFieldGet(this, _el);

      value = false === Array.isArray(value) ? [value] : value;
      value.forEach(function (value, index) {
        value = parseInt(value);

        if (bars[index] instanceof ProgressBar) {
          bars[index].progress = value;
        } else {
          bars[index] = new ProgressBar(_this2.barOptions, {
            progress: value
          });
          el.querySelector('.' + Progress.getClassName('progress-items')).append(createEl('div', {
            className: Progress.getClassName('progress-item')
          }, {}, bars[index].render()));
        }
      });
      var classThoCheck = Progress.getClassName('more-than-three');

      if (hasClass(el, classThoCheck) === false && value.length > 3) {
        addClass(el, classThoCheck);
      }
    }
    /**
     * @param label
     */
    ;

    _proto.setLabel = function setLabel(label) {
      if (label) {
        _classPrivateMethodGet$4(this, _getLabelEl, _getLabelEl2).call(this).innerHTML = label;
      }
    };

    return Progress;
  }(UIComponent);
  /**
   *
   */


  function _getLabelEl2() {
    var el = _classPrivateFieldGet(this, _labelEl);

    if (el instanceof Element) {
      return el;
    }

    _classPrivateFieldSet(this, _labelEl, el = createEl('span', {
      className: Progress.getClassName('progress-label')
    }, {}));

    _classPrivateFieldGet(this, _el).append(el);

    return el;
  }

  _defineProperty(Progress, "$classPrefix", null);

  var _element$3 = /*#__PURE__*/new WeakMap();

  var _progress = /*#__PURE__*/new WeakMap();

  var ProgressBar = /*#__PURE__*/function () {
    /**
     * @type {boolean|HTMLElement}
     */

    /**
     *
     * @type {string}
     */

    /**
     *
     * @type {number}
     */

    /**
     * @type {string|boolean}
     */

    /**
     * @type {number}
     */

    /**
     *
     * @type {number}
     */

    /**
     * @param {Object} options
     */
    function ProgressBar() {
      _element$3.set(this, {
        writable: true,
        value: false
      });

      _defineProperty(this, "className", 'progress-bar');

      _progress.set(this, {
        writable: true,
        value: 0
      });

      _defineProperty(this, "labelText", '');

      _defineProperty(this, "min", 0);

      _defineProperty(this, "max", 100);

      for (var _len2 = arguments.length, options = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        options[_key2] = arguments[_key2];
      }

      extend.apply(void 0, [this].concat(options));
    }
    /**
     * @return {Element}
     */


    var _proto2 = ProgressBar.prototype;

    _proto2.render = function render() {
      var el = _classPrivateFieldGet(this, _element$3);

      if (el) {
        return el;
      }
      /**
       * @type {Array|String}
       */


      var content = [];

      if (this.labelText === false) {
        content.push(createEl('span', {
          className: 'sr-only',
          css: {
            width: 0
          }
        }, {}, this.label));
      } else {
        content = this.label;
      }

      _classPrivateFieldSet(this, _element$3, el = createEl('div', {
        className: Progress.getClassName(this.className)
      }, {
        role: "progressbar",
        'aria-valuenow': this.progress,
        'aria-valuemin': this.min,
        'aria-valuemax': this.max
      }, content));

      return el;
    }
    /**
     * @return {string}
     */
    ;

    _createClass(ProgressBar, [{
      key: "label",
      get: function get() {
        var label = this.labelText ? this.labelText : '';
        return this.progress + "% " + label;
      }
      /**
       * @return {number}
       */

    }, {
      key: "progress",
      get: function get() {
        return _classPrivateFieldGet(this, _progress);
      }
      /**
       * @param {number} value
       */
      ,
      set: function set(value) {
        _classPrivateFieldSet(this, _progress, value);

        var element = this.render();
        element.setAttribute('aria-valuenow', value);

        if (element.childNodes.length > 0) {
          element.childNodes[0].textContent = this.label;
        } else {
          element.textContent = this.label;
        }

        element.style.width = value + "%";
      }
    }]);

    return ProgressBar;
  }();

  function _classPrivateMethodGet$3(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  /**
   *
   */

  var _element$2 = /*#__PURE__*/new WeakMap();

  var _icon$2 = /*#__PURE__*/new WeakMap();

  var _size = /*#__PURE__*/new WeakMap();

  var _buildClassName$2 = /*#__PURE__*/new WeakSet();

  var IconT = /*#__PURE__*/function (_UIComponent) {
    _inheritsLoose(IconT, _UIComponent);

    /**
     * @type {Element}
     */

    /**
     *
     * @type {boolean|string}
     */

    /**
     * @type {boolean|string}
     */

    /**
     * @param {boolean|string} icon
     * @param {boolean|string} size
     */
    function IconT(icon, size) {
      var _this;

      if (icon === void 0) {
        icon = false;
      }

      if (size === void 0) {
        size = false;
      }

      _this = _UIComponent.call(this) || this;

      _buildClassName$2.add(_assertThisInitialized(_this));

      _element$2.set(_assertThisInitialized(_this), {
        writable: true,
        value: void 0
      });

      _icon$2.set(_assertThisInitialized(_this), {
        writable: true,
        value: false
      });

      _size.set(_assertThisInitialized(_this), {
        writable: true,
        value: false
      });

      _classPrivateFieldSet(_assertThisInitialized(_this), _icon$2, icon);

      _classPrivateFieldSet(_assertThisInitialized(_this), _size, size);

      return _this;
    }
    /**
     * @return {Element}
     */


    var _proto = IconT.prototype;

    _proto.render = function render() {
      var el = _classPrivateFieldGet(this, _element$2);

      if (el instanceof Element) {
        return el;
      }

      return _classPrivateFieldSet(this, _element$2, this.createEl('span', {
        className: _classPrivateMethodGet$3(this, _buildClassName$2, _buildClassName2).call(this)
      }, {}, createEl('span', {}, {}, ['s1', 's2', 's3'].map(function (className) {
        return createEl('span', {
          className: className
        });
      }))));
    }
    /**
     * @return {Array}
     */
    ;

    _createClass(IconT, [{
      key: "icon",
      set:
      /**
       *
       * @param value
       */
      function set(value) {
        if (value) {
          var icon = _classPrivateFieldGet(this, _icon$2);

          if (icon !== value) {
            var el = _classPrivateFieldGet(this, _element$2);

            if (icon) {
              removeClass(el, icon);
            }

            addClass(el, value);

            _classPrivateFieldSet(this, _icon$2, value);
          }
        }
      }
      /**
       * @param value
       */

    }, {
      key: "size",
      set: function set(value) {
        if (value) {
          value = IconT.getClassName('size-' + value);

          var size = _classPrivateFieldGet(this, _size);

          if (size !== value) {
            var el = _classPrivateFieldGet(this, _element$2);

            if (size) {
              removeClass(el, size);
            }

            addClass(el, value);

            _classPrivateFieldSet(this, _size, value);
          }
        }
      }
      /**
       *
       * @param value
       */

    }, {
      key: "color",
      set: function set(value) {
        $$('span[class^=s]', _classPrivateFieldGet(this, _element$2)).forEach(function (el) {
          el.style.backgroundColor = value;
        });
      }
    }]);

    return IconT;
  }(UIComponent);

  function _buildClassName2() {
    var className = 'icon-t',
        result = [];

    if (_classPrivateFieldGet(this, _icon$2)) {
      className += ' ' + _classPrivateFieldGet(this, _icon$2);
    }

    result.push(className);

    if (_classPrivateFieldGet(this, _size)) {
      result.push('size-' + _classPrivateFieldGet(this, _size));
    }

    return result;
  }

  function _classPrivateMethodGet$2(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

  function _classStaticPrivateMethodGet$2(receiver, classConstructor, method) { _classCheckPrivateStaticAccess$2(receiver, classConstructor); return method; }

  function _classCheckPrivateStaticAccess$2(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
  /**
   *
   * @type {{iconHoverName: null, handler: null, size: null, data: {}, hiddenLabel: string, iconName: null, animatedClick: boolean, handlerTimoutDelay: number, iconSize: null, disabled: boolean, label: boolean, tagName: string}}
   */

  var Defaults$3 = {
    /**
     * @type {String}
     */
    tagName: 'button',

    /**
     * @type {function}
     */
    handler: null,

    /**
     * @type {number}
     */
    handlerTimoutDelay: 500,

    /**
     * @type {String}
     */
    label: false,

    /**
     * @type {String}
     */
    hiddenLabel: '',

    /**
     * @type {boolean}
     */
    disabled: false,

    /**
     * @type {String|null}
     */
    size: null,

    /**
     * @type {String|null}
     */
    iconName: null,

    /**
     * @type {String|null}
     */
    iconHoverName: null,

    /**
     * @type {String|null}
     */
    iconSize: null,

    /**
     * @type {Boolean}
     */
    animatedClick: true,

    /**
     * @type {Object}
     */
    data: {}
  };
  /**
   *
   */

  var _element$1 = /*#__PURE__*/new WeakMap();

  var _options$2 = /*#__PURE__*/new WeakMap();

  var _icon$1 = /*#__PURE__*/new WeakMap();

  var _addHandlers = /*#__PURE__*/new WeakSet();

  var Button = /*#__PURE__*/function (_UIComponent) {
    _inheritsLoose(Button, _UIComponent);

    /**
     * @type {Element}
     */

    /**
     * @type {Defaults}
     */

    /**
     * @type {IconT}
     */

    /**
     * @param {Defaults} options
     */
    function Button(_options2) {
      var _this;

      _this = _UIComponent.call(this) || this;

      _addHandlers.add(_assertThisInitialized(_this));

      _element$1.set(_assertThisInitialized(_this), {
        writable: true,
        value: void 0
      });

      _options$2.set(_assertThisInitialized(_this), {
        writable: true,
        value: Defaults$3
      });

      _icon$1.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      if (_options2 && typeof _options2 === 'object') {
        _classPrivateFieldSet(_assertThisInitialized(_this), _options$2, extend({}, Defaults$3, _options2));
      }

      return _this;
    }
    /**
     * @return {Element}
     */


    var _proto = Button.prototype;

    _proto.render = function render() {
      var el = _classPrivateFieldGet(this, _element$1);

      if (el instanceof Element) {
        return el;
      }

      var options = this.options,
          content = [];

      if (options.iconName) {
        var i = this.icon;
        content.push(i.render());
        i.icon = options.iconName;
        i.size = options.iconSize;
      }

      if (options.label) {
        content.push(createEl('p', {}, {}, options.label));
      }

      if (options.hiddenLabel) {
        content.push(this.createEl('p', {
          className: 'button-hidden'
        }, {}, options.hiddenLabel));
      }

      if (options.animatedClick) {
        var drop = createEl('p', {
          className: 'drop'
        });
        drop.addEventListener('animationend', function () {
          removeClass(this, 'animate');
        });
        content.push(drop);
      }

      el = _classPrivateFieldSet(this, _element$1, this.createEl(options.tagName, {
        className: _classStaticPrivateMethodGet$2(Button, Button, _buildClassName$1).call(Button, options)
      }, {}, content));
      this.disabled = options.disabled;

      _classPrivateMethodGet$2(this, _addHandlers, _addHandlers2).call(this, el, options);

      return el;
    }
    /**
     *
     * @param {Defaults} options
     * @return {Array}
     */
    ;

    _createClass(Button, [{
      key: "disabled",
      set:
      /**
       * @param {Boolean} value
       */
      function set(value) {
        var options = this.options;

        if (value !== options.disabled) {
          if (options.tagName.toLowerCase() === 'button') {
            _classPrivateFieldGet(this, _element$1).disabled = value;
          } else {
            toggleClass(_classPrivateFieldGet(this, _element$1), 'disabled');
          }

          options.disabled = value;
        }
      }
      /**
       * @return {Defaults}
       */

    }, {
      key: "options",
      get: function get() {
        return _classPrivateFieldGet(this, _options$2);
      }
      /**
       * @return {Element}
       */

    }, {
      key: "element",
      get: function get() {
        return this.render();
      }
      /**
       *
       * @return {IconT}
       */

    }, {
      key: "icon",
      get: function get() {
        var icon = _classPrivateFieldGet(this, _icon$1);

        if (icon instanceof IconT) {
          return icon;
        }

        return _classPrivateFieldSet(this, _icon$1, new IconT());
      }
      /**
       * @param element
       * @param options
       */

    }]);

    return Button;
  }(UIComponent);

  function _buildClassName$1(options) {
    var result = ['button'];

    if (options.size) {
      result.push('size-' + options.size);
    }

    if (options.hiddenLabel) {
      result.push('has-hidden');
    }

    return result;
  }

  function _addHandlers2(element, options) {
    var _this2 = this;

    element.addEventListener('click', function (event) {
      if (options.disabled) {
        event.stopImmediatePropagation();
        return false;
      }

      if (options.animatedClick) {
        _classStaticPrivateMethodGet$2(Button, Button, _animatedClick).call(Button, element);
      }
    });

    if (typeof options.handler === 'function') {
      if (options.handlerTimoutDelay > 0) {
        element.addEventListener('click', function (event) {
          setTimeout(function () {
            return options.handler.call(_this2, event);
          }, options.handlerTimoutDelay);
        });
      } else {
        element.addEventListener('click', options.handler.bind(this));
      }
    }

    if (options.iconHoverName) {
      element.addEventListener('mouseenter', function () {
        if (options.disabled === false) {
          _this2.icon.icon = options.iconHoverName;
        }
      });
      element.addEventListener('mouseleave', function () {
        _this2.icon.icon = options.iconName;
      });
    }
  }

  function _animatedClick(element) {
    var drop = $('.drop', element);

    if (drop) {
      var rect = getBoundingClientRect(element),
          x = event.pageX - rect.width / 2 - rect.left - window.scrollX,
          y = event.pageY - rect.height / 2 - rect.top - window.scrollY;
      drop.style.top = y + 'px';
      drop.style.left = x + 'px';
      addClass(drop, 'animate');
    }
  }
  Button.Defaults = Defaults$3;

  function _classPrivateMethodGet$1(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

  function _classStaticPrivateMethodGet$1(receiver, classConstructor, method) { _classCheckPrivateStaticAccess$1(receiver, classConstructor); return method; }

  function _classCheckPrivateStaticAccess$1(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
  /**
   *
   * @type {{selectIcon: null, scaled: boolean, arrange: boolean, selectable: boolean}}
   */

  var Defaults$2 = {
    /**
     * @type {Button.Defaults[]}
     */
    buttons: [],

    /**
     * @type {boolean}
     */
    arrange: false,

    /**
     * @type {boolean}
     */
    scaled: false,

    /**
     * @type {boolean}
     */
    selectable: false,

    /**
     * @type {string|null}
     */
    selectIcon: null
  };
  /**
   *
   */

  var _options$1 = /*#__PURE__*/new WeakMap();

  var _element = /*#__PURE__*/new WeakMap();

  var _bindSelectEvents = /*#__PURE__*/new WeakSet();

  var ButtonsGroup = /*#__PURE__*/function (_UIComponent) {
    _inheritsLoose(ButtonsGroup, _UIComponent);

    /**
     * @type {Button[]}
     */

    /**
     * @type {Defaults}
     */

    /**
     * @type {Element}
     */

    /**
     * @param {Defaults} options
     */
    function ButtonsGroup(options) {
      var _this;

      _this = _UIComponent.call(this) || this;

      _bindSelectEvents.add(_assertThisInitialized(_this));

      _defineProperty(_assertThisInitialized(_this), "buttons", null);

      _options$1.set(_assertThisInitialized(_this), {
        writable: true,
        value: Defaults$2
      });

      _element.set(_assertThisInitialized(_this), {
        writable: true,
        value: void 0
      });

      var buttons = UIComponent.removeOptionsPtoperty('buttons', options, Array);

      _classPrivateFieldSet(_assertThisInitialized(_this), _options$1, extend({}, Defaults$2, options));

      _this.buttons = buttons.map(function (config) {
        return new Button(config);
      });
      return _this;
    }
    /**
     * @return {Element}
     */


    var _proto = ButtonsGroup.prototype;

    _proto.render = function render() {
      var el = _classPrivateFieldGet(this, _element);

      if (el instanceof Element) {
        return el;
      }

      _classPrivateFieldSet(this, _element, el = this.createEl('div', {
        className: _classStaticPrivateMethodGet$1(ButtonsGroup, ButtonsGroup, _buildClassName).call(ButtonsGroup, this.options)
      }, {}, this.buttons.map(function (btn) {
        return btn.render();
      })));

      if (this.options.selectable) {
        _classPrivateMethodGet$1(this, _bindSelectEvents, _bindSelectEvents2).call(this, el);
      }

      return el;
    }
    /**
     *
     * @param {Defaults} options
     * @return {Array}
     */
    ;

    _createClass(ButtonsGroup, [{
      key: "options",
      get:
      /**
       * @return {Defaults}
       */
      function get() {
        return _classPrivateFieldGet(this, _options$1);
      }
      /**
       *
       * @param {boolean} value
       */

    }, {
      key: "arrange",
      set: function set(value) {
        var className = ButtonsGroup.getClassName('arrange');

        var el = _classPrivateFieldGet(this, _element),
            options = _classPrivateFieldGet(this, _options$1);

        if (el) {
          if (value) {
            if (hasClass(el, className) === false) {
              addClass(el, className);
            }
          } else {
            removeClass(el, className);
          }
        }

        options.arrange = value;
      }
      /**
       * @param element
       */

    }, {
      key: "selected",
      set:
      /**
       *
       * @param {Button|number} button
       */
      function set(button) {
        var className = ButtonsGroup.getClassName('selected'),
            options = this.options;

        if (typeof button === "number") {
          button = this.buttons[button];
        }

        if (button instanceof Button) {
          this.buttons.forEach(function (btn) {
            removeAttribute(btn.element, 'data-group-selected');
            removeClass(btn.element, className);
          });
          addClass(button.element, className);

          if (options.selectIcon) {
            button.icon.icon = options.selectIcon;
            button.options.iconName = options.selectIcon;
          }
        }
      }
    }]);

    return ButtonsGroup;
  }(UIComponent);

  function _buildClassName(options) {
    var result = ['button-group'];

    if (options.arrange) {
      result.push('arrange');
    }

    if (options.scaled) {
      result.push('scaled');
    }

    return result;
  }

  function _bindSelectEvents2(element) {
    var _this2 = this;

    element.addEventListener('click', function (event) {
      var element = event.target.closest('.' + ButtonsGroup.getClassName('button'));
      _this2.selected = _this2.buttons.find(function (btn) {
        return btn.element === element;
      });
    });
    element.addEventListener('mouseenter', function (event) {
      _this2.$$('.button.selected', event.target).forEach(function (el) {
        setAttribute(el, 'data-group-selected', true);
        removeClass(el, ButtonsGroup.getClassName('selected'));
      });
    });
    element.addEventListener('mouseleave', function (event) {
      _this2.$$('.button[data-group-selected]', event.target).forEach(function (el) {
        removeAttribute(el, 'data-group-selected');
        addClass(el, ButtonsGroup.getClassName('selected'));
      });
    });
  }

  /**
   *
   */

  var _elements$2 = /*#__PURE__*/new WeakMap();

  var _task = /*#__PURE__*/new WeakMap();

  var _icon = /*#__PURE__*/new WeakMap();

  var _text = /*#__PURE__*/new WeakMap();

  var _bGroup = /*#__PURE__*/new WeakMap();

  var TaskStatus = /*#__PURE__*/function (_UIComponent) {
    _inheritsLoose(TaskStatus, _UIComponent);

    /**
     * @type {Element[]}
     */

    /**
     * @type {TaskAbstract}
     */

    /**
     *
     * @type {IconT}
     */

    /**
     *
     * @type {Element}
     */

    /**
     * @type {ButtonsGroup}
     */

    /**
     * @param {TaskAbstract} task
     * @param {Object} mapIcons
     * @param {Object} actions
     */
    function TaskStatus(task, mapIcons, actions) {
      var _this;

      _this = _UIComponent.call(this) || this;

      _elements$2.set(_assertThisInitialized(_this), {
        writable: true,
        value: []
      });

      _defineProperty(_assertThisInitialized(_this), "map", {
        icons: [],
        actions: []
      });

      _task.set(_assertThisInitialized(_this), {
        writable: true,
        value: void 0
      });

      _icon.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _text.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _bGroup.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _classPrivateFieldSet(_assertThisInitialized(_this), _task, task);

      _this.map.icons = mapIcons;
      _this.map.actions = actions;

      _classPrivateFieldSet(_assertThisInitialized(_this), _icon, new IconT('none', 'big'));

      _classPrivateFieldSet(_assertThisInitialized(_this), _text, _this.createEl('span', {
        className: 'status-text'
      }));

      actions.forEach(function (item) {
        extend(item, {
          data: {
            task: task
          }
        });
      });
      return _this;
    }
    /**
     *
     */


    var _proto = TaskStatus.prototype;

    _proto.render = function render() {
      var els = _classPrivateFieldGet(this, _elements$2);

      if (els.length > 0) {
        return els;
      }

      els.push(_classPrivateFieldGet(this, _icon).render());
      els.push(_classPrivateFieldGet(this, _text));

      if (this.map.actions.length > 0) {
        _classPrivateFieldSet(this, _bGroup, new ButtonsGroup({
          buttons: this.map.actions,
          arrange: false,
          scaled: true
        }));

        els.push(_classPrivateFieldGet(this, _bGroup).render());
      }

      return els;
    }
    /**
     *
     * @param {Number} status
     */
    ;

    _proto.refresh = function refresh(status) {
      _classPrivateFieldGet(this, _text).innerHTML = _classPrivateFieldGet(this, _task).statusText;
      _classPrivateFieldGet(this, _icon).icon = this.map.icons[status];

      var buttonGroup = _classPrivateFieldGet(this, _bGroup);

      if (buttonGroup) {
        buttonGroup.buttons.forEach(function (button) {
          var _button$options;

          var enabledWith = (_button$options = button.options) == null ? void 0 : _button$options.enabledWithStatus;

          if (typeof enabledWith === "function") {
            enabledWith = enabledWith.call(button, status);
          }

          if (Array.isArray(enabledWith)) {
            if (button.options.enabledWithStatus.length === 0) {
              return;
            }

            button.disabled = button.options.enabledWithStatus.indexOf(status) === -1;
          } else if (typeof enabledWith === "boolean") {
            button.disabled = enabledWith;
          }
        });
      }
    };

    return TaskStatus;
  }(UIComponent);

  function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

  function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
  var Defaults$1 = {
    iconPlacement: 'default',
    parts: {
      status: 'refresh.status',
      title: 'title',
      text: 'text',
      error: 'errors',
      'progress-wrapper': 'refresh.progress'
    },
    progress: {
      label: '',
      size: '',
      barOptions: {
        labelText: false
      }
    },
    actions: []
  };
  var iconMap = {};
  iconMap[StatusesList.WAIT] = 'clock';
  iconMap[StatusesList.EXEC] = 'play';
  iconMap[StatusesList.ERROR] = 'warning';
  iconMap[StatusesList.DONE] = 'checked';
  /**
   *
   */

  var _elements$1 = /*#__PURE__*/new WeakMap();

  var Task = /*#__PURE__*/function (_TaskAbstract) {
    _inheritsLoose(Task, _TaskAbstract);

    function Task() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _TaskAbstract.call.apply(_TaskAbstract, [this].concat(args)) || this;

      _elements$1.set(_assertThisInitialized(_this), {
        writable: true,
        value: {}
      });

      return _this;
    }

    var _proto = Task.prototype;

    /**
     *
     * @protected
     * @return {Element}
     */
    _proto._renderChild = function _renderChild(elWrapper) {
      var _this2 = this;

      var elements = _classPrivateFieldGet(this, _elements$1),
          options = this.options,
          elDetail = elWrapper.appendChild(this.createEl('div', {
        className: 'detail'
      })),
          elStatusWrapper = elWrapper.appendChild(this.createEl('div', {
        className: 'status-wrapper'
      }));

      Object.keys(options.parts).forEach(function (part) {
        var _component;

        var owner = elDetail,
            component = null;

        if (part === 'progress-wrapper') {
          if (options.progress) {
            component = new Progress(options.progress);
          } else {
            delete options['progress-wrapper'];
          }
        } else if (part === 'status') {
          owner = elStatusWrapper;
          component = new TaskStatus(_this2, iconMap, options.actions);
        }

        elements[part] = owner.appendChild(_this2.createEl('div', {
          className: part
        }, {}));

        if (component && typeof ((_component = component) == null ? void 0 : _component.render) === "function") {
          var content = component.render();

          if (content instanceof Element) {
            content = [content];
          }

          content.forEach(function (content) {
            return elements[part].append(content);
          });

          _classStaticPrivateMethodGet(Task, Task, _setComponent).call(Task, elements[part], component);
        }
      });
    }
    /**
     *
     */
    ;

    _proto.refresh = function refresh(response) {
      _TaskAbstract.prototype.refresh.call(this, response, _classPrivateFieldGet(this, _elements$1));
    }
    /**
     * @return {Array}
     * @protected
     */
    ;

    _proto._buildCssClass = function _buildCssClass() {
      var classList = _TaskAbstract.prototype._buildCssClass.call(this);

      if (this.options.iconPlacement !== Defaults$1.iconPlacement) {
        classList.push('task-item-' + this.options.iconPlacement);
      }

      return classList;
    }
    /**
     *
     * @param {Element} el
     * @param {Object}component
     */
    ;

    /**
     * @param {element} el
     * @param {Number|Number[]}value
     * @private
     */
    _proto._refreshProgress = function _refreshProgress(el, value) {
      var progress = _classStaticPrivateMethodGet(Task, Task, _getComponent).call(Task, el);

      if (progress instanceof Progress) {
        progress.setLabel(this.getProgressTotal() + '%');
        progress.setProgress(value);
      }
    }
    /**
     * @param {Element} elStatus
     * @param {Number|Number[]}value
     * @private
     */
    ;

    _proto._refreshStatus = function _refreshStatus(elStatus, value) {
      _classStaticPrivateMethodGet(Task, Task, _getComponent).call(Task, elStatus).refresh(value);
    }
    /**
     * @return {string}
     */
    ;

    _proto.getTitle = function getTitle() {
      var part = this.options.parts['title'];

      if (part) {
        var _this$part;

        return (_this$part = this[part]) != null ? _this$part : '';
      }

      return '';
    };

    return Task;
  }(TaskAbstract);

  function _setComponent(el, component) {
    if (!DomData.has(el)) {
      DomData.set(el, {});
    }

    var data = DomData.get(el);
    data.componet = component;
  }

  function _getComponent(el) {
    if (DomData.has(el)) {
      var data = DomData.get(el);

      if (typeof data.componet !== "undefined") {
        return data.componet;
      }
    }

    return null;
  }
  Task.Defualts = Defaults$1;

  /**
   * @param timing
   * @param draw
   * @param duration
   * @param onEnd
   */

  function animate(_ref, onEnd) {
    var timing = _ref.timing,
        draw = _ref.draw,
        duration = _ref.duration;
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      // timeFraction ???????????????????? ???? 0 ???? 1
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1; // ???????????????????? ???????????????? ?????????????????? ????????????????

      var progress = timing(timeFraction);
      draw(progress); // ???????????????????? ????

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      } else {
        if (onEnd) {
          onEnd();
        }
      }
    });
  }

  var timings = {
    linear: function linear(timeFraction) {
      return timeFraction;
    },
    quad: function quad(timeFraction) {
      return Math.pow(timeFraction, 2);
    },
    circ: function circ(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction));
    },
    back: function back(x, timeFraction) {
      if (x === void 0) {
        x = 1.5;
      }

      return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
    }
  };
  var animationsDraw = {
    'fadeOut': function fadeOut(progress) {
      this.style.opacity = 1 - Math.round(progress * 100) / 100;
    },
    'fadeIn': function fadeIn(progress) {
      if (this.style.display === 'none') {
        this.style.display = null;
      }

      this.style.opacity = Math.round(progress * 100) / 100;
    }
  };
  /**
   * @param {Element|Object} el
   * @param {Object} animationConfig
   * @return Promise
   */

  function animateEl(el, animationConfig) {
    if (animationConfig === void 0) {
      animationConfig = {
        name: 'fadeOut',
        timing: timings.linear,
        duration: 500,
        delay: 0
      };
    }

    var animation = _extends({}, animationConfig);

    if (typeof animation.draw === 'function') {
      animation.draw.bind(el);
    } else if (typeof animation.name === 'string' && typeof animationsDraw[animation.name] === 'function') {
      animation.draw = animationsDraw[animation.name].bind(el);
    } else {
      throw new Error('Unknown animation ');
    }

    if (typeof animation.delay !== "number") {
      animation.delay = 0;
    }

    animation.timing = typeof animation.timing == "string" && typeof timings[animation.timing] === 'function' ? timings[animation.timing] : timings.linear;
    return new Promise(function (resolve) {
      setTimeout(function () {
        return animate(animation, function () {
          resolve(el);
        });
      }, animation.delay);
    });
  }

  function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  var Defaults = {
    common: false,
    title: '<h3>Backgrounds tasks</h3>',
    theme: {
      '-1': "default"
    },
    renderOnEmpty: true,
    taskClass: Task,
    emptyText: 'Tasks not provided yet',
    taskOptions: {},
    tasks: [],
    statusText: {},
    hideAnimation: {
      name: 'fadeOut',
      duration: 1000,
      timing: 'linear',
      delay: 0
    },
    showAnimation: {
      name: 'fadeIn',
      duration: 1000,
      timing: 'linear',
      delay: 0
    },
    tasksAnimation: {
      hide: {},
      show: {}
    },
    resolver: {
      url: 'queue-reader'
    }
  };
  Defaults.tasksAnimation.hide[StatusesList.DONE] = extend({}, Defaults.hideAnimation, {
    delay: 5000
  });
  Defaults.tasksAnimation.hide[StatusesList.ERROR] = extend({}, Defaults.hideAnimation, {
    delay: 20000
  });
  Defaults.tasksAnimation.show[StatusesList.EXEC] = extend({}, Defaults.showAnimation, {
    duration: 500
  });
  Defaults.tasksAnimation.show[StatusesList.WAIT] = extend({}, Defaults.showAnimation, {
    duration: 500
  });
  Defaults.tasksAnimation.hide[StatusesList.ERROR] = false; //not remove Task element from dom

  Defaults.statusText[StatusesList.DONE] = 'Complete';
  Defaults.statusText[StatusesList.ERROR] = 'Complete with errors';
  Defaults.statusText[StatusesList.EXEC] = 'Processing';
  Defaults.statusText[StatusesList.WAIT] = 'Awaiting';
  /**
   *
   */

  var _resolver = /*#__PURE__*/new WeakMap();

  var _elements = /*#__PURE__*/new WeakMap();

  var _tasks = /*#__PURE__*/new WeakMap();

  var _options = /*#__PURE__*/new WeakMap();

  var _toggleEmptyText = /*#__PURE__*/new WeakSet();

  var _taskAnimation = /*#__PURE__*/new WeakSet();

  var _taskFactory = /*#__PURE__*/new WeakSet();

  var _removeEl = /*#__PURE__*/new WeakSet();

  var Manager = /*#__PURE__*/function (_UIComponent) {
    _inheritsLoose(Manager, _UIComponent);

    /**
     * @type {Resolver}
     * @private
     */

    /**
     * @type {TaskAbstract[]}
     */

    /**
     * @type {Object}
     */

    /**
     * @param options
     */
    function Manager(_options2) {
      var _this;

      _this = _UIComponent.call(this) || this;

      _removeEl.add(_assertThisInitialized(_this));

      _taskFactory.add(_assertThisInitialized(_this));

      _taskAnimation.add(_assertThisInitialized(_this));

      _toggleEmptyText.add(_assertThisInitialized(_this));

      _resolver.set(_assertThisInitialized(_this), {
        writable: true,
        value: null
      });

      _elements.set(_assertThisInitialized(_this), {
        writable: true,
        value: {
          /**
           * @type {Element}
           */
          owner: null,

          /**
           * @type {Element}
           */
          wrapper: null,

          /**
           * @type {Element}
           */
          wrapperTasks: null,

          /**
           * @type {Element}
           */
          emptyText: null
        }
      });

      _tasks.set(_assertThisInitialized(_this), {
        writable: true,
        value: []
      });

      _options.set(_assertThisInitialized(_this), {
        writable: true,
        value: {}
      });

      _classPrivateFieldGet(_assertThisInitialized(_this), _elements).owner = UIComponent.removeOptionsPtoperty('element', _options2);
      var opt = extend({}, Manager.Defaults, _options2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _options, extend({}, {
        taskOptions: opt.taskClass.Defualts
      }, opt));

      _classPrivateFieldSet(_assertThisInitialized(_this), _resolver, Resolver.factory(_assertThisInitialized(_this)));

      _this.render();

      if (_options2.tasks && typeof _options2.tasks.length !== "undefined") {
        _this.addTasks(_options2.tasks);
      } //check later added tasks,


      setTimeout(function () {
        if (_this.getTasks().length === 0) {
          _classPrivateMethodGet(_assertThisInitialized(_this), _toggleEmptyText, _toggleEmptyText2).call(_assertThisInitialized(_this), 'show');
        }
      }, 200);

      _this.trigger(Event.ready, {
        bubbles: true
      });

      return _this;
    }
    /**
     * Destructor of manager instance
     */


    var _proto = Manager.prototype;

    _proto.destroy = function destroy() {
      this.trigger(Event.destroy, {
        bubbles: true
      });

      _classPrivateFieldSet(this, _tasks, []);

      this.ownerElement.remove();
    }
    /**
     * @return {Object}
     */
    ;

    /**
     * @param {string} type
     * @param {Object} props
     * @param {Object|null} detail
     * @return {boolean}
     */
    _proto.trigger = function trigger(type, props, detail) {
      if (props === void 0) {
        props = {};
      }

      if (typeof detail == "object") {
        props.detail = {};

        for (var _i = 0, _Object$entries = Object.entries(detail); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
          props.detail[key] = value;
        }
      }

      return this.ownerElement.dispatchEvent(new ManagerEvent(this, type, props));
    }
    /**
     * @return {boolean}
     */
    ;

    _proto.render = function render() {
      var tasks = this.getTasks(StatusesList.SET_VISIBLE);

      if (tasks.length === 0 && this.options.renderOnEmpty === false) {
        return false;
      }

      var elements = _classPrivateFieldGet(this, _elements);

      if (elements.wrapper === null) {
        var options = this.options;
        elements.wrapper = elements.owner.appendChild(this.createEl('div', {
          className: 'wrapper'
        }));

        if (elements.wrapper.childNodes.length === 0) {
          if (options.title && this.options.title.length > 0) {
            elements.wrapper.appendChild(this.createEl('div', {
              innerHTML: this.options.title,
              className: 'title'
            }));
          }

          elements.wrapperTasks = elements.wrapper.appendChild(this.createEl('div', {
            className: 'tasks'
          }));

          if (options.emptyText.length > 0) {
            elements.emptyText = elements.wrapper.appendChild(elements.emptyText = this.createEl('div', {
              className: 'empty-wrapper',
              style: {
                display: 'none'
              }
            }, {}, [this.createEl('span', {
              className: 'empty-text',
              textContent: options.emptyText
            })]));
          }
        }

        if (typeof options.theme === 'string') {
          switchClass(elements.wrapper, Manager.getClassName('theme-' + options.theme), Manager.getClassName('theme'));
        }
      }

      tasks.forEach(function (task) {
        return task.refresh();
      });
      return true;
    }
    /**
     *
     * @param {string} type
     * @return {Promise}
     */
    ;

    /**
     *
     * @param {Object[]}tasks
     * @param {boolean} resolve
     */
    _proto.addTasks = function addTasks(tasks, resolve) {
      var _this2 = this;

      if (resolve === void 0) {
        resolve = true;
      }

      if (Array.isArray(tasks) === false) {
        throw new Error('Not valid call. Argument tasks is not array type ');
      }

      _classPrivateMethodGet(this, _taskFactory, _taskFactory2).call(this, tasks);

      _classPrivateFieldSet(this, _tasks, _classPrivateFieldGet(this, _tasks).concat(tasks));

      tasks.forEach(function (task) {
        return _this2.trigger(Event.newTask, {
          bubbles: true
        }, {
          task: task
        });
      });

      _classPrivateMethodGet(this, _toggleEmptyText, _toggleEmptyText2).call(this, 'hide').then(function () {
        if (resolve) {
          _this2.resolver.resolve(function (manager) {
            if (manager.getTasks().length > 0) {
              manager.trigger(Event.fetchStart, {
                bubbles: true
              });
            }
          }, function (manager, numberRequests) {
            manager.trigger(Event.fetchEnd, {
              bubbles: true
            }, {
              requests: numberRequests
            });
          });
        }
      });
    }
    /**
     * @param {TaskAbstract} task
     * @param {Object} response
     * @private
     */
    ;

    _proto._updateTask = function _updateTask(task, response) {
      var _this3 = this;

      if (task.progress !== response.progress || task.status !== response.status || task.text !== response.text || task.title !== response.title) {
        var isStatusChange = task.status !== response.status,
            oldData = extend({}, task);
        task = extend(task, response);
        task.refresh(oldData);

        if (isStatusChange) {
          task.cssClassSwitch();
          this.trigger(Event.statusChange, {
            bubbles: true
          }, {
            task: task,
            oldStatus: oldData.status
          });

          if (StatusesList.is(StatusesList.SET_VISIBLE, task.status)) {
            if (task.element.parentNode === null) {
              var element = task.element;
              element.style.display = 'none';
              this.wrapperTasksElement.append(element);
              animateEl(element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task, 'show')).then(function () {
                _this3.trigger(Event.taskElementAppend, {
                  bubbles: true
                }, {
                  task: task
                });

                task.callCallback('show');
              });
            }
          }

          if (StatusesList.is(StatusesList.SET_COMPLETE, task.status)) {
            this.removeTask(task);

            if (false === task.manager.options.common && task.result && Array.isArray(task.result.tasks)) {
              task.manager.addTasks(task.result.tasks);
            }
          }
        }
      }
    }
    /**
     *
     * @param {TaskAbstract|number} task Task instance or task id
     * @return {Boolean}
     */
    ;

    _proto.removeTask = function removeTask(task) {
      var _this4 = this;

      if (typeof task === 'number') {
        task = this.findTask(task);
      }

      if (task instanceof TaskAbstract) {
        var id = this.getTasks().findIndex(function (t) {
          return t.id === task.id;
        });

        if (id > -1) {
          _classPrivateFieldGet(this, _tasks).splice(id, 1);

          this.trigger(Event.taskRemoved, {
            bubbles: true
          }, {
            task: task
          });
          task.callCallback('remove');

          if (task.element.parentNode instanceof Element) {
            _classPrivateMethodGet(this, _removeEl, _removeEl2).call(this, task.element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task)).then(function (el) {
              task.callCallback('hide');

              _this4.trigger(Event.taskElementRemoved, {
                bubbles: true
              }, {
                task: task,
                element: el
              });

              if (_classPrivateFieldGet(_this4, _tasks).length === 0) {
                _classPrivateMethodGet(_this4, _toggleEmptyText, _toggleEmptyText2).call(_this4, 'show');
              }
            });
          }

          return true;
        }
      }

      return false;
    }
    /**
     * @param {TaskAbstract} task
     * @param {string} type
     * @return {Object}
     */
    ;

    /**
     * @param {number[]|menubar} statusFilter
     * @return {TaskAbstract[]}
     */
    _proto.getTasks = function getTasks(statusFilter) {
      var tasks = _classPrivateFieldGet(this, _tasks);

      if (statusFilter) {
        if (typeof statusFilter === 'number') {
          statusFilter = [statusFilter];
        }

        return tasks.filter(function (task) {
          if (statusFilter.indexOf(task.status) > -1) {
            return task;
          }
        });
      }

      return tasks;
    }
    /**
     * @param id
     * @return {TaskAbstract|null}
     */
    ;

    _proto.findTask = function findTask(id) {
      var task = this.getTasks().find(function (t) {
        return t.id === id;
      });

      if (task instanceof TaskAbstract) {
        return task;
      }

      return null;
    }
    /**
     * @param {Object[]|number[]} tasks
     */
    ;

    _createClass(Manager, [{
      key: "options",
      get: function get() {
        return _classPrivateFieldGet(this, _options);
      }
    }, {
      key: "ownerElement",
      get:
      /**
       * @return {Element}
       */
      function get() {
        return _classPrivateFieldGet(this, _elements).owner;
      }
      /**
       * @return {Element}
       */

    }, {
      key: "wrapperElement",
      get: function get() {
        return _classPrivateFieldGet(this, _elements).wrapper;
      }
      /**
       * @return {Element}
       */

    }, {
      key: "wrapperTasksElement",
      get: function get() {
        return _classPrivateFieldGet(this, _elements).wrapperTasks;
      }
      /**
       * @return {Resolver}
       */

    }, {
      key: "resolver",
      get: function get() {
        return _classPrivateFieldGet(this, _resolver);
      }
    }]);

    return Manager;
  }(UIComponent);

  function _toggleEmptyText2(type) {
    var el = _classPrivateFieldGet(this, _elements).emptyText,
        visible = isVisible(el);

    if (isEl(el)) {
      if (visible && type === 'hide' || visible === false && type === 'show') {
        return animateEl(el, this.options[type + 'Animation']);
      }

      el.style.display = type === 'show' ? 'block' : 'none';
    }

    return Promise.resolve(el);
  }

  function _taskAnimation2(task, type) {
    if (type === void 0) {
      type = 'hide';
    }

    var options = this.options;

    if (typeof options.tasksAnimation[type][task.status] !== "undefined") {
      return options.tasksAnimation[type][task.status];
    } else {
      return options[type + 'Animation'];
    }
  }

  function _taskFactory2(tasks) {
    var _this5 = this;

    var TaskClass = this.options.taskClass;
    tasks.forEach(function (item, index) {
      if (item instanceof TaskAbstract) {
        return;
      }

      if (typeof item === 'object' && typeof item.id !== undefined) {
        var id = item.id;
        delete item.id;
        tasks[index] = extend(new TaskClass(id, _this5), item);
      } else if (Number.parseInt(item) > 0) {
        tasks[index] = new TaskClass(item, _this5);
      } else {
        console.log('Delete not valid task item', item);
        tasks.splice(index, 1);
      }
    });
  }

  function _removeEl2(el, animation) {
    if (animation === void 0) {
      animation = this.options.hideAnimation;
    }

    if (animation !== false) {
      return animateEl(el, animation).then(function (el) {
        el.remove();
        return el;
      });
    } else {
      return Promise.resolve(false);
    }
  }

  UIComponent.classPrefix = 'qmc-';
  Manager.TaskAbstract = TaskAbstract;
  Manager.Button = Button;
  Manager.ButtonsGroup = ButtonsGroup;
  Manager.Icon = IconT;
  Manager.Defaults = Defaults;
  Manager.Events = Event;
  Manager.Statuses = StatusesList;

  $__default['default'].fn.queueManager = function (method) {
    var manager = this.data('queue-manager'),
        methods = {
      /**
       *
       * @param  {Manager.Defaults} options
       */
      init: function init(options) {
        this.each(function (index, item) {
          var $wrapper = $__default['default'](item);

          if ($wrapper.data('queueManager')) {
            return;
          }

          $wrapper.data('queueManager', new Manager($__default['default'].extend(true, {
            element: $wrapper.get(0)
          }, Manager.Defaults, options || {}, $wrapper.data('manager') || {})));
        });
        return this;
      },
      createButtons: function createButtons(options, $wrapper) {
        $wrapper = $wrapper || this;
        $wrapper.append($__default['default'](new Manager.ButtonsGroup(options).render()).data('manager', manager));
      }
    };

    if (manager instanceof Manager && typeof manager[method] === 'function') {
      return manager[method].apply(manager, Array.prototype.slice.call(arguments, 1));
    } else if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $__default['default'].error('Method ' + method + ' does not exist on queueManager ');
      return false;
    }
  };

  $__default['default'].fn.queueManager.Manager = Manager;
  $__default['default']('document').ready(function () {
    $__default['default']('.qmc-queue-manager[data-manager]').queueManager();
  });

}(window.jQuery, document, window));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwiLi4vc3JjL2pzL21peGlucy9jc3NDbGFzc05hbWUuanMiLCIuLi9zcmMvanMvdXRpbHMvZnVsbHNjcmVlbi1hcGkuanMiLCIuLi9zcmMvanMvdXRpbHMvb2JqLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2NvbXB1dGVkLXN0eWxlLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLmpzIiwiLi4vc3JjL2pzL3VJQ29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcyIsIi4uL3NyYy9qcy91dGlscy9leHRlbmQuanMiLCIuLi9zcmMvanMvc3RhdHVzZXNMaXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vc3JjL2pzL3Rhc2tBYnN0cmFjdC5qcyIsIi4uL3NyYy9qcy9yZXNvbHZlci5qcyIsIi4uL3NyYy9qcy9ldmVudHNMaXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2lzTmF0aXZlRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NvbnN0cnVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS93cmFwTmF0aXZlU3VwZXIuanMiLCIuLi9zcmMvanMvbWFuYWdlckV2ZW50LmpzIiwiLi4vc3JjL2pzL3V0aWxzL2d1aWQuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLWRhdGEuanMiLCIuLi9zcmMvanMvcHJvZ3Jlc3MuanMiLCIuLi9zcmMvanMvaWNvbnQuanMiLCIuLi9zcmMvanMvYnV0dG9uLmpzIiwiLi4vc3JjL2pzL2J1dHRvbnNHcm91cC5qcyIsIi4uL3NyYy9qcy90YXNrU3RhdHVzLmpzIiwiLi4vc3JjL2pzL3Rhc2suanMiLCIuLi9zcmMvanMvdXRpbHMvYW5pbWF0ZS5qcyIsIi4uL3NyYy9qcy9tYW5hZ2VyLmpzIiwiLi4vc3JjL2pzL2pxdWVyeS5wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENTU0NsYXNzTmFtZU1peGluICA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudWxsfHN0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc1ByZWZpeDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICAgZ2V0Q2xhc3NOYW1lOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NQcmVmaXg9PT0gbnVsbCB8fCBuYW1lLnN0YXJ0c1dpdGgodGhpcy5jbGFzc1ByZWZpeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUHJlZml4ICsgbmFtZTtcbiAgICB9LFxuXG59OyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqIEBtb2R1bGUgZnVsbHNjcmVlbi1hcGlcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG4vKipcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHNlZSBbU3BlY2lmaWNhdGlvbl17QGxpbmsgaHR0cHM6Ly9mdWxsc2NyZWVuLnNwZWMud2hhdHdnLm9yZ31cbiAqIEBzZWUgW01hcCBBcHByb2FjaCBGcm9tIFNjcmVlbmZ1bGwuanNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc31cbiAqL1xuY29uc3QgRnVsbHNjcmVlbkFwaSA9IHtcbiAgcHJlZml4ZWQ6IHRydWVcbn07XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbmNvbnN0IGFwaU1hcCA9IFtcbiAgW1xuICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICdmdWxsc2NyZWVuJ1xuICBdLFxuICAvLyBXZWJLaXRcbiAgW1xuICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxuICAgICctd2Via2l0LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNb3ppbGxhXG4gIFtcbiAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLFxuICAgICctbW96LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNaWNyb3NvZnRcbiAgW1xuICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAnTVNGdWxsc2NyZWVuRXJyb3InLFxuICAgICctbXMtZnVsbHNjcmVlbidcbiAgXVxuXTtcblxuY29uc3Qgc3BlY0FwaSA9IGFwaU1hcFswXTtcbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuICAvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cbiAgaWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuICAgIGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuICAgIEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuICB9XG5cbiAgRnVsbHNjcmVlbkFwaS5wcmVmaXhlZCA9IGJyb3dzZXJBcGlbMF0gIT09IHNwZWNBcGlbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG4iLCIvKipcbiAqIEBmaWxlIG9iai5qc1xuICogQG1vZHVsZSBvYmpcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6RWFjaENhbGxiYWNrXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXkgZm9yIHRoZSBvYmplY3QgdGhhdCBpcyBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXktdmFsdWUgZm9yIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXJcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6UmVkdWNlQ2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhY2N1bVxuICogICAgICAgIFRoZSB2YWx1ZSB0aGF0IGlzIGFjY3VtdWxhdGluZyBvdmVyIHRoZSByZWR1Y2UgbG9vcC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleSBmb3IgdGhlIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleS12YWx1ZSBmb3Igb2JqZWN0IHRoYXQgaXMgYmVpbmcgaXRlcmF0ZWQgb3ZlclxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogICAgICAgICBUaGUgbmV3IGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBrZXlzIG9mIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogICAgICAgIFRoZSBPYmplY3QgdG8gZ2V0IHRoZSBrZXlzIGZyb21cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqICAgICAgICAgQW4gYXJyYXkgb2YgdGhlIGtleXMgZnJvbSB0aGUgb2JqZWN0LiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoZVxuICogICAgICAgICBvYmplY3QgcGFzc2VkIGluIHdhcyBpbnZhbGlkIG9yIGhhZCBubyBrZXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG59O1xuXG4vKipcbiAqIEFycmF5LWxpa2UgaXRlcmF0aW9uIGZvciBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqICAgICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICpcbiAqIEBwYXJhbSB7b2JqOkVhY2hDYWxsYmFja30gZm5cbiAqICAgICAgICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGZvciBlYWNoIGtleSBpbiB0aGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaChvYmplY3QsIGZuKSB7XG4gIGtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiBmbihvYmplY3Rba2V5XSwga2V5KSk7XG59XG5cbi8qKlxuICogQXJyYXktbGlrZSByZWR1Y2UgZm9yIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogICAgICAgIFRoZSBPYmplY3QgdGhhdCB5b3Ugd2FudCB0byByZWR1Y2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqICAgICAgICAgQSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2gga2V5IGluIHRoZSBvYmplY3QuIEl0XG4gKiAgICAgICAgIHJlY2VpdmVzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBhbmQgdGhlIHBlci1pdGVyYXRpb24gdmFsdWUgYW5kIGtleVxuICogICAgICAgICBhcyBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gW2luaXRpYWwgPSAwXVxuICogICAgICAgIFN0YXJ0aW5nIHZhbHVlXG4gKlxuICogQHJldHVybiB7TWl4ZWR9XG4gKiAgICAgICAgIFRoZSBmaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGZuLCBpbml0aWFsID0gMCkge1xuICByZXR1cm4ga2V5cyhvYmplY3QpLnJlZHVjZSgoYWNjdW0sIGtleSkgPT4gZm4oYWNjdW0sIG9iamVjdFtrZXldLCBrZXkpLCBpbml0aWFsKTtcbn1cblxuLyoqXG4gKiBPYmplY3QuYXNzaWduLXN0eWxlIG9iamVjdCBzaGFsbG93IG1lcmdlL2V4dGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSAuLi5zb3VyY2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmIChPYmplY3QuYXNzaWduKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBhIHZhbHVlIGlzIGFuIG9iamVjdCBvZiBhbnkga2luZCAtIGluY2x1ZGluZyBET00gbm9kZXMsXG4gKiBhcnJheXMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGV0Yy4gTm90IGZ1bmN0aW9ucywgdGhvdWdoLlxuICpcbiAqIFRoaXMgYXZvaWRzIHRoZSBnb3RjaGEgd2hlcmUgdXNpbmcgYHR5cGVvZmAgb24gYSBgbnVsbGAgdmFsdWVcbiAqIHJlc3VsdHMgaW4gYCdvYmplY3QnYC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGFwcGVhcnMgdG8gYmUgYSBcInBsYWluXCIgb2JqZWN0IC0gdGhhdCBpcywgYVxuICogZGlyZWN0IGluc3RhbmNlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21wdXRlZC1zdHlsZS5qc1xuICogQG1vZHVsZSBjb21wdXRlZC1zdHlsZVxuICovXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEEgc2FmZSBnZXRDb21wdXRlZFN0eWxlLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gRmlyZWZveCwgaWYgdGhlIHBsYXllciBpcyBsb2FkZWQgaW4gYW4gaWZyYW1lIHdpdGhcbiAqIGBkaXNwbGF5Om5vbmVgLCB0aGVuIGBnZXRDb21wdXRlZFN0eWxlYCByZXR1cm5zIGBudWxsYCwgc28sIHdlIGRvIGFcbiAqIG51bGwtY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHBsYXllciBkb2Vzbid0IGJyZWFrIGluIHRoZXNlIGNhc2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtICAgIHtFbGVtZW50fSBlbFxuICogICAgICAgICAgIFRoZSBlbGVtZW50IHlvdSB3YW50IHRoZSBjb21wdXRlZCBzdHlsZSBvZlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBwcm9wXG4gKiAgICAgICAgICAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnRcbiAqXG4gKiBAc2VlICAgICAgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWwsIHByb3ApIHtcbiAgaWYgKCFlbCB8fCAhcHJvcCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZVZhbHVlID8gY29tcHV0ZWRTdHlsZVZhbHVlLmdldFByb3BlcnR5VmFsdWUocHJvcCkgfHwgY29tcHV0ZWRTdHlsZVZhbHVlW3Byb3BdIDogJyc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVkU3R5bGU7XG4iLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqIEBtb2R1bGUgYnJvd3NlclxuICovXG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5jb25zdCB3ZWJraXRWZXJzaW9uTWFwID0gKC9BcHBsZVdlYktpdFxcLyhbXFxkLl0rKS9pKS5leGVjKFVTRVJfQUdFTlQpO1xuY29uc3QgYXBwbGVXZWJraXRWZXJzaW9uID0gd2Via2l0VmVyc2lvbk1hcCA/IHBhcnNlRmxvYXQod2Via2l0VmVyc2lvbk1hcC5wb3AoKSkgOiBudWxsO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIGFuIGlQb2QuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgaU9TIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBJT1NfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbWF0Y2ggPSBVU0VSX0FHRU5ULm1hdGNoKC9PUyAoXFxkKylfL2kpO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn0oKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbiBBbmRyb2lkIGRldmljZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBBbmRyb2lkIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xudWxsfVxuICovXG5leHBvcnQgY29uc3QgQU5EUk9JRF9WRVJTSU9OID0gKGZ1bmN0aW9uKCkge1xuICAvLyBUaGlzIG1hdGNoZXMgQW5kcm9pZCBNYWpvci5NaW5vci5QYXRjaCB2ZXJzaW9uc1xuICAvLyBBTkRST0lEX1ZFUlNJT04gaXMgTWFqb3IuTWlub3IgYXMgYSBOdW1iZXIsIGlmIE1pbm9yIGlzbid0IGF2YWlsYWJsZSwgdGhlbiBvbmx5IE1ham9yIGlzIHJldHVybmVkXG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvQW5kcm9pZCAoXFxkKykoPzpcXC4oXFxkKykpPyg/OlxcLihcXGQrKSkqL2kpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMV0gJiYgcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIGNvbnN0IG1pbm9yID0gbWF0Y2hbMl0gJiYgcGFyc2VGbG9hdChtYXRjaFsyXSk7XG5cbiAgaWYgKG1ham9yICYmIG1pbm9yKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0gKyAnLicgKyBtYXRjaFsyXSk7XG4gIH0gZWxzZSBpZiAobWFqb3IpIHtcbiAgICByZXR1cm4gbWFqb3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBuYXRpdmUgQW5kcm9pZCBicm93c2VyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19OQVRJVkVfQU5EUk9JRCA9IElTX0FORFJPSUQgJiYgQU5EUk9JRF9WRVJTSU9OIDwgNSAmJiBhcHBsZVdlYmtpdFZlcnNpb24gPCA1Mzc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBNb3ppbGxhIEZpcmVmb3guXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0ZJUkVGT1ggPSAoL0ZpcmVmb3gvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIE1pY3Jvc29mdCBFZGdlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19FREdFID0gKC9FZGcvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIEdvb2dsZSBDaHJvbWUuXG4gKlxuICogVGhpcyB3aWxsIGFsc28gYmUgYHRydWVgIGZvciBDaHJvbWUgb24gaU9TLCB3aGljaCB3aWxsIGhhdmUgZGlmZmVyZW50IHN1cHBvcnRcbiAqIGFzIGl0IGlzIGFjdHVhbGx5IFNhZmFyaSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gIUlTX0VER0UgJiYgKCgvQ2hyb21lL2kpLnRlc3QoVVNFUl9BR0VOVCkgfHwgKC9DcmlPUy9pKS50ZXN0KFVTRVJfQUdFTlQpKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgR29vZ2xlIENocm9tZSB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgQ0hST01FX1ZFUlNJT04gPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvKENocm9tZXxDcmlPUylcXC8oXFxkKykvKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsyXSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBJbnRlcm5ldCBFeHBsb3JlciB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgSUVfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzdWx0ID0gKC9NU0lFXFxzKFxcZCspXFwuXFxkLykuZXhlYyhVU0VSX0FHRU5UKTtcbiAgbGV0IHZlcnNpb24gPSByZXN1bHQgJiYgcGFyc2VGbG9hdChyZXN1bHRbMV0pO1xuXG4gIGlmICghdmVyc2lvbiAmJiAoL1RyaWRlbnRcXC83LjAvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAoL3J2OjExLjAvKS50ZXN0KFVTRVJfQUdFTlQpKSB7XG4gICAgLy8gSUUgMTEgaGFzIGEgZGlmZmVyZW50IHVzZXIgYWdlbnQgc3RyaW5nIHRoYW4gb3RoZXIgSUUgdmVyc2lvbnNcbiAgICB2ZXJzaW9uID0gMTEuMDtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uO1xufSgpKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGRlc2t0b3AgU2FmYXJpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSAoL1NhZmFyaS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19DSFJPTUUgJiYgIUlTX0FORFJPSUQgJiYgIUlTX0VER0U7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhIFdpbmRvd3MgbWFjaGluZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfV0lORE9XUyA9ICgvV2luZG93cy9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIHRvdWNoLWVuYWJsZWQuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRPVUNIX0VOQUJMRUQgPSBCb29sZWFuKERvbS5pc1JlYWwoKSAmJiAoXG4gICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8XG4gIHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIHdpbmRvdy5kb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBhZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpIHx8XG4gIChJU19TQUZBUkkgJiYgVE9VQ0hfRU5BQkxFRCAmJiAhKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBob25lLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGlPUyBkZXZpY2UuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbnkgZmxhdm9yIG9mIFNhZmFyaSAtIGluY2x1ZGluZyBpT1MuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0FOWV9TQUZBUkkgPSAoSVNfU0FGQVJJIHx8IElTX0lPUykgJiYgIUlTX0NIUk9NRTtcbiIsIi8qKlxuICogQGZpbGUgZG9tLmpzXG4gKiBAbW9kdWxlIGRvbVxuICovXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgZnMgZnJvbSAnLi9mdWxsc2NyZWVuLWFwaSc7XG5cbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vb2JqJztcbmltcG9ydCBjb21wdXRlZFN0eWxlIGZyb20gJy4vY29tcHV0ZWQtc3R5bGUnO1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICcuL2Jyb3dzZXInO1xuXG4vKipcbiAqIERldGVjdCBpZiBhIHZhbHVlIGlzIGEgc3RyaW5nIHdpdGggYW55IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiAgICAgICAgIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIG5vbi1ibGFuaywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICovXG5mdW5jdGlvbiBpc05vbkJsYW5rU3RyaW5nKHN0cikge1xuICAgIC8vIHdlIHVzZSBzdHIudHJpbSBhcyBpdCB3aWxsIHRyaW0gYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGZyb20gdGhlIGZyb250IG9yIGJhY2sgb2Ygbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycy4gYWthXG4gICAgLy8gQW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIHN0aWxsIGNvbnRhaW4gdGhlbSBhZnRlciBgdHJpbWAgYnV0IHdoaXRlc3BhY2Ugb25seSBzdHJpbmdzXG4gICAgLy8gd2lsbCBoYXZlIGEgbGVuZ3RoIG9mIDAsIGZhaWxpbmcgdGhpcyBjaGVjay5cbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgQm9vbGVhbihzdHIudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaGFzIHdoaXRlc3BhY2UuIFRoaXMgaXMgdXNlZCBieVxuICogY2xhc3MgbWV0aG9kcyB0byBiZSByZWxhdGl2ZWx5IGNvbnNpc3RlbnQgd2l0aCB0aGUgY2xhc3NMaXN0IEFQSS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqICAgICAgICAgVGhlIHN0cmluZyB0byBjaGVjayBmb3Igd2hpdGVzcGFjZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIHRoZXJlIGlzIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgLy8gc3RyLmluZGV4T2YgaW5zdGVhZCBvZiByZWdleCBiZWNhdXNlIHN0ci5pbmRleE9mIGlzIGZhc3RlciBwZXJmb3JtYW5jZSB3aXNlLlxuICAgIGlmIChzdHIuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzcyBoYXMgaWxsZWdhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvZHVjZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgYSBjbGFzc05hbWUgd2l0aGluIGFuIGVsZW1lbnRzIGNsYXNzTmFtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVcbiAqICAgICAgICAgVGhlIGNsYXNzTmFtZSB0byBnZW5lcmF0ZSB0aGUgUmVnRXhwIGZvci5cbiAqXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiAgICAgICAgIFRoZSBSZWdFeHAgdGhhdCB3aWxsIGNoZWNrIGZvciBhIHNwZWNpZmljIGBjbGFzc05hbWVgIGluIGFuIGVsZW1lbnRzXG4gKiAgICAgICAgIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY2xhc3NSZWdFeHAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKCR8XFxcXHMpJyk7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBET00gaW50ZXJmYWNlIGFwcGVhcnMgdG8gYmUgcmVhbCAoaS5lLiBub3Qgc2ltdWxhdGVkKS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGFwcGVhcnMgdG8gYmUgcmVhbCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWwoKSB7XG4gICAgLy8gQm90aCBkb2N1bWVudCBhbmQgd2luZG93IHdpbGwgbmV2ZXIgYmUgdW5kZWZpbmVkIHRoYW5rcyB0byBgZ2xvYmFsYC5cbiAgICByZXR1cm4gZG9jdW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzLCB2aWEgZHVjayB0eXBpbmcsIHdoZXRoZXIgb3Igbm90IGEgdmFsdWUgaXMgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICAgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIERPTSBlbGVtZW50LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWwodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZSwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luRnJhbWUoKSB7XG5cbiAgICAvLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGhlcmUgYmVjYXVzZSBTYWZhcmkgd2lsbCB0aHJvdyBlcnJvcnMgd2hlbiBhdHRlbXB0aW5nXG4gICAgLy8gdG8gZ2V0IGVpdGhlciBgcGFyZW50YCBvciBgc2VsZmBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGY7XG4gICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBmdW5jdGlvbnMgdG8gcXVlcnkgdGhlIERPTSB1c2luZyBhIGdpdmVuIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge3N0cmluZ30gbWV0aG9kXG4gKiAgICAgICAgICBUaGUgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgcXVlcnkgd2l0aC5cbiAqXG4gKiBAcmV0dXJuICB7RnVuY3Rpb259XG4gKiAgICAgICAgICBUaGUgcXVlcnkgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJpZXIobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBpZiAoIWlzTm9uQmxhbmtTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbbWV0aG9kXShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25CbGFua1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSBpc0VsKGNvbnRleHQpID8gY29udGV4dCA6IGRvY3VtZW50O1xuXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXSAmJiBjdHhbbWV0aG9kXShzZWxlY3Rvcik7XG4gICAgfTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCBhbmQgYXBwbGllcyBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmQgaW5zZXJ0cyBjb250ZW50LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWU9J2RpdiddXG4gKiAgICAgICAgIE5hbWUgb2YgdGFnIHRvIGJlIGNyZWF0ZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbcHJvcGVydGllcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBwcm9wZXJ0aWVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbYXR0cmlidXRlcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yfSBjb250ZW50XG4gKiAgICAgICAgQSBjb250ZW50IGRlc2NyaXB0b3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcGVydGllc1twcm9wTmFtZV07XG5cbiAgICAgICAgLy8gU2VlICMyMTc2XG4gICAgICAgIC8vIFdlIG9yaWdpbmFsbHkgd2VyZSBhY2NlcHRpbmcgYm90aCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGluIHRoZVxuICAgICAgICAvLyBzYW1lIG9iamVjdCwgYnV0IHRoYXQgZG9lc24ndCB3b3JrIHNvIHdlbGwuXG4gICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKCdhcmlhLScpICE9PSAtMSB8fCBwcm9wTmFtZSA9PT0gJ3JvbGUnIHx8IHByb3BOYW1lID09PSAndHlwZScpIHtcblxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCB2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbFtzdHlsZU5hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0ZXh0Q29udGVudCBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgZXZlcnl3aGVyZSBhbmQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBtZXRob2QgZm9yIGl0LlxuICAgICAgICAgICAgdGV4dENvbnRlbnQoZWwsIHZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxbcHJvcE5hbWVdICE9PSB2YWwgfHwgcHJvcE5hbWUgPT09ICd0YWJJbmRleCcpIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5qZWN0cyB0ZXh0IGludG8gYW4gZWxlbWVudCwgcmVwbGFjaW5nIGFueSBleGlzdGluZyBjb250ZW50cyBlbnRpcmVseS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBhZGQgdGV4dCBjb250ZW50IGludG9cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcbiAqICAgICAgICAgVGhlIHRleHQgY29udGVudCB0byBhZGQuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBhZGRlZCB0ZXh0IGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29udGVudChlbCwgdGV4dCkge1xuICAgIGlmICh0eXBlb2YgZWwudGV4dENvbnRlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIG5vZGUgb2YgYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGRcbiAqICAgICAgICBFbGVtZW50IHRvIGluc2VydFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gKiAgICAgICAgRWxlbWVudCB0byBpbnNlcnQgY2hpbGQgaW50b1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRvKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIEVsZW1lbnQgdG8gY2hlY2tcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9DaGVja1xuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGNoZWNrIGZvclxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIGBjbGFzc1RvQ2hlY2tgIGhhcyB3aGl0ZSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzVG9DaGVjaykge1xuICAgIHRocm93SWZXaGl0ZXNwYWNlKGNsYXNzVG9DaGVjayk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NSZWdFeHAoY2xhc3NUb0NoZWNrKS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIGFkZCBjbGFzcyBuYW1lIHRvLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NUb0FkZFxuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGFkZC5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgYWRkZWQgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9BZGQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuXG4gICAgICAgIC8vIERvbid0IG5lZWQgdG8gYHRocm93SWZXaGl0ZXNwYWNlYCBoZXJlIGJlY2F1c2UgYGhhc0VsQ2xhc3NgIHdpbGwgZG8gaXRcbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgY2xhc3NMaXN0IG5vdCBiZWluZyBzdXBwb3J0ZWQuXG4gICAgfSBlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NUb0FkZCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc1RvQWRkKS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIHJlbW92ZSBhIGNsYXNzIG5hbWUgZnJvbS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9SZW1vdmVcbiAqICAgICAgICAgQ2xhc3MgbmFtZSB0byByZW1vdmVcbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCBjbGFzcyBuYW1lIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc1RvUmVtb3ZlKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0lmV2hpdGVzcGFjZShjbGFzc1RvUmVtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMgIT09IGNsYXNzVG9SZW1vdmU7XG4gICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBUaGUgY2FsbGJhY2sgZGVmaW5pdGlvbiBmb3IgdG9nZ2xlQ2xhc3MuXG4gKlxuICogQGNhbGxiYWNrIG1vZHVsZTpkb21+UHJlZGljYXRlQ2FsbGJhY2tcbiAqIEBwYXJhbSAgICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICAgIFRoZSBET00gZWxlbWVudCBvZiB0aGUgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgICAgVGhlIGBjbGFzc05hbWVgIHRoYXQgd2FudHMgdG8gYmUgdG9nZ2xlZFxuICpcbiAqIEByZXR1cm4gICB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKiAgICAgICAgICAgSWYgYHRydWVgIGlzIHJldHVybmVkLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gKiAgICAgICAgICAgYGVsZW1lbnRgLiBJZiBgZmFsc2VgLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgcmVtb3ZlZCBmcm9tXG4gKiAgICAgICAgICAgdGhlIGBlbGVtZW50YC4gSWYgYHVuZGVmaW5lZGAsIHRoZSBjYWxsYmFjayB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBuYW1lIHRvL2Zyb20gYW4gZWxlbWVudCBkZXBlbmRpbmcgb24gYW4gb3B0aW9uYWxcbiAqIGNvbmRpdGlvbiBvciB0aGUgcHJlc2VuY2UvYWJzZW5jZSBvZiB0aGUgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRvIHRvZ2dsZSBhIGNsYXNzIG5hbWUgb24uXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgIFRoZSBjbGFzcyB0aGF0IHNob3VsZCBiZSB0b2dnbGVkLlxuICpcbiAqIEBwYXJhbSAge2Jvb2xlYW58bW9kdWxlOmRvbX5QcmVkaWNhdGVDYWxsYmFja30gW3ByZWRpY2F0ZV1cbiAqICAgICAgICAgU2VlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHtAbGluayBtb2R1bGU6ZG9tflByZWRpY2F0ZUNhbGxiYWNrfVxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggYSBjbGFzcyB0aGF0IGhhcyBiZWVuIHRvZ2dsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlLCBwcmVkaWNhdGUpIHtcblxuICAgIC8vIFRoaXMgQ0FOTk9UIHVzZSBgY2xhc3NMaXN0YCBpbnRlcm5hbGx5IGJlY2F1c2UgSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgdG8gdGhlIGBjbGFzc0xpc3QudG9nZ2xlKClgIG1ldGhvZCEgV2hpY2ggaXMgZmluZSBiZWNhdXNlXG4gICAgLy8gYGNsYXNzTGlzdGAgd2lsbCBiZSB1c2VkIGJ5IHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBoYXMgPSBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcblxuICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZShlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9ICFoYXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5lY2Vzc2FyeSBjbGFzcyBvcGVyYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGVcbiAgICAvLyBlbGVtZW50LCBubyBhY3Rpb24gaXMgcmVxdWlyZWQuXG4gICAgaWYgKHByZWRpY2F0ZSA9PT0gaGFzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKipcbiAqIEFwcGx5IGF0dHJpYnV0ZXMgdG8gYW4gSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqICAgICAgICBFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGVzIHRvLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqICAgICAgICBBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYXR0clZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBhdHRyVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCAoYXR0clZhbHVlID09PSB0cnVlID8gJycgOiBhdHRyVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBhbiBlbGVtZW50J3MgYXR0cmlidXRlIHZhbHVlcywgYXMgZGVmaW5lZCBvbiB0aGUgSFRNTCB0YWcuXG4gKlxuICogQXR0cmlidXRlcyBhcmUgbm90IHRoZSBzYW1lIGFzIHByb3BlcnRpZXMuIFRoZXkncmUgZGVmaW5lZCBvbiB0aGUgdGFnXG4gKiBvciB3aXRoIHNldEF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSB0YWdcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCB0YWcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIEFsbCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50LiBCb29sZWFuIGF0dHJpYnV0ZXMgd2lsbCBiZSBgdHJ1ZWAgb3JcbiAqICAgICAgICAgYGZhbHNlYCwgb3RoZXJzIHdpbGwgYmUgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXModGFnKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICAvLyBrbm93biBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAvLyB3ZSBjYW4gY2hlY2sgZm9yIG1hdGNoaW5nIGJvb2xlYW4gcHJvcGVydGllcywgYnV0IG5vdCBhbGwgYnJvd3NlcnNcbiAgICAvLyBhbmQgbm90IGFsbCB0YWdzIGtub3cgYWJvdXQgdGhlc2UgYXR0cmlidXRlcywgc28sIHdlIHN0aWxsIHdhbnQgdG8gY2hlY2sgdGhlbSBtYW51YWxseVxuICAgIGNvbnN0IGtub3duQm9vbGVhbnMgPSAnLCcgKyAnYXV0b3BsYXksY29udHJvbHMscGxheXNpbmxpbmUsbG9vcCxtdXRlZCxkZWZhdWx0LGRlZmF1bHRNdXRlZCcgKyAnLCc7XG5cbiAgICBpZiAodGFnICYmIHRhZy5hdHRyaWJ1dGVzICYmIHRhZy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB0YWcuYXR0cmlidXRlcztcblxuICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBrbm93biBib29sZWFuc1xuICAgICAgICAgICAgLy8gdGhlIG1hdGNoaW5nIGVsZW1lbnQgcHJvcGVydHkgd2lsbCByZXR1cm4gYSB2YWx1ZSBmb3IgdHlwZW9mXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhZ1thdHRyTmFtZV0gPT09ICdib29sZWFuJyB8fCBrbm93bkJvb2xlYW5zLmluZGV4T2YoJywnICsgYXR0ck5hbWUgKyAnLCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSBvZiBhbiBpbmNsdWRlZCBib29sZWFuIGF0dHJpYnV0ZSBpcyB0eXBpY2FsbHkgYW4gZW1wdHlcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgKCcnKSB3aGljaCB3b3VsZCBlcXVhbCBmYWxzZSBpZiB3ZSBqdXN0IGNoZWNrIGZvciBhIGZhbHNlIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gZG9uJ3Qgd2FudCBzdXBwb3J0IGJhZCBjb2RlIGxpa2UgYXV0b3BsYXk9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ialthdHRyTmFtZV0gPSBhdHRyVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBnZXQgdGhlIHZhbHVlIG9mLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgVmFsdWUgdG8gc2V0IHRoZSBhdHRyaWJ1dGUgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYmxvY2sgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFR1cm4gb2ZmIHRleHQgc2VsZWN0aW9uIGJsb2NraW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5ibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBJZGVudGljYWwgdG8gdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBmdW5jdGlvbiwgYnV0IGVuc3VyZXMgdGhhdFxuICogdGhlIG1ldGhvZCBpcyBzdXBwb3J0ZWQgYXQgYWxsIChpdCBpcyBpbiBhbGwgYnJvd3NlcnMgd2UgY2xhaW0gdG8gc3VwcG9ydClcbiAqIGFuZCB0aGF0IHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYmVmb3JlIGNvbnRpbnVpbmcuXG4gKlxuICogVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGFsc28gc2hpbXMgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHByb3ZpZGVkIGJ5IHNvbWVcbiAqIG9sZGVyIGJyb3dzZXJzIChuYW1lbHksIElFOCkuXG4gKlxuICogQWRkaXRpb25hbGx5LCBzb21lIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGFkZGluZyBwcm9wZXJ0aWVzIHRvIGFcbiAqIGBDbGllbnRSZWN0YC9gRE9NUmVjdGAgb2JqZWN0OyBzbywgd2Ugc2hhbGxvdy1jb3B5IGl0IHdpdGggdGhlIHN0YW5kYXJkXG4gKiBwcm9wZXJ0aWVzIChleGNlcHQgYHhgIGFuZCBgeWAgd2hpY2ggYXJlIG5vdCB3aWRlbHkgc3VwcG9ydGVkKS4gVGhpcyBoZWxwc1xuICogYXZvaWQgaW1wbGVtZW50YXRpb25zIHdoZXJlIGtleXMgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgd2hvc2UgYENsaWVudFJlY3RgIHdlIHdhbnQgdG8gY2FsY3VsYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKiAgICAgICAgIEFsd2F5cyByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IC0gb3IgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgWydib3R0b20nLCAnaGVpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ3dpZHRoJ10uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGlmIChyZWN0W2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSByZWN0W2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUoZWwsICdoZWlnaHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC53aWR0aCkge1xuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlKGVsLCAnd2lkdGgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwb3NpdGlvbiBvZiBhIERPTSBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tflBvc2l0aW9uXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlZnRcbiAqICAgICAgICAgICBQaXhlbHMgdG8gdGhlIGxlZnQuXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogICAgICAgICAgIFBpeGVscyBmcm9tIHRoZSB0b3AuXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqXG4gKiBVc2VzIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIHRlY2huaXF1ZSBmcm9tIEpvaG4gUmVzaWcuXG4gKlxuICogQHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvZ2V0Ym91bmRpbmdjbGllbnRyZWN0LWlzLWF3ZXNvbWUvXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCBvZmZzZXQuXG4gKlxuICogQHJldHVybiB7bW9kdWxlOmRvbX5Qb3NpdGlvbn1cbiAqICAgICAgICAgVGhlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQb3NpdGlvbihlbCkge1xuICAgIGlmICghZWwgfHwgKGVsICYmICFlbC5vZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuXG4gICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCAmJiBlbCAhPT0gZG9jdW1lbnRbZnMuZnVsbHNjcmVlbkVsZW1lbnRdKSB7XG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcblxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0LFxuICAgICAgICB0b3AsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgYSBET00gZWxlbWVudCBvciBtb3VzZSBwb2ludGVyLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tfkNvb3JkaW5hdGVzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHhcbiAqICAgICAgICAgICB4IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlcbiAqICAgICAgICAgICB5IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gd2l0aGluIGFuIGVsZW1lbnQuXG4gKlxuICogVGhlIGJhc2Ugb24gdGhlIGNvb3JkaW5hdGVzIGFyZSB0aGUgYm90dG9tIGxlZnQgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBvbiB3aGljaCB0byBnZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gb24uXG4gKlxuICogQHBhcmFtICB7RXZlbnRUYXJnZXR+RXZlbnR9IGV2ZW50XG4gKiAgICAgICAgIEV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6ZG9tfkNvb3JkaW5hdGVzfVxuICogICAgICAgICBBIGNvb3JkaW5hdGVzIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBtb3VzZSBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZWwsIGV2ZW50KSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbDtcblxuICAgICAgICB3aGlsZSAoaXRlbSAmJiBpdGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdodG1sJykge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZShpdGVtLCAndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgICAgIGlmICgvXm1hdHJpeC8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdHJhbnNmb3JtLnNsaWNlKDcsIC0xKS5zcGxpdCgvLFxccy8pLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZC54ICs9IHZhbHVlc1s0XTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXm1hdHJpeDNkLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sXFxzLykubWFwKE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnggKz0gdmFsdWVzWzEyXTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzEzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0ge307XG4gICAgY29uc3QgYm94VGFyZ2V0ID0gZmluZFBvc2l0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYm94ID0gZmluZFBvc2l0aW9uKGVsKTtcbiAgICBjb25zdCBib3hXID0gYm94LndpZHRoO1xuICAgIGNvbnN0IGJveEggPSBib3guaGVpZ2h0O1xuICAgIGxldCBvZmZzZXRZID0gZXZlbnQub2Zmc2V0WSAtIChib3gudG9wIC0gYm94VGFyZ2V0LnRvcCk7XG4gICAgbGV0IG9mZnNldFggPSBldmVudC5vZmZzZXRYIC0gKGJveC5sZWZ0IC0gYm94VGFyZ2V0LmxlZnQpO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIG9mZnNldFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGJveC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyBib3gudG9wO1xuICAgICAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgICAgIG9mZnNldFggLT0gdHJhbnNsYXRlZC54O1xuICAgICAgICAgICAgb2Zmc2V0WSAtPSB0cmFuc2xhdGVkLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvbi55ID0gKDEgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvZmZzZXRZIC8gYm94SCkpKTtcbiAgICBwb3NpdGlvbi54ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb2Zmc2V0WCAvIGJveFcpKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcywgdmlhIGR1Y2sgdHlwaW5nLCB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSAge01peGVkfSB2YWx1ZVxuICogICAgICAgICBDaGVjayBpZiB0aGlzIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIHRleHQgbm9kZSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMztcbn1cblxuXG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCl7XG4gICAgaWYgKGlzRWwoZWwpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9wYWNpdHkgPSBlbC5zdHlsZT8ub3BhY2l0eSAhPT0gJycgPyBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpIDogMTtcblxuICAgIGlmIChvcGFjaXR5ID09PSAwIHx8IGNvbXB1dGVkU3R5bGUoZWwsICd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISEoIGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNzc0NsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoQ2xhc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcywgY29tcGFyZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMuc3RhcnRzV2l0aChzZWFyY2hDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn0pIHtcblxuICAgIGxldCBleGlzdCA9ICcnO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoZXhpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBleGlzdCA9IGNvbXBhcmUoYyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChleGlzdCAhPT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKGV4aXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGV4aXN0KTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcylcbiAgICB9XG59XG5cbi8qKlxuICogRW1wdGllcyB0aGUgY29udGVudHMgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBlbXB0eSBjaGlsZHJlbiBmcm9tXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBubyBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlFbChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIG1peGVkIHZhbHVlIHRoYXQgZGVzY3JpYmVzIGNvbnRlbnQgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NXG4gKiB2aWEgc29tZSBtZXRob2QuIEl0IGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICpcbiAqIFR5cGUgICAgICAgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLVxuICogYHN0cmluZ2AgICB8IFRoZSB2YWx1ZSB3aWxsIGJlIG5vcm1hbGl6ZWQgaW50byBhIHRleHQgbm9kZS5cbiAqIGBFbGVtZW50YCAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBUZXh0Tm9kZWAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBBcnJheWAgICAgfCBBIG9uZS1kaW1lbnNpb25hbCBhcnJheSBvZiBzdHJpbmdzLCBlbGVtZW50cywgdGV4dCBub2Rlcywgb3IgZnVuY3Rpb25zLiBUaGVzZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgb3IgdGV4dCBub2RlIChhbnkgb3RoZXIgcmV0dXJuIHZhbHVlLCBsaWtlIGFuIGFycmF5LCB3aWxsIGJlIGlnbm9yZWQpLlxuICogYEZ1bmN0aW9uYCB8IEEgZnVuY3Rpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgdGV4dCBub2RlLCBvciBhcnJheSAtIGFueSBvZiB0aGUgb3RoZXIgcG9zc2libGUgdmFsdWVzIGRlc2NyaWJlZCBhYm92ZS4gVGhpcyBtZWFucyB0aGF0IGEgY29udGVudCBkZXNjcmlwdG9yIGNvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZ1bmN0aW9ucywgYnV0IHRob3NlIHNlY29uZC1sZXZlbCBmdW5jdGlvbnMgbXVzdCByZXR1cm4gc3RyaW5ncywgZWxlbWVudHMsIG9yIHRleHQgbm9kZXMuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ3xFbGVtZW50fFRleHROb2RlfEFycmF5fEZ1bmN0aW9ufSBtb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yXG4gKi9cblxuLyoqXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgZm9yIGV2ZW50dWFsIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gKlxuICogVGhpcyBhbGxvd3MgYSB3aWRlIHJhbmdlIG9mIGNvbnRlbnQgZGVmaW5pdGlvbiBtZXRob2RzLCBidXQgaGVscHMgcHJvdGVjdFxuICogZnJvbSBmYWxsaW5nIGludG8gdGhlIHRyYXAgb2Ygc2ltcGx5IHdyaXRpbmcgdG8gYGlubmVySFRNTGAsIHdoaWNoIGNvdWxkXG4gKiBiZSBhbiBYU1MgY29uY2Vybi5cbiAqXG4gKiBUaGUgY29udGVudCBmb3IgYW4gZWxlbWVudCBjYW4gYmUgcGFzc2VkIGluIG11bHRpcGxlIHR5cGVzIGFuZFxuICogY29tYmluYXRpb25zLCB3aG9zZSBiZWhhdmlvciBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogICAgICAgICBBbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCB3YXMgcGFzc2VkIGluLCBub3JtYWxpemVkIHRvIGFuIGFycmF5IG9mXG4gKiAgICAgICAgIGVsZW1lbnRzIG9yIHRleHQgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpIHtcblxuICAgIC8vIEZpcnN0LCBpbnZva2UgY29udGVudCBpZiBpdCBpcyBhIGZ1bmN0aW9uLiBJZiBpdCBwcm9kdWNlcyBhbiBhcnJheSxcbiAgICAvLyB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgbm9ybWFsaXphdGlvbi5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IHVwLCBub3JtYWxpemUgdG8gYW4gYXJyYXksIHNvIG9uZSBvciBtYW55IGl0ZW1zIGNhbiBiZSBub3JtYWxpemVkLFxuICAgIC8vIGZpbHRlcmVkLCBhbmQgcmV0dXJuZWQuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGNvbnRlbnQpID8gY29udGVudCA6IFtjb250ZW50XSkubWFwKHZhbHVlID0+IHtcblxuICAgICAgICAvLyBGaXJzdCwgaW52b2tlIHZhbHVlIGlmIGl0IGlzIGEgZnVuY3Rpb24gdG8gcHJvZHVjZSBhIG5ldyB2YWx1ZSxcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBiZSBzdWJzZXF1ZW50bHkgbm9ybWFsaXplZCB0byBhIE5vZGUgb2Ygc29tZSBraW5kLlxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbCh2YWx1ZSkgfHwgaXNUZXh0Tm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICgvXFxTLykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIodmFsdWUgPT4gdmFsdWUpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGFwcGVuZHMgY29udGVudCB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgdG8gYXBwZW5kIG5vcm1hbGl6ZWQgY29udGVudCB0by5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpkb21+Q29udGVudERlc2NyaXB0b3J9IGNvbnRlbnRcbiAqICAgICAgICBBIGNvbnRlbnQgZGVzY3JpcHRvciB2YWx1ZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgZWxlbWVudCB3aXRoIGFwcGVuZGVkIG5vcm1hbGl6ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcbiAgICBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpLmZvckVhY2gobm9kZSA9PiBlbC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGluc2VydHMgY29udGVudCBpbnRvIGFuIGVsZW1lbnQ7IHRoaXMgaXMgaWRlbnRpY2FsIHRvXG4gKiBgYXBwZW5kQ29udGVudCgpYCwgZXhjZXB0IGl0IGVtcHRpZXMgdGhlIGVsZW1lbnQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEVsZW1lbnQgdG8gaW5zZXJ0IG5vcm1hbGl6ZWQgY29udGVudCBpbnRvLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggaW5zZXJ0ZWQgbm9ybWFsaXplZCBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChlbCwgY29udGVudCkge1xuICAgIHJldHVybiBhcHBlbmRDb250ZW50KGVtcHR5RWwoZWwpLCBjb250ZW50KTtcbn1cblxuXG4vKipcbiAqIGNsb3Nlc3QgZWxlbWVudCBwb2x5ZmlsbFxuICovXG4oZnVuY3Rpb24oRUxFTUVOVCkge1xuICAgIEVMRU1FTlQubWF0Y2hlcyA9IEVMRU1FTlQubWF0Y2hlcyB8fCBFTEVNRU5ULm1vek1hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVMRU1FTlQub01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICBFTEVNRU5ULmNsb3Nlc3QgPSBFTEVNRU5ULmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH07XG59KEVsZW1lbnQucHJvdG90eXBlKSk7XG5cbi8qKlxuICogRmluZHMgYSBzaW5nbGUgRE9NIGVsZW1lbnQgbWF0Y2hpbmcgYHNlbGVjdG9yYCB3aXRoaW4gdGhlIG9wdGlvbmFsXG4gKiBgY29udGV4dGAgb2YgYW5vdGhlciBET00gZWxlbWVudCAoZGVmYXVsdGluZyB0byBgZG9jdW1lbnRgKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiAgICAgICAgIEEgdmFsaWQgQ1NTIHNlbGVjdG9yLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBgcXVlcnlTZWxlY3RvcmAuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudHxTdHJpbmd9IFtjb250ZXh0PWRvY3VtZW50XVxuICogICAgICAgICBBIERPTSBlbGVtZW50IHdpdGhpbiB3aGljaCB0byBxdWVyeS4gQ2FuIGFsc28gYmUgYSBzZWxlY3RvclxuICogICAgICAgICBzdHJpbmcgaW4gd2hpY2ggY2FzZSB0aGUgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudCB3aWxsIGJlIHVzZWRcbiAqICAgICAgICAgYXMgY29udGV4dC4gSWYgbWlzc2luZyAob3Igbm8gZWxlbWVudCBtYXRjaGVzIHNlbGVjdG9yKSwgZmFsbHNcbiAqICAgICAgICAgYmFjayB0byBgZG9jdW1lbnRgLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgdGhhdCB3YXMgZm91bmQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVRdWVyaWVyKCdxdWVyeVNlbGVjdG9yJyk7XG5cbi8qKlxuICogRmluZHMgYSBhbGwgRE9NIGVsZW1lbnRzIG1hdGNoaW5nIGBzZWxlY3RvcmAgd2l0aGluIHRoZSBvcHRpb25hbFxuICogYGNvbnRleHRgIG9mIGFub3RoZXIgRE9NIGVsZW1lbnQgKGRlZmF1bHRpbmcgdG8gYGRvY3VtZW50YCkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvclxuICogICAgICAgICBBIHZhbGlkIENTUyBzZWxlY3Rvciwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gYHF1ZXJ5U2VsZWN0b3JBbGxgLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR8U3RyaW5nfSBbY29udGV4dD1kb2N1bWVudF1cbiAqICAgICAgICAgQSBET00gZWxlbWVudCB3aXRoaW4gd2hpY2ggdG8gcXVlcnkuIENhbiBhbHNvIGJlIGEgc2VsZWN0b3JcbiAqICAgICAgICAgc3RyaW5nIGluIHdoaWNoIGNhc2UgdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQgd2lsbCBiZSB1c2VkXG4gKiAgICAgICAgIGFzIGNvbnRleHQuIElmIG1pc3NpbmcgKG9yIG5vIGVsZW1lbnQgbWF0Y2hlcyBzZWxlY3RvciksIGZhbGxzXG4gKiAgICAgICAgIGJhY2sgdG8gYGRvY3VtZW50YC5cbiAqXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqICAgICAgICAgQSBlbGVtZW50IGxpc3Qgb2YgZWxlbWVudHMgdGhhdCB3ZXJlIGZvdW5kLiBXaWxsIGJlIGVtcHR5IGlmIG5vbmVcbiAqICAgICAgICAgd2VyZSBmb3VuZC5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCAkJCA9IGNyZWF0ZVF1ZXJpZXIoJ3F1ZXJ5U2VsZWN0b3JBbGwnKTtcbiIsImltcG9ydCB7Q1NTQ2xhc3NOYW1lTWl4aW59IGZyb20gJy4vbWl4aW5zL2Nzc0NsYXNzTmFtZSc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VPZlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZU9wdGlvbnNQdG9wZXJ0eShwcm9wZXJ0eSwgb3B0aW9ucywgaW5zdGFuY2VPZiA9IEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKChvcHRpb25zW3Byb3BlcnR5XSBpbnN0YW5jZW9mIGluc3RhbmNlT2YpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY2FsbC4gUHJvcGVydHkgJyArIHByb3BlcnR5ICsgJyBpcyBub3QgdmFsaWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxzdHJpbmd9ICBjb250ZW50XG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NTZXQgPSBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgYXJyYXkgPSAodHlwZW9mIHByb3BlcnRpZXMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogcHJvcGVydGllcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBjbGFzc1NldC5hZGQoaXRlbSkpO1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgY3NzQ2xhc3Mgb2YgY2xhc3NTZXQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKGNzc0NsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzZWxlY3Rvci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcLlwiLCAnZycpLCAnJCYnICsgVUlDb21wb25lbnQuY2xhc3NQcmVmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBVSUNvbXBvbmVudC5fbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIERvbS4kKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W118bnVsbH1cbiAgICAgKi9cbiAgICAkJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBzZWxlY3RvciA9IFVJQ29tcG9uZW50Ll9ub3JtYWxpemVQcmVmaXgoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gRG9tLiQkKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVUlDb21wb25lbnQsIENTU0NsYXNzTmFtZU1peGluKTtcbiIsIi8qIGNyYzMyLmpzIChDKSAyMDE0LXByZXNlbnQgU2hlZXRKUyAtLSBodHRwOi8vc2hlZXRqcy5jb20gKi9cbi8qIHZpbTogc2V0IHRzPTI6ICovXG4vKmV4cG9ydGVkIENSQzMyICovXG52YXIgQ1JDMzI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Lypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdC8qZXNsaW50LWRpc2FibGUgKi9cblx0aWYodHlwZW9mIERPX05PVF9FWFBPUlRfQ1JDID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmKCdvYmplY3QnID09PSB0eXBlb2YgZXhwb3J0cykge1xuXHRcdFx0ZmFjdG9yeShleHBvcnRzKTtcblx0XHR9IGVsc2UgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IHt9O1xuXHRcdFx0XHRmYWN0b3J5KG1vZHVsZSk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0fVxuXHQvKmVzbGludC1lbmFibGUgKi9cblx0Lypqc2hpbnQgaWdub3JlOmVuZCAqL1xufShmdW5jdGlvbihDUkMzMikge1xuQ1JDMzIudmVyc2lvbiA9ICcxLjIuMCc7XG4vKiBzZWUgcGVyZi9jcmMzMnRhYmxlLmpzICovXG4vKmdsb2JhbCBJbnQzMkFycmF5ICovXG5mdW5jdGlvbiBzaWduZWRfY3JjX3RhYmxlKCkge1xuXHR2YXIgYyA9IDAsIHRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5cblx0Zm9yKHZhciBuID0wOyBuICE9IDI1NjsgKytuKXtcblx0XHRjID0gbjtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHR0YWJsZVtuXSA9IGM7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkodGFibGUpIDogdGFibGU7XG59XG5cbnZhciBUID0gc2lnbmVkX2NyY190YWJsZSgpO1xuZnVuY3Rpb24gY3JjMzJfYnN0cihic3RyLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnN0ci5sZW5ndGggLSAxO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnN0ci5jaGFyQ29kZUF0KGkrKykpJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15ic3RyLmNoYXJDb2RlQXQoaSsrKSkmMHhGRl07XG5cdH1cblx0aWYoaSA9PT0gTCkgQyA9IChDPj4+OCkgXiBUWyhDIF4gYnN0ci5jaGFyQ29kZUF0KGkpKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfYnVmKGJ1Ziwgc2VlZCkge1xuXHRpZihidWYubGVuZ3RoID4gMTAwMDApIHJldHVybiBjcmMzMl9idWZfOChidWYsIHNlZWQpO1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSAzO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHR9XG5cdHdoaWxlKGkgPCBMKzMpIEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdHJldHVybiBDIF4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1Zl84KGJ1Ziwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSA3O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdH1cblx0d2hpbGUoaSA8IEwrNykgQyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfc3RyKHN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTD1zdHIubGVuZ3RoLCBjLCBkOyBpIDwgTDspIHtcblx0XHRjID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcblx0XHRpZihjIDwgMHg4MCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gYykmMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDE5MnwoKGM+PjYpJjMxKSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDEyOHwoYyY2MykpKSYweEZGXTtcblx0XHR9IGVsc2UgaWYoYyA+PSAweEQ4MDAgJiYgYyA8IDB4RTAwMCkge1xuXHRcdFx0YyA9IChjJjEwMjMpKzY0OyBkID0gc3RyLmNoYXJDb2RlQXQoaSsrKSYxMDIzO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDI0MHwoKGM+PjgpJjcpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+MikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoZD4+NikmMTUpfCgoYyYzKTw8NCkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KGQmNjMpKSkmMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgyMjR8KChjPj4xMikmMTUpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+NikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gQyBeIC0xO1xufVxuQ1JDMzIudGFibGUgPSBUO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJzdHIgPSBjcmMzMl9ic3RyO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJ1ZiA9IGNyYzMyX2J1Zjtcbi8vICRGbG93SWdub3JlXG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iLCJcbi8qKlxuKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuKiBAcGFyYW0gaXRlbVxuKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gc291cmNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcyk7XG59IiwiXG5jb25zdCBTdGF0dXNlc0xpc3QgPSB7XG4gICAgSU5JVDogLTEsXG4gICAgV0FJVDogMCxcbiAgICBFWEVDOiAxLFxuICAgIERPTkU6IDIsXG4gICAgRVJST1I6IDMsXG4gICAgREVMRVRFRDogOTksXG59O1xuXG5TdGF0dXNlc0xpc3QuU0VUX1ZJU0lCTEUgPSBbXG4gICAgU3RhdHVzZXNMaXN0LldBSVQsIFN0YXR1c2VzTGlzdC5FWEVDLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ET05FXG5dO1xuXG5TdGF0dXNlc0xpc3QuU0VUX0NPTVBMRVRFID0gW1xuICAgIFN0YXR1c2VzTGlzdC5ET05FLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ERUxFVEVEXG5dO1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TdGF0dXNlc0xpc3QuaXMgPSBmdW5jdGlvbiAoc2V0LCBzdGF0dXMpIHtcbiAgICByZXR1cm4gc2V0LmluZGV4T2Yoc3RhdHVzKSA+IC0xO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzZXNMaXN0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcblxuLyoqXG4gKkBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Fic3RyYWN0IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgI21hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBpZDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbW1vbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgaW5pdGlhdG9yTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJvZ3Jlc3MgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0ZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRpdGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXR1cyA9IFN0YXR1c2VzLklOSVQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQHR5cGUge3tpbml0OiBudWxsLCBoaWRlOiBudWxsLCBzaG93OiBudWxsLCByZWZyZXNoOiBudWxsLCByZW5kZXI6IG51bGwsIHJlbW92ZTogbnVsbH19XG4gICAgICovXG4gICAgY2FsbGJhY2tzID0ge1xuICAgICAgICBpbml0OiBudWxsLFxuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHNob3c6IG51bGwsXG4gICAgICAgIHJlZnJlc2g6IG51bGwsXG4gICAgICAgIGhpZGU6IG51bGwsXG4gICAgICAgIHJlbW92ZTogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgcmVzdWx0ID0gbnVsbDtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkLCBtYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJzZUludChpZCk7XG4gICAgICAgIHRoaXMuI21hbmFnZXIgPSBtYW5hZ2VyO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2FsbENhbGxiYWNrKCdpbml0JyksIDUwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICAgICAqL1xuICAgIGNhbGxDYWxsYmFjayh0eXBlLCBwYXJhbXMgPSBbXSkge1xuICAgICAgICBpZiAodGhpcy5jb21tb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY2FsbGJhY2tzW3R5cGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrc1t0eXBlXS5hcHBseSh0aGlzLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNyZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLiNlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiNlbGVtZW50ID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3dyYXBwZXInLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICdkYXRhLXRhc2staWQnOiB0aGlzLmlkXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgZWxUYXNrID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogdGhpcy5fYnVpbGRDc3NDbGFzcygpfSk7XG4gICAgICAgIHRoaXMuX3JlbmRlckNoaWxkKGVsVGFzayk7XG4gICAgICAgIHRoaXMuY2FsbENhbGxiYWNrKCdyZW5kZXInLCBbZWxUYXNrLCBlbGVtZW50XSk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGVsVGFzayk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBjaGlsZCBpbnN0YW5jZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3JlbmRlckNoaWxkKGVsV3JhcHBlcikge1xuXG4gICAgfVxuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTTWV0aG9kQ2FuQmVTdGF0aWNcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2J1aWxkQ3NzQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBbJ3Rhc2staXRlbSddXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljICNjc3NMaXN0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICh0aGlzLl9jc3NMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3NzTGlzdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jc3NMaXN0ID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgc3RhdHVzZXNMaXN0S2V5IGluIFN0YXR1c2VzTGlzdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBTdGF0dXNlc0xpc3Rbc3RhdHVzZXNMaXN0S2V5XSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jc3NMaXN0W1N0YXR1c2VzTGlzdFtzdGF0dXNlc0xpc3RLZXldXSA9IFVJQ29tcG9uZW50LmdldENsYXNzTmFtZSgnc3RhdHVzLScgKyBzdGF0dXNlc0xpc3RLZXkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzTGlzdDtcbiAgICB9O1xuXG5cbiAgICBjc3NDbGFzc1N3aXRjaCgpIHtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgIGxldCBjc3NDbGFzcywgc2VhcmNoQ2xhc3M7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1hbmFnZXIub3B0aW9ucy50aGVtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGxldCB0aGVtZSA9IHRoaXMubWFuYWdlci5vcHRpb25zLnRoZW1lW3RoaXMuc3RhdHVzXSB8fCBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgndGhlbWUtJyArIHRoZW1lKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDbGFzcyA9IFRhc2tBYnN0cmFjdC5nZXRDbGFzc05hbWUoJ3RoZW1lJyk7XG4gICAgICAgICAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3NzQ2xhc3MgPSBUYXNrQWJzdHJhY3QuI2Nzc0xpc3QoKVt0aGlzLnN0YXR1c107XG4gICAgICAgIHNlYXJjaENsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgnc3RhdHVzJyk7XG4gICAgICAgIERvbS5zd2l0Y2hDbGFzcyhlbGVtZW50LCBjc3NDbGFzcywgc2VhcmNoQ2xhc3MpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudHNcbiAgICAgKi9cbiAgICByZWZyZXNoKHJlc3BvbnNlLCBlbGVtZW50cyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKGVsZW1lbnRzLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsQ2FsbGJhY2soJ3JlZnJlc2gnLCBbcmVzcG9uc2UsIGVsZW1lbnRzXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0UHJvZ3Jlc3NUb3RhbChwcm9wZXJ0eSA9ICdwcm9ncmVzcycpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcblxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUucmVkdWNlKChhLCBjKSA9PiBhICsgYykgLyB2YWx1ZS5sZW5ndGgsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSBvbGRUYXNrXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9yZWZyZXNoRWxlbWVudHMoZWxlbWVudHMsIG9sZFRhc2spIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uc1BhcnRzID0gdGhpcy5vcHRpb25zLnBhcnRzO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5mb3JFYWNoKChlbGVtZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb3B0aW9uc1BhcnRzW2VsZW1lbnROYW1lXSxcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVmcmVzaEJhc2ljUHJvcGVydHknO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCcuJykgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBbbSwgcF0gPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBtICsgcFswXS50b1VwcGVyQ2FzZSgpICsgcC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPT0gXCJ1bmRlZmluZWRcIikgPyB0aGlzW3Byb3BlcnR5XSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gKHR5cGVvZiBvbGRUYXNrW3Byb3BlcnR5XSAhPT0gXCJ1bmRlZmluZWRcIikgPyBvbGRUYXNrW3Byb3BlcnR5XSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdfJyArIG1ldGhvZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbWV0aG9kXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW21ldGhvZF0uY2FsbCh0aGlzLCBlbGVtZW50c1tlbGVtZW50TmFtZV0sIHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTTWV0aG9kQ2FuQmVTdGF0aWNcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3JlZnJlc2hCYXNpY1Byb3BlcnR5KGVsZW1lbnQsIHZhbHVlLCBwcm9wZXJ0eSkge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgnbGlzdC0nICsgcHJvcGVydHkpO1xuICAgICAgICAgICAgbGV0IGVsTGlzdCA9IERvbS4kKCd1bC4nICsgY2xhc3NOYW1lLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgaWYgKGVsTGlzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsTGlzdCA9IHRoaXMuY3JlYXRlRWwoJ3VsJywge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoZWxMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBlbExpID0gRG9tLiQoYGxpOm50aC1jaGlsZCgke2luZGV4ICsgMX0pYCwgZWxMaXN0KTtcbiAgICAgICAgICAgICAgICBpZiAoZWxMaSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbExpc3QuYXBwZW5kKERvbS5jcmVhdGVFbCgnbGknLCB7fSwge30sIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbExpLmlubmVyVGV4dCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxMaS5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TWFuYWdlcn1cbiAgICAgKi9cbiAgICBnZXQgbWFuYWdlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RGVmYXVsdHMudGFza09wdGlvbnN8e319XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIub3B0aW9ucy50YXNrT3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IHN0YXR1c1RleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIub3B0aW9ucy5zdGF0dXNUZXh0W3RoaXMuc3RhdHVzXSB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c1RleHQgKyBcIiBcIiArIHRoaXMuZ2V0VGl0bGUoKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7c3RyIGFzIENSQzMyfSBmcm9tICdjcmMtMzInO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0ICogYXMgT2JqIGZyb20gJy4vdXRpbHMvb2JqJztcbmltcG9ydCBTdGF0dXNlc0xpc3QgZnJvbSBcIi4vc3RhdHVzZXNMaXN0XCI7XG5pbXBvcnQgVGFza0Fic3RyYWN0IGZyb20gXCIuL3Rhc2tBYnN0cmFjdFwiO1xuXG5jb25zdCBFTVBUWV9NRVNTQUdFID0gJ19fRU1QVFlfXyc7XG5cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGRlbGF5VGltZTogMTAwMCxcbiAgICBwYXJhbXM6IHt9XG59O1xuXG4vKipcbiAqIFJlc29sdmUgdGFzayBpbmZvcm1hdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvbHZlciB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UmVzb2x2ZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyAjY2FjaGUgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgc3RhdGljICNjb21tb25NYW5hZ2VycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJbXX1cbiAgICAgKi9cbiAgICAjbWFuYWdlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHt7fX1cbiAgICAgKi9cbiAgICAjb3B0aW9ucztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICAjbnVtYmVyUmVxdWVzdHMgPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgPSAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwgRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0LnBhcmFtcyAmJiBPYmouaXNQbGFpbihvcHQucGFyYW1zKSkge1xuICAgICAgICAgICAgb3B0LnBhcmFtcyA9IE9iamVjdC5lbnRyaWVzKG9wdC5wYXJhbXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9PSR7dmFsdWV9YCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uU3RhcnRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkVuZFxuICAgICAqL1xuICAgIHJlc29sdmUob25TdGFydCwgb25FbmQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlcnMgPSB0aGlzLiNnZXRNYW5hZ2VycygpO1xuXG4gICAgICAgICAgICB0aGlzLiNudW1iZXJSZXF1ZXN0cyA9IDA7XG5cbiAgICAgICAgICAgIG1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG9uU3RhcnQobWFuYWdlcikpO1xuICAgICAgICAgICAgdGhpcy4jcmVxdWVzdCgwKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgIT09IEVNUFRZX01FU1NBR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gdGhpcy4jbnVtYmVyUmVxdWVzdHM7XG4gICAgICAgICAgICAgICAgbWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gb25FbmQobWFuYWdlciwgbnVtYmVyKSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jbnVtYmVyUmVxdWVzdHMgPSAtMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgI3JlcXVlc3QodGltZU91dCA9IHRoaXMub3B0aW9ucy5kZWxheVRpbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVJlcXVlc3QodGltZU91dCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSAtICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH0nIGApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKHJhdykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyYXcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByYXcuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kVGFza3MoaXRlbS5pZCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm1hbmFnZXIuX3VwZGF0ZVRhc2sodGFzaywgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgUmVzb2x2ZXIuI3VwZGF0ZUNvbW1vbk1hbmFnZXJzKHJhdywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiNyZXF1ZXN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSByZXNwb25zZVxuICAgICAqIEBwYXJhbSByZXNvbHZlclxuICAgICAqL1xuICAgIHN0YXRpYyAjdXBkYXRlQ29tbW9uTWFuYWdlcnMocmVzcG9uc2UsIHJlc29sdmVyKSB7XG4gICAgICAgIFJlc29sdmVyLiNjb21tb25NYW5hZ2Vycy5mb3JFYWNoKG1hbmFnZXIgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBtYW5hZ2VyLmZpbmRUYXNrKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzayA9PT0gbnVsbCAmJiBTdGF0dXNlc0xpc3QuaXMoU3RhdHVzZXNMaXN0LlNFVF9DT01QTEVURSwgaXRlbS5zdGF0dXMpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29tbW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuYWRkVGFza3MoW2l0ZW0uaWRdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrID0gbWFuYWdlci5maW5kVGFzayhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuX3VwZGF0ZVRhc2sodGFzaywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmluaXRpYXRvck1hbmFnZXIgPSByZXNvbHZlci50YXNrcy5maW5kKHZhbHVlID0+IHZhbHVlLmlkID09PSBpdGVtLmlkKT8ubWFuYWdlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGFzayBpbnN0YW5jZW9mIFRhc2tBYnN0cmFjdCAmJiB0YXNrLmNvbW1vbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5fdXBkYXRlVGFzayh0YXNrLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZU91dFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2UgfCBuZXZlcj59XG4gICAgICovXG4gICAgI2NyZWF0ZVJlcXVlc3QodGltZU91dCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLnRhc2tzSWQ7XG4gICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KEVNUFRZX01FU1NBR0UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodGFza3MpLCB0aW1lT3V0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCh0YXNrcykgPT4ge1xuICAgICAgICAgICAgKyt0aGlzLiNudW1iZXJSZXF1ZXN0cztcblxuICAgICAgICAgICAgbGV0IGJvZHkgPSB0YXNrcy5tYXAoKGl0ZW0pID0+IGB0W109JHtpdGVtfWApLFxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHRoaXMub3B0aW9ucy5wYXJhbXM7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtcykgJiYgcGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBib2R5ID0gYm9keS5jb25jYXQocGFyYW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMub3B0aW9ucy51cmwsIGV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGVuY29kZVVSSShib2R5LmpvaW4oJyYnKSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0W119XG4gICAgICovXG4gICAgZ2V0IHRhc2tzKCkge1xuICAgICAgICBsZXQgdGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy4jbWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgbWFuYWdlci5nZXRUYXNrcygpLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21tb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJbXX1cbiAgICAgKi9cbiAgICBnZXQgdGFza3NJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLmlkKS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0fGJvb2xlYW59XG4gICAgICovXG4gICAgZmluZFRhc2tzKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNudW1iZXJSZXF1ZXN0cyA+IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJbXX1cbiAgICAgKi9cbiAgICAjZ2V0TWFuYWdlcnMoY29tbW9uID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNvbW1vbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcnMuZmlsdGVyKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlci5vcHRpb25zLmNvbW1vbiA9PT0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICAgICAqIEByZXR1cm4ge1Jlc29sdmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBmYWN0b3J5KG1hbmFnZXIpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG9wdGlvbnMgPSBtYW5hZ2VyLm9wdGlvbnMucmVzb2x2ZXIsXG4gICAgICAgICAgICBoYXNoID0gQ1JDMzIob3B0aW9ucy51cmwpLFxuICAgICAgICAgICAgY2FjaGUgPSBSZXNvbHZlci4jY2FjaGUsXG4gICAgICAgICAgICBjb21tb25NYW5hZ2VycyA9IFJlc29sdmVyLiNjb21tb25NYW5hZ2VycztcblxuICAgICAgICBjb25zdCByZXNvbHZlciA9IGNhY2hlW2hhc2hdID0gKGNhY2hlW2hhc2hdIGluc3RhbmNlb2YgUmVzb2x2ZXIpID8gY2FjaGVbaGFzaF0gOiBuZXcgUmVzb2x2ZXIob3B0aW9ucyksXG4gICAgICAgICAgICBtYW5hZ2VycyA9IHJlc29sdmVyLiNnZXRNYW5hZ2VycygpO1xuXG4gICAgICAgIGlmIChtYW5hZ2Vycy5pbmRleE9mKG1hbmFnZXIpID09PSAtMSkge1xuICAgICAgICAgICAgbWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcblxuICAgICAgICAgICAgaWYgKG1hbmFnZXIub3B0aW9ucy5jb21tb24pIHtcbiAgICAgICAgICAgICAgICBjb21tb25NYW5hZ2Vycy5wdXNoKG1hbmFnZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYW5hZ2VyLm93bmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1hbmFnZXIuRXZlbnRzLmRlc3Ryb3ksIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IG1hbmFnZXJzLmluZGV4T2YoZXZlbnQubWFuYWdlcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5nZXRUYXNrcygpLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5pbml0aWF0b3JNYW5hZ2VyID09PSBtYW5hZ2Vyc1tpbmRleF0pLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kZXggPSBjb21tb25NYW5hZ2Vycy5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUgPT09IGV2ZW50Lm1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbk1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZXI7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtlYWNofSBmcm9tICcuL3V0aWxzL29iaic7XG4vKipcbiAqXG4gKi9cbiBjb25zdCBFdmVudCA9IHtcbiAgICByZWFkeTogJ3FtYzptYW5hZ2VyOnJlYWR5JyxcbiAgICBkZXN0cm95OiAncW1jOm1hbmFnZXI6ZGVzdHJveScsXG4gICAgc3RhdHVzQ2hhbmdlOiAncW1jOm1hbmFnZXI6c3RhdHVzQ2hhbmdlJyxcbiAgICB0YXNrUmVtb3ZlZDogJ3FtYzptYW5hZ2VyOnRhc2tSZW1vdmVkJyxcbiAgICB0YXNrRWxlbWVudEFwcGVuZDogJ3FtYzptYW5hZ2VyOnRhc2tFbGVtZW50QXBwZW5kJyxcbiAgICB0YXNrRWxlbWVudFJlbW92ZWQ6ICdxbWM6bWFuYWdlcjp0YXNrRWxlbWVudFJlbW92ZWQnLFxuICAgIG5ld1Rhc2s6ICdxbWM6bWFuYWdlcjpuZXdUYXNrJyxcbiAgICBmZXRjaFN0YXJ0OiAncW1jOnJlc29sdmVyOnN0YXJ0JyxcbiAgICBmZXRjaEVuZDogJ3FtYzpyZXNvbHZlcjplbmQnLFxufTtcblxuRXZlbnQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV2ZW50cyA9IFtdO1xuICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICB9KTtcbiAgICByZXR1cm4gZXZlbnRzLmpvaW4oJyAnKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGZyb20gXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlRnVuY3Rpb24gZnJvbSBcIi4vaXNOYXRpdmVGdW5jdGlvbi5qc1wiO1xuaW1wb3J0IGNvbnN0cnVjdCBmcm9tIFwiLi9jb25zdHJ1Y3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufSIsIi8qKlxuICogTWFuYWdlciBFdmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudCB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgICNtYW5hZ2VyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCB0eXBlLCBwcm9wcykge1xuICAgICAgICBzdXBlcih0eXBlLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuI21hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hbmFnZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXI7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQGZpbGUgZ3VpZC5qc1xuICogQG1vZHVsZSBndWlkXG4gKi9cblxuLy8gRGVmYXVsdCB2YWx1ZSBmb3IgR1VJRHMuIFRoaXMgYWxsb3dzIHVzIHRvIHJlc2V0IHRoZSBHVUlEIGNvdW50ZXIgaW4gdGVzdHMuXG4vL1xuLy8gVGhlIGluaXRpYWwgR1VJRCBpcyAzIGJlY2F1c2Ugc29tZSB1c2VycyBoYXZlIGNvbWUgdG8gcmVseSBvbiB0aGUgZmlyc3Rcbi8vIGRlZmF1bHQgcGxheWVyIElEIGVuZGluZyB1cCBhcyBgdmpzX3ZpZGVvXzNgLlxuLy9cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpZGVvanMvdmlkZW8uanMvcHVsbC82MjE2XG5jb25zdCBfaW5pdGlhbEd1aWQgPSAzO1xuXG4vKipcbiAqIFVuaXF1ZSBJRCBmb3IgYW4gZWxlbWVudCBvciBmdW5jdGlvblxuICpcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbmxldCBfZ3VpZCA9IF9pbml0aWFsR3VpZDtcblxuLyoqXG4gKiBHZXQgYSB1bmlxdWUgYXV0by1pbmNyZW1lbnRpbmcgSUQgYnkgbnVtYmVyIHRoYXQgaGFzIG5vdCBiZWVuIHJldHVybmVkIGJlZm9yZS5cbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiAgICAgICAgIEEgbmV3IHVuaXF1ZSBJRC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5ld0dVSUQoKSB7XG4gIHJldHVybiBfZ3VpZCsrO1xufVxuXG4vKipcbiAqIFJlc2V0IHRoZSB1bmlxdWUgYXV0by1pbmNyZW1lbnRpbmcgSUQgZm9yIHRlc3Rpbmcgb25seS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R3VpZEluVGVzdHNPbmx5KCkge1xuICBfZ3VpZCA9IF9pbml0aWFsR3VpZDtcbn1cbiIsIi8qKlxuICogQGZpbGUgZG9tLWRhdGEuanNcbiAqIEBtb2R1bGUgZG9tLWRhdGFcbiAqL1xuXG5cbmltcG9ydCAqIGFzIEd1aWQgZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbmxldCBGYWtlV2Vha01hcDtcblxuaWYgKCF3aW5kb3cuV2Vha01hcCkge1xuICBGYWtlV2Vha01hcCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudmRhdGEgPSAndmRhdGEnICsgTWF0aC5mbG9vcih3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIHx8IERhdGUubm93KCkpO1xuICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXSB8fCBHdWlkLm5ld0dVSUQoKTtcblxuICAgICAgaWYgKCFrZXlbdGhpcy52ZGF0YV0pIHtcbiAgICAgICAga2V5W3RoaXMudmRhdGFdID0gYWNjZXNzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGFbYWNjZXNzXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCBhY2Nlc3MgPSBrZXlbdGhpcy52ZGF0YV07XG5cbiAgICAgIC8vIHdlIGhhdmUgZGF0YSwgcmV0dXJuIGl0XG4gICAgICBpZiAoYWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbYWNjZXNzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBoYXMoa2V5KSB7XG4gICAgICBjb25zdCBhY2Nlc3MgPSBrZXlbdGhpcy52ZGF0YV07XG5cbiAgICAgIHJldHVybiBhY2Nlc3MgaW4gdGhpcy5kYXRhO1xuICAgIH1cblxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXTtcblxuICAgICAgaWYgKGFjY2Vzcykge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2FjY2Vzc107XG4gICAgICAgIGRlbGV0ZSBrZXlbdGhpcy52ZGF0YV07XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEVsZW1lbnQgRGF0YSBTdG9yZS5cbiAqXG4gKiBBbGxvd3MgZm9yIGJpbmRpbmcgZGF0YSB0byBhbiBlbGVtZW50IHdpdGhvdXQgcHV0dGluZyBpdCBkaXJlY3RseSBvbiB0aGVcbiAqIGVsZW1lbnQuIEV4LiBFdmVudCBsaXN0ZW5lcnMgYXJlIHN0b3JlZCBoZXJlLlxuICogKGFsc28gZnJvbSBqc25pbmphLmNvbSwgc2xpZ2h0bHkgbW9kaWZpZWQgYW5kIHVwZGF0ZWQgZm9yIGNsb3N1cmUgY29tcGlsZXIpXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5XZWFrTWFwID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBGYWtlV2Vha01hcCgpO1xuIiwiaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGxhYmVsID0gJyc7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG5cbiAgICAgKi9cbiAgICBjbGFzc05hbWUgPSBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzaXplID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge1Byb2dyZXNzQmFyW119XG4gICAgICovXG4gICAgI2JhcnMgPSBbXTtcblxuICAgIGJhck9wdGlvbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0VsZW1lbnR8SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgI2xhYmVsRWwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR8SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgI2VsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzU2hvd0dyYWRpZW50ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgJGNsYXNzUHJlZml4ID0gbnVsbDtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGV4dGVuZCh0aGlzLCAuLi5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbDtcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdzaXplLScgKyB0aGlzLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaG93R3JhZGllbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCduby1ncmFkaWVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIHt9LFxuICAgICAgICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzLWl0ZW1zJyl9KVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNlbCA9IGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR8RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZ2V0TGFiZWxFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jbGFiZWxFbDtcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI2xhYmVsRWwgPSBlbCA9IERvbS5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtbGFiZWwnKX0sIHt9KVxuICAgICAgICB0aGlzLiNlbC5hcHBlbmQoZWwpO1xuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXRQcm9ncmVzcyh2YWx1ZSkge1xuXG4gICAgICAgIGNvbnN0IGJhcnMgPSB0aGlzLiNiYXJzLFxuICAgICAgICAgICAgZWwgPSB0aGlzLiNlbDtcblxuICAgICAgICB2YWx1ZSA9IChmYWxzZSA9PT0gQXJyYXkuaXNBcnJheSh2YWx1ZSkpID8gW3ZhbHVlXSA6IHZhbHVlO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoYmFyc1tpbmRleF0gaW5zdGFuY2VvZiBQcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgICAgIGJhcnNbaW5kZXhdLnByb2dyZXNzID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhcnNbaW5kZXhdID0gbmV3IFByb2dyZXNzQmFyKHRoaXMuYmFyT3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbXMnKSkuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1pdGVtJyksXG4gICAgICAgICAgICAgICAgICAgIH0sIHt9LCBiYXJzW2luZGV4XS5yZW5kZXIoKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbGFzc1Rob0NoZWNrID0gUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdtb3JlLXRoYW4tdGhyZWUnKTtcbiAgICAgICAgaWYgKERvbS5oYXNDbGFzcyhlbCwgY2xhc3NUaG9DaGVjaykgPT09IGZhbHNlICYmIHZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgY2xhc3NUaG9DaGVjayk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsYWJlbFxuICAgICAqL1xuICAgIHNldExhYmVsKGxhYmVsKSB7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy4jZ2V0TGFiZWxFbCgpLmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW58SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc05hbWUgPSAncHJvZ3Jlc3MtYmFyJztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICAjcHJvZ3Jlc3MgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ3xib29sZWFufVxuICAgICAqL1xuICAgIGxhYmVsVGV4dCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW4gPSAwO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heCA9IDEwMDtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLCAuLi5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5fFN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWxUZXh0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29udGVudC5wdXNoKERvbS5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6ICdzci1vbmx5JywgY3NzOiB7d2lkdGg6IDB9fSwge30sIHRoaXMubGFiZWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmxhYmVsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNlbGVtZW50ID0gZWwgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKHRoaXMuY2xhc3NOYW1lKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByb2xlOiBcInByb2dyZXNzYmFyXCIsXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHRoaXMucHJvZ3Jlc3MsXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1pbic6IHRoaXMubWluLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLm1heFxuICAgICAgICB9LCBjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSAodGhpcy5sYWJlbFRleHQpID8gdGhpcy5sYWJlbFRleHQgOiAnJztcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvZ3Jlc3N9JSAke2xhYmVsfWBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHByb2dyZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICovXG4gICAgc2V0IHByb2dyZXNzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuI3Byb2dyZXNzID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgdmFsdWUpO1xuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IHRoaXMubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dmFsdWV9JWBcblxuICAgIH1cbn0iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvblQgZXh0ZW5kcyBVSUNvbXBvbmVudHtcblxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgKi9cbiAgICAjaWNvbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAqL1xuICAgICNzaXplID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSBpY29uXG4gICAgICogQHBhcmFtIHtib29sZWFufHN0cmluZ30gc2l6ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGljb24gPSBmYWxzZSwgc2l6ZSA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2ljb24gPSBpY29uO1xuICAgICAgICB0aGlzLiNzaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogdGhpcy4jYnVpbGRDbGFzc05hbWUoKX0sIHt9LFxuICAgICAgICAgICAgRG9tLmNyZWF0ZUVsKCdzcGFuJywge30sIHt9LCBbJ3MxJywgJ3MyJywgJ3MzJ10ubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRG9tLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogY2xhc3NOYW1lfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgI2J1aWxkQ2xhc3NOYW1lKCkge1xuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnaWNvbi10JyxcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLiNpY29uKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy4jaWNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdzaXplLScrdGhpcy4jc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0IGljb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuI2ljb247XG4gICAgICAgICAgICBpZiAoaWNvbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCBpY29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jaWNvbiA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0IHNpemUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSAgPSBJY29uVC5nZXRDbGFzc05hbWUoJ3NpemUtJyt2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy4jc2l6ZTtcbiAgICAgICAgICAgIGlmIChzaXplICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsIHNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaXplID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBjb2xvcih2YWx1ZSkge1xuICAgICAgICBEb20uJCQoJ3NwYW5bY2xhc3NePXNdJywgdGhpcy4jZWxlbWVudCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5cbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCBJY29uVCBmcm9tICcuL2ljb250JztcblxuLyoqXG4gKlxuICogQHR5cGUge3tpY29uSG92ZXJOYW1lOiBudWxsLCBoYW5kbGVyOiBudWxsLCBzaXplOiBudWxsLCBkYXRhOiB7fSwgaGlkZGVuTGFiZWw6IHN0cmluZywgaWNvbk5hbWU6IG51bGwsIGFuaW1hdGVkQ2xpY2s6IGJvb2xlYW4sIGhhbmRsZXJUaW1vdXREZWxheTogbnVtYmVyLCBpY29uU2l6ZTogbnVsbCwgZGlzYWJsZWQ6IGJvb2xlYW4sIGxhYmVsOiBib29sZWFuLCB0YWdOYW1lOiBzdHJpbmd9fVxuICovXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRhZ05hbWU6ICdidXR0b24nLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGhhbmRsZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGhhbmRsZXJUaW1vdXREZWxheTogNTAwLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICBsYWJlbDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIGhpZGRlbkxhYmVsOiAnJyxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGRpc2FibGVkOiBmYWxzZSxcblxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHNpemU6IG51bGwsXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIGljb25OYW1lOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIGljb25Ib3Zlck5hbWU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgaWNvblNpemU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBhbmltYXRlZENsaWNrOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBkYXRhOiB7fVxuXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgI29wdGlvbnMgPSBEZWZhdWx0cztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtJY29uVH1cbiAgICAgKi9cbiAgICAjaWNvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIERlZmF1bHRzLCBvcHRpb25zKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBjb250ZW50ID0gW107XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLmljb247XG4gICAgICAgICAgICBjb250ZW50LnB1c2goaS5yZW5kZXIoKSk7XG4gICAgICAgICAgICBpLmljb24gPSBvcHRpb25zLmljb25OYW1lO1xuICAgICAgICAgICAgaS5zaXplID0gb3B0aW9ucy5pY29uU2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmxhYmVsKSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2goRG9tLmNyZWF0ZUVsKCdwJywge30sIHt9LCBvcHRpb25zLmxhYmVsKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oaWRkZW5MYWJlbCkge1xuICAgICAgICAgICAgY29udGVudC5wdXNoKHRoaXMuY3JlYXRlRWwoJ3AnLCB7Y2xhc3NOYW1lOiAnYnV0dG9uLWhpZGRlbid9LCB7fSwgb3B0aW9ucy5oaWRkZW5MYWJlbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZWRDbGljaykge1xuICAgICAgICAgICAgY29uc3QgZHJvcCA9IERvbS5jcmVhdGVFbCgncCcsIHtjbGFzc05hbWU6ICdkcm9wJ30pO1xuICAgICAgICAgICAgZHJvcC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKHRoaXMsICdhbmltYXRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChkcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsID0gdGhpcy4jZWxlbWVudCA9IHRoaXMuY3JlYXRlRWwob3B0aW9ucy50YWdOYW1lLCB7Y2xhc3NOYW1lOiBCdXR0b24uI2J1aWxkQ2xhc3NOYW1lKG9wdGlvbnMpfSwge30sIGNvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBvcHRpb25zLmRpc2FibGVkO1xuICAgICAgICB0aGlzLiNhZGRIYW5kbGVycyhlbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIGVsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljICNidWlsZENsYXNzTmFtZShvcHRpb25zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbJ2J1dHRvbiddO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdzaXplLScgKyBvcHRpb25zLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGlkZGVuTGFiZWwpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdoYXMtaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodmFsdWUgIT09IG9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNlbGVtZW50LmRpc2FibGVkID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERvbS50b2dnbGVDbGFzcyh0aGlzLiNlbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0RlZmF1bHRzfVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0ljb25UfVxuICAgICAqL1xuICAgIGdldCBpY29uKCkge1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuI2ljb247XG4gICAgICAgIGlmIChpY29uIGluc3RhbmNlb2YgSWNvblQpIHtcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiNpY29uID0gbmV3IEljb25UKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgICNhZGRIYW5kbGVycyhlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGVkQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBCdXR0b24uI2FuaW1hdGVkQ2xpY2soZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYW5kbGVyVGltb3V0RGVsYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wdGlvbnMuaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KSwgb3B0aW9ucy5oYW5kbGVyVGltb3V0RGVsYXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3B0aW9ucy5oYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbkhvdmVyTmFtZSkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRpc2FibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmljb24uaWNvbiA9IG9wdGlvbnMuaWNvbkhvdmVyTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uaWNvbiA9IG9wdGlvbnMuaWNvbk5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgc3RhdGljICNhbmltYXRlZENsaWNrKGVsZW1lbnQpIHtcblxuICAgICAgICBjb25zdCBkcm9wID0gRG9tLiQoJy5kcm9wJywgZWxlbWVudCk7XG4gICAgICAgIGlmIChkcm9wKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBEb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIHggPSBldmVudC5wYWdlWCAtIHJlY3Qud2lkdGggLyAyIC0gcmVjdC5sZWZ0IC0gd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgeSA9IGV2ZW50LnBhZ2VZIC0gcmVjdC5oZWlnaHQgLyAyIC0gcmVjdC50b3AgLSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgZHJvcC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgIGRyb3Auc3R5bGUubGVmdCA9IHggKyAncHgnO1xuXG4gICAgICAgICAgICBEb20uYWRkQ2xhc3MoZHJvcCwgJ2FuaW1hdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbkJ1dHRvbi5EZWZhdWx0cyA9IERlZmF1bHRzO1xuXG5cbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBleHRlbmQgZnJvbSBcIi4vdXRpbHMvZXh0ZW5kXCI7XG5cblxuLyoqXG4gKlxuICogQHR5cGUge3tzZWxlY3RJY29uOiBudWxsLCBzY2FsZWQ6IGJvb2xlYW4sIGFycmFuZ2U6IGJvb2xlYW4sIHNlbGVjdGFibGU6IGJvb2xlYW59fVxuICovXG5jb25zdCBEZWZhdWx0cyA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCdXR0b24uRGVmYXVsdHNbXX1cbiAgICAgKi9cbiAgICBidXR0b25zOiBbXSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGFycmFuZ2U6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2NhbGVkOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzZWxlY3RJY29uOiBudWxsXG5cbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uc0dyb3VwIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbltdfVxuICAgICAqL1xuICAgIGJ1dHRvbnMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0RlZmF1bHRzfVxuICAgICAqL1xuICAgICNvcHRpb25zID0gRGVmYXVsdHM7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBVSUNvbXBvbmVudC5yZW1vdmVPcHRpb25zUHRvcGVydHkoJ2J1dHRvbnMnLCBvcHRpb25zLCBBcnJheSk7XG4gICAgICAgIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIERlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5idXR0b25zID0gYnV0dG9ucy5tYXAoKGNvbmZpZykgPT4gbmV3IEJ1dHRvbihjb25maWcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudDtcblxuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNlbGVtZW50ID0gZWwgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBCdXR0b25zR3JvdXAuI2J1aWxkQ2xhc3NOYW1lKHRoaXMub3B0aW9ucyl9LCB7fSxcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5tYXAoKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBidG4ucmVuZGVyKClcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuI2JpbmRTZWxlY3RFdmVudHMoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyAjYnVpbGRDbGFzc05hbWUob3B0aW9ucykge1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBbJ2J1dHRvbi1ncm91cCddO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmFycmFuZ2UpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdhcnJhbmdlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zY2FsZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdzY2FsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBhcnJhbmdlKHZhbHVlKSB7XG5cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnYXJyYW5nZScpO1xuXG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQsXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy4jb3B0aW9ucztcblxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChEb20uaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmFycmFuZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgICNiaW5kU2VsZWN0RXZlbnRzKGVsZW1lbnQpIHtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoICcuJyArIEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ0bi5lbGVtZW50ID09PSBlbGVtZW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kJCgnLmJ1dHRvbi5zZWxlY3RlZCcsIGV2ZW50LnRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBEb20uc2V0QXR0cmlidXRlKGVsLCAnZGF0YS1ncm91cC1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgIEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ3NlbGVjdGVkJykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQkKCcuYnV0dG9uW2RhdGEtZ3JvdXAtc2VsZWN0ZWRdJywgZXZlbnQudGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVBdHRyaWJ1dGUoZWwsICdkYXRhLWdyb3VwLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0J1dHRvbnxudW1iZXJ9IGJ1dHRvblxuICAgICAqL1xuICAgIHNldCBzZWxlY3RlZChidXR0b24pIHtcblxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdzZWxlY3RlZCcpLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBpZiAodHlwZW9mIGJ1dHRvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgYnV0dG9uID0gdGhpcy5idXR0b25zW2J1dHRvbl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUF0dHJpYnV0ZShidG4uZWxlbWVudCwgJ2RhdGEtZ3JvdXAtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoYnRuLmVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIERvbS5hZGRDbGFzcyhidXR0b24uZWxlbWVudCwgY2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0SWNvbikge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pY29uLmljb24gPSBvcHRpb25zLnNlbGVjdEljb247XG4gICAgICAgICAgICAgICAgYnV0dG9uLm9wdGlvbnMuaWNvbk5hbWUgPSBvcHRpb25zLnNlbGVjdEljb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cblxuXG4iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IEljb25UIGZyb20gJy4vaWNvbnQnO1xuaW1wb3J0IEJ1dHRvbnNHcm91cCBmcm9tICcuL2J1dHRvbnNHcm91cCc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJ1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tTdGF0dXMgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudFtdfVxuICAgICAqL1xuICAgICNlbGVtZW50cyA9IFtdO1xuXG4gICAgbWFwID0ge1xuICAgICAgICBpY29uczogW10sXG4gICAgICAgIGFjdGlvbnM6IFtdXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUYXNrQWJzdHJhY3R9XG4gICAgICovXG4gICAgI3Rhc2s7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtJY29uVH1cbiAgICAgKi9cbiAgICAjaWNvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICN0ZXh0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCdXR0b25zR3JvdXB9XG4gICAgICovXG4gICAgI2JHcm91cCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rhc2tBYnN0cmFjdH0gdGFza1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYXBJY29uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodGFzaywgbWFwSWNvbnMsIGFjdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jdGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMubWFwLmljb25zID0gbWFwSWNvbnM7XG4gICAgICAgIHRoaXMubWFwLmFjdGlvbnMgPSBhY3Rpb25zO1xuXG4gICAgICAgIHRoaXMuI2ljb24gPSBuZXcgSWNvblQoJ25vbmUnLCAnYmlnJyk7XG4gICAgICAgIHRoaXMuI3RleHQgPSB0aGlzLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogJ3N0YXR1cy10ZXh0J30pO1xuXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICBleHRlbmQoaXRlbSwge2RhdGE6IHt0YXNrOiB0YXNrfX0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBlbHMgPSB0aGlzLiNlbGVtZW50cztcblxuICAgICAgICBpZiAoZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBlbHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzLnB1c2godGhpcy4jaWNvbi5yZW5kZXIoKSk7XG4gICAgICAgIGVscy5wdXNoKHRoaXMuI3RleHQpO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcC5hY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuI2JHcm91cCA9IG5ldyBCdXR0b25zR3JvdXAoe2J1dHRvbnM6IHRoaXMubWFwLmFjdGlvbnMsIGFycmFuZ2U6IGZhbHNlLCBzY2FsZWQ6IHRydWV9KTtcbiAgICAgICAgICAgIGVscy5wdXNoKHRoaXMuI2JHcm91cC5yZW5kZXIoKSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBlbHM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAgICAgKi9cbiAgICByZWZyZXNoKHN0YXR1cykge1xuICAgICAgICB0aGlzLiN0ZXh0LmlubmVySFRNTCA9IHRoaXMuI3Rhc2suc3RhdHVzVGV4dDtcblxuICAgICAgICB0aGlzLiNpY29uLmljb24gPSB0aGlzLm1hcC5pY29uc1tzdGF0dXNdO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy4jYkdyb3VwO1xuXG4gICAgICAgIGlmIChidXR0b25Hcm91cCkge1xuICAgICAgICAgICAgYnV0dG9uR3JvdXAuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZW5hYmxlZFdpdGggPSBidXR0b24ub3B0aW9ucz8uZW5hYmxlZFdpdGhTdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmFibGVkV2l0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWRXaXRoID0gZW5hYmxlZFdpdGguY2FsbChidXR0b24sIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVuYWJsZWRXaXRoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLm9wdGlvbnMuZW5hYmxlZFdpdGhTdGF0dXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gYnV0dG9uLm9wdGlvbnMuZW5hYmxlZFdpdGhTdGF0dXMuaW5kZXhPZihzdGF0dXMpID09PSAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmFibGVkV2l0aCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZW5hYmxlZFdpdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcbmltcG9ydCBEb21EYXRhIGZyb20gJy4vdXRpbHMvZG9tLWRhdGEnO1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJy4vcHJvZ3Jlc3MnO1xuaW1wb3J0IFN0YXR1c2VzTGlzdCBmcm9tICcuL3N0YXR1c2VzTGlzdCc7XG5pbXBvcnQgVGFza1N0YXR1cyBmcm9tICcuL3Rhc2tTdGF0dXMnO1xuXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICBpY29uUGxhY2VtZW50OiAnZGVmYXVsdCcsXG4gICAgcGFydHM6IHtcbiAgICAgICAgc3RhdHVzOiAncmVmcmVzaC5zdGF0dXMnLFxuICAgICAgICB0aXRsZTogJ3RpdGxlJyxcbiAgICAgICAgdGV4dDogJ3RleHQnLFxuICAgICAgICBlcnJvcjogJ2Vycm9ycycsXG4gICAgICAgICdwcm9ncmVzcy13cmFwcGVyJzogJ3JlZnJlc2gucHJvZ3Jlc3MnLFxuICAgIH0sXG4gICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICBzaXplOiAnJyxcbiAgICAgICAgYmFyT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWxUZXh0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25zOiBbXVxufTtcblxuY29uc3QgaWNvbk1hcCA9IHt9O1xuaWNvbk1hcFtTdGF0dXNlc0xpc3QuV0FJVF0gPSAnY2xvY2snO1xuaWNvbk1hcFtTdGF0dXNlc0xpc3QuRVhFQ10gPSAncGxheSc7XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5FUlJPUl0gPSAnd2FybmluZyc7XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5ET05FXSA9ICdjaGVja2VkJztcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sgZXh0ZW5kcyBUYXNrQWJzdHJhY3Qge1xuXG5cbiAgICAjZWxlbWVudHMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgX3JlbmRlckNoaWxkKGVsV3JhcHBlcikge1xuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuI2VsZW1lbnRzLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGVsRGV0YWlsID0gZWxXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6ICdkZXRhaWwnfSkpLFxuICAgICAgICAgICAgZWxTdGF0dXNXcmFwcGVyID0gZWxXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6ICdzdGF0dXMtd3JhcHBlcid9KSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5wYXJ0cykuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICAgICAgbGV0IG93bmVyID0gZWxEZXRhaWwsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHBhcnQgPT09ICdwcm9ncmVzcy13cmFwcGVyJykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBQcm9ncmVzcyhvcHRpb25zLnByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3B0aW9uc1sncHJvZ3Jlc3Mtd3JhcHBlciddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJ3N0YXR1cycpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IGVsU3RhdHVzV3JhcHBlcjtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgVGFza1N0YXR1cyh0aGlzLCBpY29uTWFwLCBvcHRpb25zLmFjdGlvbnMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnRzW3BhcnRdID0gb3duZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogcGFydH0sIHt9KSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgdHlwZW9mIGNvbXBvbmVudD8ucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IFtjb250ZW50XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250ZW50LmZvckVhY2goKGNvbnRlbnQpID0+IGVsZW1lbnRzW3BhcnRdLmFwcGVuZChjb250ZW50KSk7XG4gICAgICAgICAgICAgICAgVGFzay4jc2V0Q29tcG9uZW50KGVsZW1lbnRzW3BhcnRdLCBjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVmcmVzaChyZXNwb25zZSkge1xuICAgICAgICBzdXBlci5yZWZyZXNoKHJlc3BvbnNlLCB0aGlzLiNlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9idWlsZENzc0NsYXNzKCkge1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHN1cGVyLl9idWlsZENzc0NsYXNzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUGxhY2VtZW50ICE9PSBEZWZhdWx0cy5pY29uUGxhY2VtZW50KSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QucHVzaCgndGFzay1pdGVtLScgKyB0aGlzLm9wdGlvbnMuaWNvblBsYWNlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fWNvbXBvbmVudFxuICAgICAqL1xuICAgIHN0YXRpYyAjc2V0Q29tcG9uZW50KGVsLCBjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFEb21EYXRhLmhhcyhlbCkpIHtcbiAgICAgICAgICAgIERvbURhdGEuc2V0KGVsLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IERvbURhdGEuZ2V0KGVsKTtcbiAgICAgICAgZGF0YS5jb21wb25ldCA9IGNvbXBvbmVudDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyAjZ2V0Q29tcG9uZW50KGVsKSB7XG4gICAgICAgIGlmIChEb21EYXRhLmhhcyhlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBEb21EYXRhLmdldChlbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEuY29tcG9uZXQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5jb21wb25ldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8TnVtYmVyW119dmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZWZyZXNoUHJvZ3Jlc3MoZWwsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBwcm9ncmVzcyA9IFRhc2suI2dldENvbXBvbmVudChlbCk7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzIGluc3RhbmNlb2YgUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHByb2dyZXNzLnNldExhYmVsKHRoaXMuZ2V0UHJvZ3Jlc3NUb3RhbCgpICsgJyUnKTtcbiAgICAgICAgICAgIHByb2dyZXNzLnNldFByb2dyZXNzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxTdGF0dXNcbiAgICAgKiBAcGFyYW0ge051bWJlcnxOdW1iZXJbXX12YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgIF9yZWZyZXNoU3RhdHVzKGVsU3RhdHVzLCB2YWx1ZSkge1xuICAgICAgICBUYXNrLiNnZXRDb21wb25lbnQoZWxTdGF0dXMpLnJlZnJlc2godmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHRoaXMub3B0aW9ucy5wYXJ0c1sndGl0bGUnXTtcbiAgICAgICAgaWYgKHBhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3BhcnRdID8/ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbn1cblxuVGFzay5EZWZ1YWx0cyA9IERlZmF1bHRzOyIsIjdcblxuLyoqXG4gKiBAcGFyYW0gdGltaW5nXG4gKiBAcGFyYW0gZHJhd1xuICogQHBhcmFtIGR1cmF0aW9uXG4gKiBAcGFyYW0gb25FbmRcbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZSh7dGltaW5nLCBkcmF3LCBkdXJhdGlvbn0sIG9uRW5kKSB7XG5cbiAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBhbmltYXRlKHRpbWUpIHtcbiAgICAgICAgLy8gdGltZUZyYWN0aW9uINC40LfQvNC10L3Rj9C10YLRgdGPINC+0YIgMCDQtNC+IDFcbiAgICAgICAgbGV0IHRpbWVGcmFjdGlvbiA9ICh0aW1lIC0gc3RhcnQpIC8gZHVyYXRpb247XG4gICAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB0aW1lRnJhY3Rpb24gPSAxO1xuXG4gICAgICAgIC8vINCy0YvRh9C40YHQu9C10L3QuNC1INGC0LXQutGD0YnQtdCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPINCw0L3QuNC80LDRhtC40LhcbiAgICAgICAgbGV0IHByb2dyZXNzID0gdGltaW5nKHRpbWVGcmFjdGlvbik7XG5cbiAgICAgICAgZHJhdyhwcm9ncmVzcyk7IC8vINC+0YLRgNC40YHQvtCy0LDRgtGMINC10ZFcblxuICAgICAgICBpZiAodGltZUZyYWN0aW9uIDwgMSkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9uRW5kKSB7XG4gICAgICAgICAgICAgICAgb25FbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG59XG5cblxuY29uc3QgdGltaW5ncyA9IHtcbiAgICBsaW5lYXIodGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aW1lRnJhY3Rpb247XG4gICAgfSxcbiAgICBxdWFkKHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGltZUZyYWN0aW9uLCAyKVxuICAgIH0sXG4gICAgY2lyYyh0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3ModGltZUZyYWN0aW9uKSk7XG4gICAgfSxcbiAgICBiYWNrKHggPSAxLjUsIHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGltZUZyYWN0aW9uLCAyKSAqICgoeCArIDEpICogdGltZUZyYWN0aW9uIC0geClcbiAgICB9LFxufTtcblxuXG5jb25zdCBhbmltYXRpb25zRHJhdyA9IHtcbiAgICAnZmFkZU91dCc6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAxIC0gKE1hdGgucm91bmQocHJvZ3Jlc3MgKiAxMDApIC8gMTAwKTtcbiAgICB9LFxuICAgICdmYWRlSW4nOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblxuICAgICAgICBpZiAodGhpcy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gKE1hdGgucm91bmQocHJvZ3Jlc3MgKiAxMDApIC8gMTAwKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gYW5pbWF0aW9uQ29uZmlnXG4gKiBAcmV0dXJuIFByb21pc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbWF0ZUVsKGVsLCBhbmltYXRpb25Db25maWcgPSB7XG4gICAgbmFtZTogJ2ZhZGVPdXQnLFxuICAgIHRpbWluZzogdGltaW5ncy5saW5lYXIsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBkZWxheTogMFxufSkge1xuICAgIGxldCBhbmltYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBhbmltYXRpb25Db25maWcpO1xuXG4gICAgaWYgKHR5cGVvZiBhbmltYXRpb24uZHJhdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhbmltYXRpb24uZHJhdy5iaW5kKGVsKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFuaW1hdGlvbi5uYW1lID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYW5pbWF0aW9uc0RyYXdbYW5pbWF0aW9uLm5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFuaW1hdGlvbi5kcmF3ID0gYW5pbWF0aW9uc0RyYXdbYW5pbWF0aW9uLm5hbWVdLmJpbmQoZWwpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGFuaW1hdGlvbiAnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFuaW1hdGlvbi5kZWxheSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBhbmltYXRpb24uZGVsYXkgPSAwO1xuICAgIH1cblxuICAgIGFuaW1hdGlvbi50aW1pbmcgPSAodHlwZW9mIGFuaW1hdGlvbi50aW1pbmcgPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdGltaW5nc1thbmltYXRpb24udGltaW5nXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgPyB0aW1pbmdzW2FuaW1hdGlvbi50aW1pbmddIDogdGltaW5ncy5saW5lYXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhbmltYXRlKGFuaW1hdGlvbiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShlbClcbiAgICAgICAgfSksIGFuaW1hdGlvbi5kZWxheSk7XG4gICAgfSk7XG5cbn1cblxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn10aW1pbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHBhcmFtIGRlbGF5XG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFkZUluKGVsLCB0aW1pbmcgPSAnbGluZWFyJywgZHVyYXRpb24gPSAxMDAwLCBkZWxheSA9IDApIHtcbiAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCB7XG4gICAgICAgIG5hbWU6ICdmYWRlSW4nLFxuICAgICAgICB0aW1pbmc6IHRpbWluZyxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBlbFxuICogQHBhcmFtIHRpbWluZ1xuICogQHBhcmFtIGR1cmF0aW9uXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWRlT3V0KGVsLCB0aW1pbmcgPSAnbGluZWFyJywgZHVyYXRpb24gPSAxMDAwLCBkZWxheSA9IDApIHtcbiAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCB7XG4gICAgICAgIG5hbWU6ICdGYWRlT3V0JyxcbiAgICAgICAgdGltaW5nOiB0aW1pbmcsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0pO1xufSIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHNMaXN0JztcbmltcG9ydCBTdGF0dXNlcyBmcm9tICcuL3N0YXR1c2VzTGlzdCc7XG5pbXBvcnQgTWFuYWdlckV2ZW50IGZyb20gJy4vbWFuYWdlckV2ZW50JztcbmltcG9ydCBUYXNrQWJzdHJhY3QgZnJvbSBcIi4vdGFza0Fic3RyYWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pY29udCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBCdXR0b25zR3JvdXAgZnJvbSAnLi9idXR0b25zR3JvdXAnO1xuXG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgYW5pbWF0ZUVsLCB7ZmFkZUlufSBmcm9tICcuL3V0aWxzL2FuaW1hdGUnO1xuXG5cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIGNvbW1vbjogZmFsc2UsXG4gICAgdGl0bGU6ICc8aDM+QmFja2dyb3VuZHMgdGFza3M8L2gzPicsXG4gICAgdGhlbWU6IHsnLTEnOiBcImRlZmF1bHRcIn0sXG4gICAgcmVuZGVyT25FbXB0eTogdHJ1ZSxcbiAgICB0YXNrQ2xhc3M6IFRhc2ssXG4gICAgZW1wdHlUZXh0OiAnVGFza3Mgbm90IHByb3ZpZGVkIHlldCcsXG4gICAgdGFza09wdGlvbnM6IHt9LFxuICAgIHRhc2tzOiBbXSxcbiAgICBzdGF0dXNUZXh0OiB7fSxcbiAgICBoaWRlQW5pbWF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdmYWRlT3V0JyxcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIHRpbWluZzogJ2xpbmVhcicsXG4gICAgICAgIGRlbGF5OiAwXG4gICAgfSxcbiAgICBzaG93QW5pbWF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdmYWRlSW4nLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgdGltaW5nOiAnbGluZWFyJyxcbiAgICAgICAgZGVsYXk6IDBcbiAgICB9LFxuICAgIHRhc2tzQW5pbWF0aW9uOiB7XG4gICAgICAgIGhpZGU6IHt9LFxuICAgICAgICBzaG93OiB7fVxuICAgIH0sXG4gICAgcmVzb2x2ZXI6IHtcbiAgICAgICAgdXJsOiAncXVldWUtcmVhZGVyJ1xuICAgIH1cbn07XG5cblxuRGVmYXVsdHMudGFza3NBbmltYXRpb24uaGlkZVtTdGF0dXNlcy5ET05FXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuaGlkZUFuaW1hdGlvbiwge2RlbGF5OiA1MDAwfSk7XG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5oaWRlW1N0YXR1c2VzLkVSUk9SXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuaGlkZUFuaW1hdGlvbiwge2RlbGF5OiAyMDAwMH0pO1xuRGVmYXVsdHMudGFza3NBbmltYXRpb24uc2hvd1tTdGF0dXNlcy5FWEVDXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuc2hvd0FuaW1hdGlvbiwge2R1cmF0aW9uOiA1MDB9KTtcbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLnNob3dbU3RhdHVzZXMuV0FJVF0gPSBleHRlbmQoe30sIERlZmF1bHRzLnNob3dBbmltYXRpb24sIHtkdXJhdGlvbjogNTAwfSk7XG5cbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLmhpZGVbU3RhdHVzZXMuRVJST1JdID0gZmFsc2U7IC8vbm90IHJlbW92ZSBUYXNrIGVsZW1lbnQgZnJvbSBkb21cblxuRGVmYXVsdHMuc3RhdHVzVGV4dFtTdGF0dXNlcy5ET05FXSA9ICdDb21wbGV0ZSc7XG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLkVSUk9SXSA9ICdDb21wbGV0ZSB3aXRoIGVycm9ycyc7XG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLkVYRUNdID0gJ1Byb2Nlc3NpbmcnO1xuRGVmYXVsdHMuc3RhdHVzVGV4dFtTdGF0dXNlcy5XQUlUXSA9ICdBd2FpdGluZyc7XG5cblxuLyoqXG4gKlxuICovXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Jlc29sdmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgI3Jlc29sdmVyID0gbnVsbDtcblxuICAgICNlbGVtZW50cyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgb3duZXI6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlcjogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyVGFza3M6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgZW1wdHlUZXh0OiBudWxsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUYXNrQWJzdHJhY3RbXX1cbiAgICAgKi9cbiAgICAjdGFza3MgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgI29wdGlvbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm93bmVyID0gVUlDb21wb25lbnQucmVtb3ZlT3B0aW9uc1B0b3BlcnR5KCdlbGVtZW50Jywgb3B0aW9ucyk7XG4gICAgICAgIGxldCBvcHQgPSBleHRlbmQoe30sIE1hbmFnZXIuRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLiNvcHRpb25zID0gZXh0ZW5kKHt9LCB7XG4gICAgICAgICAgICB0YXNrT3B0aW9uczogb3B0LnRhc2tDbGFzcy5EZWZ1YWx0c1xuICAgICAgICB9LCBvcHQpO1xuXG4gICAgICAgIHRoaXMuI3Jlc29sdmVyID0gUmVzb2x2ZXIuZmFjdG9yeSh0aGlzKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnRhc2tzICYmIHR5cGVvZiBvcHRpb25zLnRhc2tzLmxlbmd0aCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hZGRUYXNrcyhvcHRpb25zLnRhc2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY2hlY2sgbGF0ZXIgYWRkZWQgdGFza3MsXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VGFza3MoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiN0b2dnbGVFbXB0eVRleHQoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnJlYWR5LCB7YnViYmxlczogdHJ1ZX0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJ1Y3RvciBvZiBtYW5hZ2VyIGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5kZXN0cm95LCB7YnViYmxlczogdHJ1ZX0pO1xuICAgICAgICB0aGlzLiN0YXNrcyA9IFtdO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtPYmplY3R8bnVsbH0gZGV0YWlsXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0cmlnZ2VyKHR5cGUsIHByb3BzID0ge30sIGRldGFpbCkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGV0YWlsID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHByb3BzLmRldGFpbCA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGV0YWlsKSkge1xuICAgICAgICAgICAgICAgIHByb3BzLmRldGFpbFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXJFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IE1hbmFnZXJFdmVudCh0aGlzLCB0eXBlLCBwcm9wcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoU3RhdHVzZXMuU0VUX1ZJU0lCTEUpO1xuXG4gICAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDAgJiYgdGhpcy5vcHRpb25zLnJlbmRlck9uRW1wdHkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuI2VsZW1lbnRzO1xuXG4gICAgICAgIGlmIChlbGVtZW50cy53cmFwcGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgICAgICBlbGVtZW50cy53cmFwcGVyID0gZWxlbWVudHMub3duZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ3dyYXBwZXInfSkpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudHMud3JhcHBlci5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRpdGxlICYmIHRoaXMub3B0aW9ucy50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiB0aGlzLm9wdGlvbnMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudHMud3JhcHBlclRhc2tzID0gZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ3Rhc2tzJ30pXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmVtcHR5VGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmVtcHR5VGV4dCA9IGVsZW1lbnRzLndyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuZW1wdHlUZXh0ID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2VtcHR5LXdyYXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6ICdlbXB0eS10ZXh0JywgdGV4dENvbnRlbnQ6IG9wdGlvbnMuZW1wdHlUZXh0fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50aGVtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBEb20uc3dpdGNoQ2xhc3MoZWxlbWVudHMud3JhcHBlciwgTWFuYWdlci5nZXRDbGFzc05hbWUoJ3RoZW1lLScgKyBvcHRpb25zLnRoZW1lKSwgTWFuYWdlci5nZXRDbGFzc05hbWUoJ3RoZW1lJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB0YXNrLnJlZnJlc2goKSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICAjdG9nZ2xlRW1wdHlUZXh0KHR5cGUpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLiNlbGVtZW50cy5lbXB0eVRleHQsXG4gICAgICAgICAgICB2aXNpYmxlID0gRG9tLmlzVmlzaWJsZShlbCk7XG5cbiAgICAgICAgaWYgKERvbS5pc0VsKGVsKSkge1xuICAgICAgICAgICAgaWYgKCh2aXNpYmxlICYmIHR5cGUgPT09ICdoaWRlJykgfHwgKHZpc2libGUgPT09IGZhbHNlICYmIHR5cGUgPT09ICdzaG93JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCB0aGlzLm9wdGlvbnNbdHlwZSArICdBbmltYXRpb24nXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICh0eXBlID09PSAnc2hvdycpID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX10YXNrc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzb2x2ZVxuICAgICAqL1xuICAgIGFkZFRhc2tzKHRhc2tzLCByZXNvbHZlID0gdHJ1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXNrcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCB2YWxpZCBjYWxsLiBBcmd1bWVudCB0YXNrcyBpcyBub3QgYXJyYXkgdHlwZSAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3Rhc2tGYWN0b3J5KHRhc2tzKTtcbiAgICAgICAgdGhpcy4jdGFza3MgPSB0aGlzLiN0YXNrcy5jb25jYXQodGFza3MpO1xuXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRoaXMudHJpZ2dlcihFdmVudHMubmV3VGFzaywge2J1YmJsZXM6IHRydWV9LCB7dGFzazogdGFza30pKTtcblxuICAgICAgICB0aGlzLiN0b2dnbGVFbXB0eVRleHQoJ2hpZGUnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlci5yZXNvbHZlKChtYW5hZ2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlci5nZXRUYXNrcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnRyaWdnZXIoRXZlbnRzLmZldGNoU3RhcnQsIHtidWJibGVzOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKG1hbmFnZXIsIG51bWJlclJlcXVlc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnRyaWdnZXIoRXZlbnRzLmZldGNoRW5kLCB7YnViYmxlczogdHJ1ZX0sIHtyZXF1ZXN0czogbnVtYmVyUmVxdWVzdHN9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXBkYXRlVGFzayh0YXNrLCByZXNwb25zZSkge1xuXG4gICAgICAgIGlmICh0YXNrLnByb2dyZXNzICE9PSByZXNwb25zZS5wcm9ncmVzcyB8fCB0YXNrLnN0YXR1cyAhPT0gcmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICB8fCB0YXNrLnRleHQgIT09IHJlc3BvbnNlLnRleHQgfHwgdGFzay50aXRsZSAhPT0gcmVzcG9uc2UudGl0bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzU3RhdHVzQ2hhbmdlID0gdGFzay5zdGF0dXMgIT09IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBvbGREYXRhID0gZXh0ZW5kKHt9LCB0YXNrKTtcbiAgICAgICAgICAgIHRhc2sgPSBleHRlbmQodGFzaywgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgICB0YXNrLnJlZnJlc2gob2xkRGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChpc1N0YXR1c0NoYW5nZSkge1xuXG4gICAgICAgICAgICAgICAgdGFzay5jc3NDbGFzc1N3aXRjaCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5zdGF0dXNDaGFuZ2UsIHtidWJibGVzOiB0cnVlfSwge1xuICAgICAgICAgICAgICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICBvbGRTdGF0dXM6IG9sZERhdGEuc3RhdHVzXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoU3RhdHVzZXMuaXMoU3RhdHVzZXMuU0VUX1ZJU0lCTEUsIHRhc2suc3RhdHVzKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2suZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlclRhc2tzRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlRWwoZWxlbWVudCwgdGhpcy4jdGFza0FuaW1hdGlvbih0YXNrLCAnc2hvdycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy50YXNrRWxlbWVudEFwcGVuZCwge2J1YmJsZXM6IHRydWV9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrOiB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbGxDYWxsYmFjaygnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFN0YXR1c2VzLmlzKFN0YXR1c2VzLlNFVF9DT01QTEVURSwgdGFzay5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSB0YXNrLm1hbmFnZXIub3B0aW9ucy5jb21tb25cbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHRhc2sucmVzdWx0ICYmIEFycmF5LmlzQXJyYXkodGFzay5yZXN1bHQudGFza3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm1hbmFnZXIuYWRkVGFza3ModGFzay5yZXN1bHQudGFza3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Rhc2tBYnN0cmFjdHxudW1iZXJ9IHRhc2sgVGFzayBpbnN0YW5jZSBvciB0YXNrIGlkXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICByZW1vdmVUYXNrKHRhc2spIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0YXNrID0gdGhpcy5maW5kVGFzayh0YXNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0VGFza3MoKS5maW5kSW5kZXgoKHQpID0+IHQuaWQgPT09IHRhc2suaWQpO1xuICAgICAgICAgICAgaWYgKGlkID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiN0YXNrcy5zcGxpY2UoaWQsIDEpO1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnRhc2tSZW1vdmVkLCB7YnViYmxlczogdHJ1ZX0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzazogdGFza1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRhc2suY2FsbENhbGxiYWNrKCdyZW1vdmUnKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmVsZW1lbnQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVtb3ZlRWwodGFzay5lbGVtZW50LCB0aGlzLiN0YXNrQW5pbWF0aW9uKHRhc2spKS50aGVuKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5jYWxsQ2FsbGJhY2soJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMudGFza0VsZW1lbnRSZW1vdmVkLCB7YnViYmxlczogdHJ1ZX0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiN0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiN0b2dnbGVFbXB0eVRleHQoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rhc2tBYnN0cmFjdH0gdGFza1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgICN0YXNrQW5pbWF0aW9uKHRhc2ssIHR5cGUgPSAnaGlkZScpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRhc2tzQW5pbWF0aW9uW3R5cGVdW3Rhc2suc3RhdHVzXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMudGFza3NBbmltYXRpb25bdHlwZV1bdGFzay5zdGF0dXNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNbdHlwZSArICdBbmltYXRpb24nXTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJbXXxtZW51YmFyfSBzdGF0dXNGaWx0ZXJcbiAgICAgKiBAcmV0dXJuIHtUYXNrQWJzdHJhY3RbXX1cbiAgICAgKi9cbiAgICBnZXRUYXNrcyhzdGF0dXNGaWx0ZXIpIHtcblxuICAgICAgICBsZXQgdGFza3MgPSB0aGlzLiN0YXNrcztcblxuICAgICAgICBpZiAoc3RhdHVzRmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXR1c0ZpbHRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNGaWx0ZXIgPSBbc3RhdHVzRmlsdGVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzRmlsdGVyLmluZGV4T2YodGFzay5zdGF0dXMpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdHxudWxsfVxuICAgICAqL1xuICAgIGZpbmRUYXNrKGlkKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLmdldFRhc2tzKCkuZmluZCgodCkgPT4gdC5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAodGFzayBpbnN0YW5jZW9mIFRhc2tBYnN0cmFjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudW1iZXJbXX0gdGFza3NcbiAgICAgKi9cbiAgICAjdGFza0ZhY3RvcnkodGFza3MpIHtcbiAgICAgICAgY29uc3QgVGFza0NsYXNzID0gdGhpcy5vcHRpb25zLnRhc2tDbGFzcztcbiAgICAgICAgdGFza3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgaXRlbS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBpdGVtLmlkO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLmlkO1xuICAgICAgICAgICAgICAgIHRhc2tzW2luZGV4XSA9IGV4dGVuZChuZXcgVGFza0NsYXNzKGlkLCB0aGlzKSwgaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5wYXJzZUludChpdGVtKSA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0gPSBuZXcgVGFza0NsYXNzKGl0ZW0sIHRoaXMpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGUgbm90IHZhbGlkIHRhc2sgaXRlbScsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxmYWxzZX1hbmltYXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICNyZW1vdmVFbChlbCwgYW5pbWF0aW9uID0gdGhpcy5vcHRpb25zLmhpZGVBbmltYXRpb24pIHtcblxuICAgICAgICBpZiAoYW5pbWF0aW9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGVFbChlbCwgYW5pbWF0aW9uKS50aGVuKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgb3duZXJFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMub3duZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgd3JhcHBlckVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy53cmFwcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHdyYXBwZXJUYXNrc0VsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy53cmFwcGVyVGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtSZXNvbHZlcn1cbiAgICAgKi9cbiAgICBnZXQgcmVzb2x2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyZXNvbHZlclxuICAgIH1cblxuXG59XG5cblVJQ29tcG9uZW50LmNsYXNzUHJlZml4ID0gJ3FtYy0nO1xuXG5NYW5hZ2VyLlRhc2tBYnN0cmFjdCA9IFRhc2tBYnN0cmFjdDtcbk1hbmFnZXIuQnV0dG9uID0gQnV0dG9uO1xuTWFuYWdlci5CdXR0b25zR3JvdXAgPSBCdXR0b25zR3JvdXA7XG5NYW5hZ2VyLkljb24gPSBJY29uO1xuXG5NYW5hZ2VyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5NYW5hZ2VyLkV2ZW50cyA9IEV2ZW50cztcbk1hbmFnZXIuU3RhdHVzZXMgPSBTdGF0dXNlcztcblxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyIsImltcG9ydCAkIGZyb20gJ2dsb2JhbC9qUXVlcnknO1xuXG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL21hbmFnZXInXG5cbiQuZm4ucXVldWVNYW5hZ2VyID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuXG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuZGF0YSgncXVldWUtbWFuYWdlcicpLFxuICAgICAgICBtZXRob2RzID0ge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtNYW5hZ2VyLkRlZmF1bHRzfSBvcHRpb25zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkd3JhcHBlciA9ICQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd3JhcHBlci5kYXRhKCdxdWV1ZU1hbmFnZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR3cmFwcGVyLmRhdGEoJ3F1ZXVlTWFuYWdlcicsIG5ldyBNYW5hZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgJC5leHRlbmQodHJ1ZSwge2VsZW1lbnQ6ICR3cmFwcGVyLmdldCgwKX0sIE1hbmFnZXIuRGVmYXVsdHMsIG9wdGlvbnMgfHwge30sICR3cmFwcGVyLmRhdGEoJ21hbmFnZXInKSB8fCB7fSkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjcmVhdGVCdXR0b25zOiBmdW5jdGlvbihvcHRpb25zLCAkd3JhcHBlcil7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXIgPSAkd3JhcHBlciB8fCB0aGlzO1xuICAgICAgICAgICAgICAgICR3cmFwcGVyLmFwcGVuZCgkKG5ldyBNYW5hZ2VyLkJ1dHRvbnNHcm91cChvcHRpb25zKS5yZW5kZXIoKSkuZGF0YSgnbWFuYWdlcicsIG1hbmFnZXIpKTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfTtcblxuICAgIGlmIChtYW5hZ2VyIGluc3RhbmNlb2YgTWFuYWdlciAmJiB0eXBlb2YgbWFuYWdlclttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyW21ldGhvZF0uYXBwbHkobWFuYWdlciwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW21ldGhvZF0pIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHNbbWV0aG9kXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICFtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQuZXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBxdWV1ZU1hbmFnZXIgJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn07XG5cbiQuZm4ucXVldWVNYW5hZ2VyLk1hbmFnZXIgPSBNYW5hZ2VyO1xuXG4kKCdkb2N1bWVudCcpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucW1jLXF1ZXVlLW1hbmFnZXJbZGF0YS1tYW5hZ2VyXScpLnF1ZXVlTWFuYWdlcigpO1xufSk7XG5cblxuXG4iXSwibmFtZXMiOlsiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc0FwcGx5RGVzY3JpcHRvclNldCIsInJlY2VpdmVyIiwidmFsdWUiLCJzZXQiLCJjYWxsIiwiVHlwZUVycm9yIiwiX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciIsInByaXZhdGVNYXAiLCJhY3Rpb24iLCJoYXMiLCJnZXQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IiLCJjbGFzc0FwcGx5RGVzY3JpcHRvclNldCIsIl9jbGFzc0FwcGx5RGVzY3JpcHRvckdldCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGx5IiwiQ1NTQ2xhc3NOYW1lTWl4aW4iLCJjbGFzc1ByZWZpeCIsImdldENsYXNzTmFtZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiRnVsbHNjcmVlbkFwaSIsInByZWZpeGVkIiwiYXBpTWFwIiwic3BlY0FwaSIsImJyb3dzZXJBcGkiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwia2V5cyIsIm9iamVjdCIsImlzT2JqZWN0IiwiZWFjaCIsImZuIiwiZm9yRWFjaCIsImlzUGxhaW4iLCJjb21wdXRlZFN0eWxlIiwiZWwiLCJwcm9wIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbXB1dGVkU3R5bGVWYWx1ZSIsImdldFByb3BlcnR5VmFsdWUiLCJVU0VSX0FHRU5UIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwid2Via2l0VmVyc2lvbk1hcCIsImV4ZWMiLCJwYXJzZUZsb2F0IiwicG9wIiwidGVzdCIsIm1hdGNoIiwiSVNfQU5EUk9JRCIsIm1ham9yIiwibWlub3IiLCJJU19FREdFIiwiSVNfQ0hST01FIiwicmVzdWx0IiwidmVyc2lvbiIsIklTX1NBRkFSSSIsIlRPVUNIX0VOQUJMRUQiLCJCb29sZWFuIiwiRG9tIiwibWF4VG91Y2hQb2ludHMiLCJEb2N1bWVudFRvdWNoIiwiSVNfSVBBRCIsImlzTm9uQmxhbmtTdHJpbmciLCJzdHIiLCJ0cmltIiwidGhyb3dJZldoaXRlc3BhY2UiLCJpbmRleE9mIiwiRXJyb3IiLCJjbGFzc1JlZ0V4cCIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsImlzUmVhbCIsImlzRWwiLCJub2RlVHlwZSIsImNyZWF0ZVF1ZXJpZXIiLCJtZXRob2QiLCJzZWxlY3RvciIsImNvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiY3JlYXRlRWwiLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsImF0dHJpYnV0ZXMiLCJjb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm9wTmFtZSIsInZhbCIsInNldEF0dHJpYnV0ZSIsInN0eWxlTmFtZSIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJhdHRyTmFtZSIsImFwcGVuZENvbnRlbnQiLCJ0ZXh0IiwiaW5uZXJUZXh0IiwiaGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NUb0NoZWNrIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGRDbGFzcyIsImNsYXNzVG9BZGQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsImNsYXNzVG9SZW1vdmUiLCJyZW1vdmUiLCJzcGxpdCIsImZpbHRlciIsImMiLCJqb2luIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc1RvVG9nZ2xlIiwicHJlZGljYXRlIiwiYXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50Tm9kZSIsInJlY3QiLCJrIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJpc1RleHROb2RlIiwiaXNWaXNpYmxlIiwib3BhY2l0eSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q2xpZW50UmVjdHMiLCJzd2l0Y2hDbGFzcyIsImNzc0NsYXNzIiwic2VhcmNoQ2xhc3MiLCJjb21wYXJlIiwiZXhpc3QiLCJub3JtYWxpemVDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlIiwiYXBwZW5kQ2hpbGQiLCJFTEVNRU5UIiwibWF0Y2hlcyIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsIiQiLCIkJCIsIlVJQ29tcG9uZW50IiwicmVtb3ZlT3B0aW9uc1B0b3BlcnR5IiwicHJvcGVydHkiLCJvcHRpb25zIiwiaW5zdGFuY2VPZiIsImNsYXNzU2V0IiwiU2V0IiwiYXJyYXkiLCJpdGVtIiwiX25vcm1hbGl6ZVByZWZpeCIsInIiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImNyYzMyIiwiY29tbW9uanNIZWxwZXJzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZhY3RvcnkiLCJET19OT1RfRVhQT1JUX0NSQyIsIkNSQzMyIiwic2lnbmVkX2NyY190YWJsZSIsInRhYmxlIiwibiIsIkludDMyQXJyYXkiLCJUIiwiY3JjMzJfYnN0ciIsImJzdHIiLCJzZWVkIiwiQyIsIkwiLCJjaGFyQ29kZUF0IiwiY3JjMzJfYnVmIiwiYnVmIiwiY3JjMzJfYnVmXzgiLCJjcmMzMl9zdHIiLCJkIiwiZXh0ZW5kIiwic291cmNlcyIsInNoaWZ0IiwiU3RhdHVzZXNMaXN0IiwiSU5JVCIsIldBSVQiLCJFWEVDIiwiRE9ORSIsIkVSUk9SIiwiREVMRVRFRCIsIlNFVF9WSVNJQkxFIiwiU0VUX0NPTVBMRVRFIiwiaXMiLCJzdGF0dXMiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJUYXNrQWJzdHJhY3QiLCJpZCIsIm1hbmFnZXIiLCJTdGF0dXNlcyIsImluaXQiLCJyZW5kZXIiLCJzaG93IiwicmVmcmVzaCIsImhpZGUiLCJwYXJzZUludCIsInNldFRpbWVvdXQiLCJjYWxsQ2FsbGJhY2siLCJ0eXBlIiwicGFyYW1zIiwiY29tbW9uIiwiY2FsbGJhY2tzIiwiX3JlbmRlckNoaWxkIiwiZWxXcmFwcGVyIiwiX2J1aWxkQ3NzQ2xhc3MiLCJjc3NDbGFzc1N3aXRjaCIsInRoZW1lIiwiX2NsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY0dldCIsInJlc3BvbnNlIiwiZWxlbWVudHMiLCJfcmVmcmVzaEVsZW1lbnRzIiwiZ2V0UHJvZ3Jlc3NUb3RhbCIsIk1hdGgiLCJyb3VuZCIsInJlZHVjZSIsImEiLCJvbGRUYXNrIiwib3B0aW9uc1BhcnRzIiwicGFydHMiLCJlbGVtZW50TmFtZSIsIm0iLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwib2xkVmFsdWUiLCJfcmVmcmVzaEJhc2ljUHJvcGVydHkiLCJlbExpc3QiLCJhcHBlbmQiLCJpbmRleCIsImVsTGkiLCJpbm5lckhUTUwiLCJnZXRUaXRsZSIsInN0YXR1c1RleHQiLCJ0YXNrT3B0aW9ucyIsImVsVGFzayIsIl9jc3NMaXN0Iiwic3RhdHVzZXNMaXN0S2V5IiwidG9Mb3dlckNhc2UiLCJFTVBUWV9NRVNTQUdFIiwiRGVmYXVsdHMiLCJkZWxheVRpbWUiLCJSZXNvbHZlciIsIm9wdCIsIk9iaiIsImVudHJpZXMiLCJyZXNvbHZlIiwib25TdGFydCIsIm9uRW5kIiwiaXNSdW5uaW5nIiwibWFuYWdlcnMiLCJlcnJvciIsInRoZW4iLCJudW1iZXIiLCJmaW5kVGFza3MiLCJ0YXNrcyIsInRhc2siLCJyZXNvbHZlciIsImhhc2giLCJ1cmwiLCJjYWNoZSIsImNvbW1vbk1hbmFnZXJzIiwicHVzaCIsIm93bmVyRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNYW5hZ2VyIiwiRXZlbnRzIiwiZGVzdHJveSIsImV2ZW50IiwiZ2V0VGFza3MiLCJpbml0aWF0b3JNYW5hZ2VyIiwicmVtb3ZlVGFzayIsInNwbGljZSIsImZpbmRJbmRleCIsInRpbWVPdXQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0Iiwib2siLCJqc29uIiwicmF3IiwiX3VwZGF0ZVRhc2siLCJmaW5kVGFzayIsImFkZFRhc2tzIiwiZmluZCIsIlByb21pc2UiLCJyZWplY3QiLCJ0YXNrc0lkIiwiYm9keSIsImNvbmNhdCIsImZldGNoIiwiaGVhZGVycyIsImVuY29kZVVSSSIsIkV2ZW50IiwicmVhZHkiLCJzdGF0dXNDaGFuZ2UiLCJ0YXNrUmVtb3ZlZCIsInRhc2tFbGVtZW50QXBwZW5kIiwidGFza0VsZW1lbnRSZW1vdmVkIiwibmV3VGFzayIsImZldGNoU3RhcnQiLCJmZXRjaEVuZCIsImV2ZW50cyIsIl9nZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX2lzTmF0aXZlRnVuY3Rpb24iLCJGdW5jdGlvbiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwidmFsdWVPZiIsImUiLCJfY29uc3RydWN0IiwiUGFyZW50IiwiYXJncyIsIkNsYXNzIiwiaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiYmluZCIsImluc3RhbmNlIiwiX3dyYXBOYXRpdmVTdXBlciIsIl9jYWNoZSIsIk1hcCIsImlzTmF0aXZlRnVuY3Rpb24iLCJXcmFwcGVyIiwiTWFuYWdlckV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJfaW5pdGlhbEd1aWQiLCJfZ3VpZCIsIm5ld0dVSUQiLCJGYWtlV2Vha01hcCIsIldlYWtNYXAiLCJ2ZGF0YSIsImZsb29yIiwicGVyZm9ybWFuY2UiLCJub3ciLCJEYXRlIiwiZGF0YSIsImFjY2VzcyIsIkd1aWQiLCJQcm9ncmVzcyIsIkhUTUxFbGVtZW50Iiwic2l6ZSIsImlzU2hvd0dyYWRpZW50Iiwic2V0UHJvZ3Jlc3MiLCJiYXJzIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImJhck9wdGlvbnMiLCJjbGFzc1Rob0NoZWNrIiwic2V0TGFiZWwiLCJsYWJlbCIsImxhYmVsVGV4dCIsImNzcyIsInJvbGUiLCJtaW4iLCJtYXgiLCJjaGlsZE5vZGVzIiwiSWNvblQiLCJpY29uIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlciIsImhhbmRsZXJUaW1vdXREZWxheSIsImhpZGRlbkxhYmVsIiwiZGlzYWJsZWQiLCJpY29uTmFtZSIsImljb25Ib3Zlck5hbWUiLCJpY29uU2l6ZSIsImFuaW1hdGVkQ2xpY2siLCJCdXR0b24iLCJkcm9wIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwieCIsInBhZ2VYIiwibGVmdCIsInNjcm9sbFgiLCJ5IiwicGFnZVkiLCJ0b3AiLCJzY3JvbGxZIiwiYnV0dG9ucyIsImFycmFuZ2UiLCJzY2FsZWQiLCJzZWxlY3RhYmxlIiwic2VsZWN0SWNvbiIsIkJ1dHRvbnNHcm91cCIsImNvbmZpZyIsImJ0biIsImJ1dHRvbiIsInNlbGVjdGVkIiwiVGFza1N0YXR1cyIsIm1hcEljb25zIiwiYWN0aW9ucyIsImljb25zIiwiZWxzIiwiYnV0dG9uR3JvdXAiLCJlbmFibGVkV2l0aCIsImVuYWJsZWRXaXRoU3RhdHVzIiwiaWNvblBsYWNlbWVudCIsInRpdGxlIiwiaWNvbk1hcCIsIlRhc2siLCJlbERldGFpbCIsImVsU3RhdHVzV3JhcHBlciIsInBhcnQiLCJvd25lciIsImNvbXBvbmVudCIsIl9yZWZyZXNoUHJvZ3Jlc3MiLCJfcmVmcmVzaFN0YXR1cyIsImVsU3RhdHVzIiwiRG9tRGF0YSIsImNvbXBvbmV0IiwiRGVmdWFsdHMiLCJhbmltYXRlIiwidGltaW5nIiwiZHJhdyIsImR1cmF0aW9uIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aW1lIiwidGltZUZyYWN0aW9uIiwidGltaW5ncyIsImxpbmVhciIsInF1YWQiLCJwb3ciLCJjaXJjIiwic2luIiwiYWNvcyIsImJhY2siLCJhbmltYXRpb25zRHJhdyIsImRpc3BsYXkiLCJhbmltYXRlRWwiLCJhbmltYXRpb25Db25maWciLCJkZWxheSIsImFuaW1hdGlvbiIsInJlbmRlck9uRW1wdHkiLCJ0YXNrQ2xhc3MiLCJlbXB0eVRleHQiLCJoaWRlQW5pbWF0aW9uIiwic2hvd0FuaW1hdGlvbiIsInRhc2tzQW5pbWF0aW9uIiwid3JhcHBlciIsIndyYXBwZXJUYXNrcyIsInRyaWdnZXIiLCJidWJibGVzIiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIm51bWJlclJlcXVlc3RzIiwicmVxdWVzdHMiLCJpc1N0YXR1c0NoYW5nZSIsIm9sZERhdGEiLCJvbGRTdGF0dXMiLCJ3cmFwcGVyVGFza3NFbGVtZW50IiwidCIsInN0YXR1c0ZpbHRlciIsInZpc2libGUiLCJUYXNrQ2xhc3MiLCJOdW1iZXIiLCJJY29uIiwicXVldWVNYW5hZ2VyIiwibWV0aG9kcyIsIiR3cmFwcGVyIiwiY3JlYXRlQnV0dG9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLFNBQVNBLGlCQUFULENBQTJCQyxNQUEzQixFQUFtQ0MsS0FBbkMsRUFBMEM7RUFDeEMsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0VBQ3JDLFFBQUlFLFVBQVUsR0FBR0gsS0FBSyxDQUFDQyxDQUFELENBQXRCO0VBQ0FFLElBQUFBLFVBQVUsQ0FBQ0MsVUFBWCxHQUF3QkQsVUFBVSxDQUFDQyxVQUFYLElBQXlCLEtBQWpEO0VBQ0FELElBQUFBLFVBQVUsQ0FBQ0UsWUFBWCxHQUEw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
