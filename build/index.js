(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsSelectList = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
/**
 * A string or an object,
 * example: {key: "somekey", value: "somevalue"}.
 */
var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
})]);

exports.stringOrKeyValue = stringOrKeyValue;
var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

exports.stringOrArrayOfString = stringOrArrayOfString;
var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
}));

exports.arrayOfKeyValue = arrayOfKeyValue;
/**
 * An array of strings or an array of key/value objects,
 * example: [{key: "somekey", value: "somevalue"}].
 */
var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
}))]);
exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;

},{"react":"react"}],2:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsSelect = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsOptions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
/**
 * A string or an object,
 * example: {key: "somekey", value: "somevalue"}.
 */
var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
})]);

exports.stringOrKeyValue = stringOrKeyValue;
var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

exports.stringOrArrayOfString = stringOrArrayOfString;
var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
}));

exports.arrayOfKeyValue = arrayOfKeyValue;
/**
 * An array of strings or an array of key/value objects,
 * example: [{key: "somekey", value: "somevalue"}].
 */
var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
}))]);
exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;

},{"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsPropTypes = require("hire-forms-prop-types");

var HIGHTLIGHT_CLASS = "highlight";

/**
 * Options are rendered beneath the autocomplete and select components.
 *
 * @class
 * @extends React.Component
 */

var Options = (function (_React$Component) {
	function Options() {
		_classCallCheck(this, Options);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Options, _React$Component);

	_createClass(Options, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var node = _react2["default"].findDOMNode(this);

			if (node) {
				node.style.zIndex = 1000;
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var node = _react2["default"].findDOMNode(this);
			node.style.zIndex = 0;
		}
	}, {
		key: "sortRelevance",

		/**
   * Sort props.values on relevance. A result is more relevant
   * when the search query is more at the beginning of the string.
   * String.indexOf(props.query): lower is better.
   *
   * @returns {Array<String>} Sorted values on relevance
   */
		value: function sortRelevance(values) {
			var _this = this;

			return values.sort(function (a, b) {
				a = a.value.toLowerCase();
				b = b.value.toLowerCase();

				var indexA = a.indexOf(_this.props.query);
				var indexB = b.indexOf(_this.props.query);

				if (indexA > indexB) {
					return 1;
				}

				if (indexA < indexB) {
					return -1;
				}

				if (indexA === indexB) {
					if (a > b) {
						return 1;
					}

					if (a < b) {
						return -1;
					}
				}

				return 0;
			});
		}
	}, {
		key: "highlight",
		value: function highlight(target) {
			// Check if target is an event object.
			if (target.hasOwnProperty("currentTarget")) {
				target = target.currentTarget;
			}

			target.classList.add(HIGHTLIGHT_CLASS);
		}
	}, {
		key: "unhighlight",

		/**
   * Unhighlight the currently highlighted option.
   *
   *
   */
		value: function unhighlight() {
			var el = undefined;
			var node = _react2["default"].findDOMNode(this);

			if (node) {
				el = node.querySelector("li.highlight");

				if (el) {
					el.classList.remove(HIGHTLIGHT_CLASS);
				}
			}

			return el;
		}
	}, {
		key: "handleClick",
		value: function handleClick(ev) {
			this.props.onChange(this.getOptionData(ev.currentTarget));
		}
	}, {
		key: "highlightPrev",
		value: function highlightPrev() {
			var prev = undefined;
			var current = this.unhighlight();

			if (current) {
				prev = current.previousElementSibling;
			}

			// If current and prev aren't found, start at the top.
			// Current is not found if there is no list item highlighted.
			// Prev is not found if the first list item is highlighted.
			if (!prev) {
				prev = _react2["default"].findDOMNode(this).lastChild;
			}

			this.highlight(prev);
		}
	}, {
		key: "highlightNext",
		value: function highlightNext() {
			var next = undefined;
			var current = this.unhighlight();

			if (current) {
				next = current.nextElementSibling;
			}

			// If current and next aren't found, start at the top.
			// Current is not found if there is no list item highlighted.
			// Next is not found if the last list item is highlighted.
			if (!next) {
				next = _react2["default"].findDOMNode(this).firstChild;
			}

			this.highlight(next);
		}
	}, {
		key: "select",
		value: function select() {
			var current = this.unhighlight();

			if (current) {
				this.props.onChange(this.getOptionData(current));
			}
		}
	}, {
		key: "getOptionData",

		/**
   * Get the key (id) and value (display name) of an option DOM element.
   *
   * @param {Object} el - Option DOM element
   * @returns {Object}
   */
		value: function getOptionData(el) {
			return {
				key: el.getAttribute("data-key"),
				value: el.getAttribute("data-value")
			};
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			if (this.props.values.length === 0) {
				return null;
			}

			var values = this.props.sortRelevance ? this.sortRelevance(this.props.values) : this.props.values;

			var listitems = values.map(function (data, index) {
				var displayValue = data.value;

				if (_this2.props.query.length) {
					var re = new RegExp(_this2.props.query, "ig");
					displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
				}

				var selectedValue = Array.isArray(_this2.props.value) ? _this2.props.value : [_this2.props.value];

				return _react2["default"].createElement("li", {
					className: (0, _classnames2["default"])({ selected: selectedValue.indexOf(data.value) > -1 }),
					dangerouslySetInnerHTML: { __html: displayValue },
					"data-key": data.key,
					"data-value": data.value,
					key: index,
					onClick: _this2.handleClick.bind(_this2),
					onMouseEnter: _this2.highlight.bind(_this2),
					onMouseLeave: _this2.unhighlight.bind(_this2) });
			});

			return _react2["default"].createElement(
				"ul",
				{
					className: "hire-options" },
				listitems
			);
		}
	}]);

	return Options;
})(_react2["default"].Component);

