import React, { useState, useEffect } from 'react'
import './MainBody.scss'
import { saveComplain, getDepList } from '../../services/apiEndpoint';

const MainBody = () => {

    const [depList, setDepList] = useState([])
    const [depValue, setDetValue ] = useState(0)
    const [muniComp, setMuniComp] = useState([]);
    const [sectionOne, setSectionOne] = useState('forma-ht')
    const [sectionSec, setSectionSec] = useState('forma-ht non-show')

    const onDepChange = (idDepto) => {
        console.log('IDdEPO', idDepto);
        setDetValue(idDepto)
        setMuniMenu(idDepto)
    }

    const setMuniMenu = (depId) => {
        let tmpList = []
        if (depList) {
            const foundObj =  depList.find((dep) => +dep.departamento.id === +depId)
            if(foundObj && foundObj.muniList) {
                tmpList = [...foundObj.muniList]
            }
        }

        createMuniList(tmpList)
    }
 
    const createMuniList = (list) => {
        setMuniComp(list.map((item) => (<option key={item.id} value={item.id}>{item.id + " - " + item.name}</option>)))
    }

    

    // CALL DEPARTAMENTO LIST // FILLS DEPLIST
    useEffect(() => {
        async function getDepoList() {
           const newDepList = await getDepList()
           
           newDepList.json().then((resp) =>
            setDepList(resp)
           )
        }

        getDepoList()

    }, [])

    // CREATE DEPO LIST
    const [depComp, setDepComp] = useState(null)
    useEffect(() => {
        console.log('depListdepList ', depList);
        setDepComp(
            depList.map((item) => 
                (<option key={item.departamento.id} value={item.departamento.id}>
                    {item.departamento.id + " - " + item.departamento.name}
                </option>)
            )
        )

    }, [depList])

    const sucursalList = [
        { id: 1, name: 'BAJA VERAPAZ - DIACO' },
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

        const postData = {
            name: name,
            socialReason: rsocial,
            nit: nit,

            departamento: depValue,
            idMunicipio: muniSel,
            address: dir,
            officeNumber: tel,

            idSede: suc,
            invoiceId: factura,
            complainDate: fecha,
            complainText: complain,
            requestText: sol,
        }

        savingComplain(postData)

        setName('')
        setRSocial('')
        setNit('')
        setDetValue(0)
        setMuniSel(0)
        setDir('')
        setTel('')
        setSuc(0)
        setFacutra('')
        setFecha('')
        setComplain('')
        setSol('')

        setSectionOne(' ')
        handleSections()
    }

    const savingComplain =  async (postData) => {
        const saveRes = await saveComplain(postData)
        console.log('saveRes is', saveRes);
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

                    <input className="input-type" type="number" placeholder="Teléfono" value={tel} onChange={(event) => setTel(event.target.value)} />
                                        
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

                    <input className="input-type" type="number" placeholder="Documento - No. de Factura" value={factura} onChange={(event) => setFacutra(event.target.value)} />

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
                        ) : null
                    }
                    
                </div>

            </form>

        </main>
    )
}

export default MainBody