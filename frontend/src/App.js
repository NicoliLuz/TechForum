import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicio from './componentes/PaginaInicio';
import Ramificacoes from './componentes/Ramificacoes';
import MediaSalarial from './componentes/MediaSalarial';
import Empresas from './componentes/Empresas';
import Softskill from './componentes/Softskill';
import Automacao from './componentes/Automacao';
import Sobre from './componentes/Sobre';

function App() {
    const [pagina, setPagina] = useState('inicio');

    const renderPagina = () => {
        switch (pagina) {
            case 'inicio':
                return <PaginaInicio setPagina={setPagina} />;
            case 'ramificacoes':
                return <Ramificacoes setPagina={setPagina} />;
            case 'mediaSalarial':
                return <MediaSalarial setPagina={setPagina} />;
            case 'empresas':
                return <Empresas setPagina={setPagina} />;
            case 'softskill':
                return <Softskill setPagina={setPagina} />;
            case 'automacao':
                return <Automacao setPagina={setPagina} />;
            case 'sobre':
                return <Sobre setPagina={setPagina} />;
            default:
                return <PaginaInicio />;
        }
    };

    return (
        <div>
            {renderPagina()}
        </div>
    );


    /*return (
        <Router>
            <div>
                <Routes>
                    <Route path="/signSignUp" exact element={<SignSignUp />} />
                    {/* Adicione outras rotas conforme necessário /}
                </Routes>
            </div>
        </Router>
    );*/
}

export default App