Options.defaultProps = {
	query: "",
	sortRelevance: true,
	value: "",
	values: []
};

Options.propTypes = {
	onChange: _react2["default"].PropTypes.func.isRequired,
	query: _react2["default"].PropTypes.string,
	sortRelevance: _react2["default"].PropTypes.bool,
	value: _hireFormsPropTypes.stringOrArrayOfString,
	values: _hireFormsPropTypes.arrayOfKeyValue
};

exports["default"] = Options;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-prop-types":1,"react":"react"}]},{},[2])(2)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"classnames":"classnames","hire-forms-prop-types":2,"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
/**
 * A string or an object,
 * example: {key: "somekey", value: "somevalue"}.
 */
var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
})]);

exports.stringOrKeyValue = stringOrKeyValue;
var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

exports.stringOrArrayOfString = stringOrArrayOfString;
var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
}));

exports.arrayOfKeyValue = arrayOfKeyValue;
/**
 * An array of strings or an array of key/value objects,
 * example: [{key: "somekey", value: "somevalue"}].
 */
var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
}))]);
exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;

},{"react":"react"}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsOptions = require("hire-forms-options");

var _hireFormsOptions2 = _interopRequireDefault(_hireFormsOptions);

var _hireFormsPropTypes = require("hire-forms-prop-types");

