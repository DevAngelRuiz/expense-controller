import { Container, Arrow, MonthArea, MonthTitle, ResumeArea } from "./styles"
import { formatMonthInWords} from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'


type Props ={
    currentMonth: string; 
    onMonthChange: (newMonth: string)=> void;
    income: number;
    expense: number;
}

export const TableInfo = ({ currentMonth, onMonthChange, income, expense}: Props) =>{
    const handlePrevMonth = ()=>{
        let [year, month]= currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() -1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }
    const handleNextMonth = ()=>{
        let [year, month]= currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() +1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }


    return(
        <Container>
            <MonthArea>
                <Arrow onClick={handlePrevMonth}>⬅️</Arrow>
                <MonthTitle>{formatMonthInWords(currentMonth)}</MonthTitle>
                <Arrow onClick={handleNextMonth}>➡️</Arrow>
            </MonthArea>
            <ResumeArea>
                <ResumeItem title= 'Receita' value={income}/>
                <ResumeItem title= 'Despesa' value={expense}/>
                <ResumeItem 
                title= 'Balanço'
                value={income - expense}
                color ={(income - expense) < 0 ? 'red' : 'green'}
                />

            </ResumeArea>
          
        </Container>
    )
}