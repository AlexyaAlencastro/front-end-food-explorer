import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
    position: relative;

    > input {
        width: 100%;
        height: 4.8rem;
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        background-color: transparent;
        border: 0;
        padding: 1.2rem;
        outline: none;
        z-index: 1;
    }

    > svg {
        margin-left: 1.2rem;
    }
`;