// types.ts
interface Product {
    barcode: string;
    name: string;
    description: string;
    image: File | null;
    sell_price: string;
  }

  interface ProductFormProps {
    onSubmit: (product: Product) => Promise<void>;
    initialData?: Partial<Product>;
  }

  interface ApiResponse {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
  }
