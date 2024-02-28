import React, { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { CardOrder } from '../../components/CardOrder';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Content, OrderAdmin, Order, Status, OrderId, Items, Date, WrappedOrder } from './styles';

export function Orders() {

    const { user, isAdmin } = useAuth();

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const queryWidth = 1050;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth >= queryWidth);

    function handleResize() {
        setWindowWidth(window.innerWidth >= queryWidth);
    };

    useEffect(() => {
        setIsLoading(true);

        async function fetchOrders() {
            try {
                if (isAdmin) {
                    const response = await api.get("/orders");
                    setOrders(response.data);
                    setIsLoading(false);
                } else {
                    const response = await api.get(`/orders/${user.id}`);
                    setOrders(response.data);
                    setIsLoading(false);
                };
            } catch (error) {
                console.error("Ocorreu um erro ao buscar os pedidos:", error);
                toast("Não foi possível buscar os pedidos. Por favor, tente novamente.");
            };
        };

        fetchOrders();

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <BackButton />
                <div>
                    <h1>Histórico de pedidos</h1>
                    {
                        !isLoading && orders.length === 0 &&
                        (
                            isAdmin ? <p>Nenhum pedido registrado.</p> : <p>Você ainda não tem nenhum pedido fechado.</p>
                        )
                    }
                    {
                        !isLoading && orders.length > 0 &&
                        <WrappedOrder>
                            {
                                windowWidth &&
                                (
                                    isAdmin ? (
                                        <OrderAdmin>
                                            <Status><strong>Status</strong></Status>
                                            <OrderId><strong>Código</strong></OrderId>
                                            <Items><strong>Detalhamento</strong></Items>
                                            <Date><strong>Data e hora</strong></Date>
                                        </OrderAdmin>
                                    ) : (
                                        <Order>
                                            <Status><strong>Status</strong></Status>
                                            <OrderId><strong>Código</strong></OrderId>
                                            <Items><strong>Detalhamento</strong></Items>
                                            <Date><strong>Data e hora</strong></Date>
                                        </Order>
                                    )
                                )
                            }
                            {
                                orders.map(order =>
                                    <CardOrder data={order} key={order.id} />
                                )
                            }
                        </WrappedOrder>
                    }
                </div>
            </Content>
            <Footer />
        </Container>
    );
}