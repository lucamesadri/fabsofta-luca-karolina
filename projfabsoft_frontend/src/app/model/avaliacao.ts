import { Usuario } from './usuario';
import { Filme } from './filme';

export class Avaliacao {
  id?: number;
  usuario?: Usuario;
  filme?: Filme;
  nota?: number;
  comentario?: string;

  constructor(init?: Partial<Avaliacao>) {
    Object.assign(this, init);
  }
}
