import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonInterface, TypeInterface } from '../entities';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    http = inject(HttpClient);

    url = "https://tyradex.vercel.app/api/v1/gen/1";
    urlType = "https://tyradex.vercel.app/api/v1/types";
    urlDetail = "https://tyradex.vercel.app/api/v1/pokemon";

    // Récupère tous les pokémons   
    fetchAllPokemons(): Observable<PokemonInterface[]> {
        return this.http.get<PokemonInterface[]>(this.url);
    }

    // Récupère tous les types de pokémons
    fetchAllTypes(): Observable<TypeInterface[]> {
        return this.http.get<TypeInterface[]>(this.urlType);
    }

    // Récupère un pokémon par son id
    fetchById(id: any) {
        return this.http.get<PokemonInterface>(`${this.urlDetail}/${id}`);
    }

    // Récupère un pokémon par son pokedex_id
    fetchByPokedexId(pokedexId: number): Observable<PokemonInterface> {
        return this.http.get<PokemonInterface>(`${this.urlDetail}/${pokedexId}`);
    }
}
