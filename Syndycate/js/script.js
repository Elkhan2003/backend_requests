// resolve, reject
// then cath finally

// Чистая функция и не читая функция

// function loadJSON(url) {
//     return fetch(url)
//         .then(response => response.json())
// }

// let n = 12

// function test1() {
//     return a + 1
// }

// n = 2

// loadJSON('ссылка')

// test1()

// ---------------------------------------------------------------------

function loadJSON(url) {
    return fetch(url)
        .then(response => response.json())
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(res => res.json())
}

function showAvatar(githubUser) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img')
        img.src = githubUser.avatar_url
        img.className = 'Avatar'
        document.body.append(img)
        setTimeout(() => {
            img.remove()
            resolve(githubUser)
        }, 3000)
    })
}

loadJSON(`https://learn.javascript.ru/article/promise-chaining/user.json`)
    .then(user => console.log(user))
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Показы аватара ${githubUser.name} завершен`))

loadGithubUser('Elkhan2003')
    .then(res => console.log(res))