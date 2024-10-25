import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Trash } from "@phosphor-icons/react/dist/ssr";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 w-full flex gap-6 mb-6">
                    <div className="h-32 px-6 w-3/4 flex flex-row items-center justify-between bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <img src="https://picsum.photos/200/300" className='w-32 h-32 p-4 rounded-full' alt="" />
                        <p className="p-6 text-gray-900 dark:text-gray-100">
                            Name
                        </p>
                        <p className="p-6 text-gray-900  dark:text-gray-100">
                            <input type="number" className='rounded bg-gray-600 text-black' />
                        </p>
                        <p className="p-6 text-gray-900 dark:text-gray-100">
                            R$ 7.88
                        </p>
                        <Trash size={32} className='text-gray-900 dark:text-gray-100 cursor-pointer' />
                    </div>
                    <div className='w-1/4 flex flex-row items-center justify-between bg-white shadow-sm sm:rounded-lg dark:bg-gray-800'>
                        <div className='w-full flex flex-col justify-center items-center p-6'>
                            <p className="p-6 text-gray-900 dark:text-gray-100">
                                Detalhes da compra
                            </p>

                            <div className='flex flex-col justify-start w-full mb-6'>
                                <div className='w-full flex justify-between'>
                                    <p className='text-gray-900 dark:text-gray-100 text-sm justify-start' >SubTotal:</p>
                                    <p className='text-gray-900 dark:text-gray-100 text-sm justify-start' >80.99</p>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <p className='text-gray-900 dark:text-gray-100 text-sm justify-start' >Desconto:</p>
                                    <p className='text-gray-900 dark:text-gray-100 text-sm justify-start' >2.99</p>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <p className='text-gray-900 dark:text-gray-100 text-sm justify-start' >Total:</p>
                                    <p className='text-gray-900 dark:text-gray-100 text-sm justify-start' >78.00</p>
                                </div>                              
                            </div>

                            <button className='mx-auto w-full justify-center p-2 bg-gray-600 rounded-lg dark:text-gray-100'>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Listar Produtos
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Vender Produtos
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Registrar Produtos
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
