import React, { useEffect } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { useForm } from "react-hook-form";
import { useGetDebtors } from "./service/query/useGetDebtors";
import useDebounce from "../../../config/debounce";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: "Sur'at", dataIndex: "image" },
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
];

export const Debtors = () => {
  const { data: debtorsData, isPending } = useGetDebtors();
  const data: DataType[] = debtorsData?.data;

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
