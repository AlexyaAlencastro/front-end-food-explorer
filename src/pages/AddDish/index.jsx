import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { FiUpload } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { DishItem } from '../../components/DishItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Content, DishInformations, ChoiceImage, RemoveImage } from './styles';

export function AddDish() {

	const navigate = useNavigate();

	const [dishes, setDishes] = useState([]);
	const [dishImage, setDishImage] = useState("");
	const [dishImageFile, setDishImageFile] = useState("");
	const [name, setName] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [newIngredient, setNewIngredient] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [isNotBlankFields, setIsNotBlankFields] = useState(false);
	const [loadingCreate, setLoadingCreate] = useState(false);

	function handleAddIngredient() {
		if (newIngredient.trim() === "") {
			setNewIngredient("");
			return toast("Digite um ingrediente antes de adicionar.");
		};
		setIngredients(prevState => [...prevState, newIngredient]);
		setNewIngredient("");
	};

	function handleRemoveIngredient(deleted) {
		setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
	};

	const handleCategory = (event) => {
		setSelectedCategory(event.target.value);
	};

	function handleChoiceOfDish(event) {
		const file = event.target.files[0];

		if (file && file.type.startsWith("image/")) {
			setDishImageFile(file);

			const imagePreview = URL.createObjectURL(file);
			setDishImage(imagePreview);
		};
	};

	function checkBlankFields() {
		if (name && selectedCategory && ingredients.length > 0 && price && description) {
			setIsNotBlankFields(true);
		} else {
			setIsNotBlankFields(false);
		};
	};

	async function handleNewDish() {
		try {
			const priceRegex = /^\d{1,3},\d{2}$/;

			if (!priceRegex.test(price)) {
				return toast("Digite o preço num formato válido. Ex: 12,99");
			};

			const formattedPrice = parseFloat(price.replace(",", "."));

			const fileUploadForm = new FormData();

			if (dishImageFile) {
				fileUploadForm.append("image", dishImageFile);
			};

			fileUploadForm.append("name", name);
			fileUploadForm.append("category", selectedCategory);
			fileUploadForm.append("ingredients", JSON.stringify(ingredients));
			fileUploadForm.append("price", formattedPrice);
			fileUploadForm.append("description", description);

			setLoadingCreate(true);
			await api.post("/dishes", fileUploadForm);

			toast("Prato criado com sucesso!");

			setTimeout(() => {
				navigate("/");
			}, 2000);
		} catch (error) {
			console.error("Ocorreu um erro ao criar o prato:", error);
			toast("Não foi possível criar o prato. Por favor, tente novamente.");
		} finally {
			setLoadingCreate(false);
		};
	};

	useEffect(() => {
		checkBlankFields();
	}, [dishImage, name, selectedCategory, ingredients, price, description]);

	useEffect(() => {
		async function fetchDishes() {
			try {
				const response = await api.get(`/dishes`);
				setDishes(response.data);
			} catch (error) {
				console.error("Ocorreu um erro ao buscar os pratos:", error);
				toast("Não foi possível buscar os pratos. Talvez a busca não funcione corretamente.");
			};
		};

		fetchDishes();
	}, []);

	return (
		<Container>
			<Header
				dishes={dishes}
			/>
			<Content>
				<BackButton />
				<h1>Adicionar prato</h1>
				<DishInformations className='dishInformations'>
					<Section title="Imagem do prato">
						<ChoiceImage>
							{
								dishImage &&
								<div>
									<img src={dishImage} alt="Visualização da imagem" />
									<RemoveImage onClick={() => setDishImage("")}>
										<TfiClose />
									</RemoveImage>
								</div>
							}
							<label htmlFor="dishImage">
								<FiUpload /> Selecione imagem
								<input id="dishImage" type="file" onChange={handleChoiceOfDish} />
							</label>
						</ChoiceImage>
					</Section>

					<Section title="Nome">
						<Input
							placeholder="Ex.: Salada Ceasar"
							onChange={(e) => setName(e.target.value)}
						/>
					</Section>

					<Section title="Categoria">
						<select value={selectedCategory} onChange={handleCategory}>
							<option value="">Selecione uma opção</option>
							<option value="Refeições">Refeições</option>
							<option value="Sobremesas">Sobremesas</option>
							<option value="Bebidas">Bebidas</option>
						</select>
					</Section>

					<Section title="Ingredientes">
						<div>
							{
								ingredients.map((ingredient, index) => (
									<DishItem
										key={index}
										value={ingredient}
										onClick={() => handleRemoveIngredient(ingredient)}
									/>
								))
							}

							<DishItem
								$isNew
								placeholder="Adicionar"
								onChange={e => setNewIngredient(e.target.value)}
								value={newIngredient}
								onClick={handleAddIngredient}
							/>
						</div>
					</Section>

					<Section title="Preço">
						<Input
							placeholder="00,00"
							onChange={e => setPrice(e.target.value)}
						/>
					</Section>

					<Section title="Descrição">
						<textarea
							name="dishDescription"
							id="dishDescription"
							placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
							onChange={e => setDescription(e.target.value)}
						></textarea>
					</Section>

					<div>
						<Button
							type="text"
							disabled={!isNotBlankFields}
							onClick={handleNewDish}
							loading={loadingCreate}
							title="Adicionar"
						/>
					</div>
				</DishInformations>
			</Content>
			<Footer />
			<ToastContainer autoClose={1500} draggable={false} />
		</Container>
	);
}