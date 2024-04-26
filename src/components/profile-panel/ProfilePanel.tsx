import { t } from "i18next";
import { ProfilePanelContainer, ProfileIndicator } from "./ProfilePanel-style";
import { logOut } from "../../utils/firebase/firebase.utils";
import { PiPencilLight, PiSignOut, PiQuestion } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import CustomLink from "../custom-link/CustomLink";
import { forwardRef } from "react";

type ProfilePanelProps = {
  mouseLeave: () => void;
};

const ProfilePanel = forwardRef<HTMLDivElement, ProfilePanelProps>(
  ({ mouseLeave }, ref) => {
    const [help, account] = Object.values(
      t("footer.links", { returnObjects: true })
    ).slice(1, 3);

    const signOut = () => logOut();

    return (
      <ProfilePanelContainer ref={ref} onMouseLeave={mouseLeave}>
        <ProfileIndicator />

        <CustomLink to={account.url} target="_blank">
          <PiPencilLight />
          {t("profile.manage")}
        </CustomLink>

        <CustomLink to={account.url} target="_blank">
          <BsPerson />
          {account.title}
        </CustomLink>

        <CustomLink to={help.url} target="_blank">
          <PiQuestion />
          {help.title}
        </CustomLink>

        <hr />

        <div>
          <PiSignOut />
          <p onClick={signOut}>{t("sign.out")}</p>
        </div>
      </ProfilePanelContainer>
    );
  }
);

export default ProfilePanel;
