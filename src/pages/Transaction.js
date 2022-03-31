import * as React from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  useGridApiRef,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem
} from '@mui/x-data-grid-pro';
import { randomId } from '@mui/x-data-grid-generator';
import { Container } from '@mui/material';
import useTransactionStore from '../hooks/useTransactionStore';
import accountTypes from '../_mocks_/categories';
import Page from '../components/Page';

function EditToolbar(props) {
  const { apiRef } = props;

  const handleClick = () => {
    const id = randomId();
    apiRef.current.updateRows([{ id, isNew: true }]);
    apiRef.current.startRowEditMode({ id });

    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1
      });

      apiRef.current.setCellFocus(id, 'name');
    });
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add transaction
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired
  }).isRequired
};

export default function FullFeaturedCrudGrid() {
  const apiRef = useGridApiRef();
  const [transactions, saveTransaction, deleteTransaction] = useTransactionStore();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.startRowEditMode({ id });
  };

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();
    await apiRef.current.stopRowEditMode({ id });
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: 'delete' }]);
    deleteTransaction(id);
  };

  const handleCancelClick = (id) => async (event) => {
    event.stopPropagation();
    await apiRef.current.stopRowEditMode({ id, ignoreModifications: true });

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: 'delete' }]);
    }
  };

  const processRowUpdate = async (newRow) => {
    saveTransaction(newRow);
    return { ...newRow, isNew: false };
  };

  const columns = [
    { field: 'date', headerName: 'Date', width: 180, editable: true, type: 'date' },
    { field: 'name', headerName: 'Description/TransactionName', width: 360, editable: true },
    {
      field: 'total',
      headerName: 'Amount',
      type: 'number',
      width: 180,
      editable: true,
      valueFormatter: (params) => {
        const { value } = params;
        const isNegative = value < 0;
        const valueFormatted = Math.abs(Math.round(value * 100) / 100)
          .toFixed(2)
          .toLocaleString();
        return isNegative ? `$(${valueFormatted})` : `$${valueFormatted}`;
      }
    },
    {
      field: 'category',
      headerName: 'Category',
      type: 'singleSelect',
      valueOptions: _.keys(accountTypes),
      width: 220,
      editable: true
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === 'edit';

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />
        ];
      }
    }
  ];

  return (
    <Page title="Transactions | Minimal-UI">
      <Container>
        <Box
          sx={{
            height: 500,
            width: '100%',
            '& .actions': {
              color: 'text.secondary'
            },
            '& .textPrimary': {
              color: 'text.primary'
            }
          }}
        >
          <DataGridPro
            rows={_.values(transactions)}
            columns={columns}
            apiRef={apiRef}
            editMode="row"
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            components={{
              Toolbar: EditToolbar
            }}
            componentsProps={{
              toolbar: { apiRef }
            }}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Container>
    </Page>
  );
}
