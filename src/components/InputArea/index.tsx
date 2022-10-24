import { Container, Button, InputTitle, InputValue, SelectCategory, InputDate} from "./styles"
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'
import { useState } from "react"





type Props={
    onAdd: (item: Item) => void
}

export const InputArea = ({onAdd}: Props)=>{
   const [dateInput, setDateInput] = useState('')
   const [titleInput, setTitleInput] = useState('')
   const [categoriesSelect, setCategoriesSelect] = useState('')
   const [valueInput, setValueInput] = useState(0)

   //pegando o objeto em categorias, no caso o title
   let categoryKeys: string[] = Object.keys(categories);


    const handleAddEvent= ()=>{
        console.log('dsds', dateInput)
        console.log({
            date: new Date(dateInput),
            category: categoriesSelect,
            title: titleInput,
            price: valueInput
        })
    onAdd({
    date: new Date(dateInput),
    category: categoriesSelect,
    title: titleInput,
    price: valueInput

})

   setTitleInput('')
   setCategoriesSelect('')
   setDateInput('')
   setValueInput(0)



    }



    return(
        <Container>
            <InputDate value={dateInput} type='date' onChange={e => setDateInput(e.target.value)}></InputDate>

            <SelectCategory onChange={e => setCategoriesSelect(e.target.value)}   value={categoriesSelect}>
               <option></option>
                {categoryKeys.map((key, index)=>(
                    <option key={index}>{categories[key].title}</option>
                ))}
            </SelectCategory>

            <InputTitle value={titleInput} placeholder="Onde Gastou?" onChange={e => setTitleInput(e.target.value)} ></InputTitle>

            <InputValue value={valueInput}  type={'number'} placeholder="Valor?" onChange={e => setValueInput(parseInt(e.target.value))} ></InputValue>

            <Button onClick={handleAddEvent} >Registre seus Gastos</Button>
    

        </Container>
    )

}