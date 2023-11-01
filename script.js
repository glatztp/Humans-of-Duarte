let lorem = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio vero ullam suscipit blanditiis deleniti culpa laudantium libero! Nesciunt debitis nobis facilis provident soluta vero perspiciatis, eos libero. Laboriosam, praesentium.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam nulla nostrum optio commodi, iusto dolor veniam quia quis esse adipisci possimus laudantium quae modi, minus voluptatem delectus expedita perferendis.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quis qui dolore? Corporis, rerum. Odio dolores cumque quae deleniti officia obcaecati, magnam magni voluptates, ullam impedit veniam error dolore atque.']

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
                trocaImg('./assets/diego.jpg');
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

fetch('./series.json')
    .then(response => response.json())
    .then(data => {
        const containerUltimaSerie = document.querySelector('.container-ultima-serie');

        const primeiroObjeto = data[0];

        console.log(primeiroObjeto.imagem)

        containerUltimaSerie.innerHTML = `
        <div class="div-serie d-flex flex-column justify-content-center align-items-center" style="background-image: url(${primeiroObjeto.imagem});">
            <h2 class="fs-5">${primeiroObjeto.nome_do_site}</h2>
            <p class="p-serie">${primeiroObjeto.nome_da_serie}</p>
            <button class="btn-series">LER SÉRIE</button>
        </div>`
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



/* ------------------------------ HTML Series ------------------------------ */
fetch('./series.json')
    .then(response => response.json())
    .then(data => {
        const containerPostagem = document.querySelector('.container-postagem');

        data.forEach(objeto => {
            containerPostagem.innerHTML += `
            <div class="div-serie d-flex flex-column justify-content-center align-items-center" style="background-image: url(${objeto.imagem}); ">
                <h2 class="fs-5">${objeto.nome_do_site}</h2>
                <p class="p-serie">${objeto.nome_da_serie}</p>
                <button class="btn-series">LER SÉRIE</button>
            </div>`
        })
    });
