import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, ActionButtons } from './styles';

export const ConfirmationToast = ({ confirm, cancel, message, onConfirm, onCancel }) => {
    const handleConfirm = () => {
        toast.dismiss();
        onConfirm();
    };

    const handleCancel = () => {
        toast.dismiss();
        onCancel();
    };

    return (
        <Container>
            {message}
            <ActionButtons>
                <button onClick={handleConfirm}>{confirm}</button>
                <button onClick={handleCancel}>{cancel}</button>
            </ActionButtons>
        </Container>
    );
}