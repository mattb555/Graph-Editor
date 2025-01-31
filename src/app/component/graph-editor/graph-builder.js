import React, { Component, Fragment } from 'react';
import EditEquationNodePanel from './edit-equation-node-panel';
import SeedNode from '../../graph/seed-node';
import EquationNode from '../../graph/equation-node';
import { Button } from '../../elements/button';
import EditSeedNodePanel from './edit-seed-node-panel';
import { Column, Panel, Row } from '../../elements/structure';
import generateEdges from '../../utility/generate-edges';
import ResponseType from '../../api/response-type';
import { deleteNode } from '../../api';
import { AuthContext } from '../../authentication';
import { withRouter } from 'react-router-dom';
import SaveButton from './save-button';
import withMessage from '../../context/message/with-message';
import getProperty from '../../utility/get-property';

class GraphBuilder extends Component {

    buildGraph = () => {
        const graph = this.props.graph;
        try {
            this._addEdges(graph);
            graph.populateNodesWithEquationData();
            graph.calculateEquations();
        } catch(e) {
            alert(e.message);
        }
        this.props.updateData(graph);
    };

    addNode = (node) => {
        const graph = this.props.graph;
        try {
            graph.addNode(node);
        } catch(e) {
            alert(e.message);
        }
        this.props.updateData(graph);
    };

    _addEdges = (graph) => {
        for(let node of graph.edges) {
            if(node.node instanceof EquationNode) {
                graph.addEdges(generateEdges(node.node));
            }
        }
    };

    updateNodeByKey = (uuid) => (key, value) => {
        const graph = this.props.graph;
        const node = graph.getNodeByUuid(uuid);
        node[key] = value;
        this.props.updateGraph(graph);
    };

    removeNode = (uuid) => () => {
        deleteNode({uuid}).then(result => {
            switch(result.type) {
                case ResponseType.SUCCESS:
                    const graph = this.props.graph;
                    graph.removeNodeWithUuid(uuid);
                    this.props.updateData(graph);
                    break;
                case ResponseType.AUTHENTICATION_FAILURE:
                    // Todo: find a better way to handle logout on auth failure
                    this.context.logout();
                    this.props.history.push('/login');
                    break;
                default:
                    console.log('Unhandled error');
            }
        });
    };

    makeSeedNode = () => {
        this.addNode(new SeedNode());
    };

    makeEquationNode = () => {
        this.addNode(new EquationNode());
    };

    displayEditNodePanels = () => {
        const {graph} = this.props;
        if(!graph.edges.length) {
            return this.displayNoNodesMessage();
        }
        return graph.edges.map(
            node => {
                return node.node instanceof SeedNode
                    ? <EditSeedNodePanel
                        key={node.node.uuid}
                        node={node.node}
                        updateNode={this.updateNodeByKey(node.node.uuid)}
                        removeNode={this.removeNode(node.node.uuid)}
                    />
                    : <EditEquationNodePanel
                        key={node.node.uuid}
                        node={node.node}
                        updateNode={this.updateNodeByKey(node.node.uuid)}
                        removeNode={this.removeNode(node.node.uuid)}
                    />;
            },
        );
    };

    displayNoNodesMessage = () =>
        <p className={'font-minus-one italic'}>
            Add nodes or import a csv to begin.</p>;

    render() {
        const {model, message} = this.props;
        return (
            <Fragment>
                {message()}
                <Row>
                    <Column span={6} sSpan={6}>
                        <Button
                            onClick={this.makeSeedNode}
                        >
                            Add Seed Node
                        </Button>
                        {' '}
                        <Button
                            onClick={this.makeEquationNode}
                        >
                            Add Equation Node
                        </Button>
                        {' '}
                        {getProperty(model.id) ? <SaveButton
                            handleSave={this.props.saveNodes}
                        /> : null}
                    </Column>
                    <Column span={6} sSpan={6} className={'align-right'}>
                        <Button
                            type={'affirmative'} onClick={this.buildGraph}
                        >
                            Build Graph
                        </Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Panel className={'graph-editor'}>
                            {this.displayEditNodePanels()}
                        </Panel>
                    </Column>
                </Row>
            </Fragment>
        );
    }
}

GraphBuilder.contextType = AuthContext;
const GraphBuilderWrapped = withRouter(withMessage(GraphBuilder));

export default GraphBuilderWrapped;
