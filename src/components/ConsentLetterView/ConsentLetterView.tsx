/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import { Link } from "react-router-dom";
import axios from 'axios'

const ConsentLetterView = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/consentLetter')
            .then((res) => res.data.map((el: any, idx: number) => {
                el['key'] = idx + 1
                return el
            }))
            .then(ok => setData(ok))
    }, [])

    console.log(data)

    const columns = [
        {
            title: 'Nombre',
            key: 'name_cli_1',
            dataIndex: 'name_cli_1'
        },
        {
            title: 'Edad',
            key: 'age',
            dataIndex: 'age'
        },
        {
            title: 'Calle',
            key: 'street',
            dataIndex: 'street'
        },
        {
            title: 'Colonia',
            key: 'colony',
            dataIndex: 'colony'
        },
        {
            title: 'C.P.',
            key: 'postal_code',
            dataIndex: 'postal_code'
        },
        {
            title: 'Estado',
            key: 'state',
            dataIndex: 'state'
        },
        {
            title: 'Sexo',
            key: 'sex',
            dataIndex: 'sex'
        },
        {
            title: 'Accion',
            key: 'operation',
            render: (text: any, record: any) => <Link to={{
                pathname: '/consent_pdf',
                state: { phone: record.phone }
            }} >descargar</Link>
        }
    ]

    return <>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Registro Carta Consentimiento</h1>
        <Table columns={columns} dataSource={data} /></>
}
export default ConsentLetterView
