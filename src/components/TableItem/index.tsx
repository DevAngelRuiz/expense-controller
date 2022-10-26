import { TableColumn, TableLine, ColorCategory, ColorPrice } from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  // Particularmente acho melhor selecionar a categoria uma vez e depois só usar os dados dela,ao invés de selecionar ela toda vez que for acessar algum dado dela.
  const itemCategory = categories[item.category];
  console.log("tableItem", item);
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <ColorCategory color={itemCategory.color}>
          {itemCategory.title}
        </ColorCategory>
      </TableColumn>
      <TableColumn> {item.title} </TableColumn>
      <TableColumn>
        <ColorPrice color={itemCategory.expense ? "red" : "green"}>
          R$ {item.price}
        </ColorPrice>
      </TableColumn>
    </TableLine>
  );
};
