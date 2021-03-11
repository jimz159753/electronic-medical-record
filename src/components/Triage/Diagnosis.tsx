import React from 'react'
import { Row, Col, Form, Input } from 'antd'

const Diagnosis: React.FC = () => {
   return (
      <div className="diagnosis-container">
         <Row justify="space-between">
            <Col span={10}>
               <h3>Integración diagnóstica</h3>
               <Form.Item name="integration1">
                  <Input placeholder="1" />
               </Form.Item>
               <Form.Item name="integration2">
                  <Input placeholder="2" />
               </Form.Item>
               <Form.Item name="integration3">
                  <Input placeholder="3" />
               </Form.Item>
               <Form.Item name="integration4">
                  <Input placeholder="4" />
               </Form.Item>
            </Col>
            <Col span={10}>
               <h3>Terapeutica empleada</h3>
               <Form.Item name="terapeautic1">
                  <Input placeholder="1" />
               </Form.Item>
               <Form.Item name="terapeautic2">
                  <Input placeholder="2" />
               </Form.Item>
               <Form.Item name="terapeautic3">
                  <Input placeholder="3" />
               </Form.Item>
               <Form.Item name="terapeautic4">
                  <Input placeholder="4" />
               </Form.Item>
            </Col>
         </Row>
         <Form.Item
            name="name_doc3"
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
         <Form.Item
            name="ced_doc3"
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
      </div>
   )
}

export default Diagnosis
