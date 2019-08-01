"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlyEntity = function () {
  function FlyEntity(data) {
    _classCallCheck(this, FlyEntity);

    this.infos = data;
  }

  _createClass(FlyEntity, [{
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
    key: "upCaseFirst",
    value: function upCaseFirst(str) {
      if (typeof str === "string" && str.length > 0) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
      }
      return "";
    }
  }, {
    key: "InitInfos",
    value: function InitInfos(obj) {
      debugger;
      if (this.isObject(obj)) {
        for (var key in obj) {
          this.infos[key] = obj[key];
        }
      }
      return this;
    }
  }, {
    key: "copy",
    value: function copy(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }, {
    key: "List",
    value: function List(num) {
      if (typeof num == "number") {
        var list = [];
        while (num > 0) {
          list.push(this.copy(this.infos));
          num = num - 1;
        }
        this.infos = list;
      } else if (num instanceof Array) {
        this.infos = num;
      } else {
        this.infos = [];
      }
      return this;
    }
  }, {
    key: "instance",
    value: function instance() {
      return this.infos;
    }
  }]);

  return FlyEntity;
}();

exports.default = FlyEntity;