/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow mx-64">
                <div className="relative text-gray-600 block mt-4 lg:inline-block lg:mt-0 mr-4">
                    <input type="search" name="search" placeholder="Buscar Libro" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                       
                    </button>
                </div>
                <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    Ayuda
                </a>
            </div>
            <div>
                <Link to="/">
                    <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                      Salir
                    </button>
                </Link>
            </div>
        </div>
    </nav>
)

export default Header;