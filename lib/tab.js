(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact')) :
  typeof define === 'function' && define.amd ? define(['preact'], factory) :
  (global.tab = factory(global.Preact));
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
 * MUI Preact Tab Module
 * @module preact/tab
 */

function renderTabMuiChildren(props) {
  var div = document.createElement('div');
  div.classList.add('mui-tabs__pane');
  div.id = props.value;
  if (props.selected === true) {
    div.classList.add('mui--is-active');
  }
  div.appendChild(preact.render(props.children[0]));
  return div;
}
/**
 * @name Tab
 */

var Tab = function (_Component) {
  inherits(Tab, _Component);

  function Tab() {
    classCallCheck(this, Tab);
    return possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  createClass(Tab, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var div = renderTabMuiChildren(this.props);
      this.base.parentElement.insertAdjacentElement('afterend', div);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var div = renderTabMuiChildren(this.props);
      this.base.parentElement.insertAdjacentElement('afterend', div);
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var value = _ref.value,
          selected = _ref.selected,
          label = _ref.label,
          props = objectWithoutProperties(_ref, ['value', 'selected', 'label']);

      return preact.h(
        'li',
        _extends({}, props, { 'class': selected ? 'mui--is-active' : null }),
        preact.h(
          'a',
          { 'data-mui-toggle': 'tab', 'data-mui-controls': value },
          ' ',
          label,
          ' '
        )
      );
    }
  }]);
  return Tab;
}(preact.Component);

return Tab;

})));
