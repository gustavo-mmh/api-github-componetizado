import React, { useState } from "react";
import { useStyles } from "./styled.js"
import useGithub from "../../hooks/github-hooks";
import AppBar from '../AppBar/index';
import Toolbar from '../Toolbar/index';
import IconButton from '../Icon/IconButton/index';
import GithubIcon from '../Icon/GithubIcon/index';
import SearchIcon from '../Icon/SearchIcon/index';
import Typography from '../Typography/index';
import InputBase from '../InputBase/index';


export default function SearchAppBar() {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                    >
                        <GithubIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Api Github
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Pesquisar…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onChange={(event) => setUsernameForSearch(event.target.value)}
                            onKeyUp={submitGetUser}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