var Select = (function (_React$Component) {
	function Select(props) {
		_classCallCheck(this, Select);

		_get(Object.getPrototypeOf(Select.prototype), "constructor", this).call(this, props);

		this.state = { visible: false };
	}

	_inherits(Select, _React$Component);

	_createClass(Select, [{
		key: "isListOfStrings",
		value: function isListOfStrings(list) {
			return list.length && typeof list[0] === "string";
		}
	}, {
		key: "isKeyValueMap",
		value: function isKeyValueMap(map) {
			return map.hasOwnProperty("key") && map.hasOwnProperty("value");
		}
	}, {
		key: "stringArray2KeyValueArray",
		value: function stringArray2KeyValueArray(list) {
			return list.map(function (item) {
				return {
					key: item,
					value: item
				};
			});
		}
	}, {
		key: "handleInputClick",
		value: function handleInputClick() {
			this.setState({ visible: !this.state.visible });
		}
	}, {
		key: "handleOptionsChange",

		/**
   * @method
   * @param {object} value Map of key and value: {key: "somekey", value: "somevalue"}
   */
		value: function handleOptionsChange(value) {
			this.setState({ visible: false });

			// If the options prop is an array of strings,
			// return a string.
			if (this.isListOfStrings(this.props.options)) {
				value = value.value;
			}

			this.props.onChange(value);
		}
	}, {
		key: "render",
		value: function render() {
			var optionValues = undefined,
			    options = undefined;

			if (this.state.visible) {
				optionValues = this.isListOfStrings(this.props.options) ? this.stringArray2KeyValueArray(this.props.options) : this.props.options;

				options = _react2["default"].createElement(_hireFormsOptions2["default"], {
					onChange: this.handleOptionsChange.bind(this),
					sortRelevance: this.props.sortRelevance,
					values: optionValues });
			}

			var value = this.props.value === "" ? this.props.placeholder : this.props.value;

			if (this.isKeyValueMap(this.props.value)) {
				value = this.props.value.value;
			}

			return _react2["default"].createElement(
				"div",
				{ className: "hire-select" },
				_react2["default"].createElement(
					"div",
					{
						className: "input-container",
						onClick: this.handleInputClick.bind(this) },
					_react2["default"].createElement(
						"div",
						{ className: (0, _classnames2["default"])({
								"input": true,
								"placeholder": this.props.value === "" }) },
						value
					),
					_react2["default"].createElement(
						"button",
						null,
						"▾"
					)
				),
				options
			);
		}
	}]);

	return Select;
})(_react2["default"].Component);

Select.defaultProps = {
	value: "",
	options: []
};

Select.propTypes = {
	onChange: _react2["default"].PropTypes.func.isRequired,
	options: _hireFormsPropTypes.arrayOfStringOrArrayOfKeyValue,
	placeholder: _react2["default"].PropTypes.string,
	sortRelevance: _react2["default"].PropTypes.bool,
	value: _hireFormsPropTypes.stringOrKeyValue
};

exports["default"] = Select;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-options":1,"hire-forms-prop-types":3,"react":"react"}]},{},[4])(4)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"classnames":"classnames","hire-forms-options":6,"hire-forms-prop-types":3,"react":"react"}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1,"react":"react"}],4:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsStaticList = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
/**
 * A string or an object,
 * example: {key: "somekey", value: "somevalue"}.
 */
var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
})]);

exports.stringOrKeyValue = stringOrKeyValue;
var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

exports.stringOrArrayOfString = stringOrArrayOfString;
var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
}));

exports.arrayOfKeyValue = arrayOfKeyValue;
/**
 * An array of strings or an array of key/value objects,
 * example: [{key: "somekey", value: "somevalue"}].
 */
var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
}))]);
exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;

},{"react":"react"}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _listItem = _dereq_("./list-item");

var _listItem2 = _interopRequireDefault(_listItem);

var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

