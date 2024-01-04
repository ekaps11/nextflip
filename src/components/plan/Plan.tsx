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
        {Object.values(items).map(({ title, description, price }, i) => {
          return (
            <PlanBox key={title} $bg={price}>
              <h3>{title}</h3>
              {price && <p>{description}</p>}
              {!price ? (
                <img src={`/images/icon${++i}.webp`} alt={title} />
              ) : (
                <p>{price}</p>
              )}
            </PlanBox>
          );
        })}
      </div>
    </PlanContainer>
  );
};

export default Plan;
