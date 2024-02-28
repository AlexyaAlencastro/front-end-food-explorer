import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { TfiPlus, TfiMinus, TfiReceipt } from 'react-icons/tfi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { TagIngredients } from '../../components/TagIngredients';
import { Button } from '../../components/Button';
import defaultDish from '../../../src/assets/dish.svg';

import { Container, Content, DishDetails, DishInformation, Ingredients, DishButon, DishControls } from './styles';

export function Dish() {
    const { isAdmin } = useAuth();

    const params = useParams();

    const [dish, setDish] = useState(null);
    const [dishAmount, setDishAmount] = useState(1);

    const [dishToAdd, setDishToAdd] = useState();
    const [orderItems, setOrderItems] = useState(0);

    function decrease() {
        if (dishAmount > 1) {
            setDishAmount(prevState => prevState - 1);
        };
    };

    function increase() {
        setDishAmount(prevState => prevState + 1);
    };

    function handleAddDish(dish_id, amount) {
        setDishToAdd({ dish_id, amount });
    };

    useEffect(() => {
        if (dishToAdd) {
            const oldItems = JSON.parse(localStorage.getItem("@foodexplorer:order"));
            const existingDishIndex = oldItems.dishes.findIndex(dish => dish.dish_id === dishToAdd.dish_id);

            const updatedOrder = { ...oldItems };

            if (existingDishIndex !== -1) {
                updatedOrder.dishes[existingDishIndex].amount += dishToAdd.amount;
            } else {
                updatedOrder.dishes.push(dishToAdd);
            };

            localStorage.setItem("@foodexplorer:order", JSON.stringify(updatedOrder));

            setOrderItems(orderItems + dishToAdd.amount);
        };
    }, [dishToAdd]);

    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get(`/dishes/${params.id}`);
                setDish(response.data);
            } catch (error) {
                console.error("Ocorreu um erro ao buscar o prato:", error);
                toast("Não foi possível buscar o prato. Por favor, tente novamente.");
            };
        };

        fetchDishes();
    }, []);

    return (
        <Container>
            <Header orderItems={orderItems} />
            <Content>
                <BackButton />
                {
                    dish &&
                    <DishDetails className="dish">
                        <img
                            src={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : `${defaultDish}`}
                            alt={`Imagem de ${dish.description}`} />
                        <section>
                            <DishInformation className='dishInformation'>
                                <h1>{dish.name}</h1>
                                <p>{dish.description}</p>
                                <Ingredients>
                                    {
                                        dish.ingredients.length > 0 &&
                                        dish.ingredients.map(ingredient => <TagIngredients title={ingredient.name} key={ingredient.id} />)
                                    }
                                </Ingredients>
                                <span>R$ {dish.price.toFixed(2).replace(".", ",")}</span>
                            </DishInformation>
                            {isAdmin ? (
                                <DishButon className="dishButon">
                                    <Link to={`/edit/${dish.id}`}>
                                        <Button>
                                            Editar prato
                                        </Button>
                                    </Link>
                                </DishButon>
                            ) : (
                                <DishButon className="dishButon">
                                    <DishControls>
                                        <TfiMinus onClick={decrease} />
                                        <span>{dishAmount}</span>
                                        <TfiPlus onClick={increase} />
                                    </DishControls>
                                    <Button onClick={() => handleAddDish(dish.id, dishAmount)}>
                                        <TfiReceipt />incluir ∙ R$ {dish.price.toFixed(2).replace(".", ",")}
                                    </Button>
                                </DishButon>
                            )}
                        </section>
                    </DishDetails>
                }
            </Content>
            <Footer />
        </Container>
    );
}