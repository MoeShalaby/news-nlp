async function handleSubmit(event) {
    try {
        event.preventDefault();
        if(!event) throw 'Event does not exist.';
        const articleValue = document.getElementById('article').value;
        if(!articleValue) throw 'You must provide article text/url/html';
        let result = '';
        document.getElementById('result').innerText = 'Loading..'
        if (Client.isUrl(articleValue)) result = await Client.NPLUrl(articleValue);
        else result = await Client.NPLText(articleValue);
        buildResult(result)
    } catch (error) {
        document.getElementById('result').innerText = error;
        alert(error)
    }
    
}

function buildResult(result){
    const resultContainer = document.getElementById('result');
    if(result.status.msg != 'OK') throw result.status.msg;
    resultContainer.innerHTML =`
    <h2>Result:</h2>
    <ul>
        <li><b>Polarity:</b> <span>${result.score_tag}</span></li>
        <li><b>Agreement:</b> <span>${result.agreement}</span></li>
        <li><b>Subjectivity:</b> <span>${result.subjectivity}</span></li>
        <li><b>Irony:</b> <span>${result.irony}</span></li>
        <li><b>Confidence:</b> <span>${result.confidence}</span></li>
    </ul>`;
    const sentenceList = document.createElement('div');
    sentenceList.classList.add('sentence-list');
    resultContainer.appendChild(sentenceList)

    const fragment = document.createDocumentFragment();
    for (const sentence of result.sentence_list) {
        const sentenceCard = document.createElement('div');
        sentenceCard.innerHTML = `
        <blockquote>${sentence.text}</blockquote>
        <ul>
            <li><b>Polarity:</b> ${sentence.score_tag}</li>
            <li><b>Agreement:</b> ${sentence.agreement}</li>
            <li><b>Confidence:</b> ${sentence.confidence}</li>
        </ul>
        `;
        sentenceCard.setAttribute('class', 'sentence-item');
        fragment.appendChild(sentenceCard);
    }
    sentenceList.appendChild(fragment);
}

export { handleSubmit }
