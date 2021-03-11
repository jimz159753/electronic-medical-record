import React from 'react'
import { Menu, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './Main.scss'
import {
   HomeFilled,
   FolderOpenOutlined,
   FileDoneOutlined,
   FormOutlined,
   ExperimentOutlined,
   UndoOutlined,
   SmileOutlined,
   SafetyOutlined,
} from '@ant-design/icons'

const Main: React.FC = ({ children }) => {
   const size: string = '20px'

   return (
      <div>
         <Header />
         <Row>
            <Col span={4}>
               <Menu className="menu" mode="inline" theme="dark">
                  <Menu.Item key="1">
                     <Link to="/">
                        <HomeFilled style={{ fontSize: size }} />
                        Inicio
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                     <Link to="/triage">
                        <FolderOpenOutlined style={{ fontSize: size }} />
                        Triage
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                     <Link to="/consent">
                        <FileDoneOutlined style={{ fontSize: size }} />
                        Carta consentimiento
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                     <Link to="/prescription">
                        <FormOutlined style={{ fontSize: size }} />
                        Receta
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                     <Link to="/lab_cabinet">
                        <ExperimentOutlined style={{ fontSize: size }} />
                        Laboratorio y gabinete
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                     <div>
                        <UndoOutlined style={{ fontSize: size }} />
                        Historia clínica
                     </div>
                  </Menu.Item>
                  <Menu.Item key="7">
                     <div>
                        <SmileOutlined style={{ fontSize: size }} />
                        Sistema de referencia y contra referencia
                     </div>
                  </Menu.Item>
                  <Menu.Item key="8">
                     <div>
                        <SafetyOutlined style={{ fontSize: size }} />
                        Valoración enfermería
                     </div>
                  </Menu.Item>
               </Menu>
            </Col>
            <Col span={20}>{children}</Col>
         </Row>
      </div>
   )
}

export default Main
