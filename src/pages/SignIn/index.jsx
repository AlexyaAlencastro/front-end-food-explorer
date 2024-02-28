import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Brand } from "../../components/Brand";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { ToastContainer } from "react-toastify";

import { Container, Main, Form } from "./styles";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  const mainRef = useRef(null);
  const containerRef = useRef(null);

  function handleSignIn() {
    signIn({ email, password })
      .then(() => {
        setLoadingSignIn(false);
      })
      .catch(() => {
        setLoadingSignIn(false);
      });
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSignIn();
    }
  }

  useEffect(() => {
    function handleResize() {
      const containerHeight = mainRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if (containerHeight > windowHeight) {
        containerRef.current.style.height = "auto";
      } else {
        containerRef.current.style.height = "100%";
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Main ref={mainRef}>
        <Brand />
        <Form>
          <h1>Faça o login</h1>

          <Section title="Email">
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Section>

          <Section title="Senha">
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </Section>

          <Button
            onClick={handleSignIn}
            loading={loadingSignIn}
            title="Entrar"
          />

          <Link to="/register">Criar uma conta</Link>
        </Form>
      </Main>
      <ToastContainer autoClose={1500} draggable={false} />
    </Container>
  );
}
