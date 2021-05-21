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

  const EMPTY_MESSAGE = '__EMPTY__';
  const Defaults$4 = {
    method: 'post',
    delayTime: 1000
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

      _classPrivateFieldSet(this, _options$3, extend({}, Defaults$4, options));
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


    findTask(id) {
      const task = this.tasks.find(task => task.id === id);
      return task ? task : false;
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
            const task = this.findTask(item.id);

            if (task) {
              // noinspection JSAccessibilityCheck
              task.manager._updateTask(task, item);
            }
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

        if (task === null) {
          item.common = true;
          item.title = ''; // manual triggering update

          manager.addTasks([item], false);
          task = manager.findTask(item.id);
          task.initiatorManager = resolver.tasks.find(value => value.id === item.id)?.manager;
        }

        if (task.common) {
          manager._updateTask(task, item);
        }
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

      return fetch(this.options.url, extend({}, this.options, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: encodeURI(tasks.map(item => `t[]=${item}`).join('&'))
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

  var _manager$1 = /*#__PURE__*/new WeakMap();

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

      _manager$1.set(this, {
        writable: true,
        value: null
      });

      _classPrivateFieldSet(this, _manager$1, manager);
    }
    /**
     * @return {Manager}
     */


    get manager() {
      return _classPrivateFieldGet(this, _manager$1);
    }

  }

  /**
   *@interface
   */

  var _manager = /*#__PURE__*/new WeakMap();

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

      _manager.set(this, {
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

      _classPrivateFieldSet(this, _manager, manager);
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
      return _classPrivateFieldGet(this, _manager);
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

      _classPrivateFieldSet(this, _bGroup, new ButtonsGroup({
        buttons: actions,
        arrange: false,
        scaled: true
      }));
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
      els.push(_classPrivateFieldGet(this, _bGroup).render());
      return els;
    }
    /**
     *
     * @param {Number} status
     */


    refresh(status) {
      _classPrivateFieldGet(this, _text).innerHTML = _classPrivateFieldGet(this, _task).statusText;
      _classPrivateFieldGet(this, _icon).icon = this.map.icons[status];

      _classPrivateFieldGet(this, _bGroup).buttons.forEach(button => {
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
              manager.trigger(Event.fetchStart, {
                bubbles: true
              });
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

}(window.jQuery, document, window));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmJ1bmRsZV9lcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2pzL21peGlucy9jc3NDbGFzc05hbWUuanMiLCIuLi9zcmMvanMvdXRpbHMvZnVsbHNjcmVlbi1hcGkuanMiLCIuLi9zcmMvanMvdXRpbHMvb2JqLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2NvbXB1dGVkLXN0eWxlLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIuLi9zcmMvanMvdXRpbHMvZG9tLmpzIiwiLi4vc3JjL2pzL3VJQ29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcyIsIi4uL3NyYy9qcy91dGlscy9leHRlbmQuanMiLCIuLi9zcmMvanMvcmVzb2x2ZXIuanMiLCIuLi9zcmMvanMvZXZlbnRzTGlzdC5qcyIsIi4uL3NyYy9qcy9zdGF0dXNlc0xpc3QuanMiLCIuLi9zcmMvanMvbWFuYWdlckV2ZW50LmpzIiwiLi4vc3JjL2pzL3Rhc2tBYnN0cmFjdC5qcyIsIi4uL3NyYy9qcy91dGlscy9ndWlkLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2RvbS1kYXRhLmpzIiwiLi4vc3JjL2pzL3Byb2dyZXNzLmpzIiwiLi4vc3JjL2pzL2ljb250LmpzIiwiLi4vc3JjL2pzL2J1dHRvbi5qcyIsIi4uL3NyYy9qcy9idXR0b25zR3JvdXAuanMiLCIuLi9zcmMvanMvdGFza1N0YXR1cy5qcyIsIi4uL3NyYy9qcy90YXNrLmpzIiwiLi4vc3JjL2pzL3V0aWxzL2FuaW1hdGUuanMiLCIuLi9zcmMvanMvbWFuYWdlci5qcyIsIi4uL3NyYy9qcy9qcXVlcnkucGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENTU0NsYXNzTmFtZU1peGluICA9IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudWxsfHN0cmluZ31cbiAgICAgKi9cbiAgICBjbGFzc1ByZWZpeDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICAgZ2V0Q2xhc3NOYW1lOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NQcmVmaXg9PT0gbnVsbCB8fCBuYW1lLnN0YXJ0c1dpdGgodGhpcy5jbGFzc1ByZWZpeCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUHJlZml4ICsgbmFtZTtcbiAgICB9LFxuXG59OyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqIEBtb2R1bGUgZnVsbHNjcmVlbi1hcGlcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG4vKipcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHNlZSBbU3BlY2lmaWNhdGlvbl17QGxpbmsgaHR0cHM6Ly9mdWxsc2NyZWVuLnNwZWMud2hhdHdnLm9yZ31cbiAqIEBzZWUgW01hcCBBcHByb2FjaCBGcm9tIFNjcmVlbmZ1bGwuanNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc31cbiAqL1xuY29uc3QgRnVsbHNjcmVlbkFwaSA9IHtcbiAgcHJlZml4ZWQ6IHRydWVcbn07XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbmNvbnN0IGFwaU1hcCA9IFtcbiAgW1xuICAgICdyZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAnZnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdmdWxsc2NyZWVuZXJyb3InLFxuICAgICdmdWxsc2NyZWVuJ1xuICBdLFxuICAvLyBXZWJLaXRcbiAgW1xuICAgICd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InLFxuICAgICctd2Via2l0LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNb3ppbGxhXG4gIFtcbiAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLFxuICAgICctbW96LWZ1bGwtc2NyZWVuJ1xuICBdLFxuICAvLyBNaWNyb3NvZnRcbiAgW1xuICAgICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAnTVNGdWxsc2NyZWVuRXJyb3InLFxuICAgICctbXMtZnVsbHNjcmVlbidcbiAgXVxuXTtcblxuY29uc3Qgc3BlY0FwaSA9IGFwaU1hcFswXTtcbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuICAvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cbiAgaWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuICAgIGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuICAgIEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuICB9XG5cbiAgRnVsbHNjcmVlbkFwaS5wcmVmaXhlZCA9IGJyb3dzZXJBcGlbMF0gIT09IHNwZWNBcGlbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG4iLCIvKipcbiAqIEBmaWxlIG9iai5qc1xuICogQG1vZHVsZSBvYmpcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6RWFjaENhbGxiYWNrXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXkgZm9yIHRoZSBvYmplY3QgdGhhdCBpcyBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgICAgICBUaGUgY3VycmVudCBrZXktdmFsdWUgZm9yIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXJcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvYmo6UmVkdWNlQ2FsbGJhY2tcbiAqXG4gKiBAcGFyYW0ge01peGVkfSBhY2N1bVxuICogICAgICAgIFRoZSB2YWx1ZSB0aGF0IGlzIGFjY3VtdWxhdGluZyBvdmVyIHRoZSByZWR1Y2UgbG9vcC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleSBmb3IgdGhlIG9iamVjdCB0aGF0IGlzIGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogICAgICAgIFRoZSBjdXJyZW50IGtleS12YWx1ZSBmb3Igb2JqZWN0IHRoYXQgaXMgYmVpbmcgaXRlcmF0ZWQgb3ZlclxuICpcbiAqIEByZXR1cm4ge01peGVkfVxuICogICAgICAgICBUaGUgbmV3IGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogR2V0IHRoZSBrZXlzIG9mIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogICAgICAgIFRoZSBPYmplY3QgdG8gZ2V0IHRoZSBrZXlzIGZyb21cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqICAgICAgICAgQW4gYXJyYXkgb2YgdGhlIGtleXMgZnJvbSB0aGUgb2JqZWN0LiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoZVxuICogICAgICAgICBvYmplY3QgcGFzc2VkIGluIHdhcyBpbnZhbGlkIG9yIGhhZCBubyBrZXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG59O1xuXG4vKipcbiAqIEFycmF5LWxpa2UgaXRlcmF0aW9uIGZvciBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqICAgICAgICBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICpcbiAqIEBwYXJhbSB7b2JqOkVhY2hDYWxsYmFja30gZm5cbiAqICAgICAgICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGZvciBlYWNoIGtleSBpbiB0aGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaChvYmplY3QsIGZuKSB7XG4gIGtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiBmbihvYmplY3Rba2V5XSwga2V5KSk7XG59XG5cbi8qKlxuICogQXJyYXktbGlrZSByZWR1Y2UgZm9yIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogICAgICAgIFRoZSBPYmplY3QgdGhhdCB5b3Ugd2FudCB0byByZWR1Y2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqICAgICAgICAgQSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2gga2V5IGluIHRoZSBvYmplY3QuIEl0XG4gKiAgICAgICAgIHJlY2VpdmVzIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBhbmQgdGhlIHBlci1pdGVyYXRpb24gdmFsdWUgYW5kIGtleVxuICogICAgICAgICBhcyBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gW2luaXRpYWwgPSAwXVxuICogICAgICAgIFN0YXJ0aW5nIHZhbHVlXG4gKlxuICogQHJldHVybiB7TWl4ZWR9XG4gKiAgICAgICAgIFRoZSBmaW5hbCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGZuLCBpbml0aWFsID0gMCkge1xuICByZXR1cm4ga2V5cyhvYmplY3QpLnJlZHVjZSgoYWNjdW0sIGtleSkgPT4gZm4oYWNjdW0sIG9iamVjdFtrZXldLCBrZXkpLCBpbml0aWFsKTtcbn1cblxuLyoqXG4gKiBPYmplY3QuYXNzaWduLXN0eWxlIG9iamVjdCBzaGFsbG93IG1lcmdlL2V4dGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7T2JqZWN0fSAuLi5zb3VyY2VzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmIChPYmplY3QuYXNzaWduKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBhIHZhbHVlIGlzIGFuIG9iamVjdCBvZiBhbnkga2luZCAtIGluY2x1ZGluZyBET00gbm9kZXMsXG4gKiBhcnJheXMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGV0Yy4gTm90IGZ1bmN0aW9ucywgdGhvdWdoLlxuICpcbiAqIFRoaXMgYXZvaWRzIHRoZSBnb3RjaGEgd2hlcmUgdXNpbmcgYHR5cGVvZmAgb24gYSBgbnVsbGAgdmFsdWVcbiAqIHJlc3VsdHMgaW4gYCdvYmplY3QnYC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGFwcGVhcnMgdG8gYmUgYSBcInBsYWluXCIgb2JqZWN0IC0gdGhhdCBpcywgYVxuICogZGlyZWN0IGluc3RhbmNlIG9mIGBPYmplY3RgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZSBjb21wdXRlZC1zdHlsZS5qc1xuICogQG1vZHVsZSBjb21wdXRlZC1zdHlsZVxuICovXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEEgc2FmZSBnZXRDb21wdXRlZFN0eWxlLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gRmlyZWZveCwgaWYgdGhlIHBsYXllciBpcyBsb2FkZWQgaW4gYW4gaWZyYW1lIHdpdGhcbiAqIGBkaXNwbGF5Om5vbmVgLCB0aGVuIGBnZXRDb21wdXRlZFN0eWxlYCByZXR1cm5zIGBudWxsYCwgc28sIHdlIGRvIGFcbiAqIG51bGwtY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHBsYXllciBkb2Vzbid0IGJyZWFrIGluIHRoZXNlIGNhc2VzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtICAgIHtFbGVtZW50fSBlbFxuICogICAgICAgICAgIFRoZSBlbGVtZW50IHlvdSB3YW50IHRoZSBjb21wdXRlZCBzdHlsZSBvZlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBwcm9wXG4gKiAgICAgICAgICAgVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnRcbiAqXG4gKiBAc2VlICAgICAgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWwsIHByb3ApIHtcbiAgaWYgKCFlbCB8fCAhcHJvcCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZVZhbHVlID8gY29tcHV0ZWRTdHlsZVZhbHVlLmdldFByb3BlcnR5VmFsdWUocHJvcCkgfHwgY29tcHV0ZWRTdHlsZVZhbHVlW3Byb3BdIDogJyc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVkU3R5bGU7XG4iLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqIEBtb2R1bGUgYnJvd3NlclxuICovXG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5jb25zdCB3ZWJraXRWZXJzaW9uTWFwID0gKC9BcHBsZVdlYktpdFxcLyhbXFxkLl0rKS9pKS5leGVjKFVTRVJfQUdFTlQpO1xuY29uc3QgYXBwbGVXZWJraXRWZXJzaW9uID0gd2Via2l0VmVyc2lvbk1hcCA/IHBhcnNlRmxvYXQod2Via2l0VmVyc2lvbk1hcC5wb3AoKSkgOiBudWxsO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIGFuIGlQb2QuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgaU9TIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBJT1NfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgbWF0Y2ggPSBVU0VSX0FHRU5ULm1hdGNoKC9PUyAoXFxkKylfL2kpO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn0oKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbiBBbmRyb2lkIGRldmljZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBBbmRyb2lkIHZlcnNpb24gLSBvciBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfHN0cmluZ3xudWxsfVxuICovXG5leHBvcnQgY29uc3QgQU5EUk9JRF9WRVJTSU9OID0gKGZ1bmN0aW9uKCkge1xuICAvLyBUaGlzIG1hdGNoZXMgQW5kcm9pZCBNYWpvci5NaW5vci5QYXRjaCB2ZXJzaW9uc1xuICAvLyBBTkRST0lEX1ZFUlNJT04gaXMgTWFqb3IuTWlub3IgYXMgYSBOdW1iZXIsIGlmIE1pbm9yIGlzbid0IGF2YWlsYWJsZSwgdGhlbiBvbmx5IE1ham9yIGlzIHJldHVybmVkXG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvQW5kcm9pZCAoXFxkKykoPzpcXC4oXFxkKykpPyg/OlxcLihcXGQrKSkqL2kpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ham9yID0gbWF0Y2hbMV0gJiYgcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIGNvbnN0IG1pbm9yID0gbWF0Y2hbMl0gJiYgcGFyc2VGbG9hdChtYXRjaFsyXSk7XG5cbiAgaWYgKG1ham9yICYmIG1pbm9yKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0gKyAnLicgKyBtYXRjaFsyXSk7XG4gIH0gZWxzZSBpZiAobWFqb3IpIHtcbiAgICByZXR1cm4gbWFqb3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBuYXRpdmUgQW5kcm9pZCBicm93c2VyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19OQVRJVkVfQU5EUk9JRCA9IElTX0FORFJPSUQgJiYgQU5EUk9JRF9WRVJTSU9OIDwgNSAmJiBhcHBsZVdlYmtpdFZlcnNpb24gPCA1Mzc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBNb3ppbGxhIEZpcmVmb3guXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0ZJUkVGT1ggPSAoL0ZpcmVmb3gvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIE1pY3Jvc29mdCBFZGdlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19FREdFID0gKC9FZGcvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIEdvb2dsZSBDaHJvbWUuXG4gKlxuICogVGhpcyB3aWxsIGFsc28gYmUgYHRydWVgIGZvciBDaHJvbWUgb24gaU9TLCB3aGljaCB3aWxsIGhhdmUgZGlmZmVyZW50IHN1cHBvcnRcbiAqIGFzIGl0IGlzIGFjdHVhbGx5IFNhZmFyaSB1bmRlciB0aGUgaG9vZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gIUlTX0VER0UgJiYgKCgvQ2hyb21lL2kpLnRlc3QoVVNFUl9BR0VOVCkgfHwgKC9DcmlPUy9pKS50ZXN0KFVTRVJfQUdFTlQpKTtcblxuLyoqXG4gKiBUaGUgZGV0ZWN0ZWQgR29vZ2xlIENocm9tZSB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgQ0hST01FX1ZFUlNJT04gPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG1hdGNoID0gVVNFUl9BR0VOVC5tYXRjaCgvKENocm9tZXxDcmlPUylcXC8oXFxkKykvKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsyXSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59KCkpO1xuXG4vKipcbiAqIFRoZSBkZXRlY3RlZCBJbnRlcm5ldCBFeHBsb3JlciB2ZXJzaW9uIC0gb3IgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnxudWxsfVxuICovXG5leHBvcnQgY29uc3QgSUVfVkVSU0lPTiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzdWx0ID0gKC9NU0lFXFxzKFxcZCspXFwuXFxkLykuZXhlYyhVU0VSX0FHRU5UKTtcbiAgbGV0IHZlcnNpb24gPSByZXN1bHQgJiYgcGFyc2VGbG9hdChyZXN1bHRbMV0pO1xuXG4gIGlmICghdmVyc2lvbiAmJiAoL1RyaWRlbnRcXC83LjAvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAoL3J2OjExLjAvKS50ZXN0KFVTRVJfQUdFTlQpKSB7XG4gICAgLy8gSUUgMTEgaGFzIGEgZGlmZmVyZW50IHVzZXIgYWdlbnQgc3RyaW5nIHRoYW4gb3RoZXIgSUUgdmVyc2lvbnNcbiAgICB2ZXJzaW9uID0gMTEuMDtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uO1xufSgpKTtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGRlc2t0b3AgU2FmYXJpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSAoL1NhZmFyaS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19DSFJPTUUgJiYgIUlTX0FORFJPSUQgJiYgIUlTX0VER0U7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhIFdpbmRvd3MgbWFjaGluZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfV0lORE9XUyA9ICgvV2luZG93cy9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZGV2aWNlIGlzIHRvdWNoLWVuYWJsZWQuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRPVUNIX0VOQUJMRUQgPSBCb29sZWFuKERvbS5pc1JlYWwoKSAmJiAoXG4gICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8XG4gIHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIHdpbmRvdy5kb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBhZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtCb29sZWFufVxuICovXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpIHx8XG4gIChJU19TQUZBUkkgJiYgVE9VQ0hfRU5BQkxFRCAmJiAhKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSk7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBkZXZpY2UgaXMgYW4gaVBob25lLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBjb25zdFxuICogQHR5cGUge0Jvb2xlYW59XG4gKi9cbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGlPUyBkZXZpY2UuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhbnkgZmxhdm9yIG9mIFNhZmFyaSAtIGluY2x1ZGluZyBpT1MuXG4gKlxuICogQHN0YXRpY1xuICogQGNvbnN0XG4gKiBAdHlwZSB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IElTX0FOWV9TQUZBUkkgPSAoSVNfU0FGQVJJIHx8IElTX0lPUykgJiYgIUlTX0NIUk9NRTtcbiIsIi8qKlxuICogQGZpbGUgZG9tLmpzXG4gKiBAbW9kdWxlIGRvbVxuICovXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgZnMgZnJvbSAnLi9mdWxsc2NyZWVuLWFwaSc7XG5cbmltcG9ydCB7aXNPYmplY3R9IGZyb20gJy4vb2JqJztcbmltcG9ydCBjb21wdXRlZFN0eWxlIGZyb20gJy4vY29tcHV0ZWQtc3R5bGUnO1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICcuL2Jyb3dzZXInO1xuXG4vKipcbiAqIERldGVjdCBpZiBhIHZhbHVlIGlzIGEgc3RyaW5nIHdpdGggYW55IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiAgICAgICAgIFRoZSBzdHJpbmcgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgc3RyaW5nIGlzIG5vbi1ibGFuaywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICovXG5mdW5jdGlvbiBpc05vbkJsYW5rU3RyaW5nKHN0cikge1xuICAgIC8vIHdlIHVzZSBzdHIudHJpbSBhcyBpdCB3aWxsIHRyaW0gYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGZyb20gdGhlIGZyb250IG9yIGJhY2sgb2Ygbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycy4gYWthXG4gICAgLy8gQW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIHN0aWxsIGNvbnRhaW4gdGhlbSBhZnRlciBgdHJpbWAgYnV0IHdoaXRlc3BhY2Ugb25seSBzdHJpbmdzXG4gICAgLy8gd2lsbCBoYXZlIGEgbGVuZ3RoIG9mIDAsIGZhaWxpbmcgdGhpcyBjaGVjay5cbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgQm9vbGVhbihzdHIudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaGFzIHdoaXRlc3BhY2UuIFRoaXMgaXMgdXNlZCBieVxuICogY2xhc3MgbWV0aG9kcyB0byBiZSByZWxhdGl2ZWx5IGNvbnNpc3RlbnQgd2l0aCB0aGUgY2xhc3NMaXN0IEFQSS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqICAgICAgICAgVGhlIHN0cmluZyB0byBjaGVjayBmb3Igd2hpdGVzcGFjZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIHRoZXJlIGlzIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgLy8gc3RyLmluZGV4T2YgaW5zdGVhZCBvZiByZWdleCBiZWNhdXNlIHN0ci5pbmRleE9mIGlzIGZhc3RlciBwZXJmb3JtYW5jZSB3aXNlLlxuICAgIGlmIChzdHIuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzcyBoYXMgaWxsZWdhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvZHVjZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgbWF0Y2hpbmcgYSBjbGFzc05hbWUgd2l0aGluIGFuIGVsZW1lbnRzIGNsYXNzTmFtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc05hbWVcbiAqICAgICAgICAgVGhlIGNsYXNzTmFtZSB0byBnZW5lcmF0ZSB0aGUgUmVnRXhwIGZvci5cbiAqXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiAgICAgICAgIFRoZSBSZWdFeHAgdGhhdCB3aWxsIGNoZWNrIGZvciBhIHNwZWNpZmljIGBjbGFzc05hbWVgIGluIGFuIGVsZW1lbnRzXG4gKiAgICAgICAgIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY2xhc3NSZWdFeHAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKCR8XFxcXHMpJyk7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBET00gaW50ZXJmYWNlIGFwcGVhcnMgdG8gYmUgcmVhbCAoaS5lLiBub3Qgc2ltdWxhdGVkKS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGFwcGVhcnMgdG8gYmUgcmVhbCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWwoKSB7XG4gICAgLy8gQm90aCBkb2N1bWVudCBhbmQgd2luZG93IHdpbGwgbmV2ZXIgYmUgdW5kZWZpbmVkIHRoYW5rcyB0byBgZ2xvYmFsYC5cbiAgICByZXR1cm4gZG9jdW1lbnQgPT09IHdpbmRvdy5kb2N1bWVudDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzLCB2aWEgZHVjayB0eXBpbmcsIHdoZXRoZXIgb3Igbm90IGEgdmFsdWUgaXMgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtNaXhlZH0gdmFsdWVcbiAqICAgICAgICAgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIERPTSBlbGVtZW50LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWwodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICBXaWxsIGJlIGB0cnVlYCBpZiB0aGUgRE9NIGlzIGVtYmVkZGVkIGluIGFuIGlmcmFtZSwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luRnJhbWUoKSB7XG5cbiAgICAvLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGhlcmUgYmVjYXVzZSBTYWZhcmkgd2lsbCB0aHJvdyBlcnJvcnMgd2hlbiBhdHRlbXB0aW5nXG4gICAgLy8gdG8gZ2V0IGVpdGhlciBgcGFyZW50YCBvciBgc2VsZmBcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGY7XG4gICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBmdW5jdGlvbnMgdG8gcXVlcnkgdGhlIERPTSB1c2luZyBhIGdpdmVuIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge3N0cmluZ30gbWV0aG9kXG4gKiAgICAgICAgICBUaGUgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgcXVlcnkgd2l0aC5cbiAqXG4gKiBAcmV0dXJuICB7RnVuY3Rpb259XG4gKiAgICAgICAgICBUaGUgcXVlcnkgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJpZXIobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBpZiAoIWlzTm9uQmxhbmtTdHJpbmcoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbbWV0aG9kXShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25CbGFua1N0cmluZyhjb250ZXh0KSkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSBpc0VsKGNvbnRleHQpID8gY29udGV4dCA6IGRvY3VtZW50O1xuXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXSAmJiBjdHhbbWV0aG9kXShzZWxlY3Rvcik7XG4gICAgfTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCBhbmQgYXBwbGllcyBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBhbmQgaW5zZXJ0cyBjb250ZW50LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gW3RhZ05hbWU9J2RpdiddXG4gKiAgICAgICAgIE5hbWUgb2YgdGFnIHRvIGJlIGNyZWF0ZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbcHJvcGVydGllcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBwcm9wZXJ0aWVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBbYXR0cmlidXRlcz17fV1cbiAqICAgICAgICAgRWxlbWVudCBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yfSBjb250ZW50XG4gKiAgICAgICAgQSBjb250ZW50IGRlc2NyaXB0b3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRoYXQgd2FzIGNyZWF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcGVydGllc1twcm9wTmFtZV07XG5cbiAgICAgICAgLy8gU2VlICMyMTc2XG4gICAgICAgIC8vIFdlIG9yaWdpbmFsbHkgd2VyZSBhY2NlcHRpbmcgYm90aCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGluIHRoZVxuICAgICAgICAvLyBzYW1lIG9iamVjdCwgYnV0IHRoYXQgZG9lc24ndCB3b3JrIHNvIHdlbGwuXG4gICAgICAgIGlmIChwcm9wTmFtZS5pbmRleE9mKCdhcmlhLScpICE9PSAtMSB8fCBwcm9wTmFtZSA9PT0gJ3JvbGUnIHx8IHByb3BOYW1lID09PSAndHlwZScpIHtcblxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCB2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGVbc3R5bGVOYW1lXSA9IHZhbFtzdHlsZU5hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0ZXh0Q29udGVudCBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgZXZlcnl3aGVyZSBhbmQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBtZXRob2QgZm9yIGl0LlxuICAgICAgICAgICAgdGV4dENvbnRlbnQoZWwsIHZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxbcHJvcE5hbWVdICE9PSB2YWwgfHwgcHJvcE5hbWUgPT09ICd0YWJJbmRleCcpIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5qZWN0cyB0ZXh0IGludG8gYW4gZWxlbWVudCwgcmVwbGFjaW5nIGFueSBleGlzdGluZyBjb250ZW50cyBlbnRpcmVseS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBhZGQgdGV4dCBjb250ZW50IGludG9cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcbiAqICAgICAgICAgVGhlIHRleHQgY29udGVudCB0byBhZGQuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBhZGRlZCB0ZXh0IGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29udGVudChlbCwgdGV4dCkge1xuICAgIGlmICh0eXBlb2YgZWwudGV4dENvbnRlbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogSW5zZXJ0IGFuIGVsZW1lbnQgYXMgdGhlIGZpcnN0IGNoaWxkIG5vZGUgb2YgYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGRcbiAqICAgICAgICBFbGVtZW50IHRvIGluc2VydFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gKiAgICAgICAgRWxlbWVudCB0byBpbnNlcnQgY2hpbGQgaW50b1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFRvKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIEVsZW1lbnQgdG8gY2hlY2tcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9DaGVja1xuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGNoZWNrIGZvclxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqICAgICAgICAgVGhyb3dzIGFuIGVycm9yIGlmIGBjbGFzc1RvQ2hlY2tgIGhhcyB3aGl0ZSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzVG9DaGVjaykge1xuICAgIHRocm93SWZXaGl0ZXNwYWNlKGNsYXNzVG9DaGVjayk7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NSZWdFeHAoY2xhc3NUb0NoZWNrKS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIGFkZCBjbGFzcyBuYW1lIHRvLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NUb0FkZFxuICogICAgICAgICBDbGFzcyBuYW1lIHRvIGFkZC5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgYWRkZWQgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9BZGQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuXG4gICAgICAgIC8vIERvbid0IG5lZWQgdG8gYHRocm93SWZXaGl0ZXNwYWNlYCBoZXJlIGJlY2F1c2UgYGhhc0VsQ2xhc3NgIHdpbGwgZG8gaXRcbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgY2xhc3NMaXN0IG5vdCBiZWluZyBzdXBwb3J0ZWQuXG4gICAgfSBlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NUb0FkZCkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc1RvQWRkKS50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICBFbGVtZW50IHRvIHJlbW92ZSBhIGNsYXNzIG5hbWUgZnJvbS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzVG9SZW1vdmVcbiAqICAgICAgICAgQ2xhc3MgbmFtZSB0byByZW1vdmVcbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgRE9NIGVsZW1lbnQgd2l0aCBjbGFzcyBuYW1lIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc1RvUmVtb3ZlKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0lmV2hpdGVzcGFjZShjbGFzc1RvUmVtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMgIT09IGNsYXNzVG9SZW1vdmU7XG4gICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBUaGUgY2FsbGJhY2sgZGVmaW5pdGlvbiBmb3IgdG9nZ2xlQ2xhc3MuXG4gKlxuICogQGNhbGxiYWNrIG1vZHVsZTpkb21+UHJlZGljYXRlQ2FsbGJhY2tcbiAqIEBwYXJhbSAgICB7RWxlbWVudH0gZWxlbWVudFxuICogICAgICAgICAgIFRoZSBET00gZWxlbWVudCBvZiB0aGUgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSAgICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgICAgVGhlIGBjbGFzc05hbWVgIHRoYXQgd2FudHMgdG8gYmUgdG9nZ2xlZFxuICpcbiAqIEByZXR1cm4gICB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKiAgICAgICAgICAgSWYgYHRydWVgIGlzIHJldHVybmVkLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gKiAgICAgICAgICAgYGVsZW1lbnRgLiBJZiBgZmFsc2VgLCB0aGUgYGNsYXNzVG9Ub2dnbGVgIHdpbGwgYmUgcmVtb3ZlZCBmcm9tXG4gKiAgICAgICAgICAgdGhlIGBlbGVtZW50YC4gSWYgYHVuZGVmaW5lZGAsIHRoZSBjYWxsYmFjayB3aWxsIGJlIGlnbm9yZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBuYW1lIHRvL2Zyb20gYW4gZWxlbWVudCBkZXBlbmRpbmcgb24gYW4gb3B0aW9uYWxcbiAqIGNvbmRpdGlvbiBvciB0aGUgcHJlc2VuY2UvYWJzZW5jZSBvZiB0aGUgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHRvIHRvZ2dsZSBhIGNsYXNzIG5hbWUgb24uXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc1RvVG9nZ2xlXG4gKiAgICAgICAgIFRoZSBjbGFzcyB0aGF0IHNob3VsZCBiZSB0b2dnbGVkLlxuICpcbiAqIEBwYXJhbSAge2Jvb2xlYW58bW9kdWxlOmRvbX5QcmVkaWNhdGVDYWxsYmFja30gW3ByZWRpY2F0ZV1cbiAqICAgICAgICAgU2VlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHtAbGluayBtb2R1bGU6ZG9tflByZWRpY2F0ZUNhbGxiYWNrfVxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggYSBjbGFzcyB0aGF0IGhhcyBiZWVuIHRvZ2dsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlLCBwcmVkaWNhdGUpIHtcblxuICAgIC8vIFRoaXMgQ0FOTk9UIHVzZSBgY2xhc3NMaXN0YCBpbnRlcm5hbGx5IGJlY2F1c2UgSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZVxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgdG8gdGhlIGBjbGFzc0xpc3QudG9nZ2xlKClgIG1ldGhvZCEgV2hpY2ggaXMgZmluZSBiZWNhdXNlXG4gICAgLy8gYGNsYXNzTGlzdGAgd2lsbCBiZSB1c2VkIGJ5IHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9ucy5cbiAgICBjb25zdCBoYXMgPSBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcblxuICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZShlbGVtZW50LCBjbGFzc1RvVG9nZ2xlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHByZWRpY2F0ZSA9ICFoYXM7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5lY2Vzc2FyeSBjbGFzcyBvcGVyYXRpb24gbWF0Y2hlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGVcbiAgICAvLyBlbGVtZW50LCBubyBhY3Rpb24gaXMgcmVxdWlyZWQuXG4gICAgaWYgKHByZWRpY2F0ZSA9PT0gaGFzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzVG9Ub2dnbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKipcbiAqIEFwcGx5IGF0dHJpYnV0ZXMgdG8gYW4gSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqICAgICAgICBFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGVzIHRvLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqICAgICAgICBBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0ck5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgYXR0clZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBhdHRyVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCAoYXR0clZhbHVlID09PSB0cnVlID8gJycgOiBhdHRyVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBhbiBlbGVtZW50J3MgYXR0cmlidXRlIHZhbHVlcywgYXMgZGVmaW5lZCBvbiB0aGUgSFRNTCB0YWcuXG4gKlxuICogQXR0cmlidXRlcyBhcmUgbm90IHRoZSBzYW1lIGFzIHByb3BlcnRpZXMuIFRoZXkncmUgZGVmaW5lZCBvbiB0aGUgdGFnXG4gKiBvciB3aXRoIHNldEF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSB0YWdcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCB0YWcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgIEFsbCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50LiBCb29sZWFuIGF0dHJpYnV0ZXMgd2lsbCBiZSBgdHJ1ZWAgb3JcbiAqICAgICAgICAgYGZhbHNlYCwgb3RoZXJzIHdpbGwgYmUgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXModGFnKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICAvLyBrbm93biBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICAvLyB3ZSBjYW4gY2hlY2sgZm9yIG1hdGNoaW5nIGJvb2xlYW4gcHJvcGVydGllcywgYnV0IG5vdCBhbGwgYnJvd3NlcnNcbiAgICAvLyBhbmQgbm90IGFsbCB0YWdzIGtub3cgYWJvdXQgdGhlc2UgYXR0cmlidXRlcywgc28sIHdlIHN0aWxsIHdhbnQgdG8gY2hlY2sgdGhlbSBtYW51YWxseVxuICAgIGNvbnN0IGtub3duQm9vbGVhbnMgPSAnLCcgKyAnYXV0b3BsYXksY29udHJvbHMscGxheXNpbmxpbmUsbG9vcCxtdXRlZCxkZWZhdWx0LGRlZmF1bHRNdXRlZCcgKyAnLCc7XG5cbiAgICBpZiAodGFnICYmIHRhZy5hdHRyaWJ1dGVzICYmIHRhZy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB0YWcuYXR0cmlidXRlcztcblxuICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgICAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbaV0udmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBrbm93biBib29sZWFuc1xuICAgICAgICAgICAgLy8gdGhlIG1hdGNoaW5nIGVsZW1lbnQgcHJvcGVydHkgd2lsbCByZXR1cm4gYSB2YWx1ZSBmb3IgdHlwZW9mXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhZ1thdHRyTmFtZV0gPT09ICdib29sZWFuJyB8fCBrbm93bkJvb2xlYW5zLmluZGV4T2YoJywnICsgYXR0ck5hbWUgKyAnLCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSBvZiBhbiBpbmNsdWRlZCBib29sZWFuIGF0dHJpYnV0ZSBpcyB0eXBpY2FsbHkgYW4gZW1wdHlcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgKCcnKSB3aGljaCB3b3VsZCBlcXVhbCBmYWxzZSBpZiB3ZSBqdXN0IGNoZWNrIGZvciBhIGZhbHNlIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vIHdlIGFsc28gZG9uJ3Qgd2FudCBzdXBwb3J0IGJhZCBjb2RlIGxpa2UgYXV0b3BsYXk9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9ialthdHRyTmFtZV0gPSBhdHRyVmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBnZXQgdGhlIHZhbHVlIG9mLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqICAgICAgICAgVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byBzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgVmFsdWUgdG8gc2V0IHRoZSBhdHRyaWJ1dGUgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogICAgICAgIEF0dHJpYnV0ZSB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYmxvY2sgdGhlIGFiaWxpdHkgdG8gc2VsZWN0IHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFR1cm4gb2ZmIHRleHQgc2VsZWN0aW9uIGJsb2NraW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5ibG9ja1RleHRTZWxlY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBJZGVudGljYWwgdG8gdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBmdW5jdGlvbiwgYnV0IGVuc3VyZXMgdGhhdFxuICogdGhlIG1ldGhvZCBpcyBzdXBwb3J0ZWQgYXQgYWxsIChpdCBpcyBpbiBhbGwgYnJvd3NlcnMgd2UgY2xhaW0gdG8gc3VwcG9ydClcbiAqIGFuZCB0aGF0IHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYmVmb3JlIGNvbnRpbnVpbmcuXG4gKlxuICogVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGFsc28gc2hpbXMgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHByb3ZpZGVkIGJ5IHNvbWVcbiAqIG9sZGVyIGJyb3dzZXJzIChuYW1lbHksIElFOCkuXG4gKlxuICogQWRkaXRpb25hbGx5LCBzb21lIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGFkZGluZyBwcm9wZXJ0aWVzIHRvIGFcbiAqIGBDbGllbnRSZWN0YC9gRE9NUmVjdGAgb2JqZWN0OyBzbywgd2Ugc2hhbGxvdy1jb3B5IGl0IHdpdGggdGhlIHN0YW5kYXJkXG4gKiBwcm9wZXJ0aWVzIChleGNlcHQgYHhgIGFuZCBgeWAgd2hpY2ggYXJlIG5vdCB3aWRlbHkgc3VwcG9ydGVkKS4gVGhpcyBoZWxwc1xuICogYXZvaWQgaW1wbGVtZW50YXRpb25zIHdoZXJlIGtleXMgYXJlIG5vbi1lbnVtZXJhYmxlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgd2hvc2UgYENsaWVudFJlY3RgIHdlIHdhbnQgdG8gY2FsY3VsYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKiAgICAgICAgIEFsd2F5cyByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IC0gb3IgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAgICAgWydib3R0b20nLCAnaGVpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ3dpZHRoJ10uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGlmIChyZWN0W2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba10gPSByZWN0W2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3VsdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUoZWwsICdoZWlnaHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC53aWR0aCkge1xuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlKGVsLCAnd2lkdGgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwb3NpdGlvbiBvZiBhIERPTSBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tflBvc2l0aW9uXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlZnRcbiAqICAgICAgICAgICBQaXhlbHMgdG8gdGhlIGxlZnQuXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogICAgICAgICAgIFBpeGVscyBmcm9tIHRoZSB0b3AuXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqXG4gKiBVc2VzIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIHRlY2huaXF1ZSBmcm9tIEpvaG4gUmVzaWcuXG4gKlxuICogQHNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvZ2V0Ym91bmRpbmdjbGllbnRyZWN0LWlzLWF3ZXNvbWUvXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBmcm9tIHdoaWNoIHRvIGdldCBvZmZzZXQuXG4gKlxuICogQHJldHVybiB7bW9kdWxlOmRvbX5Qb3NpdGlvbn1cbiAqICAgICAgICAgVGhlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQb3NpdGlvbihlbCkge1xuICAgIGlmICghZWwgfHwgKGVsICYmICFlbC5vZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuXG4gICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCAmJiBlbCAhPT0gZG9jdW1lbnRbZnMuZnVsbHNjcmVlbkVsZW1lbnRdKSB7XG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgdG9wICs9IGVsLm9mZnNldFRvcDtcblxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0LFxuICAgICAgICB0b3AsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgYSBET00gZWxlbWVudCBvciBtb3VzZSBwb2ludGVyLlxuICpcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBtb2R1bGU6ZG9tfkNvb3JkaW5hdGVzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHhcbiAqICAgICAgICAgICB4IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHlcbiAqICAgICAgICAgICB5IGNvb3JkaW5hdGUgaW4gcGl4ZWxzXG4gKi9cblxuLyoqXG4gKiBHZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gd2l0aGluIGFuIGVsZW1lbnQuXG4gKlxuICogVGhlIGJhc2Ugb24gdGhlIGNvb3JkaW5hdGVzIGFyZSB0aGUgYm90dG9tIGxlZnQgb2YgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAqICAgICAgICAgRWxlbWVudCBvbiB3aGljaCB0byBnZXQgdGhlIHBvaW50ZXIgcG9zaXRpb24gb24uXG4gKlxuICogQHBhcmFtICB7RXZlbnRUYXJnZXR+RXZlbnR9IGV2ZW50XG4gKiAgICAgICAgIEV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6ZG9tfkNvb3JkaW5hdGVzfVxuICogICAgICAgICBBIGNvb3JkaW5hdGVzIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBtb3VzZSBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZWwsIGV2ZW50KSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG5cbiAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbDtcblxuICAgICAgICB3aGlsZSAoaXRlbSAmJiBpdGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdodG1sJykge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZShpdGVtLCAndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgICAgIGlmICgvXm1hdHJpeC8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdHJhbnNmb3JtLnNsaWNlKDcsIC0xKS5zcGxpdCgvLFxccy8pLm1hcChOdW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZC54ICs9IHZhbHVlc1s0XTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXm1hdHJpeDNkLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sXFxzLykubWFwKE51bWJlcik7XG5cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnggKz0gdmFsdWVzWzEyXTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkLnkgKz0gdmFsdWVzWzEzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0ge307XG4gICAgY29uc3QgYm94VGFyZ2V0ID0gZmluZFBvc2l0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgYm94ID0gZmluZFBvc2l0aW9uKGVsKTtcbiAgICBjb25zdCBib3hXID0gYm94LndpZHRoO1xuICAgIGNvbnN0IGJveEggPSBib3guaGVpZ2h0O1xuICAgIGxldCBvZmZzZXRZID0gZXZlbnQub2Zmc2V0WSAtIChib3gudG9wIC0gYm94VGFyZ2V0LnRvcCk7XG4gICAgbGV0IG9mZnNldFggPSBldmVudC5vZmZzZXRYIC0gKGJveC5sZWZ0IC0gYm94VGFyZ2V0LmxlZnQpO1xuXG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIG9mZnNldFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGJveC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgKyBib3gudG9wO1xuICAgICAgICBpZiAoYnJvd3Nlci5JU19JT1MpIHtcbiAgICAgICAgICAgIG9mZnNldFggLT0gdHJhbnNsYXRlZC54O1xuICAgICAgICAgICAgb2Zmc2V0WSAtPSB0cmFuc2xhdGVkLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvbi55ID0gKDEgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvZmZzZXRZIC8gYm94SCkpKTtcbiAgICBwb3NpdGlvbi54ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb2Zmc2V0WCAvIGJveFcpKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcywgdmlhIGR1Y2sgdHlwaW5nLCB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSAge01peGVkfSB2YWx1ZVxuICogICAgICAgICBDaGVjayBpZiB0aGlzIHZhbHVlIGlzIGEgdGV4dCBub2RlLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIFdpbGwgYmUgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIHRleHQgbm9kZSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHROb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMztcbn1cblxuXG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCl7XG4gICAgaWYgKGlzRWwoZWwpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9wYWNpdHkgPSBlbC5zdHlsZT8ub3BhY2l0eSAhPT0gJycgPyBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpIDogMTtcblxuICAgIGlmIChvcGFjaXR5ID09PSAwIHx8IGNvbXB1dGVkU3R5bGUoZWwsICd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISEoIGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGNzc0NsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoQ2xhc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcywgY29tcGFyZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMuc3RhcnRzV2l0aChzZWFyY2hDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn0pIHtcblxuICAgIGxldCBleGlzdCA9ICcnO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoZXhpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBleGlzdCA9IGNvbXBhcmUoYyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChleGlzdCAhPT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKGV4aXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGV4aXN0KTtcbiAgICAgICAgfVxuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcylcbiAgICB9XG59XG5cbi8qKlxuICogRW1wdGllcyB0aGUgY29udGVudHMgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICogICAgICAgICBUaGUgZWxlbWVudCB0byBlbXB0eSBjaGlsZHJlbiBmcm9tXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgd2l0aCBubyBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlFbChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIG1peGVkIHZhbHVlIHRoYXQgZGVzY3JpYmVzIGNvbnRlbnQgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NXG4gKiB2aWEgc29tZSBtZXRob2QuIEl0IGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICpcbiAqIFR5cGUgICAgICAgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLVxuICogYHN0cmluZ2AgICB8IFRoZSB2YWx1ZSB3aWxsIGJlIG5vcm1hbGl6ZWQgaW50byBhIHRleHQgbm9kZS5cbiAqIGBFbGVtZW50YCAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBUZXh0Tm9kZWAgfCBUaGUgdmFsdWUgd2lsbCBiZSBhY2NlcHRlZCBhcy1pcy5cbiAqIGBBcnJheWAgICAgfCBBIG9uZS1kaW1lbnNpb25hbCBhcnJheSBvZiBzdHJpbmdzLCBlbGVtZW50cywgdGV4dCBub2Rlcywgb3IgZnVuY3Rpb25zLiBUaGVzZSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgb3IgdGV4dCBub2RlIChhbnkgb3RoZXIgcmV0dXJuIHZhbHVlLCBsaWtlIGFuIGFycmF5LCB3aWxsIGJlIGlnbm9yZWQpLlxuICogYEZ1bmN0aW9uYCB8IEEgZnVuY3Rpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHN0cmluZywgZWxlbWVudCwgdGV4dCBub2RlLCBvciBhcnJheSAtIGFueSBvZiB0aGUgb3RoZXIgcG9zc2libGUgdmFsdWVzIGRlc2NyaWJlZCBhYm92ZS4gVGhpcyBtZWFucyB0aGF0IGEgY29udGVudCBkZXNjcmlwdG9yIGNvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZ1bmN0aW9ucywgYnV0IHRob3NlIHNlY29uZC1sZXZlbCBmdW5jdGlvbnMgbXVzdCByZXR1cm4gc3RyaW5ncywgZWxlbWVudHMsIG9yIHRleHQgbm9kZXMuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ3xFbGVtZW50fFRleHROb2RlfEFycmF5fEZ1bmN0aW9ufSBtb2R1bGU6ZG9tfkNvbnRlbnREZXNjcmlwdG9yXG4gKi9cblxuLyoqXG4gKiBOb3JtYWxpemVzIGNvbnRlbnQgZm9yIGV2ZW50dWFsIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gKlxuICogVGhpcyBhbGxvd3MgYSB3aWRlIHJhbmdlIG9mIGNvbnRlbnQgZGVmaW5pdGlvbiBtZXRob2RzLCBidXQgaGVscHMgcHJvdGVjdFxuICogZnJvbSBmYWxsaW5nIGludG8gdGhlIHRyYXAgb2Ygc2ltcGx5IHdyaXRpbmcgdG8gYGlubmVySFRNTGAsIHdoaWNoIGNvdWxkXG4gKiBiZSBhbiBYU1MgY29uY2Vybi5cbiAqXG4gKiBUaGUgY29udGVudCBmb3IgYW4gZWxlbWVudCBjYW4gYmUgcGFzc2VkIGluIG11bHRpcGxlIHR5cGVzIGFuZFxuICogY29tYmluYXRpb25zLCB3aG9zZSBiZWhhdmlvciBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogICAgICAgICBBbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCB3YXMgcGFzc2VkIGluLCBub3JtYWxpemVkIHRvIGFuIGFycmF5IG9mXG4gKiAgICAgICAgIGVsZW1lbnRzIG9yIHRleHQgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpIHtcblxuICAgIC8vIEZpcnN0LCBpbnZva2UgY29udGVudCBpZiBpdCBpcyBhIGZ1bmN0aW9uLiBJZiBpdCBwcm9kdWNlcyBhbiBhcnJheSxcbiAgICAvLyB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgbm9ybWFsaXphdGlvbi5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IHVwLCBub3JtYWxpemUgdG8gYW4gYXJyYXksIHNvIG9uZSBvciBtYW55IGl0ZW1zIGNhbiBiZSBub3JtYWxpemVkLFxuICAgIC8vIGZpbHRlcmVkLCBhbmQgcmV0dXJuZWQuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGNvbnRlbnQpID8gY29udGVudCA6IFtjb250ZW50XSkubWFwKHZhbHVlID0+IHtcblxuICAgICAgICAvLyBGaXJzdCwgaW52b2tlIHZhbHVlIGlmIGl0IGlzIGEgZnVuY3Rpb24gdG8gcHJvZHVjZSBhIG5ldyB2YWx1ZSxcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBiZSBzdWJzZXF1ZW50bHkgbm9ybWFsaXplZCB0byBhIE5vZGUgb2Ygc29tZSBraW5kLlxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbCh2YWx1ZSkgfHwgaXNUZXh0Tm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICgvXFxTLykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIodmFsdWUgPT4gdmFsdWUpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGFwcGVuZHMgY29udGVudCB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gKiAgICAgICAgIEVsZW1lbnQgdG8gYXBwZW5kIG5vcm1hbGl6ZWQgY29udGVudCB0by5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpkb21+Q29udGVudERlc2NyaXB0b3J9IGNvbnRlbnRcbiAqICAgICAgICBBIGNvbnRlbnQgZGVzY3JpcHRvciB2YWx1ZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICogICAgICAgICBUaGUgZWxlbWVudCB3aXRoIGFwcGVuZGVkIG5vcm1hbGl6ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcbiAgICBub3JtYWxpemVDb250ZW50KGNvbnRlbnQpLmZvckVhY2gobm9kZSA9PiBlbC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYW5kIGluc2VydHMgY29udGVudCBpbnRvIGFuIGVsZW1lbnQ7IHRoaXMgaXMgaWRlbnRpY2FsIHRvXG4gKiBgYXBwZW5kQ29udGVudCgpYCwgZXhjZXB0IGl0IGVtcHRpZXMgdGhlIGVsZW1lbnQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogICAgICAgIEVsZW1lbnQgdG8gaW5zZXJ0IG5vcm1hbGl6ZWQgY29udGVudCBpbnRvLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmRvbX5Db250ZW50RGVzY3JpcHRvcn0gY29udGVudFxuICogICAgICAgIEEgY29udGVudCBkZXNjcmlwdG9yIHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKiAgICAgICAgIFRoZSBlbGVtZW50IHdpdGggaW5zZXJ0ZWQgbm9ybWFsaXplZCBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChlbCwgY29udGVudCkge1xuICAgIHJldHVybiBhcHBlbmRDb250ZW50KGVtcHR5RWwoZWwpLCBjb250ZW50KTtcbn1cblxuXG4vKipcbiAqIGNsb3Nlc3QgZWxlbWVudCBwb2x5ZmlsbFxuICovXG4oZnVuY3Rpb24oRUxFTUVOVCkge1xuICAgIEVMRU1FTlQubWF0Y2hlcyA9IEVMRU1FTlQubWF0Y2hlcyB8fCBFTEVNRU5ULm1vek1hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVMRU1FTlQub01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICBFTEVNRU5ULmNsb3Nlc3QgPSBFTEVNRU5ULmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIXRoaXMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7cmV0dXJuIG51bGx9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH07XG59KEVsZW1lbnQucHJvdG90eXBlKSk7XG5cbi8qKlxuICogRmluZHMgYSBzaW5nbGUgRE9NIGVsZW1lbnQgbWF0Y2hpbmcgYHNlbGVjdG9yYCB3aXRoaW4gdGhlIG9wdGlvbmFsXG4gKiBgY29udGV4dGAgb2YgYW5vdGhlciBET00gZWxlbWVudCAoZGVmYXVsdGluZyB0byBgZG9jdW1lbnRgKS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiAgICAgICAgIEEgdmFsaWQgQ1NTIHNlbGVjdG9yLCB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBgcXVlcnlTZWxlY3RvcmAuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudHxTdHJpbmd9IFtjb250ZXh0PWRvY3VtZW50XVxuICogICAgICAgICBBIERPTSBlbGVtZW50IHdpdGhpbiB3aGljaCB0byBxdWVyeS4gQ2FuIGFsc28gYmUgYSBzZWxlY3RvclxuICogICAgICAgICBzdHJpbmcgaW4gd2hpY2ggY2FzZSB0aGUgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudCB3aWxsIGJlIHVzZWRcbiAqICAgICAgICAgYXMgY29udGV4dC4gSWYgbWlzc2luZyAob3Igbm8gZWxlbWVudCBtYXRjaGVzIHNlbGVjdG9yKSwgZmFsbHNcbiAqICAgICAgICAgYmFjayB0byBgZG9jdW1lbnRgLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH1cbiAqICAgICAgICAgVGhlIGVsZW1lbnQgdGhhdCB3YXMgZm91bmQgb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVRdWVyaWVyKCdxdWVyeVNlbGVjdG9yJyk7XG5cbi8qKlxuICogRmluZHMgYSBhbGwgRE9NIGVsZW1lbnRzIG1hdGNoaW5nIGBzZWxlY3RvcmAgd2l0aGluIHRoZSBvcHRpb25hbFxuICogYGNvbnRleHRgIG9mIGFub3RoZXIgRE9NIGVsZW1lbnQgKGRlZmF1bHRpbmcgdG8gYGRvY3VtZW50YCkuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvclxuICogICAgICAgICBBIHZhbGlkIENTUyBzZWxlY3Rvciwgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gYHF1ZXJ5U2VsZWN0b3JBbGxgLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR8U3RyaW5nfSBbY29udGV4dD1kb2N1bWVudF1cbiAqICAgICAgICAgQSBET00gZWxlbWVudCB3aXRoaW4gd2hpY2ggdG8gcXVlcnkuIENhbiBhbHNvIGJlIGEgc2VsZWN0b3JcbiAqICAgICAgICAgc3RyaW5nIGluIHdoaWNoIGNhc2UgdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQgd2lsbCBiZSB1c2VkXG4gKiAgICAgICAgIGFzIGNvbnRleHQuIElmIG1pc3NpbmcgKG9yIG5vIGVsZW1lbnQgbWF0Y2hlcyBzZWxlY3RvciksIGZhbGxzXG4gKiAgICAgICAgIGJhY2sgdG8gYGRvY3VtZW50YC5cbiAqXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqICAgICAgICAgQSBlbGVtZW50IGxpc3Qgb2YgZWxlbWVudHMgdGhhdCB3ZXJlIGZvdW5kLiBXaWxsIGJlIGVtcHR5IGlmIG5vbmVcbiAqICAgICAgICAgd2VyZSBmb3VuZC5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCAkJCA9IGNyZWF0ZVF1ZXJpZXIoJ3F1ZXJ5U2VsZWN0b3JBbGwnKTtcbiIsImltcG9ydCB7Q1NTQ2xhc3NOYW1lTWl4aW59IGZyb20gJy4vbWl4aW5zL2Nzc0NsYXNzTmFtZSc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VPZlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZU9wdGlvbnNQdG9wZXJ0eShwcm9wZXJ0eSwgb3B0aW9ucywgaW5zdGFuY2VPZiA9IEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKChvcHRpb25zW3Byb3BlcnR5XSBpbnN0YW5jZW9mIGluc3RhbmNlT2YpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgY2FsbC4gUHJvcGVydHkgJyArIHByb3BlcnR5ICsgJyBpcyBub3QgdmFsaWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxzdHJpbmd9ICBjb250ZW50XG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBjcmVhdGVFbCh0YWdOYW1lID0gJ2RpdicsIHByb3BlcnRpZXMgPSB7fSwgYXR0cmlidXRlcyA9IHt9LCBjb250ZW50KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NTZXQgPSBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgYXJyYXkgPSAodHlwZW9mIHByb3BlcnRpZXMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5zcGxpdCgnICcpIDogcHJvcGVydGllcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBjbGFzc1NldC5hZGQoaXRlbSkpO1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgY3NzQ2xhc3Mgb2YgY2xhc3NTZXQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgVUlDb21wb25lbnQuZ2V0Q2xhc3NOYW1lKGNzc0NsYXNzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllcy5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERvbS5jcmVhdGVFbCh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBhdHRyaWJ1dGVzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzZWxlY3Rvci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcLlwiLCAnZycpLCAnJCYnICsgVUlDb21wb25lbnQuY2xhc3NQcmVmaXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBVSUNvbXBvbmVudC5fbm9ybWFsaXplUHJlZml4KHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIERvbS4kKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50W118bnVsbH1cbiAgICAgKi9cbiAgICAkJChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICBzZWxlY3RvciA9IFVJQ29tcG9uZW50Ll9ub3JtYWxpemVQcmVmaXgoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gRG9tLiQkKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVUlDb21wb25lbnQsIENTU0NsYXNzTmFtZU1peGluKTtcbiIsIi8qIGNyYzMyLmpzIChDKSAyMDE0LXByZXNlbnQgU2hlZXRKUyAtLSBodHRwOi8vc2hlZXRqcy5jb20gKi9cbi8qIHZpbTogc2V0IHRzPTI6ICovXG4vKmV4cG9ydGVkIENSQzMyICovXG52YXIgQ1JDMzI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Lypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdC8qZXNsaW50LWRpc2FibGUgKi9cblx0aWYodHlwZW9mIERPX05PVF9FWFBPUlRfQ1JDID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmKCdvYmplY3QnID09PSB0eXBlb2YgZXhwb3J0cykge1xuXHRcdFx0ZmFjdG9yeShleHBvcnRzKTtcblx0XHR9IGVsc2UgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IHt9O1xuXHRcdFx0XHRmYWN0b3J5KG1vZHVsZSk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0fVxuXHQvKmVzbGludC1lbmFibGUgKi9cblx0Lypqc2hpbnQgaWdub3JlOmVuZCAqL1xufShmdW5jdGlvbihDUkMzMikge1xuQ1JDMzIudmVyc2lvbiA9ICcxLjIuMCc7XG4vKiBzZWUgcGVyZi9jcmMzMnRhYmxlLmpzICovXG4vKmdsb2JhbCBJbnQzMkFycmF5ICovXG5mdW5jdGlvbiBzaWduZWRfY3JjX3RhYmxlKCkge1xuXHR2YXIgYyA9IDAsIHRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5cblx0Zm9yKHZhciBuID0wOyBuICE9IDI1NjsgKytuKXtcblx0XHRjID0gbjtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHR0YWJsZVtuXSA9IGM7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkodGFibGUpIDogdGFibGU7XG59XG5cbnZhciBUID0gc2lnbmVkX2NyY190YWJsZSgpO1xuZnVuY3Rpb24gY3JjMzJfYnN0cihic3RyLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gYnN0ci5sZW5ndGggLSAxO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnN0ci5jaGFyQ29kZUF0KGkrKykpJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15ic3RyLmNoYXJDb2RlQXQoaSsrKSkmMHhGRl07XG5cdH1cblx0aWYoaSA9PT0gTCkgQyA9IChDPj4+OCkgXiBUWyhDIF4gYnN0ci5jaGFyQ29kZUF0KGkpKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfYnVmKGJ1Ziwgc2VlZCkge1xuXHRpZihidWYubGVuZ3RoID4gMTAwMDApIHJldHVybiBjcmMzMl9idWZfOChidWYsIHNlZWQpO1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSAzO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHR9XG5cdHdoaWxlKGkgPCBMKzMpIEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdHJldHVybiBDIF4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1Zl84KGJ1Ziwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMSwgTCA9IGJ1Zi5sZW5ndGggLSA3O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdFx0QyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0XHRDID0gKEM+Pj44KSBeIFRbKENeYnVmW2krK10pJjB4RkZdO1xuXHRcdEMgPSAoQz4+PjgpIF4gVFsoQ15idWZbaSsrXSkmMHhGRl07XG5cdH1cblx0d2hpbGUoaSA8IEwrNykgQyA9IChDPj4+OCkgXiBUWyhDXmJ1ZltpKytdKSYweEZGXTtcblx0cmV0dXJuIEMgXiAtMTtcbn1cblxuZnVuY3Rpb24gY3JjMzJfc3RyKHN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTD1zdHIubGVuZ3RoLCBjLCBkOyBpIDwgTDspIHtcblx0XHRjID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcblx0XHRpZihjIDwgMHg4MCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gYykmMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDE5MnwoKGM+PjYpJjMxKSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDEyOHwoYyY2MykpKSYweEZGXTtcblx0XHR9IGVsc2UgaWYoYyA+PSAweEQ4MDAgJiYgYyA8IDB4RTAwMCkge1xuXHRcdFx0YyA9IChjJjEwMjMpKzY0OyBkID0gc3RyLmNoYXJDb2RlQXQoaSsrKSYxMDIzO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUWyhDIF4gKDI0MHwoKGM+PjgpJjcpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+MikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoZD4+NikmMTUpfCgoYyYzKTw8NCkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgxMjh8KGQmNjMpKSkmMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVFsoQyBeICgyMjR8KChjPj4xMikmMTUpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fCgoYz4+NikmNjMpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFRbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gQyBeIC0xO1xufVxuQ1JDMzIudGFibGUgPSBUO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJzdHIgPSBjcmMzMl9ic3RyO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJ1ZiA9IGNyYzMyX2J1Zjtcbi8vICRGbG93SWdub3JlXG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iLCJcbi8qKlxuKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuKiBAcGFyYW0gaXRlbVxuKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gc291cmNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcyk7XG59IiwiaW1wb3J0IHtzdHIgYXMgQ1JDMzJ9IGZyb20gJ2NyYy0zMic7XG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCc7XG5cbmNvbnN0IEVNUFRZX01FU1NBR0UgPSAnX19FTVBUWV9fJztcblxuY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgZGVsYXlUaW1lOiAxMDAwXG59O1xuXG4vKipcbiAqIFJlc29sdmUgdGFzayBpbmZvcm1hdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvbHZlciB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UmVzb2x2ZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyAjY2FjaGUgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyW119XG4gICAgICovXG4gICAgc3RhdGljICNjb21tb25NYW5hZ2VycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01hbmFnZXJbXX1cbiAgICAgKi9cbiAgICAjbWFuYWdlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHt7fX1cbiAgICAgKi9cbiAgICAjb3B0aW9ucztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICAjbnVtYmVyUmVxdWVzdHMgPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLiNvcHRpb25zID0gZXh0ZW5kKHt9LCBEZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25TdGFydFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uRW5kXG4gICAgICovXG4gICAgcmVzb2x2ZShvblN0YXJ0LCBvbkVuZCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VycyA9IHRoaXMuI2dldE1hbmFnZXJzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuI251bWJlclJlcXVlc3RzID0gMDtcblxuICAgICAgICAgICAgbWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gb25TdGFydChtYW5hZ2VyKSk7XG4gICAgICAgICAgICB0aGlzLiNyZXF1ZXN0KDApLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAhPT0gRU1QVFlfTUVTU0FHRSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXIgPSB0aGlzLiNudW1iZXJSZXF1ZXN0cztcbiAgICAgICAgICAgICAgICBtYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBvbkVuZChtYW5hZ2VyLCBudW1iZXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNudW1iZXJSZXF1ZXN0cyA9IC0xO1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICAjcmVxdWVzdCh0aW1lT3V0ID0gdGhpcy5vcHRpb25zLmRlbGF5VGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3JlYXRlUmVxdWVzdCh0aW1lT3V0KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRocm93ICBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9IC0gJHtyZXNwb25zZS5zdGF0dXNUZXh0fScgYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbigocmF3KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhdy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gdGhpcy5maW5kVGFzayhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTQWNjZXNzaWJpbGl0eUNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5tYW5hZ2VyLl91cGRhdGVUYXNrKHRhc2ssIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBSZXNvbHZlci4jdXBkYXRlQ29tbW9uTWFuYWdlcnMocmF3LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3JlcXVlc3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHJlc29sdmVyXG4gICAgICovXG4gICAgc3RhdGljICN1cGRhdGVDb21tb25NYW5hZ2VycyhyZXNwb25zZSwgcmVzb2x2ZXIpIHtcbiAgICAgICAgUmVzb2x2ZXIuI2NvbW1vbk1hbmFnZXJzLmZvckVhY2gobWFuYWdlciA9PiB7XG4gICAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gbWFuYWdlci5maW5kVGFzayhpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAodGFzayA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbW1vbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udGl0bGUgPSAnJzsvLyBtYW51YWwgdHJpZ2dlcmluZyB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5hZGRUYXNrcyhbaXRlbV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IG1hbmFnZXIuZmluZFRhc2soaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suaW5pdGlhdG9yTWFuYWdlciA9IHJlc29sdmVyLnRhc2tzLmZpbmQodmFsdWUgPT4gdmFsdWUuaWQgPT09IGl0ZW0uaWQpPy5tYW5hZ2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21tb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5fdXBkYXRlVGFzayh0YXNrLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lT3V0XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZSB8IG5ldmVyPn1cbiAgICAgKi9cbiAgICAjY3JlYXRlUmVxdWVzdCh0aW1lT3V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IHRoaXMudGFza3NJZDtcbiAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZWplY3QoRU1QVFlfTUVTU0FHRSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh0YXNrcyksIHRpbWVPdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKHRhc2tzKSA9PiB7XG4gICAgICAgICAgICArK3RoaXMuI251bWJlclJlcXVlc3RzO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMub3B0aW9ucy51cmwsIGV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGVuY29kZVVSSSh0YXNrcy5tYXAoKGl0ZW0pID0+IGB0W109JHtpdGVtfWApLmpvaW4oJyYnKSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0W119XG4gICAgICovXG4gICAgZ2V0IHRhc2tzKCkge1xuICAgICAgICBsZXQgdGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy4jbWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgbWFuYWdlci5nZXRUYXNrcygpLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21tb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJbXX1cbiAgICAgKi9cbiAgICBnZXQgdGFza3NJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLmlkKS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlID09PSBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybiB7VGFza0Fic3RyYWN0fGJvb2xlYW59XG4gICAgICovXG4gICAgZmluZFRhc2soaWQpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICAgICAgICByZXR1cm4gKHRhc2spID8gdGFzayA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNudW1iZXJSZXF1ZXN0cyA+IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJbXX1cbiAgICAgKi9cbiAgICAjZ2V0TWFuYWdlcnMoY29tbW9uID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNvbW1vbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNtYW5hZ2VycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcnMuZmlsdGVyKGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlci5vcHRpb25zLmNvbW1vbiA9PT0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlclxuICAgICAqIEByZXR1cm4ge1Jlc29sdmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBmYWN0b3J5KG1hbmFnZXIpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG9wdGlvbnMgPSBtYW5hZ2VyLm9wdGlvbnMucmVzb2x2ZXIsXG4gICAgICAgICAgICBoYXNoID0gQ1JDMzIob3B0aW9ucy51cmwpLFxuICAgICAgICAgICAgY2FjaGUgPSBSZXNvbHZlci4jY2FjaGUsXG4gICAgICAgICAgICBjb21tb25NYW5hZ2VycyA9IFJlc29sdmVyLiNjb21tb25NYW5hZ2VycztcblxuICAgICAgICBjb25zdCByZXNvbHZlciA9IGNhY2hlW2hhc2hdID0gKGNhY2hlW2hhc2hdIGluc3RhbmNlb2YgUmVzb2x2ZXIpID8gY2FjaGVbaGFzaF0gOiBuZXcgUmVzb2x2ZXIob3B0aW9ucyksXG4gICAgICAgICAgICBtYW5hZ2VycyA9IHJlc29sdmVyLiNnZXRNYW5hZ2VycygpO1xuXG4gICAgICAgIGlmIChtYW5hZ2Vycy5pbmRleE9mKG1hbmFnZXIpID09PSAtMSkge1xuICAgICAgICAgICAgbWFuYWdlcnMucHVzaChtYW5hZ2VyKTtcblxuICAgICAgICAgICAgaWYgKG1hbmFnZXIub3B0aW9ucy5jb21tb24pIHtcbiAgICAgICAgICAgICAgICBjb21tb25NYW5hZ2Vycy5wdXNoKG1hbmFnZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYW5hZ2VyLm93bmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1hbmFnZXIuRXZlbnRzLmRlc3Ryb3ksIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IG1hbmFnZXJzLmluZGV4T2YoZXZlbnQubWFuYWdlcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uTWFuYWdlcnMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5nZXRUYXNrcygpLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5pbml0aWF0b3JNYW5hZ2VyID09PSBtYW5hZ2Vyc1tpbmRleF0pLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kZXggPSBjb21tb25NYW5hZ2Vycy5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUgPT09IGV2ZW50Lm1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbk1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZXI7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtlYWNofSBmcm9tICcuL3V0aWxzL29iaic7XG4vKipcbiAqXG4gKi9cbiBjb25zdCBFdmVudCA9IHtcbiAgICByZWFkeTogJ3FtYzptYW5hZ2VyOnJlYWR5JyxcbiAgICBkZXN0cm95OiAncW1jOm1hbmFnZXI6ZGVzdHJveScsXG4gICAgc3RhdHVzQ2hhbmdlOiAncW1jOm1hbmFnZXI6c3RhdHVzQ2hhbmdlJyxcblxuICAgIGZldGNoU3RhcnQ6ICdxbWM6cmVzb2x2ZXI6c3RhcnQnLFxuICAgIGZldGNoRW5kOiAncW1jOnJlc29sdmVyOmVuZCcsXG5cbn07XG5cbkV2ZW50LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBldmVudHMgPSBbXTtcbiAgZWFjaCh0aGlzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgfSk7XG4gICAgcmV0dXJuIGV2ZW50cy5qb2luKCcgJyk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50OyIsIlxuY29uc3QgU3RhdHVzZXNMaXN0ID0ge1xuICAgIElOSVQ6IC0xLFxuICAgIFdBSVQ6IDAsXG4gICAgRVhFQzogMSxcbiAgICBET05FOiAyLFxuICAgIEVSUk9SOiAzLFxuICAgIERFTEVURUQ6IDk5LFxufTtcblxuU3RhdHVzZXNMaXN0LlNFVF9WSVNJQkxFID0gW1xuICAgIFN0YXR1c2VzTGlzdC5XQUlULCBTdGF0dXNlc0xpc3QuRVhFQywgU3RhdHVzZXNMaXN0LkVSUk9SLCBTdGF0dXNlc0xpc3QuRE9ORVxuXTtcblxuU3RhdHVzZXNMaXN0LlNFVF9DT01QTEVURSA9IFtcbiAgICBTdGF0dXNlc0xpc3QuRE9ORSwgU3RhdHVzZXNMaXN0LkVSUk9SLCBTdGF0dXNlc0xpc3QuREVMRVRFRFxuXTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXl9IHNldFxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3RhdHVzZXNMaXN0LmlzID0gZnVuY3Rpb24gKHNldCwgc3RhdHVzKSB7XG4gICAgcmV0dXJuIHNldC5pbmRleE9mKHN0YXR1cykgPiAtMTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1c2VzTGlzdDtcbiIsIi8qKlxuICogTWFuYWdlciBFdmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudCB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgICNtYW5hZ2VyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCB0eXBlLCBwcm9wcykge1xuICAgICAgICBzdXBlcih0eXBlLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuI21hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge01hbmFnZXJ9XG4gICAgICovXG4gICAgZ2V0IG1hbmFnZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI21hbmFnZXI7XG4gICAgfVxufTtcbiIsImltcG9ydCBTdGF0dXNlcyBmcm9tICcuL3N0YXR1c2VzTGlzdCc7XG5pbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IFN0YXR1c2VzTGlzdCBmcm9tICcuL3N0YXR1c2VzTGlzdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5cbi8qKlxuICpAaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tBYnN0cmFjdCBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgICNtYW5hZ2VyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaWQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjb21tb24gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgIGluaXRpYXRvck1hbmFnZXI7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHByb2dyZXNzID0gMDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGV4dCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aXRsZSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0dXMgPSBTdGF0dXNlcy5JTklUO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI2VsZW1lbnQgPSBudWxsO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQsIG1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9IHBhcnNlSW50KGlkKTtcbiAgICAgICAgdGhpcy4jbWFuYWdlciA9IG1hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNyZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLiNlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiNlbGVtZW50ID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3dyYXBwZXInLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICdkYXRhLXRhc2staWQnOiB0aGlzLmlkXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgZWxUYXNrID0gdGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogdGhpcy5fYnVpbGRDc3NDbGFzcygpfSk7XG4gICAgICAgIHRoaXMuX3JlbmRlckNoaWxkKGVsVGFzayk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZWxUYXNrKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBjaGlsZCBpbnN0YW5jZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3JlbmRlckNoaWxkKGVsV3JhcHBlcikge1xuXG4gICAgfVxuXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTTWV0aG9kQ2FuQmVTdGF0aWNcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2J1aWxkQ3NzQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiBbJ3Rhc2staXRlbSddXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljICNjc3NMaXN0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICh0aGlzLl9jc3NMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3NzTGlzdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jc3NMaXN0ID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgc3RhdHVzZXNMaXN0S2V5IGluIFN0YXR1c2VzTGlzdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBTdGF0dXNlc0xpc3Rbc3RhdHVzZXNMaXN0S2V5XSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jc3NMaXN0W1N0YXR1c2VzTGlzdFtzdGF0dXNlc0xpc3RLZXldXSA9IFVJQ29tcG9uZW50LmdldENsYXNzTmFtZSgnc3RhdHVzLScgKyBzdGF0dXNlc0xpc3RLZXkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzTGlzdDtcbiAgICB9O1xuXG5cbiAgICBjc3NDbGFzc1N3aXRjaCgpIHtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgIGxldCBjc3NDbGFzcywgc2VhcmNoQ2xhc3M7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1hbmFnZXIub3B0aW9ucy50aGVtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGxldCB0aGVtZSA9IHRoaXMubWFuYWdlci5vcHRpb25zLnRoZW1lW3RoaXMuc3RhdHVzXSB8fCBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgndGhlbWUtJyArIHRoZW1lKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDbGFzcyA9IFRhc2tBYnN0cmFjdC5nZXRDbGFzc05hbWUoJ3RoZW1lJyk7XG4gICAgICAgICAgICAgICAgRG9tLnN3aXRjaENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzLCBzZWFyY2hDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3NzQ2xhc3MgPSBUYXNrQWJzdHJhY3QuI2Nzc0xpc3QoKVt0aGlzLnN0YXR1c107XG4gICAgICAgIHNlYXJjaENsYXNzID0gVGFza0Fic3RyYWN0LmdldENsYXNzTmFtZSgnc3RhdHVzJyk7XG4gICAgICAgIERvbS5zd2l0Y2hDbGFzcyhlbGVtZW50LCBjc3NDbGFzcywgc2VhcmNoQ2xhc3MpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudHNcbiAgICAgKi9cbiAgICByZWZyZXNoKHJlc3BvbnNlLCBlbGVtZW50cyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaEVsZW1lbnRzKGVsZW1lbnRzLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRQcm9ncmVzc1RvdGFsKHByb3BlcnR5ID0gJ3Byb2dyZXNzJykge1xuICAgICAgICBsZXQgdmFsdWUgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZS5yZWR1Y2UoKGEsIGMpID0+IGEgKyBjKSAvIHZhbHVlLmxlbmd0aCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIG9sZFRhc2tcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX3JlZnJlc2hFbGVtZW50cyhlbGVtZW50cywgb2xkVGFzaykge1xuICAgICAgICBjb25zdCBvcHRpb25zUGFydHMgPSB0aGlzLm9wdGlvbnMucGFydHM7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudHMpLmZvckVhY2goKGVsZW1lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvcHRpb25zUGFydHNbZWxlbWVudE5hbWVdLFxuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZWZyZXNoQmFzaWNQcm9wZXJ0eSc7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJy4nKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IFttLCBwXSA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IG0gKyBwWzBdLnRvVXBwZXJDYXNlKCkgKyBwLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodHlwZW9mIHRoaXNbcHJvcGVydHldICE9PSBcInVuZGVmaW5lZFwiKSA/IHRoaXNbcHJvcGVydHldIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgPSAodHlwZW9mIG9sZFRhc2tbcHJvcGVydHldICE9PSBcInVuZGVmaW5lZFwiKSA/IG9sZFRhc2tbcHJvcGVydHldIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gJ18nICsgbWV0aG9kO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1ttZXRob2RdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kXS5jYWxsKHRoaXMsIGVsZW1lbnRzW2VsZW1lbnROYW1lXSwgdmFsdWUsIHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBub2luc3BlY3Rpb24gSlNNZXRob2RDYW5CZVN0YXRpY1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfEFycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVmcmVzaEJhc2ljUHJvcGVydHkoZWxlbWVudCwgdmFsdWUsIHByb3BlcnR5KSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBUYXNrQWJzdHJhY3QuZ2V0Q2xhc3NOYW1lKCdsaXN0LScgKyBwcm9wZXJ0eSk7XG4gICAgICAgICAgICBsZXQgZWxMaXN0ID0gRG9tLiQoJ3VsLicgKyBjbGFzc05hbWUsIGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAoZWxMaXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZWxMaXN0ID0gdGhpcy5jcmVhdGVFbCgndWwnLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChlbExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsTGkgPSBEb20uJChgbGk6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSlgLCBlbExpc3QpO1xuICAgICAgICAgICAgICAgIGlmIChlbExpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsTGlzdC5hcHBlbmQoRG9tLmNyZWF0ZUVsKCdsaScsIHt9LCB7fSwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsTGkuaW5uZXJUZXh0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBlbExpLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYW5hZ2VyfVxuICAgICAqL1xuICAgIGdldCBtYW5hZ2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbWFuYWdlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtEZWZhdWx0cy50YXNrT3B0aW9uc3x7fX1cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5vcHRpb25zLnRhc2tPcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgc3RhdHVzVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5vcHRpb25zLnN0YXR1c1RleHRbdGhpcy5zdGF0dXNdIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzVGV4dCArIFwiIFwiICsgdGhpcy5nZXRUaXRsZSgpO1xuICAgIH1cblxuXG59IiwiLyoqXG4gKiBAZmlsZSBndWlkLmpzXG4gKiBAbW9kdWxlIGd1aWRcbiAqL1xuXG4vLyBEZWZhdWx0IHZhbHVlIGZvciBHVUlEcy4gVGhpcyBhbGxvd3MgdXMgdG8gcmVzZXQgdGhlIEdVSUQgY291bnRlciBpbiB0ZXN0cy5cbi8vXG4vLyBUaGUgaW5pdGlhbCBHVUlEIGlzIDMgYmVjYXVzZSBzb21lIHVzZXJzIGhhdmUgY29tZSB0byByZWx5IG9uIHRoZSBmaXJzdFxuLy8gZGVmYXVsdCBwbGF5ZXIgSUQgZW5kaW5nIHVwIGFzIGB2anNfdmlkZW9fM2AuXG4vL1xuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9qcy92aWRlby5qcy9wdWxsLzYyMTZcbmNvbnN0IF9pbml0aWFsR3VpZCA9IDM7XG5cbi8qKlxuICogVW5pcXVlIElEIGZvciBhbiBlbGVtZW50IG9yIGZ1bmN0aW9uXG4gKlxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IF9ndWlkID0gX2luaXRpYWxHdWlkO1xuXG4vKipcbiAqIEdldCBhIHVuaXF1ZSBhdXRvLWluY3JlbWVudGluZyBJRCBieSBudW1iZXIgdGhhdCBoYXMgbm90IGJlZW4gcmV0dXJuZWQgYmVmb3JlLlxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqICAgICAgICAgQSBuZXcgdW5pcXVlIElELlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV3R1VJRCgpIHtcbiAgcmV0dXJuIF9ndWlkKys7XG59XG5cbi8qKlxuICogUmVzZXQgdGhlIHVuaXF1ZSBhdXRvLWluY3JlbWVudGluZyBJRCBmb3IgdGVzdGluZyBvbmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHdWlkSW5UZXN0c09ubHkoKSB7XG4gIF9ndWlkID0gX2luaXRpYWxHdWlkO1xufVxuIiwiLyoqXG4gKiBAZmlsZSBkb20tZGF0YS5qc1xuICogQG1vZHVsZSBkb20tZGF0YVxuICovXG5cblxuaW1wb3J0ICogYXMgR3VpZCBmcm9tICcuL2d1aWQuanMnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxubGV0IEZha2VXZWFrTWFwO1xuXG5pZiAoIXdpbmRvdy5XZWFrTWFwKSB7XG4gIEZha2VXZWFrTWFwID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy52ZGF0YSA9ICd2ZGF0YScgKyBNYXRoLmZsb29yKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgfHwgRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdIHx8IEd1aWQubmV3R1VJRCgpO1xuXG4gICAgICBpZiAoIWtleVt0aGlzLnZkYXRhXSkge1xuICAgICAgICBrZXlbdGhpcy52ZGF0YV0gPSBhY2Nlc3M7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YVthY2Nlc3NdID0gdmFsdWU7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldChrZXkpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXTtcblxuICAgICAgLy8gd2UgaGF2ZSBkYXRhLCByZXR1cm4gaXRcbiAgICAgIGlmIChhY2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVthY2Nlc3NdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGhhcyhrZXkpIHtcbiAgICAgIGNvbnN0IGFjY2VzcyA9IGtleVt0aGlzLnZkYXRhXTtcblxuICAgICAgcmV0dXJuIGFjY2VzcyBpbiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgY29uc3QgYWNjZXNzID0ga2V5W3RoaXMudmRhdGFdO1xuXG4gICAgICBpZiAoYWNjZXNzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbYWNjZXNzXTtcbiAgICAgICAgZGVsZXRlIGtleVt0aGlzLnZkYXRhXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogRWxlbWVudCBEYXRhIFN0b3JlLlxuICpcbiAqIEFsbG93cyBmb3IgYmluZGluZyBkYXRhIHRvIGFuIGVsZW1lbnQgd2l0aG91dCBwdXR0aW5nIGl0IGRpcmVjdGx5IG9uIHRoZVxuICogZWxlbWVudC4gRXguIEV2ZW50IGxpc3RlbmVycyBhcmUgc3RvcmVkIGhlcmUuXG4gKiAoYWxzbyBmcm9tIGpzbmluamEuY29tLCBzbGlnaHRseSBtb2RpZmllZCBhbmQgdXBkYXRlZCBmb3IgY2xvc3VyZSBjb21waWxlcilcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgd2luZG93LldlYWtNYXAgPyBuZXcgV2Vha01hcCgpIDogbmV3IEZha2VXZWFrTWFwKCk7XG4iLCJpbXBvcnQgKiBhcyBEb20gZnJvbSAnLi91dGlscy9kb20nO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWxzL2V4dGVuZCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi91SUNvbXBvbmVudCc7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgbGFiZWwgPSAnJztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cblxuICAgICAqL1xuICAgIGNsYXNzTmFtZSA9IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHNpemUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7UHJvZ3Jlc3NCYXJbXX1cbiAgICAgKi9cbiAgICAjYmFycyA9IFtdO1xuXG4gICAgYmFyT3B0aW9ucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RWxlbWVudHxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjbGFiZWxFbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudHxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTaG93R3JhZGllbnQgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHN0YXRpYyAkY2xhc3NQcmVmaXggPSBudWxsO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIC4uLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuI2VsO1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3NpemUtJyArIHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1Nob3dHcmFkaWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ25vLWdyYWRpZW50Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbCA9IERvbS5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwge30sXG4gICAgICAgICAgICBEb20uY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbXMnKX0pXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2VsID0gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxFbGVtZW50fVxuICAgICAqL1xuICAgICNnZXRMYWJlbEVsKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNsYWJlbEVsO1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jbGFiZWxFbCA9IGVsID0gRG9tLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogUHJvZ3Jlc3MuZ2V0Q2xhc3NOYW1lKCdwcm9ncmVzcy1sYWJlbCcpfSwge30pXG4gICAgICAgIHRoaXMuI2VsLmFwcGVuZChlbCk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSB2YWx1ZVxuICAgICAqL1xuICAgIHNldFByb2dyZXNzKHZhbHVlKSB7XG5cbiAgICAgICAgY29uc3QgYmFycyA9IHRoaXMuI2JhcnMsXG4gICAgICAgICAgICBlbCA9IHRoaXMuI2VsLFxuICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpID8gW3ZhbHVlXSA6IHZhbHVlO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJhcnNbaW5kZXhdIGluc3RhbmNlb2YgUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICBiYXJzW2luZGV4XS5wcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXJzW2luZGV4XSA9IG5ldyBQcm9ncmVzc0Jhcih0aGlzLmJhck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLicgKyBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ3Byb2dyZXNzLWl0ZW1zJykpLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgRG9tLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFByb2dyZXNzLmdldENsYXNzTmFtZSgncHJvZ3Jlc3MtaXRlbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAoMTAwIC8gbGVuZ3RoKS50b0ZpeGVkKDMpICsgJyUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgfSwge30sIGJhcnNbaW5kZXhdLnJlbmRlcigpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzVGhvQ2hlY2sgPSBQcm9ncmVzcy5nZXRDbGFzc05hbWUoJ21vcmUtdGhhbi10aHJlZScpO1xuICAgICAgICBpZiAoRG9tLmhhc0NsYXNzKGVsLCBjbGFzc1Rob0NoZWNrKSA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCBjbGFzc1Rob0NoZWNrKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxhYmVsXG4gICAgICovXG4gICAgc2V0TGFiZWwobGFiZWwpIHtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLiNnZXRMYWJlbEVsKCkuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNsYXNzTmFtZSA9ICdwcm9ncmVzcy1iYXInO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgICNwcm9ncmVzcyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfGJvb2xlYW59XG4gICAgICovXG4gICAgbGFiZWxUZXh0ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1pbiA9IDA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4ID0gMTAwO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIC4uLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbFxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl8U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5sYWJlbFRleHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2goRG9tLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogJ3NyLW9ubHknLCBjc3M6IHt3aWR0aDogMH19LCB7fSwgdGhpcy5sYWJlbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMubGFiZWxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2VsZW1lbnQgPSBlbCA9IERvbS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBQcm9ncmVzcy5nZXRDbGFzc05hbWUodGhpcy5jbGFzc05hbWUpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIixcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5wcm9ncmVzcyxcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbWluJzogdGhpcy5taW4sXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1heCc6IHRoaXMubWF4XG4gICAgICAgIH0sIGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9ICh0aGlzLmxhYmVsVGV4dCkgPyB0aGlzLmxhYmVsVGV4dCA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm9ncmVzc30lICR7bGFiZWx9YFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgcHJvZ3Jlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9ncmVzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgcHJvZ3Jlc3ModmFsdWUpIHtcbiAgICAgICAgdGhpcy4jcHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCB2YWx1ZSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gdGhpcy5sYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt2YWx1ZX0lYFxuXG4gICAgfVxufSIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uVCBleHRlbmRzIFVJQ29tcG9uZW50e1xuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAqL1xuICAgICNpY29uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICovXG4gICAgI3NpemUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd9IGljb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSBzaXplXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWNvbiA9IGZhbHNlLCBzaXplID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jaWNvbiA9IGljb247XG4gICAgICAgIHRoaXMuI3NpemUgPSBzaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudCA9IHRoaXMuY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiB0aGlzLiNidWlsZENsYXNzTmFtZSgpfSwge30sXG4gICAgICAgICAgICBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7fSwge30sIFsnczEnLCAnczInLCAnczMnXS5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEb20uY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICAjYnVpbGRDbGFzc05hbWUoKSB7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdpY29uLXQnLFxuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuI2ljb24pIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLiNpY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAodGhpcy4jc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NpemUtJyt0aGlzLiNzaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgaWNvbih2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy4jaWNvbjtcbiAgICAgICAgICAgIGlmIChpY29uICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy4jZWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3MoZWwsIGljb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNpY29uID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgc2l6ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlICA9IEljb25ULmdldENsYXNzTmFtZSgnc2l6ZS0nK3ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLiNzaXplO1xuICAgICAgICAgICAgaWYgKHNpemUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhlbCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIERvbS5hZGRDbGFzcyhlbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3NpemUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0IGNvbG9yKHZhbHVlKSB7XG4gICAgICAgIERvbS4kJCgnc3BhbltjbGFzc149c10nLCB0aGlzLiNlbGVtZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cblxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0IEljb25UIGZyb20gJy4vaWNvbnQnO1xuXG4vKipcbiAqXG4gKiBAdHlwZSB7e2ljb25Ib3Zlck5hbWU6IG51bGwsIGhhbmRsZXI6IG51bGwsIHNpemU6IG51bGwsIGRhdGE6IHt9LCBoaWRkZW5MYWJlbDogc3RyaW5nLCBpY29uTmFtZTogbnVsbCwgYW5pbWF0ZWRDbGljazogYm9vbGVhbiwgaGFuZGxlclRpbW91dERlbGF5OiBudW1iZXIsIGljb25TaXplOiBudWxsLCBkaXNhYmxlZDogYm9vbGVhbiwgbGFiZWw6IGJvb2xlYW4sIHRhZ05hbWU6IHN0cmluZ319XG4gKi9cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGFnTmFtZTogJ2J1dHRvbicsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgaGFuZGxlcjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGFuZGxlclRpbW91dERlbGF5OiA1MDAsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIGxhYmVsOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgaGlkZGVuTGFiZWw6ICcnLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc2l6ZTogbnVsbCxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgaWNvbk5hbWU6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgaWNvbkhvdmVyTmFtZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBpY29uU2l6ZTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIGFuaW1hdGVkQ2xpY2s6IHRydWUsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIGRhdGE6IHt9XG5cbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICAjZWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICAjb3B0aW9ucyA9IERlZmF1bHRzO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0ljb25UfVxuICAgICAqL1xuICAgICNpY29uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwgRGVmYXVsdHMsIG9wdGlvbnMpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBbXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5pY29uTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuaWNvbjtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChpLnJlbmRlcigpKTtcbiAgICAgICAgICAgIGkuaWNvbiA9IG9wdGlvbnMuaWNvbk5hbWU7XG4gICAgICAgICAgICBpLnNpemUgPSBvcHRpb25zLmljb25TaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucHVzaChEb20uY3JlYXRlRWwoJ3AnLCB7fSwge30sIG9wdGlvbnMubGFiZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhpZGRlbkxhYmVsKSB7XG4gICAgICAgICAgICBjb250ZW50LnB1c2godGhpcy5jcmVhdGVFbCgncCcsIHtjbGFzc05hbWU6ICdidXR0b24taGlkZGVuJ30sIHt9LCBvcHRpb25zLmhpZGRlbkxhYmVsKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRlZENsaWNrKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wID0gRG9tLmNyZWF0ZUVsKCdwJywge2NsYXNzTmFtZTogJ2Ryb3AnfSk7XG4gICAgICAgICAgICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQ2xhc3ModGhpcywgJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGVudC5wdXNoKGRyb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwgPSB0aGlzLiNlbGVtZW50ID0gdGhpcy5jcmVhdGVFbChvcHRpb25zLnRhZ05hbWUsIHtjbGFzc05hbWU6IEJ1dHRvbi4jYnVpbGRDbGFzc05hbWUob3B0aW9ucyl9LCB7fSwgY29udGVudCk7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IG9wdGlvbnMuZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuI2FkZEhhbmRsZXJzKGVsLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gZWxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdHN9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgI2J1aWxkQ2xhc3NOYW1lKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFsnYnV0dG9uJ107XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NpemUtJyArIG9wdGlvbnMuc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oaWRkZW5MYWJlbCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2hhcy1oaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqL1xuICAgIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuI2VsZW1lbnQuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tLnRvZ2dsZUNsYXNzKHRoaXMuI2VsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNvcHRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7SWNvblR9XG4gICAgICovXG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIGxldCBpY29uID0gdGhpcy4jaWNvbjtcbiAgICAgICAgaWYgKGljb24gaW5zdGFuY2VvZiBJY29uVCkge1xuICAgICAgICAgICAgcmV0dXJuIGljb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuI2ljb24gPSBuZXcgSWNvblQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgI2FkZEhhbmRsZXJzKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZWRDbGljaykge1xuICAgICAgICAgICAgICAgIEJ1dHRvbi4jYW5pbWF0ZWRDbGljayhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhbmRsZXJUaW1vdXREZWxheSA+IDApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0aW9ucy5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpLCBvcHRpb25zLmhhbmRsZXJUaW1vdXREZWxheSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zLmhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5pY29uSG92ZXJOYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlzYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5pY29uID0gb3B0aW9ucy5pY29uSG92ZXJOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5pY29uID0gb3B0aW9ucy5pY29uTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgI2FuaW1hdGVkQ2xpY2soZWxlbWVudCkge1xuXG4gICAgICAgIGNvbnN0IGRyb3AgPSBEb20uJCgnLmRyb3AnLCBlbGVtZW50KTtcbiAgICAgICAgaWYgKGRyb3ApIHtcblxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IERvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgeCA9IGV2ZW50LnBhZ2VYIC0gcmVjdC53aWR0aCAvIDIgLSByZWN0LmxlZnQgLSB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICB5ID0gZXZlbnQucGFnZVkgLSByZWN0LmhlaWdodCAvIDIgLSByZWN0LnRvcCAtIHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgICBkcm9wLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICAgICAgZHJvcC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG5cbiAgICAgICAgICAgIERvbS5hZGRDbGFzcyhkcm9wLCAnYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuQnV0dG9uLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cblxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IGV4dGVuZCBmcm9tIFwiLi91dGlscy9leHRlbmRcIjtcblxuXG4vKipcbiAqXG4gKiBAdHlwZSB7e3NlbGVjdEljb246IG51bGwsIHNjYWxlZDogYm9vbGVhbiwgYXJyYW5nZTogYm9vbGVhbiwgc2VsZWN0YWJsZTogYm9vbGVhbn19XG4gKi9cbmNvbnN0IERlZmF1bHRzID0ge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbi5EZWZhdWx0c1tdfVxuICAgICAqL1xuICAgIGJ1dHRvbnM6IFtdLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgYXJyYW5nZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzY2FsZWQ6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHNlbGVjdEljb246IG51bGxcblxufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25zR3JvdXAgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QnV0dG9uW119XG4gICAgICovXG4gICAgYnV0dG9ucyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RGVmYXVsdHN9XG4gICAgICovXG4gICAgI29wdGlvbnMgPSBEZWZhdWx0cztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAqL1xuICAgICNlbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0c30gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IFVJQ29tcG9uZW50LnJlbW92ZU9wdGlvbnNQdG9wZXJ0eSgnYnV0dG9ucycsIG9wdGlvbnMsIEFycmF5KTtcbiAgICAgICAgdGhpcy4jb3B0aW9ucyA9IGV4dGVuZCh7fSwgRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBidXR0b25zLm1hcCgoY29uZmlnKSA9PiBuZXcgQnV0dG9uKGNvbmZpZykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiNlbGVtZW50O1xuXG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2VsZW1lbnQgPSBlbCA9IHRoaXMuY3JlYXRlRWwoJ2RpdicsIHtjbGFzc05hbWU6IEJ1dHRvbnNHcm91cC4jYnVpbGRDbGFzc05hbWUodGhpcy5vcHRpb25zKX0sIHt9LFxuICAgICAgICAgICAgdGhpcy5idXR0b25zLm1hcCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ0bi5yZW5kZXIoKVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy4jYmluZFNlbGVjdEV2ZW50cyhlbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RlZmF1bHRzfSBvcHRpb25zXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljICNidWlsZENsYXNzTmFtZShvcHRpb25zKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFsnYnV0dG9uLWdyb3VwJ107XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYXJyYW5nZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2FycmFuZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNjYWxlZCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ3NjYWxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtEZWZhdWx0c31cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAgICovXG4gICAgc2V0IGFycmFuZ2UodmFsdWUpIHtcblxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBCdXR0b25zR3JvdXAuZ2V0Q2xhc3NOYW1lKCdhcnJhbmdlJyk7XG5cbiAgICAgICAgbGV0IGVsID0gdGhpcy4jZWxlbWVudCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLiNvcHRpb25zO1xuXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKERvbS5oYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tLmFkZENsYXNzKGVsLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuYXJyYW5nZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgI2JpbmRTZWxlY3RFdmVudHMoZWxlbWVudCkge1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCggJy4nICsgQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnYnV0dG9uJykpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuYnV0dG9ucy5maW5kKGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuLmVsZW1lbnQgPT09IGVsZW1lbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiQkKCcuYnV0dG9uLnNlbGVjdGVkJywgZXZlbnQudGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIERvbS5zZXRBdHRyaWJ1dGUoZWwsICdkYXRhLWdyb3VwLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUNsYXNzKGVsLCAgQnV0dG9uc0dyb3VwLmdldENsYXNzTmFtZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCQoJy5idXR0b25bZGF0YS1ncm91cC1zZWxlY3RlZF0nLCBldmVudC50YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgRG9tLnJlbW92ZUF0dHJpYnV0ZShlbCwgJ2RhdGEtZ3JvdXAtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBEb20uYWRkQ2xhc3MoZWwsIEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ3NlbGVjdGVkJykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnV0dG9ufG51bWJlcn0gYnV0dG9uXG4gICAgICovXG4gICAgc2V0IHNlbGVjdGVkKGJ1dHRvbikge1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEJ1dHRvbnNHcm91cC5nZXRDbGFzc05hbWUoJ3NlbGVjdGVkJyksXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYnV0dG9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBidXR0b24gPSB0aGlzLmJ1dHRvbnNbYnV0dG9uXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidXR0b24gaW5zdGFuY2VvZiBCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICBEb20ucmVtb3ZlQXR0cmlidXRlKGJ0bi5lbGVtZW50LCAnZGF0YS1ncm91cC1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVDbGFzcyhidG4uZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRG9tLmFkZENsYXNzKGJ1dHRvbi5lbGVtZW50LCBjbGFzc05hbWUpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zZWxlY3RJY29uKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmljb24uaWNvbiA9IG9wdGlvbnMuc2VsZWN0SWNvbjtcbiAgICAgICAgICAgICAgICBidXR0b24ub3B0aW9ucy5pY29uTmFtZSA9IG9wdGlvbnMuc2VsZWN0SWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cblxuXG5cbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tICcuL3VJQ29tcG9uZW50JztcbmltcG9ydCAqIGFzIERvbSBmcm9tICcuL3V0aWxzL2RvbSc7XG5pbXBvcnQgSWNvblQgZnJvbSAnLi9pY29udCc7XG5pbXBvcnQgQnV0dG9uc0dyb3VwIGZyb20gJy4vYnV0dG9uc0dyb3VwJztcbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1N0YXR1cyBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50W119XG4gICAgICovXG4gICAgI2VsZW1lbnRzID0gW107XG5cbiAgICBtYXAgPSB7XG4gICAgICAgIGljb25zOiBbXSxcbiAgICAgICAgYWN0aW9uczogW11cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Rhc2tBYnN0cmFjdH1cbiAgICAgKi9cbiAgICAjdGFzaztcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0ljb25UfVxuICAgICAqL1xuICAgICNpY29uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgI3RleHQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0J1dHRvbnNHcm91cH1cbiAgICAgKi9cbiAgICAjYkdyb3VwID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1hcEljb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBtYXBJY29ucywgYWN0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiN0YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy5tYXAuaWNvbnMgPSBtYXBJY29ucztcbiAgICAgICAgdGhpcy5tYXAuYWN0aW9ucyA9IGFjdGlvbnM7XG5cbiAgICAgICAgdGhpcy4jaWNvbiA9IG5ldyBJY29uVCgnbm9uZScsICdiaWcnKTtcbiAgICAgICAgdGhpcy4jdGV4dCA9IHRoaXMuY3JlYXRlRWwoJ3NwYW4nLCB7Y2xhc3NOYW1lOiAnc3RhdHVzLXRleHQnfSk7XG5cbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgIGV4dGVuZChpdGVtLCB7ZGF0YToge3Rhc2s6IHRhc2t9fSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jYkdyb3VwID0gbmV3IEJ1dHRvbnNHcm91cCh7YnV0dG9uczogYWN0aW9ucywgYXJyYW5nZTogZmFsc2UsIHNjYWxlZDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBlbHMgPSB0aGlzLiNlbGVtZW50cztcblxuICAgICAgICBpZiAoZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBlbHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzLnB1c2godGhpcy4jaWNvbi5yZW5kZXIoKSk7XG4gICAgICAgIGVscy5wdXNoKHRoaXMuI3RleHQpO1xuICAgICAgICBlbHMucHVzaCh0aGlzLiNiR3JvdXAucmVuZGVyKCkpO1xuXG4gICAgICAgIHJldHVybiBlbHM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAgICAgKi9cbiAgICByZWZyZXNoKHN0YXR1cykge1xuICAgICAgICB0aGlzLiN0ZXh0LmlubmVySFRNTCA9IHRoaXMuI3Rhc2suc3RhdHVzVGV4dDtcblxuICAgICAgICB0aGlzLiNpY29uLmljb24gPSB0aGlzLm1hcC5pY29uc1tzdGF0dXNdO1xuXG4gICAgICAgIHRoaXMuI2JHcm91cC5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGVuYWJsZWRXaXRoID0gYnV0dG9uLm9wdGlvbnM/LmVuYWJsZWRXaXRoU3RhdHVzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmFibGVkV2l0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZFdpdGggPSBlbmFibGVkV2l0aC5jYWxsKGJ1dHRvbiwgc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVuYWJsZWRXaXRoKSkge1xuICAgICAgICAgICAgICAgIGlmIChidXR0b24ub3B0aW9ucy5lbmFibGVkV2l0aFN0YXR1cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBidXR0b24ub3B0aW9ucy5lbmFibGVkV2l0aFN0YXR1cy5pbmRleE9mKHN0YXR1cykgPT09IC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZW5hYmxlZFdpdGggPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZW5hYmxlZFdpdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxuXG59XG4iLCJpbXBvcnQgVGFza0Fic3RyYWN0IGZyb20gXCIuL3Rhc2tBYnN0cmFjdFwiO1xuaW1wb3J0IERvbURhdGEgZnJvbSAnLi91dGlscy9kb20tZGF0YSc7XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9wcm9ncmVzcyc7XG5pbXBvcnQgU3RhdHVzZXNMaXN0IGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBUYXNrU3RhdHVzIGZyb20gJy4vdGFza1N0YXR1cyc7XG5cbmNvbnN0IERlZmF1bHRzID0ge1xuICAgIGljb25QbGFjZW1lbnQ6ICdkZWZhdWx0JyxcbiAgICBwYXJ0czoge1xuICAgICAgICBzdGF0dXM6ICdyZWZyZXNoLnN0YXR1cycsXG4gICAgICAgIHRpdGxlOiAndGl0bGUnLFxuICAgICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICAgIGVycm9yOiAnZXJyb3JzJyxcbiAgICAgICAgJ3Byb2dyZXNzLXdyYXBwZXInOiAncmVmcmVzaC5wcm9ncmVzcycsXG4gICAgfSxcbiAgICBwcm9ncmVzczoge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHNpemU6ICcnLFxuICAgICAgICBiYXJPcHRpb25zOiB7XG4gICAgICAgICAgICBsYWJlbFRleHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbnM6IFtdXG59O1xuXG5jb25zdCBpY29uTWFwID0ge307XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5XQUlUXSA9ICdjbG9jayc7XG5pY29uTWFwW1N0YXR1c2VzTGlzdC5FWEVDXSA9ICdwbGF5Jztcbmljb25NYXBbU3RhdHVzZXNMaXN0LkVSUk9SXSA9ICd3YXJuaW5nJztcbmljb25NYXBbU3RhdHVzZXNMaXN0LkRPTkVdID0gJ2NoZWNrZWQnO1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayBleHRlbmRzIFRhc2tBYnN0cmFjdCB7XG5cblxuICAgICNlbGVtZW50cyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBfcmVuZGVyQ2hpbGQoZWxXcmFwcGVyKSB7XG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy4jZWxlbWVudHMsXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgZWxEZXRhaWwgPSBlbFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ2RldGFpbCd9KSksXG4gICAgICAgICAgICBlbFN0YXR1c1dyYXBwZXIgPSBlbFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbCgnZGl2Jywge2NsYXNzTmFtZTogJ3N0YXR1cy13cmFwcGVyJ30pKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLnBhcnRzKS5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICBsZXQgb3duZXIgPSBlbERldGFpbCxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAocGFydCA9PT0gJ3Byb2dyZXNzLXdyYXBwZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IFByb2dyZXNzKG9wdGlvbnMucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zWydwcm9ncmVzcy13cmFwcGVyJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnc3RhdHVzJykge1xuICAgICAgICAgICAgICAgIG93bmVyID0gZWxTdGF0dXNXcmFwcGVyO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBUYXNrU3RhdHVzKHRoaXMsIGljb25NYXAsIG9wdGlvbnMuYWN0aW9ucylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudHNbcGFydF0gPSBvd25lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiBwYXJ0fSwge30pKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiB0eXBlb2YgY29tcG9uZW50Py5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gW2NvbnRlbnRdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT4gZWxlbWVudHNbcGFydF0uYXBwZW5kKGNvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICBUYXNrLiNzZXRDb21wb25lbnQoZWxlbWVudHNbcGFydF0sIGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByZWZyZXNoKHJlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyLnJlZnJlc2gocmVzcG9uc2UsIHRoaXMuI2VsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgX2J1aWxkQ3NzQ2xhc3MoKSB7XG5cbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gc3VwZXIuX2J1aWxkQ3NzQ2xhc3MoKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmljb25QbGFjZW1lbnQgIT09IERlZmF1bHRzLmljb25QbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKCd0YXNrLWl0ZW0tJyArIHRoaXMub3B0aW9ucy5pY29uUGxhY2VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc0xpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9Y29tcG9uZW50XG4gICAgICovXG4gICAgc3RhdGljICNzZXRDb21wb25lbnQoZWwsIGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoIURvbURhdGEuaGFzKGVsKSkge1xuICAgICAgICAgICAgRG9tRGF0YS5zZXQoZWwsIHt9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gRG9tRGF0YS5nZXQoZWwpO1xuICAgICAgICBkYXRhLmNvbXBvbmV0ID0gY29tcG9uZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgc3RhdGljICNnZXRDb21wb25lbnQoZWwpIHtcbiAgICAgICAgaWYgKERvbURhdGEuaGFzKGVsKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IERvbURhdGEuZ2V0KGVsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5jb21wb25ldCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmNvbXBvbmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge051bWJlcnxOdW1iZXJbXX12YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3JlZnJlc2hQcm9ncmVzcyhlbCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHByb2dyZXNzID0gVGFzay4jZ2V0Q29tcG9uZW50KGVsKTtcblxuICAgICAgICBpZiAocHJvZ3Jlc3MgaW5zdGFuY2VvZiBQcm9ncmVzcykge1xuICAgICAgICAgICAgcHJvZ3Jlc3Muc2V0TGFiZWwodGhpcy5nZXRQcm9ncmVzc1RvdGFsKCkgKyAnJScpO1xuICAgICAgICAgICAgcHJvZ3Jlc3Muc2V0UHJvZ3Jlc3ModmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFN0YXR1c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfE51bWJlcltdfXZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAgX3JlZnJlc2hTdGF0dXMoZWxTdGF0dXMsIHZhbHVlKSB7XG4gICAgICAgIFRhc2suI2dldENvbXBvbmVudChlbFN0YXR1cykucmVmcmVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRpdGxlKCkge1xuICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5vcHRpb25zLnBhcnRzWyd0aXRsZSddO1xuICAgICAgICBpZiAocGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbcGFydF0gPz8gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxufVxuXG5UYXNrLkRlZnVhbHRzID0gRGVmYXVsdHM7IiwiN1xuXG4vKipcbiAqIEBwYXJhbSB0aW1pbmdcbiAqIEBwYXJhbSBkcmF3XG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqIEBwYXJhbSBvbkVuZFxuICovXG5mdW5jdGlvbiBhbmltYXRlKHt0aW1pbmcsIGRyYXcsIGR1cmF0aW9ufSwgb25FbmQpIHtcblxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGFuaW1hdGUodGltZSkge1xuICAgICAgICAvLyB0aW1lRnJhY3Rpb24g0LjQt9C80LXQvdGP0LXRgtGB0Y8g0L7RgiAwINC00L4gMVxuICAgICAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRpbWVGcmFjdGlvbiA+IDEpIHRpbWVGcmFjdGlvbiA9IDE7XG5cbiAgICAgICAgLy8g0LLRi9GH0LjRgdC70LXQvdC40LUg0YLQtdC60YPRidC10LPQviDRgdC+0YHRgtC+0Y/QvdC40Y8g0LDQvdC40LzQsNGG0LjQuFxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1pbmcodGltZUZyYWN0aW9uKTtcblxuICAgICAgICBkcmF3KHByb2dyZXNzKTsgLy8g0L7RgtGA0LjRgdC+0LLQsNGC0Ywg0LXRkVxuXG4gICAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob25FbmQpIHtcbiAgICAgICAgICAgICAgICBvbkVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuXG5jb25zdCB0aW1pbmdzID0ge1xuICAgIGxpbmVhcih0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcbiAgICB9LFxuICAgIHF1YWQodGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aW1lRnJhY3Rpb24sIDIpXG4gICAgfSxcbiAgICBjaXJjKHRpbWVGcmFjdGlvbikge1xuICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyh0aW1lRnJhY3Rpb24pKTtcbiAgICB9LFxuICAgIGJhY2soeCA9IDEuNSwgdGltZUZyYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyh0aW1lRnJhY3Rpb24sIDIpICogKCh4ICsgMSkgKiB0aW1lRnJhY3Rpb24gLSB4KVxuICAgIH0sXG59O1xuXG5cbmNvbnN0IGFuaW1hdGlvbnNEcmF3ID0ge1xuICAgICdmYWRlT3V0JzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDEgLSAoTWF0aC5yb3VuZChwcm9ncmVzcyAqIDEwMCkgLyAxMDApO1xuICAgIH0sXG4gICAgJ2ZhZGVJbic6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAoTWF0aC5yb3VuZChwcm9ncmVzcyAqIDEwMCkgLyAxMDApO1xuICAgIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbmltYXRpb25Db25maWdcbiAqIEByZXR1cm4gUHJvbWlzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmltYXRlRWwoZWwsIGFuaW1hdGlvbkNvbmZpZyA9IHtcbiAgICBuYW1lOiAnZmFkZU91dCcsXG4gICAgdGltaW5nOiB0aW1pbmdzLmxpbmVhcixcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGRlbGF5OiAwXG59KSB7XG4gICAgbGV0IGFuaW1hdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGFuaW1hdGlvbkNvbmZpZyk7XG5cbiAgICBpZiAodHlwZW9mIGFuaW1hdGlvbi5kcmF3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFuaW1hdGlvbi5kcmF3LmJpbmQoZWwpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYW5pbWF0aW9uLm5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBhbmltYXRpb25zRHJhd1thbmltYXRpb24ubmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYW5pbWF0aW9uLmRyYXcgPSBhbmltYXRpb25zRHJhd1thbmltYXRpb24ubmFtZV0uYmluZChlbClcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gYW5pbWF0aW9uICcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYW5pbWF0aW9uLmRlbGF5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGFuaW1hdGlvbi5kZWxheSA9IDA7XG4gICAgfVxuXG4gICAgYW5pbWF0aW9uLnRpbWluZyA9ICh0eXBlb2YgYW5pbWF0aW9uLnRpbWluZyA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0aW1pbmdzW2FuaW1hdGlvbi50aW1pbmddID09PSAnZnVuY3Rpb24nKVxuICAgICAgICA/IHRpbWluZ3NbYW5pbWF0aW9uLnRpbWluZ10gOiB0aW1pbmdzLmxpbmVhcjtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGFuaW1hdGUoYW5pbWF0aW9uLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGVsKVxuICAgICAgICB9KSwgYW5pbWF0aW9uLmRlbGF5KTtcbiAgICB9KTtcblxufVxuXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufXRpbWluZ1xuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWRlSW4oZWwsIHRpbWluZyA9ICdsaW5lYXInLCBkdXJhdGlvbiA9IDEwMDAsIGRlbGF5ID0gMCkge1xuICAgIHJldHVybiBhbmltYXRlRWwoZWwsIHtcbiAgICAgICAgbmFtZTogJ2ZhZGVJbicsXG4gICAgICAgIHRpbWluZzogdGltaW5nLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGVsXG4gKiBAcGFyYW0gdGltaW5nXG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqIEBwYXJhbSBkZWxheVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhZGVPdXQoZWwsIHRpbWluZyA9ICdsaW5lYXInLCBkdXJhdGlvbiA9IDEwMDAsIGRlbGF5ID0gMCkge1xuICAgIHJldHVybiBhbmltYXRlRWwoZWwsIHtcbiAgICAgICAgbmFtZTogJ0ZhZGVPdXQnLFxuICAgICAgICB0aW1pbmc6IHRpbWluZyxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSk7XG59IiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4vdUlDb21wb25lbnQnO1xuaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXInO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50c0xpc3QnO1xuaW1wb3J0IFN0YXR1c2VzIGZyb20gJy4vc3RhdHVzZXNMaXN0JztcbmltcG9ydCBNYW5hZ2VyRXZlbnQgZnJvbSAnLi9tYW5hZ2VyRXZlbnQnO1xuaW1wb3J0IFRhc2tBYnN0cmFjdCBmcm9tIFwiLi90YXNrQWJzdHJhY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb250JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IEJ1dHRvbnNHcm91cCBmcm9tICcuL2J1dHRvbnNHcm91cCc7XG5cbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlscy9leHRlbmQnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJy4vdXRpbHMvZG9tJztcbmltcG9ydCBhbmltYXRlRWwsIHtmYWRlSW59IGZyb20gJy4vdXRpbHMvYW5pbWF0ZSc7XG5cblxuY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgY29tbW9uOiBmYWxzZSxcbiAgICB0aXRsZTogJzxoMz5CYWNrZ3JvdW5kcyB0YXNrczwvaDM+JyxcbiAgICB0aGVtZTogeyctMSc6IFwiZGVmYXVsdFwifSxcbiAgICByZW5kZXJPbkVtcHR5OiB0cnVlLFxuICAgIHRhc2tDbGFzczogVGFzayxcbiAgICBlbXB0eVRleHQ6ICdUYXNrcyBub3QgcHJvdmlkZWQgeWV0JyxcbiAgICB0YXNrT3B0aW9uczoge30sXG4gICAgdGFza3M6IFtdLFxuICAgIHN0YXR1c1RleHQ6IHt9LFxuICAgIGhpZGVBbmltYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGVPdXQnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgdGltaW5nOiAnbGluZWFyJyxcbiAgICAgICAgZGVsYXk6IDBcbiAgICB9LFxuICAgIHNob3dBbmltYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGVJbicsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICB0aW1pbmc6ICdsaW5lYXInLFxuICAgICAgICBkZWxheTogMFxuICAgIH0sXG4gICAgdGFza3NBbmltYXRpb246IHtcbiAgICAgICAgaGlkZToge30sXG4gICAgICAgIHNob3c6IHt9XG4gICAgfSxcbiAgICByZXNvbHZlcjoge1xuICAgICAgICB1cmw6ICdxdWV1ZS1yZWFkZXInXG4gICAgfVxufTtcblxuXG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5oaWRlW1N0YXR1c2VzLkRPTkVdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5oaWRlQW5pbWF0aW9uLCB7ZGVsYXk6IDUwMDB9KTtcbkRlZmF1bHRzLnRhc2tzQW5pbWF0aW9uLmhpZGVbU3RhdHVzZXMuRVJST1JdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5oaWRlQW5pbWF0aW9uLCB7ZGVsYXk6IDIwMDAwfSk7XG5EZWZhdWx0cy50YXNrc0FuaW1hdGlvbi5zaG93W1N0YXR1c2VzLkVYRUNdID0gZXh0ZW5kKHt9LCBEZWZhdWx0cy5zaG93QW5pbWF0aW9uLCB7ZHVyYXRpb246IDUwMH0pO1xuRGVmYXVsdHMudGFza3NBbmltYXRpb24uc2hvd1tTdGF0dXNlcy5XQUlUXSA9IGV4dGVuZCh7fSwgRGVmYXVsdHMuc2hvd0FuaW1hdGlvbiwge2R1cmF0aW9uOiA1MDB9KTtcblxuRGVmYXVsdHMudGFza3NBbmltYXRpb24uaGlkZVtTdGF0dXNlcy5FUlJPUl0gPSBmYWxzZTsgLy9ub3QgcmVtb3ZlIFRhc2sgZWxlbWVudCBmcm9tIGRvbVxuXG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLkRPTkVdID0gJ0NvbXBsZXRlJztcbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuRVJST1JdID0gJ0NvbXBsZXRlIHdpdGggZXJyb3JzJztcbkRlZmF1bHRzLnN0YXR1c1RleHRbU3RhdHVzZXMuRVhFQ10gPSAnUHJvY2Vzc2luZyc7XG5EZWZhdWx0cy5zdGF0dXNUZXh0W1N0YXR1c2VzLldBSVRdID0gJ0F3YWl0aW5nJztcblxuXG4vKipcbiAqXG4gKi9cbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7UmVzb2x2ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjcmVzb2x2ZXIgPSBudWxsO1xuXG4gICAgI2VsZW1lbnRzID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBvd25lcjogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJUYXNrczogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICBlbXB0eVRleHQ6IG51bGxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgICN0YXNrcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICAjb3B0aW9ucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3duZXIgPSBVSUNvbXBvbmVudC5yZW1vdmVPcHRpb25zUHRvcGVydHkoJ2VsZW1lbnQnLCBvcHRpb25zKTtcbiAgICAgICAgbGV0IG9wdCA9IGV4dGVuZCh7fSwgTWFuYWdlci5EZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuI29wdGlvbnMgPSBleHRlbmQoe30sIHtcbiAgICAgICAgICAgIHRhc2tPcHRpb25zOiBvcHQudGFza0NsYXNzLkRlZnVhbHRzXG4gICAgICAgIH0sIG9wdCk7XG5cbiAgICAgICAgdGhpcy4jcmVzb2x2ZXIgPSBSZXNvbHZlci5mYWN0b3J5KHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudGFza3MgJiYgdHlwZW9mIG9wdGlvbnMudGFza3MubGVuZ3RoICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2tzKG9wdGlvbnMudGFza3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBsYXRlciBhZGRlZCB0YXNrcyxcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMucmVhZHksIHtidWJibGVzOiB0cnVlfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cnVjdG9yIG9mIG1hbmFnZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLmRlc3Ryb3ksIHtidWJibGVzOiB0cnVlfSk7XG4gICAgICAgIHRoaXMuI3Rhc2tzID0gW107XG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI29wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSBkZXRhaWxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHRyaWdnZXIodHlwZSwgcHJvcHMgPSB7fSwgZGV0YWlsKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWwgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcHJvcHMuZGV0YWlsID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkZXRhaWwpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuZGV0YWlsW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vd25lckVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgTWFuYWdlckV2ZW50KHRoaXMsIHR5cGUsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrcyhTdGF0dXNlcy5TRVRfVklTSUJMRSk7XG5cbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLm9wdGlvbnMucmVuZGVyT25FbXB0eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy4jZWxlbWVudHM7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzLndyYXBwZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGVsZW1lbnRzLndyYXBwZXIgPSBlbGVtZW50cy5vd25lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAnd3JhcHBlcid9KSk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50cy53cmFwcGVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGl0bGUgJiYgdGhpcy5vcHRpb25zLnRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHRoaXMub3B0aW9ucy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50cy53cmFwcGVyVGFza3MgPSBlbGVtZW50cy53cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7Y2xhc3NOYW1lOiAndGFza3MnfSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZW1wdHlUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZW1wdHlUZXh0ID0gZWxlbWVudHMud3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50cy5lbXB0eVRleHQgPSB0aGlzLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZW1wdHktd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsKCdzcGFuJywge2NsYXNzTmFtZTogJ2VtcHR5LXRleHQnLCB0ZXh0Q29udGVudDogb3B0aW9ucy5lbXB0eVRleHR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRoZW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIERvbS5zd2l0Y2hDbGFzcyhlbGVtZW50cy53cmFwcGVyLCBNYW5hZ2VyLmdldENsYXNzTmFtZSgndGhlbWUtJyArIG9wdGlvbnMudGhlbWUpLCBNYW5hZ2VyLmdldENsYXNzTmFtZSgndGhlbWUnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRhc2sucmVmcmVzaCgpKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICN0b2dnbGVFbXB0eVRleHQodHlwZSkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuI2VsZW1lbnRzLmVtcHR5VGV4dCxcbiAgICAgICAgICAgIHZpc2libGUgPSBEb20uaXNWaXNpYmxlKGVsKTtcbiAgICAgICAgaWYgKERvbS5pc0VsKGVsKSkge1xuICAgICAgICAgICAgaWYgKCh2aXNpYmxlICYmIHR5cGUgPT09ICdoaWRlJykgfHwgKHZpc2libGUgPT09IGZhbHNlICYmIHR5cGUgPT09ICdzaG93JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5pbWF0ZUVsKGVsLCB0aGlzLm9wdGlvbnNbdHlwZSArICdBbmltYXRpb24nXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119dGFza3NcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc29sdmVcbiAgICAgKi9cbiAgICBhZGRUYXNrcyh0YXNrcywgcmVzb2x2ZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRhc2tzICYmIHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuI3Rhc2tzID0gdGhpcy4jdGFza3MuY29uY2F0KHRhc2tzKTtcbiAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnaGlkZScpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZXIucmVzb2x2ZSgobWFuYWdlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIudHJpZ2dlcihFdmVudHMuZmV0Y2hTdGFydCwge2J1YmJsZXM6IHRydWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChtYW5hZ2VyLCBudW1iZXJSZXF1ZXN0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXIudHJpZ2dlcihFdmVudHMuZmV0Y2hFbmQsIHtidWJibGVzOiB0cnVlfSwge3JlcXVlc3RzOiBudW1iZXJSZXF1ZXN0c30pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUYXNrQWJzdHJhY3R9IHRhc2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91cGRhdGVUYXNrKHRhc2ssIHJlc3BvbnNlKSB7XG5cbiAgICAgICAgaWYgKHRhc2sucHJvZ3Jlc3MgIT09IHJlc3BvbnNlLnByb2dyZXNzIHx8IHRhc2suc3RhdHVzICE9PSByZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgIHx8IHRhc2sudGV4dCAhPT0gcmVzcG9uc2UudGV4dCB8fCB0YXNrLnRpdGxlICE9PSByZXNwb25zZS50aXRsZSkge1xuICAgICAgICAgICAgY29uc3QgaXNTdGF0dXNDaGFuZ2UgPSB0YXNrLnN0YXR1cyAhPT0gcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgIG9sZERhdGEgPSBleHRlbmQoe30sIHRhc2spO1xuICAgICAgICAgICAgdGFzayA9IGV4dGVuZCh0YXNrLCByZXNwb25zZSk7XG4gICAgICAgICAgICB0YXNrLnJlZnJlc2gob2xkRGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChpc1N0YXR1c0NoYW5nZSkge1xuXG4gICAgICAgICAgICAgICAgdGFzay5jc3NDbGFzc1N3aXRjaCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFN0YXR1c2VzLmlzKFtTdGF0dXNlcy5FWEVDXSwgdGFzay5zdGF0dXMpKSB7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLnN0YXR1c0NoYW5nZSwge2J1YmJsZXM6IHRydWV9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgIG9sZFN0YXR1czogb2xkRGF0YS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChTdGF0dXNlcy5pcyhTdGF0dXNlcy5TRVRfVklTSUJMRSwgdGFzay5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhc2suZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlclRhc2tzRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlRWwoZWxlbWVudCwgdGhpcy4jdGFza0FuaW1hdGlvbih0YXNrLCAnc2hvdycpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChTdGF0dXNlcy5pcyhTdGF0dXNlcy5TRVRfQ09NUExFVEUsIHRhc2suc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5lbGVtZW50LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fG51bWJlcn0gdGFzayBUYXNrIGluc3RhbmNlIG9yIHRhc2sgaWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJlbW92ZWRcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIHJlbW92ZVRhc2sodGFzaywgb25SZW1vdmVkID0gbnVsbCkge1xuXG4gICAgICAgIGxldCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0YXNrID0gdGFza3MuZmluZCgodCkgPT4gdC5pZCA9PT0gdGFzaylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0VGFza3MoKS5maW5kSW5kZXgoKHQpID0+IHQuaWQgPT09IHRhc2suaWQpO1xuICAgICAgICAgICAgaWYgKGlkID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiN0YXNrcy5zcGxpY2UoaWQsIDEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jcmVtb3ZlRWwodGFzay5lbGVtZW50LCB0aGlzLiN0YXNrQW5pbWF0aW9uKHRhc2spKS50aGVuKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25SZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZWQoZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiN0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3RvZ2dsZUVtcHR5VGV4dCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VGFza0Fic3RyYWN0fSB0YXNrXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgI3Rhc2tBbmltYXRpb24odGFzaywgdHlwZSA9ICdoaWRlJykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGFza3NBbmltYXRpb25bdHlwZV1bdGFzay5zdGF0dXNdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy50YXNrc0FuaW1hdGlvblt0eXBlXVt0YXNrLnN0YXR1c107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uc1t0eXBlICsgJ0FuaW1hdGlvbiddO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfG1lbnViYXJ9IHN0YXR1c0ZpbHRlclxuICAgICAqIEByZXR1cm4ge1Rhc2tBYnN0cmFjdFtdfVxuICAgICAqL1xuICAgIGdldFRhc2tzKHN0YXR1c0ZpbHRlcikge1xuICAgICAgICBsZXQgdGFza3MgPSB0aGlzLiN0YXNrcztcbiAgICAgICAgY29uc3QgVGFza0NsYXNzID0gdGhpcy5vcHRpb25zLnRhc2tDbGFzcztcbiAgICAgICAgdGFza3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgVGFza0Fic3RyYWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdID0gZXh0ZW5kKG5ldyBUYXNrQ2xhc3MobnVsbCwgdGhpcyksIGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIucGFyc2VJbnQoaXRlbSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdID0gbmV3IFRhc2tDbGFzcyhpdGVtLCB0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3RhdHVzRmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXR1c0ZpbHRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNGaWx0ZXIgPSBbc3RhdHVzRmlsdGVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzRmlsdGVyLmluZGV4T2YodGFzay5zdGF0dXMpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcmV0dXJuIHtUYXNrQWJzdHJhY3R8bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kVGFzayhpZCkge1xuICAgICAgICBjb25zdCB0YXNrID0gdGhpcy5nZXRUYXNrcygpLmZpbmQoKHQpID0+IHQuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrQWJzdHJhY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxmYWxzZX1hbmltYXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgICNyZW1vdmVFbChlbCwgYW5pbWF0aW9uID0gdGhpcy5vcHRpb25zLmhpZGVBbmltYXRpb24pIHtcblxuICAgICAgICBpZiAoYW5pbWF0aW9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGVFbChlbCwgYW5pbWF0aW9uKS50aGVuKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgb3duZXJFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZWxlbWVudHMub3duZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgd3JhcHBlckVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy53cmFwcGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHdyYXBwZXJUYXNrc0VsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50cy53cmFwcGVyVGFza3M7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtSZXNvbHZlcn1cbiAgICAgKi9cbiAgICBnZXQgcmVzb2x2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNyZXNvbHZlclxuICAgIH1cblxuXG59XG5cblVJQ29tcG9uZW50LmNsYXNzUHJlZml4ID0gJ3FtYy0nO1xuXG5NYW5hZ2VyLlRhc2tBYnN0cmFjdCA9IFRhc2tBYnN0cmFjdDtcbk1hbmFnZXIuQnV0dG9uID0gQnV0dG9uO1xuTWFuYWdlci5CdXR0b25zR3JvdXAgPSBCdXR0b25zR3JvdXA7XG5NYW5hZ2VyLkljb24gPSBJY29uO1xuXG5NYW5hZ2VyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5NYW5hZ2VyLkV2ZW50cyA9IEV2ZW50cztcbk1hbmFnZXIuU3RhdHVzZXMgPSBTdGF0dXNlcztcblxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyIsImltcG9ydCAkIGZyb20gJ2dsb2JhbC9qUXVlcnknO1xuXG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL21hbmFnZXInXG5cbiQuZm4ucXVldWVNYW5hZ2VyID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuXG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuZGF0YSgncXVldWUtbWFuYWdlcicpLFxuICAgICAgICBtZXRob2RzID0ge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtNYW5hZ2VyLkRlZmF1bHRzfSBvcHRpb25zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkd3JhcHBlciA9ICQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd3JhcHBlci5kYXRhKCdxdWV1ZU1hbmFnZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR3cmFwcGVyLmRhdGEoJ3F1ZXVlTWFuYWdlcicsIG5ldyBNYW5hZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgJC5leHRlbmQodHJ1ZSwge2VsZW1lbnQ6ICR3cmFwcGVyLmdldCgwKX0sIE1hbmFnZXIuRGVmYXVsdHMsIG9wdGlvbnMgfHwge30sICR3cmFwcGVyLmRhdGEoJ21hbmFnZXInKSB8fCB7fSkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjcmVhdGVCdXR0b25zOiBmdW5jdGlvbihvcHRpb25zLCAkd3JhcHBlcil7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXIgPSAkd3JhcHBlciB8fCB0aGlzO1xuICAgICAgICAgICAgICAgICR3cmFwcGVyLmFwcGVuZCgkKG5ldyBNYW5hZ2VyLkJ1dHRvbnNHcm91cChvcHRpb25zKS5yZW5kZXIoKSkuZGF0YSgnbWFuYWdlcicsIG1hbmFnZXIpKTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfTtcblxuXG5cbiAgICBpZiAobWFuYWdlciBpbnN0YW5jZW9mIE1hbmFnZXIgJiYgdHlwZW9mIG1hbmFnZXJbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbWFuYWdlclttZXRob2RdLmFwcGx5KG1hbmFnZXIsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kc1ttZXRob2RdKSB7XG4gICAgICAgIHJldHVybiBtZXRob2RzW21ldGhvZF0uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkLmVycm9yKCdNZXRob2QgJyArIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24gcXVldWVNYW5hZ2VyICcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59O1xuXG4kLmZuLnF1ZXVlTWFuYWdlci5NYW5hZ2VyID0gTWFuYWdlcjtcblxuXG5cblxuIl0sIm5hbWVzIjpbIkNTU0NsYXNzTmFtZU1peGluIiwiY2xhc3NQcmVmaXgiLCJnZXRDbGFzc05hbWUiLCJuYW1lIiwic3RhcnRzV2l0aCIsIkZ1bGxzY3JlZW5BcGkiLCJwcmVmaXhlZCIsImFwaU1hcCIsInNwZWNBcGkiLCJicm93c2VyQXBpIiwiaSIsImxlbmd0aCIsImRvY3VtZW50Iiwia2V5cyIsIm9iamVjdCIsImlzT2JqZWN0IiwiT2JqZWN0IiwiZWFjaCIsImZuIiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwiY29tcHV0ZWRTdHlsZSIsImVsIiwicHJvcCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJjb21wdXRlZFN0eWxlVmFsdWUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiVVNFUl9BR0VOVCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIndlYmtpdFZlcnNpb25NYXAiLCJleGVjIiwicGFyc2VGbG9hdCIsInBvcCIsInRlc3QiLCJtYXRjaCIsIklTX0FORFJPSUQiLCJtYWpvciIsIm1pbm9yIiwiSVNfRURHRSIsIklTX0NIUk9NRSIsInJlc3VsdCIsInZlcnNpb24iLCJJU19TQUZBUkkiLCJUT1VDSF9FTkFCTEVEIiwiQm9vbGVhbiIsIkRvbSIsIm1heFRvdWNoUG9pbnRzIiwiRG9jdW1lbnRUb3VjaCIsIklTX0lQQUQiLCJpc05vbkJsYW5rU3RyaW5nIiwic3RyIiwidHJpbSIsInRocm93SWZXaGl0ZXNwYWNlIiwiaW5kZXhPZiIsIkVycm9yIiwiY2xhc3NSZWdFeHAiLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJpc1JlYWwiLCJpc0VsIiwibm9kZVR5cGUiLCJjcmVhdGVRdWVyaWVyIiwibWV0aG9kIiwic2VsZWN0b3IiLCJjb250ZXh0IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImNyZWF0ZUVsIiwidGFnTmFtZSIsInByb3BlcnRpZXMiLCJhdHRyaWJ1dGVzIiwiY29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvcE5hbWUiLCJ2YWwiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZU5hbWUiLCJzdHlsZSIsInRleHRDb250ZW50IiwiYXR0ck5hbWUiLCJhcHBlbmRDb250ZW50IiwidGV4dCIsImlubmVyVGV4dCIsImhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzVG9DaGVjayIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkQ2xhc3MiLCJjbGFzc1RvQWRkIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJjbGFzc1RvUmVtb3ZlIiwicmVtb3ZlIiwic3BsaXQiLCJmaWx0ZXIiLCJjIiwiam9pbiIsInRvZ2dsZUNsYXNzIiwiY2xhc3NUb1RvZ2dsZSIsInByZWRpY2F0ZSIsImhhcyIsImF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudE5vZGUiLCJyZWN0IiwiayIsInVuZGVmaW5lZCIsImhlaWdodCIsIndpZHRoIiwiaXNUZXh0Tm9kZSIsImlzVmlzaWJsZSIsIm9wYWNpdHkiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwic3dpdGNoQ2xhc3MiLCJjc3NDbGFzcyIsInNlYXJjaENsYXNzIiwiY29tcGFyZSIsImV4aXN0Iiwibm9ybWFsaXplQ29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImNyZWF0ZVRleHROb2RlIiwibm9kZSIsImFwcGVuZENoaWxkIiwiRUxFTUVOVCIsIm1hdGNoZXMiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCIkIiwiJCQiLCJVSUNvbXBvbmVudCIsInJlbW92ZU9wdGlvbnNQdG9wZXJ0eSIsInByb3BlcnR5Iiwib3B0aW9ucyIsImluc3RhbmNlT2YiLCJjbGFzc1NldCIsIlNldCIsImFycmF5IiwiaXRlbSIsIl9ub3JtYWxpemVQcmVmaXgiLCJyIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJhc3NpZ24iLCJjcmMzMiIsImNvbW1vbmpzSGVscGVycyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmYWN0b3J5IiwiRE9fTk9UX0VYUE9SVF9DUkMiLCJDUkMzMiIsInNpZ25lZF9jcmNfdGFibGUiLCJ0YWJsZSIsIm4iLCJJbnQzMkFycmF5IiwiVCIsImNyYzMyX2JzdHIiLCJic3RyIiwic2VlZCIsIkMiLCJMIiwiY2hhckNvZGVBdCIsImNyYzMyX2J1ZiIsImJ1ZiIsImNyYzMyX2J1Zl84IiwiY3JjMzJfc3RyIiwiZCIsImV4dGVuZCIsInRhcmdldCIsInNvdXJjZXMiLCJzb3VyY2UiLCJzaGlmdCIsIkVNUFRZX01FU1NBR0UiLCJEZWZhdWx0cyIsImRlbGF5VGltZSIsIlJlc29sdmVyIiwiY29uc3RydWN0b3IiLCJyZXNvbHZlIiwib25TdGFydCIsIm9uRW5kIiwiaXNSdW5uaW5nIiwibWFuYWdlcnMiLCJtYW5hZ2VyIiwiY2F0Y2giLCJlcnJvciIsInRoZW4iLCJudW1iZXIiLCJ0YXNrcyIsImdldFRhc2tzIiwidGFzayIsImNvbW1vbiIsInB1c2giLCJ0YXNrc0lkIiwiaWQiLCJpbmRleCIsImZpbmRUYXNrIiwiZmluZCIsInJlc29sdmVyIiwiaGFzaCIsInVybCIsImNhY2hlIiwiY29tbW9uTWFuYWdlcnMiLCJvd25lckVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiTWFuYWdlciIsIkV2ZW50cyIsImRlc3Ryb3kiLCJldmVudCIsImluaXRpYXRvck1hbmFnZXIiLCJyZW1vdmVUYXNrIiwic3BsaWNlIiwiZmluZEluZGV4IiwidGltZU91dCIsInJlc3BvbnNlIiwib2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwianNvbiIsInJhdyIsIl91cGRhdGVUYXNrIiwidGl0bGUiLCJhZGRUYXNrcyIsIlByb21pc2UiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsImVuY29kZVVSSSIsIkV2ZW50IiwicmVhZHkiLCJzdGF0dXNDaGFuZ2UiLCJmZXRjaFN0YXJ0IiwiZmV0Y2hFbmQiLCJ0b1N0cmluZyIsImV2ZW50cyIsIlN0YXR1c2VzTGlzdCIsIklOSVQiLCJXQUlUIiwiRVhFQyIsIkRPTkUiLCJFUlJPUiIsIkRFTEVURUQiLCJTRVRfVklTSUJMRSIsIlNFVF9DT01QTEVURSIsImlzIiwic2V0IiwiTWFuYWdlckV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJ0eXBlIiwicHJvcHMiLCJUYXNrQWJzdHJhY3QiLCJTdGF0dXNlcyIsInBhcnNlSW50IiwiX3JlbmRlckNoaWxkIiwiZWxXcmFwcGVyIiwiX2J1aWxkQ3NzQ2xhc3MiLCJjc3NDbGFzc1N3aXRjaCIsInRoZW1lIiwicmVmcmVzaCIsImVsZW1lbnRzIiwiX3JlZnJlc2hFbGVtZW50cyIsImdldFByb2dyZXNzVG90YWwiLCJoYXNPd25Qcm9wZXJ0eSIsIk1hdGgiLCJyb3VuZCIsInJlZHVjZSIsImEiLCJvbGRUYXNrIiwib3B0aW9uc1BhcnRzIiwicGFydHMiLCJlbGVtZW50TmFtZSIsIm0iLCJwIiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm9sZFZhbHVlIiwiY2FsbCIsIl9yZWZyZXNoQmFzaWNQcm9wZXJ0eSIsImVsTGlzdCIsImFwcGVuZCIsImVsTGkiLCJpbm5lckhUTUwiLCJ0YXNrT3B0aW9ucyIsImdldFRpdGxlIiwiZWxUYXNrIiwiX2Nzc0xpc3QiLCJzdGF0dXNlc0xpc3RLZXkiLCJ0b0xvd2VyQ2FzZSIsIl9pbml0aWFsR3VpZCIsIl9ndWlkIiwibmV3R1VJRCIsIkZha2VXZWFrTWFwIiwiV2Vha01hcCIsInZkYXRhIiwiZmxvb3IiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRhdGUiLCJkYXRhIiwiYWNjZXNzIiwiR3VpZCIsImdldCIsImRlbGV0ZSIsIlByb2dyZXNzIiwicmVuZGVyIiwiSFRNTEVsZW1lbnQiLCJzaXplIiwiaXNTaG93R3JhZGllbnQiLCJzZXRQcm9ncmVzcyIsImJhcnMiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiYmFyT3B0aW9ucyIsImNsYXNzVGhvQ2hlY2siLCJzZXRMYWJlbCIsImxhYmVsIiwibGFiZWxUZXh0IiwiY3NzIiwicm9sZSIsIm1pbiIsIm1heCIsImNoaWxkTm9kZXMiLCJJY29uVCIsImljb24iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImhhbmRsZXIiLCJoYW5kbGVyVGltb3V0RGVsYXkiLCJoaWRkZW5MYWJlbCIsImRpc2FibGVkIiwiaWNvbk5hbWUiLCJpY29uSG92ZXJOYW1lIiwiaWNvblNpemUiLCJhbmltYXRlZENsaWNrIiwiQnV0dG9uIiwiZHJvcCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImJpbmQiLCJ4IiwicGFnZVgiLCJsZWZ0Iiwic2Nyb2xsWCIsInkiLCJwYWdlWSIsInRvcCIsInNjcm9sbFkiLCJidXR0b25zIiwiYXJyYW5nZSIsInNjYWxlZCIsInNlbGVjdGFibGUiLCJzZWxlY3RJY29uIiwiQnV0dG9uc0dyb3VwIiwiY29uZmlnIiwiYnRuIiwic2VsZWN0ZWQiLCJidXR0b24iLCJUYXNrU3RhdHVzIiwibWFwSWNvbnMiLCJhY3Rpb25zIiwiaWNvbnMiLCJlbHMiLCJlbmFibGVkV2l0aCIsImVuYWJsZWRXaXRoU3RhdHVzIiwiaWNvblBsYWNlbWVudCIsImljb25NYXAiLCJUYXNrIiwiZWxEZXRhaWwiLCJlbFN0YXR1c1dyYXBwZXIiLCJwYXJ0Iiwib3duZXIiLCJjb21wb25lbnQiLCJfcmVmcmVzaFByb2dyZXNzIiwiX3JlZnJlc2hTdGF0dXMiLCJlbFN0YXR1cyIsIkRvbURhdGEiLCJjb21wb25ldCIsIkRlZnVhbHRzIiwiYW5pbWF0ZSIsInRpbWluZyIsImRyYXciLCJkdXJhdGlvbiIsInN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsInRpbWVGcmFjdGlvbiIsInRpbWluZ3MiLCJsaW5lYXIiLCJxdWFkIiwicG93IiwiY2lyYyIsInNpbiIsImFjb3MiLCJiYWNrIiwiYW5pbWF0aW9uc0RyYXciLCJkaXNwbGF5IiwiYW5pbWF0ZUVsIiwiYW5pbWF0aW9uQ29uZmlnIiwiZGVsYXkiLCJhbmltYXRpb24iLCJyZW5kZXJPbkVtcHR5IiwidGFza0NsYXNzIiwiZW1wdHlUZXh0IiwiaGlkZUFuaW1hdGlvbiIsInNob3dBbmltYXRpb24iLCJ0YXNrc0FuaW1hdGlvbiIsImhpZGUiLCJzaG93Iiwid3JhcHBlciIsIndyYXBwZXJUYXNrcyIsIm9wdCIsInRyaWdnZXIiLCJidWJibGVzIiwiZGV0YWlsIiwiZW50cmllcyIsImRpc3BhdGNoRXZlbnQiLCJjb25jYXQiLCJudW1iZXJSZXF1ZXN0cyIsInJlcXVlc3RzIiwiaXNTdGF0dXNDaGFuZ2UiLCJvbGREYXRhIiwib2xkU3RhdHVzIiwid3JhcHBlclRhc2tzRWxlbWVudCIsIm9uUmVtb3ZlZCIsInQiLCJzdGF0dXNGaWx0ZXIiLCJUYXNrQ2xhc3MiLCJOdW1iZXIiLCJ3cmFwcGVyRWxlbWVudCIsInZpc2libGUiLCJJY29uIiwicXVldWVNYW5hZ2VyIiwibWV0aG9kcyIsImluaXQiLCIkd3JhcHBlciIsImNyZWF0ZUJ1dHRvbnMiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtFQUNBO0VBQ0E7RUFDTyxNQUFNQSxpQkFBaUIsR0FBSTtFQUU5QjtFQUNKO0VBQ0E7RUFDSUMsRUFBQUEsV0FBVyxFQUFFLElBTGlCOztFQU85QjtFQUNKO0VBQ0E7RUFDQTtFQUNLQyxFQUFBQSxZQUFZLEVBQUUsVUFBU0MsSUFBVCxFQUFlO0VBRTFCLFFBQUksS0FBS0YsV0FBTCxLQUFvQixJQUFwQixJQUE0QkUsSUFBSSxDQUFDQyxVQUFMLENBQWdCLEtBQUtILFdBQXJCLENBQWhDLEVBQW1FO0VBQy9ELGFBQU9FLElBQVA7RUFDSDs7RUFDRCxXQUFPLEtBQUtGLFdBQUwsR0FBbUJFLElBQTFCO0VBQ0g7RUFqQjZCLENBQTNCOztFQ0hQO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFDQSxNQUFNRSxhQUFhLEdBQUc7RUFDcEJDLEVBQUFBLFFBQVEsRUFBRTtFQURVLENBQXRCOztFQUtBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLENBQ0UsbUJBREYsRUFFRSxnQkFGRixFQUdFLG1CQUhGLEVBSUUsbUJBSkYsRUFLRSxrQkFMRixFQU1FLGlCQU5GLEVBT0UsWUFQRixDQURhO0VBV2IsQ0FDRSx5QkFERixFQUVFLHNCQUZGLEVBR0UseUJBSEYsRUFJRSx5QkFKRixFQUtFLHdCQUxGLEVBTUUsdUJBTkYsRUFPRSxxQkFQRixDQVhhO0VBcUJiLENBQ0Usc0JBREYsRUFFRSxxQkFGRixFQUdFLHNCQUhGLEVBSUUsc0JBSkYsRUFLRSxxQkFMRixFQU1FLG9CQU5GLEVBT0Usa0JBUEYsQ0Fy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
