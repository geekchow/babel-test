 export default class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    }

    //Static class properties
    static staticProperty = "babeliscool";
    static staticFunction = function() {
      return Bork.staticProperty;
    }
  }