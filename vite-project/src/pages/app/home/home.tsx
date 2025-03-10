import hideIcon from "../../../assets/svg/home/hide-icon.svg";
import { useGetSingleStore } from "./service/query/useGetSingleStore";
import walletIcon from "../../../assets/svg/home/wallet-icon.svg";
import addBtnIcon from "../../../assets/svg/home/add-btn-icon.svg";
import { useNavigate } from "react-router-dom";
import calendarIcon from "../../../assets/svg/home/calendar-icon.svg";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

export const Home = () => {
  const navigate = useNavigate();
  const isPaid = true;
  let storeFullName = "";
  let storeImage = "";
  let storeAllDebtors = "";
  let updatedStoreAllDebts = "";
  let updatedStoreWallet = "";

  const { data: storeData, isLoading } = useGetSingleStore();
  if (!isLoading) {
    localStorage.setItem("store_id", storeData?.justStoreData?.data?.id);

    const { justStoreData, additionalStoreData } = storeData;

    storeFullName = justStoreData?.data?.fullname;
    storeImage = justStoreData?.data?.image;
    storeAllDebtors = additionalStoreData?.data?.debtors_count;
    const storeWallet = justStoreData?.data?.wallet;

    const storeAllDebts = String(additionalStoreData?.data?.total_debts);
    const storeAllDebtsLength = storeAllDebts.length - 7;
    if (storeAllDebts.length > 6) {
      for (let i = storeAllDebtsLength; i >= 0; i--) {
        updatedStoreAllDebts = storeAllDebts[i] + updatedStoreAllDebts;
        if (i % 3 == 0) {
          updatedStoreAllDebts = " " + updatedStoreAllDebts;
        }
      }
    } else {
      for (let i = storeAllDebtsLength; i > 0; i--) {
        updatedStoreAllDebts = storeAllDebts[i] + updatedStoreAllDebts;
        if ((i + 1) % 3 == 0) {
          updatedStoreAllDebts = " " + updatedStoreAllDebts;
        }
      }
    }
    updatedStoreAllDebts = updatedStoreAllDebts + " " + storeAllDebts.slice(-6);

    let storeWalletLength = storeWallet.length - 7;
    if (storeWallet.length > 6) {
      for (let i = storeWalletLength; i >= 0; i--) {
        updatedStoreWallet = storeWallet[i] + updatedStoreWallet;
        if (i % 3 == 0) {
          updatedStoreWallet = " " + updatedStoreWallet;
        }
      }
    } else {
      for (let i = storeWalletLength; i > 0; i--) {
        updatedStoreWallet = storeWallet[i] + updatedStoreWallet;
        if ((i + 1) % 3 == 0) {
          updatedStoreWallet = " " + updatedStoreWallet;
        }
      }
    }
    updatedStoreWallet = updatedStoreWallet + " " + storeWallet.slice(-6);
  }

  const [isVisible, setIsVisible] = useState(false);

  const goToStorePayment = () => {
    navigate("/");
  };

  const goToStoreCalendar = () => {
    navigate("/app/calendar");
  };

  return (
    <div className=".container">
      <div className="home">
        <div className="store__hero">
          <div className="store__img_name">
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Avatar size={80} src={true ? <UserOutlined /> : storeImage} />
              </Space>
            </Space>
            <p className="store__fullname">
              {isLoading ? "Loading..." : storeFullName}
            </p>
          </div>
          <button className="store__calendar" onClick={goToStoreCalendar}>
            <img className="home__icon" src={calendarIcon} alt="icon" />
          </button>
        </div>
        <div className="all__summ">
          <div className="all__summ__block">
            <p className="all__summ__title">Umumiy nasiya:</p>
            <p className="all__summ__text">
              {isLoading
                ? "Loading..."
                : isVisible
                ? updatedStoreAllDebts
                : "* * *"}{" "}
              so'm
            </p>
          </div>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="all__summ__hide_icon"
          >
            <img className="eye_hide__icon" src={hideIcon} alt="icon" />
          </button>
        </div>
        <div className="about__debtors">
          <div className="about__debtors__summ">
            <p className="about__debtors__summ__text">
              Kechiktirilgan to‘lovlar
            </p>
            <p className="about__debtors__summ__quantity">{0}</p>
          </div>
          <div className="about__debtors__count">
            <p className="about__debtors__count__text">Mijozlar soni</p>
            <p className="about__debtors__count__quantity">
              {storeAllDebtors ? storeAllDebtors : 0}
            </p>
          </div>
        </div>
        <div className="wallet">
          <p className="wallet__title">Hamyoningiz</p>
          <div className="wallet__title_block">
            <img className="home__icon" src={walletIcon} alt="icon" />
            <div className="your__wallet">
              <div>
                <p className="in_your__wallet">Hisobingizda</p>
                <p className="in_your__wallet__summ">
                  {isLoading ? "Loading..." : updatedStoreWallet} so'm
                </p>
              </div>
              <button className="wallet__btn" onClick={goToStorePayment}>
                <img className="home__icon" src={addBtnIcon} alt="icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="store__payment">
          <p className="store__payment__title">Bu oy uchun to'lov:</p>
          {isPaid ? (
            <p className="store__payment__true">To'lov qilingan</p>
          ) : (
            <p className="store__payment__false">To'lov qilinmagan</p>
          )}
        </div>
      </div>
    </div>
  );
};
