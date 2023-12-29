
/**
 * 
 * @returns {Promise<Object>} returns a quote
 */
const fetchQuote = async () => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes'),
        data = await res.json();

    console.log(data[0]);
    return data[0];

}



/**
 * 
 * @param {HTMLElement} element 
 */
export const BreakingbadApp = async(element) => {

    console.log('BreakingbadApp');

    document.querySelector('#app-title').innerHTML = 'Breaking Bad APP';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote'),
        authorLabel = document.createElement('h3'),
        nextQuoteButton = document.createElement('button');

    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {

        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;

        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton)
    }

    nextQuoteButton.addEventListener('click', async() => {

        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);

    });

    fetchQuote()
        .then(renderQuote);


}