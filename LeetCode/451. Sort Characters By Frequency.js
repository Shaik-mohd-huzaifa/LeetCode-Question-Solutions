var frequencySort = function(s) {
    let reversedString = {}
    let reversed = ""
    let count = []
    for(let i = s.length - 1;i >= 0;i--){
      let char = s[i]
      reversedString[char] ? reversedString[char].push(i) : reversedString[char] = [i];  
    }

    let arrays = Object.values(reversedString);
    arrays = arrays.sort((a, b) => b.length - a.length)

    for(let i = 0;i < arrays.length;i++){
        for(let j = 0;j < arrays[i].length;j++){
            const ele = arrays[i][j]
            reversed += s[ele];
        }
    }
}