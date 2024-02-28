import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.7rem;
    bottom: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD};
    font-weight: 700;
    width: 100%;
    flex-shrink: 0;
    padding: 0 12.3rem;
    animation: leftToRight 0.3s ease-in;
    margin-top: auto;

    svg {
        margin-right: 1.1rem;
    }

    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
        padding-top: 0.5rem;
    }

    @media (max-width: 1049px) {
        padding: 0 1.4rem;
        font: ${({ theme }) => theme.FONTS.ROBOTO_15};

        svg {
            margin-right: 0.647rem;
        }

        > span {
            font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;