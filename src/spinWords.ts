export function spinWords(words: string): string {
    let spinned = "";
    if(spinned.split(" ").includes(words)){
        for(let i = 0; i < words.length; ++i){
            if(words.charAt(i) !== ' '){
                if(words[i].length >= 5){
                    for(let j = words[i].length; j >= 0; --j){
                      spinned += words[j];  
                    }
                }
            }
        }
    }
    else{
        spinned = words;
    }
    return spinned;
    //TODO Have fun :)
}