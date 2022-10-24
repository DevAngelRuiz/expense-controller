import { Item } from "../types/Item"


//filtro da data, por ano e mês. 
//+ 1 pq segue o padrão JS de contagem iniciando no ZERO, ex: Janeiro = 0 

export const getCurrentMonth = () => {
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

//filtrando data especifica, mês e ano 
export const filterListByMonthAndYear = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]) //gera nova lista com os filtros
        }
    }
  
    return newList
}

//formatação da data para padrão brasileiro

export const formatDate = (date: Date): string => {
  
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getUTCDate();
 

    return `${day}/${month}/${year}`
}

//formatação em escrito do mês (10 - OUTUBRO)

export const formatMonthInWords = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month) - 1]} de ${year}`
}
