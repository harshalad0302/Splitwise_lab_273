"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login_logout = function (_React$Component) {
    _inherits(Login_logout, _React$Component);

    function Login_logout() {
        _classCallCheck(this, Login_logout);

        return _possibleConstructorReturn(this, (Login_logout.__proto__ || Object.getPrototypeOf(Login_logout)).apply(this, arguments));
    }

    _createClass(Login_logout, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Splitwise"
                ),
                React.createElement(
                    "label",
                    null,
                    "Username  :"
                ),
                React.createElement("input", { type: "text", placeholder: "Enter Username", name: "username", required: true }),
                React.createElement("br", null),
                React.createElement(
                    "label",
                    null,
                    "Password  :"
                ),
                React.createElement("input", { type: "password", placeholder: "Enter Password", name: "password", required: true }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    null,
                    "Login"
                ),
                React.createElement(
                    "p",
                    null,
                    "OR"
                ),
                React.createElement(
                    "button",
                    null,
                    "SignUp"
                )
            );
        }
 }]);

    return Login_logout;
}(React.Component);

;

ReactDOM.render(React.createElement(Login_logout, null), document.getElementById("app"));
