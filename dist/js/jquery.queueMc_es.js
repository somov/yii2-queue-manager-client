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

      this.id = parseInt(id);

      _classPrivateFieldSet(this, _manager$1, manager);
    }
    /**
     * @private
     * @return {Element}
     */


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
        return array.indexOf(value === index);
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
      if (tasks && tasks.length > 0) {
        _classPrivateFieldSet(this, _tasks, _classPrivateFieldGet(this, _tasks).concat(tasks));

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

          if (StatusesList.is([StatusesList.EXEC], task.status)) ;

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


    removeTask(task, onRemoved = null) {
      let tasks = this.getTasks();

      if (typeof task === 'number') {
        task = tasks.find(t => t.id === task);
      }

      if (task instanceof TaskAbstract) {
        const id = this.getTasks().findIndex(t => t.id === task.id);

        if (id > -1) {
          _classPrivateFieldGet(this, _tasks).splice(id, 1);

          _classPrivateMethodGet(this, _removeEl, _removeEl2).call(this, task.element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task)).then(el => {
            if (onRemoved) {
              onRemoved(el);
            }

            if (_classPrivateFieldGet(this, _tasks).length === 0) {
              _classPrivateMethodGet(this, _toggleEmptyText, _toggleEmptyText2).call(this, 'show');
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


    /**
     * @param {number[]|menubar} statusFilter
     * @return {TaskAbstract[]}
     */
    getTasks(statusFilter) {
      let tasks = _classPrivateFieldGet(this, _tasks);

      const TaskClass = this.options.taskClass;
      tasks.forEach((item, index) => {
        if (item instanceof TaskAbstract) {
          return;
        }

        if (typeof item === 'object') {
          tasks[index] = extend(new TaskClass(null, this), item);
        } else if (Number.parseInt(item) > 0) {
          tasks[index] = new TaskClass(item, this);
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


    findTask(id) {
      const task = this.getTasks().find(t => t.id === id);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmJ1bmRsZV9lcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2pzL21peGlucy9jc3NDbGFzc05hbWUuanMiLCIuLi9zcmMvanMvdXRpbHMvZnVsbHNjcmVlbi1hcGkuanMiLCIuLi9zcmMvanMvdXRpbHMvb2JqLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2NvbXB1dGVkLXN0eWxlLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLmpzIiwiLi4vc3JjL2pzL3VJQ29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcyIsIi4uL3NyYy9qcy91dGlscy9leHRlbmQuanMiLCIuLi9zcmMvanMvc3RhdHVzZXNMaXN0LmpzIiwiLi4vc3JjL2pzL3Rhc2tBYnN0cmFjdC5qcyIsIi4uL3NyYy9qcy9yZXNvbHZlci5qcyIsIi4uL3NyYy9qcy9ldmVudHNMaXN0LmpzIiwiLi4vc3JjL2pzL21hbmFnZXJFdmVudC5qcyIsIi4uL3NyYy9qcy91dGlscy9ndWlkLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2RvbS1kYXRhLmpzIiwiLi4vc3JjL2pzL3Byb2dyZXNzLmpzIiwiLi4vc3JjL2pzL2ljb250LmpzIiwiLi4vc3JjL2pzL2J1dHRvbi5qcyIsIi4uL3NyYy9qcy9idXR0b25zR3JvdXAuanMiLCIuLi9zcmMvanMvdGFza1N0YXR1cy5qcyIsIi4uL3NyYy9qcy90YXNrLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2FuaW1hdGUuanMiLCIuLi9zcmMvanMvbWFuYWdlci5qcyIsIi4uL3NyYy9qcy9qcXVlcnkucGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENTU0NsYXNzTmFtZU1peGluICA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudWxsfHN0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc1ByZWZpeDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICAgZ2V0Q2xhc3NOYW1lOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NQcmVmaXg9PT0gbnVsbCB8fCBuYW1lLnN0YXJ0c1dpdGgodGhpcy5jbGFzc1ByZWZpeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUHJlZml4ICsgbmFtZTtcbiAgICB9LFxuXG59OyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqIEBtb2R1bGUgZnVsbHNjcmVlbi1hcGlcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG4vKipcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHNlZSBbU3BlY2lmaWNhdGlvbl17QGxpbmsgaHR0cHM6Ly9mdWxsc2NyZWVuLnNwZWMud2hhdHdnLm9yZ31cbiAqIEBzZWUgW01hcCBBcHByb2FjaCBGcm9tIFNjcmVlbmZ1bGwuanNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc31cbiAqL1xuY29uc3QgRnVsbHNjcmVlbkFwaSA9IHtcbiAgcHJlZml4ZWQ6IHRydWVcbn07XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbmNvbnN0IGFwaU1hcCA9IFtcbiAgW1xuICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICdmdWxsc2NyZWVuJ1xuICBdLFxuICAvLyBXZWJLaXRcbiAgW1xuICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxuICAgICctd2Via2l0LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNb3ppbGxhXG4gIFtcbiAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLFxuICAgICctbW96LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNaWNyb3NvZnRcbiAgW1xuICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAnTVNGdWxsc2NyZWVuRXJyb3InLFxuICAgICctbXMtZnVsbHNjcmVlbidcbiAgXVxuXTtcblxuY29uc3Qgc3BlY0FwaSA9IGFwaU1hcFswXTtcbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuICAvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cbiAgaWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuICAgIGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuICAgIEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuICB9XG5cbiAgRnVsbHNjcmVlbkFwaS5wcmVmaXhlZCA9IGJyb3dzZXJBcGlbMF0gIT09IHNwZWNBcGlbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG4iLCIvKipcbiAqIEBmaWxlIG9iai5qc1xuICogQG1vZHVsZSBvYmpcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6RWFjaENhbGxiYWNrXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXkgZm9yIHRoZSBvYmplY3QgdGhhdCBpcyBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXktdmFsdWUgZm9yIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXJcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6UmVkdWNlQ2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhY2N1bVxuICogICAgICAgIFRoZSB2YWx1ZSB0aGF0IGlzIGFjY3VtdWxhdGluZyBvdmVyIHRoZSByZWR1Y2UgbG9vcC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleSBmb3IgdGhlIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleS12YWx1ZSBmb3Igb2JqZWN0IHRoYXQgaXMgYmVpbmcgaXRlcmF0ZWQgb3ZlclxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogICAgICAgICBUaGUgbmV3IGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBrZXlzIG9mIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogICAgICAgIFRoZSBPYmplY3QgdG8gZ2V0IHRoZSBrZXlzIGZyb21cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqICAgICAgICAgQW4gYXJyYXkgb2YgdGhlIGtleXMgZnJvbSB0aGUgb2JqZWN0LiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoZVxuICogICAgICAgICBvYmplY3QgcGFzc2VkIGluIHdhcyBpbnZhbGlkIG9yIGhhZCBubyBrZXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG59O1xuXG4vKipcbiAqIEFycmF5LWxpa2UgaXRlcmF0aW9uIGZvciBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqICAgICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICpcbiAqIEBwYXJhbSB7b2JqOkVhY2hDYWxsYmFja30gZm5cbiAqICAgICAgICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGZvciBlYWNoIGtleSBpbiB0aGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaChvYmplY3QsIGZuKSB7XG4gIGtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiBmbihvYmplY3Rba2V5XSwga2V5KSk7XG59XG5cbi8qKlxuICogQXJyYXktbGlrZSByZWR1Y2UgZm9yIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogICAgICAgIFRoZSBPYmplY3QgdGhhdCB5b3Ugd2FudCB0byByZWR1Y2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqICAgICAgICAgQSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2gga2V5IGluIHRoZSBvYmplY3QuIEl0XG4gKiAgICAgICAgIHJlY2VpdmVzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBhbmQgdGhlIHBlci1pdGVyYXRpb24gdmFsdWUgYW5kIGtleVxuICogICAgICAgICBhcyBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gW2luaXRpYWwgPSAwXVxuICogICAgICAgIFN0YXJ0aW5nIHZhbHVlXG4gKlxuICogQHJldHVybiB7TWl4ZWR9XG4gKiAgICAgICAgIFRoZSBmaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGZuLCBpbml0aWFsID0gMCkge1xuICByZXR1cm4ga2V5cyhvYmplY3QpLnJlZHVjZSgoYWNjdW0sIGtleSkgPT4gZm4oYWNjdW0sIG9iamVjdFtrZXldLCBrZXkpLCBpbml0aWFsKTtcbn1cblxuLyoqXG4gKiBPYmplY3QuYXNzaWduLXN0eWxlIG9iamVjdCBzaGFsbG93IG1lcmdlL2V4dGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSAuLi5zb3VyY2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmIChPYmplY3QuYXNzaWduKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBhIHZhbHVlIGlzIGFuIG9iamVjdCBvZiBhbnkga2luZCAtIGluY2x1ZGluZyBET00gbm9kZXMsXG4gKiBhcnJheXMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGV0Yy4gTm90IGZ1bmN0aW9ucywgdGhvdWdoLlxuICpcbiAqIFRoaXMgYXZvaWRzIHRoZSBnb3RjaGEgd2hlcmUgdXNpbmcgYHR5cGVvZmAgb24gYSBgbnVsbGAgdmFsdWVcbiAqIHJlc3VsdHMgaW4gYCdvYmplY3QnYC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGFwcGVhcnMgdG8gYmUgYSBcInBsYWluXCIgb2JqZWN0IC0gdGhhdCBpcywgYVxuICogZGlyZWN0IGluc3RhbmNlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21wdXRlZC1zdHlsZS5qc1xuICogQG1vZHVsZSBjb21wdXRlZC1zdHlsZVxuICovXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEEgc2FmZSBnZXRDb21wdXRlZFN0eWxlLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gRmlyZWZveCwgaWYgdGhlIHBsYXllciBpcyBsb2FkZWQgaW4gYW4gaWZyYW1lIHdpdGhcbiAqIGBkaXNwbGF5Om5vbmVgLCB0aGVuIGBnZXRDb21wdXRlZFN0eWxlYCByZXR1cm5zIGBudWxsYCwgc28sIHdlIGRvIGFcbiAqIG51bGwtY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHBsYXllciBkb2Vzbid0IGJyZWFrIGluIHRoZXNlIGNhc2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtICAgIHtFbGVtZW50fSBlbFxuICogICAgICAgICAgIFRoZSBlbGVtZW50IHlvdSB3YW50IHRoZSBjb21wdXRlZCBzdHlsZSBvZlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBwcm9wXG4gKiAgICAgICAgICAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnRcbiAqXG4gKiBAc2VlICAgICAgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWwsIHByb3ApIHtcbiAgaWYgKCFlbCB8fCAhcHJvcCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZVZhbHVlID8gY29tcHV0ZWRTdHlsZVZhbHVlLmdldFByb3BlcnR5VmFsdWUocHJvcCkgfHwgY29tcHV0ZWRTdHlsZVZhbHVlW3Byb3BdIDogJyc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVkU3R5bGU7XG4iLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqIEBtb2R1bGUgYnJvd3NlclxuICovXG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5jb25zdCB3ZWJraXRWZXJzaW9uTWFwID0gKC9BcHBsZVdlYktpdFxcLyhbXFxkLl0rKS9pKS5leGVjKFVTRVJfQUdFTlQpO1xuY29uc3QgYXBwbGVXZWJraXRWZXJzaW9uID0gd2Via2l0VmVyc2lvbk1hcCA/IHBhcnNlRmxvYXQod2Via2l0VmVyc2lvbk1hcC5wb3AoKSkgOiBudWxsO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIGFuIGlQb2QuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgaU9TIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBJT1NfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbWF0Y2ggPSBVU0VSX0FHRU5ULm1hdGNoKC9PUyAoXFxkKylfL2kpO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn0oKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbiBBbmRyb2lkIGRldmljZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBBbmRyb2lkIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xudWxsfVxuICovXG5leHBvcnQgY29uc3QgQU5EUk9JRF9WRVJTSU9OID0gKGZ1bmN0aW9uKCkge1xuICAvLyBUaGlzIG1hdGNoZXMgQW5kcm9pZCBNYWpvci5NaW5vci5QYXRjaCB2ZXJzaW9uc1xuICAvLyBBTkRST0lEX1ZFUlNJT04gaXMgTWFqb3IuTWlub3IgYXMgYSBOdW1iZXIsIGlmIE1pbm9yIGlzbid0IGF2YWlsYWJsZSwgdGhlbiBvbmx5IE1ham9yIGlzIHJldHVybmVkXG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvQW5kcm9pZCAoXFxkKykoPzpcXC4oXFxkKykpPyg/OlxcLihcXGQrKSkqL2kpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMV0gJiYgcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIGNvbnN0IG1pbm9yID0gbWF0Y2hbMl0gJiYgcGFyc2VGbG9hdChtYXRjaFsyXSk7XG5cbiAgaWYgKG1ham9yICYmIG1pbm9yKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0gKyAnLicgKyBtYXRjaFsyXSk7XG4gIH0gZWxzZSBpZiAobWFqb3IpIHtcbiAgICByZXR1cm4gbWFqb3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBuYXRpdmUgQW5kcm9pZCBicm93c2VyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19OQVRJVkVfQU5EUk9JRCA9IElTX0FORFJPSUQgJiYgQU5EUk9JRF9WRVJTSU9OIDwgNSAmJiBhcHBsZVdlYmtpdFZlcnNpb24gPCA1Mzc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBNb3ppbGxhIEZpcmVmb3guXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0ZJUkVGT1ggPSAoL0ZpcmVmb3gvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIE1pY3Jvc29mdCBFZGdlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19FREdFID0gKC9FZGcvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIEdvb2dsZSBDaHJvbWUuXG4gKlxuICogVGhpcyB3aWxsIGFsc28gYmUgYHRydWVgIGZvciBDaHJvbWUgb24gaU9TLCB3aGljaCB3aWxsIGhhdmUgZGlmZmVyZW50IHN1cHBvcnRcbiAqIGFzIGl0IGlzIGFjdHVhbGx5IFNhZmFyaSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gIUlTX0VER0UgJiYgKCgvQ2hyb21lL2kpLnRlc3QoVVNFUl9BR0VOVCkgfHwgKC9DcmlPUy9pKS50ZXN0KFVTRVJfQUdFTlQpKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgR29vZ2xlIENocm9tZSB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgQ0hST01FX1ZFUlNJT04gPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvKENocm9tZXxDcmlPUylcXC8oXFxkKykvKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsyXSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBJbnRlcm5ldCBFeHBsb3JlciB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgSUVfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzdWx0ID0gKC9NU0lFXFxzKFxcZCspXFwuXFxkLykuZXhlYyhVU0VSX0FHRU5UKTtcbiAgbGV0IHZlcnNpb24gPSByZXN1bHQgJiYgcGFyc2VGbG9hdChyZXN1bHRbMV0pO1xuXG4gIGlmICghdmVyc2lvbiAmJiAoL1RyaWRlbnRcXC83LjAvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAoL3J2OjExLjAvKS50ZXN0KFVTRVJfQUdFTlQpKSB7XG4gICAgLy8gSUUgMTEgaGFzIGEgZGlmZmVyZW50IHVzZXIgYWdlbnQgc3RyaW5nIHRoYW4gb3RoZXIgSUUgdmVyc2lvbnNcbiAgICB2ZXJzaW9uID0gMTEuMDtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uO1xufSgpKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGRlc2t0b3AgU2FmYXJpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSAoL1NhZmFyaS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19DSFJPTUUgJiYgIUlTX0FORFJPSUQgJiYgIUlTX0VER0U7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhIFdpbmRvd3MgbWFjaGluZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfV0lORE9XUyA9ICgvV2luZG93cy9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIHRvdWNoLWVuYWJsZWQuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRPVUNIX0VOQUJMRUQgPSBCb29sZWFuKERvbS5pc1JlYWwoKSAmJiAoXG4gICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8XG4gIHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIHdpbmRvdy5kb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBhZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpIHx8XG4gIChJU19TQUZBUkkgJiYgVE9VQ0hfRU5BQkxFRCAmJiAhKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBob25lLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGlPUyBkZXZpY2UuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbnkgZmxhdm9yIG9mIFNhZmFyaSAtIGluY2x1ZGluZyBpT1MuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0FOWV9TQUZBUkkgPSAoSVNfU0FGQVJJIHx8IElTX0lPUykgJiYgIUlTX0NIUk9NRTtcbiIsIi8qKlxuICogQGZpbGUgZG9tLmpzXG4gKiBAbW9kdWxlIGRvbVxuICovXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgZnMgZnJvbSAnLi9mdWxsc2NyZWVuLWFwaSc7XG5cbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vb2JqJztcbmltcG9ydCBjb21wdXRlZFN0eWxlIGZyb20gJy4vY29tcHV0ZWQtc3R5bGUnO1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICcuL2Jyb3dzZXInO1xuXG4vKipcbiAqIERldGVjdCBpZiBhIHZhbHVlIGlzIGEgc3RyaW5nIHdpdGggYW55IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiAgICAgICAgIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIG5vbi1ibGFuaywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICovXG5mdW5jdGlvbiBpc05vbkJsYW5rU3RyaW5nKHN0cikge1xuICAgIC8vIHdlIHVzZSBzdHIudHJpbSBhcyBpdCB3aWxsIHRyaW0gYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGZyb20gdGhlIGZyb250IG9yIGJhY2sgb2Ygbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycy4gYWthXG4gICAgLy8gQW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIHN0aWxsIGNvbnRhaW4gdGhlbSBhZnRlciBgdHJpbWAgYnV0IHdoaXRlc3BhY2Ugb25seSBzdHJpbmdzXG4gICAgLy8gd2lsbCBoYXZlIGEgbGVuZ3RoIG9mIDAsIGZhaWxpbmcgdGhpcyBjaGVjay5cbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgQm9vbGVhbihzdHIudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaGFzIHdoaXRlc3BhY2UuIFRoaXMgaXMgdXNlZCBieVxuICogY2xhc3MgbWV0aG9kcyB0byBiZSByZWxhdGl2ZWx5IGNvbnNpc3RlbnQgd2l0aCB0aGUgY2xhc3NMaXN0IEFQSS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqICAgICAgICAgVGhlIHN0cmluZyB0byBjaGVjayBmb3Igd2hpdGVzcGFjZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIHRoZXJlIGlzIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgLy8gc3RyLmluZGV4T2YgaW5zdGVhZCBvZiByZWdleCBiZWNhdXNlIHN0ci5pbmRleE9mIGlzIGZhc3RlciBwZXJmb3JtYW5jZSB3aXNlLlxuICAgIGlmIChzdHIuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzcyBoYXMgaWxsZWdhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvZHVjZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgYSBjbGFzc05hbWUgd2l0aGluIGFuIGVsZW1lbnRzIGNsYXNzTmFtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVcbiAqICAgICAgICAgVGhlIGNsYXNzTmFtZSB0byBnZW5lcmF0ZSB0aGUgUmVnRXhwIGZvci5cbiAqXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiAgICAgICAgIFRoZSBSZWdFeHAgdGhhdCB3aWxsIGNoZWNrIGZvciBhIHNwZWNpZmljIGBjbGFzc05hbWVgIGluIGFuIGVsZW1lbnRzXG4gKiAgICAgICAgIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY2xhc3NSZWdFeHAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKCR8XFxcXHMpJyk7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBET00gaW50ZXJmYWNlIGFwcGVhcnMgdG8gYmUgcmVhbCAoaS5lLiBub3Qgc2ltdWxhdGVkKS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGFwcGVhcnMgdG8gYmUgcmVhbCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWwoKSB7XG4gICAgLy8gQm90aCBkb2N1bWVudCBhbmQgd2luZG93IHdpbGwgbmV2ZXIgYmUgdW5kZWZpbmVkIHRoYW5rcyB0byBgZ2xvYmFsYC5cbiAgICByZXR1cm4gZG9jdW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzLCB2aWEgZHVjayB0eXBpbmcsIHdoZXRoZXIgb3Igbm90IGEgdmFsdWUgaXMgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICAgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIERPTSBlbGVtZW50LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWwodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZSwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luRnJhbWUoKSB7XG5cbiAgICAvLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGhlcmUgYmVjYXVzZSBTYWZhcmkgd2lsbCB0aHJvdyBlcnJvcnMgd2hlbiBhdHRlbXB0aW5nXG4gICAgLy8gdG8gZ2V0IGVpdGhlciBgcGFyZW50YCBvciBgc2VsZmBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGY7XG4gICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBmdW5jdGlvbnMgdG8gcXVlcnkgdGhlIERPTSB1c2luZyBhIGdpdmVuIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge3N0cmluZ30gbWV0aG9kXG4gKiAgICAgICAgICBUaGUgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgcXVlcnkgd2l0aC5cbiAqXG4gKiBAcmV0dXJuICB7RnVuY3Rpb259XG4gKiAgICAgICAgICBUaGUgcXVlcnkgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJpZXIobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBpZiAoIWlzTm9uQmxhbmtTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbbWV0aG9kXShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25CbGFua1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSBpc0VsKGNvbnRleHQpID8gY29udGV4dCA6IGRvY3VtZW50O1xuXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXSAmJiBjdHhbbWV0aG9kXShzZWxlY3Rvcik7XG4gICAgfTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCBhbmQgYXBwbGllcyBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmQgaW5zZXJ0cyBjb250ZW50LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWU9J2RpdiddXG4gKiAgICAgICAgIE5hbWUgb2YgdGFnIHRvIGJlIGNyZWF0ZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbcHJvcGVydGllcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBwcm9wZXJ0aWVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbYXR0cmlidXRlcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yfSBjb250ZW50XG4gKiAgICAgICAgQSBjb250ZW50IGRlc2NyaXB0b3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcGVydGllc1twcm9wTmFtZV07XG5cbiAgICAgICAgLy8gU2VlICMyMTc2XG4gICAgICAgIC8vIFdlIG9yaWdpbmFsbHkgd2VyZSBhY2NlcHRpbmcgYm90aCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGluIHRoZVxuICAgICAgICAvLyBzYW1lIG9iamVjdCwgYnV0IHRoYXQgZG9lc24ndCB3b3JrIHNvIHdlbGwuXG4gICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKCdhcmlhLScpICE9PSAtMSB8fCBwcm9wTmFtZSA9PT0gJ3JvbGUnIHx8IHByb3BOYW1lID09PSAndHlwZScpIHtcblxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCB2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbFtzdHlsZU5hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0ZXh0Q29udGVudCBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgZXZlcnl3aGVyZSBhbmQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBtZXRob2QgZm9yIGl0LlxuICAgICAgICAgICAgdGV4dENvbnRlbnQoZWwsIHZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxbcHJvcE5hbWVdICE9PSB2YWwgfHwgcHJvcE5hbWUgPT09ICd0YWJJbmRleCcpIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5qZWN0cyB0ZXh0IGludG8gYW4gZWxlbWVudCwgcmVwbGFjaW5nIGFueSBleGlzdGluZyBjb250ZW50cyBlbnRpcmVseS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBhZGQgdGV4dCBjb250ZW50IGludG9cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcbiAqICAgICAgICAgVGhlIHRleHQgY29udGVudCB0byBhZGQuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBhZGRlZCB0ZXh0IGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29udGVudChlbCwgdGV4dCkge1xuICAgIGlmICh0eXBlb2YgZWwudGV4dENvbnRlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIG5vZGUgb2YgYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGRcbiAqICAgICAgICBFbGVtZW50IHRvIGluc2VydFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gKiAgICAgICAgRWxlbWVudCB0byBpbnNlcnQgY2hpbGQgaW50b1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRvKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIEVsZW1lbnQgdG8gY2hlY2tcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9DaGVja1xuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGNoZWNrIGZvclxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIGBjbGFzc1RvQ2hlY2tgIGhhcyB3aGl0ZSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzVG9DaGVjaykge1xuICAgIHRocm93SWZXaGl0ZXNwYWNlKGNsYXNzVG9DaGVjayk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NSZWdFeHAoY2xhc3NUb0NoZWNrKS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIGFkZCBjbGFzcyBuYW1lIHRvLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NUb0FkZFxuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGFkZC5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgYWRkZWQgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9BZGQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuXG4gICAgICAgIC8vIERvbid0IG5lZWQgdG8gYHRocm93SWZXaGl0ZXNwYWNlYCBoZXJlIGJlY2F1c2UgYGhhc0VsQ2xhc3NgIHdpbGwgZG8gaXRcbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgY2xhc3NMaXN0IG5vdCBiZWluZyBzdXBwb3J0ZWQuXG4gICAgfSBlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NUb0FkZCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc1RvQWRkKS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIHJlbW92ZSBhIGNsYXNzIG5hbWUgZnJvbS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9SZW1vdmVcbiAqICAgICAgICAgQ2xhc3MgbmFtZSB0byByZW1vdmVcbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCBjbGFzcyBuYW1lIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc1RvUmVtb3ZlKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0lmV2hpdGVzcGFjZShjbGFzc1RvUmVtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMgIT09IGNsYXNzVG9SZW1vdmU7XG4gICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBUaGUgY2FsbGJhY2sgZGVmaW5pdGlvbiBmb3IgdG9nZ2xlQ2xhc3MuXG4gKlxuICogQGNhbGxiYWNrIG1vZHVsZTpkb21+UHJlZGljYXRlQ2FsbGJhY2tcbiAqIEBwYXJhbSAgICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICAgIFRoZSBET00gZWxlbWVudCBvZiB0aGUgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgICAgVGhlIGBjbGFzc05hbWVgIHRoYXQgd2FudHMgdG8gYmUgdG9nZ2xlZFxuICpcbiAqIEByZXR1cm4gICB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKiAgICAgICAgICAgSWYgYHRydWVgIGlzIHJldHVybmVkLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gKiAgICAgICAgICAgYGVsZW1lbnRgLiBJZiBgZmFsc2VgLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgcmVtb3ZlZCBmcm9tXG4gKiAgICAgICAgICAgdGhlIGBlbGVtZW50YC4gSWYgYHVuZGVmaW5lZGAsIHRoZSBjYWxsYmFjayB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBuYW1lIHRvL2Zyb20gYW4gZWxlbWVudCBkZXBlbmRpbmcgb24gYW4gb3B0aW9uYWxcbiAqIGNvbmRpdGlvbiBvciB0aGUgcHJlc2VuY2UvYWJzZW5jZSBvZiB0aGUgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRvIHRvZ2dsZSBhIGNsYXNzIG5hbWUgb24uXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgIFRoZSBjbGFzcyB0aGF0IHNob3VsZCBiZSB0b2dnbGVkLlxuICpcbiAqIEBwYXJhbSAge2Jvb2xlYW58bW9kdWxlOmRvbX5QcmVkaWNhdGVDYWxsYmFja30gW3ByZWRpY2F0ZV1cbiAqICAgICAgICAgU2VlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHtAbGluayBtb2R1bGU6ZG9tflByZWRpY2F0ZUNhbGxiYWNrfVxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggYSBjbGFzcyB0aGF0IGhhcyBiZWVuIHRvZ2dsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlLCBwcmVkaWNhdGUpIHtcblxuICAgIC8vIFRoaXMgQ0FOTk9UIHVzZSBgY2xhc3NMaXN0YCBpbnRlcm5hbGx5IGJlY2F1c2UgSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgdG8gdGhlIGBjbGFzc0xpc3QudG9nZ2xlKClgIG1ldGhvZCEgV2hpY2ggaXMgZmluZSBiZWNhdXNlXG4gICAgLy8gYGNsYXNzTGlzdGAgd2lsbCBiZSB1c2VkIGJ5IHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBoYXMgPSBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcblxuICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZShlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9ICFoYXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5lY2Vzc2FyeSBjbGFzcyBvcGVyYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGVcbiAgICAvLyBlbGVtZW50LCBubyBhY3Rpb24gaXMgcmVxdWlyZWQuXG4gICAgaWYgKHByZWRpY2F0ZSA9PT0gaGFzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKipcbiAqIEFwcGx5IGF0dHJpYnV0ZXMgdG8gYW4gSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqICAgICAgICBFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGVzIHRvLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqICAgICAgICBBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYXR0clZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBhdHRyVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCAoYXR0clZhbHVlID09PSB0cnVlID8gJycgOiBhdHRyVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBhbiBlbGVtZW50J3MgYXR0cmlidXRlIHZhbHVlcywgYXMgZGVmaW5lZCBvbiB0aGUgSFRNTCB0YWcuXG4gKlxuICogQXR0cmlidXRlcyBhcmUgbm90IHRoZSBzYW1lIGFzIHByb3BlcnRpZXMuIFRoZXkncmUgZGVmaW5lZCBvbiB0aGUgdGFnXG4gKiBvciB3aXRoIHNldEF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSB0YWdcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCB0YWcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIEFsbCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50LiBCb29sZWFuIGF0dHJpYnV0ZXMgd2lsbCBiZSBgdHJ1ZWAgb3JcbiAqICAgICAgICAgYGZhbHNlYCwgb3RoZXJzIHdpbGwgYmUgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXModGFnKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICAvLyBrbm93biBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAvLyB3ZSBjYW4gY2hlY2sgZm9yIG1hdGNoaW5nIGJvb2xlYW4gcHJvcGVydGllcywgYnV0IG5vdCBhbGwgYnJvd3NlcnNcbiAgICAvLyBhbmQgbm90IGFsbCB0YWdzIGtub3cgYWJvdXQgdGhlc2UgYXR0cmlidXRlcywgc28sIHdlIHN0aWxsIHdhbnQgdG8gY2hlY2sgdGhlbSBtYW51YWxseVxuICAgIGNvbnN0IGtub3duQm9vbGVhbnMgPSAnLCcgKyAnYXV0b3BsYXksY29udHJvbHMscGxheXNpbmxpbmUsbG9vcCxtdXRlZCxkZWZhdWx0LGRlZmF1bHRNdXRlZCcgKyAnLCc7XG5cbiAgICBpZiAodGFnICYmIHRhZy5hdHRyaWJ1dGVzICYmIHRhZy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB0YWcuYXR0cmlidXRlcztcblxuICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBrbm93biBib29sZWFuc1xuICAgICAgICAgICAgLy8gdGhlIG1hdGNoaW5nIGVsZW1lbnQgcHJvcGVydHkgd2lsbCByZXR1cm4gYSB2YWx1ZSBmb3IgdHlwZW9mXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhZ1thdHRyTmFtZV0gPT09ICdib29sZWFuJyB8fCBrbm93bkJvb2xlYW5zLmluZGV4T2YoJywnICsgYXR0ck5hbWUgKyAnLCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSBvZiBhbiBpbmNsdWRlZCBib29sZWFuIGF0dHJpYnV0ZSBpcyB0eXBpY2FsbHkgYW4gZW1wdHlcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgKCcnKSB3aGljaCB3b3VsZCBlcXVhbCBmYWxzZSBpZiB3ZSBqdXN0IGNoZWNrIGZvciBhIGZhbHNlIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gZG9uJ3Qgd2FudCBzdXBwb3J0IGJhZCBjb2RlIGxpa2UgYXV0b3BsYXk9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ialthdHRyTmFtZV0gPSBhdHRyVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBnZXQgdGhlIHZhbHVlIG9mLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgVmFsdWUgdG8gc2V0IHRoZSBhdHRyaWJ1dGUgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYmxvY2sgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFR1cm4gb2ZmIHRleHQgc2VsZWN0aW9uIGJsb2NraW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5ibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBJZGVudGljYWwgdG8gdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBmdW5jdGlvbiwgYnV0IGVuc3VyZXMgdGhhdFxuICogdGhlIG1ldGhvZCBpcyBzdXBwb3J0ZWQgYXQgYWxsIChpdCBpcyBpbiBhbGwgYnJvd3NlcnMgd2UgY2xhaW0gdG8gc3VwcG9ydClcbiAqIGFuZCB0aGF0IHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYmVmb3JlIGNvbnRpbnVpbmcuXG4gKlxuICogVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGFsc28gc2hpbXMgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHByb3ZpZGVkIGJ5IHNvbWVcbiAqIG9sZGVyIGJyb3dzZXJzIChuYW1lbHksIElFOCkuXG4gKlxuICogQWRkaXRpb25hbGx5LCBzb21lIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGFkZGluZyBwcm9wZXJ0aWVzIHRvIGFcbiAqIGBDbGllbnRSZWN0YC9gRE9NUmVjdGAgb2JqZWN0OyBzbywgd2Ugc2hhbGxvdy1jb3B5IGl0IHdpdGggdGhlIHN0YW5kYXJkXG4gKiBwcm9wZXJ0aWVzIChleGNlcHQgYHhgIGFuZCBgeWAgd2hpY2ggYXJlIG5vdCB3aWRlbHkgc3VwcG9ydGVkKS4gVGhpcyBoZWxwc1xuICogYXZvaWQgaW1wbGVtZW50YXRpb25zIHdoZXJlIGtleXMgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgd2hvc2UgYENsaWVudFJlY3RgIHdlIHdhbnQgdG8gY2FsY3VsYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKiAgICAgICAgIEFsd2F5cyByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IC0gb3IgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgWydib3R0b20nLCAnaGVpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ3dpZHRoJ10uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGlmIChyZWN0W2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSByZWN0W2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUoZWwsICdoZWlnaHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC53aWR0aCkge1xuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlKGVsLCAnd2lkdGgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwb3NpdGlvbiBvZiBhIERPTSBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tflBvc2l0aW9uXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlZnRcbiAqICAgICAgICAgICBQaXhlbHMgdG8gdGhlIGxlZnQuXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogICAgICAgICAgIFBpeGVscyBmcm9tIHRoZSB0b3AuXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqXG4gKiBVc2VzIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIHRlY2huaXF1ZSBmcm9tIEpvaG4gUmVzaWcuXG4gKlxuICogQHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvZ2V0Ym91bmRpbmdjbGllbnRyZWN0LWlzLWF3ZXNvbWUvXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCBvZmZzZXQuXG4gKlxuICogQHJldHVybiB7bW9kdWxlOmRvbX5Qb3NpdGlvbn1cbiAqICAgICAgICAgVGhlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQb3NpdGlvbihlbCkge1xuICAgIGlmICghZWwgfHwgKGVsICYmICFlbC5vZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuXG4gICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCAmJiBlbCAhPT0gZG9jdW1lbnRbZnMuZnVsbHNjcmVlbkVsZW1lbnRdKSB7XG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcblxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0LFxuICAgICAgICB0b3AsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgYSBET00gZWxlbWVudCBvciBtb3VzZSBwb2ludGVyLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tfkNvb3JkaW5hdGVzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHhcbiAqICAgICAgICAgICB4IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlcbiAqICAgICAgICAgICB5IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gd2l0aGluIGFuIGVsZW1lbnQuXG4gKlxuICogVGhlIGJhc2Ugb24gdGhlIGNvb3JkaW5hdGVzIGFyZSB0aGUgYm90dG9tIGxlZnQgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBvbiB3aGljaCB0byBnZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gb24uXG4gKlxuICogQHBhcmFtICB7RXZlbnRUYXJnZXR+RXZlbnR9IGV2ZW50XG4gKiAgICAgICAgIEV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6ZG9tfkNvb3JkaW5hdGVzfVxuICogICAgICAgICBBIGNvb3JkaW5hdGVzIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBtb3VzZSBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZWwsIGV2ZW50KSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbDtcblxuICAgICAgICB3aGlsZSAoaXRlbSAmJiBpdGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdodG1sJykge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZShpdGVtLCAndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgICAgIGlmICgvXm1hdHJpeC8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdHJhbnNmb3JtLnNsaWNlKDcsIC0xKS5zcGxpdCgvLFxccy8pLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZC54ICs9IHZhbHVlc1s0XTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXm1hdHJpeDNkLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sXFxzLykubWFwKE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnggKz0gdmFsdWVzWzEyXTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzEzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0ge307XG4gICAgY29uc3QgYm94VGFyZ2V0ID0gZmluZFBvc2l0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYm94ID0gZmluZFBvc2l0aW9uKGVsKTtcbiAgICBjb25zdCBib3hXID0gYm94LndpZHRoO1xuICAgIGNvbnN0IGJveEggPSBib3guaGVpZ2h0O1xuICAgIGxldCBvZmZzZXRZID0gZXZlbnQub2Zmc2V0WSAtIChib3gudG9wIC0gYm94VGFyZ2V0LnRvcCk7XG4gICAgbGV0IG9mZnNldFggPSBldmVudC5vZmZzZXRYIC0gKGJveC5sZWZ0IC0gYm94VGFyZ2V0LmxlZnQpO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIG9mZnNldFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGJveC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyBib3gudG9wO1xuICAgICAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgICAgIG9mZnNldFggLT0gdHJhbnNsYXRlZC54O1xuICAgICAgICAgICAgb2Zmc2V0WSAtPSB0cmFuc2xhdGVkLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvbi55ID0gKDEgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvZmZzZXRZIC8gYm94SCkpKTtcbiAgICBwb3NpdGlvbi54ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb2Zmc2V0WCAvIGJveFcpKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcywgdmlhIGR1Y2sgdHlwaW5nLCB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSAge01peGVkfSB2YWx1ZVxuICogICAgICAgICBDaGVjayBpZiB0aGlzIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIHRleHQgbm9kZSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMztcbn1cblxuXG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCl7XG4gICAgaWYgKGlzRWwoZWwpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9wYWNpdHkgPSBlbC5zdHlsZT8ub3BhY2l0eSAhPT0gJycgPyBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpIDogMTtcblxuICAgIGlmIChvcGFjaXR5ID09PSAwIHx8IGNvbXB1dGVkU3R5bGUoZWwsICd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISEoIGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNzc0NsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoQ2xhc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcywgY29tcGFyZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMuc3RhcnRzV2l0aChzZWFyY2hDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn0pIHtcblxuICAgIGxldCBleGlzdCA9ICcnO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoZXhpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBleGlzdCA9IGNvbXBhcmUoYyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChleGlzdCAhPT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKGV4aXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGV4aXN0KTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcylcbiAgICB9XG59XG5cbi8qKlxuICogRW1wdGllcyB0aGUgY29udGVudHMgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBlbXB0eSBjaGlsZHJlbiBmcm9tXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBubyBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlFbChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIG1peGVkIHZhbHVlIHRoYXQgZGVzY3JpYmVzIGNvbnRlbnQgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NXG4gKiB2aWEgc29tZSBtZXRob2QuIEl0IGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICpcbiAqIFR5cGUgICAgICAgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLVxuICogYHN0cmluZ2AgICB8IFRoZSB2YWx1ZSB3aWxsIGJlIG5vcm1hbGl6ZWQgaW50byBhIHRleHQgbm9kZS5cbiAqIGBFbGVtZW50YCAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBUZXh0Tm9kZWAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBBcnJheWAgICAgfCBBIG9uZS1kaW1lbnNpb25hbCBhcnJheSBvZiBzdHJpbmdzLCBlbGVtZW50cywgdGV4dCBub2Rlcywgb3IgZnVuY3Rpb25zLiBUaGVzZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgb3IgdGV4dCBub2RlIChhbnkgb3RoZXIgcmV0dXJuIHZhbHVlLCBsaWtlIGFuIGFycmF5LCB3aWxsIGJlIGlnbm9yZWQpLlxuICogYEZ1bmN0aW9uYCB8IEEgZnVuY3Rpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgdGV4dCBub2RlLCBvciBhcnJheSAtIGFueSBvZiB0aGUgb3RoZXIgcG9zc2libGUgdmFsdWVzIGRlc2NyaWJlZCBhYm92ZS4gVGhpcyBtZWFucyB0aGF0IGEgY29udGVudCBkZXNjcmlwdG9yIGNvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZ1bmN0aW9ucywgYnV0IHRob3NlIHNlY29uZC1sZXZlbCBmdW5jdGlvbnMgbXVzdCByZXR1cm4gc3RyaW5ncywgZWxlbWVudHMsIG9yIHRleHQgbm9kZXMuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ3xFbGVtZW50fFRleHROb2RlfEFycmF5fEZ1bmN0aW9ufSBtb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yXG4gKi9cblxuLyoqXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgZm9yIGV2ZW50dWFsIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gKlxuICogVGhpcyBhbGxvd3MgYSB3aWRlIHJhbmdlIG9mIGNvbnRlbnQgZGVmaW5pdGlvbiBtZXRob2RzLCBidXQgaGVscHMgcHJvdGVjdFxuICogZnJvbSBmYWxsaW5nIGludG8gdGhlIHRyYXAgb2Ygc2ltcGx5IHdyaXRpbmcgdG8gYGlubmVySFRNTGAsIHdoaWNoIGNvdWxkXG4gKiBiZSBhbiBYU1MgY29uY2Vybi5cbiAqXG4gKiBUaGUgY29udGVudCBmb3IgYW4gZWxlbWVudCBjYW4gYmUgcGFzc2VkIGluIG11bHRpcGxlIHR5cGVzIGFuZFxuICogY29tYmluYXRpb25zLCB3aG9zZSBiZWhhdmlvciBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogICAgICAgICBBbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCB3YXMgcGFzc2VkIGluLCBub3JtYWxpemVkIHRvIGFuIGFycmF5IG9mXG4gKiAgICAgICAgIGVsZW1lbnRzIG9yIHRleHQgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpIHtcblxuICAgIC8vIEZpcnN0LCBpbnZva2UgY29udGVudCBpZiBpdCBpcyBhIGZ1bmN0aW9uLiBJZiBpdCBwcm9kdWNlcyBhbiBhcnJheSxcbiAgICAvLyB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgbm9ybWFsaXphdGlvbi5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IHVwLCBub3JtYWxpemUgdG8gYW4gYXJyYXksIHNvIG9uZSBvciBtYW55IGl0ZW1zIGNhbiBiZSBub3JtYWxpemVkLFxuICAgIC8vIGZpbHRlcmVkLCBhbmQgcmV0dXJuZWQuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGNvbnRlbnQpID8gY29udGVudCA6IFtjb250ZW50XSkubWFwKHZhbHVlID0+IHtcblxuICAgICAgICAvLyBGaXJzdCwgaW52b2tlIHZhbHVlIGlmIGl0IGlzIGEgZnVuY3Rpb24gdG8gcHJvZHVjZSBhIG5ldyB2YWx1ZSxcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBiZSBzdWJzZXF1ZW50bHkgbm9ybWFsaXplZCB0byBhIE5vZGUgb2Ygc29tZSBraW5kLlxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbCh2YWx1ZSkgfHwgaXNUZXh0Tm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICgvXFxTLykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIodmFsdWUgPT4gdmFsdWUpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGFwcGVuZHMgY29udGVudCB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgdG8gYXBwZW5kIG5vcm1hbGl6ZWQgY29udGVudCB0by5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpkb21+Q29udGVudERlc2NyaXB0b3J9IGNvbnRlbnRcbiAqICAgICAgICBBIGNvbnRlbnQgZGVzY3JpcHRvciB2YWx1ZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgZWxlbWVudCB3aXRoIGFwcGVuZGVkIG5vcm1hbGl6ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcbiAgICBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpLmZvckVhY2gobm9kZSA9PiBlbC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGluc2VydHMgY29udGVudCBpbnRvIGFuIGVsZW1lbnQ7IHRoaXMgaXMgaWRlbnRpY2FsIHRvXG4gKiBgYXBwZW5kQ29udGVudCgpYCwgZXhjZXB0IGl0IGVtcHRpZXMgdGhlIGVsZW1lbnQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEVsZW1lbnQgdG8gaW5zZXJ0IG5vcm1hbGl6ZWQgY29udGVudCBpbnRvLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggaW5zZXJ0ZWQgbm9ybWFsaXplZCBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChlbCwgY29udGVudCkge1xuICAgIHJldHVybiBhcHBlbmRDb250ZW50KGVtcHR5RWwoZWwpLCBjb250ZW50KTtcbn1cblxuXG4vKipcbiAqIGNsb3Nlc3QgZWxlbWVudCBwb2x5ZmlsbFxuICovXG4oZnVuY3Rpb24oRUxFTUVOVCkge1xuICAgIEVMRU1FTlQubWF0Y2hlcyA9IEVMRU1FTlQubWF0Y2hlcyB8fCBFTEVNRU5ULm1vek1hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVMRU1FTlQub01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICBFTEVNRU5ULmNsb3Nlc3QgPSBFTEVNRU5ULmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH07XG59KEVsZW1lbnQucHJvdG90eXBlKSk7XG5cbi8qKlxuICogRmluZHMgYSBzaW5nbGUgRE9NIGVsZW1lbnQgbWF0Y2hpbmcgYHNlbGVjdG9yYCB3aXRoaW4gdGhlIG9wdGlvbmFsXG4gKiBgY29udGV4dGAgb2YgYW5vdGhlciBET00gZWxlbWVudCAoZGVmYXVsdGluZyB0byBgZG9jdW1lbnRgKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiAgICAgICAgIEEgdmFsaWQgQ1NTIHNlbGVjdG9yLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBgcXVlcnlTZWxlY3RvcmAuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudHxTdHJpbmd9IFtjb250ZXh0PWRvY3VtZW50XVxuICogICAgICAgICBBIERPTSBlbGVtZW50IHdpdGhpbiB3aGljaCB0byBxdWVyeS4gQ2FuIGFsc28gYmUgYSBzZWxlY3RvclxuICogICAgICAgICBzdHJpbmcgaW4gd2hpY2ggY2FzZSB0aGUgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudCB3aWxsIGJlIHVzZWRcbiAqICAgICAgICAgYXMgY29udGV4dC4gSWYgbWlzc2luZyAob3Igbm8gZWxlbWVudCBtYXRjaGVzIHNlbGVjdG9yKSwgZmFsbHNcbiAqICAgICAgICAgYmFjayB0byBgZG9jdW1lbnRgLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgdGhhdCB3YXMgZm91bmQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVRdWVyaWVyKCdxdWVyeVNlbGVjdG9yJyk7XG5cbi8qKlxuICogRmluZHMgYSBhbGwgRE9NIGVsZW1lbnRzIG1hdGNoaW5nIGBzZWxlY3RvcmAgd2l0aGluIHRoZSBvcHRpb25hbFxuICogYGNvbnRleHRgIG9mIGFub3RoZXIgRE9NIGVsZW1lbnQgKGRlZmF1bHRpbmcgdG8gYGRvY3VtZW50YCkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvclxuICogICAgICAgICBBIHZhbGlkIENTUyBzZWxlY3Rvciwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gYHF1ZXJ5U2VsZWN0b3JBbGxgLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR8U3RyaW5nfSBbY29udGV4dD1kb2N1bWVudF1cbiAqICAgICAgICAgQSBET00gZWxlbWVudCB3aXRoaW4gd2hpY2ggdG8gcXVlcnkuIENhbiBhbHNvIGJlIGEgc2VsZWN0b3JcbiAqICAgICAgICAgc3RyaW5nIGluIHdoaWNoIGNhc2UgdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQgd2lsbCBiZSB1c2VkXG4gKiAgICAgICAgIGFzIGNvbnRleHQuIElmIG1pc3NpbmcgKG9yIG5vIGVsZW1lbnQgbWF0Y2hlcyBzZWxlY3RvciksIGZhbGxzXG4gKiAgICAgICAgIGJhY2sgdG8gYGRvY3VtZW50YC5cbiAqXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqICAgICAgICAgQSBlbGVtZW50IGxpc3Qgb2YgZWxlbWVudHMgdGhhdCB3ZXJlIGZvdW5kLiBXaWxsIGJlIGVtcHR5IGlmIG5vbmVcbiAqICAgICAgICAgd2VyZSBmb3VuZC5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCAkJCA9IGNyZWF0ZVF1ZXJpZXIoJ3F1ZXJ5U2VsZWN0b3JBbGwnKTtcbiIsImltcG9ydCB7Q1NTQ2xhc3NOYW1lTWl4aW59IGZyb20gJy4vbWl4aW5zL2Nzc0NsYXNzTmFtZSc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VPZlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZU9wdGlvbnNQdG9wZXJ0eShwcm9wZXJ0eSwgb3B0aW9ucywgaW5zdGFuY2VPZiA9IEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKChvcHRpb25zW3Byb3BlcnR5XSBpbnN0YW5jZW9mIGluc3RhbmNlT2YpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY2FsbC4gUHJvcGVydHkgJyArIHByb3BlcnR5ICsgJyBpcyBub3QgdmFsaWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxzdHJpbmd9ICBjb250ZW50XG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NTZXQgPSBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgYXJyYXkgPSAodHlwZW9mIHByb3BlcnRpZXMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogcHJvcGVydGllcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBjbGFzc1NldC5hZGQoaXRlbSkpO1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgY3NzQ2xhc3Mgb2YgY2xhc3NTZXQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKGNzc0NsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzZWxlY3Rvci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcLlwiLCAnZycpLCAnJCYnICsgVUlDb21wb25lbnQuY2xhc3NQcmVmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBVSUNvbXBvbmVudC5fbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIERvbS4kKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W118bnVsbH1cbiAgICAgKi9cbiAgICAkJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBzZWxlY3RvciA9IFVJQ29tcG9uZW50Ll9ub3JtYWxpemVQcmVmaXgoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gRG9tLiQkKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVUlDb21wb25lbnQsIENTU0NsYXNzTmFtZU1peGluKTtcbiIsIi8qIGNyYzMyLmpzIChDKSAyMDE0LXByZXNlbnQgU2hlZXRKUyAtLSBodHRwOi8vc2hlZXRqcy5jb20gKi9cbi8qIHZpbTogc2V0IHRzPTI6ICovXG4vKmV4cG9ydGVkIENSQzMyICovXG52YXIgQ1JDMzI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Lypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdC8qZXNsaW50LWRpc2FibGUgKi9cblx0aWYodHlwZW9mIERPX05PVF9FWFBPUlRfQ1JDID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmKCdvYmplY3QnID09PSB0eXBlb2YgZXhwb3J0cykge1xuXHRcdFx0ZmFjdG9yeShleHBvcnRzKTtcblx0XHR9IGVsc2UgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IHt9O1xuXHRcdFx0XHRmYWN0b3J5KG1vZHVsZSk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0fVxuXHQvKmVzbGludC1lbmFibGUgKi9cblx0Lypqc2hpbnQgaWdub3JlOmVuZCAqL1xufShmdW5jdGlvbihDUkMzMikge1xuQ1JDMzIudmVyc2lvbiA9ICcxLjIuMCc7XG4vKiBzZWUgcGVyZi9jcmMzMnRhYmxlLmpzICovXG4vKmdsb2JhbCBJbnQzMkFycmF5ICovXG5mdW5jdGlvbiBzaWduZWRfY3JjX3RhYmxlKCkge1xuXHR2YXIgYyA9IDAsIHRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5cblx0Zm9yKHZhciBuID0wOyBuICE9IDI1NjsgKytuKXtcblx0XHRjID0gbjtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHR0YWJsZVtuXSA9IGM7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkodGFibGUpIDogdGFibGU7XG59XG5cbnZhciBUID0gc2lnbmVkX2NyY190YWJsZSgpO1xuZnVuY3Rpb24gY3JjMzJfYnN0cihic3RyLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnN0ci5sZW5ndGggLSAxO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnN0ci5jaGFyQ29kZUF0KGkrKykpJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15ic3RyLmNoYXJDb2RlQXQoaSsrKSkmMHhGRl07XG5cdH1cblx0aWYoaSA9PT0gTCkgQyA9IChDPj4+OCkgXiBUWyhDIF4gYnN0ci5jaGFyQ29kZUF0KGkpKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfYnVmKGJ1Ziwgc2VlZCkge1xuXHRpZihidWYubGVuZ3RoID4gMTAwMDApIHJldHVybiBjcmMzMl9idWZfOChidWYsIHNlZWQpO1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSAzO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHR9XG5cdHdoaWxlKGkgPCBMKzMpIEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdHJldHVybiBDIF4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1Zl84KGJ1Ziwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSA3O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdH1cblx0d2hpbGUoaSA8IEwrNykgQyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfc3RyKHN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTD1zdHIubGVuZ3RoLCBjLCBkOyBpIDwgTDspIHtcblx0XHRjID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcblx0XHRpZihjIDwgMHg4MCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gYykmMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDE5MnwoKGM+PjYpJjMxKSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDEyOHwoYyY2MykpKSYweEZGXTtcblx0XHR9IGVsc2UgaWYoYyA+PSAweEQ4MDAgJiYgYyA8IDB4RTAwMCkge1xuXHRcdFx0YyA9IChjJjEwMjMpKzY0OyBkID0gc3RyLmNoYXJDb2RlQXQoaSsrKSYxMDIzO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDI0MHwoKGM+PjgpJjcpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+MikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoZD4+NikmMTUpfCgoYyYzKTw8NCkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KGQmNjMpKSkmMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgyMjR8KChjPj4xMikmMTUpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+NikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gQyBeIC0xO1xufVxuQ1JDMzIudGFibGUgPSBUO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJzdHIgPSBjcmMzMl9ic3RyO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJ1ZiA9IGNyYzMyX2J1Zjtcbi8vICRGbG93SWdub3JlXG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iLCJcbi8qKlxuKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuKiBAcGFyYW0gaXRlbVxuKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gc291cmNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcyk7XG59IiwiXG5jb25zdCBTdGF0dXNlc0xpc3QgPSB7XG4gICAgSU5JVDogLTEsXG4gICAgV0FJVDogMCxcbiAgICBFWEVDOiAxLFxuICAgIERPTkU6IDIsXG4gICAgRVJST1I6IDMsXG4gICAgREVMRVRFRDogOTksXG59O1xuXG5TdGF0dXNlc0xpc3QuU0VUX1ZJU0lCTEUgPSBbXG4gICAgU3RhdHVzZXNMaXN0LldBSVQsIFN0YXR1c2VzTGlzdC5FWEVDLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ET05FXG5dO1xuXG5TdGF0dXNlc0xpc3QuU0VUX0NPTVBMRVRFID0gW1xuICAgIFN0YXR1c2VzTGlzdC5ET05FLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ERUxFVEVEXG5dO1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TdGF0dXNlc0xpc3QuaXMgPSBmdW5jdGlvbiAoc2V0LCBzdGF0dXMpIHtcbiAgICByZXR1cm4gc2V0LmluZGV4T2Yoc3RhdHVzKSA+IC0xO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzZXNMaXN0O1xuIiwiaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcblxuLyoqXG4gKkBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Fic3RyYWN0IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgI21hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBpZDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbW1vbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgaW5pdGlhdG9yTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJvZ3Jlc3MgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0ZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRpdGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXR1cyA9IFN0YXR1c2VzLklOSVQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IG51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgbWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gcGFyc2VJbnQoaWQpO1xuICAgICAgICB0aGlzLiNtYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgI3JlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuI2VsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuI2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnd3JhcHBlcicsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgJ2RhdGEtdGFzay1pZCc6IHRoaXMuaWRcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBlbFRhc2sgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiB0aGlzLl9idWlsZENzc0NsYXNzKCl9KTtcbiAgICAgICAgdGhpcy5fcmVuZGVyQ2hpbGQoZWxUYXNrKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZChlbFRhc2spO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGNoaWxkIGluc3RhbmNlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVuZGVyQ2hpbGQoZWxXcmFwcGVyKSB7XG5cbiAgICB9XG5cbiAgICAvLyBub2luc3BlY3Rpb24gSlNNZXRob2RDYW5CZVN0YXRpY1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfYnVpbGRDc3NDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIFsndGFzay1pdGVtJ11cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2Nzc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2Nzc0xpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jc3NMaXN0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nzc0xpc3QgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBzdGF0dXNlc0xpc3RLZXkgaW4gU3RhdHVzZXNMaXN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFN0YXR1c2VzTGlzdFtzdGF0dXNlc0xpc3RLZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nzc0xpc3RbU3RhdHVzZXNMaXN0W3N0YXR1c2VzTGlzdEtleV1dID0gVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKCdzdGF0dXMtJyArIHN0YXR1c2VzTGlzdEtleS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NMaXN0O1xuICAgIH07XG5cblxuICAgIGNzc0NsYXNzU3dpdGNoKCkge1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgbGV0IGNzc0NsYXNzLCBzZWFyY2hDbGFzcztcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWFuYWdlci5vcHRpb25zLnRoZW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgbGV0IHRoZW1lID0gdGhpcy5tYW5hZ2VyLm9wdGlvbnMudGhlbWVbdGhpcy5zdGF0dXNdIHx8IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCd0aGVtZS0nICsgdGhlbWUpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgndGhlbWUnKTtcbiAgICAgICAgICAgICAgICBEb20uc3dpdGNoQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MsIHNlYXJjaENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjc3NDbGFzcyA9IFRhc2tBYnN0cmFjdC4jY3NzTGlzdCgpW3RoaXMuc3RhdHVzXTtcbiAgICAgICAgc2VhcmNoQ2xhc3MgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCdzdGF0dXMnKTtcbiAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50c1xuICAgICAqL1xuICAgIHJlZnJlc2gocmVzcG9uc2UsIGVsZW1lbnRzID0gbnVsbCkge1xuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMoZWxlbWVudHMsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFByb2dyZXNzVG90YWwocHJvcGVydHkgPSAncHJvZ3Jlc3MnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlLnJlZHVjZSgoYSwgYykgPT4gYSArIGMpIC8gdmFsdWUubGVuZ3RoLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gb2xkVGFza1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVmcmVzaEVsZW1lbnRzKGVsZW1lbnRzLCBvbGRUYXNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNQYXJ0cyA9IHRoaXMub3B0aW9ucy5wYXJ0cztcblxuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50cykuZm9yRWFjaCgoZWxlbWVudE5hbWUpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9wdGlvbnNQYXJ0c1tlbGVtZW50TmFtZV0sXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlZnJlc2hCYXNpY1Byb3BlcnR5JztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgW20sIHBdID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gbSArIHBbMF0udG9VcHBlckNhc2UoKSArIHAuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT09IFwidW5kZWZpbmVkXCIpID8gdGhpc1twcm9wZXJ0eV0gOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9ICh0eXBlb2Ygb2xkVGFza1twcm9wZXJ0eV0gIT09IFwidW5kZWZpbmVkXCIpID8gb2xkVGFza1twcm9wZXJ0eV0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSAnXycgKyBtZXRob2Q7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW21ldGhvZF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdLmNhbGwodGhpcywgZWxlbWVudHNbZWxlbWVudE5hbWVdLCB2YWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIG5vaW5zcGVjdGlvbiBKU01ldGhvZENhbkJlU3RhdGljXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9yZWZyZXNoQmFzaWNQcm9wZXJ0eShlbGVtZW50LCB2YWx1ZSwgcHJvcGVydHkpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFRhc2tBYnN0cmFjdC5nZXRDbGFzc05hbWUoJ2xpc3QtJyArIHByb3BlcnR5KTtcbiAgICAgICAgICAgIGxldCBlbExpc3QgPSBEb20uJCgndWwuJyArIGNsYXNzTmFtZSwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmIChlbExpc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbExpc3QgPSB0aGlzLmNyZWF0ZUVsKCd1bCcsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGVsTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxMaSA9IERvbS4kKGBsaTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWAsIGVsTGlzdCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsTGkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxMaXN0LmFwcGVuZChEb20uY3JlYXRlRWwoJ2xpJywge30sIHt9LCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxMaS5pbm5lclRleHQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsTGkuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hbmFnZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0RlZmF1bHRzLnRhc2tPcHRpb25zfHt9fVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm9wdGlvbnMudGFza09wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBzdGF0dXNUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm9wdGlvbnMuc3RhdHVzVGV4dFt0aGlzLnN0YXR1c10gfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNUZXh0ICsgXCIgXCIgKyB0aGlzLmdldFRpdGxlKCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQge3N0ciBhcyBDUkMzMn0gZnJvbSAnY3JjLTMyJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCAqIGFzIE9iaiBmcm9tICcuL3V0aWxzL29iaic7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gXCIuL3N0YXR1c2VzTGlzdFwiO1xuaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcblxuY29uc3QgRU1QVFlfTUVTU0FHRSA9ICdfX0VNUFRZX18nO1xuXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBkZWxheVRpbWU6IDEwMDAsXG4gICAgcGFyYW1zOiB7fVxufTtcblxuLyoqXG4gKiBSZXNvbHZlIHRhc2sgaW5mb3JtYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb2x2ZXIge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Jlc29sdmVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgI2NhY2hlID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TWFuYWdlcltdfVxuICAgICAqL1xuICAgIHN0YXRpYyAjY29tbW9uTWFuYWdlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgI21hbmFnZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7e319XG4gICAgICovXG4gICAgI29wdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgI251bWJlclJlcXVlc3RzID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIERlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdC5wYXJhbXMgJiYgT2JqLmlzUGxhaW4ob3B0LnBhcmFtcykpIHtcbiAgICAgICAgICAgIG9wdC5wYXJhbXMgPSBPYmplY3QuZW50cmllcyhvcHQucGFyYW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN0YXJ0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25FbmRcbiAgICAgKi9cbiAgICByZXNvbHZlKG9uU3RhcnQsIG9uRW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZXJzID0gdGhpcy4jZ2V0TWFuYWdlcnMoKTtcblxuICAgICAgICAgICAgdGhpcy4jbnVtYmVyUmVxdWVzdHMgPSAwO1xuXG4gICAgICAgICAgICBtYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBvblN0YXJ0KG1hbmFnZXIpKTtcbiAgICAgICAgICAgIHRoaXMuI3JlcXVlc3QoMCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICE9PSBFTVBUWV9NRVNTQUdFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMuI251bWJlclJlcXVlc3RzO1xuICAgICAgICAgICAgICAgIG1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG9uRW5kKG1hbmFnZXIsIG51bWJlcikpO1xuICAgICAgICAgICAgICAgIHRoaXMuI251bWJlclJlcXVlc3RzID0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICNyZXF1ZXN0KHRpbWVPdXQgPSB0aGlzLm9wdGlvbnMuZGVsYXlUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVSZXF1ZXN0KHRpbWVPdXQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgIEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30gLSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9JyBgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChyYXcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmF3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZFRhc2tzKGl0ZW0uaWQpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5tYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVyLiN1cGRhdGVDb21tb25NYW5hZ2VycyhyYXcsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVxdWVzdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gcmVzb2x2ZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgI3VwZGF0ZUNvbW1vbk1hbmFnZXJzKHJlc3BvbnNlLCByZXNvbHZlcikge1xuICAgICAgICBSZXNvbHZlci4jY29tbW9uTWFuYWdlcnMuZm9yRWFjaChtYW5hZ2VyID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gbWFuYWdlci5maW5kVGFzayhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sgPT09IG51bGwgJiYgU3RhdHVzZXNMaXN0LmlzKFN0YXR1c2VzTGlzdC5TRVRfQ09NUExFVEUsIGl0ZW0uc3RhdHVzKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbW1vbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLmFkZFRhc2tzKFtpdGVtLmlkXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzayA9IG1hbmFnZXIuZmluZFRhc2soaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbml0aWF0b3JNYW5hZ2VyID0gcmVzb2x2ZXIudGFza3MuZmluZCh2YWx1ZSA9PiB2YWx1ZS5pZCA9PT0gaXRlbS5pZCk/Lm1hbmFnZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QgJiYgdGFzay5jb21tb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuX3VwZGF0ZVRhc2sodGFzaywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVPdXRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlIHwgbmV2ZXI+fVxuICAgICAqL1xuICAgICNjcmVhdGVSZXF1ZXN0KHRpbWVPdXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy50YXNrc0lkO1xuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChFTVBUWV9NRVNTQUdFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRhc2tzKSwgdGltZU91dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigodGFza3MpID0+IHtcbiAgICAgICAgICAgICsrdGhpcy4jbnVtYmVyUmVxdWVzdHM7XG5cbiAgICAgICAgICAgIGxldCBib2R5ID0gdGFza3MubWFwKChpdGVtKSA9PiBgdFtdPSR7aXRlbX1gKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB0aGlzLm9wdGlvbnMucGFyYW1zO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IGJvZHkuY29uY2F0KHBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh0aGlzLm9wdGlvbnMudXJsLCBleHRlbmQoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBlbmNvZGVVUkkoYm9keS5qb2luKCcmJykpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgIGdldCB0YXNrcygpIHtcbiAgICAgICAgbGV0IHRhc2tzID0gW107XG4gICAgICAgIHRoaXMuI21hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgIG1hbmFnZXIuZ2V0VGFza3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tbW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TnVtYmVyW119XG4gICAgICovXG4gICAgZ2V0IHRhc2tzSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLm1hcCgodGFzaykgPT4gdGFzay5pZCkuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSA9PT0gaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdHxib29sZWFufVxuICAgICAqL1xuICAgIGZpbmRUYXNrcyhpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbnVtYmVyUmVxdWVzdHMgPiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgI2dldE1hbmFnZXJzKGNvbW1vbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjb21tb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXJzLmZpbHRlcihmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIub3B0aW9ucy5jb21tb24gPT09IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKiBAcmV0dXJuIHtSZXNvbHZlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmFjdG9yeShtYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBvcHRpb25zID0gbWFuYWdlci5vcHRpb25zLnJlc29sdmVyLFxuICAgICAgICAgICAgaGFzaCA9IENSQzMyKG9wdGlvbnMudXJsKSxcbiAgICAgICAgICAgIGNhY2hlID0gUmVzb2x2ZXIuI2NhY2hlLFxuICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMgPSBSZXNvbHZlci4jY29tbW9uTWFuYWdlcnM7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSBjYWNoZVtoYXNoXSA9IChjYWNoZVtoYXNoXSBpbnN0YW5jZW9mIFJlc29sdmVyKSA/IGNhY2hlW2hhc2hdIDogbmV3IFJlc29sdmVyKG9wdGlvbnMpLFxuICAgICAgICAgICAgbWFuYWdlcnMgPSByZXNvbHZlci4jZ2V0TWFuYWdlcnMoKTtcblxuICAgICAgICBpZiAobWFuYWdlcnMuaW5kZXhPZihtYW5hZ2VyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIG1hbmFnZXJzLnB1c2gobWFuYWdlcik7XG5cbiAgICAgICAgICAgIGlmIChtYW5hZ2VyLm9wdGlvbnMuY29tbW9uKSB7XG4gICAgICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFuYWdlci5vd25lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNYW5hZ2VyLkV2ZW50cy5kZXN0cm95LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBtYW5hZ2Vycy5pbmRleE9mKGV2ZW50Lm1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbk1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuZ2V0VGFza3MoKS5maWx0ZXIodmFsdWUgPT4gdmFsdWUuaW5pdGlhdG9yTWFuYWdlciA9PT0gbWFuYWdlcnNbaW5kZXhdKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4ID0gY29tbW9uTWFuYWdlcnMuZmluZEluZGV4KHZhbHVlID0+IHZhbHVlID09PSBldmVudC5tYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb21tb25NYW5hZ2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmVyO1xuICAgIH1cblxufSIsImltcG9ydCB7ZWFjaH0gZnJvbSAnLi91dGlscy9vYmonO1xuLyoqXG4gKlxuICovXG4gY29uc3QgRXZlbnQgPSB7XG4gICAgcmVhZHk6ICdxbWM6bWFuYWdlcjpyZWFkeScsXG4gICAgZGVzdHJveTogJ3FtYzptYW5hZ2VyOmRlc3Ryb3knLFxuICAgIHN0YXR1c0NoYW5nZTogJ3FtYzptYW5hZ2VyOnN0YXR1c0NoYW5nZScsXG5cbiAgICBmZXRjaFN0YXJ0OiAncW1jOnJlc29sdmVyOnN0YXJ0JyxcbiAgICBmZXRjaEVuZDogJ3FtYzpyZXNvbHZlcjplbmQnLFxuXG59O1xuXG5FdmVudC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXZlbnRzID0gW107XG4gIGVhY2godGhpcywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudHMucHVzaChldmVudCk7XG4gIH0pO1xuICAgIHJldHVybiBldmVudHMuam9pbignICcpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBFdmVudDsiLCIvKipcbiAqIE1hbmFnZXIgRXZlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlckV2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7TWFuYWdlcn1cbiAgICAgKi9cbiAgICAjbWFuYWdlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWFuYWdlciwgdHlwZSwgcHJvcHMpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgcHJvcHMpO1xuICAgICAgICB0aGlzLiNtYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgIGdldCBtYW5hZ2VyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VyO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEBmaWxlIGd1aWQuanNcbiAqIEBtb2R1bGUgZ3VpZFxuICovXG5cbi8vIERlZmF1bHQgdmFsdWUgZm9yIEdVSURzLiBUaGlzIGFsbG93cyB1cyB0byByZXNldCB0aGUgR1VJRCBjb3VudGVyIGluIHRlc3RzLlxuLy9cbi8vIFRoZSBpbml0aWFsIEdVSUQgaXMgMyBiZWNhdXNlIHNvbWUgdXNlcnMgaGF2ZSBjb21lIHRvIHJlbHkgb24gdGhlIGZpcnN0XG4vLyBkZWZhdWx0IHBsYXllciBJRCBlbmRpbmcgdXAgYXMgYHZqc192aWRlb18zYC5cbi8vXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlb2pzL3ZpZGVvLmpzL3B1bGwvNjIxNlxuY29uc3QgX2luaXRpYWxHdWlkID0gMztcblxuLyoqXG4gKiBVbmlxdWUgSUQgZm9yIGFuIGVsZW1lbnQgb3IgZnVuY3Rpb25cbiAqXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5sZXQgX2d1aWQgPSBfaW5pdGlhbEd1aWQ7XG5cbi8qKlxuICogR2V0IGEgdW5pcXVlIGF1dG8taW5jcmVtZW50aW5nIElEIGJ5IG51bWJlciB0aGF0IGhhcyBub3QgYmVlbiByZXR1cm5lZCBiZWZvcmUuXG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICogICAgICAgICBBIG5ldyB1bmlxdWUgSUQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdHVUlEKCkge1xuICByZXR1cm4gX2d1aWQrKztcbn1cblxuLyoqXG4gKiBSZXNldCB0aGUgdW5pcXVlIGF1dG8taW5jcmVtZW50aW5nIElEIGZvciB0ZXN0aW5nIG9ubHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEd1aWRJblRlc3RzT25seSgpIHtcbiAgX2d1aWQgPSBfaW5pdGlhbEd1aWQ7XG59XG4iLCIvKipcbiAqIEBmaWxlIGRvbS1kYXRhLmpzXG4gKiBAbW9kdWxlIGRvbS1kYXRhXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBHdWlkIGZyb20gJy4vZ3VpZC5qcyc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG5sZXQgRmFrZVdlYWtNYXA7XG5cbmlmICghd2luZG93LldlYWtNYXApIHtcbiAgRmFrZVdlYWtNYXAgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnZkYXRhID0gJ3ZkYXRhJyArIE1hdGguZmxvb3Iod2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSB8fCBEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICBjb25zdCBhY2Nlc3MgPSBrZXlbdGhpcy52ZGF0YV0gfHwgR3VpZC5uZXdHVUlEKCk7XG5cbiAgICAgIGlmICgha2V5W3RoaXMudmRhdGFdKSB7XG4gICAgICAgIGtleVt0aGlzLnZkYXRhXSA9IGFjY2VzcztcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhW2FjY2Vzc10gPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0KGtleSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdO1xuXG4gICAgICAvLyB3ZSBoYXZlIGRhdGEsIHJldHVybiBpdFxuICAgICAgaWYgKGFjY2Vzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2FjY2Vzc107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaGFzKGtleSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdO1xuXG4gICAgICByZXR1cm4gYWNjZXNzIGluIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICBjb25zdCBhY2Nlc3MgPSBrZXlbdGhpcy52ZGF0YV07XG5cbiAgICAgIGlmIChhY2Nlc3MpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVthY2Nlc3NdO1xuICAgICAgICBkZWxldGUga2V5W3RoaXMudmRhdGFdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBFbGVtZW50IERhdGEgU3RvcmUuXG4gKlxuICogQWxsb3dzIGZvciBiaW5kaW5nIGRhdGEgdG8gYW4gZWxlbWVudCB3aXRob3V0IHB1dHRpbmcgaXQgZGlyZWN0bHkgb24gdGhlXG4gKiBlbGVtZW50LiBFeC4gRXZlbnQgbGlzdGVuZXJzIGFyZSBzdG9yZWQgaGVyZS5cbiAqIChhbHNvIGZyb20ganNuaW5qYS5jb20sIHNsaWdodGx5IG1vZGlmaWVkIGFuZCB1cGRhdGVkIGZvciBjbG9zdXJlIGNvbXBpbGVyKVxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuV2Vha01hcCA/IG5ldyBXZWFrTWFwKCkgOiBuZXcgRmFrZVdlYWtNYXAoKTtcbiIsImltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBsYWJlbCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuXG4gICAgICovXG4gICAgY2xhc3NOYW1lID0gUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc2l6ZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtQcm9ncmVzc0JhcltdfVxuICAgICAqL1xuICAgICNiYXJzID0gW107XG5cbiAgICBiYXJPcHRpb25zID0ge307XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fEhUTUxFbGVtZW50fVxuICAgICAqL1xuICAgICNsYWJlbEVsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fEhUTUxFbGVtZW50fVxuICAgICAqL1xuICAgICNlbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1Nob3dHcmFkaWVudCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc3RhdGljICRjbGFzc1ByZWZpeCA9IG51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4ub3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBleHRlbmQodGhpcywgLi4ub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWw7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIFByb2dyZXNzLmdldENsYXNzTmFtZSgnc2l6ZS0nICsgdGhpcy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU2hvd0dyYWRpZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIFByb2dyZXNzLmdldENsYXNzTmFtZSgnbm8tZ3JhZGllbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCB7fSxcbiAgICAgICAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1pdGVtcycpfSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy4jZWwgPSBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fEVsZW1lbnR9XG4gICAgICovXG4gICAgI2dldExhYmVsRWwoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2xhYmVsRWw7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNsYWJlbEVsID0gZWwgPSBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzLWxhYmVsJyl9LCB7fSlcbiAgICAgICAgdGhpcy4jZWwuYXBwZW5kKGVsKTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IHZhbHVlXG4gICAgICovXG4gICAgc2V0UHJvZ3Jlc3ModmFsdWUpIHtcblxuICAgICAgICBjb25zdCBiYXJzID0gdGhpcy4jYmFycyxcbiAgICAgICAgICAgIGVsID0gdGhpcy4jZWwsXG4gICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgPyBbdmFsdWVdIDogdmFsdWU7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoYmFyc1tpbmRleF0gaW5zdGFuY2VvZiBQcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgICAgIGJhcnNbaW5kZXhdLnByb2dyZXNzID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhcnNbaW5kZXhdID0gbmV3IFByb2dyZXNzQmFyKHRoaXMuYmFyT3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuJyArIFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbXMnKSkuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1pdGVtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICgxMDAgLyBsZW5ndGgpLnRvRml4ZWQoMykgKyAnJSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICB9LCB7fSwgYmFyc1tpbmRleF0ucmVuZGVyKCkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xhc3NUaG9DaGVjayA9IFByb2dyZXNzLmdldENsYXNzTmFtZSgnbW9yZS10aGFuLXRocmVlJyk7XG4gICAgICAgIGlmIChEb20uaGFzQ2xhc3MoZWwsIGNsYXNzVGhvQ2hlY2spID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIGNsYXNzVGhvQ2hlY2spO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbGFiZWxcbiAgICAgKi9cbiAgICBzZXRMYWJlbChsYWJlbCkge1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuI2dldExhYmVsRWwoKS5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufEhUTUxFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50ID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgY2xhc3NOYW1lID0gJ3Byb2dyZXNzLWJhcic7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgI3Byb2dyZXNzID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd8Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBsYWJlbFRleHQgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluID0gMDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtYXggPSAxMDA7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4ub3B0aW9ucykge1xuICAgICAgICBleHRlbmQodGhpcywgLi4ub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheXxTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsVGV4dCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChEb20uY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnc3Itb25seScsIGNzczoge3dpZHRoOiAwfX0sIHt9LCB0aGlzLmxhYmVsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5sYWJlbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudCA9IGVsID0gRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSh0aGlzLmNsYXNzTmFtZSlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB0aGlzLnByb2dyZXNzLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiB0aGlzLm1pbixcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbWF4JzogdGhpcy5tYXhcbiAgICAgICAgfSwgY29udGVudCk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gKHRoaXMubGFiZWxUZXh0KSA/IHRoaXMubGFiZWxUZXh0IDogJyc7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb2dyZXNzfSUgJHtsYWJlbH1gXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBwcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2dyZXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBwcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiNwcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHZhbHVlKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0aGlzLmxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlfSVgXG5cbiAgICB9XG59IiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25UIGV4dGVuZHMgVUlDb21wb25lbnR7XG5cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICovXG4gICAgI2ljb24gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgKi9cbiAgICAjc2l6ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtib29sZWFufHN0cmluZ30gaWNvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd9IHNpemVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpY29uID0gZmFsc2UsIHNpemUgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNpY29uID0gaWNvbjtcbiAgICAgICAgdGhpcy4jc2l6ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50ID0gdGhpcy5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6IHRoaXMuI2J1aWxkQ2xhc3NOYW1lKCl9LCB7fSxcbiAgICAgICAgICAgIERvbS5jcmVhdGVFbCgnc3BhbicsIHt9LCB7fSwgWydzMScsICdzMicsICdzMyddLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgICNidWlsZENsYXNzTmFtZSgpIHtcblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gJ2ljb24tdCcsXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy4jaWNvbikge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuI2ljb247XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmICh0aGlzLiNzaXplKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnc2l6ZS0nK3RoaXMuI3NpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBpY29uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IGljb24gPSB0aGlzLiNpY29uO1xuICAgICAgICAgICAgaWYgKGljb24gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChpY29uKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgaWNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2ljb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBzaXplKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgID0gSWNvblQuZ2V0Q2xhc3NOYW1lKCdzaXplLScrdmFsdWUpO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuI3NpemU7XG4gICAgICAgICAgICBpZiAoc2l6ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCBzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2l6ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgY29sb3IodmFsdWUpIHtcbiAgICAgICAgRG9tLiQkKCdzcGFuW2NsYXNzXj1zXScsIHRoaXMuI2VsZW1lbnQpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuXG4iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgSWNvblQgZnJvbSAnLi9pY29udCc7XG5cbi8qKlxuICpcbiAqIEB0eXBlIHt7aWNvbkhvdmVyTmFtZTogbnVsbCwgaGFuZGxlcjogbnVsbCwgc2l6ZTogbnVsbCwgZGF0YToge30sIGhpZGRlbkxhYmVsOiBzdHJpbmcsIGljb25OYW1lOiBudWxsLCBhbmltYXRlZENsaWNrOiBib29sZWFuLCBoYW5kbGVyVGltb3V0RGVsYXk6IG51bWJlciwgaWNvblNpemU6IG51bGwsIGRpc2FibGVkOiBib29sZWFuLCBsYWJlbDogYm9vbGVhbiwgdGFnTmFtZTogc3RyaW5nfX1cbiAqL1xuY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB0YWdOYW1lOiAnYnV0dG9uJyxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBoYW5kbGVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBoYW5kbGVyVGltb3V0RGVsYXk6IDUwMCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgbGFiZWw6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICBoaWRkZW5MYWJlbDogJycsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogZmFsc2UsXG5cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzaXplOiBudWxsLFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBpY29uTmFtZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBpY29uSG92ZXJOYW1lOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIGljb25TaXplOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgYW5pbWF0ZWRDbGljazogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgZGF0YToge31cblxufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0RlZmF1bHRzfVxuICAgICAqL1xuICAgICNvcHRpb25zID0gRGVmYXVsdHM7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7SWNvblR9XG4gICAgICovXG4gICAgI2ljb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLiNvcHRpb25zID0gZXh0ZW5kKHt9LCBEZWZhdWx0cywgb3B0aW9ucylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgY29udGVudCA9IFtdO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmljb25OYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpcy5pY29uO1xuICAgICAgICAgICAgY29udGVudC5wdXNoKGkucmVuZGVyKCkpO1xuICAgICAgICAgICAgaS5pY29uID0gb3B0aW9ucy5pY29uTmFtZTtcbiAgICAgICAgICAgIGkuc2l6ZSA9IG9wdGlvbnMuaWNvblNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5sYWJlbCkge1xuICAgICAgICAgICAgY29udGVudC5wdXNoKERvbS5jcmVhdGVFbCgncCcsIHt9LCB7fSwgb3B0aW9ucy5sYWJlbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGlkZGVuTGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaCh0aGlzLmNyZWF0ZUVsKCdwJywge2NsYXNzTmFtZTogJ2J1dHRvbi1oaWRkZW4nfSwge30sIG9wdGlvbnMuaGlkZGVuTGFiZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGVkQ2xpY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRyb3AgPSBEb20uY3JlYXRlRWwoJ3AnLCB7Y2xhc3NOYW1lOiAnZHJvcCd9KTtcbiAgICAgICAgICAgIGRyb3AuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyh0aGlzLCAnYW5pbWF0ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250ZW50LnB1c2goZHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbCA9IHRoaXMuI2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsKG9wdGlvbnMudGFnTmFtZSwge2NsYXNzTmFtZTogQnV0dG9uLiNidWlsZENsYXNzTmFtZShvcHRpb25zKX0sIHt9LCBjb250ZW50KTtcblxuICAgICAgICB0aGlzLmRpc2FibGVkID0gb3B0aW9ucy5kaXNhYmxlZDtcbiAgICAgICAgdGhpcy4jYWRkSGFuZGxlcnMoZWwsIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiBlbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyAjYnVpbGRDbGFzc05hbWUob3B0aW9ucykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWydidXR0b24nXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaXplKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnc2l6ZS0nICsgb3B0aW9ucy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhpZGRlbkxhYmVsKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnaGFzLWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICovXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKHZhbHVlICE9PSBvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jZWxlbWVudC5kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBEb20udG9nZ2xlQ2xhc3ModGhpcy4jZWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zLmRpc2FibGVkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtJY29uVH1cbiAgICAgKi9cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLiNpY29uO1xuICAgICAgICBpZiAoaWNvbiBpbnN0YW5jZW9mIEljb25UKSB7XG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4jaWNvbiA9IG5ldyBJY29uVCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICAjYWRkSGFuZGxlcnMoZWxlbWVudCwgb3B0aW9ucykge1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlZENsaWNrKSB7XG4gICAgICAgICAgICAgICAgQnV0dG9uLiNhbmltYXRlZENsaWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlclRpbW91dERlbGF5ID4gMCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcHRpb25zLmhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCksIG9wdGlvbnMuaGFuZGxlclRpbW91dERlbGF5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wdGlvbnMuaGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmljb25Ib3Zlck5hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kaXNhYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uLmljb24gPSBvcHRpb25zLmljb25Ib3Zlck5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLmljb24gPSBvcHRpb25zLmljb25OYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHN0YXRpYyAjYW5pbWF0ZWRDbGljayhlbGVtZW50KSB7XG5cbiAgICAgICAgY29uc3QgZHJvcCA9IERvbS4kKCcuZHJvcCcsIGVsZW1lbnQpO1xuICAgICAgICBpZiAoZHJvcCkge1xuXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gRG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICB4ID0gZXZlbnQucGFnZVggLSByZWN0LndpZHRoIC8gMiAtIHJlY3QubGVmdCAtIHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgIHkgPSBldmVudC5wYWdlWSAtIHJlY3QuaGVpZ2h0IC8gMiAtIHJlY3QudG9wIC0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgICAgICAgIGRyb3Auc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgICAgICBkcm9wLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcblxuICAgICAgICAgICAgRG9tLmFkZENsYXNzKGRyb3AsICdhbmltYXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5CdXR0b24uRGVmYXVsdHMgPSBEZWZhdWx0cztcblxuXG4iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgZXh0ZW5kIGZyb20gXCIuL3V0aWxzL2V4dGVuZFwiO1xuXG5cbi8qKlxuICpcbiAqIEB0eXBlIHt7c2VsZWN0SWNvbjogbnVsbCwgc2NhbGVkOiBib29sZWFuLCBhcnJhbmdlOiBib29sZWFuLCBzZWxlY3RhYmxlOiBib29sZWFufX1cbiAqL1xuY29uc3QgRGVmYXVsdHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9uLkRlZmF1bHRzW119XG4gICAgICovXG4gICAgYnV0dG9uczogW10sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhcnJhbmdlOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHNjYWxlZDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc2VsZWN0SWNvbjogbnVsbFxuXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbnNHcm91cCBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCdXR0b25bXX1cbiAgICAgKi9cbiAgICBidXR0b25zID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICAjb3B0aW9ucyA9IERlZmF1bHRzO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBidXR0b25zID0gVUlDb21wb25lbnQucmVtb3ZlT3B0aW9uc1B0b3BlcnR5KCdidXR0b25zJywgb3B0aW9ucywgQXJyYXkpO1xuICAgICAgICB0aGlzLiNvcHRpb25zID0gZXh0ZW5kKHt9LCBEZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnMubWFwKChjb25maWcpID0+IG5ldyBCdXR0b24oY29uZmlnKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudCA9IGVsID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogQnV0dG9uc0dyb3VwLiNidWlsZENsYXNzTmFtZSh0aGlzLm9wdGlvbnMpfSwge30sXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMubWFwKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuLnJlbmRlcigpXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLiNiaW5kU2VsZWN0RXZlbnRzKGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2J1aWxkQ2xhc3NOYW1lKG9wdGlvbnMpIHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gWydidXR0b24tZ3JvdXAnXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5hcnJhbmdlKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnYXJyYW5nZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGVkKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnc2NhbGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0RlZmF1bHRzfVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgYXJyYW5nZSh2YWx1ZSkge1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ2FycmFuZ2UnKTtcblxuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMuI29wdGlvbnM7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoRG9tLmhhc0NsYXNzKGVsLCBjbGFzc05hbWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5hcnJhbmdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICAjYmluZFNlbGVjdEV2ZW50cyhlbGVtZW50KSB7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCAnLicgKyBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdidXR0b24nKSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5idXR0b25zLmZpbmQoZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgICAgIHJldHVybiBidG4uZWxlbWVudCA9PT0gZWxlbWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCQoJy5idXR0b24uc2VsZWN0ZWQnLCBldmVudC50YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgRG9tLnNldEF0dHJpYnV0ZShlbCwgJ2RhdGEtZ3JvdXAtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsICBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kJCgnLmJ1dHRvbltkYXRhLWdyb3VwLXNlbGVjdGVkXScsIGV2ZW50LnRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQXR0cmlidXRlKGVsLCAnZGF0YS1ncm91cC1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCdXR0b258bnVtYmVyfSBidXR0b25cbiAgICAgKi9cbiAgICBzZXQgc2VsZWN0ZWQoYnV0dG9uKSB7XG5cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnc2VsZWN0ZWQnKSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBidXR0b24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tidXR0b25dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ1dHRvbiBpbnN0YW5jZW9mIEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVBdHRyaWJ1dGUoYnRuLmVsZW1lbnQsICdkYXRhLWdyb3VwLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGJ0bi5lbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBEb20uYWRkQ2xhc3MoYnV0dG9uLmVsZW1lbnQsIGNsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNlbGVjdEljb24pIHtcbiAgICAgICAgICAgICAgICBidXR0b24uaWNvbi5pY29uID0gb3B0aW9ucy5zZWxlY3RJY29uO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5vcHRpb25zLmljb25OYW1lID0gb3B0aW9ucy5zZWxlY3RJY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG5cblxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBJY29uVCBmcm9tICcuL2ljb250JztcbmltcG9ydCBCdXR0b25zR3JvdXAgZnJvbSAnLi9idXR0b25zR3JvdXAnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCdcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrU3RhdHVzIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnRbXX1cbiAgICAgKi9cbiAgICAjZWxlbWVudHMgPSBbXTtcblxuICAgIG1hcCA9IHtcbiAgICAgICAgaWNvbnM6IFtdLFxuICAgICAgICBhY3Rpb25zOiBbXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7VGFza0Fic3RyYWN0fVxuICAgICAqL1xuICAgICN0YXNrO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SWNvblR9XG4gICAgICovXG4gICAgI2ljb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjdGV4dCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9uc0dyb3VwfVxuICAgICAqL1xuICAgICNiR3JvdXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUYXNrQWJzdHJhY3R9IHRhc2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFwSWNvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIG1hcEljb25zLCBhY3Rpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI3Rhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLm1hcC5pY29ucyA9IG1hcEljb25zO1xuICAgICAgICB0aGlzLm1hcC5hY3Rpb25zID0gYWN0aW9ucztcblxuICAgICAgICB0aGlzLiNpY29uID0gbmV3IEljb25UKCdub25lJywgJ2JpZycpO1xuICAgICAgICB0aGlzLiN0ZXh0ID0gdGhpcy5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6ICdzdGF0dXMtdGV4dCd9KTtcblxuICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgZXh0ZW5kKGl0ZW0sIHtkYXRhOiB7dGFzazogdGFza319KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgZWxzID0gdGhpcy4jZWxlbWVudHM7XG5cbiAgICAgICAgaWYgKGVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxzO1xuICAgICAgICB9XG4gICAgICAgIGVscy5wdXNoKHRoaXMuI2ljb24ucmVuZGVyKCkpO1xuICAgICAgICBlbHMucHVzaCh0aGlzLiN0ZXh0KTtcblxuICAgICAgICBpZiAodGhpcy5tYXAuYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLiNiR3JvdXAgPSBuZXcgQnV0dG9uc0dyb3VwKHtidXR0b25zOiB0aGlzLm1hcC5hY3Rpb25zLCBhcnJhbmdlOiBmYWxzZSwgc2NhbGVkOiB0cnVlfSk7XG4gICAgICAgICAgICBlbHMucHVzaCh0aGlzLiNiR3JvdXAucmVuZGVyKCkpO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gZWxzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gICAgICovXG4gICAgcmVmcmVzaChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy4jdGV4dC5pbm5lckhUTUwgPSB0aGlzLiN0YXNrLnN0YXR1c1RleHQ7XG5cbiAgICAgICAgdGhpcy4jaWNvbi5pY29uID0gdGhpcy5tYXAuaWNvbnNbc3RhdHVzXTtcblxuICAgICAgICBjb25zdCBidXR0b25Hcm91cCA9IHRoaXMuI2JHcm91cDtcblxuICAgICAgICBpZiAoYnV0dG9uR3JvdXApIHtcbiAgICAgICAgICAgIGJ1dHRvbkdyb3VwLmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVuYWJsZWRXaXRoID0gYnV0dG9uLm9wdGlvbnM/LmVuYWJsZWRXaXRoU3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW5hYmxlZFdpdGggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkV2l0aCA9IGVuYWJsZWRXaXRoLmNhbGwoYnV0dG9uLCBzdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbmFibGVkV2l0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5vcHRpb25zLmVuYWJsZWRXaXRoU3RhdHVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGJ1dHRvbi5vcHRpb25zLmVuYWJsZWRXaXRoU3RhdHVzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZW5hYmxlZFdpdGggPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGVuYWJsZWRXaXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBUYXNrQWJzdHJhY3QgZnJvbSBcIi4vdGFza0Fic3RyYWN0XCI7XG5pbXBvcnQgRG9tRGF0YSBmcm9tICcuL3V0aWxzL2RvbS1kYXRhJztcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL3Byb2dyZXNzJztcbmltcG9ydCBTdGF0dXNlc0xpc3QgZnJvbSAnLi9zdGF0dXNlc0xpc3QnO1xuaW1wb3J0IFRhc2tTdGF0dXMgZnJvbSAnLi90YXNrU3RhdHVzJztcblxuY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgaWNvblBsYWNlbWVudDogJ2RlZmF1bHQnLFxuICAgIHBhcnRzOiB7XG4gICAgICAgIHN0YXR1czogJ3JlZnJlc2guc3RhdHVzJyxcbiAgICAgICAgdGl0bGU6ICd0aXRsZScsXG4gICAgICAgIHRleHQ6ICd0ZXh0JyxcbiAgICAgICAgZXJyb3I6ICdlcnJvcnMnLFxuICAgICAgICAncHJvZ3Jlc3Mtd3JhcHBlcic6ICdyZWZyZXNoLnByb2dyZXNzJyxcbiAgICB9LFxuICAgIHByb2dyZXNzOiB7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgc2l6ZTogJycsXG4gICAgICAgIGJhck9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxhYmVsVGV4dDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uczogW11cbn07XG5cbmNvbnN0IGljb25NYXAgPSB7fTtcbmljb25NYXBbU3RhdHVzZXNMaXN0LldBSVRdID0gJ2Nsb2NrJztcbmljb25NYXBbU3RhdHVzZXNMaXN0LkVYRUNdID0gJ3BsYXknO1xuaWNvbk1hcFtTdGF0dXNlc0xpc3QuRVJST1JdID0gJ3dhcm5pbmcnO1xuaWNvbk1hcFtTdGF0dXNlc0xpc3QuRE9ORV0gPSAnY2hlY2tlZCc7XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIGV4dGVuZHMgVGFza0Fic3RyYWN0IHtcblxuXG4gICAgI2VsZW1lbnRzID0ge307XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIF9yZW5kZXJDaGlsZChlbFdyYXBwZXIpIHtcblxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgZWxlbWVudHMgPSB0aGlzLiNlbGVtZW50cyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBlbERldGFpbCA9IGVsV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAnZGV0YWlsJ30pKSxcbiAgICAgICAgICAgIGVsU3RhdHVzV3JhcHBlciA9IGVsV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAnc3RhdHVzLXdyYXBwZXInfSkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMucGFydHMpLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgICAgIGxldCBvd25lciA9IGVsRGV0YWlsLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0ID09PSAncHJvZ3Jlc3Mtd3JhcHBlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgUHJvZ3Jlc3Mob3B0aW9ucy5wcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnNbJ3Byb2dyZXNzLXdyYXBwZXInXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICdzdGF0dXMnKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBlbFN0YXR1c1dyYXBwZXI7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IFRhc2tTdGF0dXModGhpcywgaWNvbk1hcCwgb3B0aW9ucy5hY3Rpb25zKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50c1twYXJ0XSA9IG93bmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IHBhcnR9LCB7fSkpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIHR5cGVvZiBjb21wb25lbnQ/LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBjb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbY29udGVudF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGVudC5mb3JFYWNoKChjb250ZW50KSA9PiBlbGVtZW50c1twYXJ0XS5hcHBlbmQoY29udGVudCkpO1xuICAgICAgICAgICAgICAgIFRhc2suI3NldENvbXBvbmVudChlbGVtZW50c1twYXJ0XSwgY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlZnJlc2gocmVzcG9uc2UpIHtcbiAgICAgICAgc3VwZXIucmVmcmVzaChyZXNwb25zZSwgdGhpcy4jZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfYnVpbGRDc3NDbGFzcygpIHtcblxuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBzdXBlci5fYnVpbGRDc3NDbGFzcygpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWNvblBsYWNlbWVudCAhPT0gRGVmYXVsdHMuaWNvblBsYWNlbWVudCkge1xuICAgICAgICAgICAgY2xhc3NMaXN0LnB1c2goJ3Rhc2staXRlbS0nICsgdGhpcy5vcHRpb25zLmljb25QbGFjZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH1jb21wb25lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgI3NldENvbXBvbmVudChlbCwgY29tcG9uZW50KSB7XG4gICAgICAgIGlmICghRG9tRGF0YS5oYXMoZWwpKSB7XG4gICAgICAgICAgICBEb21EYXRhLnNldChlbCwge30pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBEb21EYXRhLmdldChlbCk7XG4gICAgICAgIGRhdGEuY29tcG9uZXQgPSBjb21wb25lbnQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2dldENvbXBvbmVudChlbCkge1xuICAgICAgICBpZiAoRG9tRGF0YS5oYXMoZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gRG9tRGF0YS5nZXQoZWwpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmNvbXBvbmV0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuY29tcG9uZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfE51bWJlcltdfXZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVmcmVzaFByb2dyZXNzKGVsLCB2YWx1ZSkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBUYXNrLiNnZXRDb21wb25lbnQoZWwpO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyBpbnN0YW5jZW9mIFByb2dyZXNzKSB7XG4gICAgICAgICAgICBwcm9ncmVzcy5zZXRMYWJlbCh0aGlzLmdldFByb2dyZXNzVG90YWwoKSArICclJyk7XG4gICAgICAgICAgICBwcm9ncmVzcy5zZXRQcm9ncmVzcyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsU3RhdHVzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8TnVtYmVyW119dmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICBfcmVmcmVzaFN0YXR1cyhlbFN0YXR1cywgdmFsdWUpIHtcbiAgICAgICAgVGFzay4jZ2V0Q29tcG9uZW50KGVsU3RhdHVzKS5yZWZyZXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLm9wdGlvbnMucGFydHNbJ3RpdGxlJ107XG4gICAgICAgIGlmIChwYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1twYXJ0XSA/PyAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG59XG5cblRhc2suRGVmdWFsdHMgPSBEZWZhdWx0czsiLCI3XG5cbi8qKlxuICogQHBhcmFtIHRpbWluZ1xuICogQHBhcmFtIGRyYXdcbiAqIEBwYXJhbSBkdXJhdGlvblxuICogQHBhcmFtIG9uRW5kXG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGUoe3RpbWluZywgZHJhdywgZHVyYXRpb259LCBvbkVuZCkge1xuXG4gICAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gYW5pbWF0ZSh0aW1lKSB7XG4gICAgICAgIC8vIHRpbWVGcmFjdGlvbiDQuNC30LzQtdC90Y/QtdGC0YHRjyDQvtGCIDAg0LTQviAxXG4gICAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAodGltZSAtIHN0YXJ0KSAvIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGltZUZyYWN0aW9uID4gMSkgdGltZUZyYWN0aW9uID0gMTtcblxuICAgICAgICAvLyDQstGL0YfQuNGB0LvQtdC90LjQtSDRgtC10LrRg9GJ0LXQs9C+INGB0L7RgdGC0L7Rj9C90LjRjyDQsNC90LjQvNCw0YbQuNC4XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWluZyh0aW1lRnJhY3Rpb24pO1xuXG4gICAgICAgIGRyYXcocHJvZ3Jlc3MpOyAvLyDQvtGC0YDQuNGB0L7QstCw0YLRjCDQtdGRXG5cbiAgICAgICAgaWYgKHRpbWVGcmFjdGlvbiA8IDEpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvbkVuZCkge1xuICAgICAgICAgICAgICAgIG9uRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xufVxuXG5cbmNvbnN0IHRpbWluZ3MgPSB7XG4gICAgbGluZWFyKHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gdGltZUZyYWN0aW9uO1xuICAgIH0sXG4gICAgcXVhZCh0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRpbWVGcmFjdGlvbiwgMilcbiAgICB9LFxuICAgIGNpcmModGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHRpbWVGcmFjdGlvbikpO1xuICAgIH0sXG4gICAgYmFjayh4ID0gMS41LCB0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHRpbWVGcmFjdGlvbiwgMikgKiAoKHggKyAxKSAqIHRpbWVGcmFjdGlvbiAtIHgpXG4gICAgfSxcbn07XG5cblxuY29uc3QgYW5pbWF0aW9uc0RyYXcgPSB7XG4gICAgJ2ZhZGVPdXQnOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMSAtIChNYXRoLnJvdW5kKHByb2dyZXNzICogMTAwKSAvIDEwMCk7XG4gICAgfSxcbiAgICAnZmFkZUluJzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IChNYXRoLnJvdW5kKHByb2dyZXNzICogMTAwKSAvIDEwMCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IGFuaW1hdGlvbkNvbmZpZ1xuICogQHJldHVybiBQcm9taXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGVFbChlbCwgYW5pbWF0aW9uQ29uZmlnID0ge1xuICAgIG5hbWU6ICdmYWRlT3V0JyxcbiAgICB0aW1pbmc6IHRpbWluZ3MubGluZWFyLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgZGVsYXk6IDBcbn0pIHtcbiAgICBsZXQgYW5pbWF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgYW5pbWF0aW9uQ29uZmlnKTtcblxuICAgIGlmICh0eXBlb2YgYW5pbWF0aW9uLmRyYXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYW5pbWF0aW9uLmRyYXcuYmluZChlbClcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhbmltYXRpb24ubmFtZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGFuaW1hdGlvbnNEcmF3W2FuaW1hdGlvbi5uYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhbmltYXRpb24uZHJhdyA9IGFuaW1hdGlvbnNEcmF3W2FuaW1hdGlvbi5uYW1lXS5iaW5kKGVsKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBhbmltYXRpb24gJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhbmltYXRpb24uZGVsYXkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgYW5pbWF0aW9uLmRlbGF5ID0gMDtcbiAgICB9XG5cbiAgICBhbmltYXRpb24udGltaW5nID0gKHR5cGVvZiBhbmltYXRpb24udGltaW5nID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHRpbWluZ3NbYW5pbWF0aW9uLnRpbWluZ10gPT09ICdmdW5jdGlvbicpXG4gICAgICAgID8gdGltaW5nc1thbmltYXRpb24udGltaW5nXSA6IHRpbWluZ3MubGluZWFyO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYW5pbWF0ZShhbmltYXRpb24sICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZWwpXG4gICAgICAgIH0pLCBhbmltYXRpb24uZGVsYXkpO1xuICAgIH0pO1xuXG59XG5cblxuLyoqXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259dGltaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSBkZWxheVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhZGVJbihlbCwgdGltaW5nID0gJ2xpbmVhcicsIGR1cmF0aW9uID0gMTAwMCwgZGVsYXkgPSAwKSB7XG4gICAgcmV0dXJuIGFuaW1hdGVFbChlbCwge1xuICAgICAgICBuYW1lOiAnZmFkZUluJyxcbiAgICAgICAgdGltaW5nOiB0aW1pbmcsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0pO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gZWxcbiAqIEBwYXJhbSB0aW1pbmdcbiAqIEBwYXJhbSBkdXJhdGlvblxuICogQHBhcmFtIGRlbGF5XG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFkZU91dChlbCwgdGltaW5nID0gJ2xpbmVhcicsIGR1cmF0aW9uID0gMTAwMCwgZGVsYXkgPSAwKSB7XG4gICAgcmV0dXJuIGFuaW1hdGVFbChlbCwge1xuICAgICAgICBuYW1lOiAnRmFkZU91dCcsXG4gICAgICAgIHRpbWluZzogdGltaW5nLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9KTtcbn0iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcic7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzTGlzdCc7XG5pbXBvcnQgU3RhdHVzZXMgZnJvbSAnLi9zdGF0dXNlc0xpc3QnO1xuaW1wb3J0IE1hbmFnZXJFdmVudCBmcm9tICcuL21hbmFnZXJFdmVudCc7XG5pbXBvcnQgVGFza0Fic3RyYWN0IGZyb20gXCIuL3Rhc2tBYnN0cmFjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgQnV0dG9uc0dyb3VwIGZyb20gJy4vYnV0dG9uc0dyb3VwJztcblxuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IGFuaW1hdGVFbCwge2ZhZGVJbn0gZnJvbSAnLi91dGlscy9hbmltYXRlJztcblxuXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICBjb21tb246IGZhbHNlLFxuICAgIHRpdGxlOiAnPGgzPkJhY2tncm91bmRzIHRhc2tzPC9oMz4nLFxuICAgIHRoZW1lOiB7Jy0xJzogXCJkZWZhdWx0XCJ9LFxuICAgIHJlbmRlck9uRW1wdHk6IHRydWUsXG4gICAgdGFza0NsYXNzOiBUYXNrLFxuICAgIGVtcHR5VGV4dDogJ1Rhc2tzIG5vdCBwcm92aWRlZCB5ZXQnLFxuICAgIHRhc2tPcHRpb25zOiB7fSxcbiAgICB0YXNrczogW10sXG4gICAgc3RhdHVzVGV4dDoge30sXG4gICAgaGlkZUFuaW1hdGlvbjoge1xuICAgICAgICBuYW1lOiAnZmFkZU91dCcsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICB0aW1pbmc6ICdsaW5lYXInLFxuICAgICAgICBkZWxheTogMFxuICAgIH0sXG4gICAgc2hvd0FuaW1hdGlvbjoge1xuICAgICAgICBuYW1lOiAnZmFkZUluJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIHRpbWluZzogJ2xpbmVhcicsXG4gICAgICAgIGRlbGF5OiAwXG4gICAgfSxcbiAgICB0YXNrc0FuaW1hdGlvbjoge1xuICAgICAgICBoaWRlOiB7fSxcbiAgICAgICAgc2hvdzoge31cbiAgICB9LFxuICAgIHJlc29sdmVyOiB7XG4gICAgICAgIHVybDogJ3F1ZXVlLXJlYWRlcidcbiAgICB9XG59O1xuXG5cbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLmhpZGVbU3RhdHVzZXMuRE9ORV0gPSBleHRlbmQoe30sIERlZmF1bHRzLmhpZGVBbmltYXRpb24sIHtkZWxheTogNTAwMH0pO1xuRGVmYXVsdHMudGFza3NBbmltYXRpb24uaGlkZVtTdGF0dXNlcy5FUlJPUl0gPSBleHRlbmQoe30sIERlZmF1bHRzLmhpZGVBbmltYXRpb24sIHtkZWxheTogMjAwMDB9KTtcbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLnNob3dbU3RhdHVzZXMuRVhFQ10gPSBleHRlbmQoe30sIERlZmF1bHRzLnNob3dBbmltYXRpb24sIHtkdXJhdGlvbjogNTAwfSk7XG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5zaG93W1N0YXR1c2VzLldBSVRdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5zaG93QW5pbWF0aW9uLCB7ZHVyYXRpb246IDUwMH0pO1xuXG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5oaWRlW1N0YXR1c2VzLkVSUk9SXSA9IGZhbHNlOyAvL25vdCByZW1vdmUgVGFzayBlbGVtZW50IGZyb20gZG9tXG5cbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuRE9ORV0gPSAnQ29tcGxldGUnO1xuRGVmYXVsdHMuc3RhdHVzVGV4dFtTdGF0dXNlcy5FUlJPUl0gPSAnQ29tcGxldGUgd2l0aCBlcnJvcnMnO1xuRGVmYXVsdHMuc3RhdHVzVGV4dFtTdGF0dXNlcy5FWEVDXSA9ICdQcm9jZXNzaW5nJztcbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuV0FJVF0gPSAnQXdhaXRpbmcnO1xuXG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtSZXNvbHZlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICNyZXNvbHZlciA9IG51bGw7XG5cbiAgICAjZWxlbWVudHMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIG93bmVyOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXI6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlclRhc2tzOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIGVtcHR5VGV4dDogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7VGFza0Fic3RyYWN0W119XG4gICAgICovXG4gICAgI3Rhc2tzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgICNvcHRpb25zID0ge307XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLiNlbGVtZW50cy5vd25lciA9IFVJQ29tcG9uZW50LnJlbW92ZU9wdGlvbnNQdG9wZXJ0eSgnZWxlbWVudCcsIG9wdGlvbnMpO1xuICAgICAgICBsZXQgb3B0ID0gZXh0ZW5kKHt9LCBNYW5hZ2VyLkRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwge1xuICAgICAgICAgICAgdGFza09wdGlvbnM6IG9wdC50YXNrQ2xhc3MuRGVmdWFsdHNcbiAgICAgICAgfSwgb3B0KTtcblxuICAgICAgICB0aGlzLiNyZXNvbHZlciA9IFJlc29sdmVyLmZhY3RvcnkodGhpcyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy50YXNrcyAmJiB0eXBlb2Ygb3B0aW9ucy50YXNrcy5sZW5ndGggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFza3Mob3B0aW9ucy50YXNrcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NoZWNrIGxhdGVyIGFkZGVkIHRhc2tzLFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFRhc2tzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jdG9nZ2xlRW1wdHlUZXh0KCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5yZWFkeSwge2J1YmJsZXM6IHRydWV9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3RydWN0b3Igb2YgbWFuYWdlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuZGVzdHJveSwge2J1YmJsZXM6IHRydWV9KTtcbiAgICAgICAgdGhpcy4jdGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy5vd25lckVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fG51bGx9IGRldGFpbFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgdHJpZ2dlcih0eXBlLCBwcm9wcyA9IHt9LCBkZXRhaWwpIHtcblxuICAgICAgICBpZiAodHlwZW9mIGRldGFpbCA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBwcm9wcy5kZXRhaWwgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRldGFpbCkpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5kZXRhaWxba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyRWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBNYW5hZ2VyRXZlbnQodGhpcywgdHlwZSwgcHJvcHMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzKFN0YXR1c2VzLlNFVF9WSVNJQkxFKTtcblxuICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAwICYmIHRoaXMub3B0aW9ucy5yZW5kZXJPbkVtcHR5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLiNlbGVtZW50cztcblxuICAgICAgICBpZiAoZWxlbWVudHMud3JhcHBlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICAgICAgZWxlbWVudHMud3JhcHBlciA9IGVsZW1lbnRzLm93bmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6ICd3cmFwcGVyJ30pKTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzLndyYXBwZXIuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50aXRsZSAmJiB0aGlzLm9wdGlvbnMudGl0bGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogdGhpcy5vcHRpb25zLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLndyYXBwZXJUYXNrcyA9IGVsZW1lbnRzLndyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6ICd0YXNrcyd9KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lbXB0eVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5lbXB0eVRleHQgPSBlbGVtZW50cy53cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnRzLmVtcHR5VGV4dCA9IHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdlbXB0eS13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnZW1wdHktdGV4dCcsIHRleHRDb250ZW50OiBvcHRpb25zLmVtcHR5VGV4dH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGhlbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnRzLndyYXBwZXIsIE1hbmFnZXIuZ2V0Q2xhc3NOYW1lKCd0aGVtZS0nICsgb3B0aW9ucy50aGVtZSksIE1hbmFnZXIuZ2V0Q2xhc3NOYW1lKCd0aGVtZScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGFzay5yZWZyZXNoKCkpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgI3RvZ2dsZUVtcHR5VGV4dCh0eXBlKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy4jZWxlbWVudHMuZW1wdHlUZXh0LFxuICAgICAgICAgICAgdmlzaWJsZSA9IERvbS5pc1Zpc2libGUoZWwpO1xuXG4gICAgICAgIGlmIChEb20uaXNFbChlbCkpIHtcbiAgICAgICAgICAgIGlmICgodmlzaWJsZSAmJiB0eXBlID09PSAnaGlkZScpIHx8ICh2aXNpYmxlID09PSBmYWxzZSAmJiB0eXBlID09PSAnc2hvdycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGVFbChlbCwgdGhpcy5vcHRpb25zW3R5cGUgKyAnQW5pbWF0aW9uJ10pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAodHlwZSA9PT0gJ3Nob3cnKSA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119dGFza3NcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc29sdmVcbiAgICAgKi9cbiAgICBhZGRUYXNrcyh0YXNrcywgcmVzb2x2ZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRhc2tzICYmIHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuI3Rhc2tzID0gdGhpcy4jdGFza3MuY29uY2F0KHRhc2tzKTtcbiAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnaGlkZScpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZXIucmVzb2x2ZSgobWFuYWdlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYW5hZ2VyLmdldFRhc2tzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnRyaWdnZXIoRXZlbnRzLmZldGNoU3RhcnQsIHtidWJibGVzOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKG1hbmFnZXIsIG51bWJlclJlcXVlc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci50cmlnZ2VyKEV2ZW50cy5mZXRjaEVuZCwge2J1YmJsZXM6IHRydWV9LCB7cmVxdWVzdHM6IG51bWJlclJlcXVlc3RzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rhc2tBYnN0cmFjdH0gdGFza1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VwZGF0ZVRhc2sodGFzaywgcmVzcG9uc2UpIHtcblxuICAgICAgICBpZiAodGFzay5wcm9ncmVzcyAhPT0gcmVzcG9uc2UucHJvZ3Jlc3MgfHwgdGFzay5zdGF0dXMgIT09IHJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgICAgfHwgdGFzay50ZXh0ICE9PSByZXNwb25zZS50ZXh0IHx8IHRhc2sudGl0bGUgIT09IHJlc3BvbnNlLnRpdGxlKSB7XG4gICAgICAgICAgICBjb25zdCBpc1N0YXR1c0NoYW5nZSA9IHRhc2suc3RhdHVzICE9PSByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgb2xkRGF0YSA9IGV4dGVuZCh7fSwgdGFzayk7XG4gICAgICAgICAgICB0YXNrID0gZXh0ZW5kKHRhc2ssIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRhc2sucmVmcmVzaChvbGREYXRhKTtcblxuICAgICAgICAgICAgaWYgKGlzU3RhdHVzQ2hhbmdlKSB7XG5cbiAgICAgICAgICAgICAgICB0YXNrLmNzc0NsYXNzU3dpdGNoKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoU3RhdHVzZXMuaXMoW1N0YXR1c2VzLkVYRUNdLCB0YXNrLnN0YXR1cykpIHtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuc3RhdHVzQ2hhbmdlLCB7YnViYmxlczogdHJ1ZX0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgICAgICAgICAgICAgb2xkU3RhdHVzOiBvbGREYXRhLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKFN0YXR1c2VzLmlzKFN0YXR1c2VzLlNFVF9WSVNJQkxFLCB0YXNrLnN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suZWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGFzay5lbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyVGFza3NFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbChlbGVtZW50LCB0aGlzLiN0YXNrQW5pbWF0aW9uKHRhc2ssICdzaG93JykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFN0YXR1c2VzLmlzKFN0YXR1c2VzLlNFVF9DT01QTEVURSwgdGFzay5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmVsZW1lbnQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUYXNrQWJzdHJhY3R8bnVtYmVyfSB0YXNrIFRhc2sgaW5zdGFuY2Ugb3IgdGFzayBpZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUmVtb3ZlZFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgcmVtb3ZlVGFzayh0YXNrLCBvblJlbW92ZWQgPSBudWxsKSB7XG5cbiAgICAgICAgbGV0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGFzayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRhc2sgPSB0YXNrcy5maW5kKCh0KSA9PiB0LmlkID09PSB0YXNrKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRUYXNrcygpLmZpbmRJbmRleCgodCkgPT4gdC5pZCA9PT0gdGFzay5pZCk7XG4gICAgICAgICAgICBpZiAoaWQgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rhc2tzLnNwbGljZShpZCwgMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNyZW1vdmVFbCh0YXNrLmVsZW1lbnQsIHRoaXMuI3Rhc2tBbmltYXRpb24odGFzaykpLnRoZW4oKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvblJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlZChlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuI3Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jdG9nZ2xlRW1wdHlUZXh0KCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUYXNrQWJzdHJhY3R9IHRhc2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICAjdGFza0FuaW1hdGlvbih0YXNrLCB0eXBlID0gJ2hpZGUnKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50YXNrc0FuaW1hdGlvblt0eXBlXVt0YXNrLnN0YXR1c10gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnRhc2tzQW5pbWF0aW9uW3R5cGVdW3Rhc2suc3RhdHVzXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zW3R5cGUgKyAnQW5pbWF0aW9uJ107XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyW118bWVudWJhcn0gc3RhdHVzRmlsdGVyXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0W119XG4gICAgICovXG4gICAgZ2V0VGFza3Moc3RhdHVzRmlsdGVyKSB7XG4gICAgICAgIGxldCB0YXNrcyA9IHRoaXMuI3Rhc2tzO1xuICAgICAgICBjb25zdCBUYXNrQ2xhc3MgPSB0aGlzLm9wdGlvbnMudGFza0NsYXNzO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0gPSBleHRlbmQobmV3IFRhc2tDbGFzcyhudWxsLCB0aGlzKSwgaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5wYXJzZUludChpdGVtKSA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0gPSBuZXcgVGFza0NsYXNzKGl0ZW0sIHRoaXMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdGF0dXNGaWx0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzRmlsdGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHN0YXR1c0ZpbHRlciA9IFtzdGF0dXNGaWx0ZXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNGaWx0ZXIuaW5kZXhPZih0YXNrLnN0YXR1cykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdHxudWxsfVxuICAgICAqL1xuICAgIGZpbmRUYXNrKGlkKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLmdldFRhc2tzKCkuZmluZCgodCkgPT4gdC5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAodGFzayBpbnN0YW5jZW9mIFRhc2tBYnN0cmFjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fGZhbHNlfWFuaW1hdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgI3JlbW92ZUVsKGVsLCBhbmltYXRpb24gPSB0aGlzLm9wdGlvbnMuaGlkZUFuaW1hdGlvbikge1xuXG4gICAgICAgIGlmIChhbmltYXRpb24gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCBhbmltYXRpb24pLnRoZW4oKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBvd25lckVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy5vd25lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB3cmFwcGVyRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzLndyYXBwZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgd3JhcHBlclRhc2tzRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnRzLndyYXBwZXJUYXNrcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Jlc29sdmVyfVxuICAgICAqL1xuICAgIGdldCByZXNvbHZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Jlc29sdmVyXG4gICAgfVxuXG5cbn1cblxuVUlDb21wb25lbnQuY2xhc3NQcmVmaXggPSAncW1jLSc7XG5cbk1hbmFnZXIuVGFza0Fic3RyYWN0ID0gVGFza0Fic3RyYWN0O1xuTWFuYWdlci5CdXR0b24gPSBCdXR0b247XG5NYW5hZ2VyLkJ1dHRvbnNHcm91cCA9IEJ1dHRvbnNHcm91cDtcbk1hbmFnZXIuSWNvbiA9IEljb247XG5cbk1hbmFnZXIuRGVmYXVsdHMgPSBEZWZhdWx0cztcbk1hbmFnZXIuRXZlbnRzID0gRXZlbnRzO1xuTWFuYWdlci5TdGF0dXNlcyA9IFN0YXR1c2VzO1xuXG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IiwiaW1wb3J0ICQgZnJvbSAnZ2xvYmFsL2pRdWVyeSc7XG5cbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcidcblxuJC5mbi5xdWV1ZU1hbmFnZXIgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG5cbiAgICBjb25zdCBtYW5hZ2VyID0gdGhpcy5kYXRhKCdxdWV1ZS1tYW5hZ2VyJyksXG4gICAgICAgIG1ldGhvZHMgPSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAge01hbmFnZXIuRGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmRhdGEoJ3F1ZXVlTWFuYWdlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHdyYXBwZXIuZGF0YSgncXVldWVNYW5hZ2VyJywgbmV3IE1hbmFnZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZCh0cnVlLCB7ZWxlbWVudDogJHdyYXBwZXIuZ2V0KDApfSwgTWFuYWdlci5EZWZhdWx0cywgb3B0aW9ucyB8fCB7fSwgJHdyYXBwZXIuZGF0YSgnbWFuYWdlcicpIHx8IHt9KSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnM6IGZ1bmN0aW9uKG9wdGlvbnMsICR3cmFwcGVyKXtcbiAgICAgICAgICAgICAgICAkd3JhcHBlciA9ICR3cmFwcGVyIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXIuYXBwZW5kKCQobmV3IE1hbmFnZXIuQnV0dG9uc0dyb3VwKG9wdGlvbnMpLnJlbmRlcigpKS5kYXRhKCdtYW5hZ2VyJywgbWFuYWdlcikpO1xuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9O1xuXG4gICAgaWYgKG1hbmFnZXIgaW5zdGFuY2VvZiBNYW5hZ2VyICYmIHR5cGVvZiBtYW5hZ2VyW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG1hbmFnZXJbbWV0aG9kXS5hcHBseShtYW5hZ2VyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZHNbbWV0aG9kXSkge1xuICAgICAgICByZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgIW1ldGhvZCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJC5lcnJvcignTWV0aG9kICcgKyBtZXRob2QgKyAnIGRvZXMgbm90IGV4aXN0IG9uIHF1ZXVlTWFuYWdlciAnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufTtcblxuJC5mbi5xdWV1ZU1hbmFnZXIuTWFuYWdlciA9IE1hbmFnZXI7XG5cbiQoJ2RvY3VtZW50JykucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5xbWMtcXVldWUtbWFuYWdlcltkYXRhLW1hbmFnZXJdJykucXVldWVNYW5hZ2VyKCk7XG59KTtcblxuXG5cbiJdLCJuYW1lcyI6WyJDU1NDbGFzc05hbWVNaXhpbiIsImNsYXNzUHJlZml4IiwiZ2V0Q2xhc3NOYW1lIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJGdWxsc2NyZWVuQXBpIiwicHJlZml4ZWQiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImkiLCJsZW5ndGgiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwia2V5cyIsIm9iamVjdCIsImlzT2JqZWN0IiwiZWFjaCIsImZuIiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwiaXNQbGFpbiIsImNhbGwiLCJjb25zdHJ1Y3RvciIsImNvbXB1dGVkU3R5bGUiLCJlbCIsInByb3AiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiY29tcHV0ZWRTdHlsZVZhbHVlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIlVTRVJfQUdFTlQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ3ZWJraXRWZXJzaW9uTWFwIiwiZXhlYyIsInBhcnNlRmxvYXQiLCJwb3AiLCJ0ZXN0IiwibWF0Y2giLCJJU19BTkRST0lEIiwibWFqb3IiLCJtaW5vciIsIklTX0VER0UiLCJJU19DSFJPTUUiLCJyZXN1bHQiLCJ2ZXJzaW9uIiwiSVNfU0FGQVJJIiwiVE9VQ0hfRU5BQkxFRCIsIkJvb2xlYW4iLCJEb20iLCJtYXhUb3VjaFBvaW50cyIsIkRvY3VtZW50VG91Y2giLCJJU19JUEFEIiwiaXNOb25CbGFua1N0cmluZyIsInN0ciIsInRyaW0iLCJ0aHJvd0lmV2hpdGVzcGFjZSIsImluZGV4T2YiLCJFcnJvciIsImNsYXNzUmVnRXhwIiwiY2xhc3NOYW1lIiwiUmVnRXhwIiwiaXNSZWFsIiwiaXNFbCIsIm5vZGVUeXBlIiwiY3JlYXRlUXVlcmllciIsIm1ldGhvZCIsInNlbGVjdG9yIiwiY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJjcmVhdGVFbCIsInRhZ05hbWUiLCJwcm9wZXJ0aWVzIiwiYXR0cmlidXRlcyIsImNvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInByb3BOYW1lIiwidmFsIiwic2V0QXR0cmlidXRlIiwic3R5bGVOYW1lIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsImF0dHJOYW1lIiwiYXBwZW5kQ29udGVudCIsInRleHQiLCJpbm5lclRleHQiLCJoYXNDbGFzcyIsImVsZW1lbnQiLCJjbGFzc1RvQ2hlY2siLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZENsYXNzIiwiY2xhc3NUb0FkZCIsImFkZCIsInJlbW92ZUNsYXNzIiwiY2xhc3NUb1JlbW92ZSIsInJlbW92ZSIsInNwbGl0IiwiZmlsdGVyIiwiYyIsImpvaW4iLCJ0b2dnbGVDbGFzcyIsImNsYXNzVG9Ub2dnbGUiLCJwcmVkaWNhdGUiLCJoYXMiLCJhdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnROb2RlIiwicmVjdCIsImsiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJ3aWR0aCIsImlzVGV4dE5vZGUiLCJpc1Zpc2libGUiLCJvcGFjaXR5Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRDbGllbnRSZWN0cyIsInN3aXRjaENsYXNzIiwiY3NzQ2xhc3MiLCJzZWFyY2hDbGFzcyIsImNvbXBhcmUiLCJleGlzdCIsIm5vcm1hbGl6ZUNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGUiLCJhcHBlbmRDaGlsZCIsIkVMRU1FTlQiLCJtYXRjaGVzIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiJCIsIiQkIiwiVUlDb21wb25lbnQiLCJyZW1vdmVPcHRpb25zUHRvcGVydHkiLCJwcm9wZXJ0eSIsIm9wdGlvbnMiLCJpbnN0YW5jZU9mIiwiY2xhc3NTZXQiLCJTZXQiLCJhcnJheSIsIml0ZW0iLCJfbm9ybWFsaXplUHJlZml4IiwiciIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiYXNzaWduIiwiY3JjMzIiLCJjb21tb25qc0hlbHBlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmFjdG9yeSIsIkRPX05PVF9FWFBPUlRfQ1JDIiwiQ1JDMzIiLCJzaWduZWRfY3JjX3RhYmxlIiwidGFibGUiLCJuIiwiSW50MzJBcnJheSIsIlQiLCJjcmMzMl9ic3RyIiwiYnN0ciIsInNlZWQiLCJDIiwiTCIsImNoYXJDb2RlQXQiLCJjcmMzMl9idWYiLCJidWYiLCJjcmMzMl9idWZfOCIsImNyYzMyX3N0ciIsImQiLCJleHRlbmQiLCJ0YXJnZXQiLCJzb3VyY2VzIiwic291cmNlIiwic2hpZnQiLCJTdGF0dXNlc0xpc3QiLCJJTklUIiwiV0FJVCIsIkVYRUMiLCJET05FIiwiRVJST1IiLCJERUxFVEVEIiwiU0VUX1ZJU0lCTEUiLCJTRVRfQ09NUExFVEUiLCJpcyIsInNldCIsInN0YXR1cyIsIlRhc2tBYnN0cmFjdCIsImlkIiwibWFuYWdlciIsIlN0YXR1c2VzIiwicGFyc2VJbnQiLCJfcmVuZGVyQ2hpbGQiLCJlbFdyYXBwZXIiLCJfYnVpbGRDc3NDbGFzcyIsImNzc0NsYXNzU3dpdGNoIiwidGhlbWUiLCJyZWZyZXNoIiwicmVzcG9uc2UiLCJlbGVtZW50cyIsIl9yZWZyZXNoRWxlbWVudHMiLCJnZXRQcm9ncmVzc1RvdGFsIiwiaGFzT3duUHJvcGVydHkiLCJNYXRoIiwicm91bmQiLCJyZWR1Y2UiLCJhIiwib2xkVGFzayIsIm9wdGlvbnNQYXJ0cyIsInBhcnRzIiwiZWxlbWVudE5hbWUiLCJtIiwicCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJvbGRWYWx1ZSIsIl9yZWZyZXNoQmFzaWNQcm9wZXJ0eSIsImVsTGlzdCIsImFwcGVuZCIsImluZGV4IiwiZWxMaSIsImlubmVySFRNTCIsInRhc2tPcHRpb25zIiwic3RhdHVzVGV4dCIsImdldFRpdGxlIiwiZWxUYXNrIiwiX2Nzc0xpc3QiLCJzdGF0dXNlc0xpc3RLZXkiLCJ0b0xvd2VyQ2FzZSIsIkVNUFRZX01FU1NBR0UiLCJEZWZhdWx0cyIsImRlbGF5VGltZSIsInBhcmFtcyIsIlJlc29sdmVyIiwib3B0IiwiT2JqIiwiZW50cmllcyIsInJlc29sdmUiLCJvblN0YXJ0Iiwib25FbmQiLCJpc1J1bm5pbmciLCJtYW5hZ2VycyIsImNhdGNoIiwiZXJyb3IiLCJ0aGVuIiwibnVtYmVyIiwidGFza3MiLCJnZXRUYXNrcyIsInRhc2siLCJjb21tb24iLCJwdXNoIiwidGFza3NJZCIsImZpbmRUYXNrcyIsInJlc29sdmVyIiwiaGFzaCIsInVybCIsImNhY2hlIiwiY29tbW9uTWFuYWdlcnMiLCJvd25lckVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiTWFuYWdlciIsIkV2ZW50cyIsImRlc3Ryb3kiLCJldmVudCIsImluaXRpYXRvck1hbmFnZXIiLCJyZW1vdmVUYXNrIiwic3BsaWNlIiwiZmluZEluZGV4IiwidGltZU91dCIsIm9rIiwianNvbiIsInJhdyIsIl91cGRhdGVUYXNrIiwiZmluZFRhc2siLCJhZGRUYXNrcyIsImZpbmQiLCJQcm9taXNlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImJvZHkiLCJjb25jYXQiLCJmZXRjaCIsImhlYWRlcnMiLCJlbmNvZGVVUkkiLCJFdmVudCIsInJlYWR5Iiwic3RhdHVzQ2hhbmdlIiwiZmV0Y2hTdGFydCIsImZldGNoRW5kIiwiZXZlbnRzIiwiTWFuYWdlckV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJ0eXBlIiwicHJvcHMiLCJfaW5pdGlhbEd1aWQiLCJfZ3VpZCIsIm5ld0dVSUQiLCJGYWtlV2Vha01hcCIsIldlYWtNYXAiLCJ2ZGF0YSIsImZsb29yIiwicGVyZm9ybWFuY2UiLCJub3ciLCJEYXRlIiwiZGF0YSIsImFjY2VzcyIsIkd1aWQiLCJnZXQiLCJkZWxldGUiLCJQcm9ncmVzcyIsInJlbmRlciIsIkhUTUxFbGVtZW50Iiwic2l6ZSIsImlzU2hvd0dyYWRpZW50Iiwic2V0UHJvZ3Jlc3MiLCJiYXJzIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImJhck9wdGlvbnMiLCJjbGFzc1Rob0NoZWNrIiwic2V0TGFiZWwiLCJsYWJlbCIsImxhYmVsVGV4dCIsImNzcyIsInJvbGUiLCJtaW4iLCJtYXgiLCJjaGlsZE5vZGVzIiwiSWNvblQiLCJpY29uIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVyIiwiaGFuZGxlclRpbW91dERlbGF5IiwiaGlkZGVuTGFiZWwiLCJkaXNhYmxlZCIsImljb25OYW1lIiwiaWNvbkhvdmVyTmFtZSIsImljb25TaXplIiwiYW5pbWF0ZWRDbGljayIsIkJ1dHRvbiIsImRyb3AiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJiaW5kIiwieCIsInBhZ2VYIiwibGVmdCIsInNjcm9sbFgiLCJ5IiwicGFnZVkiLCJ0b3AiLCJzY3JvbGxZIiwiYnV0dG9ucyIsImFycmFuZ2UiLCJzY2FsZWQiLCJzZWxlY3RhYmxlIiwic2VsZWN0SWNvbiIsIkJ1dHRvbnNHcm91cCIsImNvbmZpZyIsImJ0biIsInNlbGVjdGVkIiwiYnV0dG9uIiwiVGFza1N0YXR1cyIsIm1hcEljb25zIiwiYWN0aW9ucyIsImljb25zIiwiZWxzIiwiYnV0dG9uR3JvdXAiLCJlbmFibGVkV2l0aCIsImVuYWJsZWRXaXRoU3RhdHVzIiwiaWNvblBsYWNlbWVudCIsInRpdGxlIiwiaWNvbk1hcCIsIlRhc2siLCJlbERldGFpbCIsImVsU3RhdHVzV3JhcHBlciIsInBhcnQiLCJvd25lciIsImNvbXBvbmVudCIsIl9yZWZyZXNoUHJvZ3Jlc3MiLCJfcmVmcmVzaFN0YXR1cyIsImVsU3RhdHVzIiwiRG9tRGF0YSIsImNvbXBvbmV0IiwiRGVmdWFsdHMiLCJhbmltYXRlIiwidGltaW5nIiwiZHJhdyIsImR1cmF0aW9uIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aW1lIiwidGltZUZyYWN0aW9uIiwidGltaW5ncyIsImxpbmVhciIsInF1YWQiLCJwb3ciLCJjaXJjIiwic2luIiwiYWNvcyIsImJhY2siLCJhbmltYXRpb25zRHJhdyIsImRpc3BsYXkiLCJhbmltYXRlRWwiLCJhbmltYXRpb25Db25maWciLCJkZWxheSIsImFuaW1hdGlvbiIsInJlbmRlck9uRW1wdHkiLCJ0YXNrQ2xhc3MiLCJlbXB0eVRleHQiLCJoaWRlQW5pbWF0aW9uIiwic2hvd0FuaW1hdGlvbiIsInRhc2tzQW5pbWF0aW9uIiwiaGlkZSIsInNob3ciLCJ3cmFwcGVyIiwid3JhcHBlclRhc2tzIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwibnVtYmVyUmVxdWVzdHMiLCJyZXF1ZXN0cyIsImlzU3RhdHVzQ2hhbmdlIiwib2xkRGF0YSIsIm9sZFN0YXR1cyIsIndyYXBwZXJUYXNrc0VsZW1lbnQiLCJvblJlbW92ZWQiLCJ0Iiwic3RhdHVzRmlsdGVyIiwiVGFza0NsYXNzIiwiTnVtYmVyIiwid3JhcHBlckVsZW1lbnQiLCJ2aXNpYmxlIiwiSWNvbiIsInF1ZXVlTWFuYWdlciIsIm1ldGhvZHMiLCJpbml0IiwiJHdyYXBwZXIiLCJjcmVhdGVCdXR0b25zIiwiYXBwbHkiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7RUFDQTtFQUNBO0VBQ08sTUFBTUEsaUJBQWlCLEdBQUk7RUFFOUI7RUFDSjtFQUNBO0VBQ0lDLEVBQUFBLFdBQVcsRUFBRSxJQUxpQjs7RUFPOUI7RUFDSjtFQUNBO0VBQ0E7RUFDS0MsRUFBQUEsWUFBWSxFQUFFLFVBQVNDLElBQVQsRUFBZTtFQUUxQixRQUFJLEtBQUtGLFdBQUwsS0FBb0IsSUFBcEIsSUFBNEJFLElBQUksQ0FBQ0MsVUFBTCxDQUFnQixLQUFLSCxXQUFyQixDQUFoQyxFQUFtRTtFQUMvRCxhQUFPRSxJQUFQO0VBQ0g7O0VBQ0QsV0FBTyxLQUFLRixXQUFMLEdBQW1CRSxJQUExQjtFQUNIO0VBakI2QixDQUEzQjs7RUNIUDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBQ0EsTUFBTUUsYUFBYSxHQUFHO0VBQ3BCQyxFQUFBQSxRQUFRLEVBQUU7RUFEVSxDQUF0Qjs7RUFLQSxNQUFNQyxNQUFNLEdBQUcsQ0FDYixDQUNFLG1CQURGLEVBRUUsZ0JBRkYsRUFHRSxtQkFIRixFQUlFLG1C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
