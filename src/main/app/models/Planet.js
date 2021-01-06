'use strict';

class Planet {
    constructor() {
        this.id;
        this.nombre;
        this.periodo_rotacion;
        this.periodo_orbital;
        this.diametro;
        this.clima;
        this.gravedad;
        this.terreno;
        this.superficie_agua;
        this.poblacion;
        this.residentes;
        this.peliculas;
        this.creado;
        this.editado;
        this.url;
    }
    toString() {
        var retorno = "id: " + this.id 
        + ", nombre: " + this.nombre 
        + ", periodo_rotacion: " + this.periodo_rotacion 
        + ", periodo_orbital: " + this.periodo_orbital 
        + ", diametro: " + this.diametro 
        + ", clima: " + this.clima 
        + ", gravedad: " + this.gravedad 
        + ", terreno: " + this.terreno 
        + ", superficie_agua: " + this.superficie_agua 
        + ", poblacion: " + this.poblacion 
        + ", residentes: " + this.residentes 
        + ", peliculas: " + this.peliculas 
        + ", creado: " + this.creado 
        + ", editado: " + this.editado 
        + ", url: " + this.url;
        return retorno;
    }
}

module.exports = Planet;