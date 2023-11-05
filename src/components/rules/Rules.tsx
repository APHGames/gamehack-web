import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import Layout from '@theme/Layout';
import * as S from '@site/src/internals/styles';

export const MainRules = () => (
	<S.Section>
		<S.SectionContainer>
			<S.CardContainer>
				<S.KFrame>
					<h3>Pravidla pro účast</h3>
					<ul>
						<li>GameHacku se může účastnit pouze osoba starší 18ti let.</li>
						<li>Svou účastí účastník souhlasí s pořizováním a sdílením audiovizuálního materiálu pro PR účely, včetně pořizování záznamů z gameplaye či screenshotů her pro vystavení na veřejných kanálech fakulty a skupiny APHGames.</li>
						<li>Účastník se může zúčastnit buďto samostatně nebo jako tým. Tým může mít 1-6 členů.</li>
						<li>Je potřeba, aby alespoň jeden člen týmu byl prezenčně přítomen během pořádání akce, vyjma večerních hodin, kdy je budova ve zvláštním režimu.</li>
						<li>V budově fakulty je možné přespat, není to však explicitně vyžadováno.</li>
						<li>Pro hlavní komunikaci slouží <a href="https://discord.gg/G5MbV8Ex77">Discord.</a></li>
					</ul>
					<h3>Pravidla pro vývoj</h3>
					<ul>
						<li>Vytvářená hra musí být hratelná na consumer-grade PC s platformou Windows, případně jako webová hra spustitelná v prohlížeči Firefox nebo Chrome.</li>
						<li>Hra musí být vytvořena jen členy týmu, kteří se účastní akce.</li>
						<li>Vývoj hry musí probíhat pouze během stanovené doby. V případě pozdního odevzdání bude daný tým vyjmut z hodnocení porotou, bude však mít stále možnost prototyp hry odprezentovat.</li>
						<li>Programy třetích stran pro vývoj her a herních assetů je možno použít jen pokud má účastník licenci pro jejich použití.</li>
						<li>Je možno použít pouze ty assety, které jsou veřejně přístupné (tedy assety pod licencemi public domain, MIT, LGPL, CC, atp.) Není možné využít placené assety ani assety vytvořené před začátkem akce. Toto se týká i knihoven.</li>
						<li>Výsledná hra je autorským dílem týmu a Fakultě informačních technologií ČVUT nevznikají žádná autorská práva.</li>
					</ul>
					<h3>Pravidla pro odevzdávání</h3>
					<ul>
						<li>Hra musí být odevzdaná na platformě <a href="https://itch.io">itch.io</a>. Odkaz na konkrétní stránku bude zveřejněn před začátkem akce.</li>
						<li>Autoři hry musí mít práva či licence na všechny části hry, aby splnili licenční podmínky pro veřejné vystavení.</li>
						<li>Hra musí být odevzdaná v termínu, který je vypsán v programu akce.</li>
						<li>Odevzdaná hra musí obsahovat binární soubory hry, několik vhodných screenshotů a krátký popis. Trailer či záznam z gameplaye je vřele vítán.</li>
					</ul>
					<h3>Zadání</h3>
					<ul>
						<li>
							Zadání budou tvořit tři témata a tři modifikátory, přičemž jeden od každého bude zveřejněn během týdne před začátkem akce. Autoři budou muset zapracovat dvě témata a dva modifikátory do svých her. Podrobnosti budou vysvětleny na našem Discordu.
						</li>
					</ul>
					<h3>Pravidla pro hodnocení</h3>
					<ul>
						<li>Hodnocení proběhne celý následující týden po skončení akce na platformě itch.io. Na škále 1-5 budou hodnoceny následující aspekty:</li>
						<ul>
							<li>Použití tématu č. 1</li>
							<li>Použití tématu č. 2</li>
							<li>Použití modifikátoru č. 1</li>
							<li>Použití modifikátoru č. 2</li>
							<li>Zábavnost</li>
							<li>Gameplay</li>
							<li>Originalita</li>
							<li>Smysl</li>
							<li>Grafika</li>
							<li>Hudba a zvuky</li>
						</ul>
						<li>Celkový výsledek bude váženým součtem hodnocení všech aspektů.</li>
					</ul>
					<h3>Ceny</h3>
					<ul>
						<li>Z organizačních důvodů budou ceny rozděleny již na konci akce před začátkem online hlasování.</li>
						<li>Každý z organizátorů si vybere svou oblíbenou hru a autorskému týmu předá nějaké ceny.</li>
						<li>Každý účastník si pak navíc bude moci vybrat jednu hru z balíku kartiček se STEAM kódem.</li>
					</ul>
				</S.KFrame>
			</S.CardContainer>
		</S.SectionContainer>
	</S.Section>
);



export const Rules = () => {
	const { siteConfig } = useDocusaurusContext();
	const context = useDocusaurusContext();

	// main is here just for the local search
	return (
		<Layout description={siteConfig.customFields.description as string} title='Pravidla GameHacku'>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			<main>
				<MainRules />
			</main>
		</Layout>
	);
};

export default Rules;