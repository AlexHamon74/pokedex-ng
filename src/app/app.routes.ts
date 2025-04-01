import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Pokemon404Component } from './pokemon404/pokemon404.component';

export const routes: Routes = [
    {path:'pokemons', component:PokemonListComponent},
    {path:'**', component:Pokemon404Component},
    {
        path: '',
        redirectTo: '/pokemons',
        pathMatch: 'full',
    },

];
