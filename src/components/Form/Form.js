import Swal from "sweetalert2";
import { useState, createContext } from "react";
import './Form.css'


export const FormContext = createContext({
    declaredName: "",
    declaredAddress: "",
    declaredPhone: "",
    declaredEmail: ""

})


const FormularioCliente = ({ completoDatos }) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [phone, setPhone] = useState("");




    const submit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !address) {
             Swal.fire({
                 title: "Complete sus datos porfavor",
                 icon: "warning",
                 buttons: true,
                 dangerMode: true,

             })
        }
        else if (email !== checkEmail && email && checkEmail) {
             Swal.fire({
                 title: "No hay coincidencia",
                 html: "Intente nuevamente",
                 buttons: true,
                 dangerMode: true,
             })
        }

        else {
             Swal.fire({
                 title: "Datos Enviados",
                 icon: "success",
                 buttons: true,
             })
            completoDatos(
                name,
                address,
                phone,
                email
            )
        }
    }


    return (
        <div className='container-lg py-5'>
            <div className="tittle py-5">
                <h1>Complete sus datos para finalizar con la compra</h1>
            </div>
            <div className="row">
                <form method="post" action="" className="form">
                    <div>
                        <span className="formCards">Nombre Completo</span>
                        <input className="formInput" value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder="Nombre y Apellido" required />
                    </div>
                    <div>
                        <span className="formCards">Dirección</span>
                        <input className="formInput" value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Dirección" required/>
                    </div>
                    <div>
                        <span className="formCards">Email</span>
                        <input className="formInput" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                    </div>
                    <div>
                        <span className="formCards">Confirmar Email</span>
                        <input className="formInput" value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="email" placeholder="Confirme Email" required />
                    </div>
                    <div>
                        <span className="formCards">Teléfono</span>
                        <input className="formInput" value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Teléfono" />
                    </div>
                    <div>
                        <span className="formCards">Dejanos un comentario</span>
                        <textarea className="formInput" name="comments" rows="6" placeholder="Comentario" required></textarea>
                    </div>
                    <div className="text-center">
                        <button className="text-center mt-5" onClick={submit}>TERMINAR ORDEN DE COMPRA</button>
                    </div>
                </form>
            </div>
        </div>
   
    )
}


export default FormularioCliente