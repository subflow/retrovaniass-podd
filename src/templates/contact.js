import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Contact extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="post page post-full">
              <header className="post-header">
                <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
              </header>
              {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
              <div className="post-subtitle">
                {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
              </div>
              }
              {_.get(this.props, 'pageContext.frontmatter.img_path') && 
              <div className="post-thumbnail">
                <img className="thumbnail" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
              </div>
              }
              <div className="post-content">
                {htmlToReact(_.get(this.props, 'pageContext.html'))}
                <form name="contactForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="contact-form"
                  className="contact-form">
                  <p className="screen-reader-text">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <p className="form-row">
                    <label className="form-label">Namn *</label>
                    <input type="text" name="name" placeholder="Ditt namn..." className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label className="form-label">Mail *</label>
                    <input type="email" name="email" placeholder="Ange din mail..." className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label className="form-label">Meddelande *</label>
                    <textarea name="message" placeholder="Ditt meddelande..." className="form-textarea" rows="7" />
                  </p>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <p className="form-row">
                    <button type="submit" className="button">Skicka meddelande</button>
                  </p> 
                </form>
              </div>
            </article>
            </Layout>
        );
    }
}
