import { Button, Modal } from 'react-bootstrap';
import { Link, useLocation } from 'remix';
import { Product } from '~/types';

// Display details of an individual product in a modal
const ProductDetails = ({
    product
}: { product: Product }) => {
    const { search } = useLocation();

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
                                <p style={{ textTransform: 'capitalize' }}>{product.description}</p>
                                <p>Rs. {product.price}</p>
                            </>
                        )
                        : <div>Loading Product Details...</div>
                }
            </Modal.Body>

            <Modal.Footer>
                <Button>
                    <Link to={`/product${search}`} className='text-white'>Close</Link>
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductDetails;