import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    }

    > input {
        width: 100%;
        height: 4.8rem;
        padding: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        border-radius: 0.5rem;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: transparent;
        outline: none;
    }
`;