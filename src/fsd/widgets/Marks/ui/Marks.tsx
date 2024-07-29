'use client';

import { useGetAllMarksQuery } from "@/fsd/enteties/mark"
import { Space, Spin, Alert } from "antd";
import { Mark } from "@/fsd/enteties/mark";
import { useAppDispatch } from "@/fsd/shared/libs/store/redux";
import { setMark, setModel } from "@/fsd/features/filter/model/filterSlice";
import { useEffect } from "react";

export default function Marks() {

  const { data, error, isError, isLoading } = useGetAllMarksQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(data?.data){
      const marks = data.data;
      console.log(marks);
      
      dispatch(setMark(marks[0].name));
    }
  },[data]);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    
    const mark = event.currentTarget.innerText;
    
    dispatch(setMark(mark));
    dispatch(setModel([]));
  }

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


  return (
    <Space wrap>
        {data?.data?.map(item => <Mark mark={item} key={item.name} onClick={handleClick}/>)}
    </Space>
  )
}
