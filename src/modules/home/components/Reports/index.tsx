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
					<strong>ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПРОГРЕС»</strong> не володіє прямо або
					опосередковано, самостійно або спільно з іншими особами 10 і більше
					відсотками акцій/часток у статутному капіталі жодного з
					страховиків/перестраховиків, з якими пропонується укласти договір
					страхування (перестрахування
				</p>{' '}
				<br />
				<p>
					{' '}
					Жоден з страховиків/перестраховиків, з якими пропонується укласти договір
					страхування (перестрахування), не володіє прямо або опосередковано,
					самостійно або спільно з іншими особами 10 і більше відсотками акцій/часток
					у статутному капіталі <strong>ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПРОГРЕС»</strong>
					.
				</p>{' '}
				<br />
				<p>
					Інформація про наявність договору страхування відповідальності під час
					здійснення посередницької діяльності у сфері страхування (перестрахування):
					Річний ліміт покриття професійної відповідальності, наданий{' '}
					<strong>ПРАТ «СК»</strong> для ТОВ «СТРАХОВИЙ БРОКЕР «СМАРТПРОГРЕС» та
					становить <strong>ХХХ </strong>
					Євро.
				</p>
				<br />
				<br />
				<DocumentsList groupList={infoOwnershipStructure} />
			</Accordion>

			<Accordion title="Партнери та страхові продукти">
				<DocumentsList list={news} />
			</Accordion>

			<Accordion title="Новини">
				<DocumentsList list={news} />
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
