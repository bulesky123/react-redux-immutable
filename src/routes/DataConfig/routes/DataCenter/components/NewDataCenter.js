/**
 * Created by ThinkPad on 2017/2/21.
 */
import React,{Component} from 'react'
import {Form,Input,Select,Button,Modal,Icon} from 'antd'
import '../style.scss'
const FormItem = Form.Item
const Option = Select.Option
class NewDataCenter extends Component {
    constructor(props) {
        super(props)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleCancel(){
        this.props.onClose()
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err,fieldsValue) => {
            if(err){
                return
            }
            var value = this.props.form.getFieldsValue()
            this.props.submit(value)
            this.handleCancel()
            this.props.form.resetFields()
        })
    }

    render(){
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {labelCol:{span:7},wrapperCol:{span:12}}
        return (
            <Modal visible={this.props.visible} title={'新增数据中心'} footer={[]} onCancel={this.handleCancel}>
                <div id="newDataCenForm">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem {...formItemLayout} label='名称：'>
                            {getFieldDecorator('dcName',{initialValue:''})(
                                <Input type='text' />
                            )}
                        </FormItem>
                        <FormItem label='应用描述：' {...formItemLayout}>
                            {getFieldDecorator('dcDesc',{initialValue:''})(
                                <Input type='textarea' style={{height:90}} placeholder='请输入0-1000位字符'/>
                            )}
                        </FormItem>
                        <FormItem wrapperCol={{span: 13,offset: 11}} style={{width:'100%'}}>
                            <Button type='primary' htmlType='submit'>提交</Button>
                        </FormItem>
                    </Form>
                </div>
            </Modal>
        )
    }
}
NewDataCenter = Form.create({})(NewDataCenter)
export default NewDataCenter


