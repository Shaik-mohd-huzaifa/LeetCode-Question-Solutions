const findContentChildren = (g, s) => {
    let totalChildrenContent = 0 
    g = g.sort((a,b) => a - b); // Sorts the Arrays in Ascending Order
    s = s.sort((a,b) => a - b);
    let i = 0
    while(g.length > i && s.length > 0){
        for(let j = 0;j < s.length;j++){
            if(s[j] >= g[i]){
                totalChildrenContent++
                s.splice(j, 1)
                break;
            }
        }
        i++
    }
    return totalChildrenContent
};

// Test Values
const g = [1,2,3];
const s = [1,1]

console.log(findContentChildren(g, s)); 