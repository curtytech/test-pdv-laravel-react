import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { useState } from 'react';

export default function Products() {
    const [formData, setFormData] = useState({
        barcode: '',
        name: '',
        description: '',
        image: null,
        sell_price: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        if (!csrfTokenMeta) {
            console.error('Token CSRF não encontrado!');
            return;
        }

        const csrfToken = csrfTokenMeta.content;

        try {
            const response = await fetch('/products/store', {
                method: 'POST',
                body: form,
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Produto cadastrado com sucesso!');
            } else {
                const errorData = await response.json();
                console.error('Erro ao cadastrar produto:', errorData);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Products
                </h2>
            }
        >
            <Head title="Products" />

            <div className="mx-[50px] mt-10 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-86">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Cadastrar Produto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label htmlFor="barcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Código de Barras</label>
                            <input type="number" id="barcode" name="barcode" required onChange={handleChange} className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400" placeholder="Insira o código de barras" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                            <input type="text" id="name" name="name" required onChange={handleChange} className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400" placeholder="Insira o nome do produto" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="sell_price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preço de Venda</label>
                            <input type="number" id="sell_price" name="sell_price" step="0.01" required onChange={handleChange} className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400" placeholder="Insira o preço de venda" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Imagem</label>
                            <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descrição</label>
                            <textarea id="description" name="description" rows="4" required onChange={handleChange} className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400" placeholder="Insira a descrição do produto"></textarea>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded mt-4">Cadastrar Produto</button>
                </form>
            </div>

            <button onClick={() => {
                const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
                console.log(csrfTokenMeta ? csrfTokenMeta.content : 'Token CSRF não encontrado!');
            }}>teste</button>

        </AuthenticatedLayout>
    );
}
