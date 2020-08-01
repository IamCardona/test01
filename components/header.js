import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './styles/header.module.css'

import { Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import User from './user'

const Header = () => {
  const router = useRouter()
  const [toggleNavBar, setToggleNavBar] = useState(false)

  const navBarStyleItem = (route, name) => {
    if(router.pathname === route) {
      return <h4 style={{ color: "#ff4d4f" }} className={styles.click} onClick={() => router.push(route)}>{name}</h4>
    } else {
      return <h4 style={{ color: "#93a9b5" }} className={styles.click} onClick={() => router.push(route)}>{name}</h4>
    }
  }

  const toggle = () => {
    setToggleNavBar(!toggleNavBar)
  }

  return (
  <div style={{ borderBottom: "1px #e5edef solid" }}>
      <div style={{ display: "flex", alignItems: "center", height: "90px", justifyContent: "space-between" }}> 

        <div style={{ paddingBottom: "0.5rem" }}>
          <img src="/logo.png" alt="Logo de sombreros tardan"
          style={{ height: "50px" }}  />
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>

              <div style={{ display: "flex", alignItems: "center" }} className="menu-computadora">

                <div style={{ margin: "1rem" }} className="menu-computadora">
                  {navBarStyleItem("/", "TIENDA")}
                </div>
                <div style={{ margin: "1rem" }} className="menu-computadora">
                  {navBarStyleItem("/nosotros", "NOSOTROS")}
                </div>
                <div style={{ margin: "1rem" }} className="menu-computadora">
                  {navBarStyleItem("/contacto", "CONTACTO")}
                </div>

              </div>

              <div style={{ display: "flex", alignItems: "center", paddingBottom: "0.5rem" }}>

                <div>
                  <User />
                </div>

                <div style={{ margin: "1rem", marginRight: "2rem", position: "relative" }}>
                  <Button type="danger" shape="circle" style={{ zIndex: "100", position: "absolute", color: "white", top: "0.8rem", left: "0.8rem", borderRadius: "50%", textAlign: "center", width: "1rem" }}><p>0</p></Button>
                  <ShoppingCartOutlined style={{ fontSize: "1.7rem", color: "#93a9b5" }} />
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", paddingBottom: "0.5rem" }} className="menu-celular">
                <div className="menu-activador menu-celular">
                  <input type="checkbox" id="lanzador" className="menu-celular" onClick={() => toggle()}/>
                  <label htmlFor="lanzador">
                    <span className="menu-activador-linea"></span>
                    <span className="menu-activador-linea"></span>
                    <span className="menu-activador-linea"></span>
                  </label>
                </div>
              </div>

          </div>
        </div>

      </div>

        {toggleNavBar &&
        <div className="menu-celular">
                <div style={{ margin: "1rem", borderBottom: "1px #e5edef solid" }}>
                  {navBarStyleItem("/", "TIENDA")}
                </div>
                <div style={{ margin: "1rem", borderBottom: "1px #e5edef solid" }}>
                  {navBarStyleItem("/nosotros", "NOSOTROS")}
                </div>
                <div style={{ margin: "1rem" }}>
                  {navBarStyleItem("/contacto", "CONTACTO")}
                </div>
        </div>}
  </div>
  );
}
 
export default Header