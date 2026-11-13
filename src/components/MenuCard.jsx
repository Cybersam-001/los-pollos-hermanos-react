function MenuCard({ name, description, price, image }) {
  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <div className="menu-card-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}

export default MenuCard;
