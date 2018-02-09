//
// This is just a stub for a function you need to implement!
//
function getStats(txt) {
    let result = {
        nChars: getNChars(txt),
        nWords: getNWords(txt),
        nLines: getNLines(txt),
        nNonEmptyLines: getnNonEmptyLines(txt),
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    }

    return result;
}


function getNChars(txt) {
    // DONE
    return txt.length;
}

function getNWords(txt) {
    // DONE
    var words = txt.match(/[0-9a-z]+/gi).length;

    return words;
}

function getNLines(txt) {
    // DONE --> COMMENT MY CODE
    var lines = txt.split(/\r\n|\r|\n/).length;
    return lines;

    //  ALTERNATIVE IMPLEMENTATION:
    //return txt.split("\n").length;
}

function getnNonEmptyLines(txt) {
    // DONE --> COMMENT MY CODE
    var nonEmptyLines = (txt.match(/^\s*\S/gm) || "").length;

    return nonEmptyLines;
}

function getAverageWordLength(txt) {
    // FIX ME
    var averageWordLength = txt.match("\n");

    return averageLength;
}
