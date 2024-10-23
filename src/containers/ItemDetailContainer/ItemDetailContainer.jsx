import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); 

    useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, 'products', id); 

        getDoc(productRef).then((docSnap) => {
            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log('No such document!');
            }
            setLoading(false);
        }).catch((error) => {
            console.log('Error getting document:', error);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="item-detail-container">
            {loading ? (
                <p>Loading...</p> 
            ) : (
                <ItemDetail product={product} /> 
            )}
        </div>
    );
};

export default ItemDetailContainer;
