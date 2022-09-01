import { Link } from "react-router-dom";

const Item = ({ title, price, id }) => {
    return (
        <Link to={`/item/${id}`}>
            <div>
                <h1>{title}</h1>
                <h3>{price}</h3>
                <h4>{id}</h4>
            </div>
        </Link>
    );
};
export default Item;