var StaticList = (function (_React$Component) {
	function StaticList(props) {
		_classCallCheck(this, StaticList);

		_get(Object.getPrototypeOf(StaticList.prototype), "constructor", this).call(this, props);

		this.state = { activeItemIndex: null };
	}

	_inherits(StaticList, _React$Component);

	_createClass(StaticList, [{
		key: "handleListItemClick",
		value: function handleListItemClick(index, ev) {
			this.setState({ activeItemIndex: index });

			if (this.props.onClick) {
				this.props.onClick(index, ev);
			}
		}
	}, {
		key: "handleListItemCancel",
		value: function handleListItemCancel() {
			this.setState({ activeItemIndex: null });
		}
	}, {
		key: "handleListItemRemove",
		value: function handleListItemRemove(index) {
			this.setState({ activeItemIndex: null });

			this.props.values.splice(index, 1);
			this.props.onChange(this.props.values);
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var list = this.props.values.map(function (item, index) {
				return _react2["default"].createElement(_listItem2["default"], {
					active: _this.state.activeItemIndex === index,
					data: item,
					key: index,
					onCancel: _this.handleListItemCancel.bind(_this, index),
					onClick: _this.handleListItemClick.bind(_this, index),
					onRemove: _this.handleListItemRemove.bind(_this, index) });
			});

			list = list.length ? this.props.ordered ? _react2["default"].createElement(
				"ol",
				null,
				list
			) : _react2["default"].createElement(
				"ul",
				null,
				list
			) : _react2["default"].createElement(
				"span",
				{ className: "hire-empty-list" },
				"The list is empty"
			);

			return _react2["default"].createElement(
				"div",
				{ className: "hire-static-list" },
				list
			);
		}
	}]);

	return StaticList;
})(_react2["default"].Component);

StaticList.defaultProps = {
	options: [],
	ordered: false,
	removable: true
};

StaticList.propTypes = {
	onChange: _react2["default"].PropTypes.func,
	onClick: _react2["default"].PropTypes.func,
	options: _hireFormsPropTypes.arrayOfStringOrArrayOfKeyValue,
	ordered: _react2["default"].PropTypes.bool,
	removable: _react2["default"].PropTypes.bool,
	values: _hireFormsPropTypes.arrayOfStringOrArrayOfKeyValue
};

exports["default"] = StaticList;
module.exports = exports["default"];

},{"./list-item":3,"hire-forms-prop-types":1,"react":"react"}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

var ext = function ext() {
	for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
		styles[_key] = arguments[_key];
	}

	return _extends.apply(undefined, [{}].concat(styles));
};

var liStyle = {
	cursor: "pointer"
};

var buttonStyle = {
	width: "10%"
};

var spanStyle = {
	width: "90%"
};

var inlineBlockStyle = {
	display: "inline-block",
	boxSizing: "border-box",
	verticalAlign: "top"
};

var ListItem = (function (_React$Component) {
	function ListItem() {
		_classCallCheck(this, ListItem);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(ListItem, _React$Component);

	_createClass(ListItem, [{
		key: "isKeyValueMap",
		value: function isKeyValueMap(map) {
			return map.hasOwnProperty("key") && map.hasOwnProperty("value");
		}
	}, {
		key: "render",
		value: function render() {
			var remove = undefined;

			var className = this.props.active ? "hire-list-item active" : "hire-list-item";

			if (this.props.active) {
				remove = _react2["default"].createElement(
					"button",
					{
						className: "remove",
						onClick: this.props.onRemove,
						style: ext(inlineBlockStyle, buttonStyle) },
					"x"
				);
			}

			var value = this.isKeyValueMap(this.props.data) ? this.props.data.value : this.props.data;

			var span = _react2["default"].createElement(
				"span",
				{
					className: "value",
					onClick: this.props.onClick,
					style: ext(inlineBlockStyle, spanStyle) },
				value
			);

			return _react2["default"].createElement(
				"li",
				{
					className: className,
					style: liStyle },
				span,
				remove
			);
		}
	}]);

	return ListItem;
})(_react2["default"].Component);

ListItem.defaultProps = {
	active: false
};

ListItem.propTypes = {
	active: _react2["default"].PropTypes.bool,
	data: _hireFormsPropTypes.stringOrKeyValue.isRequired,
	onCancel: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func,
	onClick: _react2["default"].PropTypes.func,
	onRemove: _react2["default"].PropTypes.func
};

exports["default"] = ListItem;
module.exports = exports["default"];

},{"hire-forms-prop-types":1,"react":"react"}]},{},[2])(2)
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _hireFormsStaticList = require("hire-forms-static-list");

var _hireFormsStaticList2 = _interopRequireDefault(_hireFormsStaticList);

