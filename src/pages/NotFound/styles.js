import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.8rem;

    > h1 {
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        font: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font: ${({ theme }) => theme.FONTS.POPPINS_100};
    }

    > button {
        width: fit-content;
        padding: 1.2rem 2.8rem;
    }
`;