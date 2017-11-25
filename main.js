class nodoDestino {
    constructor(params) {
        this.nombreId = params.domID;
        this.cantidadFotos = params.cantidadFotos;
        this.fotosUrls = params.urls
    }

    getNodo() {
        return document.querySelector(`#${this.nombreId}`);
    }
    getNodoWidth() {
        return this.getNodo().offsetWidth;
    }

    crearEnlaces() {
        let output = '';

        this.fotosUrls.forEach((element) => {
            for (let i = 0; i < this.cantidadFotos; i++) {
                output += `
                    <a href="#">
                        <img class="mb-2" src="${element.url+this.getNodoWidth()}x${element.height}"
                    </a>`;
            }
        });
    
        return output;
    }

    mostrarEnlaces() {
        this.getNodo().innerHTML = this.crearEnlaces();
    }
}

// SI SE VA A ABRIR LA PAGINA EN OTRO NAVEGADOR QUE NO SEA FIREFOX O CHROME COMENTA LA CLASE DE ARRIBA Y DES-COMENTA LA FUNCION DE ABAJO

// const nodoDestino = function(params) {
//     this.nombreId = params.domID;
//     this.cantidadFotos = params.cantidadFotos;
//     this.fotosUrls = params.urls

//     this.getNodo = function() { return document.querySelector(`#${this.nombreId}`); }
//     this.getNodoWidth = function() { return this.getNodo().offsetWidth; }
//     this.crearEnlaces = function() {
//         let output = '';
        
//         this.fotosUrls.forEach((element) => {
//             for (let i = 0; i < this.cantidadFotos; i++) {
//                 output += `
//                     <a href="#">
//                         <img class="mb-2" src="${element.url+this.getNodoWidth()}x${element.height}"
//                     </a>`;
//             }
//         });
    
//         return output;
//     }
//     this.mostrarEnlaces = function() {
//         this.getNodo().innerHTML = this.crearEnlaces();
//     }
// }


const enlaces1 = new nodoDestino({
    domID: 'enlacesFotos',
    cantidadFotos: 7,
    urls: [{
        url: 'http://via.placeholder.com/',
        height: 65
    }]
});
const enlaces2 = new nodoDestino({
    domID: 'enlacesFotos2',
    cantidadFotos: 7,
    urls: [{
        url: 'http://via.placeholder.com/',
        height: 69
    }]
});
if (enlaces1.getNodoWidth() !== 0 && enlaces2 !== 0) {
    enlaces1.mostrarEnlaces();
    enlaces2.mostrarEnlaces();
}
