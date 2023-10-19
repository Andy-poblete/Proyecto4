import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Carousel from 'react-bootstrap/Carousel';

const ImagenInicio = () => {

    const [ima, setima] = useState([]);

    useEffect(() => {
        const getima = async () => {
            try {
                const collectionRef = collection(db, "ImagenInicio");
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data()
                    return data
                })

                setima(docs);

            } catch (error) {
                console.log(error)
            }
        }
        getima()
    }, [])
    return (
        <Carousel slide={false}>
            {ima.map((imagen) => (
                        <div key={imagen.id}>
                                <img style={{ width: "2000px", height: "600px" }}  src={imagen.Imagen}/>
                        </div>
                    ))}
        </Carousel>
    );
}

export default ImagenInicio;