import React , {Component} from "react";
import { Form, Input, InputNumber, Button } from 'antd';

export default class AdminMenu extends Component {
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 4 },
        };
        return (
            <Form {...layout} >
                <Form.Item name={['menu','name']} label="菜单名">
                    <Input />
                </Form.Item>
                <Form.Item name={['menu','path']} label="路径">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>

        )
    }
}
