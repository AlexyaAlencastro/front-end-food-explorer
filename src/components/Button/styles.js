import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.FONTS.POPPINS_100};
    padding: 1.2rem;
    border: none;
    border-radius: 0.5rem;
    user-select: none;

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        opacity: 0.5;
        cursor: default;
    }
`;