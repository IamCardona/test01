import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { Form, Input, Button, Alert, message, Spin } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import Link from 'next/link'

import firebase from '../../firebaseConfig'

export default function() {
    const router = useRouter()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const onFinish = async values => {
        const { email } = values;
        setError(false)
        setLoading(true)
        firebase.auth().sendPasswordResetEmail(email).then((data) => {
            setLoading(false)
            success()
            setTimeout(() => {
                router.push('/user/login')
            }, 2000)
        }).catch((e) => {
            setError(true)
                setLoading(false)    
        })      
      };

      const success = () => {
        message.success('Correo enviado! Revisa tu Bandeja de Entrada o Spam!');
      };

    return(
        <div style={{ width: "100%", textAlign: "center"}}>
            <div className="login-container" style={{ backgroundColor: "rgb(247, 247, 247)", position: "absolute", left: "50%", top: "50%",  transform: "translate(-50%, -50%)" }}>
                <Spin spinning={loading}>
                <div>
                    <img style={{ marginTop: "3rem" }} src="/logo.png" alt="Logo" />
                    <div style={{ marginTop: "1rem", fontSize: "1.4rem", color: "rgba(0, 0, 0, 0.65)" }}>Enviar Correo Electrónico de Restablecimiento de Contraseña</div>
                </div>

                {error && <Alert 
                type="error" closable message="Correo Electrónico Invalido!" 
                style={{ width: "80%", margin: "1rem auto 0 auto" }}
                onClose={() => setError(false)} />}

                <div style={{ width: "90%", textAlign: "center", margin: "0 auto" }}>
                <Form
                style={{ marginTop: "2rem" }}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Ingresa tu Correo Electrónico!',
                    },
                    {
                        type: 'email',
                        message: 'Ingresa un Correo Electrónico Valido!'
                    }
                    ]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Correo Electrónico" className="p-1" />
                </Form.Item>
            
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "80%" }}>
                        Enviar
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link href="/user/login">
                        <a className="login-form-forgot fs-12">
                            Iniciar sesión!
                        </a>
                    </Link>
                    <br className="fs-12" /> O <br />
                    <Link  href="/user/register">
                        <a className="fs-12">Registrarse!</a>
                    </Link>
                </Form.Item>
                </Form>
                </div>
                </Spin>
            </div>
        </div>
    )
}