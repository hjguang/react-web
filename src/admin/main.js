import React, {Component} from 'react'
import {Route, Switch, Link, Redirect} from 'react-router-dom'
import {Layout, Menu} from 'antd'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import App from '../App'
import AdminMenu from '../views/admin/AdminMenu'


class Main extends Component {
    renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{ msg }</h5>
    render() {
        const {Header, Content, Footer, Sider} = Layout;
        const { SubMenu } = Menu;
        return (
            <Layout>
                {/*<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <AdminMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <AdminMenu.Item key="1">nav 1</AdminMenu.Item>
                        <AdminMenu.Item key="2">nav 2</AdminMenu.Item>
                        <AdminMenu.Item key="3">nav 3</AdminMenu.Item>
                    </AdminMenu>
                </Header>*/}
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }} collapsible={true}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/main">主页</Link>
                        </Menu.Item>
                        <SubMenu key="menu" title="菜单管理">
                        <Menu.Item key="menu-add">
                            <Link to="/menu"> 新建菜单</Link>
                        </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{marginLeft: 200}}>
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
                            <Switch>
                                <Route exac path="/main" component={App}/>
                                <Route path="/menu" component={AdminMenu}/>
                                <Redirect from="/" to="/main"/>
                                <Redirect to="/main"/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Main
