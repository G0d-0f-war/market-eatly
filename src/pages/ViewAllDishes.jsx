import Header from "../widgets/ui/Header/Header";
import Questions from "../widgets/ui/Header/Questions/Questions";
import Footer from "../widgets/ui/Header/Footer/Footer";
import Dishes from "../widgets/ui/Header/Dishes/Dishes";
export default function ViewAllDishes () { 
    
    return ( 
        <>
            <Header />
            <Dishes viewAll={true} buttonViewAll={true}/>
            <Questions />
            <Footer />
        </>
    )
};