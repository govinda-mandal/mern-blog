import { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';

export interface IHeaderProps {
    children?: any;
    height?: string;
    image?: string;
    title: string;
    headline: string;
}

const Header: FC<IHeaderProps> = ({
    children,
    height = '100%',
    image = 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title,
    headline
}) => {
    const headerStyle = {
        background: 'linear-gradient(rgba(36,20,38,0.5), rgba(36,39,38,0.5)), url(' + image + ') no-repeat center center',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: height
    };
    
    return (
        <header style={headerStyle}>
            <Container>
                <Row className="align-item-center text-center">
                    <Col>
                        <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
                        <h3>{headline}</h3>
                        {children}
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
