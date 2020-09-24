'use strict'

class CircleService {

    permuteArray(arrayParam) {
        let ret = [];

        for (let i = 0; i < arrayParam.length; i = i + 1) {
          let rest = this.permuteArray(arrayParam.slice(0, i).concat(arrayParam.slice(i + 1)));
      
          if(!rest.length) {
            ret.push([arrayParam[i]])
          } else {
            for(let j = 0; j < rest.length; j = j + 1) {
              ret.push([arrayParam[i]].concat(rest[j]))
            }
          }
        }
        return ret;
    }


}


module.exports = CircleService;