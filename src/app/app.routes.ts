import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Pokemon404Component } from './pokemon404/pokemon404.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
    {path:'pokemons', component:PokemonListComponent},
    {path:'pokemons/:id', component:PokemonDetailsComponent},
    {path:'**', component:Pokemon404Component},
    {
        path: '',
        redirectTo: '/pokemons',
        pathMatch: 'full',
    },

];
