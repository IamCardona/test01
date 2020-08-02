import React, { useState, useEffect } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Popover, Button } from 'antd'
import { useRouter } from 'next/router'

import firebase from '../firebaseConfig'
import { request } from 'graphql-request'

export default function() {
    const router = useRouter()
    const [user, setUser] = useState(null)

    const query = `
    query usuario($input: IdInput!) {
        getUser(input: $input) {
            name
            email
        }
    }
    `

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(userToken) {
            if(userToken) {
                const variables = {
                    input: {
                        id: userToken.uid
                    }
                }
                request('https://test01-tardan.herokuapp.com/graphql', query, variables).then((data) => {
                    if(data.getUser.name) setUser(data.getUser.name)
                })
            } else {
                setUser(null)
            }
        })
    }, [])

    const content = (
        <div>
            {user && (
                <div>
                    <div style={{ color: "#93a9b5", fontSize: "1rem", borderBottom: "1px #e5edef solid", paddingBottom: "0.5rem" }} className="click">Perfil</div>
                    <div style={{ color: "#ff4d4f", fontSize: "1rem", paddingTop: "0.5rem" }} className="click" onClick={() => firebase.auth().signOut()}>Cerrar sesión</div>
                </div>
            )}
            {!user && (
                <div>
                    <div style={{ color: "#93a9b5", fontSize: "1rem", borderBottom: "1px #e5edef solid", paddingBottom: "0.5rem" }} className="click" onClick={() => router.push('/user/login')}>Iniciar Sesión</div>
                    <div style={{ color: "#ff4d4f", fontSize: "1rem", paddingTop: "0.5rem" }} className="click" onClick={() => router.push('/user/register')}>Registrarse</div>
                </div>
            )}
        </div>
    )

    const title = () => {
        if(user) return <div style={{ color: "#93a9b5" }}>{user}</div>
    }
    return(
        <Popover content={content} placement="bottom" title={title()}>
            <Button style={{ border: "none" }}>
                <UserOutlined style={{ fontSize: "1.5rem", color: "#93a9b5" }} className="click" />
            </Button>
        </Popover>
    )
}