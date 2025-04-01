import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';


@Component({
    selector: 'app-pokemon404',
    standalone: true,
    imports: [],
    templateUrl: './pokemon404.component.html',
    styleUrl: './pokemon404.component.css'
})
export class Pokemon404Component {

    // Injection du service
    private location = inject(Location);

    // Fonction pour retourner à la liste des pokémons
    back() {
        this.location.back();
    }

}
