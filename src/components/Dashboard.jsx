import foto from '../assets/xmas.png';

export default function Dashboard() {
    return (
        <>
            <header className="bg-white shadow">
                {/* Tu contenido del header */}
            </header>
            <main>
                <div className="mx-auto max-w-full">
                    <img
                        src={foto}
                        alt="Descripción de la imagen"
                        className="w-full h-auto object-cover rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </main>
        </>
    );
}
