interface ITypes {
  types: string[];
}

interface IWeaknesses {
  type: string,
  value: string,
}

interface IPokemonInfo {
  subtypes: string[];
  types: string[];
  images: { small: string };
  weaknesses: IWeaknesses[];
  attacks: [{
    name: string;
  }]
}

interface IData {
  types: ITypes[],
  cards: IPokemonInfo,
}

export type { IData, IPokemonInfo, ITypes }
