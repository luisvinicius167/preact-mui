(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact')) :
  typeof define === 'function' && define.amd ? define(['preact'], factory) :
  (global.modal = factory(global.Preact));
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
 * MUI Preact Modal Module
 * @module preact/modal
 */

/**
 * @name Modal
 * 
 * @param {string} openedBy The element id that will open the modal
 * when clicked
 * 
 * @param {string} closedBy The element id that will close the modal
 * when clicked
 * 
 * @param {function} onClose The function that will be called
 * when modal is closed 
 */

var Modal = function (_Component) {
  inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isActive: false
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.openedBy !== undefined) {
        var openedBy = document.querySelector('#' + this.props.openedBy);
        openedBy.addEventListener('click', function () {
          _this2.toggleModal();
        });
      } else if (this.props.closedBy !== undefined) {
        var closedByElement = document.querySelector('#' + this.props.closedBy);
        closedByElement.addEventListener('click', function () {
          _this2.toggleModal();
          mui.overlay('off');
        });
      }
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal() {
      var _this3 = this;

      if (!this.state.isActive) {
        this.setState({ isActive: !this.state.isActive });
        mui.overlay('on', this.base, { onclose: function onclose() {
            _this3.setState({ isActive: !_this3.state.isActive });
            _this3.props.onClose();
          } });
      }
    }
  }, {
    key: 'render',
    value: function render(_ref2, _ref3) {
      var isActive = _ref3.isActive;
      var children = _ref2.children,
          props = objectWithoutProperties(_ref2, ['children']);

      return preact.h(
        'div',
        { style: ModalPositions[this.props.position || 'center'], onClick: function onClick() {
            mui.overlay('off');
          } },
        isActive ? preact.h(
          'div',
          props,
          children
        ) : null
      );
    }
  }]);
  return Modal;
}(preact.Component);

var ModalPositions = {
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  centerLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  },
  centerRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%'
  },
  centerBottom: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  centerTop: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
};

return Modal;

})));
