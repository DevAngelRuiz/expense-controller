import {
  Container,
  Button,
  InputTitle,
  InputValue,
  SelectCategory,
  InputDate,
} from "./styles";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { useState } from "react";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateInput, setDateInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [categoriesSelect, setCategoriesSelect] = useState("");
  const [valueInput, setValueInput] = useState(0);

  //pegando o objeto em categorias, no caso o title
  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    onAdd({
      date: new Date(dateInput),
      category: categoriesSelect,
      title: titleInput,
      price: valueInput,
    });

    setTitleInput("");
    setCategoriesSelect("");
    setDateInput("");
    setValueInput(0);
  };

  return (
    <Container>
      <InputDate
        value={dateInput}
        type="date"
        onChange={(e) => setDateInput(e.target.value)}
      ></InputDate>

      <SelectCategory
        onChange={(e) => setCategoriesSelect(e.target.value)}
        value={categoriesSelect}
      >
        {/* Adicionar uma opção padrão que serve como placeholder, pro campo não aparecer em branco*/}
        <option disabled={true} value="">
          Categoria
        </option>
        {categoryKeys.map((key, index) => (
          <option key={index}>{categories[key].title}</option>
        ))}
      </SelectCategory>

      <InputTitle
        value={titleInput}
        placeholder="Onde Gastou?"
        onChange={(e) => setTitleInput(e.target.value)}
      ></InputTitle>
      {/* Ao invés de um input type='number' , que mostra as setinhas do lado pra aumentar/diminuir o valor ,poderia ser um input type='text' com uma validação pra aceitar apenas números e apenas numeros positivos, e uma máscara máscara pra formatar o texto*/}
      <InputValue
        value={valueInput}
        type={"number"}
        placeholder="Valor?"
        onChange={(e) => setValueInput(parseInt(e.target.value))}
      ></InputValue>

      <Button onClick={handleAddEvent}>Registre seus Gastos</Button>
    </Container>
  );
};
