import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Grid_container from '../components/Grid_container'
import Block from '../components/Block'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h2>Ritik Jangir</h2>
      </div>
      {/* <Canvas>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1,1,1]}></boxBufferGeometry>
          <meshStandardMaterial attach='material'></meshStandardMaterial>
        </mesh>
        <OrbitControls></OrbitControls>
      </Canvas> */}
      <Grid_container></Grid_container>
      <div className={styles.main}>
        My projects will be listed here
      </div>
    </div>
  )
}
