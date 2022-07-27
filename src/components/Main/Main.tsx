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
                     <Link to="/consent_view">
                        <FileDoneOutlined style={{ fontSize: size }} />
                        Carta consentimiento vista
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                     <Link to="/lab_cabinet">
                        <ExperimentOutlined style={{ fontSize: size }} />
                        Laboratorio y gabinete
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                     <Link to="/clinic_hist">
                        <UndoOutlined style={{ fontSize: size }} />
                        Historia clínica
                     </Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                     <Link to="/prescription">
                        <FormOutlined style={{ fontSize: size }} />
                        Receta
                     </Link>
                  </Menu.Item>
               </Menu>
            </Col>
            <Col span={20} className="info-content">
               {children}
            </Col>
         </Row>
      </div>
   )
}

export default Main
