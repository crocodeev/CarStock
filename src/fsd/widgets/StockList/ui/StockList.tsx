'use client'

import { useGetCarPaginatedQuery } from "@/fsd/enteties/car/model/carSlice";
import { useGetAllMarksResult } from "@/fsd/enteties/mark/model/markSlice";
import { useAppDispatch, useAppSelector } from "@/fsd/shared/libs/store/redux";
import { DataType } from "../model";
import { Table } from "antd"
import { TableProps } from "antd/lib";
import { rowFormatter } from "../libs/rowFormater";
import { setCurrentPage, setItemsPerPage } from "@/fsd/features/pagination";

export default function StockList() {

  const dispatch = useAppDispatch();
  const filter = useAppSelector(state => state.filter);
  const pagination = useAppSelector(state => state.pagination);
  const marks = useGetAllMarksResult().data?.data;

  let totalPages = 0;

  if(marks && filter.mark){
    const selectedMarkAmount = marks.find(item => item.name === filter.mark)?.amount;
    if(selectedMarkAmount !== undefined){
      totalPages = Math.ceil(selectedMarkAmount/pagination.itemsPerPage);
    }
  }
  
  const skipLoad = filter.mark === undefined;

  const { data, isLoading } = useGetCarPaginatedQuery({ mark: filter.mark, 
    limit: pagination.itemsPerPage.toString(), 
    skip: (pagination.currentPage - 1).toString(),
    model: filter.model.join(',')
  },{
    skip: skipLoad
  });


  const handleTableChange: TableProps<DataType>["onChange"] = (event) => {

    if(event.current && event.current !== pagination.currentPage){

      dispatch(setCurrentPage(event.current))
    }

    if(event.pageSize && event.pageSize !== pagination.itemsPerPage){

      dispatch(setItemsPerPage(event.pageSize))
    }
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

    tableData = data?.data?.map(item => {

      const formatted = new rowFormatter(item);

      return {
        key: formatted.id,
        id: formatted.id,
        markModel: formatted.markModel,
        modification: formatted.modification,
        equipment: formatted.equipment,
        price: formatted.price,
        createdAt: formatted.createdAt
      }
  });

  }else{

    tableData = [];
  }
  

  return (
    <Table 
      columns={columns} 
      dataSource={tableData}
      rowKey="id"
      pagination={{
        current: pagination.currentPage,
        pageSize: pagination.itemsPerPage,
        total: totalPages,
        showSizeChanger: true
      }}
      scroll={{x:950,y:"calc(90vh - 300px)" }}
      size="large"
      sticky
      loading={isLoading}
      onChange={handleTableChange}
    />
  )
}
