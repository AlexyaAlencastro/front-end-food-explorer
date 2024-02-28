import { BsHexagonFill } from 'react-icons/bs';

import { Container, Logo } from './styles';

export function Footer() {
    return (
        <Container>
            <Logo>
                <BsHexagonFill />food explorer
            </Logo>
            <span>
                © 2023 - Todos os direitos reservados.
            </span>
        </Container>
    );
}