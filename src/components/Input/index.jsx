import { Placeholder } from '../Placeholder';

import { Container } from './styles';

export function Input({ icon: Icon, searchPlaceholder, children, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={24} />}
            {searchPlaceholder && <Placeholder />}
            <input autoComplete="off" {...rest} />
            {children}
        </Container>
    );
}