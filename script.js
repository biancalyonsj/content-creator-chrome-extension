const inputButton = document.getElementById('input-btn');
const deleteButton = document.getElementById('delete-btn');
const inputEl = document.getElementById('input-el');
const ulElement = document.getElementById('ul-el');
const tabButton = document.getElementById('tab-btn');

let myPosts = [];

// retrieve urls added by user
const postsFromLocalStorage = JSON.parse(localStorage.getItem('myPosts'));

/** 
    Display the URLs the user added to their list
**/
function render(posts){
    // initialize an empty string to store url li elements
    let listItems = '';
    // retrieve each url in array and display to user in unordered list
    for (let i = 0; i < posts.length; i++){
    listItems += `
        <li>
            <a target="_blank" href="${posts[i]}" target="_blank">${posts[i]}</a>
        </li>
        `;
    }
    // nest all li elements inside of the ul element
    ulElement.innerHTML = listItems;
}

// if posts are present in array, display to user
if (postsFromLocalStorage){
    // update data set to contain URLs added by user
    myPosts = postsFromLocalStorage;
    render(myPosts);
}

inputButton.addEventListener('click', () =>{
    myPosts.push(inputEl.value);
    // clear input container
    inputEl.value = '';
    // display list of URLs
    render(myPosts);
    // save to local storage
    localStorage.setItem('myPosts', JSON.stringify(myPosts));

});

deleteButton.addEventListener('click', () =>{
    //clear localStorage
    localStorage.clear();
    // clear myPosts array
    myPosts = [];
    // clear DOM element
    render(myPosts);
})

// when the user clicks on the tab button, the current chrome url will be saved 
tabButton.addEventListener('click', ()=>{
    // grab the url of the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // add the current tab to the array
        myPosts.push(tabs[0].url);
        localStorage.setItem('myPosts', JSON.stringify(myPosts));
        render(myPosts);
    })

});

