import MakeOrder from "./makeOrder";
import Payment from "./payment";
import Delivery from "./delivery";
import Replacement from "./replacement";
import style from "../styles/index.module.scss";

const TextBlock: React.FC = () => {
  return (
    <div className={style["text-block"]}>
      <MakeOrder />
      <Payment />
      <Delivery />
      <Replacement />
    </div>
  );
};

export default TextBlock;
