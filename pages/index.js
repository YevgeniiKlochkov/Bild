import Head from 'next/head'
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hello from "../components/hello/Hello";
import Layout from "../components/layout/Layout";


export default function Home() {
  return (
      <Layout>
        <Header></Header>
        <Hello></Hello>
        <Footer></Footer>
      </Layout>
  )

}
