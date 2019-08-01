const weight = Symbol('weight');
class FlyInterface{
  constructor(obj){
    if (this.isObject(obj)) {
      this.infos = obj;
    } else {
      this.infos = {};
    }
    this.beforeInfos = JSON.parse(JSON.stringify(this.infos));
  }
  isObject(data) {
    if (data instanceof Array) {
      return false;
    }
    if (typeof data == "object") {
      return true;
    } else {
      return false;
    }
  }
  updateBeforeInfos () {
    this.beforeInfos = JSON.parse(JSON.stringify(this.infos));
  };
  setData (data) {
    this.infos = data;
    return this;
  };
  getUrl () {
    return this.infos.url;
  };
  overrideBy (data) {
    debugger;
    if (this.isObject(data)) {
      for (var key in data) {
        this.infos[key] = data[key];
      }
    }
    return this;
  };
  setInput (data) {
    this.infos.input = data;
    return this;
  };
  setOutput(data) {
    this.infos.output = data;
    return this;
  };
  setSubmitId (str) {
    this.infos.submitId = str;
  };

  flyProduceAction(){
    this.infos.flyProduceRef &&
    this.infos.belongComponent &&
    this.infos.belongComponent.refs[this.infos.flyProduceRef] &&
    this.infos.belongComponent.refs[this.infos.flyProduceRef].action();
  }

  flyChangePage (page) {
    debugger
    this.infos.pageValue = page;
    this.flyProduceAction();
  };

  flyChangePageAndSize(page,size){
    this.infos.pageValue = page;
    this.infos.size = size;
    this.flyProduceAction();
  }

  flyChangeSize (size) {
    debugger
    this.infos.size = size;
    this.flyProduceAction();
  };

  getPage(){
    debugger
    return this.infos.pageValue;
  }

  getTotal(){
    debugger
    return this.infos.total;
  }

  getSize(){
    return this.infos.size;
  }

}
export  default FlyInterface;
