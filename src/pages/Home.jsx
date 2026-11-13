import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [showSpecial, setShowSpecial] = useState(false);

  return (
    <div className="home">
      <section className="hero">
        <img
          src="/images/hero.jpg"
          alt="Golden crispy fried chicken"
          className="hero-img"
        />
        <div className="hero-text">
          <h1>Los Pollos Hermanos</h1>
          <h2>Welcome! Great chicken, made fresh every day.</h2>
          <p>
            We serve crispy, flavourful chicken meals, tasty sides and cold
            drinks, perfect for the whole family.
          </p>
          <Link to="/services" className="btn">
            View Our Menu
          </Link>
        </div>
      </section>

      <section className="special">
        <button className="btn" onClick={() => setShowSpecial(!showSpecial)}>
          {showSpecial ? "Hide Today's Special" : "Show Today's Special"}
        </button>

        {showSpecial && (
          <div className="special-card">
            <h3>Today's Special</h3>
            <p>Family Bucket: 8 pieces of chicken, 2 sides and 4 drinks.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
