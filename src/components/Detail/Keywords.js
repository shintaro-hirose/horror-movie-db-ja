import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import loadingImage from '../../images/sheep-2.png';

//redux
import { connect } from 'react-redux';
import { searchByKeyword } from '../../redux/actions/dataActions';


const useStyles = makeStyles(() => ({
    root:{
        width: '80%',
        margin: '0 auto',
        textAlign: 'center'
    },
    chip:{
        margin: '12px 8px 0 0',
    },
    loading: {
        width: '120px',
        height: '120px',
      },
}));


function Keywords(props) {
    const keywords = props.keywords;
    const classes = useStyles();
    const handleClick = (item) => {
        props.searchByKeyword(item.id,item.name,props.history);
    }
    return (
        <div className={classes.root}>
            {
                keywords ? (
                    keywords.length === 0 ? (
                        <small>キーワードは設定されていません</small>
                    ) : (
                        keywords.map((item,index) =>{
                            return(
                                <Chip label={item.name} key={index} variant="default" className={classes.chip} onClick={() => handleClick(item)}/>
                            )
                        }) 
                    )
                ) : (
                    <img
                    src={loadingImage}
                    alt="loading"
                    className={classes.loading}
                    />
                )
            }
        </div>
    )
}

Keywords.propTypes = {
    searchByKeyword: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = () => ({
  });
  
  export default connect(
      mapStateToProps,
    { searchByKeyword }
    )(withRouter(Keywords));