# marvel_frontend

http://marveluniverse.surge.sh/

also utilizing backend data from my deployed JSON
https://marvelcu.herokuapp.com/ 
(see https://github.com/jp-reynolds/marvel_backend for more details)

For Project 3, I created a MarvelWiki.  WIth all of the new movies coming out it can be hard to keep track of all the characters and what is going on so I created a site for people to contribute to the marvel universe and stay up to date.  

User Stories...
1. User opens first page and the marvel intro starts playing, they see 4 button options, and a list of movie titles underneath.  
2. User navigates to Heroes page and sees all of the famous avengers and heroes, on click they can see the character bio and add/edit characters as they see fit.
3. User navigates to the Villains page and sees all the famous villains, same functionality as the hero page.
4. User navigates to Locations page to find all the places the avengers/villains have stopped by at can see the events and summary of those places.  Add/edit places as they see fit. 
5. 2.0 - theory page where people can contribute their ideas and thoeries as to where to marvel universe is going
6. 2.0 - have countdown timers for each movie on the front page so people have something to check in on.


Approach taken...

Jumping into my first react project I knew I was going to run into some things I didn't know how to do.  So I started by getting my backend database set up and deployed so I didn't have to worry about it later.  I then started by mapping out all of my pages and getting my routes and navbar to work together so I knew what I needed to fill in on what page. From there I took it step by step and included things one at a time and making sure they were slightly responsive and aligned to make it easier for later.  


Technologies used...

React...
1. Utilized having multiple, dynamic components.  Seperated my concerns between some components but realizing what children components each parent would have. 
2. Passing down information as props made it easy to communicate information.
3. React-Bootstrap was installed for navbar, modals, and forms.
4. ready-player was installed to get the marvel intro movie to play at the homepage.

Axios...
1. installed axios to react and used it to communicate with my back end(CRUD)

CSS...
1. utilized for basic styling purposed

Unsolved Problems...
1. I would like to make this site responsive on all media devices.
2. Add a bit more animation between pages and events
3. Add a theory page and text form for people to talk about their ideas.