import styles from "../styles/Layout.module.css"
import React from "react"
import Nav from "./Nav"
import Header from "./Header"
import About from "./About"
import Experience from "./Experience"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <About />
        <Experience />
      </div>
    </>
  )
}
