import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { ThemeContext } from 'styled-components';
import { TfiPlus, TfiMinus, TfiPencil } from 'react-icons/tfi';
import { VscHeartFilled, VscHeart } from 'react-icons/vsc';

import { Button } from '../Button';
import defaultDish from '../../../src/assets/dish.svg';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, AmountOfDishes, DishControls, TopRightButton } from './styles';

export function Card({ dish, setDishToAdd }) {
    const { user, isAdmin } = useAuth();

    const navigate = useNavigate();

    const theme = useContext(ThemeContext);

    const dishImage = dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : `${defaultDish}`;

    const [dishAmount, setDishAmount] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const [loadingFavorites, setLoadingFavorites] = useState(false);

    function handleDish(id) {
        navigate(`/dish/${id}`)
    };

    function handleEditDish(id) {
        navigate(`/edit/${id}`)
    };

    function decrease() {
        if (dishAmount > 1) {
            setDishAmount(prevState => prevState - 1);
        };
    };

    function increase() {
        setDishAmount(prevState => prevState + 1);
    };

    async function changeFavorite() {
        if (loadingFavorites) {
            return;
        };

        const isFavorite = checkIfIsFavorite(favorites, dish.id);

        if (isFavorite) {
            try {
                setLoadingFavorites(true);
                await api.delete(`/favorites/${isFavorite}`);
                toast("Removido dos favoritos.");
            } catch (error) {
                console.error("Erro ao remover o favorito: ", error);
                toast("Erro ao remover o favorito. Por favor, tente novamente.");
            } finally {
                setLoadingFavorites(false);
            };
        } else {
            const userAndDish = {
                userId: user.id,
                dishId: dish.id
            };

            try {
                setLoadingFavorites(true);
                await api.post("/favorites", userAndDish);
                toast("Adicionado aos favoritos.");
            } catch (error) {
                console.error("Erro ao adicionar o favorito: ", error);
                toast("Erro ao adicionar o favorito. Por favor, tente novamente.");
            } finally {
                setLoadingFavorites(false);
            };
        };

        fetchFavorites();
    };

    function handleAddDish(dish_id, amount) {
        setDishToAdd({ dish_id, amount });
    };

    async function fetchFavorites() {
        try {
            const response = await api.get(`/favorites/${user.id}`);
            setFavorites(response.data);
        } catch (error) {
            console.error("Não foi possível buscar os favoritos: ", error);
            toast("Não foi possível buscar os favoritos. Por favor, tente novamente.");
        };
    };

    function checkIfIsFavorite(favorites, dishId) {
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].dish_id === dishId) {
                return favorites[i].id;
            };
        };
        return false;
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <Container>
            <img
                src={dishImage}
                alt={`Imagem de ${dish.description.toLowerCase()}`}
                onClick={() => handleDish(dish.id)}
            />
            <h3
                onClick={() => handleDish(dish.id)}
            >{dish.name} &gt;</h3>
            <p>{dish.description}</p>
            <span>R$ {dish.price.toFixed(2).replace(".", ",")}</span>
            {isAdmin ? (
                <TopRightButton>
                    <TfiPencil onClick={() => handleEditDish(dish.id)} />
                </TopRightButton>
            ) : (
                <div>
                    <AmountOfDishes>
                        <DishControls>
                            <TfiMinus onClick={decrease} />
                            <span>{dishAmount}</span>
                            <TfiPlus onClick={increase} />
                        </DishControls>
                        <Button onClick={() => handleAddDish(dish.id, dishAmount)}>
                            incluir
                        </Button>
                    </AmountOfDishes>
                    <TopRightButton
                        onClick={() => changeFavorite()}
                        className={loadingFavorites ? "disabled" : ""}
                    >
                        {
                            checkIfIsFavorite(favorites, dish.id) ?
                                <VscHeartFilled style={{ color: theme.COLORS.TOMATO_100 }} /> :
                                <VscHeart />
                        }
                    </TopRightButton>
                </div>
            )}
        </Container>
    );
}