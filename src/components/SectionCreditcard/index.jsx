import { Container } from './styles';

export function SectionCreditcard({ title, children }) {
    return (
        <Container>
            <span>{title}</span>
            {children}
        </Container>
    );
}