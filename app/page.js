'use client'

// page.js (Login Page)

import Footer from '../app/footer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';
import Head from 'next/head';

export default function Login() {

  // Using the useRouter hook to redirect to the main page when the login button is clicked
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    <div className="container">
      <main className="main-content">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-3">
                    <div className="text-center">
                    <Image
                      src="/trophy.svg" alt="Trophy" width={110} height={110} style={{ padding: "15px 0" }}/>
                      <h4 className="title">Achievement Viewer</h4>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          className="form-control form-control-user"
                          type="email"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Email Address"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control form-control-user"
                          type="password"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <button
                        className="btn btn-dark btn-lg btn-user btn-block"
                        type="submit"onClick={() => router.replace('../MainView')}>
                          Login
                      </button>
                    </form>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}