  import * as React from 'react';
  import PropTypes from 'prop-types';
  import { alpha } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TablePagination from '@mui/material/TablePagination';
  import TableRow from '@mui/material/TableRow';
  import TableSortLabel from '@mui/material/TableSortLabel';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Paper from '@mui/material/Paper';
  import Checkbox from '@mui/material/Checkbox';
  import IconButton from '@mui/material/IconButton';
  import Tooltip from '@mui/material/Tooltip';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import Switch from '@mui/material/Switch';
  import DeleteIcon from '@mui/icons-material/Delete';
  import FilterListIcon from '@mui/icons-material/FilterList';
  import { visuallyHidden } from '@mui/utils';

  import { v4 as uuidv4 } from 'uuid';
  import { useRecoilStateLoadable, useSetRecoilState } from 'recoil';
  import TableSkeleton from './TableLoader';
  import Stocks from '../product/stocks';
  import {CancelIcon,OutForDeliveryIcon,DoneDeliveryIcon,DispatchIcon,ViewIcon,EditIcon} from '../../assets/Icons/icons'
  import useConfirmation from '../../Hooks/useConfirmation';
  import {ConfirmationPopup} from '../index'
import { sliderAtom } from '../../store/slider.atom';


  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }



  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort ,headCells} =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align='left'
              // align={headCell.numeric ? 'right' : 'left'}
              // style={{border:'1px solid black'}}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
          <TableCell key={uuidv4()}>operation</TableCell>
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  function EnhancedTableToolbar(props) {
    const { numSelected,tableName } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {tableName}
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  export default function EnhancedTable({rowState,headCells,tableName,rowKeys,onView,editRow}) {

    const [rowsLoadable, setRowsLoadable] = useRecoilStateLoadable(rowState);
    const { showConfirmation, confirm, cancel, itemIdToDelete } = useConfirmation();
    const setShowSlider = useSetRecoilState(sliderAtom)

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('Products');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = rows.map((n) => n.id);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };

  

    const handleClick = (event, id) => {
      const checkboxClicked = event.target.tagName === 'INPUT' && event.target.type === 'checkbox';
    
      if (checkboxClicked) {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
      }else{
        console.log('other thing')
      }
    };
    

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    

    const rows = React.useMemo(() => {
        if (rowsLoadable.state === 'hasValue') {
          return rowsLoadable.contents;
        }
        return [];
    },[rowsLoadable]);

    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
    

    const visibleRows = React.useMemo(
      () =>
        stableSort(rows, getComparator(order, orderBy)).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [order, orderBy, page, rowsPerPage,rows],
      
    );


  const handleEdit = (event,row)=>{
    console.log(1)
    event.preventDefault()
    if (tableName==='Products'){
      setShowSlider({product:true,order:false})
      console.log(2)
    }else{
      setShowSlider({product:false,order:true})
      console.log(3)
    }
    editRow(row)
  }

  const deleteIndividualItem = (event, id) => {
    event.preventDefault();
    confirm(id);
  };

  const handleConfirmDelete = () => {
    const updatedRows = rows.filter(row => row.id !== itemIdToDelete);
    setRowsLoadable(updatedRows);
    cancel(); 
  };

  const handleCancelDelete = () => {
    cancel();
  };

    switch(rowsLoadable.state){
      case 'hasError':
        console.log(rowsLoadable)
        return <div>Some error ..... </div>
      case 'loading':
        console.log('load')
        return <TableSkeleton rows={6} cols={6}/>
      
      case 'hasValue':
        return (
          <>
          {showConfirmation && (
              <ConfirmationPopup
                message="Are you sure you want to delete this item?"
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
              />
          )}
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
              <EnhancedTableToolbar numSelected={selected.length} tableName={tableName}/>
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {visibleRows.map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;
      
                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                          sx={{ cursor: 'pointer' }}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            // style={{border:'1px solid black'}}

                          >
                             <div className='flex items-center '>
                                <div className='w-16 h-16  flex-shrink-0'><img className="h-full w-full rounded-full bg-gray-200" src={row.image} alt="product-image" /></div>
                                <span className="ml-4">{row.title.substr(0,8)}</span>
                              </div>
                          </TableCell>
                          {rowKeys.map((rkey)=>(
                            <TableCell>
                             <div>{RenderCell(row,rkey)}</div>
                            </TableCell>
                          ))}
                          <TableCell key={uuidv4()}>

                            <div className='flex gap-2 items-center relative '>
                              <div
                              onClick={(e)=>{e.preventDefault()
                                          onView(row.id)}}
                               className='inline-block transition-transform transform-gpu hover:translate-x-1 hover:translate-y-1'><ViewIcon size={18}/></div>

                              <div 
                              onClick={(e)=>{
                                e.preventDefault()
                                handleEdit(e,row)
                              }}
                              className='inline-block transition-transform transform-gpu hover:translate-x-1 hover:translate-y-1'><EditIcon size={20}/></div>
                              <div 
                              className='inline-block transition-transform transform-gpu hover:translate-x-1 hover:translate-y-1'>
                                 
                                <DeleteIcon onClick={(e)=>deleteIndividualItem(e,row.id)}></DeleteIcon></div>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
            <FormControlLabel
              control={<Switch checked={dense} onChange={handleChangeDense} />}
              label="Dense padding"
            />
          </Box>
          </>
        );
      default:
      return <></>
    }
  }

const RenderCell = (row,rkey)=>{
  let CellComp = row[rkey];
  if (rkey === 'available') {
    CellComp = <Stocks available={row.available} total={row.total} />;
  } 
  else if (rkey === 'status'){
    CellComp =  <span className={`${row[rkey]==='active'?'bg-green-200 text-green-700' : 'bg-red-200 text-red-800'} p-2 rounded-lg `}>{row[rkey]}</span>
  }else if(['price','revenue'].includes(rkey)){
    CellComp = '$'+row[rkey]
  }else if(rkey==='dileveryStatus'){
      if(row[rkey]==='Cancelled'){
        CellComp = <span className='text-red-800 bg-red-200 p-2 rounded-md flex items-center justify-center gap-2'>{row[rkey]}<CancelIcon color='red'/></span>
      }else if(row[rkey]==='Out for delivery'){
        CellComp = <span className='text-blue-800 bg-blue-200 p-2 rounded-md flex items-center justify-center gap-2'>{row[rkey]}<OutForDeliveryIcon size={20} color='blue'/></span>
      }else if(row[rkey]==='Delivered'){
        CellComp = <span className='text-green-800 bg-green-200 p-2 rounded-md flex items-center justify-center gap-2'>{row[rkey]}<DoneDeliveryIcon color='green'/></span>
      }else{
        CellComp = <span className='text-yellow-800 bg-yellow-200 p-2 rounded-md flex items-center justify-center gap-2'>{row[rkey]}<DispatchIcon color='rgb(133 77 14)'/></span>
      }
  }

  return  CellComp

}

