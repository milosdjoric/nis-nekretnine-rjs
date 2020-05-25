import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerdata from '../../data/footerdata.json';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"
        // const inlineStyle = {
        //     backgroundImage: 'url('+publicUrl+footerdata.footerbg+')'
        // }

        return (
             <footer className="footer-area">
              <div className="container">
                <div className="footer-top">
                  <div className="row">
                    <div className="col-sm-4">
                      <a className="footer-logo" href="#"><img src={ publicUrl+footerdata.footerlogo } alt={ imgattr } /></a>
                    </div>
                    <div className="col-sm-8">
                      <div className="footer-social text-sm-right">
                        <span></span>
                        <ul className="social-icon">
                         { footerdata.socialicon.map( ( item, i )=>
                            <li key={i}>
                              <a href={ item.url } target="_blank"><i className={ item.icon } /></a>
                            </li>
                          ) }
                        </ul>
                      </div>  
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                        <h4 className="widget-title">{ footerdata.PonudeIzOglasa.title }</h4>
                        <ul>
                          { footerdata.PonudeIzOglasa.links.map( (item, i )=>
                              <li className="readeal-top" key={ i }><Link to={ item.url } >{ item.title }</Link></li>
                           ) }
                          
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                        <h4 className="widget-title">{ footerdata.servisiSajta.title }</h4>
                        <ul>
                          { footerdata.servisiSajta.links.map( (item, i )=>
                             <li className="readeal-top" key={ i }><Link to={ item.url } >{ item.title }</Link></li>
                          ) }
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                       <h4 className="widget-title">{ footerdata.korisniLinkovi.title }</h4>
                        <ul>
                         { footerdata.korisniLinkovi.links.map( (item, i )=>
                              <li className="readeal-top" key={ i }><Link to={ item.url } >{ item.title }</Link></li>
                          ) }
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <form className="widget widget-subscribe" method="GET">
                        <div className="rld-single-input">
                          <input type="text" name="name" placeholder="Ime" />
                        </div>
                        <div className="rld-single-input">
                          <input type="text" name="email" placeholder="Email" />
                        </div>
                        <button className="btn btn-yellow w-100">Prijavi se na newsletter</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="copy-right text-center" dangerouslySetInnerHTML={{__html: footerdata.copyrighttext}}>

                </div>
              </div>
            </footer>

        )
    }
}


export default Footer_v1