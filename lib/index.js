(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('preact')) :
	typeof define === 'function' && define.amd ? define(['preact'], factory) :
	(factory(global.Preact));
}(this, (function (preact) { 'use strict';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

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

/** 
 * @name Appbar
 */

var Appbar = function (_Component) {
	inherits(Appbar, _Component);

	function Appbar() {
		classCallCheck(this, Appbar);
		return possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Appbar.prototype.render = function render(_ref) {
		var children = _ref.children,
		    props = objectWithoutProperties(_ref, ['children']);

		return preact.h(
			'div',
			_extends({ 'class': 'mui-appbar' }, props),
			children
		);
	};

	return Appbar;
}(preact.Component);

/**
 * @name Button
 */

var Button = function (_Component) {
  inherits(Button, _Component);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Button.prototype.render = function render(_ref) {
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
  };

  return Button;
}(preact.Component);

/**
 * @name Container
 */

var Container = function (_Component) {
  inherits(Container, _Component);

  function Container() {
    classCallCheck(this, Container);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Container.prototype.render = function render(_ref) {
    var fluid = _ref.fluid,
        children = _ref.children,
        props = objectWithoutProperties(_ref, ['fluid', 'children']);

    return preact.h(
      'div',
      _extends({
        'class': fluid ? 'mui-container-fluid' : 'mui-container'
      }, props),
      children
    );
  };

  return Container;
}(preact.Component);

/**
 * @name Divider
 */

var Divider = function (_Component) {
  inherits(Divider, _Component);

  function Divider() {
    classCallCheck(this, Divider);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Divider.prototype.render = function render() {
    return preact.h('div', { 'class': 'mui-divider' });
  };

  return Divider;
}(preact.Component);

/**
 * @name Dropdown
 */

var Dropdown = function (_Component) {
  inherits(Dropdown, _Component);

  function Dropdown() {
    classCallCheck(this, Dropdown);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Dropdown.prototype.render = function render(_ref) {
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
  };

  return Dropdown;
}(preact.Component);

/**
 * @name DropdownItem
 */

var DropdownItem = function (_Component) {
  inherits(DropdownItem, _Component);

  function DropdownItem() {
    classCallCheck(this, DropdownItem);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  DropdownItem.prototype.render = function render(_ref) {
    var link = _ref.link,
        children = _ref.children,
        props = objectWithoutProperties(_ref, ['link', 'children']);

    return preact.h(
      'li',
      props,
      preact.h(
        'a',
        { href: link ? link : false },
        children
      )
    );
  };

  return DropdownItem;
}(preact.Component);

/**
 * @name Form
 */

var Form = function (_Component) {
  inherits(Form, _Component);

  function Form() {
    classCallCheck(this, Form);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Form.prototype.render = function render(_ref) {
    var legend = _ref.legend,
        children = _ref.children,
        inline = _ref.inline,
        props = objectWithoutProperties(_ref, ['legend', 'children', 'inline']);

    return preact.h(
      'form',
      _extends({
        'class': inline ? 'mui-form--inline' : null
      }, props),
      legend ? preact.h(
        'legend',
        null,
        legend
      ) : null,
      children
    );
  };

  return Form;
}(preact.Component);

/**
 * @name Input
 */

var Input = function (_Component) {
  inherits(Input, _Component);

  function Input() {
    classCallCheck(this, Input);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Input.prototype.render = function render(_ref) {
    var style = _ref.style,
        hint = _ref.hint,
        label = _ref.label,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'text' : _ref$type,
        required = _ref.required,
        defaultValue = _ref.defaultValue,
        floatingLabel = _ref.floatingLabel,
        props = objectWithoutProperties(_ref, ['style', 'hint', 'label', 'type', 'required', 'defaultValue', 'floatingLabel']);

    var floatingLabelClass = floatingLabel ? ' mui-textfield--float-label' : '';
    var className = ('mui-textfield ' + floatingLabelClass).trim();
    return preact.h(
      'div',
      {
        'class': className,
        style: style ? style : null
      },
      preact.h('input', _extends({
        type: type,
        placeholder: hint,
        value: defaultValue ? defaultValue : null,
        required: required ? required : null
      }, props)),
      label ? preact.h(
        'label',
        null,
        label
      ) : null
    );
  };

  return Input;
}(preact.Component);

/**
 * @name Checkbox
 */

var Checkbox = function (_Component) {
  inherits(Checkbox, _Component);

  function Checkbox() {
    classCallCheck(this, Checkbox);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Checkbox.prototype.render = function render(_ref) {
    var name = _ref.name,
        _ref$defaultChecked = _ref.defaultChecked,
        defaultChecked = _ref$defaultChecked === undefined ? false : _ref$defaultChecked,
        label = _ref.label,
        disabled = _ref.disabled,
        props = objectWithoutProperties(_ref, ['name', 'defaultChecked', 'label', 'disabled']);

    return preact.h(
      'div',
      { 'class': 'mui-checkbox' },
      preact.h(
        'label',
        null,
        preact.h('input', _extends({}, props, {
          type: 'checkbox',
          name: name,
          checked: defaultChecked,
          disabled: disabled ? 'disabled' : null
        })),
        label
      )
    );
  };

  return Checkbox;
}(preact.Component);

/**
 * @name Radio
 */

var Radio = function (_Component) {
  inherits(Radio, _Component);

  function Radio() {
    classCallCheck(this, Radio);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Radio.prototype.render = function render(_ref) {
    var name = _ref.name,
        _ref$defaultChecked = _ref.defaultChecked,
        defaultChecked = _ref$defaultChecked === undefined ? false : _ref$defaultChecked,
        checked = _ref.checked,
        label = _ref.label,
        disabled = _ref.disabled,
        props = objectWithoutProperties(_ref, ['name', 'defaultChecked', 'checked', 'label', 'disabled']);

    return preact.h(
      'div',
      { 'class': 'mui-radio' },
      preact.h(
        'label',
        null,
        preact.h('input', _extends({}, props, {
          type: 'radio',
          name: name,
          checked: defaultChecked || checked,
          disabled: disabled ? 'disabled' : null
        })),
        label
      )
    );
  };

  return Radio;
}(preact.Component);

/**
 * @name Select
 */

var Select = function (_Component) {
  inherits(Select, _Component);

  function Select() {
    classCallCheck(this, Select);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Select.prototype.render = function render(_ref) {
    var style = _ref.style,
        children = _ref.children,
        label = _ref.label,
        _ref$defaultValue = _ref.defaultValue,
        defaultValue = _ref$defaultValue === undefined ? false : _ref$defaultValue,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        props = objectWithoutProperties(_ref, ['style', 'children', 'label', 'defaultValue', 'disabled']);

    return preact.h(
      'div',
      { 'class': 'mui-select', style: style },
      preact.h(
        'select',
        _extends({}, props, { disabled: disabled, value: defaultValue }),
        label ? preact.h(
          'label',
          null,
          label
        ) : null,
        children
      )
    );
  };

  return Select;
}(preact.Component);

/**
 * @name Option
 */

var Option = function (_Component) {
  inherits(Option, _Component);

  function Option() {
    classCallCheck(this, Option);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Option.prototype.render = function render(_ref) {
    var label = _ref.label,
        value = _ref.value,
        props = objectWithoutProperties(_ref, ['label', 'value']);

    return preact.h(
      'option',
      _extends({}, props, { value: value }),
      label
    );
  };

  return Option;
}(preact.Component);

/**
 * @name Textarea
 */

var Textarea = function (_Component) {
  inherits(Textarea, _Component);

  function Textarea() {
    classCallCheck(this, Textarea);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Textarea.prototype.render = function render(_ref) {
    var style = _ref.style,
        hint = _ref.hint,
        label = _ref.label,
        required = _ref.required,
        defaultValue = _ref.defaultValue,
        floatingLabel = _ref.floatingLabel,
        props = objectWithoutProperties(_ref, ['style', 'hint', 'label', 'required', 'defaultValue', 'floatingLabel']);

    var floatingLabelClass = floatingLabel ? ' mui-textfield--float-label' : '';
    var className = ('mui-textfield ' + floatingLabelClass).trim();
    return preact.h(
      'div',
      {
        'class': className,
        style: style ? style : null
      },
      preact.h('textarea', _extends({
        placeholder: hint,
        value: defaultValue ? defaultValue : null,
        required: required ? required : null
      }, props)),
      label ? preact.h(
        'label',
        null,
        label
      ) : null
    );
  };

  return Textarea;
}(preact.Component);

/**
 * @name Row
 */

var Row = function (_Component) {
  inherits(Row, _Component);

  function Row() {
    classCallCheck(this, Row);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Row.prototype.render = function render(_ref) {
    var children = _ref.children,
        props = objectWithoutProperties(_ref, ['children']);

    return preact.h(
      'div',
      _extends({ 'class': 'mui-row' }, props),
      children
    );
  };

  return Row;
}(preact.Component);

/**
 * @name Col
 */

var Col = function (_Component) {
  inherits(Col, _Component);

  function Col() {
    classCallCheck(this, Col);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Col.prototype.render = function render(_ref) {
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
    ;

    return preact.h(
      'div',
      _extends({ 'class': className }, props),
      children
    );
  };

  return Col;
}(preact.Component);

/**
 * @name Panel
 */

var Panel = function (_Component) {
  inherits(Panel, _Component);

  function Panel() {
    classCallCheck(this, Panel);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Panel.prototype.render = function render(_ref) {
    var children = _ref.children,
        props = objectWithoutProperties(_ref, ['children']);

    return preact.h(
      'div',
      _extends({ 'class': 'mui-panel' }, props),
      children
    );
  };

  return Panel;
}(preact.Component);

/**
 * @name Tabs
 */

var Tabs = function (_Component) {
  inherits(Tabs, _Component);

  function Tabs() {
    classCallCheck(this, Tabs);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Tabs.prototype.render = function render(_ref) {
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
  };

  return Tabs;
}(preact.Component);

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
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Tab.prototype.componentDidUpdate = function componentDidUpdate() {
    var div = renderTabMuiChildren(this.props);
    this.base.parentElement.insertAdjacentElement('afterend', div);
  };

  Tab.prototype.componentDidMount = function componentDidMount() {
    var div = renderTabMuiChildren(this.props);
    this.base.parentElement.insertAdjacentElement('afterend', div);
  };

  Tab.prototype.render = function render(_ref) {
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
  };

  return Tab;
}(preact.Component);

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
    var _temp, _this, _ret;

    classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isActive: false
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
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
  };

  Modal.prototype.toggleModal = function toggleModal() {
    var _this3 = this;

    if (!this.state.isActive) {
      this.setState({ isActive: !this.state.isActive });
      mui.overlay('on', this.base, { onclose: function () {
          _this3.setState({ isActive: !_this3.state.isActive });
          _this3.props.onClose();
        } });
    }
  };

  Modal.prototype.render = function render(_ref, _ref2) {
    var isActive = _ref2.isActive;
    var children = _ref.children,
        props = objectWithoutProperties(_ref, ['children']);

    return preact.h(
      'div',
      { style: ModalPositions[this.props.position || 'center'], onClick: function () {
          mui.overlay('off');
        } },
      isActive ? preact.h(
        'div',
        props,
        children
      ) : null
    );
  };

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

/**
 * MUI NPM Package
 * @module pkg/preact.js
 */

/** Define module API */

module.exports = {
  Appbar: Appbar,
  Button: Button,
  Container: Container,
  Divider: Divider,
  Dropdown: Dropdown,
  DropdownItem: DropdownItem,
  Form: Form,
  Input: Input,
  Checkbox: Checkbox,
  Radio: Radio,
  Select: Select,
  Option: Option,
  Textarea: Textarea,
  Row: Row,
  Col: Col,
  Panel: Panel,
  Tabs: Tabs,
  Tab: Tab,
  Modal: Modal
};

})));