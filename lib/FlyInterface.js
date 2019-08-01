"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var weight = Symbol('weight');

var FlyInterface = function () {
  function FlyInterface(obj) {
    _classCallCheck(this, FlyInterface);

    if (this.isObject(obj)) {
      this.infos = obj;
    } else {
      this.infos = {};
    }
    this.beforeInfos = JSON.parse(JSON.stringify(this.infos));
  }

  _createClass(FlyInterface, [{
    key: "isObject",
    value: function isObject(data) {
      if (data instanceof Array) {
        return false;
      }
      if ((typeof data === "undefined" ? "undefined" : _typeof(data)) == "object") {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "updateBeforeInfos",
    value: function updateBeforeInfos() {
      this.beforeInfos = JSON.parse(JSON.stringify(this.infos));
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.infos = data;
      return this;
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.infos.url;
    }
  }, {
    key: "overrideBy",
    value: function overrideBy(data) {
      debugger;
      if (this.isObject(data)) {
        for (var key in data) {
          this.infos[key] = data[key];
        }
      }
      return this;
    }
  }, {
    key: "setInput",
    value: function setInput(data) {
      this.infos.input = data;
      return this;
    }
  }, {
    key: "setOutput",
    value: function setOutput(data) {
      this.infos.output = data;
      return this;
    }
  }, {
    key: "setSubmitId",
    value: function setSubmitId(str) {
      this.infos.submitId = str;
    }
  }, {
    key: "flyProduceAction",
    value: function flyProduceAction() {
      this.infos.flyProduceRef && this.infos.belongComponent && this.infos.belongComponent.refs[this.infos.flyProduceRef] && this.infos.belongComponent.refs[this.infos.flyProduceRef].action();
    }
  }, {
    key: "flyChangePage",
    value: function flyChangePage(page) {
      debugger;
      this.infos.pageValue = page;
      this.flyProduceAction();
    }
  }, {
    key: "flyChangePageAndSize",
    value: function flyChangePageAndSize(page, size) {
      this.infos.pageValue = page;
      this.infos.size = size;
      this.flyProduceAction();
    }
  }, {
    key: "flyChangeSize",
    value: function flyChangeSize(size) {
      debugger;
      this.infos.size = size;
      this.flyProduceAction();
    }
  }, {
    key: "getPage",
    value: function getPage() {
      debugger;
      return this.infos.pageValue;
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      debugger;
      return this.infos.total;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.infos.size;
    }
  }]);

  return FlyInterface;
}();

exports.default = FlyInterface;