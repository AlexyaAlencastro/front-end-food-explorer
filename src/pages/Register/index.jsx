import React, { useEffect, useRef, useState } from 'react';
import { api } from '../../services/api';
import { BsHexagonFill } from 'react-icons/bs';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Welcome, WelcomeMessage, Triangle, Main, Logo, Form } from './styles';

export function AdminRegister() {
    const mainRef = useRef(null);
    const containerRef = useRef(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState(1); // Adicione um estado para controlar as etapas do registro
    const [loadingSignUp, setLoadingSignUp] = useState(false);

    function showSignUp() {
        setStep(2); // Avance para a próxima etapa ao clicar em "Continuar"
    };

    function handleSignUp() {
        if (!name || !email || !password) {
            return toast("Preencha todos os campos.");
        };

        if (name.length < 3) {
            return toast("O nome deve ter no mínimo 3 caracteres.");
        };

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return toast("Por favor, insira um email válido.");
        };

        if (password.length < 6) {
            return toast("A senha deve ter no mínimo 6 caracteres.");
        };

        setLoadingSignUp(true);
        api.post("/admin", { name, email, password })
            .then(() => {
                setLoadingSignUp(false);
                toast("Administrador cadastrado com sucesso!");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            })
            .catch(error => {
                setLoadingSignUp(false);
                if (error.response) {
                    toast(error.response.data.message);
                } else {
                    toast("Não foi possível cadastrar.");
                }
            });
    };

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSignUp();
        };
    };

    useEffect(() => {
        function handleResize() {
            const containerHeight = mainRef.current.offsetHeight;
            const windowHeight = window.innerHeight;

            if (containerHeight > windowHeight) {
                containerRef.current.style.height = "auto";
            } else {
                containerRef.current.style.height = "100%";
            };
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Container ref={containerRef}>
            <Main ref={mainRef}>
                <Logo>
                    <BsHexagonFill />
                    food explorer
                </Logo>
                {/* Renderize diferentes conteúdos com base na etapa do registro */}
                {step === 1 && (
                    <Welcome>
                        <WelcomeMessage>
                            <p>Olá! Seja bem-vindo(a) ao Food Explorer, o seu aplicativo de gerenciamento de restaurante online!</p>
                            <p>Para começar, precisamos criar uma conta de administrador. Você está pronto?</p>
                            <div>
                                <Button onClick={showSignUp}>Continuar</Button>
                            </div>
                        </WelcomeMessage>
                        <Triangle />
                        <BsHexagonFill size={40} />
                    </Welcome>
                )}
                {step === 2 && (
                    <Form>
                        <h1>Crie sua conta</h1>
                        {/* Renderize campos de entrada para nome, email e senha */}
                        <Section title="Seu nome">
                            <Input
                                placeholder="Exemplo: Maria da Silva"
                                onChange={e => setName(e.target.value)}
                            />
                        </Section>
                        <Section title="Email">
                            <Input
                                placeholder="Exemplo: exemplo@email.com.br"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Section>
                        <Section title="Senha">
                            <Input
                                type="password"
                                placeholder="No mínimo 6 caracteres"
                                onChange={e => setPassword(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </Section>
                        {/* Adicione um botão para criar a conta de administrador */}
                        <Button
                            onClick={handleSignUp}
                            loading={loadingSignUp}
                            title="Criar conta de administrador"
                        />
                    </Form>
                )}
            </Main>
            <ToastContainer autoClose={1500} draggable={false} />
        </Container>
    );
}
