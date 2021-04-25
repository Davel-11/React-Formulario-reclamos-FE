import React, { useEffect, useState } from 'react'
import './Reports.scss'
import { getReportByDates } from '../../services/apiEndpoint'
import Graphs from './grafica/Graphs'

const Reports = () => {

    const [fechaClass, setFechaClass] = useState('fechas')
    const [regionClass, setRegionClass] = useState('region non')

    const handleTab = (state) => {
        if (state) {
            setFechaClass('fechas')
            setRegionClass('region non')
        } else {
            setFechaClass('fechas non')
            setRegionClass('region')
        }
    }

    const [from, setFrom] = useState(new Date())
    const [to, setTo] = useState(new Date())

    const [graphData, setGraphData] = useState(null)

    const [tableComp, setTableComp] = useState(null)
    const getByFechas = async () => {
        const reportResponse = await getReportByDates(from, to)

        reportResponse.json().then((resData) => {

            setGraphData(resData)

            if (resData && resData.length > 0) {
                setTableComp(
                    resData.map( (item) =>  (
                        <div className="table-data" key={item.id}>
                            <div className="c-id">{item.id}</div>
                            <div>{item.fecha}</div>
                            <div>{item.negocio}</div>
                            <div>{item.queja}</div>
                            <div>{item.peticion}</div>
                            <div>{item.region}</div>
                            <div>{item.sede}</div>
                        </div>
                    ))
                ) 
            }
        })
    }


    useEffect(() => {}, [tableComp])


    return(
        <div className="reports">

            <div className="tabs">
                <div className="tabs-title">
                    <h3 className="tab active-tab" onClick={() => handleTab(true)}>Reporte por Fechas</h3>
                    <h3 className="tab" onClick={() => handleTab(false)}>Grafica</h3>
                </div>

                <div className="tab-body">
                    <div className={fechaClass}>
                        <h4>Ingrese Rango de Fechas</h4>
                        <div className="rango-f">
                            
                            <input className="input-type" type="date" placeholder="Desde" value={from} onChange={(event) => setFrom(event.target.value)} />
                            <input className="input-type" type="date" placeholder="Hasta" value={to} onChange={(event) => setTo(event.target.value)} />
                            

                            <button className="next" type="button" onClick={() => getByFechas()}>
                                Generar reporte
                            </button>

                        </div>
                        <div className="tabla-f">
                            
                            <div className="final-table">
                                <div className="table-titles">
                                    <div className="c-id">id</div>
                                    <div>Fecha Ingreso</div>
                                    <div>Nombre Negocio</div>
                                    <div>Petición</div>
                                    <div>Queja</div>
                                    <div>Region</div>
                                    <div>Sede</div>
                                </div>

                                {tableComp}

                            </div>
                        </div>
                    </div>

                    <div className={regionClass}>
                        <Graphs data={graphData} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Reports