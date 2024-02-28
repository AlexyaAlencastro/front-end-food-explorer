import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { TfiReceipt, TfiUser, TfiHeart } from 'react-icons/tfi';
import { FiLogOut } from 'react-icons/fi';

import { Brand } from '../Brand';
import { Input } from '../Input';
import { Button } from '../Button';
import { Menu } from '../Menu';
import { ItemMenu } from '../ItemMenu';
import defaultDish from '../../../src/assets/dish.svg';

import { Container, ReceiptOrders, Order, Profile, ProfileMenu, ProfileMenuOptions, SearchList } from './styles';

export function Header(props) {
    const { signOut, user, isAdmin } = useAuth();

    const navigate = useNavigate();

    const { setItemSearch, page, orderItems, totalOrder } = props;

    const [dishes, setDishes] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const avatarUrl = `${api.defaults.baseURL}/files/${user.avatar}`;
    const avatarStyle = { backgroundImage: user.avatar ? `url(${avatarUrl})` : 'none' };

    const queryWidth = 1050;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

    const [search, setSearch] = useState("");
    const [hasSearchPlaceholder, setHasSearchPlaceholder] = useState(false);
    const [filteredSearch, setFilteredSearch] = useState([]);

    const profileMenuRef = useRef(null);
    const profileRef = useRef(null);

    function handleSignOut() {
        document.documentElement.style.overflowY = "auto";
        navigate("/");
        signOut();
    };

    function handleDish(id) {
        const pageNameAndId = window.location.pathname.split("/");

        navigate(`/dish/${id}`);

        if (pageNameAndId[1] === "dish" && pageNameAndId[2] !== id.toString()) {
            window.location.reload();
        } else {
            document.querySelector("#searchDishes").value = "";
            setSearch("");
        };
    };

    function toggleProfileMenu() {
        if (isProfileMenuVisible) {
            setIsProfileMenuVisible(false);
        } else {
            setIsProfileMenuVisible(true);
        };
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target) &&
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                if (profileMenuRef.current.classList.contains("profile-menu-visible")) {
                    setIsProfileMenuVisible(false);
                };
            };
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setHasSearchPlaceholder(!search);
    }, [search]);

    useEffect(() => {
        if (page === "home") {
            setItemSearch(search);
        };

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

        var searchResult = filterDishesByNameOrIngredient(search);
        setFilteredSearch(searchResult);
    }, [search]);

    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get("/dishes");
                setDishes(response.data);
            } catch (error) {
                console.error("Erro ao buscar pratos: ", error);
                toast("Erro ao buscar os pratos. Por favor, tente novamente.");
            };
        };

        fetchDishes();

        function handleResize() {
            setWindowWidth(window.innerWidth);

            if (window.innerWidth < queryWidth) {
                setIsProfileMenuVisible(false);
                setSearch("");
            };
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const oldItems = JSON.parse(localStorage.getItem("@foodexplorer:order"));

        if (oldItems && oldItems.dishes) {
            let total = 0;

            for (const dish of oldItems.dishes) {
                if (dish.amount) {
                    total += dish.amount;
                };
            };
            setTotalAmount(total);
        } else {
            setTotalAmount(orderItems);
        };

    }, [orderItems, totalOrder]);

    return (
        <Container>
            <Menu />
            <Link to="/"><Brand isAdmin={isAdmin} /></Link>
            {windowWidth >= queryWidth && (
                <Input
                    id="searchDishes"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Busque por pratos ou ingredientes"
                    searchPlaceholder={hasSearchPlaceholder}
                    value={search}
                >
                    {
                        search && filteredSearch.length > 0 && page !== "home" &&
                        <SearchList>
                            {
                                filteredSearch.map(dish =>
                                    <div key={dish.id} onClick={() => handleDish(dish.id)}>
                                        {
                                            dish.image ? (
                                                <img src={`${api.defaults.baseURL}/files/${dish.image}`} />
                                            ) : (
                                                <img src={defaultDish} />
                                            )
                                        }
                                        <span>{dish.name}</span>
                                    </div>
                                )
                            }
                        </SearchList>
                    }
                    {
                        search && filteredSearch.length === 0 && page !== "home" &&
                        <SearchList><span>Nenhum resultado encontrado!</span></SearchList>
                    }
                </Input>
            )}
            {windowWidth >= queryWidth ? (
                isAdmin ? (
                    <Link to="/add">
                        <Button>
                            Novo prato
                        </Button>
                    </Link>
                ) : (
                    <Link to="/payment">
                        <Button>
                            <TfiReceipt />{`Pedido (${totalAmount})`}
                        </Button>
                    </Link>
                )
            ) : (
                isAdmin ? null : (
                    <Link to="/payment">
                        <ReceiptOrders>
                            <TfiReceipt />
                            <Order>
                                {totalAmount}
                            </Order>
                        </ReceiptOrders>
                    </Link>
                )
            )}
            {windowWidth >= queryWidth && (
                <Profile
                    ref={profileRef}
                    style={avatarStyle}
                    onClick={toggleProfileMenu}
                >
                    {
                        !user.avatar && <TfiUser />
                    }
                </Profile>
            )}
            <ProfileMenu
                ref={profileMenuRef}
                className={`profile-menu ${isProfileMenuVisible ? 'profile-menu-visible' : 'profile-menu-transition'}`}
            >
                <ProfileMenuOptions>
                    <Link to="/orders">
                        {
                            isAdmin ? <ItemMenu icon={TfiReceipt} title="Pedidos" /> : <ItemMenu icon={TfiReceipt} title="Meus pedidos" />
                        }
                    </Link>
                    {
                        !isAdmin &&
                        <Link to="/favorites"><ItemMenu icon={TfiHeart} title="Favoritos" /></Link>
                    }
                    <Link to="/profile"><ItemMenu icon={TfiUser} title="Atualizar dados" /></Link>
                    <ItemMenu
                        icon={FiLogOut}
                        title="Sair"
                        onClick={handleSignOut}
                    />
                </ProfileMenuOptions>
            </ProfileMenu>
        </Container>
    );
}