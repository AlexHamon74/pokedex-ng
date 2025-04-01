import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PokemonBgColorPipe } from '../assets/pipe/pokemon-bg-color.pipe';
import { PokemonService } from '../assets/service/pokemon.service';

@Component({
    selector: 'app-pokemon-details',
    standalone: true,
    imports: [CommonModule, PokemonBgColorPipe, RouterModule],
    templateUrl: './pokemon-details.component.html',
    styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {

    // Injection du service et initialisation des variables
    service = inject(PokemonService);
    isShiny: boolean = false;
    pokemon: any; // Variable pour stocker les détails du Pokémon
    private location = inject(Location);
    private route = inject(ActivatedRoute);

    ngOnInit(): void {
        const pokedexId = this.route.snapshot.params['id'];
        this.service.fetchByPokedexId(pokedexId).subscribe(data => {
            this.pokemon = data;
        });
    }

    ngOnDestroy(): void {

    }

    // Fonction pour afficher l'image du pokemon en skiny
    toggleshiny() {
        this.isShiny = !this.isShiny;
    }

    // Fonction pour que la barre de progression ai une taille de 150
    calculatePercentage(hp: number): number {
        const maxHp = 180;
        return (hp / maxHp) * 100;
    }

    // Fonction pour retourner à la liste des pokémons
    back() {
        this.location.back();
    }

}
