import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand } from "reactstrap";

export interface INavigationProps {

}

const Navigation: FC<INavigationProps> = (props) => {
    return (
        <Navbar color="light" light sticky="top" expand="md">
            <Container>
                <NavbarBrand tag={Link} href="/">🗒️</NavbarBrand>
                <Nav className="mr-auto" navbar />
            </Container>
        </Navbar>
    );
}

export default Navigation;