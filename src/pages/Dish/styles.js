import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Content = styled.div`
    padding-top: 13.6rem;
    margin: 0 12.3rem 3.2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4.2rem;
    animation: leftToRight 0.3s ease-in;

    @media (max-width: 1049px) {
        margin: 0 2.8rem 3.2rem;
        gap: 1.6rem;
    }
`;

export const DishDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.8rem;

    img {
        max-width: 39rem;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1049px) {
        flex-direction: column;
        gap: 1.6rem;

        img {
            max-width: 26.4rem;
            width: 100%;
            height: auto;
        }
    }
`;

export const DishInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    h1 {
        font: ${({ theme }) => theme.FONTS.POPPINS_500};
    }

    p {
        font: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
    }

    span {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR};
    }

    @media (max-width: 1049px) {
        align-items: center;
        text-align: center;

        h1 {
            font: ${({ theme }) => theme.FONTS.POPPINS_350};
        }

        p {
            font: ${({ theme }) => theme.FONTS.POPPINS_125};
        }
    }
`;

export const Ingredients = styled.div`
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;

    @media (max-width: 1049px) {
        justify-content: center;
        gap: 2.4rem;
    }
`;

export const DishButon = styled.div`
    display: flex;
    gap: 3.3rem;
    width: 100%;
    margin-top: 4.8rem;

    button {
        height: 4.8rem;
        min-width: 16.8rem;
        padding: 1.2rem 2.4rem;
        width: fit-content;
    }

    span {
        font: ${({ theme }) => theme.FONTS.ROBOTO_22};
    }

    svg {
        margin-right: 0.75rem;
    }

    @media (max-width: 1049px) {
        justify-content: center;

        button {
            width: 100%;
            padding: 1.2rem;
        }
    }
`;

export const DishControls = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: center;
    font: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD};
    user-select: none;

    &:hover {
        cursor: pointer;
    }

    > span {
        cursor: default;
        width: 3rem;
        text-align: center;
    }
`;