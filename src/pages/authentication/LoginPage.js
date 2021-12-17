import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Card } from "../../styles/BaseComponents";
import ResponsiveCalculator from "../../utils/ResponsiveCalculator";
import { useForm } from "react-hook-form";
import FormErrorMessage from "../common/FormErrorMessage";

const LoginBox = styled.div`
  width: ${ResponsiveCalculator(250, 320)};
  min-height: ${ResponsiveCalculator(100, 320)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;

  @media (min-width: 768px) {
    width: ${ResponsiveCalculator(320, 768)};
    min-height: ${ResponsiveCalculator(100, 768)};
  }

  @media (min-width: 1024px) {
    width: ${ResponsiveCalculator(500)};
    min-height: ${ResponsiveCalculator(300)};
  }
`;

const CardHeader = styled.h1`
  padding: 14px;
  text-transform: uppercase;
  font-size: 2rem;
  color: white;

  @media (min-width: 768px) {
    padding: ${ResponsiveCalculator(15)}px;
    font-size: ${ResponsiveCalculator(15)}rem;
  }

  @media (min-width: 1024px) {
    padding: ${ResponsiveCalculator(10)}px;
    font-size: ${ResponsiveCalculator(10)}rem;
  }
`;

const CardFooter = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Input = styled.input`
  &[type="text"],
  &[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: ${ResponsiveCalculator(14)} ${ResponsiveCalculator(10)};
    width: ${ResponsiveCalculator(120, 320)};
    min-height: ${ResponsiveCalculator(30, 320)};
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    font-size: ${ResponsiveCalculator(20)}rem;

    @media (min-width: 768px) {
      width: ${ResponsiveCalculator(170, 768)};
      min-height: ${ResponsiveCalculator(40, 768)};
      font-size: ${ResponsiveCalculator(22)}rem;
    }

    @media (min-width: 1024px) {
      width: ${ResponsiveCalculator(320)};
      min-height: ${ResponsiveCalculator(40)};
      font-size: ${ResponsiveCalculator(24)}rem;
    }

    &:focus {
      width: ${ResponsiveCalculator(200, 320)};
      border-color: #2ecc71;

      @media (min-width: 768px) {
        width: ${ResponsiveCalculator(250, 768)};
        min-height: ${ResponsiveCalculator(40, 768)};
      }

      @media (min-width: 1024px) {
        width: ${ResponsiveCalculator(400)};
        min-height: ${ResponsiveCalculator(40)};
      }
    }
  }
`;

const InputButton = styled.button`
   {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid ${(props) => props.borderColor};
    padding: ${ResponsiveCalculator(14)} ${ResponsiveCalculator(40)};
    min-height: ${ResponsiveCalculator(30, 320)};
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    font-size: ${ResponsiveCalculator(20)}px;

    @media (min-width: 768px) {
      min-height: ${ResponsiveCalculator(40, 768)};
      font-size: ${ResponsiveCalculator(24)}px;
    }

    @media (min-width: 1024px) {
      min-height: ${ResponsiveCalculator(40)};
      font-size: ${ResponsiveCalculator(26)}px;
    }

    &:hover {
      background: ${(props) => props.bgHover};
    }
  }
`;

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const processLogin = (data) => {
    console.log("processLogin", data);
  };

  const getFormErrorMessage = (name) => {
    return errors[name] && <FormErrorMessage message={errors[name].message} />;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(processLogin)}>
        <Card>
          <LoginBox>
            <CardHeader>Login</CardHeader>
            <Input
              type="text"
              placeholder="Username"
              {...register("username", {
                required: { value: true, message: "Username is required" },
              })}
            />
            {getFormErrorMessage("username")}
            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
            />
            {getFormErrorMessage("password")}
            <CardFooter>
              <InputButton
                borderColor="#2ecc71"
                bgHover="#2ecc71"
                type="submit"
              >
                Login
              </InputButton>
              <InputButton
                borderColor="#eb2828"
                bgHover="#eb2828"
                type="button"
              >
                Sign Up
              </InputButton>
            </CardFooter>
          </LoginBox>
        </Card>
      </form>
    </Container>
  );
};
export default LoginPage;
