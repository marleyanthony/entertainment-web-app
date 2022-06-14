import LoginPage from "./components/login/login";
import { COLOR } from "./constants/colors";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLOR.deepBlue};
`;

function App() {
  return (
    <AppContainer>
      <LoginPage />
    </AppContainer>
  );
}

export default App;
