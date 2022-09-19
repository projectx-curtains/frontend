import Card from "../../Card";
import "./index.scss";

const SortedCards = ({ data }) => {
  return (
    <div className="sorted-cards">
      {data.map((el) => {
        return <Card index={el.id} setName={el.title} setPrice={el.price} />;
      })}
    </div>
  );
};
export default SortedCards;
