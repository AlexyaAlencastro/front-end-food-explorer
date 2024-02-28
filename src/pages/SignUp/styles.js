import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    + div {
        top: 3rem;
        right: 2.4rem;
    }
`;

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7.3rem;
    padding: 2.8rem 0;

    div:nth-child(1) {
        font: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD};
        display: flex;
        align-items: center;

        > svg {
            font-size: 4.75rem;
        }
    }

    @media (max-width: 1049px) {
        flex-direction: column;
        min-width: 39.8rem;
        max-width: 47.6rem;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 47.6rem;
    padding: 6.4rem;
    border-radius: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    animation: rightToLeft 0.3s ease-in;

    > h1 {
        font: ${({ theme }) => theme.FONTS.POPPINS_400};
        text-align: center;
    }

    > div {
        gap: 0.8rem;
    }

    > a {
        font: ${({ theme }) => theme.FONTS.POPPINS_100};
        text-align: center;
    }

    @media (max-width: 1049px) {
        background-color: transparent;
        padding: 0 4.6rem;
        max-width: 47.6rem;
        width: 100%;
        animation: downToTop 0.3s ease-in;
    }
`;