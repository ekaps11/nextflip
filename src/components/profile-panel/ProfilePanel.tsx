import { useNavigate } from "react-router-dom";
import { logOut } from "../../utils/firebase/firebase.utils";
import { t } from "i18next";
import { ProfilePanelContainer, ProfileIndicator } from "./ProfilePanel-style";
import { PiPencilLight, PiSignOut, PiQuestion } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import CustomLink from "../custom-link/CustomLink";
import { forwardRef } from "react";
import { useAppDispatch } from "../../store/store";
import {
  defaultSearchState,
  setSearchedMovies,
} from "../../store/slices/persistedSlice";

type ProfilePanelProps = {
  mouseLeave: () => void;
};

const ProfilePanel = forwardRef<HTMLDivElement, ProfilePanelProps>(
  ({ mouseLeave }, ref) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [help, account] = Object.values(
      t("footer.links", { returnObjects: true })
    ).slice(1, 3);

    const signOut = async () => {
      dispatch(setSearchedMovies(defaultSearchState));
      await logOut();
      navigate("/");
    };

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

        <div onClick={signOut}>
          <PiSignOut />
          <p>{t("sign.out")}</p>
        </div>
      </ProfilePanelContainer>
    );
  }
);

export default ProfilePanel;
