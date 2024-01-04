import React, { useCallback, useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "../SignInPage/style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import { Image } from "antd";
import logoLogin from "../../assets/images/Slider1.jpg";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useMutationHooks } from "../../hooks/userMutationHook";
import * as UserService from "../../services/UserService";
import * as message from "../../components/MessageComponent/MessageComponent";

const SignUpPage = () => {
  const navSignin = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const mutation = useMutationHooks((data) => UserService.SignUpUser(data));
  console.log("mutation", mutation);
  const { error, isSuccess, isError } = mutation;
  const handleSignin = useCallback(() => {
    navSignin("/sign-in");
  }, [navSignin]);
  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleSignin();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError, handleSignin]);

  const handleButonSignin = () => {
    if (!email || !password || !confirmpassword) {
      alert("Vui lòng điền đầy đủ thông tin đăng nhập!");
      return;
    } else {
      mutation.mutate({
        email: email,
        passwordd: password,
        confirmpassword: confirmpassword,
      });
    }
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };
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
              onClick={() => setIsShowPassword(!isShowPassword)}
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
              style={{ marginBottom: "10px" }}
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmpassword}
              onChange={handleOnchangeConfirmPassword}
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
            textButton={"Đăng ký"}
            onClick={handleButonSignin}
          ></ButtonComponent>
          <p>
            Bạn đã có tài khoản{" "}
            <WrapperTextLight
              onClick={handleSignin}
              style={{ cursor: "pointer" }}
            >
              Đăng nhập
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

export default SignUpPage;
