import React from 'react'
import { Form, DatePicker, Divider, Row, Col, Input } from 'antd'

const Evolution: React.FC = () => {
   return (
      <div className="evolution-container">
         <Divider>Nota de evolución paciente ambulatoria</Divider>
         <Form.Item
            name="date_evolution"
            label={<p>Fecha y hora</p>}
            rules={[
               {
                  required: true,
                  message: 'Este campo es requerido!',
               },
            ]}
         >
            <DatePicker />
         </Form.Item>
         <h3>Exploración física</h3>
         <Row justify="space-between">
            <Col>
               <Form.Item
                  name="weight_fisic"
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
                  name="size_fisic"
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
                  name="tension_art"
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
                  name="frequency_card2"
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
                  name="frequency_resp2"
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
                  name="temperature2"
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
         <Row justify="space-between">
            <Col>
               <Form.Item
                  name="name_doc2"
                  label={<p>Nombre medico</p>}
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
                  name="ced_doc2"
                  label={<p>Cedúla medico</p>}
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
         <Form.Item
            name="res_lab"
            rules={[
               {
                  required: true,
                  message: 'Este campo es requerido!',
               },
            ]}
         >
            <Input addonBefore="Resultados de laboratorio" />
         </Form.Item>
      </div>
   )
}

export default Evolution
