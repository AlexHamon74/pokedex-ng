import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

export const routes: Routes = [
    {path:'pokemons', component:PokemonListComponent},
    {
        path: '',
        redirectTo: '/pokemons',
        pathMatch: 'full',
    },

];