var _hireFormsSelect = require("hire-forms-select");

var _hireFormsSelect2 = _interopRequireDefault(_hireFormsSelect);

var _hireFormsPropTypes = require("hire-forms-prop-types");

var SelectList = (function (_React$Component) {
	function SelectList() {
		_classCallCheck(this, SelectList);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(SelectList, _React$Component);

	_createClass(SelectList, [{
		key: "handleListChange",
		value: function handleListChange(values) {
			this.props.onChange(values);
		}
	}, {
		key: "handleSelectChange",
		value: function handleSelectChange(value) {
			this.props.values.push(value);
			this.props.onChange(this.props.values);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "hire-select-list" },
				_react2["default"].createElement(_hireFormsStaticList2["default"], {
					onChange: this.handleListChange.bind(this),
					values: this.props.values }),
				_react2["default"].createElement(_hireFormsSelect2["default"], {
					onChange: this.handleSelectChange.bind(this),
					options: this.props.options,
					placeholder: this.props.placeholder })
			);
		}
	}]);

	return SelectList;
})(_react2["default"].Component);

SelectList.defaultProps = {
	values: [],
	options: [],
	ordered: false
};

SelectList.propTypes = {
	async: _react2["default"].PropTypes.func,
	onChange: _react2["default"].PropTypes.func.isRequired,
	options: _hireFormsPropTypes.arrayOfStringOrArrayOfKeyValue,
	ordered: _react2["default"].PropTypes.bool,
	placeholder: _react2["default"].PropTypes.string,
	values: _hireFormsPropTypes.arrayOfStringOrArrayOfKeyValue
};

exports["default"] = SelectList;
module.exports = exports["default"];

},{"hire-forms-prop-types":1,"hire-forms-select":2,"hire-forms-static-list":4,"react":"react"}],6:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsOptions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
/**
 * A string or an object,
 * example: {key: "somekey", value: "somevalue"}.
 */
var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
})]);

exports.stringOrKeyValue = stringOrKeyValue;
var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

exports.stringOrArrayOfString = stringOrArrayOfString;
var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
}));

exports.arrayOfKeyValue = arrayOfKeyValue;
/**
 * An array of strings or an array of key/value objects,
 * example: [{key: "somekey", value: "somevalue"}].
 */
