import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    zIndex: 100,
    justifyContent: 'center',
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function SearchBar(props) {
  const [keyword,setKeyword] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  const handleSubmit = () => {
    if(keyword.trim() === '') return;
    props.history.push(`/search/${encodeURI(keyword)}`)
  }

  return (
    <div>
    <div className={classes.search}>
      <form onSubmit={handleSubmit}>
        <div className={classes.searchIcon} >
          <SearchIcon type="submit" onClick={handleSubmit}/>
        </div>
        <InputBase
        placeholder="映画名、人物名で検索..."
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        fullWidth={true}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'search' }}
        />
      </form>
  </div>
  </div>
);
}
export default withRouter(SearchBar);