export default interface IPersonData {
  data: IPersonFinally;
}

export type IPersonFinally = {
  tercero: IPersonThird;
  mensajeResp: string;
  error: IPersonError;
  codigoResp: string;
};
export type IPersonThird = {
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
};

export type IPersonError = {
  codigo: string;
  mensajeux: string;
};
