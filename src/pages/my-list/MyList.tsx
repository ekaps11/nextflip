import { useMemo } from "react";
import { useGetMyListQuery } from "../../api/firestore";
import { Movie, image } from "../../api/tmdb";
import Card from "../../components/card/Card";
import Spinner from "../../components/spinner/Spinner";
import { useAppSelector } from "../../store/store";
import { device } from "../../utils/helper/helper";
import { MobileView, MovieList, MyListContainer } from "./MyList-style";

const MyList = () => {
  const { user } = useAppSelector(({ user }) => user);
  const { data, isLoading } = useGetMyListQuery(user?.uid || "");

  const movies = useMemo(
    () =>
      data?.map(({ id, backdrop_path, title, name }: Movie) => {
        const url = `/preview?movie=${id}`;

        if (backdrop_path) {
          return device ? (
            <Card key={id} id={id} />
          ) : (
            <MobileView key={id} to={url}>
              <img
                src={image + backdrop_path}
                alt={title || name || "Unknow Title"}
              />

              <div>
                <p>{title || name || "Unknow Title"}</p>
              </div>
            </MobileView>
          );
        }
      }),
    [data]
  );

  if (isLoading) return <Spinner />;

  return (
    <MyListContainer>
      <h3>Daftar Saya</h3>

      <MovieList>{movies}</MovieList>
    </MyListContainer>
  );
};

export default MyList;
