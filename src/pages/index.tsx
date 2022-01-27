import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Idata } from "../interfaces";
import { fetchData } from "../utils";

const Home: NextPage = () => {
    const initialData: Idata = {
        ip: "127.0.0.1",
        location: "localhost",
        timezone: "none",
        isp: "none",
    };

    const [ipData, setIpData] = useState(initialData);

    useEffect(() => {
        // fetchData(setIpData).catch((err) => console.log(err));
    }, []);

    return (
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen min-w-full">
            <Head>
                <title>IP Tracker</title>
                <meta
                    name="description"
                    content="Search for any IP addresses or domains and see the key information and location"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header setIpData={setIpData}></Header>
            <Main data={{ ...ipData }}></Main>
            <Footer></Footer>
        </div>
    );
};

export default Home;
