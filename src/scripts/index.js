const body = document.querySelector('body');
const main = document.querySelector('main');
const article = document.querySelector('article');
const contSuggestion = document.querySelector('.containerSuggestion');
const ulSuggestion = document.querySelector('.containerSuggestion__listSuggestion');

body.appendChild(main);
main.appendChild(article);
article.appendChild(contSuggestion);
contSuggestion.append(ulSuggestion);

function CreatCardSuggestion(listUsers) {
    for (let i = 0; i < listUsers.length; i++) {
        for (let j = 0; j < sugestUsers.length; j++) {
            if (sugestUsers[j] == listUsers[i].id) {

                const cardSuggestion = document.createElement('li');

                const userImg = document.createElement('img');
                const userName = document.createElement('h2');
                const userSkills = document.createElement('span');
                const follow = document.createElement('button');

                cardSuggestion.classList.add('liSuggest')
                userImg.classList.add('imgSuggest');
                userName.classList.add('nameSuggest');
                userSkills.classList.add('skill');
                follow.classList.add('follow')

                cardSuggestion.id = listUsers[i].id;
                userImg.src = listUsers[i].img;
                userName.innerText = listUsers[i].user;
                userSkills.innerText = listUsers[i].stack;

                follow.type = "submit";
                follow.id = "followBtn";
                follow.innerText = "Seguir";

                ulSuggestion.appendChild(cardSuggestion);
                cardSuggestion.append(userImg, userName, userSkills, follow);

            }
        }
    }
};

const containerPost = document.querySelector('.containerPosts');
const ulPost = document.querySelector('.containerPosts__listPost');

article.appendChild(containerPost);
containerPost.appendChild(ulPost);


function post(listPost) {
    for (let j = 0; j < users.length; j++) {
        for (let i = 0; i < listPost.length; i++) {

            if (users[j].id == listPost[i].user) {

                const cardPost = document.createElement('li');

                const userImg = document.createElement('img');
                const userName = document.createElement('h2');
                const userSkills = document.createElement('span');
                const titlePost = document.createElement('h2');
                const textPost = document.createElement('p');
                const openPost = document.createElement('button');
                const like = document.createElement('img')

                cardPost.classList.add('liPost');
                userImg.classList.add('imgUserPost');
                userName.classList.add('userNamePost');
                titlePost.classList.add('subject');
                openPost.classList.add('openPost')
                like.classList.add('like');

                cardPost.id = posts[i].id_post;
                cardPost.user = posts[i].user;
                userImg.src = users[j].img;
                userName.innerText = users[j].user;
                userSkills.innerText = users[j].stack;
                titlePost.innerText = posts[i].title;
                textPost.innerText = posts[i].text;
                openPost.type = "submit";
                openPost.innerText = "Abrir post";
                openPost.dataset.id = listPost[i].user
                like.src = posts[i].like

                openPost.addEventListener('click', (e) => {
                    e.preventDefault()
                    cardModal(openPost.dataset.id)
                })

                ulPost.appendChild(cardPost);
                cardPost.append(userImg, userName, userSkills, titlePost, textPost, openPost, like);
            }
        }
    }
}

function cardModal() {
    for (let i = 0; i < posts.length; i++) {
        for (let j = 0; j < users.length; j++) {

            if (posts[i].users == users[i].id) {

                const modalWrap = document.createElement('dialog');
                const imgUserModal = document.createElement('img');
                const nameUser = document.createElement('h2');
                const stackUserModal = document.createElement('span');
                const titleModal = document.createElement('h2');
                const textModal = document.createElement('p');
                const closeBtn = document.createElement('span');

                modalWrap.classList.add('contWrapModal');
                closeBtn.classList.add('closeBtn');

                imgUserModal.src = users[j].img;
                nameUser.innerText = users[j].user;
                stackUserModal.innerText = users[j].stack;
                titleModal.innerText = posts[i].title;
                textModal.innerText = posts[i].text;
                closeBtn.innerText = "x"

                body.appendChild(modalWrap);
                modalWrap.append(imgUserModal, nameUser, stackUserModal, titleModal, textModal, closeBtn);
            }
        }
    }
}



CreatCardSuggestion(users);
post(posts);
