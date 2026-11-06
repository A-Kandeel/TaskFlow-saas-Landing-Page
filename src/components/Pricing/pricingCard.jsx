import Button from "../button";
import {Check} from "lucide-react";

const PricingCard = ({ title, description, price, button, data }) => {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <div className="price">
        {Number.isInteger(price) && <span>$</span>}
        {price}
        {Number.isInteger(price) && <span className="payment-per"> /month</span>}
      </div>
      <Button onClick={() => window.location.href ="#Contact"}>{button}</Button>
      <ul className="feat-list">
        {data.map((feat) => (
          <li key={feat}><Check/> {feat}</li>
        ))}
      </ul>
    </article>
  );
};


export default PricingCard;