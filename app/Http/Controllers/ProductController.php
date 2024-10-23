<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        // var_dump($products);

        return Inertia::render('Products', ['products' => $products]);
    }

    public function create()
    {
        return Inertia::render('Products/Create');
    }

    public function store(ProductRequest $request)
    {
        $request->validate([
            'barcode' => 'required|numeric',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'sell_price' => 'required|numeric',
        ]);

        // Criação do produto
        $product = new Product($request->all());
        if ($request->hasFile('image')) {
            // Salvar a imagem se estiver presente
            $product->image = $request->file('image')->store('images', 'public');
        }
        $product->save();

        return response()->json(['message' => 'Produto cadastrado com sucesso!'], 201);
    }

    public function show(Product $product)
    {
        return Inertia::render('Products/Show', ['product' => $product]);
    }

    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', ['product' => $product]);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $product->update($request->validated());
        return redirect()->route('products.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}
