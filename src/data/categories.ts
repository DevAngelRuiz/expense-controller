import { Category } from "../types/Category";

/*
- Particularmente eu colocaria a tag das categorias ou em letras minúsculas, sem acentos e sem caracteres especiais, porque é menos suscetível à erros ou então preferencialmente em inglês.

export const categories: Category = {
  food: { title: "Alimentação", color: "red", expense: true },
  health: { title: "Saúde", color: "blue", expense: true },
  salary: { title: "Salário", color: "green", expense: false },
  Desp: { title: "Desp. Resid", color: "purple", expense: true },
  random: { title: "Aleatórios", color: "brown", expense: true },
};

 Ou, ao invés de buscá-las pelo nome, transformar o objeto "categories" em um array, já que é uma lista de categorias,colocar um id em cada item,e usar esse id para a busca:


 export const categories: Category = [
   {id:1, title: "Alimentação", color: "red", expense: true },
   {id:2, title: "Saúde", color: "blue", expense: true },
   {id:3, title: "Aleatórios", color: "brown", expense: true },
];

*/
export const categories: Category = {
  Alimentação: { title: "Alimentação", color: "red", expense: true },
  Saúde: { title: "Saúde", color: "blue", expense: true },
  Salário: { title: "Salário", color: "green", expense: false },
  "Desp. Residencial": {
    title: "Desp. Residencial",
    color: "purple",
    expense: true,
  },
  Aleatórios: { title: "Aleatórios", color: "brown", expense: true },
};
