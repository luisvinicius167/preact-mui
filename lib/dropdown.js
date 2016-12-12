(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact')) :
  typeof define === 'function' && define.amd ? define(['preact'], factory) :
  (global.dropdown = factory(global.Preact));
}(this, (function (preact) { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
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

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

/**
 * MUI Preact Button Module
 * @module preact/button
 */
/**
 * @name Button
 */

var Button = function (_Component) {
  inherits(Button, _Component);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: 'render',
    value: function render(_ref) {
      var color = _ref.color,
          variant = _ref.variant,
          children = _ref.children,
          disabled = _ref.disabled,
          size = _ref.size,
          props = objectWithoutProperties(_ref, ['color', 'variant', 'children', 'disabled', 'size']);

      var variantClass = variant ? 'mui-btn--' + variant : '',
          colorClass = color ? 'mui-btn--' + color : '',
          sizeClass = size ? 'mui-btn--' + size : '',
          className = ('mui-btn ' + variantClass + ' ' + colorClass + ' ' + sizeClass).trim();
      return preact.h(
        'button',
        _extends({
          'class': className,
          disabled: disabled ? 'disabled' : ''
        }, props),
        children
      );
    }
  }]);
  return Button;
}(preact.Component);

/**
 * MUI Preact Dropdown Module
 * @module preact/dropdown
 */

/**
 * @name Dropdown
 */

var Dropdown = function (_Component) {
  inherits(Dropdown, _Component);

  function Dropdown() {
    classCallCheck(this, Dropdown);
    return possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
  }

  createClass(Dropdown, [{
    key: 'render',
    value: function render(_ref) {
      var label = _ref.label,
          color = _ref.color,
          size = _ref.size,
          variant = _ref.variant,
          disabled = _ref.disabled,
          alignMenu = _ref.alignMenu,
          children = _ref.children,
          props = objectWithoutProperties(_ref, ['label', 'color', 'size', 'variant', 'disabled', 'alignMenu', 'children']);

      return preact.h(
        'div',
        _extends({ 'class': 'mui-dropdown' }, props),
        preact.h(
          Button,
          {
            color: color,
            size: size,
            variant: variant,
            'data-mui-toggle': 'dropdown',
            disabled: disabled ? disabled : null },
          label,
          preact.h('span', { 'class': 'mui-caret' })
        ),
        preact.h(
          'ul',
          { 'class': 'mui-dropdown__menu ' + (alignMenu ? 'mui-dropdown__menu--' + alignMenu : false) },
          children
        )
      );
    }
  }]);
  return Dropdown;
}(preact.Component);

return Dropdown;

})));
