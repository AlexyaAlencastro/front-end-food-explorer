import React, { useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { TfiUser, TfiEmail, TfiLock } from 'react-icons/tfi';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Form, Avatar, ChangeAvatar } from './styles';

export function Profile() {
    const { user, updateProfile, isAdmin, order } = useAuth();

    const avatarUrl = `${api.defaults.baseURL}/files/${user.avatar}`;

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
    const [avatar, setAvatar] = useState(user.avatar);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        if (name.length < 3) {
            return toast("O nome deve ter no mínimo 3 caracteres.");
        };

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return toast("Por favor, insira um email válido.");
        }

        if (passwordNew && !passwordOld) {
            return toast("Para alterar a senha, você precisa fornecer a senha atual.");
        }

        if (passwordNew && passwordNew.length < 6) {
            return toast("A senha deve ter no mínimo 6 caracteres.");
        };

        if (!passwordOld && (name !== user.name || email !== user.email)) {
            return toast("A senha atual precisa ser informada para alterar o nome ou email.");
        };

        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        };

        const userUpdated = Object.assign(user, updated);

        await updateProfile({ user: userUpdated, avatarFile, isAdmin, order });
    };

    function handleChangeAvatar(event) {
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')) {
            setAvatarFile(file);

            const imagePreview = URL.createObjectURL(file);
            setAvatar(imagePreview);
        };
    };

    const avatarStyle = {
        backgroundImage: avatar ? avatarFile ? `url(${avatar})` : `url(${avatarUrl})` : "none"
    };

    return (
        <Container>
            <BackButton />
            <Form>
                <label htmlFor="avatar">
                    <Avatar style={avatarStyle}>
                        {!avatar && <TfiUser />}
                        <ChangeAvatar>Trocar imagem</ChangeAvatar>
                    </Avatar>
                    <input id="avatar" type="file" onChange={handleChangeAvatar} />
                </label>
                <Input
                    icon={TfiUser}
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    icon={TfiEmail}
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    icon={TfiLock}
                    type="password"
                    placeholder="Senha atual"
                    onChange={(e) => setPasswordOld(e.target.value)}
                />
                <Input
                    icon={TfiLock}
                    type="password"
                    placeholder="Nova senha"
                    onChange={(e) => setPasswordNew(e.target.value)}
                />
                <Button onClick={handleUpdate}>Salvar</Button>
            </Form>
            <Footer />
            <ToastContainer autoClose={1500} draggable={false} />
        </Container>
    );
}
