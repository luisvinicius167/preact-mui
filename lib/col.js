(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact')) :
  typeof define === 'function' && define.amd ? define(['preact'], factory) :
  (global.col = factory(global.Preact));
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
 * MUI Preact Col Module
 * @module preact/col
 */
/**
 * @name Col
 */

var Col = function (_Component) {
  inherits(Col, _Component);

  function Col() {
    classCallCheck(this, Col);
    return possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  createClass(Col, [{
    key: 'render',
    value: function render(_ref) {
      var children = _ref.children,
          xs = _ref.xs,
          xsOffset = _ref.xsOffset,
          sm = _ref.sm,
          smOffset = _ref.smOffset,
          md = _ref.md,
          mdOffset = _ref.mdOffset,
          lg = _ref.lg,
          lgOffset = _ref.lgOffset,
          xl = _ref.xl,
          xlOffset = _ref.xlOffset,
          props = objectWithoutProperties(_ref, ['children', 'xs', 'xsOffset', 'sm', 'smOffset', 'md', 'mdOffset', 'lg', 'lgOffset', 'xl', 'xlOffset']);

      var colMdClass = md ? 'mui-col-md-' + md : '',
          colXsClass = xs ? 'mui-col-xs-' + xs : '',
          colSmClass = sm ? 'mui-col-sm-' + sm : '',
          colLgClass = lg ? 'mui-col-lg-' + lg : '',
          colXlClass = xl ? 'mui-col-xs-' + xl : '',
          xsOffsetClass = xsOffset ? 'mui-col-xs-offset-' + xsOffset : '',
          smOffsetClass = smOffset ? 'mui-col-sm-offset-' + smOffset : '',
          mdOffsetClass = mdOffset ? 'mui-col-md-offset-' + mdOffset : '',
          lgOffsetClass = lgOffset ? 'mui-col-lg-offset-' + lgOffset : '',
          xlOffsetClass = xlOffset ? 'mui-col-xl-offset-' + xlOffset : '',
          className = (colXsClass + ' ' + colSmClass + ' ' + colMdClass + ' ' + colLgClass + ' ' + colXlClass + ' ' + xsOffsetClass + ' ' + smOffsetClass + ' ' + mdOffsetClass + ' ' + lgOffsetClass + ' ' + xlOffsetClass).trim();
      

      return preact.h(
        'div',
        _extends({ 'class': className }, props),
        children
      );
    }
  }]);
  return Col;
}(preact.Component);

return Col;

})));
