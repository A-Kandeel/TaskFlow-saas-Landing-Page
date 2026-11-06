import Button from "../button";

const FeaturesCard = ({ tag, title, description, icon }) => {
  return (
    <article className="card">
      <div className="icon">{icon}</div>
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <Button onClick={() => window.location.href ="#Demo"}>Explore</Button>
    </article>
  );
};


export default FeaturesCard;