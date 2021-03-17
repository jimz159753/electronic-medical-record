import React from 'react'
import { Form, Input, Divider, Row, Col } from 'antd'

const SysInterrogatory: React.FC = () => {
   return (
      <div>
         <Divider>Interrogatorio por aparatos y sistemas</Divider>
         <Row justify="space-between">
            <Col span={10}>
               <Form.Item
                  name="circulation"
                  label={<p>Circulatorio</p>}
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
            <Col span={10}>
               <Form.Item
                  name="digest"
                  label={<p>Digestivo</p>}
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
            <Col span={10}>
               <Form.Item
                  name="uri"
                  label={<p>Urinarias</p>}
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
            <Col span={10}>
               <Form.Item
                  name="nerv"
                  label={<p>nervioso</p>}
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
            <Col span={10}>
               <Form.Item
                  name="muscle"
                  label={<p>Musculo-Esqueletico</p>}
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
            <Col span={10}>
               <Form.Item
                  name="endo"
                  label={<p>Endocrino</p>}
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

export default SysInterrogatory
