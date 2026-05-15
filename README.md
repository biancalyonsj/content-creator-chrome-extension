<h1 align="center">Content Creator Chrome Extension</h1>

![image alt](https://github.com/biancalyonsj/content-creator-chrome-extension/blob/ffd534f82f330c1d76cd6c05b952e10bf0f218cf/chrome_demo1.jpg)
  
![image alt](https://github.com/biancalyonsj/content-creator-chrome-extension/blob/ffd534f82f330c1d76cd6c05b952e10bf0f218cf/chrome_demo2.jpg)

<p> Created a productivity-focused Chrome extension designed to help content creators capture, organize, and analyze social media posts for inspiration. 
   This tool enables users to save posts directly from their browser, add custom metadata (hooks, titles, platform tags), and 
  filter content to streamline research and improve content strategy. The goal is to help creators study viral hooks so that they can
  optimize their content for higher audience retention and growth.
</p>
<h2>Why This Project Matters</h2>

<p>
Instagram's CEO Adam Mosseri has repeatedly emphasized that the first 3 seconds of a Reel are critical. That's your only opportunity to stop users from scrolling past your video. 

If you want a better chance at going viral, you need a strong hook. 

People in your niche have already figured out what works. 

By searching for similar content on Instagram, you can find top performing creators in your niche and study their high performing videos. 
I built a Chrome Extension using vanilla JavaScript to help small content creators:
</p>
<ul>
<li>Save and organize viral posts they find while researching their niche</li>
<li>Revisit high-performing content across platforms</li>
<li>Break down hooks that consistently hook viewers past the critical first seconds</li>
</ul>
<p>
The goal isn’t just to save Instagram or TikTok posts. It’s to really understand why the hook works and try to incorporate that in your own content.
</p>

<p>
This project demonstrates real-world frontend engineering skills including state management, data persistence, dynamic UI rendering, and integration with browser APIs. By applying these core concepts, I was able to solve a practical problem for modern content creators.
</p>

<h2>Key Features</h2>

<ul>
<li>Save the current browser tab instantly using the <code>chrome.tabs.query</code> API</li>
<li>Store and manage structured post data including URL, custom title (rename), and content hooks</li>
<li>Tag posts by platform (TikTok, Instagram) for organized content tracking</li>
<li>Filter saved posts dynamically by category for faster content research</li>
<li>Edit and update saved entries in real time without reloading the UI</li>
<li>Persistent data storage using <code>localStorage</code> to retain user data across sessions</li>
<li>Delete individual posts or reset the entire dataset</li>
</ul>

<h2>Technical Highlights</h2>

<h3>Chrome Extension APIs & Browser Integration</h3> 
<ul>
<li>Integrated the <code>chrome.tabs.query</code> API to capture the active browser tab URL</li> 
<li>Built a seamless workflow for saving content directly from the user’s browsing session</li> 
<li>Handled asynchronous tab data retrieval and synchronized it with application state</li>
</ul>

<h3>State Management & Data Modeling</h3>
<ul>
<li>Designed a structured data model for posts, including URL, ID, hook, rename, and platform category</li>
<li>Managed application state using a centralized array (<code>myPosts</code>)</li>
<li>Implemented dynamic filtering logic to derive UI state from underlying data</li>
</ul>

<h3>Local Storage & Persistence</h3> 
<ul>
<li>Implemented persistent client-side storage using <code>localStorage</code></li> 
<li>Used <code>JSON.stringify()</code> and <code>JSON.parse()</code> for structured data handling</li> 
<li>Restored application state on load to maintain continuity across sessions</li> 
<li>Handled full state resets and UI synchronization</li>
</ul>

<h3>Dynamic DOM Rendering</h3> 
<ul>
<li>Built a reusable render pipeline to dynamically generate UI elements from application state</li> 
<li>Created interactive components (links, edit panels, filters) using pure JavaScript</li> 
<li>Implemented conditional rendering for renamed links and truncated URLs</li> 
<li>Updated the DOM in real time to reflect user interactions</li>
</ul>

<h3>User Interaction & Event-Driven UI</h3>
<ul>
<li>Implemented event listeners for adding, editing, deleting, and filtering posts</li>
<li>Built inline editing functionality with dynamically injected input fields</li>
<li>Managed UI state transitions (active edit panels, filters) for a smooth user experience</li>
</ul>
