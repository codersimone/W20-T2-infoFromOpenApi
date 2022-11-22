function getFavqs() {
    fetch('https://favqs.com/api/qotd')
    .then(response => response.json())
    .then(quote => {
        document.querySelector('.quoteOfTheDay').innerText = 'Цитата дня: ' + quote.quote.body;
        document.querySelector('.authorQuoteOfTheDay').innerText = 'Автор: ' + quote.quote.author;
    })
    .catch(err => {
        console.log(err);
        document.querySelector('div').innerText = 'Ошибка чтения текста'}); //МОЖНО УДАЛИТЬ ?!
}
getFavqs();
