import { Container, CardBody } from "./DestinationCard.styled";

const DestinationCard = ({ destination }) => {
  return (
    <Container>
      <img src={destination.imageUrl} alt={destination.imageAlt} />

      <CardBody>
        <h3>{destination.city}</h3>

        <p>${destination.averagePrice} / night average</p>

        <div>
          <a href='#!'>Explore {destination.propertyCount} properties</a>
        </div>
      </CardBody>
    </Container>
  );
};

export default DestinationCard;
