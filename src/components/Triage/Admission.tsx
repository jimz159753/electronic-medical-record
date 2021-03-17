import React from 'react'
import { Divider, Input, Form, Row, Col, Radio, DatePicker } from 'antd'

const Admission: React.FC = () => {
   const [value, setValue] = React.useState('no')

   /* const onChange = (e) => {
      console.log('radio checked', e.target.value)
      setValue(e.target.value)
   } */
   return (
      <div className="admission-container">
         <Divider>Historia Clinica Obsterica En Admisión Contitnua</Divider>
         <h3>Antecedentes Personales No Patologicos:</h3>
         <Row justify="space-between">
            <Col>
               <Form.Item
                  name="background"
                  label={<p>Antecedentes familiares:</p>}
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
                  name="group_rh"
                  label={<p>Grupo y RH</p>}
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
                  name="drugs"
                  label={<p>Tabaquismo, Drogas</p>}
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
                  name="vdrl"
                  label={<p>VDRL(Resultado,fecha)</p>}
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
                  name="vih"
                  label={<p>Prueba Rapida de VIH</p>}
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
         <h3>Antecedentes Personales Patologicos:</h3>
         <Row justify="space-between">
            <Col>
               <Form.Item
                  name="med_hip_tir_aler"
                  label={
                     <p>
                        Medicos(Diabetes, Hipertensión, Enf. Tiroidea,
                        Alergicos, Otros)
                     </p>
                  }
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
                  name="quir"
                  label={<p>Quirúrgicos</p>}
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
                  name="tranfusion"
                  label={<p>Transfuciones</p>}
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
                  name="hospitalizations"
                  label={<p>Hospitalizaciones </p>}
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
         <h3>Antecedentes Gineco-Obstetricos:</h3>
         <Row justify="space-between">
            <Col>
               <Form.Item
                  name="menarca"
                  label={<p>Menarca</p>}
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
                  name="cicle"
                  label={<p>con ciclos regulares</p>}
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Radio.Group value={value}>
                     <Radio value={'si'}>Si</Radio>
                     <Radio value={'no'}>No</Radio>
                  </Radio.Group>
               </Form.Item>
            </Col>
            <Col>
               <Form.Item
                  name="rhythm"
                  label={<p>Ritmo</p>}
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
                  name="fum"
                  label={<p>FUM</p>}
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
            <Col>
               <Form.Item
                  name="fpp"
                  label={<p>FPP</p>}
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
            <Col>
               <Form.Item
                  name="sem_amen"
                  label={<p>Semanas de amenorrea</p>}
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
                  name="ivsa"
                  label={<p>IVSA</p>}
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
                  name="sex_partn"
                  label={<p>Numero de parejas sexuales</p>}
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
                  name="g"
                  label={<p>G</p>}
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
                  name="p"
                  label={<p>P</p>}
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
                  name="a"
                  label={<p>A</p>}
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
                  name="c"
                  label={
                     <p>
                        Antecedentes de embarazos
                        previos(PREECLAMPSIA,HEMORRAGICA, INFECCION PUERPERAL,
                        OBITOS, MORTINATOS, OTROS)
                     </p>
                  }
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
      </div>
   )
}

export default Admission
