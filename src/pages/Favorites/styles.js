import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Content = styled.div`
    padding-top: 10.4rem;
    margin: 3.2rem 12.3rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4.2rem;
    animation: leftToRight 0.3s ease-in;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font: ${({ theme }) => theme.FONTS.POPPINS_400};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font: ${({ theme }) => theme.FONTS.POPPINS_200};
    }

    @media (max-width: 1049px) {
        margin: 3.2rem;
        gap: 1.6rem;
    }
`;

export const WrappedFavorites = styled.div`
    display: flex;
    gap: 3.2rem;
    flex-wrap: wrap;
`;

export const FavoriteDish = styled.div`
    min-width: 32rem;
    display: flex;
    align-items: center;
    gap: 1.3rem;

    > img {
        width: 7.2rem;
        height: 7.2rem;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const DishInfo = styled.div`
    width: 100%;

    .disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font: ${({ theme }) => theme.FONTS.POPPINS_200};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 23.3rem;

        &:hover {
            cursor: pointer;
        }
    }

    > span {
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};

        &:hover {
            cursor: pointer;
        }
    }
`;