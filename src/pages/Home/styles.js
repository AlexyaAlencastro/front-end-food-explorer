import styled from 'styled-components';
import banner from '../../assets/banner.png';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Content = styled.div`
    padding-top: 10.4rem;
    margin: 2.8rem 12.3rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4.2rem;

    @media (max-width: 1049px) {
        margin: 2.8rem;
    }
`;

export const Banner = styled.div`
    display: flex;
    max-width: 100%;
    position: relative;
    animation: rightToLeft 0.3s ease-in;

    @media (max-width: 1049px) {
        display: flex;
        max-width: 100%;
        position: relative;
    }
`;

export const WrappedBanner = styled.div`
    max-width: 65.6rem;
    width: 100%;
    height: 42rem;
    background-image: url(${banner});
    background-size: cover;
    position: relative;
    left: -6rem;
    margin-right: -6rem;

    @media (max-width: 1049px) {
        max-width: 19.9rem;
        width: 100%;
        height: 14.9rem;
        background-image: url(${banner});
        background-size: cover;
        position: relative;
        left: -3rem;
        margin-right: -3rem;
    }
`;

export const Slogan = styled.div`
    min-width: 52rem;
    width: 100%;
    padding: 24.5rem 10rem 0 0;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > h1 {
        font: ${({ theme }) => theme.FONTS.POPPINS_500};
    }

    > span {
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    }

    @media (max-width: 1049px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 23.5rem;
        width: 100%;
        padding: 5rem 0 0 0;
        text-align: right;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: left;

        > h1 {
            font: ${({ theme }) => theme.FONTS.POPPINS_450};
        }

        > span {
            font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
        }
    }

    @media (max-width: 660px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 23.5rem;
        width: 100%;
        padding: 6rem 0 0 0;
        text-align: right;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: left;

        > h1 {
            font: ${({ theme }) => theme.FONTS.POPPINS_150};
            font-weight: 600;
            width: 20.2rem;
        }

        > span {
            display: block;
            font: ${({ theme }) => theme.FONTS.POPPINS_050};
            font-weight: 400;
            width: 20.2rem;
        }
    }
`;

export const BgBanner = styled.div`
    width: 100%;
    height: 26rem;
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

    @media (max-width: 1049px) {
        width: 100%;
        height: 12rem;
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
        border-radius: 0.8rem;
        background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    }
`;

export const NoResults = styled.div`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font: ${({ theme }) => theme.FONTS.POPPINS_400};
    animation: leftToRight 0.3s ease-in;
`;