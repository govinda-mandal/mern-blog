import { FC } from 'react';
import { IPages } from '../interfaces/page';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const Home: FC<IPages> = (props) => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="A Nerdy Blog Website" headline="Check out what people have to say!" />
        </Container>
    );
};

export default Home;
