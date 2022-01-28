import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { IData } from "../interfaces";
import { fetchData } from "../utils";
import { AppProvider } from "../context/AppContext";

const Home: NextPage = () => {
    const initialData: IData = {
        ip: "127.0.0.1",
        location: "localhost",
        timezone: "none",
        isp: "none",
        lat: 0,
        lon: 0,
    };

    const [ipData, setIpData] = useState(initialData);

    useEffect(() => {
        // fetchData(setIpData).catch((err) => console.log(err));
    }, []);

    return (
        <AppProvider>
            <div className="container flex flex-col items-center justify-center min-w-full min-h-screen mx-auto">
                <Head>
                    <title>IP Address Tracker</title>
                    <meta
                        name="description"
                        content="Search for any IP addresses or domains and see the key information and location"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        </AppProvider>
    );
};

export default Home;
