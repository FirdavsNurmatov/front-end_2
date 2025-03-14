import { Avatar, Space } from "antd";
import { useGetSingleStore } from "../home/service/query/useGetSingleStore";
import { UserOutlined } from "@ant-design/icons";

export const Profile = () => {
  let storeImage = "";
  let storeFullName = "";
  let storeEmail = "";
  let storeNumber = "";

  const { data, isLoading } = useGetSingleStore();

  if (!isLoading) {
    storeImage = data?.justStoreData?.data?.image;
    storeFullName = data?.justStoreData?.data?.fullname;
    storeEmail = data?.justStoreData?.data?.email;
    storeNumber = data?.justStoreData?.data?.phone_number;

    console.log(data.justStoreData);
    console.log(storeEmail, storeNumber, storeFullName);
  }

  return (
    <div className="container">
      <div className="profile__data">
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar
              size={180}
              src={isLoading ? <UserOutlined /> : storeImage}
            />
          </Space>
        </Space>
        <div>
          <h2>Ism familiya</h2>
          <p>{storeFullName ? storeFullName : "Loading..."}</p>
        </div>
        <div>
          <h2>Telefon raqam</h2>
          <p>{storeNumber ? storeNumber : "Loading..."}</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>{storeEmail ? storeEmail : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};
