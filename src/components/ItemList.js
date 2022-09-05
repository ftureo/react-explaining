import Item from "./Item";

const ItemList = ({ products }) => {
    console.log("Products en itemList", products);

    return (
        <div>
            {products.map((product, index) => {
                return (
                    <Item
                        key={index}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                    />
                );
            })}
        </div>
    );
};
export default ItemList;
