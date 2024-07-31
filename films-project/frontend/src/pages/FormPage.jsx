import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usa useNavigate para navegación programática
import '../css/formpage.css';

// Simulamos los datos de usuarios (en un caso real, estos vendrían de una API o archivo externo)
const users = [
    { id: "user-1", name: "Jesús", password: "1234!" },
    { id: "user-2", name: "Jordan", password: "1235!" }
];

const FormPage = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(""); // Estado para mostrar errores
    const [isButtonClicked, setIsButtonClicked] = useState(false); // Estado para controlar el clic del botón

    const navigate = useNavigate(); // Usamos useNavigate para la navegación

    // Función para manejar los cambios en el campo de correo
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Función para manejar los cambios en el campo de contraseña
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Función para manejar el clic en el botón
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del botón
        setIsButtonClicked(true); // Indica que el botón ha sido clickeado

        const user = users.find(user => user.name === email && user.password === password);
        if (user) {
            setError(""); // Borra el error si las credenciales son correctas
            navigate("/filmsDisplay"); // Navega al enlace si el formulario es válido
        } else {
            setError("Email o contraseña incorrectos"); // Muestra un mensaje de error si las credenciales son incorrectas
        }
    };

    return (
        <section className="sectionFormPage">
            <div className="flexContainer">
                <h1 className="h1FormPage">Haz Log In para ver las películas</h1>
                <div className="formInput">
                    <div className="inputContainer">
                        <h3 className="h3Input">Email:</h3>
                        <input
                            type="text"
                            className="inputEmail"
                            placeholder="Introduce tu nombre de usuario"
                            value={email}
                            onChange={handleEmailChange} // Actualiza el estado del email
                        />

                        <h3 className="h3Input">Password:</h3>
                        <input
                            type="password"
                            className="inputPassword"
                            placeholder="Introduce tu contraseña"
                            value={password}
                            onChange={handlePasswordChange} // Actualiza el estado de la contraseña
                        />
                        
                        {/* Muestra un mensaje de error solo si el botón ha sido clickeado y las credenciales son incorrectas */}
                        {isButtonClicked && error && <p className="errorMessage">{error}</p>}

                        <div className='buttonBlock'>
                            <button
                                className='buttonForm'
                                onClick={handleSubmit} // Maneja el clic del botón
                            >
                                Acceder
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormPage;
