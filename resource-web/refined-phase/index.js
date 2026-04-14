const body = document.body; //body element must be declared
const visited = sessionStorage.getItem('visited'); //checks to see if the user has visited the page (loading it for the first time or refreshing)
if (!visited) {
    body.classList.add('loading');
    sessionStorage.setItem('visited', 'true'); //visited = true
} else {
    //does nothing 
}