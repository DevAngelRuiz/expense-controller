import { Item } from "../types/Item";

//filtro da data, por ano e mês.
//+ 1 pq segue o padrão JS de contagem iniciando no ZERO, ex: Janeiro = 0

export const getCurrentMonth = () => {
  let now = new Date();
  /* 
    Se o nome da função é "getCurrentMonth" o ideal é retornar apenas o mês atual, não o mês e o ano atuais. Ex: 10 , o invés de '2022-10'

    - Se é necessário retornar o mês e o ano, o ideal seria renomear a função para getCurrentMonthAndYear e talvez retornar em um objeto:
    
    {
        month: '10',
        year: '2022'
    }

    e provavelmente retornar o retorno original das funções getFullYear() e getMonth(), já que elas sempre serão comparadas com numeros:

    {
        month: 10,
        year: 2022
    }
    
    */

  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

//filtrando data especifica, mês e ano
export const filterListByMonthAndYear = (
  list: Item[],
  date: string
): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");
  /*
     Forma alternativa de fazer

  const newList1: Item[] = list.filter(
    (listItem) =>
      listItem.date.getFullYear() === parseInt(year) &&
      listItem.date.getMonth() + 1 === parseInt(month)
  );

  console.log("NEW-LIST-1", newList1);

 */

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]); //gera nova lista com os filtros
    }
  }
  return newList;
};

//formatação da data para padrão brasileiro

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getUTCDate();

  /*
  Forma alternativa:

    return date.toLocaleDateString("pt-BR");

    "toLocaleDateString" já formata a data na string desejada e ainda permite varias outras opções de formatação.

    https://dev.to/kurybr/javascript-entendendo-o-tolocaledatestring-261k

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  
  */

  return `${day}/${month}/${year}`;
};

//formatação em escrito do mês (10 - OUTUBRO)

export const formatMonthInWords = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  /*

    - Forma alternativa:

    - Passar uma data como argumento e usar:

        date.toLocaleDateString('pt-BR',{
            month: 'long',
        })

    ou algumas das opções adicionais do toLocaleDateString()

  - Se o nome da função é formatMonthInWords ela deveria retornar apenas o mês e não o mês e o ano em uma string formatada. Se for necessário retornar essa string,poderia trocar o nome da função para formatDateToString por exemplo. 
    
    */

  return `${months[parseInt(month) - 1]} de ${year}`;
};
