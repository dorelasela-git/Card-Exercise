import NavbarLayout from "../NavBar/NavbarLayout";
import Container from "react-bootstrap/Container";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarLayout />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
