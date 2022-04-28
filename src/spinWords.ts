export function spinWords(words: string): string {
    return words.replace(/\w{5,}/g, function(words){
        return words.split('').reverse().join('');
    });
    //TODO Have fun :)
}