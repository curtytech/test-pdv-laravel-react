import { useState, type ChangeEvent, type FormEvent } from 'react';

const initialFormState: Product = {
  barcode: '',
  name: '',
  description: '',
  image: null,
  sell_price: '',
};

export const useProductForm = (onSubmit: (product: Product) => Promise<void>, initialData?: Partial<Product>) => {
  const [formData, setFormData] = useState<Product>({ ...initialFormState, ...initialData });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0] || null;
      setFormData(prev => ({ ...prev, [name]: file }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.barcode) newErrors.barcode = 'Código de barras é obrigatório';
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.description) newErrors.description = 'Descrição é obrigatória';
    if (!formData.sell_price) newErrors.sell_price = 'Preço de venda é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setFormData(initialFormState); // Reset form on success
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ submit: error.message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
