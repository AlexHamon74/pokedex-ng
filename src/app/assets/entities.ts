export interface PokemonInterface {
    status: number;
    pokedex_id: number;
    name: {
        fr: string;
    };

    sprites: {
        regular: string;
        shiny: string;
    };

    weight: string;
    height: string;

    stats: {
        atk: number;
        def: number;
        hp: number;
        spe_atk: number;
        spe_def: number;
        vit: number;
    };

    types: [{
        name: string;
        image: string;
    }];

    evolution: {
        pre: null | [{
            name: string;
            pokedex_id: number;
        }];
        next: null | [{
            name: string;
            pokedex_id: number;
        }];
    };
}

export interface TypeInterface {
    id: number;
    name: {
        fr: string;
    }
    sprites: string;
}