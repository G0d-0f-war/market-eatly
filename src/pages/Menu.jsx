import Sale from "../widgets/ui/Header/Sale/Sale";
import Header from "../widgets/ui/Header/Header";
import Questions from "../entites/ui/SaleWeekend/Questions/Questions";
import QuestionsText from "../features/ui/Navigation/Questions/QuestionText";
export default function Menu () { 
    return ( 
        <>
        <Header />
        <Sale />
        <Questions />
        <QuestionsText />
        </>
    )
};