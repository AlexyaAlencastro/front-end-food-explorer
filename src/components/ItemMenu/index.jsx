import { Container } from './styles';

export function ItemMenu({ icon: Icon, title, ...rest }) {
    return (
        <Container {...rest}>
            {Icon && <Icon />}
            {title}
        </Container>
    );
}