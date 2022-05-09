const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


const getUser = async (username) => {
    const response = await fetch(`${API_URL}${username}`);
    const data = await response.json();
    console.log(data);
    createUserCard(data);
    getRepos(username);
}

const getRepos = async (username) => {
    const response = await fetch(`${API_URL}${username}/repos`);
    const data = await response.json();
    addReposToCard(data);
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');
    repos.forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;
        reposEl.appendChild(repoEl);
    })
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>Followers: ${user.followers}</li>
                    <li>Following: ${user.following}</li>
                    <li>Repos: ${user.public_repos}</li>
                    <li>Twitter: ${user.twitter_username}</li>
                    <li>Location: ${user.location}</li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = search.value;
    if(username) {
        getUser(username);
        search.value = '';
    }
})

getUser('nabendu82');


