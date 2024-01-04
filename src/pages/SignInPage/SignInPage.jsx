import React, { useCallback, useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image, message } from "antd";
import logoLogin from "../../assets/images/Slider1.jpg";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/userMutationHook";
const SignInPage = () => {
  const createAccount = useNavigate();
  const LoginSuccess = useNavigate();

  const createUser = useCallback(() => {
    createAccount("/sign-up");
  }, [createAccount]);
  const LoginSucesss = useCallback(() => {
    LoginSuccess("/");
  }, [LoginSuccess]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  console.log("mutation", mutation);
  const handleButonSignin = () => {
    if (!email || !password) {
      alert("Vui lòng điền đầy đủ thông tin đăng nhập!");
      return;
    }
    mutation.mutate({
      email: email,
      passwordd: password,
    });
  };
  const { error, isSuccess, isError } = mutation;
  useEffect(() => {
    if (isSuccess) {
      message.success();
      LoginSucesss();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError, LoginSucesss]);
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const [isShowPassword, setShowPassword] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft style={{ alignItems: "center" }}>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          {error?.response.data.status === "ERR" && (
            <span style={{ color: "red" }}>{error?.response.data.message}</span>
          )}
          <ButtonComponent
            size={40}
            style={{
              background: "rgb(255,57,69)",
              color: "#fff",
              height: "48px",
              width: "100%",
              borderRadius: "4px",
              margin: "26px 0 10px",
              fontSize: "15px",
              fontWeight: "700",
            }}
            textButton={"Đăng nhập"}
            onClick={handleButonSignin}
          ></ButtonComponent>
          <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p>
          <p>
            Chưa có tài khoản{" "}
            <WrapperTextLight
              onClick={createUser}
              style={{ cursor: "pointer" }}
            >
              Tạo tài khoản
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight style={{ alignItems: "center" }}>
          <Image
            src={logoLogin}
            alt="logo-login"
            preview={false}
            height="203px"
            width="203px"
          />
          <h4 style={{ fontWeight: "350" }}>Mua sách tại BookStore</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
