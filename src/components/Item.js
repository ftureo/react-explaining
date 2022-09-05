import { Link } from "react-router-dom";

const Item = ({ title, price, id, category }) => {
    return (
        <Link to={`/item/${id}`}>
            <div>
                <h1>{title}</h1>
                <h3>{price}</h3>
                <h4>{id}</h4>
                <h5>{category}</h5>
            </div>
        </Link>
    );
};
export default Item;