var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
}))]);
exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;

},{"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsPropTypes = require("hire-forms-prop-types");

var HIGHTLIGHT_CLASS = "highlight";

/**
 * Options are rendered beneath the autocomplete and select components.
 *
 * @class
 * @extends React.Component
 */

var Options = (function (_React$Component) {
	function Options() {
		_classCallCheck(this, Options);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Options, _React$Component);

	_createClass(Options, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var node = _react2["default"].findDOMNode(this);

			if (node) {
				node.style.zIndex = 1000;
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var node = _react2["default"].findDOMNode(this);
			node.style.zIndex = 0;
		}
	}, {
		key: "sortRelevance",

		/**
   * Sort props.values on relevance. A result is more relevant
   * when the search query is more at the beginning of the string.
   * String.indexOf(props.query): lower is better.
   *
   * @returns {Array<String>} Sorted values on relevance
   */
		value: function sortRelevance(values) {
			var _this = this;

			return values.sort(function (a, b) {
				a = a.value.toLowerCase();
				b = b.value.toLowerCase();

				var indexA = a.indexOf(_this.props.query);
				var indexB = b.indexOf(_this.props.query);

				if (indexA > indexB) {
					return 1;
				}

				if (indexA < indexB) {
					return -1;
				}

				if (indexA === indexB) {
					if (a > b) {
						return 1;
					}

					if (a < b) {
						return -1;
					}
				}

				return 0;
			});
		}
	}, {
		key: "highlight",
		value: function highlight(target) {
			// Check if target is an event object.
			if (target.hasOwnProperty("currentTarget")) {
				target = target.currentTarget;
			}

			target.classList.add(HIGHTLIGHT_CLASS);
		}
	}, {
		key: "unhighlight",

		/**
   * Unhighlight the currently highlighted option.
   *
   *
   */
		value: function unhighlight() {
			var el = undefined;
			var node = _react2["default"].findDOMNode(this);

			if (node) {
				el = node.querySelector("li.highlight");

				if (el) {
					el.classList.remove(HIGHTLIGHT_CLASS);
				}
			}

			return el;
		}
	}, {
		key: "handleClick",
		value: function handleClick(ev) {
			this.props.onChange(this.getOptionData(ev.currentTarget));
		}
	}, {
		key: "highlightPrev",
		value: function highlightPrev() {
			var prev = undefined;
			var current = this.unhighlight();

			if (current) {
				prev = current.previousElementSibling;
			}

			// If current and prev aren't found, start at the top.
			// Current is not found if there is no list item highlighted.
			// Prev is not found if the first list item is highlighted.
			if (!prev) {
				prev = _react2["default"].findDOMNode(this).lastChild;
			}

			this.highlight(prev);
		}
	}, {
		key: "highlightNext",
		value: function highlightNext() {
			var next = undefined;
			var current = this.unhighlight();

			if (current) {
				next = current.nextElementSibling;
			}

			// If current and next aren't found, start at the top.
			// Current is not found if there is no list item highlighted.
			// Next is not found if the last list item is highlighted.
			if (!next) {
				next = _react2["default"].findDOMNode(this).firstChild;
			}

			this.highlight(next);
		}
	}, {
		key: "select",
		value: function select() {
			var current = this.unhighlight();

			if (current) {
				this.props.onChange(this.getOptionData(current));
			}
		}
	}, {
		key: "getOptionData",

		/**
   * Get the key (id) and value (display name) of an option DOM element.
   *
   * @param {Object} el - Option DOM element
   * @returns {Object}
   */
		value: function getOptionData(el) {
			return {
				key: el.getAttribute("data-key"),
				value: el.getAttribute("data-value")
			};
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			if (this.props.values.length === 0) {
				return null;
			}

			var values = this.props.sortRelevance ? this.sortRelevance(this.props.values) : this.props.values;

			var listitems = values.map(function (data, index) {
				var displayValue = data.value;

				if (_this2.props.query.length) {
					var re = new RegExp(_this2.props.query, "ig");
					displayValue = data.value.replace(re, "<span class=\"highlight\">$&</span>");
				}

				var selectedValue = Array.isArray(_this2.props.value) ? _this2.props.value : [_this2.props.value];

				return _react2["default"].createElement("li", {
					className: (0, _classnames2["default"])({ selected: selectedValue.indexOf(data.value) > -1 }),
					dangerouslySetInnerHTML: { __html: displayValue },
					"data-key": data.key,
					"data-value": data.value,
					key: index,
					onClick: _this2.handleClick.bind(_this2),
					onMouseEnter: _this2.highlight.bind(_this2),
					onMouseLeave: _this2.unhighlight.bind(_this2) });
			});

			return _react2["default"].createElement(
				"ul",
				{
					className: "hire-options" },
				listitems
			);
		}
	}]);

	return Options;
})(_react2["default"].Component);

Options.defaultProps = {
	query: "",
	sortRelevance: true,
	value: "",
	values: []
};

Options.propTypes = {
	onChange: _react2["default"].PropTypes.func.isRequired,
	query: _react2["default"].PropTypes.string,
	sortRelevance: _react2["default"].PropTypes.bool,
	value: _hireFormsPropTypes.stringOrArrayOfString,
	values: _hireFormsPropTypes.arrayOfKeyValue
};

exports["default"] = Options;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-prop-types":1,"react":"react"}]},{},[2])(2)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"classnames":"classnames","hire-forms-prop-types":7,"react":"react"}],7:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1,"react":"react"}]},{},[5])(5)
});