var repeatedCharacter = function(s) {
    obj = {}
    for(let i of s){
        obj[i] = (obj[i] || 0) + 1;

        if(obj[i] == 2){
            return i
        }
    }
};