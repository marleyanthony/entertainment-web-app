import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { COLOR } from "../../constants/colors";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img``;

const LoginForm = styled.div`
  border: 1px solid red;
`;

const LoginHeader = styled.h2`
  color: ${COLOR.white};
`;

const EmailInput = styled.input``;

const PasswordInput = styled(EmailInput)``;

const LoginButton = styled.button``;

const SingUpText = styled.p`
  color: ${COLOR.white};
`;

const SignUpLink = styled.a`
  cursor: pointer;
`;

const LoginPage = () => {
  return (
    <LoginContainer>
      <LogoImage src={logo} alt="logo" />
      <LoginForm>
        <LoginHeader>Login</LoginHeader>
        <EmailInput type="email" placeholder="Email Address" />
        <PasswordInput type="password" placeholder="Password" />
        <LoginButton>Log Into Your Account</LoginButton>
        <SingUpText>
          Dont Have an Account? <SignUpLink>Sign Up</SignUpLink>
        </SingUpText>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
