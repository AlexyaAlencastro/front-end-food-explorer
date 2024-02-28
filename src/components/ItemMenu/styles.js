import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 5.4rem;
    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
`;