import { Usuario } from './usuario';
import { Filme } from './filme';

export class Resenha {
  id?: number;
  usuario?: Usuario;
  filme?: Filme;
  texto?: string;
  nota?: number;

  constructor(init?: Partial<Resenha>) {
    Object.assign(this, init);
  }
}
