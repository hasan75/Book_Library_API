const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    if(searchText === ''){
        console.log('error');
        document.getElementById('search-result-counter').textContent = ''
    }
    else{
      const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResutl(data.docs))
    .catch(error => console.log(error))  
    }
    
}
const displaySearchResutl = books => {
    console.log(books.length)
    const resultContainer = document.getElementById('result-container');
    document.getElementById('search-result-counter').innerHTML = `
    <p class="text-white p-3 mb-5 bg-body text-center border rounded">${books.length} Search Results Found </p>
    `;

}