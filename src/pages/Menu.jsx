import Sale from '../widgets/ui/Header/Sale/Sale';
import Header from '../widgets/ui/Header/Header';
import Questions from '../widgets/ui/Header/Questions/Questions';
import Footer from '../widgets/ui/Header/Footer/Footer';
import Restaurants from '../widgets/ui/Header/Restaurants/Restaurants';
import Dishes from '../widgets/ui/Header/Dishes/Dishes';
export default function Menu() {
  return (
    <>
      <Header />
      <Sale />
      <Restaurants primal="primal" variant={2}/>
      <Dishes primal="primal" variant={2}/>
      <Questions />
      <Footer />
    </>
  );
}
