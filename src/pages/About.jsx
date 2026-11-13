import InfoSection from '../components/InfoSection';

function About() {
  return (
    <div className="page">
      <h1>About Los Pollos Hermanos</h1>

      <InfoSection title="What We Do">
        <p>
          We are a family-style chicken restaurant serving freshly fried
          chicken, tasty sides and cold drinks. Every meal is prepared to order
          using quality ingredients and our own secret spice blend.
        </p>
      </InfoSection>

      <InfoSection title="Our Story">
        <p>
          Los Pollos Hermanos began as a small family kitchen with one simple
          idea: serve great chicken at a fair price. Over the years, word
          spread, and our little kitchen grew into a place where friends and
          families gather to eat together.
        </p>
      </InfoSection>

      <InfoSection title="Our Mission and Vision">
        <ul>
          <li>
            <strong>Mission:</strong> To serve delicious, fresh food with
            friendly service every day.
          </li>
          <li>
            <strong>Vision:</strong> To become the most loved chicken restaurant
            in our community.
          </li>
          <li>
            <strong>Objective:</strong> To keep our customers coming back by
            never compromising on quality.
          </li>
        </ul>
      </InfoSection>
    </div>
  );
}

export default About;
