import React from 'react'
import { Form, Input, Button } from 'antd'
import './Login.scss'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
   return (
      <div className="login-container">
         <div className="background">
            <h1>Expediente clínico eléctronico</h1>
            <Form>
               <Form.Item
                  name="username"
                  label="Nombre de usuario"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="username" />
               </Form.Item>
               <Form.Item
                  name="password"
                  label="Contraseña"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="password" />
               </Form.Item>
               <Form.Item>
                  <Link to="/triage">
                     <Button htmlType="submit" ghost>
                        Entrar
                     </Button>
                  </Link>
               </Form.Item>
            </Form>
         </div>
      </div>
   )
}

export default Login
