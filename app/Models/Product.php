<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products'; // Opcional
    public $timestamps = true; // Habilita timestamps, opcional

    protected $fillable = [
        'barcode',
        'name',
        'description',
        'image',
        'sell_price',
        'attempts',
    ];

    protected $casts = [
        'sell_price' => 'decimal:2',
    ];

    public function buys()
    {
        return $this->hasMany(Buy::class);
    }

    public function sells()
    {
        return $this->hasMany(Sell::class);
    }
}
