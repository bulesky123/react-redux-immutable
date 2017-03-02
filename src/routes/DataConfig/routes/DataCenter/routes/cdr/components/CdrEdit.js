/**
 * Created by ThinkPad on 2017/2/21.
 */
import React,{Component} from 'react'
import {Form,Input,Select,Button,Modal,Icon} from 'antd'
import '../style.scss'
const FormItem = Form.Item
const Option = Select.Option
class CdrEdit extends Component {
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
            this.props.submit(fieldsValue)
          this.handleCancel()
          this.props.form.resetFields()
        })
    }

    render(){
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {labelCol:{span:5},wrapperCol:{span:16}}
        return (
            <Modal visible={this.props.visible} title={'数据中心编辑'} footer={[]} onCancel={this.handleCancel}>
                <div id="newDataCenForm">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem {...formItemLayout} label='名称：'>
                            {getFieldDecorator('dcName',{initialValue:this.props.cdrDetail.dcName})(
                                <Input type='text' />
                            )}
                        </FormItem>
                        <FormItem label='应用描述：' {...formItemLayout}>
                            {getFieldDecorator('dcDesc',{initialValue:this.props.cdrDetail.dcDesc})(
                                <Input type='textarea' style={{height:90}} placeholder='请输入0-1000位字符'/>
                            )}
                        </FormItem>
                        <FormItem  style={{width:'100%',textAlign:'center'}}>
                            <Button type='primary' htmlType='submit' style={{width:'100px'}}>提交</Button>
                        </FormItem>
                    </Form>
                </div>
            </Modal>
        )
    }
}
CdrEdit = Form.create({})(CdrEdit)
export default CdrEdit

