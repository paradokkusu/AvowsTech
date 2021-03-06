import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';

const Career = () => (
    <Layout>
        <SEO title="Career" />

        <div id="pageHeader2" >
            <div className="vc-parent">
                <div className="vc-child">
                    <section className="page-title">
                        <h2>CAREER</h2>
                        <ul className="text-center">
                            <li className="list-unstyled text-danger">
                                <Link className="text-white" href="/">Home /</Link> Career</li>
                            {/* <li className="list-unstyled active">Career</li> */}
                        </ul>
                    </section>
                </div>
            </div>
        </div>

        {/* why join avows */}
        <div id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <section>
                            <h2 className="section-title"><span></span>WHY JOIN AVOWS?</h2>
                        </section>
                    </div>
                </div>
                <div className="mdl-card mdl-shadow--2dp">
                    <div className="vc_empty_space" >
                        <span class="vc_empty_space_inner"></span>
                    </div>
                    <div class="wpb_text_column wpb_content_element ">
                        <div class="wpb_wrapper">
                            <p>Avows hires some of the most creative and forward-thinking individuals.
                            At Avows we have people coming from a wide range of cultural, educational and geographic
                            backgrounds and are able to work together with passion to deliver results
                                    </p>
                            <br /><b>OUR PEOPLE</b><br />
                            <p>At Avows we hire and train individuals to enable them to enhance their talents to help
                            create value and foster innovation led solutions for the benefit of our customers.
                            Our people come from diverse, multidisciplinary skills, with strong educational background.
                            As an employee-owned company, we encourage an entrepreneurial spirit that helps us to respond
                            quickly and successfully to new opportunities and consistently improve our processes and
                            methodologies, often resulting in detailed analysis and recommendations to our clients.
                                    </p>
                            <br />
                            <p>Employee development is fostered through a collaborative, intellectually challenging work
                            environment that emphasizes mutual respect, leadership, and measured risk-taking.
                                    </p>
                            <br /><b>OUR CULTURE</b><br />
                            <p>
                                Avows aims to be an inclusive organization where everyone is treated with respect and dignity, and where there is equal opportunity
                                for all. We pledge to respect and value the diversity of all our staff and clients. This means that all of Avows’ staff understand
                                and respect the diverse work force and user community and everyone has the right to be treated with dignity and equality regardless
                                of race, nationality, sex etc. and supports the ‘Equal Opportunity’ policy all times. Corporate culture at Avows gives its employees
                                the personal freedom to decide and accomplish on what they want to achieve as their individual goals, while supporting the objectives
                                of the company.
                                    </p>
                            <br /><b>WHY JOIN AVOWS?</b><br /><br />
                            <ul>
                                <li>Be sure not to miss the fun at office everyday – for us work is definitely fun</li>
                                <li>To get incentivized every day, for dreaming and not forgetting to dare your dreams</li>
                                <li>To get ready to change – just take the challenge, innovate and change</li>
                                <li>Try the Nirvana – bliss of continuous learning and unlearning.</li>
                                <li>And we definitely understand your requirements for stretched coffee breaks at work – by just making</li>
                                <li>sure the coffee is served at your desk, while you continue to work.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* career form */}
        <div id="blog">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <section>
                            <h2 class="section-title"><span>Graduate Students</span>Apply here</h2>
                        </section>
                    </div>
                </div>
                <div class="row">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdn3i6c2WjKctZw3VlLoNXNn2a8-L643gswpFEKwj5dBQLQSw/viewform?embedded=true" width="100%" height="2780" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>

    </Layout>
)

export default Career
