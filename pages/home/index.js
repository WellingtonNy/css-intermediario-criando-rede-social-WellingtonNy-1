function criarModal(use, post) {
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const button1 = document.createElement('button')
    const img1 = document.createElement('img')
    const div5 = document.createElement('div')
    const h41 = document.createElement('h4')
    const p1 = document.createElement('p')
    const h11 = document.createElement('h1')
    const p2 = document.createElement('p')


    div1.classList = 'modalA'
    div1.id = 'modal'
    div2.classList = 'modalB rel'
    div3.classList = 'miniCard flex'
    div4.classList = 'divConteudo'
    button1.classList = 'closeModal'
    img1.classList = 'imgMiniCard'
    div5.classList = 'textoMiniCard flex flexColuna flexA'
    h41.classList = 'title2'
    p1.classList = 'text2'
    h11.classList = 'title1'
    p2.classList = 'text1'

    img1.src = users[use].img
    h41.innerText = users[use].user
    p1.innerText = users[use].stack
    h11.innerText = posts[post].title
    p2.innerText = posts[post].text
    button1.innerText = 'X'

    div1.append(div2)
    div2.append(div3, div4, button1)
    div3.append(img1, div5)
    div5.append(h41, p1)
    div4.append(h11, p2)

    return div1
}

function abrirModal(n1, n2) {
    let bodyvar = document.querySelector('#localModal')
    let modalvar = criarModal(n1, n2)
    bodyvar.appendChild(modalvar)
    exit()
}

function exit() {
    let closeBut = document.querySelector('.closeModal')
    let divModal = document.querySelector('#modal')
    closeBut.addEventListener('click', () => {
        divModal.remove()
    })
}

function but1() {
    let modalbut1 = document.querySelector('#but1')
    modalbut1.addEventListener('click', () => {
        abrirModal(1, 0)
    })
}
but1()

function but2() {
    let modalbut1 = document.querySelector('#but2')
    modalbut1.addEventListener('click', () => {
        abrirModal(2, 1)
    })
}
but2()

function but3() {
    let modalbut1 = document.querySelector('#but3')
    modalbut1.addEventListener('click', () => {
        abrirModal(4, 2)
    })
}
but3()