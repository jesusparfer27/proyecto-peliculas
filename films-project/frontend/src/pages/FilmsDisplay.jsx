import { useState, useContext, useEffect } from 'react';
import { FilmsContext } from '../Layout';
import '../css/filmdisplay.css';

const FilmsDisplay = () => {
    const [users, setUsers] = useState([]); // Inicializa users como un array vacío
    const [films, setFilms] = useState([]); // Inicializa films como un array vacío
    const [isVista, setIsVista] = useState(false); // Estado para manejar la visibilidad

    const { setFilms: setFilmsFromContext } = useContext(FilmsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/public/lib.json");
                const data = await response.json();

                setUsers(data.users || []); // Asegúrate de que data.users es un array
                setFilms(data.films || []); // Asegúrate de que data.films es un array
                setFilmsFromContext(data.films || []); // Asegúrate de actualizar el contexto correctamente
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setFilmsFromContext]);

    // Función para obtener el nombre del usuario por su id
    const getUserNameById = (id) => {
        const user = users.find(user => user.id === id);
        return user ? user.name : 'Unknown User';
    };

    // Función para manejar el clic del botón
    const handleEventListener = () => {
        if (!isVista) {
            setIsVista(true); // Cambia isVista a true solo si actualmente es false
        }
    };

    if (!films.length) {
        return <p>Cargando películas...</p>; // Mensaje de carga mientras se obtienen los datos
    }

    return (
        <main className='filmsDisplayContainer'>
            <h1 className='h1FilmsDisplay'>Bienvenido de nuevo!</h1>
            <ul>
                {films.map((film) => (
                    <li className='listFilms' key={film.id}>
                        <div className="filmItem">
                            <img
                                src={film.image}
                                alt={film.title}
                                className="filmImage"
                            />
                            <div className="filmDetails">
                                <h2>{film.title}</h2>
                                <p>Director: {film.director}</p>
                                <p>Year: {film.year}</p>
                                <p>Seen: {film.isSeen ? 'Yes' : 'No'}</p>
                                <p>User: {getUserNameById(film.idUser)}</p>
                                <button
                                    className='isVistaButton'
                                    onClick={handleEventListener} // Llama a handleEventListener al hacer clic
                                >
                                    {isVista ? 'Watch the movie' : 'Watch again'}
                                </button>

                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default FilmsDisplay;
