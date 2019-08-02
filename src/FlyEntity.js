class FlyEntity {
  constructor(data){
    this.infos = data;
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
  upCaseFirst(str){
    if(typeof str==="string" && str.length>0){
      return (str.substr(0,1).toUpperCase()+str.substr(1))
    }
    return "";
  }
  InitInfos(obj) {
    debugger
    if (this.isObject(obj)) {
      debugger
      for (var key in obj) {
        if(this.infos["set"+this.upCaseFirst(key)]===undefined ){
          var param=this.infos;
          this.infos["set"+this.upCaseFirst(key)]=function(e){
            if(e && e.target && e.target.value){
              param[key]=e.target.value;
              this.setState(this);
            }else if(e){
              param[key]=e.target.value;
              this.setState(this);
            }

          }
        }
        this.infos[key] = obj[key];
      }
    }
    return this;
  };
  copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  };
  List (num) {
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
  };
  instance () {
    return this.infos;
  };
}
export default FlyEntity;