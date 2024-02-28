import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import defaultDish from '../../../src/assets/dish.svg';

import { ToastContainer, toast } from 'react-toastify';
import { ConfirmationToast } from '../../components/ConfirmationToast';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Content, WrappedFavorites, FavoriteDish, DishInfo } from './styles';

export function Favorites() {

    const { user } = useAuth();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [loadingFavorites, setLoadingFavorites] = useState(false);

    function handleDish(id) {
        navigate(`/dish/${id}`)
    };

    async function handleRemove(id) {
        const confirmed = await new Promise((resolve) => {

            const customId = "handleRemove";

            toast(
                <ConfirmationToast
                    message={"Deseja realmente remover dos favoritos?"}
                    confirm={"Remover"}
                    cancel={"Cancelar"}
                    onConfirm={() => resolve(true)}
                    onCancel={() => resolve(false)}
                />, {
                toastId: customId,
                containerId: "await"
            });
        });

        if (confirmed) {
            try {
                setLoadingFavorites(true);
                await api.delete(`/favorites/${id}`);
                toast("Favorito removido.", { containerId: "autoClose" });
                fetchFavorites();
            } catch (error) {
                console.error("Erro ao remover o favorito: ", error);
                toast("Erro ao remover o favorito. Por favor, tente novamente.");
            } finally {
                setLoadingFavorites(false);
            };
        };
    };

    async function fetchFavorites() {
        try {
            const response = await api.get(`/favorites/${user.id}`);
            setFavorites(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Não foi possível buscar os favoritos: ", error);
            toast("Não foi possível buscar os favoritos. Por favor, tente novamente.");
        };
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <BackButton />
                <h1>Meus favoritos</h1>
                {favorites.length > 0 ? (
                    <WrappedFavorites>
                        {
                            favorites.map(favorite => (
                                <FavoriteDish key={favorite.id}>
                                    {
                                        favorite.image ?
                                            <img
                                                src={`${api.defaults.baseURL}/files/${favorite.image}`}
                                                alt={favorite.name}
                                                onClick={() => handleDish(favorite.dish_id)}
                                            /> :
                                            <img src={defaultDish}
                                                alt="Imagem padrão do prato"
                                                onClick={() => handleDish(favorite.dish_id)}
                                            />
                                    }
                                    <DishInfo>
                                        <h2 onClick={() => handleDish(favorite.dish_id)} >{favorite.name}</h2>
                                        <span
                                            onClick={() => handleRemove(favorite.id)}
                                            className={loadingFavorites ? "disabled" : ""}
                                        >Remover dos favoritos</span>
                                    </DishInfo>
                                </FavoriteDish>
                            ))
                        }
                    </WrappedFavorites>
                ) : null}
                {!isLoading && (
                    favorites.length === 0 ? <p>Nenhum favorito adicionado.</p> : null
                )}
            </Content>
            <Footer />
            <ToastContainer enableMultiContainer containerId={"await"} autoClose={false} draggable={false} />
            <ToastContainer enableMultiContainer containerId={"autoClose"} autoClose={1500} draggable={false} />
        </Container>
    );
}