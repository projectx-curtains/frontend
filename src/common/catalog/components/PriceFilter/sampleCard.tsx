interface ISampleCardProps {
  id: number;
  price: number;
  title: string;
}

const SampleCard: React.FC<ISampleCardProps>=({title, price, id})=>{
  return (
    <div className="samle-card">
      <span>{title}</span>
      <span>{price}</span>
    </div>
  )
}
export default SampleCard;