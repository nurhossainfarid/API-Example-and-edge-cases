const loadQuotes = () => {
    fetch(`https://api.kanye.rest/`)
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quotes => {
    const showQuote = document.getElementById(`quote`);
    showQuote.innerText = quotes.quote

}