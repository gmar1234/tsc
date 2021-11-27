export const GET_PERSON = "GET_PERSON"
export const LOADING_PERSON = "LOADING_PERSON";
export const FAIL_PERSON = "FAIL_PERSON";
export const SUCCESS_PERSON = "SUCCESS_PERSON";

export type PersonType = {
  direccion: string;
  nomCompleto: string;
  indCrearTercero: string;
  estadoCivil: string;
  tipoPersona: string;
  telefono: string;
  apellidoPaterno: string;
  sexo: string;
  indRequiereDireccion: string;
  paisNacimiento: string;
  nombres: string;
  stsTercero: string;
  tipoDocumento: string;
  apellidoMaterno: string;
  numDocumento: string;
  fecNacimiento: string;
  correo: string;
  // sprites: PokemonSprites,
  // stats: PokemonStat[]
}

// export type PokemonAbility = {
//   ability: {
//     name: string
//     url: string
//   }
// }

// export type PokemonSprites = {
//   front_default: string
// }

// export type PokemonStat = {
//   base_stat: number,
//   stat: {
//     name: string
//   }
// }

export interface PersonLoading {
  type: typeof LOADING_PERSON
}

export interface PersonFail {
  type: typeof FAIL_PERSON
}

export interface PersonSuccess {
  type: typeof SUCCESS_PERSON,
  payload: PersonType
}

export type PersonDispatchTypes = PersonLoading | PersonFail |  PersonSuccess