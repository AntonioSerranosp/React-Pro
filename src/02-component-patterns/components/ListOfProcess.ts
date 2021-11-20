interface Tarea {
  codigo: number;
  contadorProceso: number;
}
export const ListOfProcess = (lista: Tarea[]): number => {
  let cantidadPedida = 0;
  for (let i = 0; i < lista.length; i++) {
    cantidadPedida++;
  }
  return cantidadPedida;
};
