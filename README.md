<h1 align="center">Content Creator Bookmarker</h1>

![image alt](https://github.com/biancalyonsj/content-creator-chrome-extension/blob/390f85a6066dce11a850e3ae2053bb7d2eaa1f20/extention_no_links.jpg)

<p>Created a Google Chrome extention for content creators to save Instagram, TikTok, and YouTube posts for later reference.
  Very useful when researching various different type of content from other creators. This extention allows creators to easily save and find
  posts they save at a later date.</p>
  
![image alt](https://github.com/biancalyonsj/content-creator-chrome-extension/blob/390f85a6066dce11a850e3ae2053bb7d2eaa1f20/extention_w_links.jpg)

<h2>Concepts Learned</h2>
<h3>Chrome Extension APIs & Browser Integration</h3> 
<li>Integrated the <code>chrome.tabs.query</code> API to programmatically capture the active browser tab URL</li> 
<li>Built a seamless workflow for saving content directly from the user’s current browsing session</li> 
<li>Leveraged asynchronous callback handling to retrieve tab data and update application state in real time</li>

<h3>Local Storage & Persistent State Management</h3> 
<li>Implemented persistent client-side storage using <code>localStorage</code> to retain saved posts across browser sessions</li> 
<li>Used <code>JSON.stringify()</code> and <code>JSON.parse()</code> for structured data storage and retrieval</li> 
<li>Initialized application state from stored data to restore the user’s saved content on load</li> 
<li>Handled full state resets by clearing local storage and synchronizing the UI accordingly</li>

<h3>DOM Manipulation & Dynamic Rendering</h3> 
<li>Created a reusable <code>render()</code> function to dynamically generate UI elements from application state</li> 
<li>Used template literals to efficiently construct HTML elements for saved links</li> 
<li>Updated the DOM in real time using <code>innerHTML</code> to reflect state changes</li> 
<li>Rendered interactive anchor elements with <code>target="_blank"</code> for improved user navigation</li>
