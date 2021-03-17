import React from 'react'
import { Form, Input, Row, Col, Radio, DatePicker, Divider, Button } from 'antd'
import './LabCabinet.scss'

const LabCabinet: React.FC = () => {
   const [value, setValue] = React.useState('')
   return (
      <div className="lab-cabinet-container">
         <h1>Laboratorio y Gabinete</h1>
         <Form>
            <Row>
               <Col span={6}>
                  <Form.Item
                     name="uni"
                     label={<p>Unidad</p>}
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
                     name="name_cli"
                     label={<p>Nombre del paciente</p>}
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
            <Row justify="space-between">
               <Col span={6}>
                  <Form.Item
                     name="birdth_date"
                     label={<p>Fecha de nacimiento</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="age_cli"
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
                     name="age_cli"
                     label={<p>Edad</p>}
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Radio.Group value={value}>
                        <Radio value={'male'}>Masculino</Radio>
                        <Radio value={'female'}>Femenino</Radio>
                     </Radio.Group>
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     name="int_no"
                     label={<p>No. de causes</p>}
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
                     name="membership_no"
                     label={<p>No. de afiliación popular</p>}
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
               <Col span={4}>
                  <Form.Item
                     name="validity_date"
                     label={<p>Vigencia de poliza del seguro popular</p>}
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
               <Col span={6}>
                  <Form.Item
                     name="service"
                     label={<p>Servicio</p>}
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
                     name="bed_no"
                     label={<p>No. de cama</p>}
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
               <Col span={8}>
                  <Form.Item
                     name="estudies_no"
                     label={<p>No. de estudios solicitados</p>}
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
               <Col span={24}>
                  <Form.Item
                     name="diagnostic"
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Input addonBefore="Diagnóstico" />
                  </Form.Item>
               </Col>
            </Row>

            <Divider>Estudios solicitados</Divider>
            <Row>
               <Col span={24}>
                  <Form.Item
                     name="req_studies"
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Radio.Group value={value}>
                        <Radio value={'causes'}>Causas</Radio>
                        <Radio value={'fpgc'}>FPGC</Radio>
                        <Radio value={'smsxxi'}>SMSXXI</Radio>
                     </Radio.Group>
                  </Form.Item>
               </Col>
               <Col span={24}>
                  <Form.Item
                     name="details"
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
            <Divider>
               Todos los estudios solicitados anteriormente son de acuerdo a los
               diagnosticos del cause
            </Divider>
            <Form.Item
               name="population"
               rules={[
                  {
                     required: true,
                     message: 'Este campo es requerido!',
                  },
               ]}
            >
               <Input placeholder="Población abierta (ramo 33)" />
            </Form.Item>
            <Button htmlType="submit">Enviar</Button>
         </Form>
      </div>
   )
}

export default LabCabinet
