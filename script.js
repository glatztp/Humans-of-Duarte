let lorem = ['Descubra as histórias de alunos que transformaram suas vidas em lições de superação, coragem e inspiração. Encontre inspiração nas jornadas extraordinárias de pessoas da Duarte.',
    'Descubra as histórias de professores que transformaram suas vidas em lições de superação, coragem e inspiração. Encontre inspiração nas jornadas extraordinárias de pessoas da Duarte. ',
    ' Descubra as histórias de pessoas que transformaram suas vidas em lições de superação, coragem e inspiração. Encontre inspiração nas jornadas extraordinárias de pessoas da Duarte.']

let ancoras = document.querySelectorAll('.ancora-principal');
let pLista = document.querySelector('.p-lista');
let bolinha = document.querySelector('.bolinha');
let fotoLivro = document.querySelector('.foto-livro');

let trocaImg = (img) => {
    document.querySelector('.bg-img').style.backgroundImage = `url(${img})`;
};

let voltaImg = () => {
    document.querySelector('.bg-img').style.backgroundImage = 'url(./assets/corredor.jpg)';
}

let fade = (txt) => {
    pLista.classList.add('fade-out');
    setTimeout(() => {
        pLista.innerHTML = `${txt}`;
        pLista.classList.remove('fade-out');
        pLista.classList.add('fade-in');
    }, 500);
    pLista.classList.remove('fade-in')
}

ancoras.forEach(ancora => {
    ancora.addEventListener('mouseover', () => {
        switch (ancora.textContent) {
            case 'Alunos':
                trocaImg('./assets/briga.jpg');
                fade(lorem[0])
                document.querySelector('.ancora-h').classList.remove('ancora-historias');
                ancora.classList.add('underline');
                bolinha.classList.remove('animar1');
                bolinha.classList.add('animar2');
                break;
            case 'Professores':
                trocaImg('./assets/gramado.jpg');
                fade(lorem[1])
                document.querySelector('.ancora-h').classList.remove('ancora-historias');
                ancora.classList.add('underline');
                bolinha.classList.remove('animar1');
                bolinha.classList.add('animar2');
                break;
        }

    })

    ancora.addEventListener('mouseout', () => {
        if (ancora.textContent != 'Histórias') {
            voltaImg();
            fade(lorem[2]);
            document.querySelector('.ancora-h').classList.add('ancora-historias');
            ancora.classList.remove('underline');
            bolinha.classList.remove('animar2');
            bolinha.classList.add('animar1');
        }
    })
})

function scrollEvent() {
    let currentScrollPos = window.pageYOffset;
    let navbar = document.querySelector(".navbar");

    if (window.innerWidth >= 768) {
        if (currentScrollPos >= 1) {
            navbar.classList.add("visible");
            fotoLivro.classList.remove("hidden");
        } else {
            navbar.classList.remove("visible");
            fotoLivro.classList.add("hidden");
        }
    } else {
        if (currentScrollPos >= 1) {
            navbar.classList.remove("visible");
        } else {
            navbar.classList.add("visible");
        }
    }
}

window.addEventListener("scroll", scrollEvent);
window.addEventListener("resize", scrollEvent);


fetch('./ultimasHistorias.json')
    .then(response => response.json())
    .then(data => {
        const containerPost = document.querySelector('.container-post');

        data.forEach(objeto => {
            containerPost.innerHTML += `
            <div class="div-historia col-12 col-md-6 col-lg-3 col-xl-3">
                <div class="div-img">
                    <img class="img-fluid" src="${objeto.imagem}">
                </div>
                <p>${objeto.texto}</p>
            </div>`
        })
    });

fetch('./professoresHistorias.json')
    .then(response => response.json())
    .then(data => {
        const containerPost = document.querySelector('.container-ultima-professor');

        data.forEach(objeto => {
            containerPost.innerHTML += `
            <div class="div-historia col-12 col-md-6 col-lg-3 col-xl-3">
                <div class="div-img">
                    <img class="img-fluid" src="${objeto.imagem}">
                </div>
                <p>${objeto.texto}</p>
            </div>`
        })
    });

fetch('./alunosHistorias.json')
    .then(response => response.json())
    .then(data => {
        const containerPost = document.querySelector('.container-ultima-alunos');

        data.forEach(objeto => {
            containerPost.innerHTML += `
            <div class="div-historia col-12 col-md-6 col-lg-3 col-xl-3">
                <div class="div-img">
                    <img class="img-fluid" src="${objeto.imagem}">
                </div>
                <p>${objeto.texto}</p>
            </div>`
        })
    });

fetch('./historiasgrandes.json')
    .then(response => response.json())
    .then(data => {
        const containerPost = document.querySelector('.container-ultima-extensas');

        data.forEach(objeto => {
            containerPost.innerHTML += `
            <div class="div-historia col-12 col-md-6 col-lg-3 col-xl-3">
                <div class="div-img">
                    <img class="img-fluid" src="${objeto.imagem}">
                </div>
                <p>${objeto.texto}</p>
            </div>`
        })
    });





/* ------------------------------ HTML Paises ------------------------------ */
fetch('./paises.json')
    .then(response => response.json())
    .then(data => {
        const divContainer = document.querySelector('.post-container');

        data.forEach(objeto => {
            divContainer.innerHTML += `
            <div class="d-flex justify-content-center align-items-center m-3" style="background-image:url('${objeto.imagem}'); background-size: cover; background-position: center;">
                <p>${objeto.titulo}</p>
            </div>`
        })
    });



/* ------------------------------ HTML professores ------------------------------ */
fetch('./professores.json')
    .then(response => response.json())
    .then(data => {
        const containerPostagem = document.querySelector('.container-postagem');

        data.forEach(objeto => {
            containerPostagem.innerHTML += `
            <div class="div-professor d-flex flex-column justify-content-center align-items-center" style="background-image: url(${objeto.imagem}); ">
                <h2 class="fs-5">${objeto.nome_do_site}</h2>
                <p class="p-professor">${objeto.nome_da_professor}</p>
                <button class="btn-professores">LER SÉRIE</button>
            </div>`
        })
    });
