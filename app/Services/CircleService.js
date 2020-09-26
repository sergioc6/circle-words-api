'use strict'

class CircleService {

    getCirclesWords(arrayWords) {
        let permutations = this.getPermutations(arrayWords);
        
        permutations.forEach((element, index) => {
            if (this._checkWords(element[element.length -1], element[0])) {
                element.push(element[0])
            } else {
                permutations.splice(index,1)
            }
        });
        
        return permutations;
    }

    getPermutations(list) {
        // Empty list has one permutation
        if (list.length == 0)
            return [[]];
        var result = [];

        for (var i = 0; i < list.length; i++) {
            // Clone list (kind of)
            var copy = Object.create(list);

            // Cut one element from list
            var head = copy.splice(i, 1);

            // Permute rest of list
            var rest = this.getPermutations(copy);

            // Add head to each permutation of rest of list
            for (var j = 0; j < rest.length; j++) {
                if (this._checkWords(head[head.length -1], rest[j])) {
                    var next = head.concat(rest[j]);
                    result.push(next);
                }
            }
        }
        return result;
    }

    _checkWords(firstWord, lastWord) {
        if (lastWord.length == 0) {
            return true
        }
        return ((firstWord.substr(firstWord.length - 1)) == (lastWord[0].substr(0, 1)))
    }

}


module.exports = CircleService;