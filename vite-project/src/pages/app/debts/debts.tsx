import { useParams } from "react-router-dom";
import { useGetDebts } from "./service/query/useGetDebts";
import { Image, Table, TableColumnsType } from "antd";

interface DataType {
  image: File;
  name: string;
  debt_sum: number;
  debt_period: number;
}

export const Debts = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDebts();

  const deleteNasiya = (data: DataType) => {
    console.log(data);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Sur'at",
      dataIndex: "image",
      render: (img) => <Image width={100} src={img} />,
    },
    {
      title: "Mahsulot nomi",
      dataIndex: "name",
    },
    {
      title: "Umumiy narxi",
      dataIndex: "debt_sum",
    },
    {
      title: "Nasiyaga berilgan oy",
      dataIndex: "debt_period",
    },
    {
      title: "Amal",
      dataIndex: "delete_btn",
      render: (_, record) => (
        <button
          onClick={() => deleteNasiya(record)}
          className="nasiya__delete_btn"
        >
          nasiyani o'chirish
        </button>
      ),
    },
  ];

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <Table<DataType>
          className="debtors__table"
          columns={columns}
          dataSource={
            data.data.map((item: any) => {
              if (item.debtor_id === id) {
                return { ...item, key: item.id };
              }
            }) || "no data"
          }
          size="middle"
        />
      )}
    </div>
  );
};
