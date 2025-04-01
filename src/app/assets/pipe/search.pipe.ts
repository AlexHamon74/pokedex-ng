import { Pipe, PipeTransform } from '@angular/core';
import { PokemonInterface } from '../entities';

@Pipe({
    name: 'search',
    standalone: true
})
export class SearchPipe implements PipeTransform {

    // Transforme la liste des pokémons en fonction du nom recherché
    transform(pokemons: PokemonInterface[], terms: string): PokemonInterface[] {
        return pokemons.filter(pokemon =>
            pokemon.name.fr.toLowerCase().includes(terms.toLowerCase()));
    }

}
