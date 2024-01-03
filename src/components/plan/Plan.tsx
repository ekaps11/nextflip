import { PlanContainer, PlanBox } from "./Plan-style";

type PlanProps = {
  title: string;
  items: [];
};

const Plan = ({ title, items }: PlanProps) => {
  return (
    <PlanContainer>
      <h2>{title}</h2>
      <div>
        {Object.values(items).map(({ title, description, price, image }) => {
          return (
            <PlanBox key={title} $bg={image}>
              <h3>{title}</h3>
              {!image && <p>{description}</p>}
              {image ? <img src={image} /> : <p>{price}</p>}
            </PlanBox>
          );
        })}
      </div>
    </PlanContainer>
  );
};

export default Plan;
