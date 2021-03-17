import React from 'react'
import { Form, Radio, Input, Button, Row, Col } from 'antd'
import './ClinicHistory.scss'
import GineBackground from './GineBackground'
import SysInterrogatory from './SysInterrogatory'
import MedicAtention from './MedicAtention'

const ClinicHistory: React.FC = () => {
   return (
      <div className="clinic-history-container">
         <h1>Historia clínica</h1>
         <Form>
            <Row>
               <Col span={6}>
                  <Form.Item
                     name="int"
                     label={
                        <p className="first-paragraph">
                           Interrogatorio directo
                        </p>
                     }
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Radio.Group>
                        <Radio value={'yes'}>si</Radio>
                        <Radio value={'no'}>no</Radio>
                     </Radio.Group>
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     name="who"
                     label={<p>Quien</p>}
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
                     name="name"
                     label={<p>Nombre completo</p>}
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
                     name="birthday"
                     label={<p>Fecha de nacimiento</p>}
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
                     name="sex"
                     label={<p>Sexo</p>}
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Radio.Group>
                        <Radio value={'male'}>masculino</Radio>
                        <Radio value={'female'}>femenino</Radio>
                     </Radio.Group>
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     name="ocupation"
                     label={<p>Ocupación</p>}
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
                     name="motive"
                     label={<p>Motivo de consulta</p>}
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
                     name="evolution"
                     label={<p>Evolución del padecimiento</p>}
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
                     name="sufferings"
                     label={<p>Antecedentes heredo familiares</p>}
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
                     name="personal_back"
                     label={<p>Antecedentes personales</p>}
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
                     name="previous_hosp"
                     label={<p>Hospitalizaciones previas</p>}
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Radio.Group>
                        <Radio value={'yes'}>si</Radio>
                        <Radio value={'no'}>no</Radio>
                     </Radio.Group>
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     name="previous_hosp_esp"
                     label={<p>Especificar</p>}
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
                     name="previous_quirurgic"
                     label={<p>Antecedentes quirurgicos</p>}
                     rules={[
                        {
                           required: true,
                           message: 'Este campo es requerido!',
                        },
                     ]}
                  >
                     <Radio.Group>
                        <Radio value={'yes'}>si</Radio>
                        <Radio value={'no'}>no</Radio>
                     </Radio.Group>
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     name="previous_hosp_esp"
                     label={<p>Especificar</p>}
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
            <GineBackground />
            <SysInterrogatory />
            <MedicAtention />
            <Button htmlType="submit">Enviar</Button>
         </Form>
      </div>
   )
}

export default ClinicHistory
