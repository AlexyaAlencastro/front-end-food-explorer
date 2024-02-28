import { useNavigate } from 'react-router-dom';

import { TfiAngleLeft } from 'react-icons/tfi';

import { Container } from './styles';

export function BackButton() {

    const navigate = useNavigate();

    function handleBack() {
        document.documentElement.style.overflowY = "auto";
        navigate("/");
    }

    return (
        <Container onClick={handleBack}>
            <TfiAngleLeft />voltar
        </Container>
    );
}