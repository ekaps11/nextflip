import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import Button from "../button/Button";
import ProfilePanel from "../profile-panel/ProfilePanel";
import SelectLanguage from "../select/SelectLanguage";
import { ProfileIcon } from "./Navigation-style";

const NavigationMenu = () => {
  const [showPanel, setShowPanel] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);

  return (
    <div>
      {!user ? (
        <>
          <SelectLanguage id="header-language" />
          <Button onClick={() => navigate("/login")}>{t("sign.in")}</Button>
        </>
      ) : (
        <>
          <HiMagnifyingGlass
            size="2em"
            onMouseEnter={() => setShowPanel(false)}
          />
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
