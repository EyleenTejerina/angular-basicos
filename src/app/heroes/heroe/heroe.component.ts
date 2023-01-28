import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
    //styleUrls: ['../../../styles.css']
})


//El acento invertido se llama Bagtil `` su codigo acii es: alt+96 y me sirve para añadir codigo ya sea de html o javaScrip 
export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number= 45;

    get nombreCapitalizado(){
        
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarHeroe(): void{
        this.nombre='Spaiderman';
    }
    cambiarEdad() :void {
        this.edad = 25;
    }
}