'use client'

import { useGetCarByMarkPaginatedQuery, useGetCarPaginatedQuery } from "@/fsd/enteties/car/model/carSlice";
import { useGetAllMarksResult } from "@/fsd/enteties/mark/model/markSlice";
import { useAppSelector } from "@/fsd/shared/libs/store/redux";
import { Table } from "antd"
import { TableProps } from "antd/lib";

export default function StockList() {

  const filter = useAppSelector(state => state.filter);
  const marks = useGetAllMarksResult().data?.data;

  let totalPages = 0;

  if(marks && filter.mark){
    const selectedMarkAmount = marks.find(item => item.name === filter.mark)?.amount;
    if(selectedMarkAmount !== undefined){
      totalPages = selectedMarkAmount;
    }
  }

  console.log(`Total pages ${totalPages}`);
  
  const skipLoad = filter.mark === undefined;

  console.log(`Should skip ${skipLoad}`);
  
  
  const { data, error, isError, isLoading } = useGetCarPaginatedQuery({ mark: filter.mark, limit: "10", skip: "0"}, {
    skip: skipLoad
  });

  const handleTableChange = () => {

  } 


  interface DataType {
    key: string,
    id: string,
    markModel: string,
    modification: string,
    equipment: string,
    price: string,
    createdAt: string
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Марка/модель",
      dataIndex: "markModel",
      key: "markModel"
    },
    {
      title: "Модификация",
      dataIndex: "modification",
      key: "modification"
    },
    {
      title: "Комплектация",
      dataIndex: "equipment",
      key: "equipment"
    },
    {
      title: "Стоимость",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Дата создания",
      dataIndex: "createdAt",
      key: "createdAt"
    },
  ];

  let tableData: DataType[];

  if(data?.data){

    tableData = data?.data?.map(item => ({
      key: item._id,
      id: item._id,
      markModel: `${item.mark} ${item.model}`,
      modification: `${item.engine.volume} ${item.engine.power} ${item.drive}`,
      equipment: `${item.equipmentName}`,
      price: `${item.price}`,
      createdAt: `${item.createdAt}`
    }));

  }else{

    tableData = [];
  }
  

  return (
    <Table 
    columns={columns} 
    dataSource={tableData}
    pagination={{
      current: 1,
      pageSize: 10,
      total: totalPages
    }}
    loading={isLoading}
    />
  )
}
