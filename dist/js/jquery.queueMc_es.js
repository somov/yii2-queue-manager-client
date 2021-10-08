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
    taskRemoved: 'qmc:manager:taskRemoved',
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

          if (task.element.parentNode instanceof Element) {
            _classPrivateMethodGet(this, _removeEl, _removeEl2).call(this, task.element, _classPrivateMethodGet(this, _taskAnimation, _taskAnimation2).call(this, task)).then(el => {
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

      if (typeof item === 'object') {
        tasks[index] = extend(new TaskClass(null, this), item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmJ1bmRsZV9lcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2pzL21peGlucy9jc3NDbGFzc05hbWUuanMiLCIuLi9zcmMvanMvdXRpbHMvZnVsbHNjcmVlbi1hcGkuanMiLCIuLi9zcmMvanMvdXRpbHMvb2JqLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2NvbXB1dGVkLXN0eWxlLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLmpzIiwiLi4vc3JjL2pzL3VJQ29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcyIsIi4uL3NyYy9qcy91dGlscy9leHRlbmQuanMiLCIuLi9zcmMvanMvc3RhdHVzZXNMaXN0LmpzIiwiLi4vc3JjL2pzL3Rhc2tBYnN0cmFjdC5qcyIsIi4uL3NyYy9qcy9yZXNvbHZlci5qcyIsIi4uL3NyYy9qcy9ldmVudHNMaXN0LmpzIiwiLi4vc3JjL2pzL21hbmFnZXJFdmVudC5qcyIsIi4uL3NyYy9qcy91dGlscy9ndWlkLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2RvbS1kYXRhLmpzIiwiLi4vc3JjL2pzL3Byb2dyZXNzLmpzIiwiLi4vc3JjL2pzL2ljb250LmpzIiwiLi4vc3JjL2pzL2J1dHRvbi5qcyIsIi4uL3NyYy9qcy9idXR0b25zR3JvdXAuanMiLCIuLi9zcmMvanMvdGFza1N0YXR1cy5qcyIsIi4uL3NyYy9qcy90YXNrLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2FuaW1hdGUuanMiLCIuLi9zcmMvanMvbWFuYWdlci5qcyIsIi4uL3NyYy9qcy9qcXVlcnkucGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENTU0NsYXNzTmFtZU1peGluICA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudWxsfHN0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc1ByZWZpeDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICAgZ2V0Q2xhc3NOYW1lOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NQcmVmaXg9PT0gbnVsbCB8fCBuYW1lLnN0YXJ0c1dpdGgodGhpcy5jbGFzc1ByZWZpeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUHJlZml4ICsgbmFtZTtcbiAgICB9LFxuXG59OyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqIEBtb2R1bGUgZnVsbHNjcmVlbi1hcGlcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG4vKipcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHNlZSBbU3BlY2lmaWNhdGlvbl17QGxpbmsgaHR0cHM6Ly9mdWxsc2NyZWVuLnNwZWMud2hhdHdnLm9yZ31cbiAqIEBzZWUgW01hcCBBcHByb2FjaCBGcm9tIFNjcmVlbmZ1bGwuanNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc31cbiAqL1xuY29uc3QgRnVsbHNjcmVlbkFwaSA9IHtcbiAgcHJlZml4ZWQ6IHRydWVcbn07XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbmNvbnN0IGFwaU1hcCA9IFtcbiAgW1xuICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICdmdWxsc2NyZWVuJ1xuICBdLFxuICAvLyBXZWJLaXRcbiAgW1xuICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxuICAgICctd2Via2l0LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNb3ppbGxhXG4gIFtcbiAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLFxuICAgICctbW96LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNaWNyb3NvZnRcbiAgW1xuICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAnTVNGdWxsc2NyZWVuRXJyb3InLFxuICAgICctbXMtZnVsbHNjcmVlbidcbiAgXVxuXTtcblxuY29uc3Qgc3BlY0FwaSA9IGFwaU1hcFswXTtcbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuICAvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cbiAgaWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuICAgIGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuICAgIEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuICB9XG5cbiAgRnVsbHNjcmVlbkFwaS5wcmVmaXhlZCA9IGJyb3dzZXJBcGlbMF0gIT09IHNwZWNBcGlbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG4iLCIvKipcbiAqIEBmaWxlIG9iai5qc1xuICogQG1vZHVsZSBvYmpcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6RWFjaENhbGxiYWNrXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXkgZm9yIHRoZSBvYmplY3QgdGhhdCBpcyBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXktdmFsdWUgZm9yIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXJcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6UmVkdWNlQ2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhY2N1bVxuICogICAgICAgIFRoZSB2YWx1ZSB0aGF0IGlzIGFjY3VtdWxhdGluZyBvdmVyIHRoZSByZWR1Y2UgbG9vcC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleSBmb3IgdGhlIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleS12YWx1ZSBmb3Igb2JqZWN0IHRoYXQgaXMgYmVpbmcgaXRlcmF0ZWQgb3ZlclxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogICAgICAgICBUaGUgbmV3IGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBrZXlzIG9mIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogICAgICAgIFRoZSBPYmplY3QgdG8gZ2V0IHRoZSBrZXlzIGZyb21cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqICAgICAgICAgQW4gYXJyYXkgb2YgdGhlIGtleXMgZnJvbSB0aGUgb2JqZWN0LiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoZVxuICogICAgICAgICBvYmplY3QgcGFzc2VkIGluIHdhcyBpbnZhbGlkIG9yIGhhZCBubyBrZXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG59O1xuXG4vKipcbiAqIEFycmF5LWxpa2UgaXRlcmF0aW9uIGZvciBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqICAgICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICpcbiAqIEBwYXJhbSB7b2JqOkVhY2hDYWxsYmFja30gZm5cbiAqICAgICAgICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGZvciBlYWNoIGtleSBpbiB0aGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaChvYmplY3QsIGZuKSB7XG4gIGtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiBmbihvYmplY3Rba2V5XSwga2V5KSk7XG59XG5cbi8qKlxuICogQXJyYXktbGlrZSByZWR1Y2UgZm9yIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogICAgICAgIFRoZSBPYmplY3QgdGhhdCB5b3Ugd2FudCB0byByZWR1Y2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqICAgICAgICAgQSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2gga2V5IGluIHRoZSBvYmplY3QuIEl0XG4gKiAgICAgICAgIHJlY2VpdmVzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBhbmQgdGhlIHBlci1pdGVyYXRpb24gdmFsdWUgYW5kIGtleVxuICogICAgICAgICBhcyBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gW2luaXRpYWwgPSAwXVxuICogICAgICAgIFN0YXJ0aW5nIHZhbHVlXG4gKlxuICogQHJldHVybiB7TWl4ZWR9XG4gKiAgICAgICAgIFRoZSBmaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGZuLCBpbml0aWFsID0gMCkge1xuICByZXR1cm4ga2V5cyhvYmplY3QpLnJlZHVjZSgoYWNjdW0sIGtleSkgPT4gZm4oYWNjdW0sIG9iamVjdFtrZXldLCBrZXkpLCBpbml0aWFsKTtcbn1cblxuLyoqXG4gKiBPYmplY3QuYXNzaWduLXN0eWxlIG9iamVjdCBzaGFsbG93IG1lcmdlL2V4dGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSAuLi5zb3VyY2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmIChPYmplY3QuYXNzaWduKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBhIHZhbHVlIGlzIGFuIG9iamVjdCBvZiBhbnkga2luZCAtIGluY2x1ZGluZyBET00gbm9kZXMsXG4gKiBhcnJheXMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGV0Yy4gTm90IGZ1bmN0aW9ucywgdGhvdWdoLlxuICpcbiAqIFRoaXMgYXZvaWRzIHRoZSBnb3RjaGEgd2hlcmUgdXNpbmcgYHR5cGVvZmAgb24gYSBgbnVsbGAgdmFsdWVcbiAqIHJlc3VsdHMgaW4gYCdvYmplY3QnYC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGFwcGVhcnMgdG8gYmUgYSBcInBsYWluXCIgb2JqZWN0IC0gdGhhdCBpcywgYVxuICogZGlyZWN0IGluc3RhbmNlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21wdXRlZC1zdHlsZS5qc1xuICogQG1vZHVsZSBjb21wdXRlZC1zdHlsZVxuICovXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEEgc2FmZSBnZXRDb21wdXRlZFN0eWxlLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gRmlyZWZveCwgaWYgdGhlIHBsYXllciBpcyBsb2FkZWQgaW4gYW4gaWZyYW1lIHdpdGhcbiAqIGBkaXNwbGF5Om5vbmVgLCB0aGVuIGBnZXRDb21wdXRlZFN0eWxlYCByZXR1cm5zIGBudWxsYCwgc28sIHdlIGRvIGFcbiAqIG51bGwtY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHBsYXllciBkb2Vzbid0IGJyZWFrIGluIHRoZXNlIGNhc2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtICAgIHtFbGVtZW50fSBlbFxuICogICAgICAgICAgIFRoZSBlbGVtZW50IHlvdSB3YW50IHRoZSBjb21wdXRlZCBzdHlsZSBvZlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBwcm9wXG4gKiAgICAgICAgICAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnRcbiAqXG4gKiBAc2VlICAgICAgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWwsIHByb3ApIHtcbiAgaWYgKCFlbCB8fCAhcHJvcCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZVZhbHVlID8gY29tcHV0ZWRTdHlsZVZhbHVlLmdldFByb3BlcnR5VmFsdWUocHJvcCkgfHwgY29tcHV0ZWRTdHlsZVZhbHVlW3Byb3BdIDogJyc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVkU3R5bGU7XG4iLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqIEBtb2R1bGUgYnJvd3NlclxuICovXG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5jb25zdCB3ZWJraXRWZXJzaW9uTWFwID0gKC9BcHBsZVdlYktpdFxcLyhbXFxkLl0rKS9pKS5leGVjKFVTRVJfQUdFTlQpO1xuY29uc3QgYXBwbGVXZWJraXRWZXJzaW9uID0gd2Via2l0VmVyc2lvbk1hcCA/IHBhcnNlRmxvYXQod2Via2l0VmVyc2lvbk1hcC5wb3AoKSkgOiBudWxsO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIGFuIGlQb2QuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgaU9TIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBJT1NfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbWF0Y2ggPSBVU0VSX0FHRU5ULm1hdGNoKC9PUyAoXFxkKylfL2kpO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn0oKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbiBBbmRyb2lkIGRldmljZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBBbmRyb2lkIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xudWxsfVxuICovXG5leHBvcnQgY29uc3QgQU5EUk9JRF9WRVJTSU9OID0gKGZ1bmN0aW9uKCkge1xuICAvLyBUaGlzIG1hdGNoZXMgQW5kcm9pZCBNYWpvci5NaW5vci5QYXRjaCB2ZXJzaW9uc1xuICAvLyBBTkRST0lEX1ZFUlNJT04gaXMgTWFqb3IuTWlub3IgYXMgYSBOdW1iZXIsIGlmIE1pbm9yIGlzbid0IGF2YWlsYWJsZSwgdGhlbiBvbmx5IE1ham9yIGlzIHJldHVybmVkXG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvQW5kcm9pZCAoXFxkKykoPzpcXC4oXFxkKykpPyg/OlxcLihcXGQrKSkqL2kpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMV0gJiYgcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIGNvbnN0IG1pbm9yID0gbWF0Y2hbMl0gJiYgcGFyc2VGbG9hdChtYXRjaFsyXSk7XG5cbiAgaWYgKG1ham9yICYmIG1pbm9yKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0gKyAnLicgKyBtYXRjaFsyXSk7XG4gIH0gZWxzZSBpZiAobWFqb3IpIHtcbiAgICByZXR1cm4gbWFqb3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBuYXRpdmUgQW5kcm9pZCBicm93c2VyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19OQVRJVkVfQU5EUk9JRCA9IElTX0FORFJPSUQgJiYgQU5EUk9JRF9WRVJTSU9OIDwgNSAmJiBhcHBsZVdlYmtpdFZlcnNpb24gPCA1Mzc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBNb3ppbGxhIEZpcmVmb3guXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0ZJUkVGT1ggPSAoL0ZpcmVmb3gvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIE1pY3Jvc29mdCBFZGdlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19FREdFID0gKC9FZGcvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIEdvb2dsZSBDaHJvbWUuXG4gKlxuICogVGhpcyB3aWxsIGFsc28gYmUgYHRydWVgIGZvciBDaHJvbWUgb24gaU9TLCB3aGljaCB3aWxsIGhhdmUgZGlmZmVyZW50IHN1cHBvcnRcbiAqIGFzIGl0IGlzIGFjdHVhbGx5IFNhZmFyaSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gIUlTX0VER0UgJiYgKCgvQ2hyb21lL2kpLnRlc3QoVVNFUl9BR0VOVCkgfHwgKC9DcmlPUy9pKS50ZXN0KFVTRVJfQUdFTlQpKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgR29vZ2xlIENocm9tZSB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgQ0hST01FX1ZFUlNJT04gPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvKENocm9tZXxDcmlPUylcXC8oXFxkKykvKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsyXSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBJbnRlcm5ldCBFeHBsb3JlciB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgSUVfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzdWx0ID0gKC9NU0lFXFxzKFxcZCspXFwuXFxkLykuZXhlYyhVU0VSX0FHRU5UKTtcbiAgbGV0IHZlcnNpb24gPSByZXN1bHQgJiYgcGFyc2VGbG9hdChyZXN1bHRbMV0pO1xuXG4gIGlmICghdmVyc2lvbiAmJiAoL1RyaWRlbnRcXC83LjAvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAoL3J2OjExLjAvKS50ZXN0KFVTRVJfQUdFTlQpKSB7XG4gICAgLy8gSUUgMTEgaGFzIGEgZGlmZmVyZW50IHVzZXIgYWdlbnQgc3RyaW5nIHRoYW4gb3RoZXIgSUUgdmVyc2lvbnNcbiAgICB2ZXJzaW9uID0gMTEuMDtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uO1xufSgpKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGRlc2t0b3AgU2FmYXJpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSAoL1NhZmFyaS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19DSFJPTUUgJiYgIUlTX0FORFJPSUQgJiYgIUlTX0VER0U7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhIFdpbmRvd3MgbWFjaGluZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfV0lORE9XUyA9ICgvV2luZG93cy9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIHRvdWNoLWVuYWJsZWQuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRPVUNIX0VOQUJMRUQgPSBCb29sZWFuKERvbS5pc1JlYWwoKSAmJiAoXG4gICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8XG4gIHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIHdpbmRvdy5kb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBhZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpIHx8XG4gIChJU19TQUZBUkkgJiYgVE9VQ0hfRU5BQkxFRCAmJiAhKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBob25lLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGlPUyBkZXZpY2UuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbnkgZmxhdm9yIG9mIFNhZmFyaSAtIGluY2x1ZGluZyBpT1MuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0FOWV9TQUZBUkkgPSAoSVNfU0FGQVJJIHx8IElTX0lPUykgJiYgIUlTX0NIUk9NRTtcbiIsIi8qKlxuICogQGZpbGUgZG9tLmpzXG4gKiBAbW9kdWxlIGRvbVxuICovXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgZnMgZnJvbSAnLi9mdWxsc2NyZWVuLWFwaSc7XG5cbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vb2JqJztcbmltcG9ydCBjb21wdXRlZFN0eWxlIGZyb20gJy4vY29tcHV0ZWQtc3R5bGUnO1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICcuL2Jyb3dzZXInO1xuXG4vKipcbiAqIERldGVjdCBpZiBhIHZhbHVlIGlzIGEgc3RyaW5nIHdpdGggYW55IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiAgICAgICAgIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIG5vbi1ibGFuaywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICovXG5mdW5jdGlvbiBpc05vbkJsYW5rU3RyaW5nKHN0cikge1xuICAgIC8vIHdlIHVzZSBzdHIudHJpbSBhcyBpdCB3aWxsIHRyaW0gYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGZyb20gdGhlIGZyb250IG9yIGJhY2sgb2Ygbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycy4gYWthXG4gICAgLy8gQW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIHN0aWxsIGNvbnRhaW4gdGhlbSBhZnRlciBgdHJpbWAgYnV0IHdoaXRlc3BhY2Ugb25seSBzdHJpbmdzXG4gICAgLy8gd2lsbCBoYXZlIGEgbGVuZ3RoIG9mIDAsIGZhaWxpbmcgdGhpcyBjaGVjay5cbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgQm9vbGVhbihzdHIudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaGFzIHdoaXRlc3BhY2UuIFRoaXMgaXMgdXNlZCBieVxuICogY2xhc3MgbWV0aG9kcyB0byBiZSByZWxhdGl2ZWx5IGNvbnNpc3RlbnQgd2l0aCB0aGUgY2xhc3NMaXN0IEFQSS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqICAgICAgICAgVGhlIHN0cmluZyB0byBjaGVjayBmb3Igd2hpdGVzcGFjZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIHRoZXJlIGlzIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgLy8gc3RyLmluZGV4T2YgaW5zdGVhZCBvZiByZWdleCBiZWNhdXNlIHN0ci5pbmRleE9mIGlzIGZhc3RlciBwZXJmb3JtYW5jZSB3aXNlLlxuICAgIGlmIChzdHIuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzcyBoYXMgaWxsZWdhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvZHVjZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgYSBjbGFzc05hbWUgd2l0aGluIGFuIGVsZW1lbnRzIGNsYXNzTmFtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVcbiAqICAgICAgICAgVGhlIGNsYXNzTmFtZSB0byBnZW5lcmF0ZSB0aGUgUmVnRXhwIGZvci5cbiAqXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiAgICAgICAgIFRoZSBSZWdFeHAgdGhhdCB3aWxsIGNoZWNrIGZvciBhIHNwZWNpZmljIGBjbGFzc05hbWVgIGluIGFuIGVsZW1lbnRzXG4gKiAgICAgICAgIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY2xhc3NSZWdFeHAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKCR8XFxcXHMpJyk7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBET00gaW50ZXJmYWNlIGFwcGVhcnMgdG8gYmUgcmVhbCAoaS5lLiBub3Qgc2ltdWxhdGVkKS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGFwcGVhcnMgdG8gYmUgcmVhbCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWwoKSB7XG4gICAgLy8gQm90aCBkb2N1bWVudCBhbmQgd2luZG93IHdpbGwgbmV2ZXIgYmUgdW5kZWZpbmVkIHRoYW5rcyB0byBgZ2xvYmFsYC5cbiAgICByZXR1cm4gZG9jdW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzLCB2aWEgZHVjayB0eXBpbmcsIHdoZXRoZXIgb3Igbm90IGEgdmFsdWUgaXMgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICAgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIERPTSBlbGVtZW50LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWwodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZSwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luRnJhbWUoKSB7XG5cbiAgICAvLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGhlcmUgYmVjYXVzZSBTYWZhcmkgd2lsbCB0aHJvdyBlcnJvcnMgd2hlbiBhdHRlbXB0aW5nXG4gICAgLy8gdG8gZ2V0IGVpdGhlciBgcGFyZW50YCBvciBgc2VsZmBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGY7XG4gICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBmdW5jdGlvbnMgdG8gcXVlcnkgdGhlIERPTSB1c2luZyBhIGdpdmVuIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge3N0cmluZ30gbWV0aG9kXG4gKiAgICAgICAgICBUaGUgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgcXVlcnkgd2l0aC5cbiAqXG4gKiBAcmV0dXJuICB7RnVuY3Rpb259XG4gKiAgICAgICAgICBUaGUgcXVlcnkgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJpZXIobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBpZiAoIWlzTm9uQmxhbmtTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbbWV0aG9kXShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25CbGFua1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSBpc0VsKGNvbnRleHQpID8gY29udGV4dCA6IGRvY3VtZW50O1xuXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXSAmJiBjdHhbbWV0aG9kXShzZWxlY3Rvcik7XG4gICAgfTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCBhbmQgYXBwbGllcyBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmQgaW5zZXJ0cyBjb250ZW50LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWU9J2RpdiddXG4gKiAgICAgICAgIE5hbWUgb2YgdGFnIHRvIGJlIGNyZWF0ZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbcHJvcGVydGllcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBwcm9wZXJ0aWVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbYXR0cmlidXRlcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yfSBjb250ZW50XG4gKiAgICAgICAgQSBjb250ZW50IGRlc2NyaXB0b3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcGVydGllc1twcm9wTmFtZV07XG5cbiAgICAgICAgLy8gU2VlICMyMTc2XG4gICAgICAgIC8vIFdlIG9yaWdpbmFsbHkgd2VyZSBhY2NlcHRpbmcgYm90aCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGluIHRoZVxuICAgICAgICAvLyBzYW1lIG9iamVjdCwgYnV0IHRoYXQgZG9lc24ndCB3b3JrIHNvIHdlbGwuXG4gICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKCdhcmlhLScpICE9PSAtMSB8fCBwcm9wTmFtZSA9PT0gJ3JvbGUnIHx8IHByb3BOYW1lID09PSAndHlwZScpIHtcblxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCB2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbFtzdHlsZU5hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0ZXh0Q29udGVudCBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgZXZlcnl3aGVyZSBhbmQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBtZXRob2QgZm9yIGl0LlxuICAgICAgICAgICAgdGV4dENvbnRlbnQoZWwsIHZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxbcHJvcE5hbWVdICE9PSB2YWwgfHwgcHJvcE5hbWUgPT09ICd0YWJJbmRleCcpIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5qZWN0cyB0ZXh0IGludG8gYW4gZWxlbWVudCwgcmVwbGFjaW5nIGFueSBleGlzdGluZyBjb250ZW50cyBlbnRpcmVseS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBhZGQgdGV4dCBjb250ZW50IGludG9cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcbiAqICAgICAgICAgVGhlIHRleHQgY29udGVudCB0byBhZGQuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBhZGRlZCB0ZXh0IGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29udGVudChlbCwgdGV4dCkge1xuICAgIGlmICh0eXBlb2YgZWwudGV4dENvbnRlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIG5vZGUgb2YgYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGRcbiAqICAgICAgICBFbGVtZW50IHRvIGluc2VydFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gKiAgICAgICAgRWxlbWVudCB0byBpbnNlcnQgY2hpbGQgaW50b1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRvKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIEVsZW1lbnQgdG8gY2hlY2tcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9DaGVja1xuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGNoZWNrIGZvclxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIGBjbGFzc1RvQ2hlY2tgIGhhcyB3aGl0ZSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzVG9DaGVjaykge1xuICAgIHRocm93SWZXaGl0ZXNwYWNlKGNsYXNzVG9DaGVjayk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NSZWdFeHAoY2xhc3NUb0NoZWNrKS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIGFkZCBjbGFzcyBuYW1lIHRvLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NUb0FkZFxuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGFkZC5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgYWRkZWQgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9BZGQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuXG4gICAgICAgIC8vIERvbid0IG5lZWQgdG8gYHRocm93SWZXaGl0ZXNwYWNlYCBoZXJlIGJlY2F1c2UgYGhhc0VsQ2xhc3NgIHdpbGwgZG8gaXRcbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgY2xhc3NMaXN0IG5vdCBiZWluZyBzdXBwb3J0ZWQuXG4gICAgfSBlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NUb0FkZCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc1RvQWRkKS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIHJlbW92ZSBhIGNsYXNzIG5hbWUgZnJvbS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9SZW1vdmVcbiAqICAgICAgICAgQ2xhc3MgbmFtZSB0byByZW1vdmVcbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCBjbGFzcyBuYW1lIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc1RvUmVtb3ZlKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0lmV2hpdGVzcGFjZShjbGFzc1RvUmVtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMgIT09IGNsYXNzVG9SZW1vdmU7XG4gICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBUaGUgY2FsbGJhY2sgZGVmaW5pdGlvbiBmb3IgdG9nZ2xlQ2xhc3MuXG4gKlxuICogQGNhbGxiYWNrIG1vZHVsZTpkb21+UHJlZGljYXRlQ2FsbGJhY2tcbiAqIEBwYXJhbSAgICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICAgIFRoZSBET00gZWxlbWVudCBvZiB0aGUgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgICAgVGhlIGBjbGFzc05hbWVgIHRoYXQgd2FudHMgdG8gYmUgdG9nZ2xlZFxuICpcbiAqIEByZXR1cm4gICB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKiAgICAgICAgICAgSWYgYHRydWVgIGlzIHJldHVybmVkLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gKiAgICAgICAgICAgYGVsZW1lbnRgLiBJZiBgZmFsc2VgLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgcmVtb3ZlZCBmcm9tXG4gKiAgICAgICAgICAgdGhlIGBlbGVtZW50YC4gSWYgYHVuZGVmaW5lZGAsIHRoZSBjYWxsYmFjayB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBuYW1lIHRvL2Zyb20gYW4gZWxlbWVudCBkZXBlbmRpbmcgb24gYW4gb3B0aW9uYWxcbiAqIGNvbmRpdGlvbiBvciB0aGUgcHJlc2VuY2UvYWJzZW5jZSBvZiB0aGUgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRvIHRvZ2dsZSBhIGNsYXNzIG5hbWUgb24uXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgIFRoZSBjbGFzcyB0aGF0IHNob3VsZCBiZSB0b2dnbGVkLlxuICpcbiAqIEBwYXJhbSAge2Jvb2xlYW58bW9kdWxlOmRvbX5QcmVkaWNhdGVDYWxsYmFja30gW3ByZWRpY2F0ZV1cbiAqICAgICAgICAgU2VlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHtAbGluayBtb2R1bGU6ZG9tflByZWRpY2F0ZUNhbGxiYWNrfVxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggYSBjbGFzcyB0aGF0IGhhcyBiZWVuIHRvZ2dsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlLCBwcmVkaWNhdGUpIHtcblxuICAgIC8vIFRoaXMgQ0FOTk9UIHVzZSBgY2xhc3NMaXN0YCBpbnRlcm5hbGx5IGJlY2F1c2UgSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgdG8gdGhlIGBjbGFzc0xpc3QudG9nZ2xlKClgIG1ldGhvZCEgV2hpY2ggaXMgZmluZSBiZWNhdXNlXG4gICAgLy8gYGNsYXNzTGlzdGAgd2lsbCBiZSB1c2VkIGJ5IHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBoYXMgPSBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcblxuICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZShlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9ICFoYXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5lY2Vzc2FyeSBjbGFzcyBvcGVyYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGVcbiAgICAvLyBlbGVtZW50LCBubyBhY3Rpb24gaXMgcmVxdWlyZWQuXG4gICAgaWYgKHByZWRpY2F0ZSA9PT0gaGFzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKipcbiAqIEFwcGx5IGF0dHJpYnV0ZXMgdG8gYW4gSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqICAgICAgICBFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGVzIHRvLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqICAgICAgICBBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYXR0clZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBhdHRyVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCAoYXR0clZhbHVlID09PSB0cnVlID8gJycgOiBhdHRyVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBhbiBlbGVtZW50J3MgYXR0cmlidXRlIHZhbHVlcywgYXMgZGVmaW5lZCBvbiB0aGUgSFRNTCB0YWcuXG4gKlxuICogQXR0cmlidXRlcyBhcmUgbm90IHRoZSBzYW1lIGFzIHByb3BlcnRpZXMuIFRoZXkncmUgZGVmaW5lZCBvbiB0aGUgdGFnXG4gKiBvciB3aXRoIHNldEF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSB0YWdcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCB0YWcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIEFsbCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50LiBCb29sZWFuIGF0dHJpYnV0ZXMgd2lsbCBiZSBgdHJ1ZWAgb3JcbiAqICAgICAgICAgYGZhbHNlYCwgb3RoZXJzIHdpbGwgYmUgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXModGFnKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICAvLyBrbm93biBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAvLyB3ZSBjYW4gY2hlY2sgZm9yIG1hdGNoaW5nIGJvb2xlYW4gcHJvcGVydGllcywgYnV0IG5vdCBhbGwgYnJvd3NlcnNcbiAgICAvLyBhbmQgbm90IGFsbCB0YWdzIGtub3cgYWJvdXQgdGhlc2UgYXR0cmlidXRlcywgc28sIHdlIHN0aWxsIHdhbnQgdG8gY2hlY2sgdGhlbSBtYW51YWxseVxuICAgIGNvbnN0IGtub3duQm9vbGVhbnMgPSAnLCcgKyAnYXV0b3BsYXksY29udHJvbHMscGxheXNpbmxpbmUsbG9vcCxtdXRlZCxkZWZhdWx0LGRlZmF1bHRNdXRlZCcgKyAnLCc7XG5cbiAgICBpZiAodGFnICYmIHRhZy5hdHRyaWJ1dGVzICYmIHRhZy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB0YWcuYXR0cmlidXRlcztcblxuICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBrbm93biBib29sZWFuc1xuICAgICAgICAgICAgLy8gdGhlIG1hdGNoaW5nIGVsZW1lbnQgcHJvcGVydHkgd2lsbCByZXR1cm4gYSB2YWx1ZSBmb3IgdHlwZW9mXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhZ1thdHRyTmFtZV0gPT09ICdib29sZWFuJyB8fCBrbm93bkJvb2xlYW5zLmluZGV4T2YoJywnICsgYXR0ck5hbWUgKyAnLCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSBvZiBhbiBpbmNsdWRlZCBib29sZWFuIGF0dHJpYnV0ZSBpcyB0eXBpY2FsbHkgYW4gZW1wdHlcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgKCcnKSB3aGljaCB3b3VsZCBlcXVhbCBmYWxzZSBpZiB3ZSBqdXN0IGNoZWNrIGZvciBhIGZhbHNlIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gZG9uJ3Qgd2FudCBzdXBwb3J0IGJhZCBjb2RlIGxpa2UgYXV0b3BsYXk9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ialthdHRyTmFtZV0gPSBhdHRyVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBnZXQgdGhlIHZhbHVlIG9mLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgVmFsdWUgdG8gc2V0IHRoZSBhdHRyaWJ1dGUgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYmxvY2sgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFR1cm4gb2ZmIHRleHQgc2VsZWN0aW9uIGJsb2NraW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5ibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBJZGVudGljYWwgdG8gdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBmdW5jdGlvbiwgYnV0IGVuc3VyZXMgdGhhdFxuICogdGhlIG1ldGhvZCBpcyBzdXBwb3J0ZWQgYXQgYWxsIChpdCBpcyBpbiBhbGwgYnJvd3NlcnMgd2UgY2xhaW0gdG8gc3VwcG9ydClcbiAqIGFuZCB0aGF0IHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYmVmb3JlIGNvbnRpbnVpbmcuXG4gKlxuICogVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGFsc28gc2hpbXMgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHByb3ZpZGVkIGJ5IHNvbWVcbiAqIG9sZGVyIGJyb3dzZXJzIChuYW1lbHksIElFOCkuXG4gKlxuICogQWRkaXRpb25hbGx5LCBzb21lIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGFkZGluZyBwcm9wZXJ0aWVzIHRvIGFcbiAqIGBDbGllbnRSZWN0YC9gRE9NUmVjdGAgb2JqZWN0OyBzbywgd2Ugc2hhbGxvdy1jb3B5IGl0IHdpdGggdGhlIHN0YW5kYXJkXG4gKiBwcm9wZXJ0aWVzIChleGNlcHQgYHhgIGFuZCBgeWAgd2hpY2ggYXJlIG5vdCB3aWRlbHkgc3VwcG9ydGVkKS4gVGhpcyBoZWxwc1xuICogYXZvaWQgaW1wbGVtZW50YXRpb25zIHdoZXJlIGtleXMgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgd2hvc2UgYENsaWVudFJlY3RgIHdlIHdhbnQgdG8gY2FsY3VsYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKiAgICAgICAgIEFsd2F5cyByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IC0gb3IgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgWydib3R0b20nLCAnaGVpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ3dpZHRoJ10uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGlmIChyZWN0W2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSByZWN0W2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUoZWwsICdoZWlnaHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC53aWR0aCkge1xuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlKGVsLCAnd2lkdGgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwb3NpdGlvbiBvZiBhIERPTSBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tflBvc2l0aW9uXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlZnRcbiAqICAgICAgICAgICBQaXhlbHMgdG8gdGhlIGxlZnQuXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogICAgICAgICAgIFBpeGVscyBmcm9tIHRoZSB0b3AuXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqXG4gKiBVc2VzIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIHRlY2huaXF1ZSBmcm9tIEpvaG4gUmVzaWcuXG4gKlxuICogQHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvZ2V0Ym91bmRpbmdjbGllbnRyZWN0LWlzLWF3ZXNvbWUvXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCBvZmZzZXQuXG4gKlxuICogQHJldHVybiB7bW9kdWxlOmRvbX5Qb3NpdGlvbn1cbiAqICAgICAgICAgVGhlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQb3NpdGlvbihlbCkge1xuICAgIGlmICghZWwgfHwgKGVsICYmICFlbC5vZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuXG4gICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCAmJiBlbCAhPT0gZG9jdW1lbnRbZnMuZnVsbHNjcmVlbkVsZW1lbnRdKSB7XG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcblxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0LFxuICAgICAgICB0b3AsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgYSBET00gZWxlbWVudCBvciBtb3VzZSBwb2ludGVyLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tfkNvb3JkaW5hdGVzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHhcbiAqICAgICAgICAgICB4IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlcbiAqICAgICAgICAgICB5IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gd2l0aGluIGFuIGVsZW1lbnQuXG4gKlxuICogVGhlIGJhc2Ugb24gdGhlIGNvb3JkaW5hdGVzIGFyZSB0aGUgYm90dG9tIGxlZnQgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBvbiB3aGljaCB0byBnZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gb24uXG4gKlxuICogQHBhcmFtICB7RXZlbnRUYXJnZXR+RXZlbnR9IGV2ZW50XG4gKiAgICAgICAgIEV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6ZG9tfkNvb3JkaW5hdGVzfVxuICogICAgICAgICBBIGNvb3JkaW5hdGVzIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBtb3VzZSBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZWwsIGV2ZW50KSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbDtcblxuICAgICAgICB3aGlsZSAoaXRlbSAmJiBpdGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdodG1sJykge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZShpdGVtLCAndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgICAgIGlmICgvXm1hdHJpeC8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdHJhbnNmb3JtLnNsaWNlKDcsIC0xKS5zcGxpdCgvLFxccy8pLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZC54ICs9IHZhbHVlc1s0XTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXm1hdHJpeDNkLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sXFxzLykubWFwKE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnggKz0gdmFsdWVzWzEyXTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzEzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0ge307XG4gICAgY29uc3QgYm94VGFyZ2V0ID0gZmluZFBvc2l0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYm94ID0gZmluZFBvc2l0aW9uKGVsKTtcbiAgICBjb25zdCBib3hXID0gYm94LndpZHRoO1xuICAgIGNvbnN0IGJveEggPSBib3guaGVpZ2h0O1xuICAgIGxldCBvZmZzZXRZID0gZXZlbnQub2Zmc2V0WSAtIChib3gudG9wIC0gYm94VGFyZ2V0LnRvcCk7XG4gICAgbGV0IG9mZnNldFggPSBldmVudC5vZmZzZXRYIC0gKGJveC5sZWZ0IC0gYm94VGFyZ2V0LmxlZnQpO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIG9mZnNldFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGJveC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyBib3gudG9wO1xuICAgICAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgICAgIG9mZnNldFggLT0gdHJhbnNsYXRlZC54O1xuICAgICAgICAgICAgb2Zmc2V0WSAtPSB0cmFuc2xhdGVkLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvbi55ID0gKDEgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvZmZzZXRZIC8gYm94SCkpKTtcbiAgICBwb3NpdGlvbi54ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb2Zmc2V0WCAvIGJveFcpKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcywgdmlhIGR1Y2sgdHlwaW5nLCB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSAge01peGVkfSB2YWx1ZVxuICogICAgICAgICBDaGVjayBpZiB0aGlzIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIHRleHQgbm9kZSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMztcbn1cblxuXG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCl7XG4gICAgaWYgKGlzRWwoZWwpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9wYWNpdHkgPSBlbC5zdHlsZT8ub3BhY2l0eSAhPT0gJycgPyBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpIDogMTtcblxuICAgIGlmIChvcGFjaXR5ID09PSAwIHx8IGNvbXB1dGVkU3R5bGUoZWwsICd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISEoIGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNzc0NsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoQ2xhc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcywgY29tcGFyZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMuc3RhcnRzV2l0aChzZWFyY2hDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn0pIHtcblxuICAgIGxldCBleGlzdCA9ICcnO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoZXhpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBleGlzdCA9IGNvbXBhcmUoYyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChleGlzdCAhPT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKGV4aXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGV4aXN0KTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcylcbiAgICB9XG59XG5cbi8qKlxuICogRW1wdGllcyB0aGUgY29udGVudHMgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBlbXB0eSBjaGlsZHJlbiBmcm9tXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBubyBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlFbChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIG1peGVkIHZhbHVlIHRoYXQgZGVzY3JpYmVzIGNvbnRlbnQgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NXG4gKiB2aWEgc29tZSBtZXRob2QuIEl0IGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICpcbiAqIFR5cGUgICAgICAgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLVxuICogYHN0cmluZ2AgICB8IFRoZSB2YWx1ZSB3aWxsIGJlIG5vcm1hbGl6ZWQgaW50byBhIHRleHQgbm9kZS5cbiAqIGBFbGVtZW50YCAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBUZXh0Tm9kZWAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBBcnJheWAgICAgfCBBIG9uZS1kaW1lbnNpb25hbCBhcnJheSBvZiBzdHJpbmdzLCBlbGVtZW50cywgdGV4dCBub2Rlcywgb3IgZnVuY3Rpb25zLiBUaGVzZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgb3IgdGV4dCBub2RlIChhbnkgb3RoZXIgcmV0dXJuIHZhbHVlLCBsaWtlIGFuIGFycmF5LCB3aWxsIGJlIGlnbm9yZWQpLlxuICogYEZ1bmN0aW9uYCB8IEEgZnVuY3Rpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgdGV4dCBub2RlLCBvciBhcnJheSAtIGFueSBvZiB0aGUgb3RoZXIgcG9zc2libGUgdmFsdWVzIGRlc2NyaWJlZCBhYm92ZS4gVGhpcyBtZWFucyB0aGF0IGEgY29udGVudCBkZXNjcmlwdG9yIGNvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZ1bmN0aW9ucywgYnV0IHRob3NlIHNlY29uZC1sZXZlbCBmdW5jdGlvbnMgbXVzdCByZXR1cm4gc3RyaW5ncywgZWxlbWVudHMsIG9yIHRleHQgbm9kZXMuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ3xFbGVtZW50fFRleHROb2RlfEFycmF5fEZ1bmN0aW9ufSBtb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yXG4gKi9cblxuLyoqXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgZm9yIGV2ZW50dWFsIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gKlxuICogVGhpcyBhbGxvd3MgYSB3aWRlIHJhbmdlIG9mIGNvbnRlbnQgZGVmaW5pdGlvbiBtZXRob2RzLCBidXQgaGVscHMgcHJvdGVjdFxuICogZnJvbSBmYWxsaW5nIGludG8gdGhlIHRyYXAgb2Ygc2ltcGx5IHdyaXRpbmcgdG8gYGlubmVySFRNTGAsIHdoaWNoIGNvdWxkXG4gKiBiZSBhbiBYU1MgY29uY2Vybi5cbiAqXG4gKiBUaGUgY29udGVudCBmb3IgYW4gZWxlbWVudCBjYW4gYmUgcGFzc2VkIGluIG11bHRpcGxlIHR5cGVzIGFuZFxuICogY29tYmluYXRpb25zLCB3aG9zZSBiZWhhdmlvciBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogICAgICAgICBBbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCB3YXMgcGFzc2VkIGluLCBub3JtYWxpemVkIHRvIGFuIGFycmF5IG9mXG4gKiAgICAgICAgIGVsZW1lbnRzIG9yIHRleHQgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpIHtcblxuICAgIC8vIEZpcnN0LCBpbnZva2UgY29udGVudCBpZiBpdCBpcyBhIGZ1bmN0aW9uLiBJZiBpdCBwcm9kdWNlcyBhbiBhcnJheSxcbiAgICAvLyB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgbm9ybWFsaXphdGlvbi5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IHVwLCBub3JtYWxpemUgdG8gYW4gYXJyYXksIHNvIG9uZSBvciBtYW55IGl0ZW1zIGNhbiBiZSBub3JtYWxpemVkLFxuICAgIC8vIGZpbHRlcmVkLCBhbmQgcmV0dXJuZWQuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGNvbnRlbnQpID8gY29udGVudCA6IFtjb250ZW50XSkubWFwKHZhbHVlID0+IHtcblxuICAgICAgICAvLyBGaXJzdCwgaW52b2tlIHZhbHVlIGlmIGl0IGlzIGEgZnVuY3Rpb24gdG8gcHJvZHVjZSBhIG5ldyB2YWx1ZSxcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBiZSBzdWJzZXF1ZW50bHkgbm9ybWFsaXplZCB0byBhIE5vZGUgb2Ygc29tZSBraW5kLlxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbCh2YWx1ZSkgfHwgaXNUZXh0Tm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICgvXFxTLykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIodmFsdWUgPT4gdmFsdWUpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGFwcGVuZHMgY29udGVudCB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgdG8gYXBwZW5kIG5vcm1hbGl6ZWQgY29udGVudCB0by5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpkb21+Q29udGVudERlc2NyaXB0b3J9IGNvbnRlbnRcbiAqICAgICAgICBBIGNvbnRlbnQgZGVzY3JpcHRvciB2YWx1ZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgZWxlbWVudCB3aXRoIGFwcGVuZGVkIG5vcm1hbGl6ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcbiAgICBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpLmZvckVhY2gobm9kZSA9PiBlbC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGluc2VydHMgY29udGVudCBpbnRvIGFuIGVsZW1lbnQ7IHRoaXMgaXMgaWRlbnRpY2FsIHRvXG4gKiBgYXBwZW5kQ29udGVudCgpYCwgZXhjZXB0IGl0IGVtcHRpZXMgdGhlIGVsZW1lbnQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEVsZW1lbnQgdG8gaW5zZXJ0IG5vcm1hbGl6ZWQgY29udGVudCBpbnRvLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggaW5zZXJ0ZWQgbm9ybWFsaXplZCBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChlbCwgY29udGVudCkge1xuICAgIHJldHVybiBhcHBlbmRDb250ZW50KGVtcHR5RWwoZWwpLCBjb250ZW50KTtcbn1cblxuXG4vKipcbiAqIGNsb3Nlc3QgZWxlbWVudCBwb2x5ZmlsbFxuICovXG4oZnVuY3Rpb24oRUxFTUVOVCkge1xuICAgIEVMRU1FTlQubWF0Y2hlcyA9IEVMRU1FTlQubWF0Y2hlcyB8fCBFTEVNRU5ULm1vek1hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVMRU1FTlQub01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICBFTEVNRU5ULmNsb3Nlc3QgPSBFTEVNRU5ULmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH07XG59KEVsZW1lbnQucHJvdG90eXBlKSk7XG5cbi8qKlxuICogRmluZHMgYSBzaW5nbGUgRE9NIGVsZW1lbnQgbWF0Y2hpbmcgYHNlbGVjdG9yYCB3aXRoaW4gdGhlIG9wdGlvbmFsXG4gKiBgY29udGV4dGAgb2YgYW5vdGhlciBET00gZWxlbWVudCAoZGVmYXVsdGluZyB0byBgZG9jdW1lbnRgKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiAgICAgICAgIEEgdmFsaWQgQ1NTIHNlbGVjdG9yLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBgcXVlcnlTZWxlY3RvcmAuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudHxTdHJpbmd9IFtjb250ZXh0PWRvY3VtZW50XVxuICogICAgICAgICBBIERPTSBlbGVtZW50IHdpdGhpbiB3aGljaCB0byBxdWVyeS4gQ2FuIGFsc28gYmUgYSBzZWxlY3RvclxuICogICAgICAgICBzdHJpbmcgaW4gd2hpY2ggY2FzZSB0aGUgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudCB3aWxsIGJlIHVzZWRcbiAqICAgICAgICAgYXMgY29udGV4dC4gSWYgbWlzc2luZyAob3Igbm8gZWxlbWVudCBtYXRjaGVzIHNlbGVjdG9yKSwgZmFsbHNcbiAqICAgICAgICAgYmFjayB0byBgZG9jdW1lbnRgLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgdGhhdCB3YXMgZm91bmQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVRdWVyaWVyKCdxdWVyeVNlbGVjdG9yJyk7XG5cbi8qKlxuICogRmluZHMgYSBhbGwgRE9NIGVsZW1lbnRzIG1hdGNoaW5nIGBzZWxlY3RvcmAgd2l0aGluIHRoZSBvcHRpb25hbFxuICogYGNvbnRleHRgIG9mIGFub3RoZXIgRE9NIGVsZW1lbnQgKGRlZmF1bHRpbmcgdG8gYGRvY3VtZW50YCkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvclxuICogICAgICAgICBBIHZhbGlkIENTUyBzZWxlY3Rvciwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gYHF1ZXJ5U2VsZWN0b3JBbGxgLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR8U3RyaW5nfSBbY29udGV4dD1kb2N1bWVudF1cbiAqICAgICAgICAgQSBET00gZWxlbWVudCB3aXRoaW4gd2hpY2ggdG8gcXVlcnkuIENhbiBhbHNvIGJlIGEgc2VsZWN0b3JcbiAqICAgICAgICAgc3RyaW5nIGluIHdoaWNoIGNhc2UgdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQgd2lsbCBiZSB1c2VkXG4gKiAgICAgICAgIGFzIGNvbnRleHQuIElmIG1pc3NpbmcgKG9yIG5vIGVsZW1lbnQgbWF0Y2hlcyBzZWxlY3RvciksIGZhbGxzXG4gKiAgICAgICAgIGJhY2sgdG8gYGRvY3VtZW50YC5cbiAqXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqICAgICAgICAgQSBlbGVtZW50IGxpc3Qgb2YgZWxlbWVudHMgdGhhdCB3ZXJlIGZvdW5kLiBXaWxsIGJlIGVtcHR5IGlmIG5vbmVcbiAqICAgICAgICAgd2VyZSBmb3VuZC5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCAkJCA9IGNyZWF0ZVF1ZXJpZXIoJ3F1ZXJ5U2VsZWN0b3JBbGwnKTtcbiIsImltcG9ydCB7Q1NTQ2xhc3NOYW1lTWl4aW59IGZyb20gJy4vbWl4aW5zL2Nzc0NsYXNzTmFtZSc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VPZlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZU9wdGlvbnNQdG9wZXJ0eShwcm9wZXJ0eSwgb3B0aW9ucywgaW5zdGFuY2VPZiA9IEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKChvcHRpb25zW3Byb3BlcnR5XSBpbnN0YW5jZW9mIGluc3RhbmNlT2YpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY2FsbC4gUHJvcGVydHkgJyArIHByb3BlcnR5ICsgJyBpcyBub3QgdmFsaWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxzdHJpbmd9ICBjb250ZW50XG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NTZXQgPSBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgYXJyYXkgPSAodHlwZW9mIHByb3BlcnRpZXMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogcHJvcGVydGllcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBjbGFzc1NldC5hZGQoaXRlbSkpO1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgY3NzQ2xhc3Mgb2YgY2xhc3NTZXQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKGNzc0NsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzZWxlY3Rvci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcLlwiLCAnZycpLCAnJCYnICsgVUlDb21wb25lbnQuY2xhc3NQcmVmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBVSUNvbXBvbmVudC5fbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIERvbS4kKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W118bnVsbH1cbiAgICAgKi9cbiAgICAkJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBzZWxlY3RvciA9IFVJQ29tcG9uZW50Ll9ub3JtYWxpemVQcmVmaXgoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gRG9tLiQkKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVUlDb21wb25lbnQsIENTU0NsYXNzTmFtZU1peGluKTtcbiIsIi8qIGNyYzMyLmpzIChDKSAyMDE0LXByZXNlbnQgU2hlZXRKUyAtLSBodHRwOi8vc2hlZXRqcy5jb20gKi9cbi8qIHZpbTogc2V0IHRzPTI6ICovXG4vKmV4cG9ydGVkIENSQzMyICovXG52YXIgQ1JDMzI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Lypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdC8qZXNsaW50LWRpc2FibGUgKi9cblx0aWYodHlwZW9mIERPX05PVF9FWFBPUlRfQ1JDID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmKCdvYmplY3QnID09PSB0eXBlb2YgZXhwb3J0cykge1xuXHRcdFx0ZmFjdG9yeShleHBvcnRzKTtcblx0XHR9IGVsc2UgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IHt9O1xuXHRcdFx0XHRmYWN0b3J5KG1vZHVsZSk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0fVxuXHQvKmVzbGludC1lbmFibGUgKi9cblx0Lypqc2hpbnQgaWdub3JlOmVuZCAqL1xufShmdW5jdGlvbihDUkMzMikge1xuQ1JDMzIudmVyc2lvbiA9ICcxLjIuMCc7XG4vKiBzZWUgcGVyZi9jcmMzMnRhYmxlLmpzICovXG4vKmdsb2JhbCBJbnQzMkFycmF5ICovXG5mdW5jdGlvbiBzaWduZWRfY3JjX3RhYmxlKCkge1xuXHR2YXIgYyA9IDAsIHRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5cblx0Zm9yKHZhciBuID0wOyBuICE9IDI1NjsgKytuKXtcblx0XHRjID0gbjtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHR0YWJsZVtuXSA9IGM7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkodGFibGUpIDogdGFibGU7XG59XG5cbnZhciBUID0gc2lnbmVkX2NyY190YWJsZSgpO1xuZnVuY3Rpb24gY3JjMzJfYnN0cihic3RyLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnN0ci5sZW5ndGggLSAxO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnN0ci5jaGFyQ29kZUF0KGkrKykpJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15ic3RyLmNoYXJDb2RlQXQoaSsrKSkmMHhGRl07XG5cdH1cblx0aWYoaSA9PT0gTCkgQyA9IChDPj4+OCkgXiBUWyhDIF4gYnN0ci5jaGFyQ29kZUF0KGkpKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfYnVmKGJ1Ziwgc2VlZCkge1xuXHRpZihidWYubGVuZ3RoID4gMTAwMDApIHJldHVybiBjcmMzMl9idWZfOChidWYsIHNlZWQpO1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSAzO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHR9XG5cdHdoaWxlKGkgPCBMKzMpIEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdHJldHVybiBDIF4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1Zl84KGJ1Ziwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSA3O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdH1cblx0d2hpbGUoaSA8IEwrNykgQyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfc3RyKHN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTD1zdHIubGVuZ3RoLCBjLCBkOyBpIDwgTDspIHtcblx0XHRjID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcblx0XHRpZihjIDwgMHg4MCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gYykmMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDE5MnwoKGM+PjYpJjMxKSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDEyOHwoYyY2MykpKSYweEZGXTtcblx0XHR9IGVsc2UgaWYoYyA+PSAweEQ4MDAgJiYgYyA8IDB4RTAwMCkge1xuXHRcdFx0YyA9IChjJjEwMjMpKzY0OyBkID0gc3RyLmNoYXJDb2RlQXQoaSsrKSYxMDIzO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDI0MHwoKGM+PjgpJjcpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+MikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoZD4+NikmMTUpfCgoYyYzKTw8NCkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KGQmNjMpKSkmMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgyMjR8KChjPj4xMikmMTUpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+NikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gQyBeIC0xO1xufVxuQ1JDMzIudGFibGUgPSBUO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJzdHIgPSBjcmMzMl9ic3RyO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJ1ZiA9IGNyYzMyX2J1Zjtcbi8vICRGbG93SWdub3JlXG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iLCJcbi8qKlxuKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuKiBAcGFyYW0gaXRlbVxuKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gc291cmNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcyk7XG59IiwiXG5jb25zdCBTdGF0dXNlc0xpc3QgPSB7XG4gICAgSU5JVDogLTEsXG4gICAgV0FJVDogMCxcbiAgICBFWEVDOiAxLFxuICAgIERPTkU6IDIsXG4gICAgRVJST1I6IDMsXG4gICAgREVMRVRFRDogOTksXG59O1xuXG5TdGF0dXNlc0xpc3QuU0VUX1ZJU0lCTEUgPSBbXG4gICAgU3RhdHVzZXNMaXN0LldBSVQsIFN0YXR1c2VzTGlzdC5FWEVDLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ET05FXG5dO1xuXG5TdGF0dXNlc0xpc3QuU0VUX0NPTVBMRVRFID0gW1xuICAgIFN0YXR1c2VzTGlzdC5ET05FLCBTdGF0dXNlc0xpc3QuRVJST1IsIFN0YXR1c2VzTGlzdC5ERUxFVEVEXG5dO1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TdGF0dXNlc0xpc3QuaXMgPSBmdW5jdGlvbiAoc2V0LCBzdGF0dXMpIHtcbiAgICByZXR1cm4gc2V0LmluZGV4T2Yoc3RhdHVzKSA+IC0xO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzZXNMaXN0O1xuIiwiaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcblxuLyoqXG4gKkBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Fic3RyYWN0IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgI21hbmFnZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBpZDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbW1vbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJ9XG4gICAgICovXG4gICAgaW5pdGlhdG9yTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJvZ3Jlc3MgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0ZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRpdGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXR1cyA9IFN0YXR1c2VzLklOSVQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IG51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgbWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gcGFyc2VJbnQoaWQpO1xuICAgICAgICB0aGlzLiNtYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgI3JlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuI2VsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuI2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnd3JhcHBlcicsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgJ2RhdGEtdGFzay1pZCc6IHRoaXMuaWRcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBlbFRhc2sgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiB0aGlzLl9idWlsZENzc0NsYXNzKCl9KTtcbiAgICAgICAgdGhpcy5fcmVuZGVyQ2hpbGQoZWxUYXNrKTtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZChlbFRhc2spO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGNoaWxkIGluc3RhbmNlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVuZGVyQ2hpbGQoZWxXcmFwcGVyKSB7XG5cbiAgICB9XG5cbiAgICAvLyBub2luc3BlY3Rpb24gSlNNZXRob2RDYW5CZVN0YXRpY1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfYnVpbGRDc3NDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIFsndGFzay1pdGVtJ11cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2Nzc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2Nzc0xpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jc3NMaXN0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nzc0xpc3QgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBzdGF0dXNlc0xpc3RLZXkgaW4gU3RhdHVzZXNMaXN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFN0YXR1c2VzTGlzdFtzdGF0dXNlc0xpc3RLZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nzc0xpc3RbU3RhdHVzZXNMaXN0W3N0YXR1c2VzTGlzdEtleV1dID0gVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKCdzdGF0dXMtJyArIHN0YXR1c2VzTGlzdEtleS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NMaXN0O1xuICAgIH07XG5cblxuICAgIGNzc0NsYXNzU3dpdGNoKCkge1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgbGV0IGNzc0NsYXNzLCBzZWFyY2hDbGFzcztcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubWFuYWdlci5vcHRpb25zLnRoZW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgbGV0IHRoZW1lID0gdGhpcy5tYW5hZ2VyLm9wdGlvbnMudGhlbWVbdGhpcy5zdGF0dXNdIHx8IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCd0aGVtZS0nICsgdGhlbWUpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgndGhlbWUnKTtcbiAgICAgICAgICAgICAgICBEb20uc3dpdGNoQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MsIHNlYXJjaENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjc3NDbGFzcyA9IFRhc2tBYnN0cmFjdC4jY3NzTGlzdCgpW3RoaXMuc3RhdHVzXTtcbiAgICAgICAgc2VhcmNoQ2xhc3MgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCdzdGF0dXMnKTtcbiAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50c1xuICAgICAqL1xuICAgIHJlZnJlc2gocmVzcG9uc2UsIGVsZW1lbnRzID0gbnVsbCkge1xuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRWxlbWVudHMoZWxlbWVudHMsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFByb2dyZXNzVG90YWwocHJvcGVydHkgPSAncHJvZ3Jlc3MnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlLnJlZHVjZSgoYSwgYykgPT4gYSArIGMpIC8gdmFsdWUubGVuZ3RoLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gb2xkVGFza1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVmcmVzaEVsZW1lbnRzKGVsZW1lbnRzLCBvbGRUYXNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNQYXJ0cyA9IHRoaXMub3B0aW9ucy5wYXJ0cztcblxuICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50cykuZm9yRWFjaCgoZWxlbWVudE5hbWUpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9wdGlvbnNQYXJ0c1tlbGVtZW50TmFtZV0sXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlZnJlc2hCYXNpY1Byb3BlcnR5JztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgW20sIHBdID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gbSArIHBbMF0udG9VcHBlckNhc2UoKSArIHAuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT09IFwidW5kZWZpbmVkXCIpID8gdGhpc1twcm9wZXJ0eV0gOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9ICh0eXBlb2Ygb2xkVGFza1twcm9wZXJ0eV0gIT09IFwidW5kZWZpbmVkXCIpID8gb2xkVGFza1twcm9wZXJ0eV0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSAnXycgKyBtZXRob2Q7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW21ldGhvZF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdLmNhbGwodGhpcywgZWxlbWVudHNbZWxlbWVudE5hbWVdLCB2YWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIG5vaW5zcGVjdGlvbiBKU01ldGhvZENhbkJlU3RhdGljXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9yZWZyZXNoQmFzaWNQcm9wZXJ0eShlbGVtZW50LCB2YWx1ZSwgcHJvcGVydHkpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFRhc2tBYnN0cmFjdC5nZXRDbGFzc05hbWUoJ2xpc3QtJyArIHByb3BlcnR5KTtcbiAgICAgICAgICAgIGxldCBlbExpc3QgPSBEb20uJCgndWwuJyArIGNsYXNzTmFtZSwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmIChlbExpc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbExpc3QgPSB0aGlzLmNyZWF0ZUVsKCd1bCcsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGVsTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxMaSA9IERvbS4kKGBsaTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWAsIGVsTGlzdCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsTGkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxMaXN0LmFwcGVuZChEb20uY3JlYXRlRWwoJ2xpJywge30sIHt9LCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxMaS5pbm5lclRleHQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsTGkuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hbmFnZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0RlZmF1bHRzLnRhc2tPcHRpb25zfHt9fVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm9wdGlvbnMudGFza09wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBzdGF0dXNUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLm9wdGlvbnMuc3RhdHVzVGV4dFt0aGlzLnN0YXR1c10gfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNUZXh0ICsgXCIgXCIgKyB0aGlzLmdldFRpdGxlKCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQge3N0ciBhcyBDUkMzMn0gZnJvbSAnY3JjLTMyJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCAqIGFzIE9iaiBmcm9tICcuL3V0aWxzL29iaic7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gXCIuL3N0YXR1c2VzTGlzdFwiO1xuaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcblxuY29uc3QgRU1QVFlfTUVTU0FHRSA9ICdfX0VNUFRZX18nO1xuXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBkZWxheVRpbWU6IDEwMDAsXG4gICAgcGFyYW1zOiB7fVxufTtcblxuLyoqXG4gKiBSZXNvbHZlIHRhc2sgaW5mb3JtYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb2x2ZXIge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Jlc29sdmVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgI2NhY2hlID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TWFuYWdlcltdfVxuICAgICAqL1xuICAgIHN0YXRpYyAjY29tbW9uTWFuYWdlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgI21hbmFnZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7e319XG4gICAgICovXG4gICAgI29wdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgI251bWJlclJlcXVlc3RzID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIERlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdC5wYXJhbXMgJiYgT2JqLmlzUGxhaW4ob3B0LnBhcmFtcykpIHtcbiAgICAgICAgICAgIG9wdC5wYXJhbXMgPSBPYmplY3QuZW50cmllcyhvcHQucGFyYW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN0YXJ0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25FbmRcbiAgICAgKi9cbiAgICByZXNvbHZlKG9uU3RhcnQsIG9uRW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZXJzID0gdGhpcy4jZ2V0TWFuYWdlcnMoKTtcblxuICAgICAgICAgICAgdGhpcy4jbnVtYmVyUmVxdWVzdHMgPSAwO1xuXG4gICAgICAgICAgICBtYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBvblN0YXJ0KG1hbmFnZXIpKTtcbiAgICAgICAgICAgIHRoaXMuI3JlcXVlc3QoMCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICE9PSBFTVBUWV9NRVNTQUdFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMuI251bWJlclJlcXVlc3RzO1xuICAgICAgICAgICAgICAgIG1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG9uRW5kKG1hbmFnZXIsIG51bWJlcikpO1xuICAgICAgICAgICAgICAgIHRoaXMuI251bWJlclJlcXVlc3RzID0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICNyZXF1ZXN0KHRpbWVPdXQgPSB0aGlzLm9wdGlvbnMuZGVsYXlUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjcmVhdGVSZXF1ZXN0KHRpbWVPdXQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgIEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30gLSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9JyBgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChyYXcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmF3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZFRhc2tzKGl0ZW0uaWQpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5tYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVyLiN1cGRhdGVDb21tb25NYW5hZ2VycyhyYXcsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVxdWVzdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gcmVzb2x2ZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgI3VwZGF0ZUNvbW1vbk1hbmFnZXJzKHJlc3BvbnNlLCByZXNvbHZlcikge1xuICAgICAgICBSZXNvbHZlci4jY29tbW9uTWFuYWdlcnMuZm9yRWFjaChtYW5hZ2VyID0+IHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gbWFuYWdlci5maW5kVGFzayhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sgPT09IG51bGwgJiYgU3RhdHVzZXNMaXN0LmlzKFN0YXR1c2VzTGlzdC5TRVRfQ09NUExFVEUsIGl0ZW0uc3RhdHVzKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbW1vbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLmFkZFRhc2tzKFtpdGVtLmlkXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzayA9IG1hbmFnZXIuZmluZFRhc2soaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbml0aWF0b3JNYW5hZ2VyID0gcmVzb2x2ZXIudGFza3MuZmluZCh2YWx1ZSA9PiB2YWx1ZS5pZCA9PT0gaXRlbS5pZCk/Lm1hbmFnZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QgJiYgdGFzay5jb21tb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuX3VwZGF0ZVRhc2sodGFzaywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVPdXRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlIHwgbmV2ZXI+fVxuICAgICAqL1xuICAgICNjcmVhdGVSZXF1ZXN0KHRpbWVPdXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy50YXNrc0lkO1xuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChFTVBUWV9NRVNTQUdFKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHRhc2tzKSwgdGltZU91dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigodGFza3MpID0+IHtcbiAgICAgICAgICAgICsrdGhpcy4jbnVtYmVyUmVxdWVzdHM7XG5cbiAgICAgICAgICAgIGxldCBib2R5ID0gdGFza3MubWFwKChpdGVtKSA9PiBgdFtdPSR7aXRlbX1gKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB0aGlzLm9wdGlvbnMucGFyYW1zO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IGJvZHkuY29uY2F0KHBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh0aGlzLm9wdGlvbnMudXJsLCBleHRlbmQoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBlbmNvZGVVUkkoYm9keS5qb2luKCcmJykpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgIGdldCB0YXNrcygpIHtcbiAgICAgICAgbGV0IHRhc2tzID0gW107XG4gICAgICAgIHRoaXMuI21hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgIG1hbmFnZXIuZ2V0VGFza3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tbW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TnVtYmVyW119XG4gICAgICovXG4gICAgZ2V0IHRhc2tzSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLm1hcCgodGFzaykgPT4gdGFzay5pZCkuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSA9PT0gaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdHxib29sZWFufVxuICAgICAqL1xuICAgIGZpbmRUYXNrcyhpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbnVtYmVyUmVxdWVzdHMgPiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgI2dldE1hbmFnZXJzKGNvbW1vbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjb21tb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXJzLmZpbHRlcihmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXIub3B0aW9ucy5jb21tb24gPT09IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXJcbiAgICAgKiBAcmV0dXJuIHtSZXNvbHZlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmFjdG9yeShtYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBvcHRpb25zID0gbWFuYWdlci5vcHRpb25zLnJlc29sdmVyLFxuICAgICAgICAgICAgaGFzaCA9IENSQzMyKG9wdGlvbnMudXJsKSxcbiAgICAgICAgICAgIGNhY2hlID0gUmVzb2x2ZXIuI2NhY2hlLFxuICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMgPSBSZXNvbHZlci4jY29tbW9uTWFuYWdlcnM7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSBjYWNoZVtoYXNoXSA9IChjYWNoZVtoYXNoXSBpbnN0YW5jZW9mIFJlc29sdmVyKSA/IGNhY2hlW2hhc2hdIDogbmV3IFJlc29sdmVyKG9wdGlvbnMpLFxuICAgICAgICAgICAgbWFuYWdlcnMgPSByZXNvbHZlci4jZ2V0TWFuYWdlcnMoKTtcblxuICAgICAgICBpZiAobWFuYWdlcnMuaW5kZXhPZihtYW5hZ2VyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIG1hbmFnZXJzLnB1c2gobWFuYWdlcik7XG5cbiAgICAgICAgICAgIGlmIChtYW5hZ2VyLm9wdGlvbnMuY29tbW9uKSB7XG4gICAgICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFuYWdlci5vd25lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNYW5hZ2VyLkV2ZW50cy5kZXN0cm95LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBtYW5hZ2Vycy5pbmRleE9mKGV2ZW50Lm1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbk1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuZ2V0VGFza3MoKS5maWx0ZXIodmFsdWUgPT4gdmFsdWUuaW5pdGlhdG9yTWFuYWdlciA9PT0gbWFuYWdlcnNbaW5kZXhdKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4ID0gY29tbW9uTWFuYWdlcnMuZmluZEluZGV4KHZhbHVlID0+IHZhbHVlID09PSBldmVudC5tYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb21tb25NYW5hZ2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmVyO1xuICAgIH1cblxufSIsImltcG9ydCB7ZWFjaH0gZnJvbSAnLi91dGlscy9vYmonO1xuLyoqXG4gKlxuICovXG4gY29uc3QgRXZlbnQgPSB7XG4gICAgcmVhZHk6ICdxbWM6bWFuYWdlcjpyZWFkeScsXG4gICAgZGVzdHJveTogJ3FtYzptYW5hZ2VyOmRlc3Ryb3knLFxuICAgIHN0YXR1c0NoYW5nZTogJ3FtYzptYW5hZ2VyOnN0YXR1c0NoYW5nZScsXG4gICAgdGFza1JlbW92ZWQ6ICdxbWM6bWFuYWdlcjp0YXNrUmVtb3ZlZCcsXG4gICAgdGFza0VsZW1lbnRSZW1vdmVkOiAncW1jOm1hbmFnZXI6dGFza0VsZW1lbnRSZW1vdmVkJyxcbiAgICBuZXdUYXNrOiAncW1jOm1hbmFnZXI6bmV3VGFzaycsXG4gICAgZmV0Y2hTdGFydDogJ3FtYzpyZXNvbHZlcjpzdGFydCcsXG4gICAgZmV0Y2hFbmQ6ICdxbWM6cmVzb2x2ZXI6ZW5kJyxcbn07XG5cbkV2ZW50LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBldmVudHMgPSBbXTtcbiAgZWFjaCh0aGlzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgfSk7XG4gICAgcmV0dXJuIGV2ZW50cy5qb2luKCcgJyk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50OyIsIi8qKlxuICogTWFuYWdlciBFdmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudCB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgICNtYW5hZ2VyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCB0eXBlLCBwcm9wcykge1xuICAgICAgICBzdXBlcih0eXBlLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuI21hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hbmFnZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXI7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQGZpbGUgZ3VpZC5qc1xuICogQG1vZHVsZSBndWlkXG4gKi9cblxuLy8gRGVmYXVsdCB2YWx1ZSBmb3IgR1VJRHMuIFRoaXMgYWxsb3dzIHVzIHRvIHJlc2V0IHRoZSBHVUlEIGNvdW50ZXIgaW4gdGVzdHMuXG4vL1xuLy8gVGhlIGluaXRpYWwgR1VJRCBpcyAzIGJlY2F1c2Ugc29tZSB1c2VycyBoYXZlIGNvbWUgdG8gcmVseSBvbiB0aGUgZmlyc3Rcbi8vIGRlZmF1bHQgcGxheWVyIElEIGVuZGluZyB1cCBhcyBgdmpzX3ZpZGVvXzNgLlxuLy9cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpZGVvanMvdmlkZW8uanMvcHVsbC82MjE2XG5jb25zdCBfaW5pdGlhbEd1aWQgPSAzO1xuXG4vKipcbiAqIFVuaXF1ZSBJRCBmb3IgYW4gZWxlbWVudCBvciBmdW5jdGlvblxuICpcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbmxldCBfZ3VpZCA9IF9pbml0aWFsR3VpZDtcblxuLyoqXG4gKiBHZXQgYSB1bmlxdWUgYXV0by1pbmNyZW1lbnRpbmcgSUQgYnkgbnVtYmVyIHRoYXQgaGFzIG5vdCBiZWVuIHJldHVybmVkIGJlZm9yZS5cbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiAgICAgICAgIEEgbmV3IHVuaXF1ZSBJRC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5ld0dVSUQoKSB7XG4gIHJldHVybiBfZ3VpZCsrO1xufVxuXG4vKipcbiAqIFJlc2V0IHRoZSB1bmlxdWUgYXV0by1pbmNyZW1lbnRpbmcgSUQgZm9yIHRlc3Rpbmcgb25seS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R3VpZEluVGVzdHNPbmx5KCkge1xuICBfZ3VpZCA9IF9pbml0aWFsR3VpZDtcbn1cbiIsIi8qKlxuICogQGZpbGUgZG9tLWRhdGEuanNcbiAqIEBtb2R1bGUgZG9tLWRhdGFcbiAqL1xuXG5cbmltcG9ydCAqIGFzIEd1aWQgZnJvbSAnLi9ndWlkLmpzJztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbmxldCBGYWtlV2Vha01hcDtcblxuaWYgKCF3aW5kb3cuV2Vha01hcCkge1xuICBGYWtlV2Vha01hcCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudmRhdGEgPSAndmRhdGEnICsgTWF0aC5mbG9vcih3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIHx8IERhdGUubm93KCkpO1xuICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfVxuXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXSB8fCBHdWlkLm5ld0dVSUQoKTtcblxuICAgICAgaWYgKCFrZXlbdGhpcy52ZGF0YV0pIHtcbiAgICAgICAga2V5W3RoaXMudmRhdGFdID0gYWNjZXNzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGFbYWNjZXNzXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCBhY2Nlc3MgPSBrZXlbdGhpcy52ZGF0YV07XG5cbiAgICAgIC8vIHdlIGhhdmUgZGF0YSwgcmV0dXJuIGl0XG4gICAgICBpZiAoYWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbYWNjZXNzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBoYXMoa2V5KSB7XG4gICAgICBjb25zdCBhY2Nlc3MgPSBrZXlbdGhpcy52ZGF0YV07XG5cbiAgICAgIHJldHVybiBhY2Nlc3MgaW4gdGhpcy5kYXRhO1xuICAgIH1cblxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXTtcblxuICAgICAgaWYgKGFjY2Vzcykge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2FjY2Vzc107XG4gICAgICAgIGRlbGV0ZSBrZXlbdGhpcy52ZGF0YV07XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEVsZW1lbnQgRGF0YSBTdG9yZS5cbiAqXG4gKiBBbGxvd3MgZm9yIGJpbmRpbmcgZGF0YSB0byBhbiBlbGVtZW50IHdpdGhvdXQgcHV0dGluZyBpdCBkaXJlY3RseSBvbiB0aGVcbiAqIGVsZW1lbnQuIEV4LiBFdmVudCBsaXN0ZW5lcnMgYXJlIHN0b3JlZCBoZXJlLlxuICogKGFsc28gZnJvbSBqc25pbmphLmNvbSwgc2xpZ2h0bHkgbW9kaWZpZWQgYW5kIHVwZGF0ZWQgZm9yIGNsb3N1cmUgY29tcGlsZXIpXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5XZWFrTWFwID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBGYWtlV2Vha01hcCgpO1xuIiwiaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGxhYmVsID0gJyc7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG5cbiAgICAgKi9cbiAgICBjbGFzc05hbWUgPSBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzaXplID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge1Byb2dyZXNzQmFyW119XG4gICAgICovXG4gICAgI2JhcnMgPSBbXTtcblxuICAgIGJhck9wdGlvbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0VsZW1lbnR8SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgI2xhYmVsRWwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR8SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgI2VsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzU2hvd0dyYWRpZW50ID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgJGNsYXNzUHJlZml4ID0gbnVsbDtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGV4dGVuZCh0aGlzLCAuLi5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbDtcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdzaXplLScgKyB0aGlzLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaG93R3JhZGllbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCduby1ncmFkaWVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIHt9LFxuICAgICAgICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzLWl0ZW1zJyl9KVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiNlbCA9IGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR8RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZ2V0TGFiZWxFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jbGFiZWxFbDtcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI2xhYmVsRWwgPSBlbCA9IERvbS5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtbGFiZWwnKX0sIHt9KVxuICAgICAgICB0aGlzLiNlbC5hcHBlbmQoZWwpO1xuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXRQcm9ncmVzcyh2YWx1ZSkge1xuXG4gICAgICAgIGNvbnN0IGJhcnMgPSB0aGlzLiNiYXJzLFxuICAgICAgICAgICAgZWwgPSB0aGlzLiNlbCxcbiAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcblxuICAgICAgICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSA/IFt2YWx1ZV0gOiB2YWx1ZTtcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChiYXJzW2luZGV4XSBpbnN0YW5jZW9mIFByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICAgICAgYmFyc1tpbmRleF0ucHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmFyc1tpbmRleF0gPSBuZXcgUHJvZ3Jlc3NCYXIodGhpcy5iYXJPcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy4nICsgUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1pdGVtcycpKS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgIERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzLWl0ZW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogKDEwMCAvIGxlbmd0aCkudG9GaXhlZCgzKSArICclJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIH0sIHt9LCBiYXJzW2luZGV4XS5yZW5kZXIoKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbGFzc1Rob0NoZWNrID0gUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdtb3JlLXRoYW4tdGhyZWUnKTtcbiAgICAgICAgaWYgKERvbS5oYXNDbGFzcyhlbCwgY2xhc3NUaG9DaGVjaykgPT09IGZhbHNlICYmIHZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgY2xhc3NUaG9DaGVjayk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsYWJlbFxuICAgICAqL1xuICAgIHNldExhYmVsKGxhYmVsKSB7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy4jZ2V0TGFiZWxFbCgpLmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW58SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc05hbWUgPSAncHJvZ3Jlc3MtYmFyJztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICAjcHJvZ3Jlc3MgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ3xib29sZWFufVxuICAgICAqL1xuICAgIGxhYmVsVGV4dCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW4gPSAwO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heCA9IDEwMDtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLCAuLi5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5fFN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWxUZXh0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29udGVudC5wdXNoKERvbS5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6ICdzci1vbmx5JywgY3NzOiB7d2lkdGg6IDB9fSwge30sIHRoaXMubGFiZWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmxhYmVsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNlbGVtZW50ID0gZWwgPSBEb20uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKHRoaXMuY2xhc3NOYW1lKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICByb2xlOiBcInByb2dyZXNzYmFyXCIsXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHRoaXMucHJvZ3Jlc3MsXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1pbic6IHRoaXMubWluLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLm1heFxuICAgICAgICB9LCBjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSAodGhpcy5sYWJlbFRleHQpID8gdGhpcy5sYWJlbFRleHQgOiAnJztcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvZ3Jlc3N9JSAke2xhYmVsfWBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHByb2dyZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICovXG4gICAgc2V0IHByb2dyZXNzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuI3Byb2dyZXNzID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgdmFsdWUpO1xuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IHRoaXMubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dmFsdWV9JWBcblxuICAgIH1cbn0iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvblQgZXh0ZW5kcyBVSUNvbXBvbmVudHtcblxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgKi9cbiAgICAjaWNvbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAqL1xuICAgICNzaXplID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSBpY29uXG4gICAgICogQHBhcmFtIHtib29sZWFufHN0cmluZ30gc2l6ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGljb24gPSBmYWxzZSwgc2l6ZSA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2ljb24gPSBpY29uO1xuICAgICAgICB0aGlzLiNzaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogdGhpcy4jYnVpbGRDbGFzc05hbWUoKX0sIHt9LFxuICAgICAgICAgICAgRG9tLmNyZWF0ZUVsKCdzcGFuJywge30sIHt9LCBbJ3MxJywgJ3MyJywgJ3MzJ10ubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRG9tLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogY2xhc3NOYW1lfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgI2J1aWxkQ2xhc3NOYW1lKCkge1xuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnaWNvbi10JyxcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLiNpY29uKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy4jaWNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuI3NpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdzaXplLScrdGhpcy4jc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0IGljb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuI2ljb247XG4gICAgICAgICAgICBpZiAoaWNvbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuI2VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCBpY29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jaWNvbiA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0IHNpemUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSAgPSBJY29uVC5nZXRDbGFzc05hbWUoJ3NpemUtJyt2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy4jc2l6ZTtcbiAgICAgICAgICAgIGlmIChzaXplICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsIHNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaXplID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBjb2xvcih2YWx1ZSkge1xuICAgICAgICBEb20uJCQoJ3NwYW5bY2xhc3NePXNdJywgdGhpcy4jZWxlbWVudCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5cbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCBJY29uVCBmcm9tICcuL2ljb250JztcblxuLyoqXG4gKlxuICogQHR5cGUge3tpY29uSG92ZXJOYW1lOiBudWxsLCBoYW5kbGVyOiBudWxsLCBzaXplOiBudWxsLCBkYXRhOiB7fSwgaGlkZGVuTGFiZWw6IHN0cmluZywgaWNvbk5hbWU6IG51bGwsIGFuaW1hdGVkQ2xpY2s6IGJvb2xlYW4sIGhhbmRsZXJUaW1vdXREZWxheTogbnVtYmVyLCBpY29uU2l6ZTogbnVsbCwgZGlzYWJsZWQ6IGJvb2xlYW4sIGxhYmVsOiBib29sZWFuLCB0YWdOYW1lOiBzdHJpbmd9fVxuICovXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRhZ05hbWU6ICdidXR0b24nLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGhhbmRsZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGhhbmRsZXJUaW1vdXREZWxheTogNTAwLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICBsYWJlbDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIGhpZGRlbkxhYmVsOiAnJyxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGRpc2FibGVkOiBmYWxzZSxcblxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHNpemU6IG51bGwsXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIGljb25OYW1lOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIGljb25Ib3Zlck5hbWU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgaWNvblNpemU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBhbmltYXRlZENsaWNrOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBkYXRhOiB7fVxuXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgI29wdGlvbnMgPSBEZWZhdWx0cztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtJY29uVH1cbiAgICAgKi9cbiAgICAjaWNvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIERlZmF1bHRzLCBvcHRpb25zKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBjb250ZW50ID0gW107XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLmljb247XG4gICAgICAgICAgICBjb250ZW50LnB1c2goaS5yZW5kZXIoKSk7XG4gICAgICAgICAgICBpLmljb24gPSBvcHRpb25zLmljb25OYW1lO1xuICAgICAgICAgICAgaS5zaXplID0gb3B0aW9ucy5pY29uU2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmxhYmVsKSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2goRG9tLmNyZWF0ZUVsKCdwJywge30sIHt9LCBvcHRpb25zLmxhYmVsKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oaWRkZW5MYWJlbCkge1xuICAgICAgICAgICAgY29udGVudC5wdXNoKHRoaXMuY3JlYXRlRWwoJ3AnLCB7Y2xhc3NOYW1lOiAnYnV0dG9uLWhpZGRlbid9LCB7fSwgb3B0aW9ucy5oaWRkZW5MYWJlbCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZWRDbGljaykge1xuICAgICAgICAgICAgY29uc3QgZHJvcCA9IERvbS5jcmVhdGVFbCgncCcsIHtjbGFzc05hbWU6ICdkcm9wJ30pO1xuICAgICAgICAgICAgZHJvcC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKHRoaXMsICdhbmltYXRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChkcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsID0gdGhpcy4jZWxlbWVudCA9IHRoaXMuY3JlYXRlRWwob3B0aW9ucy50YWdOYW1lLCB7Y2xhc3NOYW1lOiBCdXR0b24uI2J1aWxkQ2xhc3NOYW1lKG9wdGlvbnMpfSwge30sIGNvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBvcHRpb25zLmRpc2FibGVkO1xuICAgICAgICB0aGlzLiNhZGRIYW5kbGVycyhlbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIGVsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljICNidWlsZENsYXNzTmFtZShvcHRpb25zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbJ2J1dHRvbiddO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdzaXplLScgKyBvcHRpb25zLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGlkZGVuTGFiZWwpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdoYXMtaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodmFsdWUgIT09IG9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNlbGVtZW50LmRpc2FibGVkID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERvbS50b2dnbGVDbGFzcyh0aGlzLiNlbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0RlZmF1bHRzfVxuICAgICAqL1xuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jb3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0ljb25UfVxuICAgICAqL1xuICAgIGdldCBpY29uKCkge1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuI2ljb247XG4gICAgICAgIGlmIChpY29uIGluc3RhbmNlb2YgSWNvblQpIHtcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiNpY29uID0gbmV3IEljb25UKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgICNhZGRIYW5kbGVycyhlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGVkQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBCdXR0b24uI2FuaW1hdGVkQ2xpY2soZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5oYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYW5kbGVyVGltb3V0RGVsYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wdGlvbnMuaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KSwgb3B0aW9ucy5oYW5kbGVyVGltb3V0RGVsYXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3B0aW9ucy5oYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbkhvdmVyTmFtZSkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRpc2FibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmljb24uaWNvbiA9IG9wdGlvbnMuaWNvbkhvdmVyTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uaWNvbiA9IG9wdGlvbnMuaWNvbk5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgc3RhdGljICNhbmltYXRlZENsaWNrKGVsZW1lbnQpIHtcblxuICAgICAgICBjb25zdCBkcm9wID0gRG9tLiQoJy5kcm9wJywgZWxlbWVudCk7XG4gICAgICAgIGlmIChkcm9wKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBEb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIHggPSBldmVudC5wYWdlWCAtIHJlY3Qud2lkdGggLyAyIC0gcmVjdC5sZWZ0IC0gd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgeSA9IGV2ZW50LnBhZ2VZIC0gcmVjdC5oZWlnaHQgLyAyIC0gcmVjdC50b3AgLSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgZHJvcC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgIGRyb3Auc3R5bGUubGVmdCA9IHggKyAncHgnO1xuXG4gICAgICAgICAgICBEb20uYWRkQ2xhc3MoZHJvcCwgJ2FuaW1hdGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbkJ1dHRvbi5EZWZhdWx0cyA9IERlZmF1bHRzO1xuXG5cbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBleHRlbmQgZnJvbSBcIi4vdXRpbHMvZXh0ZW5kXCI7XG5cblxuLyoqXG4gKlxuICogQHR5cGUge3tzZWxlY3RJY29uOiBudWxsLCBzY2FsZWQ6IGJvb2xlYW4sIGFycmFuZ2U6IGJvb2xlYW4sIHNlbGVjdGFibGU6IGJvb2xlYW59fVxuICovXG5jb25zdCBEZWZhdWx0cyA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCdXR0b24uRGVmYXVsdHNbXX1cbiAgICAgKi9cbiAgICBidXR0b25zOiBbXSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGFycmFuZ2U6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2NhbGVkOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBzZWxlY3RJY29uOiBudWxsXG5cbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uc0dyb3VwIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbltdfVxuICAgICAqL1xuICAgIGJ1dHRvbnMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0RlZmF1bHRzfVxuICAgICAqL1xuICAgICNvcHRpb25zID0gRGVmYXVsdHM7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBVSUNvbXBvbmVudC5yZW1vdmVPcHRpb25zUHRvcGVydHkoJ2J1dHRvbnMnLCBvcHRpb25zLCBBcnJheSk7XG4gICAgICAgIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIERlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5idXR0b25zID0gYnV0dG9ucy5tYXAoKGNvbmZpZykgPT4gbmV3IEJ1dHRvbihjb25maWcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudDtcblxuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNlbGVtZW50ID0gZWwgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBCdXR0b25zR3JvdXAuI2J1aWxkQ2xhc3NOYW1lKHRoaXMub3B0aW9ucyl9LCB7fSxcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5tYXAoKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBidG4ucmVuZGVyKClcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuI2JpbmRTZWxlY3RFdmVudHMoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyAjYnVpbGRDbGFzc05hbWUob3B0aW9ucykge1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBbJ2J1dHRvbi1ncm91cCddO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmFycmFuZ2UpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdhcnJhbmdlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zY2FsZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdzY2FsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBhcnJhbmdlKHZhbHVlKSB7XG5cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnYXJyYW5nZScpO1xuXG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsZW1lbnQsXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy4jb3B0aW9ucztcblxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChEb20uaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmFycmFuZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgICNiaW5kU2VsZWN0RXZlbnRzKGVsZW1lbnQpIHtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoICcuJyArIEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ0bi5lbGVtZW50ID09PSBlbGVtZW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kJCgnLmJ1dHRvbi5zZWxlY3RlZCcsIGV2ZW50LnRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBEb20uc2V0QXR0cmlidXRlKGVsLCAnZGF0YS1ncm91cC1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgIEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ3NlbGVjdGVkJykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQkKCcuYnV0dG9uW2RhdGEtZ3JvdXAtc2VsZWN0ZWRdJywgZXZlbnQudGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVBdHRyaWJ1dGUoZWwsICdkYXRhLWdyb3VwLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0J1dHRvbnxudW1iZXJ9IGJ1dHRvblxuICAgICAqL1xuICAgIHNldCBzZWxlY3RlZChidXR0b24pIHtcblxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdzZWxlY3RlZCcpLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBpZiAodHlwZW9mIGJ1dHRvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgYnV0dG9uID0gdGhpcy5idXR0b25zW2J1dHRvbl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUF0dHJpYnV0ZShidG4uZWxlbWVudCwgJ2RhdGEtZ3JvdXAtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoYnRuLmVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIERvbS5hZGRDbGFzcyhidXR0b24uZWxlbWVudCwgY2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0SWNvbikge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pY29uLmljb24gPSBvcHRpb25zLnNlbGVjdEljb247XG4gICAgICAgICAgICAgICAgYnV0dG9uLm9wdGlvbnMuaWNvbk5hbWUgPSBvcHRpb25zLnNlbGVjdEljb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cblxuXG4iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IEljb25UIGZyb20gJy4vaWNvbnQnO1xuaW1wb3J0IEJ1dHRvbnNHcm91cCBmcm9tICcuL2J1dHRvbnNHcm91cCc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJ1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tTdGF0dXMgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudFtdfVxuICAgICAqL1xuICAgICNlbGVtZW50cyA9IFtdO1xuXG4gICAgbWFwID0ge1xuICAgICAgICBpY29uczogW10sXG4gICAgICAgIGFjdGlvbnM6IFtdXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUYXNrQWJzdHJhY3R9XG4gICAgICovXG4gICAgI3Rhc2s7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtJY29uVH1cbiAgICAgKi9cbiAgICAjaWNvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICN0ZXh0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCdXR0b25zR3JvdXB9XG4gICAgICovXG4gICAgI2JHcm91cCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rhc2tBYnN0cmFjdH0gdGFza1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYXBJY29uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodGFzaywgbWFwSWNvbnMsIGFjdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jdGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMubWFwLmljb25zID0gbWFwSWNvbnM7XG4gICAgICAgIHRoaXMubWFwLmFjdGlvbnMgPSBhY3Rpb25zO1xuXG4gICAgICAgIHRoaXMuI2ljb24gPSBuZXcgSWNvblQoJ25vbmUnLCAnYmlnJyk7XG4gICAgICAgIHRoaXMuI3RleHQgPSB0aGlzLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogJ3N0YXR1cy10ZXh0J30pO1xuXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICBleHRlbmQoaXRlbSwge2RhdGE6IHt0YXNrOiB0YXNrfX0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBlbHMgPSB0aGlzLiNlbGVtZW50cztcblxuICAgICAgICBpZiAoZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBlbHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzLnB1c2godGhpcy4jaWNvbi5yZW5kZXIoKSk7XG4gICAgICAgIGVscy5wdXNoKHRoaXMuI3RleHQpO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcC5hY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuI2JHcm91cCA9IG5ldyBCdXR0b25zR3JvdXAoe2J1dHRvbnM6IHRoaXMubWFwLmFjdGlvbnMsIGFycmFuZ2U6IGZhbHNlLCBzY2FsZWQ6IHRydWV9KTtcbiAgICAgICAgICAgIGVscy5wdXNoKHRoaXMuI2JHcm91cC5yZW5kZXIoKSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBlbHM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAgICAgKi9cbiAgICByZWZyZXNoKHN0YXR1cykge1xuICAgICAgICB0aGlzLiN0ZXh0LmlubmVySFRNTCA9IHRoaXMuI3Rhc2suc3RhdHVzVGV4dDtcblxuICAgICAgICB0aGlzLiNpY29uLmljb24gPSB0aGlzLm1hcC5pY29uc1tzdGF0dXNdO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gdGhpcy4jYkdyb3VwO1xuXG4gICAgICAgIGlmIChidXR0b25Hcm91cCkge1xuICAgICAgICAgICAgYnV0dG9uR3JvdXAuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZW5hYmxlZFdpdGggPSBidXR0b24ub3B0aW9ucz8uZW5hYmxlZFdpdGhTdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmFibGVkV2l0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWRXaXRoID0gZW5hYmxlZFdpdGguY2FsbChidXR0b24sIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVuYWJsZWRXaXRoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLm9wdGlvbnMuZW5hYmxlZFdpdGhTdGF0dXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gYnV0dG9uLm9wdGlvbnMuZW5hYmxlZFdpdGhTdGF0dXMuaW5kZXhPZihzdGF0dXMpID09PSAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmFibGVkV2l0aCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZW5hYmxlZFdpdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcbmltcG9ydCBEb21EYXRhIGZyb20gJy4vdXRpbHMvZG9tLWRhdGEnO1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJy4vcHJvZ3Jlc3MnO1xuaW1wb3J0IFN0YXR1c2VzTGlzdCBmcm9tICcuL3N0YXR1c2VzTGlzdCc7XG5pbXBvcnQgVGFza1N0YXR1cyBmcm9tICcuL3Rhc2tTdGF0dXMnO1xuXG5jb25zdCBEZWZhdWx0cyA9IHtcbiAgICBpY29uUGxhY2VtZW50OiAnZGVmYXVsdCcsXG4gICAgcGFydHM6IHtcbiAgICAgICAgc3RhdHVzOiAncmVmcmVzaC5zdGF0dXMnLFxuICAgICAgICB0aXRsZTogJ3RpdGxlJyxcbiAgICAgICAgdGV4dDogJ3RleHQnLFxuICAgICAgICBlcnJvcjogJ2Vycm9ycycsXG4gICAgICAgICdwcm9ncmVzcy13cmFwcGVyJzogJ3JlZnJlc2gucHJvZ3Jlc3MnLFxuICAgIH0sXG4gICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICBzaXplOiAnJyxcbiAgICAgICAgYmFyT3B0aW9uczoge1xuICAgICAgICAgICAgbGFiZWxUZXh0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25zOiBbXVxufTtcblxuY29uc3QgaWNvbk1hcCA9IHt9O1xuaWNvbk1hcFtTdGF0dXNlc0xpc3QuV0FJVF0gPSAnY2xvY2snO1xuaWNvbk1hcFtTdGF0dXNlc0xpc3QuRVhFQ10gPSAncGxheSc7XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5FUlJPUl0gPSAnd2FybmluZyc7XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5ET05FXSA9ICdjaGVja2VkJztcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sgZXh0ZW5kcyBUYXNrQWJzdHJhY3Qge1xuXG5cbiAgICAjZWxlbWVudHMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgX3JlbmRlckNoaWxkKGVsV3JhcHBlcikge1xuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuI2VsZW1lbnRzLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGVsRGV0YWlsID0gZWxXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6ICdkZXRhaWwnfSkpLFxuICAgICAgICAgICAgZWxTdGF0dXNXcmFwcGVyID0gZWxXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6ICdzdGF0dXMtd3JhcHBlcid9KSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5wYXJ0cykuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICAgICAgbGV0IG93bmVyID0gZWxEZXRhaWwsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHBhcnQgPT09ICdwcm9ncmVzcy13cmFwcGVyJykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBQcm9ncmVzcyhvcHRpb25zLnByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3B0aW9uc1sncHJvZ3Jlc3Mtd3JhcHBlciddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJ3N0YXR1cycpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IGVsU3RhdHVzV3JhcHBlcjtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgVGFza1N0YXR1cyh0aGlzLCBpY29uTWFwLCBvcHRpb25zLmFjdGlvbnMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnRzW3BhcnRdID0gb3duZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogcGFydH0sIHt9KSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgdHlwZW9mIGNvbXBvbmVudD8ucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IFtjb250ZW50XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250ZW50LmZvckVhY2goKGNvbnRlbnQpID0+IGVsZW1lbnRzW3BhcnRdLmFwcGVuZChjb250ZW50KSk7XG4gICAgICAgICAgICAgICAgVGFzay4jc2V0Q29tcG9uZW50KGVsZW1lbnRzW3BhcnRdLCBjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVmcmVzaChyZXNwb25zZSkge1xuICAgICAgICBzdXBlci5yZWZyZXNoKHJlc3BvbnNlLCB0aGlzLiNlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9idWlsZENzc0NsYXNzKCkge1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IHN1cGVyLl9idWlsZENzc0NsYXNzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUGxhY2VtZW50ICE9PSBEZWZhdWx0cy5pY29uUGxhY2VtZW50KSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QucHVzaCgndGFzay1pdGVtLScgKyB0aGlzLm9wdGlvbnMuaWNvblBsYWNlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NMaXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fWNvbXBvbmVudFxuICAgICAqL1xuICAgIHN0YXRpYyAjc2V0Q29tcG9uZW50KGVsLCBjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFEb21EYXRhLmhhcyhlbCkpIHtcbiAgICAgICAgICAgIERvbURhdGEuc2V0KGVsLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IERvbURhdGEuZ2V0KGVsKTtcbiAgICAgICAgZGF0YS5jb21wb25ldCA9IGNvbXBvbmVudDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyAjZ2V0Q29tcG9uZW50KGVsKSB7XG4gICAgICAgIGlmIChEb21EYXRhLmhhcyhlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBEb21EYXRhLmdldChlbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEuY29tcG9uZXQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5jb21wb25ldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8TnVtYmVyW119dmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZWZyZXNoUHJvZ3Jlc3MoZWwsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBwcm9ncmVzcyA9IFRhc2suI2dldENvbXBvbmVudChlbCk7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzIGluc3RhbmNlb2YgUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHByb2dyZXNzLnNldExhYmVsKHRoaXMuZ2V0UHJvZ3Jlc3NUb3RhbCgpICsgJyUnKTtcbiAgICAgICAgICAgIHByb2dyZXNzLnNldFByb2dyZXNzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxTdGF0dXNcbiAgICAgKiBAcGFyYW0ge051bWJlcnxOdW1iZXJbXX12YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgIF9yZWZyZXNoU3RhdHVzKGVsU3RhdHVzLCB2YWx1ZSkge1xuICAgICAgICBUYXNrLiNnZXRDb21wb25lbnQoZWxTdGF0dXMpLnJlZnJlc2godmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHRoaXMub3B0aW9ucy5wYXJ0c1sndGl0bGUnXTtcbiAgICAgICAgaWYgKHBhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3BhcnRdID8/ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbn1cblxuVGFzay5EZWZ1YWx0cyA9IERlZmF1bHRzOyIsIjdcblxuLyoqXG4gKiBAcGFyYW0gdGltaW5nXG4gKiBAcGFyYW0gZHJhd1xuICogQHBhcmFtIGR1cmF0aW9uXG4gKiBAcGFyYW0gb25FbmRcbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZSh7dGltaW5nLCBkcmF3LCBkdXJhdGlvbn0sIG9uRW5kKSB7XG5cbiAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBhbmltYXRlKHRpbWUpIHtcbiAgICAgICAgLy8gdGltZUZyYWN0aW9uINC40LfQvNC10L3Rj9C10YLRgdGPINC+0YIgMCDQtNC+IDFcbiAgICAgICAgbGV0IHRpbWVGcmFjdGlvbiA9ICh0aW1lIC0gc3RhcnQpIC8gZHVyYXRpb247XG4gICAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB0aW1lRnJhY3Rpb24gPSAxO1xuXG4gICAgICAgIC8vINCy0YvRh9C40YHQu9C10L3QuNC1INGC0LXQutGD0YnQtdCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPINCw0L3QuNC80LDRhtC40LhcbiAgICAgICAgbGV0IHByb2dyZXNzID0gdGltaW5nKHRpbWVGcmFjdGlvbik7XG5cbiAgICAgICAgZHJhdyhwcm9ncmVzcyk7IC8vINC+0YLRgNC40YHQvtCy0LDRgtGMINC10ZFcblxuICAgICAgICBpZiAodGltZUZyYWN0aW9uIDwgMSkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9uRW5kKSB7XG4gICAgICAgICAgICAgICAgb25FbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG59XG5cblxuY29uc3QgdGltaW5ncyA9IHtcbiAgICBsaW5lYXIodGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aW1lRnJhY3Rpb247XG4gICAgfSxcbiAgICBxdWFkKHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGltZUZyYWN0aW9uLCAyKVxuICAgIH0sXG4gICAgY2lyYyh0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3ModGltZUZyYWN0aW9uKSk7XG4gICAgfSxcbiAgICBiYWNrKHggPSAxLjUsIHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3codGltZUZyYWN0aW9uLCAyKSAqICgoeCArIDEpICogdGltZUZyYWN0aW9uIC0geClcbiAgICB9LFxufTtcblxuXG5jb25zdCBhbmltYXRpb25zRHJhdyA9IHtcbiAgICAnZmFkZU91dCc6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAxIC0gKE1hdGgucm91bmQocHJvZ3Jlc3MgKiAxMDApIC8gMTAwKTtcbiAgICB9LFxuICAgICdmYWRlSW4nOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblxuICAgICAgICBpZiAodGhpcy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gKE1hdGgucm91bmQocHJvZ3Jlc3MgKiAxMDApIC8gMTAwKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gYW5pbWF0aW9uQ29uZmlnXG4gKiBAcmV0dXJuIFByb21pc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbWF0ZUVsKGVsLCBhbmltYXRpb25Db25maWcgPSB7XG4gICAgbmFtZTogJ2ZhZGVPdXQnLFxuICAgIHRpbWluZzogdGltaW5ncy5saW5lYXIsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBkZWxheTogMFxufSkge1xuICAgIGxldCBhbmltYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBhbmltYXRpb25Db25maWcpO1xuXG4gICAgaWYgKHR5cGVvZiBhbmltYXRpb24uZHJhdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhbmltYXRpb24uZHJhdy5iaW5kKGVsKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFuaW1hdGlvbi5uYW1lID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYW5pbWF0aW9uc0RyYXdbYW5pbWF0aW9uLm5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFuaW1hdGlvbi5kcmF3ID0gYW5pbWF0aW9uc0RyYXdbYW5pbWF0aW9uLm5hbWVdLmJpbmQoZWwpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGFuaW1hdGlvbiAnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFuaW1hdGlvbi5kZWxheSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBhbmltYXRpb24uZGVsYXkgPSAwO1xuICAgIH1cblxuICAgIGFuaW1hdGlvbi50aW1pbmcgPSAodHlwZW9mIGFuaW1hdGlvbi50aW1pbmcgPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdGltaW5nc1thbmltYXRpb24udGltaW5nXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgPyB0aW1pbmdzW2FuaW1hdGlvbi50aW1pbmddIDogdGltaW5ncy5saW5lYXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhbmltYXRlKGFuaW1hdGlvbiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShlbClcbiAgICAgICAgfSksIGFuaW1hdGlvbi5kZWxheSk7XG4gICAgfSk7XG5cbn1cblxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn10aW1pbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHBhcmFtIGRlbGF5XG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFkZUluKGVsLCB0aW1pbmcgPSAnbGluZWFyJywgZHVyYXRpb24gPSAxMDAwLCBkZWxheSA9IDApIHtcbiAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCB7XG4gICAgICAgIG5hbWU6ICdmYWRlSW4nLFxuICAgICAgICB0aW1pbmc6IHRpbWluZyxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBlbFxuICogQHBhcmFtIHRpbWluZ1xuICogQHBhcmFtIGR1cmF0aW9uXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWRlT3V0KGVsLCB0aW1pbmcgPSAnbGluZWFyJywgZHVyYXRpb24gPSAxMDAwLCBkZWxheSA9IDApIHtcbiAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCB7XG4gICAgICAgIG5hbWU6ICdGYWRlT3V0JyxcbiAgICAgICAgdGltaW5nOiB0aW1pbmcsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0pO1xufSIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHNMaXN0JztcbmltcG9ydCBTdGF0dXNlcyBmcm9tICcuL3N0YXR1c2VzTGlzdCc7XG5pbXBvcnQgTWFuYWdlckV2ZW50IGZyb20gJy4vbWFuYWdlckV2ZW50JztcbmltcG9ydCBUYXNrQWJzdHJhY3QgZnJvbSBcIi4vdGFza0Fic3RyYWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pY29udCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBCdXR0b25zR3JvdXAgZnJvbSAnLi9idXR0b25zR3JvdXAnO1xuXG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vdXRpbHMvZXh0ZW5kJztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgYW5pbWF0ZUVsLCB7ZmFkZUlufSBmcm9tICcuL3V0aWxzL2FuaW1hdGUnO1xuXG5cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIGNvbW1vbjogZmFsc2UsXG4gICAgdGl0bGU6ICc8aDM+QmFja2dyb3VuZHMgdGFza3M8L2gzPicsXG4gICAgdGhlbWU6IHsnLTEnOiBcImRlZmF1bHRcIn0sXG4gICAgcmVuZGVyT25FbXB0eTogdHJ1ZSxcbiAgICB0YXNrQ2xhc3M6IFRhc2ssXG4gICAgZW1wdHlUZXh0OiAnVGFza3Mgbm90IHByb3ZpZGVkIHlldCcsXG4gICAgdGFza09wdGlvbnM6IHt9LFxuICAgIHRhc2tzOiBbXSxcbiAgICBzdGF0dXNUZXh0OiB7fSxcbiAgICBoaWRlQW5pbWF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdmYWRlT3V0JyxcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIHRpbWluZzogJ2xpbmVhcicsXG4gICAgICAgIGRlbGF5OiAwXG4gICAgfSxcbiAgICBzaG93QW5pbWF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdmYWRlSW4nLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgdGltaW5nOiAnbGluZWFyJyxcbiAgICAgICAgZGVsYXk6IDBcbiAgICB9LFxuICAgIHRhc2tzQW5pbWF0aW9uOiB7XG4gICAgICAgIGhpZGU6IHt9LFxuICAgICAgICBzaG93OiB7fVxuICAgIH0sXG4gICAgcmVzb2x2ZXI6IHtcbiAgICAgICAgdXJsOiAncXVldWUtcmVhZGVyJ1xuICAgIH1cbn07XG5cblxuRGVmYXVsdHMudGFza3NBbmltYXRpb24uaGlkZVtTdGF0dXNlcy5ET05FXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuaGlkZUFuaW1hdGlvbiwge2RlbGF5OiA1MDAwfSk7XG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5oaWRlW1N0YXR1c2VzLkVSUk9SXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuaGlkZUFuaW1hdGlvbiwge2RlbGF5OiAyMDAwMH0pO1xuRGVmYXVsdHMudGFza3NBbmltYXRpb24uc2hvd1tTdGF0dXNlcy5FWEVDXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuc2hvd0FuaW1hdGlvbiwge2R1cmF0aW9uOiA1MDB9KTtcbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLnNob3dbU3RhdHVzZXMuV0FJVF0gPSBleHRlbmQoe30sIERlZmF1bHRzLnNob3dBbmltYXRpb24sIHtkdXJhdGlvbjogNTAwfSk7XG5cbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLmhpZGVbU3RhdHVzZXMuRVJST1JdID0gZmFsc2U7IC8vbm90IHJlbW92ZSBUYXNrIGVsZW1lbnQgZnJvbSBkb21cblxuRGVmYXVsdHMuc3RhdHVzVGV4dFtTdGF0dXNlcy5ET05FXSA9ICdDb21wbGV0ZSc7XG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLkVSUk9SXSA9ICdDb21wbGV0ZSB3aXRoIGVycm9ycyc7XG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLkVYRUNdID0gJ1Byb2Nlc3NpbmcnO1xuRGVmYXVsdHMuc3RhdHVzVGV4dFtTdGF0dXNlcy5XQUlUXSA9ICdBd2FpdGluZyc7XG5cblxuLyoqXG4gKlxuICovXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Jlc29sdmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgI3Jlc29sdmVyID0gbnVsbDtcblxuICAgICNlbGVtZW50cyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgb3duZXI6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlcjogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyVGFza3M6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgZW1wdHlUZXh0OiBudWxsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUYXNrQWJzdHJhY3RbXX1cbiAgICAgKi9cbiAgICAjdGFza3MgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgI29wdGlvbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuI2VsZW1lbnRzLm93bmVyID0gVUlDb21wb25lbnQucmVtb3ZlT3B0aW9uc1B0b3BlcnR5KCdlbGVtZW50Jywgb3B0aW9ucyk7XG4gICAgICAgIGxldCBvcHQgPSBleHRlbmQoe30sIE1hbmFnZXIuRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLiNvcHRpb25zID0gZXh0ZW5kKHt9LCB7XG4gICAgICAgICAgICB0YXNrT3B0aW9uczogb3B0LnRhc2tDbGFzcy5EZWZ1YWx0c1xuICAgICAgICB9LCBvcHQpO1xuXG4gICAgICAgIHRoaXMuI3Jlc29sdmVyID0gUmVzb2x2ZXIuZmFjdG9yeSh0aGlzKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnRhc2tzICYmIHR5cGVvZiBvcHRpb25zLnRhc2tzLmxlbmd0aCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hZGRUYXNrcyhvcHRpb25zLnRhc2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY2hlY2sgbGF0ZXIgYWRkZWQgdGFza3MsXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VGFza3MoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiN0b2dnbGVFbXB0eVRleHQoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnJlYWR5LCB7YnViYmxlczogdHJ1ZX0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJ1Y3RvciBvZiBtYW5hZ2VyIGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5kZXN0cm95LCB7YnViYmxlczogdHJ1ZX0pO1xuICAgICAgICB0aGlzLiN0YXNrcyA9IFtdO1xuICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtPYmplY3R8bnVsbH0gZGV0YWlsXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0cmlnZ2VyKHR5cGUsIHByb3BzID0ge30sIGRldGFpbCkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGV0YWlsID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHByb3BzLmRldGFpbCA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGV0YWlsKSkge1xuICAgICAgICAgICAgICAgIHByb3BzLmRldGFpbFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3duZXJFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IE1hbmFnZXJFdmVudCh0aGlzLCB0eXBlLCBwcm9wcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoU3RhdHVzZXMuU0VUX1ZJU0lCTEUpO1xuXG4gICAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDAgJiYgdGhpcy5vcHRpb25zLnJlbmRlck9uRW1wdHkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuI2VsZW1lbnRzO1xuXG4gICAgICAgIGlmIChlbGVtZW50cy53cmFwcGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgICAgICBlbGVtZW50cy53cmFwcGVyID0gZWxlbWVudHMub3duZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ3dyYXBwZXInfSkpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudHMud3JhcHBlci5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRpdGxlICYmIHRoaXMub3B0aW9ucy50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiB0aGlzLm9wdGlvbnMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudHMud3JhcHBlclRhc2tzID0gZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ3Rhc2tzJ30pXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmVtcHR5VGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmVtcHR5VGV4dCA9IGVsZW1lbnRzLndyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHMuZW1wdHlUZXh0ID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2VtcHR5LXdyYXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbCgnc3BhbicsIHtjbGFzc05hbWU6ICdlbXB0eS10ZXh0JywgdGV4dENvbnRlbnQ6IG9wdGlvbnMuZW1wdHlUZXh0fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50aGVtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBEb20uc3dpdGNoQ2xhc3MoZWxlbWVudHMud3JhcHBlciwgTWFuYWdlci5nZXRDbGFzc05hbWUoJ3RoZW1lLScgKyBvcHRpb25zLnRoZW1lKSwgTWFuYWdlci5nZXRDbGFzc05hbWUoJ3RoZW1lJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB0YXNrLnJlZnJlc2goKSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICAjdG9nZ2xlRW1wdHlUZXh0KHR5cGUpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLiNlbGVtZW50cy5lbXB0eVRleHQsXG4gICAgICAgICAgICB2aXNpYmxlID0gRG9tLmlzVmlzaWJsZShlbCk7XG5cbiAgICAgICAgaWYgKERvbS5pc0VsKGVsKSkge1xuICAgICAgICAgICAgaWYgKCh2aXNpYmxlICYmIHR5cGUgPT09ICdoaWRlJykgfHwgKHZpc2libGUgPT09IGZhbHNlICYmIHR5cGUgPT09ICdzaG93JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCB0aGlzLm9wdGlvbnNbdHlwZSArICdBbmltYXRpb24nXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICh0eXBlID09PSAnc2hvdycpID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX10YXNrc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzb2x2ZVxuICAgICAqL1xuICAgIGFkZFRhc2tzKHRhc2tzLCByZXNvbHZlID0gdHJ1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXNrcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCB2YWxpZCBjYWxsLiBBcmd1bWVudCB0YXNrcyBpcyBub3QgYXJyYXkgdHlwZSAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3Rhc2tGYWN0b3J5KHRhc2tzKTtcbiAgICAgICAgdGhpcy4jdGFza3MgPSB0aGlzLiN0YXNrcy5jb25jYXQodGFza3MpO1xuXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRoaXMudHJpZ2dlcihFdmVudHMubmV3VGFzaywge2J1YmJsZXM6IHRydWV9LCB7dGFzazogdGFza30pKTtcblxuICAgICAgICB0aGlzLiN0b2dnbGVFbXB0eVRleHQoJ2hpZGUnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlci5yZXNvbHZlKChtYW5hZ2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFuYWdlci5nZXRUYXNrcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnRyaWdnZXIoRXZlbnRzLmZldGNoU3RhcnQsIHtidWJibGVzOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKG1hbmFnZXIsIG51bWJlclJlcXVlc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnRyaWdnZXIoRXZlbnRzLmZldGNoRW5kLCB7YnViYmxlczogdHJ1ZX0sIHtyZXF1ZXN0czogbnVtYmVyUmVxdWVzdHN9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXBkYXRlVGFzayh0YXNrLCByZXNwb25zZSkge1xuXG4gICAgICAgIGlmICh0YXNrLnByb2dyZXNzICE9PSByZXNwb25zZS5wcm9ncmVzcyB8fCB0YXNrLnN0YXR1cyAhPT0gcmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgICAgICB8fCB0YXNrLnRleHQgIT09IHJlc3BvbnNlLnRleHQgfHwgdGFzay50aXRsZSAhPT0gcmVzcG9uc2UudGl0bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzU3RhdHVzQ2hhbmdlID0gdGFzay5zdGF0dXMgIT09IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBvbGREYXRhID0gZXh0ZW5kKHt9LCB0YXNrKTtcbiAgICAgICAgICAgIHRhc2sgPSBleHRlbmQodGFzaywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgdGFzay5yZWZyZXNoKG9sZERhdGEpO1xuXG4gICAgICAgICAgICBpZiAoaXNTdGF0dXNDaGFuZ2UpIHtcblxuICAgICAgICAgICAgICAgIHRhc2suY3NzQ2xhc3NTd2l0Y2goKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuc3RhdHVzQ2hhbmdlLCB7YnViYmxlczogdHJ1ZX0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgICAgICAgICAgICAgb2xkU3RhdHVzOiBvbGREYXRhLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKFN0YXR1c2VzLmlzKFN0YXR1c2VzLlNFVF9WSVNJQkxFLCB0YXNrLnN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suZWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGFzay5lbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyVGFza3NFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbChlbGVtZW50LCB0aGlzLiN0YXNrQW5pbWF0aW9uKHRhc2ssICdzaG93JykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFN0YXR1c2VzLmlzKFN0YXR1c2VzLlNFVF9DT01QTEVURSwgdGFzay5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fG51bWJlcn0gdGFzayBUYXNrIGluc3RhbmNlIG9yIHRhc2sgaWRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIHJlbW92ZVRhc2sodGFzaykge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGFzayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRhc2sgPSB0aGlzLmZpbmRUYXNrKHRhc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRUYXNrcygpLmZpbmRJbmRleCgodCkgPT4gdC5pZCA9PT0gdGFzay5pZCk7XG4gICAgICAgICAgICBpZiAoaWQgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rhc2tzLnNwbGljZShpZCwgMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnRhc2tSZW1vdmVkLCB7YnViYmxlczogdHJ1ZX0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzazogdGFza1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2suZWxlbWVudC5wYXJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNyZW1vdmVFbCh0YXNrLmVsZW1lbnQsIHRoaXMuI3Rhc2tBbmltYXRpb24odGFzaykpLnRoZW4oKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnRhc2tFbGVtZW50UmVtb3ZlZCwge2J1YmJsZXM6IHRydWV9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4jdGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jdG9nZ2xlRW1wdHlUZXh0KCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUYXNrQWJzdHJhY3R9IHRhc2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICAjdGFza0FuaW1hdGlvbih0YXNrLCB0eXBlID0gJ2hpZGUnKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50YXNrc0FuaW1hdGlvblt0eXBlXVt0YXNrLnN0YXR1c10gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnRhc2tzQW5pbWF0aW9uW3R5cGVdW3Rhc2suc3RhdHVzXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zW3R5cGUgKyAnQW5pbWF0aW9uJ107XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyW118bWVudWJhcn0gc3RhdHVzRmlsdGVyXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0W119XG4gICAgICovXG4gICAgZ2V0VGFza3Moc3RhdHVzRmlsdGVyKSB7XG5cbiAgICAgICAgbGV0IHRhc2tzID0gdGhpcy4jdGFza3M7XG5cbiAgICAgICAgaWYgKHN0YXR1c0ZpbHRlcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0dXNGaWx0ZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzRmlsdGVyID0gW3N0YXR1c0ZpbHRlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0ZpbHRlci5pbmRleE9mKHRhc2suc3RhdHVzKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcmV0dXJuIHtUYXNrQWJzdHJhY3R8bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kVGFzayhpZCkge1xuICAgICAgICBjb25zdCB0YXNrID0gdGhpcy5nZXRUYXNrcygpLmZpbmQoKHQpID0+IHQuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVtYmVyW119IHRhc2tzXG4gICAgICovXG4gICAgI3Rhc2tGYWN0b3J5KHRhc2tzKSB7XG4gICAgICAgIGNvbnN0IFRhc2tDbGFzcyA9IHRoaXMub3B0aW9ucy50YXNrQ2xhc3M7XG4gICAgICAgIHRhc2tzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFRhc2tBYnN0cmFjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0gPSBleHRlbmQobmV3IFRhc2tDbGFzcyhudWxsLCB0aGlzKSwgaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5wYXJzZUludChpdGVtKSA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0gPSBuZXcgVGFza0NsYXNzKGl0ZW0sIHRoaXMpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGUgbm90IHZhbGlkIHRhc2sgaXRlbScsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxmYWxzZX1hbmltYXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICNyZW1vdmVFbChlbCwgYW5pbWF0aW9uID0gdGhpcy5vcHRpb25zLmhpZGVBbmltYXRpb24pIHtcblxuICAgICAgICBpZiAoYW5pbWF0aW9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGVFbChlbCwgYW5pbWF0aW9uKS50aGVuKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgb3duZXJFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMub3duZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgd3JhcHBlckVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy53cmFwcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHdyYXBwZXJUYXNrc0VsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy53cmFwcGVyVGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtSZXNvbHZlcn1cbiAgICAgKi9cbiAgICBnZXQgcmVzb2x2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyZXNvbHZlclxuICAgIH1cblxuXG59XG5cblVJQ29tcG9uZW50LmNsYXNzUHJlZml4ID0gJ3FtYy0nO1xuXG5NYW5hZ2VyLlRhc2tBYnN0cmFjdCA9IFRhc2tBYnN0cmFjdDtcbk1hbmFnZXIuQnV0dG9uID0gQnV0dG9uO1xuTWFuYWdlci5CdXR0b25zR3JvdXAgPSBCdXR0b25zR3JvdXA7XG5NYW5hZ2VyLkljb24gPSBJY29uO1xuXG5NYW5hZ2VyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5NYW5hZ2VyLkV2ZW50cyA9IEV2ZW50cztcbk1hbmFnZXIuU3RhdHVzZXMgPSBTdGF0dXNlcztcblxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyIsImltcG9ydCAkIGZyb20gJ2dsb2JhbC9qUXVlcnknO1xuXG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL21hbmFnZXInXG5cbiQuZm4ucXVldWVNYW5hZ2VyID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuXG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuZGF0YSgncXVldWUtbWFuYWdlcicpLFxuICAgICAgICBtZXRob2RzID0ge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtNYW5hZ2VyLkRlZmF1bHRzfSBvcHRpb25zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkd3JhcHBlciA9ICQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd3JhcHBlci5kYXRhKCdxdWV1ZU1hbmFnZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR3cmFwcGVyLmRhdGEoJ3F1ZXVlTWFuYWdlcicsIG5ldyBNYW5hZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgJC5leHRlbmQodHJ1ZSwge2VsZW1lbnQ6ICR3cmFwcGVyLmdldCgwKX0sIE1hbmFnZXIuRGVmYXVsdHMsIG9wdGlvbnMgfHwge30sICR3cmFwcGVyLmRhdGEoJ21hbmFnZXInKSB8fCB7fSkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjcmVhdGVCdXR0b25zOiBmdW5jdGlvbihvcHRpb25zLCAkd3JhcHBlcil7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXIgPSAkd3JhcHBlciB8fCB0aGlzO1xuICAgICAgICAgICAgICAgICR3cmFwcGVyLmFwcGVuZCgkKG5ldyBNYW5hZ2VyLkJ1dHRvbnNHcm91cChvcHRpb25zKS5yZW5kZXIoKSkuZGF0YSgnbWFuYWdlcicsIG1hbmFnZXIpKTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfTtcblxuICAgIGlmIChtYW5hZ2VyIGluc3RhbmNlb2YgTWFuYWdlciAmJiB0eXBlb2YgbWFuYWdlclttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyW21ldGhvZF0uYXBwbHkobWFuYWdlciwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2RzW21ldGhvZF0pIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHNbbWV0aG9kXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdvYmplY3QnIHx8ICFtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQuZXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBxdWV1ZU1hbmFnZXIgJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn07XG5cbiQuZm4ucXVldWVNYW5hZ2VyLk1hbmFnZXIgPSBNYW5hZ2VyO1xuXG4kKCdkb2N1bWVudCcpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucW1jLXF1ZXVlLW1hbmFnZXJbZGF0YS1tYW5hZ2VyXScpLnF1ZXVlTWFuYWdlcigpO1xufSk7XG5cblxuXG4iXSwibmFtZXMiOlsiQ1NTQ2xhc3NOYW1lTWl4aW4iLCJjbGFzc1ByZWZpeCIsImdldENsYXNzTmFtZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiRnVsbHNjcmVlbkFwaSIsInByZWZpeGVkIiwiYXBpTWFwIiwic3BlY0FwaSIsImJyb3dzZXJBcGkiLCJpIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsImtleXMiLCJvYmplY3QiLCJpc09iamVjdCIsImVhY2giLCJmbiIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImlzUGxhaW4iLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjb21wdXRlZFN0eWxlIiwiZWwiLCJwcm9wIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbXB1dGVkU3R5bGVWYWx1ZSIsImdldFByb3BlcnR5VmFsdWUiLCJVU0VSX0FHRU5UIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwid2Via2l0VmVyc2lvbk1hcCIsImV4ZWMiLCJwYXJzZUZsb2F0IiwicG9wIiwidGVzdCIsIm1hdGNoIiwiSVNfQU5EUk9JRCIsIm1ham9yIiwibWlub3IiLCJJU19FREdFIiwiSVNfQ0hST01FIiwicmVzdWx0IiwidmVyc2lvbiIsIklTX1NBRkFSSSIsIlRPVUNIX0VOQUJMRUQiLCJCb29sZWFuIiwiRG9tIiwibWF4VG91Y2hQb2ludHMiLCJEb2N1bWVudFRvdWNoIiwiSVNfSVBBRCIsImlzTm9uQmxhbmtTdHJpbmciLCJzdHIiLCJ0cmltIiwidGhyb3dJZldoaXRlc3BhY2UiLCJpbmRleE9mIiwiRXJyb3IiLCJjbGFzc1JlZ0V4cCIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsImlzUmVhbCIsImlzRWwiLCJub2RlVHlwZSIsImNyZWF0ZVF1ZXJpZXIiLCJtZXRob2QiLCJzZWxlY3RvciIsImNvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiY3JlYXRlRWwiLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsImF0dHJpYnV0ZXMiLCJjb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm9wTmFtZSIsInZhbCIsInNldEF0dHJpYnV0ZSIsInN0eWxlTmFtZSIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJhdHRyTmFtZSIsImFwcGVuZENvbnRlbnQiLCJ0ZXh0IiwiaW5uZXJUZXh0IiwiaGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NUb0NoZWNrIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGRDbGFzcyIsImNsYXNzVG9BZGQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsImNsYXNzVG9SZW1vdmUiLCJyZW1vdmUiLCJzcGxpdCIsImZpbHRlciIsImMiLCJqb2luIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc1RvVG9nZ2xlIiwicHJlZGljYXRlIiwiaGFzIiwiYXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50Tm9kZSIsInJlY3QiLCJrIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwid2lkdGgiLCJpc1RleHROb2RlIiwiaXNWaXNpYmxlIiwib3BhY2l0eSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q2xpZW50UmVjdHMiLCJzd2l0Y2hDbGFzcyIsImNzc0NsYXNzIiwic2VhcmNoQ2xhc3MiLCJjb21wYXJlIiwiZXhpc3QiLCJub3JtYWxpemVDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlIiwiYXBwZW5kQ2hpbGQiLCJFTEVNRU5UIiwibWF0Y2hlcyIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsIiQiLCIkJCIsIlVJQ29tcG9uZW50IiwicmVtb3ZlT3B0aW9uc1B0b3BlcnR5IiwicHJvcGVydHkiLCJvcHRpb25zIiwiaW5zdGFuY2VPZiIsImNsYXNzU2V0IiwiU2V0IiwiYXJyYXkiLCJpdGVtIiwiX25vcm1hbGl6ZVByZWZpeCIsInIiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImFzc2lnbiIsImNyYzMyIiwiY29tbW9uanNIZWxwZXJzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZhY3RvcnkiLCJET19OT1RfRVhQT1JUX0NSQyIsIkNSQzMyIiwic2lnbmVkX2NyY190YWJsZSIsInRhYmxlIiwibiIsIkludDMyQXJyYXkiLCJUIiwiY3JjMzJfYnN0ciIsImJzdHIiLCJzZWVkIiwiQyIsIkwiLCJjaGFyQ29kZUF0IiwiY3JjMzJfYnVmIiwiYnVmIiwiY3JjMzJfYnVmXzgiLCJjcmMzMl9zdHIiLCJkIiwiZXh0ZW5kIiwidGFyZ2V0Iiwic291cmNlcyIsInNvdXJjZSIsInNoaWZ0IiwiU3RhdHVzZXNMaXN0IiwiSU5JVCIsIldBSVQiLCJFWEVDIiwiRE9ORSIsIkVSUk9SIiwiREVMRVRFRCIsIlNFVF9WSVNJQkxFIiwiU0VUX0NPTVBMRVRFIiwiaXMiLCJzZXQiLCJzdGF0dXMiLCJUYXNrQWJzdHJhY3QiLCJpZCIsIm1hbmFnZXIiLCJTdGF0dXNlcyIsInBhcnNlSW50IiwiX3JlbmRlckNoaWxkIiwiZWxXcmFwcGVyIiwiX2J1aWxkQ3NzQ2xhc3MiLCJjc3NDbGFzc1N3aXRjaCIsInRoZW1lIiwicmVmcmVzaCIsInJlc3BvbnNlIiwiZWxlbWVudHMiLCJfcmVmcmVzaEVsZW1lbnRzIiwiZ2V0UHJvZ3Jlc3NUb3RhbCIsImhhc093blByb3BlcnR5IiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwiYSIsIm9sZFRhc2siLCJvcHRpb25zUGFydHMiLCJwYXJ0cyIsImVsZW1lbnROYW1lIiwibSIsInAiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwib2xkVmFsdWUiLCJfcmVmcmVzaEJhc2ljUHJvcGVydHkiLCJlbExpc3QiLCJhcHBlbmQiLCJpbmRleCIsImVsTGkiLCJpbm5lckhUTUwiLCJ0YXNrT3B0aW9ucyIsInN0YXR1c1RleHQiLCJnZXRUaXRsZSIsImVsVGFzayIsIl9jc3NMaXN0Iiwic3RhdHVzZXNMaXN0S2V5IiwidG9Mb3dlckNhc2UiLCJFTVBUWV9NRVNTQUdFIiwiRGVmYXVsdHMiLCJkZWxheVRpbWUiLCJwYXJhbXMiLCJSZXNvbHZlciIsIm9wdCIsIk9iaiIsImVudHJpZXMiLCJyZXNvbHZlIiwib25TdGFydCIsIm9uRW5kIiwiaXNSdW5uaW5nIiwibWFuYWdlcnMiLCJjYXRjaCIsImVycm9yIiwidGhlbiIsIm51bWJlciIsInRhc2tzIiwiZ2V0VGFza3MiLCJ0YXNrIiwiY29tbW9uIiwicHVzaCIsInRhc2tzSWQiLCJmaW5kVGFza3MiLCJyZXNvbHZlciIsImhhc2giLCJ1cmwiLCJjYWNoZSIsImNvbW1vbk1hbmFnZXJzIiwib3duZXJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1hbmFnZXIiLCJFdmVudHMiLCJkZXN0cm95IiwiZXZlbnQiLCJpbml0aWF0b3JNYW5hZ2VyIiwicmVtb3ZlVGFzayIsInNwbGljZSIsImZpbmRJbmRleCIsInRpbWVPdXQiLCJvayIsImpzb24iLCJyYXciLCJfdXBkYXRlVGFzayIsImZpbmRUYXNrIiwiYWRkVGFza3MiLCJmaW5kIiwiUHJvbWlzZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJib2R5IiwiY29uY2F0IiwiZmV0Y2giLCJoZWFkZXJzIiwiZW5jb2RlVVJJIiwiRXZlbnQiLCJyZWFkeSIsInN0YXR1c0NoYW5nZSIsInRhc2tSZW1vdmVkIiwidGFza0VsZW1lbnRSZW1vdmVkIiwibmV3VGFzayIsImZldGNoU3RhcnQiLCJmZXRjaEVuZCIsImV2ZW50cyIsIk1hbmFnZXJFdmVudCIsIkN1c3RvbUV2ZW50IiwidHlwZSIsInByb3BzIiwiX2luaXRpYWxHdWlkIiwiX2d1aWQiLCJuZXdHVUlEIiwiRmFrZVdlYWtNYXAiLCJXZWFrTWFwIiwidmRhdGEiLCJmbG9vciIsInBlcmZvcm1hbmNlIiwibm93IiwiRGF0ZSIsImRhdGEiLCJhY2Nlc3MiLCJHdWlkIiwiZ2V0IiwiZGVsZXRlIiwiUHJvZ3Jlc3MiLCJyZW5kZXIiLCJIVE1MRWxlbWVudCIsInNpemUiLCJpc1Nob3dHcmFkaWVudCIsInNldFByb2dyZXNzIiwiYmFycyIsIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJiYXJPcHRpb25zIiwiY2xhc3NUaG9DaGVjayIsInNldExhYmVsIiwibGFiZWwiLCJsYWJlbFRleHQiLCJjc3MiLCJyb2xlIiwibWluIiwibWF4IiwiY2hpbGROb2RlcyIsIkljb25UIiwiaWNvbiIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlciIsImhhbmRsZXJUaW1vdXREZWxheSIsImhpZGRlbkxhYmVsIiwiZGlzYWJsZWQiLCJpY29uTmFtZSIsImljb25Ib3Zlck5hbWUiLCJpY29uU2l6ZSIsImFuaW1hdGVkQ2xpY2siLCJCdXR0b24iLCJkcm9wIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYmluZCIsIngiLCJwYWdlWCIsImxlZnQiLCJzY3JvbGxYIiwieSIsInBhZ2VZIiwidG9wIiwic2Nyb2xsWSIsImJ1dHRvbnMiLCJhcnJhbmdlIiwic2NhbGVkIiwic2VsZWN0YWJsZSIsInNlbGVjdEljb24iLCJCdXR0b25zR3JvdXAiLCJjb25maWciLCJidG4iLCJzZWxlY3RlZCIsImJ1dHRvbiIsIlRhc2tTdGF0dXMiLCJtYXBJY29ucyIsImFjdGlvbnMiLCJpY29ucyIsImVscyIsImJ1dHRvbkdyb3VwIiwiZW5hYmxlZFdpdGgiLCJlbmFibGVkV2l0aFN0YXR1cyIsImljb25QbGFjZW1lbnQiLCJ0aXRsZSIsImljb25NYXAiLCJUYXNrIiwiZWxEZXRhaWwiLCJlbFN0YXR1c1dyYXBwZXIiLCJwYXJ0Iiwib3duZXIiLCJjb21wb25lbnQiLCJfcmVmcmVzaFByb2dyZXNzIiwiX3JlZnJlc2hTdGF0dXMiLCJlbFN0YXR1cyIsIkRvbURhdGEiLCJjb21wb25ldCIsIkRlZnVhbHRzIiwiYW5pbWF0ZSIsInRpbWluZyIsImRyYXciLCJkdXJhdGlvbiIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsInRpbWVGcmFjdGlvbiIsInRpbWluZ3MiLCJsaW5lYXIiLCJxdWFkIiwicG93IiwiY2lyYyIsInNpbiIsImFjb3MiLCJiYWNrIiwiYW5pbWF0aW9uc0RyYXciLCJkaXNwbGF5IiwiYW5pbWF0ZUVsIiwiYW5pbWF0aW9uQ29uZmlnIiwiZGVsYXkiLCJhbmltYXRpb24iLCJyZW5kZXJPbkVtcHR5IiwidGFza0NsYXNzIiwiZW1wdHlUZXh0IiwiaGlkZUFuaW1hdGlvbiIsInNob3dBbmltYXRpb24iLCJ0YXNrc0FuaW1hdGlvbiIsImhpZGUiLCJzaG93Iiwid3JhcHBlciIsIndyYXBwZXJUYXNrcyIsInRyaWdnZXIiLCJidWJibGVzIiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIm51bWJlclJlcXVlc3RzIiwicmVxdWVzdHMiLCJpc1N0YXR1c0NoYW5nZSIsIm9sZERhdGEiLCJvbGRTdGF0dXMiLCJ3cmFwcGVyVGFza3NFbGVtZW50IiwidCIsInN0YXR1c0ZpbHRlciIsIndyYXBwZXJFbGVtZW50IiwidmlzaWJsZSIsIlRhc2tDbGFzcyIsIk51bWJlciIsIkljb24iLCJxdWV1ZU1hbmFnZXIiLCJtZXRob2RzIiwiaW5pdCIsIiR3cmFwcGVyIiwiY3JlYXRlQnV0dG9ucyIsImFwcGx5IiwiYXJndW1lbnRzIl0sIm1hcHBpbmdz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LEVBQWVBLENBQUMsR0FBRzBLLENBQW5CLEdBQXVCO0VBQ3RCRCxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBRyxDQUFMLEdBQVVKLENBQUMsQ0FBQyxDQUFDSSxDQUFDLEdBQUNJLEdBQUcsQ0FBQzdLLENBQUMsRUFBRixDQUFOLElBQWEsSUFBZCxDQUFmO0VBQ0F5SyxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBRyxDQUFMLEdBQVVKLENBQUMsQ0FBQyxDQUFDSSxDQUFDLEdBQUNJLEdBQUcsQ0FBQzdLLENBQUMsRUFBRixDQUFOLElBQWEsSUFBZCxDQUFmO0VBQ0F5SyxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBRyxDQUFMLEdBQVVKLENBQUMsQ0FBQyxDQUFDSSxDQUFDLEdBQUNJLEdBQUcsQ0FBQzdLLENBQUMsRUFBRixDQUFOLElBQWEsSUFBZCxDQUFmO0VBQ0F5SyxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBRyxDQUFMLEdBQVVKLENBQUMsQ0FBQyxDQUFDSSxDQUFDLEdBQUNJLEdBQUcsQ0FBQzdLLENBQUMsRUFBRixDQUFOLElBQWEsSUFBZCxDQUFmO0VBQ0F5SyxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBRyxDQUFMLEdBQVVKLENBQUMsQ0FBQyxDQUFDSSxDQUFDLEdBQUNJLEdBQUcsQ0FBQzdLLENBQUMsRUFBRixDQUFOLElBQWEsSUFBZCxDQUFmO0VBQ0F5SyxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBRyxDQUFMLEdBQVVKLENBQUMsQ0FBQyxDQUFDSSxDQUFDLEdBQUNJLEdBQUcsQ0FBQzdLLENBQUMsRUFBRixDQUFOLElBQWEsSUFBZCxDQUFmO0VBQ0F5SyxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBRyxDQUFMLEdBQVVKLENBQUMsQ0FBQyxDQUFDSSxDQUFDLEdBQUNJLEdBQUcsQ0FBQzdLLENBQUMsRUFBRixDQUFOLElBQWEsSUFBZCxDQUFmO0VBQ0F5SyxRQUFBQSxDQUFDLEdBQUlBLENBQUMsS0FBRyxDQUFMLEdBQVVKLENBQUMsQ0FBQyxDQUFDSSxDQUFDLEdBQUNJ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
