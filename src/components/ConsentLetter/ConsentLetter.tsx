import React from 'react'
import axios from 'axios'
import { Input, Radio, Button, Form } from 'antd'
import './ConsentLetter.scss'

const ConsentLetter: React.FC = () => {
   const [form] = Form.useForm()

   const addConsentLetter = (values: any) => {
      axios
         .post('http://localhost:5000/api/consentLetter/add', values)
         .then((res) => form.resetFields())
      form.resetFields()
   }
   return (
      <div className="consent-container">
         <h1>Carta consentimiento</h1>
         <Form form={form} onFinish={(values: any) => addConsentLetter(values)}>
            <div className="first-paragraph">
               <p>Yo</p>
               <Form.Item
                  name="name_cli_1"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="name" />
               </Form.Item>
               <p>de</p>
               <Form.Item
                  name="age"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="años" />
               </Form.Item>
               <p>de edad</p>
               <Form.Item
                  name="sex"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Radio.Group>
                     <Radio value={'masculino'}>Mas</Radio>
                     <Radio value={'femenino'}>Fem</Radio>
                  </Radio.Group>
               </Form.Item>
               <p>.Con domicilio en</p>
               <Form.Item
                  name="street"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="calle" />
               </Form.Item>
               <Form.Item
                  name="number"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="no." />
               </Form.Item>
               <Form.Item
                  name="colony"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="colonia" />
               </Form.Item>
               <Form.Item
                  name="postal_code"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="c.p." />
               </Form.Item>
               <Form.Item
                  name="town"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="municipio" />
               </Form.Item>
               <Form.Item
                  name="state"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="estado" />
               </Form.Item>
               <Form.Item
                  name="phone"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="teléfono" />
               </Form.Item>
               <Form.Item
                  name="in_charge"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Radio.Group>
                     <Radio value={'paciente'}>Paciente</Radio>
                     <Radio value={'responsable'}>Familiar</Radio>
                  </Radio.Group>
               </Form.Item>
               <p>responsable de:</p>
               <Form.Item
                  name="name_cli_2"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="nombre completo" />
               </Form.Item>
               <p>Identificandome con</p>
               <Form.Item
                  name="name_id"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="nombre completo" />
               </Form.Item>
            </div>
            <p>Declaro:</p>
            <div className="second-paragraph">
               <p>Que el Dr.(a)</p>
               <Form.Item
                  name="name_doc"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input placeholder="nombre completo" />
               </Form.Item>
               <p>
                  , me ha explicado que es conveniente me(le) realicen los
                  procedimientos que a continuación se señalan:
               </p>
               <Form.Item
                  name="procedures"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
               <p>
                  Asi mismo, me ha informado en lenguaje claro y sencillo, que
                  todo acto médico, diagnóstico o terapéutico, sea o no
                  quirúrgico, lleva implicito un riesgo de complicaciones
                  menores o mayores tales como hemorragia obstétrica,
                  tromboembolismo pulmonar, infección del sitio quirúrgico e
                  incluso de mortalidad, que puede desviarse del estado previo
                  del paciente y/o de efectos adversos impredicibles de los
                  medicamentos que se administran, las cuales pueden requerir
                  tratamientos complementarios que podrían prolongar la estancia
                  hospitalaria. En particular manifiesto que me ha informado al
                  respecto de los beneficios esperados y de los riesgos del
                  procedimiento en cuestión, así como de los riesgos
                  correlativos a mi (su) caso, bajo protesta de decir verdad de
                  que he sido satisfactoriamente informado, por lo que autorizo
                  al personal de este hospital para que lleve a cabo el plan
                  propuesto y/o Hospitalización. De igual forma autorizo al
                  personal del hospital para que lleve a cabo los procedimientos
                  médico-quirúrgicos, de diagnóstico o terápeuticos necesarios
                  de acuerdo a mis (sus) condiciones de salud, así como la
                  aplicación de las medidas que se requieran por alguna
                  situación no sospechada de contingencias y urgencias derivadas
                  del acto autorizado, atendiendo al principio de libertad
                  prescriptiva. Atendiendo al principio de confidencialidad,
                  designo a
               </p>
               <Form.Item
                  name="designed"
                  rules={[
                     {
                        required: true,
                        message: 'Este campo es requerido!',
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
               <p>
                  para que solo él (ella) reciba información sobre mi estado de
                  salud, diagnóstico, tratamiento y/o pronóstico.
               </p>
            </div>
            <Button htmlType="submit">Enviar</Button>
         </Form>
      </div>
   )
}

export default ConsentLetter
