import { useTranslation } from "react-i18next";
import {
  ManageProfileContainer,
  ProfileIndicator,
} from "./ManageProfile-style";
import { logOut } from "../../utils/firebase/firebase.utils";
import { PiPencilLight, PiSignOut, PiQuestion } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { useAppSelector } from "../../store/store";
import CustomLink from "../custom-link/CustomLink";

const ManageProfile = () => {
  const { profilePanel } = useAppSelector(({ ui }) => ui);
  const { t } = useTranslation();

  const [help, account] = Object.values(
    t("footer.links", { returnObjects: true })
  ).slice(1, 3);

  const signOut = () => logOut();

  return (
    profilePanel && (
      <ManageProfileContainer>
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
      </ManageProfileContainer>
    )
  );
};

export default ManageProfile;
