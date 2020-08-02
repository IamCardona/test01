import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { Form, Input, Button, Alert, Spin } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import Link from 'next/link'

import firebase from '../../firebaseConfig'

export default function() {
    const router = useRouter()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const onFinish = values => {
        const { email, password } = values;
        setError(false)
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            router.push('/')
        })
        .catch(function(e) {
            setError(true)
            setLoading(false)
        })
      };

    return(
        <div style={{ width: "100%", textAlign: "center"}}>
        
            <div className="login-container" style={{ backgroundColor: "rgb(247, 247, 247)", position: "absolute", left: "50%", top: "50%",  transform: "translate(-50%, -50%)" }}>
            <Spin spinning={loading}>
                <div>
                    <img style={{ marginTop: "3rem" }} src="/logo.png" alt="Logo" />
                    <div style={{ marginTop: "1rem", fontSize: "1.4rem", color: "rgba(0, 0, 0, 0.65)" }}>Inicia Sesión en Tardan</div>
                </div>

                {error && <Alert 
                type="error" closable message="Correo Electrónico o Contraseña Incorrectos"
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
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Ingresa tu Contraseña!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon p-1" />}
                    type="password"
                    placeholder="Contraseña"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "80%" }}>
                        Iniciar Sessión
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link href="/user/reset">
                        <a className="login-form-forgot fs-12">Olvidaste tu Contraseña?</a>
                    </Link>

                    <br className="fs-12" /> O <br />

                    <Link  href="/user/register">
                        <a className="fs-12">Registrate!</a>
                    </Link>
                </Form.Item>
                </Form>
                </div>
                </Spin>
            </div>
        </div>
    )
}