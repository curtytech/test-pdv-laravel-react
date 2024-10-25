import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useProductForm } from '../hooks/useProductForm';
import { productService } from '../services/productService';
import { FormInput } from '../Components/FormInput';

export default function ProductForm() {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useProductForm(async (product) => {
    await productService.createProduct(product);
  });

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
        <h1 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
          Cadastrar Produto
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <FormInput
              label="Imagem"
              name="image"
              type="file"
              value=""
              onChange={handleChange}
              error={errors.image}
              accept="image/*"
            />

            <FormInput
              label="Código de Barras"
              name="barcode"
              type="number"
              value={formData.barcode}
              onChange={handleChange}
              error={errors.barcode}
              placeholder="Insira o código de barras"
              required
            />

            <FormInput
              label="Nome"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Insira o nome do produto"
              required
            />

            <FormInput
              label="Preço de Venda"
              name="sell_price"
              type="number"
              value={formData.sell_price}
              onChange={handleChange}
              error={errors.sell_price}
              placeholder="Insira o preço de venda"
              required
            />
          </div>

          <FormInput
            label="Descrição"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            placeholder="Insira a descrição do produto"
            required
          />

          {errors.submit && (
            <p className="mt-2 text-sm text-red-500">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 mt-4 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar Produto'}
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
