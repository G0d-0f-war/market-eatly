import Header from "../widgets/ui/Header/Header";
import Questions from "../widgets/ui/Header/Questions/Questions";
import Footer from "../widgets/ui/Header/Footer/Footer";
import Restaurants from '../widgets/ui/Header/Restaurants/Restaurants'
export default function ViewAll () { 
    
    return ( 
        <>
            <Header />
            <Restaurants viewAll={true} buttonViewAll={true}/>
            <Questions />
            <Footer />
        </>
    )
};