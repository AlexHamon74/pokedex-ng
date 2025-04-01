import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { PokemonBgColorPipe } from '../assets/pipe/pokemon-bg-color.pipe';
import { PokemonService } from '../assets/service/pokemon.service';
import { Subscription } from 'rxjs';
import { PokemonInterface } from '../assets/entities';

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
    router = inject(Router);

    isShiny: boolean = false;
    pokemon!: PokemonInterface;
    private location = inject(Location);
    private route = inject(ActivatedRoute);
    private paramsSubscription: any;
    private dataPokemonDetail!: Subscription;


    ngOnInit(): void {
        this.route.paramMap.subscribe(() => {
            this.getPokemonDetails();
        });
    }

    ngOnDestroy(): void {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }

    // Fonction pour récupérer les détails du pokemon
    getPokemonDetails() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.dataPokemonDetail = this.service.fetchById(id).subscribe(
                data => {
                    if (data && data.status !== 404) {
                        this.pokemon = data;
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        this.router.navigate(['/404']);
                    }
                }
            );
        }
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
