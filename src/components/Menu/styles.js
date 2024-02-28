import { styled } from 'styled-components';

export const Container = styled.div`
    display: none;

    .checkMenu {
        position: absolute;
        display: none;
        opacity: 0;
        z-index: -1;
    }

    .checkMenu:focus+.iconMenu {
        outline: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_100};
        padding: 0.3rem;
        border-radius: 0.5rem;
    }

    .checkMenu:checked+.iconMenu span:first-child {
        -webkit-transform: translateY(0.8rem) rotate(40deg);
        transform: translateY(0.8rem) rotate(40deg);
    }

    .checkMenu:checked+.iconMenu span:nth-child(2) {
        opacity: 0;
    }

    .checkMenu:checked+.iconMenu span:last-child {
        -webkit-transform: translateY(-0.8rem) rotate(-40deg);
        transform: translateY(-0.8rem) rotate(-40deg);
    }

    .hide {
        display: none;
    }

    @media (max-width: 1049px) {
        display: flex;

        .checkMenu {
            display: flex;
            position: absolute;
            opacity: 0;
            z-index: -1;
        }

        .animateOpenMenu {
            animation-name: openMenu;
            animation-duration: 0.3s;
            display: flex;
        }

        .animateCloseMenu {
            display: flex;
            animation-name: closeMenu;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
        }

        @keyframes openMenu {
            from {
                opacity: 0;
                transform: translateX(-340px);
            }

            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes closeMenu {
            from {
                opacity: 1;
                transform: translateX(0px);
            }

            to {
                opacity: 0;
                transform: translateX(-340px);
            }
        }
    }
`;

export const IconMenu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    width: 2.4rem;
    gap: .5rem;
    z-index: 4;

    &:hover {
        cursor: pointer;
    }

    span {
        background: ${({ theme }) => theme.COLORS.LIGHT_100};
        display: block;
        width: 100%;
        height: .3rem;
        border-radius: 0.1rem;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 1049px) {
        display: flex;
    }
`;

export const TitleMenu = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    font: normal 2.16rem/2.48rem Roboto, sans-serif;
    z-index: 3;
    animation-name: openMenu;
    animation-duration: 0.3s;
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: calc(100% - 1rem);
    height: 10.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 7rem;
    padding-right: 2.8rem;

    svg {
        font-size: 3rem;
    }
`;

export const ExpandedMenu = styled.div`
    display: none;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: none;
    flex-direction: column;
    top: 0rem;
    left: 0rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    z-index: 2;

    @media (max-width: 1049px) {
        

        &::before {
            content: "";
            min-height: 10.4rem;
            background-color: ${({ theme }) => theme.COLORS.DARK_600};
        }
    }
`;

export const ExpandedMenuOptions = styled.div`
    padding: 2.8rem;

    > div:first-child {
        margin-bottom: 3.6rem;
    }

    input {
        text-align: left;
    }

    svg {
        margin-left: 1.4rem;
        width: 2.4rem;
    }
`;

export const Profile = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 50%;
    min-width: 5.6rem;
    min-height: 5.6rem;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const SearchList = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    top: 7rem;
    right: 0;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 20px;
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    border-radius: 0.8rem;
    padding: 1.6rem;

    img {
        width: 3rem;
        height: 3rem;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: all 0.3s;
        border-radius: 0.8rem;

        &:hover {
            cursor: pointer;
            transform: scale(1.03);
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
        }
    }

    span {
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 4rem;
        padding: 0.5rem;
    }

    &::before {
        content: "";
        position: absolute;
        top: -1rem;
        right: 2rem;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 10px solid ${({ theme }) => theme.COLORS.DARK_600};
    }
`;