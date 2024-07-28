import { Flex, Layout, Space } from "antd";
import Header from "antd/lib/layout";
import Content from "antd/lib/layout";
import Footer from "antd/lib/layout";
import { Home } from "@/fsd/pages/Home";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'start',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    margin: "1% 10% 0% 10%",
    height: "100vh",
    alignItems: "center"
  };

const footerStyle: React.CSSProperties = {
    display: "flex",
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    position: "sticky",
    width: "100%",
    bottom: "0"
  };


function App() {
    
    return(
        <Flex gap="middle" wrap>
            <Layout >
                    <Header style={headerStyle}>
                        <Title level={1} style={{ color: "#f5f5f5", margin: "1% 5% 1% 5%" }}>Car Stock</Title>
                    </Header>
                    <Content style={contentStyle}>
                        <Home />
                    </Content>
                    <Footer style={footerStyle}> 
                        <Title level={5} style={{ color: "#f5f5f5" }}>created by Crocodeev</Title>
                    </Footer>
            </Layout>
        </Flex>
    )
}

export { App }