import { CONTENTS } from "../../assets/data";
import BaseLayout from "../base-layout/BaseLayout";
import Header1 from "../header/Header1";
import Paragraph from "../paragraph/Paragraph";
import { Contents, HeaderDetails, StoryCardContainer } from "./StoryCard-style";

const StoryCard = () => {
  return (
    <>
      {CONTENTS.map(({ title, description, imageUrl, direction }) => (
        <StoryCardContainer key={title}>
          <BaseLayout>
            <Contents $direction={direction}>
              <HeaderDetails>
                <Header1>{title}</Header1>
                <Paragraph>{description}</Paragraph>
              </HeaderDetails>
              <img src={imageUrl} alt={title} width="95%" />
            </Contents>
          </BaseLayout>
        </StoryCardContainer>
      ))}
    </>
  );
};

export default StoryCard;
