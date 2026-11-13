import MenuCard from '../components/MenuCard';

const menuItems = [
  {
    id: 1,
    name: 'Crispy Chicken Meal',
    description:
      'Two pieces of golden fried chicken served with rice and coleslaw.',
    price: '₦4,500',
    image: '/images/chicken.jpg',
  },
  {
    id: 2,
    name: 'Seasoned Fries',
    description: 'Hot, crunchy fries tossed in our secret spice mix.',
    price: '₦1,800',
    image: '/images/fries.jpg',
  },
  {
    id: 3,
    name: 'Chilled Drink',
    description: 'A refreshing cold drink to go with your meal.',
    price: '₦800',
    image: '/images/drink.jpg',
  },
];

function Services() {
  return (
    <div className="page">
      <h1>Our Menu</h1>
      <p className="page-intro">Fresh food, made to order.</p>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
