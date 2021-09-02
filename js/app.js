// spinner options 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('result-container').style.display = displayStyle;
    document.getElementById('search-result-counter').style.display = displayStyle;
}


// search book 
const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // showing spinner 
    toggleSpinner('block');
    toggleSearchResult('none');
    // clearing the input field 
    searchInput.value = '';

    if(searchText === ''){
        displayError('Please type something to search.');
        document.getElementById('search-result-counter').textContent = '';
        toggleSpinner('none');
    }
    else{
        document.getElementById('display_error').textContent = '';

      const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResutl(data.docs))
    .catch(error => displayError(error))  
    }
    
}

// displaying error message 
const displayError = (errorMessage = 'Something is wrong. Try again later.') => {
	document.getElementById('display_error').innerHTML = `
		<h5 class="text-danger fw-bold my-4">${errorMessage}</h5>
	`;
};

// display the book cards 
const displaySearchResutl = books => {
    const resultContainer = document.getElementById('result-container');
    // setting search result amount 
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
                    <li>Author: ${book.author_name[0] ? book.author_name[0] : 'Author Not Found'}</li>
                    <li>Publisher: ${book.publisher[0] ? book.publisher[0] : 'Publisher Not Found'}</li>
                    <li>1st Publish Year: ${book.first_publish_year ? book.first_publish_year : 'First Publish Year Not Found'}</li>
                </ul>
            </div>
        </div>
        `;
        resultContainer.appendChild(div);
        
    });
    toggleSpinner('none');
    toggleSearchResult('block');

}