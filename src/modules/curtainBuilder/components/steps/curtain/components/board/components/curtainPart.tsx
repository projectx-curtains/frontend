import { ICurtainPart } from "../interfaces";

const CurtainPart: React.FC<ICurtainPart> = ({
  side,
  sectionQuantity,
  curtainBackgroundPath,
}) => {
  if (sectionQuantity) {
    return (
      <>
        {[...Array(sectionQuantity)].map((curtainPart, num) => (
          <use
            key={side + num}
            href={`${curtainBackgroundPath}.svg#${side}-${num + 1}`}
          ></use>
        ))}
      </>
    );
  }
  return <use href={`${curtainBackgroundPath}.svg#${side}-1`}></use>;
};

export default CurtainPart;
