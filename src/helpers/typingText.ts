export async function typeSentence(word, elRef, delay = 100) {
    const letters = word.split("");
    let i = 0;
    while (i < letters.length) {
        await wait(delay);
        elRef.textContent! = elRef.textContent + letters[i];
        i++
    }
    return;
}

export async function deleteSentence(elRef) {
    const sentence = elRef.textContent;
    const letters = sentence.split('');
    while (letters.length > 0) {
        await wait(100);
        letters.pop();
        elRef.textContent =letters.join('');
    }
}

export async function carousel(list, elRef) {
    let i = 0;
    while (true) {
        await typeSentence(list[i], elRef);
        await wait(1500);
        await deleteSentence(elRef)
        i++
        if (i === list.length) i = 0;
    }
}

async function wait(ms: number): Promise<void> {
    return new Promise(
        (resolve) => setTimeout(resolve, ms)
    )
}