import Head from 'next/head'
import Footer from "../components/simple/footer/Footer";
import Header from "../components/simple/header/Header";
import SectionSearch from "../components/simple/sectionSearch/SectionSearch";
import Layout from "../components/simple/layout/Layout";


export default function Home() {
  return (
      <Layout>
        <Header></Header>
        <SectionSearch></SectionSearch>
        <Footer></Footer>
      </Layout>
  )

}
