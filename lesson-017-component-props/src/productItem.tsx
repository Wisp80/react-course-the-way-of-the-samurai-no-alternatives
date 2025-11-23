import {useState} from 'react';

export function ProductItem({product}) {
    console.log('🧺 ProductItem')
    const [inCart, setInCart] = useState(false);

    return (
        <div style={{
            border: '5px solid black',
            padding: '5px',
            margin: '10px'
        }}>
            <div>id: {product.id}</div>
            <div>name: {product.name}</div>
            <div>price: {product.price}</div>
            <div>category: {product.category}</div>

            <button
                style={{
                    backgroundColor: !inCart ? 'white' : 'yellow',
                }}

                onClick={() => {
                    setInCart(!inCart);
                    alert(!inCart ? 'Товар добавлен в корзину' : 'Товар удален из корзины');
                }}>{!inCart ? 'Добавить в корзину' : 'Товар в корзине'}</button>
        </div>
    );
}
