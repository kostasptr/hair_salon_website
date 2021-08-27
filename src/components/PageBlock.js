
import './PageBlock.css';
import hair from '../images/home1.jpg';
import cafe from '../images/home2.jpg';
import products from '../images/home3.jpg';
import book from '../images/home4.jpeg';
import history from '../images/home5.jpeg';
import contact from '../images/home6.jpeg';

function PageBlock({ title, semantic, description }) {
    return (
        <div className="container-div">
            <a href={title}>
                <div className="container-image-serv">
                    <img
                        src={
                            title === 'Hair' ? hair
                                : title === 'Cafe' ? cafe
                                    : title === 'Products' ? products
                                        : title === 'Book' ? book
                                            : title === 'History' ? history
                                                : contact
                        }
                        alt={semantic}
                        className="image-serv"
                    />
                </div>
            </a>
            <a href={title} className="services-title-container"><span className="services-title">{title}</span></a>
            <div className="services-description-container"><span className="services-description"><p>{description}</p></span></div>
        </div>
    );

}
export default PageBlock;