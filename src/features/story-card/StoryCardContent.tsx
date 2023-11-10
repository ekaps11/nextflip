import { BaseLayout } from "../../utils/styles/commonStyle";
import { StoryCardContainer, Contents, HeaderDetails } from "./StoryCard-style";

type StoryCardContentProps = {
  title: string;
  description: string;
  imageUrl: string;
  direction: string;
};

const StoryCardContent = ({
  title,
  description,
  imageUrl,
  direction,
}: StoryCardContentProps) => {
  return (
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
  );
};

export default StoryCardContent;
