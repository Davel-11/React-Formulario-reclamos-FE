import React, { useState } from 'react'
import './MainBody.scss'

const MainBody = () => {

    const [depValue, setDetValue ] = useState(0)
    const [muniComp, setMuniComp] = useState([]);

    const onDepChange = (idDepto) => {
        setDetValue(idDepto)
        setMuniMenu(idDepto)
    }

    const setMuniMenu = (depId) => {
        console.log('dep id is', depId);
        let tmpList = []
        if (depList) {
            const foundObj =  depList.find((dep) => +dep.id === +depId)
            if(foundObj && foundObj.municipios) {
                tmpList = [...foundObj.municipios]
            }
        }

        createMuniList(tmpList)
    }

    
    const createMuniList = (list) => {
        console.log('temp list is', list);
        setMuniComp(list.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>)))
    }

    const depList = 
    [
        {   
            id: 1, 
            name: 'Alta Verapaz', 
            municipios: [
            { id: 1, name: 'Guatemala' },
            { id: 2, name: 'Cobán' },
            { id: 3, name: 'Santa Cruz Verapaz' },
            { id: 4, name: 'San Cristóbal Verapaz' },
            { id: 5, name: 'Tactic' },
            { id: 6, name: 'Tamahú' },
            { id: 7, name: 'Tucurú' },
            { id: 8, name: 'Panzós' },
            { id: 9, name: 'Senahú' },
            { id: 10, name: 'San Pedro Carchá' },
            { id: 11, name: 'San Juan Chamelco' },
            { id: 12, name: 'Lanquín' },
            { id: 13, name: 'Santa María Cahabón' },
            { id: 14, name: 'Chisec' },
            { id: 15, name: 'Chahal' },
            { id: 16, name: 'Fray Bartolomé de las Casas' },
            { id: 17, name: 'Santa Catalina La Tinta' },
            { id: 18, name: 'Raxruha' },
        ]},
        
        {   
            id: 2, 
            name: 'Baja Verapaz',
            municipios: [
                { id: 1, name: 'Cubulco' },
                { id: 2, name: 'Santa Cruz el Chol' },
                { id: 3, name: 'Granados' },
                { id: 4, name: 'Purulhá' },
                { id: 5, name: 'Rabinal' },
                { id: 6, name: 'Salamá' },
                { id: 7, name: 'San Miguel Chicaj' },
                { id: 8, name: 'San Jerónimo' },
        ]},
        { 
            id: 3, 
            name: 'Chimaltenago' ,
            municipios: [
                { id: 1, name: 'Acatenango' },
                { id: 2, name: 'Chimaltenango' },
                { id: 3, name: 'El Tejar' },
                { id: 4, name: 'Parramos' },
                { id: 5, name: 'Patzicía' },
                { id: 6, name: 'Patzún' },
                { id: 7, name: 'Pochuta' },
                { id: 8, name: 'San Andrés Itzapa' },
                { id: 9, name: 'San José Poaquíl' },
                { id: 10, name: 'San Juan Comalapa' },
                { id: 11, name: 'San Martín Jilotepeque' },
                { id: 12, name: 'Santa Apolonia' },
                { id: 13, name: 'Santa Cruz Balanyá' },
                { id: 14, name: 'Tecpán' },
                { id: 15, name: 'Yepocapa' },
                { id: 16, name: 'Zaragoza' },
            ]
        },
        { 
            id: 4, 
            name: 'Chiquimula',
            municipios: []
        },
        { 
            id: 5, 
            name: 'Guatemala', 
            municipios: [] 
        },
        { 
            id: 6, 
            name: 'El Progreso', 
            municipios: [] 
        },
        {   
            id: 7, 
            name: 'Escuintla', 
            municipios: [] 
        },
        { 
            id: 8, 
            name: 'Huehuetenango', 
            municipios: [] 
        },
        { 
            id: 9, 
            name: 'Izabal', 
            municipios: [] 
        },
        { 
            id: 10, 
            name: 'Jalapa', 
            municipios: [] 
        },
        { 
            id: 11, 
            name: 'Jutiapa', 
            municipios: [] 
        },
        { 
            id: 12, 
            name: 'Petén', 
            municipios: [] 
        },
        {   
            id: 13, 
            name: 'Quetzaltenango', 
            municipios: [] 
        },
        { 
            id: 14, 
            name: 'Quiché', 
            municipios: [] 
        },
        { 
            id: 15, 
            name: 'Retalhuleu', 
            municipios: [] 
        },
        { 
            id: 16, 
            name: 'Sacatepequez', 
            municipios: [] 
        },
        { 
            id: 17, 
            name: 'San Marcos', 
            municipios: [] 
        },
        { 
            id: 18, 
            name: 'Santa Rosa', 
            municipios: [] 
        },
        { 
            id: 19, 
            name: 'Sololá', 
            municipios: [] 
        },
        { 
            id: 20, 
            name: 'Suchitepequez', 
            municipios: [] 
        },
        { 
            id: 21, 
            name: 'Totonicapán', 
            municipios: [] 
        },
        { 
            id: 22, 
            name: 'Zacapa', 
            municipios: [] 
        },
    ]

    const depComp = depList.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>))


    return (
        <main className="main-body">
            <h1>Formulario de Reclamos</h1>

            <form className="forma">

                <h3>Datos de Empresa</h3>
                <input className="input-type" type="text" placeholder="Nombre" />
                <input className="input-type" type="text" placeholder="NIT" />

                <h3>Dirección Empresa</h3>

                <div className="customing-select">
                    <select value={depValue} onChange={(event) => onDepChange(event.target.value)}>
                        <option value="0" defaultValue>Seleccione Departamento</option>
                        {depComp}
                    </select>
                </div>

                <div className="customing-select">
                    <select>
                        <option value="0" defaultValue>Seleccione Municipio</option>
                        {muniComp}
                    </select>
                </div>

                <input className="input-type" type="text" placeholder="Dirección" />
                
                <input className="input-type" type="text" placeholder="Municipio" />

            </form>

        </main>
    )
}

export default MainBody