import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: leftToRight 0.3s ease-in;

    @media (max-width: 1049px) {        
        flex-direction: row;
        animation: topToDown 0.3s ease-in;
    }
`;

export const Logo = styled.div`
    display: flex;
    width: max-content;
    font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
        align-self: center;
        margin-right: 1rem;
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    @media (max-width: 1049px) {        
        min-width: max-content;
    }
`;

export const Admin = styled.div`
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    text-align: right;
    margin-top: -0.7rem;
    width: 100%;

    @media (max-width: 1049px) {        
        margin: 0.6rem 0 0 0.8rem;
        width: max-content;
    }
`;