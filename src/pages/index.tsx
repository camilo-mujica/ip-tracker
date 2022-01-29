import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { AppProvider } from "../context/AppContext";

const Home: NextPage = () => {
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
