import React, { Component } from "react";
import { Table, Button, Modal } from "antd";
import { userList } from "@/api/myRequest";
import styles from "./styles/index.module.less";
import ModalUser from "./component/modal"

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal: {
        title: '',
        visible: false,
        confirmLoading: false,
      },
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList = () => {
    userList().then(res => {
      console.log(res);
      let data = res.data;
      this.setState({ data });
    });
  }
  getModalState = (state) => {
    const modal = this.state.modal
    modal.visible = state
    this.setState({modal})
  }
  add = () => {
    const modal = this.state.modal
    modal.visible = true
    modal.title = '新增用户'
    this.setState({modal})
    console.log(this.state.modal)
    // this.setState({ visible, title })
  }
  render() {
    const columns = [
      {
        title: "姓名",
        dataIndex: "userName",
        key: "userName",
        align: "center"
      },
      {
        title: "账户",
        dataIndex: "userAccount",
        key: "userAccount",
        align: "center"
      },
      {
        title: "密码",
        dataIndex: "userPassword",
        key: "userPassword",
        align: "center"
      },
      {
        title: "性别",
        dataIndex: "userSex",
        key: "userSex",
        align: "center"
      },
      {
        title: "邮箱",
        dataIndex: "userMail",
        key: "userMail",
        align: "center"
      },
      {
        title: "移动号码",
        dataIndex: "userTel",
        key: "userTel",
        align: "center"
      },
      {
        title: "角色权限",
        dataIndex: "userRole",
        key: "userRole",
        align: "center"
      },
      {
        title: "头像",
        dataIndex: "userPic",
        key: "userPic",
        align: "center"
      },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: () => (
          <div>
            <Button type="primary">编辑</Button>&nbsp;&nbsp;
            <Button type="danger">删除</Button>
          </div>
        ),
        align: "center"
      }
    ];
    return (
      <div>
        <div className={styles.select}>
          <Button type="primary" onClick={this.add}>新增用户</Button>
        </div>
        <Table bordered dataSource={this.state.data} columns={columns} />;
        <ModalUser obj={this.state.modal} getModalState={this.getModalState}/>
      </div>
    );
  }
}

export default User;
