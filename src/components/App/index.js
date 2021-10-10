// Components
import Container from "../Container";
import Loading from "../Loading";
import Alert from "../Alert";
import Content from "../Content";
import Header from "../Header";

function App() {
  return (
    <>
      <Alert />
      <Loading />
      <Container>
        <Header />
        <Content />
      </Container>
    </>
  );
}

export default App;
