import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;
    height: 10.4rem;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 2.8rem 12.3rem;
    animation: topToDown 0.3s ease-in;

    input {
        text-align: center;
    }

    #searchDishes {
        position: relative;
    }

    button {
        max-width: 17rem;
        min-width: 17rem;
        height: 5.6rem;

        svg {
            font-size: 2.6rem;
            margin-right: 1rem;
        }
    }

    .profile-menu-transition {
        opacity: 0;
        transition: all 0.3s ease;
        visibility: hidden;
    }

    .profile-menu-visible {
        opacity: 1;
        transition: all 0.3s ease;
        visibility: visible;
    }

    @media (max-width: 1049px) {
        padding: 2.8rem;

        > div:nth-child(2) {
            flex-direction: row;
            width: 100%;
            
            div {
                width: max-content;
            }
        }

        > a:nth-child(2) {
            width: 100%;
        }
    }
`;

export const ReceiptOrders = styled.div`
    position: relative;
    margin-right: 0.6rem;
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 3.2rem;
`;

export const Order = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    font: ${({ theme }) => theme.FONTS.POPPINS_100};
    border-radius: 50%;
    top: -0.5rem;
    right: -0.7rem;
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

    > svg {
        font-size: 3rem;
    }
`;

export const ProfileMenu = styled.div`
    position: absolute;
    top: 12rem;
    right: 12.3rem;
    width: max-content;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 20px;
    border-radius: 0.8rem;
    opacity: 0;

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

export const ProfileMenuOptions = styled.div`
    border-radius: 0.8rem;
    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    
    div {
        font-size: 1.8rem;

        &:hover {
            transform: scale(1.05);
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
        }
    }

    svg {
        font-size: 2.4rem;
        margin-right: 1rem;
    }
`;

export const SearchList = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    top: 9.6rem;
    right: 0;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 20px;
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    border-radius: 0.8rem;
    padding: 1.6rem;
    animation: topToDown 0.1s ease-in;

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
            transform: scale(1.05);
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