import styles from "../styles/Layout.module.css"
import React from "react"
import Nav from "./Nav"
import Header from "./Header"
import About from "./About"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <About />
      </div>
    </>
  )
}
