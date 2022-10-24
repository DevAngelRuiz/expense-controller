import { useState, useEffect} from 'react';
import { Container, Header} from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonthAndYear } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { TableInfo } from './components/TableInfo';
import { InputArea } from './components/InputArea';

const App = ()  => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=>{
    setFilteredList(filterListByMonthAndYear(list, currentMonth))
  },[list, currentMonth])

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount= 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].price
      }else{
        incomeCount += filteredList[i].price
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  },[filteredList])


  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) =>{
    let newList = [...list]
    newList.push(item)
    setList(newList)
  
  }

  return (
 <Container>
  <Header><h1>Controlador de Gastos</h1></Header>
  <TableInfo 
  currentMonth={currentMonth}
  onMonthChange={handleMonthChange}
  income= {income}
  expense={expense}
  />

  <InputArea onAdd = {handleAddItem}/>


  <TableArea list={filteredList}/>
 </Container>
  );
}

export default App;
