import { Modal } from 'react-bootstrap';
import { Link } from 'remix';

const ProductDetails = ({
    product
}: { product: any }) => {
    return (
        <Modal
            show={true}
            size="lg"
        >
            {
                product &&
                <Modal.Header>
                    <Modal.Title>{product.title}</Modal.Title>
                </Modal.Header>
            }

            <Modal.Body>
                {
                    product
                        ? (
                            <>
                                <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
                                <p style={{ textTransform: 'capitalize', marginTop: '1rem' }}>{product.category}</p>
                                <p>{product.description}</p>
                                <p>Rs. {product.price}</p>
                            </>
                        )
                        : <div>Loading Product Details...</div>
                }
            </Modal.Body>

            <Modal.Footer>
                <Link to='/product'>Close</Link>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductDetails;