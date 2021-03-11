import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import './Triage.scss'
import TableTriage from './TableTriage'
import Admission from './Admission'
import Evolution from './Evolution'
import Diagnosis from './Diagnosis'

const Triage: React.FC = () => {
   return (
      <div className="triage-container">
         <div>
            <h1>TRIAGE</h1>
            <p>Ficha de identificación</p>
         </div>
         <div>
            <Form>
               <Row justify="end">
                  <Form.Item
                     name="date"
                     label="Fecha y hora"
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Input />
                  </Form.Item>
               </Row>
               <Row justify="space-between">
                  <Col>
                     <Form.Item
                        name="name"
                        label="Nombre"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="birthday"
                        label="Fecha de nacimiento"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="address"
                        label="Domicilio"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                  </Col>
                  <Col>
                     <Form.Item
                        name="name"
                        label="Nombre"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="birthday"
                        label="Fecha de nacimiento"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="address"
                        label="Domicilio"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                  </Col>
                  <Col>
                     <Form.Item
                        name="name"
                        label="Nombre"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="birthday"
                        label="Fecha de nacimiento"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="address"
                        label="Domicilio"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                  </Col>
               </Row>
               <TableTriage />
               <Row justify="space-between">
                  <Col>
                     <Form.Item
                        name="weight"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input addonBefore="Peso" />
                     </Form.Item>
                  </Col>
                  <Col>
                     <Form.Item
                        name="size"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input addonBefore="Talla" />
                     </Form.Item>
                  </Col>
                  <Col>
                     <Form.Item
                        name="blood_pressure"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input addonBefore="Tensión arterial" />
                     </Form.Item>
                  </Col>
                  <Col>
                     <Form.Item
                        name="frequency_card"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input addonBefore="Frecuencia cardiaca" />
                     </Form.Item>
                  </Col>
                  <Col>
                     <Form.Item
                        name="frequency_resp"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input addonBefore="Frecuencia respiratoria" />
                     </Form.Item>
                  </Col>
                  <Col>
                     <Form.Item
                        name="temperature"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input addonBefore="Temperatura" />
                     </Form.Item>
                  </Col>
               </Row>
               <Form.Item
                  name="evolution"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input addonBefore="Evolución del paciente" />
               </Form.Item>
               <Row justify="space-between">
                  <Col>
                     <Form.Item
                        name="name_doc"
                        label="Nombre del medico"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="name_nurse"
                        label="Nombre enfermera"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                  </Col>
                  <Col>
                     <Form.Item
                        name="ced_doc"
                        label="Cedula del medico"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                     <Form.Item
                        name="ced_nurse"
                        label="Cedula enfermera"
                        rules={[
                           {
                              required: true,
                              message: 'Este campo es requerido!',
                           },
                        ]}
                     >
                        <Input />
                     </Form.Item>
                  </Col>
               </Row>
               <Admission />
               <Evolution />
               <Diagnosis />
               <Button htmlType="submit">Enviar</Button>
            </Form>
         </div>
      </div>
   )
}

export default Triage
