import { useTranslation } from "react-i18next";
import StoryCardContent from "./StoryCardContent";

const StoryCard = () => {
  const { t } = useTranslation();

  return (
    <>
      {Object.values(t("storyCard", { returnObjects: true })).map(
        ({ title, description, imageUrl, direction }) => (
          <StoryCardContent
            key={title}
            title={title}
            description={description}
            imageUrl={imageUrl}
            direction={direction}
          />
        )
      )}
    </>
  );
};

export default StoryCard;
