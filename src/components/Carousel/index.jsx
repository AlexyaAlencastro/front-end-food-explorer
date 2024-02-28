import { useRef, useState, useEffect } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

import { Container, Content, ControlLeft, ControlRight, GradientLeft, GradientRight } from './styles';

export function Carousel({ content, title }) {
    const carouselOfDishes = useRef(null);
    const [isScrollEnd, setIsScrollEnd] = useState(false);
    const [isScrollStart, setIsScrollStart] = useState(true);

    useEffect(() => {
        const carouselContainer = carouselOfDishes.current;
        setIsScrollEnd(
            carouselContainer.scrollWidth - carouselContainer.clientWidth <= carouselContainer.scrollLeft
        );

        const handleResize = () => {
            setIsScrollEnd(
                carouselContainer.clientWidth >= carouselContainer.scrollWidth || ((carouselContainer.clientWidth + carouselContainer.scrollLeft + 10) >= carouselContainer.scrollWidth)
            );

            setIsScrollStart(
                carouselContainer.scrollLeft <= 0
            );
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToLeft = () => {
        const container = carouselOfDishes.current;
        container.scrollLeft -= 180;
        setIsScrollEnd(false);
        setIsScrollStart(container.scrollLeft - 331 <= 0);
    };

    const scrollToRight = () => {
        const container = carouselOfDishes.current;
        container.scrollLeft += 180;
        setIsScrollStart(false);
        setIsScrollEnd((container.clientWidth + container.scrollLeft + 331) >= container.scrollWidth);
    };

    return (
        <Container>
            <h2>{title}</h2>
            <Content ref={carouselOfDishes}>{content}</Content>
            {!isScrollStart && (
                <ControlLeft onClick={scrollToLeft}>
                    <TfiAngleLeft />
                </ControlLeft>
            )}
            {!isScrollEnd && (
                <ControlRight onClick={scrollToRight} >
                    <TfiAngleRight />
                </ControlRight>
            )}
            <GradientLeft />
            <GradientRight />
        </Container>
    );
}