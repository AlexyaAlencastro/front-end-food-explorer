import { TfiSearch } from 'react-icons/tfi';

import { Container } from './styles';

export function Placeholder() {
    return (
        <Container>
            <TfiSearch />
            <span>Busque por pratos ou ingredientes</span>
        </Container>
    );
}