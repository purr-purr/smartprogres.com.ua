import Image from 'next/image';

import { COMPANY_CATCHPHRASE } from '@utils/const';

import s from './Intro.module.scss';

import INTRO_IMAGE from '@modules/home/assets/intro-poster.png';

const Intro = () => {
	return (
		<section className={s.container}>
			<div className={s.poster}>
				<Image src={INTRO_IMAGE} alt="Home intro" />
			</div>
			<article className={s.info}>
				<h1 className={s.infoTitle}>
					Ваш надійний <br /> провідник у світі <br /> страхування
				</h1>
				<p className={s.infoDesc}>{COMPANY_CATCHPHRASE}</p>
			</article>
		</section>
	);
};

export default Intro;
