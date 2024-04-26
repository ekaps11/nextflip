import { t } from "i18next";
import { GamesContainer } from "./Games-style";

const Games = () => {
  return (
    <GamesContainer>
      <h2>{t("games.title")}</h2>
      <div>
        <div>
          <h2>{t("games.header")}</h2>
          <p>{t("games.detail")}</p>
        </div>
      </div>
    </GamesContainer>
  );
};

export default Games;
