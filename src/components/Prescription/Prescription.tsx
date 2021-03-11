import React from 'react'
import { Form, Input, Row, Col, Radio, DatePicker, Divider, Button } from 'antd'
import './Prescription.scss'

const Prescription: React.FC = () => {
   const [value, setValue] = React.useState('no')
   return (
      <div className="prescription-container">
         <h1>Receta</h1>
         <Form>
            <Row justify="end">
               <Col>
                  <Form.Item
                     name="date"
                     label={<p>Fecha</p>}
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <DatePicker />
                  </Form.Item>
               </Col>
            </Row>
            <Row justify="space-between">
               <Col span={6}>
                  <Form.Item
                     name="name_uni"
                     label={<p>Nombre de la unidad</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="code"
                     label={<p>Clave (CLUES)</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="address"
                     label={<p>Domicilio</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="exp_number"
                     label={<p>Número de expediente</p>}
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
            <Row>
               <Col span={6}>
                  <Form.Item
                     name="name"
                     label={<p>Nombre</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="age"
                     label={<p>Edad</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="time"
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Radio.Group value={value}>
                        <Radio value={'years'}>Años</Radio>
                        <Radio value={'months'}>Meses</Radio>
                        <Radio value={'days'}>Dias</Radio>
                        <Radio value={'hours'}>Horas</Radio>
                     </Radio.Group>
                  </Form.Item>
               </Col>
            </Row>
            <Divider>Datos del paciente</Divider>
            <Row justify="space-between">
               <Col span={6}>
                  <Form.Item
                     name="seg_number"
                     label={<p>Número de afiliación al seguro popular</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="code_seg"
                     label={<p>Clave</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="amount"
                     label={<p>Cantidad con letra</p>}
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
            <Row>
               <Col span={6}>
                  <Form.Item
                     name="generic_name"
                     label={<p>Nombre genérico</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="presentation"
                     label={<p>Presentación</p>}
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
            <Row>
               <Col>
                  <Form.Item
                     name="steps"
                     label={<p>Indicaciones</p>}
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
            <Row justify="space-between">
               <Col span={24}>
                  <Form.Item
                     name="amount_obtained"
                     label={<p>Cantidad recibida</p>}
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
                     name="name_doc"
                     label={<p>Nombre del médico</p>}
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
                     name="ced_pro"
                     label={<p>Cedula profesional</p>}
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
                     name="ced_esp"
                     label={<p>Cedula de especialidad</p>}
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
                     name="university"
                     label={<p>Universidad</p>}
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
                     name="schedule"
                     label={<p>Horario de atención</p>}
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
            <Button htmlType="submit">Enviar</Button>
         </Form>
      </div>
   )
}

export default Prescription
