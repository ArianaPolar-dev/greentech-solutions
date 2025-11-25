import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceList from '../components/ServiceList';
import CaseList from '../components/CaseList';
import TestimonialList from '../components/TestimonialList';
import ImpactChart from '../components/ImpactChart';
import BlogList from '../components/BlogList';
import BudgetForm from '../components/BudgetForm';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenTech Solutions - Tecnología Sostenible para Pymes</title>
      </Head>
      <Header />
      <Hero />
      <div className="container">
        <ServiceList />
        <CaseList />
        <ImpactChart />
        <TestimonialList />
        <BlogList />
        <BudgetForm />
      </div>
      <Footer />
    </>
  );
}

