import {importDoc} from '@utils/formatters';
import {type IDocumentsList, IDocumentsListGroup} from '@utils/types';

export const infoOwnershipStructure: IDocumentsListGroup[] = [
	{
		groupTitle: '2024',
		list: [
			{
				title: 'Інформація про структуру власності',
				link: importDoc('Struktura.pdf'),
			},
		],
	},
];

export const news: IDocumentsList[] = [];

export const archiveInfo: IDocumentsList[] = [{
	title: 'Витяг про включення до державного реєстру страхових та' +
		' перестрахових брокерів',
	link: importDoc('Vytiag_SP.pdf'),
},];
