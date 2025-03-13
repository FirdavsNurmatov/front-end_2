import React, { useEffect } from "react";
import { Image, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useForm } from "react-hook-form";
import { useGetDebtors } from "./service/query/useGetDebtors";
import useDebounce from "../../../config/debounce";
import { useNavigate } from "react-router-dom";

interface DataType {
  id?: string;
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const Debtors = () => {
  const navigate = useNavigate();

  const createNasiya = (data: any) => {
    navigate(`/app/create-debt/${data.id}`);
  };

  const showNasiya = (data: any) => {
    navigate(`/app/debts/${data.id}`);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Sur'at",
      dataIndex: "image",
      render: (img) => <Image width={100} src={img} />,
    },
    {
      title: "To'liq ism",
      dataIndex: "full_name",
    },
    {
      title: "Telefon raqam",
      dataIndex: "phone_number",
    },
    {
      title: "Yashash maznil",
      dataIndex: "address",
    },
    {
      title: "Amal",
      dataIndex: "action_btn",
      render: (_, record) => (
        <button
          // key={id}
          // id={`${id}`}
          onClick={() => createNasiya(record)}
          className="nasiya__create_btn"
        >
          +nasiya yaratish
        </button>
      ),
    },
    {
      title: "Nasiyalar",
      dataIndex: "nasiya",
      render: (_, record) => (
        <button onClick={() => showNasiya(record)} className="nasiya__show_btn">
          nasiyani ko'rish
        </button>
      ),
    },
  ];

  const { data: debtorsData, isPending } = useGetDebtors();
  const data: DataType[] = debtorsData?.data.map((debtor: DataType) => ({
    ...debtor,
    key: debtor?.id,
  }));

  const { register, watch } = useForm();
  const searchTerm = watch("qidiruv");
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <>
      <form className="debtor__search">
        <input
          className="search_input"
          {...register("qidiruv")}
          type="text"
          placeholder="Ism yoki telefon raqam orqali qidiruv"
        />
        <button type="submit" className="search_btn">
          qidirish
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : (
        <Table<DataType>
          className="debtors__table"
          columns={columns}
          dataSource={data}
          size="middle"
        />
      )}{" "}
    </>
  );
};
