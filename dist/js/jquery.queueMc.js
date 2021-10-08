/*!
 * @license
 * yii2-queue-manager-client 0.1.1 <https://github.com/somov/yii2-queue-manager-client#readme>
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
    taskRemoved: 'qmc:manager:taskRemoved',
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
              animateEl(element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task, 'show'));
            }
          }

          if (StatusesList.is(StatusesList.SET_COMPLETE, task.status)) {
            this.removeTask(task);
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
      var _this3 = this;

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

          if (task.element.parentNode instanceof Element) {
            _classPrivateMethodGet(this, _removeEl, _removeEl2).call(this, task.element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task)).then(function (el) {
              _this3.trigger(Event.taskElementRemoved, {
                bubbles: true
              }, {
                task: task,
                element: el
              });

              if (_classPrivateFieldGet(_this3, _tasks).length === 0) {
                _classPrivateMethodGet(_this3, _toggleEmptyText, _toggleEmptyText2).call(_this3, 'show');
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
    var _this4 = this;

    var TaskClass = this.options.taskClass;
    tasks.forEach(function (item, index) {
      if (item instanceof TaskAbstract) {
        return;
      }

      if (typeof item === 'object') {
        tasks[index] = extend(new TaskClass(null, _this4), item);
      } else if (Number.parseInt(item) > 0) {
        tasks[index] = new TaskClass(item, _this4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwiLi4vc3JjL2pzL21peGlucy9jc3NDbGFzc05hbWUuanMiLCIuLi9zcmMvanMvdXRpbHMvZnVsbHNjcmVlbi1hcGkuanMiLCIuLi9zcmMvanMvdXRpbHMvb2JqLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2NvbXB1dGVkLXN0eWxlLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLmpzIiwiLi4vc3JjL2pzL3VJQ29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcyIsIi4uL3NyYy9qcy91dGlscy9leHRlbmQuanMiLCIuLi9zcmMvanMvc3RhdHVzZXNMaXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vc3JjL2pzL3Rhc2tBYnN0cmFjdC5qcyIsIi4uL3NyYy9qcy9yZXNvbHZlci5qcyIsIi4uL3NyYy9qcy9ldmVudHNMaXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2lzTmF0aXZlRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NvbnN0cnVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS93cmFwTmF0aXZlU3VwZXIuanMiLCIuLi9zcmMvanMvbWFuYWdlckV2ZW50LmpzIiwiLi4vc3JjL2pzL3V0aWxzL2d1aWQuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLWRhdGEuanMiLCIuLi9zcmMvanMvcHJvZ3Jlc3MuanMiLCIuLi9zcmMvanMvaWNvbnQuanMiLCIuLi9zcmMvanMvYnV0dG9uLmpzIiwiLi4vc3JjL2pzL2J1dHRvbnNHcm91cC5qcyIsIi4uL3NyYy9qcy90YXNrU3RhdHVzLmpzIiwiLi4vc3JjL2pzL3Rhc2suanMiLCIuLi9zcmMvanMvdXRpbHMvYW5pbWF0ZS5qcyIsIi4uL3NyYy9qcy9tYW5hZ2VyLmpzIiwiLi4vc3JjL2pzL2pxdWVyeS5wbHVnaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENTU0NsYXNzTmFtZU1peGluICA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudWxsfHN0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc1ByZWZpeDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICAgZ2V0Q2xhc3NOYW1lOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NQcmVmaXg9PT0gbnVsbCB8fCBuYW1lLnN0YXJ0c1dpdGgodGhpcy5jbGFzc1ByZWZpeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUHJlZml4ICsgbmFtZTtcbiAgICB9LFxuXG59OyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqIEBtb2R1bGUgZnVsbHNjcmVlbi1hcGlcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG4vKipcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHNlZSBbU3BlY2lmaWNhdGlvbl17QGxpbmsgaHR0cHM6Ly9mdWxsc2NyZWVuLnNwZWMud2hhdHdnLm9yZ31cbiAqIEBzZWUgW01hcCBBcHByb2FjaCBGcm9tIFNjcmVlbmZ1bGwuanNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc31cbiAqL1xuY29uc3QgRnVsbHNjcmVlbkFwaSA9IHtcbiAgcHJlZml4ZWQ6IHRydWVcbn07XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbmNvbnN0IGFwaU1hcCA9IFtcbiAgW1xuICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICdmdWxsc2NyZWVuJ1xuICBdLFxuICAvLyBXZWJLaXRcbiAgW1xuICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxuICAgICctd2Via2l0LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNb3ppbGxhXG4gIFtcbiAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLFxuICAgICctbW96LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNaWNyb3NvZnRcbiAgW1xuICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAnTVNGdWxsc2NyZWVuRXJyb3InLFxuICAgICctbXMtZnVsbHNjcmVlbidcbiAgXVxuXTtcblxuY29uc3Qgc3BlY0FwaSA9IGFwaU1hcFswXTtcbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuICAvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cbiAgaWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuICAgIGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuICAgIEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuICB9XG5cbiAgRnVsbHNjcmVlbkFwaS5wcmVmaXhlZCA9IGJyb3dzZXJBcGlbMF0gIT09IHNwZWNBcGlbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG4iLCIvKipcbiAqIEBmaWxlIG9iai5qc1xuICogQG1vZHVsZSBvYmpcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6RWFjaENhbGxiYWNrXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXkgZm9yIHRoZSBvYmplY3QgdGhhdCBpcyBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXktdmFsdWUgZm9yIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXJcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6UmVkdWNlQ2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhY2N1bVxuICogICAgICAgIFRoZSB2YWx1ZSB0aGF0IGlzIGFjY3VtdWxhdGluZyBvdmVyIHRoZSByZWR1Y2UgbG9vcC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleSBmb3IgdGhlIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleS12YWx1ZSBmb3Igb2JqZWN0IHRoYXQgaXMgYmVpbmcgaXRlcmF0ZWQgb3ZlclxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogICAgICAgICBUaGUgbmV3IGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBrZXlzIG9mIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogICAgICAgIFRoZSBPYmplY3QgdG8gZ2V0IHRoZSBrZXlzIGZyb21cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqICAgICAgICAgQW4gYXJyYXkgb2YgdGhlIGtleXMgZnJvbSB0aGUgb2JqZWN0LiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoZVxuICogICAgICAgICBvYmplY3QgcGFzc2VkIGluIHdhcyBpbnZhbGlkIG9yIGhhZCBubyBrZXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG59O1xuXG4vKipcbiAqIEFycmF5LWxpa2UgaXRlcmF0aW9uIGZvciBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqICAgICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICpcbiAqIEBwYXJhbSB7b2JqOkVhY2hDYWxsYmFja30gZm5cbiAqICAgICAgICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGZvciBlYWNoIGtleSBpbiB0aGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaChvYmplY3QsIGZuKSB7XG4gIGtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiBmbihvYmplY3Rba2V5XSwga2V5KSk7XG59XG5cbi8qKlxuICogQXJyYXktbGlrZSByZWR1Y2UgZm9yIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogICAgICAgIFRoZSBPYmplY3QgdGhhdCB5b3Ugd2FudCB0byByZWR1Y2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqICAgICAgICAgQSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2gga2V5IGluIHRoZSBvYmplY3QuIEl0XG4gKiAgICAgICAgIHJlY2VpdmVzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBhbmQgdGhlIHBlci1pdGVyYXRpb24gdmFsdWUgYW5kIGtleVxuICogICAgICAgICBhcyBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gW2luaXRpYWwgPSAwXVxuICogICAgICAgIFN0YXJ0aW5nIHZhbHVlXG4gKlxuICogQHJldHVybiB7TWl4ZWR9XG4gKiAgICAgICAgIFRoZSBmaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGZuLCBpbml0aWFsID0gMCkge1xuICByZXR1cm4ga2V5cyhvYmplY3QpLnJlZHVjZSgoYWNjdW0sIGtleSkgPT4gZm4oYWNjdW0sIG9iamVjdFtrZXldLCBrZXkpLCBpbml0aWFsKTtcbn1cblxuLyoqXG4gKiBPYmplY3QuYXNzaWduLXN0eWxlIG9iamVjdCBzaGFsbG93IG1lcmdlL2V4dGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSAuLi5zb3VyY2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmIChPYmplY3QuYXNzaWduKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBhIHZhbHVlIGlzIGFuIG9iamVjdCBvZiBhbnkga2luZCAtIGluY2x1ZGluZyBET00gbm9kZXMsXG4gKiBhcnJheXMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGV0Yy4gTm90IGZ1bmN0aW9ucywgdGhvdWdoLlxuICpcbiAqIFRoaXMgYXZvaWRzIHRoZSBnb3RjaGEgd2hlcmUgdXNpbmcgYHR5cGVvZmAgb24gYSBgbnVsbGAgdmFsdWVcbiAqIHJlc3VsdHMgaW4gYCdvYmplY3QnYC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGFwcGVhcnMgdG8gYmUgYSBcInBsYWluXCIgb2JqZWN0IC0gdGhhdCBpcywgYVxuICogZGlyZWN0IGluc3RhbmNlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21wdXRlZC1zdHlsZS5qc1xuICogQG1vZHVsZSBjb21wdXRlZC1zdHlsZVxuICovXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEEgc2FmZSBnZXRDb21wdXRlZFN0eWxlLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gRmlyZWZveCwgaWYgdGhlIHBsYXllciBpcyBsb2FkZWQgaW4gYW4gaWZyYW1lIHdpdGhcbiAqIGBkaXNwbGF5Om5vbmVgLCB0aGVuIGBnZXRDb21wdXRlZFN0eWxlYCByZXR1cm5zIGBudWxsYCwgc28sIHdlIGRvIGFcbiAqIG51bGwtY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHBsYXllciBkb2Vzbid0IGJyZWFrIGluIHRoZXNlIGNhc2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtICAgIHtFbGVtZW50fSBlbFxuICogICAgICAgICAgIFRoZSBlbGVtZW50IHlvdSB3YW50IHRoZSBjb21wdXRlZCBzdHlsZSBvZlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBwcm9wXG4gKiAgICAgICAgICAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnRcbiAqXG4gKiBAc2VlICAgICAgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWwsIHByb3ApIHtcbiAgaWYgKCFlbCB8fCAhcHJvcCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZVZhbHVlID8gY29tcHV0ZWRTdHlsZVZhbHVlLmdldFByb3BlcnR5VmFsdWUocHJvcCkgfHwgY29tcHV0ZWRTdHlsZVZhbHVlW3Byb3BdIDogJyc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVkU3R5bGU7XG4iLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqIEBtb2R1bGUgYnJvd3NlclxuICovXG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5jb25zdCB3ZWJraXRWZXJzaW9uTWFwID0gKC9BcHBsZVdlYktpdFxcLyhbXFxkLl0rKS9pKS5leGVjKFVTRVJfQUdFTlQpO1xuY29uc3QgYXBwbGVXZWJraXRWZXJzaW9uID0gd2Via2l0VmVyc2lvbk1hcCA/IHBhcnNlRmxvYXQod2Via2l0VmVyc2lvbk1hcC5wb3AoKSkgOiBudWxsO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIGFuIGlQb2QuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgaU9TIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBJT1NfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbWF0Y2ggPSBVU0VSX0FHRU5ULm1hdGNoKC9PUyAoXFxkKylfL2kpO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn0oKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbiBBbmRyb2lkIGRldmljZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBBbmRyb2lkIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xudWxsfVxuICovXG5leHBvcnQgY29uc3QgQU5EUk9JRF9WRVJTSU9OID0gKGZ1bmN0aW9uKCkge1xuICAvLyBUaGlzIG1hdGNoZXMgQW5kcm9pZCBNYWpvci5NaW5vci5QYXRjaCB2ZXJzaW9uc1xuICAvLyBBTkRST0lEX1ZFUlNJT04gaXMgTWFqb3IuTWlub3IgYXMgYSBOdW1iZXIsIGlmIE1pbm9yIGlzbid0IGF2YWlsYWJsZSwgdGhlbiBvbmx5IE1ham9yIGlzIHJldHVybmVkXG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvQW5kcm9pZCAoXFxkKykoPzpcXC4oXFxkKykpPyg/OlxcLihcXGQrKSkqL2kpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMV0gJiYgcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIGNvbnN0IG1pbm9yID0gbWF0Y2hbMl0gJiYgcGFyc2VGbG9hdChtYXRjaFsyXSk7XG5cbiAgaWYgKG1ham9yICYmIG1pbm9yKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0gKyAnLicgKyBtYXRjaFsyXSk7XG4gIH0gZWxzZSBpZiAobWFqb3IpIHtcbiAgICByZXR1cm4gbWFqb3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBuYXRpdmUgQW5kcm9pZCBicm93c2VyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19OQVRJVkVfQU5EUk9JRCA9IElTX0FORFJPSUQgJiYgQU5EUk9JRF9WRVJTSU9OIDwgNSAmJiBhcHBsZVdlYmtpdFZlcnNpb24gPCA1Mzc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBNb3ppbGxhIEZpcmVmb3guXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0ZJUkVGT1ggPSAoL0ZpcmVmb3gvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIE1pY3Jvc29mdCBFZGdlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19FREdFID0gKC9FZGcvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIEdvb2dsZSBDaHJvbWUuXG4gKlxuICogVGhpcyB3aWxsIGFsc28gYmUgYHRydWVgIGZvciBDaHJvbWUgb24gaU9TLCB3aGljaCB3aWxsIGhhdmUgZGlmZmVyZW50IHN1cHBvcnRcbiAqIGFzIGl0IGlzIGFjdHVhbGx5IFNhZmFyaSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gIUlTX0VER0UgJiYgKCgvQ2hyb21lL2kpLnRlc3QoVVNFUl9BR0VOVCkgfHwgKC9DcmlPUy9pKS50ZXN0KFVTRVJfQUdFTlQpKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgR29vZ2xlIENocm9tZSB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgQ0hST01FX1ZFUlNJT04gPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvKENocm9tZXxDcmlPUylcXC8oXFxkKykvKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsyXSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBJbnRlcm5ldCBFeHBsb3JlciB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgSUVfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzdWx0ID0gKC9NU0lFXFxzKFxcZCspXFwuXFxkLykuZXhlYyhVU0VSX0FHRU5UKTtcbiAgbGV0IHZlcnNpb24gPSByZXN1bHQgJiYgcGFyc2VGbG9hdChyZXN1bHRbMV0pO1xuXG4gIGlmICghdmVyc2lvbiAmJiAoL1RyaWRlbnRcXC83LjAvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAoL3J2OjExLjAvKS50ZXN0KFVTRVJfQUdFTlQpKSB7XG4gICAgLy8gSUUgMTEgaGFzIGEgZGlmZmVyZW50IHVzZXIgYWdlbnQgc3RyaW5nIHRoYW4gb3RoZXIgSUUgdmVyc2lvbnNcbiAgICB2ZXJzaW9uID0gMTEuMDtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uO1xufSgpKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGRlc2t0b3AgU2FmYXJpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSAoL1NhZmFyaS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19DSFJPTUUgJiYgIUlTX0FORFJPSUQgJiYgIUlTX0VER0U7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhIFdpbmRvd3MgbWFjaGluZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfV0lORE9XUyA9ICgvV2luZG93cy9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIHRvdWNoLWVuYWJsZWQuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRPVUNIX0VOQUJMRUQgPSBCb29sZWFuKERvbS5pc1JlYWwoKSAmJiAoXG4gICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8XG4gIHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIHdpbmRvdy5kb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBhZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpIHx8XG4gIChJU19TQUZBUkkgJiYgVE9VQ0hfRU5BQkxFRCAmJiAhKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBob25lLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGlPUyBkZXZpY2UuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbnkgZmxhdm9yIG9mIFNhZmFyaSAtIGluY2x1ZGluZyBpT1MuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0FOWV9TQUZBUkkgPSAoSVNfU0FGQVJJIHx8IElTX0lPUykgJiYgIUlTX0NIUk9NRTtcbiIsIi8qKlxuICogQGZpbGUgZG9tLmpzXG4gKiBAbW9kdWxlIGRvbVxuICovXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgZnMgZnJvbSAnLi9mdWxsc2NyZWVuLWFwaSc7XG5cbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vb2JqJztcbmltcG9ydCBjb21wdXRlZFN0eWxlIGZyb20gJy4vY29tcHV0ZWQtc3R5bGUnO1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICcuL2Jyb3dzZXInO1xuXG4vKipcbiAqIERldGVjdCBpZiBhIHZhbHVlIGlzIGEgc3RyaW5nIHdpdGggYW55IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiAgICAgICAgIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIG5vbi1ibGFuaywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICovXG5mdW5jdGlvbiBpc05vbkJsYW5rU3RyaW5nKHN0cikge1xuICAgIC8vIHdlIHVzZSBzdHIudHJpbSBhcyBpdCB3aWxsIHRyaW0gYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGZyb20gdGhlIGZyb250IG9yIGJhY2sgb2Ygbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycy4gYWthXG4gICAgLy8gQW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIHN0aWxsIGNvbnRhaW4gdGhlbSBhZnRlciBgdHJpbWAgYnV0IHdoaXRlc3BhY2Ugb25seSBzdHJpbmdzXG4gICAgLy8gd2lsbCBoYXZlIGEgbGVuZ3RoIG9mIDAsIGZhaWxpbmcgdGhpcyBjaGVjay5cbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgQm9vbGVhbihzdHIudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaGFzIHdoaXRlc3BhY2UuIFRoaXMgaXMgdXNlZCBieVxuICogY2xhc3MgbWV0aG9kcyB0byBiZSByZWxhdGl2ZWx5IGNvbnNpc3RlbnQgd2l0aCB0aGUgY2xhc3NMaXN0IEFQSS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqICAgICAgICAgVGhlIHN0cmluZyB0byBjaGVjayBmb3Igd2hpdGVzcGFjZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIHRoZXJlIGlzIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgLy8gc3RyLmluZGV4T2YgaW5zdGVhZCBvZiByZWdleCBiZWNhdXNlIHN0ci5pbmRleE9mIGlzIGZhc3RlciBwZXJmb3JtYW5jZSB3aXNlLlxuICAgIGlmIChzdHIuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzcyBoYXMgaWxsZWdhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvZHVjZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgYSBjbGFzc05hbWUgd2l0aGluIGFuIGVsZW1lbnRzIGNsYXNzTmFtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVcbiAqICAgICAgICAgVGhlIGNsYXNzTmFtZSB0byBnZW5lcmF0ZSB0aGUgUmVnRXhwIGZvci5cbiAqXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiAgICAgICAgIFRoZSBSZWdFeHAgdGhhdCB3aWxsIGNoZWNrIGZvciBhIHNwZWNpZmljIGBjbGFzc05hbWVgIGluIGFuIGVsZW1lbnRzXG4gKiAgICAgICAgIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY2xhc3NSZWdFeHAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKCR8XFxcXHMpJyk7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBET00gaW50ZXJmYWNlIGFwcGVhcnMgdG8gYmUgcmVhbCAoaS5lLiBub3Qgc2ltdWxhdGVkKS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGFwcGVhcnMgdG8gYmUgcmVhbCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWwoKSB7XG4gICAgLy8gQm90aCBkb2N1bWVudCBhbmQgd2luZG93IHdpbGwgbmV2ZXIgYmUgdW5kZWZpbmVkIHRoYW5rcyB0byBgZ2xvYmFsYC5cbiAgICByZXR1cm4gZG9jdW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzLCB2aWEgZHVjayB0eXBpbmcsIHdoZXRoZXIgb3Igbm90IGEgdmFsdWUgaXMgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICAgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIERPTSBlbGVtZW50LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWwodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZSwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luRnJhbWUoKSB7XG5cbiAgICAvLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGhlcmUgYmVjYXVzZSBTYWZhcmkgd2lsbCB0aHJvdyBlcnJvcnMgd2hlbiBhdHRlbXB0aW5nXG4gICAgLy8gdG8gZ2V0IGVpdGhlciBgcGFyZW50YCBvciBgc2VsZmBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGY7XG4gICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBmdW5jdGlvbnMgdG8gcXVlcnkgdGhlIERPTSB1c2luZyBhIGdpdmVuIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge3N0cmluZ30gbWV0aG9kXG4gKiAgICAgICAgICBUaGUgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgcXVlcnkgd2l0aC5cbiAqXG4gKiBAcmV0dXJuICB7RnVuY3Rpb259XG4gKiAgICAgICAgICBUaGUgcXVlcnkgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJpZXIobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBpZiAoIWlzTm9uQmxhbmtTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbbWV0aG9kXShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25CbGFua1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSBpc0VsKGNvbnRleHQpID8gY29udGV4dCA6IGRvY3VtZW50O1xuXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXSAmJiBjdHhbbWV0aG9kXShzZWxlY3Rvcik7XG4gICAgfTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCBhbmQgYXBwbGllcyBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmQgaW5zZXJ0cyBjb250ZW50LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWU9J2RpdiddXG4gKiAgICAgICAgIE5hbWUgb2YgdGFnIHRvIGJlIGNyZWF0ZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbcHJvcGVydGllcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBwcm9wZXJ0aWVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbYXR0cmlidXRlcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yfSBjb250ZW50XG4gKiAgICAgICAgQSBjb250ZW50IGRlc2NyaXB0b3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcGVydGllc1twcm9wTmFtZV07XG5cbiAgICAgICAgLy8gU2VlICMyMTc2XG4gICAgICAgIC8vIFdlIG9yaWdpbmFsbHkgd2VyZSBhY2NlcHRpbmcgYm90aCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGluIHRoZVxuICAgICAgICAvLyBzYW1lIG9iamVjdCwgYnV0IHRoYXQgZG9lc24ndCB3b3JrIHNvIHdlbGwuXG4gICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKCdhcmlhLScpICE9PSAtMSB8fCBwcm9wTmFtZSA9PT0gJ3JvbGUnIHx8IHByb3BOYW1lID09PSAndHlwZScpIHtcblxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCB2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbFtzdHlsZU5hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0ZXh0Q29udGVudCBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgZXZlcnl3aGVyZSBhbmQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBtZXRob2QgZm9yIGl0LlxuICAgICAgICAgICAgdGV4dENvbnRlbnQoZWwsIHZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxbcHJvcE5hbWVdICE9PSB2YWwgfHwgcHJvcE5hbWUgPT09ICd0YWJJbmRleCcpIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5qZWN0cyB0ZXh0IGludG8gYW4gZWxlbWVudCwgcmVwbGFjaW5nIGFueSBleGlzdGluZyBjb250ZW50cyBlbnRpcmVseS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBhZGQgdGV4dCBjb250ZW50IGludG9cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcbiAqICAgICAgICAgVGhlIHRleHQgY29udGVudCB0byBhZGQuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBhZGRlZCB0ZXh0IGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29udGVudChlbCwgdGV4dCkge1xuICAgIGlmICh0eXBlb2YgZWwudGV4dENvbnRlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIG5vZGUgb2YgYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGRcbiAqICAgICAgICBFbGVtZW50IHRvIGluc2VydFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gKiAgICAgICAgRWxlbWVudCB0byBpbnNlcnQgY2hpbGQgaW50b1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRvKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIEVsZW1lbnQgdG8gY2hlY2tcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9DaGVja1xuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGNoZWNrIGZvclxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIGBjbGFzc1RvQ2hlY2tgIGhhcyB3aGl0ZSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzVG9DaGVjaykge1xuICAgIHRocm93SWZXaGl0ZXNwYWNlKGNsYXNzVG9DaGVjayk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NSZWdFeHAoY2xhc3NUb0NoZWNrKS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIGFkZCBjbGFzcyBuYW1lIHRvLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NUb0FkZFxuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGFkZC5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgYWRkZWQgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9BZGQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuXG4gICAgICAgIC8vIERvbid0IG5lZWQgdG8gYHRocm93SWZXaGl0ZXNwYWNlYCBoZXJlIGJlY2F1c2UgYGhhc0VsQ2xhc3NgIHdpbGwgZG8gaXRcbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgY2xhc3NMaXN0IG5vdCBiZWluZyBzdXBwb3J0ZWQuXG4gICAgfSBlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NUb0FkZCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc1RvQWRkKS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIHJlbW92ZSBhIGNsYXNzIG5hbWUgZnJvbS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9SZW1vdmVcbiAqICAgICAgICAgQ2xhc3MgbmFtZSB0byByZW1vdmVcbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCBjbGFzcyBuYW1lIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc1RvUmVtb3ZlKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0lmV2hpdGVzcGFjZShjbGFzc1RvUmVtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMgIT09IGNsYXNzVG9SZW1vdmU7XG4gICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBUaGUgY2FsbGJhY2sgZGVmaW5pdGlvbiBmb3IgdG9nZ2xlQ2xhc3MuXG4gKlxuICogQGNhbGxiYWNrIG1vZHVsZTpkb21+UHJlZGljYXRlQ2FsbGJhY2tcbiAqIEBwYXJhbSAgICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICAgIFRoZSBET00gZWxlbWVudCBvZiB0aGUgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgICAgVGhlIGBjbGFzc05hbWVgIHRoYXQgd2FudHMgdG8gYmUgdG9nZ2xlZFxuICpcbiAqIEByZXR1cm4gICB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKiAgICAgICAgICAgSWYgYHRydWVgIGlzIHJldHVybmVkLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gKiAgICAgICAgICAgYGVsZW1lbnRgLiBJZiBgZmFsc2VgLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgcmVtb3ZlZCBmcm9tXG4gKiAgICAgICAgICAgdGhlIGBlbGVtZW50YC4gSWYgYHVuZGVmaW5lZGAsIHRoZSBjYWxsYmFjayB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBuYW1lIHRvL2Zyb20gYW4gZWxlbWVudCBkZXBlbmRpbmcgb24gYW4gb3B0aW9uYWxcbiAqIGNvbmRpdGlvbiBvciB0aGUgcHJlc2VuY2UvYWJzZW5jZSBvZiB0aGUgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRvIHRvZ2dsZSBhIGNsYXNzIG5hbWUgb24uXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgIFRoZSBjbGFzcyB0aGF0IHNob3VsZCBiZSB0b2dnbGVkLlxuICpcbiAqIEBwYXJhbSAge2Jvb2xlYW58bW9kdWxlOmRvbX5QcmVkaWNhdGVDYWxsYmFja30gW3ByZWRpY2F0ZV1cbiAqICAgICAgICAgU2VlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHtAbGluayBtb2R1bGU6ZG9tflByZWRpY2F0ZUNhbGxiYWNrfVxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggYSBjbGFzcyB0aGF0IGhhcyBiZWVuIHRvZ2dsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlLCBwcmVkaWNhdGUpIHtcblxuICAgIC8vIFRoaXMgQ0FOTk9UIHVzZSBgY2xhc3NMaXN0YCBpbnRlcm5hbGx5IGJlY2F1c2UgSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgdG8gdGhlIGBjbGFzc0xpc3QudG9nZ2xlKClgIG1ldGhvZCEgV2hpY2ggaXMgZmluZSBiZWNhdXNlXG4gICAgLy8gYGNsYXNzTGlzdGAgd2lsbCBiZSB1c2VkIGJ5IHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBoYXMgPSBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcblxuICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZShlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9ICFoYXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5lY2Vzc2FyeSBjbGFzcyBvcGVyYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGVcbiAgICAvLyBlbGVtZW50LCBubyBhY3Rpb24gaXMgcmVxdWlyZWQuXG4gICAgaWYgKHByZWRpY2F0ZSA9PT0gaGFzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKipcbiAqIEFwcGx5IGF0dHJpYnV0ZXMgdG8gYW4gSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqICAgICAgICBFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGVzIHRvLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqICAgICAgICBBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYXR0clZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBhdHRyVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCAoYXR0clZhbHVlID09PSB0cnVlID8gJycgOiBhdHRyVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBhbiBlbGVtZW50J3MgYXR0cmlidXRlIHZhbHVlcywgYXMgZGVmaW5lZCBvbiB0aGUgSFRNTCB0YWcuXG4gKlxuICogQXR0cmlidXRlcyBhcmUgbm90IHRoZSBzYW1lIGFzIHByb3BlcnRpZXMuIFRoZXkncmUgZGVmaW5lZCBvbiB0aGUgdGFnXG4gKiBvciB3aXRoIHNldEF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSB0YWdcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCB0YWcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIEFsbCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50LiBCb29sZWFuIGF0dHJpYnV0ZXMgd2lsbCBiZSBgdHJ1ZWAgb3JcbiAqICAgICAgICAgYGZhbHNlYCwgb3RoZXJzIHdpbGwgYmUgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXModGFnKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICAvLyBrbm93biBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAvLyB3ZSBjYW4gY2hlY2sgZm9yIG1hdGNoaW5nIGJvb2xlYW4gcHJvcGVydGllcywgYnV0IG5vdCBhbGwgYnJvd3NlcnNcbiAgICAvLyBhbmQgbm90IGFsbCB0YWdzIGtub3cgYWJvdXQgdGhlc2UgYXR0cmlidXRlcywgc28sIHdlIHN0aWxsIHdhbnQgdG8gY2hlY2sgdGhlbSBtYW51YWxseVxuICAgIGNvbnN0IGtub3duQm9vbGVhbnMgPSAnLCcgKyAnYXV0b3BsYXksY29udHJvbHMscGxheXNpbmxpbmUsbG9vcCxtdXRlZCxkZWZhdWx0LGRlZmF1bHRNdXRlZCcgKyAnLCc7XG5cbiAgICBpZiAodGFnICYmIHRhZy5hdHRyaWJ1dGVzICYmIHRhZy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB0YWcuYXR0cmlidXRlcztcblxuICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBrbm93biBib29sZWFuc1xuICAgICAgICAgICAgLy8gdGhlIG1hdGNoaW5nIGVsZW1lbnQgcHJvcGVydHkgd2lsbCByZXR1cm4gYSB2YWx1ZSBmb3IgdHlwZW9mXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhZ1thdHRyTmFtZV0gPT09ICdib29sZWFuJyB8fCBrbm93bkJvb2xlYW5zLmluZGV4T2YoJywnICsgYXR0ck5hbWUgKyAnLCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSBvZiBhbiBpbmNsdWRlZCBib29sZWFuIGF0dHJpYnV0ZSBpcyB0eXBpY2FsbHkgYW4gZW1wdHlcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgKCcnKSB3aGljaCB3b3VsZCBlcXVhbCBmYWxzZSBpZiB3ZSBqdXN0IGNoZWNrIGZvciBhIGZhbHNlIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gZG9uJ3Qgd2FudCBzdXBwb3J0IGJhZCBjb2RlIGxpa2UgYXV0b3BsYXk9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ialthdHRyTmFtZV0gPSBhdHRyVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBnZXQgdGhlIHZhbHVlIG9mLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgVmFsdWUgdG8gc2V0IHRoZSBhdHRyaWJ1dGUgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYmxvY2sgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFR1cm4gb2ZmIHRleHQgc2VsZWN0aW9uIGJsb2NraW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5ibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBJZGVudGljYWwgdG8gdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBmdW5jdGlvbiwgYnV0IGVuc3VyZXMgdGhhdFxuICogdGhlIG1ldGhvZCBpcyBzdXBwb3J0ZWQgYXQgYWxsIChpdCBpcyBpbiBhbGwgYnJvd3NlcnMgd2UgY2xhaW0gdG8gc3VwcG9ydClcbiAqIGFuZCB0aGF0IHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYmVmb3JlIGNvbnRpbnVpbmcuXG4gKlxuICogVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGFsc28gc2hpbXMgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHByb3ZpZGVkIGJ5IHNvbWVcbiAqIG9sZGVyIGJyb3dzZXJzIChuYW1lbHksIElFOCkuXG4gKlxuICogQWRkaXRpb25hbGx5LCBzb21lIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGFkZGluZyBwcm9wZXJ0aWVzIHRvIGFcbiAqIGBDbGllbnRSZWN0YC9gRE9NUmVjdGAgb2JqZWN0OyBzbywgd2Ugc2hhbGxvdy1jb3B5IGl0IHdpdGggdGhlIHN0YW5kYXJkXG4gKiBwcm9wZXJ0aWVzIChleGNlcHQgYHhgIGFuZCBgeWAgd2hpY2ggYXJlIG5vdCB3aWRlbHkgc3VwcG9ydGVkKS4gVGhpcyBoZWxwc1xuICogYXZvaWQgaW1wbGVtZW50YXRpb25zIHdoZXJlIGtleXMgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgd2hvc2UgYENsaWVudFJlY3RgIHdlIHdhbnQgdG8gY2FsY3VsYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKiAgICAgICAgIEFsd2F5cyByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IC0gb3IgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgWydib3R0b20nLCAnaGVpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ3dpZHRoJ10uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGlmIChyZWN0W2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSByZWN0W2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUoZWwsICdoZWlnaHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC53aWR0aCkge1xuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlKGVsLCAnd2lkdGgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwb3NpdGlvbiBvZiBhIERPTSBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tflBvc2l0aW9uXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlZnRcbiAqICAgICAgICAgICBQaXhlbHMgdG8gdGhlIGxlZnQuXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogICAgICAgICAgIFBpeGVscyBmcm9tIHRoZSB0b3AuXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqXG4gKiBVc2VzIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIHRlY2huaXF1ZSBmcm9tIEpvaG4gUmVzaWcuXG4gKlxuICogQHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvZ2V0Ym91bmRpbmdjbGllbnRyZWN0LWlzLWF3ZXNvbWUvXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCBvZmZzZXQuXG4gKlxuICogQHJldHVybiB7bW9kdWxlOmRvbX5Qb3NpdGlvbn1cbiAqICAgICAgICAgVGhlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQb3NpdGlvbihlbCkge1xuICAgIGlmICghZWwgfHwgKGVsICYmICFlbC5vZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuXG4gICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCAmJiBlbCAhPT0gZG9jdW1lbnRbZnMuZnVsbHNjcmVlbkVsZW1lbnRdKSB7XG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcblxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0LFxuICAgICAgICB0b3AsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgYSBET00gZWxlbWVudCBvciBtb3VzZSBwb2ludGVyLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tfkNvb3JkaW5hdGVzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHhcbiAqICAgICAgICAgICB4IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlcbiAqICAgICAgICAgICB5IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gd2l0aGluIGFuIGVsZW1lbnQuXG4gKlxuICogVGhlIGJhc2Ugb24gdGhlIGNvb3JkaW5hdGVzIGFyZSB0aGUgYm90dG9tIGxlZnQgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBvbiB3aGljaCB0byBnZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gb24uXG4gKlxuICogQHBhcmFtICB7RXZlbnRUYXJnZXR+RXZlbnR9IGV2ZW50XG4gKiAgICAgICAgIEV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6ZG9tfkNvb3JkaW5hdGVzfVxuICogICAgICAgICBBIGNvb3JkaW5hdGVzIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBtb3VzZSBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZWwsIGV2ZW50KSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbDtcblxuICAgICAgICB3aGlsZSAoaXRlbSAmJiBpdGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdodG1sJykge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZShpdGVtLCAndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgICAgIGlmICgvXm1hdHJpeC8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdHJhbnNmb3JtLnNsaWNlKDcsIC0xKS5zcGxpdCgvLFxccy8pLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZC54ICs9IHZhbHVlc1s0XTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXm1hdHJpeDNkLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sXFxzLykubWFwKE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnggKz0gdmFsdWVzWzEyXTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzEzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0ge307XG4gICAgY29uc3QgYm94VGFyZ2V0ID0gZmluZFBvc2l0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYm94ID0gZmluZFBvc2l0aW9uKGVsKTtcbiAgICBjb25zdCBib3hXID0gYm94LndpZHRoO1xuICAgIGNvbnN0IGJveEggPSBib3guaGVpZ2h0O1xuICAgIGxldCBvZmZzZXRZID0gZXZlbnQub2Zmc2V0WSAtIChib3gudG9wIC0gYm94VGFyZ2V0LnRvcCk7XG4gICAgbGV0IG9mZnNldFggPSBldmVudC5vZmZzZXRYIC0gKGJveC5sZWZ0IC0gYm94VGFyZ2V0LmxlZnQpO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIG9mZnNldFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGJveC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyBib3gudG9wO1xuICAgICAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgICAgIG9mZnNldFggLT0gdHJhbnNsYXRlZC54O1xuICAgICAgICAgICAgb2Zmc2V0WSAtPSB0cmFuc2xhdGVkLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvbi55ID0gKDEgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvZmZzZXRZIC8gYm94SCkpKTtcbiAgICBwb3NpdGlvbi54ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb2Zmc2V0WCAvIGJveFcpKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcywgdmlhIGR1Y2sgdHlwaW5nLCB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSAge01peGVkfSB2YWx1ZVxuICogICAgICAgICBDaGVjayBpZiB0aGlzIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIHRleHQgbm9kZSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMztcbn1cblxuXG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCl7XG4gICAgaWYgKGlzRWwoZWwpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9wYWNpdHkgPSBlbC5zdHlsZT8ub3BhY2l0eSAhPT0gJycgPyBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpIDogMTtcblxuICAgIGlmIChvcGFjaXR5ID09PSAwIHx8IGNvbXB1dGVkU3R5bGUoZWwsICd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISEoIGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNzc0NsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoQ2xhc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcywgY29tcGFyZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMuc3RhcnRzV2l0aChzZWFyY2hDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn0pIHtcblxuICAgIGxldCBleGlzdCA9ICcnO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoZXhpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBleGlzdCA9IGNvbXBhcmUoYyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChleGlzdCAhPT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKGV4aXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGV4aXN0KTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcylcbiAgICB9XG59XG5cbi8qKlxuICogRW1wdGllcyB0aGUgY29udGVudHMgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBlbXB0eSBjaGlsZHJlbiBmcm9tXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBubyBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlFbChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIG1peGVkIHZhbHVlIHRoYXQgZGVzY3JpYmVzIGNvbnRlbnQgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NXG4gKiB2aWEgc29tZSBtZXRob2QuIEl0IGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICpcbiAqIFR5cGUgICAgICAgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLVxuICogYHN0cmluZ2AgICB8IFRoZSB2YWx1ZSB3aWxsIGJlIG5vcm1hbGl6ZWQgaW50byBhIHRleHQgbm9kZS5cbiAqIGBFbGVtZW50YCAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBUZXh0Tm9kZWAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBBcnJheWAgICAgfCBBIG9uZS1kaW1lbnNpb25hbCBhcnJheSBvZiBzdHJpbmdzLCBlbGVtZW50cywgdGV4dCBub2Rlcywgb3IgZnVuY3Rpb25zLiBUaGVzZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgb3IgdGV4dCBub2RlIChhbnkgb3RoZXIgcmV0dXJuIHZhbHVlLCBsaWtlIGFuIGFycmF5LCB3aWxsIGJlIGlnbm9yZWQpLlxuICogYEZ1bmN0aW9uYCB8IEEgZnVuY3Rpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgdGV4dCBub2RlLCBvciBhcnJheSAtIGFueSBvZiB0aGUgb3RoZXIgcG9zc2libGUgdmFsdWVzIGRlc2NyaWJlZCBhYm92ZS4gVGhpcyBtZWFucyB0aGF0IGEgY29udGVudCBkZXNjcmlwdG9yIGNvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZ1bmN0aW9ucywgYnV0IHRob3NlIHNlY29uZC1sZXZlbCBmdW5jdGlvbnMgbXVzdCByZXR1cm4gc3RyaW5ncywgZWxlbWVudHMsIG9yIHRleHQgbm9kZXMuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ3xFbGVtZW50fFRleHROb2RlfEFycmF5fEZ1bmN0aW9ufSBtb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yXG4gKi9cblxuLyoqXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgZm9yIGV2ZW50dWFsIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gKlxuICogVGhpcyBhbGxvd3MgYSB3aWRlIHJhbmdlIG9mIGNvbnRlbnQgZGVmaW5pdGlvbiBtZXRob2RzLCBidXQgaGVscHMgcHJvdGVjdFxuICogZnJvbSBmYWxsaW5nIGludG8gdGhlIHRyYXAgb2Ygc2ltcGx5IHdyaXRpbmcgdG8gYGlubmVySFRNTGAsIHdoaWNoIGNvdWxkXG4gKiBiZSBhbiBYU1MgY29uY2Vybi5cbiAqXG4gKiBUaGUgY29udGVudCBmb3IgYW4gZWxlbWVudCBjYW4gYmUgcGFzc2VkIGluIG11bHRpcGxlIHR5cGVzIGFuZFxuICogY29tYmluYXRpb25zLCB3aG9zZSBiZWhhdmlvciBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogICAgICAgICBBbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCB3YXMgcGFzc2VkIGluLCBub3JtYWxpemVkIHRvIGFuIGFycmF5IG9mXG4gKiAgICAgICAgIGVsZW1lbnRzIG9yIHRleHQgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpIHtcblxuICAgIC8vIEZpcnN0LCBpbnZva2UgY29udGVudCBpZiBpdCBpcyBhIGZ1bmN0aW9uLiBJZiBpdCBwcm9kdWNlcyBhbiBhcnJheSxcbiAgICAvLyB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgbm9ybWFsaXphdGlvbi5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IHVwLCBub3JtYWxpemUgdG8gYW4gYXJyYXksIHNvIG9uZSBvciBtYW55IGl0ZW1zIGNhbiBiZSBub3JtYWxpemVkLFxuICAgIC8vIGZpbHRlcmVkLCBhbmQgcmV0dXJuZWQuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGNvbnRlbnQpID8gY29udGVudCA6IFtjb250ZW50XSkubWFwKHZhbHVlID0+IHtcblxuICAgICAgICAvLyBGaXJzdCwgaW52b2tlIHZhbHVlIGlmIGl0IGlzIGEgZnVuY3Rpb24gdG8gcHJvZHVjZSBhIG5ldyB2YWx1ZSxcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBiZSBzdWJzZXF1ZW50bHkgbm9ybWFsaXplZCB0byBhIE5vZGUgb2Ygc29tZSBraW5kLlxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbCh2YWx1ZSkgfHwgaXNUZXh0Tm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICgvXFxTLykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIodmFsdWUgPT4gdmFsdWUpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGFwcGVuZHMgY29udGVudCB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgdG8gYXBwZW5kIG5vcm1hbGl6ZWQgY29udGVudCB0by5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpkb21+Q29udGVudERlc2NyaXB0b3J9IGNvbnRlbnRcbiAqICAgICAgICBBIGNvbnRlbnQgZGVzY3JpcHRvciB2YWx1ZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgZWxlbWVudCB3aXRoIGFwcGVuZGVkIG5vcm1hbGl6ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcbiAgICBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpLmZvckVhY2gobm9kZSA9PiBlbC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGluc2VydHMgY29udGVudCBpbnRvIGFuIGVsZW1lbnQ7IHRoaXMgaXMgaWRlbnRpY2FsIHRvXG4gKiBgYXBwZW5kQ29udGVudCgpYCwgZXhjZXB0IGl0IGVtcHRpZXMgdGhlIGVsZW1lbnQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEVsZW1lbnQgdG8gaW5zZXJ0IG5vcm1hbGl6ZWQgY29udGVudCBpbnRvLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggaW5zZXJ0ZWQgbm9ybWFsaXplZCBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChlbCwgY29udGVudCkge1xuICAgIHJldHVybiBhcHBlbmRDb250ZW50KGVtcHR5RWwoZWwpLCBjb250ZW50KTtcbn1cblxuXG4vKipcbiAqIGNsb3Nlc3QgZWxlbWVudCBwb2x5ZmlsbFxuICovXG4oZnVuY3Rpb24oRUxFTUVOVCkge1xuICAgIEVMRU1FTlQubWF0Y2hlcyA9IEVMRU1FTlQubWF0Y2hlcyB8fCBFTEVNRU5ULm1vek1hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVMRU1FTlQub01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICBFTEVNRU5ULmNsb3Nlc3QgPSBFTEVNRU5ULmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH07XG59KEVsZW1lbnQucHJvdG90eXBlKSk7XG5cbi8qKlxuICogRmluZHMgYSBzaW5nbGUgRE9NIGVsZW1lbnQgbWF0Y2hpbmcgYHNlbGVjdG9yYCB3aXRoaW4gdGhlIG9wdGlvbmFsXG4gKiBgY29udGV4dGAgb2YgYW5vdGhlciBET00gZWxlbWVudCAoZGVmYXVsdGluZyB0byBgZG9jdW1lbnRgKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiAgICAgICAgIEEgdmFsaWQgQ1NTIHNlbGVjdG9yLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBgcXVlcnlTZWxlY3RvcmAuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudHxTdHJpbmd9IFtjb250ZXh0PWRvY3VtZW50XVxuICogICAgICAgICBBIERPTSBlbGVtZW50IHdpdGhpbiB3aGljaCB0byBxdWVyeS4gQ2FuIGFsc28gYmUgYSBzZWxlY3RvclxuICogICAgICAgICBzdHJpbmcgaW4gd2hpY2ggY2FzZSB0aGUgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudCB3aWxsIGJlIHVzZWRcbiAqICAgICAgICAgYXMgY29udGV4dC4gSWYgbWlzc2luZyAob3Igbm8gZWxlbWVudCBtYXRjaGVzIHNlbGVjdG9yKSwgZmFsbHNcbiAqICAgICAgICAgYmFjayB0byBgZG9jdW1lbnRgLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgdGhhdCB3YXMgZm91bmQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVRdWVyaWVyKCdxdWVyeVNlbGVjdG9yJyk7XG5cbi8qKlxuICogRmluZHMgYSBhbGwgRE9NIGVsZW1lbnRzIG1hdGNoaW5nIGBzZWxlY3RvcmAgd2l0aGluIHRoZSBvcHRpb25hbFxuICogYGNvbnRleHRgIG9mIGFub3RoZXIgRE9NIGVsZW1lbnQgKGRlZmF1bHRpbmcgdG8gYGRvY3VtZW50YCkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvclxuICogICAgICAgICBBIHZhbGlkIENTUyBzZWxlY3Rvciwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gYHF1ZXJ5U2VsZWN0b3JBbGxgLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR8U3RyaW5nfSBbY29udGV4dD1kb2N1bWVudF1cbiAqICAgICAgICAgQSBET00gZWxlbWVudCB3aXRoaW4gd2hpY2ggdG8gcXVlcnkuIENhbiBhbHNvIGJlIGEgc2VsZWN0b3JcbiAqICAgICAgICAgc3RyaW5nIGluIHdoaWNoIGNhc2UgdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQgd2lsbCBiZSB1c2VkXG4gKiAgICAgICAgIGFzIGNvbnRleHQuIElmIG1pc3NpbmcgKG9yIG5vIGVsZW1lbnQgbWF0Y2hlcyBzZWxlY3RvciksIGZhbGxzXG4gKiAgICAgICAgIGJhY2sgdG8gYGRvY3VtZW50YC5cbiAqXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqICAgICAgICAgQSBlbGVtZW50IGxpc3Qgb2YgZWxlbWVudHMgdGhhdCB3ZXJlIGZvdW5kLiBXaWxsIGJlIGVtcHR5IGlmIG5vbmVcbiAqICAgICAgICAgd2VyZSBmb3VuZC5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCAkJCA9IGNyZWF0ZVF1ZXJpZXIoJ3F1ZXJ5U2VsZWN0b3JBbGwnKTtcbiIsImltcG9ydCB7Q1NTQ2xhc3NOYW1lTWl4aW59IGZyb20gJy4vbWl4aW5zL2Nzc0NsYXNzTmFtZSc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VPZlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZU9wdGlvbnNQdG9wZXJ0eShwcm9wZXJ0eSwgb3B0aW9ucywgaW5zdGFuY2VPZiA9IEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKChvcHRpb25zW3Byb3BlcnR5XSBpbnN0YW5jZW9mIGluc3RhbmNlT2YpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY2FsbC4gUHJvcGVydHkgJyArIHByb3BlcnR5ICsgJyBpcyBub3QgdmFsaWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxzdHJpbmd9ICBjb250ZW50XG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NTZXQgPSBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgYXJyYXkgPSAodHlwZW9mIHByb3BlcnRpZXMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogcHJvcGVydGllcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBjbGFzc1NldC5hZGQoaXRlbSkpO1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgY3NzQ2xhc3Mgb2YgY2xhc3NTZXQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKGNzc0NsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzZWxlY3Rvci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcLlwiLCAnZycpLCAnJCYnICsgVUlDb21wb25lbnQuY2xhc3NQcmVmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBVSUNvbXBvbmVudC5fbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIERvbS4kKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W118bnVsbH1cbiAgICAgKi9cbiAgICAkJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBzZWxlY3RvciA9IFVJQ29tcG9uZW50Ll9ub3JtYWxpemVQcmVmaXgoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gRG9tLiQkKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVUlDb21wb25lbnQsIENTU0NsYXNzTmFtZU1peGluKTtcbiIsIi8qIGNyYzMyLmpzIChDKSAyMDE0LXByZXNlbnQgU2hlZXRKUyAtLSBodHRwOi8vc2hlZXRqcy5jb20gKi9cbi8qIHZpbTogc2V0IHRzPTI6ICovXG4vKmV4cG9ydGVkIENSQzMyICovXG52YXIgQ1JDMzI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Lypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdC8qZXNsaW50LWRpc2FibGUgKi9cblx0aWYodHlwZW9mIERPX05PVF9FWFBPUlRfQ1JDID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmKCdvYmplY3QnID09PSB0eXBlb2YgZXhwb3J0cykge1xuXHRcdFx0ZmFjdG9yeShleHBvcnRzKTtcblx0XHR9IGVsc2UgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IHt9O1xuXHRcdFx0XHRmYWN0b3J5KG1vZHVsZSk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0fVxuXHQvKmVzbGludC1lbmFibGUgKi9cblx0Lypqc2hpbnQgaWdub3JlOmVuZCAqL1xufShmdW5jdGlvbihDUkMzMikge1xuQ1JDMzIudmVyc2lvbiA9ICcxLjIuMCc7XG4vKiBzZWUgcGVyZi9jcmMzMnRhYmxlLmpzICovXG4vKmdsb2JhbCBJbnQzMkFycmF5ICovXG5mdW5jdGlvbiBzaWduZWRfY3JjX3RhYmxlKCkge1xuXHR2YXIgYyA9IDAsIHRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5cblx0Zm9yKHZhciBuID0wOyBuICE9IDI1NjsgKytuKXtcblx0XHRjID0gbjtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHR0YWJsZVtuXSA9IGM7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkodGFibGUpIDogdGFibGU7XG59XG5cbnZhciBUID0gc2lnbmVkX2NyY190YWJsZSgpO1xuZnVuY3Rpb24gY3JjMzJfYnN0cihic3RyLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnN0ci5sZW5ndGggLSAxO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnN0ci5jaGFyQ29kZUF0KGkrKykpJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15ic3RyLmNoYXJDb2RlQXQoaSsrKSkmMHhGRl07XG5cdH1cblx0aWYoaSA9PT0gTCkgQyA9IChDPj4+OCkgXiBUWyhDIF4gYnN0ci5jaGFyQ29kZUF0KGkpKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfYnVmKGJ1Ziwgc2VlZCkge1xuXHRpZihidWYubGVuZ3RoID4gMTAwMDApIHJldHVybiBjcmMzMl9idWZfOChidWYsIHNlZWQpO1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSAzO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHR9XG5cdHdoaWxlKGkgPCBMKzMpIEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdHJldHVybiBDIF4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1Zl84KGJ1Ziwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSA3O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdH1cblx0d2hpbGUoaSA8IEwrNykgQyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfc3RyKHN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTD1zdHIubGVuZ3RoLCBjLCBkOyBpIDwgTDspIHtcblx0XHRjID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcblx0XHRpZihjIDwgMHg4MCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gYykmMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDE5MnwoKGM+PjYpJjMxKSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDEyOHwoYyY2MykpKSYweEZGXTtcblx0XHR9IGVsc2UgaWYoYyA+PSAweEQ4MDAgJiYgYyA8IDB4RTAwMCkge1xuXHRcdFx0YyA9IChjJjEwMjMpKzY0OyBkID0gc3RyLmNoYXJDb2RlQXQoaSsrKSYxMDIzO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDI0MHwoKGM+PjgpJjcpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+MikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoZD4+NikmMTUpfCgoYyYzKTw8NCkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KGQmNjMpKSkmMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgyMjR8KChjPj4xMikmMTUpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+NikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gQyBeIC0xO1xufVxuQ1JDMzIudGFibGUgPSBUO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJzdHIgPSBjcmMzMl9ic3RyO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJ1ZiA9IGNyYzMyX2J1Zjtcbi8vICRGbG93SWdub3JlXG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iLCJcbi8qKlxuKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuKiBAcGFyYW0gaXRlbVxuKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gc291cmNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcyk7XG59IiwiXG5jb25zdCBTdGF0dXNlc0xpc3QgPSB7XG4gICAgSU5JVDogLTEsXG4gICAgV0FJVDogMCxcbiAgICBFWEVDOiAxLFxuICAgIERPTkU6IDIsXG4gICAgRVJST1I6IDMsXG4gICAgREVMRVRFRDogOTksXG59O1xuXG5TdGF0dXNlc0xpc3QuU0VUX1ZJU0lCTEUgPSBbXG4gICAgU3RhdHVzZXNMaXN0LldBSVQsIFN0YXR1c2VzTGlzdC5FWEVDLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ET05FXG5dO1xuXG5TdGF0dXNlc0xpc3QuU0VUX0NPTVBMRVRFID0gW1xuICAgIFN0YXR1c2VzTGlzdC5ET05FLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ERUxFVEVEXG5dO1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TdGF0dXNlc0xpc3QuaXMgPSBmdW5jdGlvbiAoc2V0LCBzdGF0dXMpIHtcbiAgICByZXR1cm4gc2V0LmluZGV4T2Yoc3RhdHVzKSA+IC0xO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzZXNMaXN0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcblxuLyoqXG4gKkBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Fic3RyYWN0IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgI21hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBpZDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbW1vbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgaW5pdGlhdG9yTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJvZ3Jlc3MgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0ZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRpdGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXR1cyA9IFN0YXR1c2VzLklOSVQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IG51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgbWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gcGFyc2VJbnQoaWQpO1xuICAgICAgICB0aGlzLiNtYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgI3JlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuI2VsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuI2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnd3JhcHBlcicsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgJ2RhdGEtdGFzay1pZCc6IHRoaXMuaWRcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBlbFRhc2sgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiB0aGlzLl9idWlsZENzc0NsYXNzKCl9KTtcbiAgICAgICAgdGhpcy5fcmVuZGVyQ2hpbGQoZWxUYXNrKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZChlbFRhc2spO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGNoaWxkIGluc3RhbmNlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVuZGVyQ2hpbGQoZWxXcmFwcGVyKSB7XG5cbiAgICB9XG5cbiAgICAvLyBub2luc3BlY3Rpb24gSlNNZXRob2RDYW5CZVN0YXRpY1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfYnVpbGRDc3NDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIFsndGFzay1pdGVtJ11cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2Nzc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2Nzc0xpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jc3NMaXN0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nzc0xpc3QgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBzdGF0dXNlc0xpc3RLZXkgaW4gU3RhdHVzZXNMaXN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFN0YXR1c2VzTGlzdFtzdGF0dXNlc0xpc3RLZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nzc0xpc3RbU3RhdHVzZXNMaXN0W3N0YXR1c2VzTGlzdEtleV1dID0gVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKCdzdGF0dXMtJyArIHN0YXR1c2VzTGlzdEtleS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NMaXN0O1xuICAgIH07XG5cblxuICAgIGNzc0NsYXNzU3dpdGNoKCkge1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgbGV0IGNzc0NsYXNzLCBzZWFyY2hDbGFzcztcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWFuYWdlci5vcHRpb25zLnRoZW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgbGV0IHRoZW1lID0gdGhpcy5tYW5hZ2VyLm9wdGlvbnMudGhlbWVbdGhpcy5zdGF0dXNdIHx8IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCd0aGVtZS0nICsgdGhlbWUpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgndGhlbWUnKTtcbiAgICAgICAgICAgICAgICBEb20uc3dpdGNoQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MsIHNlYXJjaENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjc3NDbGFzcyA9IFRhc2tBYnN0cmFjdC4jY3NzTGlzdCgpW3RoaXMuc3RhdHVzXTtcbiAgICAgICAgc2VhcmNoQ2xhc3MgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCdzdGF0dXMnKTtcbiAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50c1xuICAgICAqL1xuICAgIHJlZnJlc2gocmVzcG9uc2UsIGVsZW1lbnRzID0gbnVsbCkge1xuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMoZWxlbWVudHMsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFByb2dyZXNzVG90YWwocHJvcGVydHkgPSAncHJvZ3Jlc3MnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlLnJlZHVjZSgoYSwgYykgPT4gYSArIGMpIC8gdmFsdWUubGVuZ3RoLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gb2xkVGFza1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVmcmVzaEVsZW1lbnRzKGVsZW1lbnRzLCBvbGRUYXNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNQYXJ0cyA9IHRoaXMub3B0aW9ucy5wYXJ0cztcblxuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50cykuZm9yRWFjaCgoZWxlbWVudE5hbWUpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9wdGlvbnNQYXJ0c1tlbGVtZW50TmFtZV0sXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlZnJlc2hCYXNpY1Byb3BlcnR5JztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgW20sIHBdID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gbSArIHBbMF0udG9VcHBlckNhc2UoKSArIHAuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT09IFwidW5kZWZpbmVkXCIpID8gdGhpc1twcm9wZXJ0eV0gOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9ICh0eXBlb2Ygb2xkVGFza1twcm9wZXJ0eV0gIT09IFwidW5kZWZpbmVkXCIpID8gb2xkVGFza1twcm9wZXJ0eV0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSAnXycgKyBtZXRob2Q7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW21ldGhvZF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdLmNhbGwodGhpcywgZWxlbWVudHNbZWxlbWVudE5hbWVdLCB2YWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIG5vaW5zcGVjdGlvbiBKU01ldGhvZENhbkJlU3RhdGljXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9yZWZyZXNoQmFzaWNQcm9wZXJ0eShlbGVtZW50LCB2YWx1ZSwgcHJvcGVydHkpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFRhc2tBYnN0cmFjdC5nZXRDbGFzc05hbWUoJ2xpc3QtJyArIHByb3BlcnR5KTtcbiAgICAgICAgICAgIGxldCBlbExpc3QgPSBEb20uJCgndWwuJyArIGNsYXNzTmFtZSwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmIChlbExpc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbExpc3QgPSB0aGlzLmNyZWF0ZUVsKCd1bCcsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGVsTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxMaSA9IERvbS4kKGBsaTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWAsIGVsTGlzdCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsTGkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxMaXN0LmFwcGVuZChEb20uY3JlYXRlRWwoJ2xpJywge30sIHt9LCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxMaS5pbm5lclRleHQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsTGkuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hbmFnZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0RlZmF1bHRzLnRhc2tPcHRpb25zfHt9fVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm9wdGlvbnMudGFza09wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBzdGF0dXNUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm9wdGlvbnMuc3RhdHVzVGV4dFt0aGlzLnN0YXR1c10gfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNUZXh0ICsgXCIgXCIgKyB0aGlzLmdldFRpdGxlKCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQge3N0ciBhcyBDUkMzMn0gZnJvbSAnY3JjLTMyJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCAqIGFzIE9iaiBmcm9tICcuL3V0aWxzL29iaic7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gXCIuL3N0YXR1c2VzTGlzdFwiO1xuaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcblxuY29uc3QgRU1QVFlfTUVTU0FHRSA9ICdfX0VNUFRZX18nO1xuXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBkZWxheVRpbWU6IDEwMDAsXG4gICAgcGFyYW1zOiB7fVxufTtcblxuLyoqXG4gKiBSZXNvbHZlIHRhc2sgaW5mb3JtYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb2x2ZXIge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Jlc29sdmVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgI2NhY2hlID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TWFuYWdlcltdfVxuICAgICAqL1xuICAgIHN0YXRpYyAjY29tbW9uTWFuYWdlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgI21hbmFnZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7e319XG4gICAgICovXG4gICAgI29wdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgI251bWJlclJlcXVlc3RzID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIERlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdC5wYXJhbXMgJiYgT2JqLmlzUGxhaW4ob3B0LnBhcmFtcykpIHtcbiAgICAgICAgICAgIG9wdC5wYXJhbXMgPSBPYmplY3QuZW50cmllcyhvcHQucGFyYW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN0YXJ0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25FbmRcbiAgICAgKi9cbiAgICByZXNvbHZlKG9uU3RhcnQsIG9uRW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZXJzID0gdGhpcy4jZ2V0TWFuYWdlcnMoKTtcblxuICAgICAgICAgICAgdGhpcy4jbnVtYmVyUmVxdWVzdHMgPSAwO1xuXG4gICAgICAgICAgICBtYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBvblN0YXJ0KG1hbmFnZXIpKTtcbiAgICAgICAgICAgIHRoaXMuI3JlcXVlc3QoMCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICE9PSBFTVBUWV9NRVNTQUdFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMuI251bWJlclJlcXVlc3RzO1xuICAgICAgICAgICAgICAgIG1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG9uRW5kKG1hbmFnZXIsIG51bWJlcikpO1xuICAgICAgICAgICAgICAgIHRoaXMuI251bWJlclJlcXVlc3RzID0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICNyZXF1ZXN0KHRpbWVPdXQgPSB0aGlzLm9wdGlvbnMuZGVsYXlUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVSZXF1ZXN0KHRpbWVPdXQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgIEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30gLSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9JyBgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChyYXcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmF3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZFRhc2tzKGl0ZW0uaWQpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5tYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVyLiN1cGRhdGVDb21tb25NYW5hZ2VycyhyYXcsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVxdWVzdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gcmVzb2x2ZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgI3VwZGF0ZUNvbW1vbk1hbmFnZXJzKHJlc3BvbnNlLCByZXNvbHZlcikge1xuICAgICAgICBSZXNvbHZlci4jY29tbW9uTWFuYWdlcnMuZm9yRWFjaChtYW5hZ2VyID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gbWFuYWdlci5maW5kVGFzayhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sgPT09IG51bGwgJiYgU3RhdHVzZXNMaXN0LmlzKFN0YXR1c2VzTGlzdC5TRVRfQ09NUExFVEUsIGl0ZW0uc3RhdHVzKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbW1vbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLmFkZFRhc2tzKFtpdGVtLmlkXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzayA9IG1hbmFnZXIuZmluZFRhc2soaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbml0aWF0b3JNYW5hZ2VyID0gcmVzb2x2ZXIudGFza3MuZmluZCh2YWx1ZSA9PiB2YWx1ZS5pZCA9PT0gaXRlbS5pZCk/Lm1hbmFnZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QgJiYgdGFzay5jb21tb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuX3VwZGF0ZVRhc2sodGFzaywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVPdXRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlIHwgbmV2ZXI+fVxuICAgICAqL1xuICAgICNjcmVhdGVSZXF1ZXN0KHRpbWVPdXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy50YXNrc0lkO1xuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChFTVBUWV9NRVNTQUdFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRhc2tzKSwgdGltZU91dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigodGFza3MpID0+IHtcbiAgICAgICAgICAgICsrdGhpcy4jbnVtYmVyUmVxdWVzdHM7XG5cbiAgICAgICAgICAgIGxldCBib2R5ID0gdGFza3MubWFwKChpdGVtKSA9PiBgdFtdPSR7aXRlbX1gKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB0aGlzLm9wdGlvbnMucGFyYW1zO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IGJvZHkuY29uY2F0KHBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh0aGlzLm9wdGlvbnMudXJsLCBleHRlbmQoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBlbmNvZGVVUkkoYm9keS5qb2luKCcmJykpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgIGdldCB0YXNrcygpIHtcbiAgICAgICAgbGV0IHRhc2tzID0gW107XG4gICAgICAgIHRoaXMuI21hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgIG1hbmFnZXIuZ2V0VGFza3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tbW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TnVtYmVyW119XG4gICAgICovXG4gICAgZ2V0IHRhc2tzSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLm1hcCgodGFzaykgPT4gdGFzay5pZCkuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSA9PT0gaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdHxib29sZWFufVxuICAgICAqL1xuICAgIGZpbmRUYXNrcyhpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbnVtYmVyUmVxdWVzdHMgPiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgI2dldE1hbmFnZXJzKGNvbW1vbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjb21tb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXJzLmZpbHRlcihmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIub3B0aW9ucy5jb21tb24gPT09IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKiBAcmV0dXJuIHtSZXNvbHZlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmFjdG9yeShtYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBvcHRpb25zID0gbWFuYWdlci5vcHRpb25zLnJlc29sdmVyLFxuICAgICAgICAgICAgaGFzaCA9IENSQzMyKG9wdGlvbnMudXJsKSxcbiAgICAgICAgICAgIGNhY2hlID0gUmVzb2x2ZXIuI2NhY2hlLFxuICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMgPSBSZXNvbHZlci4jY29tbW9uTWFuYWdlcnM7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSBjYWNoZVtoYXNoXSA9IChjYWNoZVtoYXNoXSBpbnN0YW5jZW9mIFJlc29sdmVyKSA/IGNhY2hlW2hhc2hdIDogbmV3IFJlc29sdmVyKG9wdGlvbnMpLFxuICAgICAgICAgICAgbWFuYWdlcnMgPSByZXNvbHZlci4jZ2V0TWFuYWdlcnMoKTtcblxuICAgICAgICBpZiAobWFuYWdlcnMuaW5kZXhPZihtYW5hZ2VyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIG1hbmFnZXJzLnB1c2gobWFuYWdlcik7XG5cbiAgICAgICAgICAgIGlmIChtYW5hZ2VyLm9wdGlvbnMuY29tbW9uKSB7XG4gICAgICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFuYWdlci5vd25lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNYW5hZ2VyLkV2ZW50cy5kZXN0cm95LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBtYW5hZ2Vycy5pbmRleE9mKGV2ZW50Lm1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbk1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuZ2V0VGFza3MoKS5maWx0ZXIodmFsdWUgPT4gdmFsdWUuaW5pdGlhdG9yTWFuYWdlciA9PT0gbWFuYWdlcnNbaW5kZXhdKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4ID0gY29tbW9uTWFuYWdlcnMuZmluZEluZGV4KHZhbHVlID0+IHZhbHVlID09PSBldmVudC5tYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb21tb25NYW5hZ2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmVyO1xuICAgIH1cblxufSIsImltcG9ydCB7ZWFjaH0gZnJvbSAnLi91dGlscy9vYmonO1xuLyoqXG4gKlxuICovXG4gY29uc3QgRXZlbnQgPSB7XG4gICAgcmVhZHk6ICdxbWM6bWFuYWdlcjpyZWFkeScsXG4gICAgZGVzdHJveTogJ3FtYzptYW5hZ2VyOmRlc3Ryb3knLFxuICAgIHN0YXR1c0NoYW5nZTogJ3FtYzptYW5hZ2VyOnN0YXR1c0NoYW5nZScsXG4gICAgdGFza1JlbW92ZWQ6ICdxbWM6bWFuYWdlcjp0YXNrUmVtb3ZlZCcsXG4gICAgdGFza0VsZW1lbnRSZW1vdmVkOiAncW1jOm1hbmFnZXI6dGFza0VsZW1lbnRSZW1vdmVkJyxcbiAgICBuZXdUYXNrOiAncW1jOm1hbmFnZXI6bmV3VGFzaycsXG4gICAgZmV0Y2hTdGFydDogJ3FtYzpyZXNvbHZlcjpzdGFydCcsXG4gICAgZmV0Y2hFbmQ6ICdxbWM6cmVzb2x2ZXI6ZW5kJyxcbn07XG5cbkV2ZW50LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBldmVudHMgPSBbXTtcbiAgZWFjaCh0aGlzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgfSk7XG4gICAgcmV0dXJuIGV2ZW50cy5qb2luKCcgJyk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IGdldFByb3RvdHlwZU9mIGZyb20gXCIuL2dldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBpc05hdGl2ZUZ1bmN0aW9uIGZyb20gXCIuL2lzTmF0aXZlRnVuY3Rpb24uanNcIjtcbmltcG9ydCBjb25zdHJ1Y3QgZnJvbSBcIi4vY29uc3RydWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIWlzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9O1xuXG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn0iLCIvKipcbiAqIE1hbmFnZXIgRXZlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlckV2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7TWFuYWdlcn1cbiAgICAgKi9cbiAgICAjbWFuYWdlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWFuYWdlciwgdHlwZSwgcHJvcHMpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgcHJvcHMpO1xuICAgICAgICB0aGlzLiNtYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgIGdldCBtYW5hZ2VyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VyO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEBmaWxlIGd1aWQuanNcbiAqIEBtb2R1bGUgZ3VpZFxuICovXG5cbi8vIERlZmF1bHQgdmFsdWUgZm9yIEdVSURzLiBUaGlzIGFsbG93cyB1cyB0byByZXNldCB0aGUgR1VJRCBjb3VudGVyIGluIHRlc3RzLlxuLy9cbi8vIFRoZSBpbml0aWFsIEdVSUQgaXMgMyBiZWNhdXNlIHNvbWUgdXNlcnMgaGF2ZSBjb21lIHRvIHJlbHkgb24gdGhlIGZpcnN0XG4vLyBkZWZhdWx0IHBsYXllciBJRCBlbmRpbmcgdXAgYXMgYHZqc192aWRlb18zYC5cbi8vXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlb2pzL3ZpZGVvLmpzL3B1bGwvNjIxNlxuY29uc3QgX2luaXRpYWxHdWlkID0gMztcblxuLyoqXG4gKiBVbmlxdWUgSUQgZm9yIGFuIGVsZW1lbnQgb3IgZnVuY3Rpb25cbiAqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5sZXQgX2d1aWQgPSBfaW5pdGlhbEd1aWQ7XG5cbi8qKlxuICogR2V0IGEgdW5pcXVlIGF1dG8taW5jcmVtZW50aW5nIElEIGJ5IG51bWJlciB0aGF0IGhhcyBub3QgYmVlbiByZXR1cm5lZCBiZWZvcmUuXG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICogICAgICAgICBBIG5ldyB1bmlxdWUgSUQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdHVUlEKCkge1xuICByZXR1cm4gX2d1aWQrKztcbn1cblxuLyoqXG4gKiBSZXNldCB0aGUgdW5pcXVlIGF1dG8taW5jcmVtZW50aW5nIElEIGZvciB0ZXN0aW5nIG9ubHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEd1aWRJblRlc3RzT25seSgpIHtcbiAgX2d1aWQgPSBfaW5pdGlhbEd1aWQ7XG59XG4iLCIvKipcbiAqIEBmaWxlIGRvbS1kYXRhLmpzXG4gKiBAbW9kdWxlIGRvbS1kYXRhXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBHdWlkIGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG5sZXQgRmFrZVdlYWtNYXA7XG5cbmlmICghd2luZG93LldlYWtNYXApIHtcbiAgRmFrZVdlYWtNYXAgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnZkYXRhID0gJ3ZkYXRhJyArIE1hdGguZmxvb3Iod2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSB8fCBEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICBjb25zdCBhY2Nlc3MgPSBrZXlbdGhpcy52ZGF0YV0gfHwgR3VpZC5uZXdHVUlEKCk7XG5cbiAgICAgIGlmICgha2V5W3RoaXMudmRhdGFdKSB7XG4gICAgICAgIGtleVt0aGlzLnZkYXRhXSA9IGFjY2VzcztcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhW2FjY2Vzc10gPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KGtleSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdO1xuXG4gICAgICAvLyB3ZSBoYXZlIGRhdGEsIHJldHVybiBpdFxuICAgICAgaWYgKGFjY2Vzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2FjY2Vzc107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaGFzKGtleSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdO1xuXG4gICAgICByZXR1cm4gYWNjZXNzIGluIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICBjb25zdCBhY2Nlc3MgPSBrZXlbdGhpcy52ZGF0YV07XG5cbiAgICAgIGlmIChhY2Nlc3MpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVthY2Nlc3NdO1xuICAgICAgICBkZWxldGUga2V5W3RoaXMudmRhdGFdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBFbGVtZW50IERhdGEgU3RvcmUuXG4gKlxuICogQWxsb3dzIGZvciBiaW5kaW5nIGRhdGEgdG8gYW4gZWxlbWVudCB3aXRob3V0IHB1dHRpbmcgaXQgZGlyZWN0bHkgb24gdGhlXG4gKiBlbGVtZW50LiBFeC4gRXZlbnQgbGlzdGVuZXJzIGFyZSBzdG9yZWQgaGVyZS5cbiAqIChhbHNvIGZyb20ganNuaW5qYS5jb20sIHNsaWdodGx5IG1vZGlmaWVkIGFuZCB1cGRhdGVkIGZvciBjbG9zdXJlIGNvbXBpbGVyKVxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuV2Vha01hcCA/IG5ldyBXZWFrTWFwKCkgOiBuZXcgRmFrZVdlYWtNYXAoKTtcbiIsImltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBsYWJlbCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuXG4gICAgICovXG4gICAgY2xhc3NOYW1lID0gUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc2l6ZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtQcm9ncmVzc0JhcltdfVxuICAgICAqL1xuICAgICNiYXJzID0gW107XG5cbiAgICBiYXJPcHRpb25zID0ge307XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fEhUTUxFbGVtZW50fVxuICAgICAqL1xuICAgICNsYWJlbEVsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fEhUTUxFbGVtZW50fVxuICAgICAqL1xuICAgICNlbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1Nob3dHcmFkaWVudCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc3RhdGljICRjbGFzc1ByZWZpeCA9IG51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4ub3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBleHRlbmQodGhpcywgLi4ub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWw7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIFByb2dyZXNzLmdldENsYXNzTmFtZSgnc2l6ZS0nICsgdGhpcy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd0dyYWRpZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIFByb2dyZXNzLmdldENsYXNzTmFtZSgnbm8tZ3JhZGllbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCB7fSxcbiAgICAgICAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1pdGVtcycpfSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jZWwgPSBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fEVsZW1lbnR9XG4gICAgICovXG4gICAgI2dldExhYmVsRWwoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2xhYmVsRWw7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNsYWJlbEVsID0gZWwgPSBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzLWxhYmVsJyl9LCB7fSlcbiAgICAgICAgdGhpcy4jZWwuYXBwZW5kKGVsKTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IHZhbHVlXG4gICAgICovXG4gICAgc2V0UHJvZ3Jlc3ModmFsdWUpIHtcblxuICAgICAgICBjb25zdCBiYXJzID0gdGhpcy4jYmFycyxcbiAgICAgICAgICAgIGVsID0gdGhpcy4jZWwsXG4gICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgPyBbdmFsdWVdIDogdmFsdWU7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoYmFyc1tpbmRleF0gaW5zdGFuY2VvZiBQcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgICAgIGJhcnNbaW5kZXhdLnByb2dyZXNzID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhcnNbaW5kZXhdID0gbmV3IFByb2dyZXNzQmFyKHRoaXMuYmFyT3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbXMnKSkuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1pdGVtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICgxMDAgLyBsZW5ndGgpLnRvRml4ZWQoMykgKyAnJSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICB9LCB7fSwgYmFyc1tpbmRleF0ucmVuZGVyKCkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xhc3NUaG9DaGVjayA9IFByb2dyZXNzLmdldENsYXNzTmFtZSgnbW9yZS10aGFuLXRocmVlJyk7XG4gICAgICAgIGlmIChEb20uaGFzQ2xhc3MoZWwsIGNsYXNzVGhvQ2hlY2spID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIGNsYXNzVGhvQ2hlY2spO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGFiZWxcbiAgICAgKi9cbiAgICBzZXRMYWJlbChsYWJlbCkge1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuI2dldExhYmVsRWwoKS5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufEhUTUxFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50ID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgY2xhc3NOYW1lID0gJ3Byb2dyZXNzLWJhcic7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgI3Byb2dyZXNzID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd8Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBsYWJlbFRleHQgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluID0gMDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtYXggPSAxMDA7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4ub3B0aW9ucykge1xuICAgICAgICBleHRlbmQodGhpcywgLi4ub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheXxTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsVGV4dCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChEb20uY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnc3Itb25seScsIGNzczoge3dpZHRoOiAwfX0sIHt9LCB0aGlzLmxhYmVsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5sYWJlbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudCA9IGVsID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSh0aGlzLmNsYXNzTmFtZSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB0aGlzLnByb2dyZXNzLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiB0aGlzLm1pbixcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbWF4JzogdGhpcy5tYXhcbiAgICAgICAgfSwgY29udGVudCk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gKHRoaXMubGFiZWxUZXh0KSA/IHRoaXMubGFiZWxUZXh0IDogJyc7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb2dyZXNzfSUgJHtsYWJlbH1gXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBwcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2dyZXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBwcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiNwcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHZhbHVlKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0aGlzLmxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlfSVgXG5cbiAgICB9XG59IiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25UIGV4dGVuZHMgVUlDb21wb25lbnR7XG5cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICovXG4gICAgI2ljb24gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgKi9cbiAgICAjc2l6ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufHN0cmluZ30gaWNvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd9IHNpemVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpY29uID0gZmFsc2UsIHNpemUgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNpY29uID0gaWNvbjtcbiAgICAgICAgdGhpcy4jc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50ID0gdGhpcy5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6IHRoaXMuI2J1aWxkQ2xhc3NOYW1lKCl9LCB7fSxcbiAgICAgICAgICAgIERvbS5jcmVhdGVFbCgnc3BhbicsIHt9LCB7fSwgWydzMScsICdzMicsICdzMyddLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgICNidWlsZENsYXNzTmFtZSgpIHtcblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gJ2ljb24tdCcsXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy4jaWNvbikge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuI2ljb247XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmICh0aGlzLiNzaXplKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnc2l6ZS0nK3RoaXMuI3NpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBpY29uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IGljb24gPSB0aGlzLiNpY29uO1xuICAgICAgICAgICAgaWYgKGljb24gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChpY29uKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgaWNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2ljb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBzaXplKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgID0gSWNvblQuZ2V0Q2xhc3NOYW1lKCdzaXplLScrdmFsdWUpO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuI3NpemU7XG4gICAgICAgICAgICBpZiAoc2l6ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCBzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2l6ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgY29sb3IodmFsdWUpIHtcbiAgICAgICAgRG9tLiQkKCdzcGFuW2NsYXNzXj1zXScsIHRoaXMuI2VsZW1lbnQpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuXG4iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgSWNvblQgZnJvbSAnLi9pY29udCc7XG5cbi8qKlxuICpcbiAqIEB0eXBlIHt7aWNvbkhvdmVyTmFtZTogbnVsbCwgaGFuZGxlcjogbnVsbCwgc2l6ZTogbnVsbCwgZGF0YToge30sIGhpZGRlbkxhYmVsOiBzdHJpbmcsIGljb25OYW1lOiBudWxsLCBhbmltYXRlZENsaWNrOiBib29sZWFuLCBoYW5kbGVyVGltb3V0RGVsYXk6IG51bWJlciwgaWNvblNpemU6IG51bGwsIGRpc2FibGVkOiBib29sZWFuLCBsYWJlbDogYm9vbGVhbiwgdGFnTmFtZTogc3RyaW5nfX1cbiAqL1xuY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB0YWdOYW1lOiAnYnV0dG9uJyxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBoYW5kbGVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBoYW5kbGVyVGltb3V0RGVsYXk6IDUwMCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgbGFiZWw6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICBoaWRkZW5MYWJlbDogJycsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogZmFsc2UsXG5cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzaXplOiBudWxsLFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBpY29uTmFtZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBpY29uSG92ZXJOYW1lOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIGljb25TaXplOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgYW5pbWF0ZWRDbGljazogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgZGF0YToge31cblxufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0RlZmF1bHRzfVxuICAgICAqL1xuICAgICNvcHRpb25zID0gRGVmYXVsdHM7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SWNvblR9XG4gICAgICovXG4gICAgI2ljb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLiNvcHRpb25zID0gZXh0ZW5kKHt9LCBEZWZhdWx0cywgb3B0aW9ucylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgY29udGVudCA9IFtdO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmljb25OYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpcy5pY29uO1xuICAgICAgICAgICAgY29udGVudC5wdXNoKGkucmVuZGVyKCkpO1xuICAgICAgICAgICAgaS5pY29uID0gb3B0aW9ucy5pY29uTmFtZTtcbiAgICAgICAgICAgIGkuc2l6ZSA9IG9wdGlvbnMuaWNvblNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5sYWJlbCkge1xuICAgICAgICAgICAgY29udGVudC5wdXNoKERvbS5jcmVhdGVFbCgncCcsIHt9LCB7fSwgb3B0aW9ucy5sYWJlbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGlkZGVuTGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaCh0aGlzLmNyZWF0ZUVsKCdwJywge2NsYXNzTmFtZTogJ2J1dHRvbi1oaWRkZW4nfSwge30sIG9wdGlvbnMuaGlkZGVuTGFiZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGVkQ2xpY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRyb3AgPSBEb20uY3JlYXRlRWwoJ3AnLCB7Y2xhc3NOYW1lOiAnZHJvcCd9KTtcbiAgICAgICAgICAgIGRyb3AuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyh0aGlzLCAnYW5pbWF0ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250ZW50LnB1c2goZHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbCA9IHRoaXMuI2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsKG9wdGlvbnMudGFnTmFtZSwge2NsYXNzTmFtZTogQnV0dG9uLiNidWlsZENsYXNzTmFtZShvcHRpb25zKX0sIHt9LCBjb250ZW50KTtcblxuICAgICAgICB0aGlzLmRpc2FibGVkID0gb3B0aW9ucy5kaXNhYmxlZDtcbiAgICAgICAgdGhpcy4jYWRkSGFuZGxlcnMoZWwsIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiBlbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyAjYnVpbGRDbGFzc05hbWUob3B0aW9ucykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWydidXR0b24nXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaXplKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnc2l6ZS0nICsgb3B0aW9ucy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhpZGRlbkxhYmVsKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnaGFzLWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICovXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKHZhbHVlICE9PSBvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jZWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBEb20udG9nZ2xlQ2xhc3ModGhpcy4jZWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zLmRpc2FibGVkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtJY29uVH1cbiAgICAgKi9cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLiNpY29uO1xuICAgICAgICBpZiAoaWNvbiBpbnN0YW5jZW9mIEljb25UKSB7XG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4jaWNvbiA9IG5ldyBJY29uVCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICAjYWRkSGFuZGxlcnMoZWxlbWVudCwgb3B0aW9ucykge1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlZENsaWNrKSB7XG4gICAgICAgICAgICAgICAgQnV0dG9uLiNhbmltYXRlZENsaWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlclRpbW91dERlbGF5ID4gMCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcHRpb25zLmhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCksIG9wdGlvbnMuaGFuZGxlclRpbW91dERlbGF5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wdGlvbnMuaGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmljb25Ib3Zlck5hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kaXNhYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uLmljb24gPSBvcHRpb25zLmljb25Ib3Zlck5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLmljb24gPSBvcHRpb25zLmljb25OYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHN0YXRpYyAjYW5pbWF0ZWRDbGljayhlbGVtZW50KSB7XG5cbiAgICAgICAgY29uc3QgZHJvcCA9IERvbS4kKCcuZHJvcCcsIGVsZW1lbnQpO1xuICAgICAgICBpZiAoZHJvcCkge1xuXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gRG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICB4ID0gZXZlbnQucGFnZVggLSByZWN0LndpZHRoIC8gMiAtIHJlY3QubGVmdCAtIHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgIHkgPSBldmVudC5wYWdlWSAtIHJlY3QuaGVpZ2h0IC8gMiAtIHJlY3QudG9wIC0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgICAgICAgIGRyb3Auc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgICAgICBkcm9wLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcblxuICAgICAgICAgICAgRG9tLmFkZENsYXNzKGRyb3AsICdhbmltYXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5CdXR0b24uRGVmYXVsdHMgPSBEZWZhdWx0cztcblxuXG4iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgZXh0ZW5kIGZyb20gXCIuL3V0aWxzL2V4dGVuZFwiO1xuXG5cbi8qKlxuICpcbiAqIEB0eXBlIHt7c2VsZWN0SWNvbjogbnVsbCwgc2NhbGVkOiBib29sZWFuLCBhcnJhbmdlOiBib29sZWFuLCBzZWxlY3RhYmxlOiBib29sZWFufX1cbiAqL1xuY29uc3QgRGVmYXVsdHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9uLkRlZmF1bHRzW119XG4gICAgICovXG4gICAgYnV0dG9uczogW10sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhcnJhbmdlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHNjYWxlZDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc2VsZWN0SWNvbjogbnVsbFxuXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbnNHcm91cCBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCdXR0b25bXX1cbiAgICAgKi9cbiAgICBidXR0b25zID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICAjb3B0aW9ucyA9IERlZmF1bHRzO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBidXR0b25zID0gVUlDb21wb25lbnQucmVtb3ZlT3B0aW9uc1B0b3BlcnR5KCdidXR0b25zJywgb3B0aW9ucywgQXJyYXkpO1xuICAgICAgICB0aGlzLiNvcHRpb25zID0gZXh0ZW5kKHt9LCBEZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnMubWFwKChjb25maWcpID0+IG5ldyBCdXR0b24oY29uZmlnKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudCA9IGVsID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogQnV0dG9uc0dyb3VwLiNidWlsZENsYXNzTmFtZSh0aGlzLm9wdGlvbnMpfSwge30sXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMubWFwKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuLnJlbmRlcigpXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLiNiaW5kU2VsZWN0RXZlbnRzKGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2J1aWxkQ2xhc3NOYW1lKG9wdGlvbnMpIHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gWydidXR0b24tZ3JvdXAnXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5hcnJhbmdlKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnYXJyYW5nZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGVkKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnc2NhbGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0RlZmF1bHRzfVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgYXJyYW5nZSh2YWx1ZSkge1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ2FycmFuZ2UnKTtcblxuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMuI29wdGlvbnM7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoRG9tLmhhc0NsYXNzKGVsLCBjbGFzc05hbWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5hcnJhbmdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICAjYmluZFNlbGVjdEV2ZW50cyhlbGVtZW50KSB7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCAnLicgKyBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdidXR0b24nKSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5idXR0b25zLmZpbmQoZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgICAgIHJldHVybiBidG4uZWxlbWVudCA9PT0gZWxlbWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCQoJy5idXR0b24uc2VsZWN0ZWQnLCBldmVudC50YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgRG9tLnNldEF0dHJpYnV0ZShlbCwgJ2RhdGEtZ3JvdXAtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsICBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kJCgnLmJ1dHRvbltkYXRhLWdyb3VwLXNlbGVjdGVkXScsIGV2ZW50LnRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQXR0cmlidXRlKGVsLCAnZGF0YS1ncm91cC1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCdXR0b258bnVtYmVyfSBidXR0b25cbiAgICAgKi9cbiAgICBzZXQgc2VsZWN0ZWQoYnV0dG9uKSB7XG5cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnc2VsZWN0ZWQnKSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBidXR0b24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tidXR0b25dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ1dHRvbiBpbnN0YW5jZW9mIEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVBdHRyaWJ1dGUoYnRuLmVsZW1lbnQsICdkYXRhLWdyb3VwLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGJ0bi5lbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBEb20uYWRkQ2xhc3MoYnV0dG9uLmVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNlbGVjdEljb24pIHtcbiAgICAgICAgICAgICAgICBidXR0b24uaWNvbi5pY29uID0gb3B0aW9ucy5zZWxlY3RJY29uO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5vcHRpb25zLmljb25OYW1lID0gb3B0aW9ucy5zZWxlY3RJY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG5cblxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBJY29uVCBmcm9tICcuL2ljb250JztcbmltcG9ydCBCdXR0b25zR3JvdXAgZnJvbSAnLi9idXR0b25zR3JvdXAnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCdcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrU3RhdHVzIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnRbXX1cbiAgICAgKi9cbiAgICAjZWxlbWVudHMgPSBbXTtcblxuICAgIG1hcCA9IHtcbiAgICAgICAgaWNvbnM6IFtdLFxuICAgICAgICBhY3Rpb25zOiBbXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7VGFza0Fic3RyYWN0fVxuICAgICAqL1xuICAgICN0YXNrO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SWNvblR9XG4gICAgICovXG4gICAgI2ljb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjdGV4dCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9uc0dyb3VwfVxuICAgICAqL1xuICAgICNiR3JvdXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUYXNrQWJzdHJhY3R9IHRhc2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFwSWNvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIG1hcEljb25zLCBhY3Rpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI3Rhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLm1hcC5pY29ucyA9IG1hcEljb25zO1xuICAgICAgICB0aGlzLm1hcC5hY3Rpb25zID0gYWN0aW9ucztcblxuICAgICAgICB0aGlzLiNpY29uID0gbmV3IEljb25UKCdub25lJywgJ2JpZycpO1xuICAgICAgICB0aGlzLiN0ZXh0ID0gdGhpcy5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6ICdzdGF0dXMtdGV4dCd9KTtcblxuICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgZXh0ZW5kKGl0ZW0sIHtkYXRhOiB7dGFzazogdGFza319KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgZWxzID0gdGhpcy4jZWxlbWVudHM7XG5cbiAgICAgICAgaWYgKGVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxzO1xuICAgICAgICB9XG4gICAgICAgIGVscy5wdXNoKHRoaXMuI2ljb24ucmVuZGVyKCkpO1xuICAgICAgICBlbHMucHVzaCh0aGlzLiN0ZXh0KTtcblxuICAgICAgICBpZiAodGhpcy5tYXAuYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLiNiR3JvdXAgPSBuZXcgQnV0dG9uc0dyb3VwKHtidXR0b25zOiB0aGlzLm1hcC5hY3Rpb25zLCBhcnJhbmdlOiBmYWxzZSwgc2NhbGVkOiB0cnVlfSk7XG4gICAgICAgICAgICBlbHMucHVzaCh0aGlzLiNiR3JvdXAucmVuZGVyKCkpO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gZWxzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gICAgICovXG4gICAgcmVmcmVzaChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy4jdGV4dC5pbm5lckhUTUwgPSB0aGlzLiN0YXNrLnN0YXR1c1RleHQ7XG5cbiAgICAgICAgdGhpcy4jaWNvbi5pY29uID0gdGhpcy5tYXAuaWNvbnNbc3RhdHVzXTtcblxuICAgICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuI2JHcm91cDtcblxuICAgICAgICBpZiAoYnV0dG9uR3JvdXApIHtcbiAgICAgICAgICAgIGJ1dHRvbkdyb3VwLmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVuYWJsZWRXaXRoID0gYnV0dG9uLm9wdGlvbnM/LmVuYWJsZWRXaXRoU3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW5hYmxlZFdpdGggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkV2l0aCA9IGVuYWJsZWRXaXRoLmNhbGwoYnV0dG9uLCBzdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbmFibGVkV2l0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5vcHRpb25zLmVuYWJsZWRXaXRoU3RhdHVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGJ1dHRvbi5vcHRpb25zLmVuYWJsZWRXaXRoU3RhdHVzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZW5hYmxlZFdpdGggPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGVuYWJsZWRXaXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBUYXNrQWJzdHJhY3QgZnJvbSBcIi4vdGFza0Fic3RyYWN0XCI7XG5pbXBvcnQgRG9tRGF0YSBmcm9tICcuL3V0aWxzL2RvbS1kYXRhJztcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL3Byb2dyZXNzJztcbmltcG9ydCBTdGF0dXNlc0xpc3QgZnJvbSAnLi9zdGF0dXNlc0xpc3QnO1xuaW1wb3J0IFRhc2tTdGF0dXMgZnJvbSAnLi90YXNrU3RhdHVzJztcblxuY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgaWNvblBsYWNlbWVudDogJ2RlZmF1bHQnLFxuICAgIHBhcnRzOiB7XG4gICAgICAgIHN0YXR1czogJ3JlZnJlc2guc3RhdHVzJyxcbiAgICAgICAgdGl0bGU6ICd0aXRsZScsXG4gICAgICAgIHRleHQ6ICd0ZXh0JyxcbiAgICAgICAgZXJyb3I6ICdlcnJvcnMnLFxuICAgICAgICAncHJvZ3Jlc3Mtd3JhcHBlcic6ICdyZWZyZXNoLnByb2dyZXNzJyxcbiAgICB9LFxuICAgIHByb2dyZXNzOiB7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgc2l6ZTogJycsXG4gICAgICAgIGJhck9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxhYmVsVGV4dDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uczogW11cbn07XG5cbmNvbnN0IGljb25NYXAgPSB7fTtcbmljb25NYXBbU3RhdHVzZXNMaXN0LldBSVRdID0gJ2Nsb2NrJztcbmljb25NYXBbU3RhdHVzZXNMaXN0LkVYRUNdID0gJ3BsYXknO1xuaWNvbk1hcFtTdGF0dXNlc0xpc3QuRVJST1JdID0gJ3dhcm5pbmcnO1xuaWNvbk1hcFtTdGF0dXNlc0xpc3QuRE9ORV0gPSAnY2hlY2tlZCc7XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIGV4dGVuZHMgVGFza0Fic3RyYWN0IHtcblxuXG4gICAgI2VsZW1lbnRzID0ge307XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIF9yZW5kZXJDaGlsZChlbFdyYXBwZXIpIHtcblxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLiNlbGVtZW50cyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBlbERldGFpbCA9IGVsV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAnZGV0YWlsJ30pKSxcbiAgICAgICAgICAgIGVsU3RhdHVzV3JhcHBlciA9IGVsV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAnc3RhdHVzLXdyYXBwZXInfSkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMucGFydHMpLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgICAgIGxldCBvd25lciA9IGVsRGV0YWlsLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0ID09PSAncHJvZ3Jlc3Mtd3JhcHBlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgUHJvZ3Jlc3Mob3B0aW9ucy5wcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnNbJ3Byb2dyZXNzLXdyYXBwZXInXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICdzdGF0dXMnKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBlbFN0YXR1c1dyYXBwZXI7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IFRhc2tTdGF0dXModGhpcywgaWNvbk1hcCwgb3B0aW9ucy5hY3Rpb25zKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50c1twYXJ0XSA9IG93bmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IHBhcnR9LCB7fSkpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIHR5cGVvZiBjb21wb25lbnQ/LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBjb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbY29udGVudF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGVudC5mb3JFYWNoKChjb250ZW50KSA9PiBlbGVtZW50c1twYXJ0XS5hcHBlbmQoY29udGVudCkpO1xuICAgICAgICAgICAgICAgIFRhc2suI3NldENvbXBvbmVudChlbGVtZW50c1twYXJ0XSwgY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlZnJlc2gocmVzcG9uc2UpIHtcbiAgICAgICAgc3VwZXIucmVmcmVzaChyZXNwb25zZSwgdGhpcy4jZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfYnVpbGRDc3NDbGFzcygpIHtcblxuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBzdXBlci5fYnVpbGRDc3NDbGFzcygpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWNvblBsYWNlbWVudCAhPT0gRGVmYXVsdHMuaWNvblBsYWNlbWVudCkge1xuICAgICAgICAgICAgY2xhc3NMaXN0LnB1c2goJ3Rhc2staXRlbS0nICsgdGhpcy5vcHRpb25zLmljb25QbGFjZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH1jb21wb25lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgI3NldENvbXBvbmVudChlbCwgY29tcG9uZW50KSB7XG4gICAgICAgIGlmICghRG9tRGF0YS5oYXMoZWwpKSB7XG4gICAgICAgICAgICBEb21EYXRhLnNldChlbCwge30pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBEb21EYXRhLmdldChlbCk7XG4gICAgICAgIGRhdGEuY29tcG9uZXQgPSBjb21wb25lbnQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2dldENvbXBvbmVudChlbCkge1xuICAgICAgICBpZiAoRG9tRGF0YS5oYXMoZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gRG9tRGF0YS5nZXQoZWwpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmNvbXBvbmV0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuY29tcG9uZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfE51bWJlcltdfXZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVmcmVzaFByb2dyZXNzKGVsLCB2YWx1ZSkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBUYXNrLiNnZXRDb21wb25lbnQoZWwpO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyBpbnN0YW5jZW9mIFByb2dyZXNzKSB7XG4gICAgICAgICAgICBwcm9ncmVzcy5zZXRMYWJlbCh0aGlzLmdldFByb2dyZXNzVG90YWwoKSArICclJyk7XG4gICAgICAgICAgICBwcm9ncmVzcy5zZXRQcm9ncmVzcyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsU3RhdHVzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8TnVtYmVyW119dmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICBfcmVmcmVzaFN0YXR1cyhlbFN0YXR1cywgdmFsdWUpIHtcbiAgICAgICAgVGFzay4jZ2V0Q29tcG9uZW50KGVsU3RhdHVzKS5yZWZyZXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLm9wdGlvbnMucGFydHNbJ3RpdGxlJ107XG4gICAgICAgIGlmIChwYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1twYXJ0XSA/PyAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG59XG5cblRhc2suRGVmdWFsdHMgPSBEZWZhdWx0czsiLCI3XG5cbi8qKlxuICogQHBhcmFtIHRpbWluZ1xuICogQHBhcmFtIGRyYXdcbiAqIEBwYXJhbSBkdXJhdGlvblxuICogQHBhcmFtIG9uRW5kXG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGUoe3RpbWluZywgZHJhdywgZHVyYXRpb259LCBvbkVuZCkge1xuXG4gICAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gYW5pbWF0ZSh0aW1lKSB7XG4gICAgICAgIC8vIHRpbWVGcmFjdGlvbiDQuNC30LzQtdC90Y/QtdGC0YHRjyDQvtGCIDAg0LTQviAxXG4gICAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAodGltZSAtIHN0YXJ0KSAvIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGltZUZyYWN0aW9uID4gMSkgdGltZUZyYWN0aW9uID0gMTtcblxuICAgICAgICAvLyDQstGL0YfQuNGB0LvQtdC90LjQtSDRgtC10LrRg9GJ0LXQs9C+INGB0L7RgdGC0L7Rj9C90LjRjyDQsNC90LjQvNCw0YbQuNC4XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWluZyh0aW1lRnJhY3Rpb24pO1xuXG4gICAgICAgIGRyYXcocHJvZ3Jlc3MpOyAvLyDQvtGC0YDQuNGB0L7QstCw0YLRjCDQtdGRXG5cbiAgICAgICAgaWYgKHRpbWVGcmFjdGlvbiA8IDEpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvbkVuZCkge1xuICAgICAgICAgICAgICAgIG9uRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xufVxuXG5cbmNvbnN0IHRpbWluZ3MgPSB7XG4gICAgbGluZWFyKHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gdGltZUZyYWN0aW9uO1xuICAgIH0sXG4gICAgcXVhZCh0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRpbWVGcmFjdGlvbiwgMilcbiAgICB9LFxuICAgIGNpcmModGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHRpbWVGcmFjdGlvbikpO1xuICAgIH0sXG4gICAgYmFjayh4ID0gMS41LCB0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRpbWVGcmFjdGlvbiwgMikgKiAoKHggKyAxKSAqIHRpbWVGcmFjdGlvbiAtIHgpXG4gICAgfSxcbn07XG5cblxuY29uc3QgYW5pbWF0aW9uc0RyYXcgPSB7XG4gICAgJ2ZhZGVPdXQnOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMSAtIChNYXRoLnJvdW5kKHByb2dyZXNzICogMTAwKSAvIDEwMCk7XG4gICAgfSxcbiAgICAnZmFkZUluJzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IChNYXRoLnJvdW5kKHByb2dyZXNzICogMTAwKSAvIDEwMCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IGFuaW1hdGlvbkNvbmZpZ1xuICogQHJldHVybiBQcm9taXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGVFbChlbCwgYW5pbWF0aW9uQ29uZmlnID0ge1xuICAgIG5hbWU6ICdmYWRlT3V0JyxcbiAgICB0aW1pbmc6IHRpbWluZ3MubGluZWFyLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgZGVsYXk6IDBcbn0pIHtcbiAgICBsZXQgYW5pbWF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgYW5pbWF0aW9uQ29uZmlnKTtcblxuICAgIGlmICh0eXBlb2YgYW5pbWF0aW9uLmRyYXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYW5pbWF0aW9uLmRyYXcuYmluZChlbClcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhbmltYXRpb24ubmFtZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGFuaW1hdGlvbnNEcmF3W2FuaW1hdGlvbi5uYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhbmltYXRpb24uZHJhdyA9IGFuaW1hdGlvbnNEcmF3W2FuaW1hdGlvbi5uYW1lXS5iaW5kKGVsKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBhbmltYXRpb24gJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhbmltYXRpb24uZGVsYXkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgYW5pbWF0aW9uLmRlbGF5ID0gMDtcbiAgICB9XG5cbiAgICBhbmltYXRpb24udGltaW5nID0gKHR5cGVvZiBhbmltYXRpb24udGltaW5nID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHRpbWluZ3NbYW5pbWF0aW9uLnRpbWluZ10gPT09ICdmdW5jdGlvbicpXG4gICAgICAgID8gdGltaW5nc1thbmltYXRpb24udGltaW5nXSA6IHRpbWluZ3MubGluZWFyO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYW5pbWF0ZShhbmltYXRpb24sICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZWwpXG4gICAgICAgIH0pLCBhbmltYXRpb24uZGVsYXkpO1xuICAgIH0pO1xuXG59XG5cblxuLyoqXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259dGltaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSBkZWxheVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhZGVJbihlbCwgdGltaW5nID0gJ2xpbmVhcicsIGR1cmF0aW9uID0gMTAwMCwgZGVsYXkgPSAwKSB7XG4gICAgcmV0dXJuIGFuaW1hdGVFbChlbCwge1xuICAgICAgICBuYW1lOiAnZmFkZUluJyxcbiAgICAgICAgdGltaW5nOiB0aW1pbmcsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0pO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gZWxcbiAqIEBwYXJhbSB0aW1pbmdcbiAqIEBwYXJhbSBkdXJhdGlvblxuICogQHBhcmFtIGRlbGF5XG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFkZU91dChlbCwgdGltaW5nID0gJ2xpbmVhcicsIGR1cmF0aW9uID0gMTAwMCwgZGVsYXkgPSAwKSB7XG4gICAgcmV0dXJuIGFuaW1hdGVFbChlbCwge1xuICAgICAgICBuYW1lOiAnRmFkZU91dCcsXG4gICAgICAgIHRpbWluZzogdGltaW5nLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9KTtcbn0iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcic7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzTGlzdCc7XG5pbXBvcnQgU3RhdHVzZXMgZnJvbSAnLi9zdGF0dXNlc0xpc3QnO1xuaW1wb3J0IE1hbmFnZXJFdmVudCBmcm9tICcuL21hbmFnZXJFdmVudCc7XG5pbXBvcnQgVGFza0Fic3RyYWN0IGZyb20gXCIuL3Rhc2tBYnN0cmFjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgQnV0dG9uc0dyb3VwIGZyb20gJy4vYnV0dG9uc0dyb3VwJztcblxuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IGFuaW1hdGVFbCwge2ZhZGVJbn0gZnJvbSAnLi91dGlscy9hbmltYXRlJztcblxuXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICBjb21tb246IGZhbHNlLFxuICAgIHRpdGxlOiAnPGgzPkJhY2tncm91bmRzIHRhc2tzPC9oMz4nLFxuICAgIHRoZW1lOiB7Jy0xJzogXCJkZWZhdWx0XCJ9LFxuICAgIHJlbmRlck9uRW1wdHk6IHRydWUsXG4gICAgdGFza0NsYXNzOiBUYXNrLFxuICAgIGVtcHR5VGV4dDogJ1Rhc2tzIG5vdCBwcm92aWRlZCB5ZXQnLFxuICAgIHRhc2tPcHRpb25zOiB7fSxcbiAgICB0YXNrczogW10sXG4gICAgc3RhdHVzVGV4dDoge30sXG4gICAgaGlkZUFuaW1hdGlvbjoge1xuICAgICAgICBuYW1lOiAnZmFkZU91dCcsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICB0aW1pbmc6ICdsaW5lYXInLFxuICAgICAgICBkZWxheTogMFxuICAgIH0sXG4gICAgc2hvd0FuaW1hdGlvbjoge1xuICAgICAgICBuYW1lOiAnZmFkZUluJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIHRpbWluZzogJ2xpbmVhcicsXG4gICAgICAgIGRlbGF5OiAwXG4gICAgfSxcbiAgICB0YXNrc0FuaW1hdGlvbjoge1xuICAgICAgICBoaWRlOiB7fSxcbiAgICAgICAgc2hvdzoge31cbiAgICB9LFxuICAgIHJlc29sdmVyOiB7XG4gICAgICAgIHVybDogJ3F1ZXVlLXJlYWRlcidcbiAgICB9XG59O1xuXG5cbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLmhpZGVbU3RhdHVzZXMuRE9ORV0gPSBleHRlbmQoe30sIERlZmF1bHRzLmhpZGVBbmltYXRpb24sIHtkZWxheTogNTAwMH0pO1xuRGVmYXVsdHMudGFza3NBbmltYXRpb24uaGlkZVtTdGF0dXNlcy5FUlJPUl0gPSBleHRlbmQoe30sIERlZmF1bHRzLmhpZGVBbmltYXRpb24sIHtkZWxheTogMjAwMDB9KTtcbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLnNob3dbU3RhdHVzZXMuRVhFQ10gPSBleHRlbmQoe30sIERlZmF1bHRzLnNob3dBbmltYXRpb24sIHtkdXJhdGlvbjogNTAwfSk7XG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5zaG93W1N0YXR1c2VzLldBSVRdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5zaG93QW5pbWF0aW9uLCB7ZHVyYXRpb246IDUwMH0pO1xuXG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5oaWRlW1N0YXR1c2VzLkVSUk9SXSA9IGZhbHNlOyAvL25vdCByZW1vdmUgVGFzayBlbGVtZW50IGZyb20gZG9tXG5cbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuRE9ORV0gPSAnQ29tcGxldGUnO1xuRGVmYXVsdHMuc3RhdHVzVGV4dFtTdGF0dXNlcy5FUlJPUl0gPSAnQ29tcGxldGUgd2l0aCBlcnJvcnMnO1xuRGVmYXVsdHMuc3RhdHVzVGV4dFtTdGF0dXNlcy5FWEVDXSA9ICdQcm9jZXNzaW5nJztcbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuV0FJVF0gPSAnQXdhaXRpbmcnO1xuXG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtSZXNvbHZlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICNyZXNvbHZlciA9IG51bGw7XG5cbiAgICAjZWxlbWVudHMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIG93bmVyOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXI6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlclRhc2tzOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIGVtcHR5VGV4dDogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7VGFza0Fic3RyYWN0W119XG4gICAgICovXG4gICAgI3Rhc2tzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgICNvcHRpb25zID0ge307XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLiNlbGVtZW50cy5vd25lciA9IFVJQ29tcG9uZW50LnJlbW92ZU9wdGlvbnNQdG9wZXJ0eSgnZWxlbWVudCcsIG9wdGlvbnMpO1xuICAgICAgICBsZXQgb3B0ID0gZXh0ZW5kKHt9LCBNYW5hZ2VyLkRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwge1xuICAgICAgICAgICAgdGFza09wdGlvbnM6IG9wdC50YXNrQ2xhc3MuRGVmdWFsdHNcbiAgICAgICAgfSwgb3B0KTtcblxuICAgICAgICB0aGlzLiNyZXNvbHZlciA9IFJlc29sdmVyLmZhY3RvcnkodGhpcyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy50YXNrcyAmJiB0eXBlb2Ygb3B0aW9ucy50YXNrcy5sZW5ndGggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFza3Mob3B0aW9ucy50YXNrcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NoZWNrIGxhdGVyIGFkZGVkIHRhc2tzLFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFRhc2tzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jdG9nZ2xlRW1wdHlUZXh0KCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5yZWFkeSwge2J1YmJsZXM6IHRydWV9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3RydWN0b3Igb2YgbWFuYWdlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuZGVzdHJveSwge2J1YmJsZXM6IHRydWV9KTtcbiAgICAgICAgdGhpcy4jdGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fG51bGx9IGRldGFpbFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgdHJpZ2dlcih0eXBlLCBwcm9wcyA9IHt9LCBkZXRhaWwpIHtcblxuICAgICAgICBpZiAodHlwZW9mIGRldGFpbCA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBwcm9wcy5kZXRhaWwgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRldGFpbCkpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5kZXRhaWxba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyRWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBNYW5hZ2VyRXZlbnQodGhpcywgdHlwZSwgcHJvcHMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzKFN0YXR1c2VzLlNFVF9WSVNJQkxFKTtcblxuICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwICYmIHRoaXMub3B0aW9ucy5yZW5kZXJPbkVtcHR5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLiNlbGVtZW50cztcblxuICAgICAgICBpZiAoZWxlbWVudHMud3JhcHBlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICAgICAgZWxlbWVudHMud3JhcHBlciA9IGVsZW1lbnRzLm93bmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6ICd3cmFwcGVyJ30pKTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzLndyYXBwZXIuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50aXRsZSAmJiB0aGlzLm9wdGlvbnMudGl0bGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogdGhpcy5vcHRpb25zLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLndyYXBwZXJUYXNrcyA9IGVsZW1lbnRzLndyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6ICd0YXNrcyd9KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lbXB0eVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5lbXB0eVRleHQgPSBlbGVtZW50cy53cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnRzLmVtcHR5VGV4dCA9IHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdlbXB0eS13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnZW1wdHktdGV4dCcsIHRleHRDb250ZW50OiBvcHRpb25zLmVtcHR5VGV4dH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGhlbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnRzLndyYXBwZXIsIE1hbmFnZXIuZ2V0Q2xhc3NOYW1lKCd0aGVtZS0nICsgb3B0aW9ucy50aGVtZSksIE1hbmFnZXIuZ2V0Q2xhc3NOYW1lKCd0aGVtZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGFzay5yZWZyZXNoKCkpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgI3RvZ2dsZUVtcHR5VGV4dCh0eXBlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy4jZWxlbWVudHMuZW1wdHlUZXh0LFxuICAgICAgICAgICAgdmlzaWJsZSA9IERvbS5pc1Zpc2libGUoZWwpO1xuXG4gICAgICAgIGlmIChEb20uaXNFbChlbCkpIHtcbiAgICAgICAgICAgIGlmICgodmlzaWJsZSAmJiB0eXBlID09PSAnaGlkZScpIHx8ICh2aXNpYmxlID09PSBmYWxzZSAmJiB0eXBlID09PSAnc2hvdycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGVFbChlbCwgdGhpcy5vcHRpb25zW3R5cGUgKyAnQW5pbWF0aW9uJ10pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAodHlwZSA9PT0gJ3Nob3cnKSA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119dGFza3NcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc29sdmVcbiAgICAgKi9cbiAgICBhZGRUYXNrcyh0YXNrcywgcmVzb2x2ZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFza3MpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgdmFsaWQgY2FsbC4gQXJndW1lbnQgdGFza3MgaXMgbm90IGFycmF5IHR5cGUgJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiN0YXNrRmFjdG9yeSh0YXNrcyk7XG4gICAgICAgIHRoaXMuI3Rhc2tzID0gdGhpcy4jdGFza3MuY29uY2F0KHRhc2tzKTtcblxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB0aGlzLnRyaWdnZXIoRXZlbnRzLm5ld1Rhc2ssIHtidWJibGVzOiB0cnVlfSwge3Rhc2s6IHRhc2t9KSk7XG5cbiAgICAgICAgdGhpcy4jdG9nZ2xlRW1wdHlUZXh0KCdoaWRlJykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZXIucmVzb2x2ZSgobWFuYWdlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmFnZXIuZ2V0VGFza3MoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci50cmlnZ2VyKEV2ZW50cy5mZXRjaFN0YXJ0LCB7YnViYmxlczogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChtYW5hZ2VyLCBudW1iZXJSZXF1ZXN0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci50cmlnZ2VyKEV2ZW50cy5mZXRjaEVuZCwge2J1YmJsZXM6IHRydWV9LCB7cmVxdWVzdHM6IG51bWJlclJlcXVlc3RzfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rhc2tBYnN0cmFjdH0gdGFza1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VwZGF0ZVRhc2sodGFzaywgcmVzcG9uc2UpIHtcblxuICAgICAgICBpZiAodGFzay5wcm9ncmVzcyAhPT0gcmVzcG9uc2UucHJvZ3Jlc3MgfHwgdGFzay5zdGF0dXMgIT09IHJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgfHwgdGFzay50ZXh0ICE9PSByZXNwb25zZS50ZXh0IHx8IHRhc2sudGl0bGUgIT09IHJlc3BvbnNlLnRpdGxlKSB7XG4gICAgICAgICAgICBjb25zdCBpc1N0YXR1c0NoYW5nZSA9IHRhc2suc3RhdHVzICE9PSByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgb2xkRGF0YSA9IGV4dGVuZCh7fSwgdGFzayk7XG4gICAgICAgICAgICB0YXNrID0gZXh0ZW5kKHRhc2ssIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRhc2sucmVmcmVzaChvbGREYXRhKTtcblxuICAgICAgICAgICAgaWYgKGlzU3RhdHVzQ2hhbmdlKSB7XG5cbiAgICAgICAgICAgICAgICB0YXNrLmNzc0NsYXNzU3dpdGNoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnN0YXR1c0NoYW5nZSwge2J1YmJsZXM6IHRydWV9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIG9sZFN0YXR1czogb2xkRGF0YS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChTdGF0dXNlcy5pcyhTdGF0dXNlcy5TRVRfVklTSUJMRSwgdGFzay5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2suZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlclRhc2tzRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlRWwoZWxlbWVudCwgdGhpcy4jdGFza0FuaW1hdGlvbih0YXNrLCAnc2hvdycpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChTdGF0dXNlcy5pcyhTdGF0dXNlcy5TRVRfQ09NUExFVEUsIHRhc2suc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Rhc2tBYnN0cmFjdHxudW1iZXJ9IHRhc2sgVGFzayBpbnN0YW5jZSBvciB0YXNrIGlkXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICByZW1vdmVUYXNrKHRhc2spIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0YXNrID0gdGhpcy5maW5kVGFzayh0YXNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0VGFza3MoKS5maW5kSW5kZXgoKHQpID0+IHQuaWQgPT09IHRhc2suaWQpO1xuICAgICAgICAgICAgaWYgKGlkID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiN0YXNrcy5zcGxpY2UoaWQsIDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy50YXNrUmVtb3ZlZCwge2J1YmJsZXM6IHRydWV9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2tcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmVsZW1lbnQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcmVtb3ZlRWwodGFzay5lbGVtZW50LCB0aGlzLiN0YXNrQW5pbWF0aW9uKHRhc2spKS50aGVuKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy50YXNrRWxlbWVudFJlbW92ZWQsIHtidWJibGVzOiB0cnVlfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuI3Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgI3Rhc2tBbmltYXRpb24odGFzaywgdHlwZSA9ICdoaWRlJykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGFza3NBbmltYXRpb25bdHlwZV1bdGFzay5zdGF0dXNdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy50YXNrc0FuaW1hdGlvblt0eXBlXVt0YXNrLnN0YXR1c107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uc1t0eXBlICsgJ0FuaW1hdGlvbiddO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfG1lbnViYXJ9IHN0YXR1c0ZpbHRlclxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgIGdldFRhc2tzKHN0YXR1c0ZpbHRlcikge1xuXG4gICAgICAgIGxldCB0YXNrcyA9IHRoaXMuI3Rhc2tzO1xuXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzRmlsdGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHN0YXR1c0ZpbHRlciA9IFtzdGF0dXNGaWx0ZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNGaWx0ZXIuaW5kZXhPZih0YXNrLnN0YXR1cykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0fG51bGx9XG4gICAgICovXG4gICAgZmluZFRhc2soaWQpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRoaXMuZ2V0VGFza3MoKS5maW5kKCh0KSA9PiB0LmlkID09PSBpZCk7XG4gICAgICAgIGlmICh0YXNrIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bWJlcltdfSB0YXNrc1xuICAgICAqL1xuICAgICN0YXNrRmFjdG9yeSh0YXNrcykge1xuICAgICAgICBjb25zdCBUYXNrQ2xhc3MgPSB0aGlzLm9wdGlvbnMudGFza0NsYXNzO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdID0gZXh0ZW5kKG5ldyBUYXNrQ2xhc3MobnVsbCwgdGhpcyksIGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIucGFyc2VJbnQoaXRlbSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdID0gbmV3IFRhc2tDbGFzcyhpdGVtLCB0aGlzKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlIG5vdCB2YWxpZCB0YXNrIGl0ZW0nLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R8ZmFsc2V9YW5pbWF0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICAjcmVtb3ZlRWwoZWwsIGFuaW1hdGlvbiA9IHRoaXMub3B0aW9ucy5oaWRlQW5pbWF0aW9uKSB7XG5cbiAgICAgICAgaWYgKGFuaW1hdGlvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRlRWwoZWwsIGFuaW1hdGlvbikudGhlbigoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IG93bmVyRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzLm93bmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHdyYXBwZXJFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMud3JhcHBlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB3cmFwcGVyVGFza3NFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMud3JhcHBlclRhc2tzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7UmVzb2x2ZXJ9XG4gICAgICovXG4gICAgZ2V0IHJlc29sdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcmVzb2x2ZXJcbiAgICB9XG5cblxufVxuXG5VSUNvbXBvbmVudC5jbGFzc1ByZWZpeCA9ICdxbWMtJztcblxuTWFuYWdlci5UYXNrQWJzdHJhY3QgPSBUYXNrQWJzdHJhY3Q7XG5NYW5hZ2VyLkJ1dHRvbiA9IEJ1dHRvbjtcbk1hbmFnZXIuQnV0dG9uc0dyb3VwID0gQnV0dG9uc0dyb3VwO1xuTWFuYWdlci5JY29uID0gSWNvbjtcblxuTWFuYWdlci5EZWZhdWx0cyA9IERlZmF1bHRzO1xuTWFuYWdlci5FdmVudHMgPSBFdmVudHM7XG5NYW5hZ2VyLlN0YXR1c2VzID0gU3RhdHVzZXM7XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjsiLCJpbXBvcnQgJCBmcm9tICdnbG9iYWwvalF1ZXJ5JztcblxuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJ1xuXG4kLmZuLnF1ZXVlTWFuYWdlciA9IGZ1bmN0aW9uIChtZXRob2QpIHtcblxuICAgIGNvbnN0IG1hbmFnZXIgPSB0aGlzLmRhdGEoJ3F1ZXVlLW1hbmFnZXInKSxcbiAgICAgICAgbWV0aG9kcyA9IHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICB7TWFuYWdlci5EZWZhdWx0c30gb3B0aW9uc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHdyYXBwZXIuZGF0YSgncXVldWVNYW5hZ2VyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkd3JhcHBlci5kYXRhKCdxdWV1ZU1hbmFnZXInLCBuZXcgTWFuYWdlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZXh0ZW5kKHRydWUsIHtlbGVtZW50OiAkd3JhcHBlci5nZXQoMCl9LCBNYW5hZ2VyLkRlZmF1bHRzLCBvcHRpb25zIHx8IHt9LCAkd3JhcHBlci5kYXRhKCdtYW5hZ2VyJykgfHwge30pKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY3JlYXRlQnV0dG9uczogZnVuY3Rpb24ob3B0aW9ucywgJHdyYXBwZXIpe1xuICAgICAgICAgICAgICAgICR3cmFwcGVyID0gJHdyYXBwZXIgfHwgdGhpcztcbiAgICAgICAgICAgICAgICAkd3JhcHBlci5hcHBlbmQoJChuZXcgTWFuYWdlci5CdXR0b25zR3JvdXAob3B0aW9ucykucmVuZGVyKCkpLmRhdGEoJ21hbmFnZXInLCBtYW5hZ2VyKSk7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH07XG5cbiAgICBpZiAobWFuYWdlciBpbnN0YW5jZW9mIE1hbmFnZXIgJiYgdHlwZW9mIG1hbmFnZXJbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbWFuYWdlclttZXRob2RdLmFwcGx5KG1hbmFnZXIsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kc1ttZXRob2RdKSB7XG4gICAgICAgIHJldHVybiBtZXRob2RzW21ldGhvZF0uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkLmVycm9yKCdNZXRob2QgJyArIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24gcXVldWVNYW5hZ2VyICcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59O1xuXG4kLmZuLnF1ZXVlTWFuYWdlci5NYW5hZ2VyID0gTWFuYWdlcjtcblxuJCgnZG9jdW1lbnQnKS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnFtYy1xdWV1ZS1tYW5hZ2VyW2RhdGEtbWFuYWdlcl0nKS5xdWV1ZU1hbmFnZXIoKTtcbn0pO1xuXG5cblxuIl0sIm5hbWVzIjpbIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9pbmhlcml0c0xvb3NlIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQiLCJyZWNlaXZlciIsInZhbHVlIiwic2V0IiwiY2FsbCIsIlR5cGVFcnJvciIsIl9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IiLCJwcml2YXRlTWFwIiwiYWN0aW9uIiwiaGFzIiwiZ2V0IiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIiwiY2xhc3NBcHBseURlc2NyaXB0b3JTZXQiLCJfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJjbGFzc0FwcGx5RGVzY3JpcHRvckdldCIsIl9leHRlbmRzIiwiYXNzaWduIiwiYXJndW1lbnRzIiwic291cmNlIiwiaGFzT3duUHJvcGVydHkiLCJhcHBseSIsIkNTU0NsYXNzTmFtZU1peGluIiwiY2xhc3NQcmVmaXgiLCJnZXRDbGFzc05hbWUiLCJuYW1lIiwic3RhcnRzV2l0aCIsIkZ1bGxzY3JlZW5BcGkiLCJwcmVmaXhlZCIsImFwaU1hcCIsInNwZWNBcGkiLCJicm93c2VyQXBpIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsImtleXMiLCJvYmplY3QiLCJpc09iamVjdCIsImVhY2giLCJmbiIsImZvckVhY2giLCJpc1BsYWluIiwiY29tcHV0ZWRTdHlsZSIsImVsIiwicHJvcCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJjb21wdXRlZFN0eWxlVmFsdWUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiVVNFUl9BR0VOVCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIndlYmtpdFZlcnNpb25NYXAiLCJleGVjIiwicGFyc2VGbG9hdCIsInBvcCIsInRlc3QiLCJtYXRjaCIsIklTX0FORFJPSUQiLCJtYWpvciIsIm1pbm9yIiwiSVNfRURHRSIsIklTX0NIUk9NRSIsInJlc3VsdCIsInZlcnNpb24iLCJJU19TQUZBUkkiLCJUT1VDSF9FTkFCTEVEIiwiQm9vbGVhbiIsIkRvbSIsIm1heFRvdWNoUG9pbnRzIiwiRG9jdW1lbnRUb3VjaCIsIklTX0lQQUQiLCJpc05vbkJsYW5rU3RyaW5nIiwic3RyIiwidHJpbSIsInRocm93SWZXaGl0ZXNwYWNlIiwiaW5kZXhPZiIsIkVycm9yIiwiY2xhc3NSZWdFeHAiLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJpc1JlYWwiLCJpc0VsIiwibm9kZVR5cGUiLCJjcmVhdGVRdWVyaWVyIiwibWV0aG9kIiwic2VsZWN0b3IiLCJjb250ZXh0IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImNyZWF0ZUVsIiwidGFnTmFtZSIsInByb3BlcnRpZXMiLCJhdHRyaWJ1dGVzIiwiY29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvcE5hbWUiLCJ2YWwiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZU5hbWUiLCJzdHlsZSIsInRleHRDb250ZW50IiwiYXR0ck5hbWUiLCJhcHBlbmRDb250ZW50IiwidGV4dCIsImlubmVyVGV4dCIsImhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzVG9DaGVjayIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkQ2xhc3MiLCJjbGFzc1RvQWRkIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJjbGFzc1RvUmVtb3ZlIiwicmVtb3ZlIiwic3BsaXQiLCJmaWx0ZXIiLCJjIiwiam9pbiIsInRvZ2dsZUNsYXNzIiwiY2xhc3NUb1RvZ2dsZSIsInByZWRpY2F0ZSIsImF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudE5vZGUiLCJyZWN0IiwiayIsInVuZGVmaW5lZCIsImhlaWdodCIsIndpZHRoIiwiaXNUZXh0Tm9kZSIsImlzVmlzaWJsZSIsIm9wYWNpdHkiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwic3dpdGNoQ2xhc3MiLCJjc3NDbGFzcyIsInNlYXJjaENsYXNzIiwiY29tcGFyZSIsImV4aXN0Iiwibm9ybWFsaXplQ29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImNyZWF0ZVRleHROb2RlIiwibm9kZSIsImFwcGVuZENoaWxkIiwiRUxFTUVOVCIsIm1hdGNoZXMiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsIkVsZW1lbnQiLCIkIiwiJCQiLCJVSUNvbXBvbmVudCIsInJlbW92ZU9wdGlvbnNQdG9wZXJ0eSIsInByb3BlcnR5Iiwib3B0aW9ucyIsImluc3RhbmNlT2YiLCJjbGFzc1NldCIsIlNldCIsImFycmF5IiwiaXRlbSIsIl9ub3JtYWxpemVQcmVmaXgiLCJyIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJjcmMzMiIsImNvbW1vbmpzSGVscGVycyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmYWN0b3J5IiwiRE9fTk9UX0VYUE9SVF9DUkMiLCJDUkMzMiIsInNpZ25lZF9jcmNfdGFibGUiLCJ0YWJsZSIsIm4iLCJJbnQzMkFycmF5IiwiVCIsImNyYzMyX2JzdHIiLCJic3RyIiwic2VlZCIsIkMiLCJMIiwiY2hhckNvZGVBdCIsImNyYzMyX2J1ZiIsImJ1ZiIsImNyYzMyX2J1Zl84IiwiY3JjMzJfc3RyIiwiZCIsImV4dGVuZCIsInNvdXJjZXMiLCJzaGlmdCIsIlN0YXR1c2VzTGlzdCIsIklOSVQiLCJXQUlUIiwiRVhFQyIsIkRPTkUiLCJFUlJPUiIsIkRFTEVURUQiLCJTRVRfVklTSUJMRSIsIlNFVF9DT01QTEVURSIsImlzIiwic3RhdHVzIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiVGFza0Fic3RyYWN0IiwiaWQiLCJtYW5hZ2VyIiwiU3RhdHVzZXMiLCJwYXJzZUludCIsIl9yZW5kZXJDaGlsZCIsImVsV3JhcHBlciIsIl9idWlsZENzc0NsYXNzIiwiY3NzQ2xhc3NTd2l0Y2giLCJ0aGVtZSIsIl9jbGFzc1N0YXRpY1ByaXZhdGVGaWVsZFNwZWNHZXQiLCJyZWZyZXNoIiwicmVzcG9uc2UiLCJlbGVtZW50cyIsIl9yZWZyZXNoRWxlbWVudHMiLCJnZXRQcm9ncmVzc1RvdGFsIiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwiYSIsIm9sZFRhc2siLCJvcHRpb25zUGFydHMiLCJwYXJ0cyIsImVsZW1lbnROYW1lIiwibSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJvbGRWYWx1ZSIsIl9yZWZyZXNoQmFzaWNQcm9wZXJ0eSIsImVsTGlzdCIsImFwcGVuZCIsImluZGV4IiwiZWxMaSIsImlubmVySFRNTCIsImdldFRpdGxlIiwic3RhdHVzVGV4dCIsInRhc2tPcHRpb25zIiwiZWxUYXNrIiwiX2Nzc0xpc3QiLCJzdGF0dXNlc0xpc3RLZXkiLCJ0b0xvd2VyQ2FzZSIsIkVNUFRZX01FU1NBR0UiLCJEZWZhdWx0cyIsImRlbGF5VGltZSIsInBhcmFtcyIsIlJlc29sdmVyIiwib3B0IiwiT2JqIiwiZW50cmllcyIsInJlc29sdmUiLCJvblN0YXJ0Iiwib25FbmQiLCJpc1J1bm5pbmciLCJtYW5hZ2VycyIsImVycm9yIiwidGhlbiIsIm51bWJlciIsImZpbmRUYXNrcyIsInRhc2tzIiwidGFzayIsInJlc29sdmVyIiwiaGFzaCIsInVybCIsImNhY2hlIiwiY29tbW9uTWFuYWdlcnMiLCJwdXNoIiwiY29tbW9uIiwib3duZXJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1hbmFnZXIiLCJFdmVudHMiLCJkZXN0cm95IiwiZXZlbnQiLCJnZXRUYXNrcyIsImluaXRpYXRvck1hbmFnZXIiLCJyZW1vdmVUYXNrIiwic3BsaWNlIiwiZmluZEluZGV4IiwidGltZU91dCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJvayIsImpzb24iLCJyYXciLCJfdXBkYXRlVGFzayIsImZpbmRUYXNrIiwiYWRkVGFza3MiLCJmaW5kIiwiUHJvbWlzZSIsInJlamVjdCIsInRhc2tzSWQiLCJzZXRUaW1lb3V0IiwiYm9keSIsImNvbmNhdCIsImZldGNoIiwiaGVhZGVycyIsImVuY29kZVVSSSIsIkV2ZW50IiwicmVhZHkiLCJzdGF0dXNDaGFuZ2UiLCJ0YXNrUmVtb3ZlZCIsInRhc2tFbGVtZW50UmVtb3ZlZCIsIm5ld1Rhc2siLCJmZXRjaFN0YXJ0IiwiZmV0Y2hFbmQiLCJldmVudHMiLCJfZ2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9pc05hdGl2ZUZ1bmN0aW9uIiwiRnVuY3Rpb24iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsInZhbHVlT2YiLCJlIiwiX2NvbnN0cnVjdCIsIlBhcmVudCIsImFyZ3MiLCJDbGFzcyIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsImJpbmQiLCJpbnN0YW5jZSIsIl93cmFwTmF0aXZlU3VwZXIiLCJfY2FjaGUiLCJNYXAiLCJpc05hdGl2ZUZ1bmN0aW9uIiwiV3JhcHBlciIsIk1hbmFnZXJFdmVudCIsInR5cGUiLCJDdXN0b21FdmVudCIsIl9pbml0aWFsR3VpZCIsIl9ndWlkIiwibmV3R1VJRCIsIkZha2VXZWFrTWFwIiwiV2Vha01hcCIsInZkYXRhIiwiZmxvb3IiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRhdGUiLCJkYXRhIiwiYWNjZXNzIiwiR3VpZCIsIlByb2dyZXNzIiwicmVuZGVyIiwiSFRNTEVsZW1lbnQiLCJzaXplIiwiaXNTaG93R3JhZGllbnQiLCJzZXRQcm9ncmVzcyIsImJhcnMiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiYmFyT3B0aW9ucyIsImNsYXNzVGhvQ2hlY2siLCJzZXRMYWJlbCIsImxhYmVsIiwibGFiZWxUZXh0IiwiY3NzIiwicm9sZSIsIm1pbiIsIm1heCIsImNoaWxkTm9kZXMiLCJJY29uVCIsImljb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVyIiwiaGFuZGxlclRpbW91dERlbGF5IiwiaGlkZGVuTGFiZWwiLCJkaXNhYmxlZCIsImljb25OYW1lIiwiaWNvbkhvdmVyTmFtZSIsImljb25TaXplIiwiYW5pbWF0ZWRDbGljayIsIkJ1dHRvbiIsImRyb3AiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ4IiwicGFnZVgiLCJsZWZ0Iiwic2Nyb2xsWCIsInkiLCJwYWdlWSIsInRvcCIsInNjcm9sbFkiLCJidXR0b25zIiwiYXJyYW5nZSIsInNjYWxlZCIsInNlbGVjdGFibGUiLCJzZWxlY3RJY29uIiwiQnV0dG9uc0dyb3VwIiwiY29uZmlnIiwiYnRuIiwiYnV0dG9uIiwic2VsZWN0ZWQiLCJUYXNrU3RhdHVzIiwibWFwSWNvbnMiLCJhY3Rpb25zIiwiaWNvbnMiLCJlbHMiLCJidXR0b25Hcm91cCIsImVuYWJsZWRXaXRoIiwiZW5hYmxlZFdpdGhTdGF0dXMiLCJpY29uUGxhY2VtZW50IiwidGl0bGUiLCJpY29uTWFwIiwiVGFzayIsImVsRGV0YWlsIiwiZWxTdGF0dXNXcmFwcGVyIiwicGFydCIsIm93bmVyIiwiY29tcG9uZW50IiwiX3JlZnJlc2hQcm9ncmVzcyIsIl9yZWZyZXNoU3RhdHVzIiwiZWxTdGF0dXMiLCJEb21EYXRhIiwiY29tcG9uZXQiLCJEZWZ1YWx0cyIsImFuaW1hdGUiLCJ0aW1pbmciLCJkcmF3IiwiZHVyYXRpb24iLCJzdGFydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWUiLCJ0aW1lRnJhY3Rpb24iLCJ0aW1pbmdzIiwibGluZWFyIiwicXVhZCIsInBvdyIsImNpcmMiLCJzaW4iLCJhY29zIiwiYmFjayIsImFuaW1hdGlvbnNEcmF3IiwiZGlzcGxheSIsImFuaW1hdGVFbCIsImFuaW1hdGlvbkNvbmZpZyIsImRlbGF5IiwiYW5pbWF0aW9uIiwicmVuZGVyT25FbXB0eSIsInRhc2tDbGFzcyIsImVtcHR5VGV4dCIsImhpZGVBbmltYXRpb24iLCJzaG93QW5pbWF0aW9uIiwidGFza3NBbmltYXRpb24iLCJoaWRlIiwic2hvdyIsIndyYXBwZXIiLCJ3cmFwcGVyVGFza3MiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJudW1iZXJSZXF1ZXN0cyIsInJlcXVlc3RzIiwiaXNTdGF0dXNDaGFuZ2UiLCJvbGREYXRhIiwib2xkU3RhdHVzIiwid3JhcHBlclRhc2tzRWxlbWVudCIsInQiLCJzdGF0dXNGaWx0ZXIiLCJ2aXNpYmxlIiwiVGFza0NsYXNzIiwiTnVtYmVyIiwiSWNvbiIsInF1ZXVlTWFuYWdlciIsIm1ldGhvZHMiLCJpbml0IiwiJHdyYXBwZXIiLCJjcmVhdGVCdXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsU0FBU0EsaUJBQVQsQ0FBMkJDLE1BQTNCLEVBQW1DQyxLQUFuQyxFQUEwQztFQUN4QyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBMUIsRUFBa0NELENBQUMs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
