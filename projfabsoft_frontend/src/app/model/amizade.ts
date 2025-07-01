import { Usuario } from './usuario';

export class Amizade {
  id?: number;
  solicitante?: Usuario;
  solicitado?: Usuario;
  status?: string;

  constructor(init?: Partial<Amizade>) {
    Object.assign(this, init);
  }
}
