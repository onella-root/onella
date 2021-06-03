import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../components/Title';
import { Lead } from '../components/Lead';
import { SubTitle } from '../components/SubTitle';
import { P } from '../components/P';
import { A } from 'app/components/A';
import { GithubRepoForm } from './GithubRepoForm';
import { ThemeSwitch } from './ThemeSwitch';
import { LanguageSwitch } from './LanguageSwitch';
import { ReactComponent as StateIcon } from './assets/state.svg';
import { ReactComponent as CSSIcon } from './assets/css.svg';
import { ReactComponent as INTLIcon } from './assets/intl.svg';
import { ReactComponent as TSLogo } from './assets/ts.svg';
import { ReactComponent as RouteIcon } from './assets/route.svg';
import { ReactComponent as SEOIcon } from './assets/seo.svg';
import { ReactComponent as InstantFeedbackIcon } from './assets/instant-feedback.svg';
import { ReactComponent as ScaffoldingIcon } from './assets/scaffolding.svg';
import { ReactComponent as CodeAnalysisIcon } from './assets/code-analysis.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'app/components/Link';
import { messages } from '../messages';

export function Features() {
  const { t } = useTranslation();

  return (
    <>
      <Title as="h2">Features</Title>
      <Lead>
        We bring the marketplace that helps<strong>list your home</strong>,{' '}
        <strong>connect buyers and sellers</strong> and{' '}
        <strong></strong> makes transaction easy.
      </Lead>
      <List>
        <Feature>
          <StateIcon className="feature-icon" />
          <Content>
            <SubTitle>Explore Top Marketplaces</SubTitle>
            <P>
              Explore Top Marketplaces
            </P>
            <P>
              Listings Carousel
            </P>
            {/* <GithubRepoForm /> */}
          </Content>
        </Feature>
        <Feature>
          <StateIcon className="feature-icon" />
          <Content>
            <SubTitle>View Listings For Sale</SubTitle>
            <P>
              View Listings For Sale
            </P>
            <P>
              Listings For Sale Carousel
            </P>
            {/* <GithubRepoForm /> */}
          </Content>
        </Feature>
        <Feature>
          <StateIcon className="feature-icon" />
          <Content>
            <SubTitle>List Your Homes</SubTitle>
            <P>
              List Your Homes
            </P>
            <P>
              List Your Homes
            </P>
            {/* <GithubRepoForm /> */}
          </Content>
        </Feature>
      </List>
    </>
  );
}

const Feature = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
