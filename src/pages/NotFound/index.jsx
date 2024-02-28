import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';

import { Container } from './styles';

export function NotFound() {

    const navigate = useNavigate();

    function handleBack() {
        document.documentElement.style.overflowY = "auto";
        navigate("/");
    };

    return (
        <Container>
            <h1>404...</h1>
            <p>A página que você requisitou não foi encontrada.</p>
            <Button
                title="Retornar à home"
                onClick={handleBack}
            />
        </Container>
    );
}