import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Order = styled.div`
    display: grid;
    grid-template-columns: 15.2rem 15.2rem auto 15.2rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};

    @media (max-width: 1049px) {
        border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: 0.8rem;
        padding: 1.2rem;
        row-gap: 1.6rem;

        grid-template-columns: 25% auto 37%;
        grid-template-rows: auto auto;
    }
`;

export const OrderAdmin = styled.div`
    display: grid;
    grid-template-columns: 22rem 15.2rem auto 15.2rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};

    @media (max-width: 1049px) {
        border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: 0.8rem;
        padding: 1.2rem;
        row-gap: 1.6rem;

        grid-template-columns: 25% auto 37%;
        grid-template-rows: auto auto auto;
    }
`;

export const Status = styled.div`
    display: flex;
    align-items: center;

    padding: 1.6rem 2.4rem;
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    > svg {
        margin-right: 0.8rem;
    }

    @media (max-width: 1049px) {
        grid-column: 2;
        grid-row: 1;

        justify-content: center;
        padding: 0;
        border: 0;
    }
`;

export const StatusAdmin = styled.div`
    padding: 1.6rem 2.4rem;
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    > div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 4.8rem;

        padding: 1.6rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        
        border-radius: 0.5rem;

        > svg {
            margin: 0 0.8rem 0 0;
        }

        > select {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
            background-color: transparent;
            border: none;
            width: 100%;
            padding-right: 1.6rem;
            outline: none;

            option {
                background-color: ${({ theme }) => theme.COLORS.DARK_500};
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }
    }

    @media (max-width: 1049px) {
        grid-column: 1 / span 3;
        grid-row: 3;

        justify-content: center;
        padding: 0;
        border: 0;
    }
`;

export const OrderId = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.6rem 2.4rem;
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    @media (max-width: 1049px) {
        grid-column: 1;
        grid-row: 1;

        justify-content: left;
        padding: 0;
        border: 0;
    }
`;

export const Items = styled.div`
    display: flex;
    align-items: center;

    padding: 1.6rem 2.4rem;
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    @media (max-width: 1049px) {
        grid-column: 1 / span 3;
        grid-row: 2;

        padding: 0;
        border: 0;
    }
`;

export const Date = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.6rem 2.4rem;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    @media (max-width: 1049px) {
        grid-column: 3;
        grid-row: 1;

        justify-content: right;
        padding: 0;
        border: 0;
    }
`;