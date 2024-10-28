function processLanguages(data: string): { allKnown: string[], anyKnown: string[] } {
    const lines = data.trim().split('\n');
    const numStudents = parseInt(lines[0].trim(), 10);
    const allKnownSet = new Set<string>(lines.slice(1, parseInt(lines[1]) + 2).map(lang => lang.trim()));
    const anyKnownSet = new Set<string>(allKnownSet);
    let i = 1;
    while (i < lines.length) {
        const numLangs = parseInt(lines[i].trim(), 10);
        const currentSet = new Set<string>(lines.slice(i + 1, i + numLangs + 1).map(lang => lang.trim()));

        allKnownSet.forEach(lang => {
            if (!currentSet.has(lang)) {
                allKnownSet.delete(lang);
            }
        });
        currentSet.forEach(lang => anyKnownSet.add(lang));
        i += numLangs + 1;
    }
    const allKnown = Array.from(allKnownSet).sort();
    const anyKnown = Array.from(anyKnownSet).sort();
    return { allKnown, anyKnown };
}
// Доступ к функции из HTML
(window as any).processData = () => {
    const inputEl = document.getElementById("inputData") as HTMLTextAreaElement;
    const resultEl = document.getElementById("result")!;
    const result = processLanguages(inputEl.value);
    resultEl.innerHTML = `${result.allKnown.length}\n${result.allKnown.join('\n')}\n${result.anyKnown.join('\n')}`;
};
