import Head from 'next/head'
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SectionSearch from "../components/sectionSearch/SectionSearch";
import Layout from "../components/layout/Layout";


export default function Home() {
  return (
      <Layout>
        <Header></Header>
        <SectionSearch></SectionSearch>
        <Footer></Footer>
      </Layout>
  )

}
