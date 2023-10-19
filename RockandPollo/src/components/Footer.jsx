
const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(30, 223, 223)' }}>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="text-center col-md-6 col-lg-5 col-12 ft-1">
                            <h5><span>RockandPollo</span></h5>
                            <p>Atencion Local</p>
                            <p>Lunes a Miércoles: 13:00 a 22:00 hrs.</p>
                            <p>Jueves: 13:00 a 02:00 am.</p>
                            <p>Viernes y Sábado: 13:00 a 03:00 am.</p>
                            <p>Domingo: 13:00 a 17:00 hrs.</p>
                        </div>
                        
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Datos</h5>
                            <ul>
                                <li><p><i className="fa-solid fa-phone-volume"></i>Telefono: +56 9 8765 4321</p></li>
                                <li><p><i className="fa-solid fa-envelope"></i>Email: RockandPollo@gmail.com</p></li>
                                <li><p><i className="fa-solid fa-paper-plane"></i>Direccion: Av. Republica #3030</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h5 className="m-0 text-center">
                    <a>
                        © 2023 Copyright:Bootcamp UDD
                    </a>
                </h5>
            </div>
        </>
    )
}

export default Footer