import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    &::before {
        content: "";
        height: 10.4rem;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARK_600};
        animation: topToDown 0.3s ease-in;
    }

    > div:first-child {
        position: absolute;
        left: 2.8rem;
        top: 3.5rem;
        z-index: 1;
        animation: topToDown 0.3s ease-in;

        @media (max-width: 1049px) {
            font-size: 2rem;

            svg {
                font-size: 2rem;
                width: 2rem;
            }
        }
    }
`;

export const Form = styled.div`
    position: relative;
    top: -8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    width: 47.6rem;
    padding: 0 4.6rem 4.6rem;
    border-radius: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    animation: downToTop 0.3s ease-in;
    min-height: calc(100vh - 23.2rem);
    margin-bottom: -5rem;

    > div:nth-child(3), div:nth-child(5) {
        margin-bottom: 1.6rem;
    }

    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }

    > label {
        cursor: pointer;
        border-radius: 50%;
        width: 20rem;
        height: 20rem;
        
        > input {
            display: none;
        }
    }

    @media (max-width: 1049px) {
        background-color: transparent;
        padding: 0 4.6rem;
        max-width: 47.6rem;
        width: 100%;
    }
`;

export const Avatar = styled.div`
    position: relative;
    width: 20rem;
    height: 20rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 3px solid ${({ theme }) => theme.COLORS.DARK_600};
    border-radius: 50%;
    display: flex;
    align-items: end;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 1.6rem;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > svg {
        position: relative;
        bottom: -1.2rem;
        font-size: 18rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > img {
        width: auto;
        height: 20rem;
    }

    &:hover > div {
        transform: translateY(-5rem);
    }
`;

export const ChangeAvatar = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -5rem;
    width: 100%;
    height: 5rem;
    background-color: rgba(0,0,0,0.5);
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
    border-radius: 50% 50% 0 0;
    transition: all 0.3s ease;
    pointer-events: none;
`;