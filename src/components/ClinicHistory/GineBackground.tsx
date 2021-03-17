import React from 'react'
import { Form, Divider, Input, DatePicker, Radio, Row, Col } from 'antd'

const GineBackground: React.FC = () => {
   return (
      <div>
         <Divider>Antecedentes Gineco-Obstetricos</Divider>
         <Row>
            <Col span={6}>
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
            <Col span={6}>
               <Form.Item
                  name="previous_quirurgic"
                  label={<p>con ciclos regulares</p>}
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
                  name="rythmo"
                  label={<p>ritmo</p>}
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
            <Col span={6}>
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
            <Col span={6}>
               <Form.Item
                  name="ame_weeks"
                  label={<p>semanas de amenorrea</p>}
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
            <Col span={6}>
               <Form.Item
                  name="no_sex_part"
                  label={<p>Número de parejas sexuales</p>}
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
            <Col span={6}>
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
            <Col span={6}>
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
            <Col span={6}>
               <Form.Item
                  name="c"
                  label={<p>C</p>}
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

export default GineBackground
