import { useState, useContext, useEffect } from 'react';
import { FilmsContext } from '../Layout';
import '../css/filmdisplay.css';

const FilmsDisplay = () => {
    const [users, setUsers] = useState([]); // Inicializa users como un array vacío
    const [films, setFilms] = useState([]); // Inicializa films como un array vacío
    const [isVista, setIsVista] = useState({}); // Estado para manejar la visibilidad de cada película

    const { setFilms: setFilmsFromContext } = useContext(FilmsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/public/lib.json");
                const data = await response.json();

                setUsers(data.users || []); // Asegúrate de que data.users es un array
                setFilms(data.films || []); // Asegúrate de que data.films es un array
                setFilmsFromContext(data.films || []); // Asegúrate de actualizar el contexto correctamente

                // Inicializa el estado isVista con todas las películas no vistas
                const initialVistaState = {};
                data.films.forEach(film => {
                    initialVistaState[film.id] = false;
                });
                setIsVista(initialVistaState);

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
    const handleEventListener = (filmId) => {
        setIsVista(prevIsVista => ({
            ...prevIsVista,
            [filmId]: !prevIsVista[filmId] // Alterna el estado de visibilidad
        }));
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
                                <h2 className='h2Title'>{film.title}</h2>
                                <p className='pDirector'>Director: {film.director}</p>
                                <p className='pYear'>Year: {film.year}</p>
                                <p className='pSeen'>Seen: {isVista[film.id] ? 'Yes' : 'No'}</p> {/* Corrección aquí */}
                                <p className='pUser'>User: {getUserNameById(film.idUser)}</p>
                                <div className="divButton">
                                    <button
                                        className='isVistaButton'
                                        onClick={() => handleEventListener(film.id)} // Pasa el id de la película al manejar el clic
                                    >
                                        {isVista[film.id] ? 'Watch again' : 'Watch the movie'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default FilmsDisplay;
