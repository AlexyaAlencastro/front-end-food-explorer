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

export const Welcome = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    max-width: 70rem;
    animation: rightToLeft 0.3s ease-in;

    > svg {
        position: relative;
        top: -1.5rem;
        align-self: self-end;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
`;

export const WelcomeMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    font: ${({ theme }) => theme.FONTS.POPPINS_050};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.8rem;
    padding: 2.4rem;

    > p {
        text-align: center;
        font: ${({ theme }) => theme.FONTS.POPPINS_150};

        @media (max-width: 1049px) {
            font: ${({ theme }) => theme.FONTS.POPPINS_100};
        }
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: right;

        > button {
            max-width: 13rem;
        }
    }

    @media (max-width: 1049px) {
        font: ${({ theme }) => theme.FONTS.POPPINS_150};
    }
`;

export const Triangle = styled.div`
    position: relative;
    top: -1.5rem;
    right: 3.2rem;
    transform: rotate(-30deg);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 50px solid ${({ theme }) => theme.COLORS.DARK_300};
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.8rem 4.6rem;
    gap: 2.8rem;

    @media (max-width: 1049px) {        
        min-width: 360px;
        max-width: 47.6rem;
        padding: 2rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    font: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    animation: topToDown 0.3s ease-in;

    svg {
        align-self: center;
        margin-right: 1rem;
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
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
    animation: downToTop 0.3s ease-in;

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
        padding: 0;
        max-width: 47.6rem;
        width: 100%;
        animation: downToTop 0.3s ease-in;
    }
`;