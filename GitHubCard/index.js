import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/ChristOscar')
.then(resp => {
  console.log(resp)
}).catch(error => {
  console.log(error);
  const errorMsg = document.createElement('p');
      errorMsg.textContent = "AHHHHHHH";
      entryPoint.appendChild(errorMsg);
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitCardMaker(object){
  // instandtiating the elements
  const gitCard = document.createElement('div');
  const pImage = document.createElement('img');
  const gitContent = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  // setting class names, attributes and text 
  gitCard.classList.add('card');
  
  gitCard.appendChild(pImage);
  pImage.src = object.data.avatar_url;

  gitContent.classList.add('card-info');
  gitCard.appendChild(gitContent);

  name.textContent = object.data.name;
  name.classList.add('name');
  gitContent.appendChild(name);

  userName.textContent = object.data.login;
  userName.classList.add('username');
  gitContent.appendChild(userName);

  location.textContent = object.data.location;
  gitContent.appendChild(userName);

  profile.textContent = object.data.html_url;



}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
