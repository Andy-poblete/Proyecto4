import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";

const Nosotros = () => {

    const [nos, setnos] = useState([]);

    useEffect(() => {
        const getnos = async () => {
            try {
                const collectionRef = collection(db, "Nosotros");
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data()
                    return data
                })

                setnos(docs);

            } catch (error) {
                console.log(error)
            }
        }
        getnos()
    }, [])
    return (
        <div>
            <h1 className="m-3 text-center">Quienes somos</h1>
                <div className="container">
                    <div className="row justify-content-center m-5">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h6><p>Quienes Somos
                    Empresa gastronómica familiar, “nuestras tradiciones es nuestra carta”. Con una trayectoria de 10 años., compartiendo nuestras delicias por el largo de Chile.
                    Buscamos trabajar siempre con los mejores ingredientes, materias prima y nuestro más preciado secreto, el mantener las recetas tradicionales de nuestro país, para crear y llevar a la mesa los mejores sabores.
                    Rock and Pollo al igual que sus tradicionales recetas, ha pasado de generación en generación, conservando siempre la mística que nos caracteriza.
                    El proceso de elaboración de cada uno de nuestros tradicionales platos es riguroso, desde la selección de las materias primas, el proceso de cocción y un exigente control sanitario y de calidad, que aseguran una excelente preparación.
                    Todos nuestros locales, distribuidos a lo largo del país, son un elemento más del conjunto de atributos que hace a Rock and Pollo tan especial, con una clientela fiel que ha traspasado generaciones, porque en cada uno de nuestros locales encuentran la magia para compartir con familia y amigos, teniendo una experiencia única.
                </p></h6>
                        </div>
                        
                        <div className="col-md">
                        {nos.map((imagen) => (
                        <div key={imagen.id}>
                            <img style={{ width: "570px", height: "400px" }} src={imagen.Imagen} />
                        </div>
                    ))}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Nosotros;