import { useState, useEffect} from 'react';
import { Container, Header} from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonthAndYear } from './helpers/dateFilter';

const App = ()  => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(()=>{
    setFilteredList( filterListByMonthAndYear(list, currentMonth))

  },[list, currentMonth])

  return (
 <Container>
  <Header><h1>Controlador de Gastos</h1></Header>

 </Container>
  );
}

export default App;
