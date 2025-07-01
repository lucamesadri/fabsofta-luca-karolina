export class Filme {
  id?: number;
  titulo?: string;
  genero?: string;
  anoLancamento?: number;
  elenco?: string;
  constructor(init?: Partial<Filme>) {
    Object.assign(this, init);
  }
}
