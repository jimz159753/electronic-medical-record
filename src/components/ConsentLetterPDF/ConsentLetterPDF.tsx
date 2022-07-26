/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({

    page: {
        width: '100%'
    },
    'section1': {

    },
    'section2': {
        marginTop: '200pt',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    'sectionSign': {
        width: '300pt',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'


    },
    text: {
        margin: '10pt'
    }
});

const ConsentLetterPDF = () => {
    const [data, setData] = useState<any>([])
    const phone = 3315027257
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/consentLetter/${phone}`)
            .then((res) => res.data)
            .then(ok => setData(ok))
    }, [])

    console.log('DATA', data)

    return (
        <Document>
            <Page size="C2" style={styles.page}>
                <View style={styles.section1}>{
                    data.name_cli_1 &&
                    <>
                        <Text style={styles.text}>Yo {data.name_cli_1} de {data.age} de edad {data.sex}. Con domicilio {data.street}, {data.number}, {data.colony} {data.postal_code},
                            {data.town} {data.state}. El {data.in_charge} de: {data.name_cli_2} identificandose con {data.name_cli_2}</Text>
                        <Text style={styles.text}>declaro:</Text>
                        <Text style={styles.text}>Que el Dr.(a) {data.name_doc}</Text>
                        <Text style={styles.text}>me ha explicado que es conveniente me(le) realicen los procedimientos que a continuación se
                            señalan: {data.procedures} Asi mismo, me ha informado en lenguaje claro y sencillo, que todo acto
                            médico, diagnóstico o terapéutico, sea o no quirúrgico, lleva implicito un riesgo de complicaciones menores o
                            mayores tales como hemorragia obstétrica, tromboembolismo pulmonar, infección del sitio quirúrgico e incluso de
                            mortalidad, que puede desviarse del estado previo del paciente y/o de efectos adversos impredicibles de los
                            medicamentos que se administran, las cuales pueden requerir tratamientos complementarios que podrían prolongar
                            la estancia hospitalaria. En particular manifiesto que me ha informado al respecto de los beneficios esperados y
                            de los riesgos del procedimiento en cuestión, así como de los riesgos correlativos a mi (su) caso, bajo protesta de
                            decir verdad de que he sido satisfactoriamente informado, por lo que autorizo al personal de este hospital para que
                            lleve a cabo el plan propuesto y/o Hospitalización. De igual forma autorizo al personal del hospital para que lleve a
                            cabo los procedimientos médico-quirúrgicos, de diagnóstico o terápeuticos necesarios de acuerdo a mis (sus)
                            condiciones de salud, así como la aplicación de las medidas que se requieran por alguna situación no sospechada de
                            contingencias y urgencias derivadas del acto autorizado, atendiendo al principio de libertad prescriptiva.
                            Atendiendo al principio de confidencialidad, designo a {data.designed} para que solo él (ella) reciba información
                            sobre mi estado de salud, diagnóstico, tratamiento y/o pronóstico.</Text>
                    </>
                }
                </View>
                {
                    <View style={styles.section2}>
                        data.name_cli_1 &&
                        <View style={styles.sectionSign}>
                            <Text >__________________________________</Text>
                            <Text style={styles.text}>{data.name_cli_1}</Text>
                        </View>
                        <View style={styles.sectionSign}>
                            <Text >__________________________________</Text>
                            <Text style={styles.text}>{data.name_doc}</Text>
                        </View>
                    </View>
                }
            </Page>
        </Document>
    )
}

export default ConsentLetterPDF
