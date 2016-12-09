(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact'), require('preact-render-to-string')) :
  typeof define === 'function' && define.amd ? define(['preact', 'preact-render-to-string'], factory) :
  (global.tabs = factory(global.Preact,global.render));
}(this, (function (preact,render) { 'use strict';

render = 'default' in render ? render['default'] : render;

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
 * MUI Preact Tabs Module
 * @module preact/tabs
 */
var _tabComponentsChildren = [];

function renderChildren(tab) {
  _tabComponentsChildren.push(render(tab[0]));
}

/**
 * @name Tabs
 */

var Tabs = function (_Component) {
  inherits(Tabs, _Component);

  function Tabs() {
    classCallCheck(this, Tabs);
    return possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // the initial Tab active index
      var initialTabActive = this.props.initialSelectedIndex || 0;
      this.props.children.forEach(function (tab) {
        // save all children of Tab Components in array
        renderChildren(tab.children);
      });

      //Tabs Component Children
      var tabsVNode = this.props.children;

      var VNodeChildrenArray = Array.from(this.base.children);
      VNodeChildrenArray[initialTabActive].classList.add('mui--is-active');

      tabsVNode.forEach(function (tab, i) {
        var div = document.createElement('div');
        div.classList.add('mui-tabs__pane');
        div.id = tab.attributes.value;
        if (i === initialTabActive) {
          div.classList.add('mui--is-active');
        }

        div.innerHTML = _tabComponentsChildren[i];

        _this2.base.insertAdjacentElement('afterend', div);
      });
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var children = _ref.children,
          justified = _ref.justified,
          initialSelectedIndex = _ref.initialSelectedIndex,
          props = objectWithoutProperties(_ref, ['children', 'justified', 'initialSelectedIndex']);

      var className = justified ? 'mui-tabs__bar mui-tabs__bar--justified' : 'mui-tabs__bar';
      return preact.h(
        'ul',
        _extends({ 'class': className }, props),
        children
      );
    }
  }]);
  return Tabs;
}(preact.Component);

return Tabs;

})));
