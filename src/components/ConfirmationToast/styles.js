import styled from 'styled-components';

export const Container = styled.div`
    font: ${({ theme }) => theme.FONTS.POPPINS_100};
`

export const ActionButtons = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 1.2rem;
    margin-top: 0.8rem;

    > button {
        padding: 0.5rem 1rem;
        font: ${({ theme }) => theme.FONTS.POPPINS_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 0.5rem;
    }
`