export const productService = {
    async createProduct(product: Product): Promise<ApiResponse> {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      if (!csrfToken) {
        throw new Error('CSRF token not found');
      }

      const formData = new FormData();
      for (const [key, value] of Object.entries(product)) {
        if (value !== null) {
          formData.append(key, value);
        }
      }

      const response = await fetch('/products/store', {
        method: 'POST',
        body: formData,
        headers: {
          'X-CSRF-TOKEN': csrfToken,
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create product');
      }

      return response.json();
    },
  };
