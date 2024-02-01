import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout/Layout";
import { HomePage } from "../components/HomePage/HomePage";

export default function Home() {
  return (
    <Layout title="Home">
      <HomePage />
    </Layout>
  );
}
