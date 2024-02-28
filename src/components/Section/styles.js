import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    }
`;