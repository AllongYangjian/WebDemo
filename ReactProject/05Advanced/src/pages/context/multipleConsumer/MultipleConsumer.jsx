import React from 'react'
import { Layout, Button } from 'antd'
import "antd/dist/antd.css"
const { Sider, Content, Header, Footer } = Layout
const ThemeContext = React.createContext('primary')
const UserContext = React.createContext({ name: 'yangjian' })

class MultipleConsumerView extends React.Component {

    render() {
        const { user, theme } = this.props
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={user}>
                    <LayoutView></LayoutView>
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

function LayoutView() {
    return <Layout style={{ height: '100%' }}>
        <Sider style={{backgroundColor:'#fff'}}>Sider</Sider>
        <Layout>
            <Header>
                Header
             </Header>
            <ContentView />
            <Footer style={{ textAlign: "center" }}>
                Footer
            </Footer>
        </Layout>

    </Layout>
}

function ContentView() {
    return (
        <Content>
            <div style={{ margin: 24 }}>
                <ThemeContext.Consumer>
                    {
                        theme => (
                            <UserContext.Consumer>
                                {
                                    user => (
                                        <Button type={theme}>{user.name}</Button>
                                    )
                                }
                            </UserContext.Consumer>
                        )
                    }
                </ThemeContext.Consumer>
            </div>
        </Content>
    )
}

export default MultipleConsumerView;



