'use strict'

class CircleService {

    getCirclesWords(arrayWords) {
        let ret = [];

        for (let i = 0; i < arrayWords.length; i++) {
            let rest = this.getCirclesWords(arrayWords.slice(0, i).concat(arrayWords.slice(i + 1)));

            if (!rest.length) {
                ret.push([arrayWords[i]])
            } else {
                for (let j = 0; j < rest.length; j++) {
                    if (this._checkWords(arrayWords[i], rest[j][0])) {
                        ret.push([arrayWords[i]].concat(rest[j]))
                    } 
                }
            }
        }
        return ret;
    }

    _checkWords(firstWord, lastWord) {
        return ((firstWord.substr(firstWord.length - 1)) == (lastWord.substr(0,1)))
    }

}


module.exports = CircleService;