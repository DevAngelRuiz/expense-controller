import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import { Table, TableHeadColumn } from "./styles";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn>Data</TableHeadColumn>
          <TableHeadColumn>Categoria</TableHeadColumn>
          <TableHeadColumn>Título</TableHeadColumn>
          <TableHeadColumn>Valor</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {/* Acho que o <TableItem/> não precisa ser um componente separado, já que ele necessariamente vai estar dentro de uma tabela e não seria reutilizado em algum outro lugar fora dessa tabela */}
        {list.map((item, index) => (
          <TableItem key={index} item={item} />

          /*

                            <TableLine>
                                <TableColumn>{formatDate(item.date)}</TableColumn>
                                <TableColumn>
                                    <ColorCategory color={categories[item.category].color} >
                                        {categories[item.category].title}
                                    </ColorCategory>
                                </TableColumn>
                                <TableColumn> {item.title} </TableColumn>
                                <TableColumn>
                                    <ColorPrice  color={categories[item.category].expense ? 'red' : 'green'} >
                                    R$ {item.price} 
                                    </ColorPrice>
                                </TableColumn>

                            </TableLine>

                    */
        ))}
      </tbody>
    </Table>
  );
};
