import React, { useState } from "react";
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

const formSchema = z.object({
  avatarUrl: z.any(),
  name: z
    .string()
    .min(1, { message: "Обязательное поле" })
    .max(16, { message: "Поле не должно быть длиннее 16 символов" }),
  email: z.string().min(1, "Обязательное поле").email("Неверный email"),
  username: z.string().min(1, "Обязательное поле"),
  phoneNumber: z.string().min(1, "Обязательное поле"),
  website: z.string().min(1, "Обязательное поле"),
  address: z.string(),
  city: z.string().min(1, "Обязательное поле"),
  postcode: z.string(),
});

const EditForm = ({ user }) => {
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email,
      username: user?.username,
      phoneNumber: user?.phone,
      website: user?.website,
      address: user?.address?.street,
      city: user?.address?.city,
      postcode: user?.address?.zipcode,
    },
  });

  const onUploadAvatar = (info) => {
    console.log("буба");
    const key = "updatable";
    if (info.file.status === "uploading") {
      message.loading({ content: "Uploading...", key, duration: 1000 });
      return;
    }
    if (info.file.status === "done") {
      setPreview(info.file.name);
      message.success({ content: "Uploaded!", key, duration: 1.5 });
      return info.file.name;
    }
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("done");
    }, 1000);
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(preview);
    message.loading({ content: "Changing...", duration: 1 });
    setTimeout(() => {
      console.log(data);
      message.success({
        content: "Everything changed correctly!",
        duration: 1.5,
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="mt-4">
      <Form
        name="basicInformation"
        onFinish={handleSubmit((data) => onSubmit(data))}
        layout="vertical"
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={16}>
            <Row gutter={ROW_GUTTER}>
              <Col span={24}>
                <Flex
                  alignItems="center"
                  mobileFlex={false}
                  className="text-center text-md-left"
                >
                  <Avatar
                    size={90}
                    style={{ display: "flex", alignItems: "center" }}
                    src={preview}
                    icon={<UserOutlined />}
                  />
                  <div className="ml-md-3 mt-md-0 mt-3">
                    <Form.Item>
                      <Controller
                        control={control}
                        name="avatarUrl"
                        render={({ field }) => (
                          <Upload
                            customRequest={dummyRequest}
                            onChange={(e) => {
                              const fileName = onUploadAvatar(e);
                              field.onChange(fileName);
                            }}
                            showUploadList={true}
                            maxCount={1}
                            accept="image/png, image/jpeg"
                            multiple={false}
                            onBlur={field.onBlur}
                            ref={field.ref}
                            name={field.name}
                          >
                            <Button type="primary">Change Avatar</Button>
                          </Upload>
                        )}
                      />
                    </Form.Item>
                  </div>
                </Flex>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Name">
                  <Controller
                    control={control}
                    name="name"
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Username">
                  <Controller
                    control={control}
                    name="username"
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Email">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Phone number">
                  <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Website">
                  <Controller
                    control={control}
                    name="website"
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Street">
                  <Controller
                    control={control}
                    name="address"
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="City">
                  <Controller
                    control={control}
                    name="city"
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Post code">
                  <Controller
                    control={control}
                    name="postcode"
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button disabled={isLoading} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditForm;
