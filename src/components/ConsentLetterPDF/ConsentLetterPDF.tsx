/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'
import { useLocation } from 'react-router-dom'

const styles = StyleSheet.create({

    page: {
        width: '100%',
    },
    'title': {
        fontSize: '1cm',
        textAlign: 'center',
        margin: '30pt 0 60pt 0'
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
        margin: '10pt',
        fontWeight: 'thin'
    },
    'mark': { fontWeight: 'bold', backgroundColor: 'yellow' }
});

const ConsentLetterPDF = () => {
    const [data, setData] = useState<any>([])
    const { state }: any = useLocation()

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/consentLetter/${state.phone}`)
            .then((res) => res.data)
            .then(ok => setData(ok))
    }, [])


    return (
        <PDFViewer style={{ width: '100%', height: '100%' }}>

            <Document>
                <Page size="C2" style={styles.page}>
                    <View><Text style={styles.title}>Carta consentimiento</Text></View>
                    <View style={styles.section1}>{
                        data.name_cli_1 &&
                        <>
                            <Text style={styles.text}>Yo <Text style={styles.mark}>{data.name_cli_1}</Text> de <Text style={styles.mark}>{data.age}</Text> de edad <Text style={styles.mark}>{data.sex}</Text>. Con domicilio <Text style={styles.mark}>{data.street}, {data.number}, {data.colony} {data.postal_code},
                                {data.town} {data.state}</Text>. El <Text style={styles.mark}>{data.in_charge}</Text> de: <Text style={styles.mark}>{data.name_cli_2}</Text> identificandose con <Text style={styles.mark}>{data.name_cli_2}.</Text></Text>
                            <Text style={styles.text}>declaro:</Text>
                            <Text style={styles.text}>Que el Dr.(a) <Text style={styles.mark}>{data.name_doc}</Text></Text>
                            <Text style={styles.text}>me ha explicado que es conveniente me(le) realicen los procedimientos que a continuación se
                                señalan: <Text style={styles.mark}>{data.procedures}</Text> Asi mismo, me ha informado en lenguaje claro y sencillo, que todo acto
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
                                Atendiendo al principio de confidencialidad, designo a <Text style={styles.mark}>{data.designed}</Text> para que solo él (ella) reciba información
                                sobre mi estado de salud, diagnóstico, tratamiento y/o pronóstico.</Text>
                        </>
                    }
                    </View>
                    {
                        <View style={styles.section2}>
                            data.name_cli_1 &&
                            <View style={styles.sectionSign}>
                                <Text >__________________________________</Text>
                                <Text style={[styles.text, styles.mark]}>{data.name_cli_1}</Text>
                            </View>
                            <View style={styles.sectionSign}>
                                <Text >__________________________________</Text>
                                <Text style={[styles.text, styles.mark]}>{data.name_doc}</Text>
                            </View>
                        </View>
                    }
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default ConsentLetterPDF
