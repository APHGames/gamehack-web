import DocusaurusHead from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useMemo } from 'react';
import Layout from '@theme/Layout';

import * as S from './Gallery.styles';
import { InfiniteLooper } from './Looper';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const Gallery = () => {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout description={siteConfig.customFields.description as string} title='Galerie předchozích výtvorů'>
			<DocusaurusHead>
				<link rel="canonical" href={siteConfig.url} />
			</DocusaurusHead>
			<main>
				<S.Section>
					<S.SectionContainer>
						<S.Vertical>
							<h2>Galerie</h2>
							<S.KFrame>
								<p>Předchozí ročníky je možno shlédnout na webu původní akce <a href="https://gamejam.aphgames.cz">GameJam FIT</a>, který proběhl v minulosti již třikrát.</p>
							</S.KFrame>
							<S.Space $top={20}>
								<h3>Sestřih velikonočního GameJamu 2023</h3>
								<iframe width="560" height="315" src="https://www.youtube.com/embed/3QxhGMEfHzE?si=4V4C0IpJXfCOuJ0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</S.Space>
							<S.Space $top={20}>
							<h3>Sestřih podzimního GameJamu 2022</h3>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/fQSts96TT9A?si=whomPZBpvFpApjYi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</S.Space>
						</S.Vertical>
					</S.SectionContainer>
				</S.Section>
			</main>
		</Layout>
	);
};

export default Gallery;