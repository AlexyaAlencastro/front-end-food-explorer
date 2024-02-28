import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Content, Banner, WrappedBanner, Slogan, BgBanner, NoResults } from './styles';

export function Home() {

    const [meals, setMeals] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);

    const [dishes, setDishes] = useState([]);

    const [itemSearch, setItemSearch] = useState("");
    const [filteredSearch, setFilteredSearch] = useState([]);
    const [search, setSearch] = useState("");
    const page = "home";

    const [dishToAdd, setDishToAdd] = useState();
    const [orderItems, setOrderItems] = useState(0);
    const [loadingDishes, setLoadingDishes] = useState(true);

    useEffect(() => {
        async function fetchDishes() {
            try {
                setLoadingDishes(true);
                const response = await api.get(`/dishes?itemSearch=${search}`);

                setDishes(response.data);

                const mealsArray = response.data.filter(dish => dish.category === "Refeições");
                const dessertsArray = response.data.filter(dish => dish.category === "Sobremesas");
                const drinksArray = response.data.filter(dish => dish.category === "Bebidas");

                setMeals(mealsArray.map(meal =>
                    <Card
                        key={meal.id}
                        dish={meal}
                        setDishToAdd={setDishToAdd}
                    />
                ));

                setDesserts(dessertsArray.map(dessert =>
                    <Card
                        key={dessert.id}
                        dish={dessert}
                        setDishToAdd={setDishToAdd}
                    />
                ));

                setDrinks(drinksArray.map(drink =>
                    <Card
                        key={drink.id}
                        dish={drink}
                        setDishToAdd={setDishToAdd}
                    />
                ));
            } catch (error) {
                console.error("Ocorreu um erro ao buscar os pratos:", error);
                toast("Não foi possível buscar os pratos. Por favor, tente novamente.");
            } finally {
                setLoadingDishes(false);
            };
        };

        fetchDishes();

    }, []);

    useEffect(() => {
        function filterDishesByNameOrIngredient(searchQuery) {
            searchQuery = searchQuery.toLowerCase();

            var filteredDishes = dishes.filter(function (dish) {
                if (dish.name.toLowerCase().includes(searchQuery)) {
                    return true;
                };

                var foundIngredient = dish.ingredients.find(function (ingredient) {
                    return ingredient.name.toLowerCase().includes(searchQuery);
                });

                return !!foundIngredient;
            });

            return filteredDishes;
        };

        var searchResult = filterDishesByNameOrIngredient(itemSearch);
        setFilteredSearch(searchResult);

        const mealsArray = searchResult.filter(dish => dish.category === "Refeições");
        const dessertsArray = searchResult.filter(dish => dish.category === "Sobremesas");
        const drinksArray = searchResult.filter(dish => dish.category === "Bebidas");

        setMeals(mealsArray.map(meal =>
            <Card
                key={meal.id}
                dish={meal}
                setDishToAdd={setDishToAdd}
            />
        ));

        setDesserts(dessertsArray.map(dessert =>
            <Card
                key={dessert.id}
                dish={dessert}
                setDishToAdd={setDishToAdd}
            />
        ));

        setDrinks(drinksArray.map(drink =>
            <Card
                key={drink.id}
                dish={drink}
                setDishToAdd={setDishToAdd}
            />
        ));

    }, [itemSearch]);

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

            toast("Item adicionado ao pedido.")
        };

    }, [dishToAdd]);

    return (
        <Container>
            <Header
                setItemSearch={setItemSearch}
                page={page}
                dishes={dishes}
                orderItems={orderItems}
            />
            <Content>
                <Banner className="banner">
                    <WrappedBanner className="wrappedBanner" />
                    <Slogan className="slogan">
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </Slogan>
                    <BgBanner className="bgBanner" />
                </Banner>
                {
                    meals.length > 0 &&
                    <Carousel title="Refeições" content={meals} />
                }
                {
                    desserts.length > 0 &&
                    <Carousel title="Sobremesas" content={desserts} />
                }
                {
                    drinks.length > 0 &&
                    <Carousel title="Bebidas" content={drinks} />
                }
                {
                    itemSearch && meals.length <= 0 && desserts.length <= 0 && drinks.length <= 0 &&
                    <NoResults>Nenhum resultado encontrado!</NoResults>
                }
                {
                    !loadingDishes && dishes.length <= 0 &&
                    <NoResults>Nenhum prato cadastrado!</NoResults>
                }
            </Content>
            <Footer />
            <ToastContainer autoClose={1500} draggable={false} />
        </Container >
    );
}