'use client';

import { useGetModelsByMarkQuery } from "@/fsd/enteties/model/model";
import { useAppSelector } from "@/fsd/shared/libs/store/redux";
import { skipToken } from "@reduxjs/toolkit/query";
import { Select, Spin, Alert } from "antd";
import type { SelectProps } from "antd";

export default function Marks() {

  const mark = useAppSelector(state => state.filter.mark);
  
  const { data, error, isError, isLoading } = useGetModelsByMarkQuery(mark || skipToken);
  
  if (isLoading) return  <Spin size="large" />

  if (isError) {
    if ('status' in error ) {

      const message = `Error ocured with code ${error.status}`
      return <Alert message={message} type="error" closable/>

    } else {

      const message = `Error ocured: ${JSON.stringify(error)}`
      return <Alert message={JSON.stringify(error)}  type="error" closable/>
    }
  }

  const options: SelectProps['options'] = data?.data?.map(item => ({ value: item }));

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
    
  }

  return (

      <Select
        style={{ width: "50%" }}
        mode="multiple"
        allowClear
        placeholder="Выберите модель"
        onChange={handleChange}
        options={options || []}
      />

  );
}
