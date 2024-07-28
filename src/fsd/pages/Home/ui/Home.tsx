import { Marks } from "@/fsd/widgets/Marks";
import { ModelFilter } from "@/fsd/widgets/ModelFilter";
import { StockList } from "@/fsd/widgets/StockList";
import { Space } from "antd";


export default function Home() {
  return (
    <Space direction="vertical" size="middle">
      <Marks />
      <ModelFilter />
      <StockList />
    </Space>
  )
}
