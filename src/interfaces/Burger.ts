export interface Burger {
  id: string
  nome: string
  pao: string
  carne: string
  opcionais: string[]
  status: string
}

export interface Status {
  id: number
  tipo: string
}

interface Ingrediente {
  id: number
  tipo: string
}

// exemplo de uso de herança
export interface Meat extends Ingrediente {
  ponto?: string
}
export type Bread = Ingrediente
export type BurgerOptional = Ingrediente
