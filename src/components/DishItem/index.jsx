import { FaPlus, FaTimes } from 'react-icons/fa';

import { Container } from './styles';

export function DishItem({ $isNew, value, onClick, ...rest }) {
    return (
        <Container $isNew={$isNew} size={value.length}>
            <input
                type="text"
                value={value}
                readOnly={!$isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
            >
                {$isNew ? <FaPlus /> : <FaTimes />}
            </button>
        </Container>
    );
}