import styled from 'styled-components';

export const Container = styled.div`
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    font: ${({ theme }) => theme.FONTS.POPPINS_100};
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
`;