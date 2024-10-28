function generateLatinDictionary(): void {
    const input = (document.getElementById("inputDictionary") as HTMLTextAreaElement).value.trim();
    const resultElement = document.getElementById("result")!;
    const lines = input.split("\n").slice(1);

    const engToLatin: { [key: string]: string[] } = {};
    lines.forEach(line => {
        const [eng, lat] = line.split(" - ");
        engToLatin[eng.trim()] = lat.split(", ").map(word => word.trim());
    });

    const latinToEng: { [key: string]: Set<string> } = {};
    Object.keys(engToLatin).forEach(eng => {
        engToLatin[eng].forEach(lat => {
            if (!latinToEng[lat]) latinToEng[lat] = new Set();
            latinToEng[lat].add(eng);
        });
    });

    const result = [`${Object.keys(latinToEng).length}`];
    Object.keys(latinToEng)
        .sort()
        .forEach(lat => {
            const engWords = Array.from(latinToEng[lat]).sort();
            result.push(`${lat} - ${engWords.join(", ")}`);
        });

    resultElement.innerText = result.join("\n");
}

(window as any).generateLatinDictionary = generateLatinDictionary;
