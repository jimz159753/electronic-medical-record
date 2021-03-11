import React from 'react'
import { Table } from 'antd'

const TableTriage: React.FC = () => {
   const columns: any = [
      {
         title: 'Tipo de urgencia',
         dataIndex: 'urgency',
      },
      {
         title: 'Nivel I (rojo) Emergencia riesgo vital',
         dataIndex: 'level_I',
      },
      {
         title: 'Nibel II (amarillo) Paciente agudo crítico',
         dataIndex: 'level_II',
      },
      {
         title: 'Nivel III (verde) No crítico',
         dataIndex: 'level_III',
      },
   ]

   const data: any = [
      {
         key: '1',
         urgency: 'Estado de conciencia',
         level_I: 'Inconsciente',
         level_II: 'Desorientado',
         level_III: 'Consciente',
      },
      {
         key: '2',
         urgency: 'Presión arterial',
         level_I: 'TA Mayor a 160/110 o Menor 80/40',
         level_II: 'TA Mayor a 140/90 o Menor 90/60',
         level_III: 'Menor a 139/89 o Mayor 90/60',
      },
      {
         key: '3',
         urgency: 'Frecuencia cardiaca',
         level_I: 'Mayor de 120 o Menor de 50 x',
         level_II: 'Entre 100 y 119 y Entre 50 y 59 x',
         level_III: 'Entre 60 y 100 x',
      },
      {
         key: '4',
         urgency: 'Frecuencia respiratoria',
         level_I: 'Mayor de 30 o Menor de 12',
         level_II: 'Entre 25 y 30 y Entre 12 y 15 x',
         level_III: 'Entre 16 y 24 x',
      },
      {
         key: '5',
         urgency: 'Pulsos perifericos',
         level_I: 'Impersiptibles',
         level_II: 'Debiles',
         level_III: 'Normales',
      },
      {
         key: '6',
         urgency: 'Temperatura',
         level_I: 'Mayor de 40 o Menor de 35 C',
         level_II: 'Mayor de 38 o Menor de 36 C',
         level_III: 'Entre 36 y 38 C',
      },
      {
         key: '7',
         urgency: 'Datos de vaso espasmo',
         level_I: 'Epigastralgia, Amaurosis, Crisis, Convulcivas',
         level_II: 'Acufenos, Fosfenos, Edema Generalizado',
         level_III: 'Cafaela Ocaciona, Edema de Miembros inferiores',
      },
      {
         key: '8',
         urgency: 'Sangrado vaginal',
         level_I: 'Abundante',
         level_II: 'Moderado',
         level_III: 'Leve o Ausente',
      },
      {
         key: '9',
         urgency: 'Salida liquido transvaginal',
         level_I: '=',
         level_II: 'Abundante',
         level_III: 'Leve o Ausente',
      },
      {
         key: '10',
         urgency: 'Movimientos fetales',
         level_I: '=',
         level_II: 'Ausentes',
         level_III: 'Disminuidos o Presentes',
      },
      {
         key: '11',
         urgency: 'Tipo de atención',
         level_I: 'Atención Inmediata',
         level_II: 'Atención en menos de 10 min',
         level_III: 'Atencion antes de 30 min',
      },
   ]
   return (
      <Table
         columns={columns}
         dataSource={data}
         pagination={{ pageSize: 15, hideOnSinglePage: true }}
         bordered
      />
   )
}

export default TableTriage
