import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

import Layout from '@theme/Layout';
import * as S from './Home.styles';
import { Parallax } from './Parallax';

import LogoFit from '../../../static/img/pages/index/logo_fit.svg'
import LogoCChaos from '../../../static/img/pages/index/logo_cchaos.png'
import LogoAPH from '../../../static/img/pages/index/logo_aphgames.svg'

import PartnersCesnet from '../../../static/img/pages/index/sponsors/partners_cesnet.png'
import PartnersIPR from '../../../static/img/pages/index/sponsors/partners_ipr.png'
import PartnersWarhorse from '../../../static/img/pages/index/sponsors/partners_warhorse.png'
import PartnersZotac from '../../../static/img/pages/index/sponsors/partners_zotac.png'
import PartnersVision from '../../../static/img/pages/index/sponsors/partners_visiongame.svg'

import useBaseUrl from '@docusaurus/useBaseUrl';
import useWindowSize from '../../hooks/useWindowSize';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Loading } from '../loading/Loading';
  
// TODO! Welcome in i18n folder does not work for build.. it corrupts the internal/styles.ts
// hence, we moved it here
const Welcome = () => (
	<S.Section>
		<S.SectionContainer>
			<S.CardContainer>
				<S.KFrame>
					<h3>Pátek 17.11. - Neděle 19.11. 2023</h3>
					<p>Dobrodruhu, ač samotný či s družinou, zveme Tě, aby ses připojil k našemu podzimnímu rituálu tvorby počítačových her. Dobře si rozpočti čas dvou slunečních cyklů, zužitkuj všechny nástroje, ve kterých najdeš zalíbení a zkrášli svůj výtvor svými koncepty, aby je mohl celý ansámbl obdivovat. Nechť právě Tvá kompozice bude legendou všech dimenzí.</p>
					<p>Zkušení průvodci Ti budou nablízku a poskytnou Tobě i Tvé družině cenné rady k vaší tvorbě.</p>
					<p>Konání této sešlosti se uskuteční v prostorách FIT ČVUT, jmenovitě na Thákurově 9 TH:A-1455 v Praze. Bude zde dostatek zábavy, různorodých jídel i místa pro odpočinek.</p>
					<p>Zapiš se do <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3Ibul6fe5UUTwg0rBvLKUpH4GIHrG_OI_ochp5K83OG1YCw/viewform?usp=sf_link">registru účastníků</a>, dostav se na náš <a href="https://discord.gg/G5MbV8Ex77">Discord</a> a připrav se na zdolání nových výzev.</p>
				</S.KFrame>
				<S.Sleepover>
								<img src={useBaseUrl('img/pages/index/sleepover.png')} />
				</S.Sleepover>
			</S.CardContainer>
		</S.SectionContainer>
	</S.Section>
);

const Programme = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.Vertical>
					<h3>Program</h3>
					<S.Programme>
						<S.Frame $width={'320px'}>
							<h3>Pátek 17.11.</h3>
							<S.Agenda>
								<div>12:00</div>
								<div>Otevření dveří</div>

								<div>12:30</div>
								<div>Úvodní slovo</div>

								<S.Highlight>13:00</S.Highlight>
								<S.Highlight>Začátek programování</S.Highlight>

								<div>17:00</div>
								<div>Inspirační minitalky</div>

								<div>20:00</div>
								<div>Budova se zavírá</div>

								<div>21:00</div>
								<div>Lanparty v ggLabu</div>
							</S.Agenda>
						</S.Frame>
						<S.Frame $width={'320px'}>
							<h3>Sobota 18.11.</h3>
							<S.Agenda>
								<div>8:00</div>
								<div>Budova se otevírá</div>

								<div>12:00</div>
								<div>Game Kvíz</div>

								<div>17:30</div>
								<div>Deskovky a jiná zábava</div>

								<div>20:00</div>
								<div>Budova se zavírá</div>

								<div>21:00</div>
								<div>Lanparty v ggLabu</div>
							</S.Agenda>
						</S.Frame>
						<S.Frame $width={'320px'}>
							<h3>Neděle 19.11.</h3>
							<S.Agenda>
								<div>8:00</div>
								<div>Budova se otevírá</div>

								<S.Highlight>13:00</S.Highlight>
								<S.Highlight>Konec programování</S.Highlight>

								<div>13:30</div>
								<div>Prezentace her</div>

								<div>16:00</div>
								<div>Vyhlášení cen</div>

								<div>17:00</div>
								<div>Volná zábava</div>
							</S.Agenda>
						</S.Frame>
					</S.Programme>
				</S.Vertical>
			</S.SectionContainer>
		</S.Section>
	)
}

const Companies = () => {
	return (
		<S.Companies>
			<S.Logos>
				<LogoFit />
				<LogoAPH />
				<img src={LogoCChaos} />
			</S.Logos>
		</S.Companies>
	)
}

const Trailer = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.Vertical>
					<h3>Trailer</h3>
					<div>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/wTB9ZT3xcOU?si=iCUGYsv-F8SkPd0Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>			
					</div>
				</S.Vertical>
			</S.SectionContainer>
		</S.Section>
	)
}

const Sponsors = () => {
	return (
		<S.Section>
			<S.SectionContainer>
			<h3>Sponzoři</h3>
			<S.Logos>
				<img src={PartnersCesnet} />
				<img src={PartnersIPR} />
				<img src={PartnersWarhorse} />
				<img src={PartnersZotac} />
				<PartnersVision />
			</S.Logos>
			</S.SectionContainer>
		</S.Section>
	)
}

export const Home = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();

	const device = useWindowSize();

	// we need to wait for device detection 
	return (
		<Layout description={siteConfig.customFields.description as string}>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			{device != 'ssr' && (
				<main>
					<Parallax isMobile={device == 'mobile'} />
					<Companies />
					<Trailer />
					<Welcome />
					<Programme />
					<Sponsors />
				</main>
			)}
			{device === 'ssr' && <Loading center={true} />}
		</Layout>
	);
};

export default Home;