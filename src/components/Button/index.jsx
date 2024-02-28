import { Container } from './styles';

export function Button({ title, loading, children, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? "Carregando..." : title}
            {children}
        </Container>
    );
}