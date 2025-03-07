import hideIcon from "../../../assets/svg/home/hide-icon.svg";
import { useGetSingleStore } from "./service/query/useGetSingleStore";

export const Home = () => {
  const count = 0;

  const { data: storeData, isLoading } = useGetSingleStore();
  const storeFullName = storeData?.data?.fullname;

  return (
    <div className=".container">
      <div className="home">
        <div>
          <img src="" alt="profile_image" />
          <p>{isLoading ? "something went wrong" : storeFullName} </p>
        </div>
        <div className="all__summ">
          <div className="all__summ__block">
            <p className="all__summ__title">Umumiy nasiya:</p>
            <p>{count} so'm</p>
          </div>
          <button className="all__summ__hide_icon">
            <img src={hideIcon} alt="icon" />
          </button>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
