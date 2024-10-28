"use strict";
function generateLatinDictionary() {
    var input = document.getElementById("inputDictionary").value.trim();
    var resultElement = document.getElementById("result");
    var lines = input.split("\n").slice(1);
    var engToLatin = {};
    lines.forEach(function (line) {
        var _a = line.split(" - "), eng = _a[0], lat = _a[1];
        engToLatin[eng.trim()] = lat.split(", ").map(function (word) { return word.trim(); });
    });
    var latinToEng = {};
    Object.keys(engToLatin).forEach(function (eng) {
        engToLatin[eng].forEach(function (lat) {
            if (!latinToEng[lat])
                latinToEng[lat] = new Set();
            latinToEng[lat].add(eng);
        });
    });
    var result = ["".concat(Object.keys(latinToEng).length)];
    Object.keys(latinToEng)
        .sort()
        .forEach(function (lat) {
        var engWords = Array.from(latinToEng[lat]).sort();
        result.push("".concat(lat, " - ").concat(engWords.join(", ")));
    });
    resultElement.innerText = result.join("\n");
}
window.generateLatinDictionary = generateLatinDictionary;
