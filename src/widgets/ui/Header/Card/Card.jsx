import CardEnt from '../../../../entites/ui/SaleWeekend/Food/Card/CardEnt';
import FoodTitle from '../../../../entites/ui/SaleWeekend/Food/FoodTitle/FoodTitle';
import AddCartButton from '../../../../features/ui/Navigation/AddCartButton/AddCartButton';
export default function Card({ title }) {
  return (
    <>
      <div className="container">
        <FoodTitle title={title} />
        <CardEnt>
          <AddCartButton />
        </CardEnt>
      </div>
    </>
  );
}
