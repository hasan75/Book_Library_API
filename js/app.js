const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = ''

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResutl(data.docs))
    .catch(error => console.log(error))
}
const displaySearchResutl = books => {
    console.log(books)
}