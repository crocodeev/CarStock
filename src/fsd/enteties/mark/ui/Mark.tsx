import Typography from "antd/es/typography/Typography";
import Link from "antd/lib/typography/Link";
import { Badge, Button, Space } from "antd";
import { TMark } from "../model/types";

export default function Mark({ mark, onClick }: { mark: TMark, onClick: (event: any) => void}) {

  return (
      <Space direction="horizontal" wrap>
        <Button type="link" onClick={onClick}>{mark.name}</Button>
        <Badge count={mark.amount} color="" overflowCount={mark.amount}/>
      </Space>
  )
}
