/*!
 * @license
 * yii2qmc 1.0.3 <https://github.com/somov/yii2-queue-manager-client#readme>
 * Copyright: somov.nn@gmail.com
 * Licensed under MIT
 */

(function ($$1, document, window$1) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($$1);
  var document__default = /*#__PURE__*/_interopDefaultLegacy(document);
  var window__default = /*#__PURE__*/_interopDefaultLegacy(window$1);

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

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

    return _classApplyDescriptorGet(receiver, descriptor);
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

    _classApplyDescriptorSet(receiver, descriptor, value);

    return value;
  }

  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }

    return privateMap.get(receiver);
  }

  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);

    _classCheckPrivateStaticFieldDescriptor(descriptor, "get");

    return _classApplyDescriptorGet(receiver, descriptor);
  }

  function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);

    return method;
  }

  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
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

  function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }

  function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }

  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    return fn;
  }

  /**
   *
   */
  const CSSClassNameMixin = {
    /**
     * @type {null|string}
     */
    classPrefix: null,

    /**
     * @param {string} name
     * @return {*}
     */
    getClassName: function (name) {
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

  const FullscreenApi = {
    prefixed: true
  }; // browser API methods

  const apiMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror', 'fullscreen'], // WebKit
  ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror', '-webkit-full-screen'], // Mozilla
  ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror', '-moz-full-screen'], // Microsoft
  ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError', '-ms-fullscreen']];
  const specApi = apiMap[0];
  let browserApi; // determine the supported set of functions

  for (let i = 0; i < apiMap.length; i++) {
    // check for exitFullscreen function
    if (apiMap[i][1] in document__default['default']) {
      browserApi = apiMap[i];
      break;
    }
  } // map the browser API names to the spec API names


  if (browserApi) {
    for (let i = 0; i < browserApi.length; i++) {
      FullscreenApi[specApi[i]] = browserApi[i];
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
  const toString = Object.prototype.toString;
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

  const keys = function (object) {
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
    keys(object).forEach(key => fn(object[key], key));
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
      const computedStyleValue = window__default['default'].getComputedStyle(el);
      return computedStyleValue ? computedStyleValue.getPropertyValue(prop) || computedStyleValue[prop] : '';
    }

    return '';
  }

  /**
   * @file browser.js
   * @module browser
   */
  const USER_AGENT = window__default['default'].navigator && window__default['default'].navigator.userAgent || '';
  const webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
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
    const match = USER_AGENT.match(/OS (\d+)_/i);

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

  const IS_ANDROID = /Android/i.test(USER_AGENT);
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
    const match = USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);

    if (!match) {
      return null;
    }

    const major = match[1] && parseFloat(match[1]);
    const minor = match[2] && parseFloat(match[2]);

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

  const IS_EDGE = /Edg/i.test(USER_AGENT);
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

  const IS_CHROME = !IS_EDGE && (/Chrome/i.test(USER_AGENT) || /CriOS/i.test(USER_AGENT));
  /**
   * The detected Google Chrome version - or `null`.
   *
   * @static
   * @const
   * @type {number|null}
   */

  (function () {
    const match = USER_AGENT.match(/(Chrome|CriOS)\/(\d+)/);

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
    const result = /MSIE\s(\d+)\.\d/.exec(USER_AGENT);
    let version = result && parseFloat(result[1]);

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

  const IS_SAFARI = /Safari/i.test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE;
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

  const TOUCH_ENABLED = Boolean(isReal() && ('ontouchstart' in window__default['default'] || window__default['default'].navigator.maxTouchPoints || window__default['default'].DocumentTouch && window__default['default'].document instanceof window__default['default'].DocumentTouch));
  /**
   * Whether or not this device is an iPad.
   *
   * @static
   * @const
   * @type {Boolean}
   */

  const IS_IPAD = /iPad/i.test(USER_AGENT) || IS_SAFARI && TOUCH_ENABLED && !/iPhone/i.test(USER_AGENT);
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

      const ctx = isEl(context) ? context : document__default['default'];
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


  function createEl(tagName = 'div', properties = {}, attributes = {}, content) {
    const el = document__default['default'].createElement(tagName);
    Object.getOwnPropertyNames(properties).forEach(function (propName) {
      const val = properties[propName]; // See #2176
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
    const has = hasClass(element, classToToggle);

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
      const rect = el.getBoundingClientRect();
      const result = {};
      ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(k => {
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
    if (isEl(el) === false) {
      return false;
    }

    const opacity = el.style?.opacity !== '' ? parseFloat(el.style.opacity) : 1;

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

  function switchClass(element, cssClass, searchClass, compare = function (c) {
    if (c.startsWith(searchClass)) {
      return c;
    }

    return '';
  }) {
    let exist = '';
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


    return (Array.isArray(content) ? content : [content]).map(value => {
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
    }).filter(value => value);
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
    normalizeContent(content).forEach(node => el.appendChild(node));
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


  const $ = createQuerier('querySelector');
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

  const $$ = createQuerier('querySelectorAll');

  class UIComponent {
    /**
     * @param property
     * @param options
     * @param instanceOf
     * @return {*}
     */
    static removeOptionsPtoperty(property, options, instanceOf = Element) {
      if (options[property] instanceof instanceOf === false) {
        throw Error('Invalid call. Property ' + property + ' is not valid');
      } else {
        const result = options[property];
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


    createEl(tagName = 'div', properties = {}, attributes = {}, content) {
      if (typeof properties.className !== "undefined") {
        const classSet = new Set(),
              array = typeof properties.className === 'string' ? properties.className.split(' ') : properties.className;
        array.forEach(item => classSet.add(item));
        let className = '';

        for (let cssClass of classSet) {
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


    static _normalizePrefix(selector) {
      const r = selector.replace(new RegExp("\\.", 'g'), '$&' + UIComponent.classPrefix);
      console.log(r);
      return r;
    }
    /**
     * @param {String} selector
     * @param {Element} context
     * @return {Element|null}
     */


    $(selector, context) {
      selector = UIComponent._normalizePrefix(selector);
      return $(selector, context);
    }
    /**
     * @param {String} selector
     * @param {Element} context
     * @return {Element[]|null}
     */


    $$(selector, context) {
      selector = UIComponent._normalizePrefix(selector);
      return $$(selector, context);
    }

  }
  Object.assign(UIComponent, CSSClassNameMixin);

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

        while (i < L + 3) C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];

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

        while (i < L + 7) C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];

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

  function extend(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, {
            [key]: {}
          });
          extend(target[key], source[key]);
        } else {
          Object.assign(target, {
            [key]: source[key]
          });
        }
      }
    }

    return extend(target, ...sources);
  }

  const StatusesList = {
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

  /**
   *@interface
   */

  var _manager$1 = /*#__PURE__*/new WeakMap();

  var _element$4 = /*#__PURE__*/new WeakMap();

  var _render = /*#__PURE__*/new WeakSet();

  class TaskAbstract extends UIComponent {
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
    constructor(id, manager) {
      super();

      _render.add(this);

      _manager$1.set(this, {
        writable: true,
        value: null
      });

      _defineProperty(this, "id", void 0);

      _defineProperty(this, "common", false);

      _defineProperty(this, "initiatorManager", void 0);

      _defineProperty(this, "progress", 0);

      _defineProperty(this, "text", '');

      _defineProperty(this, "title", '');

      _defineProperty(this, "status", StatusesList.INIT);

      _element$4.set(this, {
        writable: true,
        value: null
      });

      _defineProperty(this, "callbacks", {
        init: null,
        render: null,
        show: null,
        refresh: null,
        hide: null,
        remove: null
      });

      _defineProperty(this, "result", null);

      this.id = parseInt(id);

      _classPrivateFieldSet(this, _manager$1, manager);

      setTimeout(() => this.callCallback('init'), 50);
    }
    /**
     * @param {string} type
     * @param {Array} params
     */


    callCallback(type, params = []) {
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


    /**
     * @return {Element}
     */
    get el() {
      return _classPrivateFieldGet(this, _element$4);
    }
    /**
     * Render child instances
     * @protected
     */


    _renderChild(elWrapper) {} // noinspection JSMethodCanBeStatic

    /**
     * @return {Array}
     * @protected
     */


    _buildCssClass() {
      return ['task-item'];
    }
    /**
     * @return {Object}
     */


    cssClassSwitch() {
      const element = _classPrivateMethodGet(this, _render, _render2).call(this);

      let cssClass, searchClass;

      if (typeof this.manager.options.theme === 'object') {
        let theme = this.manager.options.theme[this.status] || false;

        if (theme) {
          cssClass = TaskAbstract.getClassName('theme-' + theme);
          searchClass = TaskAbstract.getClassName('theme');
          switchClass(element, cssClass, searchClass);
        }
      }

      cssClass = _classStaticPrivateFieldSpecGet(TaskAbstract, TaskAbstract, _cssList).call(TaskAbstract)[this.status];
      searchClass = TaskAbstract.getClassName('status');
      switchClass(element, cssClass, searchClass);
    }
    /**
     *
     * @param {Object} response
     * @param {Object} elements
     */


    refresh(response, elements = null) {
      _classPrivateMethodGet(this, _render, _render2).call(this);

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


    getProgressTotal(property = 'progress') {
      let value = 0;

      if (this.hasOwnProperty(property)) {
        value = this[property];

        if (typeof value === 'object' && value.length) {
          value = Math.round(value.reduce((a, c) => a + c) / value.length, 0);
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


    _refreshElements(elements, oldTask) {
      const optionsParts = this.options.parts;
      Object.keys(elements).forEach(elementName => {
        let property = optionsParts[elementName],
            method = 'refreshBasicProperty';

        if (typeof property === 'string') {
          if (property.indexOf('.') > 0) {
            let [m, p] = property.split('.');
            method = m + p[0].toUpperCase() + p.slice(1);
            property = p;
          }

          const value = typeof this[property] !== "undefined" ? this[property] : null,
                oldValue = typeof oldTask[property] !== "undefined" ? oldTask[property] : null;

          if (value !== oldValue) {
            method = '_' + method;

            if (typeof this[method] === "function") {
              this[method].call(this, elements[elementName], value, property);
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


    _refreshBasicProperty(element, value, property) {
      if (Array.isArray(value)) {
        const className = TaskAbstract.getClassName('list-' + property);
        let elList = $('ul.' + className, element);

        if (elList === null) {
          elList = this.createEl('ul', {
            className: className
          });
          element.append(elList);
        }

        value.forEach(function (value, index) {
          let elLi = $(`li:nth-child(${index + 1})`, elList);

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


    get manager() {
      return _classPrivateFieldGet(this, _manager$1);
    }
    /**
     * @return {Element}
     */


    get element() {
      return _classPrivateFieldGet(this, _element$4);
    }
    /**
     * @return {Defaults.taskOptions|{}}
     */


    get options() {
      return this.manager.options.taskOptions;
    }
    /**
     * @return {string}
     */


    get statusText() {
      return this.manager.options.statusText[this.status] || '';
    }
    /**
     *
     * @return {string}
     */


    getTitle() {
      return '';
    }
    /**
     *
     */


    toString() {
      return this.statusText + " " + this.getTitle();
    }

  }

  function _render2() {
    if (_classPrivateFieldGet(this, _element$4)) {
      return _classPrivateFieldGet(this, _element$4);
    }

    const element = _classPrivateFieldSet(this, _element$4, this.createEl('div', {
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
    value: function () {
      if (this._cssList) {
        return this._cssList;
      }

      this._cssList = {};

      for (let statusesListKey in StatusesList) {
        if (typeof StatusesList[statusesListKey] === 'number') {
          this._cssList[StatusesList[statusesListKey]] = UIComponent.getClassName('status-' + statusesListKey.toLowerCase());
        }
      }

      return this._cssList;
    }
  };

  const EMPTY_MESSAGE = '__EMPTY__';
  const Defaults$4 = {
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

  class Resolver {
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
    constructor(options) {
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

      const opt = _classPrivateFieldSet(this, _options$3, extend({}, Defaults$4, options));

      if (opt.params && isPlain(opt.params)) {
        opt.params = Object.entries(opt.params).map(([key, value]) => `${key}=${value}`);
      }
    }
    /**
     * @param {function} onStart
     * @param {function} onEnd
     */


    resolve(onStart, onEnd) {
      if (this.isRunning === false) {
        const managers = _classPrivateMethodGet(this, _getManagers, _getManagers2).call(this);

        _classPrivateFieldSet(this, _numberRequests, 0);

        managers.forEach(manager => onStart(manager));

        _classPrivateMethodGet(this, _request, _request2).call(this, 0).catch(function (error) {
          if (error !== EMPTY_MESSAGE) {
            console.error(error);
          }
        }).then(() => {
          const number = _classPrivateFieldGet(this, _numberRequests);

          managers.forEach(manager => onEnd(manager, number));

          _classPrivateFieldSet(this, _numberRequests, -1);

          return number;
        });
      }
    }
    /**
     * @return {Promise}
     */


    /**
     * @return {TaskAbstract[]}
     */
    get tasks() {
      let tasks = [];

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


    get tasksId() {
      return this.tasks.map(task => task.id).filter((value, index, array) => {
        return array.indexOf(value) === index;
      });
    }
    /**
     *
     * @param id
     * @return {TaskAbstract|boolean}
     */


    findTasks(id) {
      return this.tasks.filter(task => task.id === id);
    }
    /**
     * @return {Object}
     */


    get options() {
      return _classPrivateFieldGet(this, _options$3);
    }
    /**
     * @return {boolean}
     */


    get isRunning() {
      return _classPrivateFieldGet(this, _numberRequests) > -1;
    }
    /**
     * @return {Manager[]}
     */


    /**
     * @param {Manager} manager
     * @return {Resolver}
     */
    static factory(manager) {
      const options = manager.options.resolver,
            hash = crc32.str(options.url),
            cache = _classStaticPrivateFieldSpecGet(Resolver, Resolver, _cache),
            commonManagers = _classStaticPrivateFieldSpecGet(Resolver, Resolver, _commonManagers);

      const resolver = cache[hash] = cache[hash] instanceof Resolver ? cache[hash] : new Resolver(options),
            managers = _classPrivateMethodGet(resolver, _getManagers, _getManagers2).call(resolver);

      if (managers.indexOf(manager) === -1) {
        managers.push(manager);

        if (manager.options.common) {
          commonManagers.push(manager);
        }

        manager.ownerElement.addEventListener(Manager.Events.destroy, function (event) {
          let index = managers.indexOf(event.manager);

          if (index > -1) {
            commonManagers.forEach(function (manager) {
              manager.getTasks().filter(value => value.initiatorManager === managers[index]).forEach(function (task) {
                manager.removeTask(task);
              });
            });
            managers.splice(index, 1);
          }

          index = commonManagers.findIndex(value => value === event.manager);

          if (index > -1) {
            commonManagers.splice(index, 1);
          }
        });
      }

      return resolver;
    }

  }

  function _request2(timeOut = this.options.delayTime) {
    return _classPrivateMethodGet(this, _createRequest, _createRequest2).call(this, timeOut).then(response => {
      if (response.ok === false) {
        throw Error(`${response.status} - ${response.statusText}' `);
      }

      return response.json().then(raw => {
        if (raw.length > 0) {
          raw.forEach(item => {
            this.findTasks(item.id).forEach(task => {
              task.manager._updateTask(task, item);
            });
          });

          _classStaticPrivateMethodGet(Resolver, Resolver, _updateCommonManagers).call(Resolver, raw, this);
        }

        return _classPrivateMethodGet(this, _request, _request2).call(this);
      });
    });
  }

  function _updateCommonManagers(response, resolver) {
    _classStaticPrivateFieldSpecGet(Resolver, Resolver, _commonManagers).forEach(manager => {
      response.forEach(item => {
        let task = manager.findTask(item.id);

        if (task === null && StatusesList.is(StatusesList.SET_COMPLETE, item.status) === false) {
          item.common = true;
          manager.addTasks([item.id], false);
          task = manager.findTask(item.id);

          manager._updateTask(task, item);

          task.initiatorManager = resolver.tasks.find(value => value.id === item.id)?.manager;
        }

        if (task instanceof TaskAbstract && task.common) {
          manager._updateTask(task, item);
        } //}

      });
    });
  }

  function _createRequest2(timeOut) {
    return new Promise((resolve, reject) => {
      const tasks = this.tasksId;

      if (tasks.length === 0) {
        reject(EMPTY_MESSAGE);
      } else {
        setTimeout(() => resolve(tasks), timeOut);
      }
    }).then(tasks => {
      _classPrivateFieldSet(this, _numberRequests, +_classPrivateFieldGet(this, _numberRequests) + 1);

      let body = tasks.map(item => `t[]=${item}`),
          params = this.options.params;

      if (Array.isArray(params) && params.length > 0) {
        body = body.concat(params);
      }

      return fetch(this.options.url, extend({}, this.options, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: encodeURI(body.join('&'))
      }));
    });
  }

  function _getManagers2(common = false) {
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

  const Event = {
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
    const events = [];
    each(this, function (event) {
      events.push(event);
    });
    return events.join(' ');
  };

  var _manager = /*#__PURE__*/new WeakMap();

  /**
   * Manager Event
   */
  class ManagerEvent extends CustomEvent {
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
    constructor(manager, type, props) {
      super(type, props);

      _manager.set(this, {
        writable: true,
        value: null
      });

      _classPrivateFieldSet(this, _manager, manager);
    }
    /**
     * @return {Manager}
     */


    get manager() {
      return _classPrivateFieldGet(this, _manager);
    }

  }

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
  const _initialGuid = 3;
  /**
   * Unique ID for an element or function
   *
   * @type {Number}
   */

  let _guid = _initialGuid;
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
  let FakeWeakMap;

  if (!window__default['default'].WeakMap) {
    FakeWeakMap = class {
      constructor() {
        this.vdata = 'vdata' + Math.floor(window__default['default'].performance && window__default['default'].performance.now() || Date.now());
        this.data = {};
      }

      set(key, value) {
        const access = key[this.vdata] || newGUID();

        if (!key[this.vdata]) {
          key[this.vdata] = access;
        }

        this.data[access] = value;
        return this;
      }

      get(key) {
        const access = key[this.vdata]; // we have data, return it

        if (access) {
          return this.data[access];
        }

        return undefined;
      }

      has(key) {
        const access = key[this.vdata];
        return access in this.data;
      }

      delete(key) {
        const access = key[this.vdata];

        if (access) {
          delete this.data[access];
          delete key[this.vdata];
        }
      }

    };
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

  /**
   *
   */

  var _bars = /*#__PURE__*/new WeakMap();

  var _labelEl = /*#__PURE__*/new WeakMap();

  var _el = /*#__PURE__*/new WeakMap();

  var _getLabelEl = /*#__PURE__*/new WeakSet();

  class Progress extends UIComponent {
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
    constructor(...options) {
      super();

      _getLabelEl.add(this);

      _defineProperty(this, "label", '');

      _defineProperty(this, "className", Progress.getClassName('progress'));

      _defineProperty(this, "size", null);

      _bars.set(this, {
        writable: true,
        value: []
      });

      _defineProperty(this, "barOptions", {});

      _labelEl.set(this, {
        writable: true,
        value: null
      });

      _el.set(this, {
        writable: true,
        value: null
      });

      _defineProperty(this, "isShowGradient", true);

      extend(this, ...options);
    }
    /**
     *
     * @return {Element}
     */


    render() {
      let el = _classPrivateFieldGet(this, _el);

      if (el instanceof HTMLElement) {
        return el;
      }

      let className = this.className;

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


    /**
     * @param {number|number[]} value
     */
    setProgress(value) {
      const bars = _classPrivateFieldGet(this, _bars),
            el = _classPrivateFieldGet(this, _el);
            value.length;

      value = typeof value === 'number' ? [value] : value;
      value.forEach((value, index) => {
        if (bars[index] instanceof ProgressBar) {
          bars[index].progress = value;
        } else {
          bars[index] = new ProgressBar(this.barOptions, {
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
      const classThoCheck = Progress.getClassName('more-than-three');

      if (hasClass(el, classThoCheck) === false && value.length > 3) {
        addClass(el, classThoCheck);
      }
    }
    /**
     * @param label
     */


    setLabel(label) {
      if (label) {
        _classPrivateMethodGet(this, _getLabelEl, _getLabelEl2).call(this).innerHTML = label;
      }
    }

  }
  /**
   *
   */

  function _getLabelEl2() {
    let el = _classPrivateFieldGet(this, _labelEl);

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

  class ProgressBar {
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
    constructor(...options) {
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

      extend(this, ...options);
    }
    /**
     * @return {Element}
     */


    render() {
      let el = _classPrivateFieldGet(this, _element$3);

      if (el) {
        return el;
      }
      /**
       * @type {Array|String}
       */


      let content = [];

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


    get label() {
      const label = this.labelText ? this.labelText : '';
      return `${this.progress}% ${label}`;
    }
    /**
     * @return {number}
     */


    get progress() {
      return _classPrivateFieldGet(this, _progress);
    }
    /**
     * @param {number} value
     */


    set progress(value) {
      _classPrivateFieldSet(this, _progress, value);

      const element = this.render();
      element.setAttribute('aria-valuenow', value);

      if (element.childNodes.length > 0) {
        element.childNodes[0].textContent = this.label;
      } else {
        element.textContent = this.label;
      }

      element.style.width = `${value}%`;
    }

  }

  /**
   *
   */

  var _element$2 = /*#__PURE__*/new WeakMap();

  var _icon$2 = /*#__PURE__*/new WeakMap();

  var _size = /*#__PURE__*/new WeakMap();

  var _buildClassName$2 = /*#__PURE__*/new WeakSet();

  class IconT extends UIComponent {
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
    constructor(icon = false, size = false) {
      super();

      _buildClassName$2.add(this);

      _element$2.set(this, {
        writable: true,
        value: void 0
      });

      _icon$2.set(this, {
        writable: true,
        value: false
      });

      _size.set(this, {
        writable: true,
        value: false
      });

      _classPrivateFieldSet(this, _icon$2, icon);

      _classPrivateFieldSet(this, _size, size);
    }
    /**
     * @return {Element}
     */


    render() {
      let el = _classPrivateFieldGet(this, _element$2);

      if (el instanceof Element) {
        return el;
      }

      return _classPrivateFieldSet(this, _element$2, this.createEl('span', {
        className: _classPrivateMethodGet(this, _buildClassName$2, _buildClassName2).call(this)
      }, {}, createEl('span', {}, {}, ['s1', 's2', 's3'].map(function (className) {
        return createEl('span', {
          className: className
        });
      }))));
    }
    /**
     * @return {Array}
     */


    /**
     *
     * @param value
     */
    set icon(value) {
      if (value) {
        let icon = _classPrivateFieldGet(this, _icon$2);

        if (icon !== value) {
          const el = _classPrivateFieldGet(this, _element$2);

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


    set size(value) {
      if (value) {
        value = IconT.getClassName('size-' + value);

        const size = _classPrivateFieldGet(this, _size);

        if (size !== value) {
          const el = _classPrivateFieldGet(this, _element$2);

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


    set color(value) {
      $$('span[class^=s]', _classPrivateFieldGet(this, _element$2)).forEach(function (el) {
        el.style.backgroundColor = value;
      });
    }

  }

  function _buildClassName2() {
    let className = 'icon-t',
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

  /**
   *
   * @type {{iconHoverName: null, handler: null, size: null, data: {}, hiddenLabel: string, iconName: null, animatedClick: boolean, handlerTimoutDelay: number, iconSize: null, disabled: boolean, label: boolean, tagName: string}}
   */

  const Defaults$3 = {
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

  class Button extends UIComponent {
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
    constructor(_options2) {
      super();

      _addHandlers.add(this);

      _element$1.set(this, {
        writable: true,
        value: void 0
      });

      _options$2.set(this, {
        writable: true,
        value: Defaults$3
      });

      _icon$1.set(this, {
        writable: true,
        value: null
      });

      if (_options2 && typeof _options2 === 'object') {
        _classPrivateFieldSet(this, _options$2, extend({}, Defaults$3, _options2));
      }
    }
    /**
     * @return {Element}
     */


    render() {
      let el = _classPrivateFieldGet(this, _element$1);

      if (el instanceof Element) {
        return el;
      }

      const options = this.options,
            content = [];

      if (options.iconName) {
        const i = this.icon;
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
        const drop = createEl('p', {
          className: 'drop'
        });
        drop.addEventListener('animationend', function () {
          removeClass(this, 'animate');
        });
        content.push(drop);
      }

      el = _classPrivateFieldSet(this, _element$1, this.createEl(options.tagName, {
        className: _classStaticPrivateMethodGet(Button, Button, _buildClassName$1).call(Button, options)
      }, {}, content));
      this.disabled = options.disabled;

      _classPrivateMethodGet(this, _addHandlers, _addHandlers2).call(this, el, options);

      return el;
    }
    /**
     *
     * @param {Defaults} options
     * @return {Array}
     */


    /**
     * @param {Boolean} value
     */
    set disabled(value) {
      const options = this.options;

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


    get options() {
      return _classPrivateFieldGet(this, _options$2);
    }
    /**
     * @return {Element}
     */


    get element() {
      return this.render();
    }
    /**
     *
     * @return {IconT}
     */


    get icon() {
      let icon = _classPrivateFieldGet(this, _icon$1);

      if (icon instanceof IconT) {
        return icon;
      }

      return _classPrivateFieldSet(this, _icon$1, new IconT());
    }
    /**
     * @param element
     * @param options
     */


  }

  function _buildClassName$1(options) {
    let result = ['button'];

    if (options.size) {
      result.push('size-' + options.size);
    }

    if (options.hiddenLabel) {
      result.push('has-hidden');
    }

    return result;
  }

  function _addHandlers2(element, options) {
    element.addEventListener('click', event => {
      if (options.disabled) {
        event.stopImmediatePropagation();
        return false;
      }

      if (options.animatedClick) {
        _classStaticPrivateMethodGet(Button, Button, _animatedClick).call(Button, element);
      }
    });

    if (typeof options.handler === 'function') {
      if (options.handlerTimoutDelay > 0) {
        element.addEventListener('click', event => {
          setTimeout(() => options.handler.call(this, event), options.handlerTimoutDelay);
        });
      } else {
        element.addEventListener('click', options.handler.bind(this));
      }
    }

    if (options.iconHoverName) {
      element.addEventListener('mouseenter', () => {
        if (options.disabled === false) {
          this.icon.icon = options.iconHoverName;
        }
      });
      element.addEventListener('mouseleave', () => {
        this.icon.icon = options.iconName;
      });
    }
  }

  function _animatedClick(element) {
    const drop = $('.drop', element);

    if (drop) {
      const rect = getBoundingClientRect(element),
            x = event.pageX - rect.width / 2 - rect.left - window.scrollX,
            y = event.pageY - rect.height / 2 - rect.top - window.scrollY;
      drop.style.top = y + 'px';
      drop.style.left = x + 'px';
      addClass(drop, 'animate');
    }
  }

  Button.Defaults = Defaults$3;

  /**
   *
   * @type {{selectIcon: null, scaled: boolean, arrange: boolean, selectable: boolean}}
   */

  const Defaults$2 = {
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

  class ButtonsGroup extends UIComponent {
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
    constructor(options) {
      super();

      _bindSelectEvents.add(this);

      _defineProperty(this, "buttons", null);

      _options$1.set(this, {
        writable: true,
        value: Defaults$2
      });

      _element.set(this, {
        writable: true,
        value: void 0
      });

      const buttons = UIComponent.removeOptionsPtoperty('buttons', options, Array);

      _classPrivateFieldSet(this, _options$1, extend({}, Defaults$2, options));

      this.buttons = buttons.map(config => new Button(config));
    }
    /**
     * @return {Element}
     */


    render() {
      let el = _classPrivateFieldGet(this, _element);

      if (el instanceof Element) {
        return el;
      }

      _classPrivateFieldSet(this, _element, el = this.createEl('div', {
        className: _classStaticPrivateMethodGet(ButtonsGroup, ButtonsGroup, _buildClassName).call(ButtonsGroup, this.options)
      }, {}, this.buttons.map(btn => {
        return btn.render();
      })));

      if (this.options.selectable) {
        _classPrivateMethodGet(this, _bindSelectEvents, _bindSelectEvents2).call(this, el);
      }

      return el;
    }
    /**
     *
     * @param {Defaults} options
     * @return {Array}
     */


    /**
     * @return {Defaults}
     */
    get options() {
      return _classPrivateFieldGet(this, _options$1);
    }
    /**
     *
     * @param {boolean} value
     */


    set arrange(value) {
      const className = ButtonsGroup.getClassName('arrange');

      let el = _classPrivateFieldGet(this, _element),
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


    /**
     *
     * @param {Button|number} button
     */
    set selected(button) {
      const className = ButtonsGroup.getClassName('selected'),
            options = this.options;

      if (typeof button === "number") {
        button = this.buttons[button];
      }

      if (button instanceof Button) {
        this.buttons.forEach(btn => {
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

  }

  function _buildClassName(options) {
    let result = ['button-group'];

    if (options.arrange) {
      result.push('arrange');
    }

    if (options.scaled) {
      result.push('scaled');
    }

    return result;
  }

  function _bindSelectEvents2(element) {
    element.addEventListener('click', event => {
      const element = event.target.closest('.' + ButtonsGroup.getClassName('button'));
      this.selected = this.buttons.find(function (btn) {
        return btn.element === element;
      });
    });
    element.addEventListener('mouseenter', event => {
      this.$$('.button.selected', event.target).forEach(function (el) {
        setAttribute(el, 'data-group-selected', true);
        removeClass(el, ButtonsGroup.getClassName('selected'));
      });
    });
    element.addEventListener('mouseleave', event => {
      this.$$('.button[data-group-selected]', event.target).forEach(function (el) {
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

  class TaskStatus extends UIComponent {
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
    constructor(task, mapIcons, actions) {
      super();

      _elements$2.set(this, {
        writable: true,
        value: []
      });

      _defineProperty(this, "map", {
        icons: [],
        actions: []
      });

      _task.set(this, {
        writable: true,
        value: void 0
      });

      _icon.set(this, {
        writable: true,
        value: null
      });

      _text.set(this, {
        writable: true,
        value: null
      });

      _bGroup.set(this, {
        writable: true,
        value: null
      });

      _classPrivateFieldSet(this, _task, task);

      this.map.icons = mapIcons;
      this.map.actions = actions;

      _classPrivateFieldSet(this, _icon, new IconT('none', 'big'));

      _classPrivateFieldSet(this, _text, this.createEl('span', {
        className: 'status-text'
      }));

      actions.forEach(function (item) {
        extend(item, {
          data: {
            task: task
          }
        });
      });
    }
    /**
     *
     */


    render() {
      let els = _classPrivateFieldGet(this, _elements$2);

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


    refresh(status) {
      _classPrivateFieldGet(this, _text).innerHTML = _classPrivateFieldGet(this, _task).statusText;
      _classPrivateFieldGet(this, _icon).icon = this.map.icons[status];

      const buttonGroup = _classPrivateFieldGet(this, _bGroup);

      if (buttonGroup) {
        buttonGroup.buttons.forEach(button => {
          let enabledWith = button.options?.enabledWithStatus;

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
    }

  }

  const Defaults$1 = {
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
  const iconMap = {};
  iconMap[StatusesList.WAIT] = 'clock';
  iconMap[StatusesList.EXEC] = 'play';
  iconMap[StatusesList.ERROR] = 'warning';
  iconMap[StatusesList.DONE] = 'checked';
  /**
   *
   */

  var _elements$1 = /*#__PURE__*/new WeakMap();

  class Task extends TaskAbstract {
    constructor(...args) {
      super(...args);

      _elements$1.set(this, {
        writable: true,
        value: {}
      });
    }

    /**
     *
     * @protected
     * @return {Element}
     */
    _renderChild(elWrapper) {
      const elements = _classPrivateFieldGet(this, _elements$1),
            options = this.options,
            elDetail = elWrapper.appendChild(this.createEl('div', {
        className: 'detail'
      })),
            elStatusWrapper = elWrapper.appendChild(this.createEl('div', {
        className: 'status-wrapper'
      }));

      Object.keys(options.parts).forEach(part => {
        let owner = elDetail,
            component = null;

        if (part === 'progress-wrapper') {
          if (options.progress) {
            component = new Progress(options.progress);
          } else {
            delete options['progress-wrapper'];
          }
        } else if (part === 'status') {
          owner = elStatusWrapper;
          component = new TaskStatus(this, iconMap, options.actions);
        }

        elements[part] = owner.appendChild(this.createEl('div', {
          className: part
        }, {}));

        if (component && typeof component?.render === "function") {
          let content = component.render();

          if (content instanceof Element) {
            content = [content];
          }

          content.forEach(content => elements[part].append(content));

          _classStaticPrivateMethodGet(Task, Task, _setComponent).call(Task, elements[part], component);
        }
      });
    }
    /**
     *
     */


    refresh(response) {
      super.refresh(response, _classPrivateFieldGet(this, _elements$1));
    }
    /**
     * @return {Array}
     * @protected
     */


    _buildCssClass() {
      const classList = super._buildCssClass();

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


    /**
     * @param {element} el
     * @param {Number|Number[]}value
     * @private
     */
    _refreshProgress(el, value) {
      const progress = _classStaticPrivateMethodGet(Task, Task, _getComponent).call(Task, el);

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


    _refreshStatus(elStatus, value) {
      _classStaticPrivateMethodGet(Task, Task, _getComponent).call(Task, elStatus).refresh(value);
    }
    /**
     * @return {string}
     */


    getTitle() {
      const part = this.options.parts['title'];

      if (part) {
        return this[part] ?? '';
      }

      return '';
    }

  }

  function _setComponent(el, component) {
    if (!DomData.has(el)) {
      DomData.set(el, {});
    }

    const data = DomData.get(el);
    data.componet = component;
  }

  function _getComponent(el) {
    if (DomData.has(el)) {
      const data = DomData.get(el);

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

  function animate({
    timing,
    draw,
    duration
  }, onEnd) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1; // вычисление текущего состояния анимации

      let progress = timing(timeFraction);
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

  const timings = {
    linear(timeFraction) {
      return timeFraction;
    },

    quad(timeFraction) {
      return Math.pow(timeFraction, 2);
    },

    circ(timeFraction) {
      return 1 - Math.sin(Math.acos(timeFraction));
    },

    back(x = 1.5, timeFraction) {
      return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
    }

  };
  const animationsDraw = {
    'fadeOut': function (progress) {
      this.style.opacity = 1 - Math.round(progress * 100) / 100;
    },
    'fadeIn': function (progress) {
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

  function animateEl(el, animationConfig = {
    name: 'fadeOut',
    timing: timings.linear,
    duration: 500,
    delay: 0
  }) {
    let animation = Object.assign({}, animationConfig);

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
      setTimeout(() => animate(animation, () => {
        resolve(el);
      }), animation.delay);
    });
  }

  const Defaults = {
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

  class Manager extends UIComponent {
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
    constructor(_options2) {
      super();

      _removeEl.add(this);

      _taskFactory.add(this);

      _taskAnimation.add(this);

      _toggleEmptyText.add(this);

      _resolver.set(this, {
        writable: true,
        value: null
      });

      _elements.set(this, {
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

      _tasks.set(this, {
        writable: true,
        value: []
      });

      _options.set(this, {
        writable: true,
        value: {}
      });

      _classPrivateFieldGet(this, _elements).owner = UIComponent.removeOptionsPtoperty('element', _options2);
      let opt = extend({}, Manager.Defaults, _options2);

      _classPrivateFieldSet(this, _options, extend({}, {
        taskOptions: opt.taskClass.Defualts
      }, opt));

      _classPrivateFieldSet(this, _resolver, Resolver.factory(this));

      this.render();

      if (_options2.tasks && typeof _options2.tasks.length !== "undefined") {
        this.addTasks(_options2.tasks);
      } //check later added tasks,


      setTimeout(() => {
        if (this.getTasks().length === 0) {
          _classPrivateMethodGet(this, _toggleEmptyText, _toggleEmptyText2).call(this, 'show');
        }
      }, 200);
      this.trigger(Event.ready, {
        bubbles: true
      });
    }
    /**
     * Destructor of manager instance
     */


    destroy() {
      this.trigger(Event.destroy, {
        bubbles: true
      });

      _classPrivateFieldSet(this, _tasks, []);

      this.ownerElement.remove();
    }
    /**
     * @return {Object}
     */


    get options() {
      return _classPrivateFieldGet(this, _options);
    }
    /**
     * @param {string} type
     * @param {Object} props
     * @param {Object|null} detail
     * @return {boolean}
     */


    trigger(type, props = {}, detail) {
      if (typeof detail == "object") {
        props.detail = {};

        for (const [key, value] of Object.entries(detail)) {
          props.detail[key] = value;
        }
      }

      return this.ownerElement.dispatchEvent(new ManagerEvent(this, type, props));
    }
    /**
     * @return {boolean}
     */


    render() {
      const tasks = this.getTasks(StatusesList.SET_VISIBLE);

      if (tasks.length === 0 && this.options.renderOnEmpty === false) {
        return false;
      }

      const elements = _classPrivateFieldGet(this, _elements);

      if (elements.wrapper === null) {
        const options = this.options;
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

      tasks.forEach(task => task.refresh());
      return true;
    }
    /**
     *
     * @param {string} type
     * @return {Promise}
     */


    /**
     *
     * @param {Object[]}tasks
     * @param {boolean} resolve
     */
    addTasks(tasks, resolve = true) {
      if (Array.isArray(tasks) === false) {
        throw new Error('Not valid call. Argument tasks is not array type ');
      }

      _classPrivateMethodGet(this, _taskFactory, _taskFactory2).call(this, tasks);

      _classPrivateFieldSet(this, _tasks, _classPrivateFieldGet(this, _tasks).concat(tasks));

      tasks.forEach(task => this.trigger(Event.newTask, {
        bubbles: true
      }, {
        task: task
      }));

      _classPrivateMethodGet(this, _toggleEmptyText, _toggleEmptyText2).call(this, 'hide').then(() => {
        if (resolve) {
          this.resolver.resolve(manager => {
            if (manager.getTasks().length > 0) {
              manager.trigger(Event.fetchStart, {
                bubbles: true
              });
            }
          }, (manager, numberRequests) => {
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


    _updateTask(task, response) {
      if (task.progress !== response.progress || task.status !== response.status || task.text !== response.text || task.title !== response.title) {
        const isStatusChange = task.status !== response.status,
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
              const element = task.element;
              element.style.display = 'none';
              this.wrapperTasksElement.append(element);
              animateEl(element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task, 'show')).then(() => {
                this.trigger(Event.taskElementAppend, {
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


    removeTask(task) {
      if (typeof task === 'number') {
        task = this.findTask(task);
      }

      if (task instanceof TaskAbstract) {
        const id = this.getTasks().findIndex(t => t.id === task.id);

        if (id > -1) {
          _classPrivateFieldGet(this, _tasks).splice(id, 1);

          this.trigger(Event.taskRemoved, {
            bubbles: true
          }, {
            task: task
          });
          task.callCallback('remove');

          if (task.element.parentNode instanceof Element) {
            _classPrivateMethodGet(this, _removeEl, _removeEl2).call(this, task.element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task)).then(el => {
              task.callCallback('hide');
              this.trigger(Event.taskElementRemoved, {
                bubbles: true
              }, {
                task: task,
                element: el
              });

              if (_classPrivateFieldGet(this, _tasks).length === 0) {
                _classPrivateMethodGet(this, _toggleEmptyText, _toggleEmptyText2).call(this, 'show');
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


    /**
     * @param {number[]|menubar} statusFilter
     * @return {TaskAbstract[]}
     */
    getTasks(statusFilter) {
      let tasks = _classPrivateFieldGet(this, _tasks);

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


    findTask(id) {
      const task = this.getTasks().find(t => t.id === id);

      if (task instanceof TaskAbstract) {
        return task;
      }

      return null;
    }
    /**
     * @param {Object[]|number[]} tasks
     */


    /**
     * @return {Element}
     */
    get ownerElement() {
      return _classPrivateFieldGet(this, _elements).owner;
    }
    /**
     * @return {Element}
     */


    get wrapperElement() {
      return _classPrivateFieldGet(this, _elements).wrapper;
    }
    /**
     * @return {Element}
     */


    get wrapperTasksElement() {
      return _classPrivateFieldGet(this, _elements).wrapperTasks;
    }
    /**
     * @return {Resolver}
     */


    get resolver() {
      return _classPrivateFieldGet(this, _resolver);
    }

  }

  function _toggleEmptyText2(type) {
    const el = _classPrivateFieldGet(this, _elements).emptyText,
          visible = isVisible(el);

    if (isEl(el)) {
      if (visible && type === 'hide' || visible === false && type === 'show') {
        return animateEl(el, this.options[type + 'Animation']);
      }

      el.style.display = type === 'show' ? 'block' : 'none';
    }

    return Promise.resolve(el);
  }

  function _taskAnimation2(task, type = 'hide') {
    const options = this.options;

    if (typeof options.tasksAnimation[type][task.status] !== "undefined") {
      return options.tasksAnimation[type][task.status];
    } else {
      return options[type + 'Animation'];
    }
  }

  function _taskFactory2(tasks) {
    const TaskClass = this.options.taskClass;
    tasks.forEach((item, index) => {
      if (item instanceof TaskAbstract) {
        return;
      }

      if (typeof item === 'object' && typeof item.id !== undefined) {
        const id = item.id;
        delete item.id;
        tasks[index] = extend(new TaskClass(id, this), item);
      } else if (Number.parseInt(item) > 0) {
        tasks[index] = new TaskClass(item, this);
      } else {
        console.log('Delete not valid task item', item);
        tasks.splice(index, 1);
      }
    });
  }

  function _removeEl2(el, animation = this.options.hideAnimation) {
    if (animation !== false) {
      return animateEl(el, animation).then(el => {
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
    const manager = this.data('queue-manager'),
          methods = {
      /**
       *
       * @param  {Manager.Defaults} options
       */
      init: function (options) {
        this.each(function (index, item) {
          const $wrapper = $__default['default'](item);

          if ($wrapper.data('queueManager')) {
            return;
          }

          $wrapper.data('queueManager', new Manager($__default['default'].extend(true, {
            element: $wrapper.get(0)
          }, Manager.Defaults, options || {}, $wrapper.data('manager') || {})));
        });
        return this;
      },
      createButtons: function (options, $wrapper) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmJ1bmRsZV9lcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2pzL21peGlucy9jc3NDbGFzc05hbWUuanMiLCIuLi9zcmMvanMvdXRpbHMvZnVsbHNjcmVlbi1hcGkuanMiLCIuLi9zcmMvanMvdXRpbHMvb2JqLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2NvbXB1dGVkLXN0eWxlLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLmpzIiwiLi4vc3JjL2pzL3VJQ29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcyIsIi4uL3NyYy9qcy91dGlscy9leHRlbmQuanMiLCIuLi9zcmMvanMvc3RhdHVzZXNMaXN0LmpzIiwiLi4vc3JjL2pzL3Rhc2tBYnN0cmFjdC5qcyIsIi4uL3NyYy9qcy9yZXNvbHZlci5qcyIsIi4uL3NyYy9qcy9ldmVudHNMaXN0LmpzIiwiLi4vc3JjL2pzL21hbmFnZXJFdmVudC5qcyIsIi4uL3NyYy9qcy91dGlscy9ndWlkLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2RvbS1kYXRhLmpzIiwiLi4vc3JjL2pzL3Byb2dyZXNzLmpzIiwiLi4vc3JjL2pzL2ljb250LmpzIiwiLi4vc3JjL2pzL2J1dHRvbi5qcyIsIi4uL3NyYy9qcy9idXR0b25zR3JvdXAuanMiLCIuLi9zcmMvanMvdGFza1N0YXR1cy5qcyIsIi4uL3NyYy9qcy90YXNrLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2FuaW1hdGUuanMiLCIuLi9zcmMvanMvbWFuYWdlci5qcyIsIi4uL3NyYy9qcy9qcXVlcnkucGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENTU0NsYXNzTmFtZU1peGluICA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudWxsfHN0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc1ByZWZpeDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICAgZ2V0Q2xhc3NOYW1lOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NQcmVmaXg9PT0gbnVsbCB8fCBuYW1lLnN0YXJ0c1dpdGgodGhpcy5jbGFzc1ByZWZpeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUHJlZml4ICsgbmFtZTtcbiAgICB9LFxuXG59OyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqIEBtb2R1bGUgZnVsbHNjcmVlbi1hcGlcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG4vKipcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHNlZSBbU3BlY2lmaWNhdGlvbl17QGxpbmsgaHR0cHM6Ly9mdWxsc2NyZWVuLnNwZWMud2hhdHdnLm9yZ31cbiAqIEBzZWUgW01hcCBBcHByb2FjaCBGcm9tIFNjcmVlbmZ1bGwuanNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc31cbiAqL1xuY29uc3QgRnVsbHNjcmVlbkFwaSA9IHtcbiAgcHJlZml4ZWQ6IHRydWVcbn07XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbmNvbnN0IGFwaU1hcCA9IFtcbiAgW1xuICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICdmdWxsc2NyZWVuJ1xuICBdLFxuICAvLyBXZWJLaXRcbiAgW1xuICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxuICAgICctd2Via2l0LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNb3ppbGxhXG4gIFtcbiAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLFxuICAgICctbW96LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNaWNyb3NvZnRcbiAgW1xuICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAnTVNGdWxsc2NyZWVuRXJyb3InLFxuICAgICctbXMtZnVsbHNjcmVlbidcbiAgXVxuXTtcblxuY29uc3Qgc3BlY0FwaSA9IGFwaU1hcFswXTtcbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuICAvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cbiAgaWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuICAgIGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuICAgIEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuICB9XG5cbiAgRnVsbHNjcmVlbkFwaS5wcmVmaXhlZCA9IGJyb3dzZXJBcGlbMF0gIT09IHNwZWNBcGlbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG4iLCIvKipcbiAqIEBmaWxlIG9iai5qc1xuICogQG1vZHVsZSBvYmpcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6RWFjaENhbGxiYWNrXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXkgZm9yIHRoZSBvYmplY3QgdGhhdCBpcyBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXktdmFsdWUgZm9yIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXJcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6UmVkdWNlQ2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhY2N1bVxuICogICAgICAgIFRoZSB2YWx1ZSB0aGF0IGlzIGFjY3VtdWxhdGluZyBvdmVyIHRoZSByZWR1Y2UgbG9vcC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleSBmb3IgdGhlIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleS12YWx1ZSBmb3Igb2JqZWN0IHRoYXQgaXMgYmVpbmcgaXRlcmF0ZWQgb3ZlclxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogICAgICAgICBUaGUgbmV3IGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBrZXlzIG9mIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogICAgICAgIFRoZSBPYmplY3QgdG8gZ2V0IHRoZSBrZXlzIGZyb21cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqICAgICAgICAgQW4gYXJyYXkgb2YgdGhlIGtleXMgZnJvbSB0aGUgb2JqZWN0LiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoZVxuICogICAgICAgICBvYmplY3QgcGFzc2VkIGluIHdhcyBpbnZhbGlkIG9yIGhhZCBubyBrZXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG59O1xuXG4vKipcbiAqIEFycmF5LWxpa2UgaXRlcmF0aW9uIGZvciBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqICAgICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICpcbiAqIEBwYXJhbSB7b2JqOkVhY2hDYWxsYmFja30gZm5cbiAqICAgICAgICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGZvciBlYWNoIGtleSBpbiB0aGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaChvYmplY3QsIGZuKSB7XG4gIGtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiBmbihvYmplY3Rba2V5XSwga2V5KSk7XG59XG5cbi8qKlxuICogQXJyYXktbGlrZSByZWR1Y2UgZm9yIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogICAgICAgIFRoZSBPYmplY3QgdGhhdCB5b3Ugd2FudCB0byByZWR1Y2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqICAgICAgICAgQSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2gga2V5IGluIHRoZSBvYmplY3QuIEl0XG4gKiAgICAgICAgIHJlY2VpdmVzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBhbmQgdGhlIHBlci1pdGVyYXRpb24gdmFsdWUgYW5kIGtleVxuICogICAgICAgICBhcyBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gW2luaXRpYWwgPSAwXVxuICogICAgICAgIFN0YXJ0aW5nIHZhbHVlXG4gKlxuICogQHJldHVybiB7TWl4ZWR9XG4gKiAgICAgICAgIFRoZSBmaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGZuLCBpbml0aWFsID0gMCkge1xuICByZXR1cm4ga2V5cyhvYmplY3QpLnJlZHVjZSgoYWNjdW0sIGtleSkgPT4gZm4oYWNjdW0sIG9iamVjdFtrZXldLCBrZXkpLCBpbml0aWFsKTtcbn1cblxuLyoqXG4gKiBPYmplY3QuYXNzaWduLXN0eWxlIG9iamVjdCBzaGFsbG93IG1lcmdlL2V4dGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSAuLi5zb3VyY2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmIChPYmplY3QuYXNzaWduKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBhIHZhbHVlIGlzIGFuIG9iamVjdCBvZiBhbnkga2luZCAtIGluY2x1ZGluZyBET00gbm9kZXMsXG4gKiBhcnJheXMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGV0Yy4gTm90IGZ1bmN0aW9ucywgdGhvdWdoLlxuICpcbiAqIFRoaXMgYXZvaWRzIHRoZSBnb3RjaGEgd2hlcmUgdXNpbmcgYHR5cGVvZmAgb24gYSBgbnVsbGAgdmFsdWVcbiAqIHJlc3VsdHMgaW4gYCdvYmplY3QnYC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGFwcGVhcnMgdG8gYmUgYSBcInBsYWluXCIgb2JqZWN0IC0gdGhhdCBpcywgYVxuICogZGlyZWN0IGluc3RhbmNlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21wdXRlZC1zdHlsZS5qc1xuICogQG1vZHVsZSBjb21wdXRlZC1zdHlsZVxuICovXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEEgc2FmZSBnZXRDb21wdXRlZFN0eWxlLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gRmlyZWZveCwgaWYgdGhlIHBsYXllciBpcyBsb2FkZWQgaW4gYW4gaWZyYW1lIHdpdGhcbiAqIGBkaXNwbGF5Om5vbmVgLCB0aGVuIGBnZXRDb21wdXRlZFN0eWxlYCByZXR1cm5zIGBudWxsYCwgc28sIHdlIGRvIGFcbiAqIG51bGwtY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHBsYXllciBkb2Vzbid0IGJyZWFrIGluIHRoZXNlIGNhc2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtICAgIHtFbGVtZW50fSBlbFxuICogICAgICAgICAgIFRoZSBlbGVtZW50IHlvdSB3YW50IHRoZSBjb21wdXRlZCBzdHlsZSBvZlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBwcm9wXG4gKiAgICAgICAgICAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnRcbiAqXG4gKiBAc2VlICAgICAgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWwsIHByb3ApIHtcbiAgaWYgKCFlbCB8fCAhcHJvcCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZVZhbHVlID8gY29tcHV0ZWRTdHlsZVZhbHVlLmdldFByb3BlcnR5VmFsdWUocHJvcCkgfHwgY29tcHV0ZWRTdHlsZVZhbHVlW3Byb3BdIDogJyc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVkU3R5bGU7XG4iLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqIEBtb2R1bGUgYnJvd3NlclxuICovXG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5jb25zdCB3ZWJraXRWZXJzaW9uTWFwID0gKC9BcHBsZVdlYktpdFxcLyhbXFxkLl0rKS9pKS5leGVjKFVTRVJfQUdFTlQpO1xuY29uc3QgYXBwbGVXZWJraXRWZXJzaW9uID0gd2Via2l0VmVyc2lvbk1hcCA/IHBhcnNlRmxvYXQod2Via2l0VmVyc2lvbk1hcC5wb3AoKSkgOiBudWxsO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIGFuIGlQb2QuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgaU9TIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBJT1NfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbWF0Y2ggPSBVU0VSX0FHRU5ULm1hdGNoKC9PUyAoXFxkKylfL2kpO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn0oKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbiBBbmRyb2lkIGRldmljZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBBbmRyb2lkIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xudWxsfVxuICovXG5leHBvcnQgY29uc3QgQU5EUk9JRF9WRVJTSU9OID0gKGZ1bmN0aW9uKCkge1xuICAvLyBUaGlzIG1hdGNoZXMgQW5kcm9pZCBNYWpvci5NaW5vci5QYXRjaCB2ZXJzaW9uc1xuICAvLyBBTkRST0lEX1ZFUlNJT04gaXMgTWFqb3IuTWlub3IgYXMgYSBOdW1iZXIsIGlmIE1pbm9yIGlzbid0IGF2YWlsYWJsZSwgdGhlbiBvbmx5IE1ham9yIGlzIHJldHVybmVkXG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvQW5kcm9pZCAoXFxkKykoPzpcXC4oXFxkKykpPyg/OlxcLihcXGQrKSkqL2kpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMV0gJiYgcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIGNvbnN0IG1pbm9yID0gbWF0Y2hbMl0gJiYgcGFyc2VGbG9hdChtYXRjaFsyXSk7XG5cbiAgaWYgKG1ham9yICYmIG1pbm9yKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0gKyAnLicgKyBtYXRjaFsyXSk7XG4gIH0gZWxzZSBpZiAobWFqb3IpIHtcbiAgICByZXR1cm4gbWFqb3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBuYXRpdmUgQW5kcm9pZCBicm93c2VyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19OQVRJVkVfQU5EUk9JRCA9IElTX0FORFJPSUQgJiYgQU5EUk9JRF9WRVJTSU9OIDwgNSAmJiBhcHBsZVdlYmtpdFZlcnNpb24gPCA1Mzc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBNb3ppbGxhIEZpcmVmb3guXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0ZJUkVGT1ggPSAoL0ZpcmVmb3gvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIE1pY3Jvc29mdCBFZGdlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19FREdFID0gKC9FZGcvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIEdvb2dsZSBDaHJvbWUuXG4gKlxuICogVGhpcyB3aWxsIGFsc28gYmUgYHRydWVgIGZvciBDaHJvbWUgb24gaU9TLCB3aGljaCB3aWxsIGhhdmUgZGlmZmVyZW50IHN1cHBvcnRcbiAqIGFzIGl0IGlzIGFjdHVhbGx5IFNhZmFyaSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gIUlTX0VER0UgJiYgKCgvQ2hyb21lL2kpLnRlc3QoVVNFUl9BR0VOVCkgfHwgKC9DcmlPUy9pKS50ZXN0KFVTRVJfQUdFTlQpKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgR29vZ2xlIENocm9tZSB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgQ0hST01FX1ZFUlNJT04gPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvKENocm9tZXxDcmlPUylcXC8oXFxkKykvKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsyXSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBJbnRlcm5ldCBFeHBsb3JlciB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgSUVfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzdWx0ID0gKC9NU0lFXFxzKFxcZCspXFwuXFxkLykuZXhlYyhVU0VSX0FHRU5UKTtcbiAgbGV0IHZlcnNpb24gPSByZXN1bHQgJiYgcGFyc2VGbG9hdChyZXN1bHRbMV0pO1xuXG4gIGlmICghdmVyc2lvbiAmJiAoL1RyaWRlbnRcXC83LjAvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAoL3J2OjExLjAvKS50ZXN0KFVTRVJfQUdFTlQpKSB7XG4gICAgLy8gSUUgMTEgaGFzIGEgZGlmZmVyZW50IHVzZXIgYWdlbnQgc3RyaW5nIHRoYW4gb3RoZXIgSUUgdmVyc2lvbnNcbiAgICB2ZXJzaW9uID0gMTEuMDtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uO1xufSgpKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGRlc2t0b3AgU2FmYXJpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSAoL1NhZmFyaS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19DSFJPTUUgJiYgIUlTX0FORFJPSUQgJiYgIUlTX0VER0U7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhIFdpbmRvd3MgbWFjaGluZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfV0lORE9XUyA9ICgvV2luZG93cy9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIHRvdWNoLWVuYWJsZWQuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRPVUNIX0VOQUJMRUQgPSBCb29sZWFuKERvbS5pc1JlYWwoKSAmJiAoXG4gICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8XG4gIHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIHdpbmRvdy5kb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBhZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpIHx8XG4gIChJU19TQUZBUkkgJiYgVE9VQ0hfRU5BQkxFRCAmJiAhKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBob25lLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGlPUyBkZXZpY2UuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbnkgZmxhdm9yIG9mIFNhZmFyaSAtIGluY2x1ZGluZyBpT1MuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0FOWV9TQUZBUkkgPSAoSVNfU0FGQVJJIHx8IElTX0lPUykgJiYgIUlTX0NIUk9NRTtcbiIsIi8qKlxuICogQGZpbGUgZG9tLmpzXG4gKiBAbW9kdWxlIGRvbVxuICovXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgZnMgZnJvbSAnLi9mdWxsc2NyZWVuLWFwaSc7XG5cbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vb2JqJztcbmltcG9ydCBjb21wdXRlZFN0eWxlIGZyb20gJy4vY29tcHV0ZWQtc3R5bGUnO1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICcuL2Jyb3dzZXInO1xuXG4vKipcbiAqIERldGVjdCBpZiBhIHZhbHVlIGlzIGEgc3RyaW5nIHdpdGggYW55IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiAgICAgICAgIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIG5vbi1ibGFuaywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICovXG5mdW5jdGlvbiBpc05vbkJsYW5rU3RyaW5nKHN0cikge1xuICAgIC8vIHdlIHVzZSBzdHIudHJpbSBhcyBpdCB3aWxsIHRyaW0gYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGZyb20gdGhlIGZyb250IG9yIGJhY2sgb2Ygbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycy4gYWthXG4gICAgLy8gQW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIHN0aWxsIGNvbnRhaW4gdGhlbSBhZnRlciBgdHJpbWAgYnV0IHdoaXRlc3BhY2Ugb25seSBzdHJpbmdzXG4gICAgLy8gd2lsbCBoYXZlIGEgbGVuZ3RoIG9mIDAsIGZhaWxpbmcgdGhpcyBjaGVjay5cbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgQm9vbGVhbihzdHIudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaGFzIHdoaXRlc3BhY2UuIFRoaXMgaXMgdXNlZCBieVxuICogY2xhc3MgbWV0aG9kcyB0byBiZSByZWxhdGl2ZWx5IGNvbnNpc3RlbnQgd2l0aCB0aGUgY2xhc3NMaXN0IEFQSS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqICAgICAgICAgVGhlIHN0cmluZyB0byBjaGVjayBmb3Igd2hpdGVzcGFjZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIHRoZXJlIGlzIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgLy8gc3RyLmluZGV4T2YgaW5zdGVhZCBvZiByZWdleCBiZWNhdXNlIHN0ci5pbmRleE9mIGlzIGZhc3RlciBwZXJmb3JtYW5jZSB3aXNlLlxuICAgIGlmIChzdHIuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzcyBoYXMgaWxsZWdhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvZHVjZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgYSBjbGFzc05hbWUgd2l0aGluIGFuIGVsZW1lbnRzIGNsYXNzTmFtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVcbiAqICAgICAgICAgVGhlIGNsYXNzTmFtZSB0byBnZW5lcmF0ZSB0aGUgUmVnRXhwIGZvci5cbiAqXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiAgICAgICAgIFRoZSBSZWdFeHAgdGhhdCB3aWxsIGNoZWNrIGZvciBhIHNwZWNpZmljIGBjbGFzc05hbWVgIGluIGFuIGVsZW1lbnRzXG4gKiAgICAgICAgIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY2xhc3NSZWdFeHAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKCR8XFxcXHMpJyk7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBET00gaW50ZXJmYWNlIGFwcGVhcnMgdG8gYmUgcmVhbCAoaS5lLiBub3Qgc2ltdWxhdGVkKS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGFwcGVhcnMgdG8gYmUgcmVhbCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWwoKSB7XG4gICAgLy8gQm90aCBkb2N1bWVudCBhbmQgd2luZG93IHdpbGwgbmV2ZXIgYmUgdW5kZWZpbmVkIHRoYW5rcyB0byBgZ2xvYmFsYC5cbiAgICByZXR1cm4gZG9jdW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzLCB2aWEgZHVjayB0eXBpbmcsIHdoZXRoZXIgb3Igbm90IGEgdmFsdWUgaXMgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICAgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIERPTSBlbGVtZW50LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWwodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZSwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luRnJhbWUoKSB7XG5cbiAgICAvLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGhlcmUgYmVjYXVzZSBTYWZhcmkgd2lsbCB0aHJvdyBlcnJvcnMgd2hlbiBhdHRlbXB0aW5nXG4gICAgLy8gdG8gZ2V0IGVpdGhlciBgcGFyZW50YCBvciBgc2VsZmBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGY7XG4gICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBmdW5jdGlvbnMgdG8gcXVlcnkgdGhlIERPTSB1c2luZyBhIGdpdmVuIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge3N0cmluZ30gbWV0aG9kXG4gKiAgICAgICAgICBUaGUgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgcXVlcnkgd2l0aC5cbiAqXG4gKiBAcmV0dXJuICB7RnVuY3Rpb259XG4gKiAgICAgICAgICBUaGUgcXVlcnkgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJpZXIobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBpZiAoIWlzTm9uQmxhbmtTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbbWV0aG9kXShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25CbGFua1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSBpc0VsKGNvbnRleHQpID8gY29udGV4dCA6IGRvY3VtZW50O1xuXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXSAmJiBjdHhbbWV0aG9kXShzZWxlY3Rvcik7XG4gICAgfTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCBhbmQgYXBwbGllcyBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmQgaW5zZXJ0cyBjb250ZW50LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWU9J2RpdiddXG4gKiAgICAgICAgIE5hbWUgb2YgdGFnIHRvIGJlIGNyZWF0ZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbcHJvcGVydGllcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBwcm9wZXJ0aWVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbYXR0cmlidXRlcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yfSBjb250ZW50XG4gKiAgICAgICAgQSBjb250ZW50IGRlc2NyaXB0b3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcGVydGllc1twcm9wTmFtZV07XG5cbiAgICAgICAgLy8gU2VlICMyMTc2XG4gICAgICAgIC8vIFdlIG9yaWdpbmFsbHkgd2VyZSBhY2NlcHRpbmcgYm90aCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGluIHRoZVxuICAgICAgICAvLyBzYW1lIG9iamVjdCwgYnV0IHRoYXQgZG9lc24ndCB3b3JrIHNvIHdlbGwuXG4gICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKCdhcmlhLScpICE9PSAtMSB8fCBwcm9wTmFtZSA9PT0gJ3JvbGUnIHx8IHByb3BOYW1lID09PSAndHlwZScpIHtcblxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCB2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbFtzdHlsZU5hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0ZXh0Q29udGVudCBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgZXZlcnl3aGVyZSBhbmQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBtZXRob2QgZm9yIGl0LlxuICAgICAgICAgICAgdGV4dENvbnRlbnQoZWwsIHZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxbcHJvcE5hbWVdICE9PSB2YWwgfHwgcHJvcE5hbWUgPT09ICd0YWJJbmRleCcpIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5qZWN0cyB0ZXh0IGludG8gYW4gZWxlbWVudCwgcmVwbGFjaW5nIGFueSBleGlzdGluZyBjb250ZW50cyBlbnRpcmVseS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBhZGQgdGV4dCBjb250ZW50IGludG9cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcbiAqICAgICAgICAgVGhlIHRleHQgY29udGVudCB0byBhZGQuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBhZGRlZCB0ZXh0IGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29udGVudChlbCwgdGV4dCkge1xuICAgIGlmICh0eXBlb2YgZWwudGV4dENvbnRlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIG5vZGUgb2YgYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGRcbiAqICAgICAgICBFbGVtZW50IHRvIGluc2VydFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gKiAgICAgICAgRWxlbWVudCB0byBpbnNlcnQgY2hpbGQgaW50b1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRvKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIEVsZW1lbnQgdG8gY2hlY2tcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9DaGVja1xuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGNoZWNrIGZvclxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIGBjbGFzc1RvQ2hlY2tgIGhhcyB3aGl0ZSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzVG9DaGVjaykge1xuICAgIHRocm93SWZXaGl0ZXNwYWNlKGNsYXNzVG9DaGVjayk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NSZWdFeHAoY2xhc3NUb0NoZWNrKS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIGFkZCBjbGFzcyBuYW1lIHRvLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NUb0FkZFxuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGFkZC5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgYWRkZWQgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9BZGQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuXG4gICAgICAgIC8vIERvbid0IG5lZWQgdG8gYHRocm93SWZXaGl0ZXNwYWNlYCBoZXJlIGJlY2F1c2UgYGhhc0VsQ2xhc3NgIHdpbGwgZG8gaXRcbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgY2xhc3NMaXN0IG5vdCBiZWluZyBzdXBwb3J0ZWQuXG4gICAgfSBlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NUb0FkZCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc1RvQWRkKS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIHJlbW92ZSBhIGNsYXNzIG5hbWUgZnJvbS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9SZW1vdmVcbiAqICAgICAgICAgQ2xhc3MgbmFtZSB0byByZW1vdmVcbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCBjbGFzcyBuYW1lIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc1RvUmVtb3ZlKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0lmV2hpdGVzcGFjZShjbGFzc1RvUmVtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMgIT09IGNsYXNzVG9SZW1vdmU7XG4gICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBUaGUgY2FsbGJhY2sgZGVmaW5pdGlvbiBmb3IgdG9nZ2xlQ2xhc3MuXG4gKlxuICogQGNhbGxiYWNrIG1vZHVsZTpkb21+UHJlZGljYXRlQ2FsbGJhY2tcbiAqIEBwYXJhbSAgICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICAgIFRoZSBET00gZWxlbWVudCBvZiB0aGUgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgICAgVGhlIGBjbGFzc05hbWVgIHRoYXQgd2FudHMgdG8gYmUgdG9nZ2xlZFxuICpcbiAqIEByZXR1cm4gICB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKiAgICAgICAgICAgSWYgYHRydWVgIGlzIHJldHVybmVkLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gKiAgICAgICAgICAgYGVsZW1lbnRgLiBJZiBgZmFsc2VgLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgcmVtb3ZlZCBmcm9tXG4gKiAgICAgICAgICAgdGhlIGBlbGVtZW50YC4gSWYgYHVuZGVmaW5lZGAsIHRoZSBjYWxsYmFjayB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBuYW1lIHRvL2Zyb20gYW4gZWxlbWVudCBkZXBlbmRpbmcgb24gYW4gb3B0aW9uYWxcbiAqIGNvbmRpdGlvbiBvciB0aGUgcHJlc2VuY2UvYWJzZW5jZSBvZiB0aGUgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRvIHRvZ2dsZSBhIGNsYXNzIG5hbWUgb24uXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgIFRoZSBjbGFzcyB0aGF0IHNob3VsZCBiZSB0b2dnbGVkLlxuICpcbiAqIEBwYXJhbSAge2Jvb2xlYW58bW9kdWxlOmRvbX5QcmVkaWNhdGVDYWxsYmFja30gW3ByZWRpY2F0ZV1cbiAqICAgICAgICAgU2VlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHtAbGluayBtb2R1bGU6ZG9tflByZWRpY2F0ZUNhbGxiYWNrfVxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggYSBjbGFzcyB0aGF0IGhhcyBiZWVuIHRvZ2dsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlLCBwcmVkaWNhdGUpIHtcblxuICAgIC8vIFRoaXMgQ0FOTk9UIHVzZSBgY2xhc3NMaXN0YCBpbnRlcm5hbGx5IGJlY2F1c2UgSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgdG8gdGhlIGBjbGFzc0xpc3QudG9nZ2xlKClgIG1ldGhvZCEgV2hpY2ggaXMgZmluZSBiZWNhdXNlXG4gICAgLy8gYGNsYXNzTGlzdGAgd2lsbCBiZSB1c2VkIGJ5IHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBoYXMgPSBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcblxuICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZShlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9ICFoYXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5lY2Vzc2FyeSBjbGFzcyBvcGVyYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGVcbiAgICAvLyBlbGVtZW50LCBubyBhY3Rpb24gaXMgcmVxdWlyZWQuXG4gICAgaWYgKHByZWRpY2F0ZSA9PT0gaGFzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKipcbiAqIEFwcGx5IGF0dHJpYnV0ZXMgdG8gYW4gSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqICAgICAgICBFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGVzIHRvLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqICAgICAgICBBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYXR0clZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBhdHRyVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCAoYXR0clZhbHVlID09PSB0cnVlID8gJycgOiBhdHRyVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBhbiBlbGVtZW50J3MgYXR0cmlidXRlIHZhbHVlcywgYXMgZGVmaW5lZCBvbiB0aGUgSFRNTCB0YWcuXG4gKlxuICogQXR0cmlidXRlcyBhcmUgbm90IHRoZSBzYW1lIGFzIHByb3BlcnRpZXMuIFRoZXkncmUgZGVmaW5lZCBvbiB0aGUgdGFnXG4gKiBvciB3aXRoIHNldEF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSB0YWdcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCB0YWcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIEFsbCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50LiBCb29sZWFuIGF0dHJpYnV0ZXMgd2lsbCBiZSBgdHJ1ZWAgb3JcbiAqICAgICAgICAgYGZhbHNlYCwgb3RoZXJzIHdpbGwgYmUgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXModGFnKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICAvLyBrbm93biBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAvLyB3ZSBjYW4gY2hlY2sgZm9yIG1hdGNoaW5nIGJvb2xlYW4gcHJvcGVydGllcywgYnV0IG5vdCBhbGwgYnJvd3NlcnNcbiAgICAvLyBhbmQgbm90IGFsbCB0YWdzIGtub3cgYWJvdXQgdGhlc2UgYXR0cmlidXRlcywgc28sIHdlIHN0aWxsIHdhbnQgdG8gY2hlY2sgdGhlbSBtYW51YWxseVxuICAgIGNvbnN0IGtub3duQm9vbGVhbnMgPSAnLCcgKyAnYXV0b3BsYXksY29udHJvbHMscGxheXNpbmxpbmUsbG9vcCxtdXRlZCxkZWZhdWx0LGRlZmF1bHRNdXRlZCcgKyAnLCc7XG5cbiAgICBpZiAodGFnICYmIHRhZy5hdHRyaWJ1dGVzICYmIHRhZy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB0YWcuYXR0cmlidXRlcztcblxuICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBrbm93biBib29sZWFuc1xuICAgICAgICAgICAgLy8gdGhlIG1hdGNoaW5nIGVsZW1lbnQgcHJvcGVydHkgd2lsbCByZXR1cm4gYSB2YWx1ZSBmb3IgdHlwZW9mXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhZ1thdHRyTmFtZV0gPT09ICdib29sZWFuJyB8fCBrbm93bkJvb2xlYW5zLmluZGV4T2YoJywnICsgYXR0ck5hbWUgKyAnLCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSBvZiBhbiBpbmNsdWRlZCBib29sZWFuIGF0dHJpYnV0ZSBpcyB0eXBpY2FsbHkgYW4gZW1wdHlcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgKCcnKSB3aGljaCB3b3VsZCBlcXVhbCBmYWxzZSBpZiB3ZSBqdXN0IGNoZWNrIGZvciBhIGZhbHNlIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gZG9uJ3Qgd2FudCBzdXBwb3J0IGJhZCBjb2RlIGxpa2UgYXV0b3BsYXk9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ialthdHRyTmFtZV0gPSBhdHRyVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBnZXQgdGhlIHZhbHVlIG9mLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgVmFsdWUgdG8gc2V0IHRoZSBhdHRyaWJ1dGUgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYmxvY2sgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFR1cm4gb2ZmIHRleHQgc2VsZWN0aW9uIGJsb2NraW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5ibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBJZGVudGljYWwgdG8gdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBmdW5jdGlvbiwgYnV0IGVuc3VyZXMgdGhhdFxuICogdGhlIG1ldGhvZCBpcyBzdXBwb3J0ZWQgYXQgYWxsIChpdCBpcyBpbiBhbGwgYnJvd3NlcnMgd2UgY2xhaW0gdG8gc3VwcG9ydClcbiAqIGFuZCB0aGF0IHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYmVmb3JlIGNvbnRpbnVpbmcuXG4gKlxuICogVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGFsc28gc2hpbXMgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHByb3ZpZGVkIGJ5IHNvbWVcbiAqIG9sZGVyIGJyb3dzZXJzIChuYW1lbHksIElFOCkuXG4gKlxuICogQWRkaXRpb25hbGx5LCBzb21lIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGFkZGluZyBwcm9wZXJ0aWVzIHRvIGFcbiAqIGBDbGllbnRSZWN0YC9gRE9NUmVjdGAgb2JqZWN0OyBzbywgd2Ugc2hhbGxvdy1jb3B5IGl0IHdpdGggdGhlIHN0YW5kYXJkXG4gKiBwcm9wZXJ0aWVzIChleGNlcHQgYHhgIGFuZCBgeWAgd2hpY2ggYXJlIG5vdCB3aWRlbHkgc3VwcG9ydGVkKS4gVGhpcyBoZWxwc1xuICogYXZvaWQgaW1wbGVtZW50YXRpb25zIHdoZXJlIGtleXMgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgd2hvc2UgYENsaWVudFJlY3RgIHdlIHdhbnQgdG8gY2FsY3VsYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKiAgICAgICAgIEFsd2F5cyByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IC0gb3IgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgWydib3R0b20nLCAnaGVpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ3dpZHRoJ10uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGlmIChyZWN0W2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSByZWN0W2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUoZWwsICdoZWlnaHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC53aWR0aCkge1xuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlKGVsLCAnd2lkdGgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwb3NpdGlvbiBvZiBhIERPTSBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tflBvc2l0aW9uXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlZnRcbiAqICAgICAgICAgICBQaXhlbHMgdG8gdGhlIGxlZnQuXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogICAgICAgICAgIFBpeGVscyBmcm9tIHRoZSB0b3AuXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqXG4gKiBVc2VzIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIHRlY2huaXF1ZSBmcm9tIEpvaG4gUmVzaWcuXG4gKlxuICogQHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvZ2V0Ym91bmRpbmdjbGllbnRyZWN0LWlzLWF3ZXNvbWUvXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCBvZmZzZXQuXG4gKlxuICogQHJldHVybiB7bW9kdWxlOmRvbX5Qb3NpdGlvbn1cbiAqICAgICAgICAgVGhlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQb3NpdGlvbihlbCkge1xuICAgIGlmICghZWwgfHwgKGVsICYmICFlbC5vZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuXG4gICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCAmJiBlbCAhPT0gZG9jdW1lbnRbZnMuZnVsbHNjcmVlbkVsZW1lbnRdKSB7XG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcblxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0LFxuICAgICAgICB0b3AsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgYSBET00gZWxlbWVudCBvciBtb3VzZSBwb2ludGVyLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tfkNvb3JkaW5hdGVzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHhcbiAqICAgICAgICAgICB4IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlcbiAqICAgICAgICAgICB5IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gd2l0aGluIGFuIGVsZW1lbnQuXG4gKlxuICogVGhlIGJhc2Ugb24gdGhlIGNvb3JkaW5hdGVzIGFyZSB0aGUgYm90dG9tIGxlZnQgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBvbiB3aGljaCB0byBnZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gb24uXG4gKlxuICogQHBhcmFtICB7RXZlbnRUYXJnZXR+RXZlbnR9IGV2ZW50XG4gKiAgICAgICAgIEV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6ZG9tfkNvb3JkaW5hdGVzfVxuICogICAgICAgICBBIGNvb3JkaW5hdGVzIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBtb3VzZSBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZWwsIGV2ZW50KSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbDtcblxuICAgICAgICB3aGlsZSAoaXRlbSAmJiBpdGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdodG1sJykge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZShpdGVtLCAndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgICAgIGlmICgvXm1hdHJpeC8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdHJhbnNmb3JtLnNsaWNlKDcsIC0xKS5zcGxpdCgvLFxccy8pLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZC54ICs9IHZhbHVlc1s0XTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXm1hdHJpeDNkLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sXFxzLykubWFwKE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnggKz0gdmFsdWVzWzEyXTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzEzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0ge307XG4gICAgY29uc3QgYm94VGFyZ2V0ID0gZmluZFBvc2l0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYm94ID0gZmluZFBvc2l0aW9uKGVsKTtcbiAgICBjb25zdCBib3hXID0gYm94LndpZHRoO1xuICAgIGNvbnN0IGJveEggPSBib3guaGVpZ2h0O1xuICAgIGxldCBvZmZzZXRZID0gZXZlbnQub2Zmc2V0WSAtIChib3gudG9wIC0gYm94VGFyZ2V0LnRvcCk7XG4gICAgbGV0IG9mZnNldFggPSBldmVudC5vZmZzZXRYIC0gKGJveC5sZWZ0IC0gYm94VGFyZ2V0LmxlZnQpO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIG9mZnNldFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGJveC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyBib3gudG9wO1xuICAgICAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgICAgIG9mZnNldFggLT0gdHJhbnNsYXRlZC54O1xuICAgICAgICAgICAgb2Zmc2V0WSAtPSB0cmFuc2xhdGVkLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvbi55ID0gKDEgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvZmZzZXRZIC8gYm94SCkpKTtcbiAgICBwb3NpdGlvbi54ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb2Zmc2V0WCAvIGJveFcpKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcywgdmlhIGR1Y2sgdHlwaW5nLCB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSAge01peGVkfSB2YWx1ZVxuICogICAgICAgICBDaGVjayBpZiB0aGlzIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIHRleHQgbm9kZSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMztcbn1cblxuXG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCl7XG4gICAgaWYgKGlzRWwoZWwpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9wYWNpdHkgPSBlbC5zdHlsZT8ub3BhY2l0eSAhPT0gJycgPyBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpIDogMTtcblxuICAgIGlmIChvcGFjaXR5ID09PSAwIHx8IGNvbXB1dGVkU3R5bGUoZWwsICd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISEoIGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNzc0NsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoQ2xhc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcywgY29tcGFyZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMuc3RhcnRzV2l0aChzZWFyY2hDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn0pIHtcblxuICAgIGxldCBleGlzdCA9ICcnO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoZXhpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBleGlzdCA9IGNvbXBhcmUoYyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChleGlzdCAhPT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKGV4aXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGV4aXN0KTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcylcbiAgICB9XG59XG5cbi8qKlxuICogRW1wdGllcyB0aGUgY29udGVudHMgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBlbXB0eSBjaGlsZHJlbiBmcm9tXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBubyBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlFbChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIG1peGVkIHZhbHVlIHRoYXQgZGVzY3JpYmVzIGNvbnRlbnQgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NXG4gKiB2aWEgc29tZSBtZXRob2QuIEl0IGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICpcbiAqIFR5cGUgICAgICAgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLVxuICogYHN0cmluZ2AgICB8IFRoZSB2YWx1ZSB3aWxsIGJlIG5vcm1hbGl6ZWQgaW50byBhIHRleHQgbm9kZS5cbiAqIGBFbGVtZW50YCAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBUZXh0Tm9kZWAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBBcnJheWAgICAgfCBBIG9uZS1kaW1lbnNpb25hbCBhcnJheSBvZiBzdHJpbmdzLCBlbGVtZW50cywgdGV4dCBub2Rlcywgb3IgZnVuY3Rpb25zLiBUaGVzZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgb3IgdGV4dCBub2RlIChhbnkgb3RoZXIgcmV0dXJuIHZhbHVlLCBsaWtlIGFuIGFycmF5LCB3aWxsIGJlIGlnbm9yZWQpLlxuICogYEZ1bmN0aW9uYCB8IEEgZnVuY3Rpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgdGV4dCBub2RlLCBvciBhcnJheSAtIGFueSBvZiB0aGUgb3RoZXIgcG9zc2libGUgdmFsdWVzIGRlc2NyaWJlZCBhYm92ZS4gVGhpcyBtZWFucyB0aGF0IGEgY29udGVudCBkZXNjcmlwdG9yIGNvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZ1bmN0aW9ucywgYnV0IHRob3NlIHNlY29uZC1sZXZlbCBmdW5jdGlvbnMgbXVzdCByZXR1cm4gc3RyaW5ncywgZWxlbWVudHMsIG9yIHRleHQgbm9kZXMuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ3xFbGVtZW50fFRleHROb2RlfEFycmF5fEZ1bmN0aW9ufSBtb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yXG4gKi9cblxuLyoqXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgZm9yIGV2ZW50dWFsIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gKlxuICogVGhpcyBhbGxvd3MgYSB3aWRlIHJhbmdlIG9mIGNvbnRlbnQgZGVmaW5pdGlvbiBtZXRob2RzLCBidXQgaGVscHMgcHJvdGVjdFxuICogZnJvbSBmYWxsaW5nIGludG8gdGhlIHRyYXAgb2Ygc2ltcGx5IHdyaXRpbmcgdG8gYGlubmVySFRNTGAsIHdoaWNoIGNvdWxkXG4gKiBiZSBhbiBYU1MgY29uY2Vybi5cbiAqXG4gKiBUaGUgY29udGVudCBmb3IgYW4gZWxlbWVudCBjYW4gYmUgcGFzc2VkIGluIG11bHRpcGxlIHR5cGVzIGFuZFxuICogY29tYmluYXRpb25zLCB3aG9zZSBiZWhhdmlvciBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogICAgICAgICBBbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCB3YXMgcGFzc2VkIGluLCBub3JtYWxpemVkIHRvIGFuIGFycmF5IG9mXG4gKiAgICAgICAgIGVsZW1lbnRzIG9yIHRleHQgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpIHtcblxuICAgIC8vIEZpcnN0LCBpbnZva2UgY29udGVudCBpZiBpdCBpcyBhIGZ1bmN0aW9uLiBJZiBpdCBwcm9kdWNlcyBhbiBhcnJheSxcbiAgICAvLyB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgbm9ybWFsaXphdGlvbi5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IHVwLCBub3JtYWxpemUgdG8gYW4gYXJyYXksIHNvIG9uZSBvciBtYW55IGl0ZW1zIGNhbiBiZSBub3JtYWxpemVkLFxuICAgIC8vIGZpbHRlcmVkLCBhbmQgcmV0dXJuZWQuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGNvbnRlbnQpID8gY29udGVudCA6IFtjb250ZW50XSkubWFwKHZhbHVlID0+IHtcblxuICAgICAgICAvLyBGaXJzdCwgaW52b2tlIHZhbHVlIGlmIGl0IGlzIGEgZnVuY3Rpb24gdG8gcHJvZHVjZSBhIG5ldyB2YWx1ZSxcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBiZSBzdWJzZXF1ZW50bHkgbm9ybWFsaXplZCB0byBhIE5vZGUgb2Ygc29tZSBraW5kLlxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbCh2YWx1ZSkgfHwgaXNUZXh0Tm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICgvXFxTLykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIodmFsdWUgPT4gdmFsdWUpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGFwcGVuZHMgY29udGVudCB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgdG8gYXBwZW5kIG5vcm1hbGl6ZWQgY29udGVudCB0by5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpkb21+Q29udGVudERlc2NyaXB0b3J9IGNvbnRlbnRcbiAqICAgICAgICBBIGNvbnRlbnQgZGVzY3JpcHRvciB2YWx1ZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgZWxlbWVudCB3aXRoIGFwcGVuZGVkIG5vcm1hbGl6ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcbiAgICBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpLmZvckVhY2gobm9kZSA9PiBlbC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGluc2VydHMgY29udGVudCBpbnRvIGFuIGVsZW1lbnQ7IHRoaXMgaXMgaWRlbnRpY2FsIHRvXG4gKiBgYXBwZW5kQ29udGVudCgpYCwgZXhjZXB0IGl0IGVtcHRpZXMgdGhlIGVsZW1lbnQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEVsZW1lbnQgdG8gaW5zZXJ0IG5vcm1hbGl6ZWQgY29udGVudCBpbnRvLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggaW5zZXJ0ZWQgbm9ybWFsaXplZCBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChlbCwgY29udGVudCkge1xuICAgIHJldHVybiBhcHBlbmRDb250ZW50KGVtcHR5RWwoZWwpLCBjb250ZW50KTtcbn1cblxuXG4vKipcbiAqIGNsb3Nlc3QgZWxlbWVudCBwb2x5ZmlsbFxuICovXG4oZnVuY3Rpb24oRUxFTUVOVCkge1xuICAgIEVMRU1FTlQubWF0Y2hlcyA9IEVMRU1FTlQubWF0Y2hlcyB8fCBFTEVNRU5ULm1vek1hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVMRU1FTlQub01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICBFTEVNRU5ULmNsb3Nlc3QgPSBFTEVNRU5ULmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH07XG59KEVsZW1lbnQucHJvdG90eXBlKSk7XG5cbi8qKlxuICogRmluZHMgYSBzaW5nbGUgRE9NIGVsZW1lbnQgbWF0Y2hpbmcgYHNlbGVjdG9yYCB3aXRoaW4gdGhlIG9wdGlvbmFsXG4gKiBgY29udGV4dGAgb2YgYW5vdGhlciBET00gZWxlbWVudCAoZGVmYXVsdGluZyB0byBgZG9jdW1lbnRgKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiAgICAgICAgIEEgdmFsaWQgQ1NTIHNlbGVjdG9yLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBgcXVlcnlTZWxlY3RvcmAuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudHxTdHJpbmd9IFtjb250ZXh0PWRvY3VtZW50XVxuICogICAgICAgICBBIERPTSBlbGVtZW50IHdpdGhpbiB3aGljaCB0byBxdWVyeS4gQ2FuIGFsc28gYmUgYSBzZWxlY3RvclxuICogICAgICAgICBzdHJpbmcgaW4gd2hpY2ggY2FzZSB0aGUgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudCB3aWxsIGJlIHVzZWRcbiAqICAgICAgICAgYXMgY29udGV4dC4gSWYgbWlzc2luZyAob3Igbm8gZWxlbWVudCBtYXRjaGVzIHNlbGVjdG9yKSwgZmFsbHNcbiAqICAgICAgICAgYmFjayB0byBgZG9jdW1lbnRgLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgdGhhdCB3YXMgZm91bmQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVRdWVyaWVyKCdxdWVyeVNlbGVjdG9yJyk7XG5cbi8qKlxuICogRmluZHMgYSBhbGwgRE9NIGVsZW1lbnRzIG1hdGNoaW5nIGBzZWxlY3RvcmAgd2l0aGluIHRoZSBvcHRpb25hbFxuICogYGNvbnRleHRgIG9mIGFub3RoZXIgRE9NIGVsZW1lbnQgKGRlZmF1bHRpbmcgdG8gYGRvY3VtZW50YCkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvclxuICogICAgICAgICBBIHZhbGlkIENTUyBzZWxlY3Rvciwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gYHF1ZXJ5U2VsZWN0b3JBbGxgLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR8U3RyaW5nfSBbY29udGV4dD1kb2N1bWVudF1cbiAqICAgICAgICAgQSBET00gZWxlbWVudCB3aXRoaW4gd2hpY2ggdG8gcXVlcnkuIENhbiBhbHNvIGJlIGEgc2VsZWN0b3JcbiAqICAgICAgICAgc3RyaW5nIGluIHdoaWNoIGNhc2UgdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQgd2lsbCBiZSB1c2VkXG4gKiAgICAgICAgIGFzIGNvbnRleHQuIElmIG1pc3NpbmcgKG9yIG5vIGVsZW1lbnQgbWF0Y2hlcyBzZWxlY3RvciksIGZhbGxzXG4gKiAgICAgICAgIGJhY2sgdG8gYGRvY3VtZW50YC5cbiAqXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqICAgICAgICAgQSBlbGVtZW50IGxpc3Qgb2YgZWxlbWVudHMgdGhhdCB3ZXJlIGZvdW5kLiBXaWxsIGJlIGVtcHR5IGlmIG5vbmVcbiAqICAgICAgICAgd2VyZSBmb3VuZC5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCAkJCA9IGNyZWF0ZVF1ZXJpZXIoJ3F1ZXJ5U2VsZWN0b3JBbGwnKTtcbiIsImltcG9ydCB7Q1NTQ2xhc3NOYW1lTWl4aW59IGZyb20gJy4vbWl4aW5zL2Nzc0NsYXNzTmFtZSc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VPZlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZU9wdGlvbnNQdG9wZXJ0eShwcm9wZXJ0eSwgb3B0aW9ucywgaW5zdGFuY2VPZiA9IEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKChvcHRpb25zW3Byb3BlcnR5XSBpbnN0YW5jZW9mIGluc3RhbmNlT2YpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY2FsbC4gUHJvcGVydHkgJyArIHByb3BlcnR5ICsgJyBpcyBub3QgdmFsaWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxzdHJpbmd9ICBjb250ZW50XG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NTZXQgPSBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgYXJyYXkgPSAodHlwZW9mIHByb3BlcnRpZXMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogcHJvcGVydGllcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBjbGFzc1NldC5hZGQoaXRlbSkpO1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgY3NzQ2xhc3Mgb2YgY2xhc3NTZXQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKGNzc0NsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzZWxlY3Rvci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcLlwiLCAnZycpLCAnJCYnICsgVUlDb21wb25lbnQuY2xhc3NQcmVmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBVSUNvbXBvbmVudC5fbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIERvbS4kKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W118bnVsbH1cbiAgICAgKi9cbiAgICAkJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBzZWxlY3RvciA9IFVJQ29tcG9uZW50Ll9ub3JtYWxpemVQcmVmaXgoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gRG9tLiQkKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVUlDb21wb25lbnQsIENTU0NsYXNzTmFtZU1peGluKTtcbiIsIi8qIGNyYzMyLmpzIChDKSAyMDE0LXByZXNlbnQgU2hlZXRKUyAtLSBodHRwOi8vc2hlZXRqcy5jb20gKi9cbi8qIHZpbTogc2V0IHRzPTI6ICovXG4vKmV4cG9ydGVkIENSQzMyICovXG52YXIgQ1JDMzI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Lypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdC8qZXNsaW50LWRpc2FibGUgKi9cblx0aWYodHlwZW9mIERPX05PVF9FWFBPUlRfQ1JDID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmKCdvYmplY3QnID09PSB0eXBlb2YgZXhwb3J0cykge1xuXHRcdFx0ZmFjdG9yeShleHBvcnRzKTtcblx0XHR9IGVsc2UgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IHt9O1xuXHRcdFx0XHRmYWN0b3J5KG1vZHVsZSk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0fVxuXHQvKmVzbGludC1lbmFibGUgKi9cblx0Lypqc2hpbnQgaWdub3JlOmVuZCAqL1xufShmdW5jdGlvbihDUkMzMikge1xuQ1JDMzIudmVyc2lvbiA9ICcxLjIuMCc7XG4vKiBzZWUgcGVyZi9jcmMzMnRhYmxlLmpzICovXG4vKmdsb2JhbCBJbnQzMkFycmF5ICovXG5mdW5jdGlvbiBzaWduZWRfY3JjX3RhYmxlKCkge1xuXHR2YXIgYyA9IDAsIHRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5cblx0Zm9yKHZhciBuID0wOyBuICE9IDI1NjsgKytuKXtcblx0XHRjID0gbjtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHR0YWJsZVtuXSA9IGM7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkodGFibGUpIDogdGFibGU7XG59XG5cbnZhciBUID0gc2lnbmVkX2NyY190YWJsZSgpO1xuZnVuY3Rpb24gY3JjMzJfYnN0cihic3RyLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnN0ci5sZW5ndGggLSAxO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnN0ci5jaGFyQ29kZUF0KGkrKykpJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15ic3RyLmNoYXJDb2RlQXQoaSsrKSkmMHhGRl07XG5cdH1cblx0aWYoaSA9PT0gTCkgQyA9IChDPj4+OCkgXiBUWyhDIF4gYnN0ci5jaGFyQ29kZUF0KGkpKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfYnVmKGJ1Ziwgc2VlZCkge1xuXHRpZihidWYubGVuZ3RoID4gMTAwMDApIHJldHVybiBjcmMzMl9idWZfOChidWYsIHNlZWQpO1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSAzO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHR9XG5cdHdoaWxlKGkgPCBMKzMpIEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdHJldHVybiBDIF4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1Zl84KGJ1Ziwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSA3O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdH1cblx0d2hpbGUoaSA8IEwrNykgQyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfc3RyKHN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTD1zdHIubGVuZ3RoLCBjLCBkOyBpIDwgTDspIHtcblx0XHRjID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcblx0XHRpZihjIDwgMHg4MCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gYykmMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDE5MnwoKGM+PjYpJjMxKSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDEyOHwoYyY2MykpKSYweEZGXTtcblx0XHR9IGVsc2UgaWYoYyA+PSAweEQ4MDAgJiYgYyA8IDB4RTAwMCkge1xuXHRcdFx0YyA9IChjJjEwMjMpKzY0OyBkID0gc3RyLmNoYXJDb2RlQXQoaSsrKSYxMDIzO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDI0MHwoKGM+PjgpJjcpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+MikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoZD4+NikmMTUpfCgoYyYzKTw8NCkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KGQmNjMpKSkmMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgyMjR8KChjPj4xMikmMTUpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+NikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gQyBeIC0xO1xufVxuQ1JDMzIudGFibGUgPSBUO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJzdHIgPSBjcmMzMl9ic3RyO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJ1ZiA9IGNyYzMyX2J1Zjtcbi8vICRGbG93SWdub3JlXG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iLCJcbi8qKlxuKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuKiBAcGFyYW0gaXRlbVxuKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gc291cmNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcyk7XG59IiwiXG5jb25zdCBTdGF0dXNlc0xpc3QgPSB7XG4gICAgSU5JVDogLTEsXG4gICAgV0FJVDogMCxcbiAgICBFWEVDOiAxLFxuICAgIERPTkU6IDIsXG4gICAgRVJST1I6IDMsXG4gICAgREVMRVRFRDogOTksXG59O1xuXG5TdGF0dXNlc0xpc3QuU0VUX1ZJU0lCTEUgPSBbXG4gICAgU3RhdHVzZXNMaXN0LldBSVQsIFN0YXR1c2VzTGlzdC5FWEVDLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ET05FXG5dO1xuXG5TdGF0dXNlc0xpc3QuU0VUX0NPTVBMRVRFID0gW1xuICAgIFN0YXR1c2VzTGlzdC5ET05FLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ERUxFVEVEXG5dO1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TdGF0dXNlc0xpc3QuaXMgPSBmdW5jdGlvbiAoc2V0LCBzdGF0dXMpIHtcbiAgICByZXR1cm4gc2V0LmluZGV4T2Yoc3RhdHVzKSA+IC0xO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzZXNMaXN0O1xuIiwiaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcblxuLyoqXG4gKkBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Fic3RyYWN0IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgI21hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBpZDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbW1vbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgaW5pdGlhdG9yTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJvZ3Jlc3MgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0ZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRpdGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXR1cyA9IFN0YXR1c2VzLklOSVQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQHR5cGUge3tpbml0OiBudWxsLCBoaWRlOiBudWxsLCBzaG93OiBudWxsLCByZWZyZXNoOiBudWxsLCByZW5kZXI6IG51bGwsIHJlbW92ZTogbnVsbH19XG4gICAgICovXG4gICAgY2FsbGJhY2tzID0ge1xuICAgICAgICBpbml0OiBudWxsLFxuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHNob3c6IG51bGwsXG4gICAgICAgIHJlZnJlc2g6IG51bGwsXG4gICAgICAgIGhpZGU6IG51bGwsXG4gICAgICAgIHJlbW92ZTogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgcmVzdWx0ID0gbnVsbDtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkLCBtYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJzZUludChpZCk7XG4gICAgICAgIHRoaXMuI21hbmFnZXIgPSBtYW5hZ2VyO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2FsbENhbGxiYWNrKCdpbml0JyksIDUwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICAgICAqL1xuICAgIGNhbGxDYWxsYmFjayh0eXBlLCBwYXJhbXMgPSBbXSkge1xuICAgICAgICBpZiAodGhpcy5jb21tb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY2FsbGJhY2tzW3R5cGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrc1t0eXBlXS5hcHBseSh0aGlzLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNyZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLiNlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiNlbGVtZW50ID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3dyYXBwZXInLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICdkYXRhLXRhc2staWQnOiB0aGlzLmlkXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgZWxUYXNrID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogdGhpcy5fYnVpbGRDc3NDbGFzcygpfSk7XG4gICAgICAgIHRoaXMuX3JlbmRlckNoaWxkKGVsVGFzayk7XG4gICAgICAgIHRoaXMuY2FsbENhbGxiYWNrKCdyZW5kZXInLCBbZWxUYXNrLCBlbGVtZW50XSk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGVsVGFzayk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBjaGlsZCBpbnN0YW5jZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3JlbmRlckNoaWxkKGVsV3JhcHBlcikge1xuXG4gICAgfVxuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTTWV0aG9kQ2FuQmVTdGF0aWNcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2J1aWxkQ3NzQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBbJ3Rhc2staXRlbSddXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljICNjc3NMaXN0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICh0aGlzLl9jc3NMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3NzTGlzdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jc3NMaXN0ID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgc3RhdHVzZXNMaXN0S2V5IGluIFN0YXR1c2VzTGlzdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBTdGF0dXNlc0xpc3Rbc3RhdHVzZXNMaXN0S2V5XSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jc3NMaXN0W1N0YXR1c2VzTGlzdFtzdGF0dXNlc0xpc3RLZXldXSA9IFVJQ29tcG9uZW50LmdldENsYXNzTmFtZSgnc3RhdHVzLScgKyBzdGF0dXNlc0xpc3RLZXkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzTGlzdDtcbiAgICB9O1xuXG5cbiAgICBjc3NDbGFzc1N3aXRjaCgpIHtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgIGxldCBjc3NDbGFzcywgc2VhcmNoQ2xhc3M7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1hbmFnZXIub3B0aW9ucy50aGVtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGxldCB0aGVtZSA9IHRoaXMubWFuYWdlci5vcHRpb25zLnRoZW1lW3RoaXMuc3RhdHVzXSB8fCBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgndGhlbWUtJyArIHRoZW1lKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDbGFzcyA9IFRhc2tBYnN0cmFjdC5nZXRDbGFzc05hbWUoJ3RoZW1lJyk7XG4gICAgICAgICAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3NzQ2xhc3MgPSBUYXNrQWJzdHJhY3QuI2Nzc0xpc3QoKVt0aGlzLnN0YXR1c107XG4gICAgICAgIHNlYXJjaENsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgnc3RhdHVzJyk7XG4gICAgICAgIERvbS5zd2l0Y2hDbGFzcyhlbGVtZW50LCBjc3NDbGFzcywgc2VhcmNoQ2xhc3MpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudHNcbiAgICAgKi9cbiAgICByZWZyZXNoKHJlc3BvbnNlLCBlbGVtZW50cyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKGVsZW1lbnRzLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsQ2FsbGJhY2soJ3JlZnJlc2gnLCBbcmVzcG9uc2UsIGVsZW1lbnRzXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0UHJvZ3Jlc3NUb3RhbChwcm9wZXJ0eSA9ICdwcm9ncmVzcycpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcblxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUucmVkdWNlKChhLCBjKSA9PiBhICsgYykgLyB2YWx1ZS5sZW5ndGgsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSBvbGRUYXNrXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9yZWZyZXNoRWxlbWVudHMoZWxlbWVudHMsIG9sZFRhc2spIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uc1BhcnRzID0gdGhpcy5vcHRpb25zLnBhcnRzO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnRzKS5mb3JFYWNoKChlbGVtZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb3B0aW9uc1BhcnRzW2VsZW1lbnROYW1lXSxcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVmcmVzaEJhc2ljUHJvcGVydHknO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCcuJykgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBbbSwgcF0gPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBtICsgcFswXS50b1VwcGVyQ2FzZSgpICsgcC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPT0gXCJ1bmRlZmluZWRcIikgPyB0aGlzW3Byb3BlcnR5XSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gKHR5cGVvZiBvbGRUYXNrW3Byb3BlcnR5XSAhPT0gXCJ1bmRlZmluZWRcIikgPyBvbGRUYXNrW3Byb3BlcnR5XSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdfJyArIG1ldGhvZDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbWV0aG9kXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW21ldGhvZF0uY2FsbCh0aGlzLCBlbGVtZW50c1tlbGVtZW50TmFtZV0sIHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTTWV0aG9kQ2FuQmVTdGF0aWNcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3JlZnJlc2hCYXNpY1Byb3BlcnR5KGVsZW1lbnQsIHZhbHVlLCBwcm9wZXJ0eSkge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgnbGlzdC0nICsgcHJvcGVydHkpO1xuICAgICAgICAgICAgbGV0IGVsTGlzdCA9IERvbS4kKCd1bC4nICsgY2xhc3NOYW1lLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgaWYgKGVsTGlzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsTGlzdCA9IHRoaXMuY3JlYXRlRWwoJ3VsJywge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoZWxMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBlbExpID0gRG9tLiQoYGxpOm50aC1jaGlsZCgke2luZGV4ICsgMX0pYCwgZWxMaXN0KTtcbiAgICAgICAgICAgICAgICBpZiAoZWxMaSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbExpc3QuYXBwZW5kKERvbS5jcmVhdGVFbCgnbGknLCB7fSwge30sIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbExpLmlubmVyVGV4dCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxMaS5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TWFuYWdlcn1cbiAgICAgKi9cbiAgICBnZXQgbWFuYWdlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RGVmYXVsdHMudGFza09wdGlvbnN8e319XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIub3B0aW9ucy50YXNrT3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IHN0YXR1c1RleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIub3B0aW9ucy5zdGF0dXNUZXh0W3RoaXMuc3RhdHVzXSB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c1RleHQgKyBcIiBcIiArIHRoaXMuZ2V0VGl0bGUoKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7c3RyIGFzIENSQzMyfSBmcm9tICdjcmMtMzInO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0ICogYXMgT2JqIGZyb20gJy4vdXRpbHMvb2JqJztcbmltcG9ydCBTdGF0dXNlc0xpc3QgZnJvbSBcIi4vc3RhdHVzZXNMaXN0XCI7XG5pbXBvcnQgVGFza0Fic3RyYWN0IGZyb20gXCIuL3Rhc2tBYnN0cmFjdFwiO1xuXG5jb25zdCBFTVBUWV9NRVNTQUdFID0gJ19fRU1QVFlfXyc7XG5cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGRlbGF5VGltZTogMTAwMCxcbiAgICBwYXJhbXM6IHt9XG59O1xuXG4vKipcbiAqIFJlc29sdmUgdGFzayBpbmZvcm1hdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvbHZlciB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UmVzb2x2ZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyAjY2FjaGUgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgc3RhdGljICNjb21tb25NYW5hZ2VycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJbXX1cbiAgICAgKi9cbiAgICAjbWFuYWdlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHt7fX1cbiAgICAgKi9cbiAgICAjb3B0aW9ucztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICAjbnVtYmVyUmVxdWVzdHMgPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgPSAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwgRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAob3B0LnBhcmFtcyAmJiBPYmouaXNQbGFpbihvcHQucGFyYW1zKSkge1xuICAgICAgICAgICAgb3B0LnBhcmFtcyA9IE9iamVjdC5lbnRyaWVzKG9wdC5wYXJhbXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9PSR7dmFsdWV9YCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uU3RhcnRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkVuZFxuICAgICAqL1xuICAgIHJlc29sdmUob25TdGFydCwgb25FbmQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlcnMgPSB0aGlzLiNnZXRNYW5hZ2VycygpO1xuXG4gICAgICAgICAgICB0aGlzLiNudW1iZXJSZXF1ZXN0cyA9IDA7XG5cbiAgICAgICAgICAgIG1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG9uU3RhcnQobWFuYWdlcikpO1xuICAgICAgICAgICAgdGhpcy4jcmVxdWVzdCgwKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgIT09IEVNUFRZX01FU1NBR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyID0gdGhpcy4jbnVtYmVyUmVxdWVzdHM7XG4gICAgICAgICAgICAgICAgbWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gb25FbmQobWFuYWdlciwgbnVtYmVyKSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jbnVtYmVyUmVxdWVzdHMgPSAtMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgI3JlcXVlc3QodGltZU91dCA9IHRoaXMub3B0aW9ucy5kZWxheVRpbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NyZWF0ZVJlcXVlc3QodGltZU91dCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSAtICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH0nIGApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKHJhdykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyYXcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByYXcuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kVGFza3MoaXRlbS5pZCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLm1hbmFnZXIuX3VwZGF0ZVRhc2sodGFzaywgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgUmVzb2x2ZXIuI3VwZGF0ZUNvbW1vbk1hbmFnZXJzKHJhdywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiNyZXF1ZXN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSByZXNwb25zZVxuICAgICAqIEBwYXJhbSByZXNvbHZlclxuICAgICAqL1xuICAgIHN0YXRpYyAjdXBkYXRlQ29tbW9uTWFuYWdlcnMocmVzcG9uc2UsIHJlc29sdmVyKSB7XG4gICAgICAgIFJlc29sdmVyLiNjb21tb25NYW5hZ2Vycy5mb3JFYWNoKG1hbmFnZXIgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBtYW5hZ2VyLmZpbmRUYXNrKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzayA9PT0gbnVsbCAmJiBTdGF0dXNlc0xpc3QuaXMoU3RhdHVzZXNMaXN0LlNFVF9DT01QTEVURSwgaXRlbS5zdGF0dXMpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29tbW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuYWRkVGFza3MoW2l0ZW0uaWRdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrID0gbWFuYWdlci5maW5kVGFzayhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuX3VwZGF0ZVRhc2sodGFzaywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmluaXRpYXRvck1hbmFnZXIgPSByZXNvbHZlci50YXNrcy5maW5kKHZhbHVlID0+IHZhbHVlLmlkID09PSBpdGVtLmlkKT8ubWFuYWdlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGFzayBpbnN0YW5jZW9mIFRhc2tBYnN0cmFjdCAmJiB0YXNrLmNvbW1vbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5fdXBkYXRlVGFzayh0YXNrLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZU91dFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2UgfCBuZXZlcj59XG4gICAgICovXG4gICAgI2NyZWF0ZVJlcXVlc3QodGltZU91dCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLnRhc2tzSWQ7XG4gICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KEVNUFRZX01FU1NBR0UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodGFza3MpLCB0aW1lT3V0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCh0YXNrcykgPT4ge1xuICAgICAgICAgICAgKyt0aGlzLiNudW1iZXJSZXF1ZXN0cztcblxuICAgICAgICAgICAgbGV0IGJvZHkgPSB0YXNrcy5tYXAoKGl0ZW0pID0+IGB0W109JHtpdGVtfWApLFxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHRoaXMub3B0aW9ucy5wYXJhbXM7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtcykgJiYgcGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBib2R5ID0gYm9keS5jb25jYXQocGFyYW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMub3B0aW9ucy51cmwsIGV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGVuY29kZVVSSShib2R5LmpvaW4oJyYnKSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0W119XG4gICAgICovXG4gICAgZ2V0IHRhc2tzKCkge1xuICAgICAgICBsZXQgdGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy4jbWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgbWFuYWdlci5nZXRUYXNrcygpLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21tb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJbXX1cbiAgICAgKi9cbiAgICBnZXQgdGFza3NJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLmlkKS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0fGJvb2xlYW59XG4gICAgICovXG4gICAgZmluZFRhc2tzKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNudW1iZXJSZXF1ZXN0cyA+IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJbXX1cbiAgICAgKi9cbiAgICAjZ2V0TWFuYWdlcnMoY29tbW9uID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNvbW1vbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcnMuZmlsdGVyKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlci5vcHRpb25zLmNvbW1vbiA9PT0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICAgICAqIEByZXR1cm4ge1Jlc29sdmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBmYWN0b3J5KG1hbmFnZXIpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG9wdGlvbnMgPSBtYW5hZ2VyLm9wdGlvbnMucmVzb2x2ZXIsXG4gICAgICAgICAgICBoYXNoID0gQ1JDMzIob3B0aW9ucy51cmwpLFxuICAgICAgICAgICAgY2FjaGUgPSBSZXNvbHZlci4jY2FjaGUsXG4gICAgICAgICAgICBjb21tb25NYW5hZ2VycyA9IFJlc29sdmVyLiNjb21tb25NYW5hZ2VycztcblxuICAgICAgICBjb25zdCByZXNvbHZlciA9IGNhY2hlW2hhc2hdID0gKGNhY2hlW2hhc2hdIGluc3RhbmNlb2YgUmVzb2x2ZXIpID8gY2FjaGVbaGFzaF0gOiBuZXcgUmVzb2x2ZXIob3B0aW9ucyksXG4gICAgICAgICAgICBtYW5hZ2VycyA9IHJlc29sdmVyLiNnZXRNYW5hZ2VycygpO1xuXG4gICAgICAgIGlmIChtYW5hZ2Vycy5pbmRleE9mKG1hbmFnZXIpID09PSAtMSkge1xuICAgICAgICAgICAgbWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcblxuICAgICAgICAgICAgaWYgKG1hbmFnZXIub3B0aW9ucy5jb21tb24pIHtcbiAgICAgICAgICAgICAgICBjb21tb25NYW5hZ2Vycy5wdXNoKG1hbmFnZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYW5hZ2VyLm93bmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1hbmFnZXIuRXZlbnRzLmRlc3Ryb3ksIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IG1hbmFnZXJzLmluZGV4T2YoZXZlbnQubWFuYWdlcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5nZXRUYXNrcygpLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5pbml0aWF0b3JNYW5hZ2VyID09PSBtYW5hZ2Vyc1tpbmRleF0pLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kZXggPSBjb21tb25NYW5hZ2Vycy5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUgPT09IGV2ZW50Lm1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbk1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZXI7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtlYWNofSBmcm9tICcuL3V0aWxzL29iaic7XG4vKipcbiAqXG4gKi9cbiBjb25zdCBFdmVudCA9IHtcbiAgICByZWFkeTogJ3FtYzptYW5hZ2VyOnJlYWR5JyxcbiAgICBkZXN0cm95OiAncW1jOm1hbmFnZXI6ZGVzdHJveScsXG4gICAgc3RhdHVzQ2hhbmdlOiAncW1jOm1hbmFnZXI6c3RhdHVzQ2hhbmdlJyxcbiAgICB0YXNrUmVtb3ZlZDogJ3FtYzptYW5hZ2VyOnRhc2tSZW1vdmVkJyxcbiAgICB0YXNrRWxlbWVudEFwcGVuZDogJ3FtYzptYW5hZ2VyOnRhc2tFbGVtZW50QXBwZW5kJyxcbiAgICB0YXNrRWxlbWVudFJlbW92ZWQ6ICdxbWM6bWFuYWdlcjp0YXNrRWxlbWVudFJlbW92ZWQnLFxuICAgIG5ld1Rhc2s6ICdxbWM6bWFuYWdlcjpuZXdUYXNrJyxcbiAgICBmZXRjaFN0YXJ0OiAncW1jOnJlc29sdmVyOnN0YXJ0JyxcbiAgICBmZXRjaEVuZDogJ3FtYzpyZXNvbHZlcjplbmQnLFxufTtcblxuRXZlbnQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV2ZW50cyA9IFtdO1xuICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICB9KTtcbiAgICByZXR1cm4gZXZlbnRzLmpvaW4oJyAnKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7IiwiLyoqXG4gKiBNYW5hZ2VyIEV2ZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXJFdmVudCBleHRlbmRzIEN1c3RvbUV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgI21hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIsIHR5cGUsIHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIHByb3BzKTtcbiAgICAgICAgdGhpcy4jbWFuYWdlciA9IG1hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TWFuYWdlcn1cbiAgICAgKi9cbiAgICBnZXQgbWFuYWdlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcjtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBAZmlsZSBndWlkLmpzXG4gKiBAbW9kdWxlIGd1aWRcbiAqL1xuXG4vLyBEZWZhdWx0IHZhbHVlIGZvciBHVUlEcy4gVGhpcyBhbGxvd3MgdXMgdG8gcmVzZXQgdGhlIEdVSUQgY291bnRlciBpbiB0ZXN0cy5cbi8vXG4vLyBUaGUgaW5pdGlhbCBHVUlEIGlzIDMgYmVjYXVzZSBzb21lIHVzZXJzIGhhdmUgY29tZSB0byByZWx5IG9uIHRoZSBmaXJzdFxuLy8gZGVmYXVsdCBwbGF5ZXIgSUQgZW5kaW5nIHVwIGFzIGB2anNfdmlkZW9fM2AuXG4vL1xuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9qcy92aWRlby5qcy9wdWxsLzYyMTZcbmNvbnN0IF9pbml0aWFsR3VpZCA9IDM7XG5cbi8qKlxuICogVW5pcXVlIElEIGZvciBhbiBlbGVtZW50IG9yIGZ1bmN0aW9uXG4gKlxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IF9ndWlkID0gX2luaXRpYWxHdWlkO1xuXG4vKipcbiAqIEdldCBhIHVuaXF1ZSBhdXRvLWluY3JlbWVudGluZyBJRCBieSBudW1iZXIgdGhhdCBoYXMgbm90IGJlZW4gcmV0dXJuZWQgYmVmb3JlLlxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqICAgICAgICAgQSBuZXcgdW5pcXVlIElELlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV3R1VJRCgpIHtcbiAgcmV0dXJuIF9ndWlkKys7XG59XG5cbi8qKlxuICogUmVzZXQgdGhlIHVuaXF1ZSBhdXRvLWluY3JlbWVudGluZyBJRCBmb3IgdGVzdGluZyBvbmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHdWlkSW5UZXN0c09ubHkoKSB7XG4gIF9ndWlkID0gX2luaXRpYWxHdWlkO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBkb20tZGF0YS5qc1xuICogQG1vZHVsZSBkb20tZGF0YVxuICovXG5cblxuaW1wb3J0ICogYXMgR3VpZCBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxubGV0IEZha2VXZWFrTWFwO1xuXG5pZiAoIXdpbmRvdy5XZWFrTWFwKSB7XG4gIEZha2VXZWFrTWFwID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy52ZGF0YSA9ICd2ZGF0YScgKyBNYXRoLmZsb29yKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgfHwgRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdIHx8IEd1aWQubmV3R1VJRCgpO1xuXG4gICAgICBpZiAoIWtleVt0aGlzLnZkYXRhXSkge1xuICAgICAgICBrZXlbdGhpcy52ZGF0YV0gPSBhY2Nlc3M7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YVthY2Nlc3NdID0gdmFsdWU7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChrZXkpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXTtcblxuICAgICAgLy8gd2UgaGF2ZSBkYXRhLCByZXR1cm4gaXRcbiAgICAgIGlmIChhY2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVthY2Nlc3NdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGhhcyhrZXkpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXTtcblxuICAgICAgcmV0dXJuIGFjY2VzcyBpbiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdO1xuXG4gICAgICBpZiAoYWNjZXNzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbYWNjZXNzXTtcbiAgICAgICAgZGVsZXRlIGtleVt0aGlzLnZkYXRhXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogRWxlbWVudCBEYXRhIFN0b3JlLlxuICpcbiAqIEFsbG93cyBmb3IgYmluZGluZyBkYXRhIHRvIGFuIGVsZW1lbnQgd2l0aG91dCBwdXR0aW5nIGl0IGRpcmVjdGx5IG9uIHRoZVxuICogZWxlbWVudC4gRXguIEV2ZW50IGxpc3RlbmVycyBhcmUgc3RvcmVkIGhlcmUuXG4gKiAoYWxzbyBmcm9tIGpzbmluamEuY29tLCBzbGlnaHRseSBtb2RpZmllZCBhbmQgdXBkYXRlZCBmb3IgY2xvc3VyZSBjb21waWxlcilcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgd2luZG93LldlYWtNYXAgPyBuZXcgV2Vha01hcCgpIDogbmV3IEZha2VXZWFrTWFwKCk7XG4iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgbGFiZWwgPSAnJztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cblxuICAgICAqL1xuICAgIGNsYXNzTmFtZSA9IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHNpemUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7UHJvZ3Jlc3NCYXJbXX1cbiAgICAgKi9cbiAgICAjYmFycyA9IFtdO1xuXG4gICAgYmFyT3B0aW9ucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RWxlbWVudHxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjbGFiZWxFbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudHxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTaG93R3JhZGllbnQgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHN0YXRpYyAkY2xhc3NQcmVmaXggPSBudWxsO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIC4uLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsO1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3NpemUtJyArIHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1Nob3dHcmFkaWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ25vLWdyYWRpZW50Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbCA9IERvbS5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwge30sXG4gICAgICAgICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbXMnKX0pXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsID0gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxFbGVtZW50fVxuICAgICAqL1xuICAgICNnZXRMYWJlbEVsKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNsYWJlbEVsO1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jbGFiZWxFbCA9IGVsID0gRG9tLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1sYWJlbCcpfSwge30pXG4gICAgICAgIHRoaXMuI2VsLmFwcGVuZChlbCk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSB2YWx1ZVxuICAgICAqL1xuICAgIHNldFByb2dyZXNzKHZhbHVlKSB7XG5cbiAgICAgICAgY29uc3QgYmFycyA9IHRoaXMuI2JhcnMsXG4gICAgICAgICAgICBlbCA9IHRoaXMuI2VsLFxuICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpID8gW3ZhbHVlXSA6IHZhbHVlO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJhcnNbaW5kZXhdIGluc3RhbmNlb2YgUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICBiYXJzW2luZGV4XS5wcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXJzW2luZGV4XSA9IG5ldyBQcm9ncmVzc0Jhcih0aGlzLmJhck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLicgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzLWl0ZW1zJykpLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAoMTAwIC8gbGVuZ3RoKS50b0ZpeGVkKDMpICsgJyUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSwge30sIGJhcnNbaW5kZXhdLnJlbmRlcigpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzVGhvQ2hlY2sgPSBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ21vcmUtdGhhbi10aHJlZScpO1xuICAgICAgICBpZiAoRG9tLmhhc0NsYXNzKGVsLCBjbGFzc1Rob0NoZWNrKSA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCBjbGFzc1Rob0NoZWNrKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxhYmVsXG4gICAgICovXG4gICAgc2V0TGFiZWwobGFiZWwpIHtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLiNnZXRMYWJlbEVsKCkuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNsYXNzTmFtZSA9ICdwcm9ncmVzcy1iYXInO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgICNwcm9ncmVzcyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfGJvb2xlYW59XG4gICAgICovXG4gICAgbGFiZWxUZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1pbiA9IDA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4ID0gMTAwO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIC4uLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbFxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl8U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5sYWJlbFRleHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2goRG9tLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogJ3NyLW9ubHknLCBjc3M6IHt3aWR0aDogMH19LCB7fSwgdGhpcy5sYWJlbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMubGFiZWxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2VsZW1lbnQgPSBlbCA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBQcm9ncmVzcy5nZXRDbGFzc05hbWUodGhpcy5jbGFzc05hbWUpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIixcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5wcm9ncmVzcyxcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbWluJzogdGhpcy5taW4sXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1heCc6IHRoaXMubWF4XG4gICAgICAgIH0sIGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9ICh0aGlzLmxhYmVsVGV4dCkgPyB0aGlzLmxhYmVsVGV4dCA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm9ncmVzc30lICR7bGFiZWx9YFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgcHJvZ3Jlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9ncmVzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgcHJvZ3Jlc3ModmFsdWUpIHtcbiAgICAgICAgdGhpcy4jcHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCB2YWx1ZSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdGhpcy5sYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt2YWx1ZX0lYFxuXG4gICAgfVxufSIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uVCBleHRlbmRzIFVJQ29tcG9uZW50e1xuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAqL1xuICAgICNpY29uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICovXG4gICAgI3NpemUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd9IGljb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSBzaXplXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWNvbiA9IGZhbHNlLCBzaXplID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jaWNvbiA9IGljb247XG4gICAgICAgIHRoaXMuI3NpemUgPSBzaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudCA9IHRoaXMuY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiB0aGlzLiNidWlsZENsYXNzTmFtZSgpfSwge30sXG4gICAgICAgICAgICBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7fSwge30sIFsnczEnLCAnczInLCAnczMnXS5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICAjYnVpbGRDbGFzc05hbWUoKSB7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdpY29uLXQnLFxuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuI2ljb24pIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLiNpY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAodGhpcy4jc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NpemUtJyt0aGlzLiNzaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgaWNvbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy4jaWNvbjtcbiAgICAgICAgICAgIGlmIChpY29uICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsIGljb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNpY29uID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgc2l6ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlICA9IEljb25ULmdldENsYXNzTmFtZSgnc2l6ZS0nK3ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLiNzaXplO1xuICAgICAgICAgICAgaWYgKHNpemUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3NpemUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0IGNvbG9yKHZhbHVlKSB7XG4gICAgICAgIERvbS4kJCgnc3BhbltjbGFzc149c10nLCB0aGlzLiNlbGVtZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cblxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0IEljb25UIGZyb20gJy4vaWNvbnQnO1xuXG4vKipcbiAqXG4gKiBAdHlwZSB7e2ljb25Ib3Zlck5hbWU6IG51bGwsIGhhbmRsZXI6IG51bGwsIHNpemU6IG51bGwsIGRhdGE6IHt9LCBoaWRkZW5MYWJlbDogc3RyaW5nLCBpY29uTmFtZTogbnVsbCwgYW5pbWF0ZWRDbGljazogYm9vbGVhbiwgaGFuZGxlclRpbW91dERlbGF5OiBudW1iZXIsIGljb25TaXplOiBudWxsLCBkaXNhYmxlZDogYm9vbGVhbiwgbGFiZWw6IGJvb2xlYW4sIHRhZ05hbWU6IHN0cmluZ319XG4gKi9cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgaGFuZGxlcjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGFuZGxlclRpbW91dERlbGF5OiA1MDAsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIGxhYmVsOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgaGlkZGVuTGFiZWw6ICcnLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc2l6ZTogbnVsbCxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgaWNvbk5hbWU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgaWNvbkhvdmVyTmFtZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBpY29uU2l6ZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIGFuaW1hdGVkQ2xpY2s6IHRydWUsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIGRhdGE6IHt9XG5cbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICAjb3B0aW9ucyA9IERlZmF1bHRzO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0ljb25UfVxuICAgICAqL1xuICAgICNpY29uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwgRGVmYXVsdHMsIG9wdGlvbnMpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBbXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5pY29uTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuaWNvbjtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChpLnJlbmRlcigpKTtcbiAgICAgICAgICAgIGkuaWNvbiA9IG9wdGlvbnMuaWNvbk5hbWU7XG4gICAgICAgICAgICBpLnNpemUgPSBvcHRpb25zLmljb25TaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChEb20uY3JlYXRlRWwoJ3AnLCB7fSwge30sIG9wdGlvbnMubGFiZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhpZGRlbkxhYmVsKSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2godGhpcy5jcmVhdGVFbCgncCcsIHtjbGFzc05hbWU6ICdidXR0b24taGlkZGVuJ30sIHt9LCBvcHRpb25zLmhpZGRlbkxhYmVsKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlZENsaWNrKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wID0gRG9tLmNyZWF0ZUVsKCdwJywge2NsYXNzTmFtZTogJ2Ryb3AnfSk7XG4gICAgICAgICAgICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3ModGhpcywgJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGVudC5wdXNoKGRyb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwgPSB0aGlzLiNlbGVtZW50ID0gdGhpcy5jcmVhdGVFbChvcHRpb25zLnRhZ05hbWUsIHtjbGFzc05hbWU6IEJ1dHRvbi4jYnVpbGRDbGFzc05hbWUob3B0aW9ucyl9LCB7fSwgY29udGVudCk7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IG9wdGlvbnMuZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuI2FkZEhhbmRsZXJzKGVsLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gZWxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2J1aWxkQ2xhc3NOYW1lKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFsnYnV0dG9uJ107XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NpemUtJyArIG9wdGlvbnMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oaWRkZW5MYWJlbCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2hhcy1oaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuI2VsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tLnRvZ2dsZUNsYXNzKHRoaXMuI2VsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7SWNvblR9XG4gICAgICovXG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIGxldCBpY29uID0gdGhpcy4jaWNvbjtcbiAgICAgICAgaWYgKGljb24gaW5zdGFuY2VvZiBJY29uVCkge1xuICAgICAgICAgICAgcmV0dXJuIGljb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuI2ljb24gPSBuZXcgSWNvblQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgI2FkZEhhbmRsZXJzKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZWRDbGljaykge1xuICAgICAgICAgICAgICAgIEJ1dHRvbi4jYW5pbWF0ZWRDbGljayhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhbmRsZXJUaW1vdXREZWxheSA+IDApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0aW9ucy5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpLCBvcHRpb25zLmhhbmRsZXJUaW1vdXREZWxheSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zLmhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5pY29uSG92ZXJOYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlzYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5pY29uID0gb3B0aW9ucy5pY29uSG92ZXJOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5pY29uID0gb3B0aW9ucy5pY29uTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgI2FuaW1hdGVkQ2xpY2soZWxlbWVudCkge1xuXG4gICAgICAgIGNvbnN0IGRyb3AgPSBEb20uJCgnLmRyb3AnLCBlbGVtZW50KTtcbiAgICAgICAgaWYgKGRyb3ApIHtcblxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IERvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgeCA9IGV2ZW50LnBhZ2VYIC0gcmVjdC53aWR0aCAvIDIgLSByZWN0LmxlZnQgLSB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICB5ID0gZXZlbnQucGFnZVkgLSByZWN0LmhlaWdodCAvIDIgLSByZWN0LnRvcCAtIHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgICBkcm9wLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICAgICAgZHJvcC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG5cbiAgICAgICAgICAgIERvbS5hZGRDbGFzcyhkcm9wLCAnYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuQnV0dG9uLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cblxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IGV4dGVuZCBmcm9tIFwiLi91dGlscy9leHRlbmRcIjtcblxuXG4vKipcbiAqXG4gKiBAdHlwZSB7e3NlbGVjdEljb246IG51bGwsIHNjYWxlZDogYm9vbGVhbiwgYXJyYW5nZTogYm9vbGVhbiwgc2VsZWN0YWJsZTogYm9vbGVhbn19XG4gKi9cbmNvbnN0IERlZmF1bHRzID0ge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbi5EZWZhdWx0c1tdfVxuICAgICAqL1xuICAgIGJ1dHRvbnM6IFtdLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgYXJyYW5nZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzY2FsZWQ6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHNlbGVjdEljb246IG51bGxcblxufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zR3JvdXAgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9uW119XG4gICAgICovXG4gICAgYnV0dG9ucyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgI29wdGlvbnMgPSBEZWZhdWx0cztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IFVJQ29tcG9uZW50LnJlbW92ZU9wdGlvbnNQdG9wZXJ0eSgnYnV0dG9ucycsIG9wdGlvbnMsIEFycmF5KTtcbiAgICAgICAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwgRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBidXR0b25zLm1hcCgoY29uZmlnKSA9PiBuZXcgQnV0dG9uKGNvbmZpZykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuXG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2VsZW1lbnQgPSBlbCA9IHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IEJ1dHRvbnNHcm91cC4jYnVpbGRDbGFzc05hbWUodGhpcy5vcHRpb25zKX0sIHt9LFxuICAgICAgICAgICAgdGhpcy5idXR0b25zLm1hcCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ0bi5yZW5kZXIoKVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy4jYmluZFNlbGVjdEV2ZW50cyhlbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljICNidWlsZENsYXNzTmFtZShvcHRpb25zKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFsnYnV0dG9uLWdyb3VwJ107XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYXJyYW5nZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2FycmFuZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNjYWxlZCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NjYWxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAgICovXG4gICAgc2V0IGFycmFuZ2UodmFsdWUpIHtcblxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdhcnJhbmdlJyk7XG5cbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLiNvcHRpb25zO1xuXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKERvbS5oYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuYXJyYW5nZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgI2JpbmRTZWxlY3RFdmVudHMoZWxlbWVudCkge1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCggJy4nICsgQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnYnV0dG9uJykpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYnV0dG9ucy5maW5kKGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuLmVsZW1lbnQgPT09IGVsZW1lbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQkKCcuYnV0dG9uLnNlbGVjdGVkJywgZXZlbnQudGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIERvbS5zZXRBdHRyaWJ1dGUoZWwsICdkYXRhLWdyb3VwLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCAgQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCQoJy5idXR0b25bZGF0YS1ncm91cC1zZWxlY3RlZF0nLCBldmVudC50YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUF0dHJpYnV0ZShlbCwgJ2RhdGEtZ3JvdXAtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ3NlbGVjdGVkJykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnV0dG9ufG51bWJlcn0gYnV0dG9uXG4gICAgICovXG4gICAgc2V0IHNlbGVjdGVkKGJ1dHRvbikge1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ3NlbGVjdGVkJyksXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYnV0dG9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBidXR0b24gPSB0aGlzLmJ1dHRvbnNbYnV0dG9uXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQXR0cmlidXRlKGJ0bi5lbGVtZW50LCAnZGF0YS1ncm91cC1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhidG4uZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRG9tLmFkZENsYXNzKGJ1dHRvbi5lbGVtZW50LCBjbGFzc05hbWUpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zZWxlY3RJY29uKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmljb24uaWNvbiA9IG9wdGlvbnMuc2VsZWN0SWNvbjtcbiAgICAgICAgICAgICAgICBidXR0b24ub3B0aW9ucy5pY29uTmFtZSA9IG9wdGlvbnMuc2VsZWN0SWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cblxuXG5cbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgSWNvblQgZnJvbSAnLi9pY29udCc7XG5pbXBvcnQgQnV0dG9uc0dyb3VwIGZyb20gJy4vYnV0dG9uc0dyb3VwJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1N0YXR1cyBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50W119XG4gICAgICovXG4gICAgI2VsZW1lbnRzID0gW107XG5cbiAgICBtYXAgPSB7XG4gICAgICAgIGljb25zOiBbXSxcbiAgICAgICAgYWN0aW9uczogW11cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Rhc2tBYnN0cmFjdH1cbiAgICAgKi9cbiAgICAjdGFzaztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0ljb25UfVxuICAgICAqL1xuICAgICNpY29uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI3RleHQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbnNHcm91cH1cbiAgICAgKi9cbiAgICAjYkdyb3VwID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1hcEljb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBtYXBJY29ucywgYWN0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiN0YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy5tYXAuaWNvbnMgPSBtYXBJY29ucztcbiAgICAgICAgdGhpcy5tYXAuYWN0aW9ucyA9IGFjdGlvbnM7XG5cbiAgICAgICAgdGhpcy4jaWNvbiA9IG5ldyBJY29uVCgnbm9uZScsICdiaWcnKTtcbiAgICAgICAgdGhpcy4jdGV4dCA9IHRoaXMuY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnc3RhdHVzLXRleHQnfSk7XG5cbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgIGV4dGVuZChpdGVtLCB7ZGF0YToge3Rhc2s6IHRhc2t9fSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGVscyA9IHRoaXMuI2VsZW1lbnRzO1xuXG4gICAgICAgIGlmIChlbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGVscztcbiAgICAgICAgfVxuICAgICAgICBlbHMucHVzaCh0aGlzLiNpY29uLnJlbmRlcigpKTtcbiAgICAgICAgZWxzLnB1c2godGhpcy4jdGV4dCk7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwLmFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy4jYkdyb3VwID0gbmV3IEJ1dHRvbnNHcm91cCh7YnV0dG9uczogdGhpcy5tYXAuYWN0aW9ucywgYXJyYW5nZTogZmFsc2UsIHNjYWxlZDogdHJ1ZX0pO1xuICAgICAgICAgICAgZWxzLnB1c2godGhpcy4jYkdyb3VwLnJlbmRlcigpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIGVscztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICAgICAqL1xuICAgIHJlZnJlc2goc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuI3RleHQuaW5uZXJIVE1MID0gdGhpcy4jdGFzay5zdGF0dXNUZXh0O1xuXG4gICAgICAgIHRoaXMuI2ljb24uaWNvbiA9IHRoaXMubWFwLmljb25zW3N0YXR1c107XG5cbiAgICAgICAgY29uc3QgYnV0dG9uR3JvdXAgPSB0aGlzLiNiR3JvdXA7XG5cbiAgICAgICAgaWYgKGJ1dHRvbkdyb3VwKSB7XG4gICAgICAgICAgICBidXR0b25Hcm91cC5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBlbmFibGVkV2l0aCA9IGJ1dHRvbi5vcHRpb25zPy5lbmFibGVkV2l0aFN0YXR1cztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVuYWJsZWRXaXRoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZFdpdGggPSBlbmFibGVkV2l0aC5jYWxsKGJ1dHRvbiwgc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW5hYmxlZFdpdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24ub3B0aW9ucy5lbmFibGVkV2l0aFN0YXR1cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBidXR0b24ub3B0aW9ucy5lbmFibGVkV2l0aFN0YXR1cy5pbmRleE9mKHN0YXR1cykgPT09IC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuYWJsZWRXaXRoID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBlbmFibGVkV2l0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVGFza0Fic3RyYWN0IGZyb20gXCIuL3Rhc2tBYnN0cmFjdFwiO1xuaW1wb3J0IERvbURhdGEgZnJvbSAnLi91dGlscy9kb20tZGF0YSc7XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9wcm9ncmVzcyc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBUYXNrU3RhdHVzIGZyb20gJy4vdGFza1N0YXR1cyc7XG5cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIGljb25QbGFjZW1lbnQ6ICdkZWZhdWx0JyxcbiAgICBwYXJ0czoge1xuICAgICAgICBzdGF0dXM6ICdyZWZyZXNoLnN0YXR1cycsXG4gICAgICAgIHRpdGxlOiAndGl0bGUnLFxuICAgICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICAgIGVycm9yOiAnZXJyb3JzJyxcbiAgICAgICAgJ3Byb2dyZXNzLXdyYXBwZXInOiAncmVmcmVzaC5wcm9ncmVzcycsXG4gICAgfSxcbiAgICBwcm9ncmVzczoge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHNpemU6ICcnLFxuICAgICAgICBiYXJPcHRpb25zOiB7XG4gICAgICAgICAgICBsYWJlbFRleHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbnM6IFtdXG59O1xuXG5jb25zdCBpY29uTWFwID0ge307XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5XQUlUXSA9ICdjbG9jayc7XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5FWEVDXSA9ICdwbGF5Jztcbmljb25NYXBbU3RhdHVzZXNMaXN0LkVSUk9SXSA9ICd3YXJuaW5nJztcbmljb25NYXBbU3RhdHVzZXNMaXN0LkRPTkVdID0gJ2NoZWNrZWQnO1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayBleHRlbmRzIFRhc2tBYnN0cmFjdCB7XG5cblxuICAgICNlbGVtZW50cyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBfcmVuZGVyQ2hpbGQoZWxXcmFwcGVyKSB7XG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy4jZWxlbWVudHMsXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgZWxEZXRhaWwgPSBlbFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ2RldGFpbCd9KSksXG4gICAgICAgICAgICBlbFN0YXR1c1dyYXBwZXIgPSBlbFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ3N0YXR1cy13cmFwcGVyJ30pKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLnBhcnRzKS5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICBsZXQgb3duZXIgPSBlbERldGFpbCxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAocGFydCA9PT0gJ3Byb2dyZXNzLXdyYXBwZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IFByb2dyZXNzKG9wdGlvbnMucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zWydwcm9ncmVzcy13cmFwcGVyJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnc3RhdHVzJykge1xuICAgICAgICAgICAgICAgIG93bmVyID0gZWxTdGF0dXNXcmFwcGVyO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBUYXNrU3RhdHVzKHRoaXMsIGljb25NYXAsIG9wdGlvbnMuYWN0aW9ucylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudHNbcGFydF0gPSBvd25lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBwYXJ0fSwge30pKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiB0eXBlb2YgY29tcG9uZW50Py5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gW2NvbnRlbnRdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT4gZWxlbWVudHNbcGFydF0uYXBwZW5kKGNvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICBUYXNrLiNzZXRDb21wb25lbnQoZWxlbWVudHNbcGFydF0sIGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByZWZyZXNoKHJlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyLnJlZnJlc2gocmVzcG9uc2UsIHRoaXMuI2VsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2J1aWxkQ3NzQ2xhc3MoKSB7XG5cbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gc3VwZXIuX2J1aWxkQ3NzQ2xhc3MoKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmljb25QbGFjZW1lbnQgIT09IERlZmF1bHRzLmljb25QbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKCd0YXNrLWl0ZW0tJyArIHRoaXMub3B0aW9ucy5pY29uUGxhY2VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc0xpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9Y29tcG9uZW50XG4gICAgICovXG4gICAgc3RhdGljICNzZXRDb21wb25lbnQoZWwsIGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoIURvbURhdGEuaGFzKGVsKSkge1xuICAgICAgICAgICAgRG9tRGF0YS5zZXQoZWwsIHt9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gRG9tRGF0YS5nZXQoZWwpO1xuICAgICAgICBkYXRhLmNvbXBvbmV0ID0gY29tcG9uZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljICNnZXRDb21wb25lbnQoZWwpIHtcbiAgICAgICAgaWYgKERvbURhdGEuaGFzKGVsKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IERvbURhdGEuZ2V0KGVsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5jb21wb25ldCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmNvbXBvbmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge051bWJlcnxOdW1iZXJbXX12YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3JlZnJlc2hQcm9ncmVzcyhlbCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHByb2dyZXNzID0gVGFzay4jZ2V0Q29tcG9uZW50KGVsKTtcblxuICAgICAgICBpZiAocHJvZ3Jlc3MgaW5zdGFuY2VvZiBQcm9ncmVzcykge1xuICAgICAgICAgICAgcHJvZ3Jlc3Muc2V0TGFiZWwodGhpcy5nZXRQcm9ncmVzc1RvdGFsKCkgKyAnJScpO1xuICAgICAgICAgICAgcHJvZ3Jlc3Muc2V0UHJvZ3Jlc3ModmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFN0YXR1c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfE51bWJlcltdfXZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAgX3JlZnJlc2hTdGF0dXMoZWxTdGF0dXMsIHZhbHVlKSB7XG4gICAgICAgIFRhc2suI2dldENvbXBvbmVudChlbFN0YXR1cykucmVmcmVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRpdGxlKCkge1xuICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5vcHRpb25zLnBhcnRzWyd0aXRsZSddO1xuICAgICAgICBpZiAocGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbcGFydF0gPz8gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxufVxuXG5UYXNrLkRlZnVhbHRzID0gRGVmYXVsdHM7IiwiN1xuXG4vKipcbiAqIEBwYXJhbSB0aW1pbmdcbiAqIEBwYXJhbSBkcmF3XG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqIEBwYXJhbSBvbkVuZFxuICovXG5mdW5jdGlvbiBhbmltYXRlKHt0aW1pbmcsIGRyYXcsIGR1cmF0aW9ufSwgb25FbmQpIHtcblxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGFuaW1hdGUodGltZSkge1xuICAgICAgICAvLyB0aW1lRnJhY3Rpb24g0LjQt9C80LXQvdGP0LXRgtGB0Y8g0L7RgiAwINC00L4gMVxuICAgICAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRpbWVGcmFjdGlvbiA+IDEpIHRpbWVGcmFjdGlvbiA9IDE7XG5cbiAgICAgICAgLy8g0LLRi9GH0LjRgdC70LXQvdC40LUg0YLQtdC60YPRidC10LPQviDRgdC+0YHRgtC+0Y/QvdC40Y8g0LDQvdC40LzQsNGG0LjQuFxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1pbmcodGltZUZyYWN0aW9uKTtcblxuICAgICAgICBkcmF3KHByb2dyZXNzKTsgLy8g0L7RgtGA0LjRgdC+0LLQsNGC0Ywg0LXRkVxuXG4gICAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob25FbmQpIHtcbiAgICAgICAgICAgICAgICBvbkVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuXG5jb25zdCB0aW1pbmdzID0ge1xuICAgIGxpbmVhcih0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcbiAgICB9LFxuICAgIHF1YWQodGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aW1lRnJhY3Rpb24sIDIpXG4gICAgfSxcbiAgICBjaXJjKHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyh0aW1lRnJhY3Rpb24pKTtcbiAgICB9LFxuICAgIGJhY2soeCA9IDEuNSwgdGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aW1lRnJhY3Rpb24sIDIpICogKCh4ICsgMSkgKiB0aW1lRnJhY3Rpb24gLSB4KVxuICAgIH0sXG59O1xuXG5cbmNvbnN0IGFuaW1hdGlvbnNEcmF3ID0ge1xuICAgICdmYWRlT3V0JzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDEgLSAoTWF0aC5yb3VuZChwcm9ncmVzcyAqIDEwMCkgLyAxMDApO1xuICAgIH0sXG4gICAgJ2ZhZGVJbic6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAoTWF0aC5yb3VuZChwcm9ncmVzcyAqIDEwMCkgLyAxMDApO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbmltYXRpb25Db25maWdcbiAqIEByZXR1cm4gUHJvbWlzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlRWwoZWwsIGFuaW1hdGlvbkNvbmZpZyA9IHtcbiAgICBuYW1lOiAnZmFkZU91dCcsXG4gICAgdGltaW5nOiB0aW1pbmdzLmxpbmVhcixcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGRlbGF5OiAwXG59KSB7XG4gICAgbGV0IGFuaW1hdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGFuaW1hdGlvbkNvbmZpZyk7XG5cbiAgICBpZiAodHlwZW9mIGFuaW1hdGlvbi5kcmF3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFuaW1hdGlvbi5kcmF3LmJpbmQoZWwpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYW5pbWF0aW9uLm5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBhbmltYXRpb25zRHJhd1thbmltYXRpb24ubmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYW5pbWF0aW9uLmRyYXcgPSBhbmltYXRpb25zRHJhd1thbmltYXRpb24ubmFtZV0uYmluZChlbClcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gYW5pbWF0aW9uICcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYW5pbWF0aW9uLmRlbGF5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGFuaW1hdGlvbi5kZWxheSA9IDA7XG4gICAgfVxuXG4gICAgYW5pbWF0aW9uLnRpbWluZyA9ICh0eXBlb2YgYW5pbWF0aW9uLnRpbWluZyA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0aW1pbmdzW2FuaW1hdGlvbi50aW1pbmddID09PSAnZnVuY3Rpb24nKVxuICAgICAgICA/IHRpbWluZ3NbYW5pbWF0aW9uLnRpbWluZ10gOiB0aW1pbmdzLmxpbmVhcjtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGFuaW1hdGUoYW5pbWF0aW9uLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGVsKVxuICAgICAgICB9KSwgYW5pbWF0aW9uLmRlbGF5KTtcbiAgICB9KTtcblxufVxuXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufXRpbWluZ1xuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWRlSW4oZWwsIHRpbWluZyA9ICdsaW5lYXInLCBkdXJhdGlvbiA9IDEwMDAsIGRlbGF5ID0gMCkge1xuICAgIHJldHVybiBhbmltYXRlRWwoZWwsIHtcbiAgICAgICAgbmFtZTogJ2ZhZGVJbicsXG4gICAgICAgIHRpbWluZzogdGltaW5nLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGVsXG4gKiBAcGFyYW0gdGltaW5nXG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqIEBwYXJhbSBkZWxheVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhZGVPdXQoZWwsIHRpbWluZyA9ICdsaW5lYXInLCBkdXJhdGlvbiA9IDEwMDAsIGRlbGF5ID0gMCkge1xuICAgIHJldHVybiBhbmltYXRlRWwoZWwsIHtcbiAgICAgICAgbmFtZTogJ0ZhZGVPdXQnLFxuICAgICAgICB0aW1pbmc6IHRpbWluZyxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSk7XG59IiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXInO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50c0xpc3QnO1xuaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBNYW5hZ2VyRXZlbnQgZnJvbSAnLi9tYW5hZ2VyRXZlbnQnO1xuaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb250JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IEJ1dHRvbnNHcm91cCBmcm9tICcuL2J1dHRvbnNHcm91cCc7XG5cbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBhbmltYXRlRWwsIHtmYWRlSW59IGZyb20gJy4vdXRpbHMvYW5pbWF0ZSc7XG5cblxuY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgY29tbW9uOiBmYWxzZSxcbiAgICB0aXRsZTogJzxoMz5CYWNrZ3JvdW5kcyB0YXNrczwvaDM+JyxcbiAgICB0aGVtZTogeyctMSc6IFwiZGVmYXVsdFwifSxcbiAgICByZW5kZXJPbkVtcHR5OiB0cnVlLFxuICAgIHRhc2tDbGFzczogVGFzayxcbiAgICBlbXB0eVRleHQ6ICdUYXNrcyBub3QgcHJvdmlkZWQgeWV0JyxcbiAgICB0YXNrT3B0aW9uczoge30sXG4gICAgdGFza3M6IFtdLFxuICAgIHN0YXR1c1RleHQ6IHt9LFxuICAgIGhpZGVBbmltYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGVPdXQnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgdGltaW5nOiAnbGluZWFyJyxcbiAgICAgICAgZGVsYXk6IDBcbiAgICB9LFxuICAgIHNob3dBbmltYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGVJbicsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICB0aW1pbmc6ICdsaW5lYXInLFxuICAgICAgICBkZWxheTogMFxuICAgIH0sXG4gICAgdGFza3NBbmltYXRpb246IHtcbiAgICAgICAgaGlkZToge30sXG4gICAgICAgIHNob3c6IHt9XG4gICAgfSxcbiAgICByZXNvbHZlcjoge1xuICAgICAgICB1cmw6ICdxdWV1ZS1yZWFkZXInXG4gICAgfVxufTtcblxuXG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5oaWRlW1N0YXR1c2VzLkRPTkVdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5oaWRlQW5pbWF0aW9uLCB7ZGVsYXk6IDUwMDB9KTtcbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLmhpZGVbU3RhdHVzZXMuRVJST1JdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5oaWRlQW5pbWF0aW9uLCB7ZGVsYXk6IDIwMDAwfSk7XG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5zaG93W1N0YXR1c2VzLkVYRUNdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5zaG93QW5pbWF0aW9uLCB7ZHVyYXRpb246IDUwMH0pO1xuRGVmYXVsdHMudGFza3NBbmltYXRpb24uc2hvd1tTdGF0dXNlcy5XQUlUXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuc2hvd0FuaW1hdGlvbiwge2R1cmF0aW9uOiA1MDB9KTtcblxuRGVmYXVsdHMudGFza3NBbmltYXRpb24uaGlkZVtTdGF0dXNlcy5FUlJPUl0gPSBmYWxzZTsgLy9ub3QgcmVtb3ZlIFRhc2sgZWxlbWVudCBmcm9tIGRvbVxuXG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLkRPTkVdID0gJ0NvbXBsZXRlJztcbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuRVJST1JdID0gJ0NvbXBsZXRlIHdpdGggZXJyb3JzJztcbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuRVhFQ10gPSAnUHJvY2Vzc2luZyc7XG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLldBSVRdID0gJ0F3YWl0aW5nJztcblxuXG4vKipcbiAqXG4gKi9cbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UmVzb2x2ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjcmVzb2x2ZXIgPSBudWxsO1xuXG4gICAgI2VsZW1lbnRzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBvd25lcjogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJUYXNrczogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBlbXB0eVRleHQ6IG51bGxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgICN0YXNrcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICAjb3B0aW9ucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3duZXIgPSBVSUNvbXBvbmVudC5yZW1vdmVPcHRpb25zUHRvcGVydHkoJ2VsZW1lbnQnLCBvcHRpb25zKTtcbiAgICAgICAgbGV0IG9wdCA9IGV4dGVuZCh7fSwgTWFuYWdlci5EZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIHtcbiAgICAgICAgICAgIHRhc2tPcHRpb25zOiBvcHQudGFza0NsYXNzLkRlZnVhbHRzXG4gICAgICAgIH0sIG9wdCk7XG5cbiAgICAgICAgdGhpcy4jcmVzb2x2ZXIgPSBSZXNvbHZlci5mYWN0b3J5KHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudGFza3MgJiYgdHlwZW9mIG9wdGlvbnMudGFza3MubGVuZ3RoICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2tzKG9wdGlvbnMudGFza3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBsYXRlciBhZGRlZCB0YXNrcyxcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMucmVhZHksIHtidWJibGVzOiB0cnVlfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cnVjdG9yIG9mIG1hbmFnZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLmRlc3Ryb3ksIHtidWJibGVzOiB0cnVlfSk7XG4gICAgICAgIHRoaXMuI3Rhc2tzID0gW107XG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSBkZXRhaWxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHRyaWdnZXIodHlwZSwgcHJvcHMgPSB7fSwgZGV0YWlsKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWwgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcHJvcHMuZGV0YWlsID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkZXRhaWwpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZGV0YWlsW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vd25lckVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgTWFuYWdlckV2ZW50KHRoaXMsIHR5cGUsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrcyhTdGF0dXNlcy5TRVRfVklTSUJMRSk7XG5cbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLm9wdGlvbnMucmVuZGVyT25FbXB0eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy4jZWxlbWVudHM7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzLndyYXBwZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGVsZW1lbnRzLndyYXBwZXIgPSBlbGVtZW50cy5vd25lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAnd3JhcHBlcid9KSk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50cy53cmFwcGVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGl0bGUgJiYgdGhpcy5vcHRpb25zLnRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHRoaXMub3B0aW9ucy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50cy53cmFwcGVyVGFza3MgPSBlbGVtZW50cy53cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAndGFza3MnfSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZW1wdHlUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZW1wdHlUZXh0ID0gZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50cy5lbXB0eVRleHQgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZW1wdHktd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogJ2VtcHR5LXRleHQnLCB0ZXh0Q29udGVudDogb3B0aW9ucy5lbXB0eVRleHR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRoZW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIERvbS5zd2l0Y2hDbGFzcyhlbGVtZW50cy53cmFwcGVyLCBNYW5hZ2VyLmdldENsYXNzTmFtZSgndGhlbWUtJyArIG9wdGlvbnMudGhlbWUpLCBNYW5hZ2VyLmdldENsYXNzTmFtZSgndGhlbWUnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRhc2sucmVmcmVzaCgpKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICN0b2dnbGVFbXB0eVRleHQodHlwZSkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuI2VsZW1lbnRzLmVtcHR5VGV4dCxcbiAgICAgICAgICAgIHZpc2libGUgPSBEb20uaXNWaXNpYmxlKGVsKTtcblxuICAgICAgICBpZiAoRG9tLmlzRWwoZWwpKSB7XG4gICAgICAgICAgICBpZiAoKHZpc2libGUgJiYgdHlwZSA9PT0gJ2hpZGUnKSB8fCAodmlzaWJsZSA9PT0gZmFsc2UgJiYgdHlwZSA9PT0gJ3Nob3cnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbmltYXRlRWwoZWwsIHRoaXMub3B0aW9uc1t0eXBlICsgJ0FuaW1hdGlvbiddKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gKHR5cGUgPT09ICdzaG93JykgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfXRhc2tzXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXNvbHZlXG4gICAgICovXG4gICAgYWRkVGFza3ModGFza3MsIHJlc29sdmUgPSB0cnVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhc2tzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IHZhbGlkIGNhbGwuIEFyZ3VtZW50IHRhc2tzIGlzIG5vdCBhcnJheSB0eXBlICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jdGFza0ZhY3RvcnkodGFza3MpO1xuICAgICAgICB0aGlzLiN0YXNrcyA9IHRoaXMuI3Rhc2tzLmNvbmNhdCh0YXNrcyk7XG5cbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGhpcy50cmlnZ2VyKEV2ZW50cy5uZXdUYXNrLCB7YnViYmxlczogdHJ1ZX0sIHt0YXNrOiB0YXNrfSkpO1xuXG4gICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnaGlkZScpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVyLnJlc29sdmUoKG1hbmFnZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VyLmdldFRhc2tzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIudHJpZ2dlcihFdmVudHMuZmV0Y2hTdGFydCwge2J1YmJsZXM6IHRydWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAobWFuYWdlciwgbnVtYmVyUmVxdWVzdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIudHJpZ2dlcihFdmVudHMuZmV0Y2hFbmQsIHtidWJibGVzOiB0cnVlfSwge3JlcXVlc3RzOiBudW1iZXJSZXF1ZXN0c30pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUYXNrQWJzdHJhY3R9IHRhc2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91cGRhdGVUYXNrKHRhc2ssIHJlc3BvbnNlKSB7XG5cbiAgICAgICAgaWYgKHRhc2sucHJvZ3Jlc3MgIT09IHJlc3BvbnNlLnByb2dyZXNzIHx8IHRhc2suc3RhdHVzICE9PSByZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgIHx8IHRhc2sudGV4dCAhPT0gcmVzcG9uc2UudGV4dCB8fCB0YXNrLnRpdGxlICE9PSByZXNwb25zZS50aXRsZSkge1xuICAgICAgICAgICAgY29uc3QgaXNTdGF0dXNDaGFuZ2UgPSB0YXNrLnN0YXR1cyAhPT0gcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgIG9sZERhdGEgPSBleHRlbmQoe30sIHRhc2spO1xuICAgICAgICAgICAgdGFzayA9IGV4dGVuZCh0YXNrLCByZXNwb25zZSk7XG5cbiAgICAgICAgICAgIHRhc2sucmVmcmVzaChvbGREYXRhKTtcblxuICAgICAgICAgICAgaWYgKGlzU3RhdHVzQ2hhbmdlKSB7XG5cbiAgICAgICAgICAgICAgICB0YXNrLmNzc0NsYXNzU3dpdGNoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnN0YXR1c0NoYW5nZSwge2J1YmJsZXM6IHRydWV9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIG9sZFN0YXR1czogb2xkRGF0YS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChTdGF0dXNlcy5pcyhTdGF0dXNlcy5TRVRfVklTSUJMRSwgdGFzay5zdGF0dXMpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suZWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGFzay5lbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyVGFza3NFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbChlbGVtZW50LCB0aGlzLiN0YXNrQW5pbWF0aW9uKHRhc2ssICdzaG93JykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnRhc2tFbGVtZW50QXBwZW5kLCB7YnViYmxlczogdHJ1ZX0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbENhbGxiYWNrKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoU3RhdHVzZXMuaXMoU3RhdHVzZXMuU0VUX0NPTVBMRVRFLCB0YXNrLnN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IHRhc2subWFuYWdlci5vcHRpb25zLmNvbW1vblxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGFzay5yZXN1bHQgJiYgQXJyYXkuaXNBcnJheSh0YXNrLnJlc3VsdC50YXNrcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2subWFuYWdlci5hZGRUYXNrcyh0YXNrLnJlc3VsdC50YXNrcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fG51bWJlcn0gdGFzayBUYXNrIGluc3RhbmNlIG9yIHRhc2sgaWRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIHJlbW92ZVRhc2sodGFzaykge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGFzayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRhc2sgPSB0aGlzLmZpbmRUYXNrKHRhc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRUYXNrcygpLmZpbmRJbmRleCgodCkgPT4gdC5pZCA9PT0gdGFzay5pZCk7XG4gICAgICAgICAgICBpZiAoaWQgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rhc2tzLnNwbGljZShpZCwgMSk7XG5cblxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMudGFza1JlbW92ZWQsIHtidWJibGVzOiB0cnVlfSwge1xuICAgICAgICAgICAgICAgICAgICB0YXNrOiB0YXNrXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGFzay5jYWxsQ2FsbGJhY2soJ3JlbW92ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suZWxlbWVudC5wYXJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZW1vdmVFbCh0YXNrLmVsZW1lbnQsIHRoaXMuI3Rhc2tBbmltYXRpb24odGFzaykpLnRoZW4oKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbGxDYWxsYmFjaygnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy50YXNrRWxlbWVudFJlbW92ZWQsIHtidWJibGVzOiB0cnVlfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuI3Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgI3Rhc2tBbmltYXRpb24odGFzaywgdHlwZSA9ICdoaWRlJykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGFza3NBbmltYXRpb25bdHlwZV1bdGFzay5zdGF0dXNdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy50YXNrc0FuaW1hdGlvblt0eXBlXVt0YXNrLnN0YXR1c107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uc1t0eXBlICsgJ0FuaW1hdGlvbiddO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfG1lbnViYXJ9IHN0YXR1c0ZpbHRlclxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgIGdldFRhc2tzKHN0YXR1c0ZpbHRlcikge1xuXG4gICAgICAgIGxldCB0YXNrcyA9IHRoaXMuI3Rhc2tzO1xuXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzRmlsdGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHN0YXR1c0ZpbHRlciA9IFtzdGF0dXNGaWx0ZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNGaWx0ZXIuaW5kZXhPZih0YXNrLnN0YXR1cykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0fG51bGx9XG4gICAgICovXG4gICAgZmluZFRhc2soaWQpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRoaXMuZ2V0VGFza3MoKS5maW5kKCh0KSA9PiB0LmlkID09PSBpZCk7XG4gICAgICAgIGlmICh0YXNrIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bWJlcltdfSB0YXNrc1xuICAgICAqL1xuICAgICN0YXNrRmFjdG9yeSh0YXNrcykge1xuICAgICAgICBjb25zdCBUYXNrQ2xhc3MgPSB0aGlzLm9wdGlvbnMudGFza0NsYXNzO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBpdGVtLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdID0gZXh0ZW5kKG5ldyBUYXNrQ2xhc3MoaWQsIHRoaXMpLCBpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLnBhcnNlSW50KGl0ZW0pID4gMCkge1xuICAgICAgICAgICAgICAgIHRhc2tzW2luZGV4XSA9IG5ldyBUYXNrQ2xhc3MoaXRlbSwgdGhpcylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZSBub3QgdmFsaWQgdGFzayBpdGVtJywgaXRlbSk7XG4gICAgICAgICAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fGZhbHNlfWFuaW1hdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgI3JlbW92ZUVsKGVsLCBhbmltYXRpb24gPSB0aGlzLm9wdGlvbnMuaGlkZUFuaW1hdGlvbikge1xuXG4gICAgICAgIGlmIChhbmltYXRpb24gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCBhbmltYXRpb24pLnRoZW4oKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBvd25lckVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy5vd25lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB3cmFwcGVyRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzLndyYXBwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgd3JhcHBlclRhc2tzRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzLndyYXBwZXJUYXNrcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Jlc29sdmVyfVxuICAgICAqL1xuICAgIGdldCByZXNvbHZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Jlc29sdmVyXG4gICAgfVxuXG5cbn1cblxuVUlDb21wb25lbnQuY2xhc3NQcmVmaXggPSAncW1jLSc7XG5cbk1hbmFnZXIuVGFza0Fic3RyYWN0ID0gVGFza0Fic3RyYWN0O1xuTWFuYWdlci5CdXR0b24gPSBCdXR0b247XG5NYW5hZ2VyLkJ1dHRvbnNHcm91cCA9IEJ1dHRvbnNHcm91cDtcbk1hbmFnZXIuSWNvbiA9IEljb247XG5cbk1hbmFnZXIuRGVmYXVsdHMgPSBEZWZhdWx0cztcbk1hbmFnZXIuRXZlbnRzID0gRXZlbnRzO1xuTWFuYWdlci5TdGF0dXNlcyA9IFN0YXR1c2VzO1xuXG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IiwiaW1wb3J0ICQgZnJvbSAnZ2xvYmFsL2pRdWVyeSc7XG5cbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcidcblxuJC5mbi5xdWV1ZU1hbmFnZXIgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG5cbiAgICBjb25zdCBtYW5hZ2VyID0gdGhpcy5kYXRhKCdxdWV1ZS1tYW5hZ2VyJyksXG4gICAgICAgIG1ldGhvZHMgPSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAge01hbmFnZXIuRGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmRhdGEoJ3F1ZXVlTWFuYWdlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHdyYXBwZXIuZGF0YSgncXVldWVNYW5hZ2VyJywgbmV3IE1hbmFnZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZCh0cnVlLCB7ZWxlbWVudDogJHdyYXBwZXIuZ2V0KDApfSwgTWFuYWdlci5EZWZhdWx0cywgb3B0aW9ucyB8fCB7fSwgJHdyYXBwZXIuZGF0YSgnbWFuYWdlcicpIHx8IHt9KSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnM6IGZ1bmN0aW9uKG9wdGlvbnMsICR3cmFwcGVyKXtcbiAgICAgICAgICAgICAgICAkd3JhcHBlciA9ICR3cmFwcGVyIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXIuYXBwZW5kKCQobmV3IE1hbmFnZXIuQnV0dG9uc0dyb3VwKG9wdGlvbnMpLnJlbmRlcigpKS5kYXRhKCdtYW5hZ2VyJywgbWFuYWdlcikpO1xuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9O1xuXG4gICAgaWYgKG1hbmFnZXIgaW5zdGFuY2VvZiBNYW5hZ2VyICYmIHR5cGVvZiBtYW5hZ2VyW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG1hbmFnZXJbbWV0aG9kXS5hcHBseShtYW5hZ2VyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZHNbbWV0aG9kXSkge1xuICAgICAgICByZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgIW1ldGhvZCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJC5lcnJvcignTWV0aG9kICcgKyBtZXRob2QgKyAnIGRvZXMgbm90IGV4aXN0IG9uIHF1ZXVlTWFuYWdlciAnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufTtcblxuJC5mbi5xdWV1ZU1hbmFnZXIuTWFuYWdlciA9IE1hbmFnZXI7XG5cbiQoJ2RvY3VtZW50JykucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5xbWMtcXVldWUtbWFuYWdlcltkYXRhLW1hbmFnZXJdJykucXVldWVNYW5hZ2VyKCk7XG59KTtcblxuXG5cbiJdLCJuYW1lcyI6WyJDU1NDbGFzc05hbWVNaXhpbiIsImNsYXNzUHJlZml4IiwiZ2V0Q2xhc3NOYW1lIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJGdWxsc2NyZWVuQXBpIiwicHJlZml4ZWQiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImkiLCJsZW5ndGgiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwia2V5cyIsIm9iamVjdCIsImlzT2JqZWN0IiwiZWFjaCIsImZuIiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwiaXNQbGFpbiIsImNhbGwiLCJjb25zdHJ1Y3RvciIsImNvbXB1dGVkU3R5bGUiLCJlbCIsInByb3AiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiY29tcHV0ZWRTdHlsZVZhbHVlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIlVTRVJfQUdFTlQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ3ZWJraXRWZXJzaW9uTWFwIiwiZXhlYyIsInBhcnNlRmxvYXQiLCJwb3AiLCJ0ZXN0IiwibWF0Y2giLCJJU19BTkRST0lEIiwibWFqb3IiLCJtaW5vciIsIklTX0VER0UiLCJJU19DSFJPTUUiLCJyZXN1bHQiLCJ2ZXJzaW9uIiwiSVNfU0FGQVJJIiwiVE9VQ0hfRU5BQkxFRCIsIkJvb2xlYW4iLCJEb20iLCJtYXhUb3VjaFBvaW50cyIsIkRvY3VtZW50VG91Y2giLCJJU19JUEFEIiwiaXNOb25CbGFua1N0cmluZyIsInN0ciIsInRyaW0iLCJ0aHJvd0lmV2hpdGVzcGFjZSIsImluZGV4T2YiLCJFcnJvciIsImNsYXNzUmVnRXhwIiwiY2xhc3NOYW1lIiwiUmVnRXhwIiwiaXNSZWFsIiwiaXNFbCIsIm5vZGVUeXBlIiwiY3JlYXRlUXVlcmllciIsIm1ldGhvZCIsInNlbGVjdG9yIiwiY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJjcmVhdGVFbCIsInRhZ05hbWUiLCJwcm9wZXJ0aWVzIiwiYXR0cmlidXRlcyIsImNvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInByb3BOYW1lIiwidmFsIiwic2V0QXR0cmlidXRlIiwic3R5bGVOYW1lIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsImF0dHJOYW1lIiwiYXBwZW5kQ29udGVudCIsInRleHQiLCJpbm5lclRleHQiLCJoYXNDbGFzcyIsImVsZW1lbnQiLCJjbGFzc1RvQ2hlY2siLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZENsYXNzIiwiY2xhc3NUb0FkZCIsImFkZCIsInJlbW92ZUNsYXNzIiwiY2xhc3NUb1JlbW92ZSIsInJlbW92ZSIsInNwbGl0IiwiZmlsdGVyIiwiYyIsImpvaW4iLCJ0b2dnbGVDbGFzcyIsImNsYXNzVG9Ub2dnbGUiLCJwcmVkaWNhdGUiLCJoYXMiLCJhdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnROb2RlIiwicmVjdCIsImsiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJ3aWR0aCIsImlzVGV4dE5vZGUiLCJpc1Zpc2libGUiLCJvcGFjaXR5Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRDbGllbnRSZWN0cyIsInN3aXRjaENsYXNzIiwiY3NzQ2xhc3MiLCJzZWFyY2hDbGFzcyIsImNvbXBhcmUiLCJleGlzdCIsIm5vcm1hbGl6ZUNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGUiLCJhcHBlbmRDaGlsZCIsIkVMRU1FTlQiLCJtYXRjaGVzIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiJCIsIiQkIiwiVUlDb21wb25lbnQiLCJyZW1vdmVPcHRpb25zUHRvcGVydHkiLCJwcm9wZXJ0eSIsIm9wdGlvbnMiLCJpbnN0YW5jZU9mIiwiY2xhc3NTZXQiLCJTZXQiLCJhcnJheSIsIml0ZW0iLCJfbm9ybWFsaXplUHJlZml4IiwiciIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiYXNzaWduIiwiY3JjMzIiLCJjb21tb25qc0hlbHBlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmFjdG9yeSIsIkRPX05PVF9FWFBPUlRfQ1JDIiwiQ1JDMzIiLCJzaWduZWRfY3JjX3RhYmxlIiwidGFibGUiLCJuIiwiSW50MzJBcnJheSIsIlQiLCJjcmMzMl9ic3RyIiwiYnN0ciIsInNlZWQiLCJDIiwiTCIsImNoYXJDb2RlQXQiLCJjcmMzMl9idWYiLCJidWYiLCJjcmMzMl9idWZfOCIsImNyYzMyX3N0ciIsImQiLCJleHRlbmQiLCJ0YXJnZXQiLCJzb3VyY2VzIiwic291cmNlIiwic2hpZnQiLCJTdGF0dXNlc0xpc3QiLCJJTklUIiwiV0FJVCIsIkVYRUMiLCJET05FIiwiRVJST1IiLCJERUxFVEVEIiwiU0VUX1ZJU0lCTEUiLCJTRVRfQ09NUExFVEUiLCJpcyIsInNldCIsInN0YXR1cyIsIlRhc2tBYnN0cmFjdCIsImlkIiwibWFuYWdlciIsIlN0YXR1c2VzIiwiaW5pdCIsInJlbmRlciIsInNob3ciLCJyZWZyZXNoIiwiaGlkZSIsInBhcnNlSW50Iiwic2V0VGltZW91dCIsImNhbGxDYWxsYmFjayIsInR5cGUiLCJwYXJhbXMiLCJjb21tb24iLCJjYWxsYmFja3MiLCJhcHBseSIsIl9yZW5kZXJDaGlsZCIsImVsV3JhcHBlciIsIl9idWlsZENzc0NsYXNzIiwiY3NzQ2xhc3NTd2l0Y2giLCJ0aGVtZSIsInJlc3BvbnNlIiwiZWxlbWVudHMiLCJfcmVmcmVzaEVsZW1lbnRzIiwiZ2V0UHJvZ3Jlc3NUb3RhbCIsImhhc093blByb3BlcnR5IiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwiYSIsIm9sZFRhc2siLCJvcHRpb25zUGFydHMiLCJwYXJ0cyIsImVsZW1lbnROYW1lIiwibSIsInAiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwib2xkVmFsdWUiLCJfcmVmcmVzaEJhc2ljUHJvcGVydHkiLCJlbExpc3QiLCJhcHBlbmQiLCJpbmRleCIsImVsTGkiLCJpbm5lckhUTUwiLCJ0YXNrT3B0aW9ucyIsInN0YXR1c1RleHQiLCJnZXRUaXRsZSIsImVsVGFzayIsIl9jc3NMaXN0Iiwic3RhdHVzZXNMaXN0S2V5IiwidG9Mb3dlckNhc2UiLCJFTVBUWV9NRVNTQUdFIiwiRGVmYXVsdHMiLCJkZWxheVRpbWUiLCJSZXNvbHZlciIsIm9wdCIsIk9iaiIsImVudHJpZXMiLCJyZXNvbHZlIiwib25TdGFydCIsIm9uRW5kIiwiaXNSdW5uaW5nIiwibWFuYWdlcnMiLCJjYXRjaCIsImVycm9yIiwidGhlbiIsIm51bWJlciIsInRhc2tzIiwiZ2V0VGFza3MiLCJ0YXNrIiwicHVzaCIsInRhc2tzSWQiLCJmaW5kVGFza3MiLCJyZXNvbHZlciIsImhhc2giLCJ1cmwiLCJjYWNoZSIsImNvbW1vbk1hbmFnZXJzIiwib3duZXJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1hbmFnZXIiLCJFdmVudHMiLCJkZXN0cm95IiwiZXZlbnQiLCJpbml0aWF0b3JNYW5hZ2VyIiwicmVtb3ZlVGFzayIsInNwbGljZSIsImZpbmRJbmRleCIsInRpbWVPdXQiLCJvayIsImpzb24iLCJyYXciLCJfdXBkYXRlVGFzayIsImZpbmRUYXNrIiwiYWRkVGFza3MiLCJmaW5kIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJjb25jYXQiLCJmZXRjaCIsImhlYWRlcnMiLCJlbmNvZGVVUkkiLCJFdmVudCIsInJlYWR5Iiwic3RhdHVzQ2hhbmdlIiwidGFza1JlbW92ZWQiLCJ0YXNrRWxlbWVudEFwcGVuZCIsInRhc2tFbGVtZW50UmVtb3ZlZCIsIm5ld1Rhc2siLCJmZXRjaFN0YXJ0IiwiZmV0Y2hFbmQiLCJldmVudHMiLCJNYW5hZ2VyRXZlbnQiLCJDdXN0b21FdmVudCIsInByb3BzIiwiX2luaXRpYWxHdWlkIiwiX2d1aWQiLCJuZXdHVUlEIiwiRmFrZVdlYWtNYXAiLCJXZWFrTWFwIiwidmRhdGEiLCJmbG9vciIsInBlcmZvcm1hbmNlIiwibm93IiwiRGF0ZSIsImRhdGEiLCJhY2Nlc3MiLCJHdWlkIiwiZ2V0IiwiZGVsZXRlIiwiUHJvZ3Jlc3MiLCJIVE1MRWxlbWVudCIsInNpemUiLCJpc1Nob3dHcmFkaWVudCIsInNldFByb2dyZXNzIiwiYmFycyIsIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJiYXJPcHRpb25zIiwiY2xhc3NUaG9DaGVjayIsInNldExhYmVsIiwibGFiZWwiLCJsYWJlbFRleHQiLCJjc3MiLCJyb2xlIiwibWluIiwibWF4IiwiY2hpbGROb2RlcyIsIkljb25UIiwiaWNvbiIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlciIsImhhbmRsZXJUaW1vdXREZWxheSIsImhpZGRlbkxhYmVsIiwiZGlzYWJsZWQiLCJpY29uTmFtZSIsImljb25Ib3Zlck5hbWUiLCJpY29uU2l6ZSIsImFuaW1hdGVkQ2xpY2siLCJCdXR0b24iLCJkcm9wIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYmluZCIsIngiLCJwYWdlWCIsImxlZnQiLCJzY3JvbGxYIiwieSIsInBhZ2VZIiwidG9wIiwic2Nyb2xsWSIsImJ1dHRvbnMiLCJhcnJhbmdlIiwic2NhbGVkIiwic2VsZWN0YWJsZSIsInNlbGVjdEljb24iLCJCdXR0b25zR3JvdXAiLCJjb25maWciLCJidG4iLCJzZWxlY3RlZCIsImJ1dHRvbiIsIlRhc2tTdGF0dXMiLCJtYXBJY29ucyIsImFjdGlvbnMiLCJpY29ucyIsImVscyIsImJ1dHRvbkdyb3VwIiwiZW5hYmxlZFdpdGgiLCJlbmFibGVkV2l0aFN0YXR1cyIsImljb25QbGFjZW1lbnQiLCJ0aXRsZSIsImljb25NYXAiLCJUYXNrIiwiZWxEZXRhaWwiLCJlbFN0YXR1c1dyYXBwZXIiLCJwYXJ0Iiwib3duZXIiLCJjb21wb25lbnQiLCJfcmVmcmVzaFByb2dyZXNzIiwiX3JlZnJlc2hTdGF0dXMiLCJlbFN0YXR1cyIsIkRvbURhdGEiLCJjb21wb25ldCIsIkRlZnVhbHRzIiwiYW5pbWF0ZSIsInRpbWluZyIsImRyYXciLCJkdXJhdGlvbiIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsInRpbWVGcmFjdGlvbiIsInRpbWluZ3MiLCJsaW5lYXIiLCJxdWFkIiwicG93IiwiY2lyYyIsInNpbiIsImFjb3MiLCJiYWNrIiwiYW5pbWF0aW9uc0RyYXciLCJkaXNwbGF5IiwiYW5pbWF0ZUVsIiwiYW5pbWF0aW9uQ29uZmlnIiwiZGVsYXkiLCJhbmltYXRpb24iLCJyZW5kZXJPbkVtcHR5IiwidGFza0NsYXNzIiwiZW1wdHlUZXh0IiwiaGlkZUFuaW1hdGlvbiIsInNob3dBbmltYXRpb24iLCJ0YXNrc0FuaW1hdGlvbiIsIndyYXBwZXIiLCJ3cmFwcGVyVGFza3MiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJudW1iZXJSZXF1ZXN0cyIsInJlcXVlc3RzIiwiaXNTdGF0dXNDaGFuZ2UiLCJvbGREYXRhIiwib2xkU3RhdHVzIiwid3JhcHBlclRhc2tzRWxlbWVudCIsInQiLCJzdGF0dXNGaWx0ZXIiLCJ3cmFwcGVyRWxlbWVudCIsInZpc2libGUiLCJUYXNrQ2xhc3MiLCJOdW1iZXIiLCJJY29uIiwicXVldWVNYW5hZ2VyIiwibWV0aG9kcyIsIiR3cmFwcGVyIiwiY3JlYXRlQnV0dG9ucyIsImFyZ3VtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUF1QjtFQUN0QkQsUUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEtBQUcsQ0FBTCxHQUFVSixDQUFDLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDSSxHQUFHLENBQUM3SyxDQUFDLEVBQUYsQ0FBTixJQUFhLElBQWQsQ0FBZjtFQUNBeUssUUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEtBQUcsQ0FBTCxHQUFVSixDQUFDLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDSSxHQUFHLENBQUM3SyxDQUFDLEVBQUYsQ0FBTixJQUFhLElBQWQsQ0FBZjtFQUNBeUssUUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEtBQUcsQ0FBTCxHQUFVSixDQUFDLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDSSxHQUFHLENBQUM3SyxDQUFDLEVBQUYsQ0FBTixJQUFhLElBQWQsQ0FBZjtFQUNBeUssUUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEtBQUcsQ0FBTCxHQUFVSixDQUFDLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDSSxHQUFHLENBQUM3SyxDQUFDLEVBQUYsQ0FBTixJQUFhLElBQWQsQ0FBZjtFQUNBeUssUUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEtBQUcsQ0FBTCxHQUFVSixDQUFDLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDSSxHQUFHLENBQUM3SyxDQUFDLEVBQUYsQ0FBTixJQUFhLElBQWQsQ0FBZjtFQUNBeUssUUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEtBQUcsQ0FBTCxHQUFVSixDQUFDLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDSSxHQUFHLENBQUM3SyxDQUFDLEVBQUYsQ0FBTixJQUFhLElBQWQsQ0FBZjtFQUNBeUssUUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEtBQUcsQ0FBTCxHQUFVSixDQUFDLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDSSxHQUFHLENBQUM3SyxDQUFDLEVBQUYsQ0FBTixJQUFhLElBQWQsQ0FBZjtFQUNBeUssUUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEtBQUcsQ0FBTCxHQUFVSixDQUFDLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDSSxHQUFHLENBQUM3SyxDQUFDLEVBQUYsQ0FB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
