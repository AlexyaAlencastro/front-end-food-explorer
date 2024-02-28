import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';
import { AddDish } from '../pages/AddDish';
import { EditDish } from '../pages/EditDish';
import { Profile } from '../pages/Profile';
import { Orders } from '../pages/Orders';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/add" element={<AddDish />} />
            <Route path="/edit/:id" element={<EditDish />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}