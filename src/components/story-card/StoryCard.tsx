import { CONTENTS } from "../../assets/data/data";
import StoryCardContent from "./StoryCardContent";

const StoryCard = () => {
  return (
    <>
      {CONTENTS.map(({ title, description, imageUrl, direction }) => (
        <StoryCardContent
          key={title}
          title={title}
          description={description}
          imageUrl={imageUrl}
          direction={direction}
        />
      ))}
    </>
  );
};

export default StoryCard;
