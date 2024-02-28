import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: max-content;
    align-items: center;
    height: 3.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};

    &:hover {
        cursor: pointer;
    }

    svg {
        width: 3.4rem;
        font-size: 2.2rem;
    }
`;