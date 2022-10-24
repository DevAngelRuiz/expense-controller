import { TableColumn, TableLine, ColorCategory, ColorPrice } from "./styles"
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
    item: Item
}


export const TableItem = ({ item }: Props) => {
    console.log('tableItem',item)
    return (
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
    )
}