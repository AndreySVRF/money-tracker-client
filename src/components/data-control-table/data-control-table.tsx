import { FC, ReactNode } from 'react';
import { PencilIcon, TrashIcon } from '../../assets';
import { Button, ButtonVariant, Table } from '../../ui';
import { IDataTableItems } from './types/types.ts';

interface IDataControlTableProps {
  data: IDataTableItems[];
  header?: string[];
  handleEdit?: (id: number) => void;
  handleRemove?: (id: number) => void;
  otherActions?: ReactNode;
}

const DataControlTable: FC<IDataControlTableProps> = ({
  data,
  header,
  handleEdit,
  handleRemove,
  otherActions
}) => {
  const renderTableActions = (id: number) => {
    return (
      <div className="flex justify-end gap-4">
        {otherActions}

        {handleEdit && (
          <Button className="p-2" onClick={() => handleEdit(id)}>
            <PencilIcon className="h-4 w-4" />
          </Button>
        )}

        {handleRemove && (
          <Button
            className="p-2"
            variant={ButtonVariant.Danger}
            onClick={() => handleRemove(id)}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  };

  const headerDefault = ['Title', ''];
  const tableHeader = header?.length ? header : headerDefault;

  const tableRows = data?.map((dataItem) =>
    dataItem.other?.length
      ? [dataItem.title, ...dataItem.other, renderTableActions(dataItem.id)]
      : [dataItem.title, renderTableActions(dataItem.id)]
  );

  return <Table header={tableHeader} rows={tableRows} />;
};

export { DataControlTable };
