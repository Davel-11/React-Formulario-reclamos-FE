import React, { useState } from 'react'
import './MainBody.scss'

const MainBody = () => {

    const [depValue, setDetValue ] = useState(0)
    const [muniComp, setMuniComp] = useState([]);
    const [sectionOne, setSectionOne] = useState('forma-ht')
    const [sectionSec, setSectionSec] = useState('forma-ht non-show')

    const onDepChange = (idDepto) => {
        setDetValue(idDepto)
        setMuniMenu(idDepto)
    }

    const setMuniMenu = (depId) => {
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
        setMuniComp(list.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>)))
    }

    const depList = 
    [
        {   
            id: 1, 
            name: 'Alta Verapaz', 
            municipios: [
            { id: 1, name: 'Cobán' },
            { id: 2, name: 'Santa Cruz Verapaz' },
            { id: 3, name: 'San Cristóbal Verapaz' },
            { id: 4, name: 'Tactic' },
            { id: 5, name: 'Tamahú' },
            { id: 6, name: 'Tucurú' },
            { id: 7, name: 'Panzós' },
            { id: 8, name: 'Senahú' },
            { id: 9, name: 'San Pedro Carchá' },
            { id: 10, name: 'San Juan Chamelco' },
            { id: 11, name: 'Lanquín' },
            { id: 12, name: 'Santa María Cahabón' },
            { id: 13, name: 'Chisec' },
            { id: 14, name: 'Chahal' },
            { id: 15, name: 'Fray Bartolomé de las Casas' },
            { id: 16, name: 'Santa Catalina La Tinta' },
            { id: 17, name: 'Raxruha' },
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
            municipios: [
                { id: 1, name: 'Camotán' },
                { id: 2, name: 'Chiquimula' },
                { id: 3, name: 'Concepción Las Minas' },
                { id: 4, name: 'Esquipulas' },
                { id: 5, name: 'Ipala' },
                { id: 6, name: 'San Juan Ermita' },
                { id: 7, name: 'Jocotán' },
                { id: 8, name: 'Olopa' },
                { id: 9, name: 'Quetzaltepeque' },
                { id: 10, name: 'San Jacinto' },
                { id: 11, name: 'San José la Arada' },
            ]
        },
        { 
            id: 5, 
            name: 'Guatemala', 
            municipios: [
                { id: 1, name: 'Guatemala' },
                { id: 2, name: 'Santa Catarina Pinula' },
                { id: 3, name: 'San José Pinula' },
                { id: 4, name: 'San José del Golfo' },
                { id: 5, name: 'Palencia' },
                { id: 6, name: 'Chinautla' },
                { id: 7, name: 'San Pedro Ayampuc' },
                { id: 8, name: 'Mixco' },
                { id: 9, name: 'San Pedro Sacatepequez' },
                { id: 10, name: 'San Juan Sacatepequez' },
                { id: 11, name: 'San Raymundo' },
                { id: 12, name: 'Chuarrancho' },
                { id: 13, name: 'Fraijanes' },
                { id: 14, name: 'Amatitlán' },
                { id: 15, name: 'Villa Nueva' },
                { id: 16, name: 'Villa Canales' },
                { id: 17, name: 'San Miguel Petapa' },
            ] 
        },
        { 
            id: 6, 
            name: 'El Progreso', 
            municipios: [
                { id: 1, name: 'Guastatoya' },
                { id: 2, name: 'Morazán' },
                { id: 3, name: 'San Agustín Acasaguastlan' },
                { id: 4, name: 'San Cristóbal Acasaguastlan' },
                { id: 5, name: 'El Jícaro' },
                { id: 6, name: 'Sansare' },
                { id: 7, name: 'Sanarate' },
                { id: 8, name: 'San Antonio La Paz' },
            ] 
        },
        {   
            id: 7, 
            name: 'Escuintla', 
            municipios: [
                { id: 1, name: 'Escuintla' },
                { id: 2, name: 'Santa Lucía Cotzumalguapa' },
                { id: 3, name: 'La Democracia' },
                { id: 4, name: 'Siquinalá' },
                { id: 5, name: 'Masagua' },
                { id: 6, name: 'Pueblo Nuevo Tiquisate' },
                { id: 7, name: 'La Gomera' },
                { id: 8, name: 'Guanagazapa' },
                { id: 9, name: 'Puerto de San José' },
                { id: 10, name: 'Iztapa' },
                { id: 11, name: 'Palín' },
                { id: 12, name: 'San Vicente Pacaya' },
                { id: 13, name: 'Nueva Concepción' },
            ] 
        },
        { 
            id: 8, 
            name: 'Huehuetenango', 
            municipios: [
                { id: 1, name: 'Huehuetenango' },
                { id: 2, name: 'Chiantla' },
                { id: 3, name: 'Malacatancito' },
                { id: 4, name: 'Cuilco' },
                { id: 5, name: 'Nentón' },
                { id: 6, name: 'San Pedro Necta' },
                { id: 7, name: 'Jacaltenango' },
                { id: 8, name: 'San Pedro Soloma' },
                { id: 9, name: 'San Ildelfonso Ixtahuac´n' },
                { id: 10, name: 'Santa Bárbara' },
                { id: 11, name: 'La Libertad' },
                { id: 12, name: 'La Democracia' },
                { id: 13, name: 'San Miguel Acatán' },
                { id: 14, name: 'San Rafael La Independencia' },
                { id: 15, name: 'Todos Santos Chuchcumatán' },
                { id: 16, name: 'San Juan Atitán' },
                { id: 17, name: 'Santa Eulalia' },
                { id: 18, name: 'San Mateo Ixtatán' },
                { id: 19, name: 'Colotenango' },
                { id: 20, name: 'San Sebastián Huehuetenango' },
                { id: 21, name: 'Tectitán' },
                { id: 22, name: 'Concepción Huista' },
                { id: 23, name: 'San Juan Ixcoy' },
                { id: 24, name: 'San Antonio Huista' },
                { id: 25, name: 'San Sebastián Coatán' },
                { id: 26, name: 'Santa Cruz Barillas' },
                { id: 27, name: 'Aguacatán' },
                { id: 28, name: 'San Rafael Petzal' },
                { id: 29, name: 'San Gaspar Ixchil' },
                { id: 30, name: 'Santiago Chimaltenango' },
                { id: 31, name: 'Santa Ana Huista' },
            ] 
        },
        { 
            id: 9, 
            name: 'Izabal', 
            municipios: [
                { id: 1, name: 'Puerto Barrios' },
                { id: 2, name: 'Livingston' },
                { id: 3, name: 'El Estor' },
                { id: 4, name: 'Morales' },
                { id: 5, name: 'Los Amates' },
            ]
        },
        { 
            id: 10, 
            name: 'Jalapa', 
            municipios: [
                { id: 1, name: 'Jalapa' },
                { id: 2, name: 'San Pedro Pinula' },
                { id: 3, name: 'San Luis Jilotepeque' },
                { id: 4, name: 'San Manuel Chaparrón' },
                { id: 5, name: 'San Carlos Alzatate' },
                { id: 6, name: 'Monjas' },
                { id: 7, name: 'Mataquescuintla' },
            ] 
        },
        { 
            id: 11, 
            name: 'Jutiapa', 
            municipios: [
                { id: 1, name: 'Jutiapa' },
                { id: 2, name: 'El Progreso' },
                { id: 3, name: 'Santa Catarina Mita' },
                { id: 4, name: 'Agua Blanca' },
                { id: 5, name: 'Asunción Mita' },
                { id: 6, name: 'Yupiltepeque' },
                { id: 7, name: 'Atescatempa' },
                { id: 8, name: 'Jerez' },
                { id: 9, name: 'El Adelanto' },
                { id: 10, name: 'Zapotitlán' },
                { id: 11, name: 'Comapa' },
                { id: 12, name: 'Jalpatagua' },
                { id: 13, name: 'Conguaco' },
                { id: 14, name: 'Moyuta' },
                { id: 15, name: 'Pasaco' },
                { id: 16, name: 'San José Acatempa' },
                { id: 17, name: 'Quezada' },
            ]
        },
        { 
            id: 12, 
            name: 'Petén', 
            municipios: [
                { id: 1, name: 'Flores' },
                { id: 2, name: 'San José' },
                { id: 3, name: 'San Benito' },
                { id: 4, name: 'San Andrés' },
                { id: 5, name: 'La Libertad' },
                { id: 6, name: 'San Francisco' },
                { id: 7, name: 'Santa Ana' },
                { id: 8, name: 'Dolores' },
                { id: 9, name: 'San Luis' },
                { id: 10, name: 'Sayaxche' },
                { id: 11, name: 'Melchor de Mencos' },
                { id: 12, name: 'Poptún' },
            ] 
        },
        {   
            id: 13, 
            name: 'Quetzaltenango', 
            municipios: [
                { id: 1, name: 'Quetzaltenango' },
                { id: 2, name: 'Salcajá' },
                { id: 3, name: 'Olintepeque' },
                { id: 4, name: 'San Carlos Sija' },
                { id: 5, name: 'Sibilia' },
                { id: 6, name: 'Cabrican' },
                { id: 7, name: 'Cajola' },
                { id: 8, name: 'San Miguel Siguilça' },
                { id: 9, name: 'San Juan Ostuncalco' },
                { id: 10, name: 'San Mateo' },
                { id: 11, name: 'Concepción Chiquirichapa' },
                { id: 12, name: 'San Martín Sacatepequez' },
                { id: 13, name: 'Almolonga' },
                { id: 14, name: 'Cantel' },
                { id: 15, name: 'Huitán' },
                { id: 16, name: 'Zunil' },
                { id: 17, name: 'Colomba' },
                { id: 18, name: 'San Francisco La Unión' },
                { id: 19, name: 'El Palmar' },
                { id: 20, name: 'Coatepeque' },
                { id: 21, name: 'Génova' },
                { id: 22, name: 'Flores Costa Cuca' },
                { id: 23, name: 'La Esperanza' },
                { id: 24, name: 'Palestina de los Altos' },
            ] 
        },
        { 
            id: 14, 
            name: 'Quiché', 
            municipios: [
                { id: 1, name: 'Santa Cruz del Quiche' },
                { id: 2, name: 'Chiche' },
                { id: 3, name: 'Chinique' },
                { id: 4, name: 'Zacualpa' },
                { id: 5, name: 'Chajul' },
                { id: 6, name: 'Santo Tomás Chichicstenango' },
                { id: 7, name: 'Patzité' },
                { id: 8, name: 'San Antonio Ilotenango' },
                { id: 9, name: 'San Pedro Jocopilas' },
                { id: 10, name: 'Cunén' },
                { id: 11, name: 'San Juan Cotzal' },
                { id: 12, name: 'Joyabaj' },
                { id: 13, name: 'Santa María Nebaj' },
                { id: 14, name: 'San Andrés Sajcabajá' },
                { id: 15, name: 'San Miguel Uspatán' },
                { id: 16, name: 'Sacapulas' },
                { id: 17, name: 'San Bartolomé Jocotenango' },
                { id: 18, name: 'Canilla' },
                { id: 19, name: 'Chicaman' },
                { id: 20, name: 'Playa Grnade - Ixcán' },
                { id: 21, name: 'Pachalúm' },
            ] 
        },
        { 
            id: 15, 
            name: 'Retalhuleu', 
            municipios: [
                { id: 1, name: 'Retalhuelu' },
                { id: 2, name: 'San Sebastián' },
                { id: 3, name: 'Santa Cruz Mulúa' },
                { id: 4, name: 'San Martín Zapotitlán' },
                { id: 5, name: 'San Felipe Retalhuleu' },
                { id: 6, name: 'San Andrés Villa Seca' },
                { id: 7, name: 'Champerico' },
                { id: 8, name: 'Nuevo San Carlos' },
                { id: 9, name: 'El Asintal' },
            ]
        },
        { 
            id: 16, 
            name: 'Sacatepequez', 
            municipios: [
                { id: 1, name: 'Antigua Guatemala' },
                { id: 2, name: 'Jocotenango' },
                { id: 3, name: 'Pastores' },
                { id: 4, name: 'Sumpango' },
                { id: 5, name: 'Santo Domingo Xenacoj' },
                { id: 6, name: 'Santiago Sacatepequez' },
                { id: 7, name: 'San Bartolomé Milpas Altas' },
                { id: 8, name: 'San Lucas Sacatepequez' },
                { id: 9, name: 'Santa Lucía Milpas Altas' },
                { id: 10, name: 'Magdalena Milpas Altas' },
                { id: 11, name: 'Santa María de Jesús' },
                { id: 12, name: 'Ciudad Vieja' },
                { id: 13, name: 'San Miguel Dueñas' },
                { id: 14, name: 'San Juan Alotenango' },
                { id: 15, name: 'San Antonio Aguas Calientes' },
                { id: 16, name: 'Santa Catarina Barahona' },
            ] 
        },
        { 
            id: 17, 
            name: 'San Marcos',
            municipios: [
                { id: 1, name: 'San Marcos' },
                { id: 2, name: 'San Pedro Sacatepéquez' },
                { id: 3, name: 'Comitancillo' },
                { id: 4, name: 'San Antonio Sacatepéquez' },
                { id: 5, name: 'San Miguel Ixtahuacan' },
                { id: 6, name: 'Concepción Tutuapa' },
                { id: 7, name: 'Tacaná' },
                { id: 8, name: 'Sibinal' },
                { id: 9, name: 'Tajumulco' },
                { id: 10, name: 'Tejutla' },
                { id: 11, name: 'San Rafael Pié de la Cuesta' },
                { id: 12, name: 'Nuevo Progreso' },
                { id: 13, name: 'El Tumbador' },
                { id: 14, name: 'San José El Rodeo' },
                { id: 15, name: 'Malacatán' },
                { id: 16, name: 'Catarina' },
                { id: 17, name: 'Ayutla' },
                { id: 18, name: 'Ocos' },
                { id: 19, name: 'San Pablo' },
                { id: 20, name: 'El Quetzal' },
                { id: 21, name: 'La Reforma' },
                { id: 22, name: 'Pajapita' },
                { id: 23, name: 'Ixchiguan' },
                { id: 24, name: 'San José Ojetenán' },
                { id: 25, name: 'San Cristóbal Cucho' },
                { id: 26, name: 'Sipacapa' },
                { id: 27, name: 'Esquipulas Palo Gordo' },
                { id: 28, name: 'Río Blanco' },
                { id: 29, name: 'San Lorenzo' },
            ]
        },
        { 
            id: 18, 
            name: 'Santa Rosa', 
            municipios: [
                { id: 1, name: 'Cuilapa' },
                { id: 2, name: 'Berberena' },
                { id: 3, name: 'San Rosa de Lima' },
                { id: 4, name: 'Casillas' },
                { id: 5, name: 'San Rafael Las Flores' },
                { id: 6, name: 'Oratorio' },
                { id: 7, name: 'San Juan TEcuaco' },
                { id: 8, name: 'Chiquimulilla' },
                { id: 9, name: 'Taxisco' },
                { id: 10, name: 'Santa María Ixhuatan' },
                { id: 11, name: 'Guazacapán' },
                { id: 12, name: 'Santa Cruz Naranjo' },
                { id: 13, name: 'Pueblo Nuevo Viñas' },
                { id: 14, name: 'Nueva Santa Rosa' },
            ]
        },
        { 
            id: 19, 
            name: 'Sololá', 
            municipios: [
                { id: 1, name: 'Sololá' },
                { id: 2, name: 'San José Chacaya' },
                { id: 1, name: 'Santa María Visitación' },
                { id: 3, name: 'Santa Lucía Utatlán' },
                { id: 4, name: 'Nahualá' },
                { id: 5, name: 'Santa Catarina Ixtahuacán' },
                { id: 6, name: 'Santa Clara La Laguna' },
                { id: 7, name: 'Concepción' },
                { id: 8, name: 'San Andrés Semetabaj' },
                { id: 9, name: 'Panajachel' },
                { id: 10, name: 'Santa Catarina Palopó' },
                { id: 11, name: 'San Antonio Palopó' },
                { id: 12, name: 'San Lucas Tolimán' },
                { id: 13, name: 'Santa Cruz La Laguna' },
                { id: 14, name: 'Sna Pablo La Laguna' },
                { id: 15, name: 'San Marcos La Laguna' },
                { id: 16, name: 'San Juan La Laguna' },
                { id: 17, name: 'San Pedro La Laguna' },
                { id: 18, name: 'Santiago Atitlán' },
            ] 
        },
        { 
            id: 20, 
            name: 'Suchitepequez', 
            municipios: [
                { id: 1, name: 'Mazatenango' },
                { id: 2, name: 'Cuyotenango' },
                { id: 3, name: 'San Francisco Zapotitlán' },
                { id: 4, name: 'San Bernardino' },
                { id: 5, name: 'San José El Ídolo' },
                { id: 6, name: 'Santo Domingo Suchitepequez' },
                { id: 7, name: 'San Lorenzo' },
                { id: 8, name: 'Samayac' },
                { id: 9, name: 'San Pablo Jocopilas' },
                { id: 10, name: 'San Antonio Suchitepéquez' },
                { id: 11, name: 'San Miguel Panán' },
                { id: 12, name: 'San Gabriel' },
                { id: 13, name: 'Chicacao' },
                { id: 14, name: 'Patulul' },
                { id: 15, name: 'Santa Bárbara' },
                { id: 16, name: 'San Juan Bautista' },
                { id: 17, name: 'Santo Tomás La Unión' },
                { id: 18, name: 'Zunilito' },
                { id: 19, name: 'Pueblo Nuevo Suchitepéquez' },
                { id: 20, name: 'Río Bravo' },
            ]
        },
        { 
            id: 21, 
            name: 'Totonicapán', 
            municipios: [
                { id: 1, name: 'Totonicapán' },
                { id: 2, name: 'San Cristóbal Totonicapán' },
                { id: 3, name: 'San Francisco El Alto' },
                { id: 4, name: 'San Andrés Xecul' },
                { id: 5, name: 'Momostenango' },
                { id: 6, name: 'Santa María Chiquimula' },
                { id: 7, name: 'Santa Lucía La Reforma' },
                { id: 8, name: 'San Bartolo Aguas Calientes' },
            ] 
        },
        { 
            id: 22, 
            name: 'Zacapa', 
            municipios: [
               { id: 1, name: 'Zacapa' },
               { id: 2, name: 'Estanzuela' },
               { id: 3, name: 'Río Hondo' },
               { id: 4, name: 'gualán' },
               { id: 5, name: 'Teculután' },
               { id: 6, name: 'Usumatlán' },
               { id: 7, name: 'Cabañas' },
               { id: 8, name: 'San Diego' },
               { id: 9, name: 'La Unión' },
               { id: 10, name: 'Huite' },
            ]
        },
    ]

    const depComp = depList.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>))

    const sucursalList = [
        { id: 1, name: 'DIACO- BAJA VERAPAZ' },
        { id: 2, name: 'CENTRAL' },
        { id: 3, name: 'CHIMALTENANGO - DIACO' },
        { id: 4, name: 'CHIQUIMULA - DIACO' },
        { id: 5, name: 'COBAN - DIACO' },
        { id: 6, name: 'DIACO EL PROGRESO' },
        { id: 7, name: 'ESCUINTLA - DIACO' },
        { id: 8, name: 'HUEHUETENANGO - DIACO' },
        { id: 9, name: 'IZABAL - DIACO' },
        { id: 10, name: 'JALAPA - DIACO' },
        { id: 11, name: 'JUTIAPA - DIACO' },
        { id: 12, name: 'MIXCO DIACO' },
        { id: 13, name: 'PETEN - DIACO' },
        { id: 14, name: 'QUETZALTENANGO - DIACO' },
        { id: 15, name: 'QUICHE - DIACO' },
        { id: 16, name: 'RETALHULEU - DIACO' },
        { id: 17, name: 'SACATEPEQUEZ-DIACO' },
        { id: 18, name: 'SAN MARCOS - DIACO' },
        { id: 19, name: 'SANTA ROSA-DIACO' },
        { id: 20, name: 'SEDE-DIACO-VILLA NUEVA' },
        { id: 21, name: 'SOLOLA - DIACO' },
        { id: 22, name: 'SUCHITEPEQUEZ - DIACO' },
        { id: 23, name: 'TOTONICAPAN - DIACO' },
        { id: 24, name: 'VILLA NUEVA - DIACO' },
        { id: 25, name: 'ZACAPA - DIACO' },
    ]

    const sucursalComp = sucursalList.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>))

    const handleSections = () => {
        if(sectionOne === 'forma-ht') {
            setSectionOne('forma-ht non-show')
            setSectionSec('forma-ht')
        } else {
            setSectionOne('forma-ht')
            setSectionSec('forma-ht non-show')
        }
    }

    const handleSubmit = () => {
        console.log('handleSubmit');

        console.log('name is ', name);
        console.log('rsocial is ', rsocial);
        console.log('nit is ', nit);

        console.log('depValue is ', depValue);
        console.log('muniSel is ', muniSel);
        console.log('dir is ', dir);

        console.log('telefono is ', tel);
        console.log('sucursar is ', suc);

        console.log('factura is ', factura);
        console.log('fecha is ', fecha);
        console.log('complain is ', complain);
        console.log('sol is ', sol);
    }

    const [name, setName] = useState('')
    const [rsocial, setRSocial] = useState('')
    const [nit, setNit] = useState('')
    
    const [muniSel, setMuniSel] = useState(0)
    const [dir, setDir] = useState('')

    const [tel, setTel] = useState('')
    const [suc, setSuc] = useState(0)

    const [factura, setFacutra] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [complain, setComplain] = useState('')
    const [sol, setSol] = useState('')

    return (
        <main className="main-body">
            <h1>Formulario de Reclamos</h1>

            <form className="forma">

                <div className={sectionOne}>
                    <h3>Datos de Empresa</h3>
                    <input className="input-type" type="text" placeholder="Nombre" value={name} onChange={(event) => setName(event.target.value)} />
                    <input className="input-type" type="text" placeholder="Razon Social" value={rsocial} onChange={(event) => setRSocial(event.target.value)} />
                    <input className="input-type" type="text" placeholder="NIT" value={nit} onChange={(event) => setNit(event.target.value)}  />

                    <h3>Dirección Empresa</h3>

                    <div className="customing-select">
                        <select value={depValue} onChange={(event) => onDepChange(event.target.value)} >
                            <option value="0" defaultValue>Seleccione Departamento</option>
                            {depComp}
                        </select>
                    </div>

                    <div className="customing-select">
                        <select value={muniSel} onChange={(event) => setMuniSel(event.target.value)} >
                            <option value="0" defaultValue>Seleccione Municipio</option>
                            {muniComp}
                        </select>
                    </div>

                    <input className="input-type" type="text" placeholder="Dirección*" value={dir} onChange={(event) => setDir(event.target.value)}/>
                    
                    <h3>Contacto de Empresa</h3>

                    <input className="input-type" type="text" placeholder="Teléfono" value={tel} onChange={(event) => setTel(event.target.value)} />
                                        
                    <h3>Sucursal</h3>

                    <div className="customing-select">
                        <select value={suc} onChange={(event) => setSuc(event.target.value)} >
                            <option value="0" defaultValue>Seleccione Sucursal</option>
                            {sucursalComp}
                        </select>
                    </div>
                </div>

                <div className={sectionSec}> 
                    <h3>Documentos de Empresa</h3>

                    <input className="input-type" type="text" placeholder="Documento - No. de Factura" value={factura} onChange={(event) => setFacutra(event.target.value)} />

                    <h3>Fecha</h3>
                    <input className="input-type" type="date" placeholder="Fecha" value={fecha} onChange={(event) => setFecha(event.target.value)} />

                    <h3>Queja</h3>
                    <textarea className="input-text" rows="7" value={complain} onChange={(event) => setComplain(event.target.value)} ></textarea>

                    <h3>Solicitud</h3>
                    <textarea className="input-text" rows="7" value={sol} onChange={(event) => setSol(event.target.value)} ></textarea>
                </div>

                <div className="button-line">
                    <button className="next" type="button" onClick={handleSections}>
                        { sectionSec === 'forma-ht' ? 'Regresar' : 'Continuar' }
                    </button>

                    { sectionSec === 'forma-ht' ? 
                        (
                            <button className="next is-red" type="button" onClick={handleSubmit}>
                                Enviar Queja
                            </button>
                        ) : 
                        (
                            <button className="next is-red" type="button" onClick={handleSubmit}>
                                Enviar Queja
                            </button>
                        )
                    }
                    
                </div>

            </form>

        </main>
    )
}

export default MainBody