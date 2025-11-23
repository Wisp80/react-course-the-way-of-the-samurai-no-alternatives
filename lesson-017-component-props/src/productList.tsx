import {ProductItem} from './productItem.tsx';

export function ProductList({items}) {
    console.log('📋 ProductList')
    return (
    <div>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <ProductItem product={item}/>
                </li>
            ))}
        </ul>
    </div>
  )
}
