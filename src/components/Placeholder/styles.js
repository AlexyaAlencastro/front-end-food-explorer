import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    z-index: 0;
    min-width: 27.6rem;
    width: 100%;
    height: 4.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: transparent;
    border: 0;

    svg {
        font-size: 1.95rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-right: 1.4rem;          
    }

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    }
`;