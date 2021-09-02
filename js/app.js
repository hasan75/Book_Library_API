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
    const resultContainer = document.getElementById('result-container');
    document.getElementById('search-result-counter').innerHTML = `
    <p class="text-white p-3 mb-5 bg-body text-center border rounded">${books.length} Search Results Found </p>
    `;
    // clearing search result after a search 
    resultContainer.textContent = '';
    //showing all the book resluts
    books?.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img height="350px" src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : 10909258}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <ul class="card-text">
                    <li>Author: ${book.author_name[0] ? book.author_name[0]: 'Author Not Found'}</li>
                    <li>Publisher: ${book.publisher[0]}</li>
                    <li>1st Publish Year: ${book.first_publish_year}</li>
                </ul>
            </div>
        </div>
        `;
        resultContainer.appendChild(div)
        
    });

}