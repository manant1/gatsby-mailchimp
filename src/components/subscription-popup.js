import React from "react"
import { Button, Form, Input, message, Modal } from "antd"
import addToMailchimp from "gatsby-plugin-mailchimp"

const SubscriptionPopup = (props) => {
  const [loading, setLoading] = React.useState(false)

  const handleClose = () => {
    props.onClose();
  }

  const onFinish = (values) => {
    setLoading(true)
    addToMailchimp(values.email, {
      FNAME: values.firstName,
      LNAME: values.lastName
    }).then(response => {
      setLoading(false)
      if (response.result === "success") {
        message.success("Successfully subscribed")
        handleClose()
      } else {
        if (response.msg.indexOf("href") >= 0) {
          response.msg = response.msg.replace("href=", "target=\"_blank\" href=")
        }
        message.error(<span dangerouslySetInnerHTML={{ __html: `Error: ${response.msg}` }}></span>)
      }
    }).catch(err => {
      setLoading(false)
      message.error("Unexpected error occurred")
    })
  }

  return <Modal title="Title" visible={props.open} confirmLoading={loading} onCancel={handleClose} footer={[
    <React.Fragment key={"custom-footer"}>
      <Button key="custom-cancel" onClick={handleClose}> Cancel </Button>
      <Button form="subscription-form" key="custom-submit" htmlType="submit" loading={loading}> Submit </Button>
    </React.Fragment>
  ]}>
    <Form id="subscription-form" name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input/>
      </Form.Item>
      <Form.Item label="Name" name="firstName" rules={[{ required: false }]}>
        <Input/>
      </Form.Item>
      <Form.Item label="Last name" name="lastName" rules={[{ required: false }]}>
        <Input/>
      </Form.Item>
    </Form>
  </Modal>
}

export default SubscriptionPopup