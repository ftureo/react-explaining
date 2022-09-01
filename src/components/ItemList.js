import Item from "./Item";

const ItemList = ({ products }) => {
    console.log("Products en itemList", products);
    return (
        <div>
            {products.map((product) => {
                return (
                    <Item
                        id={product.id}
                        title={product.title}
                        price={product.price}
                    />
                );
            })}
        </div>
    );
};
export default ItemList;
