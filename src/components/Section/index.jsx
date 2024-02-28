import { Container } from './styles';

export function Section({ title, children }) {
    return (
        <Container>
            <span>{title}</span>
            {children}
        </Container>
    );
}