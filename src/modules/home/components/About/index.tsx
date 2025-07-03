import { FC, type ReactNode } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import SplitBlocks from '@modules/common/components/SplitBlocks';

const About: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	return (
		<section id="about">
			<BlockTitle title="Про компанію" />

			<SplitBlocks
				title={`Про ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПРОГРЕС»`}
				titleType="text"
			>
				<p>
					ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «СТРАХОВИЙ БРОКЕР «СМАРТПРОГРЕС»
				</p>
				<p> LIMITED LIABILITY COMPANY «INSURANCE BROKER «SMARTPROGRES»</p>
				<p>
					<b>Місцезнаходження:</b>
				</p>
				<p>Україна, 03056, місто Київ, вул. Борщагівська, 154</p>
				<p>
					<b>Контактна інформація:</b>
				</p>
				<p>+380(63)402-16-76</p>
				<p>llcisb@ukr.net</p>
				<p>
					<b>Директор</b>
				</p>
				<p>Габіда Дмитро Миколайович</p>
				<p>
					ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПРОГРЕС» у відповідності до рішення
					Національного Банку України № 21/365-рк від 11.04.2025 включено до реєстру
					страхових посередників. Реєстраційний в реєстрі страхових посередників №
					00016547.
				</p>
				<a
					href="https://kis.bank.gov.ua/search-fu"
					target="_blank"
					rel="noreferrer"
				>
					Пошук у реєстрі страхових посередників
				</a>{' '}
				<br /> <br />
				<a
					href="https://bank.gov.ua/ua/consumer-protection/citizens-appeals"
					target="_blank"
					rel="noreferrer"
				>
					Звернутись до Національного банку України
				</a>
				<br /> <br />
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
