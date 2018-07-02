import * as React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import {createStyles, Theme, WithStyles} from '@material-ui/core';
import {Page} from '../../../services/Rest.service';
import TableRow from '@material-ui/core/TableRow/';
import TableFooter from '@material-ui/core/TableFooter';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';

const styles = (theme: Theme) => createStyles({
  root: {
    minWidth: 300,
    top: 64,
  },
  pagination: {
    // width: 'calc(100% - 62px)',
  },
});

interface PaginationProps {
  page: Page;
}

interface PaginationActions {
  onChangePage(event: any, page: number): void;
}

class Pagination extends React.Component<PaginationProps & PaginationActions & WithStyles<typeof styles>> {

  constructor(props: PaginationProps & PaginationActions & WithStyles<typeof styles>) {
    super(props);
  }

  handleFirstPageButtonClick = (event: any) => {
    this.props.onChangePage(event, 1);
  };

  handleBackButtonClick = (event: any) => {
    this.props.onChangePage(event, this.props.page.page - 1);
  };

  handleNextButtonClick = (event: any) => {
    this.props.onChangePage(event, this.props.page.page + 1);
  };

  handleLastPageButtonClick = (event: any) => {
    this.props.onChangePage(event, this.props.page.totalPages);
  };

  Actions = () => (
    <div className={this.props.classes.root}>
      <IconButton
        onClick={this.handleFirstPageButtonClick}
        disabled={this.props.page.page === 1}
        aria-label="First Page"
      >
        <FirstPageIcon/>
      </IconButton>
      <IconButton
        onClick={this.handleBackButtonClick}
        disabled={this.props.page.page === 1}
        aria-label="Previous Page"
      >
        <KeyboardArrowLeft/>
      </IconButton>
      <IconButton
        onClick={this.handleNextButtonClick}
        disabled={this.props.page.page >= this.props.page.totalPages}
        aria-label="Next Page"
      >
        <KeyboardArrowRight/>
      </IconButton>
      <IconButton
        onClick={this.handleLastPageButtonClick}
        disabled={this.props.page.page >= this.props.page.totalPages}
        aria-label="Last Page"
      >
        <LastPageIcon/>
      </IconButton>
    </div>
  );

  render() {
    return (
      <Table className={this.props.classes.pagination}>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={this.props.page.totalResults}
              rowsPerPage={20}
              page={this.props.page.page - 1}
              rowsPerPageOptions={[20]}
              onChangePage={this.props.onChangePage}
              ActionsComponent={this.Actions}
            />
          </TableRow>
        </TableFooter>
      </Table>


    );
  }
}

export default withStyles(styles)(Pagination);
