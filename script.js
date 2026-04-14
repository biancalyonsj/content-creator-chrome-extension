const inputButton = document.getElementById('input-btn');
const deleteAllButton = document.getElementById('delete-btn');
const inputEl = document.getElementById('input-el');
const postUlElement = document.getElementById('post-ul');
const profileButton = document.getElementById('profile-btn');

// user notes DOM elements
const renameInput = document.getElementById('rename-input');
const hookInput = document.getElementById('hook-input');
const saveEditButton = document.getElementById('save-edit-button');
const igRadio = document.getElementById('ig-post');
const tiktokRadio = document.getElementById('tiktok-post');
const urlStringLen = 51;


// contains post objects with values for urls and hooks
let myPosts = [];

// retrieve urls added by user
const postsFromLocalStorage = JSON.parse(localStorage.getItem('myPosts'));

// if posts are present in array, display to user
if (postsFromLocalStorage){
    // update data set to contain URLs added by user
    myPosts = postsFromLocalStorage;
    renderPost();
}

/** 
    Create the post object
**/
function createPost(url){
    let post = {
        url,
        id: Date.now(),
        hook: '',
        rename: '',
        social: ''
    }
    // update array to add new url
    myPosts.push(post);
}

/** 
    Display the URLs the user added to their list
**/
function renderPost(){
    // clear the current list of ul elements
    postUlElement.innerHTML = '';

    // for each post url, create nested li and div elements
    myPosts.forEach((post) => {
        // create a new li element for the post
        const postLi = document.createElement('li');
        // assign class name
        postLi.classList.add('post-li');
        // assign id
        postLi.id = `${post.id}`;

        //create div class for post row
        const postRow = document.createElement('div');
        // assign class name
        postRow.classList.add('post-row');

        // anchor element
        const a = document.createElement('a');
        // Create the text node for anchor element. Truncate if longer than 51 chars
        let link;
        if ((post.url).length > urlStringLen){
            const shortenLink = (post.url).substring(0, urlStringLen - 3) + '...';
            link = document.createTextNode(shortenLink);

        } else {
            link = document.createTextNode(post.url);
        }
        
        // Append the text node to anchor element.
        a.appendChild(link);
        // Set the href property.
        a.href = post.url;

        // create edit button
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-post-btn");
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editBtn.addEventListener("click", () => renderEdit(post.id));        

        // create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-post-btn");
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        deleteBtn.addEventListener("click", () => deletePost(post.id));

        // add link, edit, and delete button to post row div row
        postRow.appendChild(a);
        postRow.appendChild(editBtn);
        postRow.appendChild(deleteBtn);

        // add post row div row to li element
        postLi.appendChild(postRow);
        // add post to ul element
        postUlElement.appendChild(postLi);

    })
}

/** 
**  Remove post from list
**/
function deletePost(id){
    // remove post from list
    myPosts = myPosts.filter((post) => post.id !== id);
    // save update to local storage
    localStorage.setItem('myPosts', JSON.stringify(myPosts));
    // render new ui with deleted post
    renderPost();
}

/** 
**  Display the edit block under the post url
**/
function renderEdit(id){
    // create div container for hook and rename input
    const editPost = document.createElement('div');
    // add class name
    editPost.classList.add('edit-post');    
    // add class active to display ui
    editPost.classList.add('active');

    // create inputs for rename 
    const renameInput = document.createElement('input');
    renameInput.type = 'text';
    renameInput.id = 'rename-input';
    renameInput.setAttribute('placeholder', 'Rename URL');
    //const pRename = document.createElement('p');
    //pRename.textContent = 'Rename URL';


    // create inputs for hook
    const hookInput = document.createElement('input');
    hookInput.type = 'text';
    hookInput.id = 'hook-input';
    hookInput.setAttribute('placeholder', 'Add Video Hook');
    //const pHook = document.createElement('p');
    //pHook.textContent = 'Hook';

    // add inputs and p elements to edit div container
    editPost.appendChild(renameInput)
    //editPost.appendChild(pRename)
    editPost.appendChild(hookInput)
    //editPost.appendChild(pHook)

    // ******** TODO: Fix Radio Buttons --  should only be able to select 1
    // radio buttons to filter social media
    const radioFilter = document.createElement('div');
    radioFilter.classList.add('filter-radio');

    // create ig radio button and label
    const igFilter = document.createElement('input');
    igFilter.setAttribute('type', 'radio');
    igFilter.setAttribute('id', 'ig-post');
    const igLabel = document.createElement('label');
    const igLabelText = document.createTextNode('Instagram');
    igLabel.textContent = 'Instagram';
    igLabel.setAttribute('for', 'filter-post');

    // create tiktok radio button
    const tiktokFilter = document.createElement('input');
    tiktokFilter.setAttribute('type', 'radio');
    tiktokFilter.setAttribute('id', 'tiktok-post');
    const tiktokLabel = document.createElement('label');
    const tiktokLabelText = document.createTextNode('TikTok');
    tiktokLabel.textContent = 'TikTok';
    tiktokLabel.setAttribute('for', 'filter-post');

    // append radio buttons and labels to div
    radioFilter.appendChild(igFilter);
    radioFilter.appendChild(igLabelText);
    radioFilter.appendChild(tiktokFilter);
    radioFilter.appendChild(tiktokLabelText);

    // append radio filter to edit post
    editPost.appendChild(radioFilter);


    // save all edits
    const saveButton = document.createElement('button');
    saveButton.classList.add("save-edit-btn");
    saveButton.textContent = 'Save Edit'
    saveButton.addEventListener("click", () => savePost(id)); 

    // nest all edit post elements in edit post container div 
    editPost.appendChild(saveButton);

    // find the correct post to display edit div
    const postLiElem = document.getElementById(String(id));

    // nest edit post container div below corresponding post
    postLiElem.appendChild(editPost);
}

/** 
**  Display the edit block under the post url
**/
function savePost(id){
    let editPost = myPosts.filter((post) => post.id === id);
    // update rename
    // update hook
    // update filter
    // add post to correct filter

    // save edits
    //localStorage.setItem('myPosts', JSON.stringify(myPosts));

    // close the ui
    const savePost = document.querySelector('.edit-post');
    savePost.classList.remove('active');

    // display posts to user
    renderPost();
}


inputButton.addEventListener('click', () =>{
    // create post object with url
    createPost(inputEl.value);
    // clear input text container
    inputEl.value = '';
    // display Post urls to user
    renderPost();
    // save to local storage
    localStorage.setItem('myPosts', JSON.stringify(myPosts));
});

deleteAllButton.addEventListener('click', () =>{
    //clear localStorage
    localStorage.clear();
    // clear myPosts array
    myPosts = [];
    // clear DOM element
    renderPost();
})

// when the user clicks on the tab button, the current chrome url will be saved 
profileButton.addEventListener('click', ()=>{
    // grab the url of the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // create post object and add the current tab to the array
        createPost(tabs[0].url);
        renderPost();
    })

});


