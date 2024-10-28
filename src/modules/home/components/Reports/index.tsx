import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	infoOwnershipStructure,
	news,
} from '@modules/home/components/Reports/data';

const Reports = () => {
	return (
		<SplitBlocks title="Інформація" titleType="heading" anchor="reports">
			<Accordion title="Інформація про структуру власності">
				<p>
					<strong>ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПРОГРЕС»</strong> не володіє прямо
					або
					опосередковано, самостійно або спільно з іншими особами 10 і більше
					відсотками акцій/часток у статутному капіталі жодного з
					страховиків/перестраховиків, з якими пропонується укласти договір
					страхування (перестрахування
				</p>{' '}
				<br/>
				<p>
					{' '}
					Жоден з страховиків/перестраховиків, з якими пропонується укласти
					договір
					страхування (перестрахування), не володіє прямо або опосередковано,
					самостійно або спільно з іншими особами 10 і більше відсотками
					акцій/часток
					у статутному капіталі <strong>ТОВ «СТРАХОВИЙ БРОКЕР
					«СМАРТПРОГРЕС»</strong>
					.
				</p>{' '}
				<br/>
				<br/>
				<DocumentsList groupList={infoOwnershipStructure}/>
			</Accordion>

			<Accordion title="Відповідальність страхового посередника">
				<p>Договір страхування відповідальності страхових посередників ще не
					укладено, у зв&#39;язку з тим, що ТОВ «СТРАХОВИЙ БРОКЕР
					«СМАРТПРОГРЕС» станом на сьогоднішній день не отримує страхові
					та/або перестрахові премії та страхові та/або перестрахові виплати від
					клієнтів та/або страховиків, та/або перестраховиків.</p>
			</Accordion>

			<Accordion title="Партнери та страхові продукти">
				<p>Розділ в процесі наповнення, оскільки станом на сьогоднішній день
					відсутні укладені договори щодо співпраці із Страховиками.</p>
			</Accordion>

			<Accordion title="Новини">
				<DocumentsList list={news}/>
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
