import { CONTENTS } from "../../assets/data";
import BaseLayout from "../base-layout/BaseLayout";
import { Contents, HeaderDetails, StoryCardContainer } from "./StoryCard-style";

const StoryCard = () => {
  return (
    <>
      {CONTENTS.map(({ title, description, imageUrl, direction }) => (
        <StoryCardContainer key={title}>
          <BaseLayout>
            <Contents $direction={direction}>
              <HeaderDetails>
                <h1>{title}</h1>
                <p>{description}</p>
              </HeaderDetails>
              <img src={imageUrl} alt={title} width="95%" loading="lazy" />
            </Contents>
          </BaseLayout>
        </StoryCardContainer>
      ))}
    </>
  );
};

export default StoryCard;
