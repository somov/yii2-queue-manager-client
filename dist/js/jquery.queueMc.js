/*!
 * @license
 * yii2-queue-manager-client 0.1.0 <https://github.com/somov/yii2-queue-manager-client#readme>
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

      _this.id = parseInt(id);

      _classPrivateFieldSet(_assertThisInitialized(_this), _manager$1, manager);

      return _this;
    }
    /**
     * @private
     * @return {Element}
     */


    var _proto = TaskAbstract.prototype;

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
          return array.indexOf(value === index);
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
          value.length;

      value = typeof value === 'number' ? [value] : value;
      value.forEach(function (value, index) {
        if (bars[index] instanceof ProgressBar) {
          bars[index].progress = value;
        } else {
          bars[index] = new ProgressBar(_this2.barOptions, {
            progress: value
          });
          el.querySelector('.' + Progress.getClassName('progress-items')).append(createEl('div', {
            className: Progress.getClassName('progress-item')
            /*style: {
                width: (100 / length).toFixed(3) + '%'
            }*/

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
      // timeFraction изменяется от 0 до 1
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1; // вычисление текущего состояния анимации

      var progress = timing(timeFraction);
      draw(progress); // отрисовать её

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

      if (tasks && tasks.length > 0) {
        _classPrivateFieldSet(this, _tasks, _classPrivateFieldGet(this, _tasks).concat(tasks));

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
    }
    /**
     * @param {TaskAbstract} task
     * @param {Object} response
     * @private
     */
    ;

    _proto._updateTask = function _updateTask(task, response) {
      if (task.progress !== response.progress || task.status !== response.status || task.text !== response.text || task.title !== response.title) {
        var isStatusChange = task.status !== response.status,
            oldData = extend({}, task);
        task = extend(task, response);
        task.refresh(oldData);

        if (isStatusChange) {
          task.cssClassSwitch();

          if (StatusesList.is([StatusesList.EXEC], task.status)) ;

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
              animateEl(element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task, 'show'));
            }
          }

          if (StatusesList.is(StatusesList.SET_COMPLETE, task.status)) {
            if (task.element.parentNode instanceof Element) {
              this.removeTask(task);
            }
          }
        }
      }
    }
    /**
     *
     * @param {TaskAbstract|number} task Task instance or task id
     * @param {function} onRemoved
     * @return {Boolean}
     */
    ;

    _proto.removeTask = function removeTask(task, onRemoved) {
      var _this3 = this;

      if (onRemoved === void 0) {
        onRemoved = null;
      }

      var tasks = this.getTasks();

      if (typeof task === 'number') {
        task = tasks.find(function (t) {
          return t.id === task;
        });
      }

      if (task instanceof TaskAbstract) {
        var id = this.getTasks().findIndex(function (t) {
          return t.id === task.id;
        });

        if (id > -1) {
          _classPrivateFieldGet(this, _tasks).splice(id, 1);

          _classPrivateMethodGet(this, _removeEl, _removeEl2).call(this, task.element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task)).then(function (el) {
            if (onRemoved) {
              onRemoved(el);
            }

            if (_classPrivateFieldGet(_this3, _tasks).length === 0) {
              _classPrivateMethodGet(_this3, _toggleEmptyText, _toggleEmptyText2).call(_this3, 'show');
            }
          });

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
      var _this4 = this;

      var tasks = _classPrivateFieldGet(this, _tasks);

      var TaskClass = this.options.taskClass;
      tasks.forEach(function (item, index) {
        if (item instanceof TaskAbstract) {
          return;
        }

        if (typeof item === 'object') {
          tasks[index] = extend(new TaskClass(null, _this4), item);
        } else if (Number.parseInt(item) > 0) {
          tasks[index] = new TaskClass(item, _this4);
        }
      });

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
     * @param {Element} el
     * @param {Object|false}animation
     * @return {Promise}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwiLi4vc3JjL2pzL21peGlucy9jc3NDbGFzc05hbWUuanMiLCIuLi9zcmMvanMvdXRpbHMvZnVsbHNjcmVlbi1hcGkuanMiLCIuLi9zcmMvanMvdXRpbHMvb2JqLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2NvbXB1dGVkLXN0eWxlLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLmpzIiwiLi4vc3JjL2pzL3VJQ29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcyIsIi4uL3NyYy9qcy91dGlscy9leHRlbmQuanMiLCIuLi9zcmMvanMvc3RhdHVzZXNMaXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vc3JjL2pzL3Rhc2tBYnN0cmFjdC5qcyIsIi4uL3NyYy9qcy9yZXNvbHZlci5qcyIsIi4uL3NyYy9qcy9ldmVudHNMaXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2lzTmF0aXZlRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NvbnN0cnVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS93cmFwTmF0aXZlU3VwZXIuanMiLCIuLi9zcmMvanMvbWFuYWdlckV2ZW50LmpzIiwiLi4vc3JjL2pzL3V0aWxzL2d1aWQuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLWRhdGEuanMiLCIuLi9zcmMvanMvcHJvZ3Jlc3MuanMiLCIuLi9zcmMvanMvaWNvbnQuanMiLCIuLi9zcmMvanMvYnV0dG9uLmpzIiwiLi4vc3JjL2pzL2J1dHRvbnNHcm91cC5qcyIsIi4uL3NyYy9qcy90YXNrU3RhdHVzLmpzIiwiLi4vc3JjL2pzL3Rhc2suanMiLCIuLi9zcmMvanMvdXRpbHMvYW5pbWF0ZS5qcyIsIi4uL3NyYy9qcy9tYW5hZ2VyLmpzIiwiLi4vc3JjL2pzL2pxdWVyeS5wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENTU0NsYXNzTmFtZU1peGluICA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudWxsfHN0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc1ByZWZpeDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICAgZ2V0Q2xhc3NOYW1lOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NQcmVmaXg9PT0gbnVsbCB8fCBuYW1lLnN0YXJ0c1dpdGgodGhpcy5jbGFzc1ByZWZpeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUHJlZml4ICsgbmFtZTtcbiAgICB9LFxuXG59OyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqIEBtb2R1bGUgZnVsbHNjcmVlbi1hcGlcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG4vKipcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHNlZSBbU3BlY2lmaWNhdGlvbl17QGxpbmsgaHR0cHM6Ly9mdWxsc2NyZWVuLnNwZWMud2hhdHdnLm9yZ31cbiAqIEBzZWUgW01hcCBBcHByb2FjaCBGcm9tIFNjcmVlbmZ1bGwuanNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc31cbiAqL1xuY29uc3QgRnVsbHNjcmVlbkFwaSA9IHtcbiAgcHJlZml4ZWQ6IHRydWVcbn07XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbmNvbnN0IGFwaU1hcCA9IFtcbiAgW1xuICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICdmdWxsc2NyZWVuJ1xuICBdLFxuICAvLyBXZWJLaXRcbiAgW1xuICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxuICAgICctd2Via2l0LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNb3ppbGxhXG4gIFtcbiAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLFxuICAgICctbW96LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNaWNyb3NvZnRcbiAgW1xuICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAnTVNGdWxsc2NyZWVuRXJyb3InLFxuICAgICctbXMtZnVsbHNjcmVlbidcbiAgXVxuXTtcblxuY29uc3Qgc3BlY0FwaSA9IGFwaU1hcFswXTtcbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuICAvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cbiAgaWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuICAgIGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuICAgIEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuICB9XG5cbiAgRnVsbHNjcmVlbkFwaS5wcmVmaXhlZCA9IGJyb3dzZXJBcGlbMF0gIT09IHNwZWNBcGlbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG4iLCIvKipcbiAqIEBmaWxlIG9iai5qc1xuICogQG1vZHVsZSBvYmpcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6RWFjaENhbGxiYWNrXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXkgZm9yIHRoZSBvYmplY3QgdGhhdCBpcyBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXktdmFsdWUgZm9yIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXJcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6UmVkdWNlQ2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhY2N1bVxuICogICAgICAgIFRoZSB2YWx1ZSB0aGF0IGlzIGFjY3VtdWxhdGluZyBvdmVyIHRoZSByZWR1Y2UgbG9vcC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleSBmb3IgdGhlIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleS12YWx1ZSBmb3Igb2JqZWN0IHRoYXQgaXMgYmVpbmcgaXRlcmF0ZWQgb3ZlclxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogICAgICAgICBUaGUgbmV3IGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBrZXlzIG9mIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogICAgICAgIFRoZSBPYmplY3QgdG8gZ2V0IHRoZSBrZXlzIGZyb21cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqICAgICAgICAgQW4gYXJyYXkgb2YgdGhlIGtleXMgZnJvbSB0aGUgb2JqZWN0LiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoZVxuICogICAgICAgICBvYmplY3QgcGFzc2VkIGluIHdhcyBpbnZhbGlkIG9yIGhhZCBubyBrZXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG59O1xuXG4vKipcbiAqIEFycmF5LWxpa2UgaXRlcmF0aW9uIGZvciBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqICAgICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICpcbiAqIEBwYXJhbSB7b2JqOkVhY2hDYWxsYmFja30gZm5cbiAqICAgICAgICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGZvciBlYWNoIGtleSBpbiB0aGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaChvYmplY3QsIGZuKSB7XG4gIGtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiBmbihvYmplY3Rba2V5XSwga2V5KSk7XG59XG5cbi8qKlxuICogQXJyYXktbGlrZSByZWR1Y2UgZm9yIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogICAgICAgIFRoZSBPYmplY3QgdGhhdCB5b3Ugd2FudCB0byByZWR1Y2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqICAgICAgICAgQSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2gga2V5IGluIHRoZSBvYmplY3QuIEl0XG4gKiAgICAgICAgIHJlY2VpdmVzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBhbmQgdGhlIHBlci1pdGVyYXRpb24gdmFsdWUgYW5kIGtleVxuICogICAgICAgICBhcyBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gW2luaXRpYWwgPSAwXVxuICogICAgICAgIFN0YXJ0aW5nIHZhbHVlXG4gKlxuICogQHJldHVybiB7TWl4ZWR9XG4gKiAgICAgICAgIFRoZSBmaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGZuLCBpbml0aWFsID0gMCkge1xuICByZXR1cm4ga2V5cyhvYmplY3QpLnJlZHVjZSgoYWNjdW0sIGtleSkgPT4gZm4oYWNjdW0sIG9iamVjdFtrZXldLCBrZXkpLCBpbml0aWFsKTtcbn1cblxuLyoqXG4gKiBPYmplY3QuYXNzaWduLXN0eWxlIG9iamVjdCBzaGFsbG93IG1lcmdlL2V4dGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSAuLi5zb3VyY2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmIChPYmplY3QuYXNzaWduKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBhIHZhbHVlIGlzIGFuIG9iamVjdCBvZiBhbnkga2luZCAtIGluY2x1ZGluZyBET00gbm9kZXMsXG4gKiBhcnJheXMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGV0Yy4gTm90IGZ1bmN0aW9ucywgdGhvdWdoLlxuICpcbiAqIFRoaXMgYXZvaWRzIHRoZSBnb3RjaGEgd2hlcmUgdXNpbmcgYHR5cGVvZmAgb24gYSBgbnVsbGAgdmFsdWVcbiAqIHJlc3VsdHMgaW4gYCdvYmplY3QnYC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGFwcGVhcnMgdG8gYmUgYSBcInBsYWluXCIgb2JqZWN0IC0gdGhhdCBpcywgYVxuICogZGlyZWN0IGluc3RhbmNlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21wdXRlZC1zdHlsZS5qc1xuICogQG1vZHVsZSBjb21wdXRlZC1zdHlsZVxuICovXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEEgc2FmZSBnZXRDb21wdXRlZFN0eWxlLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gRmlyZWZveCwgaWYgdGhlIHBsYXllciBpcyBsb2FkZWQgaW4gYW4gaWZyYW1lIHdpdGhcbiAqIGBkaXNwbGF5Om5vbmVgLCB0aGVuIGBnZXRDb21wdXRlZFN0eWxlYCByZXR1cm5zIGBudWxsYCwgc28sIHdlIGRvIGFcbiAqIG51bGwtY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHBsYXllciBkb2Vzbid0IGJyZWFrIGluIHRoZXNlIGNhc2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtICAgIHtFbGVtZW50fSBlbFxuICogICAgICAgICAgIFRoZSBlbGVtZW50IHlvdSB3YW50IHRoZSBjb21wdXRlZCBzdHlsZSBvZlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBwcm9wXG4gKiAgICAgICAgICAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnRcbiAqXG4gKiBAc2VlICAgICAgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWwsIHByb3ApIHtcbiAgaWYgKCFlbCB8fCAhcHJvcCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZVZhbHVlID8gY29tcHV0ZWRTdHlsZVZhbHVlLmdldFByb3BlcnR5VmFsdWUocHJvcCkgfHwgY29tcHV0ZWRTdHlsZVZhbHVlW3Byb3BdIDogJyc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVkU3R5bGU7XG4iLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqIEBtb2R1bGUgYnJvd3NlclxuICovXG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5jb25zdCB3ZWJraXRWZXJzaW9uTWFwID0gKC9BcHBsZVdlYktpdFxcLyhbXFxkLl0rKS9pKS5leGVjKFVTRVJfQUdFTlQpO1xuY29uc3QgYXBwbGVXZWJraXRWZXJzaW9uID0gd2Via2l0VmVyc2lvbk1hcCA/IHBhcnNlRmxvYXQod2Via2l0VmVyc2lvbk1hcC5wb3AoKSkgOiBudWxsO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIGFuIGlQb2QuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgaU9TIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBJT1NfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbWF0Y2ggPSBVU0VSX0FHRU5ULm1hdGNoKC9PUyAoXFxkKylfL2kpO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn0oKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbiBBbmRyb2lkIGRldmljZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBBbmRyb2lkIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xudWxsfVxuICovXG5leHBvcnQgY29uc3QgQU5EUk9JRF9WRVJTSU9OID0gKGZ1bmN0aW9uKCkge1xuICAvLyBUaGlzIG1hdGNoZXMgQW5kcm9pZCBNYWpvci5NaW5vci5QYXRjaCB2ZXJzaW9uc1xuICAvLyBBTkRST0lEX1ZFUlNJT04gaXMgTWFqb3IuTWlub3IgYXMgYSBOdW1iZXIsIGlmIE1pbm9yIGlzbid0IGF2YWlsYWJsZSwgdGhlbiBvbmx5IE1ham9yIGlzIHJldHVybmVkXG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvQW5kcm9pZCAoXFxkKykoPzpcXC4oXFxkKykpPyg/OlxcLihcXGQrKSkqL2kpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMV0gJiYgcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIGNvbnN0IG1pbm9yID0gbWF0Y2hbMl0gJiYgcGFyc2VGbG9hdChtYXRjaFsyXSk7XG5cbiAgaWYgKG1ham9yICYmIG1pbm9yKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0gKyAnLicgKyBtYXRjaFsyXSk7XG4gIH0gZWxzZSBpZiAobWFqb3IpIHtcbiAgICByZXR1cm4gbWFqb3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBuYXRpdmUgQW5kcm9pZCBicm93c2VyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19OQVRJVkVfQU5EUk9JRCA9IElTX0FORFJPSUQgJiYgQU5EUk9JRF9WRVJTSU9OIDwgNSAmJiBhcHBsZVdlYmtpdFZlcnNpb24gPCA1Mzc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBNb3ppbGxhIEZpcmVmb3guXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0ZJUkVGT1ggPSAoL0ZpcmVmb3gvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIE1pY3Jvc29mdCBFZGdlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19FREdFID0gKC9FZGcvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIEdvb2dsZSBDaHJvbWUuXG4gKlxuICogVGhpcyB3aWxsIGFsc28gYmUgYHRydWVgIGZvciBDaHJvbWUgb24gaU9TLCB3aGljaCB3aWxsIGhhdmUgZGlmZmVyZW50IHN1cHBvcnRcbiAqIGFzIGl0IGlzIGFjdHVhbGx5IFNhZmFyaSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gIUlTX0VER0UgJiYgKCgvQ2hyb21lL2kpLnRlc3QoVVNFUl9BR0VOVCkgfHwgKC9DcmlPUy9pKS50ZXN0KFVTRVJfQUdFTlQpKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgR29vZ2xlIENocm9tZSB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgQ0hST01FX1ZFUlNJT04gPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvKENocm9tZXxDcmlPUylcXC8oXFxkKykvKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsyXSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBJbnRlcm5ldCBFeHBsb3JlciB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgSUVfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzdWx0ID0gKC9NU0lFXFxzKFxcZCspXFwuXFxkLykuZXhlYyhVU0VSX0FHRU5UKTtcbiAgbGV0IHZlcnNpb24gPSByZXN1bHQgJiYgcGFyc2VGbG9hdChyZXN1bHRbMV0pO1xuXG4gIGlmICghdmVyc2lvbiAmJiAoL1RyaWRlbnRcXC83LjAvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAoL3J2OjExLjAvKS50ZXN0KFVTRVJfQUdFTlQpKSB7XG4gICAgLy8gSUUgMTEgaGFzIGEgZGlmZmVyZW50IHVzZXIgYWdlbnQgc3RyaW5nIHRoYW4gb3RoZXIgSUUgdmVyc2lvbnNcbiAgICB2ZXJzaW9uID0gMTEuMDtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uO1xufSgpKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGRlc2t0b3AgU2FmYXJpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSAoL1NhZmFyaS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19DSFJPTUUgJiYgIUlTX0FORFJPSUQgJiYgIUlTX0VER0U7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhIFdpbmRvd3MgbWFjaGluZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfV0lORE9XUyA9ICgvV2luZG93cy9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIHRvdWNoLWVuYWJsZWQuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRPVUNIX0VOQUJMRUQgPSBCb29sZWFuKERvbS5pc1JlYWwoKSAmJiAoXG4gICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8XG4gIHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIHdpbmRvdy5kb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBhZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpIHx8XG4gIChJU19TQUZBUkkgJiYgVE9VQ0hfRU5BQkxFRCAmJiAhKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBob25lLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGlPUyBkZXZpY2UuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbnkgZmxhdm9yIG9mIFNhZmFyaSAtIGluY2x1ZGluZyBpT1MuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0FOWV9TQUZBUkkgPSAoSVNfU0FGQVJJIHx8IElTX0lPUykgJiYgIUlTX0NIUk9NRTtcbiIsIi8qKlxuICogQGZpbGUgZG9tLmpzXG4gKiBAbW9kdWxlIGRvbVxuICovXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgZnMgZnJvbSAnLi9mdWxsc2NyZWVuLWFwaSc7XG5cbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vb2JqJztcbmltcG9ydCBjb21wdXRlZFN0eWxlIGZyb20gJy4vY29tcHV0ZWQtc3R5bGUnO1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICcuL2Jyb3dzZXInO1xuXG4vKipcbiAqIERldGVjdCBpZiBhIHZhbHVlIGlzIGEgc3RyaW5nIHdpdGggYW55IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiAgICAgICAgIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIG5vbi1ibGFuaywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICovXG5mdW5jdGlvbiBpc05vbkJsYW5rU3RyaW5nKHN0cikge1xuICAgIC8vIHdlIHVzZSBzdHIudHJpbSBhcyBpdCB3aWxsIHRyaW0gYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGZyb20gdGhlIGZyb250IG9yIGJhY2sgb2Ygbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycy4gYWthXG4gICAgLy8gQW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIHN0aWxsIGNvbnRhaW4gdGhlbSBhZnRlciBgdHJpbWAgYnV0IHdoaXRlc3BhY2Ugb25seSBzdHJpbmdzXG4gICAgLy8gd2lsbCBoYXZlIGEgbGVuZ3RoIG9mIDAsIGZhaWxpbmcgdGhpcyBjaGVjay5cbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgQm9vbGVhbihzdHIudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaGFzIHdoaXRlc3BhY2UuIFRoaXMgaXMgdXNlZCBieVxuICogY2xhc3MgbWV0aG9kcyB0byBiZSByZWxhdGl2ZWx5IGNvbnNpc3RlbnQgd2l0aCB0aGUgY2xhc3NMaXN0IEFQSS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqICAgICAgICAgVGhlIHN0cmluZyB0byBjaGVjayBmb3Igd2hpdGVzcGFjZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIHRoZXJlIGlzIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgLy8gc3RyLmluZGV4T2YgaW5zdGVhZCBvZiByZWdleCBiZWNhdXNlIHN0ci5pbmRleE9mIGlzIGZhc3RlciBwZXJmb3JtYW5jZSB3aXNlLlxuICAgIGlmIChzdHIuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzcyBoYXMgaWxsZWdhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvZHVjZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgYSBjbGFzc05hbWUgd2l0aGluIGFuIGVsZW1lbnRzIGNsYXNzTmFtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVcbiAqICAgICAgICAgVGhlIGNsYXNzTmFtZSB0byBnZW5lcmF0ZSB0aGUgUmVnRXhwIGZvci5cbiAqXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiAgICAgICAgIFRoZSBSZWdFeHAgdGhhdCB3aWxsIGNoZWNrIGZvciBhIHNwZWNpZmljIGBjbGFzc05hbWVgIGluIGFuIGVsZW1lbnRzXG4gKiAgICAgICAgIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY2xhc3NSZWdFeHAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKCR8XFxcXHMpJyk7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBET00gaW50ZXJmYWNlIGFwcGVhcnMgdG8gYmUgcmVhbCAoaS5lLiBub3Qgc2ltdWxhdGVkKS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGFwcGVhcnMgdG8gYmUgcmVhbCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWwoKSB7XG4gICAgLy8gQm90aCBkb2N1bWVudCBhbmQgd2luZG93IHdpbGwgbmV2ZXIgYmUgdW5kZWZpbmVkIHRoYW5rcyB0byBgZ2xvYmFsYC5cbiAgICByZXR1cm4gZG9jdW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzLCB2aWEgZHVjayB0eXBpbmcsIHdoZXRoZXIgb3Igbm90IGEgdmFsdWUgaXMgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICAgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIERPTSBlbGVtZW50LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWwodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZSwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luRnJhbWUoKSB7XG5cbiAgICAvLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGhlcmUgYmVjYXVzZSBTYWZhcmkgd2lsbCB0aHJvdyBlcnJvcnMgd2hlbiBhdHRlbXB0aW5nXG4gICAgLy8gdG8gZ2V0IGVpdGhlciBgcGFyZW50YCBvciBgc2VsZmBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGY7XG4gICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBmdW5jdGlvbnMgdG8gcXVlcnkgdGhlIERPTSB1c2luZyBhIGdpdmVuIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge3N0cmluZ30gbWV0aG9kXG4gKiAgICAgICAgICBUaGUgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgcXVlcnkgd2l0aC5cbiAqXG4gKiBAcmV0dXJuICB7RnVuY3Rpb259XG4gKiAgICAgICAgICBUaGUgcXVlcnkgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJpZXIobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBpZiAoIWlzTm9uQmxhbmtTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbbWV0aG9kXShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25CbGFua1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSBpc0VsKGNvbnRleHQpID8gY29udGV4dCA6IGRvY3VtZW50O1xuXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXSAmJiBjdHhbbWV0aG9kXShzZWxlY3Rvcik7XG4gICAgfTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCBhbmQgYXBwbGllcyBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmQgaW5zZXJ0cyBjb250ZW50LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWU9J2RpdiddXG4gKiAgICAgICAgIE5hbWUgb2YgdGFnIHRvIGJlIGNyZWF0ZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbcHJvcGVydGllcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBwcm9wZXJ0aWVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbYXR0cmlidXRlcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yfSBjb250ZW50XG4gKiAgICAgICAgQSBjb250ZW50IGRlc2NyaXB0b3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcGVydGllc1twcm9wTmFtZV07XG5cbiAgICAgICAgLy8gU2VlICMyMTc2XG4gICAgICAgIC8vIFdlIG9yaWdpbmFsbHkgd2VyZSBhY2NlcHRpbmcgYm90aCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGluIHRoZVxuICAgICAgICAvLyBzYW1lIG9iamVjdCwgYnV0IHRoYXQgZG9lc24ndCB3b3JrIHNvIHdlbGwuXG4gICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKCdhcmlhLScpICE9PSAtMSB8fCBwcm9wTmFtZSA9PT0gJ3JvbGUnIHx8IHByb3BOYW1lID09PSAndHlwZScpIHtcblxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCB2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbFtzdHlsZU5hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0ZXh0Q29udGVudCBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgZXZlcnl3aGVyZSBhbmQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBtZXRob2QgZm9yIGl0LlxuICAgICAgICAgICAgdGV4dENvbnRlbnQoZWwsIHZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxbcHJvcE5hbWVdICE9PSB2YWwgfHwgcHJvcE5hbWUgPT09ICd0YWJJbmRleCcpIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5qZWN0cyB0ZXh0IGludG8gYW4gZWxlbWVudCwgcmVwbGFjaW5nIGFueSBleGlzdGluZyBjb250ZW50cyBlbnRpcmVseS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBhZGQgdGV4dCBjb250ZW50IGludG9cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcbiAqICAgICAgICAgVGhlIHRleHQgY29udGVudCB0byBhZGQuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBhZGRlZCB0ZXh0IGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29udGVudChlbCwgdGV4dCkge1xuICAgIGlmICh0eXBlb2YgZWwudGV4dENvbnRlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIG5vZGUgb2YgYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGRcbiAqICAgICAgICBFbGVtZW50IHRvIGluc2VydFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gKiAgICAgICAgRWxlbWVudCB0byBpbnNlcnQgY2hpbGQgaW50b1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRvKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIEVsZW1lbnQgdG8gY2hlY2tcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9DaGVja1xuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGNoZWNrIGZvclxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIGBjbGFzc1RvQ2hlY2tgIGhhcyB3aGl0ZSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzVG9DaGVjaykge1xuICAgIHRocm93SWZXaGl0ZXNwYWNlKGNsYXNzVG9DaGVjayk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NSZWdFeHAoY2xhc3NUb0NoZWNrKS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIGFkZCBjbGFzcyBuYW1lIHRvLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NUb0FkZFxuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGFkZC5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgYWRkZWQgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9BZGQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuXG4gICAgICAgIC8vIERvbid0IG5lZWQgdG8gYHRocm93SWZXaGl0ZXNwYWNlYCBoZXJlIGJlY2F1c2UgYGhhc0VsQ2xhc3NgIHdpbGwgZG8gaXRcbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgY2xhc3NMaXN0IG5vdCBiZWluZyBzdXBwb3J0ZWQuXG4gICAgfSBlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NUb0FkZCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc1RvQWRkKS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIHJlbW92ZSBhIGNsYXNzIG5hbWUgZnJvbS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9SZW1vdmVcbiAqICAgICAgICAgQ2xhc3MgbmFtZSB0byByZW1vdmVcbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCBjbGFzcyBuYW1lIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc1RvUmVtb3ZlKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0lmV2hpdGVzcGFjZShjbGFzc1RvUmVtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMgIT09IGNsYXNzVG9SZW1vdmU7XG4gICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBUaGUgY2FsbGJhY2sgZGVmaW5pdGlvbiBmb3IgdG9nZ2xlQ2xhc3MuXG4gKlxuICogQGNhbGxiYWNrIG1vZHVsZTpkb21+UHJlZGljYXRlQ2FsbGJhY2tcbiAqIEBwYXJhbSAgICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICAgIFRoZSBET00gZWxlbWVudCBvZiB0aGUgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgICAgVGhlIGBjbGFzc05hbWVgIHRoYXQgd2FudHMgdG8gYmUgdG9nZ2xlZFxuICpcbiAqIEByZXR1cm4gICB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKiAgICAgICAgICAgSWYgYHRydWVgIGlzIHJldHVybmVkLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gKiAgICAgICAgICAgYGVsZW1lbnRgLiBJZiBgZmFsc2VgLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgcmVtb3ZlZCBmcm9tXG4gKiAgICAgICAgICAgdGhlIGBlbGVtZW50YC4gSWYgYHVuZGVmaW5lZGAsIHRoZSBjYWxsYmFjayB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBuYW1lIHRvL2Zyb20gYW4gZWxlbWVudCBkZXBlbmRpbmcgb24gYW4gb3B0aW9uYWxcbiAqIGNvbmRpdGlvbiBvciB0aGUgcHJlc2VuY2UvYWJzZW5jZSBvZiB0aGUgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRvIHRvZ2dsZSBhIGNsYXNzIG5hbWUgb24uXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgIFRoZSBjbGFzcyB0aGF0IHNob3VsZCBiZSB0b2dnbGVkLlxuICpcbiAqIEBwYXJhbSAge2Jvb2xlYW58bW9kdWxlOmRvbX5QcmVkaWNhdGVDYWxsYmFja30gW3ByZWRpY2F0ZV1cbiAqICAgICAgICAgU2VlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHtAbGluayBtb2R1bGU6ZG9tflByZWRpY2F0ZUNhbGxiYWNrfVxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggYSBjbGFzcyB0aGF0IGhhcyBiZWVuIHRvZ2dsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlLCBwcmVkaWNhdGUpIHtcblxuICAgIC8vIFRoaXMgQ0FOTk9UIHVzZSBgY2xhc3NMaXN0YCBpbnRlcm5hbGx5IGJlY2F1c2UgSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgdG8gdGhlIGBjbGFzc0xpc3QudG9nZ2xlKClgIG1ldGhvZCEgV2hpY2ggaXMgZmluZSBiZWNhdXNlXG4gICAgLy8gYGNsYXNzTGlzdGAgd2lsbCBiZSB1c2VkIGJ5IHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBoYXMgPSBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcblxuICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZShlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9ICFoYXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5lY2Vzc2FyeSBjbGFzcyBvcGVyYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGVcbiAgICAvLyBlbGVtZW50LCBubyBhY3Rpb24gaXMgcmVxdWlyZWQuXG4gICAgaWYgKHByZWRpY2F0ZSA9PT0gaGFzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKipcbiAqIEFwcGx5IGF0dHJpYnV0ZXMgdG8gYW4gSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqICAgICAgICBFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGVzIHRvLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqICAgICAgICBBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYXR0clZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBhdHRyVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCAoYXR0clZhbHVlID09PSB0cnVlID8gJycgOiBhdHRyVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBhbiBlbGVtZW50J3MgYXR0cmlidXRlIHZhbHVlcywgYXMgZGVmaW5lZCBvbiB0aGUgSFRNTCB0YWcuXG4gKlxuICogQXR0cmlidXRlcyBhcmUgbm90IHRoZSBzYW1lIGFzIHByb3BlcnRpZXMuIFRoZXkncmUgZGVmaW5lZCBvbiB0aGUgdGFnXG4gKiBvciB3aXRoIHNldEF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSB0YWdcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCB0YWcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIEFsbCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50LiBCb29sZWFuIGF0dHJpYnV0ZXMgd2lsbCBiZSBgdHJ1ZWAgb3JcbiAqICAgICAgICAgYGZhbHNlYCwgb3RoZXJzIHdpbGwgYmUgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXModGFnKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICAvLyBrbm93biBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAvLyB3ZSBjYW4gY2hlY2sgZm9yIG1hdGNoaW5nIGJvb2xlYW4gcHJvcGVydGllcywgYnV0IG5vdCBhbGwgYnJvd3NlcnNcbiAgICAvLyBhbmQgbm90IGFsbCB0YWdzIGtub3cgYWJvdXQgdGhlc2UgYXR0cmlidXRlcywgc28sIHdlIHN0aWxsIHdhbnQgdG8gY2hlY2sgdGhlbSBtYW51YWxseVxuICAgIGNvbnN0IGtub3duQm9vbGVhbnMgPSAnLCcgKyAnYXV0b3BsYXksY29udHJvbHMscGxheXNpbmxpbmUsbG9vcCxtdXRlZCxkZWZhdWx0LGRlZmF1bHRNdXRlZCcgKyAnLCc7XG5cbiAgICBpZiAodGFnICYmIHRhZy5hdHRyaWJ1dGVzICYmIHRhZy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB0YWcuYXR0cmlidXRlcztcblxuICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBrbm93biBib29sZWFuc1xuICAgICAgICAgICAgLy8gdGhlIG1hdGNoaW5nIGVsZW1lbnQgcHJvcGVydHkgd2lsbCByZXR1cm4gYSB2YWx1ZSBmb3IgdHlwZW9mXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhZ1thdHRyTmFtZV0gPT09ICdib29sZWFuJyB8fCBrbm93bkJvb2xlYW5zLmluZGV4T2YoJywnICsgYXR0ck5hbWUgKyAnLCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSBvZiBhbiBpbmNsdWRlZCBib29sZWFuIGF0dHJpYnV0ZSBpcyB0eXBpY2FsbHkgYW4gZW1wdHlcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgKCcnKSB3aGljaCB3b3VsZCBlcXVhbCBmYWxzZSBpZiB3ZSBqdXN0IGNoZWNrIGZvciBhIGZhbHNlIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gZG9uJ3Qgd2FudCBzdXBwb3J0IGJhZCBjb2RlIGxpa2UgYXV0b3BsYXk9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ialthdHRyTmFtZV0gPSBhdHRyVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBnZXQgdGhlIHZhbHVlIG9mLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgVmFsdWUgdG8gc2V0IHRoZSBhdHRyaWJ1dGUgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYmxvY2sgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFR1cm4gb2ZmIHRleHQgc2VsZWN0aW9uIGJsb2NraW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5ibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBJZGVudGljYWwgdG8gdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBmdW5jdGlvbiwgYnV0IGVuc3VyZXMgdGhhdFxuICogdGhlIG1ldGhvZCBpcyBzdXBwb3J0ZWQgYXQgYWxsIChpdCBpcyBpbiBhbGwgYnJvd3NlcnMgd2UgY2xhaW0gdG8gc3VwcG9ydClcbiAqIGFuZCB0aGF0IHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYmVmb3JlIGNvbnRpbnVpbmcuXG4gKlxuICogVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGFsc28gc2hpbXMgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHByb3ZpZGVkIGJ5IHNvbWVcbiAqIG9sZGVyIGJyb3dzZXJzIChuYW1lbHksIElFOCkuXG4gKlxuICogQWRkaXRpb25hbGx5LCBzb21lIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGFkZGluZyBwcm9wZXJ0aWVzIHRvIGFcbiAqIGBDbGllbnRSZWN0YC9gRE9NUmVjdGAgb2JqZWN0OyBzbywgd2Ugc2hhbGxvdy1jb3B5IGl0IHdpdGggdGhlIHN0YW5kYXJkXG4gKiBwcm9wZXJ0aWVzIChleGNlcHQgYHhgIGFuZCBgeWAgd2hpY2ggYXJlIG5vdCB3aWRlbHkgc3VwcG9ydGVkKS4gVGhpcyBoZWxwc1xuICogYXZvaWQgaW1wbGVtZW50YXRpb25zIHdoZXJlIGtleXMgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgd2hvc2UgYENsaWVudFJlY3RgIHdlIHdhbnQgdG8gY2FsY3VsYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKiAgICAgICAgIEFsd2F5cyByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IC0gb3IgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgWydib3R0b20nLCAnaGVpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ3dpZHRoJ10uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGlmIChyZWN0W2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSByZWN0W2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUoZWwsICdoZWlnaHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC53aWR0aCkge1xuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlKGVsLCAnd2lkdGgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwb3NpdGlvbiBvZiBhIERPTSBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tflBvc2l0aW9uXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlZnRcbiAqICAgICAgICAgICBQaXhlbHMgdG8gdGhlIGxlZnQuXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogICAgICAgICAgIFBpeGVscyBmcm9tIHRoZSB0b3AuXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqXG4gKiBVc2VzIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIHRlY2huaXF1ZSBmcm9tIEpvaG4gUmVzaWcuXG4gKlxuICogQHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvZ2V0Ym91bmRpbmdjbGllbnRyZWN0LWlzLWF3ZXNvbWUvXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCBvZmZzZXQuXG4gKlxuICogQHJldHVybiB7bW9kdWxlOmRvbX5Qb3NpdGlvbn1cbiAqICAgICAgICAgVGhlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQb3NpdGlvbihlbCkge1xuICAgIGlmICghZWwgfHwgKGVsICYmICFlbC5vZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuXG4gICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCAmJiBlbCAhPT0gZG9jdW1lbnRbZnMuZnVsbHNjcmVlbkVsZW1lbnRdKSB7XG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcblxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0LFxuICAgICAgICB0b3AsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgYSBET00gZWxlbWVudCBvciBtb3VzZSBwb2ludGVyLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tfkNvb3JkaW5hdGVzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHhcbiAqICAgICAgICAgICB4IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlcbiAqICAgICAgICAgICB5IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gd2l0aGluIGFuIGVsZW1lbnQuXG4gKlxuICogVGhlIGJhc2Ugb24gdGhlIGNvb3JkaW5hdGVzIGFyZSB0aGUgYm90dG9tIGxlZnQgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBvbiB3aGljaCB0byBnZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gb24uXG4gKlxuICogQHBhcmFtICB7RXZlbnRUYXJnZXR+RXZlbnR9IGV2ZW50XG4gKiAgICAgICAgIEV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6ZG9tfkNvb3JkaW5hdGVzfVxuICogICAgICAgICBBIGNvb3JkaW5hdGVzIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBtb3VzZSBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZWwsIGV2ZW50KSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbDtcblxuICAgICAgICB3aGlsZSAoaXRlbSAmJiBpdGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdodG1sJykge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZShpdGVtLCAndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgICAgIGlmICgvXm1hdHJpeC8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdHJhbnNmb3JtLnNsaWNlKDcsIC0xKS5zcGxpdCgvLFxccy8pLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZC54ICs9IHZhbHVlc1s0XTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXm1hdHJpeDNkLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sXFxzLykubWFwKE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnggKz0gdmFsdWVzWzEyXTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzEzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0ge307XG4gICAgY29uc3QgYm94VGFyZ2V0ID0gZmluZFBvc2l0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYm94ID0gZmluZFBvc2l0aW9uKGVsKTtcbiAgICBjb25zdCBib3hXID0gYm94LndpZHRoO1xuICAgIGNvbnN0IGJveEggPSBib3guaGVpZ2h0O1xuICAgIGxldCBvZmZzZXRZID0gZXZlbnQub2Zmc2V0WSAtIChib3gudG9wIC0gYm94VGFyZ2V0LnRvcCk7XG4gICAgbGV0IG9mZnNldFggPSBldmVudC5vZmZzZXRYIC0gKGJveC5sZWZ0IC0gYm94VGFyZ2V0LmxlZnQpO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIG9mZnNldFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGJveC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyBib3gudG9wO1xuICAgICAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgICAgIG9mZnNldFggLT0gdHJhbnNsYXRlZC54O1xuICAgICAgICAgICAgb2Zmc2V0WSAtPSB0cmFuc2xhdGVkLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvbi55ID0gKDEgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvZmZzZXRZIC8gYm94SCkpKTtcbiAgICBwb3NpdGlvbi54ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb2Zmc2V0WCAvIGJveFcpKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcywgdmlhIGR1Y2sgdHlwaW5nLCB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSAge01peGVkfSB2YWx1ZVxuICogICAgICAgICBDaGVjayBpZiB0aGlzIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIHRleHQgbm9kZSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMztcbn1cblxuXG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCl7XG4gICAgaWYgKGlzRWwoZWwpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9wYWNpdHkgPSBlbC5zdHlsZT8ub3BhY2l0eSAhPT0gJycgPyBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpIDogMTtcblxuICAgIGlmIChvcGFjaXR5ID09PSAwIHx8IGNvbXB1dGVkU3R5bGUoZWwsICd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISEoIGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNzc0NsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoQ2xhc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcywgY29tcGFyZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMuc3RhcnRzV2l0aChzZWFyY2hDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn0pIHtcblxuICAgIGxldCBleGlzdCA9ICcnO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoZXhpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBleGlzdCA9IGNvbXBhcmUoYyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChleGlzdCAhPT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKGV4aXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGV4aXN0KTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcylcbiAgICB9XG59XG5cbi8qKlxuICogRW1wdGllcyB0aGUgY29udGVudHMgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBlbXB0eSBjaGlsZHJlbiBmcm9tXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBubyBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlFbChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIG1peGVkIHZhbHVlIHRoYXQgZGVzY3JpYmVzIGNvbnRlbnQgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NXG4gKiB2aWEgc29tZSBtZXRob2QuIEl0IGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICpcbiAqIFR5cGUgICAgICAgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLVxuICogYHN0cmluZ2AgICB8IFRoZSB2YWx1ZSB3aWxsIGJlIG5vcm1hbGl6ZWQgaW50byBhIHRleHQgbm9kZS5cbiAqIGBFbGVtZW50YCAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBUZXh0Tm9kZWAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBBcnJheWAgICAgfCBBIG9uZS1kaW1lbnNpb25hbCBhcnJheSBvZiBzdHJpbmdzLCBlbGVtZW50cywgdGV4dCBub2Rlcywgb3IgZnVuY3Rpb25zLiBUaGVzZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgb3IgdGV4dCBub2RlIChhbnkgb3RoZXIgcmV0dXJuIHZhbHVlLCBsaWtlIGFuIGFycmF5LCB3aWxsIGJlIGlnbm9yZWQpLlxuICogYEZ1bmN0aW9uYCB8IEEgZnVuY3Rpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgdGV4dCBub2RlLCBvciBhcnJheSAtIGFueSBvZiB0aGUgb3RoZXIgcG9zc2libGUgdmFsdWVzIGRlc2NyaWJlZCBhYm92ZS4gVGhpcyBtZWFucyB0aGF0IGEgY29udGVudCBkZXNjcmlwdG9yIGNvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZ1bmN0aW9ucywgYnV0IHRob3NlIHNlY29uZC1sZXZlbCBmdW5jdGlvbnMgbXVzdCByZXR1cm4gc3RyaW5ncywgZWxlbWVudHMsIG9yIHRleHQgbm9kZXMuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ3xFbGVtZW50fFRleHROb2RlfEFycmF5fEZ1bmN0aW9ufSBtb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yXG4gKi9cblxuLyoqXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgZm9yIGV2ZW50dWFsIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gKlxuICogVGhpcyBhbGxvd3MgYSB3aWRlIHJhbmdlIG9mIGNvbnRlbnQgZGVmaW5pdGlvbiBtZXRob2RzLCBidXQgaGVscHMgcHJvdGVjdFxuICogZnJvbSBmYWxsaW5nIGludG8gdGhlIHRyYXAgb2Ygc2ltcGx5IHdyaXRpbmcgdG8gYGlubmVySFRNTGAsIHdoaWNoIGNvdWxkXG4gKiBiZSBhbiBYU1MgY29uY2Vybi5cbiAqXG4gKiBUaGUgY29udGVudCBmb3IgYW4gZWxlbWVudCBjYW4gYmUgcGFzc2VkIGluIG11bHRpcGxlIHR5cGVzIGFuZFxuICogY29tYmluYXRpb25zLCB3aG9zZSBiZWhhdmlvciBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogICAgICAgICBBbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCB3YXMgcGFzc2VkIGluLCBub3JtYWxpemVkIHRvIGFuIGFycmF5IG9mXG4gKiAgICAgICAgIGVsZW1lbnRzIG9yIHRleHQgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpIHtcblxuICAgIC8vIEZpcnN0LCBpbnZva2UgY29udGVudCBpZiBpdCBpcyBhIGZ1bmN0aW9uLiBJZiBpdCBwcm9kdWNlcyBhbiBhcnJheSxcbiAgICAvLyB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgbm9ybWFsaXphdGlvbi5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IHVwLCBub3JtYWxpemUgdG8gYW4gYXJyYXksIHNvIG9uZSBvciBtYW55IGl0ZW1zIGNhbiBiZSBub3JtYWxpemVkLFxuICAgIC8vIGZpbHRlcmVkLCBhbmQgcmV0dXJuZWQuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGNvbnRlbnQpID8gY29udGVudCA6IFtjb250ZW50XSkubWFwKHZhbHVlID0+IHtcblxuICAgICAgICAvLyBGaXJzdCwgaW52b2tlIHZhbHVlIGlmIGl0IGlzIGEgZnVuY3Rpb24gdG8gcHJvZHVjZSBhIG5ldyB2YWx1ZSxcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBiZSBzdWJzZXF1ZW50bHkgbm9ybWFsaXplZCB0byBhIE5vZGUgb2Ygc29tZSBraW5kLlxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbCh2YWx1ZSkgfHwgaXNUZXh0Tm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICgvXFxTLykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIodmFsdWUgPT4gdmFsdWUpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGFwcGVuZHMgY29udGVudCB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgdG8gYXBwZW5kIG5vcm1hbGl6ZWQgY29udGVudCB0by5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpkb21+Q29udGVudERlc2NyaXB0b3J9IGNvbnRlbnRcbiAqICAgICAgICBBIGNvbnRlbnQgZGVzY3JpcHRvciB2YWx1ZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgZWxlbWVudCB3aXRoIGFwcGVuZGVkIG5vcm1hbGl6ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcbiAgICBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpLmZvckVhY2gobm9kZSA9PiBlbC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGluc2VydHMgY29udGVudCBpbnRvIGFuIGVsZW1lbnQ7IHRoaXMgaXMgaWRlbnRpY2FsIHRvXG4gKiBgYXBwZW5kQ29udGVudCgpYCwgZXhjZXB0IGl0IGVtcHRpZXMgdGhlIGVsZW1lbnQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEVsZW1lbnQgdG8gaW5zZXJ0IG5vcm1hbGl6ZWQgY29udGVudCBpbnRvLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggaW5zZXJ0ZWQgbm9ybWFsaXplZCBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChlbCwgY29udGVudCkge1xuICAgIHJldHVybiBhcHBlbmRDb250ZW50KGVtcHR5RWwoZWwpLCBjb250ZW50KTtcbn1cblxuXG4vKipcbiAqIGNsb3Nlc3QgZWxlbWVudCBwb2x5ZmlsbFxuICovXG4oZnVuY3Rpb24oRUxFTUVOVCkge1xuICAgIEVMRU1FTlQubWF0Y2hlcyA9IEVMRU1FTlQubWF0Y2hlcyB8fCBFTEVNRU5ULm1vek1hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVMRU1FTlQub01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICBFTEVNRU5ULmNsb3Nlc3QgPSBFTEVNRU5ULmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH07XG59KEVsZW1lbnQucHJvdG90eXBlKSk7XG5cbi8qKlxuICogRmluZHMgYSBzaW5nbGUgRE9NIGVsZW1lbnQgbWF0Y2hpbmcgYHNlbGVjdG9yYCB3aXRoaW4gdGhlIG9wdGlvbmFsXG4gKiBgY29udGV4dGAgb2YgYW5vdGhlciBET00gZWxlbWVudCAoZGVmYXVsdGluZyB0byBgZG9jdW1lbnRgKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiAgICAgICAgIEEgdmFsaWQgQ1NTIHNlbGVjdG9yLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBgcXVlcnlTZWxlY3RvcmAuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudHxTdHJpbmd9IFtjb250ZXh0PWRvY3VtZW50XVxuICogICAgICAgICBBIERPTSBlbGVtZW50IHdpdGhpbiB3aGljaCB0byBxdWVyeS4gQ2FuIGFsc28gYmUgYSBzZWxlY3RvclxuICogICAgICAgICBzdHJpbmcgaW4gd2hpY2ggY2FzZSB0aGUgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudCB3aWxsIGJlIHVzZWRcbiAqICAgICAgICAgYXMgY29udGV4dC4gSWYgbWlzc2luZyAob3Igbm8gZWxlbWVudCBtYXRjaGVzIHNlbGVjdG9yKSwgZmFsbHNcbiAqICAgICAgICAgYmFjayB0byBgZG9jdW1lbnRgLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgdGhhdCB3YXMgZm91bmQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVRdWVyaWVyKCdxdWVyeVNlbGVjdG9yJyk7XG5cbi8qKlxuICogRmluZHMgYSBhbGwgRE9NIGVsZW1lbnRzIG1hdGNoaW5nIGBzZWxlY3RvcmAgd2l0aGluIHRoZSBvcHRpb25hbFxuICogYGNvbnRleHRgIG9mIGFub3RoZXIgRE9NIGVsZW1lbnQgKGRlZmF1bHRpbmcgdG8gYGRvY3VtZW50YCkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvclxuICogICAgICAgICBBIHZhbGlkIENTUyBzZWxlY3Rvciwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gYHF1ZXJ5U2VsZWN0b3JBbGxgLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR8U3RyaW5nfSBbY29udGV4dD1kb2N1bWVudF1cbiAqICAgICAgICAgQSBET00gZWxlbWVudCB3aXRoaW4gd2hpY2ggdG8gcXVlcnkuIENhbiBhbHNvIGJlIGEgc2VsZWN0b3JcbiAqICAgICAgICAgc3RyaW5nIGluIHdoaWNoIGNhc2UgdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQgd2lsbCBiZSB1c2VkXG4gKiAgICAgICAgIGFzIGNvbnRleHQuIElmIG1pc3NpbmcgKG9yIG5vIGVsZW1lbnQgbWF0Y2hlcyBzZWxlY3RvciksIGZhbGxzXG4gKiAgICAgICAgIGJhY2sgdG8gYGRvY3VtZW50YC5cbiAqXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqICAgICAgICAgQSBlbGVtZW50IGxpc3Qgb2YgZWxlbWVudHMgdGhhdCB3ZXJlIGZvdW5kLiBXaWxsIGJlIGVtcHR5IGlmIG5vbmVcbiAqICAgICAgICAgd2VyZSBmb3VuZC5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCAkJCA9IGNyZWF0ZVF1ZXJpZXIoJ3F1ZXJ5U2VsZWN0b3JBbGwnKTtcbiIsImltcG9ydCB7Q1NTQ2xhc3NOYW1lTWl4aW59IGZyb20gJy4vbWl4aW5zL2Nzc0NsYXNzTmFtZSc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VPZlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZU9wdGlvbnNQdG9wZXJ0eShwcm9wZXJ0eSwgb3B0aW9ucywgaW5zdGFuY2VPZiA9IEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKChvcHRpb25zW3Byb3BlcnR5XSBpbnN0YW5jZW9mIGluc3RhbmNlT2YpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY2FsbC4gUHJvcGVydHkgJyArIHByb3BlcnR5ICsgJyBpcyBub3QgdmFsaWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxzdHJpbmd9ICBjb250ZW50XG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NTZXQgPSBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgYXJyYXkgPSAodHlwZW9mIHByb3BlcnRpZXMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogcHJvcGVydGllcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBjbGFzc1NldC5hZGQoaXRlbSkpO1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgY3NzQ2xhc3Mgb2YgY2xhc3NTZXQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKGNzc0NsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzZWxlY3Rvci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcLlwiLCAnZycpLCAnJCYnICsgVUlDb21wb25lbnQuY2xhc3NQcmVmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBVSUNvbXBvbmVudC5fbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIERvbS4kKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W118bnVsbH1cbiAgICAgKi9cbiAgICAkJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBzZWxlY3RvciA9IFVJQ29tcG9uZW50Ll9ub3JtYWxpemVQcmVmaXgoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gRG9tLiQkKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVUlDb21wb25lbnQsIENTU0NsYXNzTmFtZU1peGluKTtcbiIsIi8qIGNyYzMyLmpzIChDKSAyMDE0LXByZXNlbnQgU2hlZXRKUyAtLSBodHRwOi8vc2hlZXRqcy5jb20gKi9cbi8qIHZpbTogc2V0IHRzPTI6ICovXG4vKmV4cG9ydGVkIENSQzMyICovXG52YXIgQ1JDMzI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Lypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdC8qZXNsaW50LWRpc2FibGUgKi9cblx0aWYodHlwZW9mIERPX05PVF9FWFBPUlRfQ1JDID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmKCdvYmplY3QnID09PSB0eXBlb2YgZXhwb3J0cykge1xuXHRcdFx0ZmFjdG9yeShleHBvcnRzKTtcblx0XHR9IGVsc2UgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IHt9O1xuXHRcdFx0XHRmYWN0b3J5KG1vZHVsZSk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0fVxuXHQvKmVzbGludC1lbmFibGUgKi9cblx0Lypqc2hpbnQgaWdub3JlOmVuZCAqL1xufShmdW5jdGlvbihDUkMzMikge1xuQ1JDMzIudmVyc2lvbiA9ICcxLjIuMCc7XG4vKiBzZWUgcGVyZi9jcmMzMnRhYmxlLmpzICovXG4vKmdsb2JhbCBJbnQzMkFycmF5ICovXG5mdW5jdGlvbiBzaWduZWRfY3JjX3RhYmxlKCkge1xuXHR2YXIgYyA9IDAsIHRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5cblx0Zm9yKHZhciBuID0wOyBuICE9IDI1NjsgKytuKXtcblx0XHRjID0gbjtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHR0YWJsZVtuXSA9IGM7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkodGFibGUpIDogdGFibGU7XG59XG5cbnZhciBUID0gc2lnbmVkX2NyY190YWJsZSgpO1xuZnVuY3Rpb24gY3JjMzJfYnN0cihic3RyLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnN0ci5sZW5ndGggLSAxO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnN0ci5jaGFyQ29kZUF0KGkrKykpJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15ic3RyLmNoYXJDb2RlQXQoaSsrKSkmMHhGRl07XG5cdH1cblx0aWYoaSA9PT0gTCkgQyA9IChDPj4+OCkgXiBUWyhDIF4gYnN0ci5jaGFyQ29kZUF0KGkpKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfYnVmKGJ1Ziwgc2VlZCkge1xuXHRpZihidWYubGVuZ3RoID4gMTAwMDApIHJldHVybiBjcmMzMl9idWZfOChidWYsIHNlZWQpO1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSAzO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHR9XG5cdHdoaWxlKGkgPCBMKzMpIEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdHJldHVybiBDIF4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1Zl84KGJ1Ziwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSA3O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdH1cblx0d2hpbGUoaSA8IEwrNykgQyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfc3RyKHN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTD1zdHIubGVuZ3RoLCBjLCBkOyBpIDwgTDspIHtcblx0XHRjID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcblx0XHRpZihjIDwgMHg4MCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gYykmMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDE5MnwoKGM+PjYpJjMxKSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDEyOHwoYyY2MykpKSYweEZGXTtcblx0XHR9IGVsc2UgaWYoYyA+PSAweEQ4MDAgJiYgYyA8IDB4RTAwMCkge1xuXHRcdFx0YyA9IChjJjEwMjMpKzY0OyBkID0gc3RyLmNoYXJDb2RlQXQoaSsrKSYxMDIzO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDI0MHwoKGM+PjgpJjcpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+MikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoZD4+NikmMTUpfCgoYyYzKTw8NCkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KGQmNjMpKSkmMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgyMjR8KChjPj4xMikmMTUpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+NikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gQyBeIC0xO1xufVxuQ1JDMzIudGFibGUgPSBUO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJzdHIgPSBjcmMzMl9ic3RyO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJ1ZiA9IGNyYzMyX2J1Zjtcbi8vICRGbG93SWdub3JlXG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iLCJcbi8qKlxuKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuKiBAcGFyYW0gaXRlbVxuKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gc291cmNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcyk7XG59IiwiXG5jb25zdCBTdGF0dXNlc0xpc3QgPSB7XG4gICAgSU5JVDogLTEsXG4gICAgV0FJVDogMCxcbiAgICBFWEVDOiAxLFxuICAgIERPTkU6IDIsXG4gICAgRVJST1I6IDMsXG4gICAgREVMRVRFRDogOTksXG59O1xuXG5TdGF0dXNlc0xpc3QuU0VUX1ZJU0lCTEUgPSBbXG4gICAgU3RhdHVzZXNMaXN0LldBSVQsIFN0YXR1c2VzTGlzdC5FWEVDLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ET05FXG5dO1xuXG5TdGF0dXNlc0xpc3QuU0VUX0NPTVBMRVRFID0gW1xuICAgIFN0YXR1c2VzTGlzdC5ET05FLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ERUxFVEVEXG5dO1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TdGF0dXNlc0xpc3QuaXMgPSBmdW5jdGlvbiAoc2V0LCBzdGF0dXMpIHtcbiAgICByZXR1cm4gc2V0LmluZGV4T2Yoc3RhdHVzKSA+IC0xO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzZXNMaXN0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcblxuLyoqXG4gKkBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Fic3RyYWN0IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgI21hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBpZDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbW1vbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgaW5pdGlhdG9yTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJvZ3Jlc3MgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0ZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRpdGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXR1cyA9IFN0YXR1c2VzLklOSVQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IG51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgbWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gcGFyc2VJbnQoaWQpO1xuICAgICAgICB0aGlzLiNtYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgI3JlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuI2VsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuI2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnd3JhcHBlcicsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgJ2RhdGEtdGFzay1pZCc6IHRoaXMuaWRcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBlbFRhc2sgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiB0aGlzLl9idWlsZENzc0NsYXNzKCl9KTtcbiAgICAgICAgdGhpcy5fcmVuZGVyQ2hpbGQoZWxUYXNrKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZChlbFRhc2spO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGNoaWxkIGluc3RhbmNlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVuZGVyQ2hpbGQoZWxXcmFwcGVyKSB7XG5cbiAgICB9XG5cbiAgICAvLyBub2luc3BlY3Rpb24gSlNNZXRob2RDYW5CZVN0YXRpY1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfYnVpbGRDc3NDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIFsndGFzay1pdGVtJ11cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2Nzc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2Nzc0xpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jc3NMaXN0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nzc0xpc3QgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBzdGF0dXNlc0xpc3RLZXkgaW4gU3RhdHVzZXNMaXN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFN0YXR1c2VzTGlzdFtzdGF0dXNlc0xpc3RLZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nzc0xpc3RbU3RhdHVzZXNMaXN0W3N0YXR1c2VzTGlzdEtleV1dID0gVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKCdzdGF0dXMtJyArIHN0YXR1c2VzTGlzdEtleS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NMaXN0O1xuICAgIH07XG5cblxuICAgIGNzc0NsYXNzU3dpdGNoKCkge1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgbGV0IGNzc0NsYXNzLCBzZWFyY2hDbGFzcztcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWFuYWdlci5vcHRpb25zLnRoZW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgbGV0IHRoZW1lID0gdGhpcy5tYW5hZ2VyLm9wdGlvbnMudGhlbWVbdGhpcy5zdGF0dXNdIHx8IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCd0aGVtZS0nICsgdGhlbWUpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgndGhlbWUnKTtcbiAgICAgICAgICAgICAgICBEb20uc3dpdGNoQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MsIHNlYXJjaENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjc3NDbGFzcyA9IFRhc2tBYnN0cmFjdC4jY3NzTGlzdCgpW3RoaXMuc3RhdHVzXTtcbiAgICAgICAgc2VhcmNoQ2xhc3MgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCdzdGF0dXMnKTtcbiAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50c1xuICAgICAqL1xuICAgIHJlZnJlc2gocmVzcG9uc2UsIGVsZW1lbnRzID0gbnVsbCkge1xuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMoZWxlbWVudHMsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFByb2dyZXNzVG90YWwocHJvcGVydHkgPSAncHJvZ3Jlc3MnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlLnJlZHVjZSgoYSwgYykgPT4gYSArIGMpIC8gdmFsdWUubGVuZ3RoLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gb2xkVGFza1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVmcmVzaEVsZW1lbnRzKGVsZW1lbnRzLCBvbGRUYXNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNQYXJ0cyA9IHRoaXMub3B0aW9ucy5wYXJ0cztcblxuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50cykuZm9yRWFjaCgoZWxlbWVudE5hbWUpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9wdGlvbnNQYXJ0c1tlbGVtZW50TmFtZV0sXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlZnJlc2hCYXNpY1Byb3BlcnR5JztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgW20sIHBdID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gbSArIHBbMF0udG9VcHBlckNhc2UoKSArIHAuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT09IFwidW5kZWZpbmVkXCIpID8gdGhpc1twcm9wZXJ0eV0gOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9ICh0eXBlb2Ygb2xkVGFza1twcm9wZXJ0eV0gIT09IFwidW5kZWZpbmVkXCIpID8gb2xkVGFza1twcm9wZXJ0eV0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSAnXycgKyBtZXRob2Q7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW21ldGhvZF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdLmNhbGwodGhpcywgZWxlbWVudHNbZWxlbWVudE5hbWVdLCB2YWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIG5vaW5zcGVjdGlvbiBKU01ldGhvZENhbkJlU3RhdGljXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9yZWZyZXNoQmFzaWNQcm9wZXJ0eShlbGVtZW50LCB2YWx1ZSwgcHJvcGVydHkpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFRhc2tBYnN0cmFjdC5nZXRDbGFzc05hbWUoJ2xpc3QtJyArIHByb3BlcnR5KTtcbiAgICAgICAgICAgIGxldCBlbExpc3QgPSBEb20uJCgndWwuJyArIGNsYXNzTmFtZSwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmIChlbExpc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbExpc3QgPSB0aGlzLmNyZWF0ZUVsKCd1bCcsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGVsTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxMaSA9IERvbS4kKGBsaTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWAsIGVsTGlzdCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsTGkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxMaXN0LmFwcGVuZChEb20uY3JlYXRlRWwoJ2xpJywge30sIHt9LCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxMaS5pbm5lclRleHQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsTGkuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hbmFnZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0RlZmF1bHRzLnRhc2tPcHRpb25zfHt9fVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm9wdGlvbnMudGFza09wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBzdGF0dXNUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm9wdGlvbnMuc3RhdHVzVGV4dFt0aGlzLnN0YXR1c10gfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNUZXh0ICsgXCIgXCIgKyB0aGlzLmdldFRpdGxlKCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQge3N0ciBhcyBDUkMzMn0gZnJvbSAnY3JjLTMyJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCAqIGFzIE9iaiBmcm9tICcuL3V0aWxzL29iaic7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gXCIuL3N0YXR1c2VzTGlzdFwiO1xuaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcblxuY29uc3QgRU1QVFlfTUVTU0FHRSA9ICdfX0VNUFRZX18nO1xuXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBkZWxheVRpbWU6IDEwMDAsXG4gICAgcGFyYW1zOiB7fVxufTtcblxuLyoqXG4gKiBSZXNvbHZlIHRhc2sgaW5mb3JtYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb2x2ZXIge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Jlc29sdmVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgI2NhY2hlID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TWFuYWdlcltdfVxuICAgICAqL1xuICAgIHN0YXRpYyAjY29tbW9uTWFuYWdlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgI21hbmFnZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7e319XG4gICAgICovXG4gICAgI29wdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgI251bWJlclJlcXVlc3RzID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIERlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdC5wYXJhbXMgJiYgT2JqLmlzUGxhaW4ob3B0LnBhcmFtcykpIHtcbiAgICAgICAgICAgIG9wdC5wYXJhbXMgPSBPYmplY3QuZW50cmllcyhvcHQucGFyYW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN0YXJ0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25FbmRcbiAgICAgKi9cbiAgICByZXNvbHZlKG9uU3RhcnQsIG9uRW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZXJzID0gdGhpcy4jZ2V0TWFuYWdlcnMoKTtcblxuICAgICAgICAgICAgdGhpcy4jbnVtYmVyUmVxdWVzdHMgPSAwO1xuXG4gICAgICAgICAgICBtYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBvblN0YXJ0KG1hbmFnZXIpKTtcbiAgICAgICAgICAgIHRoaXMuI3JlcXVlc3QoMCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICE9PSBFTVBUWV9NRVNTQUdFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMuI251bWJlclJlcXVlc3RzO1xuICAgICAgICAgICAgICAgIG1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG9uRW5kKG1hbmFnZXIsIG51bWJlcikpO1xuICAgICAgICAgICAgICAgIHRoaXMuI251bWJlclJlcXVlc3RzID0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICNyZXF1ZXN0KHRpbWVPdXQgPSB0aGlzLm9wdGlvbnMuZGVsYXlUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVSZXF1ZXN0KHRpbWVPdXQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgIEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30gLSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9JyBgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChyYXcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmF3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZFRhc2tzKGl0ZW0uaWQpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5tYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVyLiN1cGRhdGVDb21tb25NYW5hZ2VycyhyYXcsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVxdWVzdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gcmVzb2x2ZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgI3VwZGF0ZUNvbW1vbk1hbmFnZXJzKHJlc3BvbnNlLCByZXNvbHZlcikge1xuICAgICAgICBSZXNvbHZlci4jY29tbW9uTWFuYWdlcnMuZm9yRWFjaChtYW5hZ2VyID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gbWFuYWdlci5maW5kVGFzayhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sgPT09IG51bGwgJiYgU3RhdHVzZXNMaXN0LmlzKFN0YXR1c2VzTGlzdC5TRVRfQ09NUExFVEUsIGl0ZW0uc3RhdHVzKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbW1vbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLmFkZFRhc2tzKFtpdGVtLmlkXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzayA9IG1hbmFnZXIuZmluZFRhc2soaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbml0aWF0b3JNYW5hZ2VyID0gcmVzb2x2ZXIudGFza3MuZmluZCh2YWx1ZSA9PiB2YWx1ZS5pZCA9PT0gaXRlbS5pZCk/Lm1hbmFnZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QgJiYgdGFzay5jb21tb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuX3VwZGF0ZVRhc2sodGFzaywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVPdXRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlIHwgbmV2ZXI+fVxuICAgICAqL1xuICAgICNjcmVhdGVSZXF1ZXN0KHRpbWVPdXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy50YXNrc0lkO1xuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChFTVBUWV9NRVNTQUdFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRhc2tzKSwgdGltZU91dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigodGFza3MpID0+IHtcbiAgICAgICAgICAgICsrdGhpcy4jbnVtYmVyUmVxdWVzdHM7XG5cbiAgICAgICAgICAgIGxldCBib2R5ID0gdGFza3MubWFwKChpdGVtKSA9PiBgdFtdPSR7aXRlbX1gKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB0aGlzLm9wdGlvbnMucGFyYW1zO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IGJvZHkuY29uY2F0KHBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh0aGlzLm9wdGlvbnMudXJsLCBleHRlbmQoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBlbmNvZGVVUkkoYm9keS5qb2luKCcmJykpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgIGdldCB0YXNrcygpIHtcbiAgICAgICAgbGV0IHRhc2tzID0gW107XG4gICAgICAgIHRoaXMuI21hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgIG1hbmFnZXIuZ2V0VGFza3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tbW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TnVtYmVyW119XG4gICAgICovXG4gICAgZ2V0IHRhc2tzSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLm1hcCgodGFzaykgPT4gdGFzay5pZCkuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSA9PT0gaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdHxib29sZWFufVxuICAgICAqL1xuICAgIGZpbmRUYXNrcyhpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbnVtYmVyUmVxdWVzdHMgPiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgI2dldE1hbmFnZXJzKGNvbW1vbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjb21tb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXJzLmZpbHRlcihmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIub3B0aW9ucy5jb21tb24gPT09IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKiBAcmV0dXJuIHtSZXNvbHZlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmFjdG9yeShtYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBvcHRpb25zID0gbWFuYWdlci5vcHRpb25zLnJlc29sdmVyLFxuICAgICAgICAgICAgaGFzaCA9IENSQzMyKG9wdGlvbnMudXJsKSxcbiAgICAgICAgICAgIGNhY2hlID0gUmVzb2x2ZXIuI2NhY2hlLFxuICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMgPSBSZXNvbHZlci4jY29tbW9uTWFuYWdlcnM7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSBjYWNoZVtoYXNoXSA9IChjYWNoZVtoYXNoXSBpbnN0YW5jZW9mIFJlc29sdmVyKSA/IGNhY2hlW2hhc2hdIDogbmV3IFJlc29sdmVyKG9wdGlvbnMpLFxuICAgICAgICAgICAgbWFuYWdlcnMgPSByZXNvbHZlci4jZ2V0TWFuYWdlcnMoKTtcblxuICAgICAgICBpZiAobWFuYWdlcnMuaW5kZXhPZihtYW5hZ2VyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIG1hbmFnZXJzLnB1c2gobWFuYWdlcik7XG5cbiAgICAgICAgICAgIGlmIChtYW5hZ2VyLm9wdGlvbnMuY29tbW9uKSB7XG4gICAgICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFuYWdlci5vd25lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNYW5hZ2VyLkV2ZW50cy5kZXN0cm95LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBtYW5hZ2Vycy5pbmRleE9mKGV2ZW50Lm1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbk1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuZ2V0VGFza3MoKS5maWx0ZXIodmFsdWUgPT4gdmFsdWUuaW5pdGlhdG9yTWFuYWdlciA9PT0gbWFuYWdlcnNbaW5kZXhdKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4ID0gY29tbW9uTWFuYWdlcnMuZmluZEluZGV4KHZhbHVlID0+IHZhbHVlID09PSBldmVudC5tYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb21tb25NYW5hZ2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmVyO1xuICAgIH1cblxufSIsImltcG9ydCB7ZWFjaH0gZnJvbSAnLi91dGlscy9vYmonO1xuLyoqXG4gKlxuICovXG4gY29uc3QgRXZlbnQgPSB7XG4gICAgcmVhZHk6ICdxbWM6bWFuYWdlcjpyZWFkeScsXG4gICAgZGVzdHJveTogJ3FtYzptYW5hZ2VyOmRlc3Ryb3knLFxuICAgIHN0YXR1c0NoYW5nZTogJ3FtYzptYW5hZ2VyOnN0YXR1c0NoYW5nZScsXG5cbiAgICBmZXRjaFN0YXJ0OiAncW1jOnJlc29sdmVyOnN0YXJ0JyxcbiAgICBmZXRjaEVuZDogJ3FtYzpyZXNvbHZlcjplbmQnLFxuXG59O1xuXG5FdmVudC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXZlbnRzID0gW107XG4gIGVhY2godGhpcywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudHMucHVzaChldmVudCk7XG4gIH0pO1xuICAgIHJldHVybiBldmVudHMuam9pbignICcpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBFdmVudDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgZnJvbSBcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVGdW5jdGlvbiBmcm9tIFwiLi9pc05hdGl2ZUZ1bmN0aW9uLmpzXCI7XG5pbXBvcnQgY29uc3RydWN0IGZyb20gXCIuL2NvbnN0cnVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59IiwiLyoqXG4gKiBNYW5hZ2VyIEV2ZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXJFdmVudCBleHRlbmRzIEN1c3RvbUV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgI21hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIsIHR5cGUsIHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIHByb3BzKTtcbiAgICAgICAgdGhpcy4jbWFuYWdlciA9IG1hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TWFuYWdlcn1cbiAgICAgKi9cbiAgICBnZXQgbWFuYWdlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcjtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBndWlkLmpzXG4gKiBAbW9kdWxlIGd1aWRcbiAqL1xuXG4vLyBEZWZhdWx0IHZhbHVlIGZvciBHVUlEcy4gVGhpcyBhbGxvd3MgdXMgdG8gcmVzZXQgdGhlIEdVSUQgY291bnRlciBpbiB0ZXN0cy5cbi8vXG4vLyBUaGUgaW5pdGlhbCBHVUlEIGlzIDMgYmVjYXVzZSBzb21lIHVzZXJzIGhhdmUgY29tZSB0byByZWx5IG9uIHRoZSBmaXJzdFxuLy8gZGVmYXVsdCBwbGF5ZXIgSUQgZW5kaW5nIHVwIGFzIGB2anNfdmlkZW9fM2AuXG4vL1xuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9qcy92aWRlby5qcy9wdWxsLzYyMTZcbmNvbnN0IF9pbml0aWFsR3VpZCA9IDM7XG5cbi8qKlxuICogVW5pcXVlIElEIGZvciBhbiBlbGVtZW50IG9yIGZ1bmN0aW9uXG4gKlxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IF9ndWlkID0gX2luaXRpYWxHdWlkO1xuXG4vKipcbiAqIEdldCBhIHVuaXF1ZSBhdXRvLWluY3JlbWVudGluZyBJRCBieSBudW1iZXIgdGhhdCBoYXMgbm90IGJlZW4gcmV0dXJuZWQgYmVmb3JlLlxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqICAgICAgICAgQSBuZXcgdW5pcXVlIElELlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV3R1VJRCgpIHtcbiAgcmV0dXJuIF9ndWlkKys7XG59XG5cbi8qKlxuICogUmVzZXQgdGhlIHVuaXF1ZSBhdXRvLWluY3JlbWVudGluZyBJRCBmb3IgdGVzdGluZyBvbmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHdWlkSW5UZXN0c09ubHkoKSB7XG4gIF9ndWlkID0gX2luaXRpYWxHdWlkO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBkb20tZGF0YS5qc1xuICogQG1vZHVsZSBkb20tZGF0YVxuICovXG5cblxuaW1wb3J0ICogYXMgR3VpZCBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxubGV0IEZha2VXZWFrTWFwO1xuXG5pZiAoIXdpbmRvdy5XZWFrTWFwKSB7XG4gIEZha2VXZWFrTWFwID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy52ZGF0YSA9ICd2ZGF0YScgKyBNYXRoLmZsb29yKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgfHwgRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdIHx8IEd1aWQubmV3R1VJRCgpO1xuXG4gICAgICBpZiAoIWtleVt0aGlzLnZkYXRhXSkge1xuICAgICAgICBrZXlbdGhpcy52ZGF0YV0gPSBhY2Nlc3M7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YVthY2Nlc3NdID0gdmFsdWU7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChrZXkpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXTtcblxuICAgICAgLy8gd2UgaGF2ZSBkYXRhLCByZXR1cm4gaXRcbiAgICAgIGlmIChhY2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVthY2Nlc3NdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGhhcyhrZXkpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXTtcblxuICAgICAgcmV0dXJuIGFjY2VzcyBpbiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdO1xuXG4gICAgICBpZiAoYWNjZXNzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbYWNjZXNzXTtcbiAgICAgICAgZGVsZXRlIGtleVt0aGlzLnZkYXRhXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogRWxlbWVudCBEYXRhIFN0b3JlLlxuICpcbiAqIEFsbG93cyBmb3IgYmluZGluZyBkYXRhIHRvIGFuIGVsZW1lbnQgd2l0aG91dCBwdXR0aW5nIGl0IGRpcmVjdGx5IG9uIHRoZVxuICogZWxlbWVudC4gRXguIEV2ZW50IGxpc3RlbmVycyBhcmUgc3RvcmVkIGhlcmUuXG4gKiAoYWxzbyBmcm9tIGpzbmluamEuY29tLCBzbGlnaHRseSBtb2RpZmllZCBhbmQgdXBkYXRlZCBmb3IgY2xvc3VyZSBjb21waWxlcilcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgd2luZG93LldlYWtNYXAgPyBuZXcgV2Vha01hcCgpIDogbmV3IEZha2VXZWFrTWFwKCk7XG4iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgbGFiZWwgPSAnJztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cblxuICAgICAqL1xuICAgIGNsYXNzTmFtZSA9IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHNpemUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7UHJvZ3Jlc3NCYXJbXX1cbiAgICAgKi9cbiAgICAjYmFycyA9IFtdO1xuXG4gICAgYmFyT3B0aW9ucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RWxlbWVudHxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjbGFiZWxFbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudHxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTaG93R3JhZGllbnQgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHN0YXRpYyAkY2xhc3NQcmVmaXggPSBudWxsO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIC4uLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsO1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3NpemUtJyArIHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1Nob3dHcmFkaWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ25vLWdyYWRpZW50Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbCA9IERvbS5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwge30sXG4gICAgICAgICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbXMnKX0pXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsID0gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxFbGVtZW50fVxuICAgICAqL1xuICAgICNnZXRMYWJlbEVsKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNsYWJlbEVsO1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jbGFiZWxFbCA9IGVsID0gRG9tLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1sYWJlbCcpfSwge30pXG4gICAgICAgIHRoaXMuI2VsLmFwcGVuZChlbCk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSB2YWx1ZVxuICAgICAqL1xuICAgIHNldFByb2dyZXNzKHZhbHVlKSB7XG5cbiAgICAgICAgY29uc3QgYmFycyA9IHRoaXMuI2JhcnMsXG4gICAgICAgICAgICBlbCA9IHRoaXMuI2VsLFxuICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpID8gW3ZhbHVlXSA6IHZhbHVlO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJhcnNbaW5kZXhdIGluc3RhbmNlb2YgUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICBiYXJzW2luZGV4XS5wcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXJzW2luZGV4XSA9IG5ldyBQcm9ncmVzc0Jhcih0aGlzLmJhck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLicgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzLWl0ZW1zJykpLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAoMTAwIC8gbGVuZ3RoKS50b0ZpeGVkKDMpICsgJyUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSwge30sIGJhcnNbaW5kZXhdLnJlbmRlcigpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzVGhvQ2hlY2sgPSBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ21vcmUtdGhhbi10aHJlZScpO1xuICAgICAgICBpZiAoRG9tLmhhc0NsYXNzKGVsLCBjbGFzc1Rob0NoZWNrKSA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCBjbGFzc1Rob0NoZWNrKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxhYmVsXG4gICAgICovXG4gICAgc2V0TGFiZWwobGFiZWwpIHtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLiNnZXRMYWJlbEVsKCkuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNsYXNzTmFtZSA9ICdwcm9ncmVzcy1iYXInO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgICNwcm9ncmVzcyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfGJvb2xlYW59XG4gICAgICovXG4gICAgbGFiZWxUZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1pbiA9IDA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4ID0gMTAwO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIC4uLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbFxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl8U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5sYWJlbFRleHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2goRG9tLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogJ3NyLW9ubHknLCBjc3M6IHt3aWR0aDogMH19LCB7fSwgdGhpcy5sYWJlbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMubGFiZWxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2VsZW1lbnQgPSBlbCA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBQcm9ncmVzcy5nZXRDbGFzc05hbWUodGhpcy5jbGFzc05hbWUpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIixcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5wcm9ncmVzcyxcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbWluJzogdGhpcy5taW4sXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1heCc6IHRoaXMubWF4XG4gICAgICAgIH0sIGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9ICh0aGlzLmxhYmVsVGV4dCkgPyB0aGlzLmxhYmVsVGV4dCA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm9ncmVzc30lICR7bGFiZWx9YFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgcHJvZ3Jlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9ncmVzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgcHJvZ3Jlc3ModmFsdWUpIHtcbiAgICAgICAgdGhpcy4jcHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCB2YWx1ZSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdGhpcy5sYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt2YWx1ZX0lYFxuXG4gICAgfVxufSIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uVCBleHRlbmRzIFVJQ29tcG9uZW50e1xuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAqL1xuICAgICNpY29uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICovXG4gICAgI3NpemUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd9IGljb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSBzaXplXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWNvbiA9IGZhbHNlLCBzaXplID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jaWNvbiA9IGljb247XG4gICAgICAgIHRoaXMuI3NpemUgPSBzaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudCA9IHRoaXMuY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiB0aGlzLiNidWlsZENsYXNzTmFtZSgpfSwge30sXG4gICAgICAgICAgICBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7fSwge30sIFsnczEnLCAnczInLCAnczMnXS5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICAjYnVpbGRDbGFzc05hbWUoKSB7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdpY29uLXQnLFxuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuI2ljb24pIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLiNpY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAodGhpcy4jc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NpemUtJyt0aGlzLiNzaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgaWNvbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy4jaWNvbjtcbiAgICAgICAgICAgIGlmIChpY29uICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsIGljb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNpY29uID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgc2l6ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlICA9IEljb25ULmdldENsYXNzTmFtZSgnc2l6ZS0nK3ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLiNzaXplO1xuICAgICAgICAgICAgaWYgKHNpemUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3NpemUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0IGNvbG9yKHZhbHVlKSB7XG4gICAgICAgIERvbS4kJCgnc3BhbltjbGFzc149c10nLCB0aGlzLiNlbGVtZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cblxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0IEljb25UIGZyb20gJy4vaWNvbnQnO1xuXG4vKipcbiAqXG4gKiBAdHlwZSB7e2ljb25Ib3Zlck5hbWU6IG51bGwsIGhhbmRsZXI6IG51bGwsIHNpemU6IG51bGwsIGRhdGE6IHt9LCBoaWRkZW5MYWJlbDogc3RyaW5nLCBpY29uTmFtZTogbnVsbCwgYW5pbWF0ZWRDbGljazogYm9vbGVhbiwgaGFuZGxlclRpbW91dERlbGF5OiBudW1iZXIsIGljb25TaXplOiBudWxsLCBkaXNhYmxlZDogYm9vbGVhbiwgbGFiZWw6IGJvb2xlYW4sIHRhZ05hbWU6IHN0cmluZ319XG4gKi9cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgaGFuZGxlcjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGFuZGxlclRpbW91dERlbGF5OiA1MDAsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIGxhYmVsOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgaGlkZGVuTGFiZWw6ICcnLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc2l6ZTogbnVsbCxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgaWNvbk5hbWU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgaWNvbkhvdmVyTmFtZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBpY29uU2l6ZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIGFuaW1hdGVkQ2xpY2s6IHRydWUsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIGRhdGE6IHt9XG5cbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICAjb3B0aW9ucyA9IERlZmF1bHRzO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0ljb25UfVxuICAgICAqL1xuICAgICNpY29uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwgRGVmYXVsdHMsIG9wdGlvbnMpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBbXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5pY29uTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuaWNvbjtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChpLnJlbmRlcigpKTtcbiAgICAgICAgICAgIGkuaWNvbiA9IG9wdGlvbnMuaWNvbk5hbWU7XG4gICAgICAgICAgICBpLnNpemUgPSBvcHRpb25zLmljb25TaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChEb20uY3JlYXRlRWwoJ3AnLCB7fSwge30sIG9wdGlvbnMubGFiZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhpZGRlbkxhYmVsKSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2godGhpcy5jcmVhdGVFbCgncCcsIHtjbGFzc05hbWU6ICdidXR0b24taGlkZGVuJ30sIHt9LCBvcHRpb25zLmhpZGRlbkxhYmVsKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlZENsaWNrKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wID0gRG9tLmNyZWF0ZUVsKCdwJywge2NsYXNzTmFtZTogJ2Ryb3AnfSk7XG4gICAgICAgICAgICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3ModGhpcywgJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGVudC5wdXNoKGRyb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwgPSB0aGlzLiNlbGVtZW50ID0gdGhpcy5jcmVhdGVFbChvcHRpb25zLnRhZ05hbWUsIHtjbGFzc05hbWU6IEJ1dHRvbi4jYnVpbGRDbGFzc05hbWUob3B0aW9ucyl9LCB7fSwgY29udGVudCk7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IG9wdGlvbnMuZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuI2FkZEhhbmRsZXJzKGVsLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gZWxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2J1aWxkQ2xhc3NOYW1lKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFsnYnV0dG9uJ107XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NpemUtJyArIG9wdGlvbnMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oaWRkZW5MYWJlbCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2hhcy1oaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuI2VsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tLnRvZ2dsZUNsYXNzKHRoaXMuI2VsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7SWNvblR9XG4gICAgICovXG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIGxldCBpY29uID0gdGhpcy4jaWNvbjtcbiAgICAgICAgaWYgKGljb24gaW5zdGFuY2VvZiBJY29uVCkge1xuICAgICAgICAgICAgcmV0dXJuIGljb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuI2ljb24gPSBuZXcgSWNvblQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgI2FkZEhhbmRsZXJzKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZWRDbGljaykge1xuICAgICAgICAgICAgICAgIEJ1dHRvbi4jYW5pbWF0ZWRDbGljayhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhbmRsZXJUaW1vdXREZWxheSA+IDApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0aW9ucy5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpLCBvcHRpb25zLmhhbmRsZXJUaW1vdXREZWxheSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zLmhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5pY29uSG92ZXJOYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlzYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5pY29uID0gb3B0aW9ucy5pY29uSG92ZXJOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5pY29uID0gb3B0aW9ucy5pY29uTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgI2FuaW1hdGVkQ2xpY2soZWxlbWVudCkge1xuXG4gICAgICAgIGNvbnN0IGRyb3AgPSBEb20uJCgnLmRyb3AnLCBlbGVtZW50KTtcbiAgICAgICAgaWYgKGRyb3ApIHtcblxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IERvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgeCA9IGV2ZW50LnBhZ2VYIC0gcmVjdC53aWR0aCAvIDIgLSByZWN0LmxlZnQgLSB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICB5ID0gZXZlbnQucGFnZVkgLSByZWN0LmhlaWdodCAvIDIgLSByZWN0LnRvcCAtIHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgICBkcm9wLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICAgICAgZHJvcC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG5cbiAgICAgICAgICAgIERvbS5hZGRDbGFzcyhkcm9wLCAnYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuQnV0dG9uLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cblxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IGV4dGVuZCBmcm9tIFwiLi91dGlscy9leHRlbmRcIjtcblxuXG4vKipcbiAqXG4gKiBAdHlwZSB7e3NlbGVjdEljb246IG51bGwsIHNjYWxlZDogYm9vbGVhbiwgYXJyYW5nZTogYm9vbGVhbiwgc2VsZWN0YWJsZTogYm9vbGVhbn19XG4gKi9cbmNvbnN0IERlZmF1bHRzID0ge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbi5EZWZhdWx0c1tdfVxuICAgICAqL1xuICAgIGJ1dHRvbnM6IFtdLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgYXJyYW5nZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzY2FsZWQ6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHNlbGVjdEljb246IG51bGxcblxufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zR3JvdXAgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9uW119XG4gICAgICovXG4gICAgYnV0dG9ucyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgI29wdGlvbnMgPSBEZWZhdWx0cztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IFVJQ29tcG9uZW50LnJlbW92ZU9wdGlvbnNQdG9wZXJ0eSgnYnV0dG9ucycsIG9wdGlvbnMsIEFycmF5KTtcbiAgICAgICAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwgRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBidXR0b25zLm1hcCgoY29uZmlnKSA9PiBuZXcgQnV0dG9uKGNvbmZpZykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuXG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2VsZW1lbnQgPSBlbCA9IHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IEJ1dHRvbnNHcm91cC4jYnVpbGRDbGFzc05hbWUodGhpcy5vcHRpb25zKX0sIHt9LFxuICAgICAgICAgICAgdGhpcy5idXR0b25zLm1hcCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ0bi5yZW5kZXIoKVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy4jYmluZFNlbGVjdEV2ZW50cyhlbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljICNidWlsZENsYXNzTmFtZShvcHRpb25zKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFsnYnV0dG9uLWdyb3VwJ107XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYXJyYW5nZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2FycmFuZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNjYWxlZCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NjYWxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAgICovXG4gICAgc2V0IGFycmFuZ2UodmFsdWUpIHtcblxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdhcnJhbmdlJyk7XG5cbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLiNvcHRpb25zO1xuXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKERvbS5oYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuYXJyYW5nZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgI2JpbmRTZWxlY3RFdmVudHMoZWxlbWVudCkge1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCggJy4nICsgQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnYnV0dG9uJykpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYnV0dG9ucy5maW5kKGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuLmVsZW1lbnQgPT09IGVsZW1lbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQkKCcuYnV0dG9uLnNlbGVjdGVkJywgZXZlbnQudGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIERvbS5zZXRBdHRyaWJ1dGUoZWwsICdkYXRhLWdyb3VwLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCAgQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCQoJy5idXR0b25bZGF0YS1ncm91cC1zZWxlY3RlZF0nLCBldmVudC50YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUF0dHJpYnV0ZShlbCwgJ2RhdGEtZ3JvdXAtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ3NlbGVjdGVkJykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnV0dG9ufG51bWJlcn0gYnV0dG9uXG4gICAgICovXG4gICAgc2V0IHNlbGVjdGVkKGJ1dHRvbikge1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ3NlbGVjdGVkJyksXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYnV0dG9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBidXR0b24gPSB0aGlzLmJ1dHRvbnNbYnV0dG9uXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQXR0cmlidXRlKGJ0bi5lbGVtZW50LCAnZGF0YS1ncm91cC1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhidG4uZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRG9tLmFkZENsYXNzKGJ1dHRvbi5lbGVtZW50LCBjbGFzc05hbWUpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zZWxlY3RJY29uKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmljb24uaWNvbiA9IG9wdGlvbnMuc2VsZWN0SWNvbjtcbiAgICAgICAgICAgICAgICBidXR0b24ub3B0aW9ucy5pY29uTmFtZSA9IG9wdGlvbnMuc2VsZWN0SWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cblxuXG5cbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgSWNvblQgZnJvbSAnLi9pY29udCc7XG5pbXBvcnQgQnV0dG9uc0dyb3VwIGZyb20gJy4vYnV0dG9uc0dyb3VwJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1N0YXR1cyBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50W119XG4gICAgICovXG4gICAgI2VsZW1lbnRzID0gW107XG5cbiAgICBtYXAgPSB7XG4gICAgICAgIGljb25zOiBbXSxcbiAgICAgICAgYWN0aW9uczogW11cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Rhc2tBYnN0cmFjdH1cbiAgICAgKi9cbiAgICAjdGFzaztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0ljb25UfVxuICAgICAqL1xuICAgICNpY29uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI3RleHQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbnNHcm91cH1cbiAgICAgKi9cbiAgICAjYkdyb3VwID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1hcEljb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBtYXBJY29ucywgYWN0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiN0YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy5tYXAuaWNvbnMgPSBtYXBJY29ucztcbiAgICAgICAgdGhpcy5tYXAuYWN0aW9ucyA9IGFjdGlvbnM7XG5cbiAgICAgICAgdGhpcy4jaWNvbiA9IG5ldyBJY29uVCgnbm9uZScsICdiaWcnKTtcbiAgICAgICAgdGhpcy4jdGV4dCA9IHRoaXMuY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnc3RhdHVzLXRleHQnfSk7XG5cbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgIGV4dGVuZChpdGVtLCB7ZGF0YToge3Rhc2s6IHRhc2t9fSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGVscyA9IHRoaXMuI2VsZW1lbnRzO1xuXG4gICAgICAgIGlmIChlbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGVscztcbiAgICAgICAgfVxuICAgICAgICBlbHMucHVzaCh0aGlzLiNpY29uLnJlbmRlcigpKTtcbiAgICAgICAgZWxzLnB1c2godGhpcy4jdGV4dCk7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwLmFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy4jYkdyb3VwID0gbmV3IEJ1dHRvbnNHcm91cCh7YnV0dG9uczogdGhpcy5tYXAuYWN0aW9ucywgYXJyYW5nZTogZmFsc2UsIHNjYWxlZDogdHJ1ZX0pO1xuICAgICAgICAgICAgZWxzLnB1c2godGhpcy4jYkdyb3VwLnJlbmRlcigpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIGVscztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICAgICAqL1xuICAgIHJlZnJlc2goc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuI3RleHQuaW5uZXJIVE1MID0gdGhpcy4jdGFzay5zdGF0dXNUZXh0O1xuXG4gICAgICAgIHRoaXMuI2ljb24uaWNvbiA9IHRoaXMubWFwLmljb25zW3N0YXR1c107XG5cbiAgICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLiNiR3JvdXA7XG5cbiAgICAgICAgaWYgKGJ1dHRvbkdyb3VwKSB7XG4gICAgICAgICAgICBidXR0b25Hcm91cC5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBlbmFibGVkV2l0aCA9IGJ1dHRvbi5vcHRpb25zPy5lbmFibGVkV2l0aFN0YXR1cztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVuYWJsZWRXaXRoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZFdpdGggPSBlbmFibGVkV2l0aC5jYWxsKGJ1dHRvbiwgc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW5hYmxlZFdpdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24ub3B0aW9ucy5lbmFibGVkV2l0aFN0YXR1cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBidXR0b24ub3B0aW9ucy5lbmFibGVkV2l0aFN0YXR1cy5pbmRleE9mKHN0YXR1cykgPT09IC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuYWJsZWRXaXRoID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBlbmFibGVkV2l0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVGFza0Fic3RyYWN0IGZyb20gXCIuL3Rhc2tBYnN0cmFjdFwiO1xuaW1wb3J0IERvbURhdGEgZnJvbSAnLi91dGlscy9kb20tZGF0YSc7XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9wcm9ncmVzcyc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBUYXNrU3RhdHVzIGZyb20gJy4vdGFza1N0YXR1cyc7XG5cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIGljb25QbGFjZW1lbnQ6ICdkZWZhdWx0JyxcbiAgICBwYXJ0czoge1xuICAgICAgICBzdGF0dXM6ICdyZWZyZXNoLnN0YXR1cycsXG4gICAgICAgIHRpdGxlOiAndGl0bGUnLFxuICAgICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICAgIGVycm9yOiAnZXJyb3JzJyxcbiAgICAgICAgJ3Byb2dyZXNzLXdyYXBwZXInOiAncmVmcmVzaC5wcm9ncmVzcycsXG4gICAgfSxcbiAgICBwcm9ncmVzczoge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHNpemU6ICcnLFxuICAgICAgICBiYXJPcHRpb25zOiB7XG4gICAgICAgICAgICBsYWJlbFRleHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbnM6IFtdXG59O1xuXG5jb25zdCBpY29uTWFwID0ge307XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5XQUlUXSA9ICdjbG9jayc7XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5FWEVDXSA9ICdwbGF5Jztcbmljb25NYXBbU3RhdHVzZXNMaXN0LkVSUk9SXSA9ICd3YXJuaW5nJztcbmljb25NYXBbU3RhdHVzZXNMaXN0LkRPTkVdID0gJ2NoZWNrZWQnO1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayBleHRlbmRzIFRhc2tBYnN0cmFjdCB7XG5cblxuICAgICNlbGVtZW50cyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBfcmVuZGVyQ2hpbGQoZWxXcmFwcGVyKSB7XG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy4jZWxlbWVudHMsXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgZWxEZXRhaWwgPSBlbFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ2RldGFpbCd9KSksXG4gICAgICAgICAgICBlbFN0YXR1c1dyYXBwZXIgPSBlbFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ3N0YXR1cy13cmFwcGVyJ30pKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLnBhcnRzKS5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICBsZXQgb3duZXIgPSBlbERldGFpbCxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAocGFydCA9PT0gJ3Byb2dyZXNzLXdyYXBwZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IFByb2dyZXNzKG9wdGlvbnMucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zWydwcm9ncmVzcy13cmFwcGVyJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnc3RhdHVzJykge1xuICAgICAgICAgICAgICAgIG93bmVyID0gZWxTdGF0dXNXcmFwcGVyO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBUYXNrU3RhdHVzKHRoaXMsIGljb25NYXAsIG9wdGlvbnMuYWN0aW9ucylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudHNbcGFydF0gPSBvd25lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBwYXJ0fSwge30pKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiB0eXBlb2YgY29tcG9uZW50Py5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gW2NvbnRlbnRdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT4gZWxlbWVudHNbcGFydF0uYXBwZW5kKGNvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICBUYXNrLiNzZXRDb21wb25lbnQoZWxlbWVudHNbcGFydF0sIGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByZWZyZXNoKHJlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyLnJlZnJlc2gocmVzcG9uc2UsIHRoaXMuI2VsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2J1aWxkQ3NzQ2xhc3MoKSB7XG5cbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gc3VwZXIuX2J1aWxkQ3NzQ2xhc3MoKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmljb25QbGFjZW1lbnQgIT09IERlZmF1bHRzLmljb25QbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKCd0YXNrLWl0ZW0tJyArIHRoaXMub3B0aW9ucy5pY29uUGxhY2VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc0xpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9Y29tcG9uZW50XG4gICAgICovXG4gICAgc3RhdGljICNzZXRDb21wb25lbnQoZWwsIGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoIURvbURhdGEuaGFzKGVsKSkge1xuICAgICAgICAgICAgRG9tRGF0YS5zZXQoZWwsIHt9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gRG9tRGF0YS5nZXQoZWwpO1xuICAgICAgICBkYXRhLmNvbXBvbmV0ID0gY29tcG9uZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljICNnZXRDb21wb25lbnQoZWwpIHtcbiAgICAgICAgaWYgKERvbURhdGEuaGFzKGVsKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IERvbURhdGEuZ2V0KGVsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5jb21wb25ldCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmNvbXBvbmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge051bWJlcnxOdW1iZXJbXX12YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3JlZnJlc2hQcm9ncmVzcyhlbCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHByb2dyZXNzID0gVGFzay4jZ2V0Q29tcG9uZW50KGVsKTtcblxuICAgICAgICBpZiAocHJvZ3Jlc3MgaW5zdGFuY2VvZiBQcm9ncmVzcykge1xuICAgICAgICAgICAgcHJvZ3Jlc3Muc2V0TGFiZWwodGhpcy5nZXRQcm9ncmVzc1RvdGFsKCkgKyAnJScpO1xuICAgICAgICAgICAgcHJvZ3Jlc3Muc2V0UHJvZ3Jlc3ModmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFN0YXR1c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfE51bWJlcltdfXZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAgX3JlZnJlc2hTdGF0dXMoZWxTdGF0dXMsIHZhbHVlKSB7XG4gICAgICAgIFRhc2suI2dldENvbXBvbmVudChlbFN0YXR1cykucmVmcmVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRpdGxlKCkge1xuICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5vcHRpb25zLnBhcnRzWyd0aXRsZSddO1xuICAgICAgICBpZiAocGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbcGFydF0gPz8gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxufVxuXG5UYXNrLkRlZnVhbHRzID0gRGVmYXVsdHM7IiwiN1xuXG4vKipcbiAqIEBwYXJhbSB0aW1pbmdcbiAqIEBwYXJhbSBkcmF3XG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqIEBwYXJhbSBvbkVuZFxuICovXG5mdW5jdGlvbiBhbmltYXRlKHt0aW1pbmcsIGRyYXcsIGR1cmF0aW9ufSwgb25FbmQpIHtcblxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGFuaW1hdGUodGltZSkge1xuICAgICAgICAvLyB0aW1lRnJhY3Rpb24g0LjQt9C80LXQvdGP0LXRgtGB0Y8g0L7RgiAwINC00L4gMVxuICAgICAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRpbWVGcmFjdGlvbiA+IDEpIHRpbWVGcmFjdGlvbiA9IDE7XG5cbiAgICAgICAgLy8g0LLRi9GH0LjRgdC70LXQvdC40LUg0YLQtdC60YPRidC10LPQviDRgdC+0YHRgtC+0Y/QvdC40Y8g0LDQvdC40LzQsNGG0LjQuFxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1pbmcodGltZUZyYWN0aW9uKTtcblxuICAgICAgICBkcmF3KHByb2dyZXNzKTsgLy8g0L7RgtGA0LjRgdC+0LLQsNGC0Ywg0LXRkVxuXG4gICAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob25FbmQpIHtcbiAgICAgICAgICAgICAgICBvbkVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuXG5jb25zdCB0aW1pbmdzID0ge1xuICAgIGxpbmVhcih0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcbiAgICB9LFxuICAgIHF1YWQodGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aW1lRnJhY3Rpb24sIDIpXG4gICAgfSxcbiAgICBjaXJjKHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyh0aW1lRnJhY3Rpb24pKTtcbiAgICB9LFxuICAgIGJhY2soeCA9IDEuNSwgdGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aW1lRnJhY3Rpb24sIDIpICogKCh4ICsgMSkgKiB0aW1lRnJhY3Rpb24gLSB4KVxuICAgIH0sXG59O1xuXG5cbmNvbnN0IGFuaW1hdGlvbnNEcmF3ID0ge1xuICAgICdmYWRlT3V0JzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDEgLSAoTWF0aC5yb3VuZChwcm9ncmVzcyAqIDEwMCkgLyAxMDApO1xuICAgIH0sXG4gICAgJ2ZhZGVJbic6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAoTWF0aC5yb3VuZChwcm9ncmVzcyAqIDEwMCkgLyAxMDApO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbmltYXRpb25Db25maWdcbiAqIEByZXR1cm4gUHJvbWlzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlRWwoZWwsIGFuaW1hdGlvbkNvbmZpZyA9IHtcbiAgICBuYW1lOiAnZmFkZU91dCcsXG4gICAgdGltaW5nOiB0aW1pbmdzLmxpbmVhcixcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGRlbGF5OiAwXG59KSB7XG4gICAgbGV0IGFuaW1hdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGFuaW1hdGlvbkNvbmZpZyk7XG5cbiAgICBpZiAodHlwZW9mIGFuaW1hdGlvbi5kcmF3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFuaW1hdGlvbi5kcmF3LmJpbmQoZWwpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYW5pbWF0aW9uLm5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBhbmltYXRpb25zRHJhd1thbmltYXRpb24ubmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYW5pbWF0aW9uLmRyYXcgPSBhbmltYXRpb25zRHJhd1thbmltYXRpb24ubmFtZV0uYmluZChlbClcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gYW5pbWF0aW9uICcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYW5pbWF0aW9uLmRlbGF5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGFuaW1hdGlvbi5kZWxheSA9IDA7XG4gICAgfVxuXG4gICAgYW5pbWF0aW9uLnRpbWluZyA9ICh0eXBlb2YgYW5pbWF0aW9uLnRpbWluZyA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0aW1pbmdzW2FuaW1hdGlvbi50aW1pbmddID09PSAnZnVuY3Rpb24nKVxuICAgICAgICA/IHRpbWluZ3NbYW5pbWF0aW9uLnRpbWluZ10gOiB0aW1pbmdzLmxpbmVhcjtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGFuaW1hdGUoYW5pbWF0aW9uLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGVsKVxuICAgICAgICB9KSwgYW5pbWF0aW9uLmRlbGF5KTtcbiAgICB9KTtcblxufVxuXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufXRpbWluZ1xuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWRlSW4oZWwsIHRpbWluZyA9ICdsaW5lYXInLCBkdXJhdGlvbiA9IDEwMDAsIGRlbGF5ID0gMCkge1xuICAgIHJldHVybiBhbmltYXRlRWwoZWwsIHtcbiAgICAgICAgbmFtZTogJ2ZhZGVJbicsXG4gICAgICAgIHRpbWluZzogdGltaW5nLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGVsXG4gKiBAcGFyYW0gdGltaW5nXG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqIEBwYXJhbSBkZWxheVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhZGVPdXQoZWwsIHRpbWluZyA9ICdsaW5lYXInLCBkdXJhdGlvbiA9IDEwMDAsIGRlbGF5ID0gMCkge1xuICAgIHJldHVybiBhbmltYXRlRWwoZWwsIHtcbiAgICAgICAgbmFtZTogJ0ZhZGVPdXQnLFxuICAgICAgICB0aW1pbmc6IHRpbWluZyxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSk7XG59IiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXInO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50c0xpc3QnO1xuaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBNYW5hZ2VyRXZlbnQgZnJvbSAnLi9tYW5hZ2VyRXZlbnQnO1xuaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb250JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IEJ1dHRvbnNHcm91cCBmcm9tICcuL2J1dHRvbnNHcm91cCc7XG5cbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBhbmltYXRlRWwsIHtmYWRlSW59IGZyb20gJy4vdXRpbHMvYW5pbWF0ZSc7XG5cblxuY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgY29tbW9uOiBmYWxzZSxcbiAgICB0aXRsZTogJzxoMz5CYWNrZ3JvdW5kcyB0YXNrczwvaDM+JyxcbiAgICB0aGVtZTogeyctMSc6IFwiZGVmYXVsdFwifSxcbiAgICByZW5kZXJPbkVtcHR5OiB0cnVlLFxuICAgIHRhc2tDbGFzczogVGFzayxcbiAgICBlbXB0eVRleHQ6ICdUYXNrcyBub3QgcHJvdmlkZWQgeWV0JyxcbiAgICB0YXNrT3B0aW9uczoge30sXG4gICAgdGFza3M6IFtdLFxuICAgIHN0YXR1c1RleHQ6IHt9LFxuICAgIGhpZGVBbmltYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGVPdXQnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgdGltaW5nOiAnbGluZWFyJyxcbiAgICAgICAgZGVsYXk6IDBcbiAgICB9LFxuICAgIHNob3dBbmltYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGVJbicsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICB0aW1pbmc6ICdsaW5lYXInLFxuICAgICAgICBkZWxheTogMFxuICAgIH0sXG4gICAgdGFza3NBbmltYXRpb246IHtcbiAgICAgICAgaGlkZToge30sXG4gICAgICAgIHNob3c6IHt9XG4gICAgfSxcbiAgICByZXNvbHZlcjoge1xuICAgICAgICB1cmw6ICdxdWV1ZS1yZWFkZXInXG4gICAgfVxufTtcblxuXG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5oaWRlW1N0YXR1c2VzLkRPTkVdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5oaWRlQW5pbWF0aW9uLCB7ZGVsYXk6IDUwMDB9KTtcbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLmhpZGVbU3RhdHVzZXMuRVJST1JdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5oaWRlQW5pbWF0aW9uLCB7ZGVsYXk6IDIwMDAwfSk7XG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5zaG93W1N0YXR1c2VzLkVYRUNdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5zaG93QW5pbWF0aW9uLCB7ZHVyYXRpb246IDUwMH0pO1xuRGVmYXVsdHMudGFza3NBbmltYXRpb24uc2hvd1tTdGF0dXNlcy5XQUlUXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuc2hvd0FuaW1hdGlvbiwge2R1cmF0aW9uOiA1MDB9KTtcblxuRGVmYXVsdHMudGFza3NBbmltYXRpb24uaGlkZVtTdGF0dXNlcy5FUlJPUl0gPSBmYWxzZTsgLy9ub3QgcmVtb3ZlIFRhc2sgZWxlbWVudCBmcm9tIGRvbVxuXG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLkRPTkVdID0gJ0NvbXBsZXRlJztcbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuRVJST1JdID0gJ0NvbXBsZXRlIHdpdGggZXJyb3JzJztcbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuRVhFQ10gPSAnUHJvY2Vzc2luZyc7XG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLldBSVRdID0gJ0F3YWl0aW5nJztcblxuXG4vKipcbiAqXG4gKi9cbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UmVzb2x2ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjcmVzb2x2ZXIgPSBudWxsO1xuXG4gICAgI2VsZW1lbnRzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBvd25lcjogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJUYXNrczogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBlbXB0eVRleHQ6IG51bGxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgICN0YXNrcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICAjb3B0aW9ucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3duZXIgPSBVSUNvbXBvbmVudC5yZW1vdmVPcHRpb25zUHRvcGVydHkoJ2VsZW1lbnQnLCBvcHRpb25zKTtcbiAgICAgICAgbGV0IG9wdCA9IGV4dGVuZCh7fSwgTWFuYWdlci5EZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIHtcbiAgICAgICAgICAgIHRhc2tPcHRpb25zOiBvcHQudGFza0NsYXNzLkRlZnVhbHRzXG4gICAgICAgIH0sIG9wdCk7XG5cbiAgICAgICAgdGhpcy4jcmVzb2x2ZXIgPSBSZXNvbHZlci5mYWN0b3J5KHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudGFza3MgJiYgdHlwZW9mIG9wdGlvbnMudGFza3MubGVuZ3RoICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2tzKG9wdGlvbnMudGFza3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBsYXRlciBhZGRlZCB0YXNrcyxcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMucmVhZHksIHtidWJibGVzOiB0cnVlfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cnVjdG9yIG9mIG1hbmFnZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLmRlc3Ryb3ksIHtidWJibGVzOiB0cnVlfSk7XG4gICAgICAgIHRoaXMuI3Rhc2tzID0gW107XG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSBkZXRhaWxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHRyaWdnZXIodHlwZSwgcHJvcHMgPSB7fSwgZGV0YWlsKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWwgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcHJvcHMuZGV0YWlsID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkZXRhaWwpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZGV0YWlsW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vd25lckVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgTWFuYWdlckV2ZW50KHRoaXMsIHR5cGUsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrcyhTdGF0dXNlcy5TRVRfVklTSUJMRSk7XG5cbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLm9wdGlvbnMucmVuZGVyT25FbXB0eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy4jZWxlbWVudHM7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzLndyYXBwZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGVsZW1lbnRzLndyYXBwZXIgPSBlbGVtZW50cy5vd25lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAnd3JhcHBlcid9KSk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50cy53cmFwcGVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGl0bGUgJiYgdGhpcy5vcHRpb25zLnRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHRoaXMub3B0aW9ucy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50cy53cmFwcGVyVGFza3MgPSBlbGVtZW50cy53cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAndGFza3MnfSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZW1wdHlUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZW1wdHlUZXh0ID0gZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50cy5lbXB0eVRleHQgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZW1wdHktd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogJ2VtcHR5LXRleHQnLCB0ZXh0Q29udGVudDogb3B0aW9ucy5lbXB0eVRleHR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRoZW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIERvbS5zd2l0Y2hDbGFzcyhlbGVtZW50cy53cmFwcGVyLCBNYW5hZ2VyLmdldENsYXNzTmFtZSgndGhlbWUtJyArIG9wdGlvbnMudGhlbWUpLCBNYW5hZ2VyLmdldENsYXNzTmFtZSgndGhlbWUnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRhc2sucmVmcmVzaCgpKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICN0b2dnbGVFbXB0eVRleHQodHlwZSkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuI2VsZW1lbnRzLmVtcHR5VGV4dCxcbiAgICAgICAgICAgIHZpc2libGUgPSBEb20uaXNWaXNpYmxlKGVsKTtcblxuICAgICAgICBpZiAoRG9tLmlzRWwoZWwpKSB7XG4gICAgICAgICAgICBpZiAoKHZpc2libGUgJiYgdHlwZSA9PT0gJ2hpZGUnKSB8fCAodmlzaWJsZSA9PT0gZmFsc2UgJiYgdHlwZSA9PT0gJ3Nob3cnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbmltYXRlRWwoZWwsIHRoaXMub3B0aW9uc1t0eXBlICsgJ0FuaW1hdGlvbiddKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gKHR5cGUgPT09ICdzaG93JykgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfXRhc2tzXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXNvbHZlXG4gICAgICovXG4gICAgYWRkVGFza3ModGFza3MsIHJlc29sdmUgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0YXNrcyAmJiB0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLiN0YXNrcyA9IHRoaXMuI3Rhc2tzLmNvbmNhdCh0YXNrcyk7XG4gICAgICAgICAgICB0aGlzLiN0b2dnbGVFbXB0eVRleHQoJ2hpZGUnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVyLnJlc29sdmUoKG1hbmFnZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlci5nZXRUYXNrcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci50cmlnZ2VyKEV2ZW50cy5mZXRjaFN0YXJ0LCB7YnViYmxlczogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChtYW5hZ2VyLCBudW1iZXJSZXF1ZXN0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIudHJpZ2dlcihFdmVudHMuZmV0Y2hFbmQsIHtidWJibGVzOiB0cnVlfSwge3JlcXVlc3RzOiBudW1iZXJSZXF1ZXN0c30pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUYXNrQWJzdHJhY3R9IHRhc2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91cGRhdGVUYXNrKHRhc2ssIHJlc3BvbnNlKSB7XG5cbiAgICAgICAgaWYgKHRhc2sucHJvZ3Jlc3MgIT09IHJlc3BvbnNlLnByb2dyZXNzIHx8IHRhc2suc3RhdHVzICE9PSByZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgIHx8IHRhc2sudGV4dCAhPT0gcmVzcG9uc2UudGV4dCB8fCB0YXNrLnRpdGxlICE9PSByZXNwb25zZS50aXRsZSkge1xuICAgICAgICAgICAgY29uc3QgaXNTdGF0dXNDaGFuZ2UgPSB0YXNrLnN0YXR1cyAhPT0gcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgIG9sZERhdGEgPSBleHRlbmQoe30sIHRhc2spO1xuICAgICAgICAgICAgdGFzayA9IGV4dGVuZCh0YXNrLCByZXNwb25zZSk7XG4gICAgICAgICAgICB0YXNrLnJlZnJlc2gob2xkRGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChpc1N0YXR1c0NoYW5nZSkge1xuXG4gICAgICAgICAgICAgICAgdGFzay5jc3NDbGFzc1N3aXRjaCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFN0YXR1c2VzLmlzKFtTdGF0dXNlcy5FWEVDXSwgdGFzay5zdGF0dXMpKSB7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnN0YXR1c0NoYW5nZSwge2J1YmJsZXM6IHRydWV9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIG9sZFN0YXR1czogb2xkRGF0YS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChTdGF0dXNlcy5pcyhTdGF0dXNlcy5TRVRfVklTSUJMRSwgdGFzay5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2suZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlclRhc2tzRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlRWwoZWxlbWVudCwgdGhpcy4jdGFza0FuaW1hdGlvbih0YXNrLCAnc2hvdycpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChTdGF0dXNlcy5pcyhTdGF0dXNlcy5TRVRfQ09NUExFVEUsIHRhc2suc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5lbGVtZW50LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fG51bWJlcn0gdGFzayBUYXNrIGluc3RhbmNlIG9yIHRhc2sgaWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJlbW92ZWRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIHJlbW92ZVRhc2sodGFzaywgb25SZW1vdmVkID0gbnVsbCkge1xuXG4gICAgICAgIGxldCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0YXNrID0gdGFza3MuZmluZCgodCkgPT4gdC5pZCA9PT0gdGFzaylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0VGFza3MoKS5maW5kSW5kZXgoKHQpID0+IHQuaWQgPT09IHRhc2suaWQpO1xuICAgICAgICAgICAgaWYgKGlkID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiN0YXNrcy5zcGxpY2UoaWQsIDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jcmVtb3ZlRWwodGFzay5lbGVtZW50LCB0aGlzLiN0YXNrQW5pbWF0aW9uKHRhc2spKS50aGVuKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25SZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZWQoZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiN0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgI3Rhc2tBbmltYXRpb24odGFzaywgdHlwZSA9ICdoaWRlJykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGFza3NBbmltYXRpb25bdHlwZV1bdGFzay5zdGF0dXNdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy50YXNrc0FuaW1hdGlvblt0eXBlXVt0YXNrLnN0YXR1c107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uc1t0eXBlICsgJ0FuaW1hdGlvbiddO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfG1lbnViYXJ9IHN0YXR1c0ZpbHRlclxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgIGdldFRhc2tzKHN0YXR1c0ZpbHRlcikge1xuICAgICAgICBsZXQgdGFza3MgPSB0aGlzLiN0YXNrcztcbiAgICAgICAgY29uc3QgVGFza0NsYXNzID0gdGhpcy5vcHRpb25zLnRhc2tDbGFzcztcbiAgICAgICAgdGFza3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdID0gZXh0ZW5kKG5ldyBUYXNrQ2xhc3MobnVsbCwgdGhpcyksIGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIucGFyc2VJbnQoaXRlbSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdID0gbmV3IFRhc2tDbGFzcyhpdGVtLCB0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3RhdHVzRmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXR1c0ZpbHRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNGaWx0ZXIgPSBbc3RhdHVzRmlsdGVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzRmlsdGVyLmluZGV4T2YodGFzay5zdGF0dXMpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcmV0dXJuIHtUYXNrQWJzdHJhY3R8bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kVGFzayhpZCkge1xuICAgICAgICBjb25zdCB0YXNrID0gdGhpcy5nZXRUYXNrcygpLmZpbmQoKHQpID0+IHQuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxmYWxzZX1hbmltYXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICNyZW1vdmVFbChlbCwgYW5pbWF0aW9uID0gdGhpcy5vcHRpb25zLmhpZGVBbmltYXRpb24pIHtcblxuICAgICAgICBpZiAoYW5pbWF0aW9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGVFbChlbCwgYW5pbWF0aW9uKS50aGVuKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgb3duZXJFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMub3duZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgd3JhcHBlckVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy53cmFwcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHdyYXBwZXJUYXNrc0VsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy53cmFwcGVyVGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtSZXNvbHZlcn1cbiAgICAgKi9cbiAgICBnZXQgcmVzb2x2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyZXNvbHZlclxuICAgIH1cblxuXG59XG5cblVJQ29tcG9uZW50LmNsYXNzUHJlZml4ID0gJ3FtYy0nO1xuXG5NYW5hZ2VyLlRhc2tBYnN0cmFjdCA9IFRhc2tBYnN0cmFjdDtcbk1hbmFnZXIuQnV0dG9uID0gQnV0dG9uO1xuTWFuYWdlci5CdXR0b25zR3JvdXAgPSBCdXR0b25zR3JvdXA7XG5NYW5hZ2VyLkljb24gPSBJY29uO1xuXG5NYW5hZ2VyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5NYW5hZ2VyLkV2ZW50cyA9IEV2ZW50cztcbk1hbmFnZXIuU3RhdHVzZXMgPSBTdGF0dXNlcztcblxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyIsImltcG9ydCAkIGZyb20gJ2dsb2JhbC9qUXVlcnknO1xuXG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL21hbmFnZXInXG5cbiQuZm4ucXVldWVNYW5hZ2VyID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuXG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuZGF0YSgncXVldWUtbWFuYWdlcicpLFxuICAgICAgICBtZXRob2RzID0ge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtNYW5hZ2VyLkRlZmF1bHRzfSBvcHRpb25zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkd3JhcHBlciA9ICQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd3JhcHBlci5kYXRhKCdxdWV1ZU1hbmFnZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR3cmFwcGVyLmRhdGEoJ3F1ZXVlTWFuYWdlcicsIG5ldyBNYW5hZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgJC5leHRlbmQodHJ1ZSwge2VsZW1lbnQ6ICR3cmFwcGVyLmdldCgwKX0sIE1hbmFnZXIuRGVmYXVsdHMsIG9wdGlvbnMgfHwge30sICR3cmFwcGVyLmRhdGEoJ21hbmFnZXInKSB8fCB7fSkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjcmVhdGVCdXR0b25zOiBmdW5jdGlvbihvcHRpb25zLCAkd3JhcHBlcil7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXIgPSAkd3JhcHBlciB8fCB0aGlzO1xuICAgICAgICAgICAgICAgICR3cmFwcGVyLmFwcGVuZCgkKG5ldyBNYW5hZ2VyLkJ1dHRvbnNHcm91cChvcHRpb25zKS5yZW5kZXIoKSkuZGF0YSgnbWFuYWdlcicsIG1hbmFnZXIpKTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfTtcblxuICAgIGlmIChtYW5hZ2VyIGluc3RhbmNlb2YgTWFuYWdlciAmJiB0eXBlb2YgbWFuYWdlclttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyW21ldGhvZF0uYXBwbHkobWFuYWdlciwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW21ldGhvZF0pIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHNbbWV0aG9kXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICFtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQuZXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBxdWV1ZU1hbmFnZXIgJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn07XG5cbiQuZm4ucXVldWVNYW5hZ2VyLk1hbmFnZXIgPSBNYW5hZ2VyO1xuXG4kKCdkb2N1bWVudCcpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucW1jLXF1ZXVlLW1hbmFnZXJbZGF0YS1tYW5hZ2VyXScpLnF1ZXVlTWFuYWdlcigpO1xufSk7XG5cblxuXG4iXSwibmFtZXMiOlsiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc0FwcGx5RGVzY3JpcHRvclNldCIsInJlY2VpdmVyIiwidmFsdWUiLCJzZXQiLCJjYWxsIiwiVHlwZUVycm9yIiwiX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciIsInByaXZhdGVNYXAiLCJhY3Rpb24iLCJoYXMiLCJnZXQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IiLCJjbGFzc0FwcGx5RGVzY3JpcHRvclNldCIsIl9jbGFzc0FwcGx5RGVzY3JpcHRvckdldCIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsImNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGx5IiwiQ1NTQ2xhc3NOYW1lTWl4aW4iLCJjbGFzc1ByZWZpeCIsImdldENsYXNzTmFtZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiRnVsbHNjcmVlbkFwaSIsInByZWZpeGVkIiwiYXBpTWFwIiwic3BlY0FwaSIsImJyb3dzZXJBcGkiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwia2V5cyIsIm9iamVjdCIsImlzT2JqZWN0IiwiZWFjaCIsImZuIiwiZm9yRWFjaCIsImlzUGxhaW4iLCJjb21wdXRlZFN0eWxlIiwiZWwiLCJwcm9wIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbXB1dGVkU3R5bGVWYWx1ZSIsImdldFByb3BlcnR5VmFsdWUiLCJVU0VSX0FHRU5UIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwid2Via2l0VmVyc2lvbk1hcCIsImV4ZWMiLCJwYXJzZUZsb2F0IiwicG9wIiwidGVzdCIsIm1hdGNoIiwiSVNfQU5EUk9JRCIsIm1ham9yIiwibWlub3IiLCJJU19FREdFIiwiSVNfQ0hST01FIiwicmVzdWx0IiwidmVyc2lvbiIsIklTX1NBRkFSSSIsIlRPVUNIX0VOQUJMRUQiLCJCb29sZWFuIiwiRG9tIiwibWF4VG91Y2hQb2ludHMiLCJEb2N1bWVudFRvdWNoIiwiSVNfSVBBRCIsImlzTm9uQmxhbmtTdHJpbmciLCJzdHIiLCJ0cmltIiwidGhyb3dJZldoaXRlc3BhY2UiLCJpbmRleE9mIiwiRXJyb3IiLCJjbGFzc1JlZ0V4cCIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsImlzUmVhbCIsImlzRWwiLCJub2RlVHlwZSIsImNyZWF0ZVF1ZXJpZXIiLCJtZXRob2QiLCJzZWxlY3RvciIsImNvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiY3JlYXRlRWwiLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsImF0dHJpYnV0ZXMiLCJjb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm9wTmFtZSIsInZhbCIsInNldEF0dHJpYnV0ZSIsInN0eWxlTmFtZSIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJhdHRyTmFtZSIsImFwcGVuZENvbnRlbnQiLCJ0ZXh0IiwiaW5uZXJUZXh0IiwiaGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NUb0NoZWNrIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGRDbGFzcyIsImNsYXNzVG9BZGQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsImNsYXNzVG9SZW1vdmUiLCJyZW1vdmUiLCJzcGxpdCIsImZpbHRlciIsImMiLCJqb2luIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc1RvVG9nZ2xlIiwicHJlZGljYXRlIiwiYXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50Tm9kZSIsInJlY3QiLCJrIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJpc1RleHROb2RlIiwiaXNWaXNpYmxlIiwib3BhY2l0eSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q2xpZW50UmVjdHMiLCJzd2l0Y2hDbGFzcyIsImNzc0NsYXNzIiwic2VhcmNoQ2xhc3MiLCJjb21wYXJlIiwiZXhpc3QiLCJub3JtYWxpemVDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlIiwiYXBwZW5kQ2hpbGQiLCJFTEVNRU5UIiwibWF0Y2hlcyIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsIiQiLCIkJCIsIlVJQ29tcG9uZW50IiwicmVtb3ZlT3B0aW9uc1B0b3BlcnR5IiwicHJvcGVydHkiLCJvcHRpb25zIiwiaW5zdGFuY2VPZiIsImNsYXNzU2V0IiwiU2V0IiwiYXJyYXkiLCJpdGVtIiwiX25vcm1hbGl6ZVByZWZpeCIsInIiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImNyYzMyIiwiY29tbW9uanNIZWxwZXJzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZhY3RvcnkiLCJET19OT1RfRVhQT1JUX0NSQyIsIkNSQzMyIiwic2lnbmVkX2NyY190YWJsZSIsInRhYmxlIiwibiIsIkludDMyQXJyYXkiLCJUIiwiY3JjMzJfYnN0ciIsImJzdHIiLCJzZWVkIiwiQyIsIkwiLCJjaGFyQ29kZUF0IiwiY3JjMzJfYnVmIiwiYnVmIiwiY3JjMzJfYnVmXzgiLCJjcmMzMl9zdHIiLCJkIiwiZXh0ZW5kIiwic291cmNlcyIsInNoaWZ0IiwiU3RhdHVzZXNMaXN0IiwiSU5JVCIsIldBSVQiLCJFWEVDIiwiRE9ORSIsIkVSUk9SIiwiREVMRVRFRCIsIlNFVF9WSVNJQkxFIiwiU0VUX0NPTVBMRVRFIiwiaXMiLCJzdGF0dXMiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJUYXNrQWJzdHJhY3QiLCJpZCIsIm1hbmFnZXIiLCJTdGF0dXNlcyIsInBhcnNlSW50IiwiX3JlbmRlckNoaWxkIiwiZWxXcmFwcGVyIiwiX2J1aWxkQ3NzQ2xhc3MiLCJjc3NDbGFzc1N3aXRjaCIsInRoZW1lIiwiX2NsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY0dldCIsInJlZnJlc2giLCJyZXNwb25zZSIsImVsZW1lbnRzIiwiX3JlZnJlc2hFbGVtZW50cyIsImdldFByb2dyZXNzVG90YWwiLCJNYXRoIiwicm91bmQiLCJyZWR1Y2UiLCJhIiwib2xkVGFzayIsIm9wdGlvbnNQYXJ0cyIsInBhcnRzIiwiZWxlbWVudE5hbWUiLCJtIiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm9sZFZhbHVlIiwiX3JlZnJlc2hCYXNpY1Byb3BlcnR5IiwiZWxMaXN0IiwiYXBwZW5kIiwiaW5kZXgiLCJlbExpIiwiaW5uZXJIVE1MIiwiZ2V0VGl0bGUiLCJzdGF0dXNUZXh0IiwidGFza09wdGlvbnMiLCJlbFRhc2siLCJfY3NzTGlzdCIsInN0YXR1c2VzTGlzdEtleSIsInRvTG93ZXJDYXNlIiwiRU1QVFlfTUVTU0FHRSIsIkRlZmF1bHRzIiwiZGVsYXlUaW1lIiwicGFyYW1zIiwiUmVzb2x2ZXIiLCJvcHQiLCJPYmoiLCJlbnRyaWVzIiwicmVzb2x2ZSIsIm9uU3RhcnQiLCJvbkVuZCIsImlzUnVubmluZyIsIm1hbmFnZXJzIiwiZXJyb3IiLCJ0aGVuIiwibnVtYmVyIiwiZmluZFRhc2tzIiwidGFza3MiLCJ0YXNrIiwicmVzb2x2ZXIiLCJoYXNoIiwidXJsIiwiY2FjaGUiLCJjb21tb25NYW5hZ2VycyIsInB1c2giLCJjb21tb24iLCJvd25lckVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiTWFuYWdlciIsIkV2ZW50cyIsImRlc3Ryb3kiLCJldmVudCIsImdldFRhc2tzIiwiaW5pdGlhdG9yTWFuYWdlciIsInJlbW92ZVRhc2siLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJ0aW1lT3V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIm9rIiwianNvbiIsInJhdyIsIl91cGRhdGVUYXNrIiwiZmluZFRhc2siLCJhZGRUYXNrcyIsImZpbmQiLCJQcm9taXNlIiwicmVqZWN0IiwidGFza3NJZCIsInNldFRpbWVvdXQiLCJib2R5IiwiY29uY2F0IiwiZmV0Y2giLCJoZWFkZXJzIiwiZW5jb2RlVVJJIiwiRXZlbnQiLCJyZWFkeSIsInN0YXR1c0NoYW5nZSIsImZldGNoU3RhcnQiLCJmZXRjaEVuZCIsImV2ZW50cyIsIl9nZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX2lzTmF0aXZlRnVuY3Rpb24iLCJGdW5jdGlvbiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwidmFsdWVPZiIsImUiLCJfY29uc3RydWN0IiwiUGFyZW50IiwiYXJncyIsIkNsYXNzIiwiaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiYmluZCIsImluc3RhbmNlIiwiX3dyYXBOYXRpdmVTdXBlciIsIl9jYWNoZSIsIk1hcCIsImlzTmF0aXZlRnVuY3Rpb24iLCJXcmFwcGVyIiwiTWFuYWdlckV2ZW50IiwidHlwZSIsIkN1c3RvbUV2ZW50IiwiX2luaXRpYWxHdWlkIiwiX2d1aWQiLCJuZXdHVUlEIiwiRmFrZVdlYWtNYXAiLCJXZWFrTWFwIiwidmRhdGEiLCJmbG9vciIsInBlcmZvcm1hbmNlIiwibm93IiwiRGF0ZSIsImRhdGEiLCJhY2Nlc3MiLCJHdWlkIiwiUHJvZ3Jlc3MiLCJyZW5kZXIiLCJIVE1MRWxlbWVudCIsInNpemUiLCJpc1Nob3dHcmFkaWVudCIsInNldFByb2dyZXNzIiwiYmFycyIsIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJiYXJPcHRpb25zIiwiY2xhc3NUaG9DaGVjayIsInNldExhYmVsIiwibGFiZWwiLCJsYWJlbFRleHQiLCJjc3MiLCJyb2xlIiwibWluIiwibWF4IiwiY2hpbGROb2RlcyIsIkljb25UIiwiaWNvbiIsImJhY2tncm91bmRDb2xvciIsImhhbmRsZXIiLCJoYW5kbGVyVGltb3V0RGVsYXkiLCJoaWRkZW5MYWJlbCIsImRpc2FibGVkIiwiaWNvbk5hbWUiLCJpY29uSG92ZXJOYW1lIiwiaWNvblNpemUiLCJhbmltYXRlZENsaWNrIiwiQnV0dG9uIiwiZHJvcCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIngiLCJwYWdlWCIsImxlZnQiLCJzY3JvbGxYIiwieSIsInBhZ2VZIiwidG9wIiwic2Nyb2xsWSIsImJ1dHRvbnMiLCJhcnJhbmdlIiwic2NhbGVkIiwic2VsZWN0YWJsZSIsInNlbGVjdEljb24iLCJCdXR0b25zR3JvdXAiLCJjb25maWciLCJidG4iLCJidXR0b24iLCJzZWxlY3RlZCIsIlRhc2tTdGF0dXMiLCJtYXBJY29ucyIsImFjdGlvbnMiLCJpY29ucyIsImVscyIsImJ1dHRvbkdyb3VwIiwiZW5hYmxlZFdpdGgiLCJlbmFibGVkV2l0aFN0YXR1cyIsImljb25QbGFjZW1lbnQiLCJ0aXRsZSIsImljb25NYXAiLCJUYXNrIiwiZWxEZXRhaWwiLCJlbFN0YXR1c1dyYXBwZXIiLCJwYXJ0Iiwib3duZXIiLCJjb21wb25lbnQiLCJfcmVmcmVzaFByb2dyZXNzIiwiX3JlZnJlc2hTdGF0dXMiLCJlbFN0YXR1cyIsIkRvbURhdGEiLCJjb21wb25ldCIsIkRlZnVhbHRzIiwiYW5pbWF0ZSIsInRpbWluZyIsImRyYXciLCJkdXJhdGlvbiIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsInRpbWVGcmFjdGlvbiIsInRpbWluZ3MiLCJsaW5lYXIiLCJxdWFkIiwicG93IiwiY2lyYyIsInNpbiIsImFjb3MiLCJiYWNrIiwiYW5pbWF0aW9uc0RyYXciLCJkaXNwbGF5IiwiYW5pbWF0ZUVsIiwiYW5pbWF0aW9uQ29uZmlnIiwiZGVsYXkiLCJhbmltYXRpb24iLCJyZW5kZXJPbkVtcHR5IiwidGFza0NsYXNzIiwiZW1wdHlUZXh0IiwiaGlkZUFuaW1hdGlvbiIsInNob3dBbmltYXRpb24iLCJ0YXNrc0FuaW1hdGlvbiIsImhpZGUiLCJzaG93Iiwid3JhcHBlciIsIndyYXBwZXJUYXNrcyIsInRyaWdnZXIiLCJidWJibGVzIiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIm51bWJlclJlcXVlc3RzIiwicmVxdWVzdHMiLCJpc1N0YXR1c0NoYW5nZSIsIm9sZERhdGEiLCJvbGRTdGF0dXMiLCJ3cmFwcGVyVGFza3NFbGVtZW50Iiwib25SZW1vdmVkIiwidCIsInN0YXR1c0ZpbHRlciIsIlRhc2tDbGFzcyIsIk51bWJlciIsInZpc2libGUiLCJJY29uIiwicXVldWVNYW5hZ2VyIiwibWV0aG9kcyIsImluaXQiLCIkd3JhcHBlciIsImNyZWF0ZUJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFTQSxpQkFBVCxDQUEyQkMsTUFBM0IsRUFBbUNDLEtBQW5DLEVBQTBDO0VBQ3hDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztFQUNyQyxRQUFJRSxVQUFVLEdBQUdILEtBQUssQ0FBQ0MsQ0FBRCxDQUF0QjtFQUNBRSxJQUFBQSxVQUFVLENBQUNDLFVBQVgsR0FBd0JELFVBQVUsQ0FBQ0MsVUFBWCxJQUF5QixLQUFqRDtFQUNBRCxJQUFBQSxVQUFVLENBQUNFLFlBQVgsR0FBMEIsSUFBMUI7RUFDQSxRQUFJLFdBQVdGLFVBQWYsRUFBMkJBLFVBQVUsQ0FBQ0csUUFBWCxHQUFzQixJQUF0QjtFQUMzQkMsSUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCVCxNQUF0QixFQUE4QkksVUFBVSxDQUFDTSxHQUF6QyxFQUE4Q04sVUFBOUM7RUFDRDtFQUNGOztFQUVjLFNBQVNPLFlBQVQsQ0FBc0JDLFdBQXRCLEVBQW1DQyxVQUFuQyxFQUErQ0MsV0FBL0MsRUFBNEQ7RUFDekUsTUFBSUQsVUFBSixFQUFnQmQsaUJBQWlCLENBQUNhLFdBQVcsQ0FBQ0csU0FBYixFQUF3QkYsVUFBeEIsQ0FBakI7RUFDaEIsTUFBSUMsV0FBSixFQUFpQmYsaUJBQWlCLENBQUNhLFdBQUQsRUFBY0UsV0FBZCxDQUFqQjtFQUNqQixTQUFPRixXQUFQO0VBQ0Q7O0VDZGMsU0FBU0ksc0JBQVQsQ0FBZ0NDLElBQWhDLEVBQXNDO0VBQ25ELE1BQUlBLElBQUksS0FBSyxLQUFLLENBQWxCLEVBQXFCO0VB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QyxFQUFGLENBQU4sSUFBYSxJQUFkLENBQWY7RUFDQTJOLFFBQUFBLENBQUMsR0FBSUEsQ0FBQyxLQUFHLENBQUwsR0FBVUosQ0FBQyxDQUFDLENBQUNJLENBQUMsR0FBQ0ksR0FBRyxDQUFDL04sQ0FBQyxFQUFGLENBQU4sSUFBYSxJQUFkLENBQWY7RUFDQTJOLFFBQUFBLENBQUMsR0FBSUEsQ0FBQyxLQUFHLENBQUwsR0FBVUosQ0FBQyxDQUFDLENBQUNJLENBQUMsR0FBQ0ksR0FBRyxDQUFDL04sQ0FBQyxFQUFGLENBQU4sSUFBYSxJQUFkLENBQWY7RUFDQTJOLFFBQUFBLENBQUMsR0FBSUEsQ0FBQyxLQUFHLENBQUwsR0FBVUosQ0FBQyxDQUFDLENBQUNJLENBQUMsR0FBQ0ksR0FBRyxDQUFDL04sQ0FBQyxFQUFGLENBQU4sSUFBYSxJQUFkLENBQWY7RUFDQTJOLFFBQUFBLENBQUMsR0FBSUEsQ0FBQyxLQUFHLENBQUwsR0FBVUosQ0FBQyxDQUFDLENBQUNJLENBQUMsR0FBQ0ksR0FBRyxDQUFDL04sQ0FBQyxFQUFGLENBQU4sSUFBYSxJQUFkLENBQWY7RUFDQTJOLFFBQUFBLENBQUMsR0FBSUEsQ0FBQyxLQUFHLENBQUwsR0FBVUosQ0FBQyxDQUFDLENBQUNJLENBQUMsR0FBQ0ksR0FBRyxDQUFDL04sQ0FBQyxFQUFGLENBQU4sSUFBYSxJQUFkLENBQWY7RUFDQTJOLFFBQUFBLENBQUMsR0FBSUEsQ0FBQyxLQUFHLENBQUwsR0FBVUosQ0FBQyxDQUFDLENBQUNJLENBQUMsR0FBQ0ksR0FBRyxDQUFDL04sQ0FBQyxFQUFGLENBQU4sSUFBYSxJQUFkLENBQWY7RUFDQTJOLFFBQUFBLENBQUMsR0FBSUEsQ0FBQyxLQUFHLENBQUwsR0FBVUosQ0FBQyxDQUFDLENBQUNJLENBQUMsR0FBQ0ksR0FBRyxDQUFDL04sQ0FBQyxFQUFGLENBQU4sSUFBYSxJQUFkLENBQWY7RUFDQTs7RUFDRCxhQUFNQSxDQUFDLEdBQUc0TixDQUFDLEdBQUMsQ0FBWjtFQUFlRCxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FB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
