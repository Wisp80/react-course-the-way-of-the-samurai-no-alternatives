import {ProductList} from './productList.tsx';

export function App() {
    console.log('🔶 App')
    const products = [
        {id: 1, name: 'Хлеб', price: 30, category: 'Выпечка'},
        {id: 2, name: 'Молоко', price: 60, category: 'Молочные'},
        {id: 3, name: 'Яблоки', price: 120, category: 'Фрукты'},
    ];
    return <ProductList items={products} />;
}
