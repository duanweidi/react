import React, { Component } from "react";
import { uploadUserPic } from '../../../api/myRequest'
import style from './styles/modal.module.less'
import { createUser } from '../../../api/myRequest'
import {
  Form,
  Input,
  Select,
  Button,
  Radio,
  AutoComplete,
  Upload,
  Icon,
  message,
  Modal
} from 'antd'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}
class ModalUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      imageUrl: '',
      url: 'http://192.168.5.108:4207/users/upload'
    }
  }
  handleSure = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      // if (!err) {
        createUser(values).then(res => {
          console.log(res)
        })
      // }
    });
  }
  handleCancel = () => {
    const visible = false
    this.props.getModalState(visible)
  }
  beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  handleChange = (info) => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    console.log(info)
    // if (info.file.status === 'done') {
    //   uploadUserPic()
    // }
  }
  handleSubmit = () => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        console.log(value)
      }
    });
  }
  handleSelectChange = () => {
    console.log('ok')
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { imageUrl } = this.state;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Modal
          title={this.props.obj.title}
          visible={this.props.obj.visible}
          onOk={this.handleSure}
          confirmLoading={this.props.obj.confirmLoading}
          onCancel={this.handleCancel}
        >
          <div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              {/* <Form.Item label="头像">
                {getFieldDecorator('userPic', {
                  rules: [
                    {
                      required: true,
                      message: '请上传本人头像!',
                    },
                  ],
                })(

                  <Upload
                    className={style.pic}
                    name="avatar"
                    action=""
                    listType="picture-card"
                    showUploadList={false}
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                  >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
                )}
              </Form.Item> */}
              <Form.Item label="姓名">
                {getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: '请输入姓名!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="账户">
                {getFieldDecorator('userAccount', {
                  rules: [
                    {
                      required: true,
                      message: '请输入账户!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="密码">
                {getFieldDecorator('userPassword', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码!',
                    },
                  ],
                })(<Input type='password' />)}
              </Form.Item>
              <Form.Item label="性别">
                {getFieldDecorator('userSex', {
                  rules: [
                    {
                      required: true,
                      message: '请选择性别!',
                    },
                  ],
                })(<Radio.Group>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </Radio.Group>)}
              </Form.Item>
              <Form.Item label="角色">
                {getFieldDecorator('userRole', {
                  rules: [
                    {
                      required: true,
                      message: '请选择角色!',
                    },
                  ],
                })(
                  <Select style={{ width: 120 }} onChange={this.handleSelectChange}>
                    <Option value={1}>管理员</Option>
                    <Option value={2}>运营人员</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="邮箱">
                {getFieldDecorator('userMail', {
                  rules: [
                    {
                      required: true,
                      message: '请填写邮箱!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="移动号码">
                {getFieldDecorator('userTel', {
                  rules: [
                    {
                      required: true,
                      message: '请填写移动号码!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div >
    )
  }
}

export default Form.create()(ModalUser);
