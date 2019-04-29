import React from "react";
import Demo from './Demo';
import './App.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMore: false,
            clickModule: false
        }

    }



    clickMore = () => {
        this.setState({ isMore: !this.state.isMore });
    }

    clickModule = (value) => {
        this.setState({ clickModule: value });
    }



    render() {
        return (
            <div id="page-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Gaurav Tanwar</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpeg" alt="" />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            {this.state.isMore && <span><li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                            </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
                                </li></span>}
                            <li className="nav-item" onClick={() => this.clickMore()} style={{ cursor: 'pointer' }}>
                                <a className="nav-link js-scroll-trigger">{this.state.isMore ? 'Less...' : 'More...'}</a>
                            </li>
                            <hr className="m-0" color='#fff' />
                            <span style={{ color: '#e64a19', fontSize: '2em', fontWeight: 600 }}>Demo Links</span>
                            <span style={{ color: '#e64a19', fontSize: '1.2em', fontWeight: 600 }}>JS Packages</span>
                            <li className="nav-item" onClick={() => this.clickModule('qrCode')}>
                                <a className="nav-link js-scroll-trigger" href="#qrCode" title="dynamic-qr-code-generator">qr-code-generator</a>
                            </li>
                            <li className="nav-item" onClick={() => this.clickModule('numberFinder')}>
                                <a className="nav-link js-scroll-trigger" href="#numberFinder" title="number-finder">number-finder</a>
                            </li>
                            <span style={{ color: '#e64a19', fontSize: '1.2em', fontWeight: 600 }}>React Packages</span>
                            <li className="nav-item" onClick={() => this.clickModule('draggableMenu')}>
                                <a className="nav-link js-scroll-trigger" href="#draggableMenuDemo" title="react-draggable-menu">draggable-menu</a>
                            </li>
                            <li className="nav-item" onClick={() => this.clickModule('resizableModal')}>
                                <a className="nav-link js-scroll-trigger" href="#resizableModal" title="react-draggable-resizable-modal">draggable-resizable-modal</a>
                            </li>
                            <li className="nav-item" onClick={() => this.clickModule('autoSuggest')}>
                                <a className="nav-link js-scroll-trigger" href="https://technologygeek12.github.io/react-geolocation-autosuggest/" title="react-geolocation-autosuggest">geolocation-autosuggest</a>
                            </li>
                            <li className="nav-item" onClick={() => this.clickModule('flagSelect')}>
                                <a className="nav-link js-scroll-trigger" href="#flagSelect" title="react-region-flag-select">region-flag-select</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid p-0" >

                    {this.state.clickModule!=='draggableMenu' && <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                        <div className="w-100">
                            <h1 className="mb-0">Gaurav
          <span className="text-primary">Tanwar</span>
                            </h1>
                            <div className="subheading mb-5">Fatehpur Beri · New Delhi, India · 110074 ·
          <a href="mailto:gauravtanwar07@gmail.com">gauravtanwar07@gmail.com</a>
                            </div>
                            <p className="lead mb-5">I am experienced in leveraging agile frameworks to share and work with my expertise in React,Redux,Redux-saga,React-native and different important tools required in development.
                            Working as a Lead React developer with very good knowledge of react and its related technologies.
                            Having a very good knowledge of Git,NPM, Jira, Slack and many more tools, and like to create different NPM Packages in my free time to grow and share my knowledge.</p>

                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/gaurav-tanwar-337484118/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/TechnologyGeek12">
                                    <i className="fab fa-github"></i>
                                </a>
                                {/* <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a> */}
                                <a href="skype:live:d8896d1f1d6fcfeb?chat">
                                    <i className="fab fa-skype"></i>
                                </a>
                                <a href="https://www.facebook.com/gaurav.tanwar.5680">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </section>}

                    <hr className="m-0" />
                    {this.state.isMore && <span>
                        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                            <div className="w-100">
                                <h2 className="mb-5">Experience</h2>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Lead React Developer</h3>
                                        <div className="subheading mb-3">RevInfotech Pvt Ltd</div>
                                        <p>A software development company which provide services to its different clients from various countries. Develope webapps,mobile applications,android applications,IOS applications,blockchain,cryptocurrency etc.</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Jan 2019 - Present</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">React/Senior React - Developer</h3>
                                        <div className="subheading mb-3">Bluepi Pvt Ltd</div>
                                        <p>A software development company which provide services and its own product as well . develope webapps,mobile applications,android applications,IOS applications and cloud computing etc.</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Sep 2017 - Dec 2018</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Software Developer</h3>
                                        <div className="subheading mb-3">Pronto It Labs</div>
                                        <p>A software development company, Webapps, Websites, mobile sites, mobile apps, web applications, mobile applications, android development, and iPhone development.</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Jan 2017 - Aug 2017</span>
                                    </div>
                                </div>

                            </div>

                        </section>

                        <hr className="m-0" />

                        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
                            <div className="w-100">
                                <h2 className="mb-5">Projects</h2>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Kandooit</h3>
                                        {/* <div className="subheading mb-3">Revinfotech</div> */}
                                        <table className="table">
                                            <tbody>
                                                <tr><th>Project Name</th><td>Kandooit</td></tr>
                                                <tr><th>Client</th><td>Kandooit</td></tr>
                                                <tr><th>Team Size</th><td>10</td></tr>
                                                <tr><th>Technologies Used</th><td>ReactJs + Redux, Git, HTML5, CSS3, Sass, Webpack.</td></tr>
                                                <tr><th>Role</th><td>Lead React Developer</td></tr>
                                                <tr><th>Description</th><td>Kandoo IT is a one-stop solution for all your IT services you aspire to bring in a revolution in your business. and working for one of the new product of kandooit for medical and insurance sector</td></tr>
                                                <tr><th>Responsibilities</th><td><ul><li>Leading Team and solving complex issues .</li>
                                                    <li> Solving Complex issues and writing reusable components.</li>
                                                    <li> Leading and motivating team of 10 peoples.</li>
                                                    <li> Playing a role of scrum master.</li>
                                                    <li> Bug fixing.</li></ul></td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Jan 2019 - Present</span>
                                    </div>
                                </div>




                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Pistats</h3>
                                        {/* <div className="subheading mb-3">Revinfotech</div> */}
                                        <table className="table">
                                            <tbody>


                                                <tr><th>Project Name</th><td>Pistats</td></tr>
                                                <tr><th>Client</th><td>Different News Channels</td></tr>
                                                <tr><th>Team Size</th><td>12</td></tr>
                                                <tr><th>Technologies Used</th><td>ReactJs + Redux-Saga, Firebase, Git, HTML5, CSS3,
Sass,java,spring,citus,druid.</td></tr>
                                                <tr><th>Role</th><td>Senior/Lead developer</td></tr>
                                                <tr><th>Description</th><td>Pistats is a platform or website which provide different kind of analysis for
    different user activities and show user behaviour using different graphs and
tables and provide different services to customise user notifications etc.</td></tr>
                                                <tr><th>Responsibilities</th><td><ul><li>Leading whole team..</li>
                                                    <li> Developed and Integrated modules of CMS content,author,
    category,Dashboard Technology,Sankey flow,User Segment
Cohort,Technolgy Page,and Push Performance etc.</li>
                                                    <li>Developed java APIs using different databases like citus and druid.</li>
                                                    <li> Bug fixing.</li>
                                                </ul></td></tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Sep 2017 - Dec 2018</span>
                                    </div>
                                </div>




                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Competitive Analysis</h3>
                                        {/* <div className="subheading mb-3">Revinfotech</div> */}
                                        <table className="table">
                                            <tbody>


                                                <tr><th>Project Name</th><td>Competitive Analysis</td></tr>
                                                <tr><th>Client</th><td>News channels</td></tr>
                                                <tr><th>Team Size</th><td>5</td></tr>
                                                <tr><th>Technologies Used</th><td>ReactJs + Redux-Saga,Git, HTML5, CSS3, Sass,java,spring.</td></tr>
                                                <tr><th>Role</th><td>Senior/Lead Developer</td></tr>
                                                <tr><th>Description</th><td>Competitive analysis is a platform which is used to analyse the user
    behaviour and activities over the tweeter and provide analysis of the user
    behaviour to give them accurate and useful data to make it more user
friendly and user specific..</td></tr>
                                                <tr><th>Responsibilities</th><td><ul><li>Team Lead.</li>
                                                    <li> Developed and Integrated modules of tweeter topic and list
screes,tweeter detail screens etc..</li>
                                                    <li> Bug fixing.</li></ul></td></tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Jan 2018 - JUl 2018</span>
                                    </div>
                                </div>




                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Boutiqaat</h3>
                                        {/* <div className="subheading mb-3">Revinfotech</div> */}
                                        <table className="table">
                                            <tbody>


                                                <tr><th>Project Name</th><td>Boutiqaat Product</td></tr>
                                                <tr><th>Client</th><td>Boutiqaat</td></tr>
                                                <tr><th>Team Size</th><td>20</td></tr>
                                                <tr><th>Technologies Used</th><td>ReactJs + Redux,Git, HTML5, CSS3, Sass,golang,mongoDb.</td></tr>
                                                <tr><th>Role</th><td>Software Development Engineer</td></tr>
                                                <tr><th>Description</th><td>Boutiqaat is an well known e-commerce product based company of kuwait and operate in different countries.</td></tr>
                                                <tr><th>Responsibilities</th><td><ul><li>Developed and Integrated modules of admin panel and home web page
etc.</li>
                                                    <li> Developed multiple reusable and dynamic components in project.</li>
                                                    <li> Bug fixing.</li></ul></td></tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Jul 2018 - Dec 2018</span>
                                    </div>
                                </div>





                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">MobiAdz</h3>
                                        {/* <div className="subheading mb-3">Revinfotech</div> */}
                                        <table className="table">
                                            <tbody>


                                                <tr><th>Project Name</th><td>MobiAdz</td></tr>
                                                <tr><th>Client</th><td>MobiAdz</td></tr>
                                                <tr><th>Team Size</th><td>22</td></tr>
                                                <tr><th>Technologies Used</th><td>ReactJs + Redux, Firebase Git, HTML5, CSS3, Sass, Gulp, Webpack.</td></tr>
                                                <tr><th>Role</th><td>Frontend Developer</td></tr>
                                                <tr><th>Description</th><td>Mobiadz APM Platform is a Platform for Direct Media Buying for the
Advertisers and Performance Metrics engine for Networks/Affiliates.</td></tr>
                                                <tr><th>Responsibilities</th><td><ul><li>Developed and Integrated modules of Admin ,Affiliate
Panel,Throttling,Advertiser etc.</li>
                                                    <li> Developed multiple Generic Components used in project.</li>
                                                    <li> Bug fixing.</li></ul></td></tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">March 2017 - Aug 2017</span>
                                    </div>
                                </div>





                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Startel</h3>
                                        {/* <div className="subheading mb-3">Revinfotech</div> */}
                                        <table className="table">
                                            <tbody>


                                                <tr><th>Project Name</th><td>Startel</td></tr>
                                                <tr><th>Client</th><td>Accer Bussiness Solution</td></tr>
                                                <tr><th>Team Size</th><td>5</td></tr>
                                                <tr><th>Technologies Used</th><td>HTML, CSS,Java Script,Sass,Gulp.</td></tr>
                                                <tr><th>Role</th><td>Agile Developer</td></tr>
                                                <tr><th>Description</th><td>A Website used to provide information about Acces Bussiness Solution.It
    provide information about the Accer Bussiness Solution’s about
    us,different bussiness solutions etc and user can also contact through
contact us section.</td></tr>
                                                <tr><th>Responsibilities</th><td><ul><li>Coding and Designing of core modules..</li>
                                                    <li>Scrum master.</li>
                                                </ul></td></tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Jan 2017 - Feb(End) 2017</span>
                                    </div>
                                </div>

                            </div>

                        </section>

                        <hr className="m-0" />

                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                            <div className="w-100">
                                <h2 className="mb-5">Education</h2>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Lal Bahadur Shastri Institute of Management(GGSIPU)</h3>
                                        <div className="subheading mb-3">Master Of Computer Applications</div>
                                        <div>Computer Science</div>
                                        <p>85%</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">August 2014 - Dec 2016</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Kalka Institute for Research And Studies(GGSIPU)</h3>
                                        <div className="subheading mb-3">Bechlor of Computer Applications</div>
                                        <div>Computer Science</div>
                                        <p>90%</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">August 2011 - May 2014</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                                    <div className="resume-content">
                                        <h3 className="mb-0">District Institute of Education And Training(SCERT)</h3>
                                        <div className="subheading mb-3">Elementry Teacher Education(ETE)</div>
                                        <div>Teaching/Education</div>
                                        <p>70%</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">August 2009 - Jun 2011</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                                    <div className="resume-content">
                                        <h3 className="mb-0">Acharya Tulsi Sarvodya Bal Vidyalya/School(CBSE)</h3>
                                        <div className="subheading mb-3">Higher Secondary(12th)</div>
                                        <p>82%</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">April 2008 - Mar 2009</span>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <hr className="m-0" />

                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                            <div className="w-100">
                                <h2 className="mb-5">Skills</h2>

                                <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                                <ul className="list-inline dev-icons">
                                    <li className="list-inline-item" title="react">
                                        <i className="fab fa-react"></i>
                                    </li>
                                    <li className="list-inline-item" title="node-js">
                                        <i className="fab fa-node-js"></i>
                                    </li>
                                    <li className="list-inline-item" title="html5">
                                        <i className="fab fa-html5"></i>
                                    </li>
                                    <li className="list-inline-item" title="css3">
                                        <i className="fab fa-css3-alt"></i>
                                    </li>
                                    <li className="list-inline-item" title="react-native">
                                        <i className="fab fa-react"></i>
                                    </li>
                                    <li className="list-inline-item" title="Javascript">
                                        <i className="fab fa-js-square"></i>
                                    </li>

                                    <li className="list-inline-item" title="sass">
                                        <i className="fab fa-sass"></i>
                                    </li>
                                    <li className="list-inline-item" title="jira">
                                        <i className="fab fa-jira"></i>
                                    </li>
                                    <li className="list-inline-item" title="bitbucket">
                                        <i className="fab fa-bitbucket"></i>
                                    </li>
                                    <li className="list-inline-item" title="gulp">
                                        <i className="fab fa-gulp"></i>
                                    </li>
                                    <li className="list-inline-item" title="git">
                                        <i className="fab fa-git"></i>
                                    </li>
                                    <li className="list-inline-item" title="npm">
                                        <i className="fab fa-npm"></i>
                                    </li>
                                    <li className="list-inline-item" title="slack">
                                        <i className="fab fa-slack-hash"></i>
                                    </li>
                                </ul>

                                <div className="subheading mb-3">And many more other tools and languages like:</div>
                                <ul className="fa-ul mb-0">
                                    <li>
                                        <i className="fa-li fa fa-check"></i>
                                        Redux</li>
                                    <li>
                                        <i className="fa-li fa fa-check"></i>
                                        Redux-saga</li>
                                    <li>
                                        <i className="fa-li fa fa-check"></i>
                                        Webpack</li>
                                    <li>
                                        <i className="fa-li fa fa-check"></i>
                                        U-track</li>
                                    <li>
                                        <i className="fa-li fa fa-check"></i>
                                        Taiga</li>
                                    <li>
                                        <i className="fa-li fa fa-check"></i>
                                        Agile Development &amp; Scrum</li>
                                </ul>
                            </div>
                        </section>

                        <hr className="m-0" />

                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                            <div className="w-100">
                                <h2 className="mb-5">Interests</h2>
                                <p>Apart from being a web developer, I enjoy most of my time reading books and and checkout the latest news and informations to the current affairs of different fields like technology,machanical,politics etc.
                                 Also a gym lover and fitness freak.</p>
                                <p className="mb-0">and I spend a large amount of my free time exploring the latest technology advancements in the React and front-end web development world.</p>
                            </div>
                        </section>

                        <hr className="m-0" />

                        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
                            <div className="w-100">
                                <h2 className="mb-5">Awards &amp; Certifications</h2>
                                <ul className="fa-ul mb-0">
                                    <li>
                                        <i className="fa-li fa fa-trophy text-warning"></i>
                                        1<sup>st</sup>
                                        Place - Acharya tulsi sarvodya bal vidyalya/school. - CBSE 2009</li>
                                    <li>
                                        <i className="fa-li fa fa-trophy text-warning"></i>
                                        1<sup>st</sup>
                                        Place - 3 times awarded for securing 1 st position every year in BCA at Kalka Institute For
Research and Advanced Studies. - GGSIP University</li>
                                    <li>
                                        <i className="fa-li fa fa-trophy text-warning"></i>
                                        1<sup>st</sup>
                                        Place - Lal Bahadur Shastri Institute of Management. - (GGSIP University) 2017</li>
                                    <li>
                                        <i className="fa-li fa fa-trophy text-warning"></i>
                                        Awarded by vise president of india Mr. Hamid Ansari for the Exemplary performance in Graduation(BCA). - 2015</li>

                                    <li>
                                        <i className="fa-li fa fa-trophy text-warning"></i>
                                        Best Team Award in Wow Awards at ProntoIT Labs. - 2017</li>
                                    <li>
                                        <i className="fa-li fa fa-trophy text-warning"></i>
                                        AWS Certified Developer - Associate. - 2017</li>

                                    <li>
                                        <i className="fa-li fa fa-trophy text-warning"></i>
                                        Awarded as employee of the month. - 2019</li>
                                    <li>
                                        And many more...</li>
                                </ul>
                            </div>
                        </section></span>}

                    <hr className="m-0" />

                    {this.state.clickModule && this.state.clickModule == 'qrCode' &&
                        <section className="p-3 p-lg-5 d-flex align-items-center" id="qrCode">
                            <Demo type={this.state.clickModule} />
                        </section>
                    }

                    {this.state.clickModule && this.state.clickModule == 'numberFinder' &&
                        <section className="p-3 p-lg-5 d-flex align-items-center" id="numberFinder">
                            <Demo type={this.state.clickModule} />
                        </section>}

                    {this.state.clickModule && this.state.clickModule == 'draggableMenu' &&
                        <section className="p-3 p-lg-5 d-flex align-items-center" id="draggableMenuDemo">
                            <Demo type={this.state.clickModule} />
                        </section>}

                    {this.state.clickModule && this.state.clickModule == 'resizableModal' &&
                        <section className="p-3 p-lg-5 d-flex align-items-center" id="resizableModal">
                            <Demo type={this.state.clickModule} />
                        </section>}

                    {this.state.clickModule && this.state.clickModule == 'flagSelect' &&
                        <section className="p-3 p-lg-5 d-flex align-items-center" id="flagSelect">
                            <Demo type={this.state.clickModule} />
                        </section>}
                </div>
            </div>
        );
    }
}