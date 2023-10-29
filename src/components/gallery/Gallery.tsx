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
								<p>GameJam s názvem GameHack je v pořadí první akcí pořádanou na FITu, nicméně k dispozici je i web naší sesterské akce <a href="https://gamejam.aphgames.cz">GameJam FIT</a>, který proběhl v minulosti již třikrát.</p>
							</S.KFrame>
						</S.Vertical>
					</S.SectionContainer>
				</S.Section>
			</main>
		</Layout>
	);
};

export default Gallery;