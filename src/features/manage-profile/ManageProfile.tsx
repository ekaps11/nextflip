import { useTranslation } from "react-i18next";
import {
  ManageProfileContainer,
  ProfileIndicator,
} from "./ManageProfile-style";
import { logOut } from "../../utils/firebase/firebase.utils";
import { PiPencilLight, PiSignOut } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { useAppSelector } from "../../store/store";

const ManageProfile = () => {
  const { t } = useTranslation();
  const { profilePanel } = useAppSelector(({ ui }) => ui);

  const signOut = () => {
    logOut();
    location.reload();
  };

  return (
    profilePanel && (
      <ManageProfileContainer>
        <ProfileIndicator />
        <div>
          <i>
            <PiPencilLight />
          </i>
          <p>{t("profile.manage")}</p>
        </div>
        <div>
          <i>
            <BsPerson />
          </i>
          <p>{t("profile.account")}</p>
        </div>
        <hr />
        <div>
          <i>
            <PiSignOut />
          </i>
          <p onClick={signOut}>{t("sign.out")}</p>
        </div>
      </ManageProfileContainer>
    )
  );
};

export default ManageProfile;
