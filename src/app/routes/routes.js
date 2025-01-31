import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
} from 'react-router-dom';
import GraphEditorWithMessage from '../component/graph-editor';
import GraphList from '../component/graph-list';
import { Column, Row } from '../elements/structure';
import { AuthConsumer } from '../authentication';
import { Button, LinkButton } from '../elements/button';
import LoginWithMessage from '../component/login';
import Register from '../component/register';

const AuthButton = () =>
    <AuthConsumer>
        {
            ({isAuth, logout}) => !isAuth
                ? <Fragment>
                    <LinkButton to="/register">Register</LinkButton>
                    {' '}
                    <LinkButton
                        type={'affirmative'} to="/login"
                    >Login</LinkButton>
                </Fragment>
                : <Button onClick={logout}>Logout</Button>
        }
    </AuthConsumer>
;

const Routes = () =>
    <Router>
        <div>
            <Row>
                <Column>
                    <div className={'main-header'}>
                        <Row className={'border-bottom'}>
                            <Column span={6}>
                                <Link to="/">Model List</Link>
                                {' | '}
                                <Link to="/graph-editor">Model Editor</Link>
                            </Column>
                            <Column span={6} className={'align-right'}>
                                <AuthButton/>
                            </Column>
                        </Row>
                    </div>
                </Column>
            </Row>
            <Route path="/" exact component={GraphList}/>
            <Route
                path="/login" render={() =>
                <AuthConsumer>
                    {({isAuth}) => isAuth ?
                        <Redirect to="/"/>
                        : <LoginWithMessage/>
                    }
                </AuthConsumer>}
            />
            <Route path="/register" component={Register}/>
            <Route
                path="/graph-editor/:id?"
                render={(props) => <GraphEditorWithMessage {...props} />}
            />
        </div>
    </Router>
;

export default Routes;
