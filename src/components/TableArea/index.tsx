import { Item } from "../../types/Item"
import { TableItem } from "../TableItem"
import { Table, TableHeadColumn } from "./styles"

type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props) =>{


    return(
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
                {list.map((item, index)=>(
                    <TableItem key={index} item={item}/>
                   ))}
            </tbody>


        </Table>

    )
}