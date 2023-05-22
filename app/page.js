'use client'

import Footer from '../app/footer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

export default function Login() {
  const router = useRouter();
  return (
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
                        type="submit"onClick={() => router.replace('../AchievementsPage')}>
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
  );
}