/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class VirtualLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            libros: []
        }
    }

    componentDidMount() {
        axios.get(API+"?tabla=libro")
        .then(response => {
            this.setState({ libros: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { libros } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center pb-8 text-2xl my-5">Catálogo de Libros.</p>
                        <div className="flex flex-wrap items-center justify-center">
                            { libros.map(element => 
                                <div className="max-w-md w-full lg:flex" key={ element.id }>
                                    <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYDQiy5f0N6e2bPhKGKsadkeiR2gt2yoxJPjklOvZ8wUY984mX" alt={ element.titulo } />
                                    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="text-black font-bold text-xl mb-2">Libro: { element.titulo }</div>
                                            <p className="text-grey-darker text-base">Autor: { element.autor }</p>
                                            <p className="text-grey-darker text-base">Editorial: { element.editorial }</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-4" src="https://img2.freepng.es/20181124/poz/kisspng-vector-graphics-book-computer-icons-encapsulated-p-5bf9f29b3c8296.9918153415431072272479.jpg" alt="pic" />
                                            <div className="text-sm">
                                                <p className="text-black leading-none">Año: { element.año }</p>
                                                <p className="text-grey-dark">Pais: { element.pais }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default VirtualLibrary;