// components/StatItem.js
const StatItem = ({ number, description }) => (
    <div className="text-center">
      <p className="numbersbar">{number}</p>
      <p className="xl:text-3xl">{description}</p>
    </div>
  );
  
  export default StatItem;
  