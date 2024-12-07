import { useRef, useState } from "react";
import { t } from "i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import Button from "../button/Button";
import ProfilePanel from "../profile-panel/ProfilePanel";
import SelectLanguage from "../select/SelectLanguage";
import { ProfileIcon } from "./Navigation-style";
import SearchMovies from "../searchbar/Searchbar";

const NavigationMenu = () => {
  const [showPanel, setShowPanel] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useAppSelector(({ user }) => user);

  return (
    <div>
      {!user && pathname !== "/login" && (
        <>
          <SelectLanguage id="header-language" />
          <Button onClick={() => navigate("/login")}>{t("sign.in")}</Button>
        </>
      )}

      {user && (
        <>
          <SearchMovies mouseEnter={() => setShowPanel(false)} />
          <ProfileIcon
            ref={iconRef}
            onMouseEnter={() => setShowPanel(true)}
            onClick={() => setShowPanel(!showPanel)}
          />
          <div
            onMouseEnter={() => setShowPanel(false)}
            style={{ opacity: "0" }}
          >
            '
          </div>
          {showPanel && (
            <ProfilePanel
              ref={panelRef}
              mouseLeave={() => setShowPanel(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default NavigationMenu;
