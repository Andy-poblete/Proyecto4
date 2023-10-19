import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Button, Card, CardGroup,} from "react-bootstrap";



const Menu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getMenu = async () => {
            try {
                const collectionRef = collection(db, "Menu");
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data()
                    return data
                })

                setMenu(docs);

            } catch (error) {
                console.log(error)
            }
        }
        getMenu()
    }, [])

    return (
        <section>
            <h1 className="text-center">Menu</h1>
                <CardGroup className="justify-content-center">
                    {menu.map((plato) => (
                        <div key={plato.id} className="m-5 text-center">
                            <Card style={{ width: '18rem', height: "400px" }}>
                                <Card.Img style={{ width: "18rem", height: "200px" }} variant="top" src={plato.Imagen} alt={plato.Nombre} />
                                <Card.Body>
                                    <Card.Title>{plato.Nombre}</Card.Title>
                                    <Card.Text>{plato.Detalle}</Card.Text>
                                    <Button  variant="primary">Precio:${plato.Precio} CLP</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </CardGroup>
        </section>
    )
}

export default Menu