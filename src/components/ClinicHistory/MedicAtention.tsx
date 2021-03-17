import React from 'react'
import { Divider, Form, Input, Row, Col } from 'antd'

const MedicAtention: React.FC = () => {
   return (
      <div>
         <Divider>Datos sobre la atención Médica y esploración física</Divider>
         <h2>Signos Vitales</h2>
         <Row>
            <Col span={6}>
               <Form.Item
                  name="ta"
                  label={<p>TA</p>}
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
                  name="fc"
                  label={<p>FC</p>}
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
                  name="fr"
                  label={<p>FR</p>}
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
                  name="temp"
                  label={<p>TEMP</p>}
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
                  name="pulse"
                  label={<p>Pulso</p>}
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
                  name="blood_group"
                  label={<p>Gpo. sanguíneo</p>}
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
                  name="hb"
                  label={<p>HB</p>}
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
                  name="hto"
                  label={<p>HTO</p>}
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
                  name="plaquette"
                  label={<p>Plaquetas</p>}
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
                  name="glu"
                  label={<p>Glucosa</p>}
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
                  name="urea"
                  label={<p>UREA</p>}
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
                  name="creatinine"
                  label={<p>Creatinina</p>}
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
                  name="weigth"
                  label={<p>Peso</p>}
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
                  name="Size"
                  label={<p>Talla</p>}
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
            <Col span={12}>
               <Form.Item
                  name="exams"
                  label={
                     <p>
                        Exámenes de laboratorio y/o auxiliares de diagnóstico
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

export default MedicAtention
