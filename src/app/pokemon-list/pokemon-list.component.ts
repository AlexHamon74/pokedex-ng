import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../assets/pipe/pokemon-type-color.pipe';
import { PokemonService } from '../assets/service/pokemon.service';
import { PokemonInterface, TypeInterface } from '../assets/entities';
import { SearchPipe } from '../assets/pipe/search.pipe';
import { FilterByTypePipe } from '../assets/pipe/filter-by-type.pipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pokemon-list',
    standalone: true,
    imports: [CommonModule, PokemonTypeColorPipe, FormsModule, SearchPipe, FilterByTypePipe],
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit, OnDestroy {

    // Injection du service et initialisation des variables
    pokemonService = inject(PokemonService);
    router = inject(Router);

    pokemons: PokemonInterface[] = [];
    types: TypeInterface[] = [];
    searchTerm: string = '';
    selectedType: string = 'all';

    // Récupère les pokémons et les types de pokémons
    ngOnInit(): void {
        this.pokemonService.fetchAllPokemons().subscribe((data: PokemonInterface[]) => {
            this.pokemons = data;
        });

        this.pokemonService.fetchAllTypes().subscribe((data: TypeInterface[]) => {
            this.types = data;
        });
    }

    ngOnDestroy(): void {
        this.pokemons = [];
        this.types = [];
    }

    showMore(pokedexId: number) {
        this.router.navigate(['/pokemons', pokedexId]);
    }
}
