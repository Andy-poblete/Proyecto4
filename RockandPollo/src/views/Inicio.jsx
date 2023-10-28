import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card, CardGroup } from "react-bootstrap";




const Inicio = () => {

    const [inicio, setInicio] = useState([]);

    useEffect(() => {
        const getInicio = async () => {
            try {
                const collectionRef = collection(db, "Inicio");
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data()
                    return data
                })

                setInicio(docs);

            } catch (error) {
                console.log(error)
            }
        }
        getInicio()
    }, [])
    return (
        <section>
            <CardGroup className="justify-content-center">
            <div className="m-5">
                <h5>-----------------------------------------------</h5>
                <h5>Bienbenido a la Pagina de Rock and Pollo</h5>
                <h5>en donde te mostraremos la variedad de</h5>
                <h5>nustros porductos  y tambien en donde te</h5>
                <h5>contaremos quienes somos.</h5>
                <h5>-----------------------------------------------</h5>
            </div>
                        {inicio.map((inicio) => (
                            <div key={inicio.id} className="m-3 text-center">
                                <Card style={{ width: '290px', height: "270px" }}>
                                    <Card.Img style={{ width: "18rem", height: "200px" }} variant="top" src={inicio.Imagen} />
                                    <Card.Body style={{ backgroundColor: 'rgb(90, 90, 90)' }}>
                                        <Card.Title>{inicio.Campo}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                        
                        </CardGroup>
        </section>
    )
}

export default Inicio