var words = "excite hour paddle look potato repeat attempt broad pin moan first unsuitable waves suck sore pencil bomb crazy versed needless describe satisfy clever ask bright acid extra-small mysterious tremble hot place abandoned mellow eggs promise noxious argument clip decorous vest sidewalk rude door letter nut compete panoramic rake communicate pretty branch join swim sail sudden employ coach acrid raspy charge bitter replace discover harm tiny mushy screw organic house irritate false cry crate boat unused gleaming wrist claim fanatical mug prick direful pie brick chess occur tooth whole zephyr trace whirl tub weight haunt income absent snail allow birthday unaccountable";
let wordsArray = words.split(" ");

// console.log(wordsArray)
let sortedArray = wordsArray.sort(function(wordOne, wordTwo){
    return wordTwo.length - wordOne.length  ;
});
console.log(sortedArray);

let max = "";
for(let i = 0; i < wordsArray.length; i++){
    if(wordsArray[i].length > max.length ){
        max = wordsArray[i];
    }
}

// var largestWord = wordsArray.reduce(function(largest,el){
//     if(el.length > largest.length ){
//         return largest = el;
//     }
//     return largest
// }, "")

var largestWord = wordsArray.reduce((largest,e) => e.length > largest.length ? e : largest, "");

largestWord

let shortestWord = wordsArray.reduce(
(shortest,e) => e.length > shortest.length ? shortest : e, wordsArray[0]
);
shortestWord

// sort by ABC

let sortedArrayABC = wordsArray.sort((wordOne,wordTwo) => {
    return wordTwo.localeCompare(wordOne)
});
console.log(sortedArrayABC);

