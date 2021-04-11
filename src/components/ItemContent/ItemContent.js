import './ItemContent.scss';

const ItemContent = ({ children }) => {

    return (
        <div className='items-content'>
            <p>{children}</p>
        </div>
    );
};

export default ItemContent